import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PortService {

  private basePath ='https://localhost:44321/api/Port';

  constructor(private http: HttpClient) {}
  
  public getPorts():Observable<any>{
    return this.http.get(this.basePath);
  }
}
