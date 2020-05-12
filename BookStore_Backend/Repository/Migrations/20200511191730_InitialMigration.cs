using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Repository.Migrations
{
<<<<<<< HEAD:BookStore_Backend/Repository/Migrations/20200511133415_BookStore.cs
    public partial class BookStore : Migration
=======
    public partial class InitialMigration : Migration
>>>>>>> 0b8bc40c4ddd07ad60dbaa7a1caa12b1c8043f92:BookStore_Backend/Repository/Migrations/20200511191730_InitialMigration.cs
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
<<<<<<< HEAD:BookStore_Backend/Repository/Migrations/20200511133415_BookStore.cs
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
=======
                name: "BookContext",
                columns: table => new
                {
>>>>>>> 0b8bc40c4ddd07ad60dbaa7a1caa12b1c8043f92:BookStore_Backend/Repository/Migrations/20200511191730_InitialMigration.cs
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
<<<<<<< HEAD:BookStore_Backend/Repository/Migrations/20200511133415_BookStore.cs
=======
                });

            migrationBuilder.CreateTable(
                name: "LoginContext",
                columns: table => new
                {
                    Email = table.Column<string>(nullable: false),
                    Password = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LoginContext", x => x.Email);
>>>>>>> 0b8bc40c4ddd07ad60dbaa7a1caa12b1c8043f92:BookStore_Backend/Repository/Migrations/20200511191730_InitialMigration.cs
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
<<<<<<< HEAD:BookStore_Backend/Repository/Migrations/20200511133415_BookStore.cs
                name: "AddressContext");

            migrationBuilder.DropTable(
                name: "BookContext");

            migrationBuilder.DropTable(
                name: "CartContext");
=======
                name: "BookContext");

            migrationBuilder.DropTable(
                name: "CartContext");

            migrationBuilder.DropTable(
                name: "LoginContext");
>>>>>>> 0b8bc40c4ddd07ad60dbaa7a1caa12b1c8043f92:BookStore_Backend/Repository/Migrations/20200511191730_InitialMigration.cs
        }
    }
}
