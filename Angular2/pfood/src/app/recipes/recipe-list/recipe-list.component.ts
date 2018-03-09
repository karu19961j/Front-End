import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Soup", "Tomato", "https://images.unsplash.com/photo-1467020323552-36f7bf0e30e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=531319c82648653fd61091ddd2141768&auto=format&fit=crop&w=1950&q=80"),
    new Recipe("Soup", "Tomato", "https://images.unsplash.com/photo-1467020323552-36f7bf0e30e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=531319c82648653fd61091ddd2141768&auto=format&fit=crop&w=1950&q=80")
  ];

  constructor() { }

  ngOnInit() {
  }

}
