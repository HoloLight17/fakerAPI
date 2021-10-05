import {Component} from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let row of fakerAPI">
        <div class="content">
          <img [src]="row['animalIMG']" alt="img"/>
          <br/>
          <p>{{row['lorem']}}</p>
        </div>
      </li>
    </ul>
  `,
  styleUrls: ['/app.component.css']
})

export class AppComponent {
  fakerAPI = [{
    "animalIMG": faker.image.food(),
    "lorem": faker.lorem.paragraph(1)
  }, {
    "animalIMG": faker.image.sports(),
    "lorem": faker.lorem.paragraph(1)
  }, {
    "animalIMG": faker.image.fashion(),
    "lorem": faker.lorem.paragraph(1)
  }, {
    "animalIMG": faker.image.abstract(),
    "lorem": faker.lorem.paragraph(1)
  }, {
    "animalIMG": faker.image.animals(),
    "lorem": faker.lorem.paragraph(1)
  }, {
    "animalIMG": faker.image.imageUrl(),
    "lorem": faker.lorem.paragraph(1)
  }, {
    "animalIMG": faker.image.city(),
    "lorem": faker.lorem.paragraph(1)
  }, {
    "animalIMG": faker.image.technics(),
    "lorem": faker.lorem.paragraph(1)
  }]
  title = "fakerAPI";
}
