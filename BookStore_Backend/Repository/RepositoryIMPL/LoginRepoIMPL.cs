using Model.ModelCLasses;
using Repository.Context;
using Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Repository.RepositoryIMPL
{
    /// <summary>
    /// LoginRepo class extends ILoginRepo
    /// </summary>
    public class LoginRepoIMPL : ILoginRepo
    {
        private readonly UserDBContext _context;

        /// <summary>
        /// COntructor
        /// </summary>
        /// <param name="context"></param>
        public LoginRepoIMPL(UserDBContext context)
        {
            this._context = context;
        }

        /// <summary>
        /// Login method implementation
        /// </summary>
        /// <param name="loginModel"></param>
        /// <returns></returns>
        public bool LogIn(LogInModel loginModel)
        {
            LogInModel _loginModel = this._context.LoginContext.Find(loginModel.Email);
            if(_loginModel != null)
                if (_loginModel.Email == loginModel.Email && _loginModel.Password==loginModel.Password)
                    return true ;
            return false;
        }

        /// <summary>
        /// SignUp Method Implementation
        /// </summary>
        /// <param name="loginModel"></param>
        /// <returns></returns>
        public bool SignUp(LogInModel loginModel)
        {
            this._context.LoginContext.Add(loginModel);
            var result = this._context.SaveChanges();
            if(result != 0)
                return true;
            return false;
        }
    }
}
