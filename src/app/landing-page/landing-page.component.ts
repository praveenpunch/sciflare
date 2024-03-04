import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2';
import { UserInfoService } from '../userInfo.service';
// import { UserInfoService } from '../userInfo.service';
// import { AuthService } from '../auth.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [
    trigger("slideInOutLeft", [
      transition(":enter", [
        style({ transform: "translateX(100%)" }),
        animate("300ms ease-in", style({ transform: "translateX(0%)" })),
      ]),
      transition(":leave", [
        animate("300ms ease-in", style({ transform: "translateX(100%)" })),
      ]),
    ]),
    trigger("slideInOutRight", [
      transition(":enter", [
        style({ transform: "translateX(-100%)" }),
        animate("300ms ease-in", style({ transform: "translateX(0%)" })),
      ]),
      transition(":leave", [
        animate("300ms ease-in", style({ transform: "translateX(-100%)" })),
      ]),
    ]),
  ],
})
export class LandingPageComponent implements OnInit {

  dataListHead:any = []
  dataList:any = []
  editUserObj:any = {}
  addUserObj:any = {}
  editSelectorToggle:boolean = false;
  constructor(private route: Router,private modalService : NgbModal,private serviceFile : UserInfoService ) { }

  ngOnInit(): void {
    console.log('landing page')
    this.dataListHead = [
      {
        name: "User Name",
        dataKey: "userName",
        displayColumn: true,
        sortDirection: "",
        static: true,
        anchorTag: false,
      },
      {
        name: "Designation",
        dataKey: "designation",
        displayColumn: true,
        sortDirection: "",
        static: true,
        anchorTag: false,
      },
      {
        name: "Email-Id",
        dataKey: "emailId",
        displayColumn: true,
        sortDirection: "",
        static: true,
        anchorTag: false,
      },
      {
        name: "Action",
        dataKey: "internalFlag",
        displayColumn: true,
        sortDirection: "",
        static: true,
        anchorTag: true,
      }
    ]
    this.dataList = [{userName:'Praveen',designation:'Developer',emailId:'praveen@gmail.com'}]

    this.setTableData()
  }
  setTableData(){
    // this.serviceFile.fetchUserData().subscribe(x=>{
    //   this.dataList = []
    //   this.dataList = x
    //   console.log('wat comes',this.dataList)
    // })
  }
  edituserData(data:any,content:any){
    this.editUserObj = data
    this.modalService.open(content, { size: "lg", centered: true });
  }
  save(data:any){
    // this.serviceFile.editUser(data).subscribe((x:any)=>{
    // })
    Swal.fire('','Updated Sucessfully','success')
    this.modalService.dismissAll();
  }
  add(data:any){
    this.serviceFile.addNewUser(data).subscribe((x:any)=>{
      Swal.fire('','New User Added Successfully','success')
      this.modalService.dismissAll();
    })
  }
  openModal(content:any){
    this.modalService.open(content, { size: "lg", centered: true });
  }
  logOut(){
    this.route.navigateByUrl('/login')
  }

}
