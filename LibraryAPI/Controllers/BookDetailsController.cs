using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using LibraryAPI.Data;
using System.Data.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace LibraryAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookDetailsController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public BookDetailsController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }
        [HttpGet]

        public IActionResult GetBookDetails()
        {
            return Ok(_dbContext.books.ToList());
        }
        //Set Details
         [HttpGet("{id}")]

         public IActionResult GetIndividualBookDetails(int bookID)
        {
            var book=_dbContext.books.FirstOrDefaultAsync(book=>book.BookID==bookID);
            if(book==null)
            {
                return NotFound();
            }
            return Ok(book);
        }
        [HttpPost]
        public IActionResult AddBookDetails([FromBody] BookDetails book)
        {
            _dbContext.books.Add(book);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateBookDetails(int bookID,[FromBody] BookDetails book)
        {
            var bookOld=_dbContext.books.FirstOrDefault(book=>book.BookID==bookID);
            if(bookOld==null)
            {
                return NotFound();
            }
            bookOld.BookName=book.BookName;
            bookOld.AuthorName=book.AuthorName;
            bookOld.BookCount=book.BookCount;
            
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
        // private readonly ILogger<BookDetailsController> _logger;

        // public BookDetailsController(ILogger<BookDetailsController> logger)
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