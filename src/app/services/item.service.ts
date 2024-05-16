import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../modele/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: Item[] = [];
  private itemsSubject = new BehaviorSubject<Item[]>(this.items);

  getItems() {
    return this.itemsSubject.asObservable();
  }

  addItem(description: string) {
    const newItem: Item = {
      id: Date.now(),
      description
    };
    this.items.push(newItem);
    this.itemsSubject.next(this.items);
  }

  updateItem(id: number, description: string) {
    const item = this.items.find(item => item.id === id);
    if (item) {
      item.description = description;
      this.itemsSubject.next(this.items);
    }
  }

  deleteItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
    this.itemsSubject.next(this.items);
  }
}
