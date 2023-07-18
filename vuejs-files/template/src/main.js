// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { createApp } from 'vue';
import { router } from './router';
import { BarChart } from 'vue-morris'
import { LineChart } from 'vue-morris'
import App from "./App.vue";
import LayoutHeader from './views/Header'
import LayoutNavbar from './views/Navbar'
import LayoutNavComponent from './views/uiinterface/cardcomponent/sidebar'
import LayoutMailSidebar from './views/main/setting/mailview/sidebar'

/*******Globally declared components********/
import Flag from './components/flag'
import Headerglobal from './components/header'
import Logo from './components/logo'
import Message from './components/message'
import Notification from './components/notification'
import Modal from './components/modal'
import Themesetting from './components/themesetting'
/*******Breadcrumb *********/
import Activitybreadcrumb from './views/breadcrumb/activities'
import Companiesbreadcrumb from './views/breadcrumb/companies'
import Componentbreadcrumb from './views/breadcrumb/component'
import Contactbreadcrumb from './views/breadcrumb/contact'
import Dealsbreadcrumb from './views/breadcrumb/deals'
import DealKanbanBreadcrumb from './views/breadcrumb/dealskanban'
import EmailBreadcrumb from './views/breadcrumb/email'
import Emailsetting from './views/breadcrumb/emailsetting'
import Faq from './views/breadcrumb/faq'
import Basicinput from './views/breadcrumb/basicinput'
import Horizontal from './views/breadcrumb/horizontal'
import Inputgroup from './views/breadcrumb/inputgroup'
import Maskbreadcrumb from './views/breadcrumb/mask'
import Validation from './views/breadcrumb/validation'
import Vertical from './views/breadcrumb/vertical'
import Dashindex from './views/breadcrumb/dashindex'
import Invoicegrid from './views/breadcrumb/invoicegrid'
import Terms from './views/breadcrumb/terms'
import Taxsetting from './views/breadcrumb/taxsetting'
import Taskbreadcrumb from './views/breadcrumb/task'
import Basictable from './views/breadcrumb/basictable'
import Social from './views/breadcrumb/social'
import Sociallink from './views/breadcrumb/sociallink'
import Settings from './views/breadcrumb/settings'
import Seosetting from './views/breadcrumb/seo'
import Reportbreadcrumb from './views/breadcrumb/report'
import Projectkanbanbreadcrumb from './views/breadcrumb/projectkanban'
import Projectdash from './views/breadcrumb/projectdash'
import Projects from './views/breadcrumb/projects'
import Profile from './views/breadcrumb/profile'
import Privacy from './views/breadcrumb/privacy'
import Payment from './views/breadcrumb/payment'
import Othersetting from './views/breadcrumb/othersetting'
import MailviewBreadcrumb from './views/breadcrumb/mailview'
import Localization from './views/breadcrumb/localization'
import Leadkanban from './views/breadcrumb/leadkanban'
import Leaddash from './views/breadcrumb/leaddash'
import LeadsBreadcrumb from './views/breadcrumb/leads'
import GeneralBreadcrumb from './views/breadcrumb/general'
import RecurringBreadcrumb from './views/breadcrumb/recurring'
/*******Pageheader ********/
import ActivityPageHeader from './views/pageheader/activities'
import AddinvoicePageHeader from './views/pageheader/addinvoice'
import BanksettingPageHeader from './views/pageheader/banksetting'
import BlankpagePageHeader from './views/pageheader/blankpage'
import CompaniesPageHeader from './views/pageheader/companies'
import ContactPageHeader from './views/pageheader/contact'
import DatatablePageHeader from './views/pageheader/datatable'
import DealsPageHeader from './views/pageheader/deals'
import DealkanbanPageHeader from './views/pageheader/dealskanban'
import EmailPageHeader from './views/pageheader/email'
import Taskheader from './views/pageheader/task'
import ReportPageHeader from './views/pageheader/report'
import Projectkanbanheader from './views/pageheader/projectkanban'
import Projectsheader from './views/pageheader/projects'
import Mailviewheader from './views/pageheader/mailview'
import Leadkanbanheader from './views/pageheader/leadkanban'
import Leadsheader from './views/pageheader/leads'
/********All page component *******/
import Banksidebar from './views/main/invoices/setting/sidebar'
import Emailsidebar from './views/main/email/email'
import Settingsidebar from './views/main/setting/settingsidebar'
import Cardcomponent1 from './views/uiinterface/cardcomponent/component1'
import Cardcomponent2 from './views/uiinterface/cardcomponent/component2'
import Cardcomponent3 from './views/uiinterface/cardcomponent/component3'
import Cardcomponent4 from './views/uiinterface/cardcomponent/component4'
import Cardcomponent5 from './views/uiinterface/cardcomponent/component5'
import Cardcomponent6 from './views/uiinterface/cardcomponent/component6'
import Addinvoicecontent from './views/main/invoices/addinvoice/addinvoicecontent'
import Addmaininvoice from './views/main/invoices/addinvoice/addmaininvoice'
import Bankcontent from './views/main/invoices/setting/bank/bankcontent'
import Kanbancontent from './views/main/dealkanban/kanbancontent'
import Kanbancontent1 from './views/main/dealkanban/kanbancontent1'
import Kanbancontent2 from './views/main/dealkanban/kanbancontent2'
import Kanbancontent3 from './views/main/dealkanban/kanbancontent3'
import Editinvoicecontent from './views/main/invoices/editinvoice/editinvoicecontent'
import Editinvoicecontent1 from './views/main/invoices/editinvoice/editinvoicecontent1'
import Editinvoicecontent2 from './views/main/invoices/editinvoice/editinvoicecontent2'
import Editinvoicecontent3 from './views/main/invoices/editinvoice/editinvoicecontent3'
import Emailcontent from './views/main/email/emailcontent'
import Settingemailcontent from './views/main/setting/email/emailcontent'
import Settingemailcontent1 from './views/main/setting/email/emailcontent1'
import Basiccontentview from './views/uiinterface/form/basic/basiccontent'
import Basiccontentview1 from './views/uiinterface/form/basic/basiccontent1'
import Horizontalcontent from './views/uiinterface/form/horizontal/horizontalcontent'
import Horizontalcontent1 from './views/uiinterface/form/horizontal/horizontalcontent1'
import Horizontalcontent2 from './views/uiinterface/form/horizontal/horizontalcontent2'
import Inputgroupcontent from './views/uiinterface/form/inputgroup/inputgroupcontent'
import Inputgroupcontent1 from './views/uiinterface/form/inputgroup/inputgroupcontent1'
import Inputgroupcontent2 from './views/uiinterface/form/inputgroup/inputgroupcontent2'
import Inputgroupcontent3 from './views/uiinterface/form/inputgroup/inputgroupcontent3'
import Inputgroupcontent4 from './views/uiinterface/form/inputgroup/inputgroupcontent4'
import Validationcontent from './views/uiinterface/form/validation/validationcontent'
import Validationcontent1 from './views//uiinterface/form/validation/validationcontent1'
import Validationcontent2 from './views/uiinterface/form/validation/validationcontent2'
import Validationcontent3 from './views/uiinterface/form/validation/validationcontent3'
import Validationcontent4 from './views/uiinterface/form/validation/validationcontent4'
import Maskcontent from './views/uiinterface/form/mask/maskcontent'
import Verticalcontent from './views/uiinterface/form/vertical/verticalcontent'
import Verticalcontent1 from './views/uiinterface/form/vertical/verticalcontent1'
import Verticalcontent2 from './views/uiinterface/form/vertical/verticalcontent2'
import Verticalcontent3 from './views/uiinterface/form/vertical/verticalcontent3'
import Dashgraph from './views/dashboard/dashindex/dashgraph'
import Dashgraph1 from './views/dashboard/dashindex/dashgraph1'
import Dashgraph2 from './views/dashboard/dashindex/dashgraph2'
import Dashgraph3 from './views/dashboard/dashindex/dashgraph3'
import Invoicefilter from './views/main/invoices/invoicegrid/gridindex'
import Detail1 from './views/main/invoices/detail/detail1'
import Invoicetable from './views/main/invoices/detail/table.vue'
import Detail2 from './views/main/invoices/detail/detail2.vue'
import Taxcontent from './views/main/invoices/setting/tax/taxcontent'
import Basiccontenttable4 from './views/uiinterface/table/basic/basiccontenttable'
import Basiccont from './views/uiinterface/table/basic/basiccontenttable1'
import Basiccontenttable2 from './views/uiinterface/table/basic/basiccontenttable2'
import Basiccontenttable3 from './views/uiinterface/table/basic/basiccontenttable3'
import Basiccontenttable10 from './views/uiinterface/table/basic/basiccontenttable4'
import Basiccontenttable5 from './views/uiinterface/table/basic/basiccontenttable5'
import Socialcontent from './views/main/setting/social/socialcontent'
import Socialcontent1 from './views/main/setting/social/socialcontent1'
import Socialcontent2 from './views/main/setting/social/socialcontent2'
import Generaladdress from './views/main/setting/general/generaladdress'
import Generalbasic from './views/main/setting/general/generalbasic'
import Reportsidebar from './views/main/report/sidebar'
import Personal from './views/main/report/personal'
import Shared from './views/main/report/shared'
import All from './views/main/report/all'
import Task from './views/main/report/task'
import Contact from './views/main/report/contact'
import Company from './views/main/report/company'
import Lead from './views/main/report/lead'
import Deal from './views/main/report/deal'
import Project from './views/main/report/project'
import Other from './views/main/report/other'
import Projectgraph from './views/dashboard/projectdash/projectgraph'
import Projectgraph1 from './views/dashboard/projectdash/projectgraph1'
import Projectgraph2 from './views/dashboard/projectdash/projectgraph2'
import Projectgraph3 from './views/dashboard/projectdash/projectgraph3'
import Profilecontent from './views/profile/profilecontent'
import Profilecontent1 from './views/profile/profilecontent1'
import Profilecontent2 from './views/profile/profilecontent2'
import Profilecontent3 from './views/profile/profilecontent3'
import Paymentcontent from './views/main/setting/payment/paymentcontent'
import Paymentcontent1 from './views/main/setting/payment/paymentcontent1'
import Othercontent from './views/main/setting/others/othercontent'
import Othercontent1 from './views/main/setting/others/othercontent1'
import Othercontent2 from './views/main/setting/others/othercontent2'
import Mailheader from './views/main/setting/mailview/mailheader'
import Mailinner from './views/main/setting/mailview/mailinner'
import Mailattach from './views/main/setting/mailview/mailattach'
import Mailfooter from './views/main/setting/mailview/mailfooter'
import Localcontent from './views/main/setting/localization/localcontent'
import Leadgraph from './views/dashboard/leaddash/leadgraph'
import Leadgraph1 from './views/dashboard/leaddash/leadgraph1'
import Leadgraph2 from './views/dashboard/leaddash/leadgraph2'
import Leadgraph3 from './views/dashboard/leaddash/leadgraph3'
import Generalcontent from './views/main/invoices/setting/general/generalcontent'
import Recurringfilter from './views/main/invoices/invoicelist/filter'
import Invoicecard from './views/main/invoices/invoicelist/invoicecard'
import Invoicewidget from './views/main/invoices/invoicelist/invoicewidget'

import loader from './views/loader'
import './assets/css/bootstrap.min.css'
import './assets/css/bootstrap.bundle.min.js'
import './assets/css/feather.css'
import './assets/css/line-awesome.min.css'
import './assets/css/fontawesome/css/fontawesome.min.css'
import './assets/css/fontawesome/css/all.min.css'
import './assets/css/bootstrap-tagsinput.css'
import './assets/css/font-awesome.min.css'

import jquery from 'jquery'; 
window.$ = jquery
require('./assets/css/select2.min.css');
require('./assets/css/select2.min.js');
require('./assets/css/bootstrap-datetimepicker.min.css');
require('./assets/css/bootstrap-datetimepicker.min.js');
import './assets/css/style.css'
import './assets/css/bootstrap4.min.css'
import './assets/css/dataTables.bootstrap4.min.css'
import './assets/css/jquery.dataTables.min.js'
import './assets/css/dataTables.bootstrap4.min.js'
import './assets/css/theme-settings.css'
import './assets/css/theme-settings.js'
import './assets/css/linebar.min.js'
import VueSelect from 'vue3-select2-component'
import DatePicker from 'vue3-datepicker'
import Raphael from 'raphael/raphael'
global.Raphael = Raphael
const app = createApp(App)
app.component('layout-header', LayoutHeader);
app.component('layout-navbar', LayoutNavbar);
app.component('layout-navcomponent', LayoutNavComponent);
app.component('layout-mailsidebar', LayoutMailSidebar);

app.component('flag', Flag);
app.component('headerglobal', Headerglobal);
app.component('logo', Logo);
app.component('message', Message);
app.component('notification', Notification);
app.component('modal', Modal);
app.component('themesetting', Themesetting);
app.component('banksidebar', Banksidebar);
app.component('loader', loader);
app.component('vue-select', VueSelect);
app.component('datepicker', DatePicker);
/************Breadcrumb  *************/
app.component('activitybreadcrumb', Activitybreadcrumb);
app.component('companiesbreadcrumb', Companiesbreadcrumb);
app.component('componentbreacrumb', Componentbreadcrumb);
app.component('contactbreacrumb', Contactbreadcrumb);
app.component('dealsbreadcrumb', Dealsbreadcrumb);
app.component('dealKanbanbreadcrumb', DealKanbanBreadcrumb);
app.component('emailbreadcrumb', EmailBreadcrumb);
app.component('emailsetting', Emailsetting);
app.component('faq', Faq);
app.component('basicinput', Basicinput);
app.component('horizontal', Horizontal);
app.component('inputgroup', Inputgroup);
app.component('maskbreadcrumb', Maskbreadcrumb);
app.component('validation', Validation);
app.component('vertical', Vertical);
app.component('dashindex', Dashindex);
app.component('invoicegrid', Invoicegrid);
app.component('terms', Terms);
app.component('taxsetting', Taxsetting);
app.component('task', Taskbreadcrumb);
app.component('basictable', Basictable);
app.component('social', Social);
app.component('sociallink', Sociallink);
app.component('generalsetting', Settings);
app.component('seosetting', Seosetting);
app.component('reportbreadcrumb', Reportbreadcrumb);
app.component('projectkanbanbreadcrumb', Projectkanbanbreadcrumb);
app.component('projectdashbreadcrumb', Projectdash);
app.component('projects', Projects);
app.component('profilebreadcrumb', Profile);
app.component('privacy', Privacy);
app.component('paymentbreadcrumb', Payment);
app.component('othersetting', Othersetting);
app.component('mailviewbreadcrumb', MailviewBreadcrumb);
app.component('localizationbreadcrumb', Localization);
app.component('leadkanban', Leadkanban);
app.component('leaddashheader', Leaddash);
app.component('leadbreadcrumb', LeadsBreadcrumb);
app.component('generalbreadcrumb', GeneralBreadcrumb);
app.component('recurringbreadcrumb', RecurringBreadcrumb);

/************Pageheader ************/
app.component('activitypageheader', ActivityPageHeader);
app.component('addinvoicepageheader', AddinvoicePageHeader);
app.component('banksettingpageheader', BanksettingPageHeader);
app.component('blankpageheader', BlankpagePageHeader);
app.component('companiespageheader', CompaniesPageHeader);
app.component('contactpageheader', ContactPageHeader);
app.component('datatablepageheader', DatatablePageHeader);
app.component('dealspageheader', DealsPageHeader);
app.component('dealkanbanpageheader', DealkanbanPageHeader);
app.component('emailpageheader', EmailPageHeader);
app.component('taskheader', Taskheader);
app.component('reportpageheader', ReportPageHeader);
app.component('projectkanbanheader', Projectkanbanheader);
app.component('projectheader', Projectsheader);
app.component('mailviewheader', Mailviewheader);
app.component('leadkanbanheader', Leadkanbanheader);
app.component('leadheader', Leadsheader);

/************All Component **********/
app.component('cardcomponent1', Cardcomponent1);
app.component('cardcomponent2', Cardcomponent2);
app.component('cardcomponent3', Cardcomponent3);
app.component('cardcomponent4', Cardcomponent4);
app.component('cardcomponent5', Cardcomponent5);
app.component('cardcomponent6', Cardcomponent6);
app.component('emailsidebar', Emailsidebar);
app.component('settingsidebar', Settingsidebar);
app.component('addinvoicecontent', Addinvoicecontent);
app.component('addmaininvoice', Addmaininvoice);
app.component('bankcontent', Bankcontent);
app.component('kanbancontent', Kanbancontent);
app.component('kanbancontent1', Kanbancontent1);
app.component('kanbancontent2', Kanbancontent2);
app.component('kanbancontent3', Kanbancontent3);
app.component('editinvoicecontent', Editinvoicecontent);
app.component('editinvoicecontent1', Editinvoicecontent1);
app.component('editinvoicecontent2', Editinvoicecontent2);
app.component('editinvoicecontent3', Editinvoicecontent3);
app.component('emailcontent', Emailcontent);
app.component('settingemailcontent', Settingemailcontent);
app.component('settingemailcontent1', Settingemailcontent1);
app.component('basiccontent', Basiccontentview);
app.component('basiccontent1', Basiccontentview1);
app.component('horizontalcontent', Horizontalcontent);
app.component('horizontalcontent1', Horizontalcontent1);
app.component('horizontalcontent2', Horizontalcontent2);
app.component('inputgroupcontent', Inputgroupcontent);
app.component('inputgroupcontent1', Inputgroupcontent1);
app.component('inputgroupcontent2', Inputgroupcontent2);
app.component('inputgroupcontent3', Inputgroupcontent3);
app.component('inputgroupcontent4', Inputgroupcontent4);
app.component('maskcontent', Maskcontent);
app.component('validationcontent', Validationcontent);
app.component('validationcontent1', Validationcontent1);
app.component('validationcontent2', Validationcontent2);
app.component('validationcontent3', Validationcontent3);
app.component('validationcontent4', Validationcontent4);
app.component('verticalcontent', Verticalcontent);
app.component('verticalcontent1', Verticalcontent1);
app.component('verticalcontent2', Verticalcontent2);
app.component('verticalcontent3', Verticalcontent3);
app.component('dashgraph', Dashgraph);
app.component('dashgraph1', Dashgraph1);
app.component('dashgraph2', Dashgraph2);
app.component('dashgraph3', Dashgraph3);
app.component('invoicefilter', Invoicefilter);
app.component('detail1', Detail1);
app.component('invoicetable', Invoicetable);
app.component('detail2', Detail2);
app.component('taxcontent', Taxcontent);
app.component('basiccontenttable4', Basiccontenttable4);
app.component('basiccont', Basiccont);
app.component('basiccontenttable2', Basiccontenttable2);
app.component('basiccontenttable3', Basiccontenttable3);
app.component('basiccontenttable10', Basiccontenttable10);
app.component('basiccontenttable5', Basiccontenttable5);
app.component('socialcontent', Socialcontent);
app.component('socialcontent1', Socialcontent1);
app.component('socialcontent2', Socialcontent2);
app.component('generaladdress', Generaladdress);
app.component('generalbasic', Generalbasic);
app.component('reportsidebar', Reportsidebar);
app.component('personalreport', Personal);
app.component('sharedreport', Shared);
app.component('allreport', All);
app.component('taskreport', Task);
app.component('contactreport', Contact);
app.component('companyreport', Company);
app.component('leadreport', Lead);
app.component('dealreport', Deal);
app.component('projectreport', Project);
app.component('otherreport', Other);
app.component('projectgraph', Projectgraph);
app.component('projectgraph1', Projectgraph1);
app.component('projectgraph2', Projectgraph2);
app.component('projectgraph3', Projectgraph3);
app.component('profilecontent', Profilecontent);
app.component('profilecontent1', Profilecontent1);
app.component('profilecontent2', Profilecontent2);
app.component('profilecontent3', Profilecontent3);
app.component('paymentcontent', Paymentcontent);
app.component('paymentcontent1', Paymentcontent1);
app.component('othercontent', Othercontent);
app.component('othercontent1', Othercontent1);
app.component('othercontent2', Othercontent2);
app.component('mailheader', Mailheader);
app.component('mailinner', Mailinner);
app.component('mailattach', Mailattach);
app.component('mailfooter', Mailfooter);
app.component('localcontent', Localcontent);
app.component('leadgraph', Leadgraph);
app.component('leadgraph1', Leadgraph1);
app.component('leadgraph2', Leadgraph2);
app.component('leadgraph3', Leadgraph3);
app.component('generalcontent', Generalcontent);
app.component('recurringfilter', Recurringfilter);
app.component('invoicecard', Invoicecard);
app.component('invoicewidget', Invoicewidget);

/* eslint-disable no-new */
app.use(router)
.mount('#app');