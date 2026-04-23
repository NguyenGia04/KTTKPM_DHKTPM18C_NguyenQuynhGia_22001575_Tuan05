# Bài tập Tuần 05: Docker Compose
**Họ tên:** Nguyễn Quỳnh Gia
**MSSV:** 22001575
**Lớp:** DHKTPM18C

## Phần 1: Một số lệnh Docker Compose cơ bản

Dưới đây là danh sách các lệnh Docker Compose cơ bản được sử dụng trong bài tập này:

1.  **docker compose version**: Kiểm tra phiên bản Docker Compose đang cài đặt.
2.  **docker compose up**: Khởi tạo và chạy các container được định nghĩa trong file compose.
3.  **docker compose up -d**: Chạy các container ở chế độ chạy ngầm (detached mode).
4.  **docker compose ps**: Liệt kê danh sách các container đang chạy trong stack hiện tại.
5.  **docker compose down**: Dừng và xóa các container, network, image và volume được tạo bởi `up`.
6.  **docker compose restart**: Khởi động lại các dịch vụ.
7.  **docker compose logs -f**: Xem log của các container theo thời gian thực.
8.  **docker compose build**: Build hoặc rebuild các dịch vụ.
9.  **docker compose exec <service_name> <command>**: Thực thi một lệnh bên trong container đang chạy.
10. **docker compose down -v**: Dừng và xóa các container cùng với các volume được định nghĩa.
11. **docker compose run <service_name> <command>**: Chạy một lệnh một lần (one-off command) trên một dịch vụ.
12. **docker compose stop <service_name>**: Dừng một dịch vụ cụ thể mà không xóa container.
13. **docker compose rm <service_name>**: Xóa các container của dịch vụ đã dừng.
14. **docker compose config**: Kiểm tra và hiển thị cấu hình của file compose.
15. **docker compose up -d --build**: Build lại image và chạy lại các container ở chế độ ngầm.

---

## Phần 2: Docker Compose file (Cơ bản)

Danh sách 15 bài tập cơ bản đã hoàn thành:
1.  **Bài 1**: Chạy Nginx (port 8080)
2.  **Bài 2**: Chạy MySQL 8.0 (mydb, user, password)
3.  **Bài 3**: Kết nối MySQL với PHPMyAdmin (port 8081)
4.  **Bài 4**: Chạy ứng dụng Node.js Express
5.  **Bài 5**: Chạy Redis (port 6379)
6.  **Bài 6**: Chạy WordPress với MySQL
7.  **Bài 7**: Chạy MongoDB với Mongo Express
8.  **Bài 8**: Kết nối Node.js với MySQL
9.  **Bài 9**: Chạy ứng dụng Python Flask
10. **Bài 10**: Lưu trữ dữ liệu với Docker Volumes (MySQL)
11. **Bài 11**: Chạy Postgres với Adminer (port 8083)
12. **Bài 12**: Giám sát (Prometheus, Grafana, Node Exporter)
13. **Bài 13**: Chạy React với Nginx
14. **Bài 14**: Cấu hình mạng riêng giữa các container
15. **Bài 15**: Giới hạn tài nguyên CPU/RAM cho Redis

## Phần 3: Docker Compose file (Nâng cao)

Danh sách 10 bài tập nâng cao đã hoàn thành:
1.  **Bài 1**: Triển khai WordPress + MySQL (Custom network, volumes)
2.  **Bài 2**: Ứng dụng Node.js + MongoDB (Healthcheck, volume)
3.  **Bài 3**: Load Balancing với Nginx + Flask (2 instances)
4.  **Bài 4**: Prometheus + Grafana Monitoring (Persistent data)
5.  **Bài 5**: Multi-tier Voting App (Python, Node, Redis, Java, Postgres)
6.  **Bài 6**: CI/CD Pipeline (Cấu hình Dev và Prod)
7.  **Bài 7**: ELK Stack (Elasticsearch + Kibana)
8.  **Bài 8**: Django + Celery + Redis
9.  **Bài 9**: Nextcloud với MariaDB + Redis Caching
10. **Bài 10**: Traefik as Reverse Proxy

