Package.describe({
  name: 'meanware:gridfs',
  version: '0.1.1',
  summary: 'GridFS storage adapter for CollectionFS',
  git: 'https://github.com/meanware/gridfs.git'
});

Npm.depends({
  mongodb: '2.2.31',
  'gridfs-stream': '1.1.1'
  //'gridfs-locking-stream': '0.0.3'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use(['cfs:base-package@0.0.30', 'cfs:storage-adapter@0.2.3']);
  api.addFiles('gridfs.server.js', 'server');
  api.addFiles('gridfs.client.js', 'client');
});

Package.onTest(function(api) {
  api.use(['meanware:gridfs', 'test-helpers', 'tinytest'], 'server');
  api.addFiles('tests/server-tests.js', 'server');
  api.addFiles('tests/client-tests.js', 'client');
});
