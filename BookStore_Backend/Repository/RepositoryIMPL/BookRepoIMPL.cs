
namespace Repository.RepositoryIMPL
{
    using Model.ModelCLasses;
    using Repository.Context;
    using Repository.IRepository;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public class BookRepoIMPL : IBookRepo
    {

        private readonly UserDBContext _context;

        /// <summary>
        /// Initializes a new instance of the <see cref="BookRepoIMPL"/> class.
        /// </summary>
        /// <param name="context">context.</param>
        public BookRepoIMPL(UserDBContext context)
        {
            this._context = context;
        }

        public Task<int> AddBook(BookModel BookItem)
        {

            this._context.BookContext.Add(BookItem);
            var result = this._context.SaveChangesAsync();
            return result;
        }

        public IEnumerable<BookModel> GetAllBook()
        {
            return this._context.BookContext.ToList();
        }
    }
}
