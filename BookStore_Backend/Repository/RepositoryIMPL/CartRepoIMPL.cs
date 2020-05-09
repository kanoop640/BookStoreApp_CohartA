using Model.ModelCLasses;
using Repository.Context;
using Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.RepositoryIMPL
{
    public class CartRepoIMPL : ICartRepo
    {
        private readonly UserDBContext _context;

        /// <summary>
        /// Initializes a new instance of the <see cref="EmployeeRepository"/> class.
        /// </summary>
        /// <param name="context">context.</param>
        public CartRepoIMPL(UserDBContext context)
        {
            this._context = context;
        }
        public Task<int> AddBookToCart(CartModel BookItem)
        {
            this._context.Cart.Add(BookItem);
            var result = this._context.SaveChangesAsync();
            return result;
        }

        public CartModel Delete(int BookId)
        {
            CartModel cartModel = this._context.Cart.Find(BookId);
            if (cartModel != null)
            {
                this._context.Cart.Remove(cartModel);
                this._context.SaveChanges();
            }
            return cartModel;
        }

        public IEnumerable<CartModel> GetAllCartItemFromCartContext()
        {
            return this._context.CartContext.ToList();
        }

        public Task<int> UpdateBookInCart(CartModel BookToUpdate, CartModel BookNewDetails)
        {
            BookToUpdate.Title = BookNewDetails.Title;
            BookToUpdate.Authors  = BookNewDetails.Authors;
            BookToUpdate.Count  = BookNewDetails.Count;
            BookToUpdate.Price  = BookNewDetails.Price;
            BookToUpdate.TotalPrice  = BookNewDetails.TotalPrice;
            BookToUpdate.Image  = BookNewDetails.Image;
            var result = this._context.SaveChangesAsync();
            return result; 
        }
    }
}
