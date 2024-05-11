using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using LibraryAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace LibraryAPI.Controllers
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
        //Set Details
         [HttpGet("{id}")]

         public IActionResult GetIndividualUserInfo(int userID)
        {
            var user=_dbContext.users.FirstOrDefaultAsync(user=>user.UserID==userID);
            if(user==null)
            {
                return NotFound();
            }
            return Ok(user);
        }
        [HttpPost]
        public IActionResult AddUserInfo([FromBody] UserInfo user)
        {
            _dbContext.users.Add(user);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateUserInfo(int userID,[FromBody] UserInfo user)
        {
            var userOld=_dbContext.users.FirstOrDefault(user=>user.UserID==userID);
            if(userOld==null)
            {
                return NotFound();
            }
            userOld.UserName=user.UserName;
            userOld.Gender=user.Gender;
            userOld.Department=user.Department;
            userOld.Mobile=user.Mobile;
            userOld.Mail=user.Mail;
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUserInfo(int userID)
        {
        var user=_dbContext.users.FirstOrDefault(user=>user.UserID==userID);
            if(user==null)
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