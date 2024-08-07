import { AppConstants } from "../appConstants";

const _generateHtml = () => {
  return /* html */ `
    <!--
    <style>
      /* Component-specific styles go here */
      h1 {
        color: blue;
      }
    </style>
    -->
    <h1>sample-component says Hi!</h1>
  `;
};

export class SampleComponent extends HTMLElement {
  constructor() {
    console.info(`SampleComponent > constructor()`);
    super();
  }

  connectedCallback() {
    this.generateHtmlContent();
  }

  async generateHtmlContent() {
    console.info(`SampleComponent > generateHtmlContent()`);

    try {
      const template = document.createElement('template');
      template.innerHTML = _generateHtml();

      // Get the value of the `use-global-style` attribute.
      const useGlobalStyle = this.getAttribute(AppConstants.useGlobalStyleAttributeName) ?? true;
      if (useGlobalStyle) {
        // Append template content to the light DOM (use global styles).
        this.appendChild(template.content.cloneNode(true));
      } else {
        this.attachShadow({ mode: 'open' });
        // Append template content to the shadow DOM (use local styles).
        if (this.shadowRoot) {
          this.shadowRoot.appendChild(template.content.cloneNode(true));
        }
      }
    } catch (error) {
      console.error('SampleComponent Exception. Error is:', error);
    }
  }
}
