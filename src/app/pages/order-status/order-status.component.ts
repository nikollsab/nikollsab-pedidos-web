import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ServicioService } from 'src/app/services/servicio.service';
import { MatStepper } from '@angular/material/stepper';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit {
  @ViewChild('stepper', {static: true}) stepper: MatStepper;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  detallepedidos: any[] = [];
  threeFormGroup: FormGroup;
  fourFormGroup: FormGroup;
  tracingI: any;
  idPedido: any
  currentStepMat: any;
      isEditableStepControlOne: boolean;
      isEditableStepControlTwo: boolean;
      isEditableStepControlThree: boolean;
      isEditableStepControlFour: boolean;
      isEditableStepControlFive: boolean;
      isCompletedtepControlOne: boolean
      isCompletedtepControlTwo: boolean;
      isCompletedtepControlThree: boolean;
      isCompletedtepControlFour: boolean;
      isCompletedtepControlFive: boolean;

  constructor(private _formBuilder: FormBuilder, private trackingPedido: ServicioService, private router: Router,private _router: ActivatedRoute) {
    console.log("username", this.idPedido)
    this.idPedido = this._router.snapshot.paramMap.get('id');
    this.trackingPedido.getDetallePedidoId(this.idPedido)
    .subscribe(
      async data => {
        console.log(data);
        this.detallepedidos = [...data];
        console.log(data, 'Pedido por id');
      }
    );

   }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.threeFormGroup = this._formBuilder.group({
      threeCtrl: ['', Validators.required]
    });
    this.fourFormGroup = this._formBuilder.group({
      fourCtrl: ['', Validators.required]
    });

    this.getTracing();
  }

  getTracing() {

     this.trackingPedido.getPedidoId(this.idPedido).toPromise().then(data => {
      // async data => {
        this.tracingI = data;
        if(this.tracingI.estado.estadoId === 1){
          this.isEditableStepControlOne = true;
          this.isEditableStepControlTwo = false;
          this.isEditableStepControlThree = false;
          this.isEditableStepControlFour = false;
          this.isCompletedtepControlOne = false;
          this.isCompletedtepControlTwo = false;
          this.isCompletedtepControlThree = false;
          this.isCompletedtepControlFour = false;
          this.currentStepMat = 0;

        }else if(this.tracingI.estado.estadoId === 2){
          console.log("entre")

          this.isEditableStepControlOne = false;
          this.isEditableStepControlTwo = true;
          this.isEditableStepControlThree = false;
          this.isEditableStepControlFour = false;
          this.isEditableStepControlFive = false;
          this.isCompletedtepControlOne = true;
          this.isCompletedtepControlTwo = false;
          this.isCompletedtepControlThree = false;
          this.isCompletedtepControlFour = false;
          this.isCompletedtepControlFive = false;
          this.currentStepMat = 1;
          

        }else if(this.tracingI.estado.estadoId === 3 ){
          console.log("entre")
          this.isEditableStepControlOne = false;
          this.isEditableStepControlTwo = false;
          this.isEditableStepControlThree = true;
          this.isEditableStepControlFour = false;
          this.isEditableStepControlFive = false;
          this.isCompletedtepControlOne = true;
          this.isCompletedtepControlTwo = true;
          this.isCompletedtepControlThree = false;
          this.isCompletedtepControlFour = false;
          this.isCompletedtepControlFive = false;
          this.currentStepMat = 2;

        }else if(this.tracingI.estado.estadoId === 4 ){
          console.log("entre")
          this.isEditableStepControlOne = false;
          this.isEditableStepControlTwo = false;
          this.isEditableStepControlThree = false;
          this.isEditableStepControlFour = true;
          this.isEditableStepControlFive = false;
          this.isCompletedtepControlOne = true;
          this.isCompletedtepControlTwo = true;
          this.isCompletedtepControlThree = true;
          this.isCompletedtepControlFour = false;
          this.isCompletedtepControlFive = false;
          this.currentStepMat = 3;

        } else if(this.tracingI.estado.estadoId === 5 ){
          this.isEditableStepControlOne = false;
          this.isEditableStepControlTwo = false;
          this.isEditableStepControlThree = false;
          this.isEditableStepControlFour = false;
          this.isEditableStepControlFive = true;
          this.isCompletedtepControlOne = true;
          this.isCompletedtepControlTwo = true;
          this.isCompletedtepControlThree = true;
          this.isCompletedtepControlFour = true;
          this.isCompletedtepControlFive = true;
          this.currentStepMat = 4;

        }

        console.log("data", data.estado.estadoId);
      },
      err => {
      /*   if (err.status === 401 || err.status === 403) {
          this.openDialogInfo('Sesión caducada  !', 'Vuelva a iniciar sesión', 'error');
          setTimeout (() => {
                this.authService.logout();
          }, 3500);
        } */
        console.log(err);
      }
    );
  }
  
  
}

