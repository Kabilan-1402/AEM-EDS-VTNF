export default function decorate(block) {
  const cards = [...block.children];
  cards.forEach((card) => {
    card.classList.add('health-card');
    const title = card.querySelector('h2');
    title?.classList.add('health-card-title');
    const pretitle = card.querySelector('h3');
    pretitle?.classList.add('health-card-pretitle');
    const image = card.querySelector('p:has(img)');
    image?.classList.add('health-card-image');
    const imageImg = image?.querySelector('img');
    imageImg?.classList.add('health-card-image-img');
    const description = card.querySelector('p:not(:has(img))');
    description?.classList.add('health-card-description');
  });
}
