
import React, { Component } from 'react'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import{getcountofcartitem} from '../Service/service'
class Header extends Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <div>
        <AppBar position="static" className="MuiAppBar-colorBrown"id="headerColor">
          <Toolbar variant="dense" className="toolbar">
            <div className="temp" id="book-icon">
              <MenuBookIcon fontSize='medium' />
              <Typography variant='h6'>
                Book Store
                            </Typography>
            </div>
            <div className="search_box">
              <div className="searchIcon"
                title="Search"
                onClick={this.searchHandel}
              >
                <SearchIcon />
              </div>
              <InputBase className="input_search"
                type="searchIcon"
                placeholder="Search..."
                onChange={this.props.search}
              />
            </div>
            <div className="rightIcons">
              <FavoriteBorderOutlinedIcon fontSize='medium' />
              </div>
              <div className="cart-icon-styles">
              <ShoppingCartOutlinedIcon fontSize='medium' 
              onClick={this.props.cartIconClickedHandler}
              //onClick={() => this.props.movedToCartFunc(true)}
              />
              </div>
            <div className="cart-style-header">
              {
          this.props.cart.length
       }
       </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }

}
export default Header