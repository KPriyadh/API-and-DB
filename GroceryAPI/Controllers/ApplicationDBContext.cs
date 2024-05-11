using System;
using System.Collections.Generic;
using GroceryAPI;
using GroceryAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace GroceryAPI.Controllers
{
    public class ApplicationDBContext:DbContext
    {
    public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
    {
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
    }
    public DbSet<UserInfo> users{get;set;}
    public DbSet<GroceryInfo> materials {get; set;}
    public DbSet<OrderInfo> orders {get; set;}
    }
}