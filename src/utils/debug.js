const API = [
  {
    brand: "Nike",
    name: "Air Max 97",
    type: "sneakers",
    images: [
      "static/sepatu2.png",
      "static/sepatu3.png",
      "static/sepatu4.png",
      "static/sepatu5.png",
    ],
    price: 200,
    desc: "Since its debut nearly 25 years ago, the legendary Air Max 97 has been remixed by just about everyone who's anyone in the sneaker world, from Sean Wotherspoon to Lil Nas X. Inspired by the sleek aesthetics of Japanese bullet trains (or so the story goes), its wavy lines and formidable silhouette will sync up seamlessly with the type of big, brash pants we've been championing.",
    sizes: [36, 37, 38, 40, 37],
    sales: 1000,
  },
  {
    brand: "Nike",
    name: "Air Foamposite 1",
    type: "sneakers",
    images: ["static/sepatu6.png", "static/sepatu7.png", "static/sepatu8.png"],
    price: 350,
    desc: "Thanks, in part, to a blockbuster collaboration with Comme des Garçons, the pendulum of popular opinion is once again swinging firmly towards Foams. We're not going to say we told you so but...we told you so.",
    sizes: [41, 42, 43, 44, 35],
    sales: 900,
  },
  {
    brand: "Adidas",
    name: "Adilette Shower",
    type: "Flip flops",
    images: ["static/sendal1.png", "static/sendal2.png", "static/sendal3.png"],
    price: 3,
    desc: "Put these sandals on and you're ready to go. These slides combine 3-Stripes style with comfortable cloudfoam unitsole, combined midsole and outsole for superior cushioning. It features a striking adidas logo on the side.",
    sizes: [41, 34, 43, 44, 23],
    sales: 800,
  },
  {
    brand: "Rebook",
    name: "Run & Sports",
    type: "Lace up Shoes",
    images: [
      "static/sepatu10.png",
      "static/sepatu11.png",
      "static/sepatu12.png",
    ],
    price: 90,
    desc: "Put these sandals on and you're ready to go. These slides combine 3-Stripes style with comfortable cloudfoam unitsole, combined midsole and outsole for superior cushioning. It features a striking adidas logo on the side.",
    sizes: [41, 42, 36, 44, 34],
    sales: 700,
  },
];
function stateObjectCreator(init) {
  return {
    state: init,
    processedState: init,
  };
}
function AddSort() {
  const self = {
    sort: "",
  };

  const addSortBehaviour = () => ({
    RemoveSort() {
      this.sort = "";
    },
    AddSort(type) {
      if (this.sort !== "") this.RemoveSort();
      this.sort = type;
    },
    sort_array(key, type, logic) {
      if (logic && typeof logic === "function") {
        this.processedState = this.processedState.sort(logic);
        return this.processedState;
      }
      this.processedState = this.processedState.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        return x < y ? -1 : x > y ? 1 : 0;
      });
      if (type === "DESC") {
        this.processedState = this.processedState.reverse();
      }
      return this.processedState;
    },
  });

  return {
    ...self,
    ...addSortBehaviour(),
  };
}
function AddFilter(filters, strictMode) {
  const self = {
    filter: {
      ...filters,
    },
    strictMode,
  };

  const addFilterBehaviour = () => ({
    AddFilter(type, name) {
      this.filter[type].push(name);
    },
    RemoveFilter(type, name) {
      const index = this.filter[type].indexOf(name);
      if (index > -1) {
        this.filter[type].splice(index, 1);
      }
    },
    ClearFilter(type) {
      this.filter[type] = [];
    },
    filter_array() {
      this.processedState = this.state.filter((state) => {
        let bool = true;
        for (const [key, values] of Object.entries(this.filter)) {
          if (state[key] === undefined) {
            bool = false;
            break;
          }
          if (values === undefined || values.length == 0) {
            continue;
          }

          if (values.every((value) => value.toString().indexOf("-") > -1)) {
            for (const value of values) {
              const [min, max] = value.split("-");
              bool = parseInt(min) <= state[key] && state[key] <= parseInt(max);
            }
          } else {
            bool = values.some((value) =>
              state[key].toString().includes(value)
            );
          }

          if (this.strictMode) {
            if (!bool) {
              break;
            }
          }
        }
        return bool;
      });
      debugger;
      return this.processedState;
    },
  });

  return {
    ...self,
    ...addFilterBehaviour(),
  };
}

function FilterAndSortedState(init, filtersToAdd, strictMode) {
  let obj = Object.assign({}, stateObjectCreator(init));
  obj = Object.assign(obj, AddFilter(filtersToAdd, strictMode));
  obj = Object.assign(obj, AddSort());

  return obj;
}
const obj = FilterAndSortedState(
  API,
  {
    brand: [],
    type: [],
    sizes: [],
    price: [],
  },
  true
);
const proxy = new Proxy(obj, {
  get(target, prop, receiver) {
    if (prop === "AddFilter" || prop === "RemoveFilter") {
      return function () {
        if (arguments[0] === "price") {
          target.ClearFilter("price");
        }
        debugger;
        target[prop].apply(target, arguments);
        target.filter_array();
        if (target.sort) {
          target.sort_array(target.sort);
        }
        debugger;
      };
    }
    if (prop === "sort_array") {
      return function () {
        debugger;
        target[prop].apply(target, arguments);
        debugger;
      };
    }

    return target[prop];
  },
});

proxy.AddFilter("sizes", "41");
proxy.sort_array("brand");
proxy.AddFilter("price", "0-200");
proxy.RemoveFilter("price", "0-200");
console.log(proxy.processedState);
