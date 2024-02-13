<?php

class CounterServiceValidationModuleFrontController extends ModuleFrontController
{
    public function initContent()
    {
        parent::initContent();

        $context = Context::getContext();
        $cart = $context->cart;
                    // Process the payment details and update order status
        $this->module->validateOrder(
            $cart->id, Configuration::get('PS_OS_PAYMENT'), $cart->getOrderTotal(),
            $this->module->displayName, null, array(), null, false, $cart->secure_key
        );
        $customer = new Customer($cart->id_customer);
        if (!Validate::isLoadedObject($customer)) {
            Tools::redirect('index.php?controller=order&step=1');
        }
        Tools::redirect('index.php?controller=order-confirmation&id_cart=' 
            . $cart->id . '&id_module=' . $this->module->id . '&id_order=' 
            . $this->module->currentOrder . '&key=' . $customer->secure_key);
        return;
    }
}
