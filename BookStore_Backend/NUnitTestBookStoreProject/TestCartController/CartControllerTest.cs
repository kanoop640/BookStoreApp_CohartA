
namespace NUnitBookStoreTestProject.TestCartController
{
    using NUnit.Framework;
    using Repository.IRepository;
    using Moq;
    using Manager.ManagerIMPL;
    using BookStoreWebAPI.Controllers;
    using Model.ModelCLasses;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;

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

        [TestCase]
        public void AddCartModelTest()
        {
            var cardRepoMock = new Mock<ICartRepo>();
            var cartMangerMock = new CartManager(cardRepoMock.Object);
            var cartControllerMock = new CartController(cartMangerMock);

            CartModel cartModel = new CartModel()
            {
                CartId = 6,
                BookId = 6,
                Count = 6
            };

            var result = cartControllerMock.AddCartModel(cartModel);
            /* var a = result as ObjectResult;
             Assert.AreEqual(cartModel, a.Value);*/
            Assert.NotNull(result);
        }
    }
}
