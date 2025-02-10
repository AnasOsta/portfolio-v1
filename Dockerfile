# استخدام Node.js 18 كصورة أساسية
FROM node:18-alpine

# تعيين مسار العمل داخل الحاوية
WORKDIR /app

# نسخ package.json و package-lock.json لتثبيت التبعيات أولاً
COPY package.json package-lock.json ./

# تثبيت التبعيات
RUN npm install --production

# نسخ باقي ملفات المشروع
COPY . .

# بناء المشروع
RUN npm run build

# فتح المنفذ 3001 داخل الحاوية
EXPOSE 3001

# تشغيل التطبيق
CMD ["npm", "run", "start"]
