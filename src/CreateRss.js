
const fs = require('fs')
require = require("esm")(module/*, options*/)


import moment from 'moment'

import {COMIC_COUNT} from './Constants';

export const COMIC_FOLDER = process.argv.slice(2)[0];
export const COMIC_IMAGE_FOLDER = COMIC_FOLDER + 'images/';
export const COMIC_META_DATA_FOLDER = COMIC_FOLDER + 'metadata/';


const RSS_DATE_FORMAT = "ddd, DD MMM YYYY HH:mm:ss ZZ";
const CURRENT_EMAIL = "quackackjac@gmail.com (Joshua Cook)";
const WEBSITE = "https://quackack.com/";


const convertISODateToRSSTime = ISODate => {
  return moment(ISODate).format(RSS_DATE_FORMAT);
};

const firstComicLocation = COMIC_META_DATA_FOLDER + (COMIC_COUNT - 1) + ".json";
var pubDatePromise = fs.promises.readFile(firstComicLocation, 'utf8')
                      .then(result => {
  var isoDate = JSON.parse(result).date;
  var pubDate = convertISODateToRSSTime(isoDate);
  return "<pubDate>" + pubDate + "</pubDate>\n";
});

const getComicItem = index => {
  const comicMetaDataLocation = COMIC_META_DATA_FOLDER + index + ".json";
  return fs.promises.readFile(comicMetaDataLocation, 'utf8')
                        .then(result => {
    var comicMetaData = JSON.parse(result);
    var pubDate = convertISODateToRSSTime(comicMetaData.date);
    var comicCategories = comicMetaData.categories.map(cat => 
                            "  <category>" + cat + "</category>\n").join("");
    
    return "<item>\n" +
            "  <title>" + comicMetaData.name + "</title>\n" +
            "  <description>" + comicMetaData.advertisement + "</description>\n" +
            "  <link>" + WEBSITE + comicMetaData.index + "</link>\n" +
            "  <guid isPermaLink=\"false\">Quackack comic " + comicMetaData.index + "</guid>\n" +
            "  <pubDate>" + pubDate + "</pubDate>\n" +
            "  <author>" + CURRENT_EMAIL + "</author>\n" +
            comicCategories +
            "</item>\n";
  });
};

var items = [...Array(COMIC_COUNT).keys()].map(getComicItem);

var comic_rss_start = "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n" +
          "<rss version=\"2.0\" xmlns:atom=\"http://www.w3.org/2005/Atom\">\n" +
          "<channel>\n" +
          "<title>Quackack Web Comics</title>\n" +
          "<description>A web comic about computer science, and randomness. \"Making the comics no one else would.\"</description>\n" +
          "<link>" + WEBSITE + "</link>\n" +
          "<copyright>Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) </copyright>\n" +
          "<image><url>" + WEBSITE + "icon.png</url>" +
          "<title>Quackack Web Comics</title><link>" + WEBSITE + "</link></image>\n" +
          "<language>en-us</language>\n" +
          "<category>Comic</category>\n" +
          "<managingEditor>" + CURRENT_EMAIL + "</managingEditor>\n" +
          "<webMaster>" + CURRENT_EMAIL + "</webMaster>\n" +
          "<lastBuildDate>" + moment().format(RSS_DATE_FORMAT) + "</lastBuildDate>\n" +
          "<ttl>2880</ttl>\n" +
          "<atom:link href=\"" + WEBSITE + "rss/comic.rss\" rel=\"self\" type=\"application/rss+xml\" />\n";

var comic_rss_end = "</channel>\n</rss>";

Promise.all([comic_rss_start, pubDatePromise].concat(items.reverse(), [comic_rss_end]))
            .then(comic_rss => {
  var rss_data = comic_rss.join("");
  var outputLocation = process.argv.slice(2)[1];
  fs.openSync(outputLocation, 'w');
  fs.writeFileSync(outputLocation, rss_data, 'utf8');
});
