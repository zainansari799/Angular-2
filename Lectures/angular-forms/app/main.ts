import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //for cross-browser com[patibility]
import { AppModule } from './app.module'; //for module load

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
