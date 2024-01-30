<?php
/* Smarty version 4.3.4, created on 2024-01-30 17:20:07
  from '/var/www/html/admin-cp/themes/default/template/content.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.4',
  'unifunc' => 'content_65b8cd576ae4a5_33613347',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '40fb1bc1de6e329f7d3f7e1999237b2400c0b021' => 
    array (
      0 => '/var/www/html/admin-cp/themes/default/template/content.tpl',
      1 => 1702479318,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_65b8cd576ae4a5_33613347 (Smarty_Internal_Template $_smarty_tpl) {
?><div id="ajax_confirmation" class="alert alert-success hide"></div>
<div id="ajaxBox" style="display:none"></div>
<div id="content-message-box"></div>

<?php if ((isset($_smarty_tpl->tpl_vars['content']->value))) {?>
	<?php echo $_smarty_tpl->tpl_vars['content']->value;?>

<?php }
}
}
