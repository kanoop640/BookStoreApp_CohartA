using Microsoft.EntityFrameworkCore;
using Model.ModelCLasses;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository.Context
{
    public class UserDBContext : DbContext 
    {
        public UserDBContext(DbContextOptions<UserDBContext> options) : base(options)
        {

        }
        public DbSet<BookModel> BookContext
        {
            get; set;
        }
        public DbSet<CartModel> CartContext
<<<<<<< HEAD
        {
            get; set;
        }

        public DbSet<CustomerDetails> AddressContext
=======
>>>>>>> 0b8bc40c4ddd07ad60dbaa7a1caa12b1c8043f92
        {
            get; set;
        }
        public DbSet<LogInModel> LoginContext
        {
            get;set;
        }
    }
}
