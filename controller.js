
roster.controller('MainController', ['$scope', function($scope) { 
  
 

  //animate home button to return to top of page  
	$scope.home = $('.navbar-brand').click(function()
	{
		$('html, body').animate(
  		{
  			scrollTop: $('#home').offset().top
  		},500);
	});

  //animate to warriors roster
  $scope.gotoWarriors = $('#warriors_drop').click(function()
  	{
  		$('html, body').animate(
  		{
  			scrollTop: $('#warriors_title').offset().top
  		},500);
  	});

  	//array of players
  	$scope.warriors = [
  		{
			  icon: "http://i.cdn.turner.com/drp/nba/warriors/sites/default/files/gettyimages-494746488_master.jpg",
  			name: 'Stephen Curry',
	  		position: 'G',
	  		height: "6'3",
		  	weight: '190',
		  	predraft: 'Davidson'

  		}, 

  		{
			  icon: "http://www.mercurynews.com/wp-content/uploads/2017/02/sjm-warriors-0202-018.jpg?w=468",
		  	name: 'Klay Thompson',
		  	position: 'G',
		  	height: "6'7",
		  	weight: '215',
		  	predraft: 'Washington State'
  		},

  			
  		{
			  icon:"http://images.performgroup.com/di/library/omnisport/80/48/kevindurant-cropped_1jtutkjrfptjp1s15i2k2tk5mx.jpg?t=1925510370&w=960&quality=70",
  			name: 'Kevin Durant',
  			position: 'F',
  			height: "6-9",
  			weight: '240',
  			predraft: 'Texas'



  		},


  		{

			  icon: "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-s3.si.com%2Fs3fs-public%2F2016%2F09%2F13%2Fdraymond_green_top_100_.jpg&w=700&q=85", 
 		  	name: 'Draymond Green',
   			position: 'F',
   			height: "6-7",
   			weight: '230',
  			predraft: 'Michigan State'


  		}, 

  		{
			  icon: "https://usatftw.files.wordpress.com/2016/11/pachulia.jpg?w=1000&h=600&crop=1",
  			name: 'Zaza Pachulia',
  			position: 'C',
  			height: "6-11",
  			weight: '275',
  			predraft: 'Tbisili'

  		},


      {
        icon: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Shaun_Livingston_with_Warriors_%28cropped%29.jpg",
        name: 'Shaun Livginston',
        position: 'G',
        height: "6-7",
        weight: '192',
        predraft: "Peoria H.S. (IL)"

      },

      {
        icon: "http://www.mercurynews.com/wp-content/uploads/2017/11/bng-l-warriors-1125-263.jpg?w=620",
        name: 'Nick Young',
        position: 'G',
        height: "6-7",
        weight: '210',
        predraft: 'USC'
      },

      {
        icon: "https://s.yimg.com/ny/api/res/1.2/gs_oyD6XFf7RijBjSpKiVQ--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NzQ0O2g9NTEw/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/ddd0b283630a69b056f2d42f964ac8b6",
        name: 'Andre Igoudala',
        position: 'F',
        height: "6-6",
        weight: '215',
        predraft: 'Arizona'

      },


      {
        icon: "http://img.bleacherreport.net/img/images/photos/003/647/154/hi-res-0d9f69b71181d10827cc072e786dfbdb_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",
        name: 'David West',
        position: 'F',
        height: "6-9",
        weight: '250',
        predraft: 'Xavier'
      },

      {
        icon:"https://nbcprobasketballtalk.files.wordpress.com/2016/10/614999752-e1476745222690.jpg?w=610&h=343&crop=1",
        name: 'Javale McGee',
        position: 'C',
        height: "7-0",
        weight: '270',
        predraft: 'Nevada-Reno'
      },

      {
        icon: 'http://s2.glbimg.com/Lb1uKll_7Tjk2LwW36P2ViS3BqA=/30x0:1167x742/690x450/s.glbimg.com/es/ge/f/original/2016/10/15/mccaws_warriors_twitter.jpg',
        name: 'Patrick McCaw',
        position: 'G',
        height: "6-7",
        weight: '185',
        predraft: 'UNLV'
      },

      {
        icon: "http://i.cdn.turner.com/drp/nba/warriors/sites/default/files/styles/story_main_photo/public/20170317-looney-1280.jpg?itok=-R5pQ3NX",
        name: 'Kevon Looney',
        position: 'F',
        height: "6-9",
        weight: '220',
        predraft: 'UCLA'

      },


      {
        icon: "http://images.performgroup.com/di/library/sportal_com_au/46/e/jordan-bell_diodtqv9dw5i1bnp4cocff3gw.jpg?w=1280&h=720&quality=100",
        name: 'Jordan Bell',
        position: 'F',
        height: "6-8",
        weight: '225',
        predraft: 'Oregon'
      },


      {
        icon: "http://ww4.hdnux.com/photos/67/33/43/14530803/9/920x920.jpg",
        name: 'Omri Casspi',
        position: 'F',
        height: "6-9",
        weight: '225',
        predraft: 'Israel'
      },

    {
      icon: "http://ww3.hdnux.com/photos/57/64/20/12534826/3/1024x1024.jpg",
      name: 'Damian Jones',
      position: 'C',
      height: "7-0",
      weight: '245',
      predraft: 'Vanderbilt'
    },


    {
      icon: "https://i.ytimg.com/vi/m93aSej6k3s/maxresdefault.jpg",
      name: 'Quin Cook',
      position: 'G',
      height:"6-2",
      weight: '184',
      predraft: 'Duke'
    }


      




  	] // end of warriors array 
    

  // $scope.stephen_curry = {

  // 	icon: "http://i.cdn.turner.com/drp/nba/warriors/sites/default/files/gettyimages-494746488_master.jpg",
  // 	name: 'Stephen Curry',
  // 	position: 'G',
  // 	height: "6'3",
  // 	weight: '190',
  // 	predraft: 'Davidson'

  // };

  
  // 	icon: 
  // 	name: 
  // 	position: 
  // 	height: 
  // 	weight: 
  // 	predraft: 
 

  

  
  	
}]);