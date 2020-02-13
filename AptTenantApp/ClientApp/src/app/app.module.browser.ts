import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppModuleShared } from "./app.module.shared";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppModuleShared
  ],
  providers: [
    { provide: 'BASE_URL', useFactory: getBaseUrl }
  ]
})

export class AppModule {
}

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}
