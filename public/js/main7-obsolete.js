$(function(){

			$('#electronics').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#communication').hide(500);
						$('#mobile').hide(500);
						$('#smartwatches').hide(500);
						$('#mobileaccesories').hide(500);
						$('#twowayradios').hide(500);
						$('#phones').hide(500);
						$('#seeall').hide(500);
					$('#cameras').hide(500);
						$('#digitalcameras').hide(500);
						$('#camerasaccesories').hide(500);
						$('#drones').hide(500);
						$('#cameralenses').hide(500);
						$('#camcorders').hide(500);
						$('#seeall2').hide(500);
					$('#tv').hide(500);
						$('#tvs').hide(500);
						$('#settopboxes').hide(500);
						$('#blurayplayers').hide(500);
						$('#mediastreamingdevices').hide(500);
						$('#projectors').hide(500);
						$('#seeall3').hide(500);
					$('#homeaudio').hide(500);
						$('#headphones').hide(500);
						$('#speakers').hide(500);
						$('#radioplayers').hide(500);
						$('#hometheater').hide(500);
						$('#amplifier').hide(500);
						$('#seeall4').hide(500);
					$('#portableelectronics').hide(500);
						$('#portablespeaker').hide(500);
						$('#ebookreader').hide(500);
						$('#pdrecorders').hide(500);
						$('#pcdplayers').hide(500);
						$('#ebaccesories').hide(500);
						$('#seeall5').hide(500);
					$('#accesories').hide(500);
						$('#homesecurity').hide(500);
						$('#homeautomation').hide(500);
						$('#securitysystems').hide(500);
						$('#batteries').hide(500);
						$('#remotecontrol').hide(500);
						$('#seeall6').hide(500);
					$('#audiovisual').hide(500);
						$('#audioaccesories').hide(500);
						$('#studioequipment').hide(500);
						$('#avcables').hide(500);
						$('#seeall7').hide(500);
					$('#mobileelectronics').hide(500);
						$('#gpsdevices').hide(500);
						$('#gpsaccesories').hide(500);
						$('#mp3media').hide(500);
						$('#seeall8').hide(500);
					$('#musicalinstruments').hide(500);
						$('#musickeyboards').hide(500);
						$('#guitars').hide(500);
						$('#drums').hide(500);
						$('#iaccesories').hide(500);
						$('#violins').hide(500);
						$('#seeall9').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#communication').show(500);
					$('#cameras').show(500);
					$('#tv').show(500);
					$('#homeaudio').show(500);
					$('#portableelectronics').show(500);
					$('#accesories').show(500);
					$('#audiovisual').show(500);
					$('#mobileelectronics').show(500);
					$('#musicalinstruments').show(500);
					//De kids and toys
					$('#kidsandtoys').removeClass('activado');
					$('#carriersandseats').hide(500);
						$('#strollers').hide(500);
						$('#babycarseats').hide(500);
						$('#babycarriers').hide(500);
						$('#seeall10').hide(500);
					$('#toysandgames').hide(500);
						$('#oa').hide(500);
						$('#educationaltoys').hide(500);
						$('#dolls').hide(500);
						$('#babytoys').hide(500);
						$('#buildingsm').hide(500);
						$('#seeall11').hide(500);
					$('#babycare').hide(500);
						$('#babyfurniture').hide(500);
						$('#babyaccesories').hide(500);
						$('#nursingandfeeding').hide(500);
						$('#bathandpotty').hide(500);
						$('#babbybedding').hide(500);
						$('#seeall12').hide(500);
					$('#schoolsupplies').hide(500);
						$('#schoolstationery').hide(500);
						$('#seeall13').hide(500);
					//De Home & Garden
					$('#homeandgarden').removeClass('activado');
					$('#homeappliances').hide(500);
						$('#vacuums').hide(500);
						$('#refrigerators').hide(500);
						$('#airconditioners').hide(500);
						$('#washingm').hide(500);
						$('#ovens').hide(500);
						$('#seeall14').hide(500);
					$('#petsupplies').hide(500);
						$('#dogsupplies').hide(500);
						$('#catsupplies').hide(500);
						$('#sasupplies').hide(500);
						$('#birdsupplies').hide(500);
						$('#fishsupplies').hide(500);
						$('#seeall15').hide(500);
					$('#kitchenaccesories').hide(500);
						$('#kitchensupplies').hide(500);
						$('#sinksandtaps').hide(500);
						$('#cookware').hide(500);
						$('#dinnerware').hide(500);
						$('#bbqa').hide(500);
						$('#seeall16').hide(500);
					$('#furniture').hide(500);
						$('#shelves').hide(500);
						$('#mattresses').hide(500);
						$('#sofa').hide(500);
						$('#seats').hide(500);
						$('#tables').hide(500);
						$('#seeall17').hide(500);
					$('#toolsandhardware').hide(500);
						$('#garden').hide(500);
						$('#powertools').hide(500);
						$('#generators').hide(500);
						$('#htools').hide(500);
						$('#measuring').hide(500);
						$('#seeall18').hide(500);
					//De Books & DVDs
					$('#booksanddvds').removeClass('activado');
					$('#books').hide(500);
						$('#miscbooks').hide(500);
						$('#childbooks').hide(500);
						$('#cookbooks').hide(500);
						$('#abooks').hide(500);
						$('#cbooks').hide(500);
						$('#seeall26').hide(500);
					$('#movies').hide(500);
						$('#miscmovies').hide(500);
						$('#tseries').hide(500);
						$('#amovies').hide(500);
						$('#cmovies').hide(500);
						$('#seeall27').hide(500);
					$('#music').hide(500);
						$('#mmusic').hide(500);
						$('#cmusic').hide(500);
						$('#rmusic').hide(500);
						$('#vrecords').hide(500);
						$('#hhmusic').hide(500);
						$('#seeall28').hide(500);
					$('#comicsandmagazines').hide(500);
						$('#magazines').hide(500);
						$('#comicbooks').hide(500);
						$('#seeall29').hide(500);
					//De computers
					$('#computers').removeClass('activado');
					$('#hardware').hide(500);
						$('#tablet').hide(500);
						$('#laptops').hide(500);
						$('#printers').hide(500);
						$('#monitors').hide(500);
						$('#desktops').hide(500);
						$('#seeall30').hide(500);
					$('#inputdevices').hide(500);
						$('#keyboards').hide(500);
						$('#mtb').hide(500);
						$('#microphones').hide(500);
						$('#gtablets').hide(500);
						$('#webcameras').hide(500);
						$('#seeall31').hide(500);
					$('#videogames').hide(500);
						$('#gconsoles').hide(500);
						$('#vreality').hide(500);
						$('#playstationgames').hide(500);
						$('#gamecontrollers').hide(500);
						$('#gamekeys').hide(500);
						$('#seeall32').hide(500);
					$('#software').hide(500);
						$('#bsoftware').hide(500);
						$('#santivirus').hide(500);
						$('#operatingsystems').hide(500);
						$('#gmultimedia').hide(500);
						$('#utilities').hide(500);
						$('#seeall33').hide(500);
					$('#computeraccesories').hide(500);
						$('#tabletaccesories').hide(500);
						$('#lbags').hide(500);
						$('#laccesories').hide(500);
						$('#computerspeakers').hide(500);
						$('#swarranty').hide(500);
						$('#seeall34').hide(500);
					//De cars and accesories
					$('#carsandaccesories').removeClass('activado');
					$('#autoparts').hide(500);
						$('#aeparts').hide(500);
						$('#4wdacc').hide(500);
						$('#carseats').hide(500);
						$('#carsuspensions').hide(500);
						$('#wandt').hide(500);
						$('#seeall39').hide(500);
					$('#caccesories').hide(500);
						$('#eca').hide(500);
						$('#cr').hide(500);
						$('#ica').hide(500);
						$('#ccs').hide(500);
						$('#ccp').hide(500);
						$('#seeall40').hide(500);
					$('#caraudio').hide(500);
						$('#cm').hide(500);
						$('#cs').hide(500);
						$('#ca').hide(500);
						$('#seeall41').hide(500);
					$('#motorbikesandquads').hide(500);
						$('#motorbik').hide(500);
						$('#motorbikes').hide(500);
						$('#seeall42').hide(500);
					$('#motorcars').hide(500);
						$('#newcars').hide(500);
						$('#seeall43').hide(500);
					//De fashion
					$('#fashion').removeClass('activado');
					$('#clothingaccesories').hide(500);
						$('#watches').hide(500);
						$('#bags').hide(500);
						$('#sunglasses').hide(500);
						$('#costumes').hide(500);
						$('#wallets').hide(500);
						$('#seeall44').hide(500);
					$('#shoes').hide(500);
						$('#mashoes').hide(500);
						$('#washoes').hide(500);
						$('#wboots').hide(500);
						$('#mcashualshoes').hide(500);
						$('#sandals').hide(500);
						$('#seeall45').hide(500);
					$('#womensclothing').hide(500);
						$('#fitnessclothing').hide(500);
						$('#dresses').hide(500);
						$('#swimwear').hide(500);
						$('#pants').hide(500);
						$('#tops').hide(500);
						$('#seeall46').hide(500);
					$('#mensclothing').hide(500);
						$('#sportswear').hide(500);
						$('#menstops').hide(500);
						$('#jackets').hide(500);
						$('#underwear').hide(500);
						$('#mpants').hide(500);
						$('#seeall47').hide(500);
					$('#womenlingerie').hide(500);
						$('#bras').hide(500);
						$('#hosiery').hide(500);
						$('#panties').hide(500);
						$('#shapwear').hide(500);
						$('#camisoles').hide(500);
						$('#seeall48').hide(500);
					//De office supplies
					$('#officesupplies').removeClass('activado');
					$('#officeequipments').hide(500);
						$('#officesuppliess').hide(500);
						$('#calculators').hide(500);
						$('#faxmachines').hide(500);
						$('#seeall51').hide(500);
					$('#officefurniture').hide(500);
						$('#obandstorage').hide(500);
						$('#officechairs').hide(500);
						$('#boardroom').hide(500);
						$('#desks').hide(500);
						$('#seeall52').hide(500);
					$('#posgear').hide(500);
						$('#posaccesories').hide(500);
						$('#rprinters').hide(500);
						$('#cashregisters').hide(500);
						$('#possystems').hide(500);
						$('#barcode').hide(500);
						$('#seeall53').hide(500);
					//De healthy and beauty
					$('#healthy').removeClass('activado');
					$('#fragancies').hide(500);
						$('#wperfume').hide(500);
						$('#mcologne').hide(500);
						$('#fragrance').hide(500);
						$('#aftershave').hide(500);
						$('#unisex').hide(500);
						$('#seeall54').hide(500);
					$('#personalcare').hide(500);
						$('#skincare').hide(500);
						$('#agedcare').hide(500);
						$('#haircare').hide(500);
						$('#shaving').hide(500);
						$('#oralcare').hide(500);
						$('#seeall55').hide(500);
					$('#cosmetics').hide(500);
						$('#facemakeup').hide(500);
						$('#eyemakeup').hide(500);
						$('#nails').hide(500);
						$('#makeup').hide(500);
						$('#lipmakeup').hide(500);
						$('#seeall56').hide(500);
					$('#grocery').hide(500);
						$('#organicfood').hide(500);
						$('#teaandcoffee').hide(500);
						$('#bandcfood').hide(500);
						$('#juices').hide(500);
						$('#dairyproducts').hide(500);
						$('#seeall57').hide(500);
					//De gifts and wine
					$('#giftsandwine').removeClass('activado');
					$('#beerwine').hide(500);
						$('#liquor').hide(500);
						$('#wines').hide(500);
						$('#beers').hide(500);
						$('#wine').hide(500);
						$('#liquora').hide(500);
						$('#seeall58').hide(500);
					$('#giftsandgadgets').hide(500);
						$('#collectables').hide(500);
						$('#ugifts').hide(500);
						$('#giftsforher').hide(500);
						$('#knives').hide(500);
						$('#giftsbabies').hide(500);
						$('#seeall59').hide(500);
					$('#desserts').hide(500);
						$('#g').hide(500);
						$('#f').hide(500);
						$('#pamper').hide(500);
						$('#seeall60').hide(500);
					$('#flowers').hide(500);
						$('#plants').hide(500);
						$('#arrangements').hide(500);
						$('#seeall61').hide(500);
					$('#wedding').hide(500);
						$('#waccesories').hide(500);
						$('#wgifts').hide(500);
						$('#seeall62').hide(500);
					//De sports and travel
					$('#sportsandtravel').removeClass('activado');
					$('#outdooradventure').hide(500);
						$('#campingequipment').hide(500);
						$('#luggage').hide(500);
						$('#tents').hide(500);
						$('#travelaccesories').hide(500);
						$('#backpacks').hide(500);
						$('#seeall63').hide(500);
					$('#gymandfitness').hide(500);
						$('#fatrackers').hide(500);
						$('#fitnessaccesories').hide(500);
						$('#treadmills').hide(500);
						$('#excercisebikes').hide(500);
						$('#seeall64').hide(500);
					$('#sportinggoods').hide(500);
						$('#fishing').hide(500);
						$('#bicyclea').hide(500);
						$('#bbicylce').hide(500);
						$('#boating').hide(500);
						$('#skate').hide(500);
						$('#seeall65').hide(500);
					$('#travel').hide(500);
						$('#holidaydeals').hide(500);
						$('#seeall66').hide(500);
				}
			});

			$('#communication').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#mobile').hide(500);
					$('#smartwatches').hide(500);
					$('#mobileaccesories').hide(500);
					$('#twowayradios').hide(500);
					$('#phones').hide(500);
					$('#seeall').hide(500);
				}
				else{
					$(this).addClass('activado');
					//$('#communication').removeClass('activado');
					$('#cameras').removeClass('activado');
					$('#tv').removeClass('activado');
					$('#homeaudio').removeClass('activado');
					$('#portableelectronics').removeClass('activado');
					$('#accesories').removeClass('activado');
					$('#audiovisual').removeClass('activado');
					$('#mobileelectronics').removeClass('activado');
					$('#musicalinstruments').removeClass('activado');

					$('#mobile').show(500);
					$('#smartwatches').show(500);
					$('#mobileaccesories').show(500);
					$('#twowayradios').show(500);
					$('#phones').show(500);
					$('#seeall').show(500);
					//De cameras
					$('#digitalcameras').hide(500);
					$('#camerasaccesories').hide(500);
					$('#drones').hide(500);
					$('#cameralenses').hide(500);
					$('#camcorders').hide(500);
					$('#seeall2').hide(500);
					//De tv
					$('#tvs').hide(500);
					$('#settopboxes').hide(500);
					$('#blurayplayers').hide(500);
					$('#mediastreamingdevices').hide(500);
					$('#projectors').hide(500);
					$('#seeall3').hide(500);
					//De homeaudio
					$('#headphones').hide(500);
					$('#speakers').hide(500);
					$('#radioplayers').hide(500);
					$('#hometheater').hide(500);
					$('#amplifier').hide(500);
					$('#seeall4').hide(500);
					//De portableelectronics
					$('#portablespeaker').hide(500);
					$('#ebookreader').hide(500);
					$('#pdrecorders').hide(500);
					$('#pcdplayers').hide(500);
					$('#ebaccesories').hide(500);
					$('#seeall5').hide(500);
					//De accesories
					$('#homesecurity').hide(500);
					$('#homeautomation').hide(500);
					$('#securitysystems').hide(500);
					$('#batteries').hide(500);
					$('#remotecontrol').hide(500);
					$('#seeall6').hide(500);
					//De audiovisual
					$('#audioaccesories').hide(500);
					$('#studioequipment').hide(500);
					$('#avcables').hide(500);
					$('#seeall7').hide(500);
					//De mobileelectronics
					$('#gpsdevices').hide(500);
					$('#gpsaccesories').hide(500);
					$('#mp3media').hide(500);
					$('#seeall8').hide(500);
					//De musicalinstruments
					$('#musickeyboards').hide(500);
					$('#guitars').hide(500);
					$('#drums').hide(500);
					$('#iaccesories').hide(500);
					$('#violins').hide(500);
					$('#seeall9').hide(500);
				}
			});

			$('#cameras').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#digitalcameras').hide(500);
					$('#camerasaccesories').hide(500);
					$('#drones').hide(500);
					$('#cameralenses').hide(500);
					$('#camcorders').hide(500);
					$('#seeall2').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#communication').removeClass('activado');
					$('#tv').removeClass('activado');
					$('#homeaudio').removeClass('activado');
					$('#portableelectronics').removeClass('activado');
					$('#accesories').removeClass('activado');
					$('#audiovisual').removeClass('activado');
					$('#mobileelectronics').removeClass('activado');
					$('#musicalinstruments').removeClass('activado');

					$('#digitalcameras').show(500);
					$('#camerasaccesories').show(500);
					$('#drones').show(500);
					$('#cameralenses').show(500);
					$('#camcorders').show(500);
					$('#seeall2').show(500);
					//De communication
					$('#communication').removeClass('activado')
					$('#mobile').hide(500);
					$('#smartwatches').hide(500);
					$('#mobileaccesories').hide(500);
					$('#twowayradios').hide(500);
					$('#phones').hide(500);
					$('#seeall').hide(500);
					//De tv
					$('#tvs').hide(500);
					$('#settopboxes').hide(500);
					$('#blurayplayers').hide(500);
					$('#mediastreamingdevices').hide(500);
					$('#projectors').hide(500);
					$('#seeall3').hide(500);
					//De homeaudio
					$('#headphones').hide(500);
					$('#speakers').hide(500);
					$('#radioplayers').hide(500);
					$('#hometheater').hide(500);
					$('#amplifier').hide(500);
					$('#seeall4').hide(500);
					//De portableelectronics
					$('#portablespeaker').hide(500);
					$('#ebookreader').hide(500);
					$('#pdrecorders').hide(500);
					$('#pcdplayers').hide(500);
					$('#ebaccesories').hide(500);
					$('#seeall5').hide(500);
					//De accesories
					$('#homesecurity').hide(500);
					$('#homeautomation').hide(500);
					$('#securitysystems').hide(500);
					$('#batteries').hide(500);
					$('#remotecontrol').hide(500);
					$('#seeall6').hide(500);
					//De audiovisual
					$('#audioaccesories').hide(500);
					$('#studioequipment').hide(500);
					$('#avcables').hide(500);
					$('#seeall7').hide(500);
					//De mobileelectronics
					$('#gpsdevices').hide(500);
					$('#gpsaccesories').hide(500);
					$('#mp3media').hide(500);
					$('#seeall8').hide(500);
					//De musicalinstruments
					$('#musickeyboards').hide(500);
					$('#guitars').hide(500);
					$('#drums').hide(500);
					$('#iaccesories').hide(500);
					$('#violins').hide(500);
					$('#seeall9').hide(500);
				}
			});

			$('#tv').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#tvs').hide(500);
					$('#settopboxes').hide(500);
					$('#blurayplayers').hide(500);
					$('#mediastreamingdevices').hide(500);
					$('#projectors').hide(500);
					$('#seeall3').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#communication').removeClass('activado');
					$('#cameras').removeClass('activado');
					$('#homeaudio').removeClass('activado');
					$('#portableelectronics').removeClass('activado');
					$('#accesories').removeClass('activado');
					$('#audiovisual').removeClass('activado');
					$('#mobileelectronics').removeClass('activado');
					$('#musicalinstruments').removeClass('activado');

					$('#tvs').show(500);
					$('#settopboxes').show(500);
					$('#blurayplayers').show(500);
					$('#mediastreamingdevices').show(500);
					$('#projectors').show(500);
					$('#seeall3').show(500);
					//De communication
					$('#communication').removeClass('activado')
					$('#mobile').hide(500);
					$('#smartwatches').hide(500);
					$('#mobileaccesories').hide(500);
					$('#twowayradios').hide(500);
					$('#phones').hide(500);
					$('#seeall').hide(500);
					//De cameras
					$('#digitalcameras').hide(500);
					$('#camerasaccesories').hide(500);
					$('#drones').hide(500);
					$('#cameralenses').hide(500);
					$('#camcorders').hide(500);
					$('#seeall2').hide(500);
					//De homeaudio
					$('#headphones').hide(500);
					$('#speakers').hide(500);
					$('#radioplayers').hide(500);
					$('#hometheater').hide(500);
					$('#amplifier').hide(500);
					$('#seeall4').hide(500);
					//De portableelectronics
					$('#portablespeaker').hide(500);
					$('#ebookreader').hide(500);
					$('#pdrecorders').hide(500);
					$('#pcdplayers').hide(500);
					$('#ebaccesories').hide(500);
					$('#seeall5').hide(500);
					//De accesories
					$('#homesecurity').hide(500);
					$('#homeautomation').hide(500);
					$('#securitysystems').hide(500);
					$('#batteries').hide(500);
					$('#remotecontrol').hide(500);
					$('#seeall6').hide(500);
					//De audiovisual
					$('#audioaccesories').hide(500);
					$('#studioequipment').hide(500);
					$('#avcables').hide(500);
					$('#seeall7').hide(500);
					//De mobileelectronics
					$('#gpsdevices').hide(500);
					$('#gpsaccesories').hide(500);
					$('#mp3media').hide(500);
					$('#seeall8').hide(500);
					//De musicalinstruments
					$('#musickeyboards').hide(500);
					$('#guitars').hide(500);
					$('#drums').hide(500);
					$('#iaccesories').hide(500);
					$('#violins').hide(500);
					$('#seeall9').hide(500);
				}
			});

			$('#homeaudio').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#headphones').hide(500);
					$('#speakers').hide(500);
					$('#radioplayers').hide(500);
					$('#hometheater').hide(500);
					$('#amplifier').hide(500);
					$('#seeall4').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#communication').removeClass('activado');
					$('#cameras').removeClass('activado');
					$('#tv').removeClass('activado');
					$('#portableelectronics').removeClass('activado');
					$('#accesories').removeClass('activado');
					$('#audiovisual').removeClass('activado');
					$('#mobileelectronics').removeClass('activado');
					$('#musicalinstruments').removeClass('activado');

					$('#headphones').show(500);
					$('#speakers').show(500);
					$('#radioplayers').show(500);
					$('#hometheater').show(500);
					$('#amplifier').show(500);
					$('#seeall4').show(500);
					//De communication
					$('#mobile').hide(500);
					$('#smartwatches').hide(500);
					$('#mobileaccesories').hide(500);
					$('#twowayradios').hide(500);
					$('#phones').hide(500);
					$('#seeall').hide(500);
					//De cameras
					$('#digitalcameras').hide(500);
					$('#camerasaccesories').hide(500);
					$('#drones').hide(500);
					$('#cameralenses').hide(500);
					$('#camcorders').hide(500);
					$('#seeall2').hide(500);
					//De portableelectronics
					$('#portablespeaker').hide(500);
					$('#ebookreader').hide(500);
					$('#pdrecorders').hide(500);
					$('#pcdplayers').hide(500);
					$('#ebaccesories').hide(500);
					$('#seeall5').hide(500);
					//De accesories
					$('#homesecurity').hide(500);
					$('#homeautomation').hide(500);
					$('#securitysystems').hide(500);
					$('#batteries').hide(500);
					$('#remotecontrol').hide(500);
					$('#seeall6').hide(500);
					//De audiovisual
					$('#audioaccesories').hide(500);
					$('#studioequipment').hide(500);
					$('#avcables').hide(500);
					$('#seeall7').hide(500);
					//De mobileelectronics
					$('#gpsdevices').hide(500);
					$('#gpsaccesories').hide(500);
					$('#mp3media').hide(500);
					$('#seeall8').hide(500);
					//De musicalinstruments
					$('#musickeyboards').hide(500);
					$('#guitars').hide(500);
					$('#drums').hide(500);
					$('#iaccesories').hide(500);
					$('#violins').hide(500);
					$('#seeall9').hide(500);
				}
			});

			$('#portableelectronics').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#portablespeaker').hide(500);
					$('#ebookreader').hide(500);
					$('#pdrecorders').hide(500);
					$('#pcdplayers').hide(500);
					$('#ebaccesories').hide(500);
					$('#seeall5').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#communication').removeClass('activado');
					$('#cameras').removeClass('activado');
					$('#tv').removeClass('activado');
					$('#homeaudio').removeClass('activado');
					//$('#portableelectronics').removeClass('activado');
					$('#accesories').removeClass('activado');
					$('#audiovisual').removeClass('activado');
					$('#mobileelectronics').removeClass('activado');
					$('#musicalinstruments').removeClass('activado');

					$('#portablespeaker').show(500);
					$('#ebookreader').show(500);
					$('#pdrecorders').show(500);
					$('#pcdplayers').show(500);
					$('#ebaccesories').show(500);
					$('#seeall5').show(500);
					//De communication
					$('#communication').removeClass('activado')
					$('#mobile').hide(500);
					$('#smartwatches').hide(500);
					$('#mobileaccesories').hide(500);
					$('#twowayradios').hide(500);
					$('#phones').hide(500);
					$('#seeall').hide(500);
					//De cameras
					$('#digitalcameras').hide(500);
					$('#camerasaccesories').hide(500);
					$('#drones').hide(500);
					$('#cameralenses').hide(500);
					$('#camcorders').hide(500);
					$('#seeall2').hide(500);
					//De tv
					$('#tvs').hide(500);
					$('#settopboxes').hide(500);
					$('#blurayplayers').hide(500);
					$('#mediastreamingdevices').hide(500);
					$('#projectors').hide(500);
					$('#seeall3').hide(500);
					//De homeaudio
					$('#headphones').hide(500);
					$('#speakers').hide(500);
					$('#radioplayers').hide(500);
					$('#hometheater').hide(500);
					$('#amplifier').hide(500);
					$('#seeall4').hide(500);
					//De accesories
					$('#homesecurity').hide(500);
					$('#homeautomation').hide(500);
					$('#securitysystems').hide(500);
					$('#batteries').hide(500);
					$('#remotecontrol').hide(500);
					$('#seeall6').hide(500);
					//De audiovisual
					$('#audioaccesories').hide(500);
					$('#studioequipment').hide(500);
					$('#avcables').hide(500);
					$('#seeall7').hide(500);
					//De mobileelectronics
					$('#gpsdevices').hide(500);
					$('#gpsaccesories').hide(500);
					$('#mp3media').hide(500);
					$('#seeall8').hide(500);
					//De musicalinstruments
					$('#musickeyboards').hide(500);
					$('#guitars').hide(500);
					$('#drums').hide(500);
					$('#iaccesories').hide(500);
					$('#violins').hide(500);
					$('#seeall9').hide(500);
				}
			});

			$('#accesories').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#homesecurity').hide(500);
					$('#homeautomation').hide(500);
					$('#securitysystems').hide(500);
					$('#batteries').hide(500);
					$('#remotecontrol').hide(500);
					$('#seeall6').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#communication').removeClass('activado');
					$('#cameras').removeClass('activado');
					$('#tv').removeClass('activado');
					$('#homeaudio').removeClass('activado');
					$('#portableelectronics').removeClass('activado');
					//$('#accesories').removeClass('activado');
					$('#audiovisual').removeClass('activado');
					$('#mobileelectronics').removeClass('activado');
					$('#musicalinstruments').removeClass('activado');

					$('#homesecurity').show(500);
					$('#homeautomation').show(500);
					$('#securitysystems').show(500);
					$('#batteries').show(500);
					$('#remotecontrol').show(500);
					$('#seeall6').show(500);
					//De communication
					$('#communication').removeClass('activado')
					$('#mobile').hide(500);
					$('#smartwatches').hide(500);
					$('#mobileaccesories').hide(500);
					$('#twowayradios').hide(500);
					$('#phones').hide(500);
					$('#seeall').hide(500);
					//De cameras
					$('#digitalcameras').hide(500);
					$('#camerasaccesories').hide(500);
					$('#drones').hide(500);
					$('#cameralenses').hide(500);
					$('#camcorders').hide(500);
					$('#seeall2').hide(500);
					//De homeaudio
					$('#headphones').hide(500);
					$('#speakers').hide(500);
					$('#radioplayers').hide(500);
					$('#hometheater').hide(500);
					$('#amplifier').hide(500);
					$('#seeall4').hide(500);
					//De portableelectronics
					$('#portablespeaker').hide(500);
					$('#ebookreader').hide(500);
					$('#pdrecorders').hide(500);
					$('#pcdplayers').hide(500);
					$('#ebaccesories').hide(500);
					$('#seeall5').hide(500);
					//De audiovisual
					$('#audioaccesories').hide(500);
					$('#studioequipment').hide(500);
					$('#avcables').hide(500);
					$('#seeall7').hide(500);
					//De mobileelectronics
					$('#gpsdevices').hide(500);
					$('#gpsaccesories').hide(500);
					$('#mp3media').hide(500);
					$('#seeall8').hide(500);
					//De musicalinstruments
					$('#musickeyboards').hide(500);
					$('#guitars').hide(500);
					$('#drums').hide(500);
					$('#iaccesories').hide(500);
					$('#violins').hide(500);
					$('#seeall9').hide(500);
				}
			});

			$('#audiovisual').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#audioaccesories').hide(500);
					$('#studioequipment').hide(500);
					$('#avcables').hide(500);
					$('#seeall7').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#communication').removeClass('activado');
					$('#cameras').removeClass('activado');
					$('#tv').removeClass('activado');
					$('#homeaudio').removeClass('activado');
					$('#portableelectronics').removeClass('activado');
					$('#accesories').removeClass('activado');
					//$('#audiovisual').removeClass('activado');
					$('#mobileelectronics').removeClass('activado');
					$('#musicalinstruments').removeClass('activado');

					$('#audioaccesories').show(500);
					$('#studioequipment').show(500);
					$('#avcables').show(500);
					$('#seeall7').show(500);
					//De communication
					$('#communication').removeClass('activado')
					$('#mobile').hide(500);
					$('#smartwatches').hide(500);
					$('#mobileaccesories').hide(500);
					$('#twowayradios').hide(500);
					$('#phones').hide(500);
					$('#seeall').hide(500);
					//De cameras
					$('#digitalcameras').hide(500);
					$('#camerasaccesories').hide(500);
					$('#drones').hide(500);
					$('#cameralenses').hide(500);
					$('#camcorders').hide(500);
					$('#seeall2').hide(500);
					//De homeaudio
					$('#headphones').hide(500);
					$('#speakers').hide(500);
					$('#radioplayers').hide(500);
					$('#hometheater').hide(500);
					$('#amplifier').hide(500);
					$('#seeall4').hide(500);
					//De portableelectronics
					$('#portablespeaker').hide(500);
					$('#ebookreader').hide(500);
					$('#pdrecorders').hide(500);
					$('#pcdplayers').hide(500);
					$('#ebaccesories').hide(500);
					$('#seeall5').hide(500);
					//De accesories
					$('#homesecurity').hide(500);
					$('#homeautomation').hide(500);
					$('#securitysystems').hide(500);
					$('#batteries').hide(500);
					$('#remotecontrol').hide(500);
					$('#seeall6').hide(500);
					//De mobileelectronics
					$('#gpsdevices').hide(500);
					$('#gpsaccesories').hide(500);
					$('#mp3media').hide(500);
					$('#seeall8').hide(500);
					//De musicalinstruments
					$('#musickeyboards').hide(500);
					$('#guitars').hide(500);
					$('#drums').hide(500);
					$('#iaccesories').hide(500);
					$('#violins').hide(500);
					$('#seeall9').hide(500);
				}
			});

			$('#mobileelectronics').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#gpsdevices').hide(500);
					$('#gpsaccesories').hide(500);
					$('#mp3media').hide(500);
					$('#seeall8').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#communication').removeClass('activado');
					$('#cameras').removeClass('activado');
					$('#tv').removeClass('activado');
					$('#homeaudio').removeClass('activado');
					$('#portableelectronics').removeClass('activado');
					$('#accesories').removeClass('activado');
					$('#audiovisual').removeClass('activado');
					//$('#mobileelectronics').removeClass('activado');
					$('#musicalinstruments').removeClass('activado');

					$('#gpsdevices').show(500);
					$('#gpsaccesories').show(500);
					$('#mp3media').show(500);
					$('#seeall8').show(500);
					//De communication
					$('#communication').removeClass('activado')
					$('#mobile').hide(500);
					$('#smartwatches').hide(500);
					$('#mobileaccesories').hide(500);
					$('#twowayradios').hide(500);
					$('#phones').hide(500);
					$('#seeall').hide(500);
					//De cameras
					$('#digitalcameras').hide(500);
					$('#camerasaccesories').hide(500);
					$('#drones').hide(500);
					$('#cameralenses').hide(500);
					$('#camcorders').hide(500);
					$('#seeall2').hide(500);
					//De homeaudio
					$('#headphones').hide(500);
					$('#speakers').hide(500);
					$('#radioplayers').hide(500);
					$('#hometheater').hide(500);
					$('#amplifier').hide(500);
					$('#seeall4').hide(500);
					//De portableelectronics
					$('#portablespeaker').hide(500);
					$('#ebookreader').hide(500);
					$('#pdrecorders').hide(500);
					$('#pcdplayers').hide(500);
					$('#ebaccesories').hide(500);
					$('#seeall5').hide(500);
					//De accesories
					$('#homesecurity').hide(500);
					$('#homeautomation').hide(500);
					$('#securitysystems').hide(500);
					$('#batteries').hide(500);
					$('#remotecontrol').hide(500);
					$('#seeall6').hide(500);
					//De audiovisual
					$('#audioaccesories').hide(500);
					$('#studioequipment').hide(500);
					$('#avcables').hide(500);
					$('#seeall7').hide(500);
					//De musicalinstruments
					$('#musickeyboards').hide(500);
					$('#guitars').hide(500);
					$('#drums').hide(500);
					$('#iaccesories').hide(500);
					$('#violins').hide(500);
					$('#seeall9').hide(500);
				}
			});

			$('#musicalinstruments').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#musickeyboards').hide(500);
					$('#guitars').hide(500);
					$('#drums').hide(500);
					$('#iaccesories').hide(500);
					$('#violins').hide(500);
					$('#seeall9').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#communication').removeClass('activado');
					$('#cameras').removeClass('activado');
					$('#tv').removeClass('activado');
					$('#homeaudio').removeClass('activado');
					$('#portableelectronics').removeClass('activado');
					$('#accesories').removeClass('activado');
					$('#audiovisual').removeClass('activado');
					$('#mobileelectronics').removeClass('activado');
					//$('#musicalinstruments').removeClass('activado');

					$('#musickeyboards').show(500);
					$('#guitars').show(500);
					$('#drums').show(500);
					$('#iaccesories').show(500);
					$('#violins').show(500);
					$('#seeall9').show(500);
					//De communication
					$('#communication').removeClass('activado')
					$('#mobile').hide(500);
					$('#smartwatches').hide(500);
					$('#mobileaccesories').hide(500);
					$('#twowayradios').hide(500);
					$('#phones').hide(500);
					$('#seeall').hide(500);
					//De cameras
					$('#digitalcameras').hide(500);
					$('#camerasaccesories').hide(500);
					$('#drones').hide(500);
					$('#cameralenses').hide(500);
					$('#camcorders').hide(500);
					$('#seeall2').hide(500);
					//De homeaudio
					$('#headphones').hide(500);
					$('#speakers').hide(500);
					$('#radioplayers').hide(500);
					$('#hometheater').hide(500);
					$('#amplifier').hide(500);
					$('#seeall4').hide(500);
					//De portableelectronics
					$('#portablespeaker').hide(500);
					$('#ebookreader').hide(500);
					$('#pdrecorders').hide(500);
					$('#pcdplayers').hide(500);
					$('#ebaccesories').hide(500);
					$('#seeall5').hide(500);
					//De accesories
					$('#homesecurity').hide(500);
					$('#homeautomation').hide(500);
					$('#securitysystems').hide(500);
					$('#batteries').hide(500);
					$('#remotecontrol').hide(500);
					$('#seeall6').hide(500);
					//De audiovisual
					$('#audioaccesories').hide(500);
					$('#studioequipment').hide(500);
					$('#avcables').hide(500);
					$('#seeall7').hide(500);
					//De mobileelectronics
					$('#gpsdevices').hide(500);
					$('#gpsaccesories').hide(500);
					$('#mp3media').hide(500);
					$('#seeall8').hide(500);
				}
			});



































		$('#kidsandtoys').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#carriersandseats').hide(500);
						$('#strollers').hide(500);
						$('#babycarseats').hide(500);
						$('#babycarriers').hide(500);
						$('#seeall10').hide(500);
					$('#toysandgames').hide(500);
						$('#oa').hide(500);
						$('#educationaltoys').hide(500);
						$('#dolls').hide(500);
						$('#babytoys').hide(500);
						$('#buildingsm').hide(500);
						$('#seeall11').hide(500);
					$('#babycare').hide(500);
						$('#babyfurniture').hide(500);
						$('#babyaccesories').hide(500);
						$('#nursingandfeeding').hide(500);
						$('#bathandpotty').hide(500);
						$('#babbybedding').hide(500);
						$('#seeall12').hide(500);
					$('#schoolsupplies').hide(500);
						$('#schoolstationery').hide(500);
						$('#seeall13').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#carriersandseats').show(500);
					$('#toysandgames').show(500);
					$('#babycare').show(500);
					$('#schoolsupplies').show(500);
					//De electronics
					$('#electronics').removeClass('activado');
					$('#communication').hide(500);
						$('#mobile').hide(500);
						$('#smartwatches').hide(500);
						$('#mobileaccesories').hide(500);
						$('#twowayradios').hide(500);
						$('#phones').hide(500);
						$('#seeall').hide(500);
					$('#cameras').hide(500);
						$('#digitalcameras').hide(500);
						$('#camerasaccesories').hide(500);
						$('#drones').hide(500);
						$('#cameralenses').hide(500);
						$('#camcorders').hide(500);
						$('#seeall2').hide(500);
					$('#tv').hide(500);
						$('#tvs').hide(500);
						$('#settopboxes').hide(500);
						$('#blurayplayers').hide(500);
						$('#mediastreamingdevices').hide(500);
						$('#projectors').hide(500);
						$('#seeall3').hide(500);
					$('#homeaudio').hide(500);
						$('#headphones').hide(500);
						$('#speakers').hide(500);
						$('#radioplayers').hide(500);
						$('#hometheater').hide(500);
						$('#amplifier').hide(500);
						$('#seeall4').hide(500);
					$('#portableelectronics').hide(500);
						$('#portablespeaker').hide(500);
						$('#ebookreader').hide(500);
						$('#pdrecorders').hide(500);
						$('#pcdplayers').hide(500);
						$('#ebaccesories').hide(500);
						$('#seeall5').hide(500);
					$('#accesories').hide(500);
						$('#homesecurity').hide(500);
						$('#homeautomation').hide(500);
						$('#securitysystems').hide(500);
						$('#batteries').hide(500);
						$('#remotecontrol').hide(500);
						$('#seeall6').hide(500);
					$('#audiovisual').hide(500);
						$('#audioaccesories').hide(500);
						$('#studioequipment').hide(500);
						$('#avcables').hide(500);
						$('#seeall7').hide(500);
					$('#mobileelectronics').hide(500);
						$('#gpsdevices').hide(500);
						$('#gpsaccesories').hide(500);
						$('#mp3media').hide(500);
						$('#seeall8').hide(500);
					$('#musicalinstruments').hide(500);
						$('#musickeyboards').hide(500);
						$('#guitars').hide(500);
						$('#drums').hide(500);
						$('#iaccesories').hide(500);
						$('#violins').hide(500);
						$('#seeall9').hide(500);
					//De Home & Garden
					$('#homeandgarden').removeClass('activado');
					$('#homeappliances').hide(500);
						$('#vacuums').hide(500);
						$('#refrigerators').hide(500);
						$('#airconditioners').hide(500);
						$('#washingm').hide(500);
						$('#ovens').hide(500);
						$('#seeall14').hide(500);
					$('#petsupplies').hide(500);
						$('#dogsupplies').hide(500);
						$('#catsupplies').hide(500);
						$('#sasupplies').hide(500);
						$('#birdsupplies').hide(500);
						$('#fishsupplies').hide(500);
						$('#seeall15').hide(500);
					$('#kitchenaccesories').hide(500);
						$('#kitchensupplies').hide(500);
						$('#sinksandtaps').hide(500);
						$('#cookware').hide(500);
						$('#dinnerware').hide(500);
						$('#bbqa').hide(500);
						$('#seeall16').hide(500);
					$('#furniture').hide(500);
						$('#shelves').hide(500);
						$('#mattresses').hide(500);
						$('#sofa').hide(500);
						$('#seats').hide(500);
						$('#tables').hide(500);
						$('#seeall17').hide(500);
					$('#toolsandhardware').hide(500);
						$('#garden').hide(500);
						$('#powertools').hide(500);
						$('#generators').hide(500);
						$('#htools').hide(500);
						$('#measuring').hide(500);
						$('#seeall18').hide(500);
					//De Books & DVDs
					$('#booksanddvds').removeClass('activado');
					$('#books').hide(500);
						$('#miscbooks').hide(500);
						$('#childbooks').hide(500);
						$('#cookbooks').hide(500);
						$('#abooks').hide(500);
						$('#cbooks').hide(500);
						$('#seeall26').hide(500);
					$('#movies').hide(500);
						$('#miscmovies').hide(500);
						$('#tseries').hide(500);
						$('#amovies').hide(500);
						$('#cmovies').hide(500);
						$('#seeall27').hide(500);
					$('#music').hide(500);
						$('#mmusic').hide(500);
						$('#cmusic').hide(500);
						$('#rmusic').hide(500);
						$('#vrecords').hide(500);
						$('#hhmusic').hide(500);
						$('#seeall28').hide(500);
					$('#comicsandmagazines').hide(500);
						$('#magazines').hide(500);
						$('#comicbooks').hide(500);
						$('#seeall29').hide(500);
					//De computers
					$('#computers').removeClass('activado');
					$('#hardware').hide(500);
						$('#tablet').hide(500);
						$('#laptops').hide(500);
						$('#printers').hide(500);
						$('#monitors').hide(500);
						$('#desktops').hide(500);
						$('#seeall30').hide(500);
					$('#inputdevices').hide(500);
						$('#keyboards').hide(500);
						$('#mtb').hide(500);
						$('#microphones').hide(500);
						$('#gtablets').hide(500);
						$('#webcameras').hide(500);
						$('#seeall31').hide(500);
					$('#videogames').hide(500);
						$('#gconsoles').hide(500);
						$('#vreality').hide(500);
						$('#playstationgames').hide(500);
						$('#gamecontrollers').hide(500);
						$('#gamekeys').hide(500);
						$('#seeall32').hide(500);
					$('#software').hide(500);
						$('#bsoftware').hide(500);
						$('#santivirus').hide(500);
						$('#operatingsystems').hide(500);
						$('#gmultimedia').hide(500);
						$('#utilities').hide(500);
						$('#seeall33').hide(500);
					$('#computeraccesories').hide(500);
						$('#tabletaccesories').hide(500);
						$('#lbags').hide(500);
						$('#laccesories').hide(500);
						$('#computerspeakers').hide(500);
						$('#swarranty').hide(500);
						$('#seeall34').hide(500);
					//De cars and accesories
					$('#carsandaccesories').removeClass('activado');
					$('#autoparts').hide(500);
						$('#aeparts').hide(500);
						$('#4wdacc').hide(500);
						$('#carseats').hide(500);
						$('#carsuspensions').hide(500);
						$('#wandt').hide(500);
						$('#seeall39').hide(500);
					$('#caccesories').hide(500);
						$('#eca').hide(500);
						$('#cr').hide(500);
						$('#ica').hide(500);
						$('#ccs').hide(500);
						$('#ccp').hide(500);
						$('#seeall40').hide(500);
					$('#caraudio').hide(500);
						$('#cm').hide(500);
						$('#cs').hide(500);
						$('#ca').hide(500);
						$('#seeall41').hide(500);
					$('#motorbikesandquads').hide(500);
						$('#motorbik').hide(500);
						$('#motorbikes').hide(500);
						$('#seeall42').hide(500);
					$('#motorcars').hide(500);
						$('#newcars').hide(500);
						$('#seeall43').hide(500);
					//De fashion
					$('#fashion').removeClass('activado');
					$('#clothingaccesories').hide(500);
						$('#watches').hide(500);
						$('#bags').hide(500);
						$('#sunglasses').hide(500);
						$('#costumes').hide(500);
						$('#wallets').hide(500);
						$('#seeall44').hide(500);
					$('#shoes').hide(500);
						$('#mashoes').hide(500);
						$('#washoes').hide(500);
						$('#wboots').hide(500);
						$('#mcashualshoes').hide(500);
						$('#sandals').hide(500);
						$('#seeall45').hide(500);
					$('#womensclothing').hide(500);
						$('#fitnessclothing').hide(500);
						$('#dresses').hide(500);
						$('#swimwear').hide(500);
						$('#pants').hide(500);
						$('#tops').hide(500);
						$('#seeall46').hide(500);
					$('#mensclothing').hide(500);
						$('#sportswear').hide(500);
						$('#menstops').hide(500);
						$('#jackets').hide(500);
						$('#underwear').hide(500);
						$('#mpants').hide(500);
						$('#seeall47').hide(500);
					$('#womenlingerie').hide(500);
						$('#bras').hide(500);
						$('#hosiery').hide(500);
						$('#panties').hide(500);
						$('#shapwear').hide(500);
						$('#camisoles').hide(500);
						$('#seeall48').hide(500);
					//De office supplies
					$('#officesupplies').removeClass('activado');
					$('#officeequipments').hide(500);
						$('#officesuppliess').hide(500);
						$('#calculators').hide(500);
						$('#faxmachines').hide(500);
						$('#seeall51').hide(500);
					$('#officefurniture').hide(500);
						$('#obandstorage').hide(500);
						$('#officechairs').hide(500);
						$('#boardroom').hide(500);
						$('#desks').hide(500);
						$('#seeall52').hide(500);
					$('#posgear').hide(500);
						$('#posaccesories').hide(500);
						$('#rprinters').hide(500);
						$('#cashregisters').hide(500);
						$('#possystems').hide(500);
						$('#barcode').hide(500);
						$('#seeall53').hide(500);
					//De healthy and beauty
					$('#healthy').removeClass('activado');
					$('#fragancies').hide(500);
						$('#wperfume').hide(500);
						$('#mcologne').hide(500);
						$('#fragrance').hide(500);
						$('#aftershave').hide(500);
						$('#unisex').hide(500);
						$('#seeall54').hide(500);
					$('#personalcare').hide(500);
						$('#skincare').hide(500);
						$('#agedcare').hide(500);
						$('#haircare').hide(500);
						$('#shaving').hide(500);
						$('#oralcare').hide(500);
						$('#seeall55').hide(500);
					$('#cosmetics').hide(500);
						$('#facemakeup').hide(500);
						$('#eyemakeup').hide(500);
						$('#nails').hide(500);
						$('#makeup').hide(500);
						$('#lipmakeup').hide(500);
						$('#seeall56').hide(500);
					$('#grocery').hide(500);
						$('#organicfood').hide(500);
						$('#teaandcoffee').hide(500);
						$('#bandcfood').hide(500);
						$('#juices').hide(500);
						$('#dairyproducts').hide(500);
						$('#seeall57').hide(500);
					//De gifts and wine
					$('#giftsandwine').removeClass('activado');
					$('#beerwine').hide(500);
						$('#liquor').hide(500);
						$('#wines').hide(500);
						$('#beers').hide(500);
						$('#wine').hide(500);
						$('#liquora').hide(500);
						$('#seeall58').hide(500);
					$('#giftsandgadgets').hide(500);
						$('#collectables').hide(500);
						$('#ugifts').hide(500);
						$('#giftsforher').hide(500);
						$('#knives').hide(500);
						$('#giftsbabies').hide(500);
						$('#seeall59').hide(500);
					$('#desserts').hide(500);
						$('#g').hide(500);
						$('#f').hide(500);
						$('#pamper').hide(500);
						$('#seeall60').hide(500);
					$('#flowers').hide(500);
						$('#plants').hide(500);
						$('#arrangements').hide(500);
						$('#seeall61').hide(500);
					$('#wedding').hide(500);
						$('#waccesories').hide(500);
						$('#wgifts').hide(500);
						$('#seeall62').hide(500);
					//De sports and travel
					$('#sportsandtravel').removeClass('activado');
					$('#outdooradventure').hide(500);
						$('#campingequipment').hide(500);
						$('#luggage').hide(500);
						$('#tents').hide(500);
						$('#travelaccesories').hide(500);
						$('#backpacks').hide(500);
						$('#seeall63').hide(500);
					$('#gymandfitness').hide(500);
						$('#fatrackers').hide(500);
						$('#fitnessaccesories').hide(500);
						$('#treadmills').hide(500);
						$('#excercisebikes').hide(500);
						$('#seeall64').hide(500);
					$('#sportinggoods').hide(500);
						$('#fishing').hide(500);
						$('#bicyclea').hide(500);
						$('#bbicylce').hide(500);
						$('#boating').hide(500);
						$('#skate').hide(500);
						$('#seeall65').hide(500);
					$('#travel').hide(500);
						$('#holidaydeals').hide(500);
						$('#seeall66').hide(500);
				}
			});

			$('#carriersandseats').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#strollers').hide(500);
					$('#babycarseats').hide(500);
					$('#babycarriers').hide(500);
					$('#seeall10').hide(500);
				}
				else{
					$(this).addClass('activado');
					//$('#carriersandseats').removeClass('activado');
					$('#toysandgames').removeClass('activado');
					$('#babycare').removeClass('activado');
					$('#schoolsupplies').removeClass('activado');

					$('#strollers').show(500);
					$('#babycarseats').show(500);
					$('#babycarriers').show(500);
					$('#seeall10').show(500);
					//De toys and games
					$('#oa').hide(500);
					$('#educationaltoys').hide(500);
					$('#dolls').hide(500);
					$('#babytoys').hide(500);
					$('#buildingsm').hide(500);
					$('#seeall11').hide(500);
					//De babycare
					$('#babyfurniture').hide(500);
					$('#babyaccesories').hide(500);
					$('#nursingandfeeding').hide(500);
					$('#bathandpotty').hide(500);
					$('#babbybedding').hide(500);
					$('#seeall12').hide(500);
					//De schoolsupplies
					$('#schoolstationery').hide(500);
					$('#seeall13').hide(500);
				}
			});

			$('#toysandgames').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#oa').hide(500);
					$('#educationaltoys').hide(500);
					$('#dolls').hide(500);
					$('#babytoys').hide(500);
					$('#buildingsm').hide(500);
					$('#seeall11').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#carriersandseats').removeClass('activado');
					//$('#toysandgames').removeClass('activado');
					$('#babycare').removeClass('activado');
					$('#schoolsupplies').removeClass('activado');

					$('#oa').show(500);
					$('#educationaltoys').show(500);
					$('#dolls').show(500);
					$('#babytoys').show(500);
					$('#buildingsm').show(500);
					$('#seeall11').show(500);
					//De carriers and seats
					$('#strollers').hide(500);
					$('#babycarseats').hide(500);
					$('#babycarriers').hide(500);
					$('#seeall10').hide(500);
					//De babycare
					$('#babyfurniture').hide(500);
					$('#babyaccesories').hide(500);
					$('#nursingandfeeding').hide(500);
					$('#bathandpotty').hide(500);
					$('#babbybedding').hide(500);
					$('#seeall12').hide(500);
					//De schoolsupplies
					$('#schoolstationery').hide(500);
					$('#seeall13').hide(500);
				}
			});

			$('#babycare').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#babyfurniture').hide(500);
					$('#babyaccesories').hide(500);
					$('#nursingandfeeding').hide(500);
					$('#bathandpotty').hide(500);
					$('#babbybedding').hide(500);
					$('#seeall12').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#carriersandseats').removeClass('activado');
					$('#toysandgames').removeClass('activado');
					//$('#babycare').removeClass('activado');
					$('#schoolsupplies').removeClass('activado');

					$('#babyfurniture').show(500);
					$('#babyaccesories').show(500);
					$('#nursingandfeeding').show(500);
					$('#bathandpotty').show(500);
					$('#babbybedding').show(500);
					$('#seeall12').show(500);
					//De carriers and seats
					$('#strollers').hide(500);
					$('#babycarseats').hide(500);
					$('#babycarriers').hide(500);
					$('#seeall10').hide(500);
					//De toys and games
					$('#oa').hide(500);
					$('#educationaltoys').hide(500);
					$('#dolls').hide(500);
					$('#babytoys').hide(500);
					$('#buildingsm').hide(500);
					$('#seeall11').hide(500);
					//De schoolsupplies
					$('#schoolstationery').hide(500);
					$('#seeall13').hide(500);
				}
				
			});

			$('#schoolsupplies').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#schoolstationery').hide(500);
					$('#seeall13').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#carriersandseats').removeClass('activado');
					$('#toysandgames').removeClass('activado');
					$('#babycare').removeClass('activado');
					//$('#schoolsupplies').removeClass('activado');

					$('#schoolstationery').show(500);
					$('#seeall13').show(500);
					//De carriers and seats
					$('#strollers').hide(500);
					$('#babycarseats').hide(500);
					$('#babycarriers').hide(500);
					$('#seeall10').hide(500);
					//De toys and games
					$('#oa').hide(500);
					$('#educationaltoys').hide(500);
					$('#dolls').hide(500);
					$('#babytoys').hide(500);
					$('#buildingsm').hide(500);
					$('#seeall11').hide(500);
					//De babycare
					$('#babyfurniture').hide(500);
					$('#babyaccesories').hide(500);
					$('#nursingandfeeding').hide(500);
					$('#bathandpotty').hide(500);
					$('#babbybedding').hide(500);
					$('#seeall12').hide(500);
				}
			});

			




			






























			$('#homeandgarden').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#homeappliances').hide(500);
						$('#vacuums').hide(500);
						$('#refrigerators').hide(500);
						$('#airconditioners').hide(500);
						$('#washingm').hide(500);
						$('#ovens').hide(500);
						$('#seeall14').hide(500);
					$('#petsupplies').hide(500);
						$('#dogsupplies').hide(500);
						$('#catsupplies').hide(500);
						$('#sasupplies').hide(500);
						$('#birdsupplies').hide(500);
						$('#fishsupplies').hide(500);
						$('#seeall15').hide(500);
					$('#kitchenaccesories').hide(500);
						$('#kitchensupplies').hide(500);
						$('#sinksandtaps').hide(500);
						$('#cookware').hide(500);
						$('#dinnerware').hide(500);
						$('#bbqa').hide(500);
						$('#seeall16').hide(500);
					$('#furniture').hide(500);
						$('#shelves').hide(500);
						$('#mattresses').hide(500);
						$('#sofa').hide(500);
						$('#seats').hide(500);
						$('#tables').hide(500);
						$('#seeall17').hide(500);
					$('#toolsandhardware').hide(500);
						$('#garden').hide(500);
						$('#powertools').hide(500);
						$('#generators').hide(500);
						$('#htools').hide(500);
						$('#measuring').hide(500);
						$('#seeall18').hide(500);
					
				}
				else{
					$(this).addClass('activado');
					$('#homeappliances').show(500);
					$('#petsupplies').show(500);
					$('#kitchenaccesories').show(500);
					$('#furniture').show(500);
					$('#toolsandhardware').show(500);
					//De electronics
					$('#electronics').removeClass('activado');
					$('#communication').hide(500);
						$('#mobile').hide(500);
						$('#smartwatches').hide(500);
						$('#mobileaccesories').hide(500);
						$('#twowayradios').hide(500);
						$('#phones').hide(500);
						$('#seeall').hide(500);
					$('#cameras').hide(500);
						$('#digitalcameras').hide(500);
						$('#camerasaccesories').hide(500);
						$('#drones').hide(500);
						$('#cameralenses').hide(500);
						$('#camcorders').hide(500);
						$('#seeall2').hide(500);
					$('#tv').hide(500);
						$('#tvs').hide(500);
						$('#settopboxes').hide(500);
						$('#blurayplayers').hide(500);
						$('#mediastreamingdevices').hide(500);
						$('#projectors').hide(500);
						$('#seeall3').hide(500);
					$('#homeaudio').hide(500);
						$('#headphones').hide(500);
						$('#speakers').hide(500);
						$('#radioplayers').hide(500);
						$('#hometheater').hide(500);
						$('#amplifier').hide(500);
						$('#seeall4').hide(500);
					$('#portableelectronics').hide(500);
						$('#portablespeaker').hide(500);
						$('#ebookreader').hide(500);
						$('#pdrecorders').hide(500);
						$('#pcdplayers').hide(500);
						$('#ebaccesories').hide(500);
						$('#seeall5').hide(500);
					$('#accesories').hide(500);
						$('#homesecurity').hide(500);
						$('#homeautomation').hide(500);
						$('#securitysystems').hide(500);
						$('#batteries').hide(500);
						$('#remotecontrol').hide(500);
						$('#seeall6').hide(500);
					$('#audiovisual').hide(500);
						$('#audioaccesories').hide(500);
						$('#studioequipment').hide(500);
						$('#avcables').hide(500);
						$('#seeall7').hide(500);
					$('#mobileelectronics').hide(500);
						$('#gpsdevices').hide(500);
						$('#gpsaccesories').hide(500);
						$('#mp3media').hide(500);
						$('#seeall8').hide(500);
					$('#musicalinstruments').hide(500);
						$('#musickeyboards').hide(500);
						$('#guitars').hide(500);
						$('#drums').hide(500);
						$('#iaccesories').hide(500);
						$('#violins').hide(500);
						$('#seeall9').hide(500);
					//De Kids and toys
					$('#kidsandtoys').removeClass('activado');
					$('#carriersandseats').hide(500);
						$('#strollers').hide(500);
						$('#babycarseats').hide(500);
						$('#babycarriers').hide(500);
						$('#seeall10').hide(500);
					$('#toysandgames').hide(500);
						$('#oa').hide(500);
						$('#educationaltoys').hide(500);
						$('#dolls').hide(500);
						$('#babytoys').hide(500);
						$('#buildingsm').hide(500);
						$('#seeall11').hide(500);
					$('#babycare').hide(500);
						$('#babyfurniture').hide(500);
						$('#babyaccesories').hide(500);
						$('#nursingandfeeding').hide(500);
						$('#bathandpotty').hide(500);
						$('#babbybedding').hide(500);
						$('#seeall12').hide(500);
					$('#schoolsupplies').hide(500);
						$('#schoolstationery').hide(500);
						$('#seeall13').hide(500);
					//De Books & DVDs
					$('#booksanddvds').removeClass('activado');
					$('#books').hide(500);
						$('#miscbooks').hide(500);
						$('#childbooks').hide(500);
						$('#cookbooks').hide(500);
						$('#abooks').hide(500);
						$('#cbooks').hide(500);
						$('#seeall26').hide(500);
					$('#movies').hide(500);
						$('#miscmovies').hide(500);
						$('#tseries').hide(500);
						$('#amovies').hide(500);
						$('#cmovies').hide(500);
						$('#seeall27').hide(500);
					$('#music').hide(500);
						$('#mmusic').hide(500);
						$('#cmusic').hide(500);
						$('#rmusic').hide(500);
						$('#vrecords').hide(500);
						$('#hhmusic').hide(500);
						$('#seeall28').hide(500);
					$('#comicsandmagazines').hide(500);
						$('#magazines').hide(500);
						$('#comicbooks').hide(500);
						$('#seeall29').hide(500);
					//De computers
					$('#computers').removeClass('activado');
					$('#hardware').hide(500);
						$('#tablet').hide(500);
						$('#laptops').hide(500);
						$('#printers').hide(500);
						$('#monitors').hide(500);
						$('#desktops').hide(500);
						$('#seeall30').hide(500);
					$('#inputdevices').hide(500);
						$('#keyboards').hide(500);
						$('#mtb').hide(500);
						$('#microphones').hide(500);
						$('#gtablets').hide(500);
						$('#webcameras').hide(500);
						$('#seeall31').hide(500);
					$('#videogames').hide(500);
						$('#gconsoles').hide(500);
						$('#vreality').hide(500);
						$('#playstationgames').hide(500);
						$('#gamecontrollers').hide(500);
						$('#gamekeys').hide(500);
						$('#seeall32').hide(500);
					$('#software').hide(500);
						$('#bsoftware').hide(500);
						$('#santivirus').hide(500);
						$('#operatingsystems').hide(500);
						$('#gmultimedia').hide(500);
						$('#utilities').hide(500);
						$('#seeall33').hide(500);
					$('#computeraccesories').hide(500);
						$('#tabletaccesories').hide(500);
						$('#lbags').hide(500);
						$('#laccesories').hide(500);
						$('#computerspeakers').hide(500);
						$('#swarranty').hide(500);
						$('#seeall34').hide(500);
					//De cars and accesories
					$('#carsandaccesories').removeClass('activado');
					$('#autoparts').hide(500);
						$('#aeparts').hide(500);
						$('#4wdacc').hide(500);
						$('#carseats').hide(500);
						$('#carsuspensions').hide(500);
						$('#wandt').hide(500);
						$('#seeall39').hide(500);
					$('#caccesories').hide(500);
						$('#eca').hide(500);
						$('#cr').hide(500);
						$('#ica').hide(500);
						$('#ccs').hide(500);
						$('#ccp').hide(500);
						$('#seeall40').hide(500);
					$('#caraudio').hide(500);
						$('#cm').hide(500);
						$('#cs').hide(500);
						$('#ca').hide(500);
						$('#seeall41').hide(500);
					$('#motorbikesandquads').hide(500);
						$('#motorbik').hide(500);
						$('#motorbikes').hide(500);
						$('#seeall42').hide(500);
					$('#motorcars').hide(500);
						$('#newcars').hide(500);
						$('#seeall43').hide(500);
					//De fashion
					$('#fashion').removeClass('activado');
					$('#clothingaccesories').hide(500);
						$('#watches').hide(500);
						$('#bags').hide(500);
						$('#sunglasses').hide(500);
						$('#costumes').hide(500);
						$('#wallets').hide(500);
						$('#seeall44').hide(500);
					$('#shoes').hide(500);
						$('#mashoes').hide(500);
						$('#washoes').hide(500);
						$('#wboots').hide(500);
						$('#mcashualshoes').hide(500);
						$('#sandals').hide(500);
						$('#seeall45').hide(500);
					$('#womensclothing').hide(500);
						$('#fitnessclothing').hide(500);
						$('#dresses').hide(500);
						$('#swimwear').hide(500);
						$('#pants').hide(500);
						$('#tops').hide(500);
						$('#seeall46').hide(500);
					$('#mensclothing').hide(500);
						$('#sportswear').hide(500);
						$('#menstops').hide(500);
						$('#jackets').hide(500);
						$('#underwear').hide(500);
						$('#mpants').hide(500);
						$('#seeall47').hide(500);
					$('#womenlingerie').hide(500);
						$('#bras').hide(500);
						$('#hosiery').hide(500);
						$('#panties').hide(500);
						$('#shapwear').hide(500);
						$('#camisoles').hide(500);
						$('#seeall48').hide(500);
					//De office supplies
					$('#officesupplies').removeClass('activado');
					$('#officeequipments').hide(500);
						$('#officesuppliess').hide(500);
						$('#calculators').hide(500);
						$('#faxmachines').hide(500);
						$('#seeall51').hide(500);
					$('#officefurniture').hide(500);
						$('#obandstorage').hide(500);
						$('#officechairs').hide(500);
						$('#boardroom').hide(500);
						$('#desks').hide(500);
						$('#seeall52').hide(500);
					$('#posgear').hide(500);
						$('#posaccesories').hide(500);
						$('#rprinters').hide(500);
						$('#cashregisters').hide(500);
						$('#possystems').hide(500);
						$('#barcode').hide(500);
						$('#seeall53').hide(500);
					//De healthy and beauty
					$('#healthy').removeClass('activado');
					$('#fragancies').hide(500);
						$('#wperfume').hide(500);
						$('#mcologne').hide(500);
						$('#fragrance').hide(500);
						$('#aftershave').hide(500);
						$('#unisex').hide(500);
						$('#seeall54').hide(500);
					$('#personalcare').hide(500);
						$('#skincare').hide(500);
						$('#agedcare').hide(500);
						$('#haircare').hide(500);
						$('#shaving').hide(500);
						$('#oralcare').hide(500);
						$('#seeall55').hide(500);
					$('#cosmetics').hide(500);
						$('#facemakeup').hide(500);
						$('#eyemakeup').hide(500);
						$('#nails').hide(500);
						$('#makeup').hide(500);
						$('#lipmakeup').hide(500);
						$('#seeall56').hide(500);
					$('#grocery').hide(500);
						$('#organicfood').hide(500);
						$('#teaandcoffee').hide(500);
						$('#bandcfood').hide(500);
						$('#juices').hide(500);
						$('#dairyproducts').hide(500);
						$('#seeall57').hide(500);
					//De gifts and wine
					$('#giftsandwine').removeClass('activado');
					$('#beerwine').hide(500);
						$('#liquor').hide(500);
						$('#wines').hide(500);
						$('#beers').hide(500);
						$('#wine').hide(500);
						$('#liquora').hide(500);
						$('#seeall58').hide(500);
					$('#giftsandgadgets').hide(500);
						$('#collectables').hide(500);
						$('#ugifts').hide(500);
						$('#giftsforher').hide(500);
						$('#knives').hide(500);
						$('#giftsbabies').hide(500);
						$('#seeall59').hide(500);
					$('#desserts').hide(500);
						$('#g').hide(500);
						$('#f').hide(500);
						$('#pamper').hide(500);
						$('#seeall60').hide(500);
					$('#flowers').hide(500);
						$('#plants').hide(500);
						$('#arrangements').hide(500);
						$('#seeall61').hide(500);
					$('#wedding').hide(500);
						$('#waccesories').hide(500);
						$('#wgifts').hide(500);
						$('#seeall62').hide(500);
					//De sports and travel
					$('#sportsandtravel').removeClass('activado');
					$('#outdooradventure').hide(500);
						$('#campingequipment').hide(500);
						$('#luggage').hide(500);
						$('#tents').hide(500);
						$('#travelaccesories').hide(500);
						$('#backpacks').hide(500);
						$('#seeall63').hide(500);
					$('#gymandfitness').hide(500);
						$('#fatrackers').hide(500);
						$('#fitnessaccesories').hide(500);
						$('#treadmills').hide(500);
						$('#excercisebikes').hide(500);
						$('#seeall64').hide(500);
					$('#sportinggoods').hide(500);
						$('#fishing').hide(500);
						$('#bicyclea').hide(500);
						$('#bbicylce').hide(500);
						$('#boating').hide(500);
						$('#skate').hide(500);
						$('#seeall65').hide(500);
					$('#travel').hide(500);
						$('#holidaydeals').hide(500);
						$('#seeall66').hide(500);
				}
			});

			$('#homeappliances').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#vacuums').hide(500);
					$('#refrigerators').hide(500);
					$('#airconditioners').hide(500);
					$('#washingm').hide(500);
					$('#ovens').hide(500);
					$('#seeall14').hide(500);
				}
				else{
					$(this).addClass('activado');
					//$('#homeappliances').removeClass('activado');
					$('#petsupplies').removeClass('activado');
					$('#kitchenaccesories').removeClass('activado');
					$('#furniture').removeClass('activado');
					$('#toolsandhardware').removeClass('activado');

					$('#vacuums').show(500);
					$('#refrigerators').show(500);
					$('#airconditioners').show(500);
					$('#washingm').show(500);
					$('#ovens').show(500);
					$('#seeall14').show(500);
					//De petsupplies
					$('#dogsupplies').hide(500);
					$('#catsupplies').hide(500);
					$('#sasupplies').hide(500);
					$('#birdsupplies').hide(500);
					$('#fishsupplies').hide(500);
					$('#seeall15').hide(500);
					//De kitchenaccesories
					$('#kitchensupplies').hide(500);
					$('#sinksandtaps').hide(500);
					$('#cookware').hide(500);
					$('#dinnerware').hide(500);
					$('#bbqa').hide(500);
					$('#seeall16').hide(500);
					//De furniture
					$('#shelves').hide(500);
					$('#mattresses').hide(500);
					$('#sofa').hide(500);
					$('#seats').hide(500);
					$('#tables').hide(500);
					$('#seeall17').hide(500);
					//De toolsandhardware
					$('#garden').hide(500);
					$('#powertools').hide(500);
					$('#generators').hide(500);
					$('#htools').hide(500);
					$('#measuring').hide(500);
					$('#seeall18').hide(500);
				}
			});

			$('#petsupplies').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#dogsupplies').hide(500);
					$('#catsupplies').hide(500);
					$('#sasupplies').hide(500);
					$('#birdsupplies').hide(500);
					$('#fishsupplies').hide(500);
					$('#seeall15').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#homeappliances').removeClass('activado');
					//$('#petsupplies').removeClass('activado');
					$('#kitchenaccesories').removeClass('activado');
					$('#furniture').removeClass('activado');
					$('#toolsandhardware').removeClass('activado');

					$('#dogsupplies').show(500);
					$('#catsupplies').show(500);
					$('#sasupplies').show(500);
					$('#birdsupplies').show(500);
					$('#fishsupplies').show(500);
					$('#seeall15').show(500);
					//De homeappliances
					$('#vacuums').hide(500);
					$('#refrigerators').hide(500);
					$('#airconditioners').hide(500);
					$('#washingm').hide(500);
					$('#ovens').hide(500);
					$('#seeall14').hide(500);
					//De kitchenaccesories
					$('#kitchensupplies').hide(500);
					$('#sinksandtaps').hide(500);
					$('#cookware').hide(500);
					$('#dinnerware').hide(500);
					$('#bbqa').hide(500);
					$('#seeall16').hide(500);
					//De furniture
					$('#shelves').hide(500);
					$('#mattresses').hide(500);
					$('#sofa').hide(500);
					$('#seats').hide(500);
					$('#tables').hide(500);
					$('#seeall17').hide(500);
					//De toolsandhardware
					$('#garden').hide(500);
					$('#powertools').hide(500);
					$('#generators').hide(500);
					$('#htools').hide(500);
					$('#measuring').hide(500);
					$('#seeall18').hide(500);
				}
			});

			$('#kitchenaccesories').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#kitchensupplies').hide(500);
					$('#sinksandtaps').hide(500);
					$('#cookware').hide(500);
					$('#dinnerware').hide(500);
					$('#bbqa').hide(500);
					$('#seeall16').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#homeappliances').removeClass('activado');
					$('#petsupplies').removeClass('activado');
					//$('#kitchenaccesories').removeClass('activado');
					$('#furniture').removeClass('activado');
					$('#toolsandhardware').removeClass('activado');

					$('#kitchensupplies').show(500);
					$('#sinksandtaps').show(500);
					$('#cookware').show(500);
					$('#dinnerware').show(500);
					$('#bbqa').show(500);
					$('#seeall16').show(500);
					//De homeappliances
					$('#vacuums').hide(500);
					$('#refrigerators').hide(500);
					$('#airconditioners').hide(500);
					$('#washingm').hide(500);
					$('#ovens').hide(500);
					$('#seeall14').hide(500);
					//De petsupplies
					$('#dogsupplies').hide(500);
					$('#catsupplies').hide(500);
					$('#sasupplies').hide(500);
					$('#birdsupplies').hide(500);
					$('#fishsupplies').hide(500);
					$('#seeall15').hide(500);
					//De furniture
					$('#shelves').hide(500);
					$('#mattresses').hide(500);
					$('#sofa').hide(500);
					$('#seats').hide(500);
					$('#tables').hide(500);
					$('#seeall17').hide(500);
					//De toolsandhardware
					$('#garden').hide(500);
					$('#powertools').hide(500);
					$('#generators').hide(500);
					$('#htools').hide(500);
					$('#measuring').hide(500);
					$('#seeall18').hide(500);
				}
			});

			$('#furniture').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#shelves').hide(500);
					$('#mattresses').hide(500);
					$('#sofa').hide(500);
					$('#seats').hide(500);
					$('#tables').hide(500);
					$('#seeall17').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#homeappliances').removeClass('activado');
					$('#petsupplies').removeClass('activado');
					$('#kitchenaccesories').removeClass('activado');
					//$('#furniture').removeClass('activado');
					$('#toolsandhardware').removeClass('activado');

					$('#shelves').show(500);
					$('#mattresses').show(500);
					$('#sofa').show(500);
					$('#seats').show(500);
					$('#tables').show(500);
					$('#seeall17').show(500);
					//De homeappliances
					$('#vacuums').hide(500);
					$('#refrigerators').hide(500);
					$('#airconditioners').hide(500);
					$('#washingm').hide(500);
					$('#ovens').hide(500);
					$('#seeall14').hide(500);
					//De petsupplies
					$('#dogsupplies').hide(500);
					$('#catsupplies').hide(500);
					$('#sasupplies').hide(500);
					$('#birdsupplies').hide(500);
					$('#fishsupplies').hide(500);
					$('#seeall15').hide(500);
					//De kitchenaccesories
					$('#kitchensupplies').hide(500);
					$('#sinksandtaps').hide(500);
					$('#cookware').hide(500);
					$('#dinnerware').hide(500);
					$('#bbqa').hide(500);
					$('#seeall16').hide(500);
					//De toolsandhardware
					$('#garden').hide(500);
					$('#powertools').hide(500);
					$('#generators').hide(500);
					$('#htools').hide(500);
					$('#measuring').hide(500);
					$('#seeall18').hide(500);
				}
			});


			$('#toolsandhardware').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#garden').hide(500);
					$('#powertools').hide(500);
					$('#generators').hide(500);
					$('#htools').hide(500);
					$('#measuring').hide(500);
					$('#seeall18').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#homeappliances').removeClass('activado');
					$('#petsupplies').removeClass('activado');
					$('#kitchenaccesories').removeClass('activado');
					$('#furniture').removeClass('activado');
					//$('#toolsandhardware').removeClass('activado');

					$('#garden').show(500);
					$('#powertools').show(500);
					$('#generators').show(500);
					$('#htools').show(500);
					$('#measuring').show(500);
					$('#seeall18').show(500);
					//Dehomeappliances
					$('#vacuums').hide(500);
					$('#refrigerators').hide(500);
					$('#airconditioners').hide(500);
					$('#washingm').hide(500);
					$('#ovens').hide(500);
					$('#seeall14').hide(500);
					//De petsupplies
					$('#dogsupplies').hide(500);
					$('#catsupplies').hide(500);
					$('#sasupplies').hide(500);
					$('#birdsupplies').hide(500);
					$('#fishsupplies').hide(500);
					$('#seeall15').hide(500);
					//De kitchenaccesories
					$('#kitchensupplies').hide(500);
					$('#sinksandtaps').hide(500);
					$('#cookware').hide(500);
					$('#dinnerware').hide(500);
					$('#bbqa').hide(500);
					$('#seeall16').hide(500);
					//De furniture
					$('#shelves').hide(500);
					$('#mattresses').hide(500);
					$('#sofa').hide(500);
					$('#seats').hide(500);
					$('#tables').hide(500);
					$('#seeall17').hide(500);
				}
			});















































			$('#booksanddvds').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#books').hide(500);
						$('#miscbooks').hide(500);
						$('#childbooks').hide(500);
						$('#cookbooks').hide(500);
						$('#abooks').hide(500);
						$('#cbooks').hide(500);
						$('#seeall26').hide(500);
					$('#movies').hide(500);
						$('#miscmovies').hide(500);
						$('#tseries').hide(500);
						$('#amovies').hide(500);
						$('#cmovies').hide(500);
						$('#seeall27').hide(500);
					$('#music').hide(500);
						$('#mmusic').hide(500);
						$('#cmusic').hide(500);
						$('#rmusic').hide(500);
						$('#vrecords').hide(500);
						$('#hhmusic').hide(500);
						$('#seeall28').hide(500);
					$('#comicsandmagazines').hide(500);
						$('#magazines').hide(500);
						$('#comicbooks').hide(500);
						$('#seeall29').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#books').show(500);
					$('#movies').show(500);
					$('#music').show(500);
					$('#comicsandmagazines').show(500);
					//De electronics
					$('#electronics').removeClass('activado');
					$('#communication').hide(500);
						$('#mobile').hide(500);
						$('#smartwatches').hide(500);
						$('#mobileaccesories').hide(500);
						$('#twowayradios').hide(500);
						$('#phones').hide(500);
						$('#seeall').hide(500);
					$('#cameras').hide(500);
						$('#digitalcameras').hide(500);
						$('#camerasaccesories').hide(500);
						$('#drones').hide(500);
						$('#cameralenses').hide(500);
						$('#camcorders').hide(500);
						$('#seeall2').hide(500);
					$('#tv').hide(500);
						$('#tvs').hide(500);
						$('#settopboxes').hide(500);
						$('#blurayplayers').hide(500);
						$('#mediastreamingdevices').hide(500);
						$('#projectors').hide(500);
						$('#seeall3').hide(500);
					$('#homeaudio').hide(500);
						$('#headphones').hide(500);
						$('#speakers').hide(500);
						$('#radioplayers').hide(500);
						$('#hometheater').hide(500);
						$('#amplifier').hide(500);
						$('#seeall4').hide(500);
					$('#portableelectronics').hide(500);
						$('#portablespeaker').hide(500);
						$('#ebookreader').hide(500);
						$('#pdrecorders').hide(500);
						$('#pcdplayers').hide(500);
						$('#ebaccesories').hide(500);
						$('#seeall5').hide(500);
					$('#accesories').hide(500);
						$('#homesecurity').hide(500);
						$('#homeautomation').hide(500);
						$('#securitysystems').hide(500);
						$('#batteries').hide(500);
						$('#remotecontrol').hide(500);
						$('#seeall6').hide(500);
					$('#audiovisual').hide(500);
						$('#audioaccesories').hide(500);
						$('#studioequipment').hide(500);
						$('#avcables').hide(500);
						$('#seeall7').hide(500);
					$('#mobileelectronics').hide(500);
						$('#gpsdevices').hide(500);
						$('#gpsaccesories').hide(500);
						$('#mp3media').hide(500);
						$('#seeall8').hide(500);
					$('#musicalinstruments').hide(500);
						$('#musickeyboards').hide(500);
						$('#guitars').hide(500);
						$('#drums').hide(500);
						$('#iaccesories').hide(500);
						$('#violins').hide(500);
						$('#seeall9').hide(500);
					//De Kids and toys
					$('#kidsandtoys').removeClass('activado');
					$('#carriersandseats').hide(500);
						$('#strollers').hide(500);
						$('#babycarseats').hide(500);
						$('#babycarriers').hide(500);
						$('#seeall10').hide(500);
					$('#toysandgames').hide(500);
						$('#oa').hide(500);
						$('#educationaltoys').hide(500);
						$('#dolls').hide(500);
						$('#babytoys').hide(500);
						$('#buildingsm').hide(500);
						$('#seeall11').hide(500);
					$('#babycare').hide(500);
						$('#babyfurniture').hide(500);
						$('#babyaccesories').hide(500);
						$('#nursingandfeeding').hide(500);
						$('#bathandpotty').hide(500);
						$('#babbybedding').hide(500);
						$('#seeall12').hide(500);
					$('#schoolsupplies').hide(500);
						$('#schoolstationery').hide(500);
						$('#seeall13').hide(500);
					//De Home and Garden
					$('#homeandgarden').removeClass('activado');
					$('#homeappliances').hide(500);
						$('#vacuums').hide(500);
						$('#refrigerators').hide(500);
						$('#airconditioners').hide(500);
						$('#washingm').hide(500);
						$('#ovens').hide(500);
						$('#seeall14').hide(500);
					$('#petsupplies').hide(500);
						$('#dogsupplies').hide(500);
						$('#catsupplies').hide(500);
						$('#sasupplies').hide(500);
						$('#birdsupplies').hide(500);
						$('#fishsupplies').hide(500);
						$('#seeall15').hide(500);
					$('#kitchenaccesories').hide(500);
						$('#kitchensupplies').hide(500);
						$('#sinksandtaps').hide(500);
						$('#cookware').hide(500);
						$('#dinnerware').hide(500);
						$('#bbqa').hide(500);
						$('#seeall16').hide(500);
					$('#furniture').hide(500);
						$('#shelves').hide(500);
						$('#mattresses').hide(500);
						$('#sofa').hide(500);
						$('#seats').hide(500);
						$('#tables').hide(500);
						$('#seeall17').hide(500);
					$('#toolsandhardware').hide(500);
						$('#garden').hide(500);
						$('#powertools').hide(500);
						$('#generators').hide(500);
						$('#htools').hide(500);
						$('#measuring').hide(500);
						$('#seeall18').hide(500);
					//De computers
					$('#computers').removeClass('activado');
					$('#hardware').hide(500);
						$('#tablet').hide(500);
						$('#laptops').hide(500);
						$('#printers').hide(500);
						$('#monitors').hide(500);
						$('#desktops').hide(500);
						$('#seeall30').hide(500);
					$('#inputdevices').hide(500);
						$('#keyboards').hide(500);
						$('#mtb').hide(500);
						$('#microphones').hide(500);
						$('#gtablets').hide(500);
						$('#webcameras').hide(500);
						$('#seeall31').hide(500);
					$('#videogames').hide(500);
						$('#gconsoles').hide(500);
						$('#vreality').hide(500);
						$('#playstationgames').hide(500);
						$('#gamecontrollers').hide(500);
						$('#gamekeys').hide(500);
						$('#seeall32').hide(500);
					$('#software').hide(500);
						$('#bsoftware').hide(500);
						$('#santivirus').hide(500);
						$('#operatingsystems').hide(500);
						$('#gmultimedia').hide(500);
						$('#utilities').hide(500);
						$('#seeall33').hide(500);
					$('#computeraccesories').hide(500);
						$('#tabletaccesories').hide(500);
						$('#lbags').hide(500);
						$('#laccesories').hide(500);
						$('#computerspeakers').hide(500);
						$('#swarranty').hide(500);
						$('#seeall34').hide(500);
					//De cars and accesories
					$('#carsandaccesories').removeClass('activado');
					$('#autoparts').hide(500);
						$('#aeparts').hide(500);
						$('#4wdacc').hide(500);
						$('#carseats').hide(500);
						$('#carsuspensions').hide(500);
						$('#wandt').hide(500);
						$('#seeall39').hide(500);
					$('#caccesories').hide(500);
						$('#eca').hide(500);
						$('#cr').hide(500);
						$('#ica').hide(500);
						$('#ccs').hide(500);
						$('#ccp').hide(500);
						$('#seeall40').hide(500);
					$('#caraudio').hide(500);
						$('#cm').hide(500);
						$('#cs').hide(500);
						$('#ca').hide(500);
						$('#seeall41').hide(500);
					$('#motorbikesandquads').hide(500);
						$('#motorbik').hide(500);
						$('#motorbikes').hide(500);
						$('#seeall42').hide(500);
					$('#motorcars').hide(500);
						$('#newcars').hide(500);
						$('#seeall43').hide(500);
					//De fashion
					$('#fashion').removeClass('activado');
					$('#clothingaccesories').hide(500);
						$('#watches').hide(500);
						$('#bags').hide(500);
						$('#sunglasses').hide(500);
						$('#costumes').hide(500);
						$('#wallets').hide(500);
						$('#seeall44').hide(500);
					$('#shoes').hide(500);
						$('#mashoes').hide(500);
						$('#washoes').hide(500);
						$('#wboots').hide(500);
						$('#mcashualshoes').hide(500);
						$('#sandals').hide(500);
						$('#seeall45').hide(500);
					$('#womensclothing').hide(500);
						$('#fitnessclothing').hide(500);
						$('#dresses').hide(500);
						$('#swimwear').hide(500);
						$('#pants').hide(500);
						$('#tops').hide(500);
						$('#seeall46').hide(500);
					$('#mensclothing').hide(500);
						$('#sportswear').hide(500);
						$('#menstops').hide(500);
						$('#jackets').hide(500);
						$('#underwear').hide(500);
						$('#mpants').hide(500);
						$('#seeall47').hide(500);
					$('#womenlingerie').hide(500);
						$('#bras').hide(500);
						$('#hosiery').hide(500);
						$('#panties').hide(500);
						$('#shapwear').hide(500);
						$('#camisoles').hide(500);
						$('#seeall48').hide(500);
					//De office supplies
					$('#officesupplies').removeClass('activado');
					$('#officeequipments').hide(500);
						$('#officesuppliess').hide(500);
						$('#calculators').hide(500);
						$('#faxmachines').hide(500);
						$('#seeall51').hide(500);
					$('#officefurniture').hide(500);
						$('#obandstorage').hide(500);
						$('#officechairs').hide(500);
						$('#boardroom').hide(500);
						$('#desks').hide(500);
						$('#seeall52').hide(500);
					$('#posgear').hide(500);
						$('#posaccesories').hide(500);
						$('#rprinters').hide(500);
						$('#cashregisters').hide(500);
						$('#possystems').hide(500);
						$('#barcode').hide(500);
						$('#seeall53').hide(500);
					//De healthy and beauty
					$('#healthy').removeClass('activado');
					$('#fragancies').hide(500);
						$('#wperfume').hide(500);
						$('#mcologne').hide(500);
						$('#fragrance').hide(500);
						$('#aftershave').hide(500);
						$('#unisex').hide(500);
						$('#seeall54').hide(500);
					$('#personalcare').hide(500);
						$('#skincare').hide(500);
						$('#agedcare').hide(500);
						$('#haircare').hide(500);
						$('#shaving').hide(500);
						$('#oralcare').hide(500);
						$('#seeall55').hide(500);
					$('#cosmetics').hide(500);
						$('#facemakeup').hide(500);
						$('#eyemakeup').hide(500);
						$('#nails').hide(500);
						$('#makeup').hide(500);
						$('#lipmakeup').hide(500);
						$('#seeall56').hide(500);
					$('#grocery').hide(500);
						$('#organicfood').hide(500);
						$('#teaandcoffee').hide(500);
						$('#bandcfood').hide(500);
						$('#juices').hide(500);
						$('#dairyproducts').hide(500);
						$('#seeall57').hide(500);
					//De gifts and wine
					$('#giftsandwine').removeClass('activado');
					$('#beerwine').hide(500);
						$('#liquor').hide(500);
						$('#wines').hide(500);
						$('#beers').hide(500);
						$('#wine').hide(500);
						$('#liquora').hide(500);
						$('#seeall58').hide(500);
					$('#giftsandgadgets').hide(500);
						$('#collectables').hide(500);
						$('#ugifts').hide(500);
						$('#giftsforher').hide(500);
						$('#knives').hide(500);
						$('#giftsbabies').hide(500);
						$('#seeall59').hide(500);
					$('#desserts').hide(500);
						$('#g').hide(500);
						$('#f').hide(500);
						$('#pamper').hide(500);
						$('#seeall60').hide(500);
					$('#flowers').hide(500);
						$('#plants').hide(500);
						$('#arrangements').hide(500);
						$('#seeall61').hide(500);
					$('#wedding').hide(500);
						$('#waccesories').hide(500);
						$('#wgifts').hide(500);
						$('#seeall62').hide(500);
					//De sports and travel
					$('#sportsandtravel').removeClass('activado');
					$('#outdooradventure').hide(500);
						$('#campingequipment').hide(500);
						$('#luggage').hide(500);
						$('#tents').hide(500);
						$('#travelaccesories').hide(500);
						$('#backpacks').hide(500);
						$('#seeall63').hide(500);
					$('#gymandfitness').hide(500);
						$('#fatrackers').hide(500);
						$('#fitnessaccesories').hide(500);
						$('#treadmills').hide(500);
						$('#excercisebikes').hide(500);
						$('#seeall64').hide(500);
					$('#sportinggoods').hide(500);
						$('#fishing').hide(500);
						$('#bicyclea').hide(500);
						$('#bbicylce').hide(500);
						$('#boating').hide(500);
						$('#skate').hide(500);
						$('#seeall65').hide(500);
					$('#travel').hide(500);
						$('#holidaydeals').hide(500);
						$('#seeall66').hide(500);
				}
			});

			$('#books').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#miscbooks').hide(500);
					$('#childbooks').hide(500);
					$('#cookbooks').hide(500);
					$('#abooks').hide(500);
					$('#cbooks').hide(500);
					$('#seeall26').hide(500);
				}
				else{
					$(this).addClass('activado');
					//$('#books').removeClass('activado');
					$('#movies').removeClass('activado');
					$('#music').removeClass('activado');
					$('#comicsandmagazines').removeClass('activado');

					$('#miscbooks').show(500);
					$('#childbooks').show(500);
					$('#cookbooks').show(500);
					$('#abooks').show(500);
					$('#cbooks').show(500);
					$('#seeall26').show(500);
					//movies
					$('#miscmovies').hide(500);
					$('#tseries').hide(500);
					$('#amovies').hide(500);
					$('#cmovies').hide(500);
					$('#seeall27').hide(500);
					//music
					$('#mmusic').hide(500);
					$('#cmusic').hide(500);
					$('#rmusic').hide(500);
					$('#vrecords').hide(500);
					$('#hhmusic').hide(500);
					$('#seeall28').hide(500);
					//comicsandmagazines
					$('#magazines').hide(500);
					$('#comicbooks').hide(500);
					$('#seeall29').hide(500);					
				}
			});

			$('#movies').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#miscmovies').hide(500);
					$('#tseries').hide(500);
					$('#amovies').hide(500);
					$('#cmovies').hide(500);
					$('#seeall27').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#books').removeClass('activado');
					//$('#movies').removeClass('activado');
					$('#music').removeClass('activado');
					$('#comicsandmagazines').removeClass('activado');

					$('#miscmovies').show(500);
					$('#tseries').show(500);
					$('#amovies').show(500);
					$('#cmovies').show(500);
					$('#seeall27').show(500);
					//books
					$('#miscbooks').hide(500);
					$('#childbooks').hide(500);
					$('#cookbooks').hide(500);
					$('#abooks').hide(500);
					$('#cbooks').hide(500);
					$('#seeall26').hide(500);
					//music
					$('#mmusic').hide(500);
					$('#cmusic').hide(500);
					$('#rmusic').hide(500);
					$('#vrecords').hide(500);
					$('#hhmusic').hide(500);
					$('#seeall28').hide(500);
					//comicsandmagazines
					$('#magazines').hide(500);
					$('#comicbooks').hide(500);
					$('#seeall29').hide(500);					
				}
			});

			$('#music').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#mmusic').hide(500);
					$('#cmusic').hide(500);
					$('#rmusic').hide(500);
					$('#vrecords').hide(500);
					$('#hhmusic').hide(500);
					$('#seeall28').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#books').removeClass('activado');
					$('#movies').removeClass('activado');
					//$('#music').removeClass('activado');
					$('#comicsandmagazines').removeClass('activado');

					$('#mmusic').show(500);
					$('#cmusic').show(500);
					$('#rmusic').show(500);
					$('#vrecords').show(500);
					$('#hhmusic').show(500);
					$('#seeall28').show(500);
					//books
					$('#miscbooks').hide(500);
					$('#childbooks').hide(500);
					$('#cookbooks').hide(500);
					$('#abooks').hide(500);
					$('#cbooks').hide(500);
					$('#seeall26').hide(500);
					//movies
					$('#miscmovies').hide(500);
					$('#tseries').hide(500);
					$('#amovies').hide(500);
					$('#cmovies').hide(500);
					$('#seeall27').hide(500);
					//comicsandmagazines
					$('#magazines').hide(500);
					$('#comicbooks').hide(500);
					$('#seeall29').hide(500);					
				}
			});

			$('#comicsandmagazines').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#magazines').hide(500);
					$('#comicbooks').hide(500);
					$('#seeall29').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#books').removeClass('activado');
					$('#movies').removeClass('activado');
					$('#music').removeClass('activado');
					//$('#comicsandmagazines').removeClass('activado');

					$('#magazines').show(500);
					$('#comicbooks').show(500);
					$('#seeall29').show(500);
					//books
					$('#miscbooks').hide(500);
					$('#childbooks').hide(500);
					$('#cookbooks').hide(500);
					$('#abooks').hide(500);
					$('#cbooks').hide(500);
					$('#seeall26').hide(500);
					//movies
					$('#miscmovies').hide(500);
					$('#tseries').hide(500);
					$('#amovies').hide(500);
					$('#cmovies').hide(500);
					$('#seeall27').hide(500);
					//music
					$('#mmusic').hide(500);
					$('#cmusic').hide(500);
					$('#rmusic').hide(500);
					$('#vrecords').hide(500);
					$('#hhmusic').hide(500);
					$('#seeall28').hide(500);
				}
			});









			$('#computers').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#hardware').hide(500);
						$('#tablet').hide(500);
						$('#laptops').hide(500);
						$('#printers').hide(500);
						$('#monitors').hide(500);
						$('#desktops').hide(500);
						$('#seeall30').hide(500);
					$('#inputdevices').hide(500);
						$('#keyboards').hide(500);
						$('#mtb').hide(500);
						$('#microphones').hide(500);
						$('#gtablets').hide(500);
						$('#webcameras').hide(500);
						$('#seeall31').hide(500);
					$('#videogames').hide(500);
						$('#gconsoles').hide(500);
						$('#vreality').hide(500);
						$('#playstationgames').hide(500);
						$('#gamecontrollers').hide(500);
						$('#gamekeys').hide(500);
						$('#seeall32').hide(500);
					$('#software').hide(500);
						$('#bsoftware').hide(500);
						$('#santivirus').hide(500);
						$('#operatingsystems').hide(500);
						$('#gmultimedia').hide(500);
						$('#utilities').hide(500);
						$('#seeall33').hide(500);
					$('#computeraccesories').hide(500);
						$('#tabletaccesories').hide(500);
						$('#lbags').hide(500);
						$('#laccesories').hide(500);
						$('#computerspeakers').hide(500);
						$('#swarranty').hide(500);
						$('#seeall34').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#hardware').show(500);
					$('#inputdevices').show(500);
					$('#videogames').show(500);
					$('#software').show(500);
					$('#computeraccesories').show(500);
					//De electronics
					$('#electronics').removeClass('activado');
					$('#communication').hide(500);
						$('#mobile').hide(500);
						$('#smartwatches').hide(500);
						$('#mobileaccesories').hide(500);
						$('#twowayradios').hide(500);
						$('#phones').hide(500);
						$('#seeall').hide(500);
					$('#cameras').hide(500);
						$('#digitalcameras').hide(500);
						$('#camerasaccesories').hide(500);
						$('#drones').hide(500);
						$('#cameralenses').hide(500);
						$('#camcorders').hide(500);
						$('#seeall2').hide(500);
					$('#tv').hide(500);
						$('#tvs').hide(500);
						$('#settopboxes').hide(500);
						$('#blurayplayers').hide(500);
						$('#mediastreamingdevices').hide(500);
						$('#projectors').hide(500);
						$('#seeall3').hide(500);
					$('#homeaudio').hide(500);
						$('#headphones').hide(500);
						$('#speakers').hide(500);
						$('#radioplayers').hide(500);
						$('#hometheater').hide(500);
						$('#amplifier').hide(500);
						$('#seeall4').hide(500);
					$('#portableelectronics').hide(500);
						$('#portablespeaker').hide(500);
						$('#ebookreader').hide(500);
						$('#pdrecorders').hide(500);
						$('#pcdplayers').hide(500);
						$('#ebaccesories').hide(500);
						$('#seeall5').hide(500);
					$('#accesories').hide(500);
						$('#homesecurity').hide(500);
						$('#homeautomation').hide(500);
						$('#securitysystems').hide(500);
						$('#batteries').hide(500);
						$('#remotecontrol').hide(500);
						$('#seeall6').hide(500);
					$('#audiovisual').hide(500);
						$('#audioaccesories').hide(500);
						$('#studioequipment').hide(500);
						$('#avcables').hide(500);
						$('#seeall7').hide(500);
					$('#mobileelectronics').hide(500);
						$('#gpsdevices').hide(500);
						$('#gpsaccesories').hide(500);
						$('#mp3media').hide(500);
						$('#seeall8').hide(500);
					$('#musicalinstruments').hide(500);
						$('#musickeyboards').hide(500);
						$('#guitars').hide(500);
						$('#drums').hide(500);
						$('#iaccesories').hide(500);
						$('#violins').hide(500);
						$('#seeall9').hide(500);
					//De Kids and toys
					$('#kidsandtoys').removeClass('activado');
					$('#carriersandseats').hide(500);
						$('#strollers').hide(500);
						$('#babycarseats').hide(500);
						$('#babycarriers').hide(500);
						$('#seeall10').hide(500);
					$('#toysandgames').hide(500);
						$('#oa').hide(500);
						$('#educationaltoys').hide(500);
						$('#dolls').hide(500);
						$('#babytoys').hide(500);
						$('#buildingsm').hide(500);
						$('#seeall11').hide(500);
					$('#babycare').hide(500);
						$('#babyfurniture').hide(500);
						$('#babyaccesories').hide(500);
						$('#nursingandfeeding').hide(500);
						$('#bathandpotty').hide(500);
						$('#babbybedding').hide(500);
						$('#seeall12').hide(500);
					$('#schoolsupplies').hide(500);
						$('#schoolstationery').hide(500);
						$('#seeall13').hide(500);
					//De Home and Garden
					$('#homeandgarden').removeClass('activado');
					$('#homeappliances').hide(500);
						$('#vacuums').hide(500);
						$('#refrigerators').hide(500);
						$('#airconditioners').hide(500);
						$('#washingm').hide(500);
						$('#ovens').hide(500);
						$('#seeall14').hide(500);
					$('#petsupplies').hide(500);
						$('#dogsupplies').hide(500);
						$('#catsupplies').hide(500);
						$('#sasupplies').hide(500);
						$('#birdsupplies').hide(500);
						$('#fishsupplies').hide(500);
						$('#seeall15').hide(500);
					$('#kitchenaccesories').hide(500);
						$('#kitchensupplies').hide(500);
						$('#sinksandtaps').hide(500);
						$('#cookware').hide(500);
						$('#dinnerware').hide(500);
						$('#bbqa').hide(500);
						$('#seeall16').hide(500);
					$('#furniture').hide(500);
						$('#shelves').hide(500);
						$('#mattresses').hide(500);
						$('#sofa').hide(500);
						$('#seats').hide(500);
						$('#tables').hide(500);
						$('#seeall17').hide(500);
					$('#toolsandhardware').hide(500);
						$('#garden').hide(500);
						$('#powertools').hide(500);
						$('#generators').hide(500);
						$('#htools').hide(500);
						$('#measuring').hide(500);
						$('#seeall18').hide(500);
					//De Books & DVDs
					$('#booksanddvds').removeClass('activado');
					$('#books').hide(500);
						$('#miscbooks').hide(500);
						$('#childbooks').hide(500);
						$('#cookbooks').hide(500);
						$('#abooks').hide(500);
						$('#cbooks').hide(500);
						$('#seeall26').hide(500);
					$('#movies').hide(500);
						$('#miscmovies').hide(500);
						$('#tseries').hide(500);
						$('#amovies').hide(500);
						$('#cmovies').hide(500);
						$('#seeall27').hide(500);
					$('#music').hide(500);
						$('#mmusic').hide(500);
						$('#cmusic').hide(500);
						$('#rmusic').hide(500);
						$('#vrecords').hide(500);
						$('#hhmusic').hide(500);
						$('#seeall28').hide(500);
					$('#comicsandmagazines').hide(500);
						$('#magazines').hide(500);
						$('#comicbooks').hide(500);
						$('#seeall29').hide(500);
					//De cars and accesories
					$('#carsandaccesories').removeClass('activado');
					$('#autoparts').hide(500);
						$('#aeparts').hide(500);
						$('#4wdacc').hide(500);
						$('#carseats').hide(500);
						$('#carsuspensions').hide(500);
						$('#wandt').hide(500);
						$('#seeall39').hide(500);
					$('#caccesories').hide(500);
						$('#eca').hide(500);
						$('#cr').hide(500);
						$('#ica').hide(500);
						$('#ccs').hide(500);
						$('#ccp').hide(500);
						$('#seeall40').hide(500);
					$('#caraudio').hide(500);
						$('#cm').hide(500);
						$('#cs').hide(500);
						$('#ca').hide(500);
						$('#seeall41').hide(500);
					$('#motorbikesandquads').hide(500);
						$('#motorbik').hide(500);
						$('#motorbikes').hide(500);
						$('#seeall42').hide(500);
					$('#motorcars').hide(500);
						$('#newcars').hide(500);
						$('#seeall43').hide(500);
					//De fashion
					$('#fashion').removeClass('activado');
					$('#clothingaccesories').hide(500);
						$('#watches').hide(500);
						$('#bags').hide(500);
						$('#sunglasses').hide(500);
						$('#costumes').hide(500);
						$('#wallets').hide(500);
						$('#seeall44').hide(500);
					$('#shoes').hide(500);
						$('#mashoes').hide(500);
						$('#washoes').hide(500);
						$('#wboots').hide(500);
						$('#mcashualshoes').hide(500);
						$('#sandals').hide(500);
						$('#seeall45').hide(500);
					$('#womensclothing').hide(500);
						$('#fitnessclothing').hide(500);
						$('#dresses').hide(500);
						$('#swimwear').hide(500);
						$('#pants').hide(500);
						$('#tops').hide(500);
						$('#seeall46').hide(500);
					$('#mensclothing').hide(500);
						$('#sportswear').hide(500);
						$('#menstops').hide(500);
						$('#jackets').hide(500);
						$('#underwear').hide(500);
						$('#mpants').hide(500);
						$('#seeall47').hide(500);
					$('#womenlingerie').hide(500);
						$('#bras').hide(500);
						$('#hosiery').hide(500);
						$('#panties').hide(500);
						$('#shapwear').hide(500);
						$('#camisoles').hide(500);
						$('#seeall48').hide(500);
					//De office supplies
					$('#officesupplies').removeClass('activado');
					$('#officeequipments').hide(500);
						$('#officesuppliess').hide(500);
						$('#calculators').hide(500);
						$('#faxmachines').hide(500);
						$('#seeall51').hide(500);
					$('#officefurniture').hide(500);
						$('#obandstorage').hide(500);
						$('#officechairs').hide(500);
						$('#boardroom').hide(500);
						$('#desks').hide(500);
						$('#seeall52').hide(500);
					$('#posgear').hide(500);
						$('#posaccesories').hide(500);
						$('#rprinters').hide(500);
						$('#cashregisters').hide(500);
						$('#possystems').hide(500);
						$('#barcode').hide(500);
						$('#seeall53').hide(500);
					//De healthy and beauty
					$('#healthy').removeClass('activado');
					$('#fragancies').hide(500);
						$('#wperfume').hide(500);
						$('#mcologne').hide(500);
						$('#fragrance').hide(500);
						$('#aftershave').hide(500);
						$('#unisex').hide(500);
						$('#seeall54').hide(500);
					$('#personalcare').hide(500);
						$('#skincare').hide(500);
						$('#agedcare').hide(500);
						$('#haircare').hide(500);
						$('#shaving').hide(500);
						$('#oralcare').hide(500);
						$('#seeall55').hide(500);
					$('#cosmetics').hide(500);
						$('#facemakeup').hide(500);
						$('#eyemakeup').hide(500);
						$('#nails').hide(500);
						$('#makeup').hide(500);
						$('#lipmakeup').hide(500);
						$('#seeall56').hide(500);
					$('#grocery').hide(500);
						$('#organicfood').hide(500);
						$('#teaandcoffee').hide(500);
						$('#bandcfood').hide(500);
						$('#juices').hide(500);
						$('#dairyproducts').hide(500);
						$('#seeall57').hide(500);
					//De gifts and wine
					$('#giftsandwine').removeClass('activado');
					$('#beerwine').hide(500);
						$('#liquor').hide(500);
						$('#wines').hide(500);
						$('#beers').hide(500);
						$('#wine').hide(500);
						$('#liquora').hide(500);
						$('#seeall58').hide(500);
					$('#giftsandgadgets').hide(500);
						$('#collectables').hide(500);
						$('#ugifts').hide(500);
						$('#giftsforher').hide(500);
						$('#knives').hide(500);
						$('#giftsbabies').hide(500);
						$('#seeall59').hide(500);
					$('#desserts').hide(500);
						$('#g').hide(500);
						$('#f').hide(500);
						$('#pamper').hide(500);
						$('#seeall60').hide(500);
					$('#flowers').hide(500);
						$('#plants').hide(500);
						$('#arrangements').hide(500);
						$('#seeall61').hide(500);
					$('#wedding').hide(500);
						$('#waccesories').hide(500);
						$('#wgifts').hide(500);
						$('#seeall62').hide(500);
					//De sports and travel
					$('#sportsandtravel').removeClass('activado');
					$('#outdooradventure').hide(500);
						$('#campingequipment').hide(500);
						$('#luggage').hide(500);
						$('#tents').hide(500);
						$('#travelaccesories').hide(500);
						$('#backpacks').hide(500);
						$('#seeall63').hide(500);
					$('#gymandfitness').hide(500);
						$('#fatrackers').hide(500);
						$('#fitnessaccesories').hide(500);
						$('#treadmills').hide(500);
						$('#excercisebikes').hide(500);
						$('#seeall64').hide(500);
					$('#sportinggoods').hide(500);
						$('#fishing').hide(500);
						$('#bicyclea').hide(500);
						$('#bbicylce').hide(500);
						$('#boating').hide(500);
						$('#skate').hide(500);
						$('#seeall65').hide(500);
					$('#travel').hide(500);
						$('#holidaydeals').hide(500);
						$('#seeall66').hide(500);
				}
			});

			$('#hardware').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#tablet').hide(500);
					$('#laptops').hide(500);
					$('#printers').hide(500);
					$('#monitors').hide(500);
					$('#desktops').hide(500);
					$('#seeall30').hide(500);
				}
				else{
					$(this).addClass('activado');
					//$('#hardware').removeClass('activado');
					$('#inputdevices').removeClass('activado');
					$('#videogames').removeClass('activado');
					$('#software').removeClass('activado');
					$('#computeraccesories').removeClass('activado');

					$('#tablet').show(500);
					$('#laptops').show(500);
					$('#printers').show(500);
					$('#monitors').show(500);
					$('#desktops').show(500);
					$('#seeall30').show(500);
					//inputdevices
					$('#keyboards').hide(500);
					$('#mtb').hide(500);
					$('#microphones').hide(500);
					$('#gtablets').hide(500);
					$('#webcameras').hide(500);
					$('#seeall31').hide(500);
					//videogames
					$('#gconsoles').hide(500);
					$('#vreality').hide(500);
					$('#playstationgames').hide(500);
					$('#gamecontrollers').hide(500);
					$('#gamekeys').hide(500);
					$('#seeall32').hide(500);
					//software
					$('#bsoftware').hide(500);
					$('#santivirus').hide(500);
					$('#operatingsystems').hide(500);
					$('#gmultimedia').hide(500);
					$('#utilities').hide(500);
					$('#seeall33').hide(500);
					//computeraccesories
					$('#tabletaccesories').hide(500);
					$('#lbags').hide(500);
					$('#laccesories').hide(500);
					$('#computerspeakers').hide(500);
					$('#swarranty').hide(500);
					$('#seeall34').hide(500);
				}
			});

			$('#inputdevices').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#keyboards').hide(500);
					$('#mtb').hide(500);
					$('#microphones').hide(500);
					$('#gtablets').hide(500);
					$('#webcameras').hide(500);
					$('#seeall31').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#hardware').removeClass('activado');
					//$('#inputdevices').removeClass('activado');
					$('#videogames').removeClass('activado');
					$('#software').removeClass('activado');
					$('#computeraccesories').removeClass('activado');

					$('#keyboards').show(500);
					$('#mtb').show(500);
					$('#microphones').show(500);
					$('#gtablets').show(500);
					$('#webcameras').show(500);
					$('#seeall31').show(500);
					//hardware
					$('#tablet').hide(500);
					$('#laptops').hide(500);
					$('#printers').hide(500);
					$('#monitors').hide(500);
					$('#desktops').hide(500);
					$('#seeall30').hide(500);
					//videogames
					$('#gconsoles').hide(500);
					$('#vreality').hide(500);
					$('#playstationgames').hide(500);
					$('#gamecontrollers').hide(500);
					$('#gamekeys').hide(500);
					$('#seeall32').hide(500);
					//software
					$('#bsoftware').hide(500);
					$('#santivirus').hide(500);
					$('#operatingsystems').hide(500);
					$('#gmultimedia').hide(500);
					$('#utilities').hide(500);
					$('#seeall33').hide(500);
					//computeraccesories
					$('#tabletaccesories').hide(500);
					$('#lbags').hide(500);
					$('#laccesories').hide(500);
					$('#computerspeakers').hide(500);
					$('#swarranty').hide(500);
					$('#seeall34').hide(500);
				}
			});

			$('#videogames').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#gconsoles').hide(500);
					$('#vreality').hide(500);
					$('#playstationgames').hide(500);
					$('#gamecontrollers').hide(500);
					$('#gamekeys').hide(500);
					$('#seeall32').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#hardware').removeClass('activado');
					$('#inputdevices').removeClass('activado');
					//$('#videogames').removeClass('activado');
					$('#software').removeClass('activado');
					$('#computeraccesories').removeClass('activado');

					$('#gconsoles').show(500);
					$('#vreality').show(500);
					$('#playstationgames').show(500);
					$('#gamecontrollers').show(500);
					$('#gamekeys').show(500);
					$('#seeall32').show(500);
					//hardware
					$('#tablet').hide(500);
					$('#laptops').hide(500);
					$('#printers').hide(500);
					$('#monitors').hide(500);
					$('#desktops').hide(500);
					$('#seeall30').hide(500);
					//inputdevices
					$('#keyboards').hide(500);
					$('#mtb').hide(500);
					$('#microphones').hide(500);
					$('#gtablets').hide(500);
					$('#webcameras').hide(500);
					$('#seeall31').hide(500);
					//software
					$('#bsoftware').hide(500);
					$('#santivirus').hide(500);
					$('#operatingsystems').hide(500);
					$('#gmultimedia').hide(500);
					$('#utilities').hide(500);
					$('#seeall33').hide(500);
					//computeraccesories
					$('#tabletaccesories').hide(500);
					$('#lbags').hide(500);
					$('#laccesories').hide(500);
					$('#computerspeakers').hide(500);
					$('#swarranty').hide(500);
					$('#seeall34').hide(500);
				}
			});

			$('#software').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#bsoftware').hide(500);
					$('#santivirus').hide(500);
					$('#operatingsystems').hide(500);
					$('#gmultimedia').hide(500);
					$('#utilities').hide(500);
					$('#seeall33').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#hardware').removeClass('activado');
					$('#inputdevices').removeClass('activado');
					$('#videogames').removeClass('activado');
					//$('#software').removeClass('activado');
					$('#computeraccesories').removeClass('activado');

					$('#bsoftware').show(500);
					$('#santivirus').show(500);
					$('#operatingsystems').show(500);
					$('#gmultimedia').show(500);
					$('#utilities').show(500);
					$('#seeall33').show(500);
					//hardware
					$('#tablet').hide(500);
					$('#laptops').hide(500);
					$('#printers').hide(500);
					$('#monitors').hide(500);
					$('#desktops').hide(500);
					$('#seeall30').hide(500);
					//inputdevices
					$('#keyboards').hide(500);
					$('#mtb').hide(500);
					$('#microphones').hide(500);
					$('#gtablets').hide(500);
					$('#webcameras').hide(500);
					$('#seeall31').hide(500);
					//videogames
					$('#gconsoles').hide(500);
					$('#vreality').hide(500);
					$('#playstationgames').hide(500);
					$('#gamecontrollers').hide(500);
					$('#gamekeys').hide(500);
					$('#seeall32').hide(500);
					//computeraccesories
					$('#tabletaccesories').hide(500);
					$('#lbags').hide(500);
					$('#laccesories').hide(500);
					$('#computerspeakers').hide(500);
					$('#swarranty').hide(500);
					$('#seeall34').hide(500);
				}
			});

			$('#computeraccesories').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#tabletaccesories').hide(500);
					$('#lbags').hide(500);
					$('#laccesories').hide(500);
					$('#computerspeakers').hide(500);
					$('#swarranty').hide(500);
					$('#seeall34').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#hardware').removeClass('activado');
					$('#inputdevices').removeClass('activado');
					$('#videogames').removeClass('activado');
					$('#software').removeClass('activado');
					//$('#computeraccesories').removeClass('activado');

					$('#tabletaccesories').show(500);
					$('#lbags').show(500);
					$('#laccesories').show(500);
					$('#computerspeakers').show(500);
					$('#swarranty').show(500);
					$('#seeall34').show(500);
					//hardware
					$('#tablet').hide(500);
					$('#laptops').hide(500);
					$('#printers').hide(500);
					$('#monitors').hide(500);
					$('#desktops').hide(500);
					$('#seeall30').hide(500);
					//inputdevices
					$('#keyboards').hide(500);
					$('#mtb').hide(500);
					$('#microphones').hide(500);
					$('#gtablets').hide(500);
					$('#webcameras').hide(500);
					$('#seeall31').hide(500);
					//videogames
					$('#gconsoles').hide(500);
					$('#vreality').hide(500);
					$('#playstationgames').hide(500);
					$('#gamecontrollers').hide(500);
					$('#gamekeys').hide(500);
					$('#seeall32').hide(500);
					//software
					$('#bsoftware').hide(500);
					$('#santivirus').hide(500);
					$('#operatingsystems').hide(500);
					$('#gmultimedia').hide(500);
					$('#utilities').hide(500);
					$('#seeall33').hide(500);
				}
			});

















































			$('#carsandaccesories').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#autoparts').hide(500);
						$('#aeparts').hide(500);
						$('#4wdacc').hide(500);
						$('#carseats').hide(500);
						$('#carsuspensions').hide(500);
						$('#wandt').hide(500);
						$('#seeall39').hide(500);
					$('#caccesories').hide(500);
						$('#eca').hide(500);
						$('#cr').hide(500);
						$('#ica').hide(500);
						$('#ccs').hide(500);
						$('#ccp').hide(500);
						$('#seeall40').hide(500);
					$('#caraudio').hide(500);
						$('#cm').hide(500);
						$('#cs').hide(500);
						$('#ca').hide(500);
						$('#seeall41').hide(500);
					$('#motorbikesandquads').hide(500);
						$('#motorbik').hide(500);
						$('#motorbikes').hide(500);
						$('#seeall42').hide(500);
					$('#motorcars').hide(500);
						$('#newcars').hide(500);
						$('#seeall43').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#autoparts').show(500);
					$('#caccesories').show(500);
					$('#caraudio').show(500);
					$('#motorbikesandquads').show(500);
					$('#motorcars').show(500);
					//De electronics
					$('#electronics').removeClass('activado');
					$('#communication').hide(500);
						$('#mobile').hide(500);
						$('#smartwatches').hide(500);
						$('#mobileaccesories').hide(500);
						$('#twowayradios').hide(500);
						$('#phones').hide(500);
						$('#seeall').hide(500);
					$('#cameras').hide(500);
						$('#digitalcameras').hide(500);
						$('#camerasaccesories').hide(500);
						$('#drones').hide(500);
						$('#cameralenses').hide(500);
						$('#camcorders').hide(500);
						$('#seeall2').hide(500);
					$('#tv').hide(500);
						$('#tvs').hide(500);
						$('#settopboxes').hide(500);
						$('#blurayplayers').hide(500);
						$('#mediastreamingdevices').hide(500);
						$('#projectors').hide(500);
						$('#seeall3').hide(500);
					$('#homeaudio').hide(500);
						$('#headphones').hide(500);
						$('#speakers').hide(500);
						$('#radioplayers').hide(500);
						$('#hometheater').hide(500);
						$('#amplifier').hide(500);
						$('#seeall4').hide(500);
					$('#portableelectronics').hide(500);
						$('#portablespeaker').hide(500);
						$('#ebookreader').hide(500);
						$('#pdrecorders').hide(500);
						$('#pcdplayers').hide(500);
						$('#ebaccesories').hide(500);
						$('#seeall5').hide(500);
					$('#accesories').hide(500);
						$('#homesecurity').hide(500);
						$('#homeautomation').hide(500);
						$('#securitysystems').hide(500);
						$('#batteries').hide(500);
						$('#remotecontrol').hide(500);
						$('#seeall6').hide(500);
					$('#audiovisual').hide(500);
						$('#audioaccesories').hide(500);
						$('#studioequipment').hide(500);
						$('#avcables').hide(500);
						$('#seeall7').hide(500);
					$('#mobileelectronics').hide(500);
						$('#gpsdevices').hide(500);
						$('#gpsaccesories').hide(500);
						$('#mp3media').hide(500);
						$('#seeall8').hide(500);
					$('#musicalinstruments').hide(500);
						$('#musickeyboards').hide(500);
						$('#guitars').hide(500);
						$('#drums').hide(500);
						$('#iaccesories').hide(500);
						$('#violins').hide(500);
						$('#seeall9').hide(500);
					//De Kids and toys
					$('#kidsandtoys').removeClass('activado');
					$('#carriersandseats').hide(500);
						$('#strollers').hide(500);
						$('#babycarseats').hide(500);
						$('#babycarriers').hide(500);
						$('#seeall10').hide(500);
					$('#toysandgames').hide(500);
						$('#oa').hide(500);
						$('#educationaltoys').hide(500);
						$('#dolls').hide(500);
						$('#babytoys').hide(500);
						$('#buildingsm').hide(500);
						$('#seeall11').hide(500);
					$('#babycare').hide(500);
						$('#babyfurniture').hide(500);
						$('#babyaccesories').hide(500);
						$('#nursingandfeeding').hide(500);
						$('#bathandpotty').hide(500);
						$('#babbybedding').hide(500);
						$('#seeall12').hide(500);
					$('#schoolsupplies').hide(500);
						$('#schoolstationery').hide(500);
						$('#seeall13').hide(500);
					//De Home and Garden
					$('#homeandgarden').removeClass('activado');
					$('#homeappliances').hide(500);
						$('#vacuums').hide(500);
						$('#refrigerators').hide(500);
						$('#airconditioners').hide(500);
						$('#washingm').hide(500);
						$('#ovens').hide(500);
						$('#seeall14').hide(500);
					$('#petsupplies').hide(500);
						$('#dogsupplies').hide(500);
						$('#catsupplies').hide(500);
						$('#sasupplies').hide(500);
						$('#birdsupplies').hide(500);
						$('#fishsupplies').hide(500);
						$('#seeall15').hide(500);
					$('#kitchenaccesories').hide(500);
						$('#kitchensupplies').hide(500);
						$('#sinksandtaps').hide(500);
						$('#cookware').hide(500);
						$('#dinnerware').hide(500);
						$('#bbqa').hide(500);
						$('#seeall16').hide(500);
					$('#furniture').hide(500);
						$('#shelves').hide(500);
						$('#mattresses').hide(500);
						$('#sofa').hide(500);
						$('#seats').hide(500);
						$('#tables').hide(500);
						$('#seeall17').hide(500);
					$('#toolsandhardware').hide(500);
						$('#garden').hide(500);
						$('#powertools').hide(500);
						$('#generators').hide(500);
						$('#htools').hide(500);
						$('#measuring').hide(500);
						$('#seeall18').hide(500);
					//De Books & DVDs
					$('#booksanddvds').removeClass('activado');
					$('#books').hide(500);
						$('#miscbooks').hide(500);
						$('#childbooks').hide(500);
						$('#cookbooks').hide(500);
						$('#abooks').hide(500);
						$('#cbooks').hide(500);
						$('#seeall26').hide(500);
					$('#movies').hide(500);
						$('#miscmovies').hide(500);
						$('#tseries').hide(500);
						$('#amovies').hide(500);
						$('#cmovies').hide(500);
						$('#seeall27').hide(500);
					$('#music').hide(500);
						$('#mmusic').hide(500);
						$('#cmusic').hide(500);
						$('#rmusic').hide(500);
						$('#vrecords').hide(500);
						$('#hhmusic').hide(500);
						$('#seeall28').hide(500);
					$('#comicsandmagazines').hide(500);
						$('#magazines').hide(500);
						$('#comicbooks').hide(500);
						$('#seeall29').hide(500);
					//De computers
					$('#computers').removeClass('activado');
					$('#hardware').hide(500);
						$('#tablet').hide(500);
						$('#laptops').hide(500);
						$('#printers').hide(500);
						$('#monitors').hide(500);
						$('#desktops').hide(500);
						$('#seeall30').hide(500);
					$('#inputdevices').hide(500);
						$('#keyboards').hide(500);
						$('#mtb').hide(500);
						$('#microphones').hide(500);
						$('#gtablets').hide(500);
						$('#webcameras').hide(500);
						$('#seeall31').hide(500);
					$('#videogames').hide(500);
						$('#gconsoles').hide(500);
						$('#vreality').hide(500);
						$('#playstationgames').hide(500);
						$('#gamecontrollers').hide(500);
						$('#gamekeys').hide(500);
						$('#seeall32').hide(500);
					$('#software').hide(500);
						$('#bsoftware').hide(500);
						$('#santivirus').hide(500);
						$('#operatingsystems').hide(500);
						$('#gmultimedia').hide(500);
						$('#utilities').hide(500);
						$('#seeall33').hide(500);
					$('#computeraccesories').hide(500);
						$('#tabletaccesories').hide(500);
						$('#lbags').hide(500);
						$('#laccesories').hide(500);
						$('#computerspeakers').hide(500);
						$('#swarranty').hide(500);
						$('#seeall34').hide(500);
					//De fashion
					$('#fashion').removeClass('activado');
					$('#clothingaccesories').hide(500);
						$('#watches').hide(500);
						$('#bags').hide(500);
						$('#sunglasses').hide(500);
						$('#costumes').hide(500);
						$('#wallets').hide(500);
						$('#seeall44').hide(500);
					$('#shoes').hide(500);
						$('#mashoes').hide(500);
						$('#washoes').hide(500);
						$('#wboots').hide(500);
						$('#mcashualshoes').hide(500);
						$('#sandals').hide(500);
						$('#seeall45').hide(500);
					$('#womensclothing').hide(500);
						$('#fitnessclothing').hide(500);
						$('#dresses').hide(500);
						$('#swimwear').hide(500);
						$('#pants').hide(500);
						$('#tops').hide(500);
						$('#seeall46').hide(500);
					$('#mensclothing').hide(500);
						$('#sportswear').hide(500);
						$('#menstops').hide(500);
						$('#jackets').hide(500);
						$('#underwear').hide(500);
						$('#mpants').hide(500);
						$('#seeall47').hide(500);
					$('#womenlingerie').hide(500);
						$('#bras').hide(500);
						$('#hosiery').hide(500);
						$('#panties').hide(500);
						$('#shapwear').hide(500);
						$('#camisoles').hide(500);
						$('#seeall48').hide(500);
					//De office supplies
					$('#officesupplies').removeClass('activado');
					$('#officeequipments').hide(500);
						$('#officesuppliess').hide(500);
						$('#calculators').hide(500);
						$('#faxmachines').hide(500);
						$('#seeall51').hide(500);
					$('#officefurniture').hide(500);
						$('#obandstorage').hide(500);
						$('#officechairs').hide(500);
						$('#boardroom').hide(500);
						$('#desks').hide(500);
						$('#seeall52').hide(500);
					$('#posgear').hide(500);
						$('#posaccesories').hide(500);
						$('#rprinters').hide(500);
						$('#cashregisters').hide(500);
						$('#possystems').hide(500);
						$('#barcode').hide(500);
						$('#seeall53').hide(500);
					//De healthy and beauty
					$('#healthy').removeClass('activado');
					$('#fragancies').hide(500);
						$('#wperfume').hide(500);
						$('#mcologne').hide(500);
						$('#fragrance').hide(500);
						$('#aftershave').hide(500);
						$('#unisex').hide(500);
						$('#seeall54').hide(500);
					$('#personalcare').hide(500);
						$('#skincare').hide(500);
						$('#agedcare').hide(500);
						$('#haircare').hide(500);
						$('#shaving').hide(500);
						$('#oralcare').hide(500);
						$('#seeall55').hide(500);
					$('#cosmetics').hide(500);
						$('#facemakeup').hide(500);
						$('#eyemakeup').hide(500);
						$('#nails').hide(500);
						$('#makeup').hide(500);
						$('#lipmakeup').hide(500);
						$('#seeall56').hide(500);
					$('#grocery').hide(500);
						$('#organicfood').hide(500);
						$('#teaandcoffee').hide(500);
						$('#bandcfood').hide(500);
						$('#juices').hide(500);
						$('#dairyproducts').hide(500);
						$('#seeall57').hide(500);
					//De gifts and wine
					$('#giftsandwine').removeClass('activado');
					$('#beerwine').hide(500);
						$('#liquor').hide(500);
						$('#wines').hide(500);
						$('#beers').hide(500);
						$('#wine').hide(500);
						$('#liquora').hide(500);
						$('#seeall58').hide(500);
					$('#giftsandgadgets').hide(500);
						$('#collectables').hide(500);
						$('#ugifts').hide(500);
						$('#giftsforher').hide(500);
						$('#knives').hide(500);
						$('#giftsbabies').hide(500);
						$('#seeall59').hide(500);
					$('#desserts').hide(500);
						$('#g').hide(500);
						$('#f').hide(500);
						$('#pamper').hide(500);
						$('#seeall60').hide(500);
					$('#flowers').hide(500);
						$('#plants').hide(500);
						$('#arrangements').hide(500);
						$('#seeall61').hide(500);
					$('#wedding').hide(500);
						$('#waccesories').hide(500);
						$('#wgifts').hide(500);
						$('#seeall62').hide(500);
					//De sports and travel
					$('#sportsandtravel').removeClass('activado');
					$('#outdooradventure').hide(500);
						$('#campingequipment').hide(500);
						$('#luggage').hide(500);
						$('#tents').hide(500);
						$('#travelaccesories').hide(500);
						$('#backpacks').hide(500);
						$('#seeall63').hide(500);
					$('#gymandfitness').hide(500);
						$('#fatrackers').hide(500);
						$('#fitnessaccesories').hide(500);
						$('#treadmills').hide(500);
						$('#excercisebikes').hide(500);
						$('#seeall64').hide(500);
					$('#sportinggoods').hide(500);
						$('#fishing').hide(500);
						$('#bicyclea').hide(500);
						$('#bbicylce').hide(500);
						$('#boating').hide(500);
						$('#skate').hide(500);
						$('#seeall65').hide(500);
					$('#travel').hide(500);
						$('#holidaydeals').hide(500);
						$('#seeall66').hide(500);
				}
			});

			$('#autoparts').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#aeparts').hide(500);
					$('#4wdacc').hide(500);
					$('#carseats').hide(500);
					$('#carsuspensions').hide(500);
					$('#wandt').hide(500);
					$('#seeall39').hide(500);
				}
				else{
					$(this).addClass('activado');
					//$('#autoparts').removeClass('activado');
					$('#caccesories').removeClass('activado');
					$('#caraudio').removeClass('activado');
					$('#motorbikesandquads').removeClass('activado');
					$('#motorcars').removeClass('activado');

					$('#aeparts').show(500);
					$('#4wdacc').show(500);
					$('#carseats').show(500);
					$('#carsuspensions').show(500);
					$('#wandt').show(500);
					$('#seeall39').show(500);
					//caccesories
					$('#eca').hide(500);
					$('#cr').hide(500);
					$('#ica').hide(500);
					$('#ccs').hide(500);
					$('#ccp').hide(500);
					$('#seeall40').hide(500);
					//caraudio
					$('#cm').hide(500);
					$('#cs').hide(500);
					$('#ca').hide(500);
					$('#seeall41').hide(500);
					//motorbikesandquads
					$('#motorbik').hide(500);
					$('#motorbikes').hide(500);
					$('#seeall42').hide(500);
					//motorcars
					$('#newcars').hide(500);
					$('#seeall43').hide(500);
				}
			});

			$('#caccesories').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#eca').hide(500);
					$('#cr').hide(500);
					$('#ica').hide(500);
					$('#ccs').hide(500);
					$('#ccp').hide(500);
					$('#seeall40').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#autoparts').removeClass('activado');
					//$('#caccesories').removeClass('activado');
					$('#caraudio').removeClass('activado');
					$('#motorbikesandquads').removeClass('activado');
					$('#motorcars').removeClass('activado');

					$('#eca').show(500);
					$('#cr').show(500);
					$('#ica').show(500);
					$('#ccs').show(500);
					$('#ccp').show(500);
					$('#seeall40').show(500);
					//autoparts
					$('#aeparts').hide(500);
					$('#4wdacc').hide(500);
					$('#carseats').hide(500);
					$('#carsuspensions').hide(500);
					$('#wandt').hide(500);
					$('#seeall39').hide(500);
					//caraudio
					$('#cm').hide(500);
					$('#cs').hide(500);
					$('#ca').hide(500);
					$('#seeall41').hide(500);
					//motorbikesandquads
					$('#motorbik').hide(500);
					$('#motorbikes').hide(500);
					$('#seeall42').hide(500);
					//motorcars
					$('#newcars').hide(500);
					$('#seeall43').hide(500);
				}
			});

			$('#caraudio').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#cm').hide(500);
					$('#cs').hide(500);
					$('#ca').hide(500);
					$('#seeall41').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#autoparts').removeClass('activado');
					$('#caccesories').removeClass('activado');
					//$('#caraudio').removeClass('activado');
					$('#motorbikesandquads').removeClass('activado');
					$('#motorcars').removeClass('activado');

					$('#cm').show(500);
					$('#cs').show(500);
					$('#ca').show(500);
					$('#seeall41').show(500);
					//autoparts
					$('#aeparts').hide(500);
					$('#4wdacc').hide(500);
					$('#carseats').hide(500);
					$('#carsuspensions').hide(500);
					$('#wandt').hide(500);
					$('#seeall39').hide(500);
					//caccesories
					$('#eca').hide(500);
					$('#cr').hide(500);
					$('#ica').hide(500);
					$('#ccs').hide(500);
					$('#ccp').hide(500);
					$('#seeall40').hide(500);
					//motorbikesandquads
					$('#motorbik').hide(500);
					$('#motorbikes').hide(500);
					$('#seeall42').hide(500);
					//motorcars
					$('#newcars').hide(500);
					$('#seeall43').hide(500);
				}
			});

			$('#motorbikesandquads').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#motorbik').hide(500);
					$('#motorbikes').hide(500);
					$('#seeall42').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#autoparts').removeClass('activado');
					$('#caccesories').removeClass('activado');
					$('#caraudio').removeClass('activado');
					//$('#motorbikesandquads').removeClass('activado');
					$('#motorcars').removeClass('activado');

					$('#motorbik').show(500);
					$('#motorbikes').show(500);
					$('#seeall42').show(500);
					//autoparts
					$('#aeparts').hide(500);
					$('#4wdacc').hide(500);
					$('#carseats').hide(500);
					$('#carsuspensions').hide(500);
					$('#wandt').hide(500);
					$('#seeall39').hide(500);
					//caccesories
					$('#eca').hide(500);
					$('#cr').hide(500);
					$('#ica').hide(500);
					$('#ccs').hide(500);
					$('#ccp').hide(500);
					$('#seeall40').hide(500);
					//caraudio
					$('#cm').hide(500);
					$('#cs').hide(500);
					$('#ca').hide(500);
					$('#seeall41').hide(500);
					//motorcars
					$('#newcars').hide(500);
					$('#seeall43').hide(500);
				}
			});


			$('#motorcars').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#newcars').hide(500);
					$('#seeall43').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#autoparts').removeClass('activado');
					$('#caccesories').removeClass('activado');
					$('#caraudio').removeClass('activado');
					$('#motorbikesandquads').removeClass('activado');
					//$('#motorcars').removeClass('activado');

					$('#newcars').show(500);
					$('#seeall43').show(500);
					//autoparts
					$('#aeparts').hide(500);
					$('#4wdacc').hide(500);
					$('#carseats').hide(500);
					$('#carsuspensions').hide(500);
					$('#wandt').hide(500);
					$('#seeall39').hide(500);
					//caccesories
					$('#eca').hide(500);
					$('#cr').hide(500);
					$('#ica').hide(500);
					$('#ccs').hide(500);
					$('#ccp').hide(500);
					$('#seeall40').hide(500);
					//caraudio
					$('#cm').hide(500);
					$('#cs').hide(500);
					$('#ca').hide(500);
					$('#seeall41').hide(500);
					//motorbikesandquads
					$('#motorbik').hide(500);
					$('#motorbikes').hide(500);
					$('#seeall42').hide(500);					
				}
			});











			$('#fashion').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#clothingaccesories').hide(500);
						$('#watches').hide(500);
						$('#bags').hide(500);
						$('#sunglasses').hide(500);
						$('#costumes').hide(500);
						$('#wallets').hide(500);
						$('#seeall44').hide(500);
					$('#shoes').hide(500);
						$('#mashoes').hide(500);
						$('#washoes').hide(500);
						$('#wboots').hide(500);
						$('#mcashualshoes').hide(500);
						$('#sandals').hide(500);
						$('#seeall45').hide(500);
					$('#womensclothing').hide(500);
						$('#fitnessclothing').hide(500);
						$('#dresses').hide(500);
						$('#swimwear').hide(500);
						$('#pants').hide(500);
						$('#tops').hide(500);
						$('#seeall46').hide(500);
					$('#mensclothing').hide(500);
						$('#sportswear').hide(500);
						$('#menstops').hide(500);
						$('#jackets').hide(500);
						$('#underwear').hide(500);
						$('#mpants').hide(500);
						$('#seeall47').hide(500);
					$('#womenlingerie').hide(500);
						$('#bras').hide(500);
						$('#hosiery').hide(500);
						$('#panties').hide(500);
						$('#shapwear').hide(500);
						$('#camisoles').hide(500);
						$('#seeall48').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#clothingaccesories').show(500);
					$('#shoes').show(500);
					$('#womensclothing').show(500);
					$('#mensclothing').show(500);
					$('#womenlingerie').show(500);
					//De electronics
					$('#electronics').removeClass('activado');
					$('#communication').hide(500);
						$('#mobile').hide(500);
						$('#smartwatches').hide(500);
						$('#mobileaccesories').hide(500);
						$('#twowayradios').hide(500);
						$('#phones').hide(500);
						$('#seeall').hide(500);
					$('#cameras').hide(500);
						$('#digitalcameras').hide(500);
						$('#camerasaccesories').hide(500);
						$('#drones').hide(500);
						$('#cameralenses').hide(500);
						$('#camcorders').hide(500);
						$('#seeall2').hide(500);
					$('#tv').hide(500);
						$('#tvs').hide(500);
						$('#settopboxes').hide(500);
						$('#blurayplayers').hide(500);
						$('#mediastreamingdevices').hide(500);
						$('#projectors').hide(500);
						$('#seeall3').hide(500);
					$('#homeaudio').hide(500);
						$('#headphones').hide(500);
						$('#speakers').hide(500);
						$('#radioplayers').hide(500);
						$('#hometheater').hide(500);
						$('#amplifier').hide(500);
						$('#seeall4').hide(500);
					$('#portableelectronics').hide(500);
						$('#portablespeaker').hide(500);
						$('#ebookreader').hide(500);
						$('#pdrecorders').hide(500);
						$('#pcdplayers').hide(500);
						$('#ebaccesories').hide(500);
						$('#seeall5').hide(500);
					$('#accesories').hide(500);
						$('#homesecurity').hide(500);
						$('#homeautomation').hide(500);
						$('#securitysystems').hide(500);
						$('#batteries').hide(500);
						$('#remotecontrol').hide(500);
						$('#seeall6').hide(500);
					$('#audiovisual').hide(500);
						$('#audioaccesories').hide(500);
						$('#studioequipment').hide(500);
						$('#avcables').hide(500);
						$('#seeall7').hide(500);
					$('#mobileelectronics').hide(500);
						$('#gpsdevices').hide(500);
						$('#gpsaccesories').hide(500);
						$('#mp3media').hide(500);
						$('#seeall8').hide(500);
					$('#musicalinstruments').hide(500);
						$('#musickeyboards').hide(500);
						$('#guitars').hide(500);
						$('#drums').hide(500);
						$('#iaccesories').hide(500);
						$('#violins').hide(500);
						$('#seeall9').hide(500);
					//De Kids and toys
					$('#kidsandtoys').removeClass('activado');
					$('#carriersandseats').hide(500);
						$('#strollers').hide(500);
						$('#babycarseats').hide(500);
						$('#babycarriers').hide(500);
						$('#seeall10').hide(500);
					$('#toysandgames').hide(500);
						$('#oa').hide(500);
						$('#educationaltoys').hide(500);
						$('#dolls').hide(500);
						$('#babytoys').hide(500);
						$('#buildingsm').hide(500);
						$('#seeall11').hide(500);
					$('#babycare').hide(500);
						$('#babyfurniture').hide(500);
						$('#babyaccesories').hide(500);
						$('#nursingandfeeding').hide(500);
						$('#bathandpotty').hide(500);
						$('#babbybedding').hide(500);
						$('#seeall12').hide(500);
					$('#schoolsupplies').hide(500);
						$('#schoolstationery').hide(500);
						$('#seeall13').hide(500);
					//De Home and Garden
					$('#homeandgarden').removeClass('activado');
					$('#homeappliances').hide(500);
						$('#vacuums').hide(500);
						$('#refrigerators').hide(500);
						$('#airconditioners').hide(500);
						$('#washingm').hide(500);
						$('#ovens').hide(500);
						$('#seeall14').hide(500);
					$('#petsupplies').hide(500);
						$('#dogsupplies').hide(500);
						$('#catsupplies').hide(500);
						$('#sasupplies').hide(500);
						$('#birdsupplies').hide(500);
						$('#fishsupplies').hide(500);
						$('#seeall15').hide(500);
					$('#kitchenaccesories').hide(500);
						$('#kitchensupplies').hide(500);
						$('#sinksandtaps').hide(500);
						$('#cookware').hide(500);
						$('#dinnerware').hide(500);
						$('#bbqa').hide(500);
						$('#seeall16').hide(500);
					$('#furniture').hide(500);
						$('#shelves').hide(500);
						$('#mattresses').hide(500);
						$('#sofa').hide(500);
						$('#seats').hide(500);
						$('#tables').hide(500);
						$('#seeall17').hide(500);
					$('#toolsandhardware').hide(500);
						$('#garden').hide(500);
						$('#powertools').hide(500);
						$('#generators').hide(500);
						$('#htools').hide(500);
						$('#measuring').hide(500);
						$('#seeall18').hide(500);
					//De Books & DVDs
					$('#booksanddvds').removeClass('activado');
					$('#books').hide(500);
						$('#miscbooks').hide(500);
						$('#childbooks').hide(500);
						$('#cookbooks').hide(500);
						$('#abooks').hide(500);
						$('#cbooks').hide(500);
						$('#seeall26').hide(500);
					$('#movies').hide(500);
						$('#miscmovies').hide(500);
						$('#tseries').hide(500);
						$('#amovies').hide(500);
						$('#cmovies').hide(500);
						$('#seeall27').hide(500);
					$('#music').hide(500);
						$('#mmusic').hide(500);
						$('#cmusic').hide(500);
						$('#rmusic').hide(500);
						$('#vrecords').hide(500);
						$('#hhmusic').hide(500);
						$('#seeall28').hide(500);
					$('#comicsandmagazines').hide(500);
						$('#magazines').hide(500);
						$('#comicbooks').hide(500);
						$('#seeall29').hide(500);
					//De computers
					$('#computers').removeClass('activado');
					$('#hardware').hide(500);
						$('#tablet').hide(500);
						$('#laptops').hide(500);
						$('#printers').hide(500);
						$('#monitors').hide(500);
						$('#desktops').hide(500);
						$('#seeall30').hide(500);
					$('#inputdevices').hide(500);
						$('#keyboards').hide(500);
						$('#mtb').hide(500);
						$('#microphones').hide(500);
						$('#gtablets').hide(500);
						$('#webcameras').hide(500);
						$('#seeall31').hide(500);
					$('#videogames').hide(500);
						$('#gconsoles').hide(500);
						$('#vreality').hide(500);
						$('#playstationgames').hide(500);
						$('#gamecontrollers').hide(500);
						$('#gamekeys').hide(500);
						$('#seeall32').hide(500);
					$('#software').hide(500);
						$('#bsoftware').hide(500);
						$('#santivirus').hide(500);
						$('#operatingsystems').hide(500);
						$('#gmultimedia').hide(500);
						$('#utilities').hide(500);
						$('#seeall33').hide(500);
					$('#computeraccesories').hide(500);
						$('#tabletaccesories').hide(500);
						$('#lbags').hide(500);
						$('#laccesories').hide(500);
						$('#computerspeakers').hide(500);
						$('#swarranty').hide(500);
						$('#seeall34').hide(500);
					//De cars and accesories
					$('#carsandaccesories').removeClass('activado');
					$('#autoparts').hide(500);
						$('#aeparts').hide(500);
						$('#4wdacc').hide(500);
						$('#carseats').hide(500);
						$('#carsuspensions').hide(500);
						$('#wandt').hide(500);
						$('#seeall39').hide(500);
					$('#caccesories').hide(500);
						$('#eca').hide(500);
						$('#cr').hide(500);
						$('#ica').hide(500);
						$('#ccs').hide(500);
						$('#ccp').hide(500);
						$('#seeall40').hide(500);
					$('#caraudio').hide(500);
						$('#cm').hide(500);
						$('#cs').hide(500);
						$('#ca').hide(500);
						$('#seeall41').hide(500);
					$('#motorbikesandquads').hide(500);
						$('#motorbik').hide(500);
						$('#motorbikes').hide(500);
						$('#seeall42').hide(500);
					$('#motorcars').hide(500);
						$('#newcars').hide(500);
						$('#seeall43').hide(500);
					//De office supplies
					$('#officesupplies').removeClass('activado');
					$('#officeequipments').hide(500);
						$('#officesuppliess').hide(500);
						$('#calculators').hide(500);
						$('#faxmachines').hide(500);
						$('#seeall51').hide(500);
					$('#officefurniture').hide(500);
						$('#obandstorage').hide(500);
						$('#officechairs').hide(500);
						$('#boardroom').hide(500);
						$('#desks').hide(500);
						$('#seeall52').hide(500);
					$('#posgear').hide(500);
						$('#posaccesories').hide(500);
						$('#rprinters').hide(500);
						$('#cashregisters').hide(500);
						$('#possystems').hide(500);
						$('#barcode').hide(500);
						$('#seeall53').hide(500);
					//De healthy and beauty
					$('#healthy').removeClass('activado');
					$('#fragancies').hide(500);
						$('#wperfume').hide(500);
						$('#mcologne').hide(500);
						$('#fragrance').hide(500);
						$('#aftershave').hide(500);
						$('#unisex').hide(500);
						$('#seeall54').hide(500);
					$('#personalcare').hide(500);
						$('#skincare').hide(500);
						$('#agedcare').hide(500);
						$('#haircare').hide(500);
						$('#shaving').hide(500);
						$('#oralcare').hide(500);
						$('#seeall55').hide(500);
					$('#cosmetics').hide(500);
						$('#facemakeup').hide(500);
						$('#eyemakeup').hide(500);
						$('#nails').hide(500);
						$('#makeup').hide(500);
						$('#lipmakeup').hide(500);
						$('#seeall56').hide(500);
					$('#grocery').hide(500);
						$('#organicfood').hide(500);
						$('#teaandcoffee').hide(500);
						$('#bandcfood').hide(500);
						$('#juices').hide(500);
						$('#dairyproducts').hide(500);
						$('#seeall57').hide(500);
					//De gifts and wine
					$('#giftsandwine').removeClass('activado');
					$('#beerwine').hide(500);
						$('#liquor').hide(500);
						$('#wines').hide(500);
						$('#beers').hide(500);
						$('#wine').hide(500);
						$('#liquora').hide(500);
						$('#seeall58').hide(500);
					$('#giftsandgadgets').hide(500);
						$('#collectables').hide(500);
						$('#ugifts').hide(500);
						$('#giftsforher').hide(500);
						$('#knives').hide(500);
						$('#giftsbabies').hide(500);
						$('#seeall59').hide(500);
					$('#desserts').hide(500);
						$('#g').hide(500);
						$('#f').hide(500);
						$('#pamper').hide(500);
						$('#seeall60').hide(500);
					$('#flowers').hide(500);
						$('#plants').hide(500);
						$('#arrangements').hide(500);
						$('#seeall61').hide(500);
					$('#wedding').hide(500);
						$('#waccesories').hide(500);
						$('#wgifts').hide(500);
						$('#seeall62').hide(500);
					//De sports and travel
					$('#sportsandtravel').removeClass('activado');
					$('#outdooradventure').hide(500);
						$('#campingequipment').hide(500);
						$('#luggage').hide(500);
						$('#tents').hide(500);
						$('#travelaccesories').hide(500);
						$('#backpacks').hide(500);
						$('#seeall63').hide(500);
					$('#gymandfitness').hide(500);
						$('#fatrackers').hide(500);
						$('#fitnessaccesories').hide(500);
						$('#treadmills').hide(500);
						$('#excercisebikes').hide(500);
						$('#seeall64').hide(500);
					$('#sportinggoods').hide(500);
						$('#fishing').hide(500);
						$('#bicyclea').hide(500);
						$('#bbicylce').hide(500);
						$('#boating').hide(500);
						$('#skate').hide(500);
						$('#seeall65').hide(500);
					$('#travel').hide(500);
						$('#holidaydeals').hide(500);
						$('#seeall66').hide(500);
				}
			});

			$('#clothingaccesories').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#watches').hide(500);
					$('#bags').hide(500);
					$('#sunglasses').hide(500);
					$('#costumes').hide(500);
					$('#wallets').hide(500);
					$('#seeall44').hide(500);
				}
				else{
					$(this).addClass('activado');
					//$('#clothingaccesories').removeClass('activado');
					$('#shoes').removeClass('activado');
					$('#womensclothing').removeClass('activado');
					$('#mensclothing').removeClass('activado');
					$('#womenlingerie').removeClass('activado');

					$('#watches').show(500);
					$('#bags').show(500);
					$('#sunglasses').show(500);
					$('#costumes').show(500);
					$('#wallets').show(500);
					$('#seeall44').show(500);
					//shoes
					$('#mashoes').hide(500);
					$('#washoes').hide(500);
					$('#wboots').hide(500);
					$('#mcashualshoes').hide(500);
					$('#sandals').hide(500);
					$('#seeall45').hide(500);
					//womensclothing
					$('#fitnessclothing').hide(500);
					$('#dresses').hide(500);
					$('#swimwear').hide(500);
					$('#pants').hide(500);
					$('#tops').hide(500);
					$('#seeall46').hide(500);
					//mensclothing
					$('#sportswear').hide(500);
					$('#menstops').hide(500);
					$('#jackets').hide(500);
					$('#underwear').hide(500);
					$('#mpants').hide(500);
					$('#seeall47').hide(500);
					//womenlingerie	
					$('#bras').hide(500);
					$('#hosiery').hide(500);
					$('#panties').hide(500);
					$('#shapwear').hide(500);
					$('#camisoles').hide(500);
					$('#seeall48').hide(500);
				}
			});

			$('#shoes').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#mashoes').hide(500);
					$('#washoes').hide(500);
					$('#wboots').hide(500);
					$('#mcashualshoes').hide(500);
					$('#sandals').hide(500);
					$('#seeall45').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#clothingaccesories').removeClass('activado');
					//$('#shoes').removeClass('activado');
					$('#womensclothing').removeClass('activado');
					$('#mensclothing').removeClass('activado');
					$('#womenlingerie').removeClass('activado');

					$('#mashoes').show(500);
					$('#washoes').show(500);
					$('#wboots').show(500);
					$('#mcashualshoes').show(500);
					$('#sandals').show(500);
					$('#seeall45').show(500);
					//clothingaccesories
					$('#watches').hide(500);
					$('#bags').hide(500);
					$('#sunglasses').hide(500);
					$('#costumes').hide(500);
					$('#wallets').hide(500);
					$('#seeall44').hide(500);
					//womensclothing
					$('#fitnessclothing').hide(500);
					$('#dresses').hide(500);
					$('#swimwear').hide(500);
					$('#pants').hide(500);
					$('#tops').hide(500);
					$('#seeall46').hide(500);
					//mensclothing
					$('#sportswear').hide(500);
					$('#menstops').hide(500);
					$('#jackets').hide(500);
					$('#underwear').hide(500);
					$('#mpants').hide(500);
					$('#seeall47').hide(500);
					//womenlingerie
					$('#bras').hide(500);
					$('#hosiery').hide(500);
					$('#panties').hide(500);
					$('#shapwear').hide(500);
					$('#camisoles').hide(500);
					$('#seeall48').hide(500);
				}
			});

			$('#womensclothing').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#fitnessclothing').hide(500);
					$('#dresses').hide(500);
					$('#swimwear').hide(500);
					$('#pants').hide(500);
					$('#tops').hide(500);
					$('#seeall46').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#clothingaccesories').removeClass('activado');
					$('#shoes').removeClass('activado');
					//$('#womensclothing').removeClass('activado');
					$('#mensclothing').removeClass('activado');
					$('#womenlingerie').removeClass('activado');

					$('#fitnessclothing').show(500);
					$('#dresses').show(500);
					$('#swimwear').show(500);
					$('#pants').show(500);
					$('#tops').show(500);
					$('#seeall46').show(500);
					//clothingaccesories
					$('#watches').hide(500);
					$('#bags').hide(500);
					$('#sunglasses').hide(500);
					$('#costumes').hide(500);
					$('#wallets').hide(500);
					$('#seeall44').hide(500);
					//shoes
					$('#mashoes').hide(500);
					$('#washoes').hide(500);
					$('#wboots').hide(500);
					$('#mcashualshoes').hide(500);
					$('#sandals').hide(500);
					$('#seeall45').hide(500);
					//mensclothing
					$('#sportswear').hide(500);
					$('#menstops').hide(500);
					$('#jackets').hide(500);
					$('#underwear').hide(500);
					$('#mpants').hide(500);
					$('#seeall47').hide(500);
					//womenlingerie	
					$('#bras').hide(500);
					$('#hosiery').hide(500);
					$('#panties').hide(500);
					$('#shapwear').hide(500);
					$('#camisoles').hide(500);
					$('#seeall48').hide(500);
				}
			});

			$('#mensclothing').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#sportswear').hide(500);
					$('#menstops').hide(500);
					$('#jackets').hide(500);
					$('#underwear').hide(500);
					$('#mpants').hide(500);
					$('#seeall47').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#clothingaccesories').removeClass('activado');
					$('#shoes').removeClass('activado');
					$('#womensclothing').removeClass('activado');
					//$('#mensclothing').removeClass('activado');
					$('#womenlingerie').removeClass('activado');

					$('#sportswear').show(500);
					$('#menstops').show(500);
					$('#jackets').show(500);
					$('#underwear').show(500);
					$('#mpants').show(500);
					$('#seeall47').show(500);
					//clothingaccesories
					$('#watches').hide(500);
					$('#bags').hide(500);
					$('#sunglasses').hide(500);
					$('#costumes').hide(500);
					$('#wallets').hide(500);
					$('#seeall44').hide(500);
					//shoes
					$('#mashoes').hide(500);
					$('#washoes').hide(500);
					$('#wboots').hide(500);
					$('#mcashualshoes').hide(500);
					$('#sandals').hide(500);
					$('#seeall45').hide(500);
					//womensclothing
					$('#fitnessclothing').hide(500);
					$('#dresses').hide(500);
					$('#swimwear').hide(500);
					$('#pants').hide(500);
					$('#tops').hide(500);
					$('#seeall46').hide(500);
					//womenlingerie
					$('#bras').hide(500);
					$('#hosiery').hide(500);
					$('#panties').hide(500);
					$('#shapwear').hide(500);
					$('#camisoles').hide(500);
					$('#seeall48').hide(500);
				}
			});

			$('#womenlingerie').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#bras').hide(500);
					$('#hosiery').hide(500);
					$('#panties').hide(500);
					$('#shapwear').hide(500);
					$('#camisoles').hide(500);
					$('#seeall48').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#clothingaccesories').removeClass('activado');
					$('#shoes').removeClass('activado');
					$('#womensclothing').removeClass('activado');
					$('#mensclothing').removeClass('activado');
					//$('#womenlingerie').removeClass('activado');

					$('#bras').show(500);
					$('#hosiery').show(500);
					$('#panties').show(500);
					$('#shapwear').show(500);
					$('#camisoles').show(500);
					$('#seeall48').show(500);
					//clothingaccesories
					$('#watches').hide(500);
					$('#bags').hide(500);
					$('#sunglasses').hide(500);
					$('#costumes').hide(500);
					$('#wallets').hide(500);
					$('#seeall44').hide(500);
					//shoes
					$('#mashoes').hide(500);
					$('#washoes').hide(500);
					$('#wboots').hide(500);
					$('#mcashualshoes').hide(500);
					$('#sandals').hide(500);
					$('#seeall45').hide(500);
					//womensclothing
					$('#fitnessclothing').hide(500);
					$('#dresses').hide(500);
					$('#swimwear').hide(500);
					$('#pants').hide(500);
					$('#tops').hide(500);
					$('#seeall46').hide(500);
					//mensclothing	
					$('#sportswear').hide(500);
					$('#menstops').hide(500);
					$('#jackets').hide(500);
					$('#underwear').hide(500);
					$('#mpants').hide(500);
					$('#seeall47').hide(500);				
				}
			});

















































			$('#officesupplies').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#officeequipments').hide(500);
						$('#officesuppliess').hide(500);
						$('#calculators').hide(500);
						$('#faxmachines').hide(500);
						$('#seeall51').hide(500);
					$('#officefurniture').hide(500);
						$('#obandstorage').hide(500);
						$('#officechairs').hide(500);
						$('#boardroom').hide(500);
						$('#desks').hide(500);
						$('#seeall52').hide(500);
					$('#posgear').hide(500);
						$('#posaccesories').hide(500);
						$('#rprinters').hide(500);
						$('#cashregisters').hide(500);
						$('#possystems').hide(500);
						$('#barcode').hide(500);
						$('#seeall53').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#officeequipments').show(500);
					$('#officefurniture').show(500);
					$('#posgear').show(500);
					//De electronics
					$('#electronics').removeClass('activado');
					$('#communication').hide(500);
						$('#mobile').hide(500);
						$('#smartwatches').hide(500);
						$('#mobileaccesories').hide(500);
						$('#twowayradios').hide(500);
						$('#phones').hide(500);
						$('#seeall').hide(500);
					$('#cameras').hide(500);
						$('#digitalcameras').hide(500);
						$('#camerasaccesories').hide(500);
						$('#drones').hide(500);
						$('#cameralenses').hide(500);
						$('#camcorders').hide(500);
						$('#seeall2').hide(500);
					$('#tv').hide(500);
						$('#tvs').hide(500);
						$('#settopboxes').hide(500);
						$('#blurayplayers').hide(500);
						$('#mediastreamingdevices').hide(500);
						$('#projectors').hide(500);
						$('#seeall3').hide(500);
					$('#homeaudio').hide(500);
						$('#headphones').hide(500);
						$('#speakers').hide(500);
						$('#radioplayers').hide(500);
						$('#hometheater').hide(500);
						$('#amplifier').hide(500);
						$('#seeall4').hide(500);
					$('#portableelectronics').hide(500);
						$('#portablespeaker').hide(500);
						$('#ebookreader').hide(500);
						$('#pdrecorders').hide(500);
						$('#pcdplayers').hide(500);
						$('#ebaccesories').hide(500);
						$('#seeall5').hide(500);
					$('#accesories').hide(500);
						$('#homesecurity').hide(500);
						$('#homeautomation').hide(500);
						$('#securitysystems').hide(500);
						$('#batteries').hide(500);
						$('#remotecontrol').hide(500);
						$('#seeall6').hide(500);
					$('#audiovisual').hide(500);
						$('#audioaccesories').hide(500);
						$('#studioequipment').hide(500);
						$('#avcables').hide(500);
						$('#seeall7').hide(500);
					$('#mobileelectronics').hide(500);
						$('#gpsdevices').hide(500);
						$('#gpsaccesories').hide(500);
						$('#mp3media').hide(500);
						$('#seeall8').hide(500);
					$('#musicalinstruments').hide(500);
						$('#musickeyboards').hide(500);
						$('#guitars').hide(500);
						$('#drums').hide(500);
						$('#iaccesories').hide(500);
						$('#violins').hide(500);
						$('#seeall9').hide(500);
					//De Kids and toys
					$('#kidsandtoys').removeClass('activado');
					$('#carriersandseats').hide(500);
						$('#strollers').hide(500);
						$('#babycarseats').hide(500);
						$('#babycarriers').hide(500);
						$('#seeall10').hide(500);
					$('#toysandgames').hide(500);
						$('#oa').hide(500);
						$('#educationaltoys').hide(500);
						$('#dolls').hide(500);
						$('#babytoys').hide(500);
						$('#buildingsm').hide(500);
						$('#seeall11').hide(500);
					$('#babycare').hide(500);
						$('#babyfurniture').hide(500);
						$('#babyaccesories').hide(500);
						$('#nursingandfeeding').hide(500);
						$('#bathandpotty').hide(500);
						$('#babbybedding').hide(500);
						$('#seeall12').hide(500);
					$('#schoolsupplies').hide(500);
						$('#schoolstationery').hide(500);
						$('#seeall13').hide(500);
					//De Home and Garden
					$('#homeandgarden').removeClass('activado');
					$('#homeappliances').hide(500);
						$('#vacuums').hide(500);
						$('#refrigerators').hide(500);
						$('#airconditioners').hide(500);
						$('#washingm').hide(500);
						$('#ovens').hide(500);
						$('#seeall14').hide(500);
					$('#petsupplies').hide(500);
						$('#dogsupplies').hide(500);
						$('#catsupplies').hide(500);
						$('#sasupplies').hide(500);
						$('#birdsupplies').hide(500);
						$('#fishsupplies').hide(500);
						$('#seeall15').hide(500);
					$('#kitchenaccesories').hide(500);
						$('#kitchensupplies').hide(500);
						$('#sinksandtaps').hide(500);
						$('#cookware').hide(500);
						$('#dinnerware').hide(500);
						$('#bbqa').hide(500);
						$('#seeall16').hide(500);
					$('#furniture').hide(500);
						$('#shelves').hide(500);
						$('#mattresses').hide(500);
						$('#sofa').hide(500);
						$('#seats').hide(500);
						$('#tables').hide(500);
						$('#seeall17').hide(500);
					$('#toolsandhardware').hide(500);
						$('#garden').hide(500);
						$('#powertools').hide(500);
						$('#generators').hide(500);
						$('#htools').hide(500);
						$('#measuring').hide(500);
						$('#seeall18').hide(500);
					//De Books & DVDs
					$('#booksanddvds').removeClass('activado');
					$('#books').hide(500);
						$('#miscbooks').hide(500);
						$('#childbooks').hide(500);
						$('#cookbooks').hide(500);
						$('#abooks').hide(500);
						$('#cbooks').hide(500);
						$('#seeall26').hide(500);
					$('#movies').hide(500);
						$('#miscmovies').hide(500);
						$('#tseries').hide(500);
						$('#amovies').hide(500);
						$('#cmovies').hide(500);
						$('#seeall27').hide(500);
					$('#music').hide(500);
						$('#mmusic').hide(500);
						$('#cmusic').hide(500);
						$('#rmusic').hide(500);
						$('#vrecords').hide(500);
						$('#hhmusic').hide(500);
						$('#seeall28').hide(500);
					$('#comicsandmagazines').hide(500);
						$('#magazines').hide(500);
						$('#comicbooks').hide(500);
						$('#seeall29').hide(500);
					//De computers
					$('#computers').removeClass('activado');
					$('#hardware').hide(500);
						$('#tablet').hide(500);
						$('#laptops').hide(500);
						$('#printers').hide(500);
						$('#monitors').hide(500);
						$('#desktops').hide(500);
						$('#seeall30').hide(500);
					$('#inputdevices').hide(500);
						$('#keyboards').hide(500);
						$('#mtb').hide(500);
						$('#microphones').hide(500);
						$('#gtablets').hide(500);
						$('#webcameras').hide(500);
						$('#seeall31').hide(500);
					$('#videogames').hide(500);
						$('#gconsoles').hide(500);
						$('#vreality').hide(500);
						$('#playstationgames').hide(500);
						$('#gamecontrollers').hide(500);
						$('#gamekeys').hide(500);
						$('#seeall32').hide(500);
					$('#software').hide(500);
						$('#bsoftware').hide(500);
						$('#santivirus').hide(500);
						$('#operatingsystems').hide(500);
						$('#gmultimedia').hide(500);
						$('#utilities').hide(500);
						$('#seeall33').hide(500);
					$('#computeraccesories').hide(500);
						$('#tabletaccesories').hide(500);
						$('#lbags').hide(500);
						$('#laccesories').hide(500);
						$('#computerspeakers').hide(500);
						$('#swarranty').hide(500);
						$('#seeall34').hide(500);
					//De cars and accesories
					$('#carsandaccesories').removeClass('activado');
					$('#autoparts').hide(500);
						$('#aeparts').hide(500);
						$('#4wdacc').hide(500);
						$('#carseats').hide(500);
						$('#carsuspensions').hide(500);
						$('#wandt').hide(500);
						$('#seeall39').hide(500);
					$('#caccesories').hide(500);
						$('#eca').hide(500);
						$('#cr').hide(500);
						$('#ica').hide(500);
						$('#ccs').hide(500);
						$('#ccp').hide(500);
						$('#seeall40').hide(500);
					$('#caraudio').hide(500);
						$('#cm').hide(500);
						$('#cs').hide(500);
						$('#ca').hide(500);
						$('#seeall41').hide(500);
					$('#motorbikesandquads').hide(500);
						$('#motorbik').hide(500);
						$('#motorbikes').hide(500);
						$('#seeall42').hide(500);
					$('#motorcars').hide(500);
						$('#newcars').hide(500);
						$('#seeall43').hide(500);
					//De fashion
					$('#fashion').removeClass('activado');
					$('#clothingaccesories').hide(500);
						$('#watches').hide(500);
						$('#bags').hide(500);
						$('#sunglasses').hide(500);
						$('#costumes').hide(500);
						$('#wallets').hide(500);
						$('#seeall44').hide(500);
					$('#shoes').hide(500);
						$('#mashoes').hide(500);
						$('#washoes').hide(500);
						$('#wboots').hide(500);
						$('#mcashualshoes').hide(500);
						$('#sandals').hide(500);
						$('#seeall45').hide(500);
					$('#womensclothing').hide(500);
						$('#fitnessclothing').hide(500);
						$('#dresses').hide(500);
						$('#swimwear').hide(500);
						$('#pants').hide(500);
						$('#tops').hide(500);
						$('#seeall46').hide(500);
					$('#mensclothing').hide(500);
						$('#sportswear').hide(500);
						$('#menstops').hide(500);
						$('#jackets').hide(500);
						$('#underwear').hide(500);
						$('#mpants').hide(500);
						$('#seeall47').hide(500);
					$('#womenlingerie').hide(500);
						$('#bras').hide(500);
						$('#hosiery').hide(500);
						$('#panties').hide(500);
						$('#shapwear').hide(500);
						$('#camisoles').hide(500);
						$('#seeall48').hide(500);
					//De healthy and beauty
					$('#healthy').removeClass('activado');
					$('#fragancies').hide(500);
						$('#wperfume').hide(500);
						$('#mcologne').hide(500);
						$('#fragrance').hide(500);
						$('#aftershave').hide(500);
						$('#unisex').hide(500);
						$('#seeall54').hide(500);
					$('#personalcare').hide(500);
						$('#skincare').hide(500);
						$('#agedcare').hide(500);
						$('#haircare').hide(500);
						$('#shaving').hide(500);
						$('#oralcare').hide(500);
						$('#seeall55').hide(500);
					$('#cosmetics').hide(500);
						$('#facemakeup').hide(500);
						$('#eyemakeup').hide(500);
						$('#nails').hide(500);
						$('#makeup').hide(500);
						$('#lipmakeup').hide(500);
						$('#seeall56').hide(500);
					$('#grocery').hide(500);
						$('#organicfood').hide(500);
						$('#teaandcoffee').hide(500);
						$('#bandcfood').hide(500);
						$('#juices').hide(500);
						$('#dairyproducts').hide(500);
						$('#seeall57').hide(500);
					//De gifts and wine
					$('#giftsandwine').removeClass('activado');
					$('#beerwine').hide(500);
						$('#liquor').hide(500);
						$('#wines').hide(500);
						$('#beers').hide(500);
						$('#wine').hide(500);
						$('#liquora').hide(500);
						$('#seeall58').hide(500);
					$('#giftsandgadgets').hide(500);
						$('#collectables').hide(500);
						$('#ugifts').hide(500);
						$('#giftsforher').hide(500);
						$('#knives').hide(500);
						$('#giftsbabies').hide(500);
						$('#seeall59').hide(500);
					$('#desserts').hide(500);
						$('#g').hide(500);
						$('#f').hide(500);
						$('#pamper').hide(500);
						$('#seeall60').hide(500);
					$('#flowers').hide(500);
						$('#plants').hide(500);
						$('#arrangements').hide(500);
						$('#seeall61').hide(500);
					$('#wedding').hide(500);
						$('#waccesories').hide(500);
						$('#wgifts').hide(500);
						$('#seeall62').hide(500);
					//De sports and travel
					$('#sportsandtravel').removeClass('activado');
					$('#outdooradventure').hide(500);
						$('#campingequipment').hide(500);
						$('#luggage').hide(500);
						$('#tents').hide(500);
						$('#travelaccesories').hide(500);
						$('#backpacks').hide(500);
						$('#seeall63').hide(500);
					$('#gymandfitness').hide(500);
						$('#fatrackers').hide(500);
						$('#fitnessaccesories').hide(500);
						$('#treadmills').hide(500);
						$('#excercisebikes').hide(500);
						$('#seeall64').hide(500);
					$('#sportinggoods').hide(500);
						$('#fishing').hide(500);
						$('#bicyclea').hide(500);
						$('#bbicylce').hide(500);
						$('#boating').hide(500);
						$('#skate').hide(500);
						$('#seeall65').hide(500);
					$('#travel').hide(500);
						$('#holidaydeals').hide(500);
						$('#seeall66').hide(500);
				}
			});

			$('#officeequipments').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#officesuppliess').hide(500);
					$('#calculators').hide(500);
					$('#faxmachines').hide(500);
					$('#seeall51').hide(500);
				}
				else{
					$(this).addClass('activado');
					//$('#officeequipments').removeClass('activado');
					$('#officefurniture').removeClass('activado');
					$('#posgear').removeClass('activado');

					$('#officesuppliess').show(500);
					$('#calculators').show(500);
					$('#faxmachines').show(500);
					$('#seeall51').show(500);
					//officefurniture
					$('#obandstorage').hide(500);
					$('#officechairs').hide(500);
					$('#boardroom').hide(500);
					$('#desks').hide(500);
					$('#seeall52').hide(500);
					//posgear
					$('#posaccesories').hide(500);
					$('#rprinters').hide(500);
					$('#cashregisters').hide(500);
					$('#possystems').hide(500);
					$('#barcode').hide(500);
					$('#seeall53').hide(500);
				}
			});

			$('#officefurniture').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#obandstorage').hide(500);
					$('#officechairs').hide(500);
					$('#boardroom').hide(500);
					$('#desks').hide(500);
					$('#seeall52').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#officeequipments').removeClass('activado');
					//$('#officefurniture').removeClass('activado');
					$('#posgear').removeClass('activado');

					$('#obandstorage').show(500);
					$('#officechairs').show(500);
					$('#boardroom').show(500);
					$('#desks').show(500);
					$('#seeall52').show(500);
					//officeequipments
					$('#officesuppliess').hide(500);
					$('#calculators').hide(500);
					$('#faxmachines').hide(500);
					$('#seeall51').hide(500);
					//posgear
					$('#posaccesories').hide(500);
					$('#rprinters').hide(500);
					$('#cashregisters').hide(500);
					$('#possystems').hide(500);
					$('#barcode').hide(500);
					$('#seeall53').hide(500);
				}
			});

			$('#posgear').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#posaccesories').hide(500);
					$('#rprinters').hide(500);
					$('#cashregisters').hide(500);
					$('#possystems').hide(500);
					$('#barcode').hide(500);
					$('#seeall53').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#officeequipments').removeClass('activado');
					$('#officefurniture').removeClass('activado');
					//$('#posgear').removeClass('activado');

					$('#posaccesories').show(500);
					$('#rprinters').show(500);
					$('#cashregisters').show(500);
					$('#possystems').show(500);
					$('#barcode').show(500);
					$('#seeall53').show(500);
					//officeequipments
					$('#officesuppliess').hide(500);
					$('#calculators').hide(500);
					$('#faxmachines').hide(500);
					$('#seeall51').hide(500);
					//officefurniture
					$('#obandstorage').hide(500);
					$('#officechairs').hide(500);
					$('#boardroom').hide(500);
					$('#desks').hide(500);
					$('#seeall52').hide(500);
				}
			});






















			$('#healthy').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#fragancies').hide(500);
						$('#wperfume').hide(500);
						$('#mcologne').hide(500);
						$('#fragrance').hide(500);
						$('#aftershave').hide(500);
						$('#unisex').hide(500);
						$('#seeall54').hide(500);
					$('#personalcare').hide(500);
						$('#skincare').hide(500);
						$('#agedcare').hide(500);
						$('#haircare').hide(500);
						$('#shaving').hide(500);
						$('#oralcare').hide(500);
						$('#seeall55').hide(500);
					$('#cosmetics').hide(500);
						$('#facemakeup').hide(500);
						$('#eyemakeup').hide(500);
						$('#nails').hide(500);
						$('#makeup').hide(500);
						$('#lipmakeup').hide(500);
						$('#seeall56').hide(500);
					$('#grocery').hide(500);
						$('#organicfood').hide(500);
						$('#teaandcoffee').hide(500);
						$('#bandcfood').hide(500);
						$('#juices').hide(500);
						$('#dairyproducts').hide(500);
						$('#seeall57').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#fragancies').show(500);
					$('#personalcare').show(500);
					$('#cosmetics').show(500);
					$('#grocery').show(500);
					//De electronics
					$('#electronics').removeClass('activado');
					$('#communication').hide(500);
						$('#mobile').hide(500);
						$('#smartwatches').hide(500);
						$('#mobileaccesories').hide(500);
						$('#twowayradios').hide(500);
						$('#phones').hide(500);
						$('#seeall').hide(500);
					$('#cameras').hide(500);
						$('#digitalcameras').hide(500);
						$('#camerasaccesories').hide(500);
						$('#drones').hide(500);
						$('#cameralenses').hide(500);
						$('#camcorders').hide(500);
						$('#seeall2').hide(500);
					$('#tv').hide(500);
						$('#tvs').hide(500);
						$('#settopboxes').hide(500);
						$('#blurayplayers').hide(500);
						$('#mediastreamingdevices').hide(500);
						$('#projectors').hide(500);
						$('#seeall3').hide(500);
					$('#homeaudio').hide(500);
						$('#headphones').hide(500);
						$('#speakers').hide(500);
						$('#radioplayers').hide(500);
						$('#hometheater').hide(500);
						$('#amplifier').hide(500);
						$('#seeall4').hide(500);
					$('#portableelectronics').hide(500);
						$('#portablespeaker').hide(500);
						$('#ebookreader').hide(500);
						$('#pdrecorders').hide(500);
						$('#pcdplayers').hide(500);
						$('#ebaccesories').hide(500);
						$('#seeall5').hide(500);
					$('#accesories').hide(500);
						$('#homesecurity').hide(500);
						$('#homeautomation').hide(500);
						$('#securitysystems').hide(500);
						$('#batteries').hide(500);
						$('#remotecontrol').hide(500);
						$('#seeall6').hide(500);
					$('#audiovisual').hide(500);
						$('#audioaccesories').hide(500);
						$('#studioequipment').hide(500);
						$('#avcables').hide(500);
						$('#seeall7').hide(500);
					$('#mobileelectronics').hide(500);
						$('#gpsdevices').hide(500);
						$('#gpsaccesories').hide(500);
						$('#mp3media').hide(500);
						$('#seeall8').hide(500);
					$('#musicalinstruments').hide(500);
						$('#musickeyboards').hide(500);
						$('#guitars').hide(500);
						$('#drums').hide(500);
						$('#iaccesories').hide(500);
						$('#violins').hide(500);
						$('#seeall9').hide(500);
					//De Kids and toys
					$('#kidsandtoys').removeClass('activado');
					$('#carriersandseats').hide(500);
						$('#strollers').hide(500);
						$('#babycarseats').hide(500);
						$('#babycarriers').hide(500);
						$('#seeall10').hide(500);
					$('#toysandgames').hide(500);
						$('#oa').hide(500);
						$('#educationaltoys').hide(500);
						$('#dolls').hide(500);
						$('#babytoys').hide(500);
						$('#buildingsm').hide(500);
						$('#seeall11').hide(500);
					$('#babycare').hide(500);
						$('#babyfurniture').hide(500);
						$('#babyaccesories').hide(500);
						$('#nursingandfeeding').hide(500);
						$('#bathandpotty').hide(500);
						$('#babbybedding').hide(500);
						$('#seeall12').hide(500);
					$('#schoolsupplies').hide(500);
						$('#schoolstationery').hide(500);
						$('#seeall13').hide(500);
					//De Home and Garden
					$('#homeandgarden').removeClass('activado');
					$('#homeappliances').hide(500);
						$('#vacuums').hide(500);
						$('#refrigerators').hide(500);
						$('#airconditioners').hide(500);
						$('#washingm').hide(500);
						$('#ovens').hide(500);
						$('#seeall14').hide(500);
					$('#petsupplies').hide(500);
						$('#dogsupplies').hide(500);
						$('#catsupplies').hide(500);
						$('#sasupplies').hide(500);
						$('#birdsupplies').hide(500);
						$('#fishsupplies').hide(500);
						$('#seeall15').hide(500);
					$('#kitchenaccesories').hide(500);
						$('#kitchensupplies').hide(500);
						$('#sinksandtaps').hide(500);
						$('#cookware').hide(500);
						$('#dinnerware').hide(500);
						$('#bbqa').hide(500);
						$('#seeall16').hide(500);
					$('#furniture').hide(500);
						$('#shelves').hide(500);
						$('#mattresses').hide(500);
						$('#sofa').hide(500);
						$('#seats').hide(500);
						$('#tables').hide(500);
						$('#seeall17').hide(500);
					$('#toolsandhardware').hide(500);
						$('#garden').hide(500);
						$('#powertools').hide(500);
						$('#generators').hide(500);
						$('#htools').hide(500);
						$('#measuring').hide(500);
						$('#seeall18').hide(500);
					//De Books & DVDs
					$('#booksanddvds').removeClass('activado');
					$('#books').hide(500);
						$('#miscbooks').hide(500);
						$('#childbooks').hide(500);
						$('#cookbooks').hide(500);
						$('#abooks').hide(500);
						$('#cbooks').hide(500);
						$('#seeall26').hide(500);
					$('#movies').hide(500);
						$('#miscmovies').hide(500);
						$('#tseries').hide(500);
						$('#amovies').hide(500);
						$('#cmovies').hide(500);
						$('#seeall27').hide(500);
					$('#music').hide(500);
						$('#mmusic').hide(500);
						$('#cmusic').hide(500);
						$('#rmusic').hide(500);
						$('#vrecords').hide(500);
						$('#hhmusic').hide(500);
						$('#seeall28').hide(500);
					$('#comicsandmagazines').hide(500);
						$('#magazines').hide(500);
						$('#comicbooks').hide(500);
						$('#seeall29').hide(500);
					//De computers
					$('#computers').removeClass('activado');
					$('#hardware').hide(500);
						$('#tablet').hide(500);
						$('#laptops').hide(500);
						$('#printers').hide(500);
						$('#monitors').hide(500);
						$('#desktops').hide(500);
						$('#seeall30').hide(500);
					$('#inputdevices').hide(500);
						$('#keyboards').hide(500);
						$('#mtb').hide(500);
						$('#microphones').hide(500);
						$('#gtablets').hide(500);
						$('#webcameras').hide(500);
						$('#seeall31').hide(500);
					$('#videogames').hide(500);
						$('#gconsoles').hide(500);
						$('#vreality').hide(500);
						$('#playstationgames').hide(500);
						$('#gamecontrollers').hide(500);
						$('#gamekeys').hide(500);
						$('#seeall32').hide(500);
					$('#software').hide(500);
						$('#bsoftware').hide(500);
						$('#santivirus').hide(500);
						$('#operatingsystems').hide(500);
						$('#gmultimedia').hide(500);
						$('#utilities').hide(500);
						$('#seeall33').hide(500);
					$('#computeraccesories').hide(500);
						$('#tabletaccesories').hide(500);
						$('#lbags').hide(500);
						$('#laccesories').hide(500);
						$('#computerspeakers').hide(500);
						$('#swarranty').hide(500);
						$('#seeall34').hide(500);
					//De cars and accesories
					$('#carsandaccesories').removeClass('activado');
					$('#autoparts').hide(500);
						$('#aeparts').hide(500);
						$('#4wdacc').hide(500);
						$('#carseats').hide(500);
						$('#carsuspensions').hide(500);
						$('#wandt').hide(500);
						$('#seeall39').hide(500);
					$('#caccesories').hide(500);
						$('#eca').hide(500);
						$('#cr').hide(500);
						$('#ica').hide(500);
						$('#ccs').hide(500);
						$('#ccp').hide(500);
						$('#seeall40').hide(500);
					$('#caraudio').hide(500);
						$('#cm').hide(500);
						$('#cs').hide(500);
						$('#ca').hide(500);
						$('#seeall41').hide(500);
					$('#motorbikesandquads').hide(500);
						$('#motorbik').hide(500);
						$('#motorbikes').hide(500);
						$('#seeall42').hide(500);
					$('#motorcars').hide(500);
						$('#newcars').hide(500);
						$('#seeall43').hide(500);
					//De fashion
					$('#fashion').removeClass('activado');
					$('#clothingaccesories').hide(500);
						$('#watches').hide(500);
						$('#bags').hide(500);
						$('#sunglasses').hide(500);
						$('#costumes').hide(500);
						$('#wallets').hide(500);
						$('#seeall44').hide(500);
					$('#shoes').hide(500);
						$('#mashoes').hide(500);
						$('#washoes').hide(500);
						$('#wboots').hide(500);
						$('#mcashualshoes').hide(500);
						$('#sandals').hide(500);
						$('#seeall45').hide(500);
					$('#womensclothing').hide(500);
						$('#fitnessclothing').hide(500);
						$('#dresses').hide(500);
						$('#swimwear').hide(500);
						$('#pants').hide(500);
						$('#tops').hide(500);
						$('#seeall46').hide(500);
					$('#mensclothing').hide(500);
						$('#sportswear').hide(500);
						$('#menstops').hide(500);
						$('#jackets').hide(500);
						$('#underwear').hide(500);
						$('#mpants').hide(500);
						$('#seeall47').hide(500);
					$('#womenlingerie').hide(500);
						$('#bras').hide(500);
						$('#hosiery').hide(500);
						$('#panties').hide(500);
						$('#shapwear').hide(500);
						$('#camisoles').hide(500);
						$('#seeall48').hide(500);
					//De office supplies
					$('#officesupplies').removeClass('activado');
					$('#officeequipments').hide(500);
						$('#officesuppliess').hide(500);
						$('#calculators').hide(500);
						$('#faxmachines').hide(500);
						$('#seeall51').hide(500);
					$('#officefurniture').hide(500);
						$('#obandstorage').hide(500);
						$('#officechairs').hide(500);
						$('#boardroom').hide(500);
						$('#desks').hide(500);
						$('#seeall52').hide(500);
					$('#posgear').hide(500);
						$('#posaccesories').hide(500);
						$('#rprinters').hide(500);
						$('#cashregisters').hide(500);
						$('#possystems').hide(500);
						$('#barcode').hide(500);
						$('#seeall53').hide(500);
					//De gifts and wine
					$('#giftsandwine').removeClass('activado');
					$('#beerwine').hide(500);
						$('#liquor').hide(500);
						$('#wines').hide(500);
						$('#beers').hide(500);
						$('#wine').hide(500);
						$('#liquora').hide(500);
						$('#seeall58').hide(500);
					$('#giftsandgadgets').hide(500);
						$('#collectables').hide(500);
						$('#ugifts').hide(500);
						$('#giftsforher').hide(500);
						$('#knives').hide(500);
						$('#giftsbabies').hide(500);
						$('#seeall59').hide(500);
					$('#desserts').hide(500);
						$('#g').hide(500);
						$('#f').hide(500);
						$('#pamper').hide(500);
						$('#seeall60').hide(500);
					$('#flowers').hide(500);
						$('#plants').hide(500);
						$('#arrangements').hide(500);
						$('#seeall61').hide(500);
					$('#wedding').hide(500);
						$('#waccesories').hide(500);
						$('#wgifts').hide(500);
						$('#seeall62').hide(500);
					//De sports and travel
					$('#sportsandtravel').removeClass('activado');
					$('#outdooradventure').hide(500);
						$('#campingequipment').hide(500);
						$('#luggage').hide(500);
						$('#tents').hide(500);
						$('#travelaccesories').hide(500);
						$('#backpacks').hide(500);
						$('#seeall63').hide(500);
					$('#gymandfitness').hide(500);
						$('#fatrackers').hide(500);
						$('#fitnessaccesories').hide(500);
						$('#treadmills').hide(500);
						$('#excercisebikes').hide(500);
						$('#seeall64').hide(500);
					$('#sportinggoods').hide(500);
						$('#fishing').hide(500);
						$('#bicyclea').hide(500);
						$('#bbicylce').hide(500);
						$('#boating').hide(500);
						$('#skate').hide(500);
						$('#seeall65').hide(500);
					$('#travel').hide(500);
						$('#holidaydeals').hide(500);
						$('#seeall66').hide(500);
				}
			});

			$('#fragancies').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#wperfume').hide(500);
					$('#mcologne').hide(500);
					$('#fragrance').hide(500);
					$('#aftershave').hide(500);
					$('#unisex').hide(500);
					$('#seeall54').hide(500);
				}
				else{
					$(this).addClass('activado');
					//$('#fragancies').removeClass('activado');
					$('#personalcare').removeClass('activado');
					$('#cosmetics').removeClass('activado');
					$('#grocery').removeClass('activado');

					$('#wperfume').show(500);
					$('#mcologne').show(500);
					$('#fragrance').show(500);
					$('#aftershave').show(500);
					$('#unisex').show(500);
					$('#seeall54').show(500);
					//personalcare
					$('#skincare').hide(500);
					$('#agedcare').hide(500);
					$('#haircare').hide(500);
					$('#shaving').hide(500);
					$('#oralcare').hide(500);
					$('#seeall55').hide(500);
					//cosmetics
					$('#facemakeup').hide(500);
					$('#eyemakeup').hide(500);
					$('#nails').hide(500);
					$('#makeup').hide(500);
					$('#lipmakeup').hide(500);
					$('#seeall56').hide(500);
					//grocery
					$('#organicfood').hide(500);
					$('#teaandcoffee').hide(500);
					$('#bandcfood').hide(500);
					$('#juices').hide(500);
					$('#dairyproducts').hide(500);
					$('#seeall57').hide(500);
				}
			});

			$('#personalcare').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#skincare').hide(500);
					$('#agedcare').hide(500);
					$('#haircare').hide(500);
					$('#shaving').hide(500);
					$('#oralcare').hide(500);
					$('#seeall55').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#fragancies').removeClass('activado');
					//$('#personalcare').removeClass('activado');
					$('#cosmetics').removeClass('activado');
					$('#grocery').removeClass('activado');

					$('#skincare').show(500);
					$('#agedcare').show(500);
					$('#haircare').show(500);
					$('#shaving').show(500);
					$('#oralcare').show(500);
					$('#seeall55').show(500);
					//fragancies
					$('#wperfume').hide(500);
					$('#mcologne').hide(500);
					$('#fragrance').hide(500);
					$('#aftershave').hide(500);
					$('#unisex').hide(500);
					$('#seeall54').hide(500);
					//cosmetics
					$('#facemakeup').hide(500);
					$('#eyemakeup').hide(500);
					$('#nails').hide(500);
					$('#makeup').hide(500);
					$('#lipmakeup').hide(500);
					$('#seeall56').hide(500);
					//grocery
					$('#organicfood').hide(500);
					$('#teaandcoffee').hide(500);
					$('#bandcfood').hide(500);
					$('#juices').hide(500);
					$('#dairyproducts').hide(500);
					$('#seeall57').hide(500);
				}
			});

			$('#cosmetics').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#facemakeup').hide(500);
					$('#eyemakeup').hide(500);
					$('#nails').hide(500);
					$('#makeup').hide(500);
					$('#lipmakeup').hide(500);
					$('#seeall56').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#fragancies').removeClass('activado');
					$('#personalcare').removeClass('activado');
					//$('#cosmetics').removeClass('activado');
					$('#grocery').removeClass('activado');

					$('#facemakeup').show(500);
					$('#eyemakeup').show(500);
					$('#nails').show(500);
					$('#makeup').show(500);
					$('#lipmakeup').show(500);
					$('#seeall56').show(500);
					//fragancies
					$('#wperfume').hide(500);
					$('#mcologne').hide(500);
					$('#fragrance').hide(500);
					$('#aftershave').hide(500);
					$('#unisex').hide(500);
					$('#seeall54').hide(500);
					//personalcare
					$('#skincare').hide(500);
					$('#agedcare').hide(500);
					$('#haircare').hide(500);
					$('#shaving').hide(500);
					$('#oralcare').hide(500);
					$('#seeall55').hide(500);
					//grocery
					$('#organicfood').hide(500);
					$('#teaandcoffee').hide(500);
					$('#bandcfood').hide(500);
					$('#juices').hide(500);
					$('#dairyproducts').hide(500);
					$('#seeall57').hide(500);
				}
			});

			$('#grocery').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#organicfood').hide(500);
					$('#teaandcoffee').hide(500);
					$('#bandcfood').hide(500);
					$('#juices').hide(500);
					$('#dairyproducts').hide(500);
					$('#seeall57').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#fragancies').removeClass('activado');
					$('#personalcare').removeClass('activado');
					$('#cosmetics').removeClass('activado');
					//$('#grocery').removeClass('activado');

					$('#organicfood').show(500);
					$('#teaandcoffee').show(500);
					$('#bandcfood').show(500);
					$('#juices').show(500);
					$('#dairyproducts').show(500);
					$('#seeall57').show(500);
					//fragancies
					$('#wperfume').hide(500);
					$('#mcologne').hide(500);
					$('#fragrance').hide(500);
					$('#aftershave').hide(500);
					$('#unisex').hide(500);
					$('#seeall54').hide(500);
					//personalcare
					$('#skincare').hide(500);
					$('#agedcare').hide(500);
					$('#haircare').hide(500);
					$('#shaving').hide(500);
					$('#oralcare').hide(500);
					$('#seeall55').hide(500);
					//cosmetics
					$('#facemakeup').hide(500);
					$('#eyemakeup').hide(500);
					$('#nails').hide(500);
					$('#makeup').hide(500);
					$('#lipmakeup').hide(500);
					$('#seeall56').hide(500);
				}
			});



































			$('#giftsandwine').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#beerwine').hide(500);
						$('#liquor').hide(500);
						$('#wines').hide(500);
						$('#beers').hide(500);
						$('#wine').hide(500);
						$('#liquora').hide(500);
						$('#seeall58').hide(500);
					$('#giftsandgadgets').hide(500);
						$('#collectables').hide(500);
						$('#ugifts').hide(500);
						$('#giftsforher').hide(500);
						$('#knives').hide(500);
						$('#giftsbabies').hide(500);
						$('#seeall59').hide(500);
					$('#desserts').hide(500);
						$('#g').hide(500);
						$('#f').hide(500);
						$('#pamper').hide(500);
						$('#seeall60').hide(500);
					$('#flowers').hide(500);
						$('#plants').hide(500);
						$('#arrangements').hide(500);
						$('#seeall61').hide(500);
					$('#wedding').hide(500);
						$('#waccesories').hide(500);
						$('#wgifts').hide(500);
						$('#seeall62').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#beerwine').show(500);
					$('#giftsandgadgets').show(500);
					$('#desserts').show(500);
					$('#flowers').show(500);
					$('#wedding').show(500);
					//De electronics
					$('#electronics').removeClass('activado');
					$('#communication').hide(500);
						$('#mobile').hide(500);
						$('#smartwatches').hide(500);
						$('#mobileaccesories').hide(500);
						$('#twowayradios').hide(500);
						$('#phones').hide(500);
						$('#seeall').hide(500);
					$('#cameras').hide(500);
						$('#digitalcameras').hide(500);
						$('#camerasaccesories').hide(500);
						$('#drones').hide(500);
						$('#cameralenses').hide(500);
						$('#camcorders').hide(500);
						$('#seeall2').hide(500);
					$('#tv').hide(500);
						$('#tvs').hide(500);
						$('#settopboxes').hide(500);
						$('#blurayplayers').hide(500);
						$('#mediastreamingdevices').hide(500);
						$('#projectors').hide(500);
						$('#seeall3').hide(500);
					$('#homeaudio').hide(500);
						$('#headphones').hide(500);
						$('#speakers').hide(500);
						$('#radioplayers').hide(500);
						$('#hometheater').hide(500);
						$('#amplifier').hide(500);
						$('#seeall4').hide(500);
					$('#portableelectronics').hide(500);
						$('#portablespeaker').hide(500);
						$('#ebookreader').hide(500);
						$('#pdrecorders').hide(500);
						$('#pcdplayers').hide(500);
						$('#ebaccesories').hide(500);
						$('#seeall5').hide(500);
					$('#accesories').hide(500);
						$('#homesecurity').hide(500);
						$('#homeautomation').hide(500);
						$('#securitysystems').hide(500);
						$('#batteries').hide(500);
						$('#remotecontrol').hide(500);
						$('#seeall6').hide(500);
					$('#audiovisual').hide(500);
						$('#audioaccesories').hide(500);
						$('#studioequipment').hide(500);
						$('#avcables').hide(500);
						$('#seeall7').hide(500);
					$('#mobileelectronics').hide(500);
						$('#gpsdevices').hide(500);
						$('#gpsaccesories').hide(500);
						$('#mp3media').hide(500);
						$('#seeall8').hide(500);
					$('#musicalinstruments').hide(500);
						$('#musickeyboards').hide(500);
						$('#guitars').hide(500);
						$('#drums').hide(500);
						$('#iaccesories').hide(500);
						$('#violins').hide(500);
						$('#seeall9').hide(500);
					//De Kids and toys
					$('#kidsandtoys').removeClass('activado');
					$('#carriersandseats').hide(500);
						$('#strollers').hide(500);
						$('#babycarseats').hide(500);
						$('#babycarriers').hide(500);
						$('#seeall10').hide(500);
					$('#toysandgames').hide(500);
						$('#oa').hide(500);
						$('#educationaltoys').hide(500);
						$('#dolls').hide(500);
						$('#babytoys').hide(500);
						$('#buildingsm').hide(500);
						$('#seeall11').hide(500);
					$('#babycare').hide(500);
						$('#babyfurniture').hide(500);
						$('#babyaccesories').hide(500);
						$('#nursingandfeeding').hide(500);
						$('#bathandpotty').hide(500);
						$('#babbybedding').hide(500);
						$('#seeall12').hide(500);
					$('#schoolsupplies').hide(500);
						$('#schoolstationery').hide(500);
						$('#seeall13').hide(500);
					//De Home and Garden
					$('#homeandgarden').removeClass('activado');
					$('#homeappliances').hide(500);
						$('#vacuums').hide(500);
						$('#refrigerators').hide(500);
						$('#airconditioners').hide(500);
						$('#washingm').hide(500);
						$('#ovens').hide(500);
						$('#seeall14').hide(500);
					$('#petsupplies').hide(500);
						$('#dogsupplies').hide(500);
						$('#catsupplies').hide(500);
						$('#sasupplies').hide(500);
						$('#birdsupplies').hide(500);
						$('#fishsupplies').hide(500);
						$('#seeall15').hide(500);
					$('#kitchenaccesories').hide(500);
						$('#kitchensupplies').hide(500);
						$('#sinksandtaps').hide(500);
						$('#cookware').hide(500);
						$('#dinnerware').hide(500);
						$('#bbqa').hide(500);
						$('#seeall16').hide(500);
					$('#furniture').hide(500);
						$('#shelves').hide(500);
						$('#mattresses').hide(500);
						$('#sofa').hide(500);
						$('#seats').hide(500);
						$('#tables').hide(500);
						$('#seeall17').hide(500);
					$('#toolsandhardware').hide(500);
						$('#garden').hide(500);
						$('#powertools').hide(500);
						$('#generators').hide(500);
						$('#htools').hide(500);
						$('#measuring').hide(500);
						$('#seeall18').hide(500);
					//De Books & DVDs
					$('#booksanddvds').removeClass('activado');
					$('#books').hide(500);
						$('#miscbooks').hide(500);
						$('#childbooks').hide(500);
						$('#cookbooks').hide(500);
						$('#abooks').hide(500);
						$('#cbooks').hide(500);
						$('#seeall26').hide(500);
					$('#movies').hide(500);
						$('#miscmovies').hide(500);
						$('#tseries').hide(500);
						$('#amovies').hide(500);
						$('#cmovies').hide(500);
						$('#seeall27').hide(500);
					$('#music').hide(500);
						$('#mmusic').hide(500);
						$('#cmusic').hide(500);
						$('#rmusic').hide(500);
						$('#vrecords').hide(500);
						$('#hhmusic').hide(500);
						$('#seeall28').hide(500);
					$('#comicsandmagazines').hide(500);
						$('#magazines').hide(500);
						$('#comicbooks').hide(500);
						$('#seeall29').hide(500);
					//De computers
					$('#computers').removeClass('activado');
					$('#hardware').hide(500);
						$('#tablet').hide(500);
						$('#laptops').hide(500);
						$('#printers').hide(500);
						$('#monitors').hide(500);
						$('#desktops').hide(500);
						$('#seeall30').hide(500);
					$('#inputdevices').hide(500);
						$('#keyboards').hide(500);
						$('#mtb').hide(500);
						$('#microphones').hide(500);
						$('#gtablets').hide(500);
						$('#webcameras').hide(500);
						$('#seeall31').hide(500);
					$('#videogames').hide(500);
						$('#gconsoles').hide(500);
						$('#vreality').hide(500);
						$('#playstationgames').hide(500);
						$('#gamecontrollers').hide(500);
						$('#gamekeys').hide(500);
						$('#seeall32').hide(500);
					$('#software').hide(500);
						$('#bsoftware').hide(500);
						$('#santivirus').hide(500);
						$('#operatingsystems').hide(500);
						$('#gmultimedia').hide(500);
						$('#utilities').hide(500);
						$('#seeall33').hide(500);
					$('#computeraccesories').hide(500);
						$('#tabletaccesories').hide(500);
						$('#lbags').hide(500);
						$('#laccesories').hide(500);
						$('#computerspeakers').hide(500);
						$('#swarranty').hide(500);
						$('#seeall34').hide(500);
					//De cars and accesories
					$('#carsandaccesories').removeClass('activado');
					$('#autoparts').hide(500);
						$('#aeparts').hide(500);
						$('#4wdacc').hide(500);
						$('#carseats').hide(500);
						$('#carsuspensions').hide(500);
						$('#wandt').hide(500);
						$('#seeall39').hide(500);
					$('#caccesories').hide(500);
						$('#eca').hide(500);
						$('#cr').hide(500);
						$('#ica').hide(500);
						$('#ccs').hide(500);
						$('#ccp').hide(500);
						$('#seeall40').hide(500);
					$('#caraudio').hide(500);
						$('#cm').hide(500);
						$('#cs').hide(500);
						$('#ca').hide(500);
						$('#seeall41').hide(500);
					$('#motorbikesandquads').hide(500);
						$('#motorbik').hide(500);
						$('#motorbikes').hide(500);
						$('#seeall42').hide(500);
					$('#motorcars').hide(500);
						$('#newcars').hide(500);
						$('#seeall43').hide(500);
					//De fashion
					$('#fashion').removeClass('activado');
					$('#clothingaccesories').hide(500);
						$('#watches').hide(500);
						$('#bags').hide(500);
						$('#sunglasses').hide(500);
						$('#costumes').hide(500);
						$('#wallets').hide(500);
						$('#seeall44').hide(500);
					$('#shoes').hide(500);
						$('#mashoes').hide(500);
						$('#washoes').hide(500);
						$('#wboots').hide(500);
						$('#mcashualshoes').hide(500);
						$('#sandals').hide(500);
						$('#seeall45').hide(500);
					$('#womensclothing').hide(500);
						$('#fitnessclothing').hide(500);
						$('#dresses').hide(500);
						$('#swimwear').hide(500);
						$('#pants').hide(500);
						$('#tops').hide(500);
						$('#seeall46').hide(500);
					$('#mensclothing').hide(500);
						$('#sportswear').hide(500);
						$('#menstops').hide(500);
						$('#jackets').hide(500);
						$('#underwear').hide(500);
						$('#mpants').hide(500);
						$('#seeall47').hide(500);
					$('#womenlingerie').hide(500);
						$('#bras').hide(500);
						$('#hosiery').hide(500);
						$('#panties').hide(500);
						$('#shapwear').hide(500);
						$('#camisoles').hide(500);
						$('#seeall48').hide(500);
					//De office supplies
					$('#officesupplies').removeClass('activado');
					$('#officeequipments').hide(500);
						$('#officesuppliess').hide(500);
						$('#calculators').hide(500);
						$('#faxmachines').hide(500);
						$('#seeall51').hide(500);
					$('#officefurniture').hide(500);
						$('#obandstorage').hide(500);
						$('#officechairs').hide(500);
						$('#boardroom').hide(500);
						$('#desks').hide(500);
						$('#seeall52').hide(500);
					$('#posgear').hide(500);
						$('#posaccesories').hide(500);
						$('#rprinters').hide(500);
						$('#cashregisters').hide(500);
						$('#possystems').hide(500);
						$('#barcode').hide(500);
						$('#seeall53').hide(500);
					//De healthy and beauty
					$('#healthy').removeClass('activado');
					$('#fragancies').hide(500);
						$('#wperfume').hide(500);
						$('#mcologne').hide(500);
						$('#fragrance').hide(500);
						$('#aftershave').hide(500);
						$('#unisex').hide(500);
						$('#seeall54').hide(500);
					$('#personalcare').hide(500);
						$('#skincare').hide(500);
						$('#agedcare').hide(500);
						$('#haircare').hide(500);
						$('#shaving').hide(500);
						$('#oralcare').hide(500);
						$('#seeall55').hide(500);
					$('#cosmetics').hide(500);
						$('#facemakeup').hide(500);
						$('#eyemakeup').hide(500);
						$('#nails').hide(500);
						$('#makeup').hide(500);
						$('#lipmakeup').hide(500);
						$('#seeall56').hide(500);
					$('#grocery').hide(500);
						$('#organicfood').hide(500);
						$('#teaandcoffee').hide(500);
						$('#bandcfood').hide(500);
						$('#juices').hide(500);
						$('#dairyproducts').hide(500);
						$('#seeall57').hide(500);
					//De sports and travel
					$('#sportsandtravel').removeClass('activado');
					$('#outdooradventure').hide(500);
						$('#campingequipment').hide(500);
						$('#luggage').hide(500);
						$('#tents').hide(500);
						$('#travelaccesories').hide(500);
						$('#backpacks').hide(500);
						$('#seeall63').hide(500);
					$('#gymandfitness').hide(500);
						$('#fatrackers').hide(500);
						$('#fitnessaccesories').hide(500);
						$('#treadmills').hide(500);
						$('#excercisebikes').hide(500);
						$('#seeall64').hide(500);
					$('#sportinggoods').hide(500);
						$('#fishing').hide(500);
						$('#bicyclea').hide(500);
						$('#bbicylce').hide(500);
						$('#boating').hide(500);
						$('#skate').hide(500);
						$('#seeall65').hide(500);
					$('#travel').hide(500);
						$('#holidaydeals').hide(500);
						$('#seeall66').hide(500);
				}
			});

			$('#beerwine').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#liquor').hide(500);
					$('#wines').hide(500);
					$('#beers').hide(500);
					$('#wine').hide(500);
					$('#liquora').hide(500);
					$('#seeall58').hide(500);
				}
				else{
					$(this).addClass('activado');
					//$('#beerwine').removeClass('activado');
					$('#giftsandgadgets').removeClass('activado');
					$('#desserts').removeClass('activado');
					$('#flowers').removeClass('activado');
					$('#wedding').removeClass('activado');

					$('#liquor').show(500);
					$('#wines').show(500);
					$('#beers').show(500);
					$('#wine').show(500);
					$('#liquora').show(500);
					$('#seeall58').show(500);
					//giftsandgadgets
					$('#collectables').hide(500);
					$('#ugifts').hide(500);
					$('#giftsforher').hide(500);
					$('#knives').hide(500);
					$('#giftsbabies').hide(500);
					$('#seeall59').hide(500);
					//desserts
					$('#g').hide(500);
					$('#f').hide(500);
					$('#pamper').hide(500);
					$('#seeall60').hide(500);
					//flowers
					$('#plants').hide(500);
					$('#arrangements').hide(500);
					$('#seeall61').hide(500);
					//wedding
					$('#waccesories').hide(500);
					$('#wgifts').hide(500);
					$('#seeall62').hide(500);
				}
			});

			$('#giftsandgadgets').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#collectables').hide(500);
					$('#ugifts').hide(500);
					$('#giftsforher').hide(500);
					$('#knives').hide(500);
					$('#giftsbabies').hide(500);
					$('#seeall59').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#beerwine').removeClass('activado');
					//$('#giftsandgadgets').removeClass('activado');
					$('#desserts').removeClass('activado');
					$('#flowers').removeClass('activado');
					$('#wedding').removeClass('activado');

					$('#collectables').show(500);
					$('#ugifts').show(500);
					$('#giftsforher').show(500);
					$('#knives').show(500);
					$('#giftsbabies').show(500);
					$('#seeall59').show(500);
					//beerwine
					$('#liquor').hide(500);
					$('#wines').hide(500);
					$('#beers').hide(500);
					$('#wine').hide(500);
					$('#liquora').hide(500);
					$('#seeall58').hide(500);
					//desserts
					$('#g').hide(500);
					$('#f').hide(500);
					$('#pamper').hide(500);
					$('#seeall60').hide(500);
					//flowers
					$('#plants').hide(500);
					$('#arrangements').hide(500);
					$('#seeall61').hide(500);
					//wedding
					$('#waccesories').hide(500);
					$('#wgifts').hide(500);
					$('#seeall62').hide(500);
				}
			});

			$('#desserts').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#g').hide(500);
					$('#f').hide(500);
					$('#pamper').hide(500);
					$('#seeall60').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#beerwine').removeClass('activado');
					$('#giftsandgadgets').removeClass('activado');
					//$('#desserts').removeClass('activado');
					$('#flowers').removeClass('activado');
					$('#wedding').removeClass('activado');

					$('#g').show(500);
					$('#f').show(500);
					$('#pamper').show(500);
					$('#seeall60').show(500);
					//beerwine
					$('#liquor').hide(500);
					$('#wines').hide(500);
					$('#beers').hide(500);
					$('#wine').hide(500);
					$('#liquora').hide(500);
					$('#seeall58').hide(500);
					//giftsandgadgets
					$('#collectables').hide(500);
					$('#ugifts').hide(500);
					$('#giftsforher').hide(500);
					$('#knives').hide(500);
					$('#giftsbabies').hide(500);
					$('#seeall59').hide(500);
					//flowers
					$('#plants').hide(500);
					$('#arrangements').hide(500);
					$('#seeall61').hide(500);
					//wedding	
					$('#waccesories').hide(500);
					$('#wgifts').hide(500);
					$('#seeall62').hide(500);			
				}
			});

			$('#flowers').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#plants').hide(500);
					$('#arrangements').hide(500);
					$('#seeall61').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#beerwine').removeClass('activado');
					$('#giftsandgadgets').removeClass('activado');
					$('#desserts').removeClass('activado');
					//$('#flowers').removeClass('activado');
					$('#wedding').removeClass('activado');

					$('#plants').show(500);
					$('#arrangements').show(500);
					$('#seeall61').show(500);
					//beerwine
					$('#liquor').hide(500);
					$('#wines').hide(500);
					$('#beers').hide(500);
					$('#wine').hide(500);
					$('#liquora').hide(500);
					$('#seeall58').hide(500);
					//giftsandgadgets
					$('#collectables').hide(500);
					$('#ugifts').hide(500);
					$('#giftsforher').hide(500);
					$('#knives').hide(500);
					$('#giftsbabies').hide(500);
					$('#seeall59').hide(500);
					//desserts
					$('#g').hide(500);
					$('#f').hide(500);
					$('#pamper').hide(500);
					$('#seeall60').hide(500);
					//wedding
					$('#waccesories').hide(500);
					$('#wgifts').hide(500);
					$('#seeall62').hide(500);
				}
			});

			$('#wedding').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#waccesories').hide(500);
					$('#wgifts').hide(500);
					$('#seeall62').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#beerwine').removeClass('activado');
					$('#giftsandgadgets').removeClass('activado');
					$('#desserts').removeClass('activado');
					$('#flowers').removeClass('activado');
					//$('#wedding').removeClass('activado');

					$('#waccesories').show(500);
					$('#wgifts').show(500);
					$('#seeall62').show(500);
					//beerwine
					$('#liquor').hide(500);
					$('#wines').hide(500);
					$('#beers').hide(500);
					$('#wine').hide(500);
					$('#liquora').hide(500);
					$('#seeall58').hide(500);
					//giftsandgadgets
					$('#collectables').hide(500);
					$('#ugifts').hide(500);
					$('#giftsforher').hide(500);
					$('#knives').hide(500);
					$('#giftsbabies').hide(500);
					$('#seeall59').hide(500);
					//desserts
					$('#g').hide(500);
					$('#f').hide(500);
					$('#pamper').hide(500);
					$('#seeall60').hide(500);
					//flowers
					$('#plants').hide(500);
					$('#arrangements').hide(500);
					$('#seeall61').hide(500);
				}
			});























































			$('#sportsandtravel').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#outdooradventure').hide(500);
						$('#campingequipment').hide(500);
						$('#luggage').hide(500);
						$('#tents').hide(500);
						$('#travelaccesories').hide(500);
						$('#backpacks').hide(500);
						$('#seeall63').hide(500);
					$('#gymandfitness').hide(500);
						$('#fatrackers').hide(500);
						$('#fitnessaccesories').hide(500);
						$('#treadmills').hide(500);
						$('#excercisebikes').hide(500);
						$('#seeall64').hide(500);
					$('#sportinggoods').hide(500);
						$('#fishing').hide(500);
						$('#bicyclea').hide(500);
						$('#bbicylce').hide(500);
						$('#boating').hide(500);
						$('#skate').hide(500);
						$('#seeall65').hide(500);
					$('#travel').hide(500);
						$('#holidaydeals').hide(500);
						$('#seeall66').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#outdooradventure').show(500);
					$('#gymandfitness').show(500);
					$('#sportinggoods').show(500);
					$('#travel').show(500);
					//De electronics
					$('#electronics').removeClass('activado');
					$('#communication').hide(500);
						$('#mobile').hide(500);
						$('#smartwatches').hide(500);
						$('#mobileaccesories').hide(500);
						$('#twowayradios').hide(500);
						$('#phones').hide(500);
						$('#seeall').hide(500);
					$('#cameras').hide(500);
						$('#digitalcameras').hide(500);
						$('#camerasaccesories').hide(500);
						$('#drones').hide(500);
						$('#cameralenses').hide(500);
						$('#camcorders').hide(500);
						$('#seeall2').hide(500);
					$('#tv').hide(500);
						$('#tvs').hide(500);
						$('#settopboxes').hide(500);
						$('#blurayplayers').hide(500);
						$('#mediastreamingdevices').hide(500);
						$('#projectors').hide(500);
						$('#seeall3').hide(500);
					$('#homeaudio').hide(500);
						$('#headphones').hide(500);
						$('#speakers').hide(500);
						$('#radioplayers').hide(500);
						$('#hometheater').hide(500);
						$('#amplifier').hide(500);
						$('#seeall4').hide(500);
					$('#portableelectronics').hide(500);
						$('#portablespeaker').hide(500);
						$('#ebookreader').hide(500);
						$('#pdrecorders').hide(500);
						$('#pcdplayers').hide(500);
						$('#ebaccesories').hide(500);
						$('#seeall5').hide(500);
					$('#accesories').hide(500);
						$('#homesecurity').hide(500);
						$('#homeautomation').hide(500);
						$('#securitysystems').hide(500);
						$('#batteries').hide(500);
						$('#remotecontrol').hide(500);
						$('#seeall6').hide(500);
					$('#audiovisual').hide(500);
						$('#audioaccesories').hide(500);
						$('#studioequipment').hide(500);
						$('#avcables').hide(500);
						$('#seeall7').hide(500);
					$('#mobileelectronics').hide(500);
						$('#gpsdevices').hide(500);
						$('#gpsaccesories').hide(500);
						$('#mp3media').hide(500);
						$('#seeall8').hide(500);
					$('#musicalinstruments').hide(500);
						$('#musickeyboards').hide(500);
						$('#guitars').hide(500);
						$('#drums').hide(500);
						$('#iaccesories').hide(500);
						$('#violins').hide(500);
						$('#seeall9').hide(500);
					//De Kids and toys
					$('#kidsandtoys').removeClass('activado');
					$('#carriersandseats').hide(500);
						$('#strollers').hide(500);
						$('#babycarseats').hide(500);
						$('#babycarriers').hide(500);
						$('#seeall10').hide(500);
					$('#toysandgames').hide(500);
						$('#oa').hide(500);
						$('#educationaltoys').hide(500);
						$('#dolls').hide(500);
						$('#babytoys').hide(500);
						$('#buildingsm').hide(500);
						$('#seeall11').hide(500);
					$('#babycare').hide(500);
						$('#babyfurniture').hide(500);
						$('#babyaccesories').hide(500);
						$('#nursingandfeeding').hide(500);
						$('#bathandpotty').hide(500);
						$('#babbybedding').hide(500);
						$('#seeall12').hide(500);
					$('#schoolsupplies').hide(500);
						$('#schoolstationery').hide(500);
						$('#seeall13').hide(500);
					//De Home and Garden
					$('#homeandgarden').removeClass('activado');
					$('#homeappliances').hide(500);
						$('#vacuums').hide(500);
						$('#refrigerators').hide(500);
						$('#airconditioners').hide(500);
						$('#washingm').hide(500);
						$('#ovens').hide(500);
						$('#seeall14').hide(500);
					$('#petsupplies').hide(500);
						$('#dogsupplies').hide(500);
						$('#catsupplies').hide(500);
						$('#sasupplies').hide(500);
						$('#birdsupplies').hide(500);
						$('#fishsupplies').hide(500);
						$('#seeall15').hide(500);
					$('#kitchenaccesories').hide(500);
						$('#kitchensupplies').hide(500);
						$('#sinksandtaps').hide(500);
						$('#cookware').hide(500);
						$('#dinnerware').hide(500);
						$('#bbqa').hide(500);
						$('#seeall16').hide(500);
					$('#furniture').hide(500);
						$('#shelves').hide(500);
						$('#mattresses').hide(500);
						$('#sofa').hide(500);
						$('#seats').hide(500);
						$('#tables').hide(500);
						$('#seeall17').hide(500);
					$('#toolsandhardware').hide(500);
						$('#garden').hide(500);
						$('#powertools').hide(500);
						$('#generators').hide(500);
						$('#htools').hide(500);
						$('#measuring').hide(500);
						$('#seeall18').hide(500);
					//De Books & DVDs
					$('#booksanddvds').removeClass('activado');
					$('#books').hide(500);
						$('#miscbooks').hide(500);
						$('#childbooks').hide(500);
						$('#cookbooks').hide(500);
						$('#abooks').hide(500);
						$('#cbooks').hide(500);
						$('#seeall26').hide(500);
					$('#movies').hide(500);
						$('#miscmovies').hide(500);
						$('#tseries').hide(500);
						$('#amovies').hide(500);
						$('#cmovies').hide(500);
						$('#seeall27').hide(500);
					$('#music').hide(500);
						$('#mmusic').hide(500);
						$('#cmusic').hide(500);
						$('#rmusic').hide(500);
						$('#vrecords').hide(500);
						$('#hhmusic').hide(500);
						$('#seeall28').hide(500);
					$('#comicsandmagazines').hide(500);
						$('#magazines').hide(500);
						$('#comicbooks').hide(500);
						$('#seeall29').hide(500);
					//De computers
					$('#computers').removeClass('activado');
					$('#hardware').hide(500);
						$('#tablet').hide(500);
						$('#laptops').hide(500);
						$('#printers').hide(500);
						$('#monitors').hide(500);
						$('#desktops').hide(500);
						$('#seeall30').hide(500);
					$('#inputdevices').hide(500);
						$('#keyboards').hide(500);
						$('#mtb').hide(500);
						$('#microphones').hide(500);
						$('#gtablets').hide(500);
						$('#webcameras').hide(500);
						$('#seeall31').hide(500);
					$('#videogames').hide(500);
						$('#gconsoles').hide(500);
						$('#vreality').hide(500);
						$('#playstationgames').hide(500);
						$('#gamecontrollers').hide(500);
						$('#gamekeys').hide(500);
						$('#seeall32').hide(500);
					$('#software').hide(500);
						$('#bsoftware').hide(500);
						$('#santivirus').hide(500);
						$('#operatingsystems').hide(500);
						$('#gmultimedia').hide(500);
						$('#utilities').hide(500);
						$('#seeall33').hide(500);
					$('#computeraccesories').hide(500);
						$('#tabletaccesories').hide(500);
						$('#lbags').hide(500);
						$('#laccesories').hide(500);
						$('#computerspeakers').hide(500);
						$('#swarranty').hide(500);
						$('#seeall34').hide(500);
					//De cars and accesories
					$('#carsandaccesories').removeClass('activado');
					$('#autoparts').hide(500);
						$('#aeparts').hide(500);
						$('#4wdacc').hide(500);
						$('#carseats').hide(500);
						$('#carsuspensions').hide(500);
						$('#wandt').hide(500);
						$('#seeall39').hide(500);
					$('#caccesories').hide(500);
						$('#eca').hide(500);
						$('#cr').hide(500);
						$('#ica').hide(500);
						$('#ccs').hide(500);
						$('#ccp').hide(500);
						$('#seeall40').hide(500);
					$('#caraudio').hide(500);
						$('#cm').hide(500);
						$('#cs').hide(500);
						$('#ca').hide(500);
						$('#seeall41').hide(500);
					$('#motorbikesandquads').hide(500);
						$('#motorbik').hide(500);
						$('#motorbikes').hide(500);
						$('#seeall42').hide(500);
					$('#motorcars').hide(500);
						$('#newcars').hide(500);
						$('#seeall43').hide(500);
					//De fashion
					$('#fashion').removeClass('activado');
					$('#clothingaccesories').hide(500);
						$('#watches').hide(500);
						$('#bags').hide(500);
						$('#sunglasses').hide(500);
						$('#costumes').hide(500);
						$('#wallets').hide(500);
						$('#seeall44').hide(500);
					$('#shoes').hide(500);
						$('#mashoes').hide(500);
						$('#washoes').hide(500);
						$('#wboots').hide(500);
						$('#mcashualshoes').hide(500);
						$('#sandals').hide(500);
						$('#seeall45').hide(500);
					$('#womensclothing').hide(500);
						$('#fitnessclothing').hide(500);
						$('#dresses').hide(500);
						$('#swimwear').hide(500);
						$('#pants').hide(500);
						$('#tops').hide(500);
						$('#seeall46').hide(500);
					$('#mensclothing').hide(500);
						$('#sportswear').hide(500);
						$('#menstops').hide(500);
						$('#jackets').hide(500);
						$('#underwear').hide(500);
						$('#mpants').hide(500);
						$('#seeall47').hide(500);
					$('#womenlingerie').hide(500);
						$('#bras').hide(500);
						$('#hosiery').hide(500);
						$('#panties').hide(500);
						$('#shapwear').hide(500);
						$('#camisoles').hide(500);
						$('#seeall48').hide(500);
					//De office supplies
					$('#officesupplies').removeClass('activado');
					$('#officeequipments').hide(500);
						$('#officesuppliess').hide(500);
						$('#calculators').hide(500);
						$('#faxmachines').hide(500);
						$('#seeall51').hide(500);
					$('#officefurniture').hide(500);
						$('#obandstorage').hide(500);
						$('#officechairs').hide(500);
						$('#boardroom').hide(500);
						$('#desks').hide(500);
						$('#seeall52').hide(500);
					$('#posgear').hide(500);
						$('#posaccesories').hide(500);
						$('#rprinters').hide(500);
						$('#cashregisters').hide(500);
						$('#possystems').hide(500);
						$('#barcode').hide(500);
						$('#seeall53').hide(500);
					//De healthy and beauty
					$('#healthy').removeClass('activado');
					$('#fragancies').hide(500);
						$('#wperfume').hide(500);
						$('#mcologne').hide(500);
						$('#fragrance').hide(500);
						$('#aftershave').hide(500);
						$('#unisex').hide(500);
						$('#seeall54').hide(500);
					$('#personalcare').hide(500);
						$('#skincare').hide(500);
						$('#agedcare').hide(500);
						$('#haircare').hide(500);
						$('#shaving').hide(500);
						$('#oralcare').hide(500);
						$('#seeall55').hide(500);
					$('#cosmetics').hide(500);
						$('#facemakeup').hide(500);
						$('#eyemakeup').hide(500);
						$('#nails').hide(500);
						$('#makeup').hide(500);
						$('#lipmakeup').hide(500);
						$('#seeall56').hide(500);
					$('#grocery').hide(500);
						$('#organicfood').hide(500);
						$('#teaandcoffee').hide(500);
						$('#bandcfood').hide(500);
						$('#juices').hide(500);
						$('#dairyproducts').hide(500);
						$('#seeall57').hide(500);
					//De gifts and wine
					$('#giftsandwine').removeClass('activado');
					$('#beerwine').hide(500);
						$('#liquor').hide(500);
						$('#wines').hide(500);
						$('#beers').hide(500);
						$('#wine').hide(500);
						$('#liquora').hide(500);
						$('#seeall58').hide(500);
					$('#giftsandgadgets').hide(500);
						$('#collectables').hide(500);
						$('#ugifts').hide(500);
						$('#giftsforher').hide(500);
						$('#knives').hide(500);
						$('#giftsbabies').hide(500);
						$('#seeall59').hide(500);
					$('#desserts').hide(500);
						$('#g').hide(500);
						$('#f').hide(500);
						$('#pamper').hide(500);
						$('#seeall60').hide(500);
					$('#flowers').hide(500);
						$('#plants').hide(500);
						$('#arrangements').hide(500);
						$('#seeall61').hide(500);
					$('#wedding').hide(500);
						$('#waccesories').hide(500);
						$('#wgifts').hide(500);
						$('#seeall62').hide(500);

				}
			});

			$('#outdooradventure').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#campingequipment').hide(500);
					$('#luggage').hide(500);
					$('#tents').hide(500);
					$('#travelaccesories').hide(500);
					$('#backpacks').hide(500);
					$('#seeall63').hide(500);
				}
				else{
					$(this).addClass('activado');
					//$('#outdooradventure').removeClass('activado');
					$('#gymandfitness').removeClass('activado');
					$('#sportinggoods').removeClass('activado');
					$('#travel').removeClass('activado');

					$('#campingequipment').show(500);
					$('#luggage').show(500);
					$('#tents').show(500);
					$('#travelaccesories').show(500);
					$('#backpacks').show(500);
					$('#seeall63').show(500);
					//gymandfitness
					$('#fatrackers').hide(500);
					$('#fitnessaccesories').hide(500);
					$('#treadmills').hide(500);
					$('#excercisebikes').hide(500);
					$('#seeall64').hide(500);
					//sportinggoods
					$('#fishing').hide(500);
					$('#bicyclea').hide(500);
					$('#bbicylce').hide(500);
					$('#boating').hide(500);
					$('#skate').hide(500);
					$('#seeall65').hide(500);
					//travel
					$('#holidaydeals').hide(500);
					$('#seeall66').hide(500);
				}
			});

			$('#gymandfitness').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#fatrackers').hide(500);
					$('#fitnessaccesories').hide(500);
					$('#treadmills').hide(500);
					$('#excercisebikes').hide(500);
					$('#seeall64').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#outdooradventure').removeClass('activado');
					//$('#gymandfitness').removeClass('activado');
					$('#sportinggoods').removeClass('activado');
					$('#travel').removeClass('activado');

					$('#fatrackers').show(500);
					$('#fitnessaccesories').show(500);
					$('#treadmills').show(500);
					$('#excercisebikes').show(500);
					$('#seeall64').show(500);
					//outdooradventure
					$('#campingequipment').hide(500);
					$('#luggage').hide(500);
					$('#tents').hide(500);
					$('#travelaccesories').hide(500);
					$('#backpacks').hide(500);
					$('#seeall63').hide(500);
					//sportinggoods
					$('#fishing').hide(500);
					$('#bicyclea').hide(500);
					$('#bbicylce').hide(500);
					$('#boating').hide(500);
					$('#skate').hide(500);
					$('#seeall65').hide(500);
					//travel
					$('#holidaydeals').hide(500);
					$('#seeall66').hide(500);
				}
			});

			$('#sportinggoods').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#fishing').hide(500);
					$('#bicyclea').hide(500);
					$('#bbicylce').hide(500);
					$('#boating').hide(500);
					$('#skate').hide(500);
					$('#seeall65').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#outdooradventure').removeClass('activado');
					$('#gymandfitness').removeClass('activado');
					//$('#sportinggoods').removeClass('activado');
					$('#travel').removeClass('activado');

					$('#fishing').show(500);
					$('#bicyclea').show(500);
					$('#bbicylce').show(500);
					$('#boating').show(500);
					$('#skate').show(500);
					$('#seeall65').show(500);
					//outdooradventure
					$('#campingequipment').hide(500);
					$('#luggage').hide(500);
					$('#tents').hide(500);
					$('#travelaccesories').hide(500);
					$('#backpacks').hide(500);
					$('#seeall63').hide(500);
					//gymandfitness
					$('#fatrackers').hide(500);
					$('#fitnessaccesories').hide(500);
					$('#treadmills').hide(500);
					$('#excercisebikes').hide(500);
					$('#seeall64').hide(500);
					//travel
					$('#holidaydeals').hide(500);
					$('#seeall66').hide(500);
				}
			});

			$('#travel').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#holidaydeals').hide(500);
					$('#seeall66').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#outdooradventure').removeClass('activado');
					$('#gymandfitness').removeClass('activado');
					$('#sportinggoods').removeClass('activado');
					//$('#travel').removeClass('activado');

					$('#holidaydeals').show(500);
					$('#seeall66').show(500);
					//outdooradventure
					$('#campingequipment').hide(500);
					$('#luggage').hide(500);
					$('#tents').hide(500);
					$('#travelaccesories').hide(500);
					$('#backpacks').hide(500);
					$('#seeall63').hide(500);
					//gymandfitness
					$('#fatrackers').hide(500);
					$('#fitnessaccesories').hide(500);
					$('#treadmills').hide(500);
					$('#excercisebikes').hide(500);
					$('#seeall64').hide(500);
					//sportinggoods
					$('#fishing').hide(500);
					$('#bicyclea').hide(500);
					$('#bbicylce').hide(500);
					$('#boating').hide(500);
					$('#skate').hide(500);
					$('#seeall65').hide(500);
				}
			});


});