
import React, { Component } from 'react'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
class Header extends Component {
    render() {
        return (
          <div>
            <AppBar position="static" className="AppBar">
              <Toolbar variant="dense" className="toolbar">
              <div className="temp" style={styles.bookIcon}>
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