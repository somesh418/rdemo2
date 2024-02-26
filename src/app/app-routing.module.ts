import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './documents/counter/counter.component';
import { WeatherComponent } from './documents/weather/weather.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'counter',
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'weather',
    component: WeatherComponent
  },
  {
    path: '**',
    redirectTo: 'counter',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
