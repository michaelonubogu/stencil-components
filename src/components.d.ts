/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface EvbButtonBar {
    'justify': 'left' | 'center' | 'right';
  }
  interface EvbButtonBarAttributes extends StencilHTMLAttributes {
    'justify'?: 'left' | 'center' | 'right';
  }

  interface EvbButton {
    /**
    * Whether or not the button is disabled
    */
    'disabled': boolean;
    /**
    * Invert the coloring of the button
    */
    'ghost': any;
    /**
    * The target of the anchor tag
    */
    'href'?: string;
    /**
    * Extra rounded colors
    */
    'pill': any;
    /**
    * The type of the button, leave empty in case of a link
    */
    'type'?: 'submit' | 'button' | 'reset';
  }
  interface EvbButtonAttributes extends StencilHTMLAttributes {
    /**
    * Whether or not the button is disabled
    */
    'disabled'?: boolean;
    /**
    * Invert the coloring of the button
    */
    'ghost'?: any;
    /**
    * The target of the anchor tag
    */
    'href'?: string;
    /**
    * Blur event
    */
    'onEvbBlur'?: (event: CustomEvent<void>) => void;
    /**
    * Focus event
    */
    'onEvbFocus'?: (event: CustomEvent<void>) => void;
    /**
    * Extra rounded colors
    */
    'pill'?: any;
    /**
    * The type of the button, leave empty in case of a link
    */
    'type'?: 'submit' | 'button' | 'reset';
  }

  interface EvbFormcontrol {
    'name': string;
  }
  interface EvbFormcontrolAttributes extends StencilHTMLAttributes {
    'name'?: string;
  }

  interface EvbHeader {
    'heading': number | string;
  }
  interface EvbHeaderAttributes extends StencilHTMLAttributes {
    'heading': number | string;
  }

  interface EvbCollection {}
  interface EvbCollectionAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'EvbButtonBar': Components.EvbButtonBar;
    'EvbButton': Components.EvbButton;
    'EvbFormcontrol': Components.EvbFormcontrol;
    'EvbHeader': Components.EvbHeader;
    'EvbCollection': Components.EvbCollection;
  }

  interface StencilIntrinsicElements {
    'evb-button-bar': Components.EvbButtonBarAttributes;
    'evb-button': Components.EvbButtonAttributes;
    'evb-formcontrol': Components.EvbFormcontrolAttributes;
    'evb-header': Components.EvbHeaderAttributes;
    'evb-collection': Components.EvbCollectionAttributes;
  }


  interface HTMLEvbButtonBarElement extends Components.EvbButtonBar, HTMLStencilElement {}
  var HTMLEvbButtonBarElement: {
    prototype: HTMLEvbButtonBarElement;
    new (): HTMLEvbButtonBarElement;
  };

  interface HTMLEvbButtonElement extends Components.EvbButton, HTMLStencilElement {}
  var HTMLEvbButtonElement: {
    prototype: HTMLEvbButtonElement;
    new (): HTMLEvbButtonElement;
  };

  interface HTMLEvbFormcontrolElement extends Components.EvbFormcontrol, HTMLStencilElement {}
  var HTMLEvbFormcontrolElement: {
    prototype: HTMLEvbFormcontrolElement;
    new (): HTMLEvbFormcontrolElement;
  };

  interface HTMLEvbHeaderElement extends Components.EvbHeader, HTMLStencilElement {}
  var HTMLEvbHeaderElement: {
    prototype: HTMLEvbHeaderElement;
    new (): HTMLEvbHeaderElement;
  };

  interface HTMLEvbCollectionElement extends Components.EvbCollection, HTMLStencilElement {}
  var HTMLEvbCollectionElement: {
    prototype: HTMLEvbCollectionElement;
    new (): HTMLEvbCollectionElement;
  };

  interface HTMLElementTagNameMap {
    'evb-button-bar': HTMLEvbButtonBarElement
    'evb-button': HTMLEvbButtonElement
    'evb-formcontrol': HTMLEvbFormcontrolElement
    'evb-header': HTMLEvbHeaderElement
    'evb-collection': HTMLEvbCollectionElement
  }

  interface ElementTagNameMap {
    'evb-button-bar': HTMLEvbButtonBarElement;
    'evb-button': HTMLEvbButtonElement;
    'evb-formcontrol': HTMLEvbFormcontrolElement;
    'evb-header': HTMLEvbHeaderElement;
    'evb-collection': HTMLEvbCollectionElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}