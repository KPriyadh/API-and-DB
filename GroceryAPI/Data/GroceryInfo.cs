using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace GroceryAPI.Data
{
    [Table("groceryInfo", Schema = "public")]
    public class GroceryInfo
    {
        [Key]
        public int MaterialID { get; set; }
        public string? MaterialName { get; set; }
        public int Count { get; set; }
        public double Price { get; set; }
        public  DateTime PurchaseDate { get; set; }
        public  DateTime ExpiryDate { get; set; }
        public string[]? Photo{get;set;}
        
        
    }
}