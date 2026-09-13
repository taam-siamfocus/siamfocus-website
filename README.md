# SiamFocus Static Website

Static HTML5 + CSS3 + Vanilla JavaScript สำหรับ Deploy บน Vercel โดยไม่ต้องใช้ Build Process

## สำคัญก่อน Production
- เพิ่ม Logo ตัวจริงที่ `assets/images/siamfocus-logo.png`
- เปลี่ยน Portfolio Placeholder เป็นภาพ/ข้อมูลโครงการจริง
- เพิ่ม URL จริงให้ปุ่ม View Project เมื่อมีข้อมูล
- เพิ่มข้อมูลบริษัทจริงในหน้า About หากต้องการ
- เชื่อม Contact Form กับ Backend / Form Service
- ตรวจสอบ Canonical และ Sitemap หลังโดเมน Production ใช้งานจริง
- ตรวจ JSON-LD ใน Rich Results Test / Schema Markup Validator

## โครงสร้าง
- Multi-page directory URLs
- Shared CSS: `assets/css/style.css`
- Shared JS: `assets/js/main.js`
- `robots.txt`, `sitemap.xml`, `404.html`, `vercel.json`

## Deploy Vercel
Import Git repository หรืออัปโหลดโปรเจกต์เป็น Static Site โดยไม่ต้องกำหนด Build Command.
