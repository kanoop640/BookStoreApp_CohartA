import React, { Component } from 'react';
import BookDashboard from './bookDashboard';
import Header from './header'
import dragon from '../assets/dragon.jpg'
import Footer from './footer'
import { getBook } from '../Service/service'
import OrderSummary from './orderSummary';
import MyCarts from './myCarts'

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
            addedToCart:[]
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


    render() {
        console.log(this.state.movedToCart)
        if(this.state.movedToCart)
        {
            return (
                <div>
                    <Header cart={this.state.cart} movedToCartFunc ={this.setMoveToCart}/>
                    <MyCarts cart={this.state.cart} books={this.state.result}/>
                    <Footer />
                </div>
            ) 
        }
        else{
        return (
            <div>
                <Header cart={this.state.cart}  movedToCartFunc = {this.setMoveToCart}/>
                <BookDashboard books={this.state.result} AddToCart={this.addToCart} cart={this.state.cart} />
                <Footer />
            </div>
        )
        }

    }
}
export default Dashboard;