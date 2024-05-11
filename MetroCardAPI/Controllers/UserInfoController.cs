using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using MetroCardAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace MetroCardAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
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
        public IActionResult GetIndividualUserInfo(int cardNumber)
        {
            var user=_dbContext.users.FirstOrDefaultAsync(user=>user.CardNumber==cardNumber);
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
        public IActionResult UpdateUserInfo(int cardNumber,[FromBody] UserInfo user)
        {
            var userOld=_dbContext.users.FirstOrDefault(user=>user.CardNumber==cardNumber);
            if(userOld==null)
            {
                return NotFound();
            }
            userOld.UserName=user.UserName;
            userOld.Phone=user.Phone;
            userOld.Balance=user.Balance;
            
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUserInfo(int cardNumber)
        {
        var user=_dbContext.users.FirstOrDefault(user=>user.CardNumber==cardNumber);
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