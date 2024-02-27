{**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 *}
<table id="addresses-tab" cellspacing="0" cellpadding="0">
	<tr>
	<br />
	<br />
		<td width="100%"><span class="bold" style="font-size: 14px;">{l s='ข้อมูลผู้ขาย'}</span><br/><br/>
			<strong>ชื่อผู้ขาย:</strong> วิทยาลัยการคอมพิวเตอร์<br/>
			<strong>ที่อยู่:</strong> เลขที่ 123 หมู่ 16 ถนนมิตรภาพ ตำบลในเมือง อำเภอเมืองขอนแก่น จังหวัดขอนแก่น 40002<br/>
			<strong>หมายเลขผู้เสียภาษี:</strong> 1234567890123<br/>
			<strong>โทรศัพท์:</strong> 043-009700
		</td>
	</tr>
	<br />
	<br />
	<tr>
		<td width="100%"><span class="bold" style="font-size: 14px;">{l s='ข้อมูลผู้ซื้อ' d='Shop.Pdf' pdf='true'}</span><br/><br/>
			<strong>ชื่อผู้ซื้อ:</strong> {$addresses.invoice->firstname} {$addresses.invoice->lastname}<br/>
			<strong>ที่อยู่:</strong> {$addresses.invoice->address1} {$addresses.invoice->city} {$addresses.invoice->postcode}<br/>
			<strong>หมายเลขผู้เสียภาษี:</strong> {$addresses.invoice->vat_number}<br/>
			<strong>โทรศัพท์:</strong> {$addresses.invoice->phone}
		</td>
	</td>
</table>
