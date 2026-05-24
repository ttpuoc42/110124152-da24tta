window.onload = function(){

    const params =
        new URLSearchParams(window.location.search);

    console.log(params.toString());

    const id =
        parseInt(params.get("id"));

    console.log(id);

    const product =
        productList.find(p => p.id === id);

    console.log(product);

    if(product){

        document.getElementById("product-image").src =
            product.image;

        document.getElementById("product-name").innerText =
            product.name;

        document.getElementById("product-price").innerText =
            product.price.toLocaleString() + "đ";

        document.getElementById("product-description").innerText =
            product.description;
    }
}