/// <summary>
/// namespace for RepositoryIMPL
/// </summary>
namespace Repository.RepositoryIMPL
{
    using Microsoft.AspNetCore.Mvc;
    using Model.ModelCLasses;
    using Repository.Context;
    using Repository.IRepository;
    using System;
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
        public  Task<int> AddCartModel(CartModel cartModel)
        {
            this._context.CartContext.Add(cartModel);
            var result =  this._context.SaveChangesAsync();
            return result;
        }

        public Task<int> DeleteCartModel(long BookId)
        {
            CartModel cartModel = this._context.CartContext.Find(BookId);
            if (cartModel != null)
            {
                _context.CartContext.Remove(cartModel);
               var result = this._context.SaveChanges();
                return Task.FromResult(result);
            }
            return Task.FromResult(0);
        }

        /*/// <summary>
        /// Delete Cart item from CartContext
        /// </summary>
        /// <param name="BookId"></param>
        /// <returns></returns>
        public async Task<int> DeleteCartModel(long BookId)
        {
            int result=0;
            var cartModel = await _context.CartContext.FindAsync(BookId);
            if (cartModel != null)
            {
                _context.CartContext.Remove(cartModel);
                result = await _context.SaveChangesAsync();
            }
            return await Task.FromResult(result);

            *//*CartModel cartModel = await this._context.CartContext.FindAsync(BookId);
            if (cartModel != null)
            {
                this._context.CartContext.Remove(cartModel);
                await this._context.SaveChangesAsync();
            }
            return *//*
        }*/

        /// <summary>
        /// Get All Cart Item from CartContext
        /// </summary>
        /// <returns></returns>
        public IEnumerable<CartModel> GetCartContext()
        {
             return  this._context.CartContext.ToList();
        }

        /// <summary>
        /// Update the number of books in cartItem
        /// </summary>
        /// <param name="OldBookDetails"></param>
        /// <param name="NewBookDetails"></param>
        /// <returns></returns>
        public async Task<int> UpdateCartModel(CartModel newCartModel)
        {
            try
            {
                var oldCartModel = await _context.CartContext.FindAsync(newCartModel.CartId);
                oldCartModel.Count = newCartModel.Count;
             /*   if (OldBookDetails.Count <= 0)
                    DeleteCartModel(OldBookDetails.BookId);*/
                return await this._context.SaveChangesAsync();
            }
            catch(Exception)
            {
                return await Task.FromResult(0); 
            }
        }

        Task<IActionResult> ICartRepo.DeleteCartModel(long BookId)
        {
            throw new NotImplementedException();
        }
    }
}
