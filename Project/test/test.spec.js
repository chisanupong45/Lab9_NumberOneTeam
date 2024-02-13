// @ts-check
const { test, expect } = require('@playwright/test');
const path = require('path');

test('US01 : TC01 | ซื้อบัตรกำนัล', async ({ page}) => {
  await page.goto('http://localhost:8080/th/');
  await page.locator('article').filter({ hasText: ' เปิดหน้าต่างย่อ บัตรกำนัล ฿100.00 ใหม่ favorite_border' }).getByRole('link').first().click();
  await page.getByRole('button', { name: ' หยิบใส่ตะกร้า' }).click();
  await page.getByRole('link', { name: ' ทำรายการชำระเงิน' }).click();
  await page.getByRole('link', { name: 'ทำรายการชำระเงิน' }).click();
  await page.getByLabel('Mrs.').check();
  await page.getByLabel('ชื่อ').click();
  await page.getByLabel('ชื่อ').fill('Momo');
  await page.getByLabel('นามสกุล').click();
  await page.getByLabel('นามสกุล').fill('Sakura');
  await page.getByLabel('อีเมลล์').click();
  await page.getByLabel('อีเมลล์').fill('Email@gmail.com');
  await page.getByRole('button', { name: 'ทำต่อ' }).click();
  await page.getByLabel('ประเทศ').selectOption('204');
  await page.getByLabel('หมายเลขประจำตัวผู้เสียภาษี').click();
  await page.getByLabel('หมายเลขประจำตัวผู้เสียภาษี').fill('123456789');
  await page.getByLabel('ที่อยู่', { exact: true }).click();
  await page.getByLabel('ที่อยู่', { exact: true }).fill('kkthai');
  await page.getByLabel('รหัสไปรษณีย์').click();
  await page.getByLabel('รหัสไปรษณีย์').fill('40002');
  await page.getByLabel('จังหวัด').click();
  await page.getByLabel('จังหวัด').fill('Khon Kaen');
  await page.getByLabel('โทรศัพท์').click();
  await page.getByLabel('โทรศัพท์').fill('123-456-7890');
  await page.getByRole('button', { name: 'ทำต่อ' }).click();
  await page.getByText('ชำระผ่านพร้อมเพย์').click();
  const slip = path.join(__dirname, '/slip.jpg');
  await page.getByRole('textbox').setInputFiles(slip);
  await page.click('#promptPayForm > button');
  await expect(page.locator('#content-hook_payment_return > div > div > div > div.alert.alert-success')).toContainText('ชำระด้วยพร้อมเพย์สำเร็จ');
});

test('US02 : TC02 | ทำการกด add เพิ่มเพิ่ม Voucherในตะกร้า ', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');

  await page.click('#content > section:nth-child(2) > div > div:nth-child(1) > article > div > div.product-description > h3 > a');
  await page.waitForTimeout(2000);
  // Add product to basket
  await page.click('#add-to-cart-or-refresh > div.product-add-to-cart.js-product-add-to-cart > div > div.add > button');

  await expect(page.locator('#myModalLabel')).toContainText('สินค้าได้ถูกเพิ่มไปยังตะกร้าสินค้าของคุณแล้ว');
});


test('US02 : TC03 | ทำการกด ลบ เพิ่ม Voucher ในตะกร้า ', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');

  await page.click('#content > section:nth-child(2) > div > div:nth-child(1) > article > div > div.product-description > h3 > a');
  await page.waitForTimeout(2000);
  // Add product to basket
  await page.click('#add-to-cart-or-refresh > div.product-add-to-cart.js-product-add-to-cart > div > div.add > button');
  // link to basket
  await page.click('#blockcart-modal > div > div > div.modal-body > div > div.col-md-7 > div > div > a');
  await page.waitForTimeout(2000);

  // click remove product from basket
  await page.click('#main > div > div.cart-grid-body.col-lg-8 > div > div.cart-overview.js-cart > ul > li > div > div.product-line-grid-right.product-line-actions.col-md-5.col-xs-12 > div > div.col-md-2.col-xs-2.text-xs-right > div > a > i');

  await expect(page.locator('#main > div > div.cart-grid-body.col-lg-8 > div > div.cart-overview.js-cart > span')).toContainText('ไม่มีสินค้าในตะกร้าของคุณแล้ว');
});



test('US03 : TC04 | เลือกวิธีชำระเงิน Promptpay', async ({ page}) => {
  await page.goto('http://localhost:8080/th/');
  await page.locator('article').filter({ hasText: ' เปิดหน้าต่างย่อ บัตรกำนัล ฿100.00 ใหม่ favorite_border' }).getByRole('link').first().click();
  await page.getByRole('button', { name: ' หยิบใส่ตะกร้า' }).click();
  await page.getByRole('link', { name: ' ทำรายการชำระเงิน' }).click();
  await page.getByRole('link', { name: 'ทำรายการชำระเงิน' }).click();
  await page.getByLabel('Mrs.').check();
  await page.getByLabel('ชื่อ').click();
  await page.getByLabel('ชื่อ').fill('Momo');
  await page.getByLabel('นามสกุล').click();
  await page.getByLabel('นามสกุล').fill('Sakura');
  await page.getByLabel('อีเมลล์').click();
  await page.getByLabel('อีเมลล์').fill('email@gmail.com');
  await page.getByRole('button', { name: 'ทำต่อ' }).click();
  await page.getByLabel('ประเทศ').selectOption('204');
  await page.getByLabel('หมายเลขประจำตัวผู้เสียภาษี').click();
  await page.getByLabel('หมายเลขประจำตัวผู้เสียภาษี').fill('12345678');
  await page.getByLabel('ที่อยู่', { exact: true }).click();
  await page.getByLabel('ที่อยู่', { exact: true }).fill('kkThai');
  await page.getByLabel('รหัสไปรษณีย์').click();
  await page.getByLabel('รหัสไปรษณีย์').fill('40002');
  await page.getByLabel('จังหวัด').click();
  await page.getByLabel('จังหวัด').fill('khon Kaen');
  await page.getByLabel('โทรศัพท์').click();
  await page.getByLabel('โทรศัพท์').fill('123-456-7890');
  await page.getByRole('button', { name: 'ทำต่อ' }).click();
  await page.getByLabel('ชำระผ่านพร้อมเพย์').check();
  await expect(page.locator('#payment-option-3-additional-information > p:nth-child(2)')).toContainText('หมายเลขพร้อมเพย์: 0987654321');
});

test('US03 : TC05 | เลือกวิธีชำระเงิน QR code', async ({ page}) => {
  await page.goto('http://localhost:8080/th/');
  await page.locator('article').filter({ hasText: ' เปิดหน้าต่างย่อ บัตรกำนัล ฿100.00 ใหม่ favorite_border' }).getByRole('link').first().click();
  await page.getByRole('button', { name: ' หยิบใส่ตะกร้า' }).click();
  await page.getByRole('link', { name: ' ทำรายการชำระเงิน' }).click();
  await page.getByRole('link', { name: 'ทำรายการชำระเงิน' }).click();
  await page.getByLabel('Mrs.').check();
  await page.getByLabel('ชื่อ').click();
  await page.getByLabel('ชื่อ').fill('Momo');
  await page.getByLabel('นามสกุล').click();
  await page.getByLabel('นามสกุล').fill('Sakura');
  await page.getByLabel('อีเมลล์').click();
  await page.getByLabel('อีเมลล์').fill('email@gmail.com');
  await page.getByRole('button', { name: 'ทำต่อ' }).click();
  await page.getByLabel('ประเทศ').selectOption('204');
  await page.getByLabel('หมายเลขประจำตัวผู้เสียภาษี').click();
  await page.getByLabel('หมายเลขประจำตัวผู้เสียภาษี').fill('12345678');
  await page.getByLabel('ที่อยู่', { exact: true }).click();
  await page.getByLabel('ที่อยู่', { exact: true }).fill('kkThai');
  await page.getByLabel('รหัสไปรษณีย์').click();
  await page.getByLabel('รหัสไปรษณีย์').fill('40002');
  await page.getByLabel('จังหวัด').click();
  await page.getByLabel('จังหวัด').fill('khon Kaen');
  await page.getByLabel('โทรศัพท์').click();
  await page.getByLabel('โทรศัพท์').fill('123-456-7890');
  await page.getByRole('button', { name: 'ทำต่อ' }).click();
  await page.getByLabel('ชำระผ่านพร้อมเพย์').check();
  await page.getByRole('img', { name: 'QR Code' }).click();
});

test('US03 : TC06 | เลือกวิธีชำระเงินโดยเลขบัญชี', async ({ page}) => {
  await page.goto('http://localhost:8080/th/');
  await page.locator('article').filter({ hasText: ' เปิดหน้าต่างย่อ บัตรกำนัล ฿100.00 ใหม่ favorite_border' }).getByRole('link').first().click();
  await page.getByRole('button', { name: ' หยิบใส่ตะกร้า' }).click();
  await page.getByRole('link', { name: ' ทำรายการชำระเงิน' }).click();
  await page.getByRole('link', { name: 'ทำรายการชำระเงิน' }).click();
  await page.getByLabel('Mrs.').check();
  await page.getByLabel('ชื่อ').click();
  await page.getByLabel('ชื่อ').fill('Momo');
  await page.getByLabel('นามสกุล').click();
  await page.getByLabel('นามสกุล').fill('Sakura');
  await page.getByLabel('อีเมลล์').click();
  await page.getByLabel('อีเมลล์').fill('email@gmail.com');
  await page.getByRole('button', { name: 'ทำต่อ' }).click();
  await page.getByLabel('ประเทศ').selectOption('204');
  await page.getByLabel('หมายเลขประจำตัวผู้เสียภาษี').click();
  await page.getByLabel('หมายเลขประจำตัวผู้เสียภาษี').fill('12345678');
  await page.getByLabel('ที่อยู่', { exact: true }).click();
  await page.getByLabel('ที่อยู่', { exact: true }).fill('kkThai');
  await page.getByLabel('รหัสไปรษณีย์').click();
  await page.getByLabel('รหัสไปรษณีย์').fill('40002');
  await page.getByLabel('จังหวัด').click();
  await page.getByLabel('จังหวัด').fill('khon Kaen');
  await page.getByLabel('โทรศัพท์').click();
  await page.getByLabel('โทรศัพท์').fill('123-456-7890');
  await page.getByRole('button', { name: 'ทำต่อ' }).click();
  await page.getByLabel('ชำระผ่านบัญชีธนาคาร').check();
  await expect(page.locator('#payment-option-2-additional-information > p:nth-child(2)')).toContainText('หมายเลขบัญชี: 1-122-334-4556-6');
});

test('US03 : TC07 | เลือกวิธีชำระเงิน counter service', async ({ page}) => {
  await page.goto('http://localhost:8080/th/');
  await page.locator('article').filter({ hasText: ' เปิดหน้าต่างย่อ บัตรกำนัล ฿100.00 ใหม่ favorite_border' }).getByRole('link').first().click();
  await page.getByRole('button', { name: ' หยิบใส่ตะกร้า' }).click();
  await page.getByRole('link', { name: ' ทำรายการชำระเงิน' }).click();
  await page.getByRole('link', { name: 'ทำรายการชำระเงิน' }).click();
  await page.getByLabel('Mrs.').check();
  await page.getByLabel('ชื่อ').click();
  await page.getByLabel('ชื่อ').fill('Momo');
  await page.getByLabel('นามสกุล').click();
  await page.getByLabel('นามสกุล').fill('Sakura');
  await page.getByLabel('อีเมลล์').click();
  await page.getByLabel('อีเมลล์').fill('email@gmail.com');
  await page.getByRole('button', { name: 'ทำต่อ' }).click();
  await page.getByLabel('ประเทศ').selectOption('204');
  await page.getByLabel('หมายเลขประจำตัวผู้เสียภาษี').click();
  await page.getByLabel('หมายเลขประจำตัวผู้เสียภาษี').fill('12345678');
  await page.getByLabel('ที่อยู่', { exact: true }).click();
  await page.getByLabel('ที่อยู่', { exact: true }).fill('kkThai');
  await page.getByLabel('รหัสไปรษณีย์').click();
  await page.getByLabel('รหัสไปรษณีย์').fill('40002');
  await page.getByLabel('จังหวัด').click();
  await page.getByLabel('จังหวัด').fill('khon Kaen');
  await page.getByLabel('โทรศัพท์').click();
  await page.getByLabel('โทรศัพท์').fill('123-456-7890');
  await page.getByRole('button', { name: 'ทำต่อ' }).click();
  await page.getByLabel('ชำระผ่านเคาท์เตอร์เซอร์วิส').check();
  await page.getByRole('img', { name: 'QR Code' }).click();
});


test('US04 : TC08 | อัพโหลดใบเสร็จที่ถูกต้อง', async ({ page}) => {
  await page.goto('http://localhost:8080/th/');
  await page.locator('article').filter({ hasText: ' เปิดหน้าต่างย่อ บัตรกำนัล ฿100.00 ใหม่ favorite_border' }).getByRole('link').first().click();
  await page.getByRole('button', { name: ' หยิบใส่ตะกร้า' }).click();
  await page.getByRole('link', { name: ' ทำรายการชำระเงิน' }).click();
  await page.getByRole('link', { name: 'ทำรายการชำระเงิน' }).click();
  await page.getByLabel('Mrs.').check();
  await page.getByLabel('ชื่อ').click();
  await page.getByLabel('ชื่อ').fill('Momo');
  await page.getByLabel('นามสกุล').click();
  await page.getByLabel('นามสกุล').fill('Sakura');
  await page.getByLabel('อีเมลล์').click();
  await page.getByLabel('อีเมลล์').fill('Email@gmail.com');
  await page.getByRole('button', { name: 'ทำต่อ' }).click();
  await page.getByLabel('ประเทศ').selectOption('204');
  await page.getByLabel('หมายเลขประจำตัวผู้เสียภาษี').click();
  await page.getByLabel('หมายเลขประจำตัวผู้เสียภาษี').fill('123456789');
  await page.getByLabel('ที่อยู่', { exact: true }).click();
  await page.getByLabel('ที่อยู่', { exact: true }).fill('kkthai');
  await page.getByLabel('รหัสไปรษณีย์').click();
  await page.getByLabel('รหัสไปรษณีย์').fill('40002');
  await page.getByLabel('จังหวัด').click();
  await page.getByLabel('จังหวัด').fill('Khon Kaen');
  await page.getByLabel('โทรศัพท์').click();
  await page.getByLabel('โทรศัพท์').fill('123-456-7890');
  await page.getByRole('button', { name: 'ทำต่อ' }).click();
  await page.getByText('ชำระผ่านพร้อมเพย์').click();
  const slip = path.join(__dirname, '/slip.jpg');
  await page.getByRole('textbox').setInputFiles(slip);
  await page.click('#promptPayForm > button');
  await expect(page.locator('#content-hook_payment_return > div > div > div > div.alert.alert-success')).toContainText('ชำระด้วยพร้อมเพย์สำเร็จ');
});


test('US05 : TC09 | อัพโหลดใบเสร็จที่ไม่ถูกต้อง', async ({ page}) => {
  await page.goto('http://localhost:8080/th/');
  await page.locator('article').filter({ hasText: ' เปิดหน้าต่างย่อ บัตรกำนัล ฿100.00 ใหม่ favorite_border' }).getByRole('link').first().click();
  await page.getByRole('button', { name: ' หยิบใส่ตะกร้า' }).click();
  await page.getByRole('link', { name: ' ทำรายการชำระเงิน' }).click();
  await page.getByRole('link', { name: 'ทำรายการชำระเงิน' }).click();
  await page.getByLabel('Mrs.').check();
  await page.getByLabel('ชื่อ').click();
  await page.getByLabel('ชื่อ').fill('Momo');
  await page.getByLabel('นามสกุล').click();
  await page.getByLabel('นามสกุล').fill('Sakura');
  await page.getByLabel('อีเมลล์').click();
  await page.getByLabel('อีเมลล์').fill('Email@gmail.com');
  await page.getByRole('button', { name: 'ทำต่อ' }).click();
  await page.getByLabel('ประเทศ').selectOption('204');
  await page.getByLabel('หมายเลขประจำตัวผู้เสียภาษี').click();
  await page.getByLabel('หมายเลขประจำตัวผู้เสียภาษี').fill('123456789');
  await page.getByLabel('ที่อยู่', { exact: true }).click();
  await page.getByLabel('ที่อยู่', { exact: true }).fill('kkthai');
  await page.getByLabel('รหัสไปรษณีย์').click();
  await page.getByLabel('รหัสไปรษณีย์').fill('40002');
  await page.getByLabel('จังหวัด').click();
  await page.getByLabel('จังหวัด').fill('Khon Kaen');
  await page.getByLabel('โทรศัพท์').click();
  await page.getByLabel('โทรศัพท์').fill('123-456-7890');
  await page.getByRole('button', { name: 'ทำต่อ' }).click();
  await page.getByText('ชำระผ่านพร้อมเพย์').click();
  const slip = path.join(__dirname, '/fakeslip.png');
  await page.getByRole('textbox').setInputFiles(slip);
  await page.click('#promptPayForm > button');
  await expect(page.locator('#payment-option-3-container > label > span')).toContainText('ชำระผ่านพร้อมเพย์');
});


test('US05 : TC010 | โหลดใบกำกับภาษี', async ({ page}) => {
  await page.goto('http://localhost:8080/th/');
  await page.locator('article').filter({ hasText: ' เปิดหน้าต่างย่อ บัตรกำนัล ฿100.00 ใหม่ favorite_border' }).getByRole('link').first().click();
  await page.getByRole('button', { name: ' หยิบใส่ตะกร้า' }).click();
  await page.getByRole('link', { name: ' ทำรายการชำระเงิน' }).click();
  await page.getByRole('link', { name: 'ทำรายการชำระเงิน' }).click();
  await page.getByLabel('Mrs.').check();
  await page.getByLabel('ชื่อ').click();
  await page.getByLabel('ชื่อ').fill('Momo');
  await page.getByLabel('นามสกุล').click();
  await page.getByLabel('นามสกุล').fill('Sakura');
  await page.getByLabel('อีเมลล์').click();
  await page.getByLabel('อีเมลล์').fill('Email@gmail.com');
  await page.getByRole('button', { name: 'ทำต่อ' }).click();
  await page.getByLabel('ประเทศ').selectOption('204');
  await page.getByLabel('หมายเลขประจำตัวผู้เสียภาษี').click();
  await page.getByLabel('หมายเลขประจำตัวผู้เสียภาษี').fill('123456789');
  await page.getByLabel('ที่อยู่', { exact: true }).click();
  await page.getByLabel('ที่อยู่', { exact: true }).fill('kkthai');
  await page.getByLabel('รหัสไปรษณีย์').click();
  await page.getByLabel('รหัสไปรษณีย์').fill('40002');
  await page.getByLabel('จังหวัด').click();
  await page.getByLabel('จังหวัด').fill('Khon Kaen');
  await page.getByLabel('โทรศัพท์').click();
  await page.getByLabel('โทรศัพท์').fill('123-456-7890');
  await page.getByRole('button', { name: 'ทำต่อ' }).click();
  await page.getByText('ชำระผ่านพร้อมเพย์').click();
  const slip = path.join(__dirname, '/slip.jpg');
  await page.getByRole('textbox').setInputFiles(slip);
  await page.click('#promptPayForm > button');
  await page.click('#invoiceCheck');
  await expect(page.locator('#printInvoice > a')).toContainText('ดาวน์โหลดใบแจ้งหนี้ของคุณ');
});
