const productList = [
    {id: "01", name: "Hạt giống hoa hồng Pháp", price:250000, image:"../assest/rose.jpg", productLink:"product-detail.html"},
    {id: "02", name: "Hạt giống hoa hồng Việt Nam", price:250000, image:"../assest/rose1.jpg", productLink:"product-detail.html"},
    {id: "03", name: "Hoa Tulip Hà Lan", price:250000, image:"../assest/tulip.jpg", productLink:"product-detail.html"},
    {id: "04", name: "Hạt giống hoa hướng dương", price:250000, image:"../assest/sunflower.jpg", productLink:"product-detail.html"},
    {id: "05", name: "Hạt giống hoa Thanh Liêu", price:250000, image:"../assest/thanhlieu.jpg", productLink:"product-detail.html"},
    {id: "06", name: "Hạt giống hoa mười giờ", price:250000, image:"../assest/hoamuoigio.jpg", productLink:"product-detail.html"},
    {id: "07", name: "Hạt giống hoa Pansy", price:250000, image:"../assest/hatgionghoapansy.jpg", productLink:"product-detail.html"},
    {id: "08", name: "Hạt giống hoa Violet", price:250000, image:"../assest/hoaviolet.jpg", productLink:"product-detail.html"}
];
function addProduct(id, name, price, image, link)
{
     
		const productItem = document.createElement("div");
		productItem.setAttribute("class", "product-item col");
		
		
		const productDiv1 = document.createElement("div");
		productDiv1.setAttribute("class", "product-image");
		
		
		const productImage = document.createElement("img");
		productImage.setAttribute("src", image);
		productImage.setAttribute("alt", name);
        productImage.setAttribute("class", "img-thumbnail img-fluid");

		
		productDiv1.appendChild(productImage);


        
        const productDiv2 = document.createElement("div");
		productDiv2.setAttribute("class", "product-info");

        
        const productName = document.createElement("p");
        const productNameText = document.createTextNode(name);
        productName.appendChild(productNameText);

         
        const productPrice = document.createElement("p");
        const productPriceText = document.createTextNode(price);
        productPrice.appendChild(productPriceText);

         
        const productLink = document.createElement("a");
        const productLinkText = document.createTextNode("Xem chi tiết");
        productLink.appendChild(productLinkText);
      
        productLink.setAttribute("href", link);
        productLink.setAttribute("target", "_blank");

        
        productDiv2.appendChild(productName);
        productDiv2.appendChild(productPrice);
        productDiv2.appendChild(productLink);

	
		productItem.appendChild(productDiv1);
        productItem.appendChild(productDiv2);

		
        const productList = document.getElementById("product-list");
        productList.appendChild(productItem);


        
        const myContainer = document.getElementById("container");
        	
        myContainer.appendChild(productList);

}