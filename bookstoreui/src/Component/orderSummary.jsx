import React,{ Component } from "react";
import Typography from '@material-ui/core/Typography';
import {Card,Button} from '@material-ui/core';
import capture from '../assets/capture.jpg'
class OrderSummary extends Component{
render(){
    return(
        <div>
            <div className="success-message-card">
                <div className="success-image">
                    <img src={capture}/>
                </div>
                <div className="success-message">
                    <Typography>
                        <p>hurray!!! your order is confirmed</p>
                        <span>the order id is #3455 save the order id for</span>
                        <p>further communication....</p>
                    </Typography>
                </div>
                <div>
                    <table className="summary-table">
                        <thead>
                            <tr>
                              <th>Email us</th>
                              <th>Contact us</th>
                              <th>Address</th>  
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>anjali@gmail.com</td>
                                <td>49234248472</td>
                                <td>hurray!!! your order is confirmed the order id is #3455 save the order id for
                        further communication...</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="continue-button">
                <Button id="buttonId">
                Continue Shopping</Button>
                </div>
            </div>
        </div>
    )
}
}
const styles={
    card:{
        height:800,
        width:620
    },
    button:{
        
    }
}
export default OrderSummary;