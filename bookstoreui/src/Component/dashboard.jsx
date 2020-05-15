import React, { Component } from 'react';
import BookDashboard from './bookDashboard';
import Header from './header'
import dragon from '../assets/dragon.jpg'
import Footer from './footer'
import { getBook } from '../Service/service'
import OrderSummary from './orderSummary';
import MyCarts from './myCarts'
import {addCartItem} from '../Service/service';

class Dashboard extends Component {
    constructor(props) {
        super();
        this.state = {
            bookId: '',
            title: '',
            author: '',
            image: '',
            price: '',
            description: '',
            result: [],
            cart: [],
            movedToCart:false,
            addedToCart:[],
            clickedId: [],
            BookCount: 0,
            cartCount: 0,
            addToBagBtnText: "Add to Bag",
            showMyCartComponent: false,
        }
    }

    func = async () => {
        console.log("test")
        let result = await getBook()
        this.setState({ result })
    }
    componentDidMount() {
        this.func();
    }

    addToCart = (id) => {
        if(!this.state.cart.includes(id)){
            this.setState({ cart: [...this.state.cart, id] })
        }
    }

    setMoveToCart = (value) => {
        this.setState({movedToCart: value})
    }

    addToCartHandler = (clickedID,AvaliableBooks) => {
        let cartCount = this.state.cartCount;
        let clickedidArray = this.state.clickedId;
        clickedidArray.push(clickedID);
        console.log(clickedID);
        //console.log(window.sessionStorage.getItem("email"));
        this.setState({
            cartCount: cartCount + 1,
            clickedId: [...clickedidArray],
            addToBagBtnText: "Added to bag"
        })
        var cart = {
            BookId: clickedID ,
            Count: AvaliableBooks
        }
       const response = addCartItem(cart);
       response.then(res=>{
          console.log(res.data); 
       })
    }
    render() {
        return(
            <div>
            <Header/>
            {
                this.state.showMyCartComponent?
                <myCart/>
                :
                <BookDashboard
                 books={this.state.result} 
                 AddToCart={this.addToCart} 
                 cart={this.state.cart} 
                 addToCartHandler={this.addToCartHandler}/>
            }
            </div>
        )
       // console.log(this.state.movedToCart)
        // if(this.state.movedToCart)
        // {
        //     return (
        //         <div>
        //             <Header cart={this.state.cart} movedToCartFunc ={this.setMoveToCart}/>
        //             <MyCarts cart={this.state.cart} books={this.state.result}/>
        //             <Footer />
        //         </div>
        //     ) 
        // }
        // else{
        // return (
        //     <div>
        //         <Header cart={this.state.cart}  movedToCartFunc = {this.setMoveToCart}/>
        //         <BookDashboard books={this.state.result} AddToCart={this.addToCart} cart={this.state.cart} />
        //         <Footer />
        //     </div>
        // )
        // }



    }
}
export default Dashboard;