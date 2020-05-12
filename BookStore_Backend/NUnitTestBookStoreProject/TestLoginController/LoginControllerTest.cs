using System;
using System.Collections.Generic;
using System.Text;
using NUnit;
using Moq;
using Repository.IRepository;
using Manager.ManagerIMPL;
using BookStoreWebAPI.Controllers;
using NUnit.Framework;
using Model.ModelCLasses;

namespace NUnitBookStoreTestProject.TestLoginController
{
    [TestFixture]
    public class LoginControllerTest
    {
        [TestCase]
        public void LoginTest()
        {
            var loginRepoMock = new Mock<ILoginRepo>();
            var loginMangerMock = new LoginManager(loginRepoMock.Object);
            var cartControllerMock = new LoginController(loginMangerMock);

            LogInModel loginModel = new LogInModel()
            {
                Email = "st.sumit01@gmail.com",
                Password = "123456789"
            };

            var result = cartControllerMock.LogIn(loginModel);
            Assert.NotNull(result);
        }

        [TestCase]
        public void SignUpTest()
        {
            var loginRepoMock = new Mock<ILoginRepo>();
            var loginMangerMock = new LoginManager(loginRepoMock.Object);
            var cartControllerMock = new LoginController(loginMangerMock);

            LogInModel loginModel = new LogInModel()
            {
                Email = "st.sumit01@gmail.com",
                Password = "123456789"
            };

            var result = cartControllerMock.SignUp(loginModel);
            Assert.NotNull(result);
        }

    }
}
