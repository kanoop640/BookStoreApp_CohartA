/// <summary>
/// namespace for modelclass
/// </summary>
namespace Model.ModelCLasses
{
<<<<<<< HEAD
=======
    using System;
>>>>>>> 0b8bc40c4ddd07ad60dbaa7a1caa12b1c8043f92
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    /// <summary>
    /// model class for CartModel
    /// </summary>
    public class CartModel
    {
        /// <summary>
        /// property for CartId
        /// </summary>
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public long CartId { get; set; }

        /// <summary>
        /// property for BookId.
        /// </summary>
        public long BookId { get; set; }

        /// <summary>
        /// property for count i.e number of books selected.
        /// </summary>
        public int Count { get; set; }
<<<<<<< HEAD
=======
        
>>>>>>> 0b8bc40c4ddd07ad60dbaa7a1caa12b1c8043f92
    }
}
