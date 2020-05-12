import React,{ Component } from "react";
import Typography from '@material-ui/core/Typography';
import {Card,Button} from '@material-ui/core';
import capture from '../assets/capture.jpg'
import Dashboard from './dashboard'
class OrderSummary extends Component{
    constructor(props){
        super(props);
    }
    handleClick=()=>{
        this.props.history.push('/dashboard');
    }
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
                            <tr style={styles.tableHead} className=".table-head">
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
                <Button id="buttonId"
                onClick={this.handleClick}>
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
    tableHead:{
        backgroundColor:'#c9cccf',
    },
}
export default OrderSummary;