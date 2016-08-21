//object constructor
var brunchtracker = function (title, address, nhd, opentime, website, lat, lng, placeId) {
    this.title = title;
    this.address = address;
    this.nhd = nhd;
    this.opentime = opentime;
    this.website = website;
    this.lat = lat;
    this.lng = lng;
    this.pId = placeId;
    this.upvotes = 0;
    this.downvotes = 0;
    this.restcomment ="";

    // table generation method
    this.addInfo = function(){
		
    var locationRow = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.innerText = this.title;
    locationRow.appendChild(nameCell);

    //var opentimeCell = document.createElement("td");
    //opentimeCell.innerText = this.opentime;
    //locationRow.appendChild(opentimeCell);

    var addressCell = document.createElement("td");
    addressCell.innerText = this.address;
    locationRow.appendChild(addressCell);

	
	var websiteAddress = this.website.replace("http://", "").replace("www.", "");
	//var websiteParts = websiteAddress.split('/', 2);
	var websitePart = websiteAddress.split('/', 2);
	//console.log(websitePart[0]);

    var websiteCell = document.createElement("td");
    //websiteCell.innerHTML = "<a href=" +this.website +" target='_blank'>" + this.website.replace("http://", "") + "</a>";
    websiteCell.innerHTML = "<a href=" +this.website +" target='_blank'>" + websitePart[0] + "</a>";

	locationRow.appendChild(websiteCell);

    var table = document.getElementById("restaurantListTable");
    table.appendChild(locationRow);
    };
};

var brunchArr = [
    new brunchtracker("Accanto", "2838 SE Belmont", "SE", "10:00 AM", "http://accantopdx.com/", 45.516269,  -122.636227,  'ChIJuew0jZaglVQRsDcgdKVrMd4'),
    new brunchtracker("Americano", "2605 E Burnside", "NE", "9:00 AM", "http://americanopdx.com/", 45.523118,  -122.639129,  'ChIJa8xdw76glVQRgTqoyUbRlnc'),
    new brunchtracker("Ankeny Tap & Table", "2724 SE Ankeny", "SE", "10:00 AM", "http://www.ankenypdx.com/#welcome", 45.521993,  -122.637737,  'ChIJ533W-b6glVQR8x4Mn-RWP90'),
    new brunchtracker("Apizza Scholls", "4741 SE Hawthorne", "SE", "11:30 AM", "http://www.apizzascholls.com/", 45.512267,  -122.613116,  'ChIJoXPFk_OglVQR_FemZBo2wf0'),
    new brunchtracker("Bare Bones Cafe", "2908 SE Belmont", "SE", "9:00 AM", "http://www.barebonescafe.net/", 45.516322,  -122.635814,  'ChIJCSe1k5aglVQR4ZODYv_sJxE'),
    new brunchtracker("Batter Griddle & Drinkery", "4425 NE Fremont", "NE", "8:00 AM", "http://www.batterpdx.com", 45.548422,  -122.617843,  'ChIJn26KEdOmlVQRqxDEd1zGNRw'),
    new brunchtracker("Bijou Cafe", "132 SW 3rd", "SW", "8:00 AM", "http://bijoucafepdx.com/", 45.517417,  -122.690221,  'ChIJb2s7EgMKlVQRwGOchKwvZPA'),
    new brunchtracker("Bottle + Kitchen", "50 SW Morrison", "SW", "7:00 AM", "http://www.bottlekitchen.com/", 45.517373,  -122.673259,  'ChIJC1Rc51GhlVQRi--jcc2M39g'),
    new brunchtracker("Bread and Ink Cafe", "3610 SE Hawthorne", "SE", "8:00 AM", "http://www.breadandinkcafe.com", 45.511934,  -122.626527,  'ChIJpbw-9I2glVQRpQUQ4z1a04Q'),
    new brunchtracker("Bridges Cafe", "2316 NE MLK", "NE", "8:00 AM", "http://www.bridgescafeandcatering.net", 45.539832,  -122.66116,  'ChIJ87ftZUinlVQRW1QmvjeymYQ'),
    new brunchtracker("Brunch Box", "620 SW 9th", "SW", "8:00 AM", "http://brunchboxpdx.com/", 45.520002,  -122.680823,  'ChIJ5V6vJgQKlVQR6yHjUUBnbck'),
    new brunchtracker("C Bar", "2880 SE Gladstone", "SE", "10:00 AM", "http://cbarportland.com/", 45.493205,  -122.635934,  'ChIJE1ORKoIKlVQRRH7WmIJTTDc'),
    new brunchtracker("Cadillac Cafe", "1801 NE Broadway", "NE", "7:00 AM", "http://cadillaccafepdx.com/", 45.535249,  -122.647447,  'ChIJOZHEj8qglVQRZ1kRodWvq4Y'),
    new brunchtracker("Cafe Broder", "2508 SE Clinton", "SE", "9:00 AM", "http://broderpdx.com/", 45.50318,  -122.64015,  'ChIJ95u3MoKglVQRLAr-IKz8YQk'),
    new brunchtracker("Cameo Cafe", "8111 NE Sandy", "NE", "6:30 AM", "http://www.cameocafe.com/", 45.55226,  -122.579407,  'ChIJC1Rc51GhlVQRi--jcc2M39g'),
    // new brunchtracker("Casa Maria", "3035 SE Division ", "SE", "8:00 AM", "http://casamiaondivision.com/", 45.504988,  -122.633949,  NONE),
    new brunchtracker("Cheese & Crack Shop", "22 SE 28th", "SE", "8:00 AM", "http://www.cheeseandcrack.com", 45.522443,  -122.637143,  'ChIJp5V-Ar-glVQR4YOIy-o0qzU'),
    new brunchtracker("Cheryl's on 12th", "1135 SW Washington", "SW", "8:00 AM", "http://www.cherylson12th.com/restaurant", 45.521998,  -122.683093,  'ChIJb2s7EgMKlVQRwGOchKwvZPA'),
    new brunchtracker("Chez Machin", "3553 SE Hawthorne", "SE", "9:00 AM", "http://www.chezmachin.com/", 45.512208,  -122.627581,  'ChIJAd5BBpKglVQRQIfXk1UdXOk'),
    new brunchtracker("Circa 33", "3348 SE Belmont", "SE", "11:00 AM", "http://circa33.com/", 45.516313,  -122.62994,  'ChIJFWl7f5SglVQRbH4kJTktfBk'),
    new brunchtracker("City State Diner", "128 NE 28th", "NE", "8:00 AM", "http://www.citystatediner.com", 45.52405,  -122.637063,  'ChIJoUGSN7-glVQRUNbGky0NFPo'),
    new brunchtracker("Coquine", "6839 SE Belmont", "SE", "8:00 AM", "http://www.coquinepdx.com", 45.517096,  -122.592392,  'ChIJj5vTbf6glVQRafj1UTq2hk4'),
    new brunchtracker("Costello's Travel Caffe", "2222 NE Broadway", "NE", "8:00 AM", "http://www.costellostravelcaffe.com", 45.534779,  -122.64243,  'ChIJJQ7WuMuglVQR4WoiSNjL7r8'),
    new brunchtracker("Country Cat", "7937 SE Stark", "SE", "9:00 AM", "http://thecountrycat.net/#about", 45.519311,  -122.581655,  'ChIJf7vKxAahlVQRmcAN_T5w3UQ'),
    new brunchtracker("Cricket Cafe", "3159 SE 32nd", "SE", "7:30 AM", "http://www.cricketcafepdx.com", 45.501961,  -122.632574,  'ChIJta3wE5SglVQRVpH_ixw-WIg'),
    new brunchtracker("Cup & Saucer Cafe", "3566 SE Hawthorne", "SE", "7:00 AM", "http://www.cupandsaucercafe.com/#!map/clav", 45.511915,  -122.627226,  'ChIJcylr9o2glVQRBR9ex8drm0I'),
    new brunchtracker("Delta Cafe", "4607 SE Woodstock", "SE", "9:00 AM", "http://www.deltacafepdx.com/", 45.479384,  -122.615186,  'ChIJqUwTs6AKlVQR3yka_MCVlDU'),
    new brunchtracker("Dot's", "2521 SE Clinton", "SE", "10:00 AM", "http://dotscafeportland.com/", 45.503465,  -122.639862,  'ChIJOXpGzYOglVQR5PrsyWcnsVM'),
    new brunchtracker("Doug Fir Lounge", "830 E Burnside", "NE", "7:00 AM", "http://www.dougfirlounge.com/", 45.522641,  -122.656824,  'ChIJJ3w0dqWglVQRHyqljAif6jI'),
    new brunchtracker("EastBurn", "1800 E Burnside", "NE", "10:00 AM", "http://eastburn.pagecloud.com/", 45.522706,  -122.647316,  'ChIJ4fAWDLuglVQRZWSJdYBYIjs'),
    new brunchtracker("Genie's Cafe", "1101 SE Division", "SE", "8:00 AM", "http://www.geniesdivision.com", 45.505,  -122.654581,  'ChIJO7-oMHcKlVQRJmiYGUP5PzY'),
    new brunchtracker("Genie's Too", "4800 SE Hawthorne", "SE", "8:00 AM", "http://www.spaceroomlounge.com", 45.511851,  -122.612884,  'ChIJJS4HjvOglVQRNcOvQSUIR7g'),
    new brunchtracker("Hale Pele", "2733 NE Broadway", "NE", "10:00 AM", "http://halepele.com/", 45.535379,  -122.637307,  'ChIJfdqyJsyglVQR-E1VNRS1jK4'),
    new brunchtracker("Happy Sparrow", "3001 SE Belmont", "SE", "8:00 AM", "http://www.happysparrowcafe.com", 45.516649,  -122.63462,  'ChIJG5wenJaglVQR-M87E2fYdjA'),
    new brunchtracker("Harlow", "3632 SE Hawthorne", "SE", "8:00 AM", "http://www.harlowpdx.com/", 45.5119,  -122.62609,  'ChIJ05kM9o2glVQRi4KO5kvwZjI'),
    new brunchtracker("Hawthorne Hophouse", "4111 SE Hawthorne", "SE", "10:00 AM", "http://oregonhophouse.com/", 45.512159,  -122.619617,  'ChIJ97f1K42glVQR0GhYbU4RVvU'),
    new brunchtracker("Hazel Room", "3279 SE Hawthrone", "SE", "8:00 AM", "http://www.thehazelroom.com", 45.512275,  -122.631044,  'ChIJfSctvpGglVQRmgETCDkJhAs'),
    new brunchtracker("HK Cafe", "4410 SE 82nd", "SE", "9:30 AM", "http://www.hkcafeportland.com/", 45.490505,  -122.577961,  'ChIJ5xszKTqglVQROqj7m5PXQUw'),
    new brunchtracker("Hobnob Grill", "3350 SE Morrison", "SE", "9:00 AM", "http://www.hobnobgrille.com/", 45.517017,  -122.629747,  'ChIJEZGahpSglVQR8ktZ2UxYr5Q'),
    new brunchtracker("Holman's", "15 SE 28th", "SE", "8:00 AM", "http://www.holmanspdx.com", 45.522573,  -122.637506,  'ChIJo89E_b6glVQRZ-r6Erd1RK4'),
    new brunchtracker("Horse Brass Pub", "4534 SE Belmont", "SE", "11:00 AM", "http://www.horsebrass.com/", 45.516411,  -122.615661,  'ChIJGyAxD-6glVQR3u4lA-3bmy4'),
    new brunchtracker("Iconic Lounge", "2226 NE Broadway", "NE", "9:00 AM", "http://www.iconiclounge.com/#refresh-relax", 45.534779,  -122.642324,  'ChIJUarQu8uglVQRPC0Xq-X-cBo'),
    new brunchtracker("Imperial", "410 SW Broadway", "SW", "8:00 AM", "http://www.imperialpdx.com", 45.521064,  -122.678349,  'ChIJb-oPEwQKlVQRne8t_q7G874'),
    new brunchtracker("Jam", "2239 SE Hawthorne", "SE", "7:30 AM", "http://www.jamonhawthorne.com", 45.512245,  -122.642719,  'ChIJi4fI1ZuglVQRKfnLrpsIJN8'),
    new brunchtracker("Junior's Cafe", "1742 SE 12th", "SE", "8:00 AM", "http://www.juniorscafepdx.com", 45.510207,  -122.653519,  'ChIJlxowi3UKlVQRuoUyl71l9bg'),
    new brunchtracker("La Calaca Comelona", "2304 SE Belmont", "SE", "10:00 AM", "http://www.lacalacacomelona.com/", 45.51625,  -122.642176,  'ChIJf0JijJeglVQRBJYZN2y4Rk8'),
    new brunchtracker("La Panza Cafe", "2425 SE 26th", "SE", "9:00 AM", "http://www.lapanzacafe.com/", 45.505023,  -122.63989,  'ChIJmQ7ZmIOglVQRCdhUggsp0UQ'),
    new brunchtracker("Lamp", "3023 SE Milwaukie", "SE", "10:00 AM", "http://www.thelamppdx.com/", 45.500716,  -122.654527,  'ChIJXSnaVHoKlVQRIKCcqt0VLlo'),
    new brunchtracker("Laurelhurst Cafe", "4611 E Burnside", "NE", "8:00 AM", "http://www.laurelhurstcafe.com", 45.523238,  -122.615272,  'ChIJ5criJ-aglVQRsKBzIqUtWLw'),
    new brunchtracker("Lauretta Jean's", "3402 SE Division", "SE", "8:00 AM", "http://www.laurettajeans.com/", 45.504606,  -122.629434,  'ChIJbRVUPYaglVQRrzr1-ANe7Co'),
    new brunchtracker("Le Bistro Montage", "301 SE Morrison", "SE", "10:00 AM", "http://www.montageportland.com/", 45.51776,  -122.662654,  'ChIJyalL4gkKlVQRAN6sa0AzhsU'),
    new brunchtracker("Leaky Roof Gastro Pub", "1538 SW Jefferson", "SW", "9:00 AM", "http://www.theleakyroof.com/", 45.519964,  -122.673864,  'ChIJS7x45gYKlVQRojNDqG9C17Y'),
    new brunchtracker("Little T American Baker", "2600 SE Division", "SE", "8:00 AM", "http://littletbaker.com/division", 45.504668,  -122.639392,  'ChIJFWqwooOglVQRY2BkWFcTXu8'),
    new brunchtracker("Midpoint Food & Drink", "3524 SE 52nd", "SE", "8:00 AM", "http://www.yelp.com/biz/midpoint-food-and-drink-portland", 45.497085,  -122.608647,  'ChIJSeDEA2aglVQRSZea3Ilo4vM'),
    new brunchtracker("Milo's City Cafe", "1325 NE Broadway", "NE", "7:30 AM", "http://www.miloscitycafe.com", 45.535211,  -122.651847,  'ChIJe0SfMLWglVQRyOGMDIvHbqI'),
    new brunchtracker("Mother's Bistro & Bar", "212 SW Stark", "SW", "8:00 AM", "http://www.mothersbistro.com/", 45.519964,  -122.673864,  'ChIJ5V0qcAYKlVQRcYiPk80LC4g'),
    new brunchtracker("Muscadine", "1465 NE Prescott", "NE", "8:00 AM", "http://www.apizzascholls.com/", 45.555655,  -122.650411,  'ChIJxyRiQCKnlVQRvIpTr7-TfU0'),
    new brunchtracker("My Father's Place", "523 SE Grand", "SE", "6:00 AM", "http://myfathersplacepdx.com/", 45.519033,  -122.660868,  'ChIJVwSCGqeglVQR7NxbQKUascY'),
    new brunchtracker("Navarre", "10 NE 28th", "NE", "9:30 AM", "http://www.navarreportland.com/", 45.523128,  -122.63701,  'ChIJqxM-Gb-glVQRI38A12wUxHI'),
    new brunchtracker("Night Light Lounge", "2100 SE Clinton", "SE", "10:00 AM", "http://www.nightlightlounge.net/", 45.503251,  -122.644453,  'ChIJjfxsgngKlVQR82RQeNwhjmI'),
    new brunchtracker("Off the Waffle", "2601 SE Clinton", "SE", "8:00 AM", "http://offthewaffle.com/", 45.503733,  -122.639479,  'ChIJ3fc-z4OglVQRBp6urOKAAFo'),
    new brunchtracker("Olympic Provisions", "107 SE Washington", "SE", "10:00 AM", "http://www.olympiaprovisions.com/", 45.519022,  -122.664279,  'ChIJDzuJgKeglVQRXyGLZ_NJERA'),
    new brunchtracker("Original Hotcake House", "1002 SE Powell", "SE", "1:00 AM", "http://www.hotcakehouse.com/", 45.50114,  -122.65558,  'ChIJ7ctb9noKlVQRUDHDKivog2g'),
	new brunchtracker("Oso Market + Bar", "726 SE Grand", "SE", "10:00 AM", "http://osomarket.com/", 45.517505,  -122.66041,  'ChIJNwaiSaeglVQRDRpFPHiB2y8'),
    new brunchtracker("Pambiche", "2811 NE Glisan", "NE", "9:00 AM", "http://www.pambiche.com/", 45.526632,  -122.636827,  'ChIJF01MZceglVQRCidFEomPY2k'),
    new brunchtracker("Paradox Cafe", "3439 SE Belmont", "SE", "8:00 AM", "http://paradoxorganiccafe.com/", 45.516631,  -122.628676,  'ChIJsUkMSJgKlVQR1RHj1QSed6E'),
    new brunchtracker("Pepper Box", "932 SE Morrison", "SE", "8:30 AM", "http://www.pepperboxpdx.com/", 45.517011,  -122.655966,  'ChIJfR5TZUinlVQR0xIqShHJbSI'),
    new brunchtracker("Petisco", "1411 NE Broadway", "NE", "9:00 AM", "http://petiscopdx.com/", 45.535217,  -122.651077,  'ChIJ7xfsR7WglVQR7T3S_ylZcpI'),
    new brunchtracker("Petite Provence", "4834 SE Division", "SE", "7:00 AM", "http://www.provencepdx.com/#!blank-1/xp4en", 45.505084,  -122.612473,  'ChIJR9VCcoqglVQRqqFADyLpLP8'),
    new brunchtracker("Pho Corner", "6120 NE Sandy", "NE", "9:00 AM", "http://phocorner.com/", 45.543855,  -122.599685,  'ChIJX-3s5TChlVQRXKZ7NmaplKc'),
    new brunchtracker("Pine State Biscuits", "1100 SE Division", "SE", "7:00 AM", "http://www.pinestatebiscuits.com/", 45.504642,  -122.654428,  'ChIJ3SemR5OglVQRmltTtRdTi10'),
    new brunchtracker("Podnah's Pit", "1625 NE Killingsworth", "NE", "9:00 AM", "http://www.podnahspit.com/", 45.56288,  -122.648366,  'ChIJM__sAR6nlVQRIypg-lwId_4'),
    new brunchtracker("Pono Farm Soul Kitchen", "4118 NE Sandy", "NE", "10:00 AM", "http://www.soulkitchenpdx.com/", 45.53538,  -122.621133,  'ChIJNwaiSaeglVQRDRpFPHiB2y8'),
    new brunchtracker("Rain or Shine Coffeehouse", "5941 SE Division", "SE", "7:00 AM", "http://www.rainorshinepdx.com/", 45.505491,  -122.601835,  'ChIJzXbStF6glVQRAiQsYc84F7w'),
    // new brunchtracker("Red Square Cafe", "4505 SE Belmont", "SE", "8:00 AM", "http://redsquarecafe.com/", 45.516729,  -122.615956,  'ChIJnx8BCu6glVQR7YzxlFUea4Q'),
    new brunchtracker("Redwood", "7915 SE Stark", "SE", "9:00 AM", "http://www.redwoodpdx.com/", 45.519306,  -122.582058,  'ChIJ8eJNxQahlVQRdBlO5VTe2Jw'),
    new brunchtracker("Ringside Grill", "14021 NE Glisan", "NE", "11:00 AM", "http://www.ringsidegrill.com/", 45.527038,  -122.51842,  'ChIJr1m7RS-ilVQRduAXMn99ZS8'),
    new brunchtracker("Rocking Frog Cafe", "2511 SE Belmont", "SE", "8:00 AM", "http://rockingfrogpdx.com/", 45.516628,  -122.639782,  'ChIJh0hXsJeglVQR5Qea2yIPJCQ'),
    new brunchtracker("Roman Candle", "3377 SE Division", "SE", "9:00 AM", "http://www.romancandlebaking.com/", 45.505015,  -122.629875,  'ChIJtRfoFoaglVQROBSbie-CCOg'),
    new brunchtracker("Roost", "1403 SE Belmont", "SE", "10:00 AM", "http://www.roostpdx.com/", 45.516673,  -122.651438,  'ChIJI4JKJKKglVQRLRG3SnkuqyU'),
    new brunchtracker("Saint Honore Bakery", "3333 SE Division", "SE", "7:00 AM", "http://www.sainthonorebakery.com", 45.504943,  -122.630794,  'ChIJsw68bYaglVQR18drjIMwens'),
    new brunchtracker("Sanborns", "3200 SE Milwaukie", "SE", "8:00 AM", "http://www.sanbornsbreakfast.com/", 45.500164,  -122.653984,  'ChIJ2_QGqHsKlVQRKXn2g-QE1Gs'),
    new brunchtracker("Sandy Hut", "1430 NE Sandy", "NE", "10:30 AM", "http://www.yelp.com/biz/the-sandy-hut-portland", 45.523766,  -122.650834,  'ChIJ6RjQw7qglVQRC8UeSD6Wg6o'),
    // new brunchtracker("Sckavone's", "4100 SE Division", "SE", "8:00 AM", "http://www.sckavones.com/", 45.504599,  -122.620232,  'ChIJPZIV8ImglVQRR28uwYjH-pA'),
    new brunchtracker("Screen Door", "2337 E Burnside", "NE", "9:00 AM", "http://www.screendoorrestaurant.com/", 45.523105,  -122.641648,  'ChIJu1MQrL6glVQRNuGYoTmvBoY'),
    new brunchtracker("Slappy Cakes", "4246 SE Belmont", "SE", "8:00 AM", "http://slappycakes.com/", 45.51635,  -122.618531,  'ChIJc1LuuO2glVQRFeFM-TqD_PA'),
    new brunchtracker("Slide Inn", "2348 SE Ankeny", "SE", "9:30 AM", "http://www.slideinnpdx.com/", 45.521967,  -122.641668,  'ChIJXah8HryglVQRd1NOGl9G54A'),
    new brunchtracker("Smokehouse Tavern", "1401 SE Morrison St., Ste. 117", "SE", "10:00 AM", "http://www.smokehouse21.com/", 45.517773,  -122.651101,  'ChIJ-8cetKOglVQRcntd3wABdC8'),
    new brunchtracker("Spielman Bagels (NE)", "2200 NE Broadway", "NE", "7:00 AM", "http://www.spielmanbagels.com/", 45.534779,  -122.642674,  'ChIJTUNDuMuglVQRTQrMmmXDDbk'),
    new brunchtracker("Spielman Bagels (SE)", "2128 SE Division", "SE", "7:00 AM", "http://www.spielmanbagels.com/", 45.504654,  -122.643945,  'ChIJu00Q7YKglVQRT7Az8Ewt3M8'),
    new brunchtracker("Suzette", "3342 SE Belmont", "SE", "9:00 AM", "http://www.suzettepdx.com/", 45.516313,  -122.630009,  'ChIJeffdiN6mlVQRqnfounJeDhY'),
    new brunchtracker("Tabor Bread", "5051 SE Hawthorne", "SE", "8:00 AM", "http://www.taborbread.com/", 45.512257,  -122.610575,  'ChIJazvA__OglVQRSNySeFVV5XA'),
    new brunchtracker("Tabor Tavern", "5325 E Burnside", "NE", "10:00 AM", "http://tabortavern.com/", 45.522865,  -122.608428,  'ChIJO89iH-SglVQRCOJ6kjzWnFc'),
    new brunchtracker("Tannery Bar", "5425 E Burnside", "NE", "9:00 AM", "http://www.tannerybarpdx.com/", 45.52304,  -122.607664,  'ChIJK3NEGuSglVQRZbRUxJI-Kzg'),
    new brunchtracker("Tapalaya", "28 NE 28th", "NE", "9:00 AM", "http://www.tapalaya.com/", 45.523387,  -122.637052,  'ChIJHTTLIr-glVQRlk1hUrDPjRo'),
    new brunchtracker("Tasty n Alder", "580 SW 12th", "SW", "9:00 AM", "http://www.tastynalder.com/", 45.521341,  -122.683477,  'ChIJq6qqqmqqlVQRcApXp7G1RGg'),
    new brunchtracker("The Original", "300 SW 6th", "SW", "7:30 AM", "http://www.originaldinerant.com/", 45.521436,  -122.676916,  'ChIJwdOAHgQKlVQR16Hw9vj-8MM'),
    new brunchtracker("Toast", "5222 SE 52nd", "SE", "8:00 AM", "http://www.toastpdx.com/", 45.485147,  -122.608612,  'ChIJM2_26AyglVQRWQ-7QfC11MY'),
    // new brunchtracker("Tom's Restaurant", "3871 SE Division", "SE", "7:00 AM", "http://www.tomsrestaurant.net", 45.505019,  -122.622889,  'ChIJH8MdromglVQR5iwNUflT'),
    new brunchtracker("Trinket", "2035 SE Cesar E Chavez", "SE", "8:00 AM", "http://trinketpdx.com/", 45.508241,  -122.622933,  'ChIJkSY8B4yglVQRNWqMEdmtC-s'),
    new brunchtracker("Utopia Cafe", "3308 SE Belmont", "SE", "7:30 AM", "http://www.yelp.com/biz/utopia-cafe-portland", 45.516325,  -122.630689,  'ChIJw3xqd5SglVQRt5wrrQflb7o'),
    new brunchtracker("Veritable Quandary", "1220 SW 1st", "SW", "9:30 AM", "http://www.veritablequandary.com/", 45.513982,  -122.675302,  'ChIJHV1eIw4KlVQRpKqyeCWlzWs'),
    new brunchtracker("Waffle Window", "3610 SE Hawthorne", "SE", "8:00 AM", "http://wafflewindow.com/", 45.511934,  -122.626527,  'ChIJpbw-9I2glVQR8HBWZ8Yr9K8'),
    new brunchtracker("Whisky Soda Lounge", "3131 SE Division", "SE", "8:00 AM", "http://whiskeysodalounge.com/", 45.505011,  -122.632857,  'ChIJB60U1YWglVQRR39n1aJdhkI'),
    new brunchtracker("Wild Abandon", "2411 SE Belmont", "SE", "9:00 AM", "http://www.wildabandonrestaurant.com/", 45.516674,  -122.641096,  'ChIJLT9vlZeglVQRvk5j3t8m09w'),
    new brunchtracker("Woodsman Tavern", "4537 SE Division", "SE", "9:00 AM", "http://woodsmantavern.com/", 45.505515,  -122.615469,  'ChIJcZaNf4qglVQRePA_O2mfZQg'),
    new brunchtracker("Ya Hala", "8005 SE Stark", "SE", "9:00 AM", "http://yahalarestaurant.com/", 45.51931,  -122.581254,  'ChIJCRER3AahlVQRSjE0phkAs2Y'),
    new brunchtracker("Zell's Cafe", "1300 SE Morrison", "SE", "8:00 AM", "http://www.zellscafe.com/", 45.517043,  -122.652403,  'ChIJQYyi1KOglVQRS2A-s6kwbok'),
];

//Search form local storage
////time select listener
//document.getElementById("dropdown").onchange = function() {
//    localStorage.setItem('dropdown', document.getElementById("dropdown").value);
//};
//
//if (localStorage.getItem('dropdown')) {
//    document.getElementById("dropdown").options[localStorage.getItem('dropdown')].selected = true;
//}
//
////tried to compact within loop, but each .onchange listener needs to "live" separately
//document.getElementById("cb0").onchange = function() {
//    var checkbox = document.getElementById("cb0");
//    localStorage.setItem("cb0", checkbox.checked);
//};
//if (localStorage.getItem("cb0")) {
//    var checked = JSON.parse(localStorage.getItem("cb0"));
//    document.getElementById("cb0").checked = checked;
//}
//
//document.getElementById("cb1").onchange = function() {
//    var checkbox = document.getElementById("cb1");
//    localStorage.setItem("cb1", checkbox.checked);
//};
//if (localStorage.getItem("cb1")) {
//    var checked = JSON.parse(localStorage.getItem("cb1"));
//    document.getElementById("cb1").checked = checked;
//}
//
//document.getElementById("cb2").onchange = function() {
//    var checkbox = document.getElementById("cb2");
//    localStorage.setItem("cb2", checkbox.checked);
//};
//if (localStorage.getItem("cb2")) {
//    var checked = JSON.parse(localStorage.getItem("cb2"));
//    document.getElementById("cb2").checked = checked;
//}

//Review page output
var reviewText = "";
var rptContent = document.getElementById("review-content");
function reviewOutput () {
    var thumbup = "<img src='img/thumbsup.jpg'>";
    var thumbdown = "<img src='img/thumbsdown.jpg'>";
    rptContent.innerHTML = "";

    //load or set local storage
    if (localStorage.getItem("votes") === null) {
        localStorage.setItem("votes",JSON.stringify(brunchArr));
    } else {
        brunchArr = JSON.parse(localStorage.getItem("votes"));
    }

    for (var i=0, iLen=brunchArr.length; i<iLen; i++) {
        if (brunchArr[i].upvotes > 0 || brunchArr[i].downvotes > 0) {
            var recs = "";
            if (brunchArr[i].upvotes > 0) {
                for (var v=0; v < brunchArr[i].upvotes; v++) {
                    recs += thumbup;
                } //for upvotes
            } //if upvotes
            if (brunchArr[i].downvotes > 0) {
                for (var w=0; w < brunchArr[i].downvotes; w++) {
                    recs += thumbdown;
                } //for downvotes
            } //if downvotes
            rptContent.innerHTML += "<br><b>" + brunchArr[i].title + "</b><br>";
            rptContent.innerHTML += recs;
            rptContent.innerHTML += brunchArr[i].restcomment + "<br>";
        } // if any votes
    } //for brunchArr
}

//Review page process
function reviewPage (review) {
    var e = document.getElementById("restdropdown");
    var restChoice = e.options[e.selectedIndex].text;
    var restText = document.getElementById("reviewtext").value;

    reviewOutput();

    //identify and update proper array member and local store
    for (var i=0, iLen=brunchArr.length; i<iLen; i++) {
        if (brunchArr[i].title === restChoice) {
            if (review.value === "recommend") {
                brunchArr[i].upvotes++;
                brunchArr[i].restcomment += ('<br>"' + restText + '"');
            } else if (review.value === "notrecommend") {
                brunchArr[i].downvotes++;
                brunchArr[i].restcomment += ('<br>"' + restText + '"');
            } //if/else if recommend
            localStorage.setItem("votes",JSON.stringify(brunchArr));
            display('review-content', 1);
        } //if title ==
    } //for

    reviewOutput();
    document.getElementById("votes").reset();
}

//Page transitions
function vis(id, state){
    var el = document.getElementById(id);
    if(state === 0){
        el.className = 'invisible';
    } else {
        el.className = 'visible';
    }
}

function display(id, state){
    var el = document.getElementById(id);
    if(state === 0){
        el.className = 'none';
    } else {
        el.className = 'block';
    }
}

// show a page by name
// hide other 2
function visPage(pageId){
    switch(pageId){
        case 'launchpage':
            display('launchpage', 1);
            display('searchpage', 0);
            display('reviews', 0);
        break;

        case 'searchpage':
            display('launchpage', 0);
            display('searchpage', 1);
            display('reviews', 0);
            // refresh map
            google.maps.event.trigger(mapObj, 'resize');
            if(geo_enabled){
                setTimeout(function(){visByCheckbox();}, 100);
            } else {
                setTimeout(function(){zoomTo(['cityCenter']);}, 100);
            }
        break;

        case 'reviews':
            display('launchpage', 0);
            display('searchpage', 0);
            display('reviews', 1);
            reviewOutput();
            // unhide reviews if they exist
            if(document.getElementById('review-content').innerHTML){
                display('review-content', 1);
            } else {
                display('review-content', 0);
            }
        break;
    }
    if(pageId === 'launchpage'){
        vis('container_btns_secondary', 1);
    } else {
        vis('container_btns_secondary', 0);
    }
}

// add nav event system
document.getElementById('nav_main').addEventListener('click', function(e){
    // log(e.target.id);
    switch(e.target.id.toLowerCase()){
        case "site-title":
            visPage('launchpage');
        break;

        case "nav-search":
            visPage('searchpage');
        break;

        case "nav-review":
            visPage('reviews');
        break;
    }
});
