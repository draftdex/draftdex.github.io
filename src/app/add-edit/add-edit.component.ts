import { Component, OnInit, Output } from '@angular/core';
import { Input, HostListener, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() addEditEnabled = false;
  @Output() onAddEditDisabled = new EventEmitter<any>();

  // Register DOM click event to dynamically hide add/edit menu when necessary
  @HostListener("document:click", ['$event']) onClick(event: PointerEvent){
    if ((<HTMLSelectElement> event.target).id === "overlay" && this.addEditEnabled) {
      this.onAddEditDisabled.emit();
    }
  }
}
