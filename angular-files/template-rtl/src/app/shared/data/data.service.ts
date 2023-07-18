import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { routes } from '../core.index';
import { apiResultFormat, sideBar } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getTask() {
    return this.http.get<apiResultFormat>('assets/json/task.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getContacts() {
    return this.http.get<apiResultFormat>('assets/json/contacts.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getCompanies() {
    return this.http.get<apiResultFormat>('assets/json/companies.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getLeads() {
    return this.http.get<apiResultFormat>('assets/json/leads.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getDeals() {
    return this.http.get<apiResultFormat>('assets/json/deals.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getProjects() {
    return this.http.get<apiResultFormat>('assets/json/projects.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getActivities() {
    return this.http.get<apiResultFormat>('assets/json/activities.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getReports() {
    return this.http.get<apiResultFormat>('assets/json/reports.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getInvoicesList() {
    return this.http.get<apiResultFormat>('assets/json/invoicelist.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getDataTable() {
    return this.http.get<apiResultFormat>('assets/json/data-tables.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getInvoicesCancelled() {
    return this.http.get<apiResultFormat>('assets/json/invoices-cancelled.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getInvoicesDraft() {
    return this.http.get<apiResultFormat>('assets/json/invoices-draft.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getInvoicesOverdue() {
    return this.http.get<apiResultFormat>('assets/json/invoices-overdue.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getInvoicesPaid() {
    return this.http.get<apiResultFormat>('assets/json/invoices-paid.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getInvoicesRecurring() {
    return this.http.get<apiResultFormat>('assets/json/invoices-recurring.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getCategories() {
    return this.http.get<apiResultFormat>('assets/json/categories.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public sideBar: sideBar[] = [
    {
      tittle: 'Main',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'dashboard',
          icon: 'home',
          subMenus: [
            {
              menuValue: 'Deals Dashboard',
              route: routes.dealsDashboard,
              base: routes.dealsDashboard,
            },
            {
              menuValue: 'Projects Dashboard',
              route: routes.projectsDashboard,
              base: routes.projectsDashboard,
            },
            {
              menuValue: 'Leads Dashboard',
              route: routes.leadsDashboard,
              base: routes.leadsDashboard,
            },
          ],
        },
        {
          menuValue: 'Tasks',
          route: routes.tasks,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'check-square',
          base: routes.tasks,
          subMenus: [],
        },
        {
          menuValue: 'Contacts',
          route: routes.contacts,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'smartphone',
          base: routes.contacts,
          subMenus: [],
        },
        {
          menuValue: 'Companies',
          route: routes.companies,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'database',
          base: routes.companies,
          subMenus: [],
        },
        {
          menuValue: 'Leads',
          route: routes.leads,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'user',
          base: 'leads',
          subMenus: [],
        },
        {
          menuValue: 'Deals',
          route: routes.deals,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'radio',
          base: routes.deals,
          subMenus: [],
        },
        {
          menuValue: 'Projects',
          route: routes.projects,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'grid',
          base: routes.projects,
          subMenus: [],
        },
        {
          menuValue: 'reports',
          route: routes.reports,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'bar-chart-2',
          base: routes.reports,
          subMenus: [],
        },
        {
          menuValue: 'Activities',
          route: routes.activities,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'calendar',
          base: routes.activities,
          subMenus: [],
        },
        {
          menuValue: 'Blog',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'blog',
          icon: 'home',
          subMenus: [
            {
              menuValue: 'All Blog',
              route: routes.allblog,
              base: routes.allblog,
            },
            {
              menuValue: 'Add Blog',
              route: routes.addblog,
              base: routes.addblog,
            },
            {
              menuValue: 'Edit Blog',
              route: routes.editblog,
              base: routes.editblog,
            },
            {
              menuValue: 'Categories',
              route: routes.categoriesblog,
              base: routes.categoriesblog,
            },
          ],
        },
        {
          menuValue: 'Invoices',
          base: 'invoices',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'clipboard',
          subMenus: [
            {
              menuValue: 'Invoices List',
              route: routes.invoicesList,
              base: routes.invoicesList,
            },
            {
              menuValue: 'Invoices Grid',
              route: routes.invoicesGrid,
              base: routes.invoicesGrid,
            },
            {
              menuValue: 'Add Invoices',
              route: routes.addInvoice,
              base: routes.addInvoice,
            },
            {
              menuValue: 'Edit Invoices',
              route: routes.editinvoice,
              base: routes.editinvoice,
            },
            {
              menuValue: 'Invoices Details',
              route: routes.viewinvoice,
              base: routes.viewinvoice,
            },
            {
              menuValue: 'Invoices Settings',
              route: routes.invoicesSettings,
              base: routes.invoicesSettings,
            },
          ],
        },
        {
          menuValue: 'Email',
          route: routes.email,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'mail',
          base: routes.email,
          subMenus: [],
        },
        {
          menuValue: 'Settings',
          route: routes.generalSettings,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'settings',
          base: 'settings',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Pages',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Error Pages',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'alert-triangle',
          base: '1',
          subMenus: [
            {
              menuValue: '404 Error',
              route: routes.errorPage404,
              base: routes.errorPage404,
            },
            {
              menuValue: '500 Error',
              route: routes.errorPage500,
              base: routes.errorPage500,
            },
          ],
        },
        {
          menuValue: 'Pages',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'pages',
          icon: 'list',
          subMenus: [
            {
              menuValue: 'FAQ',
              route: routes.faq,
              base: routes.faq,
            },
            {
              menuValue: 'Terms',
              route: routes.terms,
              base: routes.terms,
            },
            {
              menuValue: 'Privacy Policy',
              route: routes.privacyPolicy,
              base: routes.privacyPolicy,
            },
            {
              menuValue: 'Blank Page',
              route: routes.blankPage,
              base: routes.blankPage,
            },
          ],
        },
      ],
    },
    {
      tittle: 'UI Interface',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Components',
          route: routes.components,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'layout',
          base: routes.components,
          subMenus: [],
        },
        {
          menuValue: 'Elements',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'element',
          icon: 'box',
          subMenus: [
            {
              menuValue: 'Sweet Alerts',
              route: routes.sweetAlert,
              base: routes.sweetAlert,
            },
            {
              menuValue: 'Tooltip',
              route: routes.tooltip,
              base: routes.tooltip,
            },
            {
              menuValue: 'Popover',
              route: routes.popover,
              base: routes.popover,
            },
            {
              menuValue: 'Ribbon',
              route: routes.ribbon,
              base: routes.ribbon,
            },
            {
              menuValue: 'Clipboard',
              route: routes.clipboard,
              base: routes.clipboard,
            },
            {
              menuValue: 'Drag & Drop',
              route: routes.drag_drop,
              base: routes.drag_drop,
            },
            {
              menuValue: 'Range Slider',
              route: routes.range_slider,
              base: routes.range_slider,
            },
            {
              menuValue: 'Rating',
              route: routes.rating,
              base: routes.rating,
            },
            {
              menuValue: 'Toastr',
              route: routes.toastr,
              base: routes.toastr,
            },
            {
              menuValue: 'Text Editor',
              route: routes.text_editor,
              base: routes.text_editor,
            },
            {
              menuValue: 'Counter',
              route: routes.counter,
              base: routes.counter,
            },
            {
              menuValue: 'Scrollbar',
              route: routes.scrollbar,
              base: routes.scrollbar,
            },
            {
              menuValue: 'Spinner',
              route: routes.spinner,
              base: routes.spinner,
            },
            {
              menuValue: 'Notification',
              route: routes.notification,
              base: routes.notification,
            },
            {
              menuValue: 'Lightbox',
              route: routes.light_box,
              base: routes.light_box,
            },
            {
              menuValue: 'Timeline',
              route: routes.timeline,
              base: routes.timeline,
            },
            {
              menuValue: 'Horizontal Timeline',
              route: routes.horizontal_timeline,
              base: routes.horizontal_timeline,
            },
            {
              menuValue: 'Form Wizard',
              route: routes.form_wizard,
              base: routes.form_wizard,
            },
          ],
        },
        {
          menuValue: 'Charts',
          base: 'charts',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'bar-chart-2',
          subMenus: [
            {
              menuValue: 'Apexcharts',
              route: routes.apex_charts,
              base: routes.apex_charts,
            },
            {
              menuValue: 'Ng2 Charts',
              route: routes.ng2_charts,
              base: routes.ng2_charts,
            },
          ],
        },
        {
          menuValue: 'Icons',
          base: 'icons',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'award',
          subMenus: [
            {
              menuValue: 'Fontawesome',
              route: routes.fontawesome,
              base: routes.fontawesome,
            },
            {
              menuValue: 'Feather',
              route: routes.feather,
              base: routes.feather,
            },
            {
              menuValue: 'Ionic',
              route: routes.ionic,
              base: routes.ionic,
            },
            {
              menuValue: 'Material',
              route: routes.material,
              base: routes.material,
            },
            {
              menuValue: 'Pe7',
              route: routes.pe7,
              base: routes.pe7,
            },
            {
              menuValue: 'Simpleline',
              route: routes.simple_line,
              base: routes.simple_line,
            },
            {
              menuValue: 'Themify',
              route: routes.themify,
              base: routes.themify,
            },
            {
              menuValue: 'Weather',
              route: routes.weather,
              base: routes.weather,
            },
            {
              menuValue: 'Typicon',
              route: routes.typicon,
              base: routes.typicon,
            },
            {
              menuValue: 'Flag',
              route: routes.flag,
              base: routes.flag,
            },
          ],
        },
        {
          menuValue: 'Forms',
          base: 'forms',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'credit-card',
          subMenus: [
            {
              menuValue: 'Basic Inputs',
              route: routes.basicinputs,
              base: routes.basicinputs,
            },
            {
              menuValue: 'Input Groups',
              route: routes.inputgroups,
              base: routes.inputgroups,
            },
            {
              menuValue: 'Horizontal Form',
              route: routes.horizontalform,
              base: routes.horizontalform,
            },
            {
              menuValue: 'Vertical Form',
              route: routes.verticalform,
              base: routes.verticalform,
            },
            {
              menuValue: 'Form Mask',
              route: routes.formmask,
              base: routes.formmask,
            },
            {
              menuValue: 'Form Validation',
              route: routes.formvalidation,
              base: routes.formvalidation,
            },
          ],
        },
        {
          menuValue: 'Tables',
          base: 'tables',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'box',
          subMenus: [
            {
              menuValue: 'Basic Tables',
              route: routes.basictables,
              base: routes.basictables,
            },
            {
              menuValue: 'Data Table',
              route: routes.datatables,
              base: routes.datatables,
            },
          ],
        },
      ],
    },
    {
      tittle: 'Extras',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Multi Level',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'command',
          subMenus: [
            {
              menuValue: 'Level 1',
              route: '',
            },
            {
              menuValue: 'Level 1',
              route: '',
            },
          ],
        },
      ],
    },
  ];

  public invoicesGrid = [
    {
      gridId: "IN093439#@09",
      category: "Software",
      createdOn: "16 June 2022",
      invoiceto: "Barbara Moore",
      amount:"$5200",
      dueDate:"23 June 2022",
      status:"Paid",
      img:"assets/img/profiles/avatar-04.jpg"
    },
    {
      gridId: "IN093439#@10",
      category: "Food",
      createdOn: "18 June 2022",
      invoiceto: "Karlene Chaidez",
      amount:"$3800",
      dueDate:"24 June 2022",
      status:"Overdue",
      text:"Overdue   14 days",
      img:"assets/img/profiles/avatar-06.jpg"
    },
    {
      gridId: "IN093439#@11",
      category: "Marketing",
      createdOn: "20 June 2022",
      invoiceto: "Russell Copeland",
      amount:"$1800",
      dueDate:"26 June 2022",
      status:"Cancelled",
      img:"assets/img/profiles/avatar-08.jpg"    
    },
    {
      gridId: "IN093439#@12",
      category: "Repairs",
      createdOn: "21 June 2022",
      invoiceto: "Joseph Collins",
      amount:"$4800",
      dueDate:"28 June 2022",
      status:"Sent",
      img:"assets/img/profiles/avatar-10.jpg"
    },
    {
      gridId: "IN093439#@13",
      category: "Software",
      createdOn: "23 June 2022",
      invoiceto: "Jennifer Floyd",
      amount:"$6200",
      dueDate:"30 June 2022",
      status:"Cancelled",
      img:"assets/img/profiles/avatar-11.jpg"
    },
    {
      gridId: "IN093439#@14",
      category: "Repairs",
      createdOn: "26 June 2022",
      invoiceto: "Leatha Bailey",
      amount:"$3200",
      dueDate:"30 June 2022",
      status:"Sent",
      img:"assets/img/profiles/avatar-09.jpg"
    },
    {
      gridId: "IN093439#@15",
      category: "Food",
      createdOn: "27 June 2022",
      invoiceto: "Alex Canpbell",
      amount:"$4300",
      dueDate:"30 June 2022",
      status:"Overdue",
      text:"Overdue 10 days",
      img:"assets/img/profiles/avatar-12.jpg"
    },
    {
      gridId: "IN093439#@16",
      category: "Marketing",
      createdOn: "30 June 2022",
      invoiceto: "Marie Canales",
      amount:"$6200",
      dueDate:"05 July 2022",
      status:"Paid",
      img:"assets/img/profiles/avatar-03.jpg"
    },
  ];

  socialLinks = [
    {
      icon:"facebook",
      placeholder:"https://www.facebook.com"
    },
    {
      icon:"twitter",
      placeholder:"https://www.twitter.com"

    },
    {
      icon:"youtube",
      placeholder:"https://www.youtube.com"

    },
    {
      icon:"linkedin",
      placeholder:"https://www.linkedin.com"
    }
  ];
  reportPreview = [
    {
      reportName: "Evaluation",
      dateCreated: "02, june 2020",
      createdBy: "John Doe",
      company: "umbrella"
    },
    {
      reportName: "Inventry",
      dateCreated: "07, Aug 2020",
      createdBy: "John Doe",
      company: "Solemen"
    },
    {
      reportName: "Project Management",
      dateCreated: "02, April 2020",
      createdBy: "John Doe",
      company: "Claimpett"
    }
  ]
}
