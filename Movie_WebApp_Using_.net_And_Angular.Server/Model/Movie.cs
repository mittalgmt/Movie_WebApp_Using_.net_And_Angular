using System.ComponentModel.DataAnnotations;

namespace Movie_WebApp_Using_.net_And_Angular.Server.Model
{
    public class Movie
    {
       
        public Guid Id { get; set; }
        
        
        public  string MovieName { get; set; }


        public bool Watched  { get; set;}

        public bool IsDelete { get; set;}
    }
}
