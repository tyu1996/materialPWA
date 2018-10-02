// This file defines the use of all material UI elements
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports:[ MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule, MatDividerModule, MatListModule, MatGridListModule, MatCardModule ],
    exports:[ MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule, MatDividerModule, MatListModule, MatGridListModule, MatCardModule ],
})
export class MaterialModule {}