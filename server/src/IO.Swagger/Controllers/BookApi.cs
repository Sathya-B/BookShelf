/*
 * Book Shelf
 *
 * A basic book shelf using Angular and .Net Core
 *
 * OpenAPI spec version: 1.0.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Swashbuckle.SwaggerGen.Annotations;
using IO.Swagger.Models;
using IO.Swagger.Helpers;

namespace IO.Swagger.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    [Route("api/[controller]")]
    public class BookApiController : Controller
    {
        Helper helper = new Helper();
        /// <summary>
        /// Posts a new Book to shelf
        /// </summary>
        /// <remarks></remarks>
        /// <param name="book">book to be added</param>
        /// <response code="201">Book added</response>
        /// <response code="400">Invalid input</response>
        [HttpPost]
        [Route("/book")]
        [SwaggerOperation("AddBook")]
        [SwaggerResponse(201, type: typeof(InlineResponse201))]
        [SwaggerResponse(400)]
        public virtual IActionResult AddBook([FromBody]Book book)
        {
            return helper.AddNewBook(book);
        }

        /// <summary>
        /// Delete book by ID
        /// </summary>
        /// <remarks>Deleted a Book</remarks>
        /// <param name="id">ID of book to delete</param>
        /// <response code="200">book deleted</response>
        /// <response code="400">Invalid ID supplied</response>
        /// <response code="404">Book not found</response>
        [HttpDelete]
        [Route("/book/{id}")]
        [SwaggerOperation("DeleteBookById")]
        [SwaggerResponse(200, type: typeof(InlineResponse201))]
        [SwaggerResponse(404)]
        [SwaggerResponse(400)]
        public virtual IActionResult DeleteBookById([FromRoute]long? id)
        {
            return helper.DeleteGivenBook(id);
        }


        /// <summary>
        /// Gets all the Books
        /// </summary>
        /// <remarks></remarks>
        /// <response code="200">Get All Books</response>
        /// <response code="400">Invalid input</response>
        [HttpGet]
        [Route("/book")]
        [SwaggerOperation("GetAllBooks")]
        [SwaggerResponse(200, type: typeof(InlineResponse201))]
        [SwaggerResponse(404)]
        [SwaggerResponse(400)]
        public IActionResult GetAllBooks()
        {          
            return helper.GetAllBooks();
        }

        /// <summary>
        /// Update book by ID
        /// </summary>
        /// <remarks>Updates details of a Book</remarks>
        /// <param name="id">ID of book to update</param>
        /// <response code="201">book updated</response>
        /// <response code="400">Invalid ID supplied</response>
        /// <response code="404">Book not found</response>
        [HttpPut]
        [Route("/book/{id}")]
        [SwaggerOperation("UpdateBookById")]
        [SwaggerResponse(201, type: typeof(InlineResponse201))]
        [SwaggerResponse(404)]
        [SwaggerResponse(400)]
        public virtual IActionResult UpdateBookById([FromRoute]long? id, [FromBody]Book book)
        {
            return helper.UpdateBookDetails(id, book);
        }
    }
}
