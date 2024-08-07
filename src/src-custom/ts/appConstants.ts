export class AppConstants {
  constructor() {
    console.info(`AppConstants > constructor()`);
  }

  // The app's name.
  public static readonly appName: string = `BeeHouse`;

  /* Files' name constants. */
  public static readonly indexPageFileName: string = `index.html`;
  public static readonly aboutPageFileName: string = `about.html`;
  public static readonly coursesPageFileName: string = `courses.html`;
  public static readonly courseDetailsPageFileName: string = `course-details.html`;
  public static readonly trainersPageFileName: string = `trainers.html`;
  public static readonly eventsPageFileName: string = `events.html`;
  public static readonly pricingPageFileName: string = `pricing.html`;
  public static readonly contactPageFileName: string = `contact.html`;

  /* Html elements' name constants. */
  public static readonly headerComponentElementName: string = `header-component`;
  public static readonly aboutComponentElementName: string = `about-component`;
  public static readonly countsComponentElementName: string = `counts-component`;
  public static readonly coursesComponentElementName: string = `courses-component`;
  // public static readonly courseDetailsComponentElementName: string = `course-details-component`;
  public static readonly footerComponentElementName: string = `footer-component`;

  /* Shared html elements' name constants. */

  /* Html attributes' name constants. */
  public static readonly useGlobalStyleAttributeName: string = `use-global-style`;
}