import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Item } from '../../modele/item';


@Component({
  selector: 'app-edit-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
})
export class EditItemComponent {
  @Input() item!: Item;
  @Output() update = new EventEmitter<Item>();
  @Output() cancel = new EventEmitter<void>();

  updateItem() {
    this.update.emit(this.item);
  }
}
