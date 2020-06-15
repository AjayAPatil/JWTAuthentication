using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JWTAuthDemo.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JWTAuthDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        [HttpGet("authorized")]
        [Authorize]//here jwt token 
        public ActionResult Get()
        {
            var response = new
            {
                message = "this is authorized call"
            };
            return Ok(response);
        }

        [HttpGet("admin")]
        [Authorize(Roles =Roles.Admin)]//here jwt token 
        public ActionResult GetByrole()
        {
            var response = new
            {
                message = "this is authorized call for admin"
            };
            return Ok(response);
        }

        [HttpGet("anonymous")]
        [AllowAnonymous]
        public ActionResult Anonymous()
        {
            var response = new
            {
                message = "this is anonymous call"
            };
            return Ok(response);
        }
    }
}