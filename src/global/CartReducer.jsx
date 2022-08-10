export const CartReducer = (state, action) => {
  var { shoppingCart, totalPrice, qty } = state;
  var product, updatedPrice, updatedQty;
  switch (action.type) {
    case "Add_to_Cart":
      const check = shoppingCart.find((item) => item.id == action.id);
      if (check) return state;
      else {
        product = action.product;
        product["qty"] = 1;
        updatedQty = qty + 1;
        updatedPrice = totalPrice + product.finalprice;
        return {
          shoppingCart: [product, ...shoppingCart],
          totalPrice: updatedPrice,
          qty: updatedQty,
        };
      }
      break;
    case "Inc":
      product = action.product;
      product["qty"] += 1;
      updatedQty = qty + 1;
      updatedPrice = totalPrice + product.finalprice;
      return {
        shoppingCart: [...shoppingCart],
        totalPrice: updatedPrice,
        qty: updatedQty,
      };
      break;
    case "Dec":
      product = action.product;
      if (product["qty"] > 1) {
        product["qty"] -= 1;
        updatedQty = qty - 1;
        updatedPrice = totalPrice - product.finalprice;
        return {
          shoppingCart: [...shoppingCart],
          totalPrice: updatedPrice,
          qty: updatedQty,
        };
      } else return state;
      break;

    case "Delete":
      const RemainingProducts = shoppingCart.filter( (item) => item.id !== action.id);
      product = action.product;
      updatedPrice = totalPrice - (product["qty"] * product.finalprice);
      product["qty"] = 0;
      updatedQty = qty - product["qty"];
      return {
        shoppingCart: [...RemainingProducts],
        totalPrice: updatedPrice,
        qty: updatedQty,
      };
  }
};
