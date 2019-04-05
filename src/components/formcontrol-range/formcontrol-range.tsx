import { Component, EventEmitter, Event, Prop, Element } from "@stencil/core";

@Component({
  tag: 'evb-range',
  styleUrl: 'formcontrol-range.css',
  shadow: true
})
export class EvbRange {

  @Prop({ mutable: true }) value: number;
  @Prop() min: number;
  @Prop() max: number;
  @Prop() step: number;

  @Event() evbBlur: EventEmitter<void>;
  @Event() evbChange: EventEmitter<number>;
  @Event() evbFocus: EventEmitter<void>;
  @Event() evbInput: EventEmitter<number>;

  @Element() host: HTMLElement;

  get inputValue(): number {
    const input: HTMLInputElement = this.host.shadowRoot.querySelector('input[type=range]');
    return +input.value;
  }

  render() {
    return (
      <input type="range"
        value={this.value}
        min={this.min}
        max={this.max}
        onBlur={() => this.evbBlur.emit()}
        onChange={() => this.evbChange.emit(this.inputValue)}
        onFocus={() => this.evbFocus.emit()}
        onInput={() => this.evbInput.emit(this.inputValue)} />
    );
  }
}