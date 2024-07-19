import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {



  newAppointmentTitle : string = "";
  newAppointmentDate : Date = new Date();
appointments: Appointment [] = [];

ngOnInit(): void {

  if (typeof localStorage !== 'undefined') {
    let saveAppointments = localStorage.getItem("appointments");
    this.appointments = saveAppointments ? JSON.parse(saveAppointments) : [];
  } else {
    console.error("localStorage is not available");
  }
}

addAppointment(){
if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
let newAppointment: Appointment = {
  id: Date.now(),
  title: this.newAppointmentTitle,
  date: this.newAppointmentDate
}
this.appointments.push(newAppointment)
// une fois que cela est fais on veut remettre a zero les imput
this.newAppointmentTitle = ""
this.newAppointmentDate = new Date()

if (typeof localStorage !== 'undefined') {
  localStorage.setItem("appointments", JSON.stringify(this.appointments));
} else {
  console.error("localStorage is not available");
}

}
}


deleteAppointment(index: number){
this.appointments.splice(index,1)
localStorage.setItem("appointements", JSON.stringify(this.appointments))
}
}
