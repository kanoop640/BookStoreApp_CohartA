import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

class BookDashboard extends Component {

    constructor(props) {
        super(props)
        console.log(props.books)
        this.state = {
            arr:[],
            count: 0,
        }
    }
    displayButton(id) {
        if (this.props.cart.includes(id)) {

            return (
                <CardActions className="">
                    <button className="add-to-cart">Added to cart</button>
                </CardActions>
            )
        }
        else {

            return (

                <CardActions>
                    <Button className="MuiButton-outlined"
                        style={styles.cartAdd}
                        onClick={() => this.props.AddToCart(id)}
                        variant='outlined'
                        color='default'
                    > Add to cart</Button>

                    <Button
                        className="MuiButton-outlined"
                        style={styles.cartWish}
                        variant='outlined'
                        color='default'
                    > Wishlist</Button>
                </CardActions>
            );
        }
    }

    render() {
        return (
            <div>
                <div className='title-div'>
                    <Typography variant='h6'>
                        Books
                        </Typography>
                    <div>
                        <select className='sort' >
                            <option selected>Sort By Relevance</option>
                            <option>Price:low to high</option>
                            <option>Price:high to low</option>
                            <option>Newest Arrivals</option>
                        </select>
                    </div>
                </div>
                <div className='display-books'>
                    {
                        this.props.books.map((data) => {
                            return (
                                <Card className='note-card' >
                                    <Tooltip style={styles.hover} title={data.description}>
                                        <div className="image-div" >
                                            <img src={data.image} style={styles.imgStyle}></img>
                                        </div>
                                    </Tooltip>

                                    <CardContent id='card-detail' style={styles.cardDetails}>
                                        <Typography variant="h7" component="h4">
                                            {data.title}
                                        </Typography>
                                        <Typography style={styles.fontsize}>
                                            by {data.author}
                                        </Typography>
                                        <Typography component="h4" style={styles.fontSizeRs}>
                                            Rs.{data.price}
                                        </Typography>
                                    </CardContent>
                                    {
                                        this.displayButton(data.bookId)
                                    }
                                </Card>
                            );
                        })
                    }

                </div>
                <div className='pagination-div'>
                    <Pagination count={10} color="primary" className="page" />
                </div>
            </div>
        )

    }

}
const styles = {
    imgStyle: {
        height: 170,
        width: 115,
    },
    hover: {
        heigth: 50,
        wigth: 50,
    },
    cartAdd: {
        borderWidth: 1,
        paddingLeft: 3,
        paddingRight: 4,
        borderColor: 'Blue',
        height: 32,
    },
    cartWish: {
        borderWidth: 1,
        paddingLeft: 3,
        paddingRight: 4,
        borderColor: 'green',
        height: 32,
    },
    cardDetails: {
        height: 45,
        paddingTop: 4,
        paddingLeft: 10,
    },
    fontsize: {
        fontSize: 13,
        color: 'dimgray '
    },
    fontSizeRs: {
        fontSize: 15,
    }
}
export default BookDashboard;