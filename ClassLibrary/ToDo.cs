namespace ClassLibrary
{
    public class ToDo
    {
        public Guid Id { get; set; }
        public bool IsComplete { get; set; } = false;
        public string? Description { get; set; }
        public string? Title { get; set; }
        public DateTime? DueDate { get; set; }

        public ToDo(Guid id, string title, string? description, DateTime? dueDate)
        {
            Id = id;
            Title = title;
            Description = description;
            DueDate = dueDate;
        }
    }
}