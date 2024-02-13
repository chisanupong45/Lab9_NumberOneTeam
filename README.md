# Docker Hub

URL: https://hub.docker.com/repository/docker/chisanupongkku/ps-project/general

# NumberOneTeam Project

## วิธีการติดตั้ง

1. Clone repository ด้วยคำสั่ง:

```bash
git clone https://github.com/chisanupong45/NumberOneTeam.git
```

2. เข้าไปที่โปรเจ็กต์และลบโฟลเดอร์ต่อไปนี้: `classes`, `img`, `modules`, `themes`

3. เปิด Command Prompt (หรือ Terminal) และรัน Docker Compose ด้วยคำสั่ง:

```bash
docker-compose up
```

4. รอจนการติดตั้งเสร็จสมบูรณ์

5. เข้าไปที่หน้า phpMyAdmin และเลือกฐานข้อมูล `prestashop` และทำการลบทิ้ง

6. สร้างฐานข้อมูลใหม่ชื่อ `prestashop` และนำเข้าไฟล์ `pretashop.sql`

7. จากนั้นใช้คำสั่งตามนี้:

```bash
git reset --hard origin/main
```

8. เข้าถึงหน้าเว็บไซต์ผ่าน URL: `http://localhost:8080/`
9. เข้าถึงหน้า admin ผ่าน URL: `http://localhost:8080/admin-dev`

## ข้อควรระวัง

- โปรดตรวจสอบให้แน่ใจว่าคุณได้ลบโฟลเดอร์ที่ระบุไว้ในขั้นตอนที่ 2 เพื่อป้องกันปัญหาที่อาจเกิดขึ้นจากการทับซ้อนข้อมูลเก่าในระบบ

- หากมีข้อผิดพลาดเกิดขึ้นในระหว่างการติดตั้งหรือการใช้งาน โปรดตรวจสอบ Log หรือ Console สำหรับข้อมูลเพิ่มเติมและแก้ไขตามความเหมาะสม

## แหล่งที่มา

โปรเจ็กต์นี้ถูกพัฒนาขึ้นโดย NumberOneTeam
