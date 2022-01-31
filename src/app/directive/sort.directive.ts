import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
import { Sort } from '../util/sort';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {

  @Input()
  // Stores list to be sorted and header mapping
  appSort = {
    "listToSort" : [],
    "headerMapping" : {}
  };
  
  constructor(private renderer: Renderer2, private targetElem: ElementRef) { }

  @HostListener("click")
  sortData() {
    // Create new sorter object
    const sort = new Sort();

    // Get reference to current clicked element (col to be sorted)
    const elem = this.targetElem.nativeElement;

    // Set sort order
    const order = elem.getAttribute("data-order");

    // Get property name from element attribute
    // Split on "<" removes icon attached to header
    // Trim removes any whitespace
    let property: String = elem.innerHTML.split("<")[0].trim();
    for (const [k, v] of Object.entries(this.appSort.headerMapping)) {
      if (property == k) {
        property = <String>v;
      }
    }

    if (order === "desc") {
      this.appSort.listToSort.sort(sort.startSort(property, order));
      elem.setAttribute("data-order", "asc");
    } else {
      this.appSort.listToSort.sort(sort.startSort(property, order));
      elem.setAttribute("data-order", "desc");
    }
  }

}
