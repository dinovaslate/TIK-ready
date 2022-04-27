import API from "./engine";
import stateObjectCreator from "./utils/state";
import AddFilter from "./utils/filter";
import AddSort from "./utils/sort";
import addGetElement from "./utils/getElement";
import addGetTop from "./utils/getTop";
function FilterAndSortedState(init, filtersToAdd, strictMode) {
  let obj = Object.assign({}, stateObjectCreator(init));
  obj = Object.assign(obj, AddFilter(filtersToAdd, strictMode));
  obj = Object.assign(obj, AddSort());
  obj = Object.assign(obj, addGetElement());
  obj = Object.assign(obj, addGetTop());
  return obj;
}

const Shoes = FilterAndSortedState(
  API,
  {
    brand: [],
    type: [],
    sizes: [],
    price: [],
  },
  true
);

const renderCard = () => {
  const shoes = Shoes.processedState;
  const checkCard = document.querySelector(".card-grid");
  if (checkCard.hasChildNodes()) checkCard.replaceChildren();
  for (const shoe of shoes) {
    const cardToAdd = `<div class="card" onclick="toggle('.look-out'); toggle('.beta'); toggle('body'); lookOut('${shoe.name}')"> 
               <div class="card-title">
                    ${shoe.brand}
                    <div class="card-subtitle">${shoe.name}</div>
               </div>
               <div class="card-image-wrapper">
                    <img
                    src="${shoe.images[0]}"
                    class="card-image rotate"
                    alt="${shoe.name}"
                    />
              </div>
              <div class="card-footer">
                    <div class="card-price">
                        Price
                        <div class="price">$${shoe.price}</div>
                    </div>
                    <div class="right-footer">
                        <div class="image-box" onclick="window.buttonRiple(event, '#ccc')">
                            <img
                            src="${shoe.images[1]}"
                            class="reflect-left"
                            alt="sepatu"
                            width="40"
                            />
                        </div>
                        <div class="image-box" onclick="window.buttonRiple(event, '#ccc')">
                            <img
                            src="${shoe.images[2]}"
                            class="reflect-right"
                            alt="sepatu"
                            width="40"
                            />
                        </div>
                    </div>
                </div>
          </div>`;
    checkCard.innerHTML += cardToAdd;
  }
};

const resetLookOut = () => {
  const thingsToReset = [
    "images",
    "indicators",
    "title",
    "subtitle",
    "sizes",
    "description",
  ];
  for (const toReset of thingsToReset) {
    document.querySelector(`#add-${toReset}`).replaceChildren();
  }
};

window.resetLookOut = resetLookOut;
const lookOut = (name) => {
  const shoe = Shoes.getElement(name);
  resetLookOut();
  for (const image of shoe.images) {
    const imageToAdd = `<img src="${image}" class="carousel-image" alt="${shoe.type}" />`;
    const indicatorToAdd = "<div></div>";
    document.querySelector("#add-images").innerHTML += imageToAdd;
    document.querySelector("#add-indicators").innerHTML += indicatorToAdd;
  }
  document.querySelector("#add-title").innerHTML = shoe.name;
  document.querySelector("#add-subtitle").innerHTML = shoe.brand;
  for (const size of shoe.sizes) {
    const sizeToAdd = `<div class="grid-item">${size}</div>`;
    document.querySelector("#add-sizes").innerHTML += sizeToAdd;
  }
  document.querySelector("#add-description").innerHTML = shoe.desc;
};

window.lookOut = lookOut;

const proxy = new Proxy(Shoes, {
  get(target, prop, receiver) {
    if (prop === "AddFilter" || prop === "RemoveFilter") {
      return function () {
        if (arguments[0] === "price") {
          target.ClearFilter("price");
        }
        if (localStorage.getItem("filter")) {
          target.filter = JSON.parse(localStorage.getItem("filter"));
        }
        target[prop].apply(this, arguments);
        target.filter_array();
        if (target.sort) {
          target.sort_array(target.sort);
        }
        localStorage.setItem("filter", JSON.stringify(target.filter));
        renderCard();
      };
    }
    if (prop === "sort_array") {
      return function () {
        if (localStorage.getItem("filter")) {
          target.filter = JSON.parse(localStorage.getItem("filter"));
        }
        target.filter_array();
        target[prop].apply(this, arguments);
        renderCard();
      };
    }

    return target[prop];
  },
});

const setTopProduct = () => {
  const shoes = Shoes.getTop(3);
  const host = document.querySelector(".flex-card");
  if (host.hasChildNodes()) host.replaceChildren();
  for (const shoe of shoes) {
    const cardToAdd = `<div class="horizontal-card">
        <div class="card-image">
          <img src="${shoe.images[0]}" width="90" alt="${shoe.type}" />
        </div>
        <div class="card-content">
          <div class="title">${shoe.name}</div>
          <div class="content">
            Price
            <div class="price">$${shoe.price}</div>
          </div>
        </div>
      </div>`;
    host.innerHTML += cardToAdd;
  }
};

window.handleChange = function handleChange(checkbox) {
  if (checkbox.checked == true) {
    proxy.AddFilter(
      checkbox.getAttribute("data-filter-type"),
      checkbox.getAttribute("data-filter-name")
    );
  } else {
    proxy.RemoveFilter(
      checkbox.getAttribute("data-filter-type"),
      checkbox.getAttribute("data-filter-name")
    );
  }
};
let parent = document.querySelector("#filterSize");
for (const child of parent.children) {
  child.addEventListener("click", (e) => {
    proxy.ClearFilter("sizes");
    proxy.AddFilter("sizes", e.currentTarget.innerText);
  });
}
window.addEventListener("load", () => {
  renderCard();
  setTopProduct();
  lookOut("Air Max 97");
  localStorage.removeItem("filter");
});

const sorts = document.querySelectorAll(".sortable");
for (const sort of sorts) {
  sort.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("active")) {
      proxy.sort_array(null);
    } else {
      proxy.sort_array(e.currentTarget.getAttribute("data-sort"));
    }
  });
}

export default proxy;
