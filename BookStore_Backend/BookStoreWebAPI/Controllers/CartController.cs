using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
<<<<<<< HEAD
using Manager.IManager;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
=======
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Manager.IManager;
>>>>>>> 0b8bc40c4ddd07ad60dbaa7a1caa12b1c8043f92
using Model.ModelCLasses;

namespace BookStoreWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartManager _cartManager;

        public CartController(ICartManager cartManager)
        {
            this._cartManager = cartManager;
        }

        // GET: api/Cart
        [Route("getcartcontext")]
        [HttpGet]
        public IEnumerable<CartModel> GetCartContext()
        {
            var cartContext = this._cartManager.GetCartContext();
            return cartContext;
        }

<<<<<<< HEAD
        // POST: api/Cart
        [Route("updatecartmodel")]
        [HttpPost]
        public async Task<IActionResult> UpdateCartModel(CartModel cartModelnew)
        {

=======
        [Route("addcartmodel")]
        [HttpPost]
        public async Task<IActionResult> AddCartModel(CartModel cartModel)
        {
            var result = await this._cartManager.AddCartModel(cartModel);
            if (result == 1)
            {
                return this.Ok(cartModel);
            }
            return BadRequest();
        }

        // POST: api/Cart
        [Route("updatecartmodel")]
        [HttpPut]
        public async Task<IActionResult> UpdateCartModel(CartModel cartModelnew)
        {
>>>>>>> 0b8bc40c4ddd07ad60dbaa7a1caa12b1c8043f92
            int result = await this._cartManager.UpdateCartModel(cartModelnew);
            if (result == 0)
                return BadRequest(ModelState);
            else
                return this.Ok(cartModelnew);
        }
<<<<<<< HEAD


        // DELETE: api/Cart/5
        [Route("deletecartmodel")]
        [HttpDelete]
        public async Task<CartModel>  DeleteCartModel(long id)
        {
            var result= await this._cartManager.DeleteCartModel(id);
            return result;
        }


        [Route("addcartmodel")]
        [HttpPost]
        public async Task<IActionResult> AddBook(CartModel bookModel)
        {
            var result = await this._cartManager.AddCartModel(bookModel);
            if (result == 1)
            {
                return this.Ok(bookModel);
            }
            return BadRequest();
        }
    }
}
=======
    }
}




>>>>>>> 0b8bc40c4ddd07ad60dbaa7a1caa12b1c8043f92
