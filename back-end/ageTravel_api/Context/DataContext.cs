using ageTravel_api.Models;
using Microsoft.EntityFrameworkCore;


namespace ageTravel_api.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Clientes> Clientes { get; set; }
        public DbSet<Destinos> Destinos { get; set; }
        public DbSet<Compras> Compras { get; set; }
    }
}
