using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using WebApiFrabricas.Data;

namespace WebApiFrabricas
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            /*
             services.AddCors(option => {
                option.AddPolicy("AllowSpecificOrigin", policy => policy.WithOrigins("http://macoratti.net"));
                option.AddPolicy("AllowGetMethod", policy => policy.WithMethods("GET"));
            });
            */
            services.AddControllers();

            services.AddDbContext<WebApiFrabricasContext>(options =>
                    options.UseSqlServer(Configuration.GetConnectionString("WebApiFrabricasContext")));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();
            app.UseCors(option => option.AllowAnyOrigin());


            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
