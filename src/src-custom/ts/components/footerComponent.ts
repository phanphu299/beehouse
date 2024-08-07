import { AppConstants } from "../appConstants";

const _generateHtml = () => {
  return /* html */ `
    <footer id="footer" class="footer position-relative">

      <div class="container footer-top">
        <div class="row gy-4">
          <div class="col-lg-4 col-md-6 footer-about">
            <a href="index.html" class="logo d-flex align-items-center">
              <span class="sitename">${AppConstants.appName}</span>
            </a>
            <div class="footer-contact pt-3">
              <p>
                123 Đường Mẫu Giáo
                <!-- A108 Adam Street -->
              </p>
              <p>
                Biên Hoà, Đồng Nai 535022
                <!-- New York, NY 535022 -->
              </p>
              <p class="mt-3">
                <strong>
                  Điện thoại:
                  <!-- Phone: -->
                </strong> 
                <span>+1 5589 55488 55</span>
              </p>
              <p><strong>Email:</strong> <span>info@example.com</span></p>
            </div>
            <div class="social-links d-flex mt-4">
              <a href=""><i class="bi bi-twitter"></i></a>
              <a href=""><i class="bi bi-facebook"></i></a>
              <a href=""><i class="bi bi-instagram"></i></a>
              <a href=""><i class="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div class="col-lg-2 col-md-3 footer-links">
            <h4>
              Liên Kết Hữu Ích
              <!-- Useful Links -->
            </h4>
            <ul>
              <li>
                <a href="#">
                  Trang Chủ
                  <!-- Home -->
                </a>
              </li>
              <li>
                <a href="#">
                  Về Chúng Tôi
                  <!-- About us -->
                </a>
              </li>
              <li>
                <a href="#">
                  Chương Trình
                  <!-- Programs -->
                </a>
              </li>
              <li>
                <a href="#">
                  Liên Hệ
                  <!-- Contact Us -->
                </a>
              </li>
              <li>
                <a href="#">
                  Chính Sách Riêng Tư
                  <!-- Privacy Policy -->
                </a>
              </li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-3 footer-links">
            <h4>
              Chương Trình
              <!-- Our Programs -->
            </h4>
            <ul>
              <li>
                <a href="#">
                  Nghệ Thuật & Thủ Công
                  <!-- Art & Craft -->
                </a>
              </li>
              <li>
                <a href="#">
                  Hoạt Động Ngoài Trời
                  <!-- Outdoor Activities -->
                </a>
              </li>
              <li>
                <a href="#">
                  Âm Nhạc & Nhảy Múa
                  <!-- Music & Dance -->
                </a>
              </li>
              <li>
                <a href="#">
                  Thời Gian Kể Chuyện
                  <!-- Story Time -->
                </a>
              </li>
              <li>
                <a href="#">
                  Toán & Khoa Học
                  <!-- Math & Science -->
                </a>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-12 footer-newsletter">
            <h4>
              Bản Tin
              <!-- Our Newsletter -->
            </h4>
            <p>
              Đăng ký nhận bản tin của chúng tôi để nhận các cập nhật mới nhất về chương trình và sự kiện của chúng tôi!
              <!-- Subscribe to our newsletter and receive the latest updates on our programs and events! -->
            </p>
            <form action="forms/newsletter.php" method="post" class="php-email-form">
              <div class="newsletter-form">
                <input type="email" name="email" placeholder="Nhập email của bạn">
                <input type="submit" value="Đăng Ký">
              </div>
              <div class="loading">
                Đang tải
                <!-- Loading -->
              </div>
              <div class="error-message"></div>
              <div class="sent-message">
                Yêu cầu đăng ký của bạn đã được gửi. Cảm ơn bạn!
                <!-- Your subscription request has been sent. Thank you! -->
              </div>
            </form>
          </div>

        </div>
      </div>

      <div class="container copyright text-center mt-4">
        <p>© 
          <span>
            Bản quyền
            <!-- Copyright -->
          </span> <strong class="px-1 sitename">${AppConstants.appName}</strong> 
          <span>
            Tất cả các quyền được bảo lưu
            <!-- All Rights Reserved -->
          </span>
        </p>
      </div>

    </footer>
  `;
};

export class FooterComponent extends HTMLElement {
  constructor() {
    console.info(`FooterComponent > constructor()`);
    super();
  }

  connectedCallback() {
    this.generateHtmlContent();
  }

  async generateHtmlContent() {
    console.info(`FooterComponent > generateHtmlContent()`);

    try {
      const template = document.createElement('template');
      template.innerHTML = _generateHtml();
      this.appendChild(template.content.cloneNode(true));
    } catch (error) {
      console.error('Exception. Error is:', error);
    }
  }
}