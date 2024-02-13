{block name='page_content'}
    <div class="alert alert-success" role="alert">
        {l s='Thank you for your kindness' d='Modules.CustomBankPayment'}
    </div>
    <div>
        {l s='Thank you for your payment.' d='Modules.CustomBankPayment'}
    </div>
    <div>
        {l s='Order Reference: ' d='Modules.CustomBankPayment'}{$paymentDetails.order_reference}
    </div>
    <div>
        {l s='Amount Paid: ' d='Modules.CustomBankPayment'}{$paymentDetails.amount_paid} {l s='USD' d='Modules.CustomBankPayment'}
    </div>
    <div>
        {l s='Payment Date: ' d='Modules.CustomBankPayment'}{$paymentDetails.payment_date}
    </div>
    <div>
        {l s='Uploaded Payment Slip: ' d='Modules.CustomBankPayment'}{$paymentSlip}
    </div>
    {*
    Additional details or instructions can be added here
    *}
{/block}
