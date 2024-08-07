import { AppConstants } from "../appConstants";

const _generateHtml = () => {
  return /* html */ `
    <section id="counts" class="section counts">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4">

          <div class="col-lg-3 col-md-6">
            <div class="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="1232" data-purecounter-duration="1" class="purecounter"></span>
              <p class="">Học Sinh</p>
              <!-- <p class="">Students</p> -->
            </div>
          </div><!-- End Stats Item -->

          <div class="col-lg-3 col-md-6">
            <div class="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="64" data-purecounter-duration="1" class="purecounter"></span>
              <p class="">Chương Trình</p>
              <!-- <p class="">Programs</p> -->
            </div>
          </div><!-- End Stats Item -->

          <div class="col-lg-3 col-md-6">
            <div class="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="42" data-purecounter-duration="1" class="purecounter"></span>
              <p class="">Sự Kiện</p>
              <!-- <p class="">Events</p> -->
            </div>
          </div><!-- End Stats Item -->

          <div class="col-lg-3 col-md-6">
            <div class="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="24" data-purecounter-duration="1" class="purecounter"></span>
              <p class="">Nhân Viên</p>
              <!-- <p class="">Staff</p> -->
            </div>
          </div><!-- End Stats Item -->

        </div>

      </div>

    </section>
  `;
};

export class CountsComponent extends HTMLElement {
  constructor() {
    console.info(`CountsComponent > constructor()`);
    super();
  }

  connectedCallback() {
    this.generateHtmlContent();
  }

  async generateHtmlContent() {
    console.info(`CountsComponent > generateHtmlContent()`);

    try {
      const template = document.createElement('template');
      template.innerHTML = _generateHtml();

      this.appendChild(template.content.cloneNode(true));
    } catch (error) {
      console.error('CountsComponent Exception. Error is:', error);
    }
  }
}
