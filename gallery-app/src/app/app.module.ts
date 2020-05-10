import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { HelloComponent } from './hello/hello.component';
import { ImageComponent } from './image/image.component';
import { TestComponent } from './test.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
    declarations: [
        AppComponent,
        HelloComponent,
        HeaderComponent,
        ImageComponent,
        TestComponent,
        GalleryComponent,
        WeatherComponent,
    ],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
