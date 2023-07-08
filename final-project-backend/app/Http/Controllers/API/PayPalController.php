<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Omnipay\Omnipay;
use App\Models\PaymentPaypal;

class PayPalController extends Controller
{
    private $gateway;

    public function __construct()
    {
        $this->gateway = Omnipay::create('PayPal_Rest');
        $this->gateway->setClientId(env('PAYPAL_CLIENT_ID'));
        $this->gateway->setSecret(env('PAYPAL_SECRET'));
        $this->gateway->setTestMode(true);
    }

    public function pay(Request $request)
    {
        try {
            $response = $this->gateway->purchase([
                'amount' => $request->amount,
                'currency' => env('PAYPAL_CURRENCY'),
                'returnUrl' => route('paypal.success'),
                'cancelUrl' => route('paypal.error')
            ])->send();

            if ($response->isRedirect()) {
                return response()->json([
                    'redirectUrl' => $response->getRedirectUrl(),
                    'paymentId' => $response->getTransactionReference(),
                ]);
            } else {
                return response()->json([
                    'error' => $response->getMessage()
                ]);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'error' => $th->getMessage()
            ]);
        }
    }

    public function success(Request $request)
    {
        $paymentId = $request->input('paymentId');
        $payment = PaymentPaypal::where('transaction_reference', $paymentId)->first();

        if ($payment) {
            return response()->json([
                'success' => true,
                'message' => 'Payment is already processed.',
            ]);
        }
       
        $transaction = $this->gateway->completePurchase([
            'payerId' => $request->input('PayerID'),
            'transactionReference' => $paymentId,
        ])->send();
       
        if ($transaction->isSuccessful()) {
            return $this->storePayment($request, $paymentId);
        } else {
            return response()->json([
                'error' => $transaction->getMessage(),
            ]);
        }
    }

    public function error(Request $request)
    {
        return redirect('http://localhost:3000/error');
    }

    private function storePayment(Request $request, $transactionReference)
    {
        dd($request->all());
        dd($transactionReference);
        // $payment = new PaymentPaypal();
        // $payment->project_id = $request->input('project_id');
        // $payment->client_id = $request->input('client_id');
        // $payment->amount = $request->input('amount');
        // $payment->transaction_reference = $transactionReference;
        // $payment->save();

        return  redirect('http://localhost:3000');
        // response()->json([
        //     'success' => true,
        //     'paymentId' => $transactionReference,
        // ]);
    }
}
