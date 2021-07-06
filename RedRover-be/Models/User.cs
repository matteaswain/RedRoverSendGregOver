using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RedRover_be.Models
{

    
    public class User
    {

        public static string Red = "RED";
        public static string Yellow = "YELLOW";
        public static string Green = "GREEN";



        public int Id { get; set; }

        [Required, StringLength(30)]
        public string Username { get; set; }

        [Required, StringLength(30)]
        public string Password { get; set; }

        [Required, StringLength(30)]
        public string Firstname { get; set; }

        [Required, StringLength(60)]
        public string  Lastname { get; set; }

        [Required, StringLength(12)]
        public string Status { get; set; } = Green;
        [Required]
        public bool IsAdmin { get; set; } = false;

        public bool IsActive { get; set; } = true;

        public bool IsLoggedIn { get; set; } = false;


    }
}
