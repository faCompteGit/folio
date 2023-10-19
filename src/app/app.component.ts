import { Component, HostListener } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  PLATFORM_ID } from '@angular/core';
import { Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  faBars = faBars;
  faCross = faAngleDoubleUp;
  closeMenu = 'closeMenu';
  closeMenufixed = 'closeMenufixed';
  closeMenufixedone = 'closeMenufixedone';
  openMenufixed = 'openMenufixed';
  openMenu = 'openMenu';
  hideMenu = 'hideMenu';
  hidenMenu = 'hidenMenu';
  hidenMenufixed = 'hidenMenufixed';
  hideMenufixed = 'hideMenufixed';
  faGithub = faGithub;
  faEnvelope =faEnvelope;
  cordesopen= 'cordesopen';
  cordesclose = 'cordeclose';
  navbarfixed:boolean=false;

   @HostListener('window:scroll',['$event'])scroll_function()
   {
     if(window.scrollY>450){
       this.navbarfixed=true;
       this.closeMenu = 'closeMenufixedone';
       this.hidenMenu == 'hidenMenufixed';
       this.hideMenu == 'hideMenufixed';
     }
     else{
       this.navbarfixed=false;
     
   } 
  }


  open() {
    if(this.closeMenu == 'closeMenu' ) {
      //masquer l'icon open
      this.hideMenu ='hidenMenu';

      //ouvrir le menu
      this.closeMenu = 'openMenu';

      //masquer l'icon close
      this.hidenMenu = 'hideMenu';
      // this.cordesclose='cordesopen';
      
    } 
    else if(this.closeMenufixedone == 'closeMenufixedone' ) {
      //masquer l'icon open
      this.hideMenu ='hidenMenufixed';

      //ouvrir le menu
      this.closeMenu = 'openMenufixed';

      //masquer l'icon close
      this.hidenMenu = 'hideMenufixed';
      // this.cordesclose='cordesopen';
      
    } 

    
  }

  close(){
    if(this.hidenMenu == 'hideMenu') {
      //ouvrir le menu
      this.hidenMenu = 'hidenMenu';
      
      //fermer le menu
      this.closeMenu = 'closeMenu';

      //masquer l'icon close
      this.hideMenu ='hideMenu';
      this.cordesopen='cordesclose';
    }

    else if(this.hidenMenufixed == 'hidenMenufixed') {
      //ouvrir le menu
      this.hidenMenu = 'hidenMenufixed';
      
      //fermer le menu
      this.closeMenu = 'closeMenufixed';

      //masquer l'icon close
      this.hideMenu ='hideMenufixed';
      this.cordesopen='cordesclose';
    }

    

    

  }

  closenav(){

    this.closeMenu = 'closeMenu';
    //fermer le menu
    this.closeMenu = 'closeMenu';

    //masquer l'icon close
    this.hideMenu ='hideMenu';

    this.hidenMenu = 'hidenMenu';

  }

  





  
  ngOnInit(){

    
    var currentTime = new Date();
    if(currentTime.getHours()>=1 &&currentTime.getHours()<=13){
      document.getElementById("bjr")!.innerHTML="Bonjour";

    }
    else{
      document.getElementById("bjr")!.innerHTML="Bonsoir";

    }
    //  let nav = document.getElementById("nav")!.offsetTop;
    //  let n = document.getElementById("li");
  
    //  console.log("x", nav);
    // if(document.documentElement.scrollTop>1){
    //   console.log("window.scrollY");
    //   this.closeMenu = 'closeMenu';
    //   //fermer le menu
    //   this.closeMenu = 'closeMenu';
  
    //   //masquer l'icon close
    //   this.hideMenu ='hideMenu';
  
    //   this.hidenMenu = 'hidenMenu';
  
    // }
  
  //    if(window.pageXOffset >= poition){
  //       nav!.classList.add("sticky")
  //    }
  //    else{
  //     nav!.classList.remove("sticky")
  //  }
      
    }



}

