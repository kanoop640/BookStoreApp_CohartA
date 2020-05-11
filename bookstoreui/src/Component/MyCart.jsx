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
                    <button class="button">Place Order</button>
                </div>

                <div className="CostomerDetails" >
                    Customer Details

                    <div classNmae="onclick">

                            <div className="details">
                                <div classNmae="hii">
                                <TextField id="outlined-basic" label="Name" variant="outlined" />
                                </div>
                                <div  classNmae="hi">
                                <TextField id="outlined-basic" label="Phoneno" variant="outlined" />
                                </div>
                            </div>



                        <div className="Pincode">
                        <TextField id="outlined-basic" label="Pincode" variant="outlined" />
                        <TextField id="outlined-basic" label="Locality" variant="outlined" />
                        </div>
                        <div>
                        <input  placeholder="Address" className="Pin" type="text">


                        </input>
                       </div>
                        <div className="Pincode">
                        <TextField id="outlined-basic" label="CityTown" variant="outlined" />
                        <TextField id="outlined-basic" label="Landmark" variant="outlined" />
                        </div>
                        <button class="button1">CONTINUE</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Mycart;





// import React from 'react';
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         root: {
//             '& > *': {
//                 margin: theme.spacing(1),
//                 width: '25ch',
//             },
//         },
//     }),
// );

// export default function Mycart() {
//     const classes = useStyles();

//     return (
//         <div>
//             <div className='Mycart' >
//                 <button class="button">Place Order</button>
//             </div>
//             <div className="CostomerDetails" >
//                 Customer Details  
//                 <div className="details">
//                     <form className={classes.root} noValidate autoComplete="off">
//                         <TextField id="outlined-basic" label="Name" variant="outlined" />
//                         <TextField id="outlined-basic" label="Phoneno" variant="outlined" />
//                         <TextField id="outlined-basic" label="Pincode" variant="outlined" />
//                         <TextField id="outlined-basic" label="Locality" variant="outlined" />
//                         <div className="Pincode">
//                             <input placeholder="Address" className="Pin" type="text">
//                             </input>
//                         </div>
//                         <TextField id="outlined-basic" label="CityTown" variant="outlined" />
//                           <TextField id="outlined-basic" label="Landmark" variant="outlined" />
//                         <div>
//                          <button class="button1">CONTINUE</button>
//                      </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }