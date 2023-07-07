<?php

// namespace App\Http\Controllers\API;

// use App\Http\Controllers\Controller;
// use Illuminate\Http\Request;
// use Srmklive\PayPal\Services\ExpressCheckout;
// use App\Models\Payment;
// use Omnipay\Omnipay;

// class PayPalController extends Controller
// {
//     private $gateway;

//     public function __construct()
//     {
//         $this->gateway = Omnipay::create('PayPal_Rest');
//         $this->gateway->setClientId(env('PAYPAL_CLIENT_ID'));
//         $this->gateway->setSecret(env('PAYPAL_CLIENT_SECRET'));
//         $this->gateway->setTestMode(true);
//     }

//     public function pay(Request $request)
//     {
//         try {
//             $response = $this->gateway->purchase([
//                 'amount' => $request->amount,
//                 'currency' => env('PAYPAL_CURRENCY'),
//                 'returnUrl' => url('success'),
//                 'cancelUrl' => url('error')
//                 ])->send();

//                 if ($response->isRedirect()) {
//                     return response()->json([
//                         'redirectUrl' => $response->getRedirectUrl(),
//                         'paymentId' => $response->getTransactionReference()
//                     ]);
//                 } else {
//                     return response()->json([
//                         'error' => $response->getMessage()
//                     ]);
//                 }
//             } catch (\Throwable $th) {
//                 return response()->json([
//                     'error' => $th->getMessage()
//                 ]);
//             }
//         }
        
//         public function success(Request $request)
//         {
//             if ($request->input('paymentId') && $request->input('PayerID')) {
//                 $transaction = $this->gateway->completePurchase([
//                     'payer_id' => $request->input('PayerID'),
//                     'transactionReference' => $request->input('paymentId')
//                 ]);
        
//                 $response = $transaction->send();
        
//                 if ($response->isSuccessful()) {
//                     $arr = $response->getData();
        
//                     $payment = new Payment();
//                     $payment->payment_id = $arr['id'];
//                     $payment->payer_id = $arr['payer']['payer_info']['payer_id'];
//                     $payment->payer_email = $arr['payer']['payer_info']['email'];
//                     $payment->amount = $arr['transactions'][0]['amount']['total'];
//                     $payment->currency = env('PAYPAL_CURRENCY');
//                     $payment->payment_status = $arr['state'];
        
//                     // Additional fields
//                     $payment->project_id = $request->input('project_id');
//                     $payment->project_price = $request->input('project_price');
//                     $payment->client_id = $request->input('client_id');
        
//                     $payment->save();
        
//                     return 'Payment is Successful. Your Transaction Id is: ' . $arr['id'];
//                 } else {
//                     return $response->getMessage();
//                 }
//             } else {
//                 return 'Payment declined!!';
//             }
//         }
        
        
//         public function error()
//         {
//             return response()->json('User declined the payment!');
//         }
//     }          
///////////////////////////////


namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Omnipay\Omnipay;
use App\Models\Payment;

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
                'paymentId' => $response->getTransactionReference()
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
        $payment = Payment::where('transaction_reference', $paymentId)->first();

        if ($payment) {
            return response()->json([
                'success' => true,
                'message' => 'Payment is already processed.',
            ]);
        }

        $transaction = $this->gateway->fetchTransaction([
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
        return response()->json([
            'error' => 'Payment declined!',
        ]);
    }

    private function storePayment(Request $request, $transactionReference)
    {
        $payment = new Payment();
        $payment->project_id = $request->input('project_id');
        $payment->client_id = $request->input('client_id');
        $payment->amount = $request->input('amount');
        $payment->transaction_reference = $transactionReference;
        $payment->save();

        return response()->json([
            'success' => true,
            'paymentId' => $transactionReference,
        ]);
    }
}
