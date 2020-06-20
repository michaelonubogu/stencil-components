/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  PickedFile,
} from './components/file-picker/pickedfile';

export namespace Components {
  interface EvbAccordion {
    /**
    * When loaded, open the nth expansion panel. Count starts at 1
    */
    'openNth'?: number;
    'openPanel': (nth: number) => Promise<void>;
  }
  interface EvbButton {
    /**
    * Whether or not the button is disabled
    */
    'disabled': boolean;
    /**
    * Invert the coloring of the button
    */
    'ghost': boolean;
    /**
    * The target of the anchor tag
    */
    'href'?: string;
    /**
    * Extra rounded colors
    */
    'pill': boolean;
    /**
    * The type of the button, leave empty in case of a link
    */
    'type'?: 'submit' | 'button' | 'reset' | 'link';
    /**
    * Button variants to add additional styling
    */
    'variant'?: 'primary' | 'secondary' | 'danger';
  }
  interface EvbButtonBar {
    'align': 'top' | 'center' | 'bottom';
    /**
    * Justify the contents of the buttonbar
    */
    'justify': 'left' | 'center' | 'right';
  }
  interface EvbDonut {
    'diameter': number;
    'invert': boolean;
    'progress': number;
    'text': boolean;
    'thickness': number;
  }
  interface EvbDropzone {
    /**
    * A string that defines the file types the file input should accept. This string is a comma-separated list of unique file type specifiers. To accept images, video and audio, use: accept="audio/*,video/*,image/*" otherwise provide the correct mimetype, eg: image/png for png images etc
    */
    'accept': string;
  }
  interface EvbExpansionPanel {
    /**
    * Where to align the title
    */
    'justify'?: 'left' | 'right' | 'center';
    /**
    * Whether the panel is open, eg: shows it's content
    */
    'open': boolean;
    /**
    * The textual title of the panel
    */
    'text': string;
    'toggle': (force?: boolean) => Promise<void>;
  }
  interface EvbFilepicker {
    /**
    * A string that defines the file types the file input should accept. This string is a comma-separated list of unique file type specifiers. To accept images, video and audio, use: accept="audio/*,video/*,image/*" otherwise provide the correct mimetype, eg: image/png for png images etc
    */
    'accept': string;
    'handleFiles': (files: FileList) => Promise<void>;
    /**
    * Should we show the input type=file?
    */
    'input': boolean;
    /**
    * indicates that the user may choose more than one file
    */
    'multiple': boolean;
  }
  interface EvbFilepreview {
    'alt': string;
    'caption'?: string;
    /**
    * The source (data) url of the image to preview
    */
    'src': string;
  }
  interface EvbFlyout {
    'header': string;
    'open': boolean;
    'toggle': (forceOpen?: boolean) => Promise<void>;
  }
  interface EvbFormcontrol {}
  interface EvbHeader {
    'heading': number | string;
  }
  interface EvbProgressbar {
    /**
    * The height of the bar in pixels
    */
    'height': number;
    /**
    * Progress percentage
    */
    'progress': number;
    /**
    * Show the progress as text in the progress bar
    */
    'text': boolean;
  }
  interface EvbRange {
    'disabled': boolean;
    'max': number;
    'min': number;
    'step': number;
    'value': number;
  }
  interface EvbToggle {
    'labeloff': string;
    'labelon': string;
    'type': 'default' | 'flat' | 'rotate';
    'value': boolean;
  }
}

declare global {


  interface HTMLEvbAccordionElement extends Components.EvbAccordion, HTMLStencilElement {}
  var HTMLEvbAccordionElement: {
    prototype: HTMLEvbAccordionElement;
    new (): HTMLEvbAccordionElement;
  };

  interface HTMLEvbButtonElement extends Components.EvbButton, HTMLStencilElement {}
  var HTMLEvbButtonElement: {
    prototype: HTMLEvbButtonElement;
    new (): HTMLEvbButtonElement;
  };

  interface HTMLEvbButtonBarElement extends Components.EvbButtonBar, HTMLStencilElement {}
  var HTMLEvbButtonBarElement: {
    prototype: HTMLEvbButtonBarElement;
    new (): HTMLEvbButtonBarElement;
  };

  interface HTMLEvbDonutElement extends Components.EvbDonut, HTMLStencilElement {}
  var HTMLEvbDonutElement: {
    prototype: HTMLEvbDonutElement;
    new (): HTMLEvbDonutElement;
  };

  interface HTMLEvbDropzoneElement extends Components.EvbDropzone, HTMLStencilElement {}
  var HTMLEvbDropzoneElement: {
    prototype: HTMLEvbDropzoneElement;
    new (): HTMLEvbDropzoneElement;
  };

  interface HTMLEvbExpansionPanelElement extends Components.EvbExpansionPanel, HTMLStencilElement {}
  var HTMLEvbExpansionPanelElement: {
    prototype: HTMLEvbExpansionPanelElement;
    new (): HTMLEvbExpansionPanelElement;
  };

  interface HTMLEvbFilepickerElement extends Components.EvbFilepicker, HTMLStencilElement {}
  var HTMLEvbFilepickerElement: {
    prototype: HTMLEvbFilepickerElement;
    new (): HTMLEvbFilepickerElement;
  };

  interface HTMLEvbFilepreviewElement extends Components.EvbFilepreview, HTMLStencilElement {}
  var HTMLEvbFilepreviewElement: {
    prototype: HTMLEvbFilepreviewElement;
    new (): HTMLEvbFilepreviewElement;
  };

  interface HTMLEvbFlyoutElement extends Components.EvbFlyout, HTMLStencilElement {}
  var HTMLEvbFlyoutElement: {
    prototype: HTMLEvbFlyoutElement;
    new (): HTMLEvbFlyoutElement;
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

  interface HTMLEvbProgressbarElement extends Components.EvbProgressbar, HTMLStencilElement {}
  var HTMLEvbProgressbarElement: {
    prototype: HTMLEvbProgressbarElement;
    new (): HTMLEvbProgressbarElement;
  };

  interface HTMLEvbRangeElement extends Components.EvbRange, HTMLStencilElement {}
  var HTMLEvbRangeElement: {
    prototype: HTMLEvbRangeElement;
    new (): HTMLEvbRangeElement;
  };

  interface HTMLEvbToggleElement extends Components.EvbToggle, HTMLStencilElement {}
  var HTMLEvbToggleElement: {
    prototype: HTMLEvbToggleElement;
    new (): HTMLEvbToggleElement;
  };
  interface HTMLElementTagNameMap {
    'evb-accordion': HTMLEvbAccordionElement;
    'evb-button': HTMLEvbButtonElement;
    'evb-button-bar': HTMLEvbButtonBarElement;
    'evb-donut': HTMLEvbDonutElement;
    'evb-dropzone': HTMLEvbDropzoneElement;
    'evb-expansion-panel': HTMLEvbExpansionPanelElement;
    'evb-filepicker': HTMLEvbFilepickerElement;
    'evb-filepreview': HTMLEvbFilepreviewElement;
    'evb-flyout': HTMLEvbFlyoutElement;
    'evb-formcontrol': HTMLEvbFormcontrolElement;
    'evb-header': HTMLEvbHeaderElement;
    'evb-progressbar': HTMLEvbProgressbarElement;
    'evb-range': HTMLEvbRangeElement;
    'evb-toggle': HTMLEvbToggleElement;
  }
}

declare namespace LocalJSX {
  interface EvbAccordion {
    /**
    * When loaded, open the nth expansion panel. Count starts at 1
    */
    'openNth'?: number;
  }
  interface EvbButton {
    /**
    * Whether or not the button is disabled
    */
    'disabled'?: boolean;
    /**
    * Invert the coloring of the button
    */
    'ghost'?: boolean;
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
    'pill'?: boolean;
    /**
    * The type of the button, leave empty in case of a link
    */
    'type'?: 'submit' | 'button' | 'reset' | 'link';
    /**
    * Button variants to add additional styling
    */
    'variant'?: 'primary' | 'secondary' | 'danger';
  }
  interface EvbButtonBar {
    'align'?: 'top' | 'center' | 'bottom';
    /**
    * Justify the contents of the buttonbar
    */
    'justify'?: 'left' | 'center' | 'right';
  }
  interface EvbDonut {
    'diameter'?: number;
    'invert'?: boolean;
    'progress'?: number;
    'text'?: boolean;
    'thickness'?: number;
  }
  interface EvbDropzone {
    /**
    * A string that defines the file types the file input should accept. This string is a comma-separated list of unique file type specifiers. To accept images, video and audio, use: accept="audio/*,video/*,image/*" otherwise provide the correct mimetype, eg: image/png for png images etc
    */
    'accept'?: string;
    /**
    * Fired after a file has been picked§
    */
    'onDropped'?: (event: CustomEvent<PickedFile>) => void;
  }
  interface EvbExpansionPanel {
    /**
    * Where to align the title
    */
    'justify'?: 'left' | 'right' | 'center';
    /**
    * Emits when the panel is closed
    */
    'onClosed'?: (event: CustomEvent<void>) => void;
    /**
    * Emits when the panel is opened
    */
    'onOpened'?: (event: CustomEvent<void>) => void;
    /**
    * Whether the panel is open, eg: shows it's content
    */
    'open'?: boolean;
    /**
    * The textual title of the panel
    */
    'text'?: string;
  }
  interface EvbFilepicker {
    /**
    * A string that defines the file types the file input should accept. This string is a comma-separated list of unique file type specifiers. To accept images, video and audio, use: accept="audio/*,video/*,image/*" otherwise provide the correct mimetype, eg: image/png for png images etc
    */
    'accept'?: string;
    /**
    * Should we show the input type=file?
    */
    'input'?: boolean;
    /**
    * indicates that the user may choose more than one file
    */
    'multiple'?: boolean;
    /**
    * Emits the dataurl for the image
    */
    'onPick'?: (event: CustomEvent<PickedFile>) => void;
  }
  interface EvbFilepreview {
    'alt'?: string;
    'caption'?: string;
    /**
    * The source (data) url of the image to preview
    */
    'src'?: string;
  }
  interface EvbFlyout {
    'header'?: string;
    'onClose'?: (event: CustomEvent<void>) => void;
    'onOpen'?: (event: CustomEvent<void>) => void;
    'open'?: boolean;
  }
  interface EvbFormcontrol {}
  interface EvbHeader {
    'heading': number | string;
  }
  interface EvbProgressbar {
    /**
    * The height of the bar in pixels
    */
    'height'?: number;
    'onCompleted'?: (event: CustomEvent<void>) => void;
    /**
    * Progress percentage
    */
    'progress'?: number;
    /**
    * Show the progress as text in the progress bar
    */
    'text'?: boolean;
  }
  interface EvbRange {
    'disabled'?: boolean;
    'max'?: number;
    'min'?: number;
    'onEvbBlur'?: (event: CustomEvent<void>) => void;
    'onEvbChange'?: (event: CustomEvent<number>) => void;
    'onEvbFocus'?: (event: CustomEvent<void>) => void;
    'onEvbInput'?: (event: CustomEvent<number>) => void;
    'step'?: number;
    'value'?: number;
  }
  interface EvbToggle {
    'labeloff'?: string;
    'labelon'?: string;
    'onEvbBlur'?: (event: CustomEvent<void>) => void;
    'onEvbChange'?: (event: CustomEvent<boolean>) => void;
    'onEvbFocus'?: (event: CustomEvent<void>) => void;
    'onEvbInput'?: (event: CustomEvent<boolean>) => void;
    'type'?: 'default' | 'flat' | 'rotate';
    'value'?: boolean;
  }

  interface IntrinsicElements {
    'evb-accordion': EvbAccordion;
    'evb-button': EvbButton;
    'evb-button-bar': EvbButtonBar;
    'evb-donut': EvbDonut;
    'evb-dropzone': EvbDropzone;
    'evb-expansion-panel': EvbExpansionPanel;
    'evb-filepicker': EvbFilepicker;
    'evb-filepreview': EvbFilepreview;
    'evb-flyout': EvbFlyout;
    'evb-formcontrol': EvbFormcontrol;
    'evb-header': EvbHeader;
    'evb-progressbar': EvbProgressbar;
    'evb-range': EvbRange;
    'evb-toggle': EvbToggle;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'evb-accordion': LocalJSX.EvbAccordion & JSXBase.HTMLAttributes<HTMLEvbAccordionElement>;
      'evb-button': LocalJSX.EvbButton & JSXBase.HTMLAttributes<HTMLEvbButtonElement>;
      'evb-button-bar': LocalJSX.EvbButtonBar & JSXBase.HTMLAttributes<HTMLEvbButtonBarElement>;
      'evb-donut': LocalJSX.EvbDonut & JSXBase.HTMLAttributes<HTMLEvbDonutElement>;
      'evb-dropzone': LocalJSX.EvbDropzone & JSXBase.HTMLAttributes<HTMLEvbDropzoneElement>;
      'evb-expansion-panel': LocalJSX.EvbExpansionPanel & JSXBase.HTMLAttributes<HTMLEvbExpansionPanelElement>;
      'evb-filepicker': LocalJSX.EvbFilepicker & JSXBase.HTMLAttributes<HTMLEvbFilepickerElement>;
      'evb-filepreview': LocalJSX.EvbFilepreview & JSXBase.HTMLAttributes<HTMLEvbFilepreviewElement>;
      'evb-flyout': LocalJSX.EvbFlyout & JSXBase.HTMLAttributes<HTMLEvbFlyoutElement>;
      'evb-formcontrol': LocalJSX.EvbFormcontrol & JSXBase.HTMLAttributes<HTMLEvbFormcontrolElement>;
      'evb-header': LocalJSX.EvbHeader & JSXBase.HTMLAttributes<HTMLEvbHeaderElement>;
      'evb-progressbar': LocalJSX.EvbProgressbar & JSXBase.HTMLAttributes<HTMLEvbProgressbarElement>;
      'evb-range': LocalJSX.EvbRange & JSXBase.HTMLAttributes<HTMLEvbRangeElement>;
      'evb-toggle': LocalJSX.EvbToggle & JSXBase.HTMLAttributes<HTMLEvbToggleElement>;
    }
  }
}


