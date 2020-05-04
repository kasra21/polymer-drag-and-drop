import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'dragula/dist/dragula.js';

/**
 * `polymer-drag-and-drop`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PolymerDragAndDrop extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        ::slotted(.drag-container) {
          display: block;
          background-color: #dfdfdf;
          border-radius: 5px;
          min-height: 50px;
          margin: 0 auto;
          padding: 2em;
          text-align: center;
        }
        ::slotted(.drop-container) {
          border: 2px dashed #D9D9D9;
          border-radius: 5px;
          min-height: 50px;
          margin: 0 auto;
          margin-top: 10px;
          padding: 2em;
          display: block;
          text-align: center;
        }
      </style>
      <slot></slot>
    `;
  }

  static get properties() {
    return {
      /**
       * dragula obj
       */
      dragulaObj: {
        type: Object,
        value: function () {
            return null
        }
      },
      /**
       * Default drag selector
       */
      dragContainerSelector: {
        type: String,
        value: 'div#drags'
      },
      /**
       * Default drop selector
       */
      dropContainerSelector: {
        type: String,
        value: 'div#drops'
      }
    };
  }

  constructor() {
    super();    
    var containers = [this.querySelector(this.dragContainerSelector),this.querySelector(this.dropContainerSelector)];
    this.dragulaObj = dragula(containers, {
      revertOnSpill: true
    });
    
  }

}

window.customElements.define('polymer-drag-and-drop', PolymerDragAndDrop);
