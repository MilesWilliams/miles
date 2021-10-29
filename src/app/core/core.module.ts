import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { services } from './services/index';
import { HttpClientModule } from '@angular/common/http';
import { UsersState } from './store/state/users.store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { resolvers } from './resolvers';
import { guards } from './guards';


@NgModule({
  declarations: [],
  providers: [
    ...services,
    ...resolvers,
    ...guards
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    NgxsModule.forRoot([UsersState], { developmentMode: !environment.production })
  ]
})
export class CoreModule { }
