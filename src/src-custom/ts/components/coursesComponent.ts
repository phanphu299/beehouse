import { AppConstants } from "../appConstants";

const _generateHtml = () => {
  return /* html */ `
    <section id="courses" class="courses section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>
          Chương Trình
          <!-- Programs -->
        </h2>
        <p class="">
          Chương Trình Phổ Biến
          <!-- Popular Programs -->
        </p>
      </div><!-- End Section Title -->

      <div class="container">

        <div class="row">

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="course-item">
              <img src="assets/img/course-1.jpg" class="img-fluid" alt="...">
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <p class="category">
                    Những Chú Cừu Nhỏ
                    <!-- Little Lambs -->
                  </p>
                  <p class="price">
                    $200/tháng
                    <!-- $200/month -->
                  </p>
                </div>

                <h3>
                  <a href="course-details.html">
                    Những Em Bé Nhỏ
                    <!-- Tiny Tots -->
                  </a>
                </h3>
                <p class="description">
                  Lớp Những Em Bé Nhỏ tập trung vào sự phát triển ban đầu của trẻ từ 12-24 tháng tuổi. Môi trường nuôi dưỡng của chúng tôi được thiết kế để khuyến khích khám phá giác quan và kỹ năng vận động thông qua các hoạt động phù hợp với độ tuổi và sự hướng dẫn nhẹ nhàng.
                  <!-- The Tiny Tots class focuses on the early development of infants aged 12-24 months. Our nurturing environment is designed to promote sensory exploration and motor skills through age-appropriate activities and gentle guidance. -->
                </p>
                <div class="trainer d-flex justify-content-between align-items-center">
                  <div class="trainer-profile d-flex align-items-center">
                    <img src="assets/img/trainers/trainer-1.jpg" class="img-fluid" alt="">
                    <a href="" class="trainer-link">
                      Cô Ruth
                      <!-- Ms. Ruth -->
                    </a>
                  </div>
                  <div class="trainer-rank d-flex align-items-center">
                    <i class="bi bi-person user-icon"></i>&nbsp;9
                    &nbsp;&nbsp;
                    <i class="bi bi-heart heart-icon"></i>&nbsp;1-2
                  </div>
                </div>
              </div>
            </div>
          </div> <!-- End Course Item-->

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="course-item">
              <img src="assets/img/course-2.jpg" class="img-fluid" alt="...">
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <p class="category">
                    Những Chú Gấu Nghịch Ngợm
                    <!-- Bouncy Bears -->
                  </p>
                  <p class="price">
                    $220/tháng
                    <!-- $220/month -->
                  </p>
                </div>

                <h3>
                  <a href="course-details.html">
                    Những Người Nhảy Vui Vẻ
                    <!-- Joyful Jumpers -->
                  </a>
                </h3>
                <p class="description">
                  Lớp Những Người Nhảy Vui Vẻ rất phù hợp cho trẻ từ 2-3 tuổi tràn đầy năng lượng. Chúng tôi cung cấp một môi trường kích thích, nơi trẻ có thể phát triển kỹ năng xã hội, cảm xúc và thể chất thông qua học tập qua trò chơi và các hoạt động tương tác.
                  <!-- The Joyful Jumpers class is perfect for energetic toddlers aged 2-3 years. We provide a stimulating environment where children can develop their social, emotional, and physical skills through play-based learning and interactive activities. -->
                </p>
                <div class="trainer d-flex justify-content-between align-items-center">
                  <div class="trainer-profile d-flex align-items-center">
                    <img src="assets/img/trainers/trainer-2.jpg" class="img-fluid" alt="">
                    <a href="" class="trainer-link">
                      Cô Katie
                      <!-- Ms. Katie -->
                    </a>
                  </div>
                  <div class="trainer-rank d-flex align-items-center">
                    <i class="bi bi-person user-icon"></i>&nbsp;12
                    &nbsp;&nbsp;
                    <i class="bi bi-heart heart-icon"></i>&nbsp;2-3
                  </div>
                </div>
              </div>
            </div>
          </div> <!-- End Course Item-->

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div class="course-item">
              <img src="assets/img/course-3.jpg" class="img-fluid" alt="...">
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <p class="category">
                    Những Trái Tim Dịu Dàng
                    <!-- Tenderhearts -->
                  </p>
                  <p class="price">
                    $210/tháng
                    <!-- $210/month -->
                  </p>
                </div>

                <h3>
                  <a href="course-details.html">
                    Những Chú Sâu Tò Mò
                    <!-- Curious Caterpillars -->
                  </a>
                </h3>
                <p class="description">
                  Lớp Những Chú Sâu Tò Mò được thiết kế cho các trẻ mẫu giáo từ 3-4 tuổi tò mò. Chương trình học của chúng tôi khuyến khích sự sáng tạo, tư duy phản biện và tương tác xã hội, chuẩn bị cho trẻ những bước học tập tiếp theo trong một môi trường vui vẻ và hỗ trợ.
                  <!-- The Curious Caterpillars class is designed for inquisitive preschoolers aged 3-4 years. Our curriculum encourages creativity, critical thinking, and social interaction, preparing children for their next educational steps in a fun and supportive setting. -->
                </p>
                <div class="trainer d-flex justify-content-between align-items-center">
                  <div class="trainer-profile d-flex align-items-center">
                    <img src="assets/img/trainers/trainer-3.jpg" class="img-fluid" alt="">
                    <a href="" class="trainer-link">
                      Cô Angelica
                      <!-- Ms. Angelica -->
                    </a>
                  </div>
                  <div class="trainer-rank d-flex align-items-center">
                    <i class="bi bi-person user-icon"></i>&nbsp;15
                    &nbsp;&nbsp;
                    <i class="bi bi-heart heart-icon"></i>&nbsp;3-4
                  </div>
                </div>
              </div>
            </div>
          </div> <!-- End Course Item-->

        </div>

      </div>

    </section>
  `;
};

export class CoursesComponent extends HTMLElement {
  constructor() {
    console.info(`CoursesComponent > constructor()`);
    super();
  }

  connectedCallback() {
    this.generateHtmlContent();
  }

  async generateHtmlContent() {
    console.info(`CoursesComponent > generateHtmlContent()`);

    try {
      const template = document.createElement('template');
      template.innerHTML = _generateHtml();

      this.appendChild(template.content.cloneNode(true));
    } catch (error) {
      console.error('CoursesComponent Exception. Error is:', error);
    }
  }
}
