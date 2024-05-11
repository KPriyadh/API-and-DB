using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GroceryAPI.Data
{
    [Table("orderInfo", Schema = "public")]
    public class OrderInfo
    {
        [Key]
        public int OrderID { get; set; }
        public int UserID { get; set; }
        public int MaterialID { get; set; }
        public string? MaterialName { get; set; }
        public int Quantity { get; set; }
        public double OrderPrice { get; set; }
        public string? Status{get;set;}
       
        
    }
}