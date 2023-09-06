import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private _http:HttpClient) { }

  getAllProjects() : Observable<any> {

    return this._http.get('http://127.0.0.1:8000/api/projects');
  }

  getAllCategories() : Observable<any> {

    return this._http.get('http://127.0.0.1:8000/api/categories');
  }

  getAllcollaborators() : Observable<any> {

    return this._http.get('http://127.0.0.1:8000/api/collaborators');
  }

  getAllServices() : Observable<any> {

    return this._http.get('http://127.0.0.1:8000/api/services');
  }

  getAllVideos() : Observable<any> {

    return this._http.get('http://127.0.0.1:8000/api/videos');
  }

  getAllCollaborators() : Observable<any> {

    return this._http.get('http://127.0.0.1:8000/api/collaborators');
  }

  getprojectDetails(slug:any) : Observable<any> {

    return this._http.get(`http://127.0.0.1:8000/api/projects/${slug}`);
  }

  getcontactUsContent() : Observable<any> {

    return this._http.get('http://127.0.0.1:8000/api/contact-us');
  }

  createContactForm(model:any) : Observable<any> {

    return this._http.post('http://127.0.0.1:8000/api/contact', model);
  }

  getCategoryDetails(slug:any) : Observable<any> {
    return this._http.get(`http://127.0.0.1:8000/api/categories/${slug}`);
  }
  getCategoryHomeDetails(slug:any) : Observable<any> {

    return this._http.get(`http://127.0.0.1:8000/api/categories-home/${slug}`);
  }

}
