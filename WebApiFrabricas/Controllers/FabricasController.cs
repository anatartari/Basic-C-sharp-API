using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiFrabricas.Data;
using WebApiFrabricas.Models;

namespace WebApiFrabricas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FabricasController : ControllerBase
    {
        private readonly WebApiFrabricasContext _context;

        public FabricasController(WebApiFrabricasContext context)
        {
            _context = context;
        }

        // GET: api/Fabricas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Fabrica>>> GetFabrica()
        {
            return await _context.Fabricas.ToListAsync();
        }

        // GET: api/Fabricas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Fabrica>> GetFabrica(int id)
        {
            var fabrica = await _context.Fabricas.FindAsync(id);

            if (fabrica == null)
            {
                return NotFound();
            }

            return fabrica;
        }

        // PUT: api/Fabricas/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFabrica(int id, Fabrica fabrica)
        {
            if (id != fabrica.FabricaId)
            {
                return BadRequest();
            }

            _context.Entry(fabrica).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FabricaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Fabricas
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Fabrica>> PostFabrica(Fabrica fabrica)
        {
            _context.Fabricas.Add(fabrica);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFabrica", new { id = fabrica.FabricaId }, fabrica);
        }

        // DELETE: api/Fabricas/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Fabrica>> DeleteFabrica(int id)
        {
            var fabrica = await _context.Fabricas.FindAsync(id);
            if (fabrica == null)
            {
                return NotFound();
            }

            _context.Fabricas.Remove(fabrica);
            await _context.SaveChangesAsync();

            return fabrica;
        }

        private bool FabricaExists(int id)
        {
            return _context.Fabricas.Any(e => e.FabricaId == id);
        }
    }
}
