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
    /// implementation class for IBookRepo Interface
    /// </summary>
    public class BookRepoIMPL : IBookRepo
    {
        /// <summary>
        /// instance reference for UserDBContext
        /// </summary>
        private readonly UserDBContext _context;

        /// <summary>
        /// Initializes a new instance of the <see cref="BookRepoIMPL"/> class.
        /// </summary>
        /// <param name="context">context.</param>
        public BookRepoIMPL(UserDBContext context)
        {
            this._context = context;
        }

        /// <summary>
        /// method to Add book into BookContext of DBContext
        /// </summary>
        /// <param name="BookItem"></param>
        /// <returns></returns>
        public Task<int> AddBook(BookModel BookItem)
        {
            this._context.BookContext.Add(BookItem);
            var result = this._context.SaveChangesAsync();
            return result;
        }

        /// <summary>
        /// method to fetch all the book from BookContext
        /// </summary>
        /// <returns></returns>
        public IEnumerable<BookModel> GetAllBook()
        {
            return this._context.BookContext.ToList();
        }
    }
}
