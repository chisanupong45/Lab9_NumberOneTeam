<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the public 'prestashop.adapter.kpi.translations' shared service.

return $this->services['prestashop.adapter.kpi.translations'] = new \PrestaShop\PrestaShop\Adapter\Kpi\TranslationsKpi(($this->services['translator'] ?? $this->getTranslatorService()), ($this->services['prestashop.adapter.legacy.kpi_configuration'] ?? ($this->services['prestashop.adapter.legacy.kpi_configuration'] = new \PrestaShop\PrestaShop\Adapter\Configuration\KpiConfiguration())), ($this->services['PrestaShop\\PrestaShop\\Adapter\\LegacyContext'] ?? $this->getLegacyContextService())->getAdminLink("AdminStats", true, ["ajax" => 1, "action" => "getKpi", "kpi" => "frontoffice_translations"]));
