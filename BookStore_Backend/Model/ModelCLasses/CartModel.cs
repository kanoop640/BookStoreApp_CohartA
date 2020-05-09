
namespace Model.ModelCLasses
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    public class CartModel
    {
        /// <summary>
        /// property for CartId
        /// </summary>
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int CartId { get; set; }

        /// <summary>
        /// property for BookId.
        /// </summary>
        public int BookId { get; set; }

        /// <summary>
        /// property for count i.e number of books selected.
        /// </summary>
        public int Count { get; set; } 
    }
}
