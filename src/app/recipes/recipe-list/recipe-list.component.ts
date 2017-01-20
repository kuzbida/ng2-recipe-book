import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [];
  recipe = new Recipe('Dammy', 'Dummy','http://blogs-images.forbes.com/ericsavitz/files/2011/03/smiley-face.jpg?width=960');

  constructor() {
  }

  ngOnInit() {
  }

}
