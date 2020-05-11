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
        private readonly ICartManager cartManager;
        public CartManager(ICartManager cartManager)
        {
            this.cartManager = cartManager;
        }

        public Task<int> AddBookToCart(CartModel BookItem)
        {
            return this.cartManager.AddBookToCart(BookItem);
        }

        public CartModel Delete(int BookId)
        {
            return this.cartManager.Delete(BookId);
        }

        public IEnumerable<CartModel> GetAllBooksInCart()
        {
            return this.cartManager.GetAllBooksInCart();
        }

        public Task<int> UpdateBookInCart(CartModel BookToUpdate, CartModel BookNewDetails)
        {
            return this.cartManager.UpdateBookInCart(BookToUpdate, BookNewDetails);
        }

    }
}
