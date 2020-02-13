using System;

namespace AptTenantApp.Model
{
    public class Tenant
    {
        public int TenantId
        {
            get;
            set;
        }

        public string Name
        {
            get;
            set;
        }

        public string Gender     {   get;       set;      }

        public string BuildingNo
        {
            get;  set;
        }

        public string AptNo
        {
            get;
            set;
        }

        public DateTime DateJoined
        {
            get;    set;
        }

        public DateTime LastDate
        {
            get; set;
        }


    }
}
