import React,{Component} from 'react';
import Header from './Header'
import Footer from './Footer'
import Mycart from './MyCart';

class Dashboard extends Component{

    render(){
        return(
            <div styles={{flexDirection:"column", justifyContent:"flex-start", alignItems:"end", flex:1 }}>
                <Header/>
                <Mycart/>
            <Footer styles={{position:"fixed"}}/>
           
            </div>
        )

    }
}
export default Dashboard;