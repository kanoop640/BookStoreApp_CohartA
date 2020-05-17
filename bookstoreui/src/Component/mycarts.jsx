import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import HomeIcon from '@material-ui/icons/Home';
class mycarts extends Component {
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

        return (
            <div>
                <div className='Mycart' >
                    <div className="s">
                        My Cart (2)
                </div>

                    <div className="incrementDecrement">
                        {/* <Button onClick="add()" className="add">+</Button> */}
                        <Button variant="contained" color="primary" href="#contained-buttons" className="add">
                               +
                        </Button>
                        <input type="text" id="somya" className="b" />
                        {/* <Button onClick="sub()" className="add">-</Button> */}
                        <Button variant="contained" color="primary" href="#contained-buttons" className="add">
                               -
                        </Button>
                        {/* <button className="d">Remove</button> */}
                        <Button color="primary">Remove</Button>
                    </div>

                    <Button class="button">Place Order</Button>

                </div>

                <div className="CostomerDetails" >
                    <div className="yss">
                        Customer Details
                </div>
                    <div className="onclick">

                        <div className="details">
                            <div>
                                <TextField id="outlined-basic" label="Name" variant="outlined" />
                            </div>
                            <div className="space">
                                <TextField id="outlined-basic" label="Phoneno." variant="outlined" />
                            </div>
                        </div>

                        <div className="Pincode">
                            <div  >
                                <TextField id="outlined-basic" label="Pincode" variant="outlined" />
                            </div>
                            <div className="space" >
                                <TextField id="outlined-basic" label="Locality" variant="outlined" />
                            </div>
                        </div>


                        <div className="Pincode">
                            <TextField id="outlined-basic" label="Address" variant="outlined" className="fullsize" />
                        </div>

                        <div className="Pincode">
                            <div>
                                <TextField id="outlined-basic" label="CityTown" variant="outlined" />
                            </div>
                            <div className="space">
                                <TextField id="outlined-basic" label="Landmark" variant="outlined" />
                            </div>
                        </div>
                        <div className="type">
                            Type
                   </div>
                        <div className="sss">
                            <div>
                                <Button onClick="sub()" className="e"></Button>
                                   Home
                            </div>
                            <div>
                                <Button onClick="sub()" className="e"></Button>
                                   Work
                            </div>
                            <div>
                                <Button onClick="sub()" className="e"></Button>
                                 Other
                            </div>
                        </div>
                        <Button class="button1">CONTINUE</Button>
                    </div>
                </div>

            </div>
        )
    }
}

export default mycarts;





