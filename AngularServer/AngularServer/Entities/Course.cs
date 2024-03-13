namespace AngularServer.Entities
{
    public enum wayOfLearning { Frontaly, Zoom };
    public class Course
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CategoryId { get; set; }
        public int LessonsAmount { get; set; }
        public DateOnly DateOfStart { get; set; }
        public List<string> Silibus { get; set; }
        public int LecturerId { get; set; }
        public string Image { get; set; }
        public wayOfLearning wayOfLearning { get; set; }

    }
}
