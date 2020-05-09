/// <summary>
/// namespace for RepositoryIMPL
/// </summary>
namespace Repository.RepositoryIMPL
{
    using Model.ModelCLasses;
    using Repository.Context;
    using Repository.IRepository;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    /// <summary>
    /// Implementation class for ICartRepo interface
    /// </summary>
    public class CartRepoIMPL : ICartRepo
    {
        /// <summary>
        /// instance reference for UserDBContext
        /// </summary>
        private readonly UserDBContext _context;

        /// <summary>
        /// Initializes a new instance of the <see cref="EmployeeRepository"/> class.
        /// </summary>
        /// <param name="context">context.</param>
        public CartRepoIMPL(UserDBContext context)
        {
            this._context = context;
        }

        /// <summary>
        /// Add cart item to CartContext
        /// </summary>
        /// <param name="CartItem"></param>
        /// <returns>int</returns>
        public Task<int> AddCartItem(CartModel CartItem)
        {
            this._context.CartContext.Add(CartItem);
            var result = this._context.SaveChangesAsync();
            return result;
        }

        /// <summary>
        /// Delete Cart item from CartContext
        /// </summary>
        /// <param name="BookId"></param>
        /// <returns></returns>
        public CartModel DeleteCartItem(long BookId)
        {
            CartModel cartModel = this._context.CartContext.Find(BookId);
            if (cartModel != null)
            {
                this._context.CartContext.Remove(cartModel);
                this._context.SaveChanges();
            }
            return cartModel;
        }

        /// <summary>
        /// Get All Cart Item from CartContext
        /// </summary>
        /// <returns></returns>
        public IEnumerable<CartModel> GetAllCartItem()
        {
             return  this._context.CartContext.ToList();
        }

        /// <summary>
        /// Update the number of books in cartItem
        /// </summary>
        /// <param name="OldBookDetails"></param>
        /// <param name="NewBookDetails"></param>
        /// <returns></returns>
        public Task<int> UpdateCartItem(CartModel OldBookDetails, CartModel NewBookDetails)
        {
            OldBookDetails.Count  = NewBookDetails.Count;
            if (OldBookDetails.Count <= 0)
                DeleteCartItem( OldBookDetails.BookId );
            var result = this._context.SaveChangesAsync();
            return result; 
        }
    }
}
