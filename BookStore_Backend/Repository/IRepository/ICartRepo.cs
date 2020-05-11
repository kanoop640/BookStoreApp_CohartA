/// <summary>
/// IRepository namespace
/// </summary>
namespace Repository.IRepository
{
    using Microsoft.AspNetCore.Mvc;
    using Model.ModelCLasses;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    /// <summary>
    /// inteface ICartRepo
    /// </summary>
    public interface ICartRepo
    {
        /// <summary>
        /// Declare GetAll Methods.
        /// </summary>
        /// <returns>AllBookItemsInCart.</returns>
        IEnumerable<CartModel> GetCartContext();

        /// <summary>
        /// Declare Add Method.
        /// </summary>
        /// <param name="BookItem">BookItem.</param>
        /// <returns>Task.</returns>
        Task<int> AddCartModel(CartModel cartModel);

        /// <summary>
        /// Declare Update method.
        /// </summary>
        /// <param name="BookToUpdate">BookToUpdate.</param>
        /// <param name="BookNewDetails">BookNewDetails.</param>
        Task<int> UpdateCartModel(CartModel OldBookDetails);

        /// <summary>
        /// Declare Delete method.
        /// </summary>
        /// <param name="BookId">BookId.</param>
        Task<CartModel> DeleteCartModel(long BookId);
    }
}
