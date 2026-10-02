// Airports with scheduled service: IATA code -> [city, IANA time zone].
// Generated from OurAirports (public domain) and mwgg/Airports (MIT) time zones.
const AIRPORT_TIME_ZONES = ["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Ciudad_Juarez","America/Costa_Rica","America/Cuiaba","America/Curacao","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/El_Salvador","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kralendijk","America/La_Paz","America/Lima","America/Los_Angeles","America/Lower_Princes","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montserrat","America/Nassau","America/New_York","America/Nome","America/Noronha","America/Nuuk","America/Panama","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Barthelemy","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","Arctic/Longyearbyen","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Darwin","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","Europe/Amsterdam","Europe/Astrakhan","Europe/Athens","Europe/Belgrade","Europe/Berlin","Europe/Bratislava","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Mariehamn","Europe/Minsk","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Podgorica","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Ulyanovsk","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zurich","Indian/Antananarivo","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis"];
const AIRPORTS = Object.fromEntries(`
AAA|Anaa|365
AAC|El Arish|12
AAE|Annaba|3
AAK|Buariki|366
AAL|Aalborg|287
AAN|Al Ain|200
AAP|Samarinda|222
AAR|Aarhus|287
AAT|Altay|240
AAX|Araxá|158
AAY|Al Ghaydah|178
AAZ|Quezaltenango|106
ABA|Abakan|216
ABB|Asaba|29
ABD|Abadan|246
ABE|Allentown/Bethlehem|138
ABI|Abilene|86
ABJ|Abidjan|0
ABK|Kebri Dahar|2
ABL|Ambler|52
ABM|Bamaga|268
ABQ|Albuquerque|94
ABR|Aberdeen|86
ABS|Abu Simbel|12
ABT|Al-Baha|236
ABU|Atambua|222
ABV|Abuja|29
ABX|East Albury|274
ABY|Albany|138
ABZ|Aberdeen|299
ACA|Acapulco|131
ACC|Accra|1
ACE|San Bartolomé|260
ACF|Aral|240
ACH|St. Gallen|321
ACI|Saint Anne|290
ACK|Nantucket|138
ACT|Waco|86
ACV|Arcata/Eureka|121
ACX|Xingyi|240
ACY|Atlantic City|138
ADB|Gaziemir|293
ADD|Addis Ababa|2
ADE|Aden|178
ADF|Adıyaman|293
ADJ|Amman|180
ADK|Adak|51
ADL|Adelaide|267
ADQ|Kodiak|52
ADU|Ardabil|246
ADZ|San Andrés|78
AEB|Baise|240
AEP|Buenos Aires|56
AER|Sochi|305
AES|Ålesund|306
AET|Allakaket|52
AEU|Abu Musa|246
AEX|Alexandria|86
AEY|Akureyri|264
AFA|San Rafael|61
AFL|Alta Floresta|90
AFZ|Sabzevar|246
AGA|Agadir|13
AGE|Wangerooge|281
AGH|Ängelholm|317
AGI|Wageningen|143
AGJ|Aguni|248
AGM|Tasiilaq|141
AGN|Angoon|116
AGP|Málaga|301
AGR|Agra|215
AGS|Augusta|138
AGT|Ciudad del Este|69
AGU|Aguascalientes|131
AGX|Agatti|215
AHA|Ambikapur|215
AHB|Abha|236
AHE|Ahe Atoll|365
AHO|Alghero|311
AHU|Al Hoceima|13
AIA|Alliance|94
AIN|Wainwright|52
AIP|Adampur|215
AIT|Aitutaki|363
AIU|Atiu Island|363
AJA|Ajaccio|307
AJF|Al-Jawf|236
AJI|Ağrı|293
AJL|Aizawl|215
AJN|Ouani|330
AJR|Arvidsjaur|317
AJU|Aracaju|123
AKA|Ankang|240
AKB|Atka|51
AKF|Kufra|48
AKI|Akiak|52
AKJ|Higashikagura|248
AKK|Akhiok|52
AKL|Auckland|337
AKN|King Salmon|52
AKP|Anaktuvuk Pass|52
AKR|Akure|29
AKS|Auki|347
AKU|Aksu|240
AKV|Akulivik|114
AKX|Aktobe|183
AKY|Sittwe|255
ALA|Almaty|179
ALB|Albany|138
ALC|Alicante|301
ALF|Alta|306
ALG|Algiers|3
ALH|Albany|275
ALO|Waterloo|86
ALP|Aleppo|197
ALS|Alamosa|94
ALW|Walla Walla|121
ALZ|Lazy Bay|52
AMA|Amarillo|86
AMD|Ahmedabad|215
AMH|Arba Minch|2
AMM|Amman|180
AMQ|Ambon|208
AMS|Amsterdam|277
AMV|Amderma|305
ANC|Anchorage|52
ANF|Antofagasta|156
ANI|Aniak|52
ANR|Antwerp|283
ANS|Andahuaylas|120
ANU|Osbourn|54
ANV|Anvik|52
ANX|Andenes|306
AOE|Eskişehir|293
AOG|Anshan|240
AOI|Falconara Marittima|311
AOJ|Aomori|248
AOK|Karpathos Island|279
AOO|Altoona|138
AOQ|Aappilattoq|141
AOR|Alor Satar|217
AOS|Amook Bay|52
APK|Apataki|365
APL|Nampula|36
APN|Alpena|95
APO|Carepa|78
APW|Apia|336
AQA|Araraquara|158
AQG|Anqing|240
AQI|Qaisumah|236
AQJ|Aqaba|180
AQP|Arequipa|120
ARC|Arctic Village|52
ARD|Kabola|222
ARH|Archangelsk|305
ARI|Arica|120
ARK|Arusha|16
ARM|Armidale|276
ARN|Stockholm|317
ART|Watertown|138
ARU|Araçatuba|158
ARW|Arad|284
ASB|Ashgabat|184
ASD|Andros Town|137
ASE|Aspen|94
ASF|Astrakhan|278
ASI|Cat Hill|265
ASJ|Amami|248
ASM|Asmara|4
ASO|Asosa|2
ASP|Alice Springs|270
ASR|Kayseri|293
ASU|Asunción|69
ASV|Ol Tukai|41
ASW|Aswan|12
ATC|Arthur's Town|137
ATH|Spata-Artemida|279
ATK|Atqasuk|52
ATL|Atlanta|138
ATM|Altamira|155
ATQ|Amritsar|215
ATT|Atmautluak|52
ATW|Appleton|86
ATY|Watertown|86
ATZ|Asyut|12
AUA|Oranjestad|68
AUC|Arauca|78
AUG|Augusta|138
AUH|Abu Dhabi|200
AUK|Alakanuk|139
AUQ|Hiva Oa Island|354
AUR|Aurillac|307
AUS|Austin|86
AUU|Aurukun|268
AUX|Araguaína|55
AVA|Anshun|240
AVK|Arvaikheer|250
AVL|Asheville|138
AVN|Avignon|307
AVP|Wilkes-Barre/Scranton|138
AVR|Amravati|297
AVV|Geelong/Melbourne|274
AWA|Hawassa|2
AWK|Wake Island|368
AWZ|Ahvaz|246
AXA|The Valley|53
AXD|Alexandroupolis|279
AXF|Bayanhot|240
AXJ|Amakusa|248
AXM|Armenia|78
AXP|Spring Point|137
AXR|Arutua Airport|365
AXT|Akita|248
AXU|Axum|2
AYJ|Faizabad|215
AYP|Ayacucho|120
AYQ|Yulara|270
AYT|Antalya|293
AZA|Mesa|144
AZD|Yazd|246
AZN|Andijan|244
AZO|Kalamazoo|95
AZR|Adrar|3
AZS|Samana|157
BAH|Manama|187
BAL|Batman|293
BAQ|Barranquilla|78
BAR|Qionghai|240
BAS|Ballalae|347
BAV|Baotou|240
BAX|Barnaul|190
BAY|Tăuții-Măgherăuș|284
BAZ|Barcelos|125
BBA|Balmaceda|156
BBG|Butaritari|366
BBI|Bhubaneswar|215
BBK|Kasane|21
BBM|Battambang|230
BBN|Bario|218
BBO|Berbera|39
BBQ|Codrington|54
BBR|Basse-Terre|105
BBU|Bucharest|284
BCA|Baracoa|110
BCD|Bacolod City|223
BCH|Baucau|199
BCI|Barcaldine|268
BCM|Bacău|284
BCN|Barcelona|301
BCO|Jinka|2
BDA|Hamilton|259
BDB|Bundaberg|268
BDD|Badu Island|268
BDH|Bandar Lengeh|246
BDJ|Banjarbaru|222
BDL|Hartford|138
BDO|Bandung|207
BDP|Bhadrapur|213
BDQ|Vadodara|215
BDS|Brindisi|311
BDT|Gbadolite|28
BDU|Målselv|306
BEB|Balivanich|299
BED|Bedford|138
BEF|Bluefields|124
BEG|Belgrade|280
BEJ|Tanjung Redeb - Borneo Island|222
BEK|Bareilly|215
BEL|Belém|74
BEM|Oulad Yaich|13
BEN|Benina|48
BER|Berlin|281
BES|Brest|307
BET|Bethel|52
BEU|Bedourie|268
BEW|Beira|36
BEY|Beirut|191
BFD|Bradford|138
BFF|Scottsbluff|94
BFI|Seattle|121
BFJ|Bijie|240
BFL|Bakersfield|121
BFN|Bloemfontein|23
BFS|Belfast|299
BFV|Buriram|189
BFY|Bengbu|240
BGA|Bucaramanga|78
BGC|Bragança|297
BGF|Bangui|6
BGG|Bingöl|293
BGI|Bridgetown|73
BGK|Big Creek|75
BGM|Binghamton|138
BGO|Bergen|306
BGR|Bangor|138
BGW|Baghdad|186
BGY|Orio al Serio|311
BHB|Bar Harbor|138
BHD|Belfast|299
BHE|Blenheim|337
BHH|Bisha|236
BHI|Bahía Blanca|56
BHJ|Bhuj|215
BHK|Bukhara|238
BHM|Birmingham|86
BHO|Bhopal|215
BHQ|Broken Hill|269
BHR|Bharatpur|213
BHS|Bathurst|276
BHU|Bhavnagar|215
BHV|Bahawalpur|212
BHX|Birmingham, West Midlands|299
BHY|Beihai|240
BIA|Bastia|307
BID|Block Island|138
BIH|Bishop|121
BIK|Biak|208
BIL|Billings|94
BIM|South Bimini|137
BIO|Bilbao|301
BIQ|Biarritz|307
BIR|Biratnagar|213
BIS|Bismarck|86
BJA|Béjaïa|3
BJB|Bojnord|246
BJC|Denver|94
BJF|Båtsfjord|306
BJL|Banjul|7
BJM|Bujumbura|11
BJR|Bahir Dar|2
BJT|Bentota|196
BJV|Bodrum|293
BJX|Silao|131
BJZ|Badajoz|301
BKC|Buckland|52
BKF|Katmai National Park|52
BKG|Branson|86
BKI|Kota Kinabalu|218
BKK|Bangkok|189
BKM|Bakalalan|218
BKN|Balkanabat|184
BKO|Bamako|5
BKQ|Blackall|268
BKS|Bengkulu|207
BKW|Beaver|138
BKZ|Bukoba|16
BLA|Barcelona|83
BLB|Panamá City|142
BLD|Boulder City|121
BLE|Borlange|317
BLI|Bellingham|121
BLJ|Batna|3
BLL|Billund|287
BLQ|Bologna|311
BLR|Bengaluru|215
BLV|Belleville|86
BLW|Beledweyne|39
BLZ|Blantyre|9
BMA|Stockholm|317
BME|Broome|275
BMI|Bloomington/Normal|86
BMK|Borkum|281
BMO|Banmaw|255
BMR|Baltrum|281
BMU|Bima|222
BMV|Buon Ma Thuot|203
BMW|Bordj Badji Mokhtar|3
BMY|Waala|358
BNA|Nashville|86
BNB|Boende|28
BND|Bandar Abbas|246
BNE|Brisbane|268
BNI|Benin|29
BNK|Ballina|276
BNN|Brønnøy|306
BNS|Barinas|83
BNX|Mahovljani|313
BNY|Anua|347
BOB|Motu Mute|365
BOC|Isla Colón|142
BOD|Bordeaux|307
BOG|Bogota|78
BOH|Bournemouth|299
BOI|Boise|79
BOJ|Burgas|316
BOM|Mumbai|215
BON|Kralendijk|118
BOO|Bodø|306
BOR|Ton Phueng|307
BOS|Boston|138
BOT|Bosset|362
BOY|Bobo Dioulasso|45
BPE|Qinhuangdao|240
BPL|Bole|240
BPN|Balikpapan|222
BPS|Porto Seguro|71
BPT|Beaumont/Port Arthur|86
BPX|Bangda|240
BPY|Besalampy|327
BQB|Busselton|275
BQG|Bogorodskoye|253
BQJ|Batagay|253
BQK|Brunswick|138
BQL|Boulia Airport|268
BQN|Aguadilla|148
BQS|Blagoveschensk|254
BQT|Brest|304
BQU|Bequia|166
BRA|Barreiras|71
BRC|San Carlos de Bariloche|63
BRD|Brainerd|86
BRE|Bremen|281
BRI|Bari|311
BRK|Bourke Airport|276
BRL|Burlington|86
BRM|Barquisimeto|83
BRN|Bern|326
BRO|Brownsville|86
BRQ|Brno|309
BRR|Eoligarry|299
BRS|Bristol|299
BRU|Zaventem|283
BRW|Utqiaġvik|52
BRX|Barahona|157
BSA|Bosaso|39
BSB|Brasília|158
BSC|Bahía Solano|78
BSD|Baoshan|240
BSG|Bata|35
BSK|Biskra|3
BSL|Bâle / Mulhouse|307
BSO|Basco|223
BSR|Basra|186
BSX|Pathein|255
BSZ|Bishkek|192
BTC|Batticaloa|196
BTH|Batam|207
BTI|Barter Island|52
BTJ|Banda Aceh|207
BTK|Bratsk|206
BTM|Butte|94
BTR|Baton Rouge|86
BTS|Bratislava|282
BTT|Bettles|52
BTU|Bintulu|218
BTV|Burlington|138
BTW|Batu Licin|222
BUA|Buka Island|338
BUC|Burketown Airport|268
BUD|Budapest|285
BUF|Buffalo|138
BUI|Bokondini|208
BUN|Buenaventura|78
BUQ|Bulawayo|22
BUR|Burbank|121
BUS|Batumi|245
BUT|Jakar|247
BUU|Muara Bungo|207
BUX|Bunia|33
BUZ|Bushehr|246
BVA|Beauvais|307
BVB|Boa Vista|77
BVC|Rabil|261
BVE|Brive|307
BVG|Berlevåg|306
BVH|Vilhena|147
BVI|Birdsville Airport|268
BVJ|Bovanenkovo|256
BVS|Breves|74
BWA|Siddharthanagar|213
BWI|Baltimore|138
BWK|Gornji Humac|325
BWN|Bandar Seri Begawan|193
BWO|Balakovo|314
BWT|Burnie|271
BWX|Rogojampi, Banyuwangi|207
BXG|Bendigo Airport|274
BXH|Balkhash|179
BXR|Bam|246
BXT|Bontang-Borneo Island|222
BXU|Butuan|223
BXY|Baikonur|235
BYK|Bouaké|0
BYM|Bayamo|110
BYN|Bayankhongor|250
BYO|Bonito|81
BYR|Læsø|287
BYW|Blakely Island|121
BZE|Belize City|75
BZG|Bydgoszcz|324
BZI|Balıkesir|293
BZL|Barisal|198
BZN|Bozeman|94
BZO|Bolzano|311
BZR|Béziers|307
BZV|Brazzaville|10
BZX|Bazhong|240
CAB|Cabinda|32
CAC|Cascavel|158
CAE|Columbia|138
CAF|Carauari|125
CAG|Cagliari|311
CAH|Ca Mau City|203
CAI|Cairo|12
CAJ|Canaima|83
CAK|Akron|138
CAL|Campbeltown|299
CAN|Guangzhou|240
CAP|Cap Haitien|145
CAT|Cascais|297
CAU|Caruaru|151
CAW|Campos dos Goytacazes|158
CAY|Matoury|84
CAZ|Cobar Airport|276
CBB|Cochabamba|119
CBH|Béchar|3
CBO|Datu Odin Sinsuat|223
CBQ|Calabar|29
CBR|Canberra|276
CBT|Catumbela|32
CCA|Chimore|119
CCC|Cayo Coco|110
CCE|New Cairo|12
CCF|Carcassonne|307
CCJ|Calicut|215
CCK|West Island|329
CCP|Concepcion|156
CCR|Concord|121
CCS|Maiquetía|83
CCU|Kolkata|215
CCV|Craig Cove|342
CCZ|Chub Cay|137
CDB|Cold Bay|139
CDC|Cedar City|94
CDE|Chengde|240
CDG|Paris|307
CDP|Kadapa|215
CDR|Chadron|94
CDT|Castellón de la Plana|301
CDV|Cordova|52
CEB|Cebu City/Lapu-Lapu City|223
CEC|Crescent City|121
CED|Ceduna Airport|267
CEE|Cherepovets|305
CEI|Chiang Rai|189
CEK|Chelyabinsk|256
CEL|Canela|158
CEM|Central|52
CEN|Ciudad Obregón|111
CEZ|Cortez|94
CFB|Cabo Frio|158
CFE|Clermont-Ferrand|307
CFG|Cienfuegos|110
CFK|Chlef|3
CFN|Donegal|288
CFR|Caen|307
CFS|Coffs Harbour|276
CFU|Kerkyra|279
CGA|Craig|52
CGB|Cuiabá|90
CGD|Changde|240
CGH|São Paulo|158
CGI|Cape Girardeau|86
CGK|Jakarta|207
CGM|Mambajao|223
CGN|Köln|281
CGO|Zhengzhou|240
CGP|Chattogram|198
CGQ|Changchun|240
CGR|Campo Grande|81
CGY|Laguindingan|223
CHA|Chattanooga|138
CHC|Christchurch|337
CHE|Tallinn|318
CHG|Shuangta, Chaoyang|240
CHH|Chachapoyas|120
CHM|Chimbote|120
CHO|Charlottesville|138
CHQ|Souda|279
CHS|Charleston|138
CHT|Te One|339
CHU|Chuathbaluk|52
CHX|Changuinola|142
CHY|Choiseul Bay|347
CIA|Rome|311
CID|Cedar Rapids|86
CIF|Chifeng|240
CIH|Changzhi|240
CIJ|Cobija|119
CIK|Chalkyitsik|52
CIT|Shymkent|179
CIU|Kincheloe|95
CIW|Canouan|166
CIX|Chiclayo|120
CIY|Comiso|311
CJA|Cajamarca|120
CJB|Coimbatore|215
CJC|Calama|156
CJJ|Cheongju|239
CJL|Chitral|212
CJM|Chumphon|189
CJN|Cijulang|207
CJS|Ciudad Juárez|88
CJU|Jeju City|239
CJZ|Cajazeiras|158
CKB|Bridgeport|138
CKD|Crooked Creek|52
CKG|Chongqing|240
CKH|Chokurdah|242
CKS|Parauapebas|74
CKW|Christmas Creek Mine|275
CKX|Chicken|52
CKY|Conakry|14
CKZ|Çanakkale|293
CLD|Carlsbad|121
CLE|Cleveland|138
CLJ|Cluj-Napoca|284
CLL|College Station|86
CLO|Cali|78
CLP|Clarks Point|52
CLQ|Colima|131
CLT|Charlotte|138
CLV|Caldas Novas|158
CLY|Calvi|307
CMA|Cunnamulla Airport|268
CMB|Colombo|196
CME|Ciudad del Carmen|130
CMF|Chambéry|307
CMG|Corumbá|81
CMH|Columbus|138
CMI|Savoy|86
CMN|Casablanca|13
CMU|Kundiawa|362
CMW|Camaguey|110
CMX|Hancock|95
CNB|Coonamble Airport|276
CNC|Coconut Island Airport|268
CND|Constanța|284
CNF|Belo Horizonte|158
CNI|Dalian|240
CNJ|Cloncurry|268
CNM|Carlsbad|94
CNN|Kannur|215
CNP|Neerlerit Inaat|159
CNQ|Corrientes|58
CNS|Cairns|268
CNX|Chiang Mai|189
CNY|Moab|94
COD|Cody|94
COK|Kochi|215
COL|Coll Island|299
COO|Cotonou|46
COQ|Choibalsan Airport|195
COR|Cordoba|58
COS|Colorado Springs|94
COU|Columbia|86
COV|Tarsus|293
CPC|Chapelco/San Martin de los Andes|63
CPD|Coober Pedy|267
CPE|Campeche|130
CPH|Copenhagen|287
CPO|Copiapo|156
CPR|Casper|94
CPT|Cape Town|23
CPV|Campina Grande|100
CPX|Culebra|148
CQW|Wulong|240
CRA|Craiova|284
CRD|Comodoro Rivadavia|57
CRI|Colonel Hill|137
CRK|Mabalacat|223
CRL|Charleroi|283
CRM|Catarman|223
CRP|Corpus Christi|86
CRU|Carriacou Island|104
CRV|Isola di Capo Rizzuto|311
CRW|Charleston|138
CRZ|Türkmenabat|184
CSA|Colonsay|299
CSG|Columbus|138
CSH|Solovetsky Islands|305
CSK|Cap Skirring|15
CSW|Cabo San Lucas|128
CSX|Changsha|240
CSY|Cheboksary|305
CTA|Catania|311
CTC|Catamarca|57
CTD|Chitré|142
CTG|Cartagena|78
CTL|Charleville|268
CTM|Chetumal|82
CTN|Cooktown Airport|268
CTS|Sapporo|248
CTU|Chengdu|240
CUA|Comondú|128
CUC|Cúcuta|78
CUE|Cuenca|107
CUF|Levaldigi|311
CUK|Caye Caulker|75
CUL|Culiacán|128
CUM|Cumaná|83
CUN|Cancún|82
CUP|Carúpano|83
CUQ|Coen|268
CUR|Willemstad|91
CUU|Chihuahua|87
CUZ|Cusco|120
CVG|Cincinnati / Covington|138
CVM|Ciudad Victoria|134
CVN|Clovis|94
CVQ|Carnarvon|275
CVU|Corvo|258
CWA|Mosinee|86
CWB|Curitiba|158
CWJ|Lincang|240
CWL|Cardiff|299
CWS|Center Island|121
CXB|Cox's Bazar|198
CXH|Vancouver|173
CXI|Kiritimati|350
CXJ|Caxias Do Sul|158
CXP|Cilacap|207
CXR|Nha Trang/nha Trang aiurportCam Ranh|203
CYA|Les Cayes|145
CYB|West End|85
CYC|Caye Chapel|75
CYF|Chefornak|139
CYI|Shuishang|243
CYM|Chatham|52
CYO|Cayo Largo del Sur|110
CYP|Calbayog City|223
CYS|Cheyenne|94
CYT|Yakataga|52
CYU|Cuyo|223
CYX|Cherskiy|242
CYZ|Cauayan City|223
CZE|Coro|83
CZL|Constantine|3
CZM|Cozumel|82
CZS|Cruzeiro Do Sul|154
CZU|Corozal|78
CZX|Changzhou|240
DAB|Daytona Beach|138
DAC|Dhaka|198
DAD|Da Nang|203
DAL|Dallas|86
DAM|Damascus|197
DAR|Dar es Salaam|16
DAT|Datong|240
DAU|Daru|362
DAV|David|142
DAX|Dazhou|240
DAY|Dayton|138
DBA|Dalbandin|212
DBB|El Alamein|12
DBC|Baicheng|240
DBM|Debre Markos|2
DBO|Dubbo|276
DBQ|Dubuque|86
DBR|Darbhanga|215
DBV|Dubrovnik|325
DCA|Washington|138
DCF|Canefield|96
DCM|Castres|307
DCY|Garzê|240
DDC|Dodge City|86
DDG|Dandong|240
DDR|Xigazê|240
DEA|Dera Ghazi Khan|212
DEB|Debrecen|285
DEC|Decatur|86
DED|Dehradun|215
DEE|Yuzhno-Kurilsk|221
DEF|Dezful|246
DEL|New Delhi|215
DEM|Dembidollo|2
DEN|Denver|94
DEX|Dekai|208
DFW|Dallas-Fort Worth|86
DGA|Dangriga|75
DGH|Deoghar|215
DGO|Durango|134
DGT|Dumaguete City|223
DHB|Deer Harbor|121
DHM|Kangra|215
DHN|Dothan|86
DHX|Kediri|207
DIA|Doha|233
DIB|Dibrugarh|215
DIE|Antisiranana|327
DIG|Diqing|240
DIK|Dickinson|94
DIL|Dili|199
DIN|Dien Bien Phu|189
DIO|Diomede|52
DIR|Dire Dawa|2
DIU|Diu|215
DIY|Diyarbakır|293
DJB|Jambi|207
DJE|Mellita|49
DJG|Djanet|3
DJJ|Sentani|208
DJT|West Palm Beach|138
DLA|Douala|18
DLC|Dalian|240
DLE|Dole|307
DLG|Dillingham|52
DLH|Duluth|86
DLI|Da Lat|203
DLM|Dalaman|293
DLR|Dalnerechensk|253
DLU|Dali|240
DLZ|Dalanzadgad|250
DMB|Taraz|179
DMD|Doomadgee Airport|268
DME|Moscow|305
DMK|Bangkok|189
DMM|Ad Dammam|236
DMU|Dimapur|215
DND|Dundee|299
DNH|Dunhuang|240
DNZ|Denizli|293
DOD|Dodoma|16
DOG|Dongola|26
DOH|Doha|233
DOL|Deauville|307
DOM|Marigot|96
DOP|Dolpa|213
DOV|Dover|138
DOY|Dongying|240
DPL|Dipolog|223
DPO|Devonport|271
DPS|Kuta, Badung|222
DPT|Deputatskiy|254
DQA|Daqing|240
DQM|Duqm|224
DRG|Deering|139
DRJ|Drietabbetje|143
DRO|Durango|94
DRP|Legazpi|223
DRS|Dresden|281
DRW|Darwin|270
DSD|Grande Anse|105
DSE|Dessie|2
DSI|Destin|86
DSM|Des Moines|86
DSN|Ordos|240
DSO|Sŏndŏng-ni|232
DSS|Dakar|15
DTB|Siborong-Borong|207
DTD|Datadawai-Borneo Island|222
DTM|Dortmund|281
DTR|Decatur|121
DTU|Heihe|240
DTW|Detroit|95
DUB|Dublin|288
DUD|Dunedin|337
DUE|Chitato|32
DUJ|Dubois|138
DUM|Dumai|207
DUR|Durban|23
DUS|Düsseldorf|281
DUT|Unalaska|139
DVL|Devils Lake|86
DVO|Davao|223
DWB|Soalala|327
DWC|Dubai|200
DWD|Dawadmi|236
DWO|Sri Jayawardenepura Kotte|196
DXB|Dubai|200
DXJ|Xiangxi|240
DXN|Gautam Buddha Nagar|215
DYG|Zhangjiajie|240
DYR|Anadyr|181
DYU|Dushanbe|201
DZA|Dzaoudzi|334
DZH|Dazhou|240
DZN|Zhezkazgan|179
EAA|Eagle|52
EAM|Najran|236
EAR|Kearney|86
EAS|Hondarribia|301
EAT|Wenatchee|121
EAU|Eau Claire|86
EAX|Kwatta|143
EBA|Campo nell'Elba|311
EBB|Entebbe|25
EBD|El-Obeid|26
EBH|El Bayadh|3
EBJ|Esbjerg|287
EBL|Arbil|186
ECN|Tymbou|202
ECP|Panama City Beach|86
EDA|Edna Bay|52
EDI|Ingliston, Edinburgh|299
EDL|Eldoret|41
EDO|Edremit|293
EDR|Pormpuraaw|268
EEK|Eek|139
EFL|Kefallinia Island|279
EGC|Bergerac|307
EGE|Eagle|94
EGS|Egilsstaðir|264
EGX|Egegik|52
EHU|Ezhou|240
EIE|Yeniseysk|216
EIN|Eindhoven|277
EIS|Beef Island|172
EJA|Barrancabermeja|78
EJH|Al Wajh|236
EJT|Enejit Island|353
EKO|Elko|121
EKS|Shakhtyorsk|237
ELC|Elcho Island|270
ELD|El Dorado|86
ELF|El Fasher|26
ELG|El Menia|3
ELH|North Eleuthera|137
ELI|Elim|139
ELM|Elmira/Corning|138
ELP|El Paso|94
ELQ|Qassim|236
ELS|East London|23
ELU|Guemar|3
ELV|Elfin Cove|52
EMA|Nottingham, Leicestershire|299
EMD|Emerald|268
EME|Emden|281
EMK|Emmonak|139
ENA|Kenai|52
ENE|Ende|222
ENF|Enontekio|291
ENH|Enshi|240
ENI|El Nido|223
ENO|Encarnación|69
ENT|Eniwetok Atoll|353
ENU|Enegu|29
ENY|Yan'an|240
EOH|Medellín|78
EOI|Eday|299
EPR|Esperance|275
EPU|Pärnu|318
EQS|Esquel|57
ERC|Erzincan|293
ERF|Erfurt|281
ERH|Errachidia|13
ERI|Erie|138
ERL|Erenhot|240
ERS|Windhoek|50
ERZ|Erzurum|293
ESB|Ankara|293
ESC|Escanaba|95
ESD|Eastsound|121
ESL|Elista|305
ESM|Tachina|107
ESR|El Salvador|156
ESU|Essaouira|13
ETM|Eilat|180
ETR|Santa Rosa|107
ETZ|Goin|307
EUA|Eua Island|367
EUG|Eugene|121
EUN|El Aaiún|19
EUX|Oranjestad|118
EVE|Evenes|306
EVG|Sveg|317
EVN|Yerevan|257
EVV|Evansville|86
EWB|New Bedford|138
EWN|New Bern|138
EWR|Newark|138
EXI|Excursion Inlet|52
EXT|Exeter, Devon|299
EYK|Beloyarskiy Airport|256
EYP|Yopal|78
EYW|Key West|138
EZE|Buenos Aires|56
EZS|Elazığ|293
FAE|Vágar|262
FAI|Fairbanks|52
FAO|Faro|297
FAR|Fargo|86
FAT|Fresno|121
FAV|Fakarava Airport|365
FAY|Fayetteville|138
FBD|Fayzabad|210
FBE|Francisco Beltrão|158
FBM|Lubumbashi|33
FBS|Friday Harbor|121
FCA|Kalispell|94
FCN|Wurster Nordseeküste|281
FCO|Rome|311
FDE|Førde|306
FDF|Fort-de-France|126
FDH|Friedrichshafen|281
FDU|Bandundu|28
FEG|Fergana|244
FEN|Fernando de Noronha|140
FEZ|Saïss|13
FGU|Fangatau|365
FHZ|Fakahina|365
FIE|Fair Isle|299
FIH|Kinshasa|28
FIZ|Fitzroy Crossing Airport|275
FJR|Fujairah|200
FKB|Rheinmünster|281
FKI|Kisangani|33
FKQ|Fakfak|208
FKS|Sukagawa|248
FLA|Florencia|78
FLG|Flagstaff|144
FLL|Fort Lauderdale|138
FLN|Florianópolis|158
FLO|Florence|138
FLR|Firenze|311
FLS|Whitemark|271
FLW|Santa Cruz das Flores|258
FLZ|Sibolga|207
FMA|Formosa|58
FMI|Kalemie|33
FMM|Memmingen|281
FMO|Greven|281
FMT|Faresmaathodaa|332
FNA|Freetown|20
FNC|Funchal|263
FND|Funadhoo|332
FNI|Nîmes/Garons|307
FNJ|Pyongyang|232
FNR|Funter Bay|52
FNT|Flint|95
FOA|Foula|299
FOC|Fuzhou|240
FOD|Fort Dodge|86
FOG|Foggia|311
FON|La Fortuna|89
FOR|Fortaleza|100
FPO|Freeport|137
FRA|Frankfurt am Main|281
FRD|Friday Harbor|121
FRE|Fera Island|347
FRL|Forlì|311
FRO|Florø|306
FRS|San Benito|106
FRW|Francistown|21
FSC|Figari|307
FSD|Sioux Falls|86
FSH|Singkil|207
FSM|Fort Smith|86
FSP|Saint-Pierre|132
FSZ|Makinohara / Shimada|248
FTA|Futuna Island|342
FTE|El Calafate|62
FTI|Fitiuta Village|359
FTU|Tôlanaro|327
FTW|Fort Worth|86
FUE|El Matorral|260
FUG|Yingzhou, Fuyang|240
FUJ|Goto|248
FUK|Fukuoka|248
FUN|Funafuti|344
FUO|Foshan|240
FUT|Futuna Island|369
FWA|Fort Wayne|112
FYJ|Fuyuan|240
FYN|Fuyun|240
FYU|Fort Yukon|52
GAJ|Higashine|248
GAL|Galena|52
GAM|Gambell|139
GAN|Gan|332
GAQ|Gao|5
GAU|Guwahati|215
GAX|Gamba|30
GAY|Gaya|215
GBB|Gabala|188
GBE|Gaborone|21
GBI|Kalaburagi|215
GBJ|Grand-Bourg|105
GBZ|Claris|337
GCC|Gillette|94
GCH|Gachsaran|246
GCI|Saint Peter Port|290
GCK|Garden City|86
GCM|George Town|85
GCN|Grand Canyon - Tusayan|144
GDB|Gondia|215
GDE|Gode|2
GDL|Guadalajara|131
GDN|Gdańsk|324
GDQ|Azezo|2
GDT|Cockburn Town|103
GDV|Glendive|94
GDX|Magadan|221
GDZ|Gelendzhik|305
GEA|Nouméa|358
GEG|Spokane|121
GEL|Santo Ângelo|158
GEO|Georgetown|108
GER|Nueva Gerona|110
GES|General Santos|223
GET|Moonyoonooka|275
GEV|Gällivare|317
GFF|Griffith|276
GFK|Grand Forks|86
GGF|Almeirim|155
GGG|Longview|86
GGJ|Guaíra|81
GGS|Gobernador Gregores|62
GGT|Moss Town|137
GGW|Glasgow|94
GHA|El Atteuf|3
GHB|Governor's Harbour|137
GHV|Brașov|284
GIB|Gibraltar|289
GIC|Boigu Island|268
GID|Gitega|11
GIG|Rio De Janeiro|158
GIL|Gilgit|212
GIS|Gisborne|337
GIZ|Jizan|236
GJA|Guanaja|168
GJL|Tahir|3
GJT|Grand Junction|94
GKA|Goronka|362
GKK|Huvadhu Atoll|332
GKN|Gulkana|52
GLA|Glasgow|299
GLF|Golfito|89
GLH|Greenville|86
GLK|Galcaio|39
GLT|Gladstone|268
GLV|Golovin|139
GMA|Gemena|28
GMB|Gambela|2
GME|Gomel|304
GMI|Gasmata Island|362
GMO|Gombe|29
GMP|Seoul|239
GMQ|Golog|240
GMR|Totegegie Airport|346
GMZ|Alajero, La Gomera Island|260
GNB|Grenoble|307
GND|Saint George's|104
GNJ|Ganja|188
GNS|Gunungsitoli|207
GNU|Goodnews|52
GNV|Gainesville|138
GNY|Şanlıurfa|293
GOA|Genova|311
GOH|Nuuk|141
GOI|Vasco da Gama|215
GOJ|Nizhny Novgorod|305
GOM|Goma|27
GOP|Gorakhpur|215
GOQ|Golmud|240
GOT|Göteborg|317
GOU|Garoua|18
GOV|Nhulunbuy|270
GOX|Mopa|215
GOY|Tura|216
GPA|Patras|279
GPI|Guapi|78
GPS|Isla Baltra|345
GPT|Gulfport|86
GRB|Green Bay|86
GRI|Grand Island|86
GRJ|George|23
GRK|Fort Cavazos|86
GRO|Girona|301
GRQ|Groningen|277
GRR|Grand Rapids|95
GRU|São Paulo|158
GRV|Grozny|305
GRW|Santa Cruz da Graciosa|258
GRX|Granada|301
GRY|Grímsey/Sandvík|264
GRZ|Feldkirchen bei Graz|321
GSM|Qeshm|246
GSO|Greensboro|138
GSP|Greenville/Greer/Spartanburg|138
GST|Gustavus|116
GSV|Saratov|314
GTA|Gatokae|347
GTE|Groote Eylandt|270
GTF|Great Falls|94
GTO|Gorontalo|222
GTR|Columbus/W Point/Starkville|86
GUA|Guatemala City|106
GUB|San Quintín|128
GUC|Gunnison|94
GUM|Hagåtña|348
GUP|Gallup|94
GUR|Gurney|362
GUW|Atyrau|185
GUZ|Guarapari|158
GVA|Geneva|307
GVR|Governador Valadares|158
GWD|Gurandani|212
GWL|Gwalior|215
GWT|Sylt|281
GXF|Seiyun|178
GXG|Negage|32
GXH|Gannan|240
GYA|Guayaramerín|119
GYD|Baku|188
GYE|Guayaquil|107
GYM|Guaymas|111
GYN|Goiânia|158
GYS|Guangyuan|240
GYU|Guyuan|240
GYY|Gary|86
GYZ|Cosmo Newbery|275
GZG|Garzê|240
GZO|Gizo|347
GZP|Gazipaşa|293
GZT|Gaziantep|293
HAA|Hasvik|306
HAC|Hachijojima|248
HAD|Halmstad|317
HAH|Moroni|330
HAJ|Hannover|281
HAK|Haikou|240
HAM|Hamburg|281
HAN|Hanoi|189
HAQ|Haa Dhaalu Atoll|332
HAS|Hail|236
HAU|Karmøy|306
HAV|Havana|110
HBA|Hobart|271
HBE|Alexandria|12
HBQ|Haibei|240
HBT|Hambantota|236
HBX|Hubballi|215
HCJ|Hechi|240
HCR|Holy Cross|52
HCZ|Chenzhou|240
HDD|Hyderabad|212
HDF|Zirchow|281
HDG|Handan|240
HDK|Kulhudhuffushi|332
HDM|Hamadan|246
HDN|Hayden|94
HDO|Ghaziabad|215
HDS|Hoedspruit|23
HDY|Hat Yai|189
HEA|Guzara|210
HEH|Heho|255
HEI|Oesterdeichstrich|281
HEK|Heihe|240
HEL|Helsinki|291
HER|Heraklion|279
HET|Hohhot|240
HFA|Haifa|209
HFE|Hefei|240
HFN|Höfn|264
HFS|Råda|317
HFT|Hammerfest|306
HGA|Hargeisa|39
HGD|Hughenden|268
HGH|Hangzhou|240
HGI|Hollongi|215
HGL|Helgoland|281
HGN|Mae Hong Son|189
HGO|Korhogo|0
HGR|Hagerstown|138
HGU|Mount Hagen|362
HHH|Hilton Head Island|138
HHN|Frankfurt am Main|281
HHQ|Hua Hin|189
HHR|Hawthorne|121
HHZ|Hikueru|365
HIA|Huai'an|240
HIB|Hibbing|86
HID|Horn|268
HII|Lake Havasu City|144
HIJ|Hiroshima|248
HIL|Shilavo|2
HIN|Sacheon|239
HIR|Honiara|347
HIS|Hayman Island|268
HJB|Hejing|240
HJJ|Huaihua|240
HJR|Khajuraho|215
HKD|Hakodate|248
HKG|Hong Kong|204
HKK|Hokitika Airfield|337
HKN|Kimbe|362
HKT|Phuket|189
HLA|Johannesburg|23
HLD|Hailar|240
HLE|Jamestown|265
HLH|Ulanhot|240
HLN|Helena|94
HLP|Jakarta|207
HLZ|Hamilton|337
HMA|Khanty-Mansiysk|256
HMB|Suhaj|12
HME|Hassi Messaoud|3
HMI|Hami|240
HMO|Hermosillo|111
HMS|Muara Teweh|231
HMV|Hemavan|317
HNA|Hanamaki|248
HND|Tokyo|248
HNH|Hoonah|116
HNL|Honolulu, Oahu|349
HNM|Hana|349
HNS|Haines|116
HNY|Hengyang|240
HOB|Hobbs|94
HOF|Hofuf|236
HOG|Holguin|110
HOI|Otepa|365
HOK|Lajamanu|270
HOM|Homer|52
HOR|Horta|258
HOT|Hot Springs|86
HOU|Houston|86
HOV|Ørsta|306
HPA|Lifuka|367
HPB|Hooper Bay|139
HPG|Shennongjia|240
HPH|Haiphong|189
HPN|White Plains|138
HQL|Tashikuergan|240
HQQ|Anyang|240
HRB|Harbin|240
HRE|Harare|22
HRF|Hoarafushi Airport|332
HRG|Hurghada|12
HRI|Mattala|196
HRL|Harlingen|86
HRO|Harrison|86
HSA|Turkıstan|179
HSC|Shaoguan|240
HSG|Saga|248
HSL|Huslia|52
HSN|Zhoushan|240
HSR|Rajkot|215
HSS|Hisar|215
HSV|Huntsville|86
HTA|Chita|194
HTG|Khatanga|216
HTI|Hamilton Island|272
HTN|Hotan|240
HTS|Huntington|138
HTT|Mengnai|240
HTY|Antakya|293
HUE|Akwi|2
HUG|Huehuetenango|106
HUH|Fare|365
HUI|Huế|203
HUN|Hualien City|243
HUO|Holingol|240
HUS|Hughes|52
HUU|Huánuco|120
HUX|Huatulco|131
HUY|Grimsby, Lincolnshire|299
HUZ|Huizhou|240
HVB|Hervey Bay|268
HVD|Khovd|205
HVG|Honningsvåg|306
HVN|New Haven|138
HVR|Havre|94
HWR|Halwara|215
HXD|Delingha|240
HYA|Hyannis|138
HYD|Hyderabad|215
HYG|Hydaburg|52
HYL|Hollis|52
HYN|Taizhou|240
HYS|Hays|86
HZA|Heze|240
HZG|Hanzhong|240
HZH|Liping|240
IAA|Igarka|216
IAD|Dulles|138
IAG|Niagara Falls|138
IAH|Houston|86
IAM|In Aménas|3
IAN|Kiana|52
IAO|Del Carmen|223
IAR|Tunoshna|305
IAS|Iaşi|284
IBA|Ibadan|29
IBB|Puerto Villamil|345
IBE|Ibagué|78
IBR|Omitama|248
IBZ|Ibiza|301
ICC|Isla de Coche|83
ICI|Cicia|343
ICN|Seoul|239
ICT|Wichita|86
IDA|Idaho Falls|79
IDR|Indore|215
IEG|Nowe Kramsko|324
IFJ|Ísafjörður|264
IFN|Isfahan|246
IGA|Matthew Town|137
IGD|Iğdır|293
IGG|Igiugig|52
IGR|Puerto Iguazu|58
IGT|Sunzha|305
IGU|Foz do Iguaçu|58
IIA|Inis Meáin|288
IJK|Izhevsk|312
IKA|Tehran|246
IKE|Ikerasak|141
IKG|Karakol|192
IKI|Iki|248
IKO|Nikolski|139
IKS|Tiksi|254
IKT|Irkutsk|206
IKU|Tamchy|192
ILD|Lleida|301
ILF|Ilford|175
ILG|Wilmington|138
ILI|Iliamna|52
ILM|Wilmington|138
ILO|Cabatuan|223
ILP|Île des Pins|358
ILQ|Ilo|120
ILR|Ilorin/Ogbomosho|29
ILS|San Salvador|98
ILY|Isle of Islay, Argyll and Bute|299
IMF|Imphal|215
IMK|Simikot|213
IMP|Imperatriz|100
IMT|Kingsford|86
INB|Independence|75
INC|Yinchuan|240
IND|Indianapolis|112
INH|Inhambane|36
INI|Niš|280
INL|International Falls|86
INN|Innsbruck|321
INO|Inongo|28
INQ|Inis Oírr|288
INU|Yaren|355
INV|Inverness, Highland|299
INZ|In Salah|3
IOA|Ioannina|279
IOM|Castletown, Rushen|292
IOQ|Isortoq|141
IOR|Inis Mór|288
IOS|Ilhéus|71
IOT|Illorsuit|141
IPC|Isla De Pascua|341
IPH|Ipoh|217
IPI|Ipiales|78
IPL|Imperial|121
IPN|Ipatinga|158
IPT|Williamsport|138
IQM|Qiemo|240
IQN|Qingyang|240
IQQ|Iquique|156
IQT|Iquitos|120
IRA|Kirakira|347
IRC|Circle|52
IRG|Lockhart River|268
IRJ|La Rioja|60
IRK|Kirksville|86
IRP|Isiro|33
IRZ|Santa Isabel do Rio Negro|125
ISA|Mount Isa|268
ISB|Attock|212
ISC|St. Mary's, Isles of Scilly|299
ISE|Isparta|293
ISG|Ishigaki|248
ISK|Nashik|215
ISP|Islip|138
IST|Istanbul|293
ISU|Sulaymaniyah|186
ITB|Itaituba|155
ITH|Ithaca|138
ITM|Osaka|248
ITO|Hilo|349
ITU|Kurilsk|237
IUE|Alofi|356
IUI|Innarsuit|141
IVC|Invercargill|337
IVL|Ivalo|291
IWA|Ivanovo|305
IWD|Ironwood|129
IWJ|Masuda|248
IWK|Iwakuni|248
IXA|Agartala|215
IXB|Siliguri|215
IXC|Chandigarh|215
IXD|Allahabad|215
IXE|Mangaluru|215
IXG|Belgaum|215
IXI|Lilabari|215
IXJ|Jammu|215
IXK|Keshod|215
IXL|Leh|215
IXM|Madurai|215
IXP|Pathankot|215
IXR|Ranchi|215
IXS|Silchar|215
IXU|Aurangabad|215
IXY|Kandla|215
IXZ|Port Blair|215
IZA|Juiz de Fora|158
IZO|Izumo|248
IZT|Ixtepec|131
JAC|Jackson|94
JAE|Jaén|120
JAF|Jaffna|196
JAI|Jaipur|215
JAN|Jackson|86
JAU|Jauja|120
JAV|Ilulissat|141
JAX|Jacksonville|138
JBB|Jember|207
JBK|Qitai|240
JBQ|La Isabela|157
JBR|Jonesboro|86
JCH|Qasigiannguit|141
JCK|Julia Creek Airport|268
JCL|České Budějovice|309
JDF|Juiz de Fora|158
JDH|Jodhpur|215
JDO|Juazeiro do Norte|100
JDZ|Jingdezhen|240
JED|Jeddah|236
JEE|Carrefour Sanon|145
JEG|Aasiaat|141
JER|St. Peter|294
JFK|New York|138
JFR|Paamiut|141
JGA|Jamnagar|215
JGB|Jagdalpur|215
JGD|Jiagedaqi|240
JGN|Jiayuguan|240
JGO|Qeqertarsuaq|141
JGR|Kangilinnguit|141
JGS|Ji'an|240
JHB|Johor Bahru|217
JHG|Jinghong|240
JHM|Lahaina|349
JHS|Sisimiut|141
JIB|Djibouti City|17
JIC|Jinchang|240
JIJ|Jijiga|2
JIK|Ikaria Island|279
JIM|Jimma|2
JIO|Tiakur|208
JIQ|Qianjiang|240
JIU|Jiujiang|240
JJD|Cruz|100
JJG|Jaguaruna|158
JJM|Meru-Kinna|41
JJN|Quanzhou|240
JJU|Qaqortoq|141
JKG|Jönköping|317
JKH|Chios Island|279
JKL|Kalymnos Island|279
JKR|Janakpur|213
JLG|Jalgaon|215
JLN|Joplin|86
JLR|Jabalpur|215
JMJ|Pu'er|240
JMK|Mykonos|279
JMO|Jomsom|213
JMS|Jamestown|86
JMU|Jiamusi|240
JNB|Johannesburg|23
JNG|Jining|240
JNH|Xiuzhou, Hangzhou|240
JNN|Nanortalik|141
JNS|Narsaq|141
JNU|Juneau|116
JNX|Naxos|279
JNZ|Jinzhou|240
JOE|Joensuu|291
JOG|Yogyakarta|207
JOI|Joinville|158
JOL|Jolo|223
JOS|Jos|29
JPA|João Pessoa|100
JPE|Paragominas|74
JPR|Ji-Paraná|147
JQA|Uummannaq|141
JRA|New York|138
JRG|Jharsuguda Airport|215
JRH|Jorhat|215
JRO|Arusha|16
JSA|Jaisalmer Airport|215
JSH|Crete Island|279
JSI|Skiathos|279
JSJ|Jiansanjiang|240
JSK|Bandar-e-Jask|246
JSR|Jashore|198
JST|Johnstown|138
JSU|Maniitsoq|141
JSY|Syros Island|279
JTC|Bauru|158
JTR|Santorini Island|279
JTY|Astypalaia Island|279
JUB|Juba|24
JUH|Chizhou|240
JUI|Juist|281
JUJ|San Salvador de Jujuy|59
JUK|Ukkusissat|141
JUL|Juliaca|120
JUM|Jumla|213
JUU|Nuugaatsiaq|141
JUV|Upernavik|141
JUZ|Quzhou|240
JXA|Jixi|240
JYV|Jyväskylän Maalaiskunta|291
JZH|Ngawa|240
KAA|Kasama|34
KAB|Kariba|22
KAC|Qamishli|197
KAD|Kaduna|29
KAE|Kake|52
KAJ|Kajaani|291
KAL|Kaltag|52
KAN|Kano|29
KAO|Kuusamo|291
KAT|Awanui|337
KAW|Kawthoung|255
KAX|Kalbarri|275
KBC|Birch Creek|52
KBL|Kabul|210
KBR|Kota Baharu|217
KBU|Stagen|222
KBV|Krabi|189
KCA|Kuqa|240
KCC|Coffman Cove|52
KCG|Chignik|52
KCH|Kuching|218
KCM|Kahramanmaraş|293
KCQ|Chignik Lake|52
KCT|Galle|196
KCY|Krasnoyarsk|216
KCZ|Nankoku|248
KDD|Khuzdar|212
KDH|Kandahar|210
KDI|Kendari|222
KDL|Kärdla|318
KDM|Huvadhu Atoll|332
KDO|Kadhdhoo|332
KDU|Skardu|212
KDV|Vunisea|343
KEB|Nanwalek|52
KEF|Reykjavík|264
KEH|Kenmore|121
KEJ|Kemerovo|226
KEM|Kemi / Tornio|291
KEP|Nepalgunj|213
KER|Kerman|246
KET|Kengtung|255
KEW|Keewaywin|175
KFG|Kalkgurung Airport|270
KFP|False Pass|139
KFS|Kastamonu|293
KGA|Kananga|33
KGC|Kingscote Airport|267
KGD|Kaliningrad|295
KGE|Kagau Island|347
KGF|Karaganda|179
KGI|Broadwood|275
KGK|Koliganek|52
KGL|Kigali|27
KGP|Kogalym|256
KGQ|Kangersuatsiaq|141
KGS|Kos Island|279
KGT|Garzê|240
KGX|Grayling|52
KHD|Khoram Abad Airport|246
KHG|Kashgar|240
KHH|Kaohsiung|243
KHI|Karachi|212
KHK|Khark|246
KHM|Kanti|255
KHN|Nanchang|240
KHS|Khasab|224
KHT|Khost|210
KHV|Khabarovsk|253
KHZ|Kauehi|365
KIE|Kieta|338
KIF|Kingfisher Lake|175
KIH|Kish Island|246
KIJ|Niigata|248
KIK|Kirkuk|186
KIM|Kimberley|23
KIN|Kingston|115
KIR|Farranfore|288
KIS|Kisumu|41
KIT|Kithira Island|279
KIX|Osaka|248
KJA|Krasnoyarsk|216
KJB|Orvakal|215
KJH|Kaili|240
KJI|Burqin|240
KJT|Kertajati|207
KKA|Koyuk|52
KKB|Kitoi Bay|52
KKC|Khon Kaen|189
KKE|Kerikeri|337
KKH|Kongiganak|139
KKI|Akiachak|52
KKJ|Kitakyushu|248
KKN|Kirkenes|306
KKR|Raitahiti|365
KKS|Kashan|246
KKW|Kikwit|28
KKX|Kikai|248
KLG|Kalskag|52
KLH|Kolhapur|215
KLN|Larsen Bay|52
KLO|Kalibo|223
KLP|Seruyan|231
KLR|Kalmar|317
KLU|Klagenfurt am Wörthersee|321
KLV|Karlovy Vary|309
KLW|Klawock|160
KLX|Kalamata|279
KMA|Kerema|362
KMC|King Khaled Military City|236
KME|Kamembe|27
KMG|Kunming|240
KMI|Miyazaki|248
KMJ|Kumamoto|248
KMN|Kamina|33
KMO|Manokotak|52
KMQ|Kanazawa|248
KMS|Kumasi|1
KMW|Kostroma|305
KMY|Moser Bay|52
KND|Kindu|33
KNG|Kaimana|208
KNH|Shang-I|243
KNK|Kokhanok|52
KNO|Beringin|207
KNQ|Koné|358
KNS|King Island Airport|271
KNU|Kanpur|215
KNW|New Stuyahok|52
KNX|Kununurra|275
KOA|Kailua-Kona|349
KOC|Koumac|358
KOE|Kupang|222
KOI|Kirkwall, Orkney Islands|299
KOJ|Kagoshima|248
KOK|Kokkola / Kruunupyy|291
KOP|Nakhon Phanom|189
KOS|Preah Sihanouk|230
KOT|Kotlik|139
KOV|Kokshetau|179
KOW|Ganzhou|240
KOY|Olga Bay|52
KOZ|Ouzinkie|52
KPB|Point Baker|52
KPN|Kipnuk|139
KPO|Pohang|239
KPR|Port Williams|52
KPV|Perryville|52
KPW|Keperveem|181
KPY|Port Bailey|52
KQA|Akutan|139
KQH|Ajmer|215
KQR|Karara|275
KQT|Bokhtar|201
KRB|Karumba Airport|268
KRC|Sungai Penuh|207
KRE|Kirundo|11
KRF|Nyland|317
KRI|Kikori|362
KRK|Balice|324
KRL|Korla|240
KRN|Kiruna|317
KRO|Kurgan|256
KRP|Karup|287
KRR|Krasnodar|305
KRS|Kristiansand|306
KRT|Khartoum|26
KRW|Turkmenbaşy|184
KRY|Karamay|240
KSA|Okat|351
KSC|Košice|282
KSD|Karlstad|317
KSF|Calden|281
KSH|Kermanshah|246
KSJ|Kasos Island|279
KSL|Kassala|26
KSM|St Mary's|139
KSN|Kostanay|234
KSO|Argos Orestiko|279
KSQ|Karshi|238
KSR|Benteng|222
KSU|Kvernberget|306
KSY|Kars|293
KSZ|Kotlas|305
KTA|Karratha|275
KTB|Thorne Bay|52
KTD|Kitadaitōjima|248
KTG|Ketapang|231
KTI|Phnom Penh|230
KTM|Kathmandu|213
KTN|Ketchikan|160
KTP|Tinson Pen|115
KTS|Brevig Mission|139
KTT|Kittilä|291
KTW|Katowice|324
KUA|Kuantan|217
KUD|Kudat|218
KUF|Samara|312
KUG|Kubin Island|268
KUH|Kushiro|248
KUK|Kasigluk|139
KUL|Sepang|217
KUM|Yakushima|248
KUN|Kaunas|322
KUO|Kuopio / Siilinjärvi|291
KUS|Kulusuk|141
KUT|Kopitnari|245
KUU|Bhuntar|215
KUV|Gunsan|239
KUZ|Kuummiut|141
KVA|Kavala|279
KVC|King Cove|139
KVG|Kavieng|362
KVK|Apatity|305
KVL|Kivalina|139
KVM|Markovo|181
KVO|Kraljevo|280
KVX|Kirov|296
KWA|Kwajalein|352
KWB|Karimunjawa|207
KWE|Guiyang|240
KWI|Kuwait City|219
KWJ|Gwangju|239
KWK|Kwigillingok|139
KWL|Guilin|240
KWM|Kowanyama|268
KWN|Quinhagak|52
KWP|West Point|52
KWT|Kwethluk|52
KWZ|Kolwezi|33
KXA|Kasaan|52
KXB|Kolaka|222
KXF|Koro Island|343
KXK|Komsomolsk-on-Amur|253
KYA|Konya|293
KYD|Orchid Island|243
KYK|Karluk|52
KYP|Kyaukpyu|255
KYS|Kayes|5
KYU|Koyukuk|52
KYZ|Kyzyl|216
KZB|Zachar Bay|52
KZI|Kozani|279
KZN|Kazan|305
KZO|Kyzylorda|235
KZR|Altıntaş|293
KZS|Kastelorizo Island|279
LAD|Luanda|32
LAE|Lae|362
LAF|West Lafayette|112
LAJ|Lages|158
LAK|Aklavik|113
LAL|Lakeland|138
LAN|Lansing|95
LAO|Laoag City|223
LAP|La Paz|128
LAQ|Al Albraq|48
LAR|Laramie|94
LAS|Las Vegas|121
LAU|Lamu|41
LAW|Lawton|86
LAX|Los Angeles|121
LBA|Leeds, West Yorkshire|299
LBB|Lubbock|86
LBC|Lübeck|281
LBD|Khujand|201
LBE|Latrobe|138
LBF|North Platte|86
LBH|Sydney|276
LBJ|Labuan Bajo, Manggarai Barat|222
LBL|Liberal|86
LBP|Long Banga|218
LBR|Lábrea|125
LBS|Labasa|343
LBU|Labuan|218
LBV|Libreville|30
LBW|Long Bawan|222
LCA|Larnaca|225
LCE|La Ceiba|168
LCG|Culleredo|301
LCH|Lake Charles|86
LCJ|Łódź|324
LCK|Columbus|138
LCR|La Chorrera|78
LCX|Longyan|240
LCY|London|299
LDB|Londrina|158
LDE|Tarbes/Lourdes/Pyrénées|307
LDG|Leshukonskoye|305
LDH|Lord Howe Island|273
LDS|Yichun|240
LDU|Lahad Datu|218
LDX|Saint-Laurent-du-Maroni|84
LDY|Derry, Derry and Strabane|299
LEA|Exmouth|275
LEB|Lebanon|138
LEC|Lençóis|71
LED|St. Petersburg|305
LEI|Almería|301
LEJ|Schkeuditz|281
LEL|Lake Evella Airport|270
LEN|La Virgen del Camino|301
LEQ|Land's End, Cornwall|299
LER|Leinster Airport|275
LET|Leticia|78
LEU|La Seu d'Urgell Pyrenees and Andorra|301
LEV|Bureta|343
LEX|Lexington|138
LFM|Lamerd|246
LFQ|Linfen|240
LFT|Lafayette|86
LFW|Lomé|31
LGA|New York|138
LGB|Long Beach|121
LGG|Grâce-Hollogne|283
LGI|Deadman's Cay|137
LGK|Langkawi|217
LGL|Long Datih|218
LGW|London|299
LGZ|Shannan|240
LHE|Lahore|212
LHG|Lightning Ridge Airport|276
LHR|London|299
LHS|Las Heras|62
LHW|Lanzhou|240
LIF|Lifou|358
LIG|Limoges/Bellegarde|307
LIH|Lihue, Kauai|349
LIL|Lesquin|307
LIM|Lima|120
LIN|Segrate|311
LIO|Limón|89
LIR|Liberia|89
LIS|Lisbon|297
LIT|Little Rock|86
LIW|Loikaw|255
LJG|Lijiang|240
LJU|Zgornji Brnik|298
LKA|Tiwatobi|222
LKB|Lakeba Island|343
LKE|Seattle|121
LKI|Lubang|207
LKL|Lakselv|306
LKM|Lolak|222
LKN|Leknes|306
LKO|Lucknow|215
LLA|Luleå|317
LLB|Qiannan|240
LLF|Yongzhou|240
LLK|Lankaran|188
LLO|Palopo|222
LLU|Alluitsup Paa|141
LLV|Lüliang|240
LLW|Lumbadzi|9
LMA|Minchumina|52
LMC|La Macarena|78
LMM|Los Mochis|128
LMN|Limbang|193
LMP|Lampedusa|311
LMY|Lake Murray|362
LNB|Lamen Bay|342
LNE|Lonorore|342
LNJ|Lincang|240
LNK|Lincoln|86
LNL|Longnan|240
LNO|Leonora|275
LNS|Lancaster|138
LNU|Malinau|222
LNV|Londolovit|362
LNY|Lanai City|349
LNZ|Linz|321
LOD|Longana|342
LOE|Loei Airport|189
LOH|La Toma|107
LOO|Laghouat|3
LOP|Mataram|222
LOS|Lagos|29
LPA|Gran Canaria Island|260
LPB|La Paz / El Alto|119
LPD|La Pedrera|78
LPF|Liupanshui|240
LPI|Linköping|317
LPL|Liverpool|299
LPM|Lamap|342
LPP|Lappeenranta|291
LPQ|Luang Phabang|252
LPS|Lopez|121
LPT|Lampang Airport|189
LPU|Long Apung-Borneo Island|222
LPY|Chaspuzac, Haute-Loire|307
LQM|Puerto Leguízamo|78
LRD|Laredo|86
LRE|Longreach|268
LRH|La Rochelle|307
LRM|La Romana|157
LRR|Lar|246
LRS|Leros Island|279
LRU|Las Cruces|94
LRV|Gran Roque Island|83
LSA|Losuia|362
LSC|La Serena-Coquimbo|156
LSE|La Crosse|86
LSG|Leshan|240
LSH|Lashio|255
LSI|Lerwick, Shetland|299
LSP|Paraguaná|83
LSR|Kutacane|207
LST|Launceston|271
LSW|Lhok Seumawe-Sumatra Island|207
LSY|Lismore|276
LTD|Ghadames|48
LTI|Altai|205
LTK|Latakia|197
LTM|Lethem|77
LTN|Luton, Luton|299
LTO|Loreto|128
LTT|Saint-Tropez|307
LTU|Latur|215
LTX|Latacunga|107
LUA|Lukla|213
LUD|Luderitz|50
LUG|Agno|326
LUK|Cincinnati|138
LUM|Dehong|240
LUN|Lusaka|34
LUP|Kalaupapa|349
LUQ|San Luis|65
LUR|Cape Lisburne|139
LUV|Langgur|208
LUX|Luxembourg|300
LUZ|Lublin|324
LVI|Livingstone|34
LVO|Laverton|275
LWB|Lewisburg|138
LWK|Lerwick, Shetland Islands|299
LWN|Gyumri|257
LWS|Lewiston|121
LWY|Lawas|218
LXA|Shannan|240
LXG|Luang Namtha|252
LXR|Luxor|12
LXS|Limnos Island|279
LYA|Luoyang|240
LYC|Lycksele|317
LYG|Lianyungang|240
LYH|Lynchburg|138
LYI|Linyi|240
LYP|Faisalabad|212
LYR|Longyearbyen|177
LYS|Colombier-Saugnieu, Rhône|307
LZG|Nanchong|240
LZH|Liuzhou|240
LZN|Matsu|243
LZO|Luzhou|240
LZY|Nyingchi|240
MAA|Chennai|215
MAB|Marabá|74
MAD|Madrid|301
MAF|Midland|86
MAG|Madang|362
MAH|Mahón|301
MAJ|Majuro Atoll|353
MAK|Malakal|24
MAM|Matamoros|127
MAN|Manchester, Greater Manchester|299
MAO|Manaus|125
MAQ|Mae Sot Airport|189
MAR|Maracaibo|83
MAS|Manus Island|362
MAU|Maupiti Airport|365
MAZ|Mayaguez|148
MBA|Mombasa|41
MBD|Mafeking|23
MBE|Monbetsu|248
MBI|Mbeya|16
MBJ|Montego Bay|115
MBL|Manistee|95
MBS|Freeland|95
MBT|Masbate|223
MBW|Melbourne|274
MBX|Maribor|298
MCE|Merced|121
MCG|McGrath|52
MCI|Kansas City|86
MCK|McCook|86
MCN|Macon|138
MCO|Orlando|138
MCP|Macapá|74
MCT|Muscat/Seeb|224
MCV|McArthur River Mine|270
MCW|Mason City|86
MCX|Makhachkala|305
MCY|Maroochydore|268
MCZ|Maceió|123
MDC|Manado|222
MDE|Medellín|78
MDG|Mudanjiang|240
MDI|Makurdi|29
MDK|Mbandaka|28
MDL|Mandalay|255
MDQ|Mar del Plata|56
MDT|Harrisburg|138
MDU|Mendi|362
MDW|Chicago|86
MDZ|Mendoza|61
MEB|Essendon Fields|274
MEC|Manta|107
MED|Medina|236
MEE|Maré|358
MEG|Malanje|32
MEH|Mehamn|306
MEI|Meridian|86
MEL|Melbourne|274
MEM|Memphis|86
MEQ|Kuala Pesisir|207
MEX|Mexico City|131
MFA|Kilindoni|16
MFE|McAllen|86
MFG|Muzaffarabad|212
MFJ|Moala|343
MFK|Matsu|243
MFM|Nossa Senhora do Carmo|220
MFR|Medford|121
MFU|Mfuwe|34
MGA|Managua|124
MGB|Mount Gambier|267
MGC|Michigan City|86
MGF|Maringá|158
MGH|Margate|23
MGM|Montgomery|86
MGQ|Mogadishu|39
MGT|Milingimbi Island|270
MGW|Morgantown|138
MGZ|Mkeik|255
MHC|Dalcahue|156
MHD|Mashhad|246
MHG|Mannheim|281
MHH|Marsh Harbour|137
MHK|Manhattan|86
MHM|Manaoba|347
MHQ|Mariehamn|303
MHT|Manchester|138
MHU|Mount Hotham|274
MHX|Manihiki Island|363
MIA|Miami|138
MID|Mérida|130
MIG|Mianyang|240
MII|Marília|158
MIJ|Mili Island|353
MIM|Merimbula|276
MIR|Monastir|49
MIS|Misima Island|362
MIU|Maiduguri|29
MJF|Mosjøen|306
MJI|Tripoli|48
MJK|Denham|275
MJM|Mbuji Mayi|33
MJN|Mahajanga|327
MJT|Mytilene|279
MJY|Motygino|216
MJZ|Mirny|254
MKE|Milwaukee|86
MKG|Muskegon|95
MKK|Kaunakakai|349
MKL|Jackson|86
MKM|Mukah|218
MKP|Makemo|365
MKQ|Merauke|208
MKR|Meekatharra Airport|275
MKU|Makokou|30
MKW|Manokwari|208
MKY|Mackay|268
MKZ|Malacca|217
MLA|Valletta|302
MLB|Melbourne|138
MLE|Malé|332
MLG|Malang|207
MLI|Moline|86
MLL|Marshall|52
MLM|Morelia|131
MLN|Melilla|13
MLO|Milos Island|279
MLU|Monroe|86
MLW|Monrovia|40
MLX|Malatya|293
MLY|Manley Hot Springs|52
MMB|Ōzora|248
MMD|Minamidaito|248
MME|Darlington, Durham|299
MMG|Mount Magnet Airport|275
MMH|Mammoth Lakes|121
MMJ|Matsumoto|248
MMK|Murmansk|305
MMO|Vila do Maio|261
MMX|Malmö|317
MMY|Miyakojima|248
MNC|Nacala|36
MNF|Mana Island|343
MNG|Maningrida|270
MNI|Gerald's Park|136
MNJ|Mananjary|327
MNL|Manila|223
MNT|Minto|52
MNU|Mawlamyine|255
MNX|Manicoré|125
MNY|Stirling Island|347
MOB|Mobile|86
MOC|Montes Claros|158
MOF|Waioti|222
MOG|Mong Hsat|255
MOH|Morowali|222
MOI|Mitiaro Island|363
MOJ|Moengo|143
MOL|Årø|306
MOQ|Morondava|327
MOT|Minot|86
MOU|Mountain Village|139
MOV|Moranbah|268
MOZ|Moorea-Maiao|365
MPA|Mpacha|50
MPC|Muko Muko|207
MPH|Caticlan|223
MPL|Montpellier/Méditerranée|307
MPM|Maputo|36
MPN|Mount Pleasant|266
MPY|Maripasoula|84
MQC|Miquelon|132
MQF|Magnitogorsk|256
MQJ|Khonuu|242
MQL|Mildura|274
MQM|Mardin|293
MQN|Mo i Rana|306
MQP|Mbombela|23
MQS|Lovell|166
MQT|Gwinn|95
MQX|Mekele|2
MRE|Serena|41
MRI|Anchorage|52
MRS|Marignane, Bouches-du-Rhône|307
MRU|Plaine Magnien|333
MRV|Mineralnyye Vody|305
MRX|Mahshahr|246
MRY|Monterey|121
MRZ|Moree|276
MSA|Muskrat Dam|175
MSJ|Misawa|248
MSL|Muscle Shoals|86
MSN|Madison|86
MSO|Missoula|94
MSP|Minneapolis|86
MSQ|Minsk|304
MSR|Muş|293
MSS|Massena|138
MST|Maastricht|277
MSU|Maseru|37
MSY|New Orleans|86
MSZ|Moçâmedes|32
MTF|Mizan Teferi|2
MTJ|Montrose|94
MTM|Metlakatla|52
MTP|Montauk|138
MTR|Montería|78
MTT|Cosoleacaque|131
MTY|Monterrey|134
MUA|Munda|347
MUB|Maun|21
MUC|Munich|281
MUE|Waimea|349
MUH|Marsa Matruh|12
MUK|Mauke Island|363
MUN|Maturín|83
MUR|Marudi|218
MUX|Multan|212
MUZ|Musoma|16
MVB|Franceville|30
MVD|Ciudad de la Costa|135
MVF|Mossoró|100
MVP|Mitú|78
MVQ|Mogilev|304
MVR|Maroua|18
MVT|Mataiva Airport|365
MVY|Martha's Vineyard|138
MWA|Marion|86
MWL|Mineral Wells|86
MWQ|Magway|255
MWX|Muan|239
MWZ|Mwanza|16
MXH|Moro|362
MXL|Mexicali|170
MXP|Ferno|311
MXV|Mörön|250
MXX|Mora|317
MXZ|Meizhou|240
MYA|Moruya|276
MYD|Malindi|41
MYE|Miyakejima|248
MYG|Abraham Bay Settlement|137
MYI|Murray Island|268
MYJ|Matsuyama|248
MYK|May Creek|52
MYL|McCall|79
MYP|Mary|184
MYQ|Mysore|215
MYR|Myrtle Beach|138
MYT|Myitkyina|255
MYU|Mekoryuk|139
MYW|Mtwara|16
MYY|Miri|218
MZG|Huxi|243
MZH|Amasya|293
MZI|Sévaré|5
MZL|Manizales|78
MZO|Manzanillo|110
MZQ|Mkuze|23
MZR|Mazar-i-Sharif|210
MZS|Moradabad|215
MZT|Mazatlàn|128
MZV|Mulu|218
MZW|Mecheria|3
NAA|Narrabri|276
NAG|Nagpur|215
NAH|Tabukan Utara, Sangihe Islands|222
NAJ|Nakhchivan|188
NAL|Nalchik|305
NAM|Namniwel|208
NAN|Nadi|343
NAO|Nanchong|240
NAP|Napoli|311
NAQ|Qaanaaq|169
NAS|Nassau|137
NAT|Natal|100
NAU|Napuka Island|365
NAV|Nevşehir|293
NAW|Narathiwat Airport|189
NBC|Nizhnekamsk|305
NBE|Enfidha|49
NBJ|Luanda|32
NBO|Nairobi|41
NBS|Baishan|240
NCA|North Caicos|103
NCE|Nice, Alpes-Maritimes|307
NCL|Newcastle upon Tyne, Tyne and Wear|299
NCN|Chenega|52
NCU|Nukus|238
NCY|Annecy|307
NDB|Nouadhibou|19
NDC|Nanded|215
NDG|Qiqihar|240
NDJ|N'Djamena|42
NDR|Al Aaroui|13
NDU|Rundu|50
NDY|Sanday|299
NEC|Necochea|56
NER|Neryungri|254
NEV|Charlestown|163
NGB|Ningbo|240
NGE|N'Gaoundéré|18
NGI|Ngau|343
NGK|Nogliki|237
NGO|Tokoname|248
NGQ|Shiquanhe|240
NGS|Nagasaki|248
NHV|Nuku Hiva|354
NIB|Nikolai|52
NIM|Niamey|43
NIQ|Niaqornat|141
NIU|Naiu Atoll|365
NJC|Nizhnevartovsk|256
NJF|Najaf|186
NKC|Nouakchott|44
NKG|Nanjing|240
NKI|Tuxekan Island|52
NKM|Nagoya|248
NLA|Ndola|34
NLD|Nuevo Laredo|127
NLF|Darnley Island|268
NLG|Nelson Lagoon|52
NLH|Ninglang|240
NLI|Nikolayevsk-na-Amure Airport|253
NLK|Burnt Pine|357
NLT|Xinyuan|240
NLU|Mexico City|131
NMA|Namangan|244
NME|Nightmute|139
NMF|Noonu Atoll|332
NMI|Navi Mumbai|215
NNB|Santa Ana Island|347
NNG|Nanning|240
NNM|Naryan Mar|305
NNR|Inverin|288
NNT|Nan Airport|189
NNY|Nanyang|240
NOB|Nicoya|89
NOC|Charlestown|288
NOD|Norddeich|281
NOJ|Noyabrsk|256
NOP|Sinop|293
NOS|Nosy Be|327
NOU|Nouméa|358
NOV|Huambo|32
NOZ|Novokuznetsk|226
NPE|Napier|337
NPL|New Plymouth|337
NPO|Nanga Pinoh-Borneo Island|231
NPT|Newport|138
NQN|Neuquén|63
NQU|Nuquí|78
NQY|Newquay|299
NQZ|Astana|179
NRA|Narrandera|276
NRD|Norderney|281
NRK|Norrköping|317
NRL|North Ronaldsay|299
NRN|Weeze|277
NRR|Ceiba|148
NRT|Narita|248
NSB|Bimini|137
NSH|Nowshahr|246
NSI|Yaoundé|18
NSK|Norilsk|216
NSN|Nelson|337
NST|Nakhon Si Thammarat|189
NTE|Nantes|307
NTG|Nantong|240
NTL|Williamtown|276
NTN|Normanton|268
NTQ|Wajima|248
NTT|Niuatoputapu|367
NTX|Ranai-Natuna Besar Island|207
NUE|Nuremberg|281
NUI|Nuiqsut|52
NUL|Nulato|52
NUM|Sharma|236
NUP|Nunapitchuk|52
NUS|Norsup|342
NUX|Novy Urengoy|256
NVA|Neiva|78
NVI|Navoi|238
NVT|Navegantes|158
NWI|Norwich, Norfolk|299
NYA|Nyagan|256
NYI|Sunyani|1
NYK|Gathiuru|41
NYM|Nadym|256
NYO|Nyköping|317
NYS|New York|138
NYT|Naypyitaw|255
NYU|Nyaung U|255
NZC|Nazca|120
NZG|Nizhneangarsk|206
NZH|Manzhouli|240
NZL|Zhalantun|240
OAJ|Richlands|138
OAK|Oakland|121
OAL|Cacoal|147
OAX|Oaxaca|131
OBN|North Connel|299
OBO|Obihiro|248
OBU|Kobuk|52
OBX|Obo|362
OBY|Ittoqqortoormiit|141
OCC|Coca|107
OCE|Ocean City|138
OCJ|Boscobel|115
OCS|Corisco Island|35
ODB|Córdoba|301
ODE|Odense|287
ODN|Long Seridan|218
ODO|Bodaybo|206
ODY|Oudomsay|252
OEC|Oecussi-Ambeno|199
OER|Örnsköldsvik|317
OES|San Antonio Oeste|63
OFU|Ofu|359
OGD|Ogden|94
OGG|Kahului|349
OGL|Ogle|108
OGN|Yonaguni|248
OGS|Ogdensburg|138
OGU|Ordu|293
OGX|Ouargla|3
OGZ|Beslan|305
OHD|Ohrid|315
OHE|Mohe|240
OHO|Okhotsk|253
OHS|Suhar|224
OIM|Izu Oshima|248
OIR|Okushiri Island|248
OIT|Oita|248
OJU|Tojo Una-Una|222
OKA|Naha|248
OKC|Oklahoma City|86
OKD|Sapporo|248
OKE|Wadomari|248
OKI|Okinoshima|248
OKJ|Okayama|248
OKL|Oksibil|208
OKR|Yorke Island|268
OKY|Oakey Army Aviation Centre|268
OLA|Ørland|306
OLB|Olbia|311
OLF|Wolf Point|94
OLH|Old Harbor|52
OLJ|Olpoi|342
OLM|Olympia|121
OLP|Olympic Dam|267
OLZ|Olyokminsk|254
OMA|Omaha|86
OMD|Oranjemund|23
OME|Nome|139
OMH|Urmia|246
OMN|Zomin|244
OMO|Mostar|313
OMR|Oradea|284
OMS|Omsk|228
OND|Ondangwa|50
ONG|Mornington Island Airport|268
ONJ|Kitaakita|248
ONQ|Zonguldak|293
ONT|Ontario|121
ONX|Colón|142
OOK|Toksook Bay|139
OOL|Gold Coast|268
OOM|Cooma|276
OPF|Miami|138
OPO|Porto|297
OPP|Salinópolis|74
OPS|Sinop|90
OPU|Balimo|362
ORB|Örebro|317
ORD|Chicago|86
ORF|Norfolk|138
ORG|Paramaribo|143
ORH|Worcester|138
ORI|Port Lions|52
ORK|Cork|288
ORN|Es-Sénia|3
ORT|Northway|52
ORU|Oruro|119
ORV|Noorvik|52
ORY|Paris|307
OSD|Östersund|317
OSI|Osijek|325
OSL|Oslo|306
OSR|Mošnov|309
OSS|Osh|192
OST|Oostende|283
OSW|Orsk|256
OSY|Namsos|306
OTD|Contadora Island|142
OTH|North Bend|121
OTP|Otopeni|284
OTS|Anacortes|121
OTZ|Kotzebue|139
OUA|Ouagadougou|45
OUD|Ahl Angad|13
OUI|Ushant|189
OUL|Oulu / Oulunsalo|291
OUZ|Zouérate|44
OVB|Novosibirsk|227
OVD|Ranón|301
OVS|Sovetskiy|256
OWB|Owensboro|86
OXB|Bissau|8
OYE|Oyem|30
OZC|Ozamiz|223
OZG|Zagora|13
OZZ|Ouarzazate|13
PAB|Bilaspur|215
PAC|Albrook|142
PAD|Büren|281
PAE|Everett|121
PAG|Pagadian|223
PAH|Paducah|86
PAP|Port-au-Prince|145
PAS|Paros|279
PAT|Patna|215
PAV|Paulo Afonso|71
PAZ|Poza Rica|131
PBC|Puebla|131
PBD|Porbandar|215
PBG|Plattsburgh|138
PBH|Paro|247
PBJ|Paama Island|342
PBM|Paramaribo|143
PBO|Paraburdoo|275
PBR|Puerto Barrios|106
PBU|Putao|255
PCL|Pucallpa|120
PCN|Koromiko|337
PCP|São Tomé & Príncipe|47
PCR|Puerto Carreño|78
PDA|Puerto Inírida|78
PDB|Pedro Bay|52
PDG|Padang|207
PDK|Atlanta|138
PDL|Ponta Delgada|258
PDO|Talang Gudang-Sumatra Island|207
PDP|Punta del Este|135
PDS|Piedras Negras|127
PDT|Pendleton|121
PDV|Plovdiv|316
PDX|Portland|121
PEC|Pelican|52
PED|Pardubice|309
PEE|Perm|256
PEG|Perugia|311
PEI|Pereira|78
PEK|Beijing|240
PEM|Puerto Maldonado|120
PEN|Penang|217
PER|Perth|275
PES|Petrozavodsk|305
PET|Pelotas|158
PEU|Puerto Lempira|168
PEV|Pécs|285
PEW|Peshawar|212
PEX|Pechora|305
PEZ|Penza|305
PFB|Passo Fundo|158
PFO|Paphos|225
PFQ|Parsabad|246
PFR|Ilebo|33
PGA|Page|144
PGD|Punta Gorda|138
PGF|Perpignan/Rivesaltes|307
PGH|Pantnagar|215
PGK|Pangkal Pinang|207
PGM|Port Graham|52
PGU|Khiyaroo|246
PGV|Greenville|138
PGZ|Ponta Grossa|158
PHB|Parnaíba|100
PHC|Port Harcourt|29
PHE|Port Hedland|275
PHF|Newport News|138
PHG|Port Harcourt|29
PHH|Pokhara|213
PHL|Philadelphia|138
PHO|Point Hope|139
PHS|Phitsanulok|189
PHW|Phalaborwa|23
PHX|Phoenix|144
PHY|Phetchabun Airport|189
PIA|Peoria|86
PIB|Moselle|86
PIE|Pinellas Park|138
PIH|Pocatello|79
PIK|Prestwick, South Ayrshire|299
PIP|Pilot Point|52
PIR|Pierre|86
PIS|Poitiers/Biard|307
PIT|Pittsburgh|138
PIU|Piura|120
PIX|Pico Island|258
PIZ|Point Lay|139
PJA|Pajala|317
PJM|Puerto Jimenez|89
PKA|Napaskiak|52
PKB|Parkersburg|138
PKC|Petropavlovsk-Kamchatsky|211
PKE|Parkes|276
PKG|Pangkor Island|217
PKN|Pangkalanbun|231
PKP|Puka Puka Airport|365
PKR|Pokhara|213
PKU|Pekanbaru|207
PKV|Pskov|305
PKX|Beijing|240
PKY|Palangkaraya|231
PKZ|Pakse|252
PLJ|Placencia|75
PLM|Palembang|207
PLN|Pellston|95
PLO|Port Lincoln|267
PLQ|Palanga|322
PLS|Providenciales|103
PLW|Palu|222
PLX|Semey|179
PLZ|Gqeberha|23
PMC|Puerto Montt|156
PMF|Parma|311
PMG|Ponta Porã|69
PMI|Palma de Mallorca|301
PMK|Palm Island Airport|268
PMO|Palermo|311
PMQ|Perito Moreno|62
PMR|Palmerston North|337
PMV|Isla Margarita|83
PMW|Palmas|55
PMY|Puerto Madryn|57
PNA|Pamplona|301
PNI|Pohnpei Island|361
PNK|Pontianak|231
PNL|Pantelleria|311
PNP|Popondetta|362
PNQ|Pune|215
PNR|Pointe Noire|10
PNS|Pensacola|86
PNT|Puerto Natales|149
PNY|Puducherry|215
PNZ|Petrolina|151
POA|Porto Alegre|158
POG|Port Gentil|30
POL|Pemba|36
POM|Port Moresby|362
POP|Puerto Plata|157
POR|Pori|291
POS|Port of Spain|146
POZ|Poznań|324
PPB|Presidente Prudente|158
PPE|Puerto Peñasco|111
PPG|Pago Pago|359
PPK|Petropavl|179
PPN|Popayán|78
PPP|Proserpine|268
PPS|Puerto Princesa|223
PPT|Papeete|365
PPV|Port Protection|52
PPW|Papa Westray, Orkney Islands|299
PQC|Phu Quoc Island|203
PQI|Presque Isle|138
PQQ|Port Macquarie|276
PQS|Pilot Station|52
PQT|Qeqertaq|141
PRA|Parana|58
PRC|Prescott|144
PRG|Prague|309
PRI|Praslin Island|331
PRM|Portimão|297
PRN|Prishtina|280
PSA|Pisa|311
PSC|Pasco|121
PSD|Port Said|12
PSE|Ponce|148
PSG|Petersburg|160
PSM|Portsmouth|138
PSO|Chachagüí|78
PSP|Palm Springs|121
PSR|Pescara|311
PSS|Posadas|58
PSU|Putussibau-Borneo Island|231
PSY|Stanley|266
PSZ|Puerto Suárez|119
PTA|Port Alsworth|52
PTD|Port Alexander|52
PTF|Malolo Lailai Island|343
PTG|Polokwane|23
PTH|Port Heiden|52
PTJ|Portland Airport|274
PTO|Pato Branco|158
PTP|Pointe-à-Pitre|105
PTU|Platinum|52
PTY|Tocumen|142
PUB|Pueblo|94
PUD|Puerto Deseado|62
PUF|Pau/Pyrénées|307
PUG|Port Augusta Airport|267
PUJ|Punta Cana|157
PUQ|Punta Arenas|149
PUR|Puerto Rico/Manuripi|119
PUS|Busan|239
PUU|Puerto Asís|78
PUW|Pullman|121
PUY|Pula|325
PUZ|Puerto Cabezas|124
PVA|Providencia|78
PVD|Providence/Warwick|138
PVG|Shanghai|240
PVH|Porto Velho|147
PVK|Preveza|279
PVR|Puerto Vallarta|72
PVU|Provo|94
PWE|Apapelgino|181
PWM|Portland|138
PWQ|Pavlodar|179
PXH|Mount Eba|267
PXM|Puerto Escondido|131
PXO|Vila Baleira|263
PXR|Surin|189
PXU|Pleiku|203
PYJ|Yakutia|254
PYK|Karaj|246
PYT|Paracatu|158
PZB|Pietermaritzburg|23
PZE|Penzance, Cornwall|299
PZH|Fort Sandeman|212
PZI|Panzhihua|240
PZO|Guyana City|83
PZU|Port Sudan|26
QBC|Bella Coola|173
QCU|Akunnaaq|141
QFG|Eqalugaarsuit|141
QFI|Iginniarfik|141
QFN|Narsarmijit|141
QFX|Igaliku|141
QGQ|Attu|141
QJE|Kitsissuarsuit|141
QJH|Qassimiut|141
QJI|Ikamiut|141
QOQ|Saarloq|141
QOW|Owerri|29
QPW|Kangaatsiaq|141
QRO|Querétaro|131
QRW|Okpe|29
QRY|Ikerassaarsuk|141
QSF|Sétif|3
QSR|Salerno|311
QSZ|Shache|240
QUV|Aappilattoq|141
QUW|Ammassivik|141
RAB|Kokopo|362
RAE|Arar|236
RAH|Rafha|236
RAI|Praia|261
RAK|Marrakesh|13
RAM|Ramingining Airport|270
RAO|Ribeirão Preto|158
RAP|Rapid City|94
RAR|Avarua|363
RAS|Rasht|246
RBA|Rabat|13
RBB|Borba|125
RBQ|Rurrenabaque|119
RBR|Rio Branco|154
RBV|Ramata|347
RBY|Ruby|52
RCB|Richards Bay|23
RCE|Roche Harbor|121
RCH|Riohacha|78
RCM|Richmond Airport|268
RDD|Redding|121
RDM|Redmond|121
RDO|Radom|324
RDP|Durgapur|215
RDU|Raleigh/Durham|138
RDV|Red Devil|52
RDZ|Rodez/Marcillac|307
REC|Recife|151
REG|Reggio Calabria|311
REL|Rawson|57
REN|Orenburg|256
RER|Retalhuleu|106
RES|Resistencia|58
RET|Røst|306
REU|Reus|301
REW|Rewa|215
REX|Reynosa|127
RFD|Chicago/Rockford|86
RFP|Uturoa|365
RGA|Rio Grande|67
RGI|Rangiroa Airport|365
RGL|Rio Gallegos|62
RGN|Yangon|255
RGO|Hoemun-ri|232
RHD|Termas de Río Hondo|58
RHI|Rhinelander|86
RHO|Rhodes|279
RHT|Badanjilin|240
RIA|Santa Maria|158
RIB|Riberalta|119
RIC|Richmond|138
RIH|Río Hato|142
RIS|Rishiri|248
RIW|Riverton|94
RIX|Riga|310
RIY|Mukalla|178
RIZ|Rizhao|240
RJA|Madhurapudi|215
RJH|Rajshahi|198
RJK|Rijeka|325
RJL|Logroño|301
RJN|Rafsanjan|246
RKD|Rockland|138
RKE|Roskilde|287
RKI|Sipura Island|207
RKS|Rock Springs|94
RKT|Ras Al Khaimah|200
RKV|Reykjavík|264
RKZ|Xigazê|240
RLG|Laage|281
RLK|Bayannur|240
RMA|Roma|268
RMF|Marsa Alam|12
RMI|Rimini|311
RML|Colombo|196
RMO|Chişinău|286
RMP|Rampart|52
RMQ|Taichung|243
RMT|Rimatara Island|365
RMU|Corvera|301
RMZ|Tobolsk|256
RNB|Ronneby|317
RNI|Corn Island|124
RNJ|Yoron|248
RNL|Rennell Island|347
RNN|Rønne|287
RNO|Reno|121
RNS|Saint-Jacques-de-la-Lande, Ille-et-Vilaine|307
ROA|Roanoke|138
ROB|Monrovia|40
ROC|Rochester|138
ROI|Roi Et|189
ROK|Rockhampton|268
ROO|Rondonópolis|90
ROP|Rota Island|364
ROR|Babelthuap Island|360
ROS|Rosario|58
ROT|Rotorua|337
ROW|Roswell|94
RPR|Raipur|215
RQA|Ruoqiang Town|240
RRG|Port Mathurin|333
RRR|Raroia|365
RRS|Røros|306
RSA|Santa Rosa|63
RSD|Rock Sound|137
RSH|Russian Mission|52
RSI|Hanak|236
RSJ|Rosario|121
RST|Rochester|86
RSU|Yeosu|239
RSW|Fort Myers|138
RTA|Rotuma|343
RTB|Coxen Hole|168
RTG|Satar Tacik, Manggarai|222
RTI|Ba'a - Rote Island|222
RTM|Rotterdam|277
RUA|Arua|25
RUH|Riyadh|236
RUL|Maavaarulu|332
RUN|Sainte-Marie|335
RUR|Rurutu Airport|365
RUS|Marau|347
RUT|Rutland|138
RVE|Saravena|78
RVK|Rørvik|306
RVN|Rovaniemi|291
RVV|Raivavae Airport|365
RVY|Rivera/Santana do Livramento|135
RXS|Roxas City|223
RYK|Rahim Yar Khan|212
RYO|Rio Turbio|62
RZE|Jasionka|324
RZR|Ramsar|246
RZV|Rize|293
SAB|Zion's Hill|118
SAE|Saattut|141
SAF|Santa Fe|94
SAG|Kakadi|215
SAH|Sanaa|178
SAI|Siem Reap|230
SAL|San Salvador|98
SAN|San Diego|121
SAP|San Pedro Sula|168
SAQ|Andros Island|137
SAT|San Antonio|86
SAV|Savannah|138
SAW|Pendik, Istanbul|293
SBA|Santa Barbara|121
SBD|San Bernardino|121
SBH|Gustavia|161
SBN|South Bend|112
SBP|San Luis Obispo|121
SBR|Saibai Island|268
SBT|Sabetta|256
SBW|Sibu|218
SBY|Salisbury|138
SBZ|Sibiu|284
SCC|Deadhorse|52
SCE|State College|138
SCK|Stockton|121
SCL|Santiago|156
SCM|Scammon Bay|139
SCN|Saarbrücken|281
SCO|Aktau|182
SCQ|Santiago de Compostela|301
SCR|Malung-Sälen|317
SCT|Mori|178
SCU|Santiago|110
SCV|Suceava|284
SCW|Syktyvkar|305
SCY|Puerto Baquerizo Moreno|345
SCZ|Santa Cruz/Graciosa Bay/Luova|347
SDD|Lubango|32
SDE|Santiago del Estero|58
SDF|Louisville|117
SDG|Sanandaj Airport|246
SDJ|Natori|248
SDK|Sandakan|218
SDL|Sundsvall/ Härnösand|317
SDN|Sandane|306
SDP|Sand Point|52
SDQ|Santo Domingo|157
SDR|Santander|301
SDS|Sado|248
SDU|Rio de Janeiro|158
SDW|Chipi|215
SDY|Sidney|94
SEA|Seattle|121
SEB|Sabha|48
SEK|Srednekolymsk|254
SEN|Southend-on-Sea, Essex|299
SET|Serra Talhada|151
SEU|Seronera|16
SEZ|Victoria|331
SFA|Sfax|49
SFB|Orlando|138
SFC|St-François|105
SFG|Grand Case|122
SFJ|Kangerlussuaq|141
SFL|São Filipe|261
SFN|Santa Fe|58
SFO|San Francisco|121
SFS|Olongapo|223
SFT|Skellefteå|317
SGC|Surgut|256
SGD|Sønderborg|287
SGF|Springfield|86
SGG|Sermiligaaq|218
SGN|Ho Chi Minh City|203
SGO|St George Airport|268
SGU|St George|94
SGY|Skagway|116
SHA|Shanghai|240
SHB|Nakashibetsu|248
SHC|Shire Inda Selassie|2
SHD|Weyers Cave|138
SHE|Shenyang|240
SHF|Shihezi|240
SHG|Shungnak|52
SHH|Shishmaref|139
SHI|Miyakojima|248
SHJ|Sharjah|200
SHL|Shillong|215
SHM|Shirahama|248
SHO|Mpaka|38
SHR|Sheridan|94
SHS|Jingzhou|240
SHV|Shreveport|86
SHW|Sharurah|236
SHY|Shinyanga|16
SID|Espargos|261
SIF|Simara|213
SIG|San Juan|148
SIH|Silgadi Doti|213
SIN|Singapore|241
SIS|Sishen|23
SIT|Sitka|160
SJC|San Jose|121
SJD|San José del Cabo|128
SJE|San José Del Guaviare|78
SJI|San Jose|223
SJJ|Sarajevo|313
SJK|São José Dos Campos|158
SJL|São Gabriel da Cachoeira|125
SJO|San José|89
SJP|São José do Rio Preto|158
SJT|San Angelo|86
SJU|San Juan|148
SJW|Shijiazhuang|240
SJZ|Velas|258
SKB|Basseterre|163
SKD|Samarkand|238
SKG|Thessaloniki|279
SKH|Surkhet|213
SKK|Shaktoolik|52
SKN|Hadsel|306
SKO|Sokoto|29
SKP|Ilinden|315
SKT|Sialkot|212
SKU|Skiros Island|279
SKX|Saransk|305
SKZ|Sukkur|212
SLA|Salta|63
SLC|Salt Lake City|94
SLD|Sliač|282
SLE|Salem|121
SLH|Sola|342
SLI|Solwesi|34
SLK|Saranac Lake|138
SLL|Salalah|224
SLM|Salamanca|301
SLN|Salina|86
SLP|San Luis Potosí|131
SLQ|Sleetmute|52
SLU|Castries|164
SLW|Saltillo|134
SLX|Salt Cay|103
SLY|Salekhard|256
SLZ|São Luís|100
SMA|Vila do Porto|258
SMF|Sacramento|121
SMI|Samos Island|279
SMK|St Michael|139
SML|Stella Maris|137
SMN|Salmon|79
SMQ|Sampit|231
SMR|Santa Marta|78
SMS|Vohilava|327
SMT|Sorriso|90
SMW|Smara|19
SMX|Santa Maria|121
SNA|Santa Ana|121
SNB|Milikapiti|270
SNC|Salinas/La Libertad|107
SNE|Preguiça|261
SNN|Shannon|288
SNO|Sakon Nakhon Airport|189
SNP|St Paul Island|139
SNU|Santa Clara|110
SNV|Santa Elena de Uairén|83
SNW|Thandwe|255
SNX|Semnan|246
SOB|Sármellék|285
SOC|Surakarta|207
SOD|Sorocaba|158
SOF|Sofia|316
SOG|Sogndal|306
SOJ|Sørkjosen|306
SOM|El Tigre|83
SON|Luganville|342
SOQ|Sorong|208
SOU|Southampton|299
SOV|Seldovia|52
SOW|Show Low|144
SOY|Stronsay|299
SPB|Charlotte Amalie|165
SPC|Sta Cruz de la Palma, La Palma Island|260
SPD|Saidpur|198
SPI|Springfield|86
SPN|I Fadang, Saipan|364
SPP|Menongue|32
SPS|Wichita Falls|86
SPU|Split|325
SPX|Al Jiza|12
SPY|San Pedro Airport|0
SQD|Shangrao|120
SQG|Sintang|231
SQJ|Sanming|240
SQL|San Carlos|121
SRA|Santa Rosa|158
SRE|Sucre|119
SRG|Semarang|207
SRK|Siorapaluk|141
SRL|Mulegé|128
SRP|Leirvik|306
SRQ|Sarasota/Bradenton|138
SRT|Soroti|25
SRV|Stony River|52
SRY|Sari|246
SRZ|Santa Cruz|119
SSA|Salvador|71
SSB|Christiansted|165
SSG|Malabo|35
SSH|Sharm El Sheikh|12
SSJ|Alstahaug|306
SSR|Pentecost Island|342
SST|Santa Teresita|56
SSW|Friday Harbor|121
SSY|Mbanza Congo|32
STC|Saint Cloud|86
STD|Santo Domingo|83
STG|St George|139
STI|Santiago|157
STL|St Louis|86
STM|Santarém|155
STN|London, Essex|299
STR|Stuttgart|281
STS|Santa Rosa|121
STT|Charlotte Amalie|165
STV|Surat|215
STW|Stavropol|305
STX|Christiansted|165
SUB|Surabaya|207
SUF|Lamezia Terme|311
SUG|Surigao City|223
SUI|Sukhumi|245
SUJ|Satu Mare|284
SUK|Batagay-Alyta|254
SUN|Hailey|79
SUR|Summer Beaver|171
SUV|Nausori|343
SUX|Sioux City|86
SUY|Suntar|254
SVA|Savoonga|139
SVB|Sambava|327
SVC|Silver City|94
SVD|Kingstown|166
SVG|Stavanger|306
SVI|San Vicente Del Caguán|78
SVJ|Svolvær|306
SVL|Savonlinna|291
SVO|Moscow|305
SVQ|Seville|301
SVR|Savissivik|141
SVS|Stevens Village|52
SVU|Savusavu|343
SVX|Yekaterinburg|256
SVZ|San Antonio del Tachira|78
SWA|Jieyang|240
SWF|Newburgh|138
SWL|San Vicente|223
SWO|Stillwater|86
SWQ|Sumbawa Besar|222
SWX|Shakawe|21
SXB|Strasbourg|307
SXK|Saumlaki-Yamdena Island|208
SXM|Sint Maarten|122
SXP|Nunam Iqua|52
SXR|Srinagar|215
SYB|Seal Bay|52
SYD|Sydney|276
SYF|Gabriola Island|173
SYM|Pu'er|240
SYO|Shonai|248
SYQ|San Jose|89
SYR|Syracuse|138
SYS|Saskylakh|254
SYU|Sue Islet|268
SYX|Sanya|240
SYY|Stornoway, Western Isles|299
SYZ|Shiraz|246
SZA|Soyo|32
SZB|Subang|217
SZE|Semera|2
SZF|Samsun|293
SZG|Salzburg|281
SZH|Shuozhou|240
SZI|Zaysan|179
SZK|Skukuza|23
SZX|Shenzhen|240
SZY|Szymany|324
SZZ|Szczecin|324
TAB|Scarborough|146
TAC|Tacloban City|223
TAE|Daegu|239
TAG|Panglao|223
TAH|Tanna Island|342
TAI|Taiz|178
TAK|Takamatsu|248
TAL|Tanana|52
TAM|Ciudad Madero|134
TAO|Qingdao|240
TAP|Tapachula|131
TAS|Tashkent|244
TAT|Poprad|282
TAY|Tartu|318
TAZ|Daşoguz|184
TBB|Tuy Hoa|203
TBG|Tabubil|362
TBH|Tablas Island|223
TBI|Cat Island|137
TBJ|Tabarka|49
TBM|Tumbang Samba-Borneo Island|231
TBN|Fort Leonard Wood|86
TBO|Tabora|16
TBP|Tumbes|120
TBS|Tbilisi|245
TBT|Tabatinga|78
TBU|Nuku'alofa|367
TBZ|Tabriz|246
TCA|Tennant Creek|270
TCB|Treasure Cay|137
TCD|Tarapacá|78
TCG|Tacheng|240
TCO|Tumaco|78
TCP|Taba|12
TCQ|Tacna|120
TCR|Vagaikulam|215
TCT|Takotna|52
TCZ|Baoshan|240
TDD|Trinidad|119
TDK|Taldykorgan|179
TDS|Sasereme|362
TDX|Laem Ngop|189
TEB|Teterboro|138
TEE|Tébessi|3
TEK|Tatitlek|52
TEN|Tongren|240
TEQ|Çorlu|293
TER|Praia da Vitória|258
TET|Tete|36
TEX|Telluride|94
TEZ|Tezpur Airport|215
TFF|Tefé|125
TFI|Tufi|362
TFN|Tenerife|260
TFS|Tenerife|260
TFU|Chengdu|240
TGD|Podgorica|308
TGG|Kuala Terengganu|217
TGH|Tongoa Island|342
TGJ|Tiga|358
TGM|Recea|284
TGO|Tongliao|240
TGQ|Tangará da Serra|90
TGR|Touggourt|3
TGT|Tanga|16
TGU|Tegucigalpa|168
TGZ|Tuxtla Gutiérrez|131
THD|Thanh Hóa|189
THE|Teresina|100
THG|Biloela|268
THL|Tachileik|255
THN|Trollhättan|317
THO|Þórshöfn|264
THQ|Tianshui|240
THR|Tehran|246
THS|Sukhothai Airport|189
THX|Turukhansk|216
TIA|Rinas|319
TIE|Tippi|2
TIF|Taif|236
TIH|Tuherahera|365
TIJ|Tijuana|121
TIM|Timika|208
TIN|Tindouf|3
TIQ|Tinian Island|364
TIR|Tirupati|215
TIU|Timaru Airport|337
TIV|Tivat|308
TIW|Tacoma|121
TIZ|Tari|362
TJA|Tarija|119
TJG|Tanta-Tabalong|222
TJH|Toyooka|248
TJK|Tokat|293
TJL|Três Lagoas|81
TJM|Tyumen|256
TJQ|Tanjung Pandan|207
TJS|Tanjung Selor-Borneo Island|222
TJU|Kulob|201
TKD|Sekondi-Takoradi|1
TKE|Tenakee Springs|52
TKF|Truckee|121
TKG|Bandar Lampung|207
TKJ|Tok|52
TKK|Weno Island|340
TKM|Taksimo|206
TKN|Amagi|248
TKP|Takapoto Airport|365
TKQ|Kigoma|16
TKS|Tokushima|248
TKU|Turku|291
TKV|Tatakoto|365
TKX|Takaroa Airport|365
TLA|Teller|139
TLC|Toluca|131
TLE|Toliara|327
TLH|Tallahassee|138
TLI|Toli Toli-Celebes Island|222
TLL|Tallinn|318
TLM|Zenata|3
TLN|Hyères, Var|307
TLQ|Turpan|240
TLS|Toulouse/Blagnac|307
TLT|Tuluksak|52
TLU|Santiago de Tolú|78
TLV|Tel Aviv|209
TLY|Plastun|253
TMC|Radamata|222
TME|Tame|78
TMF|Thimarafushi|332
TMG|Tomanggong|218
TMH|Tanah Merah|208
TMI|Tumling Tar|213
TMJ|Termez|238
TML|Tamale|1
TMM|Toamasina|327
TMP|Tampere / Pirkkala|291
TMR|Tamanrasset|3
TMS|São Tomé|47
TMT|Oriximiná|155
TMW|Tamworth|276
TMX|Timimoun|3
TNA|Jinan|240
TNC|Tin City|139
TND|Trinidad|110
TNE|Tanegashima|248
TNG|Tangier|13
TNH|Tonghua|240
TNJ|Tanjung Pinang-Bintan Island|207
TNK|Tununak|52
TNN|Tainan|243
TNR|Antananarivo|327
TOD|Tioman Island|217
TOE|Tozeur|49
TOF|Tomsk|249
TOG|Togiak Village|52
TOL|Toledo|138
TOM|Timbuktu|5
TOS|Tromsø|306
TOU|Touho|358
TOW|Toledo|158
TOY|Toyama|248
TPA|Tampa|138
TPE|Taoyuan|243
TPI|Tapini|362
TPJ|Taplejung|213
TPP|Tarapoto|120
TPQ|Tepic|128
TPS|Trapani|311
TQA|Tasiusaq|141
TQI|Tiniteqilaaq|141
TQO|Tulum|82
TQR|Tremiti Islands|311
TRA|Tarama|248
TRC|Torreón|134
TRD|Trondheim|306
TRE|Balemartine, Argyll and Bute|299
TRF|Sandefjord|306
TRG|Tauranga|337
TRI|Blountville|138
TRK|Tarakan|222
TRN|Caselle Torinese|311
TRR|Trincomalee|196
TRS|Ronchi dei Legionari/Trieste|311
TRT|Toraja|222
TRU|Trujillo|120
TRV|Thiruvananthapuram|215
TRW|South Tarawa|366
TRZ|Tiruchirappalli|215
TSA|Taipei|243
TSF|Treviso|311
TSJ|Tsushima|248
TSM|Taos|94
TSN|Tianjin|240
TSR|Timişoara|284
TSS|New York|138
TST|Trang|189
TSV|Townsville|268
TTA|Tan Tan|13
TTE|Ternate|208
TTJ|Tottori|248
TTN|Ewing Township|138
TTS|Tsaratanana|327
TTT|Taitung City|243
TTU|Tétouan|13
TTW|Tissamaharama|196
TUA|Tulcán|107
TUB|Tubuai Airport|365
TUC|San Miguel de Tucumán|66
TUF|Tours, Indre-et-Loire|307
TUG|Tuguegarao City|223
TUI|Turaif|236
TUK|Turbat|212
TUL|Tulsa|86
TUN|Tunis|49
TUO|Taupo|337
TUP|Tupelo|86
TUR|Tucuruí|74
TUS|Tucson|144
TUU|Tabuk|236
TVC|Traverse City|95
TVF|Thief River Falls|86
TVS|Tangshan|240
TVT|Tashkent|244
TVU|Matei|343
TVY|Dawei|255
TWA|Twin Hills|52
TWC|Tumxuk|240
TWF|Twin Falls|79
TWT|Bongao|223
TWU|Tawau|218
TXE|Takengon|207
TXK|Texarkana|86
TXN|Huangshan|240
TYF|Torsby|317
TYL|Talara|120
TYN|Taiyuan|240
TYR|Tyler|86
TYS|Knoxville/Maryville|138
TZA|Belize City|75
TZL|Dubrave Gornje|313
TZN|Andros|137
TZX|Trabzon|293
UAH|Ua Huka|354
UAI|Suai|199
UAK|Narsarsuaq|141
UAP|Ua Pou|354
UAQ|San Juan|64
UAR|Bouarfa|13
UBA|Uberaba|158
UBB|Mabuiag Island|268
UBJ|Ube|248
UBN|Ulaanbaatar|250
UBP|Ubon Ratchathani|189
UCB|Ulanqab|240
UCT|Ukhta|305
UDI|Uberlândia|158
UDR|Udaipur|215
UEL|Quelimane|36
UEO|Kumejima|248
UET|Quetta|212
UFA|Ufa|256
UGA|Bulgan|250
UGC|Urgench|238
UGI|San Juan|52
UGU|Bilogai|208
UIB|Quibdó|78
UIH|Quy Nohn|203
UII|Utila Island|168
UIN|Quincy|86
UIO|Quito|107
UJE|Ujae Atoll|353
UKB|Kobe|248
UKE|Bhawanipatna|215
UKG|Ust-Kuyga|253
UKK|Ust-Kamenogorsk|179
UKX|Ust-Kut|206
ULG|Ölgii|205
ULH|Al-Ula|236
ULK|Lensk|254
ULO|Ulaangom|205
ULP|Quilpie Airport|268
ULU|Gulu|25
ULV|Ulyanovsk|320
ULY|Cherdakly|320
UMD|Uummannaq|141
UME|Umeå|317
UMS|Ust-Maya|214
UMU|Umuarama|158
UNA|Una|71
UNG|Kiunga|362
UNI|Union Island|166
UNK|Unalakleet|52
UNN|Ranong|189
UOL|Buol|222
UPG|Makassar|222
UPN|Uruapan|131
URA|Uralsk|229
URC|Ürümqi|240
URE|Kuressaare|318
URG|Uruguaiana|158
URJ|Uray|256
URT|Surat Thani|189
URY|Gurayat|236
USA|Concord|138
USH|Ushuaia|67
USJ|Usharal|179
USK|Usinsk|305
USM|Na Thon|189
USN|Ulsan|239
USR|Ust-Nera|251
UST|St Augustine|138
USU|Coron|223
UTH|Udon Thani|189
UTN|Upington|23
UTO|Utopia Creek|52
UTP|Rayong|189
UTT|Mthatha|23
UUA|Bugulma|305
UUD|Ulan Ude|206
UUS|Yuzhno-Sakhalinsk|237
UVE|Ouvéa|358
UVF|Vieux Fort|164
UVI|União da Vitória|158
UYL|Nyala|26
UYN|Yulin|240
UYU|Quijarro|119
UZR|Urzhar|179
VAA|Vaasa|291
VAI|Vanimo|362
VAK|Chevak|139
VAL|Valença|71
VAM|Maamigili|332
VAN|Van|293
VAO|Suavanao|347
VAQ|Vanavara|216
VAR|Varna|316
VAS|Sivas|293
VAV|Vava'u Island|367
VAW|Vardø|306
VBS|Montichiari|311
VBV|Vanua Balavu|343
VBY|Visby|317
VCA|Can Tho|203
VCE|Venezia|311
VCL|Tam Nghĩa|203
VCP|Campinas|158
VCS|Con Dao|203
VCT|Victoria|86
VDC|Vitória da Conquista|71
VDE|El Hierro Island|260
VDH|Dong Hoi|189
VDM|Viedma / Carmen de Patagones|63
VDO|Van Don|189
VDS|Vadsø|306
VDZ|Valdez|52
VEE|Venetie|52
VEL|Vernal|94
VEO|Severo-Yeniseysk|216
VER|Veracruz|131
VFA|Victoria Falls|22
VGA|Vijayawada|215
VGO|Vigo|301
VHM|Vilhelmina|317
VHV|Verkhnevilyuisk|254
VIE|Vienna|321
VIG|El Vigía|83
VII|Vinh|189
VIJ|Spanish Town|172
VIL|Dakhla|19
VIT|Alava|301
VIX|Vitória|158
VJB|Xai-Xai|36
VKG|Rach Gia|203
VKO|Moscow|305
VKT|Vorkuta|305
VLC|Valencia|301
VLD|Valdosta|138
VLI|Port Vila|342
VLL|Valladolid|301
VLN|Valencia|83
VLS|Epi Island|342
VLV|Valera|83
VMU|Baimuru|362
VNO|Vilnius|322
VNS|Varanasi|215
VNX|Vilanculo|36
VOG|Volgograd|323
VOL|Nea Anchialos|279
VOZ|Voronezh|305
VPE|Ngiva|32
VPN|Vopnafjörður|264
VPS|Valparaiso|86
VPY|Chimoio|36
VQS|Vieques|148
VRA|Matanzas|110
VRB|Vero Beach|138
VRC|Virac|223
VRL|Vila Real|297
VRN|Caselle|311
VRY|Værøy|306
VSA|Villahermosa|131
VSE|Viseu|297
VST|Stockholm / Västerås|317
VSV|Shravasti|215
VTE|Vientiane|252
VTU|Las Tunas|110
VTZ|Visakhapatnam|215
VUP|Valledupar|78
VUS|Velikiy Ustyug|305
VVC|Villavicencio|78
VVI|Santa Cruz|119
VVO|Artyom|253
VVZ|Illizi|3
VXC|Lichinga|36
VXE|São Pedro|261
VXO|Växjö|317
VYI|Vilyuisk|254
WAA|Wales|139
WAE|Wadi Al Dawasir|236
WAG|Wanganui|337
WAW|Warsaw|324
WBB|Stebbins|52
WBM|Wapenamanda|362
WBQ|Beaver|52
WDH|Windhoek|50
WDN|Eastsound|121
WDS|Shiyan|240
WEF|Weifang|240
WEH|Weihai|240
WEI|Weipa|268
WFB|Ketchikan|52
WGA|Forest Hill|276
WGE|Walgett Airport|276
WGN|Shaoyang|240
WGP|Waingapu-Sumba Island|222
WHA|Wuhu|240
WHD|Hyder|52
WHK|Whakatāne|337
WIC|Wick|299
WIL|Nairobi|41
WIN|Winton Airport|268
WJR|Wajir|41
WJU|Wonju|239
WKA|Wanaka|337
WKJ|Wakkanai|248
WKK|Aleknagik|52
WLG|Wellington|337
WLH|Walaha|342
WLK|Selawik|52
WLS|Wallis Island|369
WMI|Nowy Dwór Mazowiecki|324
WMN|Maroantsetra|327
WMO|White Mountain|139
WMT|Zunyi|240
WMX|Wamena|208
WNA|Napakiak|52
WNH|Wenshan|240
WNI|Wangi-wangi Island|222
WNN|Wunnumin Lake|175
WNP|Naga|223
WNR|Windorah|268
WNS|Nawabashah|212
WNZ|Wenzhou|240
WPL|Powell River|173
WRE|Whangarei|337
WRG|Wrangell|160
WRO|Wrocław|324
WRY|Westray, Orkney Islands|299
WSK|Wushan|240
WSN|South Naknek|52
WST|Westerly|138
WSX|West Sound|121
WSZ|Westport|337
WTA|Tambohorano|327
WTB|Toowoomba|268
WTK|Noatak|139
WTL|Tuntutuliak|52
WUA|Wuhai|240
WUH|Wuhan|240
WUN|Wiluna Airport|275
WUS|Wuyishan|240
WUT|Xinzhou|240
WUU|Wau|24
WUX|Wuxi|240
WUZ|Tangbu|240
WVB|Walvis Bay|50
WWK|Wewak|362
WWP|Whale Pass|52
WWT|Mertarvik|139
WXN|Wanzhou|240
WYA|Whyalla|267
WYS|West Yellowstone|94
XAI|Xinyang|240
XAP|Chapecó|158
XBE|Bearskin Lake|175
XBJ|Birjand|246
XCH|Flying Fish Cove|328
XCR|Chalons en Champagne|307
XEQ|Tasiusak|141
XFN|Xiangyang|240
XGR|Kangiqsualujjuaq|171
XIC|Liangshan|240
XIL|Xilinhot|240
XIQ|Ilimanaq|141
XIY|Xi'an|240
XKH|Xieng Khouang|252
XKS|Kasabonika|175
XLB|Lac Brochet|175
XMH|Manihi Airport|365
XMN|Xiamen|240
XMS|Macas|107
XMY|Yam Island|268
XNA|Fayetteville/Springdale/Rogers|86
XNN|Haidong|240
XPK|Pukatawagan|175
XPL|Palmerola|168
XQP|Quepos|89
XQU|Qualicum Beach|173
XRY|Jerez de la Frontera|301
XSC|South Caicos|103
XSI|South Indian Lake|175
XSP|Seletar|217
XTG|Thargomindah|268
XTL|Tadoule Lake|175
XUZ|Xuzhou|240
XWA|Williston|86
XYA|Yandina|347
YAA|Anahim Lake|173
YAB|Arctic Bay|150
YAC|Cat Lake|175
YAG|Fort Frances|175
YAJ|Saturna Island|173
YAK|Yakutat|176
YAL|Alert Bay|173
YAM|Sault Ste Marie|95
YAP|Yap Island|340
YAQ|Maple Bay|173
YAS|Yasawa Island|343
YAT|Attawapiskat|171
YAV|Miners Bay|175
YAX|Angling Lake|175
YAY|St. Anthony|162
YAZ|Tofino|173
YBB|Kugaaruk|80
YBC|Baie-Comeau|171
YBE|Uranium City|167
YBF|Bamfield|173
YBG|Saguenay|171
YBI|Black Tickle|162
YBK|Baker Lake|150
YBL|Campbell River|173
YBP|Yibin|240
YBQ|Thetis Island|173
YBR|Brandon|175
YBT|Brochet|175
YBV|Berens River|175
YBW|Bedwell Harbour|97
YBX|Blanc-Sablon|76
YBY|Bonnyville|97
YCB|Cambridge Bay|80
YCD|Nanaimo|173
YCG|Castlegar|173
YCK|Colville Lake|113
YCM|Niagara-on-the-Lake|171
YCO|Kugluktuk|80
YCR|Cross Lake|175
YCS|Chesterfield Inlet|150
YCU|Yuncheng|240
YCY|Clyde River|114
YDA|Dawson City|92
YDF|Deer Lake|162
YDL|Dease Lake|173
YDN|Dauphin|175
YDP|Nain|102
YDV|Bloodvein River|175
YEG|Edmonton|97
YEI|Yenişehir|293
YEK|Arviat|150
YER|Fort Severn|171
YEV|Inuvik|113
YFA|Fort Albany|171
YFB|Iqaluit|114
YFC|Fredericton|133
YFH|Fort Hope|171
YFJ|Wekweètì|97
YFO|Flin Flon|175
YFS|Fort Simpson|113
YFX|St. Lewis|162
YGG|Salt Spring Island|173
YGH|Fort Good Hope|113
YGJ|Yonago|248
YGL|La Grande Rivière|171
YGN|Broughton Island|173
YGO|Gods Lake Narrows|175
YGP|Gaspé|171
YGR|Les Îles-de-la-Madeleine|109
YGT|Igloolik|114
YGV|Havre-Saint-Pierre|171
YGW|Kuujjuarapik|114
YGX|Gillam|175
YGZ|Grise Fiord|114
YHA|Port Hope Simpson|162
YHG|Charlottetown|162
YHH|Campbell River|173
YHI|Ulukhaktok|97
YHK|Gjoa Haven|80
YHM|Hamilton|171
YHO|Hopedale|102
YHP|Poplar Hill|175
YHR|Chevery|76
YHU|Montréal|171
YHY|Hay River|97
YHZ|Halifax|109
YIA|Yogyakarta|207
YIC|Yichun|240
YIE|Arxan|240
YIF|St-Augustin|76
YIG|Stuart Island|173
YIH|Yichang|240
YIK|Ivujivik|114
YIN|Ili|240
YIO|Pond Inlet|114
YIV|Island Lake|175
YIW|Yiwu/Jinhua|240
YKA|Kamloops|173
YKF|Breslau|171
YKG|Kangirsuk|171
YKH|Yingkou|240
YKL|Schefferville|171
YKM|Yakima|121
YKO|Hakkari|293
YKQ|Waskaganish|114
YKS|Yakutsk|254
YKU|Chisasibi|171
YLC|Kimmirut|114
YLE|Whatì|97
YLH|Lansdowne House|171
YLK|Barrie|171
YLL|Lloydminster|97
YLW|Kelowna|173
YLX|Yulin|240
YMF|Galiano Island|173
YMH|Mary's Harbour|162
YMM|Fort McMurray|97
YMN|Makkovik|102
YMO|Moosonee|171
YMP|Port McNeill|173
YMS|Yurimaguas|120
YMT|Chibougamau|171
YMX|Montréal|171
YNA|Natashquan|76
YNB|Yanbu|236
YNC|Wemindji|114
YND|Gatineau|171
YNE|Norway House|175
YNJ|Yanji|240
YNL|Points North Landing|152
YNO|North Spirit Lake|175
YNP|Natuashish|102
YNS|Nemiscau|171
YNT|Yantai|240
YNY|Gonghang-ro|239
YNZ|Yancheng|240
YOC|Old Crow|92
YOG|Ogoki Post|171
YOH|Oxford House|175
YOJ|High Level|97
YOL|Yola|29
YOW|Ottawa|171
YPA|Prince Albert|152
YPC|Paulatuk|113
YPE|Peace River|97
YPH|Inukjuak|171
YPJ|Aupaluk|171
YPL|Pickle Lake|70
YPM|Pikangikum|175
YPN|Port-Menier|171
YPO|Peawanuck|171
YPQ|Peterborough|171
YPR|Prince Rupert|173
YPW|Powell River|173
YPX|Puvirnituq|114
YPY|Fort Chipewyan|97
YPZ|Burns Lake|173
YQA|Gravenhurst|171
YQB|Quebec|171
YQC|Quaqtaq|114
YQD|The Pas|175
YQG|Windsor|171
YQH|Watson Lake|174
YQK|Kenora|175
YQL|Lethbridge|97
YQM|Moncton|133
YQN|Nakina|171
YQQ|Comox|173
YQR|Regina|152
YQT|Thunder Bay|171
YQU|Grande Prairie|97
YQX|Gander|162
YQY|Sydney|101
YQZ|Quesnel|173
YRA|Gamètì|97
YRB|Resolute Bay|153
YRF|Cartwright|102
YRG|Rigolet|102
YRJ|Roberval|171
YRL|Red Lake|175
YRO|Ottawa|171
YRS|Red Sucker Lake|175
YRT|Rankin Inlet|150
YSB|Sudbury|171
YSF|Stony Rapids|152
YSG|Lutselk'e|97
YSJ|Saint John|133
YSK|Sanikiluaq|114
YSM|Fort Smith|97
YSO|Postville|102
YSQ|Qian Gorlos Mongol Autonomous County|240
YST|St. Theresa Point|175
YSY|Sachs Harbour|113
YTE|Kinngait|114
YTG|Sullivan Bay|173
YTH|Thompson|175
YTL|Big Trout Lake|175
YTP|Tofino|173
YTQ|Tasiujaq|171
YTS|Timmins|171
YTW|Hotan|240
YTY|Yangzhou|240
YTZ|Toronto|171
YUD|Umiujaq|114
YUL|Montréal|171
YUM|Yuma|144
YUS|Yushu|240
YUT|Repulse Bay|150
YUX|Sanirajak|114
YUY|Rouyn-Noranda|171
YVB|Bonaventure|171
YVC|La Ronge|152
YVM|Qikiqtarjuaq|114
YVO|Val-d'Or|171
YVP|Kuujjuaq|171
YVQ|Norman Wells|113
YVR|Vancouver|173
YVV|Wiarton|171
YVZ|Deer Lake|175
YWB|Kangiqsujuaq|171
YWG|Winnipeg|175
YWH|Victoria|173
YWJ|Déline|113
YWK|Wabush|102
YWL|Williams Lake|173
YWM|Williams Harbour|162
YWP|Webequie|171
YWS|Whistler|173
YXC|Cranbrook|97
YXE|Saskatoon|152
YXH|Medicine Hat|97
YXJ|Fort Saint John|93
YXL|Sioux Lookout|175
YXN|Whale Cove|150
YXP|Pangnirtung|114
YXS|Prince George|173
YXT|Terrace|173
YXU|London|171
YXX|Abbotsford|121
YXY|Whitehorse|174
YYA|Yueyang|240
YYB|North Bay|171
YYC|Calgary|97
YYD|Smithers|173
YYE|Fort Nelson|99
YYF|Penticton|173
YYG|Charlottetown|109
YYH|Taloyoak|80
YYJ|Victoria|173
YYL|Lynn Lake|175
YYQ|Churchill|175
YYR|Goose Bay|102
YYT|St. John's|162
YYY|Mont-Joli|171
YYZ|Toronto|171
YZF|Yellowknife|97
YZG|Salluit|171
YZP|Sandspit|173
YZS|Coral Harbour|70
YZT|Port Hardy|173
YZU|Whitecourt|97
YZV|Sept-Îles|171
YZY|Zhangye|173
YZZ|Trail|173
ZAD|Zadar|325
ZAG|Velika Gorica|325
ZAH|Zahedan|246
ZAL|Valdivia|156
ZAM|Zamboanga|223
ZAT|Zhaotong|240
ZAZ|Zaragoza|301
ZBF|South Tetagouche|133
ZBR|Konarak|246
ZCL|Zacatecas|131
ZCO|Temuco|156
ZDY|Delma Island|200
ZEL|Bella Bella|173
ZEM|Eastmain River|114
ZFD|Fond-du-Lac|167
ZFL|Zhaosu|240
ZFM|Fort Mcpherson|113
ZFN|Tulita|113
ZGI|Gods River|175
ZGS|Le Golfe-du-Saint-Laurent|76
ZHA|Zhanjiang|240
ZHY|Zhongwei|240
ZIA|Moscow|305
ZIG|Ziguinchor|15
ZIH|Ixtapa|131
ZIX|Zhigansk|254
ZKE|Kashechewan|171
ZKP|Zyryanka|242
ZLO|Manzanillo|131
ZLT|La Tabatière|76
ZMT|Masset|173
ZNA|Nanaimo|173
ZND|Zinder|43
ZNE|Newman|275
ZNZ|Zanzibar|16
ZOS|Osorno|156
ZPB|Sachigo Lake|175
ZPC|Pucon|156
ZQN|Queenstown|337
ZQZ|Zhangjiakou|240
ZRH|Zurich|326
ZRJ|Round Lake|175
ZSA|San Salvador|137
ZSE|Saint-Pierre|335
ZSJ|Sandy Lake|175
ZTB|Tête-à-la-Baleine|76
ZTH|Zakynthos|279
ZTM|Shamattawa|175
ZUH|Zhuhai|240
ZUM|Churchill Falls|102
ZWL|Wollaston Lake|152
ZYI|Zunyi|240
ZYL|Sylhet|198
`.trim().split('\n').map(line => {
    const [code, city, tz] = line.split('|');
    return [code, [city, AIRPORT_TIME_ZONES[tz]]];
}));
