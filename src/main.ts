// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import * as application from 'tns-core-modules/application';
import { Here } from 'nativescript-here';
import { AppModule } from "./app/app.module";

application.on('launch', () => {
  Here.init('en4UDxYiyY253xi8sHoX', 'RNuSjnohpcBhFIVrGzP8Kg');
});

platformNativeScriptDynamic().bootstrapModule(AppModule);
