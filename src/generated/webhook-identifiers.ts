import { webhooks } from "@wolfy1339/openapi-webhooks-types";

export type WebhookEventDefinition<TEventName extends keyof webhooks> =
  webhooks[TEventName]["post"]["requestBody"]["content"]["application/json"];

export type webhooksIdentifiers = {
  branch_protection_rule:
    | WebhookEventDefinition<"branch-protection-rule-created">
    | WebhookEventDefinition<"branch-protection-rule-deleted">
    | WebhookEventDefinition<"branch-protection-rule-edited">;
  "branch_protection_rule.created": WebhookEventDefinition<"branch-protection-rule-created">;
  "branch_protection_rule.deleted": WebhookEventDefinition<"branch-protection-rule-deleted">;
  "branch_protection_rule.edited": WebhookEventDefinition<"branch-protection-rule-edited">;
  check_run:
    | WebhookEventDefinition<"check-run-completed">
    | WebhookEventDefinition<"check-run-created">
    | WebhookEventDefinition<"check-run-requested-action">
    | WebhookEventDefinition<"check-run-rerequested">;
  "check_run.completed": WebhookEventDefinition<"check-run-completed">;
  "check_run.created": WebhookEventDefinition<"check-run-created">;
  "check_run.requested_action": WebhookEventDefinition<"check-run-requested-action">;
  "check_run.rerequested": WebhookEventDefinition<"check-run-rerequested">;
  check_suite:
    | WebhookEventDefinition<"check-suite-completed">
    | WebhookEventDefinition<"check-suite-requested">
    | WebhookEventDefinition<"check-suite-rerequested">;
  "check_suite.completed": WebhookEventDefinition<"check-suite-completed">;
  "check_suite.requested": WebhookEventDefinition<"check-suite-requested">;
  "check_suite.rerequested": WebhookEventDefinition<"check-suite-rerequested">;
  code_scanning_alert:
    | WebhookEventDefinition<"code-scanning-alert-appeared-in-branch">
    | WebhookEventDefinition<"code-scanning-alert-closed-by-user">
    | WebhookEventDefinition<"code-scanning-alert-created">
    | WebhookEventDefinition<"code-scanning-alert-fixed">
    | WebhookEventDefinition<"code-scanning-alert-reopened">
    | WebhookEventDefinition<"code-scanning-alert-reopened-by-user">;
  "code_scanning_alert.appeared_in_branch": WebhookEventDefinition<"code-scanning-alert-appeared-in-branch">;
  "code_scanning_alert.closed_by_user": WebhookEventDefinition<"code-scanning-alert-closed-by-user">;
  "code_scanning_alert.created": WebhookEventDefinition<"code-scanning-alert-created">;
  "code_scanning_alert.fixed": WebhookEventDefinition<"code-scanning-alert-fixed">;
  "code_scanning_alert.reopened": WebhookEventDefinition<"code-scanning-alert-reopened">;
  "code_scanning_alert.reopened_by_user": WebhookEventDefinition<"code-scanning-alert-reopened-by-user">;
  commit_comment: WebhookEventDefinition<"commit-comment-created">;
  "commit_comment.created": WebhookEventDefinition<"commit-comment-created">;
  dependabot_alert:
    | WebhookEventDefinition<"dependabot-alert-created">
    | WebhookEventDefinition<"dependabot-alert-dismissed">
    | WebhookEventDefinition<"dependabot-alert-fixed">
    | WebhookEventDefinition<"dependabot-alert-reintroduced">
    | WebhookEventDefinition<"dependabot-alert-reopened">;
  "dependabot_alert.created": WebhookEventDefinition<"dependabot-alert-created">;
  "dependabot_alert.dismissed": WebhookEventDefinition<"dependabot-alert-dismissed">;
  "dependabot_alert.fixed": WebhookEventDefinition<"dependabot-alert-fixed">;
  "dependabot_alert.reintroduced": WebhookEventDefinition<"dependabot-alert-reintroduced">;
  "dependabot_alert.reopened": WebhookEventDefinition<"dependabot-alert-reopened">;
  deploy_key:
    | WebhookEventDefinition<"deploy-key-created">
    | WebhookEventDefinition<"deploy-key-deleted">;
  "deploy_key.created": WebhookEventDefinition<"deploy-key-created">;
  "deploy_key.deleted": WebhookEventDefinition<"deploy-key-deleted">;
  deployment: WebhookEventDefinition<"deployment-created">;
  "deployment.created": WebhookEventDefinition<"deployment-created">;
  deployment_status: WebhookEventDefinition<"deployment-status-created">;
  "deployment_status.created": WebhookEventDefinition<"deployment-status-created">;
  discussion:
    | WebhookEventDefinition<"discussion-answered">
    | WebhookEventDefinition<"discussion-category-changed">
    | WebhookEventDefinition<"discussion-created">
    | WebhookEventDefinition<"discussion-deleted">
    | WebhookEventDefinition<"discussion-edited">
    | WebhookEventDefinition<"discussion-labeled">
    | WebhookEventDefinition<"discussion-locked">
    | WebhookEventDefinition<"discussion-pinned">
    | WebhookEventDefinition<"discussion-transferred">
    | WebhookEventDefinition<"discussion-unanswered">
    | WebhookEventDefinition<"discussion-unlabeled">
    | WebhookEventDefinition<"discussion-unlocked">
    | WebhookEventDefinition<"discussion-unpinned">;
  "discussion.answered": WebhookEventDefinition<"discussion-answered">;
  "discussion.category_changed": WebhookEventDefinition<"discussion-category-changed">;
  "discussion.created": WebhookEventDefinition<"discussion-created">;
  "discussion.deleted": WebhookEventDefinition<"discussion-deleted">;
  "discussion.edited": WebhookEventDefinition<"discussion-edited">;
  "discussion.labeled": WebhookEventDefinition<"discussion-labeled">;
  "discussion.locked": WebhookEventDefinition<"discussion-locked">;
  "discussion.pinned": WebhookEventDefinition<"discussion-pinned">;
  "discussion.transferred": WebhookEventDefinition<"discussion-transferred">;
  "discussion.unanswered": WebhookEventDefinition<"discussion-unanswered">;
  "discussion.unlabeled": WebhookEventDefinition<"discussion-unlabeled">;
  "discussion.unlocked": WebhookEventDefinition<"discussion-unlocked">;
  "discussion.unpinned": WebhookEventDefinition<"discussion-unpinned">;
  discussion_comment:
    | WebhookEventDefinition<"discussion-comment-created">
    | WebhookEventDefinition<"discussion-comment-deleted">
    | WebhookEventDefinition<"discussion-comment-edited">;
  "discussion_comment.created": WebhookEventDefinition<"discussion-comment-created">;
  "discussion_comment.deleted": WebhookEventDefinition<"discussion-comment-deleted">;
  "discussion_comment.edited": WebhookEventDefinition<"discussion-comment-edited">;
  github_app_authorization: WebhookEventDefinition<"github-app-authorization-revoked">;
  "github_app_authorization.revoked": WebhookEventDefinition<"github-app-authorization-revoked">;
  installation:
    | WebhookEventDefinition<"installation-created">
    | WebhookEventDefinition<"installation-deleted">
    | WebhookEventDefinition<"installation-new-permissions-accepted">
    | WebhookEventDefinition<"installation-suspend">
    | WebhookEventDefinition<"installation-unsuspend">;
  "installation.created": WebhookEventDefinition<"installation-created">;
  "installation.deleted": WebhookEventDefinition<"installation-deleted">;
  "installation.new_permissions_accepted": WebhookEventDefinition<"installation-new-permissions-accepted">;
  "installation.suspend": WebhookEventDefinition<"installation-suspend">;
  "installation.unsuspend": WebhookEventDefinition<"installation-unsuspend">;
  installation_repositories:
    | WebhookEventDefinition<"installation-repositories-added">
    | WebhookEventDefinition<"installation-repositories-removed">;
  "installation_repositories.added": WebhookEventDefinition<"installation-repositories-added">;
  "installation_repositories.removed": WebhookEventDefinition<"installation-repositories-removed">;
  installation_target: WebhookEventDefinition<"installation-target-renamed">;
  "installation_target.renamed": WebhookEventDefinition<"installation-target-renamed">;
  issue_comment:
    | WebhookEventDefinition<"issue-comment-created">
    | WebhookEventDefinition<"issue-comment-deleted">
    | WebhookEventDefinition<"issue-comment-edited">;
  "issue_comment.created": WebhookEventDefinition<"issue-comment-created">;
  "issue_comment.deleted": WebhookEventDefinition<"issue-comment-deleted">;
  "issue_comment.edited": WebhookEventDefinition<"issue-comment-edited">;
  issues:
    | WebhookEventDefinition<"issues-assigned">
    | WebhookEventDefinition<"issues-closed">
    | WebhookEventDefinition<"issues-deleted">
    | WebhookEventDefinition<"issues-demilestoned">
    | WebhookEventDefinition<"issues-edited">
    | WebhookEventDefinition<"issues-labeled">
    | WebhookEventDefinition<"issues-locked">
    | WebhookEventDefinition<"issues-milestoned">
    | WebhookEventDefinition<"issues-opened">
    | WebhookEventDefinition<"issues-pinned">
    | WebhookEventDefinition<"issues-reopened">
    | WebhookEventDefinition<"issues-transferred">
    | WebhookEventDefinition<"issues-unassigned">
    | WebhookEventDefinition<"issues-unlabeled">
    | WebhookEventDefinition<"issues-unlocked">
    | WebhookEventDefinition<"issues-unpinned">;
  "issues.assigned": WebhookEventDefinition<"issues-assigned">;
  "issues.closed": WebhookEventDefinition<"issues-closed">;
  "issues.deleted": WebhookEventDefinition<"issues-deleted">;
  "issues.demilestoned": WebhookEventDefinition<"issues-demilestoned">;
  "issues.edited": WebhookEventDefinition<"issues-edited">;
  "issues.labeled": WebhookEventDefinition<"issues-labeled">;
  "issues.locked": WebhookEventDefinition<"issues-locked">;
  "issues.milestoned": WebhookEventDefinition<"issues-milestoned">;
  "issues.opened": WebhookEventDefinition<"issues-opened">;
  "issues.pinned": WebhookEventDefinition<"issues-pinned">;
  "issues.reopened": WebhookEventDefinition<"issues-reopened">;
  "issues.transferred": WebhookEventDefinition<"issues-transferred">;
  "issues.unassigned": WebhookEventDefinition<"issues-unassigned">;
  "issues.unlabeled": WebhookEventDefinition<"issues-unlabeled">;
  "issues.unlocked": WebhookEventDefinition<"issues-unlocked">;
  "issues.unpinned": WebhookEventDefinition<"issues-unpinned">;
  label:
    | WebhookEventDefinition<"label-created">
    | WebhookEventDefinition<"label-deleted">
    | WebhookEventDefinition<"label-edited">;
  "label.created": WebhookEventDefinition<"label-created">;
  "label.deleted": WebhookEventDefinition<"label-deleted">;
  "label.edited": WebhookEventDefinition<"label-edited">;
  marketplace_purchase:
    | WebhookEventDefinition<"marketplace-purchase-cancelled">
    | WebhookEventDefinition<"marketplace-purchase-changed">
    | WebhookEventDefinition<"marketplace-purchase-pending-change">
    | WebhookEventDefinition<"marketplace-purchase-pending-change-cancelled">
    | WebhookEventDefinition<"marketplace-purchase-purchased">;
  "marketplace_purchase.cancelled": WebhookEventDefinition<"marketplace-purchase-cancelled">;
  "marketplace_purchase.changed": WebhookEventDefinition<"marketplace-purchase-changed">;
  "marketplace_purchase.pending_change": WebhookEventDefinition<"marketplace-purchase-pending-change">;
  "marketplace_purchase.pending_change_cancelled": WebhookEventDefinition<"marketplace-purchase-pending-change-cancelled">;
  "marketplace_purchase.purchased": WebhookEventDefinition<"marketplace-purchase-purchased">;
  member:
    | WebhookEventDefinition<"member-added">
    | WebhookEventDefinition<"member-edited">
    | WebhookEventDefinition<"member-removed">;
  "member.added": WebhookEventDefinition<"member-added">;
  "member.edited": WebhookEventDefinition<"member-edited">;
  "member.removed": WebhookEventDefinition<"member-removed">;
  membership:
    | WebhookEventDefinition<"membership-added">
    | WebhookEventDefinition<"membership-removed">;
  "membership.added": WebhookEventDefinition<"membership-added">;
  "membership.removed": WebhookEventDefinition<"membership-removed">;
  merge_group: WebhookEventDefinition<"merge-group-checks-requested">;
  "merge_group.checks_requested": WebhookEventDefinition<"merge-group-checks-requested">;
  meta: WebhookEventDefinition<"meta-deleted">;
  "meta.deleted": WebhookEventDefinition<"meta-deleted">;
  milestone:
    | WebhookEventDefinition<"milestone-closed">
    | WebhookEventDefinition<"milestone-created">
    | WebhookEventDefinition<"milestone-deleted">
    | WebhookEventDefinition<"milestone-edited">
    | WebhookEventDefinition<"milestone-opened">;
  "milestone.closed": WebhookEventDefinition<"milestone-closed">;
  "milestone.created": WebhookEventDefinition<"milestone-created">;
  "milestone.deleted": WebhookEventDefinition<"milestone-deleted">;
  "milestone.edited": WebhookEventDefinition<"milestone-edited">;
  "milestone.opened": WebhookEventDefinition<"milestone-opened">;
  org_block:
    | WebhookEventDefinition<"org-block-blocked">
    | WebhookEventDefinition<"org-block-unblocked">;
  "org_block.blocked": WebhookEventDefinition<"org-block-blocked">;
  "org_block.unblocked": WebhookEventDefinition<"org-block-unblocked">;
  organization:
    | WebhookEventDefinition<"organization-deleted">
    | WebhookEventDefinition<"organization-member-added">
    | WebhookEventDefinition<"organization-member-invited">
    | WebhookEventDefinition<"organization-member-removed">
    | WebhookEventDefinition<"organization-renamed">;
  "organization.deleted": WebhookEventDefinition<"organization-deleted">;
  "organization.member_added": WebhookEventDefinition<"organization-member-added">;
  "organization.member_invited": WebhookEventDefinition<"organization-member-invited">;
  "organization.member_removed": WebhookEventDefinition<"organization-member-removed">;
  "organization.renamed": WebhookEventDefinition<"organization-renamed">;
  package:
    | WebhookEventDefinition<"package-published">
    | WebhookEventDefinition<"package-updated">;
  "package.published": WebhookEventDefinition<"package-published">;
  "package.updated": WebhookEventDefinition<"package-updated">;
  project:
    | WebhookEventDefinition<"project-closed">
    | WebhookEventDefinition<"project-created">
    | WebhookEventDefinition<"project-deleted">
    | WebhookEventDefinition<"project-edited">
    | WebhookEventDefinition<"project-reopened">;
  "project.closed": WebhookEventDefinition<"project-closed">;
  "project.created": WebhookEventDefinition<"project-created">;
  "project.deleted": WebhookEventDefinition<"project-deleted">;
  "project.edited": WebhookEventDefinition<"project-edited">;
  "project.reopened": WebhookEventDefinition<"project-reopened">;
  project_card:
    | WebhookEventDefinition<"project-card-converted">
    | WebhookEventDefinition<"project-card-created">
    | WebhookEventDefinition<"project-card-deleted">
    | WebhookEventDefinition<"project-card-edited">
    | WebhookEventDefinition<"project-card-moved">;
  "project_card.converted": WebhookEventDefinition<"project-card-converted">;
  "project_card.created": WebhookEventDefinition<"project-card-created">;
  "project_card.deleted": WebhookEventDefinition<"project-card-deleted">;
  "project_card.edited": WebhookEventDefinition<"project-card-edited">;
  "project_card.moved": WebhookEventDefinition<"project-card-moved">;
  project_column:
    | WebhookEventDefinition<"project-column-created">
    | WebhookEventDefinition<"project-column-deleted">
    | WebhookEventDefinition<"project-column-edited">
    | WebhookEventDefinition<"project-column-moved">;
  "project_column.created": WebhookEventDefinition<"project-column-created">;
  "project_column.deleted": WebhookEventDefinition<"project-column-deleted">;
  "project_column.edited": WebhookEventDefinition<"project-column-edited">;
  "project_column.moved": WebhookEventDefinition<"project-column-moved">;
  projects_v2_item:
    | WebhookEventDefinition<"projects-v2-item-archived">
    | WebhookEventDefinition<"projects-v2-item-converted">
    | WebhookEventDefinition<"projects-v2-item-created">
    | WebhookEventDefinition<"projects-v2-item-deleted">
    | WebhookEventDefinition<"projects-v2-item-edited">
    | WebhookEventDefinition<"projects-v2-item-reordered">
    | WebhookEventDefinition<"projects-v2-item-restored">;
  "projects_v2_item.archived": WebhookEventDefinition<"projects-v2-item-archived">;
  "projects_v2_item.converted": WebhookEventDefinition<"projects-v2-item-converted">;
  "projects_v2_item.created": WebhookEventDefinition<"projects-v2-item-created">;
  "projects_v2_item.deleted": WebhookEventDefinition<"projects-v2-item-deleted">;
  "projects_v2_item.edited": WebhookEventDefinition<"projects-v2-item-edited">;
  "projects_v2_item.reordered": WebhookEventDefinition<"projects-v2-item-reordered">;
  "projects_v2_item.restored": WebhookEventDefinition<"projects-v2-item-restored">;
  pull_request:
    | WebhookEventDefinition<"pull-request-assigned">
    | WebhookEventDefinition<"pull-request-auto-merge-disabled">
    | WebhookEventDefinition<"pull-request-auto-merge-enabled">
    | WebhookEventDefinition<"pull-request-closed">
    | WebhookEventDefinition<"pull-request-converted-to-draft">
    | WebhookEventDefinition<"pull-request-demilestoned">
    | WebhookEventDefinition<"pull-request-dequeued">
    | WebhookEventDefinition<"pull-request-edited">
    | WebhookEventDefinition<"pull-request-labeled">
    | WebhookEventDefinition<"pull-request-locked">
    | WebhookEventDefinition<"pull-request-opened">
    | WebhookEventDefinition<"pull-request-ready-for-review">
    | WebhookEventDefinition<"pull-request-reopened">
    | WebhookEventDefinition<"pull-request-review-requested">
    | WebhookEventDefinition<"pull-request-review-request-removed">
    | WebhookEventDefinition<"pull-request-synchronize">
    | WebhookEventDefinition<"pull-request-unassigned">
    | WebhookEventDefinition<"pull-request-unlabeled">
    | WebhookEventDefinition<"pull-request-unlocked">;
  "pull_request.assigned": WebhookEventDefinition<"pull-request-assigned">;
  "pull_request.auto_merge_disabled": WebhookEventDefinition<"pull-request-auto-merge-disabled">;
  "pull_request.auto_merge_enabled": WebhookEventDefinition<"pull-request-auto-merge-enabled">;
  "pull_request.closed": WebhookEventDefinition<"pull-request-closed">;
  "pull_request.converted_to_draft": WebhookEventDefinition<"pull-request-converted-to-draft">;
  "pull_request.demilestoned": WebhookEventDefinition<"pull-request-demilestoned">;
  "pull_request.dequeued": WebhookEventDefinition<"pull-request-dequeued">;
  "pull_request.edited": WebhookEventDefinition<"pull-request-edited">;
  "pull_request.labeled": WebhookEventDefinition<"pull-request-labeled">;
  "pull_request.locked": WebhookEventDefinition<"pull-request-locked">;
  "pull_request.milestoned": WebhookEventDefinition<"pull-request-milestoned">;
  "pull_request.opened": WebhookEventDefinition<"pull-request-opened">;
  "pull_request.enqueued": WebhookEventDefinition<"pull-request-enqueued">;
  "pull_request.ready_for_review": WebhookEventDefinition<"pull-request-ready-for-review">;
  "pull_request.reopened": WebhookEventDefinition<"pull-request-reopened">;
  "pull_request.review_request_removed": WebhookEventDefinition<"pull-request-review-request-removed">;
  "pull_request.review_requested": WebhookEventDefinition<"pull-request-review-requested">;
  "pull_request.synchronize": WebhookEventDefinition<"pull-request-synchronize">;
  "pull_request.unassigned": WebhookEventDefinition<"pull-request-unassigned">;
  "pull_request.unlabeled": WebhookEventDefinition<"pull-request-unlabeled">;
  "pull_request.unlocked": WebhookEventDefinition<"pull-request-unlocked">;
  pull_request_review:
    | WebhookEventDefinition<"pull-request-review-dismissed">
    | WebhookEventDefinition<"pull-request-review-edited">
    | WebhookEventDefinition<"pull-request-review-submitted">;
  "pull_request_review.dismissed": WebhookEventDefinition<"pull-request-review-dismissed">;
  "pull_request_review.edited": WebhookEventDefinition<"pull-request-review-edited">;
  "pull_request_review.submitted": WebhookEventDefinition<"pull-request-review-submitted">;
  pull_request_review_comment:
    | WebhookEventDefinition<"pull-request-review-comment-created">
    | WebhookEventDefinition<"pull-request-review-comment-deleted">
    | WebhookEventDefinition<"pull-request-review-comment-edited">;
  "pull_request_review_comment.created": WebhookEventDefinition<"pull-request-review-comment-created">;
  "pull_request_review_comment.deleted": WebhookEventDefinition<"pull-request-review-comment-deleted">;
  "pull_request_review_comment.edited": WebhookEventDefinition<"pull-request-review-comment-edited">;
  pull_request_review_thread:
    | WebhookEventDefinition<"pull-request-review-thread-resolved">
    | WebhookEventDefinition<"pull-request-review-thread-unresolved">;
  "pull_request_review_thread.resolved": WebhookEventDefinition<"pull-request-review-thread-resolved">;
  "pull_request_review_thread.unresolved": WebhookEventDefinition<"pull-request-review-thread-unresolved">;
  registry_package:
    | WebhookEventDefinition<"registry-package-published">
    | WebhookEventDefinition<"registry-package-updated">;
  "registry_package.published": WebhookEventDefinition<"registry-package-published">;
  "registry_package.updated": WebhookEventDefinition<"registry-package-updated">;
  release:
    | WebhookEventDefinition<"release-created">
    | WebhookEventDefinition<"release-deleted">
    | WebhookEventDefinition<"release-edited">
    | WebhookEventDefinition<"release-prereleased">
    | WebhookEventDefinition<"release-published">
    | WebhookEventDefinition<"release-released">
    | WebhookEventDefinition<"release-unpublished">;
  "release.created": WebhookEventDefinition<"release-created">;
  "release.deleted": WebhookEventDefinition<"release-deleted">;
  "release.edited": WebhookEventDefinition<"release-edited">;
  "release.prereleased": WebhookEventDefinition<"release-prereleased">;
  "release.published": WebhookEventDefinition<"release-published">;
  "release.released": WebhookEventDefinition<"release-released">;
  "release.unpublished": WebhookEventDefinition<"release-unpublished">;
  repository:
    | WebhookEventDefinition<"repository-archived">
    | WebhookEventDefinition<"repository-created">
    | WebhookEventDefinition<"repository-deleted">
    | WebhookEventDefinition<"repository-edited">
    | WebhookEventDefinition<"repository-privatized">
    | WebhookEventDefinition<"repository-publicized">
    | WebhookEventDefinition<"repository-renamed">
    | WebhookEventDefinition<"repository-transferred">
    | WebhookEventDefinition<"repository-unarchived">;
  "repository.archived": WebhookEventDefinition<"repository-archived">;
  "repository.created": WebhookEventDefinition<"repository-created">;
  "repository.deleted": WebhookEventDefinition<"repository-deleted">;
  "repository.edited": WebhookEventDefinition<"repository-edited">;
  "repository.privatized": WebhookEventDefinition<"repository-privatized">;
  "repository.publicized": WebhookEventDefinition<"repository-publicized">;
  "repository.renamed": WebhookEventDefinition<"repository-renamed">;
  "repository.transferred": WebhookEventDefinition<"repository-transferred">;
  "repository.unarchived": WebhookEventDefinition<"repository-unarchived">;
  repository_vulnerability_alert:
    | WebhookEventDefinition<"repository-vulnerability-alert-create">
    | WebhookEventDefinition<"repository-vulnerability-alert-dismiss">
    | WebhookEventDefinition<"repository-vulnerability-alert-reopen">
    | WebhookEventDefinition<"repository-vulnerability-alert-resolve">;
  "repository_vulnerability_alert.create": WebhookEventDefinition<"repository-vulnerability-alert-create">;
  "repository_vulnerability_alert.dismiss": WebhookEventDefinition<"repository-vulnerability-alert-dismiss">;
  "repository_vulnerability_alert.reopen": WebhookEventDefinition<"repository-vulnerability-alert-reopen">;
  "repository_vulnerability_alert.resolve": WebhookEventDefinition<"repository-vulnerability-alert-resolve">;
  secret_scanning_alert:
    | WebhookEventDefinition<"secret-scanning-alert-created">
    | WebhookEventDefinition<"secret-scanning-alert-reopened">
    | WebhookEventDefinition<"secret-scanning-alert-resolved">;
  "secret_scanning_alert.created": WebhookEventDefinition<"secret-scanning-alert-created">;
  "secret_scanning_alert.reopened": WebhookEventDefinition<"secret-scanning-alert-reopened">;
  "secret_scanning_alert.resolved": WebhookEventDefinition<"secret-scanning-alert-resolved">;
  security_advisory:
    | WebhookEventDefinition<"security-advisory-published">
    | WebhookEventDefinition<"security-advisory-updated">
    | WebhookEventDefinition<"security-advisory-withdrawn">;
  "security_advisory.published": WebhookEventDefinition<"security-advisory-published">;
  "security_advisory.updated": WebhookEventDefinition<"security-advisory-updated">;
  "security_advisory.withdrawn": WebhookEventDefinition<"security-advisory-withdrawn">;
  sponsorship:
    | WebhookEventDefinition<"sponsorship-cancelled">
    | WebhookEventDefinition<"sponsorship-created">
    | WebhookEventDefinition<"sponsorship-edited">
    | WebhookEventDefinition<"sponsorship-pending-cancellation">
    | WebhookEventDefinition<"sponsorship-pending-tier-change">
    | WebhookEventDefinition<"sponsorship-tier-changed">;
  "sponsorship.cancelled": WebhookEventDefinition<"sponsorship-cancelled">;
  "sponsorship.created": WebhookEventDefinition<"sponsorship-created">;
  "sponsorship.edited": WebhookEventDefinition<"sponsorship-edited">;
  "sponsorship.pending_cancellation": WebhookEventDefinition<"sponsorship-pending-cancellation">;
  "sponsorship.pending_tier_change": WebhookEventDefinition<"sponsorship-pending-tier-change">;
  "sponsorship.tier_changed": WebhookEventDefinition<"sponsorship-tier-changed">;
  star:
    | WebhookEventDefinition<"star-created">
    | WebhookEventDefinition<"star-deleted">;
  "star.created": WebhookEventDefinition<"star-created">;
  "star.deleted": WebhookEventDefinition<"star-deleted">;
  team:
    | WebhookEventDefinition<"team-added-to-repository">
    | WebhookEventDefinition<"team-created">
    | WebhookEventDefinition<"team-deleted">
    | WebhookEventDefinition<"team-edited">
    | WebhookEventDefinition<"team-removed-from-repository">;
  "team.added_to_repository": WebhookEventDefinition<"team-added-to-repository">;
  "team.created": WebhookEventDefinition<"team-created">;
  "team.deleted": WebhookEventDefinition<"team-deleted">;
  "team.edited": WebhookEventDefinition<"team-edited">;
  "team.removed_from_repository": WebhookEventDefinition<"team-removed-from-repository">;
  watch: WebhookEventDefinition<"watch-started">;
  "watch.started": WebhookEventDefinition<"watch-started">;
  workflow_job:
    | WebhookEventDefinition<"workflow-job-completed">
    | WebhookEventDefinition<"workflow-job-in-progress">
    | WebhookEventDefinition<"workflow-job-queued">;
  "workflow_job.completed": WebhookEventDefinition<"workflow-job-completed">;
  "workflow_job.in_progress": WebhookEventDefinition<"workflow-job-in-progress">;
  "workflow_job.queued": WebhookEventDefinition<"workflow-job-queued">;
  workflow_run:
    | WebhookEventDefinition<"workflow-run-completed">
    | WebhookEventDefinition<"workflow-run-in-progress">
    | WebhookEventDefinition<"workflow-run-requested">;
  "workflow_run.completed": WebhookEventDefinition<"workflow-run-completed">;
  "workflow_run.in_progress": WebhookEventDefinition<"workflow-run-in-progress">;
  "workflow_run.requested": WebhookEventDefinition<"workflow-run-requested">;
};
