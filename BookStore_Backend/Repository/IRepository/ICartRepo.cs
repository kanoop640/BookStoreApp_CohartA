using Model.ModelCLasses;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Repository.IRepository
{
    public interface ICartRepo
    {
        /// <summary>
        /// Declare GetAll Methods.
        /// </summary>
        /// <returns>AllBookItemsInCart.</returns>
        IEnumerable<CartModel> GetAllCartItem();

        /// <summary>
        /// Declare Add Method.
        /// </summary>
        /// <param name="BookItem">BookItem.</param>
        /// <returns>Task.</returns>
        Task<int> AddCartItem(CartModel CartItem);

        /// <summary>
        /// Declare Update method.
        /// </summary>
        /// <param name="BookToUpdate">BookToUpdate.</param>
        /// <param name="BookNewDetails">BookNewDetails.</param>
        Task<int> UpdateCartItem(CartModel OldBookDetails, CartModel NewBookDetals);

        /// <summary>
        /// Declare Delete method.
        /// </summary>
        /// <param name="BookId">BookId.</param>
        CartModel DeleteCartItem(int BookId);
    }
}
