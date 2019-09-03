import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { UserService } from "../shared/user.service";
import { PokemonService } from "../shared/pokemon.service";

@Component({
    selector: "app-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    //message = "You have successfully authenticated. This is where you build your core application functionality.";
    processing = false;
    pokemon = { id: null, name: null, image: null };
    errorMessage: string;
    status:string;
    constructor(private userService: UserService, private routerExtensions: RouterExtensions, private pokemonService : PokemonService) {
    }

    ngOnInit(): void {
    }

    logout() {
        this.userService.logout();
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    }

    submit() {
        if (!this.pokemon.id) {
            return;
        }

        this.processing = true;
        this.search();

    }

    search() {
        this.pokemonService.getPokemonInfo(this.pokemon.id)
            .subscribe(data => {
                this.processing = false;
                this.pokemon.name = data["name"];
                this.pokemon.image = data["sprites"].front_default;
            }, error => console.log(error))
            this.processing = false;
    }
}