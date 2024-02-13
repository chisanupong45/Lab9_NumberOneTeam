{block name='page_content'}
    <div class="alert alert-success" role="alert">
        {l s='Thank you for your kindness' d='Modules.CounterService'}
    </div>
    <div>
        {l s='Thank you for your payment.' d='Modules.CounterService'}
    </div>
    <div>
        {l s='Order Reference: ' d='Modules.CounterService'}{$paymentDetails.order_reference}
    </div>
    <div>
        {l s='Amount Paid: ' d='Modules.CounterService'}{$paymentDetails.amount_paid} {l s='USD' d='Modules.CounterService'}
    </div>
    <div>
        {l s='Payment Date: ' d='Modules.CounterService'}{$paymentDetails.payment_date}
    </div>
    <div>
        {l s='Uploaded Payment Slip: ' d='Modules.CounterService'}{$paymentSlip}
    </div>
    {*
    Additional details or instructions can be added here
    *}
{/block}
