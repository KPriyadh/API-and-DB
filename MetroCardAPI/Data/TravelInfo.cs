using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MetroCardAPI.Data
{
    [Table("travelInfo", Schema = "public")]
    public class TravelInfo
    {
       [Key]
       public int TravelID { get; set; } 
       public int CardNumber { get; set; } 
       public string? FromLocation { get; set; } 
       public string? ToLocation { get; set; } 
       public double TravelCost { get; set; } 
    }
}