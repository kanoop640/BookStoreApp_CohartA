import axios from 'axios';

export async function getBook(){
    const res = await axios.get('https://localhost:44381/api/Book/getallbook')
    return res.data
    // .then(res=>{
    //     const book=res.data;
    //     console.log(book)
    //     return book;
    // })
}

export async function getAllCartItem(){
    try{
        axios.get("https://localhost:44381/api/Cart/getcartcontext")
        .then(response => {
            return response
        })
    }
    catch(error){
        console.log("error while fetching all cart items" + error)
        return Promise.resolve(false)
    }
}

export async function getCustomerdetails(data) {
    try {
        var headers= {
            'Content-Type': 'application/json'
        };
        return await axios.post("https://localhost:44381/api/CustomerDetails/address", data,{headers:headers} )
            .then(response => { 
                return response
            })
    }
    catch (error) {
        console.log("error fetching cart items" + error)
        return Promise.resolve(false)
    }
}

export async function addCartItem(NewCartItem) {
    try {
        var headers= {
            'Content-Type': 'application/json'
        };
        return await axios.post("https://localhost:44381/api/Cart/addcartmodel", NewCartItem,{headers:headers} )
            .then(response => { 
                return response
            })
    }
    catch (error) {
        console.log("error while adding new cart items" + error)
        return Promise.resolve(false)
    }
}

export async function updateCartItem(updatecartdata) {
    try {
        var headers= {
            'Content-Type': 'application/json'
        };
        return await axios.put("https://localhost:44381/api/Cart/updatecartmodel", updatecartdata,{headers:headers} )
            .then(response => { 
                return response
            })
    }
    catch (error) {
        console.log("error while updating cart items" + error)
        return Promise.resolve(false)
    }
}


export async function login(data) {
    try {
        var headers= {
            'Content-Type': 'application/json'
        };
        return await axios.post("https://localhost:44381/api/Login/login", data,{headers:headers} )
            .then(response => { 
                return response
            })
    }
    catch (error) {
        console.log("error while login enter valid email and password" + error)
        return Promise.resolve(false)
    }
}
