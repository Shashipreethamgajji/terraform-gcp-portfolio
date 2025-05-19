variable "project_id" {}
variable "region" {
  default = "US"
}
variable "bucket_name" {}

variable "mime_types" {
  default = {
    "index.html" = "text/html"
    "style.css"  = "text/css"
    "script.js"  = "application/javascript"
    "resume.pdf" = "application/pdf"
    "json"       = "application/json"
    "png"        = "image/png"
    "jpg"        = "image/jpeg"
    "jpeg"       = "image/jpeg"
    "svg"        = "image/svg+xml"
  }
}