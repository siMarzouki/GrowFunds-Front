import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Packs } from 'src/app/models/Packs';
import { PacksService } from 'src/app/services/packs.service';

@Component({
  selector: 'app-packs-details-client',
  templateUrl: './packs-details-client.component.html',
  styleUrls: ['./packs-details-client.component.css']
})
export class PacksDetailsClientComponent {
  pid!: number;
  pack!: Packs;
  liked!: Boolean;
  constructor(private router: Router, private _service: PacksService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.pid = this.route.snapshot.params['id'];
    this._service.getPacksByIdClient(this.pid).subscribe(res => {
      this.pack = res;
      //to be changed later
      this.liked = false;
      this.pack.likedByUsers.forEach(u => {
        if (u.id == 2) {
          this.liked = true
        }
      })
    });
  }

  like() {
    this._service.like(this.pack).subscribe(res => {
      this.pack = res; this.pack.likedByUsers.forEach(u => {
        if (u.id == 2) {
          this.liked = true
        }
      })
    })
  }
}