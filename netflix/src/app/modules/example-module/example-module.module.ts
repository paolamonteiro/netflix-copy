import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './components/example/example.component';
import { ExampleModuleRoutingModule } from './example-module-routing.module';

@NgModule({
  declarations: [ExampleComponent],
  imports: [CommonModule, ExampleModuleRoutingModule]
})
export class ExampleModuleModule { }
