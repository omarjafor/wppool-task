(function () {
    const container = document.createElement('div');
    container.style.cssText = `
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    gap: 20px;
    padding: 20px;
    background-color: #fff;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
  `;

    function createCard(name, imageUrl, link) {
        const card = document.createElement('div');
        card.style.cssText = `
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 0 0 auto;
      width: 120px;
    `;

        const anchor = document.createElement('a');
        anchor.href = link;
        anchor.style.cssText = `
      text-decoration: none;
      color: inherit;
      display: flex;
      flex-direction: column;
      align-items: center;
    `;

        const imgContainer = document.createElement('div');
        imgContainer.style.cssText = `
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #f0f0f0;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
    `;

        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `${name} category`;
        img.style.cssText = `
      width: 80px;
      height: 80px;
      object-fit: contain;
    `;

        const nameElement = document.createElement('p');
        nameElement.textContent = name;
        nameElement.style.cssText = `
      margin: 0;
      text-align: center;
      font-family: Arial, sans-serif;
      font-size: 14px;
      color: #333;
    `;

        imgContainer.appendChild(img);
        anchor.appendChild(imgContainer);
        anchor.appendChild(nameElement);
        card.appendChild(anchor);
        return card;
    }

    const cardData = [
        { name: 'Best Sellers', image: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/best-sellers.png', link: '/collections/jm-best-sellers' },
        { name: 'New', image: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/new.png', link: '/collections/jm-new-arrivals' },
        { name: 'Necklaces', image: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/necklaces.png', link: '/collections/necklaces' },
        { name: 'Rings', image: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/rings.png', link: '/collections/rings' },
        { name: 'Earrings', image: 'https://i.ibb.co.com/V2kKxz9/Necklace.png', link: '/collections/bracelets' },
        { name: 'Bracelets', image: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/bracelets.png', link: '/collections/fine-sample-sale' },
        { name: 'Personalized', image: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/personalized.png', link: '/collections/personalized' },
        { name: 'Fine', image: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/fine.png', link: '/collections/fine' },
        { name: 'Clearance', image: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/clearance.png', link: '/collections/clearance' },
    ];

    cardData.forEach(data => {
        const card = createCard(data.name, data.image, data.link);
        container.appendChild(card);
    });

    const mainContent = document.getElementById('MainContent');
    if (mainContent) {
        mainContent.parentNode.insertBefore(container, mainContent);
    } else {
        document.body.appendChild(container);
    }

    const style = document.createElement('style');
    style.textContent = `
    @media (min-width: 769px) {
      ${container.tagName.toLowerCase()} {
        justify-content: center;
      }
    }
    @media (max-width: 768px) {
      ${container.tagName.toLowerCase()} {
        flex-wrap: nowrap;
        justify-content: flex-start;
      }
    }
    ${container.tagName.toLowerCase()}::-webkit-scrollbar {
      display: none;
    }
  `;
    document.head.appendChild(style);
})();