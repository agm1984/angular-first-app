import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-three',
  templateUrl: './exercise-three.component.html',
  styleUrls: ['./exercise-three.component.css']
})
export class ExerciseThreeComponent implements OnInit {
  log = []
  isDisplayed = false

  constructor() { }

  ngOnInit() {
  }

  toggleDisplay() {
    this.log.push({
      id: this.log.length,
      timestamp: Date.now().valueOf(),
      value: this.isDisplayed,
    })
    console.log('POO', this.log);

    this.isDisplayed = !this.isDisplayed
  }

}
