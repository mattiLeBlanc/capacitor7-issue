import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

try {
  bootstrapApplication(AppComponent, appConfig)
    .catch(error => {
      showErrorLog(error);
    })

} catch (error: any) {
  showErrorLog(error);
}


function showErrorLog(error: any) {
  document.getElementsByTagName('body')[0].innerHTML = `
      <div style="padding:24px">
        <h1>Resparke failed to load because of the following error:</h1>
        <h3>"${error.message}"</h3>
        <pre style="font-weight: 300; text-wrap: inherit; background-color: #E0F3F3; padding: 16px;">${error.stack.toString()}
        </pre>
        <p style="padding: 16px; background-color: #E4C5DC;">If you get this error, please take a picture or screenshot and report it at https://www.resparke.com/support/</p>
      </div>
      `
}