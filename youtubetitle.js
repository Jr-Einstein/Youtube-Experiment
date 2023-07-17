function myFunction() {
   var videoID = '5VM8CNiFJ04'; //https://youtu.be/5VM8CNiFJ04
  var part = 'snippet,statistics';
  var params = {'id': videoID};
  
  var response = YouTube.Videos.list(part, params);
  var video = response.items[0];
  var videoViewsCount = video.statistics.viewCount;
  var videoLikeCount = video.statistics.likeCount;
  var videoCommentCount = video.statistics.commentCount;
  var videoTitle = 'This Video has ' + videoViewsCount + ' Views and ' + videoLikeCount + ' Likes and ' + videoCommentCount + ' Comments! (Explained!)';
  
  video.snippet.title = videoTitle;
  
  try{
    YouTube.Videos.update(video, part);
    
  }catch(e){
    
  
  }
  
}
  

