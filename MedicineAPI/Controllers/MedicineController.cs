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
    
    public class MedicineController : ControllerBase
    {

          private readonly ApplicationDBContext _dbContext;
        public MedicineController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }
        [HttpGet]

        public IActionResult GetMedicine()
        {
            return Ok(_dbContext.medicines.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetIndividualMedicine(int medicineID)
        {
            var medicine=_dbContext.medicines.FirstOrDefaultAsync(medicine=>medicine.MedicineID==medicineID);
            if(medicine==null)
            {
                return NotFound();
            }
            return Ok(medicine);
        }

        [HttpPost]
        public IActionResult AddMedicine([FromBody] Medicine medicine)
        {
            _dbContext.medicines.Add(medicine);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{MedicineID}")]
        public IActionResult UpdateMedicine(int medicineID,[FromBody] Medicine medicine)
        {
            var medicineOld=_dbContext.medicines.FirstOrDefault(medicine=>medicine.MedicineID==medicineID);
            if(medicineOld==null)
            {
                return NotFound();
            }
            
            medicineOld.MedicineName=medicine.MedicineName;
            medicineOld.MedicineCount=medicine.MedicineCount;
             medicineOld.MedicinePrice=medicine.MedicinePrice;
            medicineOld.ExpiryDate=medicine.ExpiryDate;
           
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteMedicine(int medicineID)
        {
        var medicine=_dbContext.medicines.FirstOrDefault(medicine=>medicine.MedicineID==medicineID);
            if(medicine==null)
            {
                return NotFound();
            }
            _dbContext.medicines.Remove(medicine);
            _dbContext.SaveChanges();
            return Ok();
        }
        // private readonly ILogger<MedicineController> _logger;

        // public MedicineController(ILogger<MedicineController> logger)
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