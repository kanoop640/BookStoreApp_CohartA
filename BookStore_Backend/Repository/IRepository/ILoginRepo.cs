using Model.ModelCLasses;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Repository.IRepository
{
    public interface ILoginRepo
    {
        /// <summary>
        ///abstract method to signup
        /// </summary>
        /// <param name="loginModel"></param>
        /// <returns></returns>
        bool SignUp(LogInModel loginModel);

        /// <summary>
        /// abstract method to login
        /// </summary>
        /// <param name="loginModel"></param>
        /// <returns></returns>
        bool LogIn(LogInModel loginModel);
    }
}
