// PRODUTOS

const productsData = [

{
    id: 1,
    title: "React de A a Z",
    tag: "Curso Online",
    description: "Domine React criando aplicações modernas do zero ao profissional.",
    price: 199.90,
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop"
},

{
    id: 2,
    title: "CSS Moderno",
    tag: "E-book",
    description: "Aprenda Flexbox, Grid, animações e layouts profissionais.",
    price: 49.90,
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop"
},

{
    id: 3,
    title: "Node.js Completo",
    tag: "Curso Online",
    description: "Crie APIs modernas e escaláveis usando Node.js e Express.",
    price: 249.90,
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1200&auto=format&fit=crop"
},

{
    id: 4,
    title: "UI/UX para Devs",
    tag: "E-book",
    description: "Aprenda design moderno para criar interfaces incríveis.",
    price: 79.90,
    imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop"
}

];

// FORMATAR PREÇO

function formatPrice(price){

    return price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

}

// RENDERIZAR PRODUTOS

function renderProducts(){

    const productGrid = document.getElementById('product-grid');

    productsData.forEach(product => {

        const card = document.createElement('div');

        card.classList.add('product-card');

        card.innerHTML = `

            <img src="${product.imageUrl}" alt="${product.title}">

            <div class="product-info">

                <span class="product-tag">
                    ${product.tag}
                </span>

                <h3>${product.title}</h3>

                <p class="product-description">
                    ${product.description}
                </p>

                <div class="product-price-btn">

                    <span class="product-price">
                        ${formatPrice(product.price)}
                    </span>

                    <button class="btn-buy">
                        Comprar
                    </button>

                </div>

            </div>
        `;

        const button = card.querySelector('.btn-buy');

        button.addEventListener('click', () => {

            alert(`${product.title} adicionado ao carrinho!`);

        });

        productGrid.appendChild(card);

    });

}

// NEWSLETTER

const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm.addEventListener('submit', (event) => {

    event.preventDefault();

    alert('E-mail cadastrado com sucesso!');

    newsletterForm.reset();

});

// INICIAR

renderProducts();