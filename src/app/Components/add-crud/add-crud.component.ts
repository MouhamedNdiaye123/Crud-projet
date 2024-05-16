import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemService } from '../../services/item.service';
import { Item } from '../../modele/item';
import { EditItemComponent } from "../edit-item/edit-item.component";

@Component({
    selector: 'app-add-crud',
    standalone: true,
    templateUrl: './add-crud.component.html',
    styleUrls: ['./add-crud.component.css'],
    imports: [CommonModule, FormsModule, EditItemComponent]
})
export class AddCrudComponent {
  description = '';

  constructor(private itemService: ItemService) {}

  addCrud() {
    if (this.description) {
      this.itemService.addItem(this.description);
      this.description = '';
    }
  }
  items = this.itemService.getItems();
  editingItem: Item | null = null;

  editItem(item: Item) {
    this.editingItem = { ...item };
  }

  updateItem(item: Item) {
    this.itemService.updateItem(item.id, item.description);
    this.editingItem = null;
  }

  deleteItem(id: number) {
    this.itemService.deleteItem(id);
  }
}
