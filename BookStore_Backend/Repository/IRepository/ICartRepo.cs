/// <summary>
/// IRepository namespace
/// </summary>
namespace Repository.IRepository
{
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
        CartModel DeleteCartItem(long BookId);
    }
}
