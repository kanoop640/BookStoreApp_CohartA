import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

class BookDashboard extends Component {

    constructor(props){
        super(props)
        console.log(props.books)
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
                                        <Typography variant="h10">
                                            {data.author}
                                        </Typography>
                                        <Typography  varient="h10">
                                            {data.price}
                                        </Typography>
                                    </CardContent>
                                    <CardActions className="">
                                        <Button className="MuiButton-outlined"
                                        style={styles.cart}
                                            variant='outlined'
                                            color='default'
                                            onClick={()=>this.handleAddButton}
                                        > Add to cart</Button>

                                        <Button
                                        className="MuiButton-outlined"
                                        style={styles.cart}
                                            variant='outlined'
                                            color='default'
                                        > Wishlist</Button>
                                    </CardActions>
                                </Card>
                            );
                        })
                    }

                </div>
                <div className='pagination-div'>
                    <Pagination count={10} color="primary" className="page"/>
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
    cart:{
    borderWidth:1,
    paddingLeft:3,
    paddingRight:4,
    },
    cardDetails:{
    height: 45,
    paddingTop: 4,
    paddingLeft: 10,
    }
}
export default BookDashboard;