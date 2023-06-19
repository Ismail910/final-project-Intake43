<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Services\FatoorahServices;

class FatoorahController extends Controller
{

    private $fatoorahServices;

public function __construct(FatoorahServices $fatoorahServices)
{
    // return "hhhhhh";
    $this->fatoorahServices = $fatoorahServices;
}


    public function payOrder()
    {

        $data = [
            'CustomerName' => 'New user',
            'NotificationOption' => 'LNK',
            'MobileCountryCode' => '+966',
            'CustomerMobile' => '0000000000',
            'DisplayCurrencyIso' => 'SAR',
            'CustomerEmail' => 'arabiccreative80@gmail.com',
            'InvoiceValue' => '100',
            'Language' => 'en',
            'CallBackUrl' => 'http://google.com',
            'ErrorUrl' => 'http://youtube.com',
        ];
        $this->fatoorahServices->sendPayment($data);

   }
}