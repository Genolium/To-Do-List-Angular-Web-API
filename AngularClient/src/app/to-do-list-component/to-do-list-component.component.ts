import { Component } from '@angular/core';
import { ToDoItem } from '../to-do-item';
import { ApiService } from '../api.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list-component.component.html',
  styleUrls: ['./to-do-list-component.component.css']
})
export class ToDoListComponentComponent {
  toDoItems!: ToDoItem[];
  editItem: ToDoItem = new ToDoItem();
  editDate: string = "";
  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.updateData();
  }

  updateData(){
    this.apiService.getItems().subscribe(data => {
      console.log(data);
      this.toDoItems = data;
    })
  }

  createItem(){
    let item = new ToDoItem();
    const uuid = uuidv4();
    item.id = uuid;
    item.title = "новая задача";
    item.description = "";
    item.isComplete = false;
    item.dueDate = new Date();
    this.apiService.createItem(item).subscribe(data=>{
      console.log(data);
      this.toDoItems.push(item);
    })
  }

  deleteItem(item: ToDoItem){
    this.apiService.deleteItem(item.id).subscribe(data=>{
      console.log(data);
      const index = this.toDoItems.indexOf(item, 0);
      if (index > -1) {
        this.toDoItems.splice(index, 1);
      }
    })
  }

  selectItem(item: ToDoItem){
    this.editItem = item;
    this.editDate = this.apiService.dateToInputStr(this.editItem.dueDate);
  }

  deselectItem(){
    this.editItem = new ToDoItem();
  }

  changeItem(item: ToDoItem,event: Event){
    event.preventDefault();
    item.dueDate = new Date(this.editDate);
    console.log(item);
    this.apiService.updateItem(item.id, item).subscribe(data=>{
      console.log(data);
    });
    this.deselectItem();
  }
}
