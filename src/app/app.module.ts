import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    ThemeToggleComponent,
    FooterComponent,
    ThemeToggleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    AppRoutingModule,
    RouterModule.forRoot(
			[],
			{
				// Tell the router to use the hash instead of HTML5 pushstate.
				useHash: false,

				// In order to get anchor / fragment scrolling to work at all, we need to
				// enable it on the router.
				anchorScrolling: "enabled",

				// Once the above is enabled, the fragment link will only work on the
				// first click. This is because, by default, the Router ignores requests
				// to navigate to the SAME URL that is currently rendered. Unfortunately,
				// the fragment scrolling is powered by Navigation Events. As such, we
				// have to tell the Router to re-trigger the Navigation Events even if we
				// are navigating to the same URL.
				onSameUrlNavigation: "reload",

				// Let's enable tracing so that we can see the aforementioned Navigation
				// Events when the fragment is clicked.
				enableTracing: true,
				scrollPositionRestoration: "enabled"
			}
		)
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
