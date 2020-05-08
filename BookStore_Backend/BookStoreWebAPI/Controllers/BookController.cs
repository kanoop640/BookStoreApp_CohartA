using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Manager.ManagerIMPL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model.ModelCLasses;

namespace BookStoreWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly BookManager bookManager;

        public BookController(BookManager bookManager)
        {
            this.bookManager = bookManager;
        }

        [Route("addbook")]
        [HttpPost]
        public async Task<IActionResult> AddBook(BookModel bookModel)
        {
            var result = await this.bookManager.AddBook(bookModel);
            if (result == 1)
            {
                return this.Ok(bookModel);
            }
                return this.BadRequest();
        }

        [Route("getallbook")]
        [HttpGet]
        public IEnumerable<BookModel> GetAllBook()
        {
            return bookManager.GetAllBook();
        }
    }
}