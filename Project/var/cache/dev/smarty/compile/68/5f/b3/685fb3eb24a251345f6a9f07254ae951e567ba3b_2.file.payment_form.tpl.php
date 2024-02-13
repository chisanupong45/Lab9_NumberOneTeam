<?php
/* Smarty version 4.3.4, created on 2024-02-13 17:29:52
  from '/var/www/html/modules/custombankpayment/views/templates/front/payment_form.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.4',
  'unifunc' => 'content_65cb990043c948_28192609',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '685fb3eb24a251345f6a9f07254ae951e567ba3b' => 
    array (
      0 => '/var/www/html/modules/custombankpayment/views/templates/front/payment_form.tpl',
      1 => 1707831837,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65cb990043c948_28192609 (Smarty_Internal_Template $_smarty_tpl) {
if ((isset($_smarty_tpl->tpl_vars['errors']->value)) && $_smarty_tpl->tpl_vars['errors']->value) {?>
    <div class="alert alert-danger">
        <ul>
            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['errors']->value, 'error');
$_smarty_tpl->tpl_vars['error']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['error']->value) {
$_smarty_tpl->tpl_vars['error']->do_else = false;
?>
                <li><?php echo htmlspecialchars((string) $_smarty_tpl->tpl_vars['error']->value, ENT_QUOTES, 'UTF-8');?>
</li>
            <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
        </ul>
    </div>
<?php }?>
<p>ชื่อ: วิทยาลัยการคอมพิวเตอร์</p>
<p>หมายเลขบัญชี: 1-122-334-4556-6</p>
<p>ธนาคารกสิกร สาขาโลตัสโนนม่วง</p>
<p>เมื่อทำรายการเรียบร้อย กรุณาแนบสลิปข้างล่างนี้</p>

<form id="bankPaymentForm" action="<?php echo htmlspecialchars((string) $_smarty_tpl->tpl_vars['link']->value->getModuleLink('custombankpayment','validation',array(),true), ENT_QUOTES, 'UTF-8');?>
" method="post" enctype="multipart/form-data">
    <input type="file" id="payment_slip" class="btn btn-default" name="payment_slip" accept="image/*" required">
    <button type="submit" name="submitPaymentSlip" class="btn btn-danger">ตรวจสอบ</button>
</form>
<?php }
}
