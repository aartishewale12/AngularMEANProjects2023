import { Component ,OnInit} from '@angular/core';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  Student:any=[];
  constructor(private _sobj:StudentsService){

  }
ngOnInit(): void {
  return this.readStudent();
}
readStudent(){
  this._sobj.getstudents().subscribe((data)=>{
    this.Student=data
  })
}
removeStudent(student:any,index:any){
  if(window.confirm('Are you sure?')){
    this._sobj.deletestudent(student.id).subscribe((data)=>{
      this.Student.splice(index,1)
    })
  }
}
}
