using Manager.IManager;
using Microsoft.AspNetCore.Mvc;
using Model.ModelCLasses;
using Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Manager.ManagerIMPL
{
   public class CartManager : ICartManager
    {
        private readonly ICartRepo _cartRepo;
        public CartManager(ICartRepo cartRepo)
        {
            this._cartRepo = cartRepo;
        }

<<<<<<< HEAD
        public Task<int> AddCartModel(CartModel cartModel)
        {
            return this._cartRepo.AddCartModel(cartModel);
        }

        public Task<CartModel> DeleteCartModel(long BookId)
        {
            var result = this._cartRepo.DeleteCartModel(BookId);
            return result;
        }

        public IEnumerable<CartModel> GetCartContext()
        {
            return this._cartRepo.GetCartContext();
        }

        public async Task<int> UpdateCartModel(CartModel newCartModel)
        {
            return await this._cartRepo.UpdateCartModel(newCartModel);
        }

       
=======
        public IEnumerable<CartModel> GetCartContext()
        {
            return this._cartRepo.GetCartContext();
        }

        public async Task<int> AddCartModel(CartModel cartModel)
        {
            return await this._cartRepo.AddCartModel(cartModel);
        }

        /// <summary>
        /// method to update Cart Model
        /// </summary>
        /// <param name="newCartModel"></param>
        /// <returns></returns>
        public async Task<int> UpdateCartModel(CartModel newCartModel)
        {
            return await this._cartRepo.UpdateCartModel(newCartModel);
        }

>>>>>>> 0b8bc40c4ddd07ad60dbaa7a1caa12b1c8043f92
    }
}
