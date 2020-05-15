import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import HomeIcon from '@material-ui/icons/Home';
class Mycart extends Component {

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

export default Mycart;





