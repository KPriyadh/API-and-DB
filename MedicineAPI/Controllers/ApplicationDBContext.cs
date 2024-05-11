using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using MedicineAPI;
using MedicineAPI.Data;

namespace MedicineAPI.Controllers
{
   
    public class ApplicationDBContext:DbContext
    {
    public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
    {
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
    }
    public DbSet<UserInfo> users{get;set;}
    public DbSet<Medicine> medicines {get; set;}
    public DbSet<Order> orders {get; set;}

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