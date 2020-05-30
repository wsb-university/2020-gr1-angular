import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ApiHelper } from './api-helper.service';
import { AppComponent } from './app.component';
import { CelsiusSuffixPipe } from './celsius-suffix.pipe';
import { CelsiusPipe } from './celsius.pipe';
import { ForecastComponent } from './forecast/forecast.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { HelloComponent } from './hello/hello.component';
import { ImageComponent } from './image/image.component';
import { TestComponent } from './test.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
    {
        path: '',
        component: WeatherComponent,
    },
    {
        path: 'forecast',
        component: ForecastComponent,
    },
    {
        path: 'gallery',
        component: GalleryComponent,
    },
];

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
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
    ],
    providers: [ApiHelper],
    bootstrap: [AppComponent],
})
export class AppModule {}
