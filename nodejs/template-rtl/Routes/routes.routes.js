const express = require("express");
const route = express.Router();
const public_routes = require("./public.routes");

const index = "index";
const index_without_nav = "index-without-nav";
const index_error = "index-error";

route.use(function (req, res, next) {
  let url_replace_options = req.url.replace("?", "").replace("/", "");
  let routes = {};
  for (var key in public_routes) {
    routes[key] = public_routes[key].replace("/", "");
  }
  res.locals.routes = routes;
  res.locals.active_path = url_replace_options;
  next();
});

//   -------------- ( Auth ) ------------------

route.get(public_routes.login, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Login",
    layout: index_without_nav,
    page_path: "login",
  });
});

route.get(public_routes.register, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Register",
    layout: index_without_nav,
    page_path: "register",
  });
});

route.get(public_routes.forgot_password, (req, res, next) => {
  res.render(index_without_nav, {
    title: "Forgot password",
    layout: index_without_nav,
    page_path: "forgot-password",
  });
});

// --------------- ( Main ) ----------------------

route.get(public_routes.deals_dashboard, (req, res, next) => {
  res.render(index, {
    title: "Dashboard - CRMS admin template",
    page_path: "dashboard/deals-dashboard",
  });
});

route.get(public_routes.projects_dashboard, (req, res, next) => {
  res.render(index, {
    title: "Projects Dashboard - CRMS admin template",
    page_path: "dashboard/projects-dashboard",
  });
});

route.get(public_routes.leads_dashboard, (req, res, next) => {
  res.render(index, {
    title: "Leads dashboard - CRMS admin template",
    page_path: "dashboard/leads-dashboard",
  });
});

route.get(public_routes.tasks, (req, res, next) => {
  res.render(index, {
    title: "Tasks - CRMS admin template",
    page_path: "tasks/tasks",
  });
});

route.get(public_routes.contacts, (req, res, next) => {
  res.render(index, {
    title: "Contacts - CRMS admin template",
    page_path: "contacts/contacts",
  });
});

route.get(public_routes.companies, (req, res, next) => {
  res.render(index, {
    title: "Companies - CRMS admin template",
    page_path: "companies/companies",
  });
});

route.get(public_routes.leads, (req, res, next) => {
  res.render(index, {
    title: "Leads - CRMS admin template",
    page_path: "leads/leads",
  });
});

route.get(public_routes.leads_kanban_view, (req, res, next) => {
  res.render(index, {
    title: "Leads - CRMS admin template",
    page_path: "leads/leads-kanban-view",
  });
});

route.get(public_routes.deals, (req, res, next) => {
  res.render(index, {
    title: "Deals - CRMS admin template",
    page_path: "deals/deals",
  });
});

route.get(public_routes.deals_kanban_view, (req, res, next) => {
  res.render(index, {
    title: "Deals - CRMS admin template",
    page_path: "deals/deals-kanban-view",
  });
});

route.get(public_routes.projects, (req, res, next) => {
  res.render(index, {
    title: "Projects - CRMS admin template",
    page_path: "projects/projects",
  });
});

route.get(public_routes.projects_kanban_view, (req, res, next) => {
  res.render(index, {
    title: "Projects - CRMS admin template",
    page_path: "projects/projects-kanban-view",
  });
});

route.get(public_routes.reports, (req, res, next) => {
  res.render(index, {
    title: "Reports - CRMS admin template",
    page_path: "reports/reports",
  });
});

route.get(public_routes.activities, (req, res, next) => {
  res.render(index, {
    title: "Activities - CRMS admin template",
    page_path: "activities/activities",
  });
});

route.get(public_routes.blog, (req, res, next) => {
  res.render(index, {
    title: "Blog - CRMS admin template",
    page_path: "blog/blog",
  });
});

route.get(public_routes.blog_details, (req, res, next) => {
  res.render(index, {
    title: "Blog - CRMS admin template",
    page_path: "blog/blog-details",
  });
});

route.get(public_routes.pending_blog, (req, res, next) => {
  res.render(index, {
    title: "Pending blog - CRMS admin template",
    page_path: "blog/pending-blog",
  });
});

route.get(public_routes.add_blog, (req, res, next) => {
  res.render(index, {
    title: "Add blog - CRMS admin template",
    page_path: "blog/add-blog",
  });
});

route.get(public_routes.edit_blog, (req, res, next) => {
  res.render(index, {
    title: "Edit blog - CRMS admin template",
    page_path: "blog/edit-blog",
  });
});

route.get(public_routes.blog_Categories, (req, res, next) => {
  res.render(index, {
    title: "Blog Categories - CRMS admin template",
    page_path: "blog/blog-Categories",
  });
});

route.get(public_routes.invoices, (req, res, next) => {
  res.render(index, {
    title: "Invoices - CRMS admin template",
    page_path: "invoices/invoices",
  });
});

route.get(public_routes.invoices_paid, (req, res, next) => {
  res.render(index, {
    title: "Invoices  - CRMS admin template",
    page_path: "invoices/invoices-paid",
  });
});

route.get(public_routes.invoices_overdue, (req, res, next) => {
  res.render(index, {
    title: "Invoices  - CRMS admin template",
    page_path: "invoices/invoices-overdue",
  });
});

route.get(public_routes.invoices_draft, (req, res, next) => {
  res.render(index, {
    title: "Invoices  - CRMS admin template",
    page_path: "invoices/invoices-draft",
  });
});

route.get(public_routes.invoices_recurring, (req, res, next) => {
  res.render(index, {
    title: "Invoices - CRMS admin template",
    page_path: "invoices/invoices-recurring",
  });
});

route.get(public_routes.invoices_cancelled, (req, res, next) => {
  res.render(index, {
    title: "Invoices - CRMS admin template",
    page_path: "invoices/invoices-cancelled",
  });
});

route.get(public_routes.invoice_grid, (req, res, next) => {
  res.render(index, {
    title: "Invoice grid - CRMS admin template",
    page_path: "invoices/invoice-grid",
  });
});

route.get(public_routes.add_invoice, (req, res, next) => {
  res.render(index, {
    title: "Invoice - CRMS admin template",
    page_path: "invoices/add-invoice",
  });
});

route.get(public_routes.edit_invoice, (req, res, next) => {
  res.render(index, {
    title: "Invoice- CRMS admin template",
    page_path: "invoices/edit-invoice",
  });
});

route.get(public_routes.view_invoice, (req, res, next) => {
  res.render(index, {
    title: "Invoice - CRMS admin template",
    page_path: "invoices/view-invoice",
  });
});

route.get(public_routes.invoices_settings, (req, res, next) => {
  res.render(index, {
    title: "Invoices settings - CRMS admin template",
    page_path: "invoices/invoices-settings",
  });
});

route.get(public_routes.tax_settings, (req, res, next) => {
  res.render(index, {
    title: "Tax settings - CRMS admin template",
    page_path: "invoices/tax-settings",
  });
});

route.get(public_routes.bank_settings, (req, res, next) => {
  res.render(index, {
    title: "Bank settings - CRMS admin template",
    page_path: "invoices/bank-settings",
  });
});

route.get(public_routes.email, (req, res, next) => {
  res.render(index, {
    title: "Email - CRMS admin template",
    page_path: "email/email",
  });
});

route.get(public_routes.mail_view, (req, res, next) => {
  res.render(index, {
    title: "Email - CRMS admin template",
    page_path: "email/mail-view",
  });
});

route.get(public_routes.settings, (req, res, next) => {
  res.render(index, {
    title: "Settings - CRMS admin template",
    page_path: "settings/settings",
  });
});

route.get(public_routes.localization_details, (req, res, next) => {
  res.render(index, {
    title: "Settings - CRMS admin template",
    page_path: "settings/localization-details",
  });
});

route.get(public_routes.payment_settings, (req, res, next) => {
  res.render(index, {
    title: "Settings - CRMS admin template",
    page_path: "settings/payment-settings",
  });
});

route.get(public_routes.email_settings, (req, res, next) => {
  res.render(index, {
    title: "Settings - CRMS admin template",
    page_path: "settings/email-settings",
  });
});

route.get(public_routes.social_settings, (req, res, next) => {
  res.render(index, {
    title: "Settings - CRMS admin template",
    page_path: "settings/social-settings",
  });
});

route.get(public_routes.social_links, (req, res, next) => {
  res.render(index, {
    title: "Settings - CRMS admin template",
    page_path: "settings/social-links",
  });
});

route.get(public_routes.seo_settings, (req, res, next) => {
  res.render(index, {
    title: "Settings - CRMS admin template",
    page_path: "settings/seo-settings",
  });
});

route.get(public_routes.others_settings, (req, res, next) => {
  res.render(index, {
    title: "Settings - CRMS admin template",
    page_path: "settings/others-settings",
  });
});

// ---------------- ( Pages ) ---------------------


route.get(public_routes.pageNotFount, (req, res, next) => {
  res.render(index_error, {
    title: "Error 404",
    page_path: "error-404",
    layout: index_error,
  });
});
route.get(public_routes.serverError, (req, res, next) => {
  res.render(index_error, {
    title: "Error 500",
    page_path: "error-500",
    layout: index_error,
  });
});

route.get(public_routes.faq, (req, res, next) => {
  res.render(index, {
    title: "Faq - CRMS admin template",
    page_path: "page/faq",
  });
});

route.get(public_routes.terms, (req, res, next) => {
  res.render(index, {
    title: "Terms - CRMS admin template",
    page_path: "page/terms",
  });
});

route.get(public_routes.privacy_policy, (req, res, next) => {
  res.render(index, {
    title: "Privacy policy - CRMS admin template",
    page_path: "page/privacy-policy",
  });
});

route.get(public_routes.blank_page, (req, res, next) => {
  res.render(index, {
    title: "Blank page - CRMS admin template",
    page_path: "page/blank-page",
  });
});

// --------------- () ----------------

route.get(public_routes.components, (req, res, next) => {
  res.render(index, {
    title: "Components - CRMS admin template",
    page_path: "components/components",
  });
});

route.get(public_routes.sweetalerts, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/sweetalerts",
  });
});

route.get(public_routes.tooltip, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/tooltip",
  });
});

route.get(public_routes.popover, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/popover",
  });
});

route.get(public_routes.ribbon, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/ribbon",
  });
});

route.get(public_routes.clipboard, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/clipboard",
  });
});

route.get(public_routes.drag_drop, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/drag-drop",
  });
});

route.get(public_routes.rangeslider, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/rangeslider",
  });
});

route.get(public_routes.rating, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/rating",
  });
});

route.get(public_routes.toastr, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/toastr",
  });
});

route.get(public_routes.text_editor, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/text-editor",
  });
});

route.get(public_routes.counter, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/counter",
  });
});

route.get(public_routes.scrollbar, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/scrollbar",
  });
});

route.get(public_routes.spinner, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/spinner",
  });
});

route.get(public_routes.notification, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/notification",
  });
});

route.get(public_routes.lightbox, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/lightbox",
  });
});

route.get(public_routes.stickynote, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/stickynote",
  });
});

route.get(public_routes.timeline, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/timeline",
  });
});

route.get(public_routes.horizontal_timeline, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/horizontal-timeline",
  });
});

route.get(public_routes.form_wizard, (req, res, next) => {
  res.render(index, {
    title: "Elements - CRMS admin template",
    page_path: "elements/form-wizard",
  });
});

// ---------------- ( charts ) --------------------------

route.get(public_routes.chart_apex, (req, res, next) => {
  res.render(index, {
    title: "Charts - CRMS admin template",
    page_path: "charts/chart-apex",
  });
});

route.get(public_routes.chart_js, (req, res, next) => {
  res.render(index, {
    title: "Charts - CRMS admin template",
    page_path: "charts/chart-js",
  });
});

route.get(public_routes.chart_morris, (req, res, next) => {
  res.render(index, {
    title: "Charts - CRMS admin template",
    page_path: "charts/chart-morris",
  });
});

route.get(public_routes.chart_flot, (req, res, next) => {
  res.render(index, {
    title: "Charts - CRMS admin template",
    page_path: "charts/chart-flot",
  });
});

route.get(public_routes.chart_peity, (req, res, next) => {
  res.render(index, {
    title: "Charts - CRMS admin template",
    page_path: "charts/chart-peity",
  });
});

route.get(public_routes.chart_c3, (req, res, next) => {
  res.render(index, {
    title: "Charts - CRMS admin template",
    page_path: "charts/chart-c3",
  });
});

// -------------- ( Icons ) --------------

route.get(public_routes.icon_fontawesome, (req, res, next) => {
  res.render(index, {
    title: "Icons - CRMS admin template",
    page_path: "icons/icon-fontawesome",
  });
});

route.get(public_routes.icon_feather, (req, res, next) => {
  res.render(index, {
    title: "Icons - CRMS admin template",
    page_path: "icons/icon-feather",
  });
});

route.get(public_routes.icon_ionic, (req, res, next) => {
  res.render(index, {
    title: "Icons - CRMS admin template",
    page_path: "icons/icon-ionic",
  });
});

route.get(public_routes.icon_material, (req, res, next) => {
  res.render(index, {
    title: "Icons - CRMS admin template",
    page_path: "icons/icon-material",
  });
});

route.get(public_routes.icon_pe7, (req, res, next) => {
  res.render(index, {
    title: "Icons - CRMS admin template",
    page_path: "icons/icon-pe7",
  });
});

route.get(public_routes.icon_simpleline, (req, res, next) => {
  res.render(index, {
    title: "Icons - CRMS admin template",
    page_path: "icons/icon-simpleline",
  });
});

route.get(public_routes.icon_themify, (req, res, next) => {
  res.render(index, {
    title: "Icons - CRMS admin template",
    page_path: "icons/icon-themify",
  });
});

route.get(public_routes.icon_weather, (req, res, next) => {
  res.render(index, {
    title: "Icons - CRMS admin template",
    page_path: "icons/icon-weather",
  });
});

route.get(public_routes.icon_typicon, (req, res, next) => {
  res.render(index, {
    title: "Icons - CRMS admin template",
    page_path: "icons/icon-typicon",
  });
});

route.get(public_routes.icon_flag, (req, res, next) => {
  res.render(index, {
    title: "Icons - CRMS admin template",
    page_path: "icons/icon-flag",
  });
});

// ------------- ( Forms ) ----------------

route.get(public_routes.form_basic_inputs, (req, res, next) => {
  res.render(index, {
    title: "Forms - CRMS admin template",
    page_path: "forms/form-basic-inputs",
  });
});

route.get(public_routes.form_input_groups, (req, res, next) => {
  res.render(index, {
    title: "Forms - CRMS admin template",
    page_path: "forms/form-input-groups",
  });
});

route.get(public_routes.form_horizontal, (req, res, next) => {
  res.render(index, {
    title: "Forms - CRMS admin template",
    page_path: "forms/form-horizontal",
  });
});

route.get(public_routes.form_vertical, (req, res, next) => {
  res.render(index, {
    title: "Forms - CRMS admin template",
    page_path: "forms/form-vertical",
  });
});

route.get(public_routes.form_mask, (req, res, next) => {
  res.render(index, {
    title: "Forms - CRMS admin template",
    page_path: "forms/form-mask",
  });
});

route.get(public_routes.form_validation, (req, res, next) => {
  res.render(index, {
    title: "Forms - CRMS admin template",
    page_path: "forms/form-validation",
  });
});

// -------------- ( Tables ) ----------------------

route.get(public_routes.tables_basic, (req, res, next) => {
  res.render(index, {
    title: "Tables - CRMS admin template",
    page_path: "tables/tables-basic",
  });
});

route.get(public_routes.data_tables, (req, res, next) => {
  res.render(index, {
    title: "Tables - CRMS admin template",
    page_path: "tables/data-tables",
  });
});

route.get(public_routes.profile, (req, res, next) => {
  res.render(index, {
    title: "Employee Profile - CRMS admin template",
    page_path: "profile/profile",
  });
});


route.get("/", function (req, res) {
  res.redirect(public_routes.login);
});
route.get("*", function (req, res) {
  res.redirect(public_routes.pageNotFount);
});


module.exports = route