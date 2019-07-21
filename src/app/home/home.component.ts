import { Component, OnInit } from "@angular/core";
import { HereMarker } from "nativescript-here";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
    public onMapReady(event) {
      const map = event.object;
      map.addMarkers(<HereMarker[]>[{
          id: 1,
          latitude: 37.7397,
          longitude: -121.4252,
          title: "Tracy, CA",
          description: "The best place in California!",
          draggable: true,
          onTap: (marker) => {
              const updatedMarker = Object.assign({}, marker, {
                  selected: !marker.selected
              });
              map.updateMarker(updatedMarker);
          }
      }]);
  }
}
