// Array que vai armazenar os itens no carrinho
let cart = [];

// Função para adicionar itens ao carrinho
function addToCart(productName, price) {
    const product = {
        name: productName,
        price: parseFloat(price)
    };

    // Adiciona o produto ao carrinho
    cart.push(product);

    // Atualiza a interface do carrinho
    updateCart();
}

// Função para remover um item do carrinho
function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    
    // Atualiza a interface do carrinho
    updateCart();
}

// Função para atualizar a interface do carrinho
function updateCart() {
    const cartContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Limpa a lista do carrinho antes de atualizar
    cartContainer.innerHTML = '';

    let total = 0;
    
    // Adiciona os itens no carrinho ao HTML
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <span>${item.name} - R$ ${item.price.toFixed(2)}</span>
            <button onclick="removeFromCart('${item.name}')">Remover</button>
        `;
        cartContainer.appendChild(cartItem);

        total += item.price;
    });

    // Atualiza o valor total do carrinho
    cartTotal.innerHTML = `Total: R$ ${total.toFixed(2)}`;
}

// Adicionando eventos de clique para os botões "Adicionar ao Carrinho"
document.querySelectorAll('.produto button').forEach(button => {
    button.addEventListener('click', event => {
        const productName = event.target.parentElement.querySelector('p').textContent;
        const price = event.target.parentElement.querySelector('span').textContent.replace('R$ ', '');
        addToCart(productName, price);
    });
});