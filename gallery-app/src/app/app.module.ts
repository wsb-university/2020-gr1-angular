import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ApiHelper } from './api-helper.service';
import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { HelloComponent } from './hello/hello.component';
import { ImageComponent } from './image/image.component';
import { TestComponent } from './test.component';
import { WeatherComponent } from './weather/weather.component';
import { CelsiusPipe } from './celsius.pipe';
import { CelsiusSuffixPipe } from './celsius-suffix.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HelloComponent,
        HeaderComponent,
        ImageComponent,
        TestComponent,
        GalleryComponent,
        WeatherComponent,
        ForecastComponent,
        CelsiusPipe,
        CelsiusSuffixPipe,
    ],
    imports: [BrowserModule, FormsModule, HttpClientModule],
    providers: [ApiHelper],
    bootstrap: [AppComponent],
})
export class AppModule {}
