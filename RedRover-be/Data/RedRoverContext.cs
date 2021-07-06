using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RedRover_be.Models;

namespace RedRover_be.Data
{
    public class RedRoverContext : DbContext
    {
        public RedRoverContext (DbContextOptions<RedRoverContext> options)
            : base(options)
        {
        }

        public DbSet<RedRover_be.Models.User> User { get; set; }
    }
}
