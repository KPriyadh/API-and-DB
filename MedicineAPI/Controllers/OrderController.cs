using System;
using System.Collections.Generic;
using System.Data.Entity;
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
    public class OrderController : ControllerBase
    {

          private readonly ApplicationDBContext _dbContext;
        public OrderController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }
        [HttpGet]

        public IActionResult GetOrder()
        {
            return Ok(_dbContext.orders.ToList());
        }

         [HttpGet("{id}")]
        public IActionResult GetIndividualOrder(int orderID)
        {
            var order=_dbContext.orders.FirstOrDefaultAsync(order=>order.OrderID==orderID);
            if(order==null)
            {
                return NotFound();
            }
            return Ok(order);
        }
        [HttpPost]
        public IActionResult AddOrder([FromBody] Order order)
        {
            _dbContext.orders.Add(order);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateOrder(int orderID,[FromBody] Order order)
        {
            var orderOld=_dbContext.orders.FirstOrDefault(order=>order.OrderID==orderID);
            if(orderOld==null)
            {
                return NotFound();
            }
            orderOld.MedicineID=order.MedicineID;
            orderOld.UserID=order.UserID;
            orderOld.MedicineName=order.MedicineName;
            orderOld.MedicineCount=order.MedicineCount;
             orderOld.OrderStatus=order.OrderStatus;
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteOrder(int orderID)
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
        // private readonly ILogger<OrderController> _logger;

        // public OrderController(ILogger<OrderController> logger)
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