const products = [{
        "id": "1",
        "image": "https://res.cloudinary.com/difbmfdoo/image/upload/v1708066869/My_project_11_1_dz1lph.png",
        "title": "Latest Edition"
    },
    {
        "id": "2",
        "image": "https://res.cloudinary.com/difbmfdoo/image/upload/v1708067152/1_rcjox1.png",
        "title": "Shirts"
    },
    {
        "id": "3",
        "image": "https://res.cloudinary.com/difbmfdoo/image/upload/v1708067398/2_xtvdrd.png",
        "title": "Hoodies"
    }
];

const container = document.getElementById('product-container');
const searchInput = document.querySelector('.search-input');

function renderProducts(products) {
    container.innerHTML = '';
    products.forEach(product => {
        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <div class="item-title">${product.title}</div>
      `;
        container.appendChild(item);
    });
}

renderProducts(products);

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm));
    renderProducts(filteredProducts);
});