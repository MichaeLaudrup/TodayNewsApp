import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { newService } from 'src/app/core/services/news.service';

@Component({
  selector: 'add-new',
  templateUrl: './add-new-form.component.html',
  styleUrls: ['./add-new-form.component.scss']
})
export class AddNewFormComponent implements OnInit {
  newForm: FormGroup; 
  fileToUpload: File; 
  @Output('formClosed') formClosedEvent : EventEmitter<boolean> = new EventEmitter(); 
  constructor(private newService: newService) { }

  ngOnInit(): void {
    this.newForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      content: new FormControl(''),
    })
  }

  addNew(){
    this.newService.addNew({...this.newForm.value}).subscribe(
      (articledCreated) => {
        if(this.fileToUpload){
          const formData = new FormData(); 
          formData.append('photo', this.fileToUpload);
          this.newService.addPhotoToNew(formData, articledCreated._id).subscribe( newNewWithPhoto => {
            this.formClosed( true); 
          })
        }else{
          this.formClosed(true); 
        }
      }) 
  }

  onFileChange(event){   
    if(event.target.files.length > 0){
      this.fileToUpload = event.target.files[0];
    }
  }

  formClosed( isAddedSuccessfully: boolean){
    this.formClosedEvent.emit(isAddedSuccessfully);  
  }

}
