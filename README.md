# 🌐 Cloud Portfolio Deployment using Terraform and Google Cloud

This repository contains the source code and Terraform configurations to deploy a personal static portfolio website on **Google Cloud Storage (GCS)** using **Infrastructure as Code** principles.

---

## 📁 Project Structure

```
portfolio-terraform/
├── website/ # Your HTML, CSS, JS website files
│ ├── css/
│ ├── js/
│ ├── images/
│ ├── resume/ # Contains downloadable resume
│ └── index.html
├── terraform/ # Infrastructure as Code
│ ├── main.tf
│ ├── variables.tf
│ ├── outputs.tf
│ └── terraform-key.json # (Ignored via .gitignore)
├── screenshots/ # Screenshots for submission
│ ├── terraform_apply.png
│ ├── gcp_bucket.png
│ ├── deployed_site.png
│ └── github_repo.png
├── .gitignore
└── README.md
```

yaml ```
Copy ```
Edit ```

---

## 🚀 Live Website

🌍 [Click here to view the deployed website](https://storage.googleapis.com/YOUR_BUCKET_NAME/index.html)

> Replace `YOUR_BUCKET_NAME` with the actual name of your deployed GCS bucket.

---

## 🔧 Setup Instructions

### 1. Prerequisites

- ✅ Google Cloud Project
- ✅ Billing enabled
- ✅ Google Cloud SDK installed
- ✅ Terraform installed
- ✅ GitHub account

---

### 2. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/terraform-gcp-portfolio.git
cd terraform-gcp-portfolio

---

### 3. Google Cloud Authentication
Place your downloaded GCP service account key in the terraform/ folder and name it terraform-key.json.
Important: This file is excluded from Git using .gitignore.

---

### 4. Terraform Setup
bash ```
Copy ```
Edit ```
cd terraform
terraform init
terraform plan
terraform apply
Type yes when prompted to proceed with infrastructure creation.

5. Upload Website Files to GCS
bash
Copy
Edit
gsutil cp -r ../website/* gs://YOUR_BUCKET_NAME
📸 Screenshots
Include the following screenshots inside the screenshots/ folder:

Screenshot	Description
terraform_apply.png	Terraform successful apply output
gcp_bucket.png	GCS bucket created on GCP Console
deployed_site.png	Your live portfolio opened in browser
github_repo.png	GitHub repository showing all files

📄 .gitignore
Make sure your .gitignore includes:

gitignore
Copy
Edit
terraform/terraform-key.json
*.tfstate
.terraform/
🛠 Technologies Used
Google Cloud Platform (GCS)

Terraform

HTML, CSS, JavaScript

Git & GitHub

📫 Contact
📧 shashipreethamgajji@gmail.com
🔗 LinkedIn

📝 License
This project is open source and available under the MIT License.

yaml
Copy
Edit

---

### ✅ Final Steps

1. Save this content into a file named exactly `README.md` (not `.txt`).
2. Place it in your root `portfolio-terraform/` directory.
3. Run:

```bash
git add README.md
git commit -m "Added complete README with project structure and instructions"
git push origin main