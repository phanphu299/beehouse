import { AppConstants } from "../appConstants";

const _generateHtml = () => {
  const currentPage = window.location.pathname.split('/').pop(); // Get the current page's filename

  const setActiveClass = (page: string) => {
    return currentPage === page ? 'active' : '';
  };

  return /* html */ `
    <header id="header" class="header d-flex align-items-center sticky-top">
      <div class="container-fluid container-xl position-relative d-flex align-items-center">

        <a href="${AppConstants.indexPageFileName}" class="logo d-flex align-items-center me-auto">
          <!-- Uncomment the line below if you also wish to use an image logo -->
          <!-- <img src="assets/img/logo.png" alt=""> -->
          <h1 class="sitename">${AppConstants.appName}</h1>
        </a>

        <nav id="navmenu" class="navmenu">
          <ul>
            <li>
              <a href="${AppConstants.indexPageFileName}" class="${setActiveClass(AppConstants.indexPageFileName) || setActiveClass('')}">
                Trang Chủ
                <!-- Home -->
              </a>
            </li>
            <li>
              <a href="${AppConstants.aboutPageFileName}" class="${setActiveClass(AppConstants.aboutPageFileName)}">
                Về Chúng Tôi
                <!-- About -->
              </a>
            </li>
            <li>
              <a href="${AppConstants.coursesPageFileName}" class="${setActiveClass(AppConstants.coursesPageFileName)}">
                Chương Trình
                <!-- Programs -->
              </a>
            </li>
            <li>
              <a href="${AppConstants.trainersPageFileName}" class="${setActiveClass(AppConstants.trainersPageFileName)}">
                Giáo Viên
                <!-- Teachers -->
              </a>
            </li>
            <li>
              <a href="${AppConstants.eventsPageFileName}" class="${setActiveClass(AppConstants.eventsPageFileName)}">
                Sự Kiện
                <!-- Events -->
              </a>
            </li>
            <li>
              <a href="${AppConstants.pricingPageFileName}" class="${setActiveClass(AppConstants.pricingPageFileName)}">
                Học Phí
                <!-- Tuition -->
              </a>
            </li>
            <!-- <li class="dropdown"><a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#">Dropdown 1</a></li>
                <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
              </ul>
            </li> -->
            <li>
              <a href="${AppConstants.contactPageFileName}" class="${setActiveClass(AppConstants.contactPageFileName)}">
                Liên hệ
                <!-- Contact -->
              </a>
            </li>
          </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a class="btn-getstarted" href="${AppConstants.coursesPageFileName}">
          Tìm hiểu thêm
          <!-- Get Started -->
        </a>
      </div>
    </header>
  `;
};

export class HeaderComponent extends HTMLElement {
  constructor() {
    console.info(`HeaderComponent > constructor()`);
    super();
  }

  connectedCallback() {
    this.generateHtmlContent();
  }

  async generateHtmlContent() {
    console.info(`HeaderComponent > generateHtmlContent()`);

    try {
      const template = document.createElement('template');
      template.innerHTML = _generateHtml();
      this.appendChild(template.content.cloneNode(true));
    } catch (error) {
      console.error('HeaderComponent Exception. Error is:', error);
    }
  }
}