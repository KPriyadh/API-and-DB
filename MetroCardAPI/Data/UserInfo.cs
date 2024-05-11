using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MetroCardAPI.Data
{
    [Table("users", Schema = "public")]
    public class UserInfo
    {
        [Key]
        public int CardNumber { get; set; }
        public string? UserName { get; set; }
        public string? Phone { get; set; }
        public int Balance { get; set; }
    }
}