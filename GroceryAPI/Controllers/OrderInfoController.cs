using System;
using System.Collections.Generic;
using System.Data.Entity;
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
    public class OrderInfoController : Controller
    {
    

        private readonly ApplicationDBContext _dbContext;
        public OrderInfoController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }
        [HttpGet]

        public IActionResult GetOrderInfo()
        {
            return Ok(_dbContext.orders.ToList());
        }

         [HttpGet("{id}")]
        public IActionResult GetIndividualOrderInfo(int orderID)
        {
            var order=_dbContext.orders.FirstOrDefaultAsync(order=>order.OrderID==orderID);
            if(order==null)
            {
                return NotFound();
            }
            return Ok(order);
        }
        [HttpPost]
        public IActionResult AddOrderInfo([FromBody] OrderInfo order)
        {
            _dbContext.orders.Add(order);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateOrderInfo(int orderID,[FromBody] OrderInfo order)
        {
            var orderOld=_dbContext.orders.FirstOrDefault(order=>order.OrderID==orderID);
            if(orderOld==null)
            {
                return NotFound();
            }
            orderOld.UserID=order.UserID;
            orderOld.MaterialID=order.MaterialID;
            orderOld.MaterialName=order.MaterialName;
            orderOld.Quantity=order.Quantity;
            orderOld.OrderPrice=order.OrderPrice;
            orderOld.Status=order.Status;
             
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteOrderInfo(int orderID)
        {
        var order=_dbContext.orders.FirstOrDefault(order=>order.OrderID==orderID);
            if(order==null)
            {
                return NotFound();
            }
            _dbContext.orders.Remove(order);
            _dbContext.SaveChanges();
            return Ok();
        }
        
        // private readonly ILogger<OrderInfoController> _logger;

        // public OrderInfoController(ILogger<OrderInfoController> logger)
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