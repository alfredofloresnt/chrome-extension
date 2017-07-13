function SaveOptions(){
  var twlink=document.getElementById('twitter-link').value;
  var ytlink=document.getElementById('youtube-link').value;
  var iglink=document.getElementById('instagram-link').value;

  chrome.storage.sync.set({
    twitterLink: twlink,
    youtubeLink: ytlink,
    instagramLink:  iglink

  }, function() {

    });
    console.log('saved!');
}

function restore_options() {
  chrome.storage.sync.get([
    'twitterLink',
    'youtubeLink',
    'instagramLink'
  ]
  , function(items) {
    console.log("should load text");
    document.getElementById('twitter-link').value= items.twitterLink;
    document.getElementById('youtube-link').value= items.youtubeLink;
    document.getElementById('instagram-link').value= items.instagramLink;

  });
}


document.addEventListener('DOMContentLoaded', restore_options);

document.getElementById('save').addEventListener('click', SaveOptions);
