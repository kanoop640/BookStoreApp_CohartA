import React, { Component } from "react";
import BookDashboard from "./bookDashboard";
import Header from "./header";
import dragon from "../assets/dragon.jpg";
import Footer from "./footer";
import {
  getBook,
  getAllCartItem,
  deleteCartItemById,
  addCustomerDetails,
  getcountofcartitem,
} from "../Service/service";
import OrderSummary from "./orderSummary";
import MyCarts from "./myCarts";
import { addCartItem } from "../Service/service";
import { Book } from "../Service/books";

class Dashboard extends Component {
  constructor(props) {
    super();
    this.state = {
      result: [],
      cart: [],
      clickedId: [],
      movedToCart: false,
      addedToCart: [],
      cartCount: 0,
      showCart: "false",
      cartItems: [],
      searchText: "",
      Name: "",
      PhoneNumber: 0,
      Pincode: 0,
      Locality: "",
      City: "",
      Address: "",
      Landmark: "",
      totalBook: [],
      addedCount: 0,
    };
  }

  getBookCount = async () => {
    let count = await getcountofcartitem();
    this.setState({ addedCount: count });
  };

  func = async () => {
    console.log("test");
    let result = await getBook();
    this.setState({ result });
  };
  componentDidMount() {
    this.func();
    this.getCartItems();
    this.getBookCount();
  }

  cartIconClickedHandler = () => {
    let showMyCart = this.state.showCart;
    this.setState({
      showCart: !showMyCart,
    });
  };

  addToCart = async (id, count) => {
    var data = {
      BookId: id,
      Count: count,
    };

    let result = await addCartItem(data);
    this.getCartItems();
  };

  search = (text) => {
    this.setState({ searchText: text.target.value });
  };

  getCartItems = async () => {
    this.getBookCount();
    let result = await getAllCartItem();
    console.log(result);
    let cart = result.map((book) => book.bookId);
    this.setState({ cartItems: result, cart });
  };

  deleteCartItems = async (cartid) => {
    let deletedResult = await deleteCartItemById(cartid);
    console.log(deletedResult);
    this.getCartItems();
  };

  changeCartItems = async (book, count) => {
    let deletedResult = await deleteCartItemById(book.cartId);
    this.addToCart(book.bookId, count);
  };

  addCustomer = async (
    Name,
    PhoneNumber,
    Pincode,
    Locality,
    Address,
    Landmark,
    City
  ) => {
    // let addDetails=await addCustomerDetails()
    console.log(City);
    const NewCustomerItem = {
      Email: sessionStorage.getItem("Email"),
      Name: Name,
      PhoneNumber: PhoneNumber,
      PinCode: Pincode,
      Locality: Locality,
      Address: Address,
      City: City,
      LandMark: Landmark,
    };
    addCustomerDetails(NewCustomerItem);
  };
  render() {
    return (
      <div>
        <div id="main">
          <Header
            cart={this.state.cart}
            cartCount={this.state.cartCount}
            cartIconClickedHandler={this.cartIconClickedHandler}
            search={this.search}
            //movedToCartFunc={this.setMoveToCart}
          />
          {!this.state.showCart ? (
            <MyCarts
              totalBook={this.totalBook}
              countCartBook={this.countCartBook}
              cartItems={this.state.cartItems}
              deleteCartItems={this.deleteCartItems}
              changeCartItems={this.changeCartItems}
              addedCount={this.state.addedCount}
              addCustomer={this.addCustomer}
            />
          ) : (
            <BookDashboard
              books={this.state.result.filter((book) =>
                book.title.includes(this.state.searchText)
              )}
              AddToCart={this.addToCart}
              cart={this.state.cart}
              addToCart={this.addToCart}
            />
          )}
        </div>
        <div id="footer-container">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Dashboard;
