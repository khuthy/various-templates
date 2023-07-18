import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';

const routes: Routes = [{
  path: '',
  component: BlogComponent,
  children :[
    { path: 'add-blogs', loadChildren: () => import('./add-blogs/add-blogs.module').then((m) => m.AddBlogsModule) }, 
    { path: 'all-blog', loadChildren: () => import('./all-blog/all-blog.module').then((m) => m.AllBlogModule) },
    { path: 'pending-blog', loadChildren: () => import('./pending-blog/pending-blog.module').then((m) => m.PendingBlogModule) },
    { path: 'blog-details', loadChildren: () => import('./blog-details/blog-details.module').then((m) => m.BlogDetailsModule) },
    { path: 'categories', loadChildren: () => import('./categories/categories.module').then((m) => m.CategoriesModule) },
    { path: 'edit-blog', loadChildren: () => import('./edit-blog/edit-blog.module').then((m) => m.EditBlogModule) },

  ]
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
