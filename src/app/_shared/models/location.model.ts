import { Marker } from "./marker.model";

export interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
  marker: Marker;
}
