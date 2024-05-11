using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using GroceryAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace GroceryAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserInfoController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public UserInfoController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }

        [HttpGet]
        public IActionResult GetUserInfo()
        {
            return Ok(_dbContext.users.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetUserInfo(int id)
        {
            var user=_dbContext.users.FirstOrDefault(user => user.UserID == id);
            if (user==null)
            {
                return NotFound();
            }
            return Ok(user);

        }

        [HttpPost]
        public IActionResult PostUserInfo([FromBody] UserInfo user)
        {
            _dbContext.users.Add(user);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult PutUserInfo(int id, [FromBody] UserInfo user)
        {
            var userOld=_dbContext.users.FirstOrDefault(user => user.UserID == id);
            if (userOld == null)
            {
                return NotFound();
            }
            userOld.UserName=user.UserName;
            userOld.Email=user.Email;
            userOld.Password=user.Password;
            userOld.ConfirmPassword=user.ConfirmPassword;
            userOld.PhoneNumber=user.PhoneNumber;
            userOld.Balance=user.Balance;
            userOld.Photo=user.Photo;
            _dbContext.SaveChanges();
            return Ok();
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteUserInfo(int id)
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
        
        
    
        // private readonly ILogger<UserInfoController> _logger;

        // public UserInfoController(ILogger<UserInfoController> logger)
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
