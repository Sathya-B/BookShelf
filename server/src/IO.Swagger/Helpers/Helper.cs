using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IO.Swagger.Models;
using Newtonsoft.Json;
using System.Net.Http;
using System.Net;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.SwaggerGen.Annotations;

namespace IO.Swagger.Helpers
{
    public class Helper
    {
        public IActionResult GetAllBooks()
        {

            IEnumerable<Book> books;
            try
            {
                using (var db = new Data.DatabaseContext())
                {
                    books = db.Books.ToList();
                }

                ObjectResult result = new ObjectResult(books);
                if (books.Count() > 0)
                {
                    result.StatusCode = (int)HttpStatusCode.OK;
                }
                else
                {
                    result.StatusCode = (int)HttpStatusCode.NotFound;
                }
                return result;
            }
            catch
            {
                return new BadRequestResult();
            }
        }
        public IActionResult AddNewBook(Book book)
        {
            ObjectResult result = new ObjectResult(book);
            try
            {
                using (var db = new Data.DatabaseContext())
                {
                    book.Id = null;
                    db.Books.Add(book);
                    db.SaveChanges();
                }

                ObjectResult res = new ObjectResult(book);
                res.StatusCode = (int)HttpStatusCode.Created;
                return res;
            }
            catch
            {
                return new BadRequestResult();
            }
        }

        public IActionResult UpdateBookDetails(long? BookId, Book book)
        {
            ObjectResult result = new ObjectResult(book);
            try
            {
                using (var db = new Data.DatabaseContext())
                {
                    var bookCount = db.Books.Where(b => b.Id == BookId).Count();
                    if (bookCount == 0)
                    {
                        result.StatusCode = (int)HttpStatusCode.NotFound;
                        return result;
                    }
                    else
                    {
                        db.Books.Update(book);
                        db.SaveChanges();
                        result.Value = book;
                        result.StatusCode = (int)HttpStatusCode.Created;
                        return result;
                    }
                }
            }
            catch(Exception ex)
            {
                var x = ex;
                return new BadRequestResult();
            }
        }
        public IActionResult DeleteGivenBook(long? BookId)
        {
            try
            {
                using (var db = new Data.DatabaseContext())
                {
                    var bookToDelete = db.Books.Where(b => b.Id == BookId).FirstOrDefault();
                    ObjectResult result = new ObjectResult(bookToDelete);
                    if (bookToDelete == null)
                    {
                        result.StatusCode = (int)HttpStatusCode.NotFound;
                        return result;
                    }
                    else
                    {

                        db.Books.Remove(bookToDelete);
                        db.SaveChanges();
                        result.Value = bookToDelete;
                        result.StatusCode = (int)HttpStatusCode.OK;
                        return result;
                    }
                }
            }
            catch
            {
                return new BadRequestResult();
            }
        }
    }
}
