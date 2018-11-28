import {Component, OnInit} from '@angular/core';
import {HeroService} from '../../../modules/heroes/shared/hero.service';
import {UtilsHelperService} from '../../../core/services/utils-helper.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [UtilsHelperService.fadeInOut()]
})

export class HomePageComponent implements OnInit {
  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
  }
}
