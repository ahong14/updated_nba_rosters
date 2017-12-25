
roster.controller('MainController', ['$scope', function($scope) { 
  
 

    
	$scope.home = $('.navbar-brand').click(function()
	{
		$('html, body').animate(
  		{
  			scrollTop: $('#home').offset().top
  		},500);
	});

  $scope.gotoWarriors = $('#warriors_drop').click(function()
  	{
  		$('html, body').animate(
  		{
  			scrollTop: $('#warriors').offset().top
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




  		}




  	]

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