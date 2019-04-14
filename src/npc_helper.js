window.npc_helper = {
	//update april 10, 2019
	DataBuildings: [
			//start unit id = 1
			[[40,100,50,60],[65,165,85,100],[110,280,140,165],[185,465,235,280],[310,780,390,465],[520,1300,650,780],[870,2170,1085,1300],[1450,3625,1810,2175],[2420,6050,3025,3630],[4040,10105,5050,6060],[6750,16870,8435,10125],[11270,28175,14090,16905],[18820,47055,23525,28230],[31430,78580,39290,47150],[52490,131230,65615,78740],[87660,219155,109575,131490],[146395,365985,182995,219590],[244480,611195,305600,366715],[408280,1020695,510350,612420],[681825,1704565,852280,1022740],[1138650,2846620,1423310,1707970],[1901540,4753855,2376925,2852315],[3175575,7938935,3969470,4763360],[5303210,13258025,6629015,7954815],[8856360,22140900,11070450,13284540]],
			[[80,40,80,50],[135,65,135,85],[225,110,225,140],[375,185,375,235],[620,310,620,390],[1040,520,1040,650],[1735,870,1735,1085],[2900,1450,2900,1810],[4840,2420,4840,3025],[8080,4040,8080,5050],[13500,6750,13500,8435],[22540,11270,22540,14090],[37645,18820,37645,23525],[62865,31430,62865,39290],[104985,52490,104985,65615],[175320,87660,175320,109575],[292790,146395,292790,182995],[488955,244480,488955,305600],[816555,408280,816555,510350],[1363650,681825,1363650,852280],[2277295,1138650,2277295,1423310],[3803085,1901540,3803085,2376925],[6351150,3175575,6351150,3969470],[10606420,5303210,10606420,6629015],[17712720,8856360,17712720,11070450]],
			[[100,80,30,60],[165,135,50,100],[280,225,85,165],[465,375,140,280],[780,620,235,465],[1300,1040,390,780],[2170,1735,650,1300],[3625,2900,1085,2175],[6050,4840,1815,3630],[10105,8080,3030,6060],[16870,13500,5060,10125],[28175,22540,8455,16905],[47055,37645,14115,28230],[78580,62865,23575,47150],[131230,104985,39370,78740],[219155,175320,65745,131490],[365985,292790,109795,219590],[611195,488955,183360,366715],[1020695,816555,306210,612420],[1704565,1363650,511370,1022740],[2846620,2277295,853985,1707970],[4753855,3803085,1426155,2852315],[7938935,6351150,2381680,4763360],[13258025,10606420,3977410,7954815],[22140900,17712720,6642270,13284540]],
			[[70,90,70,20],[115,150,115,35],[195,250,195,55],[325,420,325,95],[545,700,545,155],[910,1170,910,260],[1520,1950,1520,435],[2535,3260,2535,725],[4235,5445,4235,1210],[7070,9095,7070,2020],[11810,15185,11810,3375],[19725,25360,19725,5635],[32940,42350,32940,9410],[55005,70720,55005,15715],[91860,118105,91860,26245],[153405,197240,153405,43830],[256190,329385,256190,73195],[427835,550075,427835,122240],[714485,918625,714485,204140],[1193195,1534105,1193195,340915],[1992635,2561960,1992635,569325],[3327700,4278470,3327700,950770],[5557255,7145045,5557255,1587785],[9280620,11932225,9280620,2651605],[15498630,19926810,15498630,4428180]],
			[[520,380,290,90],[935,685,520,160],[1685,1230,940,290],[3035,2215,1690,525],[5460,3990,3045,945]],
			[[440,480,320,50],[790,865,575,90],[1425,1555,1035,160],[2565,2800,1865,290],[4620,5040,3360,525]],
			[[200,450,510,120],[360,810,920,215],[650,1460,1650,390],[1165,2625,2975,700],[2100,4725,5355,1260]],
			[[500,440,380,1240],[900,790,685,2230],[1620,1425,1230,4020],[2915,2565,2215,7230],[5250,4620,3990,13015]],
			[[1200,1480,870,1600],[2160,2665,1565,2880],[3890,4795,2820,5185],[7000,8630,5075,9330],[12595,15535,9135,16795]],
			[[130,160,90,40],[165,205,115,50],[215,260,145,65],[275,335,190,85],[350,430,240,105],[445,550,310,135],[570,705,395,175],[730,900,505,225],[935,1155,650,290],[1200,1475,830,370],[1535,1890,1065,470],[1965,2420,1360,605],[2515,3095,1740,775],[3220,3960,2230,990],[4120,5070,2850,1270],[5275,6490,3650,1625],[6750,8310,4675,2075],[8640,10635,5980,2660],[11060,13610,7655,3405],[14155,17420,9800,4355]],
			[[80,100,70,20],[100,130,90,25],[130,165,115,35],[170,210,145,40],[215,270,190,55],[275,345,240,70],[350,440,310,90],[450,565,395,115],[575,720,505,145],[740,920,645,185],[945,1180,825,235],[1210,1510,1060,300],[1545,1935,1355,385],[1980,2475,1735,495],[2535,3170,2220,635],[3245,4055,2840,810],[4155,5190,3635,1040],[5315,6645,4650,1330],[6805,8505,5955,1700],[8710,10890,7620,2180]],
			//12 was remove
			[[180,250,500,160],[230,320,640,205],[295,410,820,260],[375,525,1050,335],[485,670,1340,430],[620,860,1720,550],[790,1100,2200,705],[1015,1405,2815,900],[1295,1800,3605,1155],[1660,2305,4610,1475],[2125,2950,5905,1890],[2720,3780,7555,2420],[3480,4835,9670,3095],[4455,6190,12380,3960],[5705,7925,15845,5070],[7300,10140,20280,6490],[9345,12980,25960,8310],[11965,16615,33230,10635],[15315,21270,42535,13610],[19600,27225,54445,17420]],
			[[1750,2250,1530,240],[2240,2880,1960,305],[2865,3685,2505,395],[3670,4720,3210,505],[4700,6040,4105,645],[6015,7730,5255,825],[7695,9895,6730,1055],[9850,12665,8615,1350],[12610,16215,11025,1730],[16140,20755,14110,2215],[20660,26565,18065,2835],[26445,34000,23120,3625],[33850,43520,29595,4640],[43330,55705,37880,5940],[55460,71305,48490,7605],[70990,91270,62065,9735],[90865,116825,79440,12460],[116305,149540,101685,15950],[148875,191410,130160,20415],[190560,245005,166600,26135]],
			[[70,40,60,20],[90,50,75,25],[115,65,100,35],[145,85,125,40],[190,105,160,55],[240,135,205,70],[310,175,265,90],[395,225,340,115],[505,290,430,145],[645,370,555,185],[825,470,710,235],[1060,605,905,300],[1355,775,1160,385],[1735,990,1485,495],[2220,1270,1900,635],[2840,1625,2435,810],[3635,2075,3115,1040],[4650,2660,3990,1330],[5955,3405,5105,1700],[7620,4355,6535,2180]],
			[[110,160,90,70],[140,205,115,90],[180,260,145,115],[230,335,190,145],[295,430,240,190],[380,550,310,240],[485,705,395,310],[620,900,505,395],[795,1155,650,505],[1015,1475,830,645],[1300,1890,1065,825],[1660,2420,1360,1060],[2130,3095,1740,1355],[2725,3960,2230,1735],[3485,5070,2850,2220],[4460,6490,3650,2840],[5710,8310,4675,3635],[7310,10635,5980,4650],[9360,13610,7655,5955],[11980,17420,9800,7620]],
			[[80,70,120,70],[100,90,155,90],[130,115,195,115],[170,145,250,145],[215,190,320,190],[275,240,410,240],[350,310,530,310],[450,395,675,395],[575,505,865,505],[740,645,1105,645],[945,825,1415,825],[1210,1060,1815,1060],[1545,1355,2320,1355],[1980,1735,2970,1735],[2535,2220,3805,2220],[3245,2840,4870,2840],[4155,3635,6230,3635],[5315,4650,7975,4650],[6805,5955,10210,5955],[8710,7620,13065,7620]],
			[[180,130,150,80],[230,165,190,100],[295,215,245,130],[375,275,315,170],[485,350,405,215],[620,445,515,275],[790,570,660,350],[1015,730,845,450],[1295,935,1080,575],[1660,1200,1385,740],[2125,1535,1770,945],[2720,1965,2265,1210],[3480,2515,2900,1545],[4455,3220,3715,1980],[5705,4120,4755,2535],[7300,5275,6085,3245],[9345,6750,7790,4155],[11965,8640,9970,5315],[15315,11060,12760,6805],[19600,14155,16335,8710]],
			[[210,140,260,120],[270,180,335,155],[345,230,425,195],[440,295,545,250],[565,375,700,320],[720,480,895,410],[925,615,1145,530],[1180,790,1465,675],[1515,1010,1875,865],[1935,1290,2400,1105],[2480,1655,3070,1415],[3175,2115,3930,1815],[4060,2710,5030,2320],[5200,3465,6435,2970],[6655,4435,8240,3805],[8520,5680,10545,4870],[10905,7270,13500,6230],[13955,9305,17280,7975],[17865,11910,22120,10210],[22865,15245,28310,13065]],
			[[260,140,220,100],[335,180,280,130],[425,230,360,165],[545,295,460,210],[700,375,590,270],[895,480,755,345],[1145,615,970,440],[1465,790,1240,565],[1875,1010,1585,720],[2400,1290,2030,920],[3070,1655,2595,1180],[3930,2115,3325,1510],[5030,2710,4255,1935],[6435,3465,5445,2475],[8240,4435,6970,3170],[10545,5680,8925,4055],[13500,7270,11425,5190],[17280,9305,14620,6645],[22120,11910,18715,8505],[28310,15245,23955,10890]],
			[[460,510,600,320],[590,655,770,410],[755,835,985,525],[965,1070,1260,670],[1235,1370,1610,860],[1580,1750,2060,1100],[2025,2245,2640,1405],[2590,2870,3380,1800],[3315,3675,4325,2305],[4245,4705,5535,2950],[5430,6020,7085,3780],[6950,7705,9065,4835],[8900,9865,11605,6190],[11390,12625,14855,7925],[14580,16165,19015,10140],[18660,20690,24340,12980],[23885,26480,31155,16615],[30570,33895,39875,21270],[39130,43385,51040,27225],[50090,55535,65335,34845]],
			[[220,160,90,40],[280,205,115,50],[360,260,145,65],[460,335,190,85],[590,430,240,105],[755,550,310,135],[970,705,395,175],[1240,900,505,225],[1585,1155,650,290],[2030,1475,830,370],[2595,1890,1065,470],[3325,2420,1360,605],[4255,3095,1740,775],[5445,3960,2230,990],[6970,5070,2850,1270],[8925,6490,3650,1625],[11425,8310,4675,2075],[14620,10635,5980,2660],[18715,13610,7655,3405],[23955,17420,9800,4355]],
			[[40,50,30,10],[50,65,40,15],[65,80,50,15],[85,105,65,20],[105,135,80,25],[135,170,105,35],[175,220,130,45],[225,280,170,55],[290,360,215,70],[370,460,275,90]],
			[[1250,1110,1260,600],[1600,1420,1615,770],[2050,1820,2065,985],[2620,2330,2640,1260],[3355,2980,3380,1610],[4295,3815,4330,2060],[5500,4880,5540,2640],[7035,6250,7095,3380],[9005,8000,9080,4325],[11530,10240,11620,5535],[14755,13105,14875,7085],[18890,16775,19040,9065],[24180,21470,24370,11605],[30950,27480,31195,14855],[39615,35175,39930,19015],[50705,45025,51110,24340],[64905,57635,65425,31155],[83075,73770,83740,39875],[106340,94430,107190,51040],[136115,120870,137200,65335]],
			[[580,460,350,180],[740,590,450,230],[950,755,575,295],[1215,965,735,375],[1555,1235,940,485],[1995,1580,1205,620],[2550,2025,1540,790],[3265,2590,1970,1015],[4180,3315,2520,1295],[5350,4245,3230,1660],[6845,5430,4130,2125],[8765,6950,5290,2720],[11220,8900,6770,3480],[14360,11390,8665,4455],[18380,14580,11090,5705],[23530,18660,14200,7300],[30115,23885,18175,9345],[38550,30570,23260,11965],[49340,39130,29775,15315],[63155,50090,38110,19600]],
			[[550,800,750,250],[705,1025,960,320],[900,1310,1230,410],[1155,1680,1575,525],[1475,2145,2015,670],[1890,2750,2575,860],[2420,3520,3300,1100],[3095,4505,4220,1405],[3965,5765,5405,1800],[5075,7380,6920,2305],[6495,9445,8855,2950],[8310,12090,11335,3780],[10640,15475,14505,4835],[13615,19805,18570,6190],[17430,25355,23770,7925],[22310,32450,30425,10140],[28560,41540,38940,12980],[36555,53170,49845,16615],[46790,68055,63805,21270],[59890,87110,81670,27225]],
			[[2880,2740,2580,990],[3630,3450,3250,1245],[4570,4350,4095,1570],[5760,5480,5160,1980],[7260,6905,6505,2495],[9145,8700,8195,3145],[11525,10965,10325,3960],[14520,13815,13010,4990],[18295,17405,16390,6290],[23055,21930,20650,7925],[29045,27635,26020,9985],[36600,34820,32785,12580],[46115,43875,41310,15850],[58105,55280,52050,19975],[73210,69655,65585,25165],[92245,87760,82640,31710],[116230,110580,104125,39955],[146450,139330,131195,50340],[184530,175560,165305,63430],[232505,221205,208285,79925]],
			[[1400,1330,1200,400],[1790,1700,1535,510],[2295,2180,1965,655],[2935,2790,2515,840],[3760,3570,3220,1075],[4810,4570,4125,1375],[6155,5850,5280,1760],[7880,7485,6755,2250],[10090,9585,8645,2880],[12915,12265,11070,3690],[16530,15700,14165,4720],[21155,20100,18135,6045],[27080,25725,23210,7735],[34660,32930,29710,9905],[44370,42150,38030,12675],[56790,53950,48680,16225],[72690,69060,62310,20770],[93045,88395,79755,26585],[119100,113145,102085,34030],[152445,144825,130670,43555]],
			[[630,420,780,360],[805,540,1000,460],[1030,690,1280,590],[1320,880,1635,755],[1690,1125,2095,965],[2165,1445,2680,1235],[2770,1845,3430,1585],[3545,2365,4390,2025],[4540,3025,5620,2595],[5810,3875,7195,3320],[7440,4960,9210,4250],[9520,6345,11785,5440],[12185,8125,15085,6965],[15600,10400,19310,8915],[19965,13310,24720,11410],[25555,17035,31640,14605],[32710,21810,40500,18690],[41870,27915,51840,23925],[53595,35730,66355,30625],[68600,45735,84935,39200]],
			[[780,420,660,300],[1000,540,845,385],[1280,690,1080,490],[1635,880,1385,630],[2095,1125,1770,805],[2680,1445,2270,1030],[3430,1845,2905,1320],[4390,2365,3715,1690],[5620,3025,4755,2160],[7195,3875,6085,2765],[9210,4960,7790,3540],[11785,6345,9975,4535],[15085,8125,12765,5805],[19310,10400,16340,7430],[24720,13310,20915,9505],[31640,17035,26775,12170],[40500,21810,34270,15575],[51840,27915,43865,19940],[66355,35730,56145,25520],[84935,45735,71870,32665]],
			[[70,90,170,70],[90,115,220,90],[115,145,280,115],[145,190,355,145],[190,240,455,190],[240,310,585,240],[310,395,750,310],[395,505,955,395],[505,650,1225,505],[645,830,1570,645],[825,1065,2005,825],[1060,1360,2570,1060],[1355,1740,3290,1355],[1735,2230,4210,1735],[2220,2850,5390,2220],[2840,3650,6895,2840],[3635,4675,8825,3635],[4650,5980,11300,4650],[5955,7655,14460,5955],[7620,9800,18510,7620]],
			[[120,200,0,80],[155,255,0,100],[195,330,0,130],[250,420,0,170],[320,535,0,215],[410,685,0,275],[530,880,0,350],[675,1125,0,450],[865,1440,0,575],[1105,1845,0,740],[1415,2360,0,945],[1815,3020,0,1210],[2320,3870,0,1545],[2970,4950,0,1980],[3805,6340,0,2535],[4870,8115,0,3245],[6230,10385,0,4155],[7975,13290,0,5315],[10210,17015,0,6805],[13065,21780,0,8710]],
			[[160,100,80,60],[205,130,100,75],[260,165,130,100],[335,210,170,125],[430,270,215,160],[550,345,275,205],[705,440,350,265],[900,565,450,340],[1155,720,575,430],[1475,920,740,555],[1890,1180,945,710],[2420,1510,1210,905],[3095,1935,1545,1160],[3960,2475,1980,1485],[5070,3170,2535,1900],[6490,4055,3245,2435],[8310,5190,4155,3115],[10635,6645,5315,3990],[13610,8505,6805,5105],[17420,10890,8710,6535]],
			[[155,130,125,70],[200,165,160,90],[255,215,205,115],[325,275,260,145],[415,350,335,190],[535,445,430,240],[680,570,550,310],[875,730,705,395],[1115,935,900,505],[1430,1200,1155,645],[1830,1535,1475,825],[2340,1965,1890,1060],[3000,2515,2420,1355],[3840,3220,3095,1735],[4910,4120,3960,2220],[6290,5275,5070,2840],[8050,6750,6490,3635],[10300,8640,8310,4650],[13185,11060,10635,5955],[16880,14155,13610,7620]],
			[[1460,930,1250,1740],[2045,1300,1750,2435],[2860,1825,2450,3410],[4005,2550,3430,4775],[5610,3575,4800,6685],[7850,5000,6725,9360],[10995,7000,9410,13100],[15390,9805,13175,18340],[21545,13725,18445,25680],[30165,19215,25825,35950]],
			[[80,120,70,90],[100,155,90,115],[130,195,115,145],[170,250,145,190],[215,320,190,240],[275,410,240,310],[350,530,310,395],[450,675,395,505],[575,865,505,650],[740,1105,645,830],[945,1415,825,1065],[1210,1815,1060,1360],[1545,2320,1355,1740],[1980,2970,1735,2230],[2535,3805,2220,2850],[3245,4870,2840,3650],[4155,6230,3635,4675],[5315,7975,4650,5980],[6805,10210,5955,7655],[8710,13065,7620,9800]],
			[[700,670,700,240],[930,890,930,320],[1240,1185,1240,425],[1645,1575,1645,565],[2190,2095,2190,750],[2915,2790,2915,1000],[3875,3710,3875,1330],[5155,4930,5155,1765],[6855,6560,6855,2350],[9115,8725,9115,3125],[12125,11605,12125,4155],[16125,15435,16125,5530],[21445,20525,21445,7350],[28520,27300,28520,9780],[37935,36310,37935,13005],[50450,48290,50450,17300],[67100,64225,67100,23005],[89245,85420,89245,30600],[118695,113605,118695,40695],[157865,151095,157865,54125]],
			[[650,800,450,200],[830,1025,575,255],[1065,1310,735,330],[1365,1680,945,420],[1745,2145,1210,535],[2235,2750,1545,685],[2860,3520,1980,880],[3660,4505,2535,1125],[4685,5765,3245,1440],[5995,7380,4150,1845],[7675,9445,5315,2360],[9825,12090,6800,3020],[12575,15475,8705,3870],[16095,19805,11140,4950],[20600,25355,14260,6340],[26365,32450,18255,8115],[33750,41540,23365,10385],[43200,53170,29910,13290],[55295,68055,38280,17015],[70780,87110,49000,21780]],
			[[400,500,350,100],[510,640,450,130],[655,820,575,165],[840,1050,735,210],[1075,1340,940,270],[1375,1720,1205,345],[1760,2200,1540,440],[2250,2815,1970,565],[2880,3605,2520,720],[3690,4610,3230,920],[4720,5905,4130,1180],[6045,7555,5290,1510],[7735,9670,6770,1935],[9905,12380,8665,2475],[12675,15845,11090,3170],[16225,20280,14200,4055],[20770,25960,18175,5190],[26585,33230,23260,6645],[34030,42535,29775,8505],[43555,54445,38110,10890]],
			[[66700,69050,72200,13200],[68535,70950,74185,13565],[70420,72900,76225,13935],[72355,74905,78320,14320],[74345,76965,80475,14715],[76390,79080,82690,15120],[78490,81255,84965,15535],[80650,83490,87300,15960],[82865,85785,89700,16400],[85145,88145,92165,16850],[87485,90570,94700,17315],[89895,93060,97305,17790],[92365,95620,99980,18280],[94905,98250,102730,18780],[97515,100950,105555,19300],[100195,103725,108460,19830],[102950,106580,111440,20375],[105785,109510,114505,20935],[108690,112520,117655,21510],[111680,115615,120890,22100],[114755,118795,124215,22710],[117910,122060,127630,23335],[121150,125420,131140,23975],[124480,128870,134745,24635],[127905,132410,138455,25315],[131425,136055,142260,26010],[135035,139795,146170,26725],[138750,143640,150190,27460],[142565,147590,154320,28215],[146485,151650,158565,28990],[150515,155820,162925,29785],[154655,160105,167405,30605],[158910,164505,172010,31450],[163275,169030,176740,32315],[167770,173680,181600,33200],[172380,178455,186595,34115],[177120,183360,191725,35055],[181995,188405,197000,36015],[186995,193585,202415,37005],[192140,198910,207985,38025],[197425,204380,213705,39070],[202855,210000,219580,40145],[208430,215775,225620,41250],[214165,221710,231825,42385],[220055,227805,238200,43550],[226105,234070,244750,44745],[232320,240505,251480,45975],[238710,247120,258395,47240],[245275,253915,265500,48540],[252020,260900,272800,49875],[258950,268075,280305,51245],[266070,275445,288010,52655],[273390,283020,295930,54105],[280905,290805,304070,55590],[288630,298800,312430,57120],[296570,307020,321025,58690],[304725,315460,329850,60305],[313105,324135,338925,61965],[321715,333050,348245,63670],[330565,342210,357820,65420],[339655,351620,367660,67220],[348995,361290,377770,69065],[358590,371225,388160,70965],[368450,381435,398835,72915],[378585,391925,409800,74920],[388995,402700,421070,76985],[399695,413775,432650,79100],[410685,425155,444550,81275],[421980,436845,456775,83510],[433585,448860,469335,85805],[445505,461205,482240,88165],[457760,473885,495505,90590],[470345,486920,509130,93080],[483280,500310,523130,95640],[496570,514065,537520,98270],[510225,528205,552300,100975],[524260,542730,567490,103750],[538675,557655,583095,106605],[553490,572990,599130,109535],[568710,588745,615605,112550],[584350,604935,632535,115645],[600420,621575,649930,118825],[616930,638665,667800,122090],[633895,656230,686165,125450],[651330,674275,705035,128900],[669240,692820,724425,132445],[687645,711870,744345,136085],[706555,731445,764815,139830],[725985,751560,785850,143675],[745950,772230,807460,147625],[766460,793465,829665,151685],[787540,815285,852480,155855],[809195,837705,875920,160140],[831450,860745,900010,164545],[854315,884415,924760,169070],[877810,908735,950190,173720],[901950,933725,976320,178495],[926750,959405,1000000,183405],[952235,985785,1000000,188450],[1000000,1000000,1000000,193630]],
			[[780,420,660,540],[1000,540,845,690],[1280,690,1080,885],[1635,880,1385,1130],[2095,1125,1770,1450],[2680,1445,2270,1855],[3430,1845,2905,2375],[4390,2365,3715,3040],[5620,3025,4755,3890],[7195,3875,6085,4980],[9210,4960,7790,6375],[11785,6345,9975,8160],[15085,8125,12765,10445],[19310,10400,16340,13370],[24720,13310,20915,17115],[31640,17035,26775,21905],[40500,21810,34270,28040],[51840,27915,43865,35890],[66355,35730,56145,45940],[84935,45735,71870,58800]],
			//42 Stone Wall
			[[110,160,70,60],[140,205,90,75],[180,335,145,125],[230,430,190,155],[295,550,240,200],[380,705,310,260],[485,900,395,330],[620,1155,505,420],[795,1475,650,540],[1015,1890,830,690],[1300,2420,1065,885],[1660,3100,1360,1135],[2130,3965,1740,1450],[2725,5075,2230,1855],[3485,6495,2850,2375],[4460,8315,3650,3040],[5710,10645,4675,3895],[7310,13625,5980,4985],[9360,17440,7655,6380],[11980,22325,9800,8165]],
			//43 Command Center
			[[1600,1250,1050,200],[1950,1525,1280,245],[2380,1860,1565,300],[2905,2270,1905,365],[3545,2770,2325,445],[4325,3380,2840,540],[5275,4120,3460,660],[6435,5030,4225,805],[7850,6135,5155,980],[9580,7485,6285,1195],[11685,9130,7670,1460],[14260,11140,9355,1780],[17395,13590,11415,2175],[21225,16580,13925,2655],[25890,20230,16990,3235],[31590,24680,20730,3950],[38535,30105,25290,4815],[47015,36730,30855,5875],[57360,44810,37640,7170],[69975,54670,45925,8745]],
			//44 Makeshift Wall
			[[50,80,40,30],[65,105,50,40],[80,130,65,50],[105,170,85,65],[135,215,110,80],[170,275,140,105],[220,350,175,130],[280,450,225,170],[360,580,290,215],[460,740,370,275],[590,945,470,355],[755,1210,605,450],[970,1550,775,580],[1240,1980,990,740],[1585,2540,1270,950],[2030,3245,1625,1220],[2595,4150,2080,1560],[3320,5315,2660,2000],[4250,6805,3400,2550],[5445,8710,4355,3270]],
			//45 Waterworks
			[[910,945,910,340],[1190,1240,1190,445],[1560,1620,1560,585],[2045,2125,2045,765],[2680,2785,2680,1000],[3510,3645,3510,1310],[4600,4775,4600,1720],[6025,6255,6025,2250],[890,8195,7890,2950],[10340,10735,10340,3865],[13545,14065,13545,5060],[17745,18425,17745,6630],[23245,24135,23245,8685],[30450,31620,30450,11375],[39890,41420,39890,14905],[52255,54265,52255,19525],[68450,71085,68450,25575],[89670,93120,89670,33505],[117470,121985,117470,41890],[153885,159805,153885,57495]]
			]
	,
	BuildingName:[
			"Woodcutter","Clay Pit","Iron Mine","Cropland","Sawmill","Brickyard","Iron Foundry","Grain Mill","Bakery",//1->9
			"Warehouse","Smithy","Tournament Square","Main Building","Rally Point","Marketplace","Embassy",//10,11,12 was remove (Joining to 13),13-> 18
			"Barracks","Stable","Workshop","Academy","Cranny","Town Hall","Residence","Palace","Treasury",//19 -> 27
			"Trade Office","Great Barracks","Great Stable","City Wall","Earth Wall","Palisade","Stonemason's Lodge",//28 -> 34
			"Brewery","Trapper","Hero's Mansion","Great Warehouse","Great Granary","Wonder of the World",//35 -> 40
			"Horse Drinking Trough","Stone Wall","Command Center","Makeshift Wall","Waterworks"//36 -> 45
	],
	
	DataTroopsResearch : [//tribe 1: roman, 2: teuton, 3: gaul , 6 Egypt, 7 Hung  //4 animals ?, 5 natar
	//roman: u2 -> u9
	[[700,620,1480,580],[1000,740,1880,640],[940,740,360,400],[3400,1860,2760,760],[3400,2660,6600,1240],[5500,1540,4200,580],[5800,5500,5000,700],[15880,13800,36400,22660]],
	//teuton: u12 -> u19
	[[970,380,880,400],[880,580,1560,580],[1060,500,600,460],[2320,1180,2520,610],[2800,2160,4040,640],[6100,1300,3000,580],[5500,4900,5000,520],[18250,13500,20400,16480]],
	//gaul: u22 -> u29
	[[940,700,1680,520],[1120,700,360,400],[2200,1900,2040,520],[2260,1420,2440,880],[3100,2580,5600,1180],[5800,2320,2840,610],[5860,5900,5240,700],[15880,22900,25200,22660]],
	//Egypt: u52-> u59
	[[790,500,1360,520],[1120,820,1960,640],[1120,700,360,400],[2260,1420,2440,880],[2800,2340,5080,1240],[6070,2400,2920,640],[5980,6140,5480,760],[17500,25200,27600,25360]],
	//Hung: u62->u69
	[[940,540,680,520],[1120,700,360,400],[1840,1580,1720,430],[2020,1500,2840,460],[2800,2340,5080,1000],[6460,1420,3080,580],[5800,5220,5160,520],[19100,14000,20560,16720]]
	],
	
	DataTroopsTrain: [//10 troops per tribe
	//basic, , , , , ,Ram,Cata,Chief,Settler
	//roman class: u1 -> u10
	[[120,100,150,30],[100,130,160,70],[150,160,210,80],[140,160,20,40],[550,440,320,100],[550,640,800,180],[900,360,500,70],[950,1350,600,90],[30750,27200,45000,37500],[4600,4200,5800,4400]],
	//teuton class : u11 -> u20
	[[95,75,40,40],[145,70,85,40],[130,120,170,70],[160,100,50,50],[370,270,290,75],[450,515,480,80],[1000,300,350,70],[900,1200,600,60],[35500,26600,25000,27200],[5800,4400,4600,5200]],
	//gaul class: u21 -> u30
	[[100,130,55,30],[140,150,185,60],[170,150,20,40],[350,450,230,60],[360,330,280,120],[500,620,675,170],[950,555,330,75],[960,1450,630,90],[30750,45400,31000,37500],[4400,5600,4200,3900]],
	//animals: u31 -> u40
	//Natars: u41 -> u50
	//Egypt class: u51 -> u60
	[[45,60,30,15],[115,100,145,60],[170,180,220,80],[170,150,20,40],[360,330,280,120],[450,560,610,180],[995,575,340,80],[980,1510,660,100],[34000,50000,34000,42000],[4560,5890,4370,4180]],
	//Hung class: u61 -> u70
	[[130,80,40,40],[140,110,60,60],[170,150,20,40],[290,370,190,45],[320,350,330,50],[450,560,610,140],[1060,330,360,70],[950,1280,620,60],[37200,27600,25200,27600],[6100,4600,4800,5400]]
	],
	
	e_div : null,
	
	create_ediv : function(){
		this.e_div = document.createElement("div");
		this.e_div.id = "npc_helper_draggable";
		this.e_div.style = "position: relative;width: 150px; height: 150px;";
		this.e_div.hidden = true;
		this.e_div.addEventListener('mousedown', mouseDown, false);
		window.addEventListener('mouseup', mouseUp, false);
		document.body.appendChild(this.e_div);		
	},
	mouseUp :function(){window.removeEventListener('mousemove', this.divMove, true);},
	mouseDown :function(e){window.addEventListener('mousemove', this.divMove, true);},
	divMove :function(e){
		var div = document.getElementById('dxy');
		div.style.position = 'absolute';
		div.style.top = e.clientY + 'px';
		div.style.left = e.clientX + 'px';
	},​
	
	Trade : function(){
		if(this.e_div == null) this.create_ediv();
		this.e_div.hidden = !this.e_div.hidden;
		return;
	}
}