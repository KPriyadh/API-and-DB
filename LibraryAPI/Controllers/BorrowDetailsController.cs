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
    public class BorrowDetailsController : ControllerBase
    {

        private readonly ApplicationDBContext _dbContext;
        public BorrowDetailsController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }
        [HttpGet]

        public IActionResult GetBorrowDetails()
        {
            return Ok(_dbContext.borrows.ToList());
        }
        //Set Details
         [HttpGet("{id}")]

         public IActionResult GetIndividualBorrowDetails(int borrowID)
        {
            var borrow=_dbContext.borrows.FirstOrDefaultAsync(borrow=>borrow.BorrowID==borrowID);
            if(borrow==null)
            {
                return NotFound();
            }
            return Ok(borrow);
        }
        [HttpPost]
        public IActionResult AddBorrowDetails([FromBody] BorrowDetails borrow)
        {
            _dbContext.borrows.Add(borrow);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateBorrowDetails(int borrowID,[FromBody] BorrowDetails borrow)
        {
            var borrowOld=_dbContext.borrows.FirstOrDefault(borrow=>borrow.BorrowID==borrowID);
            if(borrowOld==null)
            {
                return NotFound();
            }
            borrowOld.BookID=borrow.BookID;
            borrowOld.UserID=borrow.UserID;
            borrowOld.BorrowedDate=borrow.BorrowedDate;
            borrowOld.BorrowBookCount=borrow.BorrowBookCount;
            borrowOld.Status=borrow.Status;
            borrowOld.FineAmount=borrow.FineAmount;
            
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBorrowDetails(int borrowID)
        {
        var borrow=_dbContext.borrows.FirstOrDefault(borrow=>borrow.BorrowID==borrowID);
            if(borrow==null)
            {
                return NotFound();
            }
            _dbContext.borrows.Remove(borrow);
            _dbContext.SaveChanges();
            return Ok();
        }
        // private readonly ILogger<BorrowDetailsController> _logger;

        // public BorrowDetailsController(ILogger<BorrowDetailsController> logger)
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