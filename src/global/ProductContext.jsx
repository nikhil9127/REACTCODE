import React, { createContext, useState } from "react";
import pic1  from  "../assets/images/p1.jpg"
import pic2  from  "../assets/images/p2.jpg"
import pic3  from  "../assets/images/p3.jpg"
import pic4  from  "../assets/images/p4.jpg"
import pic5  from  "../assets/images/p5.jpg"
import pic6  from  "../assets/images/p6.jpg"
import pic7  from  "../assets/images/p7.jpg"
import pic8  from  "../assets/images/p8.jpg"
import pic9  from  "../assets/images/p9.jpg"
import pic10 from "../assets/images/p10.jpg"
import pic11 from "../assets/images/p11.jpg"
import pic12 from "../assets/images/p12.jpg"
import pic13 from "../assets/images/p13.jpg"
import pic14 from "../assets/images/p14.jpg"
import pic15 from "../assets/images/p15.jpg"
import pic16 from "../assets/images/p16.jpg"
import pic17 from "../assets/images/p17.jpg"
import pic18 from "../assets/images/p18.jpg"
import pic19 from "../assets/images/p19.jpg"
import pic20 from "../assets/images/p20.jpg"
import pic21 from "../assets/images/p21.jpg"
import pic22 from "../assets/images/p22.jpg"
import pic23 from "../assets/images/p23.jpg"
import pic24 from "../assets/images/p24.jpg"
import pic25 from "../assets/images/p25.jpg"
import pic26 from "../assets/images/p26.jpg"
import pic27 from "../assets/images/p27.jpg"
import pic28 from "../assets/images/p28.jpg"
import pic29 from "../assets/images/p29.jpg"
import pic30 from "../assets/images/p30.jpg"
import pic31 from "../assets/images/p31.jpg"
import pic32 from "../assets/images/p32.jpg"
import pic33 from "../assets/images/p33.jpg"
import pic34 from "../assets/images/p34.jpg"
import pic35 from "../assets/images/p35.jpg"
import pic36 from "../assets/images/p36.jpg"
import pic37 from "../assets/images/p37.jpg"
import pic38 from "../assets/images/p38.jpg"
import pic39 from "../assets/images/p39.jpg"
import pic40 from "../assets/images/p40.jpg"
import pic41 from "../assets/images/p41.jpg"
import pic42 from "../assets/images/p42.jpg"
import pic43 from "../assets/images/p43.jpg"
import pic44 from "../assets/images/p44.jpg"
import pic45 from "../assets/images/p45.jpg"
import pic46 from "../assets/images/p46.jpg"
import pic47 from "../assets/images/p47.jpg"
import pic48 from "../assets/images/p48.jpg"
import pic49 from "../assets/images/p49.jpg"
import pic50 from "../assets/images/p50.jpg"
import pic51 from "../assets/images/p51.jpg"
import pic52 from "../assets/images/p52.jpg"
import pic53 from "../assets/images/p53.jpg"
import pic54 from "../assets/images/p54.jpg"
import pic55 from "../assets/images/p55.jpg"
import pic56 from "../assets/images/p56.jpg"
import pic57 from "../assets/images/p57.jpg"
import pic58 from "../assets/images/p58.jpg"
import pic59 from "../assets/images/p59.jpg"
import pic60 from "../assets/images/p60.jpg"
import pic61 from "../assets/images/p61.jpg"
import pic62 from "../assets/images/p62.jpg"
import pic63 from "../assets/images/p63.jpg"
import pic64 from "../assets/images/p64.jpg"
import pic65 from "../assets/images/p65.jpg"
import pic66 from "../assets/images/p66.jpg"
import pic67 from "../assets/images/p67.jpg"
import pic68 from "../assets/images/p68.jpg"
import pic69 from "../assets/images/p69.jpg"
import pic70 from "../assets/images/p70.jpg"
import pic71 from "../assets/images/p71.jpg"
import pic72 from "../assets/images/p72.jpg"
import pic73 from "../assets/images/p73.jpg"
import pic74 from "../assets/images/p74.jpg"
import pic75 from "../assets/images/p75.jpg"
import pic76 from "../assets/images/p76.jpg"




export const ProductContext = createContext()

const ProductContextProvider = (props) => {
    const [products] = useState([

      { id: 1,  name: "Adidas Man Jeans Slim Fit",   maincategory:" Male",  subcategory:"Tshirt", brand: " Adidas", baseprice: 5000, discount: 50, finalprice: 2500, color: "Blue", size: "XL", pic1: pic15, pic2: pic12, pic3: pic13, pic4: pic16} ,
      { id: 2,  name: "Mufti  Man Jeans Slim Fit",   maincategory:" Male",  subcategory:"Shirt",  brand: " Polo ",  baseprice: 5000, discount: 50, finalprice: 2500, color: "Blue", size: "XL", pic1: pic62, pic2: pic70, pic3: pic69, pic4: pic40 },
      { id: 3,  name: "Polo   Man Jeans Slim Fit",   maincategory:" Male",  subcategory:"Jeans",  brand: " Mufti  ",baseprice: 5000, discount: 50, finalprice: 2500, color: "Blue", size: "XL", pic1: pic63, pic2: pic71, pic3: pic50, pic4: pic41 },
      { id: 4,  name: "Gucci  Man Jeans Slim Fit",   maincategory:" Male",  subcategory:"Trouser",brand: " Gucci ", baseprice: 5000, discount: 50, finalprice: 2500, color: "Blue", size: "XL", pic1: pic64, pic2: pic72, pic3: pic51, pic4: pic64 },
      { id: 5,  name: "Adidas Man Jeans Slim Fit",   maincategory:" Male",  subcategory:"Tshirt", brand: " Adidas", baseprice: 5000, discount: 50, finalprice: 2500, color: "Blue", size: "XL", pic1: pic65, pic2: pic73, pic3: pic52, pic4: pic64 },
      { id: 6,  name: "Adidas Man Jeans Slim Fit",   maincategory:" Male",  subcategory:"Shirt",  brand: " Adidas", baseprice: 5000, discount: 50, finalprice: 2500, color: "Blue", size: "XL", pic1: pic66, pic2: pic74, pic3: pic53, pic4: pic64 },
      { id: 7,  name: "Adidas Man Jeans Slim Fit",   maincategory:" Male",  subcategory:"Jeans",  brand: " Adidas", baseprice: 5000, discount: 50, finalprice: 2500, color: "Blue", size: "XL", pic1: pic67, pic2: pic75, pic3: pic54, pic4: pic64 },
      { id: 8,  name: "Adidas Man Jeans Slim Fit",   maincategory:" Male",  subcategory:"Trouser",brand: " Adidas", baseprice: 5000, discount: 50, finalprice: 2500, color: "Blue", size: "XL", pic1: pic68, pic2: pic76, pic3: pic55, pic4: pic64 },
      { id: 9,  name: "Adidas Man Jeans Slim Fit",   maincategory:" Male",  subcategory:"Tshirt", brand: " Adidas", baseprice: 5000, discount: 50, finalprice: 2500, color: "Blue", size: "XL", pic1: pic69, pic2: pic7,  pic3: pic56, pic4: pic64 },
      { id: 10, name: "Adidas Woman Jeans Slim Fit", maincategory:" Female",subcategory:"Shirt",  brand: " Adidas", baseprice: 5000, discount: 50, finalprice: 2500, color: "Blue", size: "XL", pic1: pic40, pic2: pic16, pic3: pic41, pic4: pic43 },
      { id: 11, name: "Polo   Woman Jeans Slim Fit", maincategory:" Female",subcategory:"Jeans",  brand: " Polo ",  baseprice: 5000, discount: 50, finalprice: 2500, color: "Blue", size: "XL", pic1: pic42, pic2: pic43, pic3: pic44, pic4: pic45 },
      { id: 12, name: "Mufti  Woman Jeans Slim Fit", maincategory:" Female",subcategory:"Trouser",brand: " Mufti ", baseprice: 5000, discount: 50, finalprice: 2500, color: "Blue", size: "XL", pic1: pic49, pic2: pic48, pic3: pic47, pic4: pic46 },
      { id: 13, name: "Gucci  Woman Jeans Slim Fit", maincategory:" Female",subcategory:"Tshirt", brand: " Gucci ", baseprice: 5000, discount: 50, finalprice: 2500, color: "Blue", size: "XL", pic1: pic50, pic2: pic51, pic3: pic52, pic4: pic53 },
      { id: 14, name: "Adidas Kids Jeans Slim Fit",  maincategory:" Kids",  subcategory:"Shirt",  brand: " Adidas", baseprice: 5000, discount: 50, finalprice: 2500, color: "Blue", size: "XL", pic1: pic54, pic2: pic55, pic3: pic56, pic4: pic57 },
      { id: 15, name: "Polo   Kids Jeans Slim Fit",  maincategory:" Kids",  subcategory:"Jeans",  brand: " Polo ",  baseprice: 5000, discount: 50, finalprice: 2500, color: "Blue", size: "XL", pic1: pic61, pic2: pic60, pic3: pic59, pic4: pic58 },
      { id: 16, name: "Mufti  Kids Jeans Slim Fit",  maincategory:" Kids",  subcategory:"Trouser",brand: " Mufti  ",baseprice: 5000, discount: 50, finalprice: 2500, color: "Blue", size: "XL", pic1: pic41, pic2: pic50, pic3: pic46, pic4: pic43 },
      { id: 17, name: "Gucci  Kids Jeans Slim Fit",  maincategory:" Kids",  subcategory:"Tshirt", brand: " Gucci ", baseprice: 5000, discount: 50, finalprice: 2500, color: "Blue", size: "XL", pic1: pic59, pic2: pic55, pic3: pic43, pic4: pic49 },
      { id: 18, name: "Adidas Woman Jeans Slim Fit", maincategory:" Female",subcategory:"Shirt",  brand: " Adidas", baseprice: 5000, discount: 50, finalprice: 2500, color: "Blue", size: "XL", pic1: pic56, pic2: pic50, pic3: pic42, pic4: pic43 },
      { id: 19, name: "Adidas Woman Jeans Slim Fit", maincategory:" Female",subcategory:"Jeans",  brand: " Adidas", baseprice: 5000, discount: 50, finalprice: 2500, color: "Blue", size: "XL", pic1: pic49, pic2: pic58, pic3: pic46, pic4: pic49 },
      { id: 20, name: "Adidas Woman Jeans Slim Fit", maincategory:" Female",subcategory:"Trouser",brand: " Adidas", baseprice: 5000, discount: 50, finalprice: 2500, color: "Blue", size: "XL", pic1: pic55, pic2: pic50, pic3: pic48, pic4: pic43 }
    ])
    return (
        <ProductContext.Provider value={{ products: [...products]}}>
            {props.children}
        </ProductContext.Provider>
    )


}
export default ProductContextProvider
