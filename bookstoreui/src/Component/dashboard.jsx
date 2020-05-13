import React, { Component } from 'react';
import BookDashboard from './bookDashboard';
import Header from './header'
import dragon from '../assets/dragon.jpg'
import Footer from './footer'
import { getBook } from '../Service/service'
import OrderSummary from'./orderSummary';

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
            cart:[]
        }
    }
        
   func =async() =>{
           console.log("test")
            let result = await getBook()
            console.log(result)
            this.setState({result})
        }
    componentDidMount() {
        this.func();
            }

    addToCart=(id) => {
        this.setState({cart:[ ...this.state.cart,id]})
    }

    render() {

        return (
            <div>
                <Header />
                <BookDashboard books={this.state.result} AddToCart={this.addToCart} cart={this.state.cart}/>
                <Footer />
            </div>
        )

    }
}
export default Dashboard;