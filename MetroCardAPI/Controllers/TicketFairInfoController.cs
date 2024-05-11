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
    public class TicketFairInfoController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;

        public TicketFairInfoController(ApplicationDBContext applicationDBContext){
            _dbContext = applicationDBContext;
        }

        [HttpGet]
        public IActionResult GetTicketFairInfo()
        {
            return Ok(_dbContext.tickets.ToList());
        }


        [HttpGet("{id}")]

        public IActionResult GetIndivicualTicketFairInfo(int ticketID)
        {
            var ticket = _dbContext.tickets.FirstOrDefaultAsync(ticket => ticket.TicketID == ticketID);
            if(ticket==null)
            {
                return NotFound();
            }
            return Ok(ticket);
        }
        [HttpPost]
        public IActionResult AddTicketFairinfo([FromBody] TicketFairInfo ticket)
        {
            _dbContext.tickets.Add(ticket);
            _dbContext.SaveChanges();
            return Ok();
        }
        [HttpPut("{id}")]
        public IActionResult UpdateTicketFairinfo(int ticketID,[FromBody] TicketFairInfo ticket)
        {
            var ticketOld=_dbContext.tickets.FirstOrDefault(ticket=>ticket.TicketID==ticketID);
            if(ticketOld==null)
            {
                return NotFound();
            }
            ticketOld.FromLocation = ticket.FromLocation;
            ticketOld.ToLocation=ticket.ToLocation;
            ticketOld.Fair=ticket.Fair;
            
            _dbContext.SaveChanges();
            return Ok();
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteTicketFairInfo(int ticketID)
        {
        var ticket=_dbContext.tickets.FirstOrDefault(ticket=>ticket.TicketID==ticketID);
            if(ticket==null)
            {
                return NotFound();
            }
            _dbContext.tickets.Remove(ticket);
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}
        // public TicketFairInfoController(ILogger<TicketFairInfoController> logger)
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
    
