import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-types',
  templateUrl: './new-types.component.html',
  styleUrls: ['./new-types.component.css']
})
export class NewTypesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /**
     * console.log("start the prog ...");

    console.log("getting the camera...");


    this.getCamera().then((res:any)=>{
      console.log(res);
      
    }).catch((err)=>{
      console.log(err);
      
    })
     */
    

   // this.initCamera();
    
  }


  // SQFLITE 1Ghz => 1s  0.5Ghz => 7s

 /* async initCamera(){
    const camera = await this.getCamera(); // ... 5s


    console.log(camera);
    

  }


  getCamera(){

                              // duration value ?
    const cameraPromise = new Promise((success,error)=>{
      // getting the camera !!
      setTimeout(()=>{
         success( { camera:true} ) 
      },5000 )
    });

    return cameraPromise;
    
  }
*/


  watchUserPosition(){
    
    /*this.trackMyLocation().subscribe((res)=>{
      console.log(res);
      
    },(err)=>{
      console.log(err);
      
    })*/


    /*this.trackMyLocation().toPromise().then((res)=>{
      console.log(res);
      
    }).catch((err)=>{
      console.log(err);
      
    })*/
  }


  trackMyLocation(){
    const observable = new Observable(( observer )=>{

      navigator.geolocation.watchPosition((position)=>{
        observer.next(position);
      }, (err)=>{
        observer.error(err);
      })

    })


    return observable;
  }




}
