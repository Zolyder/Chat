import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  friendId: any;
  friend: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
    ) {
      this.friendId = this.activatedRoute.snapshot.params['uid'];
      console.log('this.friendId :', this.friendId);
      this.userService.getUserById(this.friendId).valueChanges().subscribe((data: User) => {
        console.log('data :', data);
        this.friend = data;
      }, (error) => {
        console.log('Error :', error);
      });
    }

  ngOnInit() {
  }

}