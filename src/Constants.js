//File holds static information about website, such as the number of comics.

export const COMIC_COUNT = 43;

var os = require('os');

var data_folder;
if(os.hostname().indexOf("local") > -1) {
  data_folder = ''; //Data folder for local host
} else {
  data_folder = 'https://quackack.com/data/'; //Data folder during deployment
}

export const COMIC_FOLDER = data_folder + 'comics/'