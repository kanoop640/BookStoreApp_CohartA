import axios from 'axios';

//bookcontext
//no-arg parameter
//returns array of book items(bookmodel)
export async function getBook(){
    const res = await axios.get('https://localhost:44381/api/Book/getallbook')
    return res.data
    // .then(res=>{
    //     const book=res.data;
    //     console.log(book)
    //     return book;
    // })
}

//cartcontext
//no-arg paramter
//returns array of cart items(used join in backend)
export async function getAllCartItem(){
       const result = await axios.get("https://localhost:44381/api/Cart/getcartcontext")
       return result.data
}

//parameter-> CartModel obj

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

// parameter -> CartModelwith changed count value and cartid only
export async function updateCartItem(updateCartItem) {
    try {
        var headers= {
            'Content-Type': 'application/json'
        };
        return await axios.put("https://localhost:44381/api/Cart/updatecartmodel", updateCartItem,{headers:headers} )
            .then(response => { 
                return response
            })
    }
    catch (error) {
        console.log("error while updating cart items" + error)
        return Promise.resolve(false)
    }
}

//parameter CartId string type
export async function deleteCartItemById(cartid) {
        const result=await axios.delete("https://localhost:44381/api/Cart/deletecartmodel?id="+cartid)
            return result.data
        }


export async function getcountofcartitem(){
    try{
        axios.get("https://localhost:44381/api/Cart/countofbook")
        .then(response => {
            return response
        })
    }
    catch(error){
        console.log("error while fetching all Employee Details" + error)
        return Promise.resolve(false)
    }
 }

//end of cartcontext

//customeraddressdetails
//parameter -> string emailid
//return one customerdetailsmodel object
export async function getCustomerDetailsByEmailId(EmailId) {
    try {
        var headers= {
            'Content-Type': 'application/json'
        };
        return await axios.get("https://localhost:44381/api/CustomerDetails/address?EmailId=${EmailId}")
            .then(response => { 
                return response
            })
    }
    catch (error) {
        console.log("error fetching a customer's address details by email id" + error)
        return Promise.resolve(false)
    }
}


//parameter -> one new CustomerModel obj
export async function addCustomerDetails(NewCustomerItem, handleSuccess) {
    // try {
    //     var headers= {
    //         'Content-Type': 'application/json'
    //     };
    //     return await axios.post("https://localhost:44381/api/CustomerDetails/addaddress", NewCustomerItem,{headers:headers} )
    //         .then(response => { 
    //             return response
    //         })
    // }
    // catch (error) {
    //     console.log("error while adding new customer's address details " + error)
    //     return Promise.resolve(false)
    // }
    console.log(NewCustomerItem)
    axios.post("https://localhost:44381/api/CustomerDetails/addaddress", {
        Name: NewCustomerItem.Name,
        PhoneNumber: NewCustomerItem.PhoneNumber,
        Pincode: NewCustomerItem.Pincode,
        Locality: NewCustomerItem.Locality,
        Address: NewCustomerItem.Address,
        Landmark:NewCustomerItem.Landmark,
})
.then(res=>{
    console.log(res);
    console.log(res.data);
    handleSuccess('Successful');
})
.catch(error => {
    console.log(error);
    handleSuccess('Something went wrong :( Plz try again.');
});
}

//end of customeraddressdetails


//logincontext
//parameter -> login object with id and pass
export async function login(loginobject) {
    try {
        var headers= {
            'Content-Type': 'application/json'
        };
        return await axios.post("https://localhost:44381/api/Login/login", loginobject,{headers:headers} )
            .then(response => { 
                return response
            })
    }
    catch (error) {
        console.log("error while login enter valid email and password" + error)
        return Promise.resolve(false)
    }
}
