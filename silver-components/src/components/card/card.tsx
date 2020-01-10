import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'silver-card',
  styleUrl: 'card.css',
  shadow: true
})
export class Card {
  @Prop() cardTitle: string;

  render() {
      return (
          <div>
              <h2>
                  {this.cardTitle}
              </h2>
              <slot />
          </div>
      );
  }

}
