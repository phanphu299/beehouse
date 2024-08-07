const _generateHtml = () => {
  return /* html */ `
    <section id="about" class="about section">

      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="100">
            <img src="assets/img/about.jpg" class="img-fluid" alt="">
          </div>

          <div class="col-lg-6 order-2 order-lg-1 content" data-aos="fade-up" data-aos-delay="200">
            <h3>
              Tạo Môi Trường Chăm Sóc Cho Việc Học Của Trẻ Em
              <!-- Providing a Nurturing Environment for Young Learners -->
            </h3>
            <p class="fst-italic">
              Chúng tôi cam kết tạo ra một môi trường chăm sóc nơi trẻ em có thể học hỏi, phát triển và phát triển.
              <!-- We are dedicated to creating a nurturing environment where children can learn, grow, and thrive. -->
            </p>
            <ul>
              <li><i class="bi bi-check-circle"></i> 
                <span>
                  Chương trình giáo dục của chúng tôi được thiết kế để kích thích sự tò mò và nuôi dưỡng tình yêu cho việc học.
                  <!-- Our curriculum is designed to stimulate curiosity and foster a love for learning. -->
                </span>
              </li>
              <li><i class="bi bi-check-circle"></i> 
                <span>
                  Chúng tôi ưu tiên phát triển xã hội, tình cảm và nhận thức của mỗi đứa trẻ.
                  <!-- We prioritize the social, emotional, and cognitive development of each child. -->
                </span>
              </li>
              <li><i class="bi bi-check-circle"></i> 
                <span>
                  Các giáo viên giàu kinh nghiệm của chúng tôi cung cấp sự chú ý và hỗ trợ cá nhân cho mỗi đứa trẻ.
                  <!-- Our experienced teachers provide individualized attention and support to every child. -->
                </span>
              </li>
            </ul>
            <a href="#" class="read-more">
              <span>
                Đọc Thêm
                <!-- Read More -->
              </span>
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>

        </div>

      </div>

    </section>
  `;
};

export class AboutComponent extends HTMLElement {
  constructor() {
    console.info(`AboutComponent > constructor()`);
    super();
  }

  connectedCallback() {
    this.generateHtmlContent();
  }

  async generateHtmlContent() {
    console.info(`AboutComponent > generateHtmlContent()`);

    try {
      const template = document.createElement('template');
      template.innerHTML = _generateHtml();

      this.appendChild(template.content.cloneNode(true));
    } catch (error) {
      console.error('AboutComponent Exception. Error is:', error);
    }
  }
}