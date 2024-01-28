# How to Run

ตามขั้นตอนด้านล่างนี้:

1. ทำการ clone โปรเจค:

```
git clone https://github.com/chisanupong45/Lab9_NumberOneTeam.git
```

2. เปิด Terminal หรือ Command Prompt(cmd) และเข้า Directory เข้า ./Project

3. รัน Docker Compose:

```
docker-compose up
```

4. ไปที่ URL: http://localhost:8080/install-ps/ เพื่อติดตั้ง Project

    1. กรอกข้อมูลจนไปถึงหน้า "System configuration"
    2. ในส่วนของ "Database server address", ใส่ค่าเป็น "mysql"
    3. ในส่วนของ "Database password", ใส่ค่าเป็น "admin"
    4. คลิก "Next" จนกระทั่งการติดตั้งเสร็จสิ้น

สำหรับการจัดการฐานข้อมูลผ่าน phpmyadmin:

1. ไปที่ URL: http://localhost:8081/
2. ใส่ Username เป็น "root"
3. ใส่ Password เป็น "admin"
4. คลิก "Go" เพื่อเข้าสู่ระบบ

สำหรับการเข้าถึงเว็บไซต์หลัก:

- หน้า Home: http://localhost:8080/
- หน้า Admin: http://localhost:8080/admin-cp
