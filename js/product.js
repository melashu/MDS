const futureProduct = document.getElementById('future-product');
const productList = [
  {
    img: '../image/telebirrLogo.png',
    imgAlt: 'Telbirr',
    title: 'TelBirr',
    catagory: 'Finance and Mobile Money Transfer',
    description:
      'Telbirr is a mobile money platform it can handle as a mobile walet. Using telbirr you can transfer money from different bank',
  },
  {
    img: '../image/alewaLogo.png',
    imgAlt: 'Alewa Stock',
    title: 'Alewa Stock',
    catagory: 'Business Management',
    description:
      'Alewa Stock was design in 2021, it is a bussiness management platform',
  },
  {
    img: '../image/sekelaLogo.png',
    imgAlt: 'Sekela',
    title: 'Sekela',
    catagory: 'E-commerece',
    description:
      'Sekela Commerece is a B2B and B2C platform, which connect buyers and sellers',
  },
  {
    img: '../image/myethio.png',
    imgAlt: 'My-Ethiotel',
    title: 'My-Ethiotel',
    catagory: 'Telcom',
    description:
      'My-Ethiotel is designed in 2018, It is used to recharge mobile air time',
  },
  {
    img: '../image/chat.png',
    imgAlt: 'Let Chat',
    title: 'Let Chat',
    catagory: 'Social Media',
    description:
      'Let Chat is a social media platform, which can interconnect people arround the glob',
  },
  {
    img: '../image/fidle.png',
    imgAlt: 'Fidle',
    title: 'Fidle',
    catagory: 'Education',
    description:
      'Fidle educational platform which is designed to teach kids about Amaharic language',
  },
];

productList.forEach((product) => {
  const eachProduct = ` <div class="each-product">
                    <img src="${product.img}" alt="${product.imgAlt}">
                    <div class="each-product-left ">
                        <h4 class="product-title">${product.title}</h4>
                        <h4 class="product-cat">${product.catagory}</h4>
                        <p class="product-description">${product.description}</p>
                    </div>

                </div>`;
  const programDom = new DOMParser().parseFromString(eachProduct, 'text/html');
  const pro = programDom.getElementsByClassName('each-product')[0];
  futureProduct.appendChild(pro);
});
