meanware:gridfs
=========================

NOTE: This package is just a small update on cfs:gridfs. The original package seems not to be maintained anymore and will not work with a
mongodb 3.4 Atlas Cluster. This is fixed by updating the database drivers.

A Meteor package that adds [GridFS](http://docs.mongodb.org/manual/core/gridfs/) file storage for
[CollectionFS](https://github.com/CollectionFS/Meteor-CollectionFS). When you
use this storage adapter, file data is stored in chunks in your MongoDB database.

## Installation

Install using Meteorite. When in a Meteor app directory, enter:

```
$ meteor add meanware:gridfs
```

## Usage

```js
var imageStore = new FS.Store.GridFS("images", {
  mongoUrl: 'mongodb://127.0.0.1:27017/test/', // optional, defaults to Meteor's local MongoDB
  mongoOptions: {...},  // optional, see note below
  transformWrite: myTransformWriteFunction, //optional
  transformRead: myTransformReadFunction, //optional
  maxTries: 1, // optional, default 5
  chunkSize: 1024*1024  // optional, default GridFS chunk size in bytes (can be overridden per file).
                        // Default: 2MB. Reasonable range: 512KB - 4MB
});

Images = new FS.Collection("images", {
  stores: [imageStore]
});
```

More control over the MongoDB connection is available by specifying [MongoClient.connect options](http://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html#mongoclient-connect-options) as a `mongoOptions` attribute in the options object on the constructor.

Refer to the [CollectionFS](https://github.com/CollectionFS/Meteor-CollectionFS)
package documentation for more information.

## API

[For Users](https://github.com/CollectionFS/Meteor-cfs-gridfs/blob/master/api.md)

[For Contributors](https://github.com/CollectionFS/Meteor-cfs-gridfs/blob/master/internal.api.md)
