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
					$('#portableelectronics').hide(500);
					$('#accesories').hide(500);
					$('#audiovisual').hide(500);
					$('#mobileelectronics').hide(500);
					$('#musicalinstruments').hide(500);
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
				}
			});



			

		});