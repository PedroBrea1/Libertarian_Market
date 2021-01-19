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
					$('#mobile').show(500);
					$('#smartwatches').show(500);
					$('#mobileaccesories').show(500);
					$('#twowayradios').show(500);
					$('#phones').show(500);
					$('#seeall').show(500);
					//De cameras
					//De tv
					//De homeaudio
					//De portableelectronics
					//De accesories
					//De audiovisual
					//De mobileelectronics
					//De musicalinstruments
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
					//De portableelectronics
					//De accesories
					//De audiovisual
					//De mobileelectronics
					//De musicalinstruments
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
					//De portableelectronics
					//De accesories
					//De audiovisual
					//De mobileelectronics
					//De musicalinstruments
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
					$('#headphones').show(500);
					$('#speakers').show(500);
					$('#radioplayers').show(500);
					$('#hometheater').show(500);
					$('#amplifier').show(500);
					$('#seeall4').show(500);
					//De communication
					$('#communication').removeClass('activado')
					$('#mobile').hide(500);
					$('#smartwatches').hide(500);
					$('#mobileaccesories').hide(500);
					$('#twowayradios').hide(500);
					$('#phones').hide(500);
					$('#seeall').hide(500);
					//De cameras
					//De homeaudio
					//De portableelectronics
					//De accesories
					//De audiovisual
					//De mobileelectronics
					//De musicalinstruments
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
					//De homeaudio
					//De portableelectronics
					//De accesories
					//De audiovisual
					//De mobileelectronics
					//De musicalinstruments
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
					//De homeaudio
					//De portableelectronics
					//De accesories
					//De audiovisual
					//De mobileelectronics
					//De musicalinstruments
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
					//De homeaudio
					//De portableelectronics
					//De accesories
					//De audiovisual
					//De mobileelectronics
					//De musicalinstruments
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
					//De homeaudio
					//De portableelectronics
					//De accesories
					//De audiovisual
					//De mobileelectronics
					//De musicalinstruments
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
					//De homeaudio
					//De portableelectronics
					//De accesories
					//De audiovisual
					//De mobileelectronics
					//De musicalinstruments
				}
			});



			

		});