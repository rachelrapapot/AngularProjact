using AngularServer.Entities;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
     static  public   List<Category> categories=new List<Category>()
     {
         new Category(){Id=1, Name="Design",PathToIcon="fas fa-bookmark"},
         new Category(){Id=2, Name="lengauge",PathToIcon="fas fa-language"},
         new Category(){Id=3, Name="health",PathToIcon="bi bi-heart"},
         new Category(){Id=4, Name="kitchen",PathToIcon="fas fa-utensils"},
         new Category(){Id=5, Name="hitech",PathToIcon="fas fa bi-cpu"}
     };
        // GET: api/<CategoryController>
        [HttpGet]
        public List<Category> Get()
        {
            return categories;
        }

        //GET api/<CategoryController>/5
        [HttpGet("{id}")]
        public Category Get(int id)
        {
            return categories.Find(a=>a.Id==id);
        }

        // POST api/<CategoryController>
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        // PUT api/<CategoryController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CategoryController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
