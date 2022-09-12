import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {
  @Input('form-group') textAreaFormGroup: FormGroup; 
  @Input('control-name') controlName: string; 
  @Input() labelText: string; 
  constructor() { }

  ngOnInit(): void {
  }

}
