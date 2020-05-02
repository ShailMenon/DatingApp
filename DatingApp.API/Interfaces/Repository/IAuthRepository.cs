using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Interfaces.Repository
{
    public interface IAuthRepository
    {
         Task<User> RegisterUser(User  user, string password);
         Task<User> LoginUser(string  userName, string password);
         Task<bool> UserExists(string  userName);

    }
}