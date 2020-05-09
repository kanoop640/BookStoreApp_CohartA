using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Model.ModelCLasses
{
    public class CartModel
    {
        /// <summary>
        /// property for CartId
        /// </summary>
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int CartId { get; set; }

        /// <summary>
        ///  property for BookId of the book
        /// </summary>
        public int BookId { get; set; }

        /// <summary>
        /// property for count i.e number of books selected.
        /// </summary>
        public int Count { get; set; } 
    }
}
