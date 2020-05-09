using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Repository.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                name: "BookContext");

            migrationBuilder.DropTable(
                name: "CartContext");
        }
    }
}
