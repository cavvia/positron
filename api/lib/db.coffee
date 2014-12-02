#
# Wraps & exports a mongojs instance. Automatically selects collections based
# on the folder names under /apps. https://github.com/mafintosh/mongojs
#

mongojs = require 'mongojs'
fs = require 'fs'
path = require 'path'
{ MONGO_URL } = process.env

collections = ['articles', 'artists', 'artworks', 'users']
module.exports = mongojs MONGO_URL, collections
module.exports.collections = collections
