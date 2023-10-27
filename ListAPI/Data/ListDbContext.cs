using ClassLibrary;
using Microsoft.EntityFrameworkCore;

namespace ListAPI.Data
{
    public class ListDbContext : DbContext
    {
        public DbSet<ToDo> ToDoList { get; set; }

        public ListDbContext(DbContextOptions<ListDbContext> options) : base(options)
        {
        }
    }
}
