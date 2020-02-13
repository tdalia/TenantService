using System.Collections.Generic;
using AptTenantApp.Model;
using Microsoft.AspNetCore.Mvc;

namespace AptTenantApp.Controllers
{
    [Route("api/[controller]")]
    //[ApiController]
    public class TenantController : Controller
    {
        DatabaseAccessLayer dal = new DatabaseAccessLayer();

        [HttpGet]
        [Route("Index")]
        public IEnumerable<Tenant> Index()
        {
            return dal.GetAllTenants();
        }

        [HttpPost]
        [Route("Create")]
        public int Create([FromBody] Tenant tenant)
        {
            return dal.AddNewTenant(tenant);
        }

        [HttpGet("{id}")]
        [Route("Details")]
        public Tenant Details(int id)
        {
            return dal.GetTenant(id);
        }

        [HttpPut]
        [Route("Edit")]
        public int Edit([FromBody] Tenant tenant)
        {
            return dal.UpdateTenant(tenant);
        }

        [HttpDelete("{id}")]
        [Route("Delete")]
        public int Delete(int id)
        {
            return dal.DeleteTenant(id);
        }

    }
}