import React,{Component} from 'react';
import BookDashboard from './bookDashboard';
import Header from './header'
import dragon from '../assets/dragon.jpg'
import Footer from './footer'

class Dashboard extends Component{
    state={
        books:[
        {
            bookid : 1,
            image:dragon,
            bookName : "Shero",
            authorName : "shero",
            price : 500,
            description:"You can always identify young Tiny Dragons by the eggshells they wear on their head.",

        },
        {
            bookid : 2,
            image:dragon,
            bookName : "Jimmy",
            authorName : "jimmy",
            price : 400,
            description:"No matter how old it gets, the Tiny Dragon is always a baby at heart. You can always identify young Tiny Dragons by the eggshells they wear on their head."

        },{
            bookid : 3,
            image:dragon,
            bookName : "Sumit",
            authorName : "Sumit",
            price : 550,
            description:"No matter how old it gets, the Tiny Dragon is always a baby at heart. You can always identify young Tiny Dragons by the eggshells they wear on their head."

        },{
            bookid : 4,
            image:dragon,
            bookName : "Somya",
            authorName : "Somya",
            price : 400,
            description:"No matter how old it gets, the Tiny Dragon is always a baby at heart. You can always identify young Tiny Dragons by the eggshells they wear on their head."

        },{
            bookid : 5,
            image:dragon,
            bookName : "Ankit",
            authorName : "Ankit",
            price : 500,
            description:"No matter how old it gets, the Tiny Dragon is always a baby at heart. You can always identify young Tiny Dragons by the eggshells they wear on their head."

        },{
            bookid : 6,
            image:dragon,
            bookName : "Rajat",
            authorName : "Rajat",
            price : 400,
            description:"No matter how old it gets, the Tiny Dragon is always a baby at heart. You can always identify young Tiny Dragons by the eggshells they wear on their head."

        },{
            bookid : 7,
            image:dragon,
            bookName : "Anjali",
            authorName : "Anjali",
            price : 450,
            description:"No matter how old it gets, the Tiny Dragon is always a baby at heart. You can always identify young Tiny Dragons by the eggshells they wear on their head."

        },
        {
            bookid : 1,
            image:dragon,
            bookName : "Shero",
            authorName : "shero",
            price : 500,
            description:"You can always identify young Tiny Dragons by the eggshells they wear on their head.",

        },
        {
            bookid : 2,
            image:dragon,
            bookName : "Jimmy",
            authorName : "jimmy",
            price : 400,
            description:"No matter how old it gets, the Tiny Dragon is always a baby at heart. You can always identify young Tiny Dragons by the eggshells they wear on their head."

        },{
            bookid : 3,
            image:dragon,
            bookName : "Sumit",
            authorName : "Sumit",
            price : 550,
            description:"No matter how old it gets, the Tiny Dragon is always a baby at heart. You can always identify young Tiny Dragons by the eggshells they wear on their head."

        },{
            bookid : 4,
            image:dragon,
            bookName : "Somya",
            authorName : "Somya",
            price : 400,
            description:"No matter how old it gets, the Tiny Dragon is always a baby at heart. You can always identify young Tiny Dragons by the eggshells they wear on their head."

        },{
            bookid : 5,
            image:dragon,
            bookName : "Ankit",
            authorName : "Ankit",
            price : 500,
            description:"No matter how old it gets, the Tiny Dragon is always a baby at heart. You can always identify young Tiny Dragons by the eggshells they wear on their head."

        },{
            bookid : 6,
            image:dragon,
            bookName : "Rajat",
            authorName : "Rajat",
            price : 400,
            description:"No matter how old it gets, the Tiny Dragon is always a baby at heart. You can always identify young Tiny Dragons by the eggshells they wear on their head."

        },{
            bookid : 7,
            image:dragon,
            bookName : "Anjali",
            authorName : "Anjali",
            price : 450,
            description:"No matter how old it gets, the Tiny Dragon is always a baby at heart. You can always identify young Tiny Dragons by the eggshells they wear on their head."

        },
    ]
    }
    render(){
        return(
            <div styles={{flexDirection:"column", justifyContent:"flex-start", alignItems:"end", flex:1 }}>
                <Header/>
            <BookDashboard books={this.state.books}/>
            <Footer styles={{position:"fixed"}}/>
            </div>
        )

    }
}
export default Dashboard;