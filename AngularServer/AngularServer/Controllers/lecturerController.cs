using AngularServer.Entities;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class lecturerController : ControllerBase
    {
       public static List<lecturer> lecturerList=new List<lecturer>()
       {
          new lecturer{Id=1, Name="טלי", Address="פתח תקווה", Email="tali@gmail.com", Password="1234"} ,
          new lecturer{Id=2,Name="גיל", Address="רמת השרון", Email="gil@gmail.com", Password="5678"} ,
          new lecturer{Id=3,Name="מירי", Address="בני ברק", Email="m7458@gmail.com", Password="7458"} ,
          new lecturer{Id=4,Name="משה", Address="תל אביב", Email="moshe@gmail.com", Password="1478"} ,
       };
        // GET: api/<lecturerController>
        [HttpGet]
        public List<lecturer> Get()
        {
            return lecturerList;
        }

        // GET api/<lecturerController>/5
        [HttpGet("{id}")]
        public lecturer Get(int id)
        {
            return lecturerList.Find(l => l.Id == id);
        }

        //// POST api/<lecturerController>
        //[HttpPost]
        //public void Post([FromBody] lecturer lecturer)
        //{
        //    lecturerList.Add(lecturer);
        //}

        // PUT api/<lecturerController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        // DELETE api/<lecturerController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
