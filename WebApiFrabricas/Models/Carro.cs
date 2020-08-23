using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiFrabricas.Models
{
    public class Carro
    {
        public int CarroId { get; set; }
        public string Modelo { get; set; }

        public int FabricaId { get; set; }
        public Fabrica Fabrica { get; set; }
    }
}
