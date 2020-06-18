import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Router} from "@angular/router";
import {NavbarComponent} from "../../navbar/navbar.component";

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  public post = {
    title: '',
    url: '',
    content: '',
  }
  error;
  enable;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.error = '';
    this.enable = true;
    if(!NavbarComponent.isLogged){
      this.error = 'aby dodać posta należy być zalogowanym';
      this.enable = false;
    }
  }

  save() {
    this.dataService.createOrUpdate(this.post).subscribe(f => {
      console.log(f);
      this.router.navigate(['/blog'])
    })
  }
}
