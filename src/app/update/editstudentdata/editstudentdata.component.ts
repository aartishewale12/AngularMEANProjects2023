import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-editstudentdata',
  templateUrl: './editstudentdata.component.html',
  styleUrls: ['./editstudentdata.component.css']
})
export class EditstudentdataComponent implements OnInit{
updateForm:any=FormGroup
  constructor(public _sobj:StudentsService,private _fb:FormBuilder,private router:Router,private Aroute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.UpdateStudent()}
    
  UpdateStudent(){this.updateForm=this._fb.group({
      'firstname':['',[Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(10)]],
      'lastname':['',[Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(10)]],
      'email':['',[Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]],
      'gender':['',[Validators.required]],
      'mobno':['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      'address':['',[Validators.required,Validators.pattern('')]]
    })
  };
  onSubmit(){
   if (window.confirm('Are you sure?')) {let id = this.Aroute.snapshot.paramMap.get('id');
        
      
    this._sobj.Updatestudent(this.updateForm.value).subscribe({
        complete: () => {
          this.router.navigateByUrl('/studentdata');
          console.log('Content updated successfully!');
        },
        error: (e:any) => {
          console.log(e);
        },
      });
    }
 }
}
  


