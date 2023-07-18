import {createRouter, createWebHistory} from 'vue-router';
import Index from '../views/dashboard/dashindex/Index'
import Activities from '../views/main/activities'
import Addinvoice from '../views/main/invoices/addinvoice/addinvoice'
import Banksetting from '../views/main/invoices/setting/bank/bank'
import BlankPage from '../views/page/page/blankpage'
import Companies from '../views/main/companies'
import Cardcomponent from '../views/uiinterface/cardcomponent/component'
import Contacts from '../views/main/contact'
import Datatable from '../views/uiinterface/table/datatable'
import Deals from '../views/main/deals'
import Dealskanban from '../views/main/dealkanban/dealskanban'
import Editinvoice from '../views/main/invoices/editinvoice/editinvoice'
import Email from '../views/main/email/email'
import Emailsetting from '../views/main/setting/email/email'
import Error404 from '../views/page/error/error404'
import Error500 from '../views/page/error/error500'
import Faq from '../views/page/page/faq'
import Basicinput from '../views/uiinterface/form/basic/basicindex'
import Horizontalform from '../views/uiinterface/form/horizontal/horizontalindex'
import Inputgroup from '../views/uiinterface/form/inputgroup/inputgroupindex'
import Mask from '../views/uiinterface/form/mask/maskindex'
import Validation from '../views/uiinterface/form/validation/validationindex'
import Vertical from '../views/uiinterface/form/vertical/verticalindex'
import Gridindex from '../views/main/invoices/invoicegrid/gridindex'
import Viewdetail from '../views/main/invoices/detail/invoicedetail'
import Terms from '../views/page/page/terms'
import Taxsettings from '../views/main/invoices/setting/tax/tax'
import Task from '../views/main/task'
import Basictable from '../views/uiinterface/table/basic/basictable'
import Socialsetting from '../views/main/setting/social/social'
import Sociallinks from '../views/main/setting/sociallink'
import General from '../views/main/setting/general/general'
import Seo from '../views/main/setting/seo'
import Report from '../views/main/report/report'
import Register from '../views/authentication/register'
import Projectkanbanview from '../views/main/project/projectkanban'
import Projectdash from '../views/dashboard/projectdash/index'
import Project from '../views/main/project/project'
import Profilecon from '../views/profile/profile'
import Privacypolicy from '../views/page/page/privacypolicy'
import Payment from '../views/main/setting/payment/payment'
import Others from '../views/main/setting/others/others'
import Mail from '../views/main/setting/mailview/mail'
import Login from '../views/authentication/login'
import Localization from '../views/main/setting/localization/index'
import Leadkanban from '../views/main/leads/leadkanban'
import Leadsdash from '../views/dashboard/leaddash/index'
import Leads from '../views/main/leads/leads'
import Invoicesetting from '../views/main/invoices/setting/general/general'
import InvoiceRecurring from '../views/main/invoices/invoicelist/recurring/index'
import InvoicePaid from '../views/main/invoices/invoicelist/paid/index'
import InvoiceOverdue from '../views/main/invoices/invoicelist/overdue/index'
import InvoiceDraft from '../views/main/invoices/invoicelist/draft/index'
import InvoiceCancelled from '../views/main/invoices/invoicelist/cancelled/index'
import Invoiceslist from '../views/main/invoices/invoicelist/invoices/index'
const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/activities',
      name: 'activities',
      component: Activities
    },
    {
      path: '/add-invoice',
      name: 'add-invoice',
      component: Addinvoice
    },
    {
      path: '/bank-settings',
      name: 'bank-settings',
      component: Banksetting
    },
    {
      path: '/blank-page',
      name: 'blank-page',
      component: BlankPage
    },
    {
      path: '/blank-page',
      name: 'blank-page',
      component: BlankPage
    },
    {
      path: '/companies',
      name: 'companies',
      component: Companies
    },
    {
      path: '/components',
      name: 'components',
      component: Cardcomponent
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/data-tables',
      name: 'data-tables',
      component: Datatable
    },
    {
      path: '/deals',
      name: 'deals',
      component: Deals
    },
    {
      path: '/deals-kanban-view',
      name: 'deals-kanban-view',
      component: Dealskanban
    },
    {
      path: '/edit-invoice',
      name: 'edit-invoice',
      component: Editinvoice
    },
    {
      path: '/email',
      name: 'email',
      component: Email
    },
    {
      path: '/email-settings',
      name: 'email-settings',
      component: Emailsetting
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: Error404
    },
    {
      path: '/error-500',
      name: 'error-500',
      component: Error500
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq
    },
    {
      path: '/form-basic-inputs',
      name: 'form-basic-inputs',
      component: Basicinput
    },
    {
      path: '/form-horizontal',
      name: 'form-horizontal',
      component: Horizontalform
    },
    {
      path: '/form-input-groups',
      name: 'form-input-groups',
      component: Inputgroup
    },
    {
      path: '/form-mask',
      name: 'form-mask',
      component: Mask
    },
    {
      path: '/form-validation',
      name: 'form-validation',
      component: Validation
    },
    {
      path: '/form-vertical',
      name: 'form-vertical',
      component: Vertical
    },
    {
      path: '/invoice-grid',
      name: 'invoice-grid',
      component: Gridindex
    },
    {
      path: '/view-invoice',
      name: 'view-invoice',
      component: Viewdetail
    },
    {
      path: '/terms',
      name: 'terms',
      component: Terms
    },
    {
      path: '/tax-settings',
      name: 'tax-settings',
      component: Taxsettings
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Task
    },
    {
      path: '/tables-basic',
      name: 'tables-basic',
      component: Basictable
    },
    {
      path: '/social-settings',
      name: 'social-settings',
      component: Socialsetting
    },
    {
      path: '/social-links',
      name: 'social-links',
      component: Sociallinks
    },
    {
      path: '/settings',
      name: 'settings',
      component: General
    },
    {
      path: '/seo-settings',
      name: 'seo-settings',
      component: Seo
    },
    {
      path: '/reports',
      name: 'reports',
      component: Report
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/project-kanban-view',
      name: 'project-kanban-view',
      component: Projectkanbanview
    },
    {
      path: '/projects-dashboard',
      name: 'projects-dashboard',
      component: Projectdash
    },
    {
      path: '/projects',
      name: 'projects',
      component: Project
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profilecon
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: Privacypolicy
    },
    {
      path: '/payment-settings',
      name: 'payment-settings',
      component: Payment
    },
    {
      path: '/others-settings',
      name: 'others-settings',
      component: Others
    },
    {
      path: '/mail-view',
      name: 'mail-view',
      component: Mail
    },
    {
      path: '/localization-details',
      name: 'localization-details',
      component: Localization
    },
    {
      path: '/leads-kanban-view',
      name: 'leads-kanban-view',
      component: Leadkanban
    },
    {
      path: '/leads-dashboard',
      name: 'leads-dashboard',
      component: Leadsdash
    },
    {
      path: '/leads',
      name: 'leads',
      component: Leads
    },
    {
      path: '/invoices-settings',
      name: 'invoices-settings',
      component: Invoicesetting
    },
    {
      path: '/invoices-recurring',
      name: 'invoices-recurring',
      component: InvoiceRecurring
    },
    {
      path: '/invoices-paid',
      name: 'invoices-paid',
      component: InvoicePaid
    },
    {
      path: '/invoices-overdue',
      name: 'invoices-overdue',
      component: InvoiceOverdue
    },
    {
      path: '/invoices-draft',
      name: 'invoices-draft',
      component: InvoiceDraft
    },
    {
      path: '/invoices-cancelled',
      name: 'invoices-cancelled',
      component: InvoiceCancelled
    },
    {
      path: '/invoices',
      name: 'invoices',
      component: Invoiceslist
    },


  ];
    export const router = createRouter({
    history: createWebHistory('template-rtl'),
    linkActiveClass: 'active',
    routes
});