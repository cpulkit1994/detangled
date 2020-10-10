import { NgModule }                                       from '@angular/core'
import { MatAutocompleteModule }                          from '@angular/material/autocomplete'
import { MatButtonModule }                                from '@angular/material/button'
import { MatCardModule }                                  from '@angular/material/card'
import { MatCheckboxModule }                              from '@angular/material/checkbox'
import { MatRippleModule }                                from '@angular/material/core'
import { MatDatepickerModule }                            from '@angular/material/datepicker'
import { MatDividerModule }                               from '@angular/material/divider'
import { MatExpansionModule }                             from '@angular/material/expansion'
import { MatFormFieldModule }                             from '@angular/material/form-field'
import { MatIconModule }                                  from '@angular/material/icon'
import { MatInputModule }                                 from '@angular/material/input'
import { MatListModule }                                  from '@angular/material/list'
import { MatMenuModule }                                  from '@angular/material/menu'
import { MatProgressBarModule }                           from '@angular/material/progress-bar'
import { MatProgressSpinnerModule }                       from '@angular/material/progress-spinner'
import { MatRadioModule }                                 from '@angular/material/radio'
import { MatSelectModule }                                from '@angular/material/select'
import { MatToolbarModule }                               from '@angular/material/toolbar'
import { MatTooltipModule }                               from '@angular/material/tooltip'     
import { DragDropModule }                                 from '@angular/cdk/drag-drop'
import { MAT_DATE_LOCALE }                                from '@angular/material/core'
import { MatButtonToggleModule }                          from '@angular/material/button-toggle'
import { MatSlideToggleModule }                           from '@angular/material/slide-toggle'

@NgModule({
  imports: [
    MatButtonModule, 
    MatToolbarModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatCardModule,
    MatMenuModule,
    MatTooltipModule,
    DragDropModule,
    MatButtonToggleModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatCardModule,
    MatMenuModule,
    MatTooltipModule,
    DragDropModule,
    MatButtonToggleModule,
    MatSlideToggleModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],

})

export class MaterialModule { }

