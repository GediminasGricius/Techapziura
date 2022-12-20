import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {animate, state, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  animations:[
    trigger("blockTriger",[
      state("pirmas",style({
        marginLeft:50,
        backgroundColor:'#00ff00',
      })),
      state("antras",style({
        marginLeft:500,
        backgroundColor:'#ff0000',
      })),
      transition('*=>*',[
        animate(1000)
      ]),
    ]),
    trigger("inputTrigger",[
      state("blur", style({
        fontSize:'100%'
      })),
      state("focus", style({
        fontSize:'200%',
        borderColor:"#000000",
        borderWeight:3,
        backgroundColor:'#aaffaa',
      })),
      transition("*=>*",[
        animate(300)
      ])
    ]),
    trigger("addAddressTriger",[
      state('in',style({
        opacity:1,
        height:'160px',
        })
      ),
      transition("void => *",[
        style({
          opacity:0,
          height:'0px'
        }),
        animate(300)
      ])
    ])
  ]
})
export class AddEmployeeComponent implements OnInit {

  public employeeForm:FormGroup;
  public blokelioBusena:string="pirmas";
  public nameInput="blur";
  public surnameInput="blur";
  public emailInput="blur";

  public static uzdraustiVardai=['Gediminas', 'Antanas', 'Petras'];

  constructor() {
    this.employeeForm=new FormGroup({
      'firstName':new FormControl(null, [Validators.required,this.uzdrastasVardas]),
      'lastName':new FormControl(null, [Validators.required]),
      'email':new FormControl(null, [Validators.required,  Validators.email]),
      'phones':new FormArray([]),
      'addresses':new FormArray([]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.employeeForm);
  }

  public uzdrastasVardas(control:AbstractControl):  ValidationErrors | null{
    if ( AddEmployeeComponent.uzdraustiVardai.indexOf(control.value)!=-1){
      return {'Vardas negalimas':true};
    }else{
      return null;
    }
  }

  public addPhoneNumber(){
    const phone=new FormControl(null,[Validators.required]);

    (<FormArray>this.employeeForm.get('phones')).push(phone);

  }

  public phones(){
    return (<FormArray> this.employeeForm.get('phones')).controls;
  }

  public addresses(){
    return (<FormArray> this.employeeForm.get('addresses')).controls;
  }

  public abstractToFormGroup(address:AbstractControl){
    return <FormGroup>address;
  }

  public addAddress(){
    const address=new FormGroup({
      city:new FormControl(null,[Validators.required]),
      address:new FormControl(null, [Validators.required])
    });
    (<FormArray>this.employeeForm.get('addresses')).push(address);
  }

  public blokelisClick(){
    this.blokelioBusena=this.blokelioBusena=='pirmas'?'antras':'pirmas';
  }


}
