export const WishlistReducer = (state, action) => {
  var { wishlist } = state;
  var product
  switch (action.type) {
    case "Add_to_Wishlist":
      const check = wishlist.find((item) => item.id == action.id);
      if (check) 
      return state;
      else {
        product = action.product
        return {
          wishlist: [product, ...wishlist],
        
        };
      }
      break;
   
    case "Remove_From_wishlist":
      const RemainingWishlist = wishlist.filter( (item) => item.id !== action.id);
    
      return {
        shoppingCart: [...RemainingWishlist],
       
      };
  }
};
