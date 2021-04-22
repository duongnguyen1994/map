import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Marker } from '../models/marker.model';
import { ipAddress } from '../models/ipAddress.model';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }
  public getIPAddress()
  {
    return this.httpClient.get<ipAddress>("http://api.ipify.org/?format=json");
  }
  getLocation(ip:string) : Observable<Marker>{
    return this.httpClient.get<Marker>(`http://freegeoip.net/json/${ip}`)
  }
}
