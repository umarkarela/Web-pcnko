document.querySelectorAll(".product-card button").forEach((button, index) => {
    button.addEventListener("click", () => {
        const sizeSelect = document.querySelectorAll(".size-select")[index];
        const selectedSize = sizeSelect.value;
        alert(`Produk berhasil ditambahkan ke keranjang! Ukuran yang dipilih: ${selectedSize}`);
    });
});
