

using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.DTOs
{
    public class UserForRegisterDTO
    {
        [Required]
        public string UserName {get; set;}

        [Required]
        [StringLength(8, MinimumLength= 4, ErrorMessage= "Password should be between 4 to 8 charachters.")]
        public string Password {get; set;}

    }
}