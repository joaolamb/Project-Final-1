
const phrases = [
    "Ready to collect.",
    "准备好收集",
    "ਇਕੱਠ ਕਰਨ ਲਈ ਤਿਆਰ",
    "Listo para recoger.",
    "集める準備ができています",
    "준비 완료",
    "آماده برای جمع آوری",
    "Pronto para coletar."
];

const display = document.getElementById("language-display");

let currentPhraseIndex = 0;


function toggleLanguage() {
    display.textContent = phrases[currentPhraseIndex];
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
}

setInterval(toggleLanguage, 1000);


let cart = [];
let total = 0;


$(".add-to-cart").click(function () {
    const product = $(this).data("product");
    const price = parseFloat($(this).data("price"));

    cart.push({ product, price });
    total += price;

    updateCart();
});


$(document).on("click", ".remove-from-cart", function () {
    const index = $(this).data("index");
    const removedItem = cart.splice(index, 1)[0];
    total -= removedItem.price;

    updateCart();
});


function updateCart() {
    const cartItems = $("#cart-items");
    const cartTotal = $("#cart-total");

    cartItems.empty();
            cart.forEach((item, index) => {
                cartItems.append(`<li class="list-group-item">
                    ${item.product} - $${item.price.toFixed(2)}
                    <button class="btn btn-light btn-sm float-right remove-from-cart" data-index="${index}"><img src="trash.png" alt="" style="width: 20px;"></button>
                </li>`);
            });

    cartTotal.text(total.toFixed(2));
}

