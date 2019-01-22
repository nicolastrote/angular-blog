import { NgModule } from '@angular/core';
import { MatMenuModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatIconRegistry, MatListModule, 
  MatCardModule} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
 

@NgModule({
  imports: [ 
    MatButtonModule, 
    MatMenuModule, 
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    // Required by the Angular Material icon module
    MatIconModule,
    HttpClientModule,
  ],
  exports: [ 
    MatButtonModule, 
    MatMenuModule, 
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
  ],
})
export class MaterialModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')); // Or whatever path you placed mdi.svg at
  }
}