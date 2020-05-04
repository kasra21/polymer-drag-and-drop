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
