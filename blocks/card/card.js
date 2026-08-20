// export default function decorate(block) {

//     const child = block.children[0];
//     if (child) {
//         child.classList.add('custom-card');

//         const integer = child.querySelector('h5');
//         if (integer) {
//             integer.classList.add('custom-card-numbers');
//         }

//         const heading = child.querySelector('h2');
//         if (heading) {
//             heading.classList.add('custom-card-heading');
//         }

//         const image = child.querySelector('p:has(img)');
//         if (image) {
//             image.classList.add('custom-image');
//         }

//         const description = child.querySelector('p:not(:has(img))');
//         if (description) {
//             description.classList.add('custom-description');
//         }
//     }

//     // ------card2------

//     const child1 = block.children[1];
//     if (child1) {
//         child1.classList.add('custom-card-1')

//         const integer1 = child1.querySelector('h5')
//         if (integer1) {
//             integer1.classList.add('custom-card-numbers-1')
//         }

//         const heading1 = child1.querySelector('h2')
//         if (heading1) {
//             heading1.classList.add('custom-card-heading-2')
//         }

//         const image1 = child1.querySelector('p:has(img)')
//         if (image1) {
//             image1.classList.add('custom-image-1')
//         }
//         const description1 = child1.querySelector('p:not(:has(img))')
//         if (description1) {
//             description1.classList.add('custom-description-1')
//         }
//     }

//     // ------------card3---------
//     const child2 = block.children[2];
//     if (child2) {
//         child2.classList.add('custom-card-2');

//         const integer2 = child2.querySelector('h5');
//         if (integer2) {
//             integer2.classList.add('custom-card-numbers-2');
//         }

//         const heading2 = child2.querySelector('h2');
//         if (heading2) {
//             heading2.classList.add('custom-card-heading-2');
//         }

//         const image2 = child2.querySelector('p:has(img)');
//         if (image2) {
//             image2.classList.add('custom-image-2');
//         }

//         const description2 = child2.querySelector('p:not(:has(img))');
//         if (description2) {
//             description2.classList.add('custom-description-2');
//         }
//     }


//     // ---------card4-------
//     const child3 = block.children[3];
//     if (child3) {
//         child3.classList.add('custom-card-3');

//         const integer3 = child3.querySelector('h5');
//         if (integer3) {
//             integer3.classList.add('custom-card-numbers-3');
//         }

//         const heading3 = child3.querySelector('h2');
//         if (heading3) {
//             heading3.classList.add('custom-card-heading-3');
//         }

//         const image3 = child3.querySelector('p:has(img)');
//         if (image3) {
//             image3.classList.add('custom-image-3');
//         }

//         const description3 = child3.querySelector('p:not(:has(img))');
//         if (description3) {
//             description3.classList.add('custom-description-3');
//         }
//     }
// }


export default function decorate(block) {
    const cards = [...block.children];
    cards.forEach((card) => {
        card?.classList.add('custom-card');
        const cardnum   = card.querySelector('h5');
        cardnum?.classList.add('custom-card-numbers');
        const cardimg = card.querySelector('p:has(img)');
        cardimg?.classList.add('custom-image');
        const cardtitle = card.querySelector('h2');
        cardtitle?.classList.add('custom-title');
        const cardtext = card.querySelector('p:not(:has(img))');
        cardtext?.classList.add('custom-text');
    });
}