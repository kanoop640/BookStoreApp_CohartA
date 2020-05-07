using Manager.IManager;
using Model.ModelCLasses;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Manager.ManagerIMPL
{
    public class BookManager : IBookManager
    {
        private readonly IBookManager bookManager;
        public BookManager(IBookManager bookManager)
        {
            this.bookManager = bookManager;
        }
        public Task<int> AddBook(BookModel entity)
        {
            return bookManager.AddBook(entity);
        }

        public IEnumerable<BookModel> GetAllBook()
        {
            return bookManager.GetAllBook();
        }
    }
}
