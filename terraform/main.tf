provider "google" {
  credentials = file("terraform-key.json")
  project     = var.project_id
  region      = var.region
}

resource "google_storage_bucket" "portfolio_bucket" {
  name          = var.bucket_name
  location      = var.region
  force_destroy = true
  website {
    main_page_suffix = "index.html"
    not_found_page   = "index.html"
  }
}

resource "google_storage_bucket_iam_binding" "public_access" {
  bucket = google_storage_bucket.portfolio_bucket.name
  role   = "roles/storage.objectViewer"
  members = ["allUsers"]
}

resource "google_storage_bucket_object" "website_files" {
  for_each = fileset("../website", "**")

  name         = each.value
  source       = "../website/${each.value}"
  bucket       = google_storage_bucket.portfolio_bucket.name
  content_type = lookup(var.mime_types, each.value, "text/plain")
}