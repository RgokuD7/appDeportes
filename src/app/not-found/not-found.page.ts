import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AnimationController, IonCard } from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import type { QueryList } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})

export class NotFoundPage {

  @ViewChild(IonCard, { read: ElementRef }) card: any;
  

  
  private animation: Animation;

  constructor(private animationCtrl: AnimationController) {

  this.animation = this.animationCtrl.create();

  }

  ngAfterViewInit() {
    const card = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(2000)
      .beforeStyles({
        filter: 'invert(75%)',
      })
      .beforeClearStyles(['box-shadow'])
      .afterStyles({
        'box-shadow': 'rgba(255, 0, 50, 0.4) 0px 4px 16px 6px',
      })
      .afterClearStyles(['filter'])
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(1.5)' },
        { offset: 1, transform: 'scale(1)' },
      ]);

    this.animation = this.animationCtrl.create().duration(2000).addAnimation([card]);
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.animation.play();
    }, 100);
  }
  ionViewWillLeave() {
    if (this.animation) {
      this.animation.stop();
    }}
}



