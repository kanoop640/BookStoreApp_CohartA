
namespace NUnitBookStoreTestProject.TestCartController
{
    using NUnit.Framework;
    using Repository.IRepository;
    using Moq;
    using Manager.ManagerIMPL;
    using BookStoreWebAPI.Controllers;

    [TestFixture]
    public class CartControllerTest
    {
        [TestCase]
        public void GetCartContextTest()
        {
            var cardRepoMock = new Mock<ICartRepo>();
            var cartMangerMock = new CartManager(cardRepoMock.Object);
            var cartControllerMock = new CartController(cartMangerMock);
            var result = cartControllerMock.GetCartContext();
            Assert.NotNull(result);
        }
    }
}
