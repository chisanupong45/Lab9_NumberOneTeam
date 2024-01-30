<?php
/* Smarty version 4.3.4, created on 2024-01-30 17:20:26
  from '/var/www/html/admin-cp/themes/new-theme/template/content.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.4',
  'unifunc' => 'content_65b8cd6a192240_30992054',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '3c2fb80322abea6ee08770a9a837d1070db8ae54' => 
    array (
      0 => '/var/www/html/admin-cp/themes/new-theme/template/content.tpl',
      1 => 1702479318,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65b8cd6a192240_30992054 (Smarty_Internal_Template $_smarty_tpl) {
?>
<div id="ajax_confirmation" class="alert alert-success" style="display: none;"></div>
<div id="content-message-box"></div>


<?php if ((isset($_smarty_tpl->tpl_vars['content']->value))) {?>
  <?php echo $_smarty_tpl->tpl_vars['content']->value;?>

<?php }
}
}
