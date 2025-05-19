# 🌐 Terraform GCP Portfolio Deployment

This project showcases how to deploy a personal portfolio website using **Terraform** on **Google Cloud Platform (GCP)** with **Google Cloud Storage (GCS)** for static hosting. The portfolio is written in HTML, CSS, and JavaScript.

---

## 📁 Project Structure

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

yaml
Copy
Edit

---

## 🚀 How to Use

### 1. Clone the Repo

```bash
git clone https://github.com/Shashipreethamgajji/terraform-gcp-portfolio.git
cd terraform-gcp-portfolio
2. Authenticate with GCP
Make sure you have the GCP service account key stored as terraform-key.json inside the terraform/ folder.

3. Deploy Using Terraform
bash
Copy
Edit
cd terraform
terraform init
terraform apply
You will be prompted to enter a bucket name. Use something globally unique (e.g., shashi-portfolio-2025).

🖼️ Screenshots
These screenshots demonstrate key steps and outcomes:

Screenshot	Description
terraform_apply.png	Output of terraform apply command
gcp_bucket.png	GCS bucket created on GCP console
deployed_site.png	Live website opened via bucket URL
github_repo.png	GitHub repository after pushing code

All screenshots are stored in the screenshots/ folder for submission and review.

🌍 Live Demo
🔗 https://storage.googleapis.com/YOUR_BUCKET_NAME/index.html

Replace YOUR_BUCKET_NAME with your actual bucket name (e.g., shashi-portfolio-2025).

📦 GitHub Setup Steps
Initialize Git:

bash
Copy
Edit
git init
git remote add origin https://github.com/Shashipreethamgajji/terraform-gcp-portfolio.git
Push Code:

bash
Copy
Edit
git add .
git commit -m "Initial commit"
git push -u origin main
🔒 .gitignore
Ensure you have this .gitignore in place:

bash
Copy
Edit
terraform/terraform-key.json
*.tfstate
.terraform/
📄 License
This project is licensed under the MIT License.

📬 Contact
For feedback or questions:
📧 shashipreethamgajji@gmail.com
🔗 LinkedIn Profile

markdown
Copy
Edit

---

### 📸 How to Take and Upload Screenshots

Take **clear screenshots** of:

1. ✅ `terraform apply` terminal output
2. ✅ GCP bucket overview in the Console
3. ✅ Your website opened via HTTPS bucket link
4. ✅ GitHub repo after pushing

**Save them as:**

- `terraform_apply.png`
- `gcp_bucket.png`
- `deployed_site.png`
- `github_repo.png`

Then:

1. Place all `.png` files into a new `screenshots/` folder in the root of your project.
2. Run the following:

   ```bash
   git add screenshots/
   git commit -m "Add screenshots for documentation"
   git push