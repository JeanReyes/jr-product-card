import React, { useContext, useState, useEffect, createContext } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n\n.styles-module_productCard__oaIVo {\n    background-color: white;\n    border-radius: 15px;\n    color: black;\n    padding-bottom: 5px;\n    width: 250px;\n    margin-right: 5px;\n    margin-top: 5px;\n}\n\n.styles-module_productImg__vPsTp {\n    border-radius: 15px 15px 0px 0px;\n    width: 100%;\n}\n\n.styles-module_productDescription__Ariub {\n    margin: 10px;\n    display: flex;\n    justify-content: center;\n}\n\n.styles-module_buttonsContainer__ghCDF {\n    margin: 10px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n}\n\n.styles-module_buttonMinus__BTgTf {\n    cursor: pointer;\n    background-color: transparent;\n    border: 1px solid black;\n    border-radius: 5px 0px 0px 5px;\n    font-size: 20px;\n    width: 30px;\n}\n\n.styles-module_buttonMinus__BTgTf:hover {\n    background-color: rgba(0, 0, 0, 0.1);\n}\n\n.styles-module_countLabel__S6HZ- {\n    border-bottom: 1px solid black;\n    border-top: 1px solid black;\n    font-size: 16px;\n    height: 25px;\n    padding-top: 5px;\n    text-align: center;\n    width: 30px;\n}\n\n.styles-module_buttonAdd__s8wd6 {\n    cursor: pointer;\n    background-color: transparent;\n    border: 1px solid black;\n    border-radius: 0px 5px 5px 0px;\n    font-size: 20px;\n    width: 30px;\n}\n\n.styles-module_buttonAdd__s8wd6:hover {\n    background-color: rgba(0, 0, 0, 0.1);\n}";
var style = {"productCard":"styles-module_productCard__oaIVo","productImg":"styles-module_productImg__vPsTp","productDescription":"styles-module_productDescription__Ariub","buttonsContainer":"styles-module_buttonsContainer__ghCDF","buttonMinus":"styles-module_buttonMinus__BTgTf","countLabel":"styles-module_countLabel__S6HZ-","buttonAdd":"styles-module_buttonAdd__s8wd6"};
styleInject(css_248z);

var img = "data:image/jpeg;base64,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";

var ProductImage = function ProductImage(_ref) {
  var _ref$img = _ref.img,
      img$1 = _ref$img === void 0 ? '' : _ref$img,
      className = _ref.className;

  var _useContext = useContext(productContext),
      product = _useContext.product;

  var showImage;

  if (img$1) {
    showImage = img$1;
  } else if (product.img) {
    showImage = product.img;
  } else {
    showImage = img;
  }

  return React.createElement("img", {
    className: style.productImg + " " + className,
    src: showImage,
    alt: "Product img"
  });
};

var ProductTitle = function ProductTitle(_ref) {
  var title = _ref.title,
      className = _ref.className;

  var _useContext = useContext(productContext),
      product = _useContext.product;

  return React.createElement("span", {
    className: style.productDescription + " " + className
  }, " ", title ? title : product.title, " ");
};

var useProduct = function useProduct(_ref) {
  var product = _ref.product,
      onChange = _ref.onChange,
      _ref$values = _ref.values,
      values = _ref$values === void 0 ? 0 : _ref$values;

  var _useState = useState(values),
      counter = _useState[0],
      setCounter = _useState[1];

  var increaseBy = function increaseBy(value) {
    var newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    if (onChange) onChange({
      product: product,
      count: newValue
    });
  };

  useEffect(function () {
    setCounter(values);
  }, [values]);
  return {
    counter: counter,
    increaseBy: increaseBy
  };
};

var productContext = /*#__PURE__*/createContext({});
var Provider = productContext.Provider;
var ProductCard = function ProductCard(_ref) {
  var children = _ref.children,
      product = _ref.product,
      className = _ref.className,
      styles = _ref.styles,
      onChange = _ref.onChange,
      values = _ref.values;

  var _useProduct = useProduct({
    onChange: onChange,
    product: product,
    values: values
  }),
      counter = _useProduct.counter,
      increaseBy = _useProduct.increaseBy;

  return React.createElement(Provider, {
    value: {
      product: product,
      counter: counter,
      increaseBy: increaseBy
    }
  }, React.createElement("div", {
    className: style.productCard + " " + className,
    style: styles
  }, children));
};
ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;

var ProductButtons = function ProductButtons(_ref) {
  var className = _ref.className;

  var _useContext = useContext(productContext),
      counter = _useContext.counter,
      increaseBy = _useContext.increaseBy;

  return React.createElement("div", {
    className: style.buttonsContainer + " " + className
  }, React.createElement("button", {
    className: style.buttonMinus,
    onClick: function onClick() {
      return increaseBy(-1);
    }
  }, " - "), React.createElement("div", {
    className: style.countLabel
  }, " ", counter, " "), React.createElement("button", {
    className: style.buttonAdd,
    onClick: function onClick() {
      return increaseBy(+1);
    }
  }, " + "));
};

export { ProductButtons, ProductCard, ProductImage, ProductTitle };
//# sourceMappingURL=jr-product-card.esm.js.map
