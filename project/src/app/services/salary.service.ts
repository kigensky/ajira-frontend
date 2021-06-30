import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class SalaryService {
  data:any
  constructor(
    public http:HttpClient
  ) { }
  getToken(){
    return JSON.parse(localStorage.getItem("ajira-tkn"))
  }
  removeToken() {
    localStorage.removeItem("ajira-tkn")
  }
  getBaseURL() {
    return "https://ajira-enterprise.herokuapp.com/"
  }
  load(url) {
    return new Promise((resolve) => {
      if (this.getToken()) {
        this.http
          .get(url, {
            headers: new HttpHeaders({
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.getToken(),
            }),
          })
          .subscribe(
            (data) => {
              this.data = data;
              resolve({ data: this.data, error: "" });
            },
            (err) => {
              console.log(err);
              resolve({ data: "", error: err });
            }
          );
      } else {
        this.http.get(url).subscribe(
          (data) => {
            this.data = data;
            resolve({ data: this.data, error: "" });
          },
          (err) => {
            console.log(err);
            resolve({ data: "", error: err });
          }
        );
      }
    });
  }
  /**
   * This method loadPost sends a POST request and returns the promise result
   *
   * @method loadPost
   * @param {String} url the api url for the resource being requested
   * @param {Object} body the payload object need for the post request
   * @param {boolean} observable boolean to determine behaviour
   * @return {Promise} $http Promise object containing response data
   */
   loadPost(url, body, observable = false) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.getToken(),
    });
    if (!observable) {
      return new Promise((resolve) => {
        if (this.getToken()) {
          this.http.post(url, body, { headers: headers }).subscribe(
            (data) => {
              this.data = data;
              resolve({ data: this.data, error: "" });
            },
            (err) => {
              console.log(err);
              resolve({ data: "", error: err });
            }
          );
        } else {
          this.http.post(url, body).subscribe(
            (data) => {
              this.data = data;
              resolve({ data: this.data, error: "" });
            },
            (err) => {
              console.log(err);
              resolve({ data: "", error: err });
            }
          );
        }
      });
    }
  }
  /**
   * This method loadDelete sends a DELETE request and returns the promise result
   *
   * @method loadDelete
   * @param {String} url the api url for the resource being requested
   * @return {Promise} $http Promise object containing response data
   */
  loadDelete(id:Number) {
    let deleteurl = this.getBaseURL() + "api/employee_salary/" + id
    return new Promise((resolve) => {
      if (this.getToken()) {
        this.http
          .delete(deleteurl, {
            headers: new HttpHeaders({
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.getToken(),
            }),
          })
          .subscribe(
            (data) => {
              this.data = data;
              resolve({ data: this.data, error: "" });
            },
            (err) => {
              console.log(err);
              resolve({ data: "", error: err });
            }
          );
      } else {
        this.http.delete(deleteurl).subscribe(
          (data) => {
            this.data = data;
            resolve({ data: this.data, error: "" });
          },
          (err) => {
            console.log(err);
            resolve({ data: "", error: err });
          }
        );
      }
    });
  }
  /**
   * This method loadPut sends a PUT request and returns the promise result
   *
   * @method loadPut
   * @param {String} url the api url for the resource being requested
   * @param {Object} body the payload object need for the PUT request
   * @return {Promise} $http Promise object containing response data
   */
  loadPut(url, body) {
    return new Promise((resolve) => {
      if (this.getToken()) {
        this.http
          .put(url, body, {
            headers: new HttpHeaders({
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.getToken(),
            }),
          })
          .subscribe(
            (data) => {
              this.data = data;
              resolve({ data: this.data, error: "" });
            },
            (err) => {
              console.log(err);
              resolve({ data: "", error: err });
            }
          );
      } else {
        this.http.put(url, body).subscribe(
          (data) => {
            this.data = data;
            resolve({ data: this.data, error: "" });
          },
          (err) => {
            console.log(err);
            resolve({ data: "", error: err });
          }
        );
      }
    });
  }
  /**
   * This method loadPatch sends a PATCH request and returns the promise result
   *
   * @method loadPatch
   * @param {String} url the api url for the resource being requested
   * @param {Object} body the payload object need for the PATCH request
   * @return {Promise} $http Promise object containing response data
   */
  loadPatch(url, body) {
    return new Promise((resolve) => {
      if (this.getToken()) {
        this.http
          .patch(url, body, {
            headers: new HttpHeaders({
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.getToken(),
            }),
          })
          .subscribe(
            (data) => {
              this.data = data;
              resolve({ data: this.data, error: "" });
            },
            (err) => {
              console.log(err);
              resolve({ data: "", error: err });
            }
          );
      } else {
        this.http.patch(url, body).subscribe(
          (data) => {
            this.data = data;
            resolve({ data: this.data, error: "" });
          },
          (err) => {
            console.log(err);
            resolve({ data: "", error: err });
          }
        );
      }
    });
  }
}