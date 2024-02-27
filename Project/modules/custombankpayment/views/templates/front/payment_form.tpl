{if isset($errors) && $errors}
    <div class="alert alert-danger">
        <ul>
            {foreach from=$errors item=error}
                <li>{$error}</li>
            {/foreach}
        </ul>
    </div>
{/if}
<p>ชื่อ: วิทยาลัยการคอมพิวเตอร์</p>
<p>หมายเลขบัญชี: 1-122-334-4556-6</p>
<p>ธนาคารกสิกร สาขาโลตัสโนนม่วง</p>
<p>เมื่อทำรายการเรียบร้อย กรุณาแนบสลิปข้างล่างนี้</p>

<form id="bankPaymentForm" action="{$link->getModuleLink('custombankpayment', 'validation', [], true)}" method="post" enctype="multipart/form-data">
    <input type="file" id="payment_slip" class="btn btn-default" name="payment_slip" accept="image/*" required">
    <button type="submit" name="submitPaymentSlip" class="btn btn-danger">ตรวจสอบ</button>
</form>
