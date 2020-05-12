/// <summary>
/// namespace Irepository
/// </summary>
namespace Repository.IRepository
{
<<<<<<< HEAD
    using Microsoft.AspNetCore.Http;
=======
>>>>>>> 0b8bc40c4ddd07ad60dbaa7a1caa12b1c8043f92
    using Model.ModelCLasses;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    /// <summary>
    /// inteface IBookRepo
    /// </summary>
    public interface IBookRepo
    {
        /// <summary>
        /// Gets all.
        /// </summary>
        /// <returns>all Book List</returns>
        IEnumerable<BookModel> GetAllBook();

        /// <summary>
        /// Declare Add Method.
        /// </summary>
        /// <param name="BookItem">BookItem.</param>
        /// <returns>Task.</returns>
        Task<int> AddBook(BookModel BookItem);

        string Image(IFormFile file, int id);
    }
}
