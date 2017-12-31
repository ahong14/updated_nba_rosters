
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
  			scrollTop: $('#warriors').offset().top
  		},500);
  	});


  //animate to lakers roster
  $scope.gotoLakers = $('#lakers_drop').click(function()
    {
      $('html, body').animate(
      {
        scrollTop: $('#lakers').offset().top
      },500);
    });



  //animate to clippers roster
  $scope.gotoClippers = $('#clippers_drop').click(function()
    {
      $('html, body').animate(
      {
        scrollTop: $('#clippers').offset().top
      },500);
    });



   $scope.gotoSuns = $('#suns_drop').click(function()
    {
      $('html, body').animate(
      {
        scrollTop: $('#suns').offset().top
      },500);
    });



    $scope.gotoKings = $('#kings_drop').click(function()
    {
      $('html, body').animate(
      {
        scrollTop: $('#kings').offset().top
      },500);
    });









  	//array of players for each team
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
        name: 'Shaun Livingston',
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


  ]; // end of warriors array 
    
  $scope.lakers = [

    {
      icon: "https://lasentinel.net/wp-content/uploads/sites/5/2017/10/Lakers_4_Lonzo-Ball_AP.jpg",
      name: 'Lonzo Ball',
      position: 'G',
      height: "6'6",
      weight: '190',
      predraft: 'UCLA'
    },

    {
      icon: "https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Flakeshowlife.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F10%2F856883436-denver-nuggets-v-los-angeles-lakers.jpg.jpg&c=sc&w=850&h=560",
      name: 'Kentavious Caldwell-Pope',
      position: 'G',
      height: "6-5",
      weight: '205',
      predraft: 'Georgia'
    },

    {
      icon:"http://media.nbclosangeles.com/images/652*368/Brandon-Ingram-knee-injury-10-28-16.jpg",
      name:'Brandon Ingram',
      position:'F',
      height:"6-9",
      weight: '190',
      predraft: '205'
    },

    {
      icon: "http://www.trbimg.com/img-5617eacf/turbine/la-sp-lakers-raptors-20151009",
      name: 'Julius Randle',
      position: 'F',
      height: "6-9",
      weight: '250',
      predraft: 'Kentucky'

    },

    {
      icon: 'https://imagesvc.timeincapp.com/v3/fan/image?url=https://lakeshowlife.com/wp-content/uploads/getty-images/2017/10/859362708-sacramento-kings-v-los-angeles-lakers.jpg.jpg&',
      name: 'Brook Lopez',
      position: 'C',
      height: '7-0',
      weight: '268',
      predraft: 'Stanford'

    }

  ]; //lakers array 


  $scope.clippers = [
    {
      icon:"https://www.gannett-cdn.com/-mm-/21e14f7da97e45a4d8d1b4017db5c0e0dbe1813e/c=0-125-2812-3874&r=537&c=0-0-534-712/local/-/media/2017/11/22/USATODAY/USATODAY/636469705383151356-USATSI-10371432.jpg",
      name: 'Patrick Beverley',
      position: 'G',
      height: "6'1",
      weight: '185',
      predraft:'Arkansas'
    },

    {
      icon: "http://www.rantsports.com/nba/files/2015/06/austin-rivers.jpg",
      name: 'Austin Rivers',
      position: 'G',
      height: "6'4",
      weight: '200',
      predraft: 'Duke'
    },

    {
      icon: "https://clutchpoints.com/wp-content/uploads/2017/10/Danilo-Gallinari-Clippers.jpg",
      name: 'Danilo Gallinari',
      position: 'F',
      height: "6-10",
      weight: '225',
      predraft: 'Italy'
    },

    {
      icon: "http://images.performgroup.com/di/library/sporting_news/3e/b5/blake-griffin-022417-getty-ftr_hu3iiwk49nzh1bhbdf66o3xjn.jpg?t=1893858370&w=960&quality=70",
      name: 'Blake Griffin',
      position: 'F',
      height: "6-10",
      weight: '251',
      predraft: 'Oklahoma'
    },

    {
      icon: "http://images.performgroup.com/di/library/sporting_news/83/c6/deandre-jordan-clippers-getty-ftr-012417_a1825nxlm22o1pd9lxdwm3hf8.jpg?t=-733620711&w=960&quality=70",
      name: 'DeAndre Jordan',
      position: 'C',
      height:"6-11",
      weight: '265',
      predraft: "Texas A&M"
    }

  ];


  $scope.suns = [
    {
      icon: "https://valleyofthesuns.com/wp-content/blogs.dir/69/files/2016/10/9590357-tyler-ulis-nba-preseason-utah-jazz-phoenix-suns.jpg",
      name: 'Tyler Ulis',
      position: 'G',
      height: "5-10",
      weight: '150',
      predraft: 'Kentucky'
    },

    {
      icon: "https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2016/09/09/devin_booker_top_100_.jpg?itok=JkZfX9q5",
      name: 'Devin Booker',
      position: 'G',
      height: "6-4",
      weight: '214',
      predraft: 'Kentucky'
    },

     {
      icon: "http://uproxx.files.wordpress.com/2017/12/gettyimages-862918558.jpg?quality=100&w=650",
      name: 'Josh Jackson',
      position: 'F',
      height: '6-8',
      weight: '205',
      predraft: 'Kansas'
    },

     {
      icon: "http://i.cdn.turner.com/drp/nba/suns/sites/default/files/chriss102016_777.jpg",
      name: 'Marquese Chriss',
      position: 'F',
      height: "6-10",
      weight: '233',
      predraft: 'Washington'
    },


    {
      icon: 'https://sports.cbsimg.net/images/visual/whatshot/102115_tyson.jpg',
      name: 'Tyson Chandler',
      position: 'C',
      height: '7-1',
      weight: '240',
      predraft: 'Manuel Dominguez (H.S.)'
    }
  ];


  $scope.kings = [
    {
      icon: "http://www.kentucky.com/sports/college/kentucky-sports/ex-cats/v6bbnu/picture176739596/alternates/FREE_1140/Fox_4",
      name:"De'Aaron Fox",
      position: 'G',
      height: '6-3',
      weight: '175',
      predraft: 'Kentucky'
    },

    {
      icon: "http://a.espncdn.com/photo/2017/0315/r190586_608x342_16-9.jpg",
      name: 'Buddy Hield',
      position: 'G',
      height: '6-4',
      weight: '214',
      predraft: 'Oklahoma'
    },

    {
      icon: "http://i.cdn.turner.com/drp/nba/kings/sites/default/files/styles/hi_res_full_width/public/garrett.jpg?itok=h_OSG8Lp",
      name: 'Garrett Temple',
      position: 'F',
      height: '6-6',
      weight: '195',
      predraft: 'LSU'
    },

    {
      icon: "https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Faroyalpain.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F11%2F873391590-philadelphia-76ers-v-sacramento-kings.jpg.jpg&c=sc&w=850&h=560",
      name: 'Zach Randolph',
      position: 'F',
      height: '6-9',
      weight:'260',
      predraft:'Michigan State'
    },

    {
      icon: "http://i.cdn.turner.com/drp/nba/kings/sites/default/files/styles/hi_res_full_width/public/cauley_stein_main.jpg?itok=cyn3-AgX",
      name: 'Willy Cauly-Stein',
      position: 'C',
      height: '7-0',
      weight: '240',
      predraft: 'Kentucky'
    }

  ];
  
 
}]); //end of controller
 




 //   icon: 
  //  name: 
  //  position: 
  //  height: 
  //  weight: 
  //  predraft: 
