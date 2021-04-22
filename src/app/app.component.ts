import { AgmBicyclingLayer } from '@agm/core';
import { Component } from '@angular/core';
import { Location } from './_shared/models/location.model';
import { Marker } from './_shared/models/marker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  location!: Location;
  map!: google.maps.Map;
  mapClickListener!: google.maps.MapsEventListener;
  myLocation!: Marker;
  lat!:number
  lng!:number
  la!:number
  ln!:number
  origin: any;
  destination!: any;
  distance!:string;
  service !: google.maps.DistanceMatrixService
  icon: any = {
    url: '../assets/images/userlocation.svg',
    scaledSize: {
        width: 50,
        height: 70
    }
  }
  constructor(){}
    ngOnInit() {
      this.getLocation();
      // console.log(this.myLocation)
        // this.location = {
        //     latitude: 16.4643844,
        //     longitude: 107.5924742,
        //     zoom: 16,
        //     marker: {
        //       latitude: 16.4643844,
        //       longitude: 107.5924742
        //     }
        // }
    }
public getDirection() {
        this.origin = { lat: this.la, lng: this.ln },
        this.destination = { lat: this.lat, lng: this.lng }
}
    public mapReadyHandler(map: google.maps.Map): void {
      this.map = map;
      this.mapClickListener = this.map.addListener('click', (e: google.maps.MouseEvent) => {
        this.lat = e.latLng.lat();
        this.lng = e.latLng.lng();
        this.getDirection();
        console.log(this.lat, this.lng)
      });
    }
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(location =>{
          this.la = location.coords.latitude;
          this.ln = location.coords.longitude;
          console.log(this.la, this.ln)
        });
      }
    }

    public ngOnDestroy(): void {
      if (this.mapClickListener) {
        this.mapClickListener.remove();
      }
    }
}

