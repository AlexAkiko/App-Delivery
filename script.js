
document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm');
    const whatsappInput = document.getElementById('whatsapp');

    orderForm.addEventListener('submit', (event) => {
        event.preventDefault();

        //Remove tudo que nao for numero
        const whatsappNumber = whatsappInput.value.replace(/\D/g, '');

        // Só será valido se o número tiver 11 numeros
        if (whatsappNumber.length !== 11) {
            alert('Por favor, insira um número de WhatsApp válido com 11 dígitos (DDD + 9 + número).');
            whatsappInput.focus();
        } else {
            // Vai para a segunda página
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

// O código abaixo vai em pizzas.html para popular a lista,aqui que se adiciona as pizzas e sabores

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
        precos: { media: 33.00, grande: 40.00, familia: 53.00 }
    },
    {
        id: 2,
        nome: 'Marguerita',
        descricao: 'Mussarela, tomate, manjericão e azeite',
        imagem: 'img/pizza grande 1.png',
        precos: { media: 33.00, grande: 40.00, familia: 53.00 }
    },
    {
        id: 3,
        nome: 'Quatro Queijos',
        descricao: 'Mussarela, provolone, parmesão e gorgonzola',
        imagem: 'img/pizza grande 1.png',
        precos: { media: 33.00, grande: 40.00, familia: 53.00 }
    },
    {
        id: 4,
        nome: 'Quatro Queijos',
        descricao: 'Mussarela, provolone, parmesão e gorgonzola',
        imagem: 'img/pizza grande 1.png',
        precos: { media: 33.00, grande: 40.00, familia: 53.00 }
    },
    {
        id: 5,
        nome: 'Quatro Queijos',
        descricao: 'Mussarela, provolone, parmesão e gorgonzola',
        imagem: 'img/pizza grande 1.png',
        precos: { media: 33.00, grande: 40.00, familia: 53.00 }
    },
    {
        id: 6,
        nome: 'Quatro Queijos',
        descricao: 'Mussarela, provolone, parmesão e gorgonzola',
        imagem: 'img/pizza grande 1.png',
        precos: { media: 33.00, grande: 40.00, familia: 53.00 }
    },
    {
        id: 7,
        nome: 'Quatro Queijos',
        descricao: 'Mussarela, provolone, parmesão e gorgonzola',
        imagem: 'img/pizza grande 1.png',
        precos: { media: 33.00, grande: 40.00, familia: 53.00 }
    },
    // Adicione mais pizzas aqui com IDs e preços
];

document.addEventListener('DOMContentLoaded', () => {
    // LÓGICA DA PÁGINA DE PIZZAS
    const contentPizzas = document.querySelector('.content-pizzas');
    if (contentPizzas) {
        contentPizzas.innerHTML = '';
        pizzaList.forEach(pizza => {
            const pizzaItem = document.createElement('div');
            pizzaItem.classList.add('pizza-item');
            pizzaItem.dataset.id = pizza.id;

            pizzaItem.innerHTML = `
                <img src="${pizza.imagem}" alt="${pizza.nome}">
                <div class="pizza-details">
                    <h3>${pizza.nome}</h3>
                    <p>${pizza.descricao}</p>
                </div>
            `;
            contentPizzas.appendChild(pizzaItem);
            pizzaItem.addEventListener('click', () => {
                window.location.href = `product-details.html?id=${pizza.id}`;
            });
        });
    }

    // LÓGICA DA PÁGINA DE DETALHES
    const containerDetails = document.querySelector('.container-details');
    if (containerDetails) {
        const params = new URLSearchParams(window.location.search);
        const pizzaId = parseInt(params.get('id'));
        const selectedPizza = pizzaList.find(pizza => pizza.id === pizzaId);

        if (selectedPizza) {
            const pizzaImage = document.querySelector('.product-image');
            const pizzaNameElement = document.getElementById('pizza-name');
            const edgeInfoElement = document.getElementById('edge-info');
            const pizzaPriceElement = document.getElementById('pizza-price');
            const quantitySpan = document.getElementById('quantity');
            const decreaseBtn = document.getElementById('decrease-btn');
            const increaseBtn = document.getElementById('increase-btn');
            const sizeButtons = document.querySelectorAll('.size-options .option-button');
            const edgeButtons = document.querySelectorAll('.edge-options .option-button');
            const checkoutBtn = document.getElementById('checkout-btn');
            
            pizzaImage.src = selectedPizza.imagem;
            pizzaNameElement.textContent = selectedPizza.nome;
            
            let currentQuantity = 1;
            let currentSize = 'media';
            let hasEdge = true; // Variável para rastrear se a borda está ativada
            
            // Função para atualizar o preço e texto da borda
            const updateDetails = () => {
                let pricePerUnit = selectedPizza.precos[currentSize];
                
                // Adiciona R$ 5,00 se a borda estiver selecionada
                if (hasEdge) {
                    pricePerUnit += 5.00;
                }
                
                pizzaPriceElement.textContent = `R$ ${(pricePerUnit * currentQuantity).toFixed(2).replace('.', ',')}`;
                edgeInfoElement.textContent = hasEdge ? 'Com borda' : 'Sem borda';
                quantitySpan.textContent = currentQuantity;
            };

            decreaseBtn.addEventListener('click', () => {
                if (currentQuantity > 1) {
                    currentQuantity--;
                    updateDetails();
                }
            });

            increaseBtn.addEventListener('click', () => {
                currentQuantity++;
                updateDetails();
            });

            sizeButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    sizeButtons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    currentSize = btn.dataset.size;
                    updateDetails();
                });
            });

            edgeButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    edgeButtons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    
                    // Atualiza a variável hasEdge com base no botão clicado
                    hasEdge = btn.dataset.edge === 'com';
                    
                    updateDetails();
                });
            });

            checkoutBtn.addEventListener('click', () => {
                const orderDetails = {
                    item: selectedPizza.nome,
                    tamanho: currentSize,
                    borda: hasEdge ? 'Com borda' : 'Sem borda',
                    quantidade: currentQuantity,
                    observacao: document.getElementById('notes-input').value,
                    // Preço final exato
                    preco_total: (selectedPizza.precos[currentSize] + (hasEdge ? 5.00 : 0)) * currentQuantity
                };
                console.log('Pedido Finalizado:', orderDetails);
                alert('Pedido finalizado! Veja os detalhes no console.');
            });

            // Inicializa a tela com as informações corretas
            updateDetails();
            document.querySelector('.size-options .option-button').classList.add('active');
            document.querySelector('.edge-options .option-button[data-edge="com"]').classList.add('active');
        }
    }
});


