<?php
/* Smarty version 4.3.4, created on 2024-02-13 17:29:52
  from '/var/www/html/modules/counterservice/views/templates/front/payment_form.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.4',
  'unifunc' => 'content_65cb99002beb07_07886977',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '8ee6dbb794fa36444ada8b1ba8026f9ffe4d6983' => 
    array (
      0 => '/var/www/html/modules/counterservice/views/templates/front/payment_form.tpl',
      1 => 1707831837,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65cb99002beb07_07886977 (Smarty_Internal_Template $_smarty_tpl) {
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
<p>
    <img src="https://barcode-list.com/barcodeImage.php?barcode=5010415333162" alt="QR Code" style="width: 300px; height: auto;">
</p>
<?php }
}
