using System;
using System.Collections.Generic;
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
    public class GroceryInfoController : ControllerBase
    {   
        private readonly ApplicationDBContext _dbContext;
        public GroceryInfoController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }

        [HttpGet]
        public IActionResult GetGroceryInfo()
        {
            return Ok(_dbContext.materials.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetGroceryInfo(int id)
        {
            var material=_dbContext.materials.FirstOrDefault(material => material.MaterialID == id);
            if (material==null)
            {
                return NotFound();
            }
            return Ok(material);

        }

        [HttpPost]
        public IActionResult PostGroceryInfo([FromBody] GroceryInfo material)
        {
            _dbContext.materials.Add(material);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult PutGroceryInfo(int id, [FromBody] GroceryInfo material)
        {
            var materialOld=_dbContext.materials.FirstOrDefault(material => material.MaterialID == id);
            if (materialOld == null)
            {
                return NotFound();
            }
            materialOld.MaterialName=material.MaterialName;
            materialOld.Count=material.Count;
            materialOld.Price=material.Price;
            materialOld.PurchaseDate=material.PurchaseDate;
            materialOld.ExpiryDate=material.ExpiryDate;
            materialOld.Photo=material.Photo;
            
            _dbContext.SaveChanges();
            return Ok();
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteGroceryInfo(int id)
        {
            var material = _dbContext.materials.FirstOrDefault(material => material.MaterialID == id);
            if (material ==null)
            {
                return NotFound();
            }
           _dbContext.materials.Remove(material);
            _dbContext.SaveChanges();
            return Ok();
        }

        // private readonly ILogger<GroceryInfoController> _logger;

        // public GroceryInfoController(ILogger<GroceryInfoController> logger)
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