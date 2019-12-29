import { Component, Output, EventEmitter } from "@angular/core";

import { User } from "./auth-form.interface";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "auth-form",
  templateUrl: "./auth-form.component.html"
})
export class AuthFormComponent {
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
