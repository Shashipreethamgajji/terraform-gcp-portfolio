# 🌐 Cloud Portfolio Deployment using Terraform and Google Cloud

This repository contains the source code and Terraform configurations to deploy a personal static portfolio website on **Google Cloud Storage (GCS)** using **Infrastructure as Code** principles.

---

## 📁 Project Structure

```

portfolio-terraform/
├── website/                # Your HTML, CSS, JS website files
│   ├── css/
│   ├── js/
│   ├── images/
│   ├── resume/             # Contains downloadable resume
│   └── index.html
├── terraform/              # Infrastructure as Code
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   └── terraform-key.json  # (Ignored via .gitignore)
├── screenshots/            # Screenshots for submission
│   ├── terraform\_apply.png
│   ├── gcp\_bucket.png
│   ├── deployed\_site.png
│   └── github\_repo.png
├── .gitignore
└── README.md

```

---

## 🚀 Live Website

🌍 [Click here to view the deployed website](https://storage.googleapis.com/shashi-portfolio-2025/index.html)

> Replace `shashi-portfolio-2025` with the actual name of your deployed GCS bucket.

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
git clone https://github.com/shashi-portfolio-2025/terraform-gcp-portfolio.git
cd terraform-gcp-portfolio
```

---

### 3. Google Cloud Authentication

Place your downloaded GCP service account key in the `terraform/` folder and name it `terraform-key.json`.
**Important:** This file is excluded from Git using `.gitignore`.

---

### 4. Terraform Setup

```bash
cd terraform
terraform init
terraform plan
terraform apply
```

> Type `yes` when prompted to proceed with infrastructure creation.

---

### 5. Upload Website Files to GCS

```bash
gsutil cp -r ../website/* gs://shashi-portfolio-2025
```

---

## 📸 Screenshots

Include the following screenshots inside the `screenshots/` folder:

| Screenshot            | Description                           |
| --------------------- | ------------------------------------- |
| `terraform_apply.png` | Terraform successful apply output     |
| `gcp_bucket.png`      | GCS bucket created on GCP Console     |
| `deployed_site.png`   | Your live portfolio opened in browser |
| `github_repo.png`     | GitHub repository showing all files   |

---

## 📄 .gitignore

Make sure your `.gitignore` includes:

```gitignore
terraform/terraform-key.json
*.tfstate
.terraform/
```

---

## 🛠 Technologies Used

* Google Cloud Platform (GCS)
* Terraform
* HTML, CSS, JavaScript
* Git & GitHub

---

## 📫 Contact

📧 [shashipreethamgajji@gmail.com](mailto:shashipreethamgajji@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/shashi-preetham-g-69042614b)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

````

---

### ✅ Final Steps

1. Save this content into a file named exactly `README.md` (not `.txt`).
2. Place it in your root `portfolio-terraform/` directory.
3. Run:

```bash
git add README.md
git commit -m "Added complete README with project structure and instructions"
git push origin main
````
