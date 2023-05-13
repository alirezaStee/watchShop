import { allData } from "./data.js";
/*==============================navbar==========================*/
//! make navbar sticky && Active btnScrollToTop
//?navbar
let navbar = document.querySelector(".navbar");

function makeNavbarSticy() {
  navbar.classList.add("sticky-navbar");
}
function removeNavbarSticy() {
  navbar.classList.remove("sticky-navbar");
}
//?btnScrollToTop
let btnScrollToTop = document.querySelector(".btnScrollToTop");

function btnScrollToTopActive() {
  btnScrollToTop.classList.add("btnScrollToTopActive");
}
function btnScrollToTopNotActive() {
  btnScrollToTop.classList.remove("btnScrollToTopActive");
}
//* when click on btnScrollToTop page go on top
btnScrollToTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > navbar.offsetTop + 60) {
    makeNavbarSticy();
    btnScrollToTopActive();
  } else {
    removeNavbarSticy();
    btnScrollToTopNotActive();
  }
});

/*====================================== modals======================================*/

/*======menu modal======*/
//! opean menu modal and close it
let navbarMenuIconBtn = document.querySelector(".navbar-menu-icon-btn");
let menuModal = document.querySelector(".menu-modal");
let backgroundDarkDivWhenModulsOpean = document.querySelector(
  ".backgroundDarkDivWhenModulsOpean"
);
//* وقتی روی ایکون منو کلید میشود مودال منو باز و بقییه قسمت ها سیاه میشود
navbarMenuIconBtn.addEventListener("click", () => {
  menuModal.classList.add("menu-modalActive");
  makeBackgroundDarkWhenModulsOpean();
});

//* وقتی روی قسمت سیاه کلیک میشود مودال منو بسته میشود
backgroundDarkDivWhenModulsOpean.addEventListener("click", () => {
  removeBackgroundDarkWhenModulsClose();

  menuModal.classList.remove("menu-modalActive");

  shoppingCardModul.classList.remove("shoppingCardModulActive");
  modalSearch.classList.remove("modalSearchActive");
});

function makeBackgroundDarkWhenModulsOpean() {
  backgroundDarkDivWhenModulsOpean.classList.add(
    "backgroundDarkDivWhenModulsOpeanActive"
  );
}
function removeBackgroundDarkWhenModulsClose() {
  backgroundDarkDivWhenModulsOpean.classList.remove(
    "backgroundDarkDivWhenModulsOpeanActive"
  );
}
//! make btn active for menu modal
let mainBtnsInMenuModal = document.querySelectorAll(".mainBtnInMenuModal ");
let menuItemsInMenuModul = document.querySelector(".menuItemsInMenuModul");
let categoriesItemsInMenuModul = document.querySelector(
  ".categoriesItemsInMenuModul"
);

mainBtnsInMenuModal.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let currentActiveBtn = document.querySelector(".activeBtnInMenuModalClass");
    currentActiveBtn.classList.remove("activeBtnInMenuModalClass");
    e.target.classList.add("activeBtnInMenuModalClass");

    //* نمایش ایتم های هر بخش
    if (e.target.innerHTML === "MENU") {
      menuItemsInMenuModul.style.display = "block";
      categoriesItemsInMenuModul.style.display = "none";
    }
    if (e.target.innerHTML === "CATEGORIES") {
      categoriesItemsInMenuModul.style.display = "block";
      menuItemsInMenuModul.style.display = "none";
    }
  });
});

/*======shopping card modal======*/
//! وقتی روی ایکون سبد خرید کلید میشود مودال سبد خرید باز و بقییه قسمت ها سیاه میشود
let navbarShopbasketBtn = document.querySelector(".navbar-shopbasket-btn");
let shoppingCardModul = document.querySelector(".shoppingCardModul");
let closeShopCardModulBtn = document.querySelector(".closeShopCardModulBtn");
let placeToAddShoppingCardInShoppingModul = document.querySelector(
  ".full-shoppinCardModulBody"
);
navbarShopbasketBtn.addEventListener("click", () => {
  openShoppingCardModul();
});

function openShoppingCardModul() {
  shoppingCardModul.classList.add("shoppingCardModulActive");
  makeBackgroundDarkWhenModulsOpean();
  closeModulSearch();
}
closeShopCardModulBtn.addEventListener("click", () => {
  shoppingCardModul.classList.remove("shoppingCardModulActive");
  removeBackgroundDarkWhenModulsClose();
  closeModulSearch();
});
/*======search modal======*/
//! وقتی روی ایکون سرچ کلید میشود مودال سرچ  باز میشود و ایکون سرچ تغییر میکند
let navbarSearchBtn = document.querySelector(".navbar-search-btn");
let modalSearch = document.querySelector(".modalSearch");
let navbarSearchIcon = document.querySelector(".navbar-search-icon");
let closeModulSearchBtnInNavbar = document.querySelector(
  ".closeModulSearchBtn"
);
navbarSearchBtn.addEventListener("click", () => {
  if (modalSearch.classList.contains("modalSearchActive")) {
    closeModulSearch();
  } else {
    openModulSearch();
  }
});

closeModulSearchBtnInNavbar.addEventListener("click", () => {
  closeModulSearch();
});

function closeModulSearch() {
  modalSearch.classList.remove("modalSearchActive");
  navbarSearchIcon.classList.remove("bi-x");
  navbarSearchIcon.classList.add("bi-search");
  document.body.classList.remove("stop-scrolling");
}
function openModulSearch() {
  modalSearch.classList.add("modalSearchActive");
  navbarSearchIcon.classList.add("bi-x");
  navbarSearchIcon.classList.remove("bi-search");
  document.body.classList.add("stop-scrolling");
}
/*======img modal======*/
//! make img model
let modalImg = document.querySelector(".modalImg");
let modalImgPlaceToAddImg = document.querySelector(".modalImgPlaceToAddImg");
let modalImgclose = document.querySelector(".modalImgclose");
let modalImgAlt = document.querySelector(".modalImgAlt");

function opeanModalImg(e) {
  modalImg.style.display = "flex";
  modalImgPlaceToAddImg.src = e.src;
  // modalImgAlt.innerHTML=e.alt
}

function closeModalImg() {
  modalImg.style.display = "none";
}

modalImgclose.addEventListener("click", () => {
  closeModalImg();
});

modalImg.addEventListener("click", () => {
  closeModalImg();
});

/*======galley======*/
let galleryImgs = document.querySelectorAll(".galleryImg");
galleryImgs.forEach((img) => {
  img.addEventListener("click", function () {
    opeanModalImg(this);
  });
});
/*==================================================main=======================================================================================================*/

/*======main slider======*/
//! ساخت سلایدر اصلی صفحه

//? پیدا کردن محصولاتی که برای اسلاید  اصلی هستند
let placeToAddMainSlide = document.querySelector(".placeToAddMainSlide");

let findSliderProduct = allData.products.filter((product) => {
  return product.category === "watch" && product.slider;
});
//? ساخت قالب هر اسلاید
let makeSlideItem = findSliderProduct.forEach((item) => {
  makeMainSlideProduct(item);
});
function makeMainSlideProduct(product) {
  let tagA = document.createElement("a");
  tagA.href = "#";
  tagA.className = "slide";

  let divAbout = `<div class="div-about-watch-in-slide"><h2 class=" animate__animated animate__fadeInUpBig ">${
    product.slider.h2
  }</h2><p class="animate__animated animate__fadeInUpBig animate__delay-2s">${
    product.slider.p
  }</p><div class="slide-price animate__animated animate__fadeInUpBig animate__delay-3s"><a  href="">ADD TO CARD</a><div>${product.price.toFixed(
    2
  )}$</div></div></div>`;

  let divImg = document.createElement("div");
  divImg.className = "div-img-in-slider";

  product.slider.slidePictureSrc.forEach((src) => {
    let img = `<img class="animate__animated animate__fadeInRight" src="${src}" alt=""></img>`;
    divImg.innerHTML += img;
  });
  tagA.innerHTML = divAbout;

  tagA.append(divImg);

  placeToAddMainSlide.append(tagA);
}

//! ساخت فانکشن برای عوض کردن اسلاید ها
let allMainSlide = document.querySelectorAll(".slide");
let slider = document.querySelector(".slider");
let currentSlide = 1;

function mainSlideChangeBackground(bgPrimery, bgsecondery) {
  if (window.innerWidth >= 768) {
    slider.style.background = bgsecondery;
  } else {
    slider.style.background = bgPrimery;
  }
}

function changeSlide() {
  allMainSlide.forEach((slide, index) => {
    if (index === currentSlide - 1) {
      slide.style.display = "flex";
      mainSlideChangeBackground(
        findSliderProduct[index].slider.bgPrimery,
        findSliderProduct[index].slider.bgsecondery
      );
    } else {
      slide.style.display = "none";
    }
  });
  if (currentSlide > allMainSlide.length - 1) {
    currentSlide = 0;
  }
  currentSlide++;
}
changeSlide();
setInterval(changeSlide, 6000);

slider.addEventListener("dragend", (e) => {
  changeSlide();
});
/*======shopping card======*/
//! ساخت کارت های خرید و اضافه کردنشون به صفحه اصلی
let placeToAddShoppingCardInMainPage = document.querySelector(
  ".shoppingCartParence"
);

let userBasket = JSON.parse(localStorage.getItem("shopItem")) || [];
// step 1 = make shoppingcard
function makeShoppingCard(product, place) {
  let templat = `<div class="shoppingCartItem col-6 col-md-3">
<div class="shoppingCartImgDiv">
  <a href="#">
    <img src="${product.pictureSrc}" alt="">
  </a>
  <a href="#!" class="buyBtnInShoppingCart" onclick="addProductToBasketArray(${
    product.id
  })">
    <span>select opstion</span>
    <i class="bi bi-cart"></i>
  </a>
  <div class="toolsInShoppingCart">
    <a href="">
      <i class="bi bi-shuffle"></i>
      <span>compare</span>
    </a>
    <a href="#!" onclick="activeQuickViewModal(${product.id})">
      <i class="bi bi-search"></i>
      <span>Quick view</span>
    </a>
    <a href="">
      <i class="bi bi-heart"></i>
      <span>add to wishlist</span>
    </a>
  </div>
</div>
<div class="shoppingCartAbout">
  <h3><a href="">${product.name}</a></h3>
  <div><a href="">watch</a></div>
  <span>${product.price.toFixed(2)}$</span>
</div>
</div>`;
  place.insertAdjacentHTML("beforeend", templat);
}

function addSoppingCartToDOM(numberOfProductToShowInDOM, place) {
  if (numberOfProductToShowInDOM > allData.products.length) {
    numberOfProductToShowInDOM = allData.products.length;
  }
  for (let i = 0; i < numberOfProductToShowInDOM; i++) {
    makeShoppingCard(allData.products[i], place);
  }
}

addSoppingCartToDOM(4, placeToAddShoppingCardInMainPage);

// step 2 = addProductToBasketArray
window.addProductToBasketArray = addProductToBasketArray;
function addProductToBasketArray(productId) {
  let findProduct = {
    ...allData.products.find((product) => {
      return product.id === productId;
    }),
  };

  let hasProduct = userBasket.some((product) => {
    return product.id == productId;
  });

  if (hasProduct) {
    let findFromUserBasket = userBasket.find((product) => {
      return product.id == productId;
    });
    findFromUserBasket.countProduct++;
  } else {
    findProduct.countProduct = 1;
    userBasket.push(findProduct);
  }
  setProductToLocal(userBasket);
  showNumberOfProduct(userBasket);
  calcTotalPrice(userBasket);
  checkSoppingBasketEmtyOrNot(userBasket);
  openShoppingCardModul();
  makeItemsForShoppingCardModul(userBasket);
}
// step 2.1
function setProductToLocal(item) {
  localStorage.setItem("shopItem", JSON.stringify(item));
}
// step 2.2
let navbarNumberOfProduct = document.querySelector(".navbar-number-of-product");
function showNumberOfProduct(shopbasckt) {
  let count = 0;
  shopbasckt.forEach((product) => {
    count += product.countProduct;
  });
  // show in navbar
  navbarNumberOfProduct.innerHTML = Number(count);
}
// step 2.3
let navbarTotallPrice = document.querySelector(".navbar-totall-price");
let totallPriceInShoppinCardModul = document.querySelector(
  ".TotallPriceInShoppinCardModul"
);
function calcTotalPrice(shopbasckt) {
  let totalPrice = 0;
  shopbasckt.forEach((product) => {
    totalPrice += product.countProduct * product.price;
  });
  totallPriceInShoppinCardModul.innerHTML =
    numberWithCommas(totalPrice.toFixed(2)) + "$";
  navbarTotallPrice.innerHTML = numberWithCommas(totalPrice.toFixed(2)) + "$";
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// step 2.4
//ببینم محصولی وجود دارد یا نه اگر وجود داشته باشد مودال شاپپینگ کارت یک استایلی داشته باشد و در غیر این صورت یک استایل دیگر
let emtyShoppingCardModul = document.querySelector(".emty-shoppingCardModul");
let fullShoppingCardModul = document.querySelector(".full-shoppingCardModul");
function checkSoppingBasketEmtyOrNot(Basket) {
  if (Basket.length === 0) {
    fullShoppingCardModul.style.display = "none";
    emtyShoppingCardModul.style.display = "block";
  } else {
    fullShoppingCardModul.style.display = "flex";
    emtyShoppingCardModul.style.display = "none";
  }
}

// step 2.5
function makeItemsForShoppingCardModul(products) {
  placeToAddShoppingCardInShoppingModul.innerHTML = "";
  products.forEach((product) => {
    let templat = ` <a href="#!" class="shoppingCardItemInshoppingModul">
    <span class="deletShoppingCard" onclick="deletItemInShoppingModel(${
      product.id
    })">×</span>
    <div>
      <img src="${product.pictureSrc}" alt="">
    </div>
    <div class="about-shoppingCardItemInshoppingModul">
      <div class="name-shoppingCardItemInshoppingModul">${product.name}</div>
      <div class="quantity">
        <button class="btn minus1" onclick="minusShoppingItem(${
          product.id
        })">-</button>
        <input class="quantity" id="id_form-0-quantity" min="0" name="form-0-quantity" value="${
          product.countProduct
        }" type="number" onchange="inputValueShoppingItem(this,${product.id})">
        <button class="btn add1" onclick="pluseShoppingItem(${
          product.id
        })">+</button>
      </div>
      <div class="aboutTotallPriceFor-shoppingCardItemInshoppingModul">
        <span class="count-shoppingCardItemInshoppingModul">${
          product.countProduct
        }</span><span>× </span><span
          class="price-shoppingCardItemInshoppingModul">$${product.price.toFixed(
            2
          )}</span>
      </div>
      <div>
      </div>
    </div>
  </a>`;
    placeToAddShoppingCardInShoppingModul.insertAdjacentHTML(
      "beforeend",
      templat
    );
  });
}
// step 2.5.1
window.deletItemInShoppingModel = deletItemInShoppingModel;
function deletItemInShoppingModel(productId) {
  userBasket = userBasket.filter((product) => {
    return product.id !== productId;
  });
  setProductToLocal(userBasket);
  calcTotalPrice(userBasket);
  showNumberOfProduct(userBasket);
  makeItemsForShoppingCardModul(userBasket);
  checkSoppingBasketEmtyOrNot(userBasket);
}
// step 2.5.2
window.minusShoppingItem = minusShoppingItem;
function minusShoppingItem(productId) {
  let product = userBasket.find((product) => {
    return product.id === productId;
  });
  product.countProduct--;
  if (!product.countProduct) {
    deletItemInShoppingModel(productId);
  }
  setProductToLocal(userBasket);
  calcTotalPrice(userBasket);
  showNumberOfProduct(userBasket);
  makeItemsForShoppingCardModul(userBasket);
  checkSoppingBasketEmtyOrNot(userBasket);
}
// step 2.5.3
window.pluseShoppingItem = pluseShoppingItem;
function pluseShoppingItem(productId) {
  let product = userBasket.find((product) => {
    return product.id === productId;
  });
  product.countProduct++;
  setProductToLocal(userBasket);
  calcTotalPrice(userBasket);
  showNumberOfProduct(userBasket);
  makeItemsForShoppingCardModul(userBasket);
  checkSoppingBasketEmtyOrNot(userBasket);
}
// step 2.5.4
window.inputValueShoppingItem = inputValueShoppingItem;
function inputValueShoppingItem(event, productId) {
  let product = userBasket.find((product) => {
    return product.id === productId;
  });
  product.countProduct = event.value;
  if (event.value == 0) {
    deletItemInShoppingModel(productId);
  }
  setProductToLocal(userBasket);
  calcTotalPrice(userBasket);
  showNumberOfProduct(userBasket);
  makeItemsForShoppingCardModul(userBasket);
  checkSoppingBasketEmtyOrNot(userBasket);
}
// step 2 end
window.addEventListener("load", () => {
  calcTotalPrice(userBasket);
  showNumberOfProduct(userBasket);
  makeItemsForShoppingCardModul(userBasket);
  checkSoppingBasketEmtyOrNot(userBasket);
});

//! modal quick view

// click on quick view icon

let modalQuickViewCard = document.querySelector(".modalQuickViewCard");

//3.0
window.activeQuickViewModal = activeQuickViewModal;
function activeQuickViewModal(productId) {
  let findProduct = {
    ...allData.products.find((product) => {
      return product.id === productId;
    }),
  };
  makeQuickViewCardTempale(findProduct);
  modalQuickViewCard.style.display = "flex";
}
//3.1
function makeQuickViewCardTempale(product) {
  modalQuickViewCard.innerHTML = "";
  let templat = ` <div class="quickViewCard">
  <span class="closeQuickViewCard" onclick="closeModalQuickView()">&times;</span>
  <div class="divImg-QuickViewCard">
    <img src="${product.pictureSrc}" alt="" class="img-QuickViewCard">
    <a href="" class="viewDetails-QuickViewCard">view details</a>
  </div>
  <div class="information-QuickViewCard">
    <h3 class="name-QuickViewCard">${product.name}</h3>
    <p class="price-QuickViewCard">$${product.price.toFixed(2)}</p>
    <p class="about-QuickViewCard">${product.about}</p>
    <div class="btns-QuickViewCard">
     
      <a href="#!" class="addToCartBtnInQuickViewCard" onclick="btnAddToBaskerInModalQuickView(${
        product.id
      })">ADD TO CART</a>
    </div>
    <p class="category-QuickViewCard">category : <a href="" class="category-QuickViewCardA">${
      product.category
    }</a></p>
  </div>
</div>`;
  modalQuickViewCard.insertAdjacentHTML("beforeend", templat);
}
{
  /* <div class="quantity">
<button class="btn minus1" onclick="minusShoppingItem()">-</button>
<input class="quantity" id="id_form-0-quantity" min="0" name="form-0-quantity" value="1" type="number"
  onchange="inputValueShoppingItem(this,3)">
<button class="btn add1" onclick="pluseShoppingItem()">+</button>
</div> */
}
// 3.2
window.btnAddToBaskerInModalQuickView = btnAddToBaskerInModalQuickView;
function btnAddToBaskerInModalQuickView(productId) {
  let findProduct = {
    ...allData.products.find((product) => {
      return product.id === productId;
    }),
  };
  let hasProduct = userBasket.some((product) => {
    return product.id == productId;
  });

  if (hasProduct) {
    let findFromUserBasket = userBasket.find((product) => {
      return product.id == productId;
    });
    findFromUserBasket.countProduct++;
  } else {
    findProduct.countProduct = 1;
    userBasket.push(findProduct);
  }
  setProductToLocal(userBasket);
  showNumberOfProduct(userBasket);
  calcTotalPrice(userBasket);
  checkSoppingBasketEmtyOrNot(userBasket);
  makeItemsForShoppingCardModul(userBasket);
  closeModalQuickView();
  openShoppingCardModul();
}

window.closeModalQuickView = closeModalQuickView;
function closeModalQuickView() {
  modalQuickViewCard.style.display = "none";
}

window.addEventListener("click", (event) => {
  if (event.target == modalQuickViewCard) {
    modalQuickViewCard.style.display = "none";
  }
});

//!search product
let inputSearchForProducts = document.querySelector(".inputSearchForProducts");
let StartTypingToSeeText = document.querySelector(".StartTypingToSeeText");
let noProductsFoundText = document.querySelectorAll(".noProductsFoundText");
let DivProductThatFound = document.querySelector(".DivProductThatFound");

inputSearchForProducts.addEventListener("keyup", (e) => {
  searchProductFromAll(e.target.value, DivProductThatFound);
});

function searchProductFromAll(inputValue, place) {
  console.log("a");
  if (inputValue) {
    let searchedProduct = allData.products.filter((item) => {
      item.name = item.name.toUpperCase();
      return item.name.includes(inputValue.toLocaleUpperCase());
    });
    creatProductThatFoundItemAndAddToDOM(searchedProduct, place);
  } else {
    clearPlaceInnerHTML(place);
    StartTypingToSeeText.style.display = "block";
    noProductsFoundText.forEach((item) => {
      item.style.display = "none";
    });
  }
}

function creatProductThatFoundItemAndAddToDOM(items, place) {
  clearPlaceInnerHTML(place);
  if (items.length !== 0) {
    items.forEach((item) => {
      let templat = `<div class="productThatFoundItem">
    <img src="${item.pictureSrc}" alt="">
    <div><div class="name-productThatFoundItem">${item.name}</div>
    <div class="price-productThatFoundItem">${item.price.toFixed(
      2
    )}$</div></div>
  </div>
  `;
      place.insertAdjacentHTML("beforeend", templat);
    });
    StartTypingToSeeText.style.display = "none";
    noProductsFoundText.forEach((item) => {
      item.style.display = "none";
    });
  } else {
    StartTypingToSeeText.style.display = "none";
    noProductsFoundText.forEach((item) => {
      item.style.display = "block";
    });
  }
}
function clearPlaceInnerHTML(place) {
  place.innerHTML = "";
}

window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 1024px)").matches) {
    modalSearch.classList.remove("modalSearchActive");
    closeModulSearch();
  }
});
let divProductThatFoundInmenuModal = document.querySelector(
  ".divProductThatFoundInmenu-modal"
);
let inputSearchInmenuModal = document.querySelector(".inputSearchInmenu-modal");
inputSearchInmenuModal.addEventListener("keyup", (e) => {
  searchProductFromAll(e.target.value, divProductThatFoundInmenuModal);
});

//! make magazinPart
let placeToAddMagazineItem = document.querySelector(".placeToAddMagazineItem");
function createMagazineItem(items, place) {
  clearPlaceInnerHTML(place);
  items.forEach((item) => {
    let templat = `<a class="swiper-slide" href="">
    <div class=" row ">
      <div class="col-12 col-md-6">
        <img class="imgMagazine" src="${item.imgSrc}" alt="">
        <div class="dateMagazinPablished">
          <div class="dateMagazinPablished-day">${convertDate(
            item.datePublished,
            "dayNumber"
          )}</div>
          <div class="dateMagazinPablished-mon">${convertDate(
            item.datePublished,
            "mon"
          )}</div>
        </div>
      </div>
      <div class="col-12 col-md-6 divAboutMagazine">
        <div class="topOfDivAboutMagazine">${item.group}</div>
        <div class="mainDivAboutMagazine">
          <h5>${item.title}</h5>
          <div class="aboutWriterMagazin">
            <img class="pictureMagazinWriter" src="${item.writer.pictureSrc}"
              alt="">
            <div class="nameMagazinWriter">${item.writer.name}</div>
            <div class="commentsMagazin">
              <i class="bi bi-chat-square"></i>
              <span class="teedadCommentsMagazin">${item.comment.length}</span>
            </div>
          </div>
          <p>
          ${item.shortIntroduce}
          </p>
          <div class="continueReading">CONTINUE READING</div>
        </div>
      </div>
    
    </div>
    </a>`;
    place.insertAdjacentHTML("beforeend", templat);
  });
}
createMagazineItem(allData.magazine, placeToAddMagazineItem);

//! creat instagramPost
function ceratInstagramPost(datas, place) {
  clearPlaceInnerHTML(place);
  datas.forEach((data) => {
    let templat = `  <a href="#!" class="swiper-slide">
    <img src="${data.imgSrc}" alt="">
    <div class="divAboutInstaPost">
      <div>
        <i class="bi bi-chat-square"></i>
        <span>${data.comment}</span>
      </div>
      <div>
        <i class="bi bi-heart"></i>
        <span>${data.like}</span>
      </div>
    </div>
  </a>`;
    place.insertAdjacentHTML("beforeend", templat);
  });
}
let placeToAddInstagramPost = document.querySelector(
  ".placeToAddInstagramPost"
);

ceratInstagramPost(allData.instagramPost, placeToAddInstagramPost);

function convertDate(date, whatYouWant) {
  let convert = new Date(date);
  convert = convert.toDateString();
  convert = convert.split(" ");
  let dateObject = {
    dayName: convert[0],
    mon: convert[1],
    dayNumber: convert[2],
    year: convert[3],
  };
  let finallDate = dateObject[whatYouWant];
  return finallDate;
}

function sortRecentPost(datas) {
  datas.sort((a, b) => b.datePublished - a.datePublished);
  return datas;
}
function makeRecentPost(data, place) {
  let templat = ` <li class="recentPostsLi">
  <a class="recent-posts-thumbnail" href="">
    <img class="attachment-large wp-post-image " src="${data.imgSrc}" width="75"
      height="65"></a>
  <div class="recent-posts-info">
    <div class="wd-entities-title title">
      <a href="">A companion for extra sleeping</a>
    </div>
    <time class="recent-posts-time" datetime="">${convertDate(
      data.datePublished,
      "mon"
    )} ${convertDate(data.datePublished, "dayNumber")}, ${convertDate(
    data.datePublished,
    "year"
  )}</time>
    <a class="recent-posts-comment" href="">0
      Comment</a>
  </div>
</li>`;
  place.insertAdjacentHTML("beforeend", templat);
}
function recentPost(datas, teedad, place) {
  sortRecentPost(datas);
  for (let i = 0; i < teedad; i++) {
    makeRecentPost(datas[i], place);
  }
}
let placeRecentPostsUl = document.querySelector(".recentPostsUl");
recentPost(allData.magazine, 2, placeRecentPostsUl);
