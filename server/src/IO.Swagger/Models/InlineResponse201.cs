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
using System.Linq;
using System.IO;
using System.Text;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;

namespace IO.Swagger.Models
{

    /// <summary>
    /// 
    /// </summary>
    [DataContract]
    public partial class InlineResponse201 :  IEquatable<InlineResponse201>
    {
                /// <summary>
        /// if read/yet to read
        /// </summary>
        /// <value>if read/yet to read</value>
        public enum CategoryEnum
        {
            
            /// <summary>
            /// Enum ScienceEnum for "Science"
            /// </summary>
            [EnumMember(Value = "Science")]
            ScienceEnum,
            
            /// <summary>
            /// Enum HistoryEnum for "History"
            /// </summary>
            [EnumMember(Value = "History")]
            HistoryEnum,
            
            /// <summary>
            /// Enum EconomicsEnum for "Economics"
            /// </summary>
            [EnumMember(Value = "Economics")]
            EconomicsEnum,
            
            /// <summary>
            /// Enum AutoBiographyEnum for "AutoBiography"
            /// </summary>
            [EnumMember(Value = "AutoBiography")]
            AutoBiographyEnum
        }
                /// <summary>
        /// if read/yet to read
        /// </summary>
        /// <value>if read/yet to read</value>
        public enum CurrentstatusEnum
        {
            
            /// <summary>
            /// Enum CompletedReadingEnum for "Completed Reading"
            /// </summary>
            [EnumMember(Value = "Completed Reading")]
            CompletedReadingEnum,
            
            /// <summary>
            /// Enum ReadingNowEnum for "Reading Now"
            /// </summary>
            [EnumMember(Value = "Reading Now")]
            ReadingNowEnum,
            
            /// <summary>
            /// Enum YetToStartEnum for "Yet to Start"
            /// </summary>
            [EnumMember(Value = "Yet to Start")]
            YetToStartEnum
        }
        /// <summary>
        /// if read/yet to read
        /// </summary>
        /// <value>if read/yet to read</value>
        [DataMember(Name="category")]
        public CategoryEnum? Category { get; set; }
        /// <summary>
        /// if read/yet to read
        /// </summary>
        /// <value>if read/yet to read</value>
        [DataMember(Name="currentstatus")]
        public CurrentstatusEnum? Currentstatus { get; set; }

        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse201" /> class.
        /// </summary>
        /// <param name="Id">Id.</param>
        /// <param name="Category">if read/yet to read.</param>
        /// <param name="Bookname">Bookname (required).</param>
        /// <param name="Authorname">Authorname (required).</param>
        /// <param name="Purchasedate">Purchasedate (required).</param>
        /// <param name="Notes">Notes.</param>
        /// <param name="Currentstatus">if read/yet to read (required).</param>
        public InlineResponse201(long? Id = default(long?), CategoryEnum? Category = default(CategoryEnum?), string Bookname = default(string), string Authorname = default(string), DateTime? Purchasedate = default(DateTime?), string Notes = default(string), CurrentstatusEnum? Currentstatus = default(CurrentstatusEnum?))
        {
            // to ensure "Bookname" is required (not null)
            if (Bookname == null)
            {
                throw new InvalidDataException("Bookname is a required property for InlineResponse201 and cannot be null");
            }
            else
            {
                this.Bookname = Bookname;
            }
            // to ensure "Authorname" is required (not null)
            if (Authorname == null)
            {
                throw new InvalidDataException("Authorname is a required property for InlineResponse201 and cannot be null");
            }
            else
            {
                this.Authorname = Authorname;
            }
            // to ensure "Purchasedate" is required (not null)
            if (Purchasedate == null)
            {
                throw new InvalidDataException("Purchasedate is a required property for InlineResponse201 and cannot be null");
            }
            else
            {
                this.Purchasedate = Purchasedate;
            }
            // to ensure "Currentstatus" is required (not null)
            if (Currentstatus == null)
            {
                throw new InvalidDataException("Currentstatus is a required property for InlineResponse201 and cannot be null");
            }
            else
            {
                this.Currentstatus = Currentstatus;
            }
            this.Id = Id;
            this.Category = Category;
            this.Notes = Notes;
            
        }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="id")]
        public long? Id { get; set; }
        /// <summary>
        /// Gets or Sets Bookname
        /// </summary>
        [DataMember(Name="bookname")]
        public string Bookname { get; set; }
        /// <summary>
        /// Gets or Sets Authorname
        /// </summary>
        [DataMember(Name="authorname")]
        public string Authorname { get; set; }
        /// <summary>
        /// Gets or Sets Purchasedate
        /// </summary>
        [DataMember(Name="purchasedate")]
        public DateTime? Purchasedate { get; set; }
        /// <summary>
        /// Gets or Sets Notes
        /// </summary>
        [DataMember(Name="notes")]
        public string Notes { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse201 {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Category: ").Append(Category).Append("\n");
            sb.Append("  Bookname: ").Append(Bookname).Append("\n");
            sb.Append("  Authorname: ").Append(Authorname).Append("\n");
            sb.Append("  Purchasedate: ").Append(Purchasedate).Append("\n");
            sb.Append("  Notes: ").Append(Notes).Append("\n");
            sb.Append("  Currentstatus: ").Append(Currentstatus).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="obj">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != GetType()) return false;
            return Equals((InlineResponse201)obj);
        }

        /// <summary>
        /// Returns true if InlineResponse201 instances are equal
        /// </summary>
        /// <param name="other">Instance of InlineResponse201 to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse201 other)
        {

            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;

            return 
                (
                    this.Id == other.Id ||
                    this.Id != null &&
                    this.Id.Equals(other.Id)
                ) && 
                (
                    this.Category == other.Category ||
                    this.Category != null &&
                    this.Category.Equals(other.Category)
                ) && 
                (
                    this.Bookname == other.Bookname ||
                    this.Bookname != null &&
                    this.Bookname.Equals(other.Bookname)
                ) && 
                (
                    this.Authorname == other.Authorname ||
                    this.Authorname != null &&
                    this.Authorname.Equals(other.Authorname)
                ) && 
                (
                    this.Purchasedate == other.Purchasedate ||
                    this.Purchasedate != null &&
                    this.Purchasedate.Equals(other.Purchasedate)
                ) && 
                (
                    this.Notes == other.Notes ||
                    this.Notes != null &&
                    this.Notes.Equals(other.Notes)
                ) && 
                (
                    this.Currentstatus == other.Currentstatus ||
                    this.Currentstatus != null &&
                    this.Currentstatus.Equals(other.Currentstatus)
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            // credit: http://stackoverflow.com/a/263416/677735
            unchecked // Overflow is fine, just wrap
            {
                int hash = 41;
                // Suitable nullity checks etc, of course :)
                    if (this.Id != null)
                    hash = hash * 59 + this.Id.GetHashCode();
                    if (this.Category != null)
                    hash = hash * 59 + this.Category.GetHashCode();
                    if (this.Bookname != null)
                    hash = hash * 59 + this.Bookname.GetHashCode();
                    if (this.Authorname != null)
                    hash = hash * 59 + this.Authorname.GetHashCode();
                    if (this.Purchasedate != null)
                    hash = hash * 59 + this.Purchasedate.GetHashCode();
                    if (this.Notes != null)
                    hash = hash * 59 + this.Notes.GetHashCode();
                    if (this.Currentstatus != null)
                    hash = hash * 59 + this.Currentstatus.GetHashCode();
                return hash;
            }
        }

        #region Operators

        public static bool operator ==(InlineResponse201 left, InlineResponse201 right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(InlineResponse201 left, InlineResponse201 right)
        {
            return !Equals(left, right);
        }

        #endregion Operators

    }
}
