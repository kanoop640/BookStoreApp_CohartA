using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Repository.Migrations
{
    public partial class BookStore : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AddressContext",
                columns: table => new
                {
                    email = table.Column<string>(nullable: false),
                    password = table.Column<string>(nullable: true),
                    name = table.Column<string>(nullable: true),
                    phoneNumber = table.Column<int>(nullable: false),
                    pinCode = table.Column<int>(nullable: false),
                    locality = table.Column<string>(nullable: true),
                    address = table.Column<string>(nullable: true),
                    city = table.Column<string>(nullable: true),
                    landMark = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AddressContext", x => x.email);
                });

            migrationBuilder.CreateTable(
                name: "BookContext",
                columns: table => new
                {
                    BookId = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Title = table.Column<string>(nullable: true),
                    Author = table.Column<string>(nullable: true),
                    Image = table.Column<string>(nullable: true),
                    Price = table.Column<int>(nullable: false),
                    AvailableBooks = table.Column<int>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Ratings = table.Column<string>(nullable: true),
                    Review = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookContext", x => x.BookId);
                });

            migrationBuilder.CreateTable(
                name: "CartContext",
                columns: table => new
                {
                    CartId = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BookId = table.Column<long>(nullable: false),
                    Count = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CartContext", x => x.CartId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AddressContext");

            migrationBuilder.DropTable(
                name: "BookContext");

            migrationBuilder.DropTable(
                name: "CartContext");
        }
    }
}
