import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  FotoCam = '';

  constructor(
    private camera: Camera,
    private  storage:  Storage
  ) {}

  async ngOnInit() {
    await this.storage.create();
  }

  async takePicture() {

    const options: CameraOptions = {
      quality: 5,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      cameraDirection: this.camera.Direction.BACK,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.storage.set('FOTO', this.FotoCam);
      this.FotoCam = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
  }


}
