/* global require, module */
export function initialize( application ) {
  application.deferReadiness();

  const geo = window.navigator.geolocation;

  geo.getCurrentPosition((pos) => {
    let pt = pos.coords;
    let loc = {
      lat: pt.latitude,
      lng: pt.longitude
    };
    application.register('data:geo', loc, {
      instantiate: false
    });

    application.advanceReadiness();
  });
}

export default {
  name: 'geo',
  initialize
};
