import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component'
import { WarningAlertComponent } from './warningalert/warningalert.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import { ExerciseTwoComponent } from './exercise-two/exercise-two.component';
import { ExerciseThreeComponent } from './exercise-three/exercise-three.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessalertComponent,
    ExerciseTwoComponent,
    ExerciseThreeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
