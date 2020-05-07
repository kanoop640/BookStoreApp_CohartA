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
        /// <returns>AllEmployee.</returns>
        IEnumerable<CartModel> GetAllBooksInCart();

        /// <summary>
        /// Declare Add Method.
        /// </summary>
        /// <param name="entity">entity.</param>
        /// <returns>Task.</returns>
        Task<int> AddBookToCart(CartModel BookItem);

        /// <summary>
        /// Declare Update method.
        /// </summary>
        /// <param name="dbEntity">dbEntity.</param>
        /// <param name="entity">entity.</param>
        Task<int> UpdateBookInCart(CartModel BookToUpdate, CartModel BookNewDetails);

        /// <summary>
        /// Declare Delete method.
        /// </summary>
        /// <param name="entity">entity.</param>
        CartModel Delete(int BookId);

    }
}
