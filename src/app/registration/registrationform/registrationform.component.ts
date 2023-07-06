import { Component,OnInit } from '@angular/core';
import { StudentsService } from 'src/app/students.service';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit{

  registerForm:any=FormGroup;
constructor(private _sobj:StudentsService,private _fb:FormBuilder,private _route:Router){

}
ngOnInit(): void {
  this.registerForm=this._fb.group({
  
    'firstname':['',[Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(10)]],
      'lastname':['',[Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(10)]],
      'email':['',[Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]],
      'gender':['',[Validators.required]],
      'mobno':['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      'address':['',[Validators.required,Validators.pattern('')]],
  })
}


registerdata(){
return this._sobj.createstudent(this.registerForm.value).subscribe({
  complete: () => {
    alert('Register successfully !')
    console.log('Register successfully !')
    this.registerForm.reset();
    this._route.navigate(['/studentdata']);
  },
  error: (e:any) => {
    console.log(e);
  },
})
}
}

