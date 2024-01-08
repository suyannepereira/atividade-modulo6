using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ageTravel_api.Models
{
    public class Destinos
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; }
        public double Preco { get; set; }
        public DateTime Data {  get; set; }
        [JsonIgnore]
        public List<Compras> Compras { get; set; }
    }
}
