using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Model.ModelCLasses
{
    public class BookModel
    {
        /// <summary>
        /// property for value id
        /// </summary>
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int BookId { get; set; }

        /// <summary>
        /// property for name title of the book
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// property for the Authors of the book
        /// </summary>
        public string Author { get; set; }

        /// <summary>
        /// property for the image of the book
        /// </summary>
        public string Image { get; set; }

        /// <summary>
        /// property for the price of the book
        /// </summary>
        public string Price { get; set; }

        /// <summary>
        /// property for availability  of book
        /// </summary>
        public string Availability { get; set; }

        /// <summary>
        /// property for the description of the book
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// properrty for the rating 
        /// </summary>
        public string Ratings { get; set; }

        /// <summary>
        /// property for the rating
        /// </summary>
        public string Review { get; set; }

    }
}
