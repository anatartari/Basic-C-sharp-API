using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApiFrabricas.Models;

namespace WebApiFrabricas.Data
{
    public class WebApiFrabricasContext : DbContext
    {
        public WebApiFrabricasContext (DbContextOptions<WebApiFrabricasContext> options)
            : base(options)
        {
        }

        public DbSet<Carro> Carros { get; set; }
        public DbSet<Fabrica> Fabricas { get; set; }
    }
}
