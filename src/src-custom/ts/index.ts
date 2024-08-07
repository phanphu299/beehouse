import '../scss/mainCustom.scss';

import { AppConstants } from './appConstants';
import { AboutComponent } from './components/aboutComponent';
import { CountsComponent } from './components/countsComponent';
import { CoursesComponent } from './components/coursesComponent';
import { FooterComponent } from './components/footerComponent';
import { HeaderComponent } from './components/headerComponent';

class Index {
  constructor() {
    console.info(`Index > constructor()`);
    
    this.initWebComponents();
    this._setPageTitle();
  }

  private _defineCustomElement(elementName: string, elementClass: CustomElementConstructor) {
    if (
      document.querySelector(elementName)
      && !customElements.get(elementName)
    ) {
      customElements.define(elementName, elementClass);
    }
  }

  private initWebComponents(): void {
    this._defineCustomElement(AppConstants.headerComponentElementName, HeaderComponent);

    this._defineCustomElement(AppConstants.aboutComponentElementName, AboutComponent);
    this._defineCustomElement(AppConstants.countsComponentElementName, CountsComponent);
    this._defineCustomElement(AppConstants.coursesComponentElementName, CoursesComponent);

    this._defineCustomElement(AppConstants.footerComponentElementName, FooterComponent);
  }

  // Sets the page title based on the current URL.
  private _setPageTitle(): void {
    const pageTitleMap: { [key: string]: string } = {
      [AppConstants.indexPageFileName]: `Index - ${AppConstants.appName}`,
      [AppConstants.aboutPageFileName]: `About - ${AppConstants.appName}`,
      [AppConstants.coursesPageFileName]: `Programs - ${AppConstants.appName}`,
      [AppConstants.courseDetailsPageFileName]: `Program Details - ${AppConstants.appName}`,
      [AppConstants.trainersPageFileName]: `Teachers - ${AppConstants.appName}`,
      [AppConstants.eventsPageFileName]: `Events - ${AppConstants.appName}`,
      [AppConstants.pricingPageFileName]: `Tuition - ${AppConstants.appName}`,
      [AppConstants.contactPageFileName]: `Contact - ${AppConstants.appName}`,
    };

    const currentPage = window.location.pathname.split('/').pop() || AppConstants.indexPageFileName;
    const newTitle = pageTitleMap[currentPage] || 'Unknown';

    document.title = newTitle;
  }
}

new Index();