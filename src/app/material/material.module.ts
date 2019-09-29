import { NgModule } from '@angular/core';
import { MatCardModule, MatIconModule, MatButtonModule } from '@angular/material'

const MaterialComponents = [
  MatCardModule,
  MatIconModule,
  MatButtonModule,
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})

export class MaterialModule { }
