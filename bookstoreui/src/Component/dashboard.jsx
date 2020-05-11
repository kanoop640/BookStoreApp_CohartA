import React, { Component } from 'react';
import BookDashboard from './bookDashboard';
import Header from './header'
import dragon from '../assets/dragon.jpg'
import Footer from './footer'
import { getBook } from '../Service/service'
import OrderSummery from'./orderSummery';

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

    render() {

        return (
            <div>
                <Header />
                <BookDashboard books={this.state.result}/>
                <Footer />
                <OrderSummery/>
            </div>
        )

    }
}
export default Dashboard;