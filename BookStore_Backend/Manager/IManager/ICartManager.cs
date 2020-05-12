using Microsoft.AspNetCore.Mvc;
using Model.ModelCLasses;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Manager.IManager
{
    public interface ICartManager
    {
        /// <summary>
        /// Declare GetAll Methods.
        /// </summary>
        /// <returns>AllEmployee.</returns>
        IEnumerable<CartModel> GetCartContext();

        /// <summary>
        /// Declare Add Method.
        /// </summary>
        /// <param name="entity">entity.</param>
        /// <returns>Task.</returns>
        Task<int> AddCartModel(CartModel BookItem);

        /// <summary>
        /// Declare Update method.
        /// </summary>
        /// <param name="dbEntity">dbEntity.</param>
        /// <param name="entity">entity.</param>
        Task<int> UpdateCartModel(CartModel newCartModel);

<<<<<<< HEAD
        /// <summary>
        /// Declare Delete method.
        /// </summary>
        /// <param name="entity">entity.</param>
        Task<CartModel> DeleteCartModel(long BookId);
=======
>>>>>>> 0b8bc40c4ddd07ad60dbaa7a1caa12b1c8043f92
    }
}
