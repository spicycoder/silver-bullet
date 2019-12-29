import { newE2EPage } from '@stencil/core/testing';

describe('silver-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<silver-card></silver-card>');

    const element = await page.find('silver-card');
    expect(element).toHaveClass('hydrated');
  });
});
