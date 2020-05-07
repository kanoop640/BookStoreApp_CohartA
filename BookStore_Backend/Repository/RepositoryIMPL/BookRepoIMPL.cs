using Model.ModelCLasses;
using Repository.Context;
using Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.RepositoryIMPL
{
    public class BookRepoIMPL : IBookRepo
    {

        private readonly UserDBContext _context;

        /// <summary>
        /// Initializes a new instance of the <see cref="EmployeeRepository"/> class.
        /// </summary>
        /// <param name="context">context.</param>
        public BookRepoIMPL(UserDBContext context)
        {
            this._context = context;
        }

        public Task<int> AddBook(BookModel entity)
        {


            this._context.Book.Add(entity);
            var result = this._context.SaveChangesAsync();
            return result;
        }

        public IEnumerable<BookModel> GetAllBook()
        {
            return this._context.Book.ToList();
        }

        public BookModel GetBookById(int id)
        {
            return this._context.Book.FirstOrDefault(e => e.BookId == id);
        }
    }
}
