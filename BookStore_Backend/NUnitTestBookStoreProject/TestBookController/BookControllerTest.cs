


namespace NUnitBookStoreTestProject.TestBookController
{
    using NUnit.Framework;
    using Repository.IRepository;
    using Moq;
    using Manager.ManagerIMPL;
    using BookStoreWebAPI.Controllers;

    [TestFixture]
    public class BookControllerTest 
    {
        [TestCase]
        public void GetAllBookTest()
        {
            var bookrepomock = new Mock<IBookRepo>();
            var bookmangermock = new BookManager(bookrepomock.Object);
            var BookControllermock = new BookController(bookmangermock);
            var result = BookControllermock.GetAllBook();
            Assert.NotNull(result);
        }
    }
}