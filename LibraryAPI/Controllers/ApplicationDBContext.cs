using System;
using System.Collections.Generic;
using LibraryAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace LibraryAPI.Controllers
{
    
    public class ApplicationDBContext: DbContext
    {
    public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
    {
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
    }
    public DbSet<UserInfo> users{get;set;}
    public DbSet<BookDetails> books {get; set;}
    public DbSet<BorrowDetails> borrows {get; set;}

        // private readonly ILogger<ApplicationDBContext> _logger;

        // public ApplicationDBContext(ILogger<ApplicationDBContext> logger)
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