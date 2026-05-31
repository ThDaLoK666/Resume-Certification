# Resume Certification

เว็บแสดงใบรับรอง (Certifications) จากโฟลเดอร์ `Certification/` โดยอัตโนมัติ

## วิธีใช้งาน

```bash
# ติดตั้ง dependencies
npm install

# เริ่ม dev server
npm run dev
```

- ใส่ PDF ใบรับรองในโฟลเดอร์ `Certification/`
- เปิด `http://localhost:5173` จะเห็นรายการ Certifications ทั้งหมด
- เพิ่ม PDF ใหม่ → รัน `npm run dev` ใหม่อีกครั้ง (หรือ `npm run generate`)

## Build สำหรับ Deploy

```bash
npm run build
```

ไฟล์ static อยู่ที่ `dist/`
