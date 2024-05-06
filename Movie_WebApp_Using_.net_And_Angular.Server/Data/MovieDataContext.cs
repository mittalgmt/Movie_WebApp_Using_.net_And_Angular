using Microsoft.EntityFrameworkCore;
using Movie_WebApp_Using_.net_And_Angular.Server.Model;

namespace Movie_WebApp_Using_.net_And_Angular.Server.Data
{
    public class MovieDataContext : DbContext
    {
        public MovieDataContext(DbContextOptions<MovieDataContext> options) : base(options)
        {

        }

        public DbSet<Movie> Movies { get; set; }
    }
}
