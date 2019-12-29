import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'silver-card',
  styleUrl: 'card.css',
  shadow: true
})
export class Card {
  @Prop() title: string;

  render() {
      return (
          <div>
              <h2>
                  {this.title}
              </h2>
              <slot />
          </div>
      );
  }

}
