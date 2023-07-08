<?php

namespace App\Http\Controllers\API;
use App\Models\Project;
use Illuminate\Support\Facades\Session;
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
           
            $amount =$request->amount;
            $project_id = $request->project_id;
            $user_id = $request->user_id;

                
            $response = $this->gateway->purchase([
                'amount' => $request->amount,
                'currency' => env('PAYPAL_CURRENCY'),
                'returnUrl' => url('/api/paypal/success').'?amount='.$amount.'&project_id='.$project_id.'&user_id='.$user_id,
                'cancelUrl' => route('paypal.error')
            ])->send();

            if ($response->isRedirect()) {
               
                return response()->json([
                        'redirectUrl' => $response->getRedirectUrl(),
                        // 'paymentId' => $response->getTransactionReference(),
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

        if($request->input('paymentId') && $request->input('PayerID')){
            $transaction = $this->gateway->completePurchase(array(
                'payerId'=> $request->input('PayerID'),
                'transactionReference' => $request->input('paymentId')
            ));

            
            $response = $transaction->send();
            if($response->isSuccessful()){
                $arr = $response->getData();
                $payment = new PaymentPaypal();
                    $payment->project_id =$request->project_id;
                    $payment->client_id = $request->user_id;
                    $payment->amount = $request->amount;
                    $payment->transaction_reference = $request->paymentId;
                    $payment->save();

                    $project = Project::findOrFail( $payment->project_id);
                    $project->is_payed = true;
                    $project->update();

                    return redirect('http://localhost:3000/');
               
            }
            else{
                return $response->getMessage();
            }

        }
        else{
            return redirect('http://localhost:8000/error');
        }
    }

    
       
     

    public function error(Request $request)
    {
        return redirect('http://localhost:3000/error');
    }

    // private function storePayment(Request $request, $transactionReference)
    // {
    //     dd($request->all());
    //     dd($transactionReference);
    //     // $payment = new PaymentPaypal();
    //     // $payment->project_id = $request->input('project_id');
    //     // $payment->client_id = $request->input('client_id');
    //     // $payment->amount = $request->input('amount');
    //     // $payment->transaction_reference = $transactionReference;
    //     // $payment->save();

    //     return  redirect('http://localhost:3000');
    //     // response()->json([
    //     //     'success' => true,
    //     //     'paymentId' => $transactionReference,
    //     // ]);
    // }







//     //////////////////////////////
//     public function pay(Request $request)
//     {
//         try {
//             $data = [
//                 'amount' => $request->amount,
//                 'project_id' => $request->project_id,
//                 'user_id' => $request->user_id,
//             ];
    
//             $query = http_build_query($data);
//             $returnUrl = route('paypal.success') . '?' . $query;
    
//             $request->session()->put('payment_data', $data);
    
//             $response = $this->gateway->purchase([
//                 'amount' => $request->amount,
//                 'currency' => env('PAYPAL_CURRENCY'),
//                 'returnUrl' => $returnUrl,
//                 'cancelUrl' => route('paypal.error')
//             ])->send();
    
//             if ($response->isRedirect()) {
//                 return response()->json([
//                     'redirectUrl' => $response->getRedirectUrl(),
//                     'paymentId' => $response->getTransactionReference(),
//                 ]);
//             } else {
//                 return response()->json([
//                     'error' => $response->getMessage()
//                 ]);
//             }
//         } catch (\Throwable $th) {
//             return response()->json([
//                 'error' => $th->getMessage()
//             ]);
//         }
//     }
    
//     public function success(Request $request)
//     {
//         dd($request->all());
//         $paymentId = $request->input('paymentId');
//         $payment = PaymentPaypal::where('transaction_reference', $paymentId)->first();
    
//         if ($payment) {
//             return response()->json([
//                 'success' => true,
//                 'message' => 'Payment is already processed.',
//             ]);
//         }
    
//         $projectId = $request->query('project_id');
//         $userId = $request->query('user_id');
//         $amount = $request->query('amount');
        
        
//         dd($amount);
//         if ($projectId && $userId && $amount) {
//             return $this->storePayment($projectId, $userId, $amount, $paymentId);
//         } else {
//             return response()->json([
//                 'error' => 'Incomplete payment data.',
//             ]);
//         }
//     }
    
    
// private function storePayment($project_id, $user_id, $amount, $paymentId)
// {
//     $payment = new PaymentPaypal();
//     $payment->project_id = $project_id;
//     $payment->client_id = $user_id;
//     $payment->amount = $amount;
//     $payment->transaction_reference = $paymentId;
//     $payment->save();

//     // اضافة الكود الخاص بالرجوع إلى الصفحة الرئيسية في الفرنت إذا كنت ترغب في ذلك

//     return response()->json([
//         'success' => true,
//         'message' => 'Payment processed successfully.',
//     ]);
// }

    
}
