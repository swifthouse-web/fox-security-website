// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  sendMailLogicApp: 'https://prod-31.southafricanorth.logic.azure.com:443/workflows/e3de845b49d042d9ba48321294c6575d/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=HlufNrXDMLTdmb0_-C1j4YmeusIgKQOT6GvOJw4k354',
  cmsUrl: 'http://foxsecurity-cms.westeurope.azurecontainer.io:1337'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
