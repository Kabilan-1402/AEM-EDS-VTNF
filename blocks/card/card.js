export default function decorate(block) {
  const cards = [...block.children];
  cards.forEach((card) => {
    card?.classList.add('custom-card');
    const cardnum = card.querySelector('h5');
    cardnum?.classList.add('custom-card-numbers');
    const cardimg = card.querySelector('p:has(img)');
    cardimg?.classList.add('custom-card-image');
    const cardtitle = card.querySelector('h2');
    cardtitle?.classList.add('custom-card-heading');
    const cardtext = card.querySelector('p:not(:has(img))');
    cardtext?.classList.add('custom-card-description');
  });
}

