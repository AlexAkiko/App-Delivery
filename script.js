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