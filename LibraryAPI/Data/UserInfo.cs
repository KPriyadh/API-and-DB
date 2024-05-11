using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LibraryAPI.Data
{
    [Table("usersInfo", Schema = "public")]
    public class UserInfo
    {
    [Key]
    public int UserID { get; set; }
    public string? UserName { get; set; }
    public string? Gender { get; set; }
    public string? Department { get; set; }
    public string? Mobile { get; set; }
    public string? Mail { get; set; }
    public double Balance { get; set; }
        
    }
}