import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../services/heroes.service";
@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styles: []
})
export class HeroeComponent {
  heroe: any = {};
  constructor(
    private activatedRouter: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    this.activatedRouter.params.subscribe(params => {
      this.heroe = _heroesService.getHeroe(params["id"]);
      console.log(this.heroe);
    });
  }
}
