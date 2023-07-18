import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { AngularEditorConfig } from '@kolkov/angular-editor';
interface Tag {
  name: string;
}
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent {
  public routes = routes;
 
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
   
  };

 
  // tag

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: Array<Tag> = [{ name: 'Marketing' }];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our item
    if (value) {
      this.tags.push({ name: value });
    }

    // Clear the input value
         // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
    event.chipInput!.clear();
  }

  remove(item: Tag): void {
    const index = this.tags.indexOf(item);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  // ** tag
}
