using Manager.IManager;
using Model.ModelCLasses;
using Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Manager.ManagerIMPL
{
    public class BookManager : IBookManager
    {
        private readonly IBookRepo _bookRepository;
        public BookManager( IBookRepo _bookRepository)
        {
            this._bookRepository = _bookRepository;
        }
        public Task<int> AddBook(BookModel entity)
        {
            return _bookRepository.AddBook(entity);
        }

        public IEnumerable<BookModel> GetAllBook()
        {
            return _bookRepository.GetAllBook();
        }
    }
}
