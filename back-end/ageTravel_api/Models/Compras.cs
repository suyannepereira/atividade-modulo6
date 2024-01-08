using System.ComponentModel.DataAnnotations;

namespace ageTravel_api.Models
{
    public class Compras
    {
        [Key]
        public int Id { get; set; }
        public DateTime Data { get; set; }
        public double Total { get; set; }
        public int ClientesId { get; set; }
        public Clientes Clientes { get; set; }
        public int DestinosId { get; set; }
        public Destinos Destinos { get; set; }
        
    }
}
