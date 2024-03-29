terraform {
  required_version = ">= 1.2.2"

  required_providers {
    github = {
      source  = "integrations/github"
      version = ">= 4.26.0"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = ">= 2.11.0"
    }
  }
}
