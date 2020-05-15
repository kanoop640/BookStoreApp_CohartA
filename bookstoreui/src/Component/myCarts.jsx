import React, { Component } from 'react';
import { Typography, Button, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
   // getCartAddedCountRequestMethod, getCartValuesRequestMethod,updateCartItem,
import {getcountofcartitem,deleteCartItemById, getCustomerDetailsByEmailId} from '../Service/service'

class MyCarts extends Component {
    state = {
        cartAddedCount: 0,
        cart: [],
        showCustomerDetails: false,
        showOrderSummary: false,
        email: "",
        name: "",
        phoneNumber: 0,
        pincode: 0,
        locality: "",
        city: "",
        address: "",
        landmark: "",
        type: ""

    }
// componentDidMount(){
// getcountofcartitem()
// .then(response) => {
//                  this.setState({
//                      cartAddedCount: response.data,
//               });
    
// }
// }

    // componentDidMount() {
    //     Promise.all([getCartAddedCountRequestMethod(), getCartValuesRequestMethod()])
    //         .then(([cartAddedCountResult, getCartValues]) => {
    //             this.setState({
    //                 cartAddedCount: cartAddedCountResult.data,
    //                 cart: getCartValues.data
    //             })
    //         })
    // }

    // deleteCartHandler = async (id) => {
    //     const response = deleteCartItemById({ params: { id: id } });
    //     await response.then(res => {
    //         console.log(res.data)
    //         const cartCountRes = getCartAddedCountRequestMethod();
    //         cartCountRes.then(
    //             res => {
    //                 this.setState({
    //                     cartAddedCount: res.data
    //                 })
    //             }
    //         )
    //         const cartValuesRes = getCartValuesRequestMethod();
    //         cartValuesRes.then(
    //             res => {
    //                 this.setState({
    //                     cart: res.data
    //                 })
    //             }
    //         )
    //     })
    // }

    placeOrderClickedHandler = () => {
        let doesShowCustomerDetails = this.state.showCustomerDetails;
        this.setState({
            showCustomerDetails: !doesShowCustomerDetails
        })
    }

    continueClickedHandler = () => {
        let doesShowOrderSummary = this.state.showOrderSummary;
        this.setState({
            showOrderSummary: !doesShowOrderSummary
        })
    }

    nameHandler = (event) => {
        const name = event.target.value;
        console.log("name", name);
        this.setState({
            name: name,
        })
    }
    phoneNumberHandler = (event) => {
        const phoneNumber = event.target.value;
        console.log('phoneNumber', phoneNumber)
        this.setState({
            phoneNumber: phoneNumber
        })
    }

    pincodeHandler = (event) => {
        const pincode = event.target.value;
        console.log("pincode", pincode);
        this.setState({
            pincode: pincode
        })
    }
    localityHandler = (event) => {
        const locality = event.target.value;
        console.log('locality', locality)
        this.setState({
            locality: locality
        })
    }

    cityHandler = (event) => {
        const city = event.target.value;
        console.log("city", city);
        this.setState({
            city: city,
        })
    }
    addressHandler = (event) => {
        const address = event.target.value;
        console.log('address', address)
        this.setState({
            address: address
        })
    }
    landmarkHandler = (event) => {
        const landmark = event.target.value;
        console.log("landmark", landmark);
        this.setState({
            landmark: landmark,
        })
    }
    typeHandler = (event) => {
        const type = event.target.value;
        console.log('type', type)
        this.setState({
            type: type
        })
    }

    // addCustomerDetailsHandler = (event) => {
    //     event.preventDefault();
    //     const email = window.sessionStorage.getItem('email');
    //     console.log(`email is ${email}`);
    //     var data = {
    //         Email: email,
    //         FullName: this.state.name,
    //         ContactNumber: this.state.phoneNumber,
    //         DeliveryAddress: this.state.address,
    //         ZipCode: this.state.pincode,
    //         CityTown: this.state.city,
    //         LandMark: this.state.landmark,
    //         AddressType: this.state.type
    //     }
    //     console.log(data);
    //     const response = AddCustomerDetailsRequestMethod(data);
    //     response.then(res => {
    //         console.log(res.data);
    //     })


    // }

    render() {
        return (
            <div className='my-cart-main-div'>
                <div className='my-cart-sub-div'>
                    <Typography variant="h4">My cart ({this.state.cartAddedCount})</Typography>

                    {
                        this.state.cart.map((ele) => {
                            return (
                                <>
                                    <div className='book-image-details-div'>
                                        <div className='book-image-div'>
                                            <img id='img-cart' src={ele.bookImage} alt='error' />
                                        </div>
                                        <div className='book-details-div'>
                                            <Typography variant="h5" >{ele.bookTitle}</Typography>
                                            <Typography>{ele.authorName}</Typography>
                                            <Typography> {ele.bookPrice}</Typography>
                                            <div className='item-quantity-div'>
                                                <Button>
                                                    <RemoveCircleOutlineIcon />
                                                </Button>
                                                <span id='mycart-counter'>1</span>
                                                <Button>
                                                    <AddCircleOutlineIcon />
                                                </Button>

                                                <Button
                                                    variant='outlined'
                                                    color='secondary'
                                                    onClick={() => { this.deleteCartHandler(ele.cartID) }}
                                                >Remove</Button>

                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                    <div className='place-order-btn-div'>
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={this.placeOrderClickedHandler}>
                            Place order
                    </Button>
                    </div>
                </div>
                <div className='customer-details-div'>
                    <Typography variant="h5">Customer Details</Typography>
                    {
                        this.state.showCustomerDetails ?
                            <form action="" className=" p-5" name="myForm" id="f" onSubmit={this.addCustomerDetailsHandler}>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <input type="text" placeholder='Name' id="name" className="form-control " onChange={this.nameHandler} />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <input type="text" placeholder='Phone number' id="phoneNumber" className="form-control " onChange={this.phoneNumberHandler} />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <input type="text" placeholder='pincode' id="pincode" className="form-control " onChange={this.pincodeHandler} />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <input type="text" placeholder='locality' id="locality" className="form-control " onChange={this.localityHandler} />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <input type="text" placeholder='city/town' id="city" className="form-control " onChange={this.cityHandler} />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <input type="text" placeholder='landmark' id="landmark" className="form-control " onChange={this.landmarkHandler} />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <input type="text" placeholder='address' id="address" className="form-control " onChange={this.addressHandler} />

                                </div>
                                <div className='form-group'>
                                    <label>type</label>
                                </div>
                                <div class="form-group form-check" id='check-box-div'>
                                    <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                        <FormControlLabel value="home" control={<Radio color="primary" />} label="Home" onChange={this.typeHandler} />
                                        <FormControlLabel value="work" control={<Radio color="primary" />} label="Work" onChange={this.typeHandler} />
                                        <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" onChange={this.typeHandler} />
                                    </RadioGroup>
                                </div>
                                <div className='form-group'>
                                    <button type="submit" id="continue" className="btn btn-primary">Continue</button>
                                </div>
                            </form> : null
                    }
                </div>
                <div className='order-summary-div'>
                    <Typography variant="h5">Order summary</Typography>
                    {
                        this.state.showOrderSummary ?
                        this.state.cart.map((ele) => {
                            return (
                                <>
                                    <div className='book-image-details-div'>
                                        <div className='book-image-div'>
                                            <img id='img-cart' src={ele.bookImage} alt='error' />
                                        </div>
                                        <div className='book-details-div'>
                                            <Typography variant="h5" >{ele.bookTitle}</Typography>
                                            <Typography>{ele.authorName}</Typography>
                                            <Typography>₹ {ele.bookPrice}</Typography>
                                        </div>
                                    </div>
                                </>
                            )
                        }) : null
                        
                    }
                    <div className='place-order-btn-div'>
                        <Button
                            variant='contained'
                            color='primary'>
                            checkout
                    </Button>
                    </div>
                </div>
            </div>
        )
    }
}
export default MyCarts;