import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HereMarker } from "nativescript-here";
// declare var H: any;

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent{

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