using AngularServer.Entities;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        // GET: api/<UserController>
     public static   List<User> users=new List<User>() 
        {
            new User() {Id=1,Name="ari",Password="1234", Address="gotlib",Email="wdd@fddf"},
            new User() {Id=2,Name="boni",Password="12345", Address="jbjk",Email="wddbhjb@fddf"}
        }
        ;
        [HttpGet]
        public List<User> Get()
        {
            return users;
        }

        // GET api/<UserController>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}
        // POST api/<UserController>
        [HttpPost]
        public void Post([FromBody] User user)
        {
            users.Add(user);
        }

        // PUT api/<UserController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        // DELETE api/<UserController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
