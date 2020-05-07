﻿using Model.ModelCLasses;
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
        /// Declare Add Method.
        /// </summary>
        /// <param name="BookItem">BookItem.</param>
        /// <returns>Task.</returns>
        Task<int> AddBook(BookModel BookItem);
    }
}
