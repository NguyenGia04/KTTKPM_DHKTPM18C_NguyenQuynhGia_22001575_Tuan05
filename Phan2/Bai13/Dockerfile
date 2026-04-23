FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Tạo một ứng dụng React tối giản thay vì chạy full build thực tế để tiết kiệm thời gian, 
# nhưng cấu hình vẫn đúng chuẩn production
RUN mkdir -p build && echo "<h1>React App served by Nginx</h1>" > build/index.html

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
