
roster.controller('MainController', ['$scope', function($scope) { 
  
 var dropdown_clicked = false; 
 var clicked_image = false;

  //animate home button to return to top of page  
	$scope.home = $('.navbar-brand').click(function()
	{
		$('html, body').animate(
  		{
  			scrollTop: $('#home').position().top
  		},500);
	});

  //scoll animation to roster
  $scope.gotoTeam = $('.dropdown-item').click(function()
  { 
    $('.dropdown-menu').css('visibility', 'hidden');

    dropdown_clicked = true;

    $('html, body').animate(
    {
      scrollTop: $( $.attr(this, 'href') ).position().top
    },600);

  });

  $scope.show = function(){
    clicked_image = !clicked_image;
    if (clicked_image == true){
      $('.player_information').css('visibility', 'visible');
    }

    else if (clicked_image == false){
      $('.player_information').css('visibility', 'hidden');
    }

  };


  
  $scope.hoveron = function(){
      if (dropdown_clicked == true){
        $('.dropdown-menu').css('visibility', 'visible');
        dropdown_clicked=false;
      }
  };



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

  		}

  ], // end of warriors array 
    
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

  ]

  $scope.thunders = [
    {
      icon: "https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/10/22/russell-westbrook-thunder-nuggets.jpg",
      name: 'Russell Westbrook',
      position: 'G',
      height: '6-3',
      weight: '200',
      predraft: 'UCLA'

    },

    {
      icon: "http://img.bleacherreport.net/img/images/photos/003/101/693/hi-res-b803b9ce68f8953cb7f26050aa97cd1e_crop_north.jpg?1412961253&w=630&h=420",
      name: 'Andre Roberson',
      position: 'G',
      height: '6-7',
      weight: '210',
      predraft: 'Colorado'

    },


    {
      icon: "https://cdn.inquisitr.com/wp-content/uploads/2017/10/goals-for-paul-george-in-2017-18.jpg",
      name: 'Paul George',
      position: 'F',
      height: '6-9',
      weight: '220',
      predraft: 'Fresno State'

    },

   
    {
      icon: "http://stmedia.startribune.com/images/Melo3.JPG",
      name: 'Carmelo Anthony',
      position: 'F',
      height: '6-8',
      weight: '240',
      predraft: 'Syracuse'

    },

    {
      icon: "https://fansided.com/wp-content/blogs.dir/229/files/2016/01/steven-adams-nba-dallas-mavericks-oklahoma-city-thunder.jpg",
      name: 'Steven Adams',
      position: 'C',
      height: '7-0',
      weight: '255',
      predraft: 'Pittsburgh'

    }
  ],

  $scope.timberwolves = [
    {
      icon: "https://dunkingwithwolves.com/wp-content/uploads/getty-images/2017/11/876911676-minnesota-timberwolves-v-charlotte-hornets.jpg.jpg",
      name: 'Jeff Teague',
      position: 'G',
      height: '6-2',
      weight: '186',
      predraft: 'Wake Forest'

    },

    {
      icon: "http://images.performgroup.com/di/library/sportal_com_au/52/43/butler_1ejzzhtao57t7135tn5egs1c4m.jpg?w=1280&h=720&quality=100",
      name: 'Jimmy Butler',
      position: 'G',
      height: '6-7',
      weight: '231',
      predraft: 'Marquette'
    },


    {
      icon: "http://hoopshabit.com/wp-content/uploads/usat-images/2016/04/9882981-nba-chicago-bulls-at-minnesota-timberwolves.jpeg",
      name: 'Andrew Wiggins',
      position: 'F',
      height: '6-8',
      weight: '199',
      predraft: 'Kansas'
    },


    {
      icon: "https://dunkingwithwolves.com/wp-content/uploads/getty-images/2017/10/859190662-golden-state-warriors-v-minnesota-timberwolves.jpg.jpg",
      name: 'Taj Gibson',
      position: 'F',
      height: '6-9',
      weight: '236',
      predraft: 'USC'
    },


    {
      icon: "http://img.bleacherreport.net/img/images/photos/003/544/793/hi-res-793ae8150a445f243bbe352aee3896a7_crop_north.jpg?1447419508&w=630&h=420",
      name: 'Karl Anthony-Towns',
      position: 'C',
      height: '7-0',
      weight: '244',
      predraft: 'Kentucky'
    }

  ],


  $scope.jazz = [
    {
      icon: "https://imagesvc.timeincapp.com/v3/fan/image?url=https://dunkingwithwolves.com/wp-content/uploads/getty-images/2017/10/858465560-maccabi-haifa-v-utah-jazz.jpg.jpg&",
      name: 'Ricky Rubio',
      position: 'G',
      height: '6-4',
      weight: '190',
      predraft: 'Spain'
    },


    {
      icon: "https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fthejnotes.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F10%2F857497856-sydney-kings-v-utah-jazz.jpg.jpg&c=sc&w=850&h=560",
      name: 'Donovan Mitchell',
      position: 'G',
      height: '6-3',
      weight: '215',
      predraft: 'Louisville'

    },


    {
      icon:"https://img.bleacherreport.net/img/images/photos/003/676/761/hi-res-3783a64e5ea73eb22d3567d42a51c44d_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",
      name: 'Joe Ingles', 
      position: 'F', 
      height: '6-8',
      weight: '226',
      predraft: 'Austrailia'

    },


    {
      icon: "http://a.espncdn.com/photo/2017/0512/r208781_608x342_16-9.jpg",
      name: 'Derrick Favors',
      position: 'F',
      height: '6-10',
      weight: '265',
      predraft: 'Georgia Tech'

    },


    {
      icon: "http://uproxx.files.wordpress.com/2017/02/rudy-gobert1.jpg?quality=100&w=650",
      name: 'Rudy Gobert',
      position: 'C',
      height: '7-1',
      weight: '245',
      predraft: 'France'

    }

  ],

  $scope.nuggets = [
    {
      icon: "http://images.performgroup.com/di/library/omnisport/8b/70/emmanuel-mudiay-11415-usnews-getty-ftr_nudfsbon5v4c1h55uj68zvsm0.jpg?t=-762343448",
      name: 'Emmanuel Mudiay',
      position: 'G',
      height: '6-5',
      weight: '200',
      predraft: 'China'
    },

    {
      icon: "http://a.espncdn.com/photo/2017/0218/r181841_608x342_16-9.jpg",
      name: 'Jamal Murray',
      position: 'G',
      height: '6-4',
      weight: '207',
      predraft: 'Kentucky'
    },

    {
      icon: "http://bsndenver.com/wp-content/uploads/2016/04/gary-harris-0223.jpg",
      name: 'Gary Harris',   
      position: 'G',
      height: '6-4',
      weight: '210',
      predraft: 'Michigan State'
    },

    {
      icon: "http://media.thedenverchannel.com/photo/2016/01/03/kenneth-faried_Fotor_1451833532486_29313957_ver1.0_640_480.jpg",
      name: 'Kenneth Faried',
      position: 'F',
      height: '6-8',
      weight: '228',
      predraft: 'Morehead State'
    },

    {
      icon: "http://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2016%2F0117%2Fr44865_1296x729_16%2D9.jpg",
      name: 'Nikola Jokic',
      position: 'C',
      height: '6-10',
      weight: '250',
      predraft: 'Serbia'
    }



  ],


  $scope.trailblazers = [
    {
      icon: "http://www.sportsonearth.com/assets/images/1/9/2/139887192/cuts/GettyImages_460640784_n0lywddm_y242pu4e.jpg",
      name: 'Damian Lillard',
      position: 'G',
      height: '6-3',
      weight: '195',
      predraft: 'Weber State'
    },


    {
      icon: "https://img.bleacherreport.net/img/images/photos/003/671/763/hi-res-d86ce8b701b255f1564d695a57fc5b40_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",
      name: 'C.J. McCollum',
      position: 'G',
      height: '6-3',
      weight: '190',
      predraft: 'Lehigh'
    },


    {
      icon: "https://clutchpoints.com/wp-content/uploads/2017/08/Evan-Turner-Jennifer-Stewart-USATSI-e1503059976184.jpg",
      name: 'Evan Turner',
      position: 'F',
      height:'6-7',
      weight:'220',
      predraft: 'Ohio State'
    },


    {
      icon: "https://d13csqd2kn0ewr.cloudfront.net/uploads/image/file/153507/cropped_GettyImages-503013750.jpg?ts=1452489832",
      name: 'Al-Farouq Aminu',
      position: 'F',
      height: '6-9',
      weight: '220',
      predraft: 'Wake Forest'
    },


    {
      icon: "http://oregonsportsnews.com/wp-content/uploads/2017/08/JusufNurkic.jpg",
      name: 'Jusuf Nurkic',
      position: 'C',
      height: '7-0',
      weight: '280',
      predraft:'Bosnia and Herzegovina'
    }


  ],


  $scope.spurs = [
    {
      icon: "http://img.bleacherreport.net/img/images/photos/002/635/714/hi-res-452302161-tony-parker-of-the-san-antonio-spurs-drives-to-the_crop_north.jpg?1385765530&w=630&h=420",
      name: 'Tony Parker',
      position: 'G',
      height: '6-2',
      weight: '185',
      predraft: 'France'

    },

    {
      icon: "http://thesportsfanjournal.com/wp-content/uploads/2012/05/danny-green-san-antonio-spurs.jpg",
      name: 'Danny Green',
      position: 'G',
      height: '6-6',
      weight: '215',
      predraft: 'North Carolina'
    },

    {
      icon: "http://www.noticiassin.com/wp-content/uploads/2014/12/Kawhi-Leonard.jpg",
      name: 'Kawhi Leonard',
      position: 'F',
      height: '6-7',
      weight: '260',
      predraft: 'San Diego State'
    },

    {
      icon: "http://ww4.hdnux.com/photos/43/05/21/9196667/3/rawImage.jpg",
      name: 'LaMarcus Aldridge',
      position: 'F',
      height: '6-11',
      weight: '260',
      predraft: 'Texas'
    },


    {
      icon: "http://www.espnsa.com/wp-content/uploads/2017/01/Pau2-e1484940290611.jpg",
      name: 'Pau Gasol',
      position: 'C',
      height: '7-0',
      weight: '250',
      predraft: 'Spain'
    }

  ],


  $scope.grizzlies = [
    {
      icon: "http://img.bleacherreport.net/img/images/photos/003/647/141/ee95d67ca7a8afeca79d93afec516857_crop_north.jpg?1481914896&w=630&h=420",
      name: 'Mike Conley',
      position: 'G',
      height: '6-1',
      weight: '175',
      predraft: 'Ohio State'
    },

    {
      icon: "https://localtvwreg.files.wordpress.com/2017/10/fullsizerender-4.jpg?quality=85&strip=all&w=770",
      name: 'Tyreke Evans',
      position: 'G',
      height: '6-6',
      weight: '220',
      predraft: 'Memphis'
    },

    {
      icon: "http://a.espncdn.com/combiner/i?img=%2Fphoto%2F2016%2F1107%2Fr149826_1296x729_16%2D9.jpg",
      name: 'Chandler Parsons',
      position: 'F',
      height: '6-10',
      weight: '230',
      predraft: 'Florida'
    },

    {
      icon: "https://www.gannett-cdn.com/-mm-/34bd8cdf4affcc8827ac1c121b8070de46a6980e/c=0-19-629-374&r=x329&c=580x326/local/-/media/2016/02/21/Montgomery/Montgomery/635916939994529084-JaMychal-Green-AP-Memphis-Grizzlies.jpg",
      name: 'JaMychal Green',
      position: 'F',
      height: '6-9',
      weight: '227',
      predraft: 'Alabama'
    },


    {
      icon:"https://blog-blogmediainc.netdna-ssl.com/upload/SportsBlogcom/54607/0859035001431876733_filepicker.jpg",
      name: 'Marc Gasol',
      position: 'C',
      height: '7-1',
      weight: '225',
      predraft: 'Spain'
    }

  ],

  $scope.rockets = [
    {
      icon: "https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/10/20/chris-paul-injury-update.jpg",
      name: 'Chris Paul',
      position: 'G',
      height: '6-0',
      weight: '175',
      predraft: 'Wake Forest'
    },


    {
      icon: "https://www.gannett-cdn.com/-mm-/2ffe081239036ea1aef01395e7196d58149bfa6a/c=0-0-2830-2128&r=x404&c=534x401/local/-/media/2016/11/02/USATODAY/USATODAY/636136834240698331-USP-NBA--Houston-Rockets-at-Los-Angeles-Lakers.jpg",
      name: 'James Harden',
      position: 'G',
      height: '6-5',
      weight: '220',
      predraft: 'Arizona State'
    },


    {
      icon: "https://d3d2maoophos6y.cloudfront.net/wp-content/uploads/sites/5/2015/05/19201510/tariza.jpg",
      name: 'Trevor Ariza',
      position: 'F',
      height: '6-8',
      weight: '215',
      predraft: 'UCLA'
    },

  
    {
      icon: "http://images.performgroup.com/di/library/sporting_news/80/2c/ryan-anderson-getty-ftr-111516_czaqq1pdjkub10glfi9ln1r87.jpg?t=1761798520&w=960&quality=70",
      name: 'Ryan Anderson',
      position: 'F',
      height: '6-10',
      weight: '240',
      predraft: 'California'
    },

     {
      icon: "http://ww2.hdnux.com/photos/60/16/04/12640545/3/920x920.jpg",
      name: 'Clint Capela',
      position: 'C',
      height: '6-10',
      weight: '240',
      predraft: 'Switzerland'
    }

  ],


  $scope.mavericks = [
    {
      icon: "https://usathoopshype.files.wordpress.com/2017/10/dennissmithjr_3.jpg?w=1000&h=600&crop=1",
      name: 'Dennis Smith Jr.',
      position: 'G',
      height: '6-3',
      weight: '195',
      predraft: 'North Carolina State'
    },

    {
      icon: "http://www.dailyherald.com/storyimage/DA/20151202/sports/312029980/AR/0/AR-312029980.jpg&updated=201512020120&MaxW=800&maxH=800&noborder",
      name: 'Wesley Matthews',
      position: 'G',
      height: '6-5',
      weight: '220',
      predraft: 'Marquette'
    },

    {
      icon: "http://www.wfaa.com/img/resize/content.wfaa.com/photo/2016/10/05/1005_harrison_barnes_1475701870683_6368311_ver1.0.jpg?preset=534-401",
      name: 'Harrison Barnes',
      position: 'F',
      height: '6-8',
      weight: '225',
      predraft: 'North Carolina'
    },

    {
      icon: "http://www4.pictures.zimbio.com/gi/Dirk+Nowitzki+Miami+Heat+v+Dallas+Mavericks+ZqWg_mW1bz7l.jpg",
      name: 'Dirk Nowitzki',
      position: 'F',
      height: '7-0',
      weight: '245',
      predraft: 'Germany'
    },

    {
      icon: "https://s3media.247sports.com/Uploads/Assets/168/448/5448168.jpg",
      name: 'Nerlens Noel',
      position: 'C',
      height: '6-11',
      weight: '228',
      predraft: 'Kentucky'
    }

  ],

  $scope.pelicans = [
    {
      icon: "https://cdn.vox-cdn.com/thumbor/AuhmYhYP_KrUFJEiEtuuNvddxPI=/0x0:4256x2832/1200x800/filters:focal(1596x521:2276x1201)/cdn.vox-cdn.com/uploads/chorus_image/image/57458343/usa_today_10330627.0.jpg",
      name: 'Rajon Rondo',
      position: 'G',
      height: '6-1',
      weight: '186',
      predraft: 'Kentucky'
    },


    {
      icon: "http://images.performgroup.com/di/library/omnisport/4/7/jrue-holiday_1eczpq0wy8wor1x550d2v9x8fx.jpg?t=-1646870453",
      name: 'Jrue Holiday',
      position: 'G',
      height: '6-4',
      weight: '205',
      predraft: 'UCLA'
    },


    {
      icon: "https://usathoopshype.files.wordpress.com/2016/10/etwaun-moore-pels-3.jpg?w=1000&h=692",
      name: "E'Twaun Moore",
      position: 'G',
      height: '6-4',
      weight: '191',
      predraft: 'Purdue'
    },


    {
      icon: "https://cdn.vox-cdn.com/thumbor/Exjrvz344wzwVtHLwoOWjdd6sYg=/0x0:3999x2666/1200x800/filters:focal(1412x845:2050x1483)/cdn.vox-cdn.com/uploads/chorus_image/image/51750013/usa_today_9638835.0.jpg",
      name: 'Anthony Davis',
      position: 'F',
      height: '6-11',
      weight: '253',
      predraft: 'Kentucky'
    },


    {
      icon: "http://img.bleacherreport.net/img/images/photos/003/661/073/hi-res-6b40d25b6a54467f4a1a1a28bc71b3b9_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",
      name: 'DeMarcus Cousins',
      position: 'F',
      height: '6-11',
      weight: '270',
      predraft: 'Kentucky'
    }

  ],


  $scope.cavs = [
    {
      icon:"http://www.nbcsports.com/boston/sites/csnne/files/styles/article_hero_image/public/2018/01/03/cp-cavs-isaiah-thomas-010318.jpg?itok=lpvajjfs",
      name: 'Isaiah Thomas',
      position: 'G',
      height: '5-9',
      weight: '185',
      predraft: 'Washington'
    },

    {
      icon: "http://static1.businessinsider.com/image/578d09914321f1362f8b8606-1500/jr%20smith%20cavs.jpg",
      name: 'J.R. Smith',
      position: 'G',
      height: '6-6',
      weight: '225',
      predraft: 'Saint Benedicts Prep (HS)'
    },

    {
      icon: "https://fortunedotcom.files.wordpress.com/2017/03/wgl-2017-lebron-james.jpg?w=840&h=485&crop=1",
      name: 'Lebron James',
      position: 'F',
      height: '6-8',
      weight: '250',
      predraft: 'St Vincent-St Mary (HS)'
    },

    {
      icon:  "https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fkingjamesgospel.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F10%2F860639322-chicago-bulls-vs-cleveland-cavaliers.jpg.jpg&c=sc&w=850&h=560",
      name: 'Jae Crowder',
      position: 'F',
      height: '6-6',
      weight:'235',
      predraft: 'Marquette'
    },


    {
      icon: "http://images.performgroup.com/di/library/omnisport/32/4c/kevin-love-cropped_45cwznlvc0mf1tn1zp5lk2lh5.jpg?t=-1798585952&w=960&quality=70",
      name: 'Kevin Love',
      position: 'C',
      height: '6-10',
      weight: '251',
      predraft: 'UCLA'
    }
  ],


  $scope.bucks = [
    
    {
      icon: "http://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2017%2F1110%2Fr287284_1296x729_16%2D9.jpg",
      name: 'Eric Bledsoe',
      position: 'G',
      height: '6-1',
      weight: '205',
      predraft: 'Kentucky'
    },


    {
      icon: "https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fbehindthebuckpass.com%2Fwp-content%2Fuploads%2Fusat-images%2F2016%2F04%2F9785562-nba-milwaukee-bucks-at-minnesota-timberwolves.jpeg&c=sc&w=850&h=560",
      name: 'Tony Snell',
      position: 'G',
      height: '6-7',
      weight: '221',
      predraft: 'New Mexico'
    },


    {
      icon:  "https://onmilwaukee.com/images/articles/mi/milwaukee-bucks-khris-middleton-returns/milwaukee-bucks-khris-middleton-returns_fullsize_story1.jpg",
      name: 'Khris Middleton',
      position: 'F',
      height: '6-8',
      weight: '234',
      predraft: "Texas A&M"
    },

    {
      icon:  "http://images.performgroup.com/di/library/omnisport/36/f9/giannis-1317-usnews-getty-ftr_plhlto6aitdp1800u20v4kdgt.jpg?t=1706596209&w=960&quality=70",
      name: 'Giannis Antetokounmpo',
      position: 'F',
      height: '6-11',
      weight: '222', 
      predraft: 'Greece'
    },     

    {
      icon: "http://a.espncdn.com/photo/2015/1020/r18769_608x342_16-9.jpg", 
      name: 'John Henson',
      position: 'C',
      height: '6-11',
      weight: '229',
      predraft: 'North Carolina'
    }     


  ],


  $scope.bulls = [
    {
      icon: "https://cdn.vox-cdn.com/thumbor/r0fTdkMJq1hIIqBJaZaJwyjacfE=/0x0:3423x4185/1200x800/filters:focal(1567x500:2113x1046)/cdn.vox-cdn.com/uploads/chorus_image/image/57390563/857699170.0.jpg",
      name: 'Kris Dunn', 
      position: 'G',
      height: '6-4',
      weight: '210',
      predraft: 'Providence'
    },


    {
      icon: "http://i.cdn.turner.com/drp/nba/bulls/sites/default/files/styles/hi_res_full_width/public/170710-holiday-signing.jpg?itok=wtx2j89_",
      name: 'Justin Holiday',
      position: 'G',
      height: '6-6',
      weight: '185',
      predraft: 'Washington'
    },


    {
      icon: "http://a.espncdn.com/photo/2016/1004/r135265_600x400_3-2.jpg",
      name: 'Denzel Valentine',
      position: 'F',
      height: '6-6',
      weight: '214',
      predraft: 'Michigan State'
    },

    {
      icon: "https://suntimesmedia.files.wordpress.com/2017/11/lauri3.jpg?w=656&h=369",
      name: 'Lauri Markkanen',
      position: 'F',
      height: '7-0',
      weight: '230',
      predraft: 'Arizona'
    },


    {
      icon: "http://i.cdn.turner.com/drp/nba/bulls/sites/default/files/styles/hi_res_full_width/public/rolostory3.jpg?itok=lg8KtWaV",
      name: 'Robin Lopez',
      position: 'C',
      height: '7-0',
      weight: '277',
      predraft: 'Stanford'
    }

  ],


  $scope.pacers = [
    {
      icon: "https://www.gannett-cdn.com/-mm-/1002785a65eb94897387462cb46099346a23c5a3/c=0-111-1911-2658&r=537&c=0-0-534-712/local/-/media/2017/10/20/INGroup/Indianapolis/636441275187551537-USATSI-10357741.jpg",
      name: 'Darren Collison',
      position: 'G',
      height: '6-2',
      weight: '185',
      predraft: 'UCLA'
    },

    {
      icon: "http://sports.inquirer.net/files/2017/12/oladipo-pacers-cavaliers-afp.jpg",
      name: 'Victor Oladipo',
      position: 'G',
      height: '6-4',
      weight: '210',
      predraft: 'Indiana'
    },

    {
      icon: "http://i.cdn.turner.com/drp/nba/pacers/sites/default/files/styles/story_main_photo/public/gettyimages-866454520-bogdanovic-760.jpg?itok=o5qvor9D",
      name: 'Bojan Bogdanovic',
      position: 'F',
      height: '6-8',
      weight: '230',
      predraft: 'Bosnia and Herzegovina'
    },


    {
      icon: "http://i.cdn.turner.com/drp/nba/pacers/sites/default/files/styles/main_gallery_photo__480_tall/public/gettyimages-618915218_master.jpg?itok=-xF4RSVa",
      name: 'Thaddeus Young',
      position: 'F',
      height: '6-8',
      weight: '230',
      predraft: 'Georgia Tech'
    },

    {
      icon: "https://s3media.247sports.com/Uploads/Assets/326/578/6_4578326.jpg",
      name: 'Myles Turner',
      position: 'C',
      height: '6-11',
      weight: '255',
      predraft: 'Texas'
    }

  ],

  $scope.pistons = [
    {
      icon: "http://themajors.net/detroit/wp-content/uploads/2017/02/reggie-jackson-detroit-pistons_20150321.jpg",
      name: 'Reggie Jackson',
      position: 'G',
      height: '6-3',
      weight: '208',
      predraft: 'Boston College'
    },

    {
      icon: "https://nesncom.files.wordpress.com/2017/11/avery-bradley.jpg?w=640",
      name: 'Avery Bradley',
      position: 'G', 
      height:'6-2',
      weight: '180',
      predraft: 'Texas'
    },

    {
      icon: "https://sportshub.cbsistatic.com/i/r/2016/08/26/bf3872ac-b0ae-4a02-8a4d-7328b015a44b/thumbnail/770x433/46dde01e69d79500f2e60ac403bc8d90/reggiebullock.jpg",
      name: 'Reggie Bullock',
      position: 'F',
      height: '6-7',
      weight: '205',
      predraft: 'North Carolina'
    },

    {
      icon: "http://i.cdn.turner.com/drp/nba/pistons/sites/default/files/harris_800_160315.jpg",
      name: 'Tobias Harris', 
      position: 'F',
      height: '6-9',
      weight: '235',
      predraft: 'Tennessee'
    },


    {
      icon: "https://www.gannett-cdn.com/-mm-/778165c1655b19ad14a36ccf12128185956e4cb5/c=310-0-5162-3648&r=x404&c=534x401/local/-/media/2017/04/06/DetroitFreePress/DetroitFreePress/636270356087071272-GTY-665049620-1-.jpg",
      name: 'Andre Drummond',
      position: 'C',
      height: '6-11', 
      weight: '279',
      predraft: 'Connecticut'
    }
  ],

  $scope.celtics = [
    {
      icon: "https://img.bleacherreport.net/img/images/photos/003/701/327/hi-res-6fb98ac8ffdcd8ef8c4adba9ca0acd18_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",
      name: 'Kyrie Irving',
      position: 'G',
      height: '6-3',
      weight: '193',
      predraft: 'Duke'

    },


    {
      icon: "https://nesncom.files.wordpress.com/2017/11/usatsi_10367962_168381014_lowres-e1510158532836.jpg?w=640",
      name: 'Jaylen Brown', 
      position: 'G',
      height: '6-7',
      weight: '225',
      predraft: 'California'
    },

    {
      icon: "https://www.gannett-cdn.com/-mm-/3f2046a3a109546b42614175171aeb73b96dbae2/c=788-140-1972-1718&r=537&c=0-0-534-712/local/-/media/2017/11/21/USATODAY/USATODAY/636468597287923059-USATSI-10337384.jpg",
      name: 'Jayson Tatum', 
      position: 'F',
      height: '6-8',
      weight: '205',
      predraft: 'Duke'
    },

    {
      icon: "https://cbsboston.files.wordpress.com/2016/10/gettyimages-618469610.jpg?w=628",
      name: 'Al Horford',
      position: 'F',
      height: '6-10',
      weight: '245',
      predraft: 'Florida'
    },

    {
      icon: "https://cdn.vox-cdn.com/thumbor/S86tMm2ozrCdeHtHwkMRsXUnI3U=/0x0:2578x2427/1200x800/filters:focal(980x768:1392x1180)/cdn.vox-cdn.com/uploads/chorus_image/image/57376655/865371184.0.jpg",
      name: 'Aron Baynes',
      position: 'C',
      height: '6-10',
      weight: '260', 
      predraft: 'Washington State'
    }

  ],

  $scope.nets = [
    {
      icon: "http://assets.nydailynews.com/polopoly_fs/1.3154569.1494467337!/img/httpImage/image.jpg_gen/derivatives/article_750/linracismweb11s-1-web.jpg",
      name: 'Jeremy Lin',
      position: 'G',
      height: '6-3',
      weight: '200',
      predraft: 'Harvard'

    },


    {
      icon: "https://cdn.nba.net/nba-drupal-prod/styles/landscape/s3/2017-11/russellhl_0.jpg?itok=oQ1bHhVT",
      name: "D'Angelo Russell", 
      position: 'G',
      height: '6-5',
      weight: '195',
      predraft: 'Ohio State'
    },

    {
      icon: "https://cdn.newsday.com/polopoly_fs/1.14561258.1508557810!/httpImage/image.jpeg_gen/derivatives/landscape_768/image.jpeg",
      name: 'DeMare Caroll', 
      position: 'F',
      height: '6-8',
      weight: '215',
      predraft: 'Missouri'
    },

    {
      icon: "https://cdn.vox-cdn.com/thumbor/MoELIWsjEseeHfi1N0mGZEZIIYI=/0x0:3632x2421/1200x800/filters:focal(1613x637:2193x1217)/cdn.vox-cdn.com/uploads/chorus_image/image/57425491/usa_today_10384772.0.jpg",
      name: 'Rondae Hollis-Jefferson',
      position: 'F',
      height: '6-7',
      weight: '214',
      predraft: 'Arizona'
    },

    {
      icon: "https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fkeepingitheel.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F12%2F896325844-sacramento-kings-v-brooklyn-nets.jpg.jpg&c=sc&w=850&h=560",
      name: 'Tyler Zeller',
      position: 'C',
      height: '7-0',
      weight: '250',
      predraft: 'North Carolina'
    }

  ],

  $scope.sixers = [
    {
      icon: "https://cdn.vox-cdn.com/thumbor/ITmoJyA8tB9SL54GGjxu7EwMdi0=/0x0:4121x2748/1200x800/filters:focal(1732x1045:2390x1703)/cdn.vox-cdn.com/uploads/chorus_image/image/57194871/usa_today_10338309.0.jpg",
      name: 'Ben Simmons',
      position: 'F',
      height: '6-10',
      weight: '230',
      predraft: 'LSU'

    },


    {
      icon: "https://media.gq.com/photos/59ee651324789d7510df1e8f/master/pass/jj-redick-interview-gq.jpg",
      name: 'J.J. Reddick',
      position: 'G',
      height: '6-4',
      weight: '200',
      predraft: 'Duke'
    },

    {
      icon: "https://cdn-s3.si.com/s3fs-public/2017/03/09/robert-covington-defense.jpg",
      name: 'Robert Covington',
      position: 'F',
      height: '6-9',
      weight: '225',
      predraft: 'Tennessee State'
    },

    {
      icon: "https://cdn.fansided.com/wp-content/blogs.dir/98/files/2016/10/9594558-nba-preseason-washington-wizards-philadelphia-76ers-1-850x552.jpg",
      name: 'Dario Saric',
      position: 'F',
      height: '6-10',
      weight: '223',
      predraft: 'Croatia'
    },

    {
      icon: "https://cdn.vox-cdn.com/thumbor/kRpelpb1756ua-P2rbpAq08p7-I=/0x0:3756x2672/1200x800/filters:focal(1578x1036:2178x1636)/cdn.vox-cdn.com/uploads/chorus_image/image/57628409/usa_today_10415474.0.jpg",
      name: 'Joel Embiid',
      position: 'C',
      height: '7-0',
      weight: '250',
      predraft: 'Kansas'
    }

  ],


  $scope.raptors = [
    {
      icon: "https://usatftw.files.wordpress.com/2016/05/usp-nba_-playoffs-miami-heat-at-toronto-raptors.jpg?w=1000&h=600&crop=1",
      name: 'Kyle Lowry',
      position: 'G',
      height: '6-0',
      weight: '205',
      predraft: 'Villanova'

    },


    {
      icon: "http://images.performgroup.com/di/library/Sporting_News_CA_CMS_image_storage/d9/f2/demar-derozan-raptors-ftr-110317-getty_bgiqbze0sn4b1ixyqafe2z2ob.jpg?t=-2067413401&w=960&quality=70",
      name: 'DeMar DeRozan',
      position: 'G',
      height: '6-7',
      weight: '220',
      predraft: 'USC'
    },

    {
      icon: "http://a.espncdn.com/photo/2017/1114/r288819_608x342_16-9.jpg",
      name: 'OG Anuoby',
      position: 'F',
      height: '6-8',
      weight: '235',
      predraft: 'Indiana'
    },

    {
      icon: "http://assets3.sportsnet.ca/wp-content/uploads/2017/03/serge_ibaka.jpg",
      name: 'Serge Ibaka',
      position: 'F',
      height: '6-10',
      weight: '235',
      predraft: 'Congo'
    },

    {
      icon: "http://img.bleacherreport.net/img/images/photos/003/597/476/hi-res-c4ffcca99eeb96550a9a31501054e348_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",
      name: 'Jonas Valanciunas',
      position: 'C',
      height: '7-0',
      weight: '255',
      predraft: 'Lithuania'
    }

  ],

  $scope.knicks = [
    {
      icon: "https://thenypost.files.wordpress.com/2017/10/jarrett_jack.jpg?quality=90&strip=all",
      name: 'Jarrett Jack',
      position: 'G',
      height: '6-3',
      weight: '200',
      predraft: 'Georgia Tech'

    },


    {
      icon: "http://www1.pictures.zimbio.com/gi/New+York+Knicks+v+Houston+Rockets+JlI2Ca-Sr31l.jpg",
      name: 'Courtney Lee',
      position: 'G',
      height: '6-5',
      weight: '200',
      predraft: 'Western Kentucky'
    },

    {
      icon: "https://cdn.newsday.com/polopoly_fs/1.15563730.1513996052!/httpImage/image.jpeg_gen/derivatives/landscape_768/image.jpeg",
      name: 'Michael Beasley',
      position: 'F',
      height: '6-9',
      weight: '235',
      predraft: 'Kansas State'
    },

    {
      icon: "https://usatftw.files.wordpress.com/2016/03/usp_nba__toronto_raptors_at_new_york_knicks_79893174.jpg?w=1000&h=600&crop=1",
      name: 'Kristaps Porzingis',
      position: 'F',
      height: '7-3',
      weight: '240',
      predraft: 'Latvia'
    },

    {
      icon: "https://cdn.elitesportsny.com/wp-content/uploads/2017/11/GettyImages-870695288-640x432.jpg",
      name: 'Enes Kanter',
      position: 'C',
      height: '6-11',
      weight: '245',
      predraft: 'Kentucky'
    }

  ];


  $scope.heats = [
    {
      icon: "http://www.trbimg.com/img-58995a2b/turbine/sfl-miami-heat-ask-ira-goran-dragic-s020717",
      name: 'Goran Dragic',
      position: 'G',
      height: '6-3',
      weight: '190',
      predraft: 'Yugoslavia'

    },


    {
      icon: "http://heatnation.com/wp-content/uploads/2016/11/heat-wizards-basketball-jpe-1.jpg",
      name: 'Dion Waiters',
      position: 'G',
      height: '6-4',
      weight: '215',
      predraft: 'Syracuse'
    },

    {
      icon: "https://cdn2.newsok.biz/cache/w640-7c245f859fe64bd868e247677164c046.jpg",
      name: 'Josh Richardson',
      position: 'G',
      height: '6-6',
      weight: '200',
      predraft: 'Tennessee'
    },

    {
      icon: "https://cmgpbpheatzone.files.wordpress.com/2017/10/hawks_heat_basketball_33858.jpg",
      name: 'Kelly Olynk',
      position: 'F',
      height: '7-0',
      weight: '245',
      predraft: 'Gonzaga'
    },

    {
      icon: "https://img.bleacherreport.net/img/images/photos/003/703/372/hi-res-3d9038eff33c212a532ccb55d70a776a_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",
      name: 'Hassan Whiteside',
      position: 'C',
      height: '7-0',
      weight: '265',
      predraft: 'Marshall'
    }

  ],

  $scope.hornets = [
    {
      icon: "http://i.cdn.turner.com/drp/nba/hornets/sites/default/files/styles/story_main_photo/public/150126_walker_inside.jpg?itok=CkKc8iRk",
      name: 'Kemba Walker',
      position: 'G',
      height: '6-1',
      weight: '184',
      predraft: 'Connecticut'

    },


    {
      icon: "http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2017%2F0212%2Fr180303_1296x729_16%2D9.jpg",
      name: 'Nicolas Batum',
      position: 'G',
      height: '6-8',
      weight: '200',
      predraft: 'France'
    },

    {
      icon: "https://swarmandsting.com/wp-content/blogs.dir/179/files/2014/12/michael-kidd-gilchrist-nba-preseason-indiana-pacers-charlotte-hornets.jpg",
      name: 'Michael Kidd-Gilchrist',
      position: 'F',
      height: '6-7',
      weight: '232',
      predraft: 'Kentucky'
    },

    {
      icon: "https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fswarmandsting.com%2Ffiles%2F2016%2F09%2F9265865-marvin-williams-nba-playoffs-miami-heat-charlotte-hornets.jpg&c=sc&w=850&h=560",
      name: 'Marvin Williams',
      position: 'F',
      height: '6-9',
      weight: '237',
      predraft: 'North Carolina'
    },

    {
      icon: "https://capsportsreport.files.wordpress.com/2017/10/w1080xh810_gettyimages-856836076.jpg?w=450&h=338",
      name: 'Dwight Howard',
      position: 'C',
      height: '6-11',
      weight: '265',
      predraft: 'Southwest Atlanta Christian (HS)'
    }

  ],

  $scope.magics = [
    {
      icon: "https://cdn.vox-cdn.com/thumbor/5bjJ9jxk2HGCrJFTjnhR-uGTTew=/0x172:2400x3600/1200x800/filters:focal(817x427:1201x811)/cdn.vox-cdn.com/uploads/chorus_image/image/55793009/618902692.0.jpg",
      name: 'Elfrid Payton',
      position: 'G',
      height: '6-4',
      weight: '185',
      predraft: 'Louisana-Lafayette'

    },


    {
      icon: "http://hoopshabit.com/wp-content/uploads/usat-images/2016/04/9864308-nba-houston-rockets-at-orlando-magic.jpeg",
      name: 'Evan Fournier',
      position: 'G',
      height: '6-7',
      weight: '205',
      predraft: 'France'
    },

    {
      icon: "http://a.espncdn.com/photo/2017/1115/r289328_608x342_16-9.jpg",
      name: 'Jonathan Simmons',
      position: 'F',
      height: '6-6',
      weight: '195',
      predraft: 'Houston'
    },

    {
      icon: "http://img.bleacherreport.net/img/images/photos/003/553/889/hi-res-42ceb0e9cb09297a3c7e64b664906af0_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",
      name: 'Aaron Gordon',
      position: 'F',
      height: '6-9',
      weight: '220',
      predraft: 'Arizona'
    },

    {
      icon: "http://img.bleacherreport.net/img/images/photos/003/614/050/hi-res-d8e34401d5ae0b14138b14a5cf61f193_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",
      name: 'Nikola Vucevic',
      position: 'C',
      height: '7-0',
      weight: '260',
      predraft: 'USC'
    }

  ],



  $scope.hawks = [
    {
      icon: "http://img.bleacherreport.net/img/images/photos/003/661/123/hi-res-fe08e14fa49e00f6c16a9e7d29c680cf_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",
      name: 'Dennis Schroder',
      position: 'G',
      height: '6-1',
      weight: '172',
      predraft:'Germany'

    },


    {
      icon: "https://soaringdownsouth.com/wp-content/blogs.dir/131/files/2016/09/9024232-kent-bazemore-nba-atlanta-hawks-houston-rockets.jpg",
      name: 'Kent Bazemore',
      position: 'G',
      height: '6-5',
      weight: '201',
      predraft: 'Old Dominion'
    },

    {
      icon: "https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fhoopshabit.com%2Ffiles%2F2016%2F11%2F9604605-taurean-prince-nba-preseason-detroit-pistons-atlanta-hawks.jpg&c=sc&w=850&h=560",
      name: 'Taurean Prince', 
      position: 'F', 
      height: '6-8',
      weight: '220',
      predraft: 'Baylor'
    },

    {
      icon: "http://a.espncdn.com/photo/2017/0310/r188941_608x342_16-9.jpg",
      name: 'Ersan Ilysova',
      position: 'F',
      height: '6-10',
      weight: '235',
      predraft: 'Turkey'
    },

    {
      icon: "https://soaringdownsouth.com/wp-content/blogs.dir/131/files/2016/10/9110074-mike-muscala-nba-atlanta-hawks-philadelphia-76ers-1.jpg",
      name: 'Mike Muscala',
      position: 'C',
      height: '6-11',
      weight: '240',
      predraft: 'Bucknell'
    }

  ],


  $scope.wizards = [
    {
      icon: "https://cdn.vox-cdn.com/thumbor/YiwkhptJtGsKcuJmQtizw8ZfCfs=/0x280:2666x2057/1200x800/filters:focal(0x280:2666x2057)/cdn.vox-cdn.com/uploads/chorus_image/image/17176235/20130415_krg_aw8_062.0.jpg",
      name: 'John Wall',
      position: 'G',
      height: '6-4',
      weight: '210',
      predraft: 'Kentucky'

    },


    {
      icon: "http://www.slamonline.com/wp-content/uploads/2017/12/BealFeature.jpg",
      name: 'Bradley Beal',
      position: 'G',
      height: '6-5',
      weight:'207',
      predraft: 'Florida'
    },

    {
      icon: "http://img.bleacherreport.net/img/images/photos/003/645/044/hi-res-fc3cb2848474bef5a0adc13b981e469e_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",
      name: 'Otto Porter Jr.',
      position: 'F',
      height: '6-8',
      weight: '198',
      predraft: 'Georgetown'
    },

    {
      icon: "https://usatftw.files.wordpress.com/2017/05/gty_674625010_90555276.jpg?w=1000&h=600&crop=1",
      name: 'Markieff Morris', 
      position: 'F',
      height: '6-10',
      weight: '245',
      predraft: 'Kansas'
    },

    {
      icon: "https://cdn-s3.si.com/s3fs-public/2015/01/08/washington-wizards-marcin-gortat-action-figure.jpg",
      name: 'Marcin Gortat',
      position: 'C',
      height: '6-11',
      weight: '240',
      predraft: 'Poland'
    }

  ];

}]); //end of controller
 




 //   icon: 
  //  name: 
  //  position: 
  //  height: 
  //  weight: 
  //  predraft: 

