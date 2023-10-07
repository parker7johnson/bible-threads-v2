import { Component, Input, OnInit } from '@angular/core';
import { Comments } from './comments.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() comment : Comments = new Comments('Parker Johnson', 'this is a commment');
  showReplyForm : boolean = false;

  ngOnInit(): void {
    this.showReplyForm = false;
  }

  toggleReply() {
    this.showReplyForm = !this.showReplyForm;
  }

  toggleReplyToSend() {
    if (this.showReplyForm) {
      return 'Send';
    } else {
      return 'Reply';
    }
  }

}
