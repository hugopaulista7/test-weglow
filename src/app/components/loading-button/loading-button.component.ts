import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.scss'],
})
export class LoadingButtonComponent {
  @Input() isLoading: Boolean = false;
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  constructor() {}

  // ngOnInit() {}

  handleClick() {
    this.clicked.emit(true);
  }
}
