using AngularServer.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Xml.Linq;
using static System.Net.Mime.MediaTypeNames;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        static int id = 7;
        public static List<Course> courses=new List<Course>()
        {
            new Course(){Id=1,Name="English",CategoryId= 2,LessonsAmount= 20,DateOfStart= new DateOnly(2024,04,05),Silibus=new List<string>(){ "English for Beginners: Learn essential grammar, vocabulary, and pronunciation to confidently communicate in everyday situations. (Grading: Participation, Homework, Exams)" } ,LecturerId= 2, Image="../../../../assets/images/unnamed.jpg",wayOfLearning=wayOfLearning.Zoom
            },
            new Course(){Id=2,Name="Coocking",CategoryId=4,LessonsAmount=35,DateOfStart=new DateOnly(2024,03,18),Silibus=new List<string>(){ "Master the basics of cooking and prepare delicious meals.\r\n\r\nLearn to:\r\n\r\nCook various dishes\r\nUse kitchen equipment safely\r\nWork in a team\r\nGrading: Participation, assignments, exams." } ,LecturerId=5,Image="../../../../assets/images/flat-lay-bakery-composition-with-copyspace.jpg",wayOfLearning=wayOfLearning.Frontaly
            },
            new Course(){Id=3,Name="Drawing",CategoryId=1,LessonsAmount=18,DateOfStart=new DateOnly(2024,03,25),Silibus=new List<string>(){ "Drawing Course:\r\nLearn essential drawing skills and techniques to capture the world around you.\r\n\r\nBy the end of this course, you'll be able to:\r\n\r\nDraw from observation\r\nUse different drawing materials\r\nDevelop your own artistic style\r\nGrading: Participation, assignments, final project." } ,LecturerId=1,Image="../../../../assets/images/unnamed (10).jpg",wayOfLearning=wayOfLearning.Zoom
            },
            new Course(){Id=4,Name="Jym",CategoryId=3,LessonsAmount=30,DateOfStart=new DateOnly(2024,04,15),Silibus=new List<string> (){"Gymnastics Course:\r\nMaster basic gymnastic skills and enhance your fitness.\r\n\r\nLearn to:\r\n\r\nPerform gymnastic moves\r\nUse equipment safely\r\nImprove strength & flexibility\r\nGrading: Participation, skills, final performance."},LecturerId=3,Image="../../../../assets/images/young-woman-working-out-street.jpg",wayOfLearning=wayOfLearning.Frontaly
            },
            new Course(){Id=5,Name="Good nutrition",CategoryId=3,LessonsAmount=16,DateOfStart=new DateOnly(2024,03,29),Silibus=new List<string>(){ "Nutrition Course:\r\nLearn to eat healthy and make informed food choices.\r\n\r\nBy the end of this course, you'll be able to:\r\n\r\nUnderstand nutrition basics\r\nCreate healthy meal plans\r\nChoose food wisely\r\nGrading: Participation, assignments, final project." } ,LecturerId=3,Image="../../../../assets/images/modern-gym-composition-with-sport-elements.jpg",wayOfLearning=wayOfLearning.Zoom
            },
              new Course(){Id=6,Name="Programin",CategoryId=5,LessonsAmount=50,DateOfStart=new DateOnly(2024,03,20),Silibus=new List<string>(){ "Programming Course:\r\nLearn to code and create your own programs.\r\n\r\nBy the end of this course, you'll be able to:\r\n\r\nWrite code\r\nUse programming concepts\r\nSolve problems logically\r\nGrading: Participation, assignments, final project." } ,LecturerId=9,Image="../../../../assets/images/php-programming-html-coding-cyberspace-concept.jpg",wayOfLearning=wayOfLearning.Frontaly
              },
               new Course(){Id=7,Name="Graphics",CategoryId=1,LessonsAmount=55,DateOfStart=new DateOnly(2024,04,02),Silibus=new List<string>(){ "Graphic Design Course:\r\nMaster the basics of visual communication and create stunning designs.\r\n\r\nLearn to:\r\n\r\nUse design principles\r\nCreate graphics\r\nCommunicate visually\r\nGrading: Participation, projects, exams." } ,LecturerId=1,Image="../../../../assets/images/unnamed (1).jpg",wayOfLearning=wayOfLearning.Zoom
              },
        }
        ;
        // GET: api/<CourseController>
        [HttpGet]
        public List<Course> Get()
        {
            return courses;
        }

        // GET api/<CourseController>/5
        [HttpGet("{id}")]
        public Course Get(int id)
        {
            return courses.Find(c=>c.Id==id);
        }

        // POST api/<CourseController>
        [HttpPost]
        public void Post([FromBody] Course course)
        {
            if (course.Id == 0)
            {
                courses.Add(new Course() { Id = id++, Name = course.Name, CategoryId = course.CategoryId, DateOfStart = course.DateOfStart, Image = course.Image, LecturerId = course.LecturerId, LessonsAmount = course.LessonsAmount, Silibus = course.Silibus, wayOfLearning = course.wayOfLearning });

            }
            else
            {
                Course co = courses.Find(c => c.Id == course.Id);
                if (co != null)
                {
                    courses.Remove(co);
                    courses.Add(course);
                }

            }

        }

        // PUT api/<CourseController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Course course)
        {
            var course1 = courses.Find(c => c.Id == id);
            course1.Silibus= course.Silibus;
            course1.DateOfStart= course.DateOfStart;
            course1.Name= course.Name;
            course1.CategoryId= course.CategoryId;
            course.LessonsAmount= course.LessonsAmount;
            course1.Image= course.Image;
        }

        // DELETE api/<CourseController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            courses.RemoveAt(id);
        }
    }
}
