import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  constructor(private angularFireDatabase: AngularFireDatabase) { }

  createConversation(conversation) {
    return this.angularFireDatabase.object('conversation/' + conversation.uid + '/' + conversation.timestamp).set(conversation);
  }

  getConversation(uid) {
    return this.angularFireDatabase.list('conversation/' + uid);
  }

  editConversation(conversation) {
    return this.angularFireDatabase.object('conversation/' + conversation.uid + '/' + conversation.timestamp).set(conversation);
  }
}
