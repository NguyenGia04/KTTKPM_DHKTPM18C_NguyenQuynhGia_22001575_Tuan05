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
*Đang cập nhật...*

## Phần 3: Docker Compose file (Nâng cao)
*Đang cập nhật...*
