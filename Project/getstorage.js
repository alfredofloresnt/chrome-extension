function get_options(){
  chrome.storage.sync.get([
    'twitterLink',
    'youtubeLink',
    'instagramLink'
  ]
  , function(items) {

    document.getElementById('twitter-href').href= items.twitterLink;
    document.getElementById('youtube-href').href= items.youtubeLink;
    document.getElementById('instagram-href').href= items.instagramLink;

  });
}
document.addEventListener('DOMContentLoaded', get_options);
