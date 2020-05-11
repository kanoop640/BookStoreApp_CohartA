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
        public IEnumerable<CartModel> GetCartContext()
        {
            return this._cartRepo.GetCartContext();
        }

        public async Task<int> AddCartModel(CartModel cartModel)
        {
            return await this._cartRepo.AddCartModel(cartModel);
        }

        public async Task<int> UpdateCartModel(CartModel newCartModel)
        {
            return await this._cartRepo.UpdateCartModel(newCartModel);
        }

        public Task<CartModel> DeleteCartModel(long cardId)
        {
          return  this._cartRepo.DeleteCartModel(cardId);
        }

       
    }
}
