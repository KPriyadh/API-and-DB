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
    public class TravelInfoController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public TravelInfoController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }
        [HttpGet]
        public IActionResult GetTravelInfo()
        {
            return Ok(_dbContext.travels.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetIndividualTravelInfo(int travelID)
        {
            var travel=_dbContext.travels.FirstOrDefaultAsync(travel=>travel.TravelID==travelID);
            if(travel==null)
            {
                return NotFound();
            }
            return Ok(travel);
        }
        [HttpPost]
        public IActionResult AddTravelInfo([FromBody] TravelInfo travel)
        {
            _dbContext.travels.Add(travel);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateTravelInfo(int travelID,[FromBody] TravelInfo travel)
        {
            var travelOld=_dbContext.travels.FirstOrDefault(travel=>travel.TravelID==travelID);
            if(travelOld==null)
            {
                return NotFound();
            }
            travelOld.CardNumber=travel.CardNumber;
            travelOld.FromLocation=travel.FromLocation;
            travelOld.ToLocation=travel.ToLocation;
            travelOld.TravelCost=travel.TravelCost;
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTravelInfo(int travelID)
        {
        var travel=_dbContext.travels.FirstOrDefault(travel=>travel.TravelID==travelID);
            if(travel==null)
            {
                return NotFound();
            }
            _dbContext.travels.Remove(travel);
            _dbContext.SaveChanges();
            return Ok();
        }
        // private readonly ILogger<TravelInfoController> _logger;

        // public TravelInfoController(ILogger<TravelInfoController> logger)
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