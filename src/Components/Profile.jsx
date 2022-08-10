import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./mystyle.css";
import {WishlistContext} from "../global/WishlistContext";
import pic from "../assets/images/p78.jpeg";
import { propTypes } from "react-bootstrap/esm/Image";
export default function Profile() {
  var { wishlist, wishdispatch } = useContext(WishlistContext);
  return (
    <>
      <h3 className='background text-light  text-center p-3 mt-4'>
        User Account{" "}
      </h3>
      <div className='container-fluid mb-3'>
        <div className='row'>
          <div className='col-sm-6 col-12'>
            <img src={pic} className='w-100'></img>
          </div>
          <div className='col-sm-6 col-12'>
            <table className='table table-light table-striped table-hover fiexd-top'>
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>Nikhil Sharma</td>
                </tr>
                <tr>
                  <th>User Name</th>
                  <td>Nikhil</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>Nikhilsharma127640@gmail.com</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>8512012572</td>
                </tr>
                <tr>
                  <th>Address line1</th>
                  <td>
                    village Post Bisrakh Greater Noida Sector 1 Knowledge Park 5
                  </td>
                </tr>
                <tr>
                  <th>Address line2</th>
                  <td>Near By Ds International School </td>
                </tr>
                <tr>
                  <th>Address line3</th>
                  <td>Thana Bisrakh Ktwali Bisrakh </td>
                </tr>
                <tr>
                  <th>ZIP CODE</th>
                  <td>201306 </td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>Greater Noida </td>
                </tr>
                <tr>
                  <th>State</th>
                  <td>UttarPardesh </td>
                </tr>
                <tr>
                  <th colSpan={2}>
                    <Link to='' className='btn background text-light w-100 '>
                      Update Profile
                    </Link>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <h3 className='background text-light  text-center p-3 mt-4'>
        Wishlist Section
      </h3>
    {
      wishlist.length>0?  <div className='resposive-table'>
        <table className='table table-light table-striped table-hover'>
          <tbody>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Color</th>
              <th>Size</th>
              <th>Price</th>
              <th></th>
            
              <th></th>
            </tr>
            {wishlist.map((item, index) => {
              return (
                <>
                  <tr>
                    <td>
                      <Link to={"/product/" + item.id}><img src={item.pic1} style={{  width: "20vh",borderRadius: "10px", height: "20vh",  }}/></Link>
                    </td>
                    <td>{item.name} </td>
                    <td>{item.color} </td>
                    <td>{item.size} </td>
                    <td>{item.finalprice}</td>
                    <td><Link to={"/product/"+item.id} onClick={() => wishdispatch({ type: "Remove_From_Wishlist",id: item.id })}><i className='material-icons'>add_shopping_cart</i> </Link> </td>

                    <th> <Link to={"/profile"} onClick={() => wishdispatch({ type: "Remove_From_Wishlist",id: item.id })}><i className='material-icons'>delete_forever</i> </Link> </th>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>:
      <h5 className="background text-light text-center p-2">No Items In Wishlist</h5>
    }
    </>
  );
}
