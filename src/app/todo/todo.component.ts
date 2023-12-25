import { Component } from '@angular/core';

// using interface makes the code more structured and catch errors
interface Task {
  description: string;
  completed: boolean
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  // use this if you don't want to use the interface
  // tasks: { description: string; completed: boolean }[] = [];

  tasks: Task[] =[]
  newTask:string=''

  addTask() {
    if(this.newTask.trim() !== '') {
      this.tasks.push({description:this.newTask, completed:false})
      this.newTask=''
    }
  }

  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task)
    console.log(index)
    if(index !== -1) {
      this.tasks.splice(index, 1)
    }
  }

  editedTask:string =''
  editedTaskIndex:number = -1
  editMode:boolean = false

  editRaskBtn(index:number) { 
    this.editedTaskIndex=index
    this.editMode= true
    this.editedTask= this.tasks[index].description
  }

  updatedTask() {
    if(this.editedTask.trim() !== '') {
      this.tasks[this.editedTaskIndex].description=this.editedTask;
      this.editMode=false
      this.editedTask=''
      this.editedTaskIndex=-1
    }
  }

  completed:boolean = false

  completedBtn() {
    this.completed = !this.completed
  }

}
