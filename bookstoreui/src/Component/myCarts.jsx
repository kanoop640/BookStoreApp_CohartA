import React, { Component } from "react"
import { Card, Button, Typography } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import IconButton from '@material-ui/core/IconButton'
import { addCustomerDetails} from '../Service/service'
import getAllCartItem from '../Service/service'
class MyCarts extends Component {
    constructor(props) {
        super(props)
        console.log(props.cartItems)
        this.state = {
            cart: [],
            flag: false,
            open: false,
            addedCount: 0,
            Name: "",
            PhoneNumber: 0,
            Pincode: 0,
            Locality: "",
            City: "",
            Address: "",
            Landmark: "",
            type: "",
            clicks:0,
        }
    }
    //     componentDidMount(){
    //         getAllCartItem()
    //         .then(respons=>{
    //             if(response)
    //             {
    // this.setState({
    //     cart:respons.data
    // })
    //             }
    //             else{
    //                 console.log("cart failure")
    //             }
    //         }

    //         )
    //     }
    placeOrderHandler = () => {
        let showCustomerDetails = this.state.open;
        this.setState({
            open: !showCustomerDetails
        })
    }

    handleClick = () => {
        this.setState({
            flag: true
        })
    }
    handleCustomerDetails = () => {
        this.setState({
            open: true
        })
    }
    nameHandler = (event) => {
        const Name = event.target.value;
        console.log("name", Name);
        this.setState({
            Name: Name,
        })
    }
    phoneNumberHandler = (event) => {
        const PhoneNumber = event.target.value;
        console.log('phoneNumber', PhoneNumber)
        this.setState({
            PhoneNumber: PhoneNumber
        })
    }

    pincodeHandler = (event) => {
        const Pincode = event.target.value;
        console.log("pincode", Pincode);
        this.setState({
            Pincode: Pincode
        })
    }
    localityHandler = (event) => {
        const Locality = event.target.value;
        console.log('locality', Locality)
        this.setState({
            Locality: Locality
        })
    }

    cityHandler = (event) => {
        const City = event.target.value;
        console.log("city", City);
        this.setState({
            City: City,
        })
    }
    addressHandler = (event) => {
        const Address = event.target.value;
        console.log('address', Address)
        this.setState({
            Address: Address
        })
    }
    landmarkHandler = (event) => {
        const Landmark = event.target.value;
        console.log("landmark", Landmark);
        this.setState({
            Landmark: Landmark,
        })
    }
    typeHandler = (event) => {
        const type = event.target.value;
        console.log('type', type)
        this.setState({
            type: type
        })
    }

    IncrementItem = (data) => {
        if(data.count+1>5)
        return
        this.props.changeCartItems(data,data.count+1)
      }
    decreaseItem = (data) => {
        if(data.count==1)
        return
        this.props.changeCartItems(data,data.count-1)
      }
    render() {
        //const booksInCart = this.props.books.filter(book => this.props.cart.includes(book.bookId))

        return (
            <div>
                <Card className="cartCard">
                    <div>
                        <Typography variant="h6">My Cart ({this.props.cartItems.length})</Typography>
                        {
                            
                            this.props.cartItems.sort((a,b)=> a.bookTitle > b.bookTitle?1:-1).map((data) => {
                                return (

                                    <div>
                                        <table>
                                            <tr className="book-details">
                                                <td className="book-details">
                                                    <img className="imgStyle" src={data.bookImage} />
                                                </td>
                                                <div>
                                                    <td className="book-details">
                                                        <Typography variant="h6" >{data.title}</Typography>
                                                        <Typography>{data.authorName}</Typography>
                                                        <Typography>Rs.{data.bookPrice}</Typography>
                                                        <div>
                                                        </div>

                                                        <IconButton
                                                        onClick={()=>this.decreaseItem(data)}>
                                                            <RemoveCircleOutlineIcon />
                                                        </IconButton>
                                                        <span>{data.count}</span>
                                                        <IconButton
                                                        onClick={()=>this.IncrementItem(data)}
                                                        >
                                                            <AddCircleOutlineIcon />
                                                        </IconButton>

                                                        <Button
                                                            variant='outlined'
                                                            onClick={() => this.props.deleteCartItems(data.cartId)}
                                                        >Remove</Button>
                                                    </td>
                                                </div>

                                            </tr>
                                        </table>
                                    </div>

                                )
                            })
                        }
                        <div className="placeOrder">
                            <Button
                            onClick={this.placeOrderHandler}>
                            Place Order</Button>
                        </div>

                    </div>
                </Card>
                {
                   ! this.state.open ? (
                        <Card className="orderSummry"
                            onClick={this.handleCustomerDetails}
                        >
                            Customer Details
                        </Card>
                    ) : (
                            <Card className="customerDetails">
                                <div className="outer-div">
                                    <span className="customer-details">Customer Details</span>
                                    <div className="div-field-styles">
                                        <input type="text" placeholder="Name" className="field-styles"
                                        onChange={this.nameHandler}
                                        />
                                        <input type="text" placeholder="Phone no." className="field-styles"
                                        onChange={this.phoneNumberHandler} 
                                         />
                                    </div>
                                    <div className="div-field-styles">
                                        <input type="text" placeholder="Pincode" className="field-styles" 
                                        onChange={this.pincodeHandler}
                                        />
                                        <input type="text" placeholder="Locality" className="field-styles" 
                                        onChange={this.localityHandler}/>
                                    </div>
                                    <div className="div-field-styles">
                                        <input type="text" placeholder="Address" className="field-styles-address" 
                                        onChange={this.addressHandler}/>
                                    </div>
                                    <div className="div-field-styles">
                                        <input type="text" placeholder="City/Town" className="field-styles" 
                                        onChange={this.cityHandler}/>
                                        <input type="text" placeholder="Landmark" className="field-styles" 
                                        onChange={this.landmarkHandler}/>
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
                                        <Button id="buttonStyles"
                                        onSubmit={()=>this.props.addCustomer()}
                                        >Continue</Button>
                                    </div>
                                </div>
                            </Card>
                        )
                }
                {
                    !this.state.flag ? (
                        <Card className="orderSummry"
                            onClick={this.handleClick}
                        >
                            Order Summary
                        </Card>
                    ) : (
                            <Card className="orderSummry">
                                Order
                            </Card>
                        )
                }

            </div>
        )
    }
}

export default MyCarts;