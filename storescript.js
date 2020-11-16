// Store Script //

(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'tommy-spase-merchandise.myshopify.com',
      storefrontAccessToken: '19822666a947172a3ee1764853ed2d77',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '4457299443806',
        node: document.getElementById('product-component-1583532484899'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "title": {
        "font-family": "Baskerville, serif",
        "font-weight": "normal",
        "font-size": "26px",
        "color": "#22b7d3"
      },
      "button": {
        "font-family": "Baskerville, serif",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        "padding-left": "26px",
        "padding-right": "26px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      },
      "price": {
        "font-family": "Baskerville, serif",
        "font-size": "18px",
        "color": "#b7c0ca"
      },
      "compareAt": {
        "font-family": "Baskerville, serif",
        "font-size": "15.299999999999999px",
        "color": "#b7c0ca"
      },
      "unitPrice": {
        "font-family": "Baskerville, serif",
        "font-size": "15.299999999999999px",
        "color": "#b7c0ca"
      },
      "description": {
        "font-family": "Baskerville, serif",
        "font-size": "16px",
        "color": "#c8cfd3"
      }
    },
    "layout": "horizontal",
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "description": true
    },
    "width": "100%"
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Baskerville, serif",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        "padding-left": "26px",
        "padding-right": "26px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      },
      "title": {
        "font-family": "Baskerville, serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Baskerville, serif"
      },
      "compareAt": {
        "font-family": "Baskerville, serif"
      },
      "unitPrice": {
        "font-family": "Baskerville, serif"
      },
      "description": {
        "font-family": "Baskerville, serif",
        "font-size": "16px",
        "color": "#c8cfd3"
      }
    }
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Baskerville, serif"
      },
      "select": {
        "font-family": "Baskerville, serif"
      }
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-family": "Baskerville, serif",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      },
      "title": {
        "color": "#000103"
      },
      "header": {
        "color": "#000103"
      },
      "lineItems": {
        "color": "#000103"
      },
      "subtotalText": {
        "color": "#000103"
      },
      "subtotal": {
        "color": "#000103"
      },
      "notice": {
        "color": "#000103"
      },
      "currency": {
        "color": "#000103"
      },
      "close": {
        "color": "#000103",
        ":hover": {
          "color": "#000103"
        }
      },
      "empty": {
        "color": "#000103"
      },
      "noteDescription": {
        "color": "#000103"
      },
      "discountText": {
        "color": "#000103"
      },
      "discountIcon": {
        "fill": "#000103"
      },
      "discountAmount": {
        "color": "#000103"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Baskerville, serif"
      },
      "count": {
        "font-size": "16px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#000103"
      },
      "title": {
        "color": "#000103"
      },
      "price": {
        "color": "#000103"
      },
      "fullPrice": {
        "color": "#000103"
      },
      "discount": {
        "color": "#000103"
      },
      "discountIcon": {
        "fill": "#000103"
      },
      "quantity": {
        "color": "#000103"
      },
      "quantityIncrement": {
        "color": "#000103",
        "border-color": "#000103"
      },
      "quantityDecrement": {
        "color": "#000103",
        "border-color": "#000103"
      },
      "quantityInput": {
        "color": "#000103",
        "border-color": "#000103"
      }
    }
  }
},
      });
    });
  }
})();

(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'tommy-spase-merchandise.myshopify.com',
      storefrontAccessToken: '19822666a947172a3ee1764853ed2d77',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '4494384595038',
        node: document.getElementById('product-component-1586822823609'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "title": {
        "font-family": "Baskerville, serif",
        "font-weight": "normal",
        "font-size": "26px",
        "color": "#22b7d3"
      },
      "button": {
        "font-family": "Baskerville, serif",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        "padding-left": "26px",
        "padding-right": "26px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      },
      "price": {
        "font-family": "Baskerville, serif",
        "font-size": "18px",
        "color": "#b7c0ca"
      },
      "compareAt": {
        "font-family": "Baskerville, serif",
        "font-size": "15.299999999999999px",
        "color": "#b7c0ca"
      },
      "unitPrice": {
        "font-family": "Baskerville, serif",
        "font-size": "15.299999999999999px",
        "color": "#b7c0ca"
      },
      "description": {
        "font-family": "Baskerville, serif",
        "font-size": "16px",
        "color": "#c8cfd3"
      }
    },
    "layout": "horizontal",
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "description": true
    },
    "width": "100%",
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Baskerville, serif",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        "padding-left": "26px",
        "padding-right": "26px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      },
      "title": {
        "font-family": "Baskerville, serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Baskerville, serif"
      },
      "compareAt": {
        "font-family": "Baskerville, serif"
      },
      "unitPrice": {
        "font-family": "Baskerville, serif"
      },
      "description": {
        "font-family": "Baskerville, serif",
        "font-size": "16px",
        "color": "#c8cfd3"
      }
    }
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Baskerville, serif"
      },
      "select": {
        "font-family": "Baskerville, serif"
      }
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-family": "Baskerville, serif",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      },
      "title": {
        "color": "#000103"
      },
      "header": {
        "color": "#000103"
      },
      "lineItems": {
        "color": "#000103"
      },
      "subtotalText": {
        "color": "#000103"
      },
      "subtotal": {
        "color": "#000103"
      },
      "notice": {
        "color": "#000103"
      },
      "currency": {
        "color": "#000103"
      },
      "close": {
        "color": "#000103",
        ":hover": {
          "color": "#000103"
        }
      },
      "empty": {
        "color": "#000103"
      },
      "noteDescription": {
        "color": "#000103"
      },
      "discountText": {
        "color": "#000103"
      },
      "discountIcon": {
        "fill": "#000103"
      },
      "discountAmount": {
        "color": "#000103"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Baskerville, serif"
      },
      "count": {
        "font-size": "16px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#000103"
      },
      "title": {
        "color": "#000103"
      },
      "price": {
        "color": "#000103"
      },
      "fullPrice": {
        "color": "#000103"
      },
      "discount": {
        "color": "#000103"
      },
      "discountIcon": {
        "fill": "#000103"
      },
      "quantity": {
        "color": "#000103"
      },
      "quantityIncrement": {
        "color": "#000103",
        "border-color": "#000103"
      },
      "quantityDecrement": {
        "color": "#000103",
        "border-color": "#000103"
      },
      "quantityInput": {
        "color": "#000103",
        "border-color": "#000103"
      }
    }
  }
},
      });
    });
  }
})();

(function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'tommy-spase-merchandise.myshopify.com',
          storefrontAccessToken: '19822666a947172a3ee1764853ed2d77',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1666316795956],
            node: document.getElementById('product-component-4e13f3dac63'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
  "product": {
    "layout": "horizontal",
    "variantId": "all",
    "width": "100%",
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "description": true,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "text-align": "left",
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "title": {
        "font-family": "Playfair Display, serif",
        "font-size": "30px",
        "color": "#22b7d3"
      },
      "description": {
        "color": "#c8cfd3",
        "font-size": "16px",
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "price": {
        "font-family": "Playfair Display, serif",
        "font-size": "22px",
        "color": "#b7c0ca",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-size": "18.7px",
        "font-family": "Playfair Display, serif",
        "font-weight": "bold",
        "color": "#b7c0ca"
      }
    },
    "googleFonts": [
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display"
    ]
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "title": {
        "color": "#000103"
      },
      "footer": {
        "background-color": "#ffffff"
      },
      "header": {
        "color": "#000103"
      },
      "lineItems": {
        "color": "#000103"
      },
      "subtotalText": {
        "color": "#000103"
      },
      "subtotal": {
        "color": "#000103"
      },
      "notice": {
        "color": "#000103"
      },
      "currency": {
        "color": "#000103"
      },
      "close": {
        ":hover": {
          "color": "#000103"
        },
        "color": "#000103"
      },
      "emptyCart": {
        "color": "#000103"
      }
    },
    "googleFonts": [
      "Playfair Display"
    ]
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "title": {
        "font-family": "Playfair Display, serif"
      },
      "description": {
        "color": "#c8cfd3",
        "font-size": "16px",
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "price": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Playfair Display"
    ]
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "select": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Playfair Display",
      "Playfair Display"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#000103"
      },
      "title": {
        "color": "#000103"
      },
      "price": {
        "color": "#000103"
      },
      "quantity": {
        "color": "#000103"
      },
      "quantityIncrement": {
        "color": "#000103",
        "border-color": "#000103"
      },
      "quantityDecrement": {
        "color": "#000103",
        "border-color": "#000103"
      },
      "quantityInput": {
        "color": "#000103",
        "border-color": "#000103"
      }
    }
  }
}
      });
    });
  }
})();

(function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'tommy-spase-merchandise.myshopify.com',
          storefrontAccessToken: '19822666a947172a3ee1764853ed2d77',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1666324758580],
            node: document.getElementById('product-component-3daeb3e9fb0'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
  "product": {
    "layout": "horizontal",
    "variantId": "all",
    "width": "100%",
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "description": true,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "text-align": "left",
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "title": {
        "font-family": "Playfair Display, serif",
        "font-size": "30px",
        "color": "#22b7d3"
      },
      "description": {
        "color": "#c8cfd3",
        "font-size": "16px",
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "price": {
        "font-family": "Playfair Display, serif",
        "font-size": "22px",
        "color": "#b7c0ca",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-size": "18.7px",
        "font-family": "Playfair Display, serif",
        "font-weight": "bold",
        "color": "#b7c0ca"
      }
    },
    "googleFonts": [
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display"
    ]
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "title": {
        "color": "#000103"
      },
      "footer": {
        "background-color": "#ffffff"
      },
      "header": {
        "color": "#000103"
      },
      "lineItems": {
        "color": "#000103"
      },
      "subtotalText": {
        "color": "#000103"
      },
      "subtotal": {
        "color": "#000103"
      },
      "notice": {
        "color": "#000103"
      },
      "currency": {
        "color": "#000103"
      },
      "close": {
        ":hover": {
          "color": "#000103"
        },
        "color": "#000103"
      },
      "emptyCart": {
        "color": "#000103"
      }
    },
    "googleFonts": [
      "Playfair Display"
    ]
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "title": {
        "font-family": "Playfair Display, serif"
      },
      "description": {
        "color": "#c8cfd3",
        "font-size": "16px",
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "price": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Playfair Display"
    ]
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "select": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Playfair Display",
      "Playfair Display"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#000103"
      },
      "title": {
        "color": "#000103"
      },
      "price": {
        "color": "#000103"
      },
      "quantity": {
        "color": "#000103"
      },
      "quantityIncrement": {
        "color": "#000103",
        "border-color": "#000103"
      },
      "quantityDecrement": {
        "color": "#000103",
        "border-color": "#000103"
      },
      "quantityInput": {
        "color": "#000103",
        "border-color": "#000103"
      }
    }
  }
}
      });
    });
  }
})();

(function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'tommy-spase-merchandise.myshopify.com',
          storefrontAccessToken: '19822666a947172a3ee1764853ed2d77',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [3797945581620],
            node: document.getElementById('product-component-635483a34aa'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
  "product": {
    "layout": "horizontal",
    "variantId": "all",
    "width": "100%",
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "description": true,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "text-align": "left",
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-family": "Baskerville, serif",
        "font-weight": "normal"
      },
      "variantTitle": {
        "font-family": "Baskerville, serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Baskerville, serif",
        "font-weight": "normal",
        "font-size": "26px",
        "color": "#22b7d3"
      },
      "description": {
        "color": "#c8cfd3",
        "font-size": "16px",
        "font-family": "Baskerville, serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Baskerville, serif",
        "font-size": "18px",
        "color": "#b7c0ca",
        "font-weight": "normal"
      },
      "compareAt": {
        "font-size": "15px",
        "font-family": "Baskerville, serif",
        "font-weight": "normal",
        "color": "#b7c0ca"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "font-family": "Baskerville, serif",
        "font-weight": "normal"
      },
      "title": {
        "color": "#000103"
      },
      "footer": {
        "background-color": "#ffffff"
      },
      "header": {
        "color": "#000103"
      },
      "lineItems": {
        "color": "#000103"
      },
      "subtotalText": {
        "color": "#000103"
      },
      "subtotal": {
        "color": "#000103"
      },
      "notice": {
        "color": "#000103"
      },
      "currency": {
        "color": "#000103"
      },
      "close": {
        ":hover": {
          "color": "#000103"
        },
        "color": "#000103"
      },
      "emptyCart": {
        "color": "#000103"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Baskerville, serif",
        "font-weight": "normal"
      },
      "variantTitle": {
        "font-family": "Baskerville, serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Baskerville, serif",
        "font-weight": "normal"
      },
      "description": {
        "color": "#c8cfd3",
        "font-size": "16px",
        "font-family": "Baskerville, serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Baskerville, serif",
        "font-weight": "normal"
      },
      "compareAt": {
        "font-family": "Baskerville, serif",
        "font-weight": "normal"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Baskerville, serif",
        "font-weight": "normal"
      }
    }
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Baskerville, serif"
      },
      "select": {
        "font-family": "Baskerville, serif"
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#000103"
      },
      "title": {
        "color": "#000103"
      },
      "price": {
        "color": "#000103"
      },
      "quantity": {
        "color": "#000103"
      },
      "quantityIncrement": {
        "color": "#000103",
        "border-color": "#000103"
      },
      "quantityDecrement": {
        "color": "#000103",
        "border-color": "#000103"
      },
      "quantityInput": {
        "color": "#000103",
        "border-color": "#000103"
      }
    }
  }
}
      });
    });
  }
})();

(function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'tommy-spase-merchandise.myshopify.com',
          storefrontAccessToken: '19822666a947172a3ee1764853ed2d77',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1666302869556],
            node: document.getElementById('product-component-85d82e5bd86'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
  "product": {
    "layout": "horizontal",
    "variantId": "all",
    "width": "100%",
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "description": true,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "text-align": "left",
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "title": {
        "font-family": "Playfair Display, serif",
        "font-size": "30px",
        "color": "#22b7d3"
      },
      "description": {
        "color": "#c8cfd3",
        "font-size": "16px",
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "price": {
        "font-family": "Playfair Display, serif",
        "font-size": "22px",
        "color": "#b7c0ca",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-size": "18.7px",
        "font-family": "Playfair Display, serif",
        "font-weight": "bold",
        "color": "#b7c0ca"
      }
    },
    "googleFonts": [
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display"
    ]
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "title": {
        "color": "#dde2e9"
      },
      "footer": {
        "background-color": "#ffffff"
      },
      "header": {
        "color": "#dde2e9"
      },
      "lineItems": {
        "color": "#dde2e9"
      },
      "subtotalText": {
        "color": "#dde2e9"
      },
      "subtotal": {
        "color": "#dde2e9"
      },
      "notice": {
        "color": "#dde2e9"
      },
      "currency": {
        "color": "#dde2e9"
      },
      "close": {
        ":hover": {
          "color": "#dde2e9"
        },
        "color": "#dde2e9"
      },
      "emptyCart": {
        "color": "#dde2e9"
      }
    },
    "googleFonts": [
      "Playfair Display"
    ]
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "title": {
        "font-family": "Playfair Display, serif"
      },
      "description": {
        "color": "#c8cfd3",
        "font-size": "16px",
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "price": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Playfair Display"
    ]
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "select": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Playfair Display",
      "Playfair Display"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#dde2e9"
      },
      "title": {
        "color": "#dde2e9"
      },
      "price": {
        "color": "#dde2e9"
      },
      "quantity": {
        "color": "#dde2e9"
      },
      "quantityIncrement": {
        "color": "#dde2e9",
        "border-color": "#dde2e9"
      },
      "quantityDecrement": {
        "color": "#dde2e9",
        "border-color": "#dde2e9"
      },
      "quantityInput": {
        "color": "#dde2e9",
        "border-color": "#dde2e9"
      }
    }
  }
}
      });
    });
  }
})();

(function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'tommy-spase-merchandise.myshopify.com',
          storefrontAccessToken: '19822666a947172a3ee1764853ed2d77',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1666321219636],
            node: document.getElementById('product-component-545b19e9011'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
  "product": {
    "layout": "horizontal",
    "variantId": "all",
    "width": "100%",
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "description": true,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "text-align": "left",
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "title": {
        "font-family": "Playfair Display, serif",
        "font-size": "30px",
        "color": "#22b7d3"
      },
      "description": {
        "color": "#c8cfd3",
        "font-size": "16px",
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "price": {
        "font-family": "Playfair Display, serif",
        "font-size": "22px",
        "color": "#b7c0ca",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-size": "18.7px",
        "font-family": "Playfair Display, serif",
        "font-weight": "bold",
        "color": "#b7c0ca"
      }
    },
    "googleFonts": [
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display"
    ]
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "title": {
        "color": "#000103"
      },
      "footer": {
        "background-color": "#ffffff"
      },
      "header": {
        "color": "#000103"
      },
      "lineItems": {
        "color": "#000103"
      },
      "subtotalText": {
        "color": "#000103"
      },
      "subtotal": {
        "color": "#000103"
      },
      "notice": {
        "color": "#000103"
      },
      "currency": {
        "color": "#000103"
      },
      "close": {
        ":hover": {
          "color": "#000103"
        },
        "color": "#000103"
      },
      "emptyCart": {
        "color": "#000103"
      }
    },
    "googleFonts": [
      "Playfair Display"
    ]
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "title": {
        "font-family": "Playfair Display, serif"
      },
      "description": {
        "color": "#c8cfd3",
        "font-size": "16px",
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "price": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Playfair Display"
    ]
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "select": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Playfair Display",
      "Playfair Display"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#000103"
      },
      "title": {
        "color": "#000103"
      },
      "price": {
        "color": "#000103"
      },
      "quantity": {
        "color": "#000103"
      },
      "quantityIncrement": {
        "color": "#000103",
        "border-color": "#000103"
      },
      "quantityDecrement": {
        "color": "#000103",
        "border-color": "#000103"
      },
      "quantityInput": {
        "color": "#000103",
        "border-color": "#000103"
      }
    }
  }
}
      });
    });
  }
})();

(function () {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        if (window.ShopifyBuy) {
          if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
          } else {
            loadScript();
          }
        } else {
          loadScript();
        }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'tommy-spase-merchandise.myshopify.com',
          storefrontAccessToken: '19822666a947172a3ee1764853ed2d77',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [3715242917940],
            node: document.getElementById('product-component-1560747217863'),
            moneyFormat: '${{amount}}',
            options: {
                "product":{
                    "variantId":"all",
                    "width":"240px",
                    "contents":{
                        "imgWithCarousel":false,
                        "variantTitle":false,
                        "description":false,
                        "buttonWithQuantity":false,
                        "quantity":false},
                "styles":{
                    "product":{
                        "@media (min-width: 601px)":{
                            "max-width":"100%",
                            "margin-left":"0",
                            "margin-bottom":"50px"}},
                    "button":{
                        "font-family":"Baskerville, serif",
                        "font-weight":"normal"},
                    "variantTitle":{
                        "font-family":"Baskerville, serif",
                        "font-weight":"normal"},
                    "title":{
                        "font-family":"Baskerville, serif",
                        "font-weight":"normal","color":"#22b7d3"},
                    "description":{
                        "color":"#c8cfd3",
                        "font-size":"16px",
                        "font-family":"Baskerville, serif",
                        "font-weight":"normal"},
                    "price":{
                        "font-family":"Baskerville, serif",
                        "color":"#b7c0ca",
                        "font-weight":"normal"},
                    "compareAt":{
                        "font-size":"12px",
                        "font-family":"Baskerville, serif",
                        "font-weight":"normal","color":"#b7c0ca"}}},
                    "cart":{
                        "contents":{
                            "button":true},
                        "styles":{
                            "button":{
                                "font-family":"Baskerville, serif",
                                "font-weight":"normal"},
                            "title":{"color":"#000103"},
                            "footer":{
                                "background-color":"#ffffff"},
                                "header":{"color":"#000103"},
                                "lineItems":{"color":"#000103"},
                                "subtotalText":{"color":"#000103"},
                                "subtotal":{"color":"#000103"},
                                "notice":{"color":"#000103"},
                                "currency":{"color":"#000103"},
                                "close":{":hover":{"color":"#000103"},"color":"#000103"},
                                "emptyCart":{"color":"#000103"}}},
                            "modalProduct":{"contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"buttonWithQuantity":true,"button":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}},"button":{"font-family":"Baskerville, serif","font-weight":"normal"},"variantTitle":{"font-family":"Baskerville, serif","font-weight":"normal"},"title":{"font-family":"Baskerville, serif","font-weight":"normal"},"description":{"color":"#c8cfd3","font-size":"16px","font-family":"Baskerville, serif","font-weight":"normal"},"price":{"font-family":"Baskerville, serif","font-weight":"normal"},"compareAt":{"font-family":"Baskerville, serif","font-weight":"normal"}}},"toggle":{"styles":{"toggle":{"font-family":"Baskerville, serif","font-weight":"normal"}}},"option":{"styles":{"label":{"font-family":"Baskerville, serif"},"select":{"font-family":"Baskerville, serif"}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}},"lineItem":{"styles":{"variantTitle":{"color":"#000103"},"title":{"color":"#000103"},"price":{"color":"#000103"},"quantity":{"color":"#000103"},"quantityIncrement":{"color":"#000103","border-color":"#000103"},"quantityDecrement":{"color":"#000103","border-color":"#000103"},"quantityInput":{"color":"#000103","border-color":"#000103"}}}},
          });
        });
      }
    })();

(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'tommy-spase-merchandise.myshopify.com',
      storefrontAccessToken: '19822666a947172a3ee1764853ed2d77',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [3704092590132],
        node: document.getElementById('product-component-1560747723297'),
        moneyFormat: '${{amount}}',
        options: {"product":{"variantId":"all","width":"240px","contents":{"imgWithCarousel":false,"variantTitle":false,"description":false,"buttonWithQuantity":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0","margin-bottom":"50px"}},"button":{"font-family":"Baskerville, serif","font-weight":"normal"},"variantTitle":{"font-family":"Baskerville, serif","font-weight":"normal"},"title":{"font-family":"Baskerville, serif","font-weight":"normal","color":"#22b7d3"},"description":{"color":"#c8cfd3","font-size":"16px","font-family":"Baskerville, serif","font-weight":"normal"},"price":{"font-family":"Baskerville, serif","color":"#b7c0ca","font-weight":"normal"},"compareAt":{"font-size":"12px","font-family":"Baskerville, serif","font-weight":"normal","color":"#b7c0ca"}}},"cart":{"contents":{"button":true},"styles":{"button":{"font-family":"Baskerville, serif","font-weight":"normal"},"title":{"color":"#000103"},"footer":{"background-color":"#ffffff"},"header":{"color":"#000103"},"lineItems":{"color":"#000103"},"subtotalText":{"color":"#000103"},"subtotal":{"color":"#000103"},"notice":{"color":"#000103"},"currency":{"color":"#000103"},"close":{":hover":{"color":"#000103"},"color":"#000103"},"emptyCart":{"color":"#000103"}}},"modalProduct":{"contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"buttonWithQuantity":true,"button":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}},"button":{"font-family":"Baskerville, serif","font-weight":"normal"},"variantTitle":{"font-family":"Baskerville, serif","font-weight":"normal"},"title":{"font-family":"Baskerville, serif","font-weight":"normal"},"description":{"color":"#c8cfd3","font-size":"16px","font-family":"Baskerville, serif","font-weight":"normal"},"price":{"font-family":"Baskerville, serif","font-weight":"normal"},"compareAt":{"font-family":"Baskerville, serif","font-weight":"normal"}}},"toggle":{"styles":{"toggle":{"font-family":"Baskerville, serif","font-weight":"normal"}}},"option":{"styles":{"label":{"font-family":"Baskerville, serif"},"select":{"font-family":"Baskerville, serif"}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}},"lineItem":{"styles":{"variantTitle":{"color":"#000103"},"title":{"color":"#000103"},"price":{"color":"#000103"},"quantity":{"color":"#000103"},"quantityIncrement":{"color":"#000103","border-color":"#000103"},"quantityDecrement":{"color":"#000103","border-color":"#000103"},"quantityInput":{"color":"#000103","border-color":"#000103"}}}},
      });
    });
  }
})();

(function () {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        if (window.ShopifyBuy) {
          if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
          } else {
            loadScript();
          }
        } else {
          loadScript();
        }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'tommy-spase-merchandise.myshopify.com',
          storefrontAccessToken: '19822666a947172a3ee1764853ed2d77',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [3689337258036],
            node: document.getElementById('product-component-1560746374044'),
            moneyFormat: '${{amount}}',
            options: {"product":{"variantId":"all","width":"240px","contents":{"imgWithCarousel":false,"variantTitle":false,"description":false,"buttonWithQuantity":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0","margin-bottom":"50px"}},"button":{"font-family":"Baskerville, serif","font-weight":"normal"},"variantTitle":{"font-family":"Baskerville, serif","font-weight":"normal"},"title":{"font-family":"Baskerville, serif","font-weight":"normal","color":"#22b7d3"},"description":{"color":"#c8cfd3","font-size":"16px","font-family":"Baskerville, serif","font-weight":"normal"},"price":{"font-family":"Baskerville, serif","color":"#b7c0ca","font-weight":"normal"},"compareAt":{"font-size":"12px","font-family":"Baskerville, serif","font-weight":"normal","color":"#b7c0ca"}}},"cart":{"contents":{"button":true},"styles":{"button":{"font-family":"Baskerville, serif","font-weight":"normal"},"title":{"color":"#000103"},"footer":{"background-color":"#ffffff"},"header":{"color":"#000103"},"lineItems":{"color":"#000103"},"subtotalText":{"color":"#000103"},"subtotal":{"color":"#000103"},"notice":{"color":"#000103"},"currency":{"color":"#000103"},"close":{":hover":{"color":"#000103"},"color":"#000103"},"emptyCart":{"color":"#000103"}}},"modalProduct":{"contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"buttonWithQuantity":true,"button":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}},"button":{"font-family":"Baskerville, serif","font-weight":"normal"},"variantTitle":{"font-family":"Baskerville, serif","font-weight":"normal"},"title":{"font-family":"Baskerville, serif","font-weight":"normal"},"description":{"color":"#c8cfd3","font-size":"16px","font-family":"Baskerville, serif","font-weight":"normal"},"price":{"font-family":"Baskerville, serif","font-weight":"normal"},"compareAt":{"font-family":"Baskerville, serif","font-weight":"normal"}}},"toggle":{"styles":{"toggle":{"font-family":"Baskerville, serif","font-weight":"normal"}}},"option":{"styles":{"label":{"font-family":"Baskerville, serif"},"select":{"font-family":"Baskerville, serif"}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}},"lineItem":{"styles":{"variantTitle":{"color":"#000103"},"title":{"color":"#000103"},"price":{"color":"#000103"},"quantity":{"color":"#000103"},"quantityIncrement":{"color":"#000103","border-color":"#000103"},"quantityDecrement":{"color":"#000103","border-color":"#000103"},"quantityInput":{"color":"#000103","border-color":"#000103"}}}},
          });
        });
      }
    })();

(function () {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        if (window.ShopifyBuy) {
          if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
          } else {
            loadScript();
          }
        } else {
          loadScript();
        }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'tommy-spase-merchandise.myshopify.com',
          storefrontAccessToken: '19822666a947172a3ee1764853ed2d77',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [3715249897524],
            node: document.getElementById('product-component-1560747640603'),
            moneyFormat: '${{amount}}',
            options: {"product":{"variantId":"all","width":"240px","contents":{"imgWithCarousel":false,"variantTitle":false,"description":false,"buttonWithQuantity":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0","margin-bottom":"50px"}},"button":{"font-family":"Baskerville, serif","font-weight":"normal"},"variantTitle":{"font-family":"Baskerville, serif","font-weight":"normal"},"title":{"font-family":"Baskerville, serif","font-weight":"normal","color":"#22b7d3"},"description":{"color":"#c8cfd3","font-size":"16px","font-family":"Baskerville, serif","font-weight":"normal"},"price":{"font-family":"Baskerville, serif","color":"#b7c0ca","font-weight":"normal"},"compareAt":{"font-size":"12px","font-family":"Baskerville, serif","font-weight":"normal","color":"#b7c0ca"}}},"cart":{"contents":{"button":true},"styles":{"button":{"font-family":"Baskerville, serif","font-weight":"normal"},"title":{"color":"#000103"},"footer":{"background-color":"#ffffff"},"header":{"color":"#000103"},"lineItems":{"color":"#000103"},"subtotalText":{"color":"#000103"},"subtotal":{"color":"#000103"},"notice":{"color":"#000103"},"currency":{"color":"#000103"},"close":{":hover":{"color":"#000103"},"color":"#000103"},"emptyCart":{"color":"#000103"}}},"modalProduct":{"contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"buttonWithQuantity":true,"button":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}},"button":{"font-family":"Baskerville, serif","font-weight":"normal"},"variantTitle":{"font-family":"Baskerville, serif","font-weight":"normal"},"title":{"font-family":"Baskerville, serif","font-weight":"normal"},"description":{"color":"#c8cfd3","font-size":"16px","font-family":"Baskerville, serif","font-weight":"normal"},"price":{"font-family":"Baskerville, serif","font-weight":"normal"},"compareAt":{"font-family":"Baskerville, serif","font-weight":"normal"}}},"toggle":{"styles":{"toggle":{"font-family":"Baskerville, serif","font-weight":"normal"}}},"option":{"styles":{"label":{"font-family":"Baskerville, serif"},"select":{"font-family":"Baskerville, serif"}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}},"lineItem":{"styles":{"variantTitle":{"color":"#000103"},"title":{"color":"#000103"},"price":{"color":"#000103"},"quantity":{"color":"#000103"},"quantityIncrement":{"color":"#000103","border-color":"#000103"},"quantityDecrement":{"color":"#000103","border-color":"#000103"},"quantityInput":{"color":"#000103","border-color":"#000103"}}}},
          });
        });
      }
    })();

(function () {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        if (window.ShopifyBuy) {
          if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
          } else {
            loadScript();
          }
        } else {
          loadScript();
        }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'tommy-spase-merchandise.myshopify.com',
          storefrontAccessToken: '19822666a947172a3ee1764853ed2d77',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [3689368289332],
            node: document.getElementById('product-component-1560746278564'),
            moneyFormat: '${{amount}}',
            options: {"product":{"variantId":"all","width":"240px","contents":{"imgWithCarousel":false,"variantTitle":false,"description":false,"buttonWithQuantity":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0","margin-bottom":"50px"}},"button":{"font-family":"Baskerville, serif","font-weight":"normal"},"variantTitle":{"font-family":"Baskerville, serif","font-weight":"normal"},"title":{"font-family":"Baskerville, serif","font-weight":"normal","color":"#22b7d3"},"description":{"color":"#c8cfd3","font-size":"16px","font-family":"Baskerville, serif","font-weight":"normal"},"price":{"font-family":"Baskerville, serif","color":"#b7c0ca","font-weight":"normal"},"compareAt":{"font-size":"12px","font-family":"Baskerville, serif","font-weight":"normal","color":"#b7c0ca"}}},"cart":{"contents":{"button":true},"styles":{"button":{"font-family":"Baskerville, serif","font-weight":"normal"},"title":{"color":"#000103"},"footer":{"background-color":"#ffffff"},"header":{"color":"#000103"},"lineItems":{"color":"#000103"},"subtotalText":{"color":"#000103"},"subtotal":{"color":"#000103"},"notice":{"color":"#000103"},"currency":{"color":"#000103"},"close":{":hover":{"color":"#000103"},"color":"#000103"},"emptyCart":{"color":"#000103"}}},"modalProduct":{"contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"buttonWithQuantity":true,"button":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}},"button":{"font-family":"Baskerville, serif","font-weight":"normal"},"variantTitle":{"font-family":"Baskerville, serif","font-weight":"normal"},"title":{"font-family":"Baskerville, serif","font-weight":"normal"},"description":{"color":"#c8cfd3","font-size":"16px","font-family":"Baskerville, serif","font-weight":"normal"},"price":{"font-family":"Baskerville, serif","font-weight":"normal"},"compareAt":{"font-family":"Baskerville, serif","font-weight":"normal"}}},"toggle":{"styles":{"toggle":{"font-family":"Baskerville, serif","font-weight":"normal"}}},"option":{"styles":{"label":{"font-family":"Baskerville, serif"},"select":{"font-family":"Baskerville, serif"}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}},"lineItem":{"styles":{"variantTitle":{"color":"#000103"},"title":{"color":"#000103"},"price":{"color":"#000103"},"quantity":{"color":"#000103"},"quantityIncrement":{"color":"#000103","border-color":"#000103"},"quantityDecrement":{"color":"#000103","border-color":"#000103"},"quantityInput":{"color":"#000103","border-color":"#000103"}}}},
          });
        });
      }
    })();

(function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'tommy-spase-merchandise.myshopify.com',
          storefrontAccessToken: '19822666a947172a3ee1764853ed2d77',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1666329608244],
            node: document.getElementById('product-component-2dd28a43eed'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
  "product": {
    "layout": "horizontal",
    "variantId": "all",
    "width": "100%",
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "description": true,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "text-align": "left",
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "title": {
        "font-family": "Playfair Display, serif",
        "font-size": "30px",
        "color": "#22b7d3"
      },
      "description": {
        "color": "#c8cfd3",
        "font-size": "16px",
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "price": {
        "font-family": "Playfair Display, serif",
        "font-size": "22px",
        "color": "#b7c0ca",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-size": "18.7px",
        "font-family": "Playfair Display, serif",
        "font-weight": "bold",
        "color": "#b7c0ca"
      }
    },
    "googleFonts": [
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display"
    ]
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "title": {
        "color": "#000103"
      },
      "footer": {
        "background-color": "#ffffff"
      },
      "header": {
        "color": "#000103"
      },
      "lineItems": {
        "color": "#000103"
      },
      "subtotalText": {
        "color": "#000103"
      },
      "subtotal": {
        "color": "#000103"
      },
      "notice": {
        "color": "#000103"
      },
      "currency": {
        "color": "#000103"
      },
      "close": {
        ":hover": {
          "color": "#000103"
        },
        "color": "#000103"
      },
      "emptyCart": {
        "color": "#000103"
      }
    },
    "googleFonts": [
      "Playfair Display"
    ]
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "title": {
        "font-family": "Playfair Display, serif"
      },
      "description": {
        "color": "#c8cfd3",
        "font-size": "16px",
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "price": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Playfair Display"
    ]
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      },
      "select": {
        "font-family": "Playfair Display, serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Playfair Display",
      "Playfair Display"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#000103"
      },
      "title": {
        "color": "#000103"
      },
      "price": {
        "color": "#000103"
      },
      "quantity": {
        "color": "#000103"
      },
      "quantityIncrement": {
        "color": "#000103",
        "border-color": "#000103"
      },
      "quantityDecrement": {
        "color": "#000103",
        "border-color": "#000103"
      },
      "quantityInput": {
        "color": "#000103",
        "border-color": "#000103"
      }
    }
  }
}
          });
        });
      }
    })();