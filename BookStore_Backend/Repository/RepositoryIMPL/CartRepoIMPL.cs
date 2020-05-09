
namespace Repository.RepositoryIMPL
{
    using Model.ModelCLasses;
    using Repository.Context;
    using Repository.IRepository;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

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
        public Task<int> AddCartItem(CartModel CartItem)
        {
            this._context.CartContext.Add(CartItem);
            var result = this._context.SaveChangesAsync();
            return result;
        }

        public CartModel DeleteCartItem(int BookId)
        {
            CartModel cartModel = this._context.CartContext.Find(BookId);
            if (cartModel != null)
            {
                this._context.CartContext.Remove(cartModel);
                this._context.SaveChanges();
            }
            return cartModel;
        }

        public IEnumerable<CartModel> GetAllCartItem()
        {
             return  this._context.CartContext.ToList();
        }

        public Task<int> UpdateCartItem(CartModel BookToUpdate, CartModel BookNewDetails)
        {
            BookToUpdate.Count  = BookNewDetails.Count;
            BookToUpdate.TotalPrice  = BookNewDetails.TotalPrice;
            var result = this._context.SaveChangesAsync();
            return result; 
        }
    }
}
