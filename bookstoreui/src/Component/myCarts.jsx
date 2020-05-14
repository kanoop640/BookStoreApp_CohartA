import React, { Component } from "react"
import { Card, Button, Typography } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
class MyCarts extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const booksInCart = this.props.books.filter(book => this.props.cart.includes(book.bookId))

        return (
            <div>
                <Card className="cartCard">
                    <div>
                        <Typography variant="h6">My cart ({this.props.cart.length})</Typography>
                        {
                            booksInCart.map((data) => {
                                return (

                                    <div>
                                        <table>
                                            <tr className="book-details">
                                                <td className="book-details">
                                                    <img className="imgStyle" src={data.image} />
                                                </td>
                                                <div>
                                                    <td className="book-details">
                                                        <Typography variant="h6" >{data.title}</Typography>
                                                        <Typography>{data.author}</Typography>
                                                        <Typography>Rs.{data.price}</Typography>
                                                        <div>
                                                        </div>

                                                        <Button>
                                                            <RemoveCircleOutlineIcon />
                                                        </Button>
                                                        <span>1</span>
                                                        <Button>
                                                            <AddCircleOutlineIcon />
                                                        </Button>

                                                        <Button
                                                            variant='outlined'
                                                        >Remove</Button>
                                                    </td>
                                                </div>

                                            </tr>
                                        </table>
                                        <div className="placeOrder">
                                        <Button>Place Order</Button>
                                        </div>
                                    </div>

                                )
                            })
                        }

                    </div>
                </Card>
                <Card className="customerDetails">
                    <div className="outer-div">
                        <span className="customer-details">Customer Details</span>
                        <div className="div-field-styles">
                            <input type="text" placeholder="Name" className="field-styles" />
                            <input type="text" placeholder="Phone no." className="field-styles" />
                        </div>
                        <div className="div-field-styles">
                            <input type="text" placeholder="Pincode" className="field-styles" />
                            <input type="text" placeholder="Locality" className="field-styles" />
                        </div>
                        <div className="div-field-styles">
                            <input type="text" placeholder="Address" className="field-styles-address" />
                        </div>
                        <div className="div-field-styles">
                            <input type="text" placeholder="City/Town" className="field-styles" />
                            <input type="text" placeholder="Landmark" className="field-styles" />
                        </div>
                        <span>Type</span>
                        <div className="type-div">
                            <label>Home</label>
                            <input type="radio" className="radio-styles" />
                            <label>Work</label>
                            <input type="radio" className="radio-styles" />
                            <label>Other</label>
                            <input type="radio" />
                        </div>
                        <div>
                            <Button id="buttonStyles">Continue</Button>
                        </div>
                    </div>
                </Card>
                <Card className="orderSummry">  
                    Order Summary
                </Card>
            </div>
        )
    }
}
    
export default MyCarts;