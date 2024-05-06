using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Movie_WebApp_Using_.net_And_Angular.Server.Data;
using Movie_WebApp_Using_.net_And_Angular.Server.Model;

namespace Movie_WebApp_Using_.net_And_Angular.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly MovieDataContext _context;


        public MoviesController(MovieDataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllMovies()
        {

            var movie = await _context.Movies
                .Where(x => x.IsDelete == false)
                .ToListAsync();

            return Ok(movie);
        }

        [HttpGet]
        [Route("get-deleted-movies")]
        public async Task<IActionResult> GetAllDeletedMovies()
        {
            var movie = await _context.Movies
                .Where(x => x.IsDelete == true)
                .ToListAsync();

            return Ok(movie);
        }

        [HttpPost]
        public async Task<IActionResult> AddMovie(Movie movie)
        {
            movie.Id = Guid.NewGuid();

            _context.Movies.Add(movie);
            await _context.SaveChangesAsync();

            return Ok(movie);
        }


        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateMovie([FromRoute] Guid id, Movie movieUpdate)
        {
            var movie = await _context.Movies.FindAsync(id);

            if (movie == null)
            {
                return NotFound("Movie not found");

            }

            movie.Watched = movieUpdate.Watched;

            await _context.SaveChangesAsync();

            return Ok(movie);


        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteMovie([FromRoute] Guid id)
        {
            var movie = await _context.Movies.FindAsync(id);
            if (movie == null)
            {
                return NotFound("Movie Not found");
            }

            movie.IsDelete = true;
            await _context.SaveChangesAsync();

            return Ok(movie);
        }

        [HttpPut]
        [Route("undo-deleted-movie/{id:Guid}")]
        public async Task<IActionResult> UndoDeletdMovie([FromRoute] Guid id , Movie movieDetedRequest)
        {
            var movie = await _context.Movies.FindAsync(id);
            
            if (movie == null)
            {
                return NotFound();
            }

            movie.IsDelete = false;

            await _context.SaveChangesAsync();

            return Ok(movie);
        }
    }
}
