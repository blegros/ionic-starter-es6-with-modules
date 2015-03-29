curl({
    baseUrl: 'js',
    paths: {
        curl: 'lib/curl/dist/curl'
    }
}, ['app'])
    .then(function () {
        angular.bootstrap(document.body, ['starter']);
    });