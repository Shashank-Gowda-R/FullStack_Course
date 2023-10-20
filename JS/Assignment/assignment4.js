var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
        1,
        1,
        0,
        1,
        0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
}

loadData = () => {
    var productImage = document.createElement('div');
    productImage.className = 'previewImg';
    var displayImg = document.createElement('img');
    displayImg.src = productData.preview;
    productImage.appendChild(displayImg);
    console.log(productImage);

    var productDetails = document.createElement('div');
    productDetails.className = 'productDetails';
    var pheading = document.createElement('h1');
    pheading.innerHTML = productData.name;
    productDetails.appendChild(pheading);

    var brandTag = document.createElement('h4');
    brandTag.innerHTML = productData.brand;
    brandTag.className = 'brand';
    productDetails.appendChild(brandTag)

    var price = document.createElement('h3');
    price.innerHTML = "Price: Rs "

    var priceTag = document.createElement('span');
    priceTag.innerHTML = productData.price;
    price.appendChild(priceTag);

    productDetails.appendChild(price);

    var desc = document.createElement('h3');
    desc.innerHTML = 'Description';

    var descData = document.createElement('p');
    descData.innerHTML = productData.description;
    desc.appendChild(descData);

    productDetails.appendChild(desc);

    var imgHead = document.createElement('h3');
    imgHead.innerHTML = 'Product Preview';
    productDetails.appendChild(imgHead);

    var smallPreviewImg = document.createElement('div');
    smallPreviewImg.className = 'smallPreviewImg';
    var activeImage = null; // Keep track of the active image
    productData.photos.map((photoUrl,index) => {
        var imgTag = document.createElement('img');
        imgTag.src = photoUrl;
        imgTag.addEventListener('click', function () {
            if (activeImage) {
                activeImage.classList.remove('active');
            }
            imgTag.classList.add('active');
            activeImage = imgTag;
            displayImg.src = activeImage.src;
        });
        smallPreviewImg.appendChild(imgTag);
        if (index === 0) {
            imgTag.classList.add('active');
            activeImage = imgTag;
        }
    });
    productDetails.appendChild(smallPreviewImg);

    var addBtn = document.createElement('button');
    addBtn.innerHTML = 'Add to Cart';
    addBtn.className = 'button';

    productDetails.appendChild(addBtn);


    var mainDiv = document.getElementById('productOverview');
    mainDiv.appendChild(productImage);
    mainDiv.appendChild(productDetails);
}

loadData();