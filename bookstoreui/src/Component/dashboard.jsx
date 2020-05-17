import React, { Component } from 'react';
import BookDashboard from './bookDashboard';
import Header from './header'
import dragon from '../assets/dragon.jpg'
import Footer from './footer'
import { getBook, getAllCartItem, deleteCartItemById,addCustomerDetails} from '../Service/service'
import OrderSummary from './orderSummary';
import MyCarts from './myCarts'
import {addCartItem} from '../Service/service'

class Dashboard extends Component {
    constructor(props) {
        super();
        this.state = {
            result: [],
            cart: [],
            clickedId: [],
            movedToCart: false,
            addedToCart: [],
            cartCount:0,
            showCart:'false',
            cartItems:[],
            searchText:"",
            Name: "",
            PhoneNumber: 0,
            Pincode: 0,
            Locality: "",
            City: "",
            Address: "",
            Landmark: "",
        }

    }

    func = async () => {
        console.log("test")
        let result = await getBook()
        this.setState({ result })
    }
    componentDidMount() {
        this.func();
        this.getCartItems();
    }

    cartIconClickedHandler = () => {
        let showMyCart = this.state.showCart;
        this.setState({
            showCart: !showMyCart
        })
    }

    addToCart = async (id,count) => {
        var data = {
            BookId: id,
            Count: count
        }
        
        let result = await addCartItem(data)
           this.getCartItems()
            
        }

    search = (text) =>{
        this.setState({searchText:text.target.value})
    }

    getCartItems= async ()=>{
        let result  = await getAllCartItem()
        console.log(result)
        let cart = result.map(book => book.bookId)
        this.setState({cartItems: result, cart })
        
    }   
    
    deleteCartItems = async(cartid)=>  {
        let deletedResult=await deleteCartItemById(cartid)
        console.log(deletedResult)
        this.getCartItems() 
    }

    changeCartItems = async(book,count) =>{
        let deletedResult=await deleteCartItemById(book.cartId)
        this.addToCart(book.bookId,count)
    }

    
    handleSuccess=(text) => {
        this.setState({
            successText: text,
        })
    }

    addCustomer =async()=>{
        let addDetails=await addCustomerDetails()
        console.log(addDetails)
        const NewCustomerItem = {
            Name: this.state.Name,
            PhoneNumber: this.state.PhoneNumber,
            Pincode: this.state.Pincode,
            Locality: this.state.Locality,
            Address: this.state.Address,
            Landmark:this.state.Landmark,
    };
    addCustomerDetails(NewCustomerItem,this.handleSuccess)
}
    render() {
        // console.log(this.state.movedToCart)
        // if (this.state.movedToCart) {
        //     return (
        //         <div>
        //             <Header cart={this.state.cartCount}  movedToCartFunc={this.setMoveToCart} />
        //             <MyCarts cart={this.state.cart} books={this.state.result} />
        //             <Footer />
        //         </div>
        //     )
        // }
        // else {
            return (
                <div>
                    <Header
                    cart={this.state.cart} 
                    cartCount={this.state.cartCount}
                    cartIconClickedHandler={this.cartIconClickedHandler}
                    search={this.search}
                    //movedToCartFunc={this.setMoveToCart}
                     />
                    {
                        !this.state.showCart?
                        <MyCarts 
                        cartItems={this.state.cartItems} 
                        deleteCartItems={this.deleteCartItems}
                        changeCartItems={this.changeCartItems}
                        addCustomer={this.addCustomer}
                        />
                        :
                    <BookDashboard 
                    books={this.state.result.filter((book)=> book.title.includes(this.state.searchText))} 
                    AddToCart={this.addToCart} 
                    cart={this.state.cart} 
                    addToCart={this.addToCart}
                    />
    }
                    <Footer />
                </div>
            )
        }

    }

export default Dashboard;