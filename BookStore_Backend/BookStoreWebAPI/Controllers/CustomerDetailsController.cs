using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Manager.IManager;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model.ModelCLasses;

namespace BookStoreWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerDetailsController : ControllerBase
    {
        private readonly ICustomerDetailsManager customerDetailsManager;

        public CustomerDetailsController(ICustomerDetailsManager customerDetailsManager)
        {
            this.customerDetailsManager = customerDetailsManager;
        }

        [Route("address")]
        [HttpPost]
        public async Task<IActionResult> AddBook(CustomerDetails customerDetails)
        {
            var result = await this.customerDetailsManager.AddCustomerAddress(customerDetails);
            if (result == 1)
            {
                return this.Ok(customerDetails);
            }
            return BadRequest();
        }
    }
}