resource "github_repository" "pnpm_monorepo" {
  name                   = "pnpm-monorepo"
  visibility             = "public"
  delete_branch_on_merge = true
  has_downloads          = false
  has_issues             = true
  has_projects           = false
  has_wiki               = false
}
