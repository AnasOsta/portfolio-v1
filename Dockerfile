# 1️⃣ استخدام صورة رسمية من Node.js 18
FROM node:18-alpine AS builder

# 2️⃣ تعيين مسار العمل
WORKDIR /app

# 3️⃣ نسخ وإعداد التبعيات فقط
COPY package.json package-lock.json ./
RUN npm ci

# 4️⃣ نسخ باقي الملفات إلى الحاوية
COPY . .

# 5️⃣ بناء المشروع
RUN npm run build

# 6️⃣ تقليل حجم الصورة النهائية عبر استخدام مرحلة التشغيل فقط
FROM node:18-alpine

# 7️⃣ تعيين مسار العمل مجددًا
WORKDIR /app

# 8️⃣ نسخ الملفات من الحاوية السابقة
COPY --from=builder /app ./

# 9️⃣ فتح المنفذ 3001
EXPOSE 3001

# 🔟 تعيين وضع الإنتاج
ENV NODE_ENV=production

# 11️⃣ تشغيل التطبيق
CMD ["npm", "run", "start"]
