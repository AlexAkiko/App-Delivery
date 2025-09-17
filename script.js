
document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm');
    const whatsappInput = document.getElementById('whatsapp');

    orderForm.addEventListener('submit', (event) => {
        // Remove a validação padrão do formulário para controlarmos com JS
        event.preventDefault();

        // Remove qualquer caractere não numérico do input
        const whatsappNumber = whatsappInput.value.replace(/\D/g, '');

        // Valida se o número tem 11 dígitos
        if (whatsappNumber.length !== 11) {
            alert('Por favor, insira um número de WhatsApp válido com 11 dígitos (DDD + 9 + número).');
            whatsappInput.focus();
        } else {
            // Redireciona para a segunda página
            window.location.href = 'menu.html'; // Substitua 'menu.html' pelo nome do arquivo da sua segunda tela
        }
    });
});



const pizzaCategory = document.getElementById('pizza-category');

// Adiciona um evento de clique para redirecionar para a página de pizzas
if (pizzaCategory) {
    pizzaCategory.addEventListener('click', () => {
        window.location.href = 'pizzas.html';
    });
}

// O código abaixo vai em pizzas.html para popular a lista

document.addEventListener('DOMContentLoaded', () => {
    const pizzaList = [
        { nome: 'Calabresa', descricao: 'Mussarela, calabresa, cebola, azeitona e orégano', imagem: 'img/pizzacategoria.png' },
        { nome: 'Marguerita', descricao: 'Mussarela, tomate, manjericão e azeite', imagem: 'img/pizzacategoria.png' },
        { nome: 'Quatro Queijos', descricao: 'Mussarela, provolone, parmesão e gorgonzola', imagem: 'img/pizzacategoria.png' },
        { nome: 'Marguerita', descricao: 'Mussarela, tomate, manjericão e azeite', imagem: 'img/pizzacategoria.png' },
        { nome: 'Marguerita', descricao: 'Mussarela, tomate, manjericão e azeite', imagem: 'img/pizzacategoria.png' },
        { nome: 'Marguerita', descricao: 'Mussarela, tomate, manjericão e azeite', imagem: 'img/pizzacategoria.png' },
        { nome: 'Marguerita', descricao: 'Mussarela, tomate, manjericão e azeite', imagem: 'img/pizzacategoria.png' },
        { nome: 'Marguerita', descricao: 'Mussarela, tomate, manjericão e azeite', imagem: 'img/pizzacategoria.png' },
        // Adicione mais pizzas conforme necessário
    ];

    const contentPizzas = document.querySelector('.content-pizzas');

    // Cria os elementos HTML para cada pizza na lista
    pizzaList.forEach(pizza => {
        const pizzaItem = document.createElement('div');
        pizzaItem.classList.add('pizza-item');

        pizzaItem.innerHTML = `
            <img src="${pizza.imagem}" alt="${pizza.nome}">
            <div class="pizza-details">
                <h3>${pizza.nome}</h3>
                <p>${pizza.descricao}</p>
            </div>
        `;
        contentPizzas.appendChild(pizzaItem);
    });
});

// A LISTA DE PIZZAS DEVE SER GLOBAL para ser acessível em ambas as páginas
const pizzaList = [
    {
        id: 1,
        nome: 'Calabresa',
        descricao: 'Mussarela, calabresa, cebola, azeitona e orégano',
        imagem: 'img/pizza grande 1.png',
        precos: { media: 45.00, grande: 55.00, familia: 65.00 }
    },
    {
        id: 2,
        nome: 'Marguerita',
        descricao: 'Mussarela, tomate, manjericão e azeite',
        imagem: 'img/pizza grande 1.png',
        precos: { media: 40.00, grande: 50.00, familia: 60.00 }
    },
    {
        id: 3,
        nome: 'Quatro Queijos',
        descricao: 'Mussarela, provolone, parmesão e gorgonzola',
        imagem: 'img/pizza grande 1.png',
        precos: { media: 50.00, grande: 60.00, familia: 70.00 }
    },
    {
        id: 3,
        nome: 'Quatro Queijos',
        descricao: 'Mussarela, provolone, parmesão e gorgonzola',
        imagem: 'img/pizza grande 1.png',
        precos: { media: 50.00, grande: 60.00, familia: 70.00 }
    },
    {
        id: 3,
        nome: 'Quatro Queijos',
        descricao: 'Mussarela, provolone, parmesão e gorgonzola',
        imagem: 'img/pizza grande 1.png',
        precos: { media: 50.00, grande: 60.00, familia: 70.00 }
    },
    {
        id: 3,
        nome: 'Quatro Queijos',
        descricao: 'Mussarela, provolone, parmesão e gorgonzola',
        imagem: 'img/pizza grande 1.png',
        precos: { media: 50.00, grande: 60.00, familia: 70.00 }
    },
    {
        id: 3,
        nome: 'Quatro Queijos',
        descricao: 'Mussarela, provolone, parmesão e gorgonzola',
        imagem: 'img/pizza grande 1.png',
        precos: { media: 50.00, grande: 60.00, familia: 70.00 }
    },
    // Adicione mais pizzas aqui com IDs e preços
];

document.addEventListener('DOMContentLoaded', () => {
    // LÓGICA DA PÁGINA DE PIZZAS
    const contentPizzas = document.querySelector('.content-pizzas');
    if (contentPizzas) { // Verifica se estamos na página de pizzas
        contentPizzas.innerHTML = '';
        pizzaList.forEach(pizza => {
            const pizzaItem = document.createElement('div');
            pizzaItem.classList.add('pizza-item');
            pizzaItem.dataset.id = pizza.id; // Adiciona o ID da pizza para a navegação

            pizzaItem.innerHTML = `
                <img src="${pizza.imagem}" alt="${pizza.nome}">
                <div class="pizza-details">
                    <h3>${pizza.nome}</h3>
                    <p>${pizza.descricao}</p>
                </div>
            `;
            contentPizzas.appendChild(pizzaItem);

            // Adiciona o evento de clique para a navegação
            pizzaItem.addEventListener('click', () => {
                window.location.href = `product-details.html?id=${pizza.id}`;
            });
        });
    }

    // LÓGICA DA PÁGINA DE DETALHES
    const containerDetails = document.querySelector('.container-details');
    if (containerDetails) { // Verifica se estamos na página de detalhes
        const params = new URLSearchParams(window.location.search);
        const pizzaId = parseInt(params.get('id'));

        const selectedPizza = pizzaList.find(pizza => pizza.id === pizzaId);
        
        if (selectedPizza) {
            const pizzaImage = document.querySelector('.product-image');
            const pizzaName = document.getElementById('pizza-name');
            const pizzaPrice = document.getElementById('pizza-price');
            const quantitySpan = document.getElementById('quantity');
            const decreaseBtn = document.getElementById('decrease-btn');
            const increaseBtn = document.getElementById('increase-btn');
            const sizeButtons = document.querySelectorAll('.size-options .option-button');
            const edgeButtons = document.querySelectorAll('.edge-options .option-button');

            pizzaImage.src = selectedPizza.imagem;
            pizzaName.textContent = selectedPizza.nome;
            let currentPrice = selectedPizza.precos.media;
            let quantity = 1;

            // Função para atualizar o preço
            const updatePrice = () => {
                pizzaPrice.textContent = `R$ ${ (currentPrice * quantity).toFixed(2).replace('.', ',') }`;
            };

            // Evento para botões de quantidade
            decreaseBtn.addEventListener('click', () => {
                if (quantity > 1) {
                    quantity--;
                    quantitySpan.textContent = quantity;
                    updatePrice();
                }
            });

            increaseBtn.addEventListener('click', () => {
                quantity++;
                quantitySpan.textContent = quantity;
                updatePrice();
            });

            // Evento para botões de tamanho
            sizeButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    sizeButtons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    const selectedSize = btn.dataset.size;
                    currentPrice = selectedPizza.precos[selectedSize];
                    updatePrice();
                });
            });

            // Evento para botões de borda (apenas visual)
            edgeButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    edgeButtons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                });
            });

            // Atualiza o preço inicial
            updatePrice();
        }
    }
});