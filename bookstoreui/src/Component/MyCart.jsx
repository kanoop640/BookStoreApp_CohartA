import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
class Mycart extends Component {

    render() {
        return (
            <div>
                <div className='Mycart' >
                    <Button className="button"
                        variant="contained" color="primary">
                        Place Order
                    </Button>
                </div>
                <div className="CostomerDetails">
                    
            </div>

                <div className="Ordersummary">
                    
            </div>
            </div>
        )
    }
}
export default Mycart;