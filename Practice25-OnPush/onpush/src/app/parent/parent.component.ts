import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent {
  dataFromParent = { message: 'Initial Message' };

  updateData() {
    this.dataFromParent = {
      ...this.dataFromParent,
      message: 'Updated Message at ' + new Date().toLocaleTimeString(),
    };
  }
}
