import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HelloComponent } from './hello/hello.component';
import { ImageComponent } from './image/image.component';
import { TestComponent } from './test.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
    declarations: [
        AppComponent,
        HelloComponent,
        HeaderComponent,
        ImageComponent,
        TestComponent,
        GalleryComponent,
    ],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
