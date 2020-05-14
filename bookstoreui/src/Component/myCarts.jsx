import React,{ Component } from "react"
import {Card,Button,Typography} from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
class MyCarts extends Component{
    constructor(props){
        super(props)
    }
    render(){
       const booksInCart = this.props.books.filter(book => this.props.cart.includes(book.bookId))

        return(
            <div>
                <Card style={styles.cartCard}>
                    <div>
        
                    <Typography variant="h6">My cart ({this.props.cart.length})</Typography>
                    {
                        booksInCart.map((data)=>{
                            return(
                                
                                <div>
                            <img style={styles.imgStyle} src={data.image} />
                            <div>
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

                            </div>
                        </div>
                   
                            )
                        })
                    }

                    </div>
                </Card>
                <Card className="cartCard" style={styles.customerDetails}>
                    <div className="outer-div">
                    <span>Customer Details</span>
                    <div className="div-field-styles">
                        <input type="text" placeholder="Name" className="field-styles"/>
                        <input type="text" placeholder="Phone no." className="field-styles"/>
                    </div>
                    <div className="div-field-styles">
                    <input type="text" placeholder="Pincode" className="field-styles"/>
                    <input type="text" placeholder="Locality" className="field-styles"/>
                    </div>
                    <div className="div-field-styles">
                    <input type="text" placeholder="Address" className="field-styles-address"/>
                    </div>
                    <div className="div-field-styles">
                    <input type="text" placeholder="City/Town" className="field-styles"/>
                    <input type="text" placeholder="Landmark" className="field-styles"/>
                    </div>
                    <span>Type</span>
                    <div className="type-div">
                        <label>Home</label>
                    <input type="radio" className="radio-styles"/>
                    <label>Work</label>
                    <input type="radio" className="radio-styles"/>
                    <label>Other</label>
                    <input type="radio"/>
                    </div>
                    <div>
                        <Button style={styles.buttonStyles}>Continue</Button>
                    </div>
                    </div>
                </Card>
                <Card style={styles.orderSummry}>
                   Order Summary
                </Card>
            </div>
        )
    }
}
const styles={
        imgStyle: {
            height: 170,
            width: 115,
        },
    cartCard:{
        justifyContent:'center',
        alignItems:'center'
    },
    customerDetails:{
        heigth:400,
        width:600,
    },
    orderSummry:{
        marginTop: 17,
        width: 600,
        height: 40,
    },
    buttonStyles:{
        backgroundColor:'#0000FF',
        width:110,
    }
}
export default MyCarts;