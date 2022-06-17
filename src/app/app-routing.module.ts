import { RouterModule, Routes } from '@angular/router';

// import { CanLoginGuard } from './shared/guards/canLogInGuard.service';
import { NgModule } from '@angular/core';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((md) => md.LoginModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/page.module').then((md) => md.PageModule)
    
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
