import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: 'silver-card',
    styleUrl: './silver-card.css',
    scoped: true
})
export class SilverCard {
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