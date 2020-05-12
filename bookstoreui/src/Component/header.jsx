
import React, { Component } from 'react'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import RefreshRoundedIcon from '@material-ui/icons/RefreshRounded';
import ViewStreamRoundedIcon from '@material-ui/icons/ViewStreamRounded';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
class Header extends Component {
    render() {
        return (
          <div>
            <AppBar position="static" className="AppBar">
              <Toolbar variant="dense" className="toolbar">
              <div style={styles.bookIcon}>
                                <MenuBookIcon fontSize='medium' />
                            {/* </div>
                            <div className='book-title'> */}
                                <Typography variant='h6'>
                                    Book Store
                            </Typography>
                            </div>
                <div className="search_box">
                    <div className="searchIcon"
                      title="Search"
                    >
                      <SearchIcon />
                    </div>
                    <InputBase className="input_search"
                      type="searchIcon"
                      placeholder="Search..."
                      />
                </div>
                <div style={styles.rightIcons}>
                                <FavoriteBorderOutlinedIcon fontSize='medium' />
                                <ShoppingCartOutlinedIcon fontSize='medium' />
                        </div>
              </Toolbar>
            </AppBar>
           
          </div>
        )
      }
    
    }
    const styles = {
        bookIcon:{
            width:300,
            marginLeft:100,
            display:"flex"
        },
        cartIcon:{
            marginLeft:90,
        },
        rightIcons: {
            width:100,
            display:"flex",
            justifyContent: "space-around"
        }
      }
export default Header