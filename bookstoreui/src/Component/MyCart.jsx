import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
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
                <button onClick="add()" className="c">+</button>
                <input type="text" id="somya" className="b"/>
                <button onClick="sub()" className="c">-</button>
                {/* <button className="d">Remove</button> */}
                <Button color="primary">Remove</Button>
                </div>

                <button class="button">Place Order</button>
               
            </div>

            <div className="CostomerDetails" >
                <div className="yss">
                Customer Details
                </div>
                <div className="onclick">

                    <div className="details">
                        <div >
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
                        <TextField id="outlined-basic" label="Address" variant="outlined"  className="fullsize"/>
                    </div>

                    <div  className="Pincode">
                    <div>
                        <TextField id="outlined-basic" label="CityTown" variant="outlined" />
                    </div>
                    <div   className="space">
                        <TextField id="outlined-basic" label="Landmark" variant="outlined" />
                    </div>
                    </div>
                   <div className="type">
                    Type.....
                   </div>
                   <div className="sss">
                   <div>
                   <button onClick="sub()" className="e"></button>
                   Home
                   </div>
                   <div>
                   <button onClick="sub()" className="e"></button>
                   Work
                   </div>
                   <div>
                   <button onClick="sub()" className="e"></button>
                   Other
                   </div>
                   </div>
                    <button class="button1">CONTINUE</button>
                </div>
            </div>

        </div>
        )
    }
}

export default Mycart;





