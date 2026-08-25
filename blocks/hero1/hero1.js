export default function decorate(block) {
  const cards = [...block.children];

  cards.forEach((card) => {
    card.classList.add('hero1-content');

    const pretitle = card.querySelector('h4');
    pretitle?.classList.add('hero1-pretitle');

    const title = card.querySelector('h1');
    title?.classList.add('hero1-title');

    const description = card.querySelector('p:not(:has(a))');
    description?.classList.add('hero1-description');

    const buttons = card.querySelector('p:has(a)');

    if (buttons) {
      buttons.classList.add('hero1-buttons');

      const links = buttons.querySelectorAll('a');

      links[0]?.classList.add(
        'hero1-button',
        'hero1-button-primary',
      );

      links[1]?.classList.add(
        'hero1-button',
        'hero1-button-secondary',
      );
    }

    const image = card.querySelector('picture')?.parentElement;
    image?.classList.add('hero1-image');

    const imageImg = image?.querySelector('img');
    imageImg?.classList.add('hero1-image-img');
  });
}
