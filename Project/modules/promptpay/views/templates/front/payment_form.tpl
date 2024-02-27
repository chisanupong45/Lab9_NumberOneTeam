<p>ชื่อ: วิทยาลัยการคอมพิวเตอร์</p>
<p>หมายเลขพร้อมเพย์: 0987654321 </p>
<p>หรือสแกนข้างล่างนี้</p>
<p>
    <img src="https://img2.pic.in.th/pic/img-promptpay.png" alt="QR Code" style="width: 300px; height: auto;">
</p>
<p>เมื่อทำรายการเรียบร้อย กรุณาแนบสลิปข้างล่างนี้</p>

<form id="promptPayForm" action="{$link->getModuleLink('promptpay', 'validation', [], true)}" method="post" enctype="multipart/form-data">
    <input type="file" id="payment_slip" class="btn btn-default" name="payment_slip" accept="image/*" required">
    <button type="submit" name="submitPaymentSlip" class="btn btn-danger">ตรวจสอบ</button>
</form>
