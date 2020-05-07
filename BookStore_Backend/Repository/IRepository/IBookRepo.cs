using Model.ModelCLasses;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Repository.IRepository
{
    public interface IBookRepo
    {
        /// <summary>
        /// Gets all.
        /// </summary>
        /// <returns>all Book List</returns>
        IEnumerable<BookModel> GetAllBook();

        /// <summary>
        /// Gets the by identifier.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns>Get Book by id</returns>
        BookModel GetBookById(int id);

        /// <summary>
        /// Declare Add Method.
        /// </summary>
        /// <param name="entity">entity.</param>
        /// <returns>Task.</returns>
        Task<int> AddBook(BookModel entity);
    }
}
