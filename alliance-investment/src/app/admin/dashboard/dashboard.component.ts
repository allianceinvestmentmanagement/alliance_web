import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/data/admin.service';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  message: any;
  deposits: any;
  withdraws: any;
  users: any;

  constructor(private _adminService: AdminService) {
    this._adminService.getMessages().subscribe((data: any) => {
      this.message = data['data'];
    })
    this._adminService.getDeposits().subscribe((data: any) => {
      this.deposits = data['data'];
     })
     this._adminService.getUsers().subscribe((data: any) => {
      this.users = data['data'];
    })
    this._adminService.getWithdraws().subscribe((data: any) => {
      this.withdraws = data['data'];
    })
   }

  ngOnInit(): void {
    function $(selector) {
      return document.querySelector(selector)
    }
    
    function find(el, selector) {
      let finded
      return (finded = el.querySelector(selector)) ? finded : null
    }
    
    function siblings(el) {
      const siblings = []
      for (let sibling of el.parentNode.children) {
        if (sibling !== el) {
          siblings.push(sibling)
        }
      }
      return siblings
    }
    
    const showAsideBtn = $('.show-side-btn')
    const sidebar = $('.sidebar')
    const wrapper = $('#wrapper')
    
    showAsideBtn.addEventListener('click', function () {
      $(`#${this.dataset.show}`).classList.toggle('show-sidebar')
      wrapper.classList.toggle('fullwidth')
    })
    
    if (window.innerWidth < 767) {
      sidebar.classList.add('show-sidebar');
    }
    
    window.addEventListener('resize', function () {
      if (window.innerWidth > 767) {
        sidebar.classList.remove('show-sidebar')
      }
    })
    
    // dropdown menu in the side nav
    var slideNavDropdown = $('.sidebar-dropdown');
    
    $('.sidebar .categories').addEventListener('click', function (event) {
      event.preventDefault()
    
      const item = event.target.closest('.has-dropdown')
    
      if (item) {
        item.classList.toggle('opened')
    
        siblings(item).forEach(sibling => {
          sibling.classList.remove('opened')
        })
      
        if (item.classList.contains('opened')) {
          const toOpen = find(item, '.sidebar-dropdown')
    
          if (toOpen) {
            toOpen.classList.add('active')
          }
      
          siblings(item).forEach(sibling => {
            const toClose = find(sibling, '.sidebar-dropdown')
    
            if (toClose) {
              toClose.classList.remove('active')
            }
          })
        } else {
          find(item, '.sidebar-dropdown').classList.toggle('active')
        }
      }
    })
    
    $('.sidebar .close-aside').addEventListener('click', function () {
      $(`#${this.dataset.close}`).classList.add('show-sidebar')
      wrapper.classList.remove('margin')
    })
    
    

    
  

    

    

  }

}
