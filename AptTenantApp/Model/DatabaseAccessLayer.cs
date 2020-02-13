using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace AptTenantApp.Model
{
    public class DatabaseAccessLayer
    {
        string connsectionString = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=AptTenantDb;Integrated Security=True;";

        // View all Tenant details
        public IEnumerable<Tenant> GetAllTenants()
        {
            try
            {
                List<Tenant> tenantsLst = new List<Tenant>();

                using(SqlConnection conn = new SqlConnection(connsectionString))
                {
                    SqlCommand cmd = new SqlCommand("GetAllTenant", conn);
                    cmd.CommandType = CommandType.StoredProcedure;

                    conn.Open();
                    SqlDataReader dr = cmd.ExecuteReader();
                    while(dr.Read())
                    {
                        Tenant t = new Tenant();

                        t.TenantId = Convert.ToInt32(dr["TenantId"]);
                        t.Name = dr["Name"].ToString();
                        t.Gender = dr["Gender"].ToString();
                        t.BuildingNo = dr["BuildingNo"].ToString();
                        t.AptNo = dr["AptNo"].ToString();
                        t.DateJoined = Convert.ToDateTime(dr["DateJoined"]);
                        t.LastDate = Convert.ToDateTime(dr["LastDate"]);

                        tenantsLst.Add(t);
                    }
                    conn.Close();
                }
                return tenantsLst;
            } catch
            {
                throw;
            }
        }

        // Add a new tenant
        public int AddNewTenant(Tenant t)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(connsectionString))
                {
                    SqlCommand cmd = new SqlCommand("AddNewTenant", conn);
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.Parameters.AddWithValue("@Name", t.Name);
                    cmd.Parameters.AddWithValue("@Gender", t.Gender);
                    cmd.Parameters.AddWithValue("@BuildingNo", t.BuildingNo);
                    cmd.Parameters.AddWithValue("@AptNo", t.AptNo);
                    cmd.Parameters.AddWithValue("@DateJoined", t.DateJoined);
                    cmd.Parameters.AddWithValue("@LastDate", t.LastDate);

                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }

        // Update tenant
        public int UpdateTenant(Tenant t)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(connsectionString))
                {
                    SqlCommand cmd = new SqlCommand("UpdateTenant", conn);
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.Parameters.AddWithValue("@TenantId", t.TenantId);
                    cmd.Parameters.AddWithValue("@Name", t.Name);
                    cmd.Parameters.AddWithValue("@Gender", t.Gender);
                    cmd.Parameters.AddWithValue("@BuildingNo", t.BuildingNo);
                    cmd.Parameters.AddWithValue("@AptNo", t.AptNo);
                    cmd.Parameters.AddWithValue("@DateJoined", t.DateJoined);
                    cmd.Parameters.AddWithValue("@LastDate", t.LastDate);

                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }

        // View details of specific Tenant 
        public Tenant GetTenant(int id)
        {
            try
            {
                Tenant t = new Tenant();

                using (SqlConnection conn = new SqlConnection(connsectionString))
                {
                    SqlCommand cmd = new SqlCommand("GetTenant", conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@TenantId", t.TenantId);

                    conn.Open();
                    SqlDataReader dr = cmd.ExecuteReader();
                    while (dr.Read())
                    {
                        t.TenantId = Convert.ToInt32(dr["TenantId"]);
                        t.Name = dr["Name"].ToString();
                        t.Gender = dr["Gender"].ToString();
                        t.BuildingNo = dr["BuildingNo"].ToString();
                        t.AptNo = dr["AptNo"].ToString();
                        t.DateJoined = Convert.ToDateTime(dr["DateJoined"]);
                        t.LastDate = Convert.ToDateTime(dr["LastDate"]);

                    }
                    conn.Close();
                }
                return t;
            }
            catch
            {
                throw;
            }
        }

        // Delete specific Tenant 
        public int DeleteTenant(int id)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(connsectionString))
                {
                    SqlCommand cmd = new SqlCommand("DeleteTenant", conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@TenantId", id);

                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }


    }
}
