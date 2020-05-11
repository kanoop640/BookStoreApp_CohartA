using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Manager.IManager;
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