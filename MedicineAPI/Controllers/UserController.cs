using System;
using System.Collections.Generic;

using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using MedicineAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace MedicineAPI.Controllers
{
    [Route("api/[controller]")]
     [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public UserController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }

        [HttpGet]
        public IActionResult GetUser()
        {
            return Ok(_dbContext.users.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetUser(int id)
        {
            var user=_dbContext.users.FirstOrDefault(user => user.UserID == id);
            if (user==null)
            {
                return NotFound();
            }
            return Ok(user);

        }

        [HttpPost]
        public IActionResult PostUser([FromBody] UserInfo user)
        {
            _dbContext.users.Add(user);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult PutUser(int id, [FromBody] UserInfo user)
        {
            var userOld=_dbContext.users.FirstOrDefault(user => user.UserID == id);
            if (userOld == null)
            {
                return NotFound();
            }
            userOld.Email=user.Email;
            userOld.Password=user.Password;
            userOld.ConfirmPassword=user.ConfirmPassword;
            userOld.PhoneNumber=user.PhoneNumber;
            userOld.UserBalance=user.UserBalance;
            _dbContext.SaveChanges();
            return Ok();
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id)
        {
            var user = _dbContext.users.FirstOrDefault(user => user.UserID == id);
            if (user ==null)
            {
                return NotFound();
            }
           _dbContext.users.Remove(user);
            _dbContext.SaveChanges();
            return Ok();
        }
        
        // private readonly ILogger<UserController> _logger;

        // public UserController(ILogger<UserController> logger)
        // {
        //     _logger = logger;
        // }

        // public IActionResult Index()
        // {
        //     return View();
        // }

        // [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        // public IActionResult Error()
        // {
        //     return View("Error!");
        // }
    }
}