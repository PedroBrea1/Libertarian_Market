$(function(){

			$('#electronic-accesories').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#batteries').hide(500);
					$('#home-automation').hide(500);
					$('#remote-control').hide(500);
					$('#all-electronic-accesories').hide(500);
				}
				else{
					$(this).addClass('activado');
						$('#batteries').show(500);
						$('#home-automation').show(500);
						$('#remote-control').show(500);
						$('#all-electronic-accesories').show(500);
					//De computer accesories
					$('#computer-accesories').removeClass('activado');
						$('#computer-speakers').hide(500);
						$('#laptop-accesories').hide(500);
						$('#laptop-bags').hide(500);
						$('#service-and-warranty').hide(500);
						$('#tablet-accesories').hide(500);
						$('#all-computer-accesories').hide(500);
					//De audiovisual equipment
					$('#audiovisual-equipment').removeClass('activado');
						$('#audio-accesories').hide(500);
						$('#cables').hide(500);
						$('#studio').hide(500);
						$('#all-audiovisual-equipment').hide(500);
					//De cameras
					$('#cameras').removeClass('activado');
						$('#camcorders').hide(500);
						$('#cameras-accesories').hide(500);
						$('#camera-lenses').hide(500);
						$('#digital-cameras').hide(500);
						$('#drones').hide(500);
						$('#all-cameras').hide(500);
					//De communication
					$('#communication').removeClass('activado');
						$('#mobile-cell-phones').hide(500);
						$('#mobile-phone-accesories').hide(500);
						$('#smart-watches').hide(500);
						$('#two-way-radios').hide(500);
						$('#all-communication').hide(500);
					//De homeaudio
					$('#home-audio').removeClass('activado');
						$('#amplifiers-and-recievers').hide(500);
						$('#headphones').hide(500);
						$('#home-theater-systems').hide(500);
						$('#radio-players').hide(500);
						$('#speakers').hide(500);
						$('#all-home-audio').hide(500);
					//De gps & mp3
					$('#gps-and-mp3').removeClass('activado');
						$('#gps-accesories').hide(500);
						$('#gps-devices').hide(500);
						$('#mp3-and-media-players').hide(500);
						$('#all-gps-and-mp3').hide(500);
					//De video games
					$('#video-games').removeClass('activado');
						$('#game-consoles').hide(500);
						$('#game-controllers').hide(500);
						$('#game-keys').hide(500);
						$('#playstation-games').hide(500);
						$('#virtual-reality').hide(500);
						$('#all-video-games').hide(500);
					//De portable electronics
					$('#portable-electronics').removeClass('activado');
						$('#ebook-reader-accesories').hide(500);
						$('#ebook-readers').hide(500);
						$('#portable-cd-players').hide(500);
						$('#portable-digital-recorders').hide(500);
						$('#portable-speakers').hide(500);
						$('#all-portable-electronics').hide(500);
					//De tv video
					$('#tv-and-video').removeClass('activado');
						$('#blu-ray-players').hide(500);
						$('#media-streaming-devices').hide(500);
						$('#projectors').hide(500);
						$('#set-top-boxes').hide(500);
						$('#televisions').hide(500);
						$('#all-tv-and-video').hide(500);
					//De input devices
					$('#input-devices').removeClass('activado');
						$('#keyboards').hide(500);
						$('#mice-and-track-balls').hide(500);
						$('#microphones').hide(500);
						$('#graphic-tables').hide(500);
						$('#web-cameras').hide(500);
						$('#all-input-devices').hide(500);

					//De software
					$('#software').removeClass('activado');
						$('#business-software').hide(500);
						$('#graphic-and-multimedia').hide(500);
						$('#operating-systems').hide(500);
						$('#utilities').hide(500);
						$('#all-software').hide(500);
				}
			});



























		$('#computer-accesories').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#computer-speakers').hide(500);
					$('#laptop-accesories').hide(500);
					$('#laptop-bags').hide(500);
					$('#service-and-warranty').hide(500);
					$('#tablet-accesories').hide(500);
					$('#all-computer-accesories').hide(500);
				}
				else{
					$(this).addClass('activado');
						$('#computer-speakers').show(500);
						$('#laptop-accesories').show(500);
						$('#laptop-bags').show(500);
						$('#service-and-warranty').show(500);
						$('#tablet-accesories').show(500);
						$('#all-computer-accesories').show(500);
					//De electronic accesories
					$('#electronic-accesories').removeClass('activado');
						$('#batteries').hide(500);
						$('#home-automation').hide(500);
						$('#remote-control').hide(500);
						$('#all-electronic-accesories').hide(500);
					//De audiovisual equipment
					$('#audiovisual-equipment').removeClass('activado');
						$('#audio-accesories').hide(500);
						$('#cables').hide(500);
						$('#studio').hide(500);
						$('#all-audiovisual-equipment').hide(500);
					//De cameras
					$('#cameras').removeClass('activado');
						$('#camcorders').hide(500);
						$('#cameras-accesories').hide(500);
						$('#camera-lenses').hide(500);
						$('#digital-cameras').hide(500);
						$('#drones').hide(500);
						$('#all-cameras').hide(500);
					//De communication
					$('#communication').removeClass('activado');
						$('#mobile-cell-phones').hide(500);
						$('#mobile-phone-accesories').hide(500);
						$('#smart-watches').hide(500);
						$('#two-way-radios').hide(500);
						$('#all-communication').hide(500);
					//De homeaudio
					$('#home-audio').removeClass('activado');
						$('#amplifiers-and-recievers').hide(500);
						$('#headphones').hide(500);
						$('#home-theater-systems').hide(500);
						$('#radio-players').hide(500);
						$('#speakers').hide(500);
						$('#all-home-audio').hide(500);
					//De gps & mp3
					$('#gps-and-mp3').removeClass('activado');
						$('#gps-accesories').hide(500);
						$('#gps-devices').hide(500);
						$('#mp3-and-media-players').hide(500);
						$('#all-gps-and-mp3').hide(500);
					//De video games
					$('#video-games').removeClass('activado');
						$('#game-consoles').hide(500);
						$('#game-controllers').hide(500);
						$('#game-keys').hide(500);
						$('#playstation-games').hide(500);
						$('#virtual-reality').hide(500);
						$('#all-video-games').hide(500);
					//De portable electronics
					$('#portable-electronics').removeClass('activado');
						$('#ebook-reader-accesories').hide(500);
						$('#ebook-readers').hide(500);
						$('#portable-cd-players').hide(500);
						$('#portable-digital-recorders').hide(500);
						$('#portable-speakers').hide(500);
						$('#all-portable-electronics').hide(500);
					//De tv video
					$('#tv-and-video').removeClass('activado');
						$('#blu-ray-players').hide(500);
						$('#media-streaming-devices').hide(500);
						$('#projectors').hide(500);
						$('#set-top-boxes').hide(500);
						$('#televisions').hide(500);
						$('#all-tv-and-video').hide(500);
					//De input devices
					$('#input-devices').removeClass('activado');
						$('#keyboards').hide(500);
						$('#mice-and-track-balls').hide(500);
						$('#microphones').hide(500);
						$('#graphic-tables').hide(500);
						$('#web-cameras').hide(500);
						$('#all-input-devices').hide(500);
					//De software
					$('#software').removeClass('activado');
						$('#business-software').hide(500);
						$('#graphic-and-multimedia').hide(500);
						$('#operating-systems').hide(500);
						$('#utilities').hide(500);
						$('#all-software').hide(500);
				}
			});




















			$('#audiovisual-equipment').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#audio-accesories').hide(500);
					$('#cables').hide(500);
					$('#studio').hide(500);
					$('#all-audiovisual-equipment').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#audio-accesories').show(500);
					$('#cables').show(500);
					$('#studio').show(500);
					$('#all-audiovisual-equipment').show(500);
					//De electronic accesories
					$('#electronic-accesories').removeClass('activado');
						$('#batteries').hide(500);
						$('#home-automation').hide(500);
						$('#remote-control').hide(500);
						$('#all-electronic-accesories').hide(500);
					//De computer accesories
					$('#computer-accesories').removeClass('activado');
						$('#computer-speakers').hide(500);
						$('#laptop-accesories').hide(500);
						$('#laptop-bags').hide(500);
						$('#service-and-warranty').hide(500);
						$('#tablet-accesories').hide(500);
						$('#all-computer-accesories').hide(500);
					//De cameras
					$('#cameras').removeClass('activado');
						$('#camcorders').hide(500);
						$('#cameras-accesories').hide(500);
						$('#camera-lenses').hide(500);
						$('#digital-cameras').hide(500);
						$('#drones').hide(500);
						$('#all-cameras').hide(500);
					//De communication
					$('#communication').removeClass('activado');
						$('#mobile-cell-phones').hide(500);
						$('#mobile-phone-accesories').hide(500);
						$('#smart-watches').hide(500);
						$('#two-way-radios').hide(500);
						$('#all-communication').hide(500);
					//De homeaudio
					$('#home-audio').removeClass('activado');
						$('#amplifiers-and-recievers').hide(500);
						$('#headphones').hide(500);
						$('#home-theater-systems').hide(500);
						$('#radio-players').hide(500);
						$('#speakers').hide(500);
						$('#all-home-audio').hide(500);
					//De gps & mp3
					$('#gps-and-mp3').removeClass('activado');
						$('#gps-accesories').hide(500);
						$('#gps-devices').hide(500);
						$('#mp3-and-media-players').hide(500);
						$('#all-gps-and-mp3').hide(500);
					//De video games
					$('#video-games').removeClass('activado');
						$('#game-consoles').hide(500);
						$('#game-controllers').hide(500);
						$('#game-keys').hide(500);
						$('#playstation-games').hide(500);
						$('#virtual-reality').hide(500);
						$('#all-video-games').hide(500);
					//De portable electronics
					$('#portable-electronics').removeClass('activado');
						$('#ebook-reader-accesories').hide(500);
						$('#ebook-readers').hide(500);
						$('#portable-cd-players').hide(500);
						$('#portable-digital-recorders').hide(500);
						$('#portable-speakers').hide(500);
						$('#all-portable-electronics').hide(500);
					//De tv video
					$('#tv-and-video').removeClass('activado');
						$('#blu-ray-players').hide(500);
						$('#media-streaming-devices').hide(500);
						$('#projectors').hide(500);
						$('#set-top-boxes').hide(500);
						$('#televisions').hide(500);
						$('#all-tv-and-video').hide(500);
					//De input devices
					$('#input-devices').removeClass('activado');
						$('#keyboards').hide(500);
						$('#mice-and-track-balls').hide(500);
						$('#microphones').hide(500);
						$('#graphic-tables').hide(500);
						$('#web-cameras').hide(500);
						$('#all-input-devices').hide(500);
					//De software
					$('#software').removeClass('activado');
						$('#business-software').hide(500);
						$('#graphic-and-multimedia').hide(500);
						$('#operating-systems').hide(500);
						$('#utilities').hide(500);
						$('#all-software').hide(500);
				}
			});




































			$('#cameras').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#camcorders').hide(500);
					$('#cameras-accesories').hide(500);
					$('#camera-lenses').hide(500);
					$('#digital-cameras').hide(500);
					$('#drones').hide(500);
					$('#all-cameras').hide(500);
				}
				else{
					$(this).addClass('activado');
						$('#camcorders').show(500);
						$('#cameras-accesories').show(500);
						$('#camera-lenses').show(500);
						$('#digital-cameras').show(500);
						$('#drones').show(500);
						$('#all-cameras').show(500);
					//De electronic accesories
					$('#electronic-accesories').removeClass('activado');
						$('#batteries').hide(500);
						$('#home-automation').hide(500);
						$('#remote-control').hide(500);
						$('#all-electronic-accesories').hide(500);
					//De computer accesories
					$('#computer-accesories').removeClass('activado');
						$('#computer-speakers').hide(500);
						$('#laptop-accesories').hide(500);
						$('#laptop-bags').hide(500);
						$('#service-and-warranty').hide(500);
						$('#tablet-accesories').hide(500);
						$('#all-computer-accesories').hide(500);
					//De audiovisual equipment
					$('#audiovisual-equipment').removeClass('activado');
						$('#audio-accesories').hide(500);
						$('#cables').hide(500);
						$('#studio').hide(500);
						$('#all-audiovisual-equipment').hide(500);
					//De communication
					$('#communication').removeClass('activado');
						$('#mobile-cell-phones').hide(500);
						$('#mobile-phone-accesories').hide(500);
						$('#smart-watches').hide(500);
						$('#two-way-radios').hide(500);
						$('#all-communication').hide(500);
					//De homeaudio
					$('#home-audio').removeClass('activado');
						$('#amplifiers-and-recievers').hide(500);
						$('#headphones').hide(500);
						$('#home-theater-systems').hide(500);
						$('#radio-players').hide(500);
						$('#speakers').hide(500);
						$('#all-home-audio').hide(500);
					//De gps & mp3
					$('#gps-and-mp3').removeClass('activado');
						$('#gps-accesories').hide(500);
						$('#gps-devices').hide(500);
						$('#mp3-and-media-players').hide(500);
						$('#all-gps-and-mp3').hide(500);
					//De video games
					$('#video-games').removeClass('activado');
						$('#game-consoles').hide(500);
						$('#game-controllers').hide(500);
						$('#game-keys').hide(500);
						$('#playstation-games').hide(500);
						$('#virtual-reality').hide(500);
						$('#all-video-games').hide(500);
					//De portable electronics
					$('#portable-electronics').removeClass('activado');
						$('#ebook-reader-accesories').hide(500);
						$('#ebook-readers').hide(500);
						$('#portable-cd-players').hide(500);
						$('#portable-digital-recorders').hide(500);
						$('#portable-speakers').hide(500);
						$('#all-portable-electronics').hide(500);
					//De tv video
					$('#tv-and-video').removeClass('activado');
						$('#blu-ray-players').hide(500);
						$('#media-streaming-devices').hide(500);
						$('#projectors').hide(500);
						$('#set-top-boxes').hide(500);
						$('#televisions').hide(500);
						$('#all-tv-and-video').hide(500);
					//De input devices
					$('#input-devices').removeClass('activado');
						$('#keyboards').hide(500);
						$('#mice-and-track-balls').hide(500);
						$('#microphones').hide(500);
						$('#graphic-tables').hide(500);
						$('#web-cameras').hide(500);
						$('#all-input-devices').hide(500);
					//De software
					$('#software').removeClass('activado');
						$('#business-software').hide(500);
						$('#graphic-and-multimedia').hide(500);
						$('#operating-systems').hide(500);
						$('#utilities').hide(500);
						$('#all-software').hide(500);
				}
			});








































			$('#communication').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#mobile-cell-phones').hide(500);
					$('#mobile-phone-accesories').hide(500);
					$('#smart-watches').hide(500);
					$('#two-way-radios').hide(500);
					$('#all-communication').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#mobile-cell-phones').show(500);
					$('#mobile-phone-accesories').show(500);
					$('#smart-watches').show(500);
					$('#two-way-radios').show(500);
					$('#all-communication').show(500);
					//De electronic accesories
					$('#electronic-accesories').removeClass('activado');
						$('#batteries').hide(500);
						$('#home-automation').hide(500);
						$('#remote-control').hide(500);
						$('#all-electronic-accesories').hide(500);
					//De computer accesories
					$('#computer-accesories').removeClass('activado');
						$('#computer-speakers').hide(500);
						$('#laptop-accesories').hide(500);
						$('#laptop-bags').hide(500);
						$('#service-and-warranty').hide(500);
						$('#tablet-accesories').hide(500);
						$('#all-computer-accesories').hide(500);
					//De audiovisual equipment
					$('#audiovisual-equipment').removeClass('activado');
						$('#audio-accesories').hide(500);
						$('#cables').hide(500);
						$('#studio').hide(500);
						$('#all-audiovisual-equipment').hide(500);
					//De cameras
					$('#cameras').removeClass('activado');
						$('#camcorders').hide(500);
						$('#cameras-accesories').hide(500);
						$('#camera-lenses').hide(500);
						$('#digital-cameras').hide(500);
						$('#drones').hide(500);
						$('#all-cameras').hide(500);
					//De homeaudio
					$('#home-audio').removeClass('activado');
						$('#amplifiers-and-recievers').hide(500);
						$('#headphones').hide(500);
						$('#home-theater-systems').hide(500);
						$('#radio-players').hide(500);
						$('#speakers').hide(500);
						$('#all-home-audio').hide(500);
					//De gps & mp3
					$('#gps-and-mp3').removeClass('activado');
						$('#gps-accesories').hide(500);
						$('#gps-devices').hide(500);
						$('#mp3-and-media-players').hide(500);
						$('#all-gps-and-mp3').hide(500);
					//De video games
					$('#video-games').removeClass('activado');
						$('#game-consoles').hide(500);
						$('#game-controllers').hide(500);
						$('#game-keys').hide(500);
						$('#playstation-games').hide(500);
						$('#virtual-reality').hide(500);
						$('#all-video-games').hide(500);
					//De portable electronics
					$('#portable-electronics').removeClass('activado');
						$('#ebook-reader-accesories').hide(500);
						$('#ebook-readers').hide(500);
						$('#portable-cd-players').hide(500);
						$('#portable-digital-recorders').hide(500);
						$('#portable-speakers').hide(500);
						$('#all-portable-electronics').hide(500);
					//De tv video
					$('#tv-and-video').removeClass('activado');
						$('#blu-ray-players').hide(500);
						$('#media-streaming-devices').hide(500);
						$('#projectors').hide(500);
						$('#set-top-boxes').hide(500);
						$('#televisions').hide(500);
						$('#all-tv-and-video').hide(500);
					//De input devices
					$('#input-devices').removeClass('activado');
						$('#keyboards').hide(500);
						$('#mice-and-track-balls').hide(500);
						$('#microphones').hide(500);
						$('#graphic-tables').hide(500);
						$('#web-cameras').hide(500);
						$('#all-input-devices').hide(500);
					//De software
					$('#software').removeClass('activado');
						$('#business-software').hide(500);
						$('#graphic-and-multimedia').hide(500);
						$('#operating-systems').hide(500);
						$('#utilities').hide(500);
						$('#all-software').hide(500);
				}
			});


































			$('#home-audio').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#amplifiers-and-recievers').hide(500);
					$('#headphones').hide(500);
					$('#home-theater-systems').hide(500);
					$('#radio-players').hide(500);
					$('#speakers').hide(500);
					$('#all-home-audio').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#amplifiers-and-recievers').show(500);
					$('#headphones').show(500);
					$('#home-theater-systems').show(500);
					$('#radio-players').show(500);
					$('#speakers').show(500);
					$('#all-home-audio').show(500);
					//De electronic accesories
					$('#electronic-accesories').removeClass('activado');
						$('#batteries').hide(500);
						$('#home-automation').hide(500);
						$('#remote-control').hide(500);
						$('#all-electronic-accesories').hide(500);
					//De computer accesories
					$('#computer-accesories').removeClass('activado');
						$('#computer-speakers').hide(500);
						$('#laptop-accesories').hide(500);
						$('#laptop-bags').hide(500);
						$('#service-and-warranty').hide(500);
						$('#tablet-accesories').hide(500);
						$('#all-computer-accesories').hide(500);
					//De audiovisual equipment
					$('#audiovisual-equipment').removeClass('activado');
						$('#audio-accesories').hide(500);
						$('#cables').hide(500);
						$('#studio').hide(500);
						$('#all-audiovisual-equipment').hide(500);
					//De cameras
					$('#cameras').removeClass('activado');
						$('#camcorders').hide(500);
						$('#cameras-accesories').hide(500);
						$('#camera-lenses').hide(500);
						$('#digital-cameras').hide(500);
						$('#drones').hide(500);
						$('#all-cameras').hide(500);
					//De communication
					$('#communication').removeClass('activado');
						$('#mobile-cell-phones').hide(500);
						$('#mobile-phone-accesories').hide(500);
						$('#smart-watches').hide(500);
						$('#two-way-radios').hide(500);
						$('#all-communication').hide(500);
					//De gps & mp3
					$('#gps-and-mp3').removeClass('activado');
						$('#gps-accesories').hide(500);
						$('#gps-devices').hide(500);
						$('#mp3-and-media-players').hide(500);
						$('#all-gps-and-mp3').hide(500);
					//De video games
					$('#video-games').removeClass('activado');
						$('#game-consoles').hide(500);
						$('#game-controllers').hide(500);
						$('#game-keys').hide(500);
						$('#playstation-games').hide(500);
						$('#virtual-reality').hide(500);
						$('#all-video-games').hide(500);
					//De portable electronics
					$('#portable-electronics').removeClass('activado');
						$('#ebook-reader-accesories').hide(500);
						$('#ebook-readers').hide(500);
						$('#portable-cd-players').hide(500);
						$('#portable-digital-recorders').hide(500);
						$('#portable-speakers').hide(500);
						$('#all-portable-electronics').hide(500);
					//De tv video
					$('#tv-and-video').removeClass('activado');
						$('#blu-ray-players').hide(500);
						$('#media-streaming-devices').hide(500);
						$('#projectors').hide(500);
						$('#set-top-boxes').hide(500);
						$('#televisions').hide(500);
						$('#all-tv-and-video').hide(500);
					//De input devices
					$('#input-devices').removeClass('activado');
						$('#keyboards').hide(500);
						$('#mice-and-track-balls').hide(500);
						$('#microphones').hide(500);
						$('#graphic-tables').hide(500);
						$('#web-cameras').hide(500);
						$('#all-input-devices').hide(500);
					//De software
					$('#software').removeClass('activado');
						$('#business-software').hide(500);
						$('#graphic-and-multimedia').hide(500);
						$('#operating-systems').hide(500);
						$('#utilities').hide(500);
						$('#all-software').hide(500);
				}
			});

































			$('#gps-and-mp3').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#gps-accesories').hide(500);
					$('#gps-devices').hide(500);
					$('#mp3-and-media-players').hide(500);
					$('#all-gps-and-mp3').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#gps-accesories').show(500);
					$('#gps-devices').show(500);
					$('#mp3-and-media-players').show(500);
					$('#all-gps-and-mp3').show(500);
					//De electronic accesories
					$('#electronic-accesories').removeClass('activado');
						$('#batteries').hide(500);
						$('#home-automation').hide(500);
						$('#remote-control').hide(500);
						$('#all-electronic-accesories').hide(500);
					//De computer accesories
					$('#computer-accesories').removeClass('activado');
						$('#computer-speakers').hide(500);
						$('#laptop-accesories').hide(500);
						$('#laptop-bags').hide(500);
						$('#service-and-warranty').hide(500);
						$('#tablet-accesories').hide(500);
						$('#all-computer-accesories').hide(500);
					//De audiovisual equipment
					$('#audiovisual-equipment').removeClass('activado');
						$('#audio-accesories').hide(500);
						$('#cables').hide(500);
						$('#studio').hide(500);
						$('#all-audiovisual-equipment').hide(500);
					//De cameras
					$('#cameras').removeClass('activado');
						$('#camcorders').hide(500);
						$('#cameras-accesories').hide(500);
						$('#camera-lenses').hide(500);
						$('#digital-cameras').hide(500);
						$('#drones').hide(500);
						$('#all-cameras').hide(500);
					//De communication
					$('#communication').removeClass('activado');
						$('#mobile-cell-phones').hide(500);
						$('#mobile-phone-accesories').hide(500);
						$('#smart-watches').hide(500);
						$('#two-way-radios').hide(500);
						$('#all-communication').hide(500);
					//De homeaudio
					$('#home-audio').removeClass('activado');
						$('#amplifiers-and-recievers').hide(500);
						$('#headphones').hide(500);
						$('#home-theater-systems').hide(500);
						$('#radio-players').hide(500);
						$('#speakers').hide(500);
						$('#all-home-audio').hide(500);
					//De video games
					$('#video-games').removeClass('activado');
						$('#game-consoles').hide(500);
						$('#game-controllers').hide(500);
						$('#game-keys').hide(500);
						$('#playstation-games').hide(500);
						$('#virtual-reality').hide(500);
						$('#all-video-games').hide(500);
					//De portable electronics
					$('#portable-electronics').removeClass('activado');
						$('#ebook-reader-accesories').hide(500);
						$('#ebook-readers').hide(500);
						$('#portable-cd-players').hide(500);
						$('#portable-digital-recorders').hide(500);
						$('#portable-speakers').hide(500);
						$('#all-portable-electronics').hide(500);
					//De tv video
					$('#tv-and-video').removeClass('activado');
						$('#blu-ray-players').hide(500);
						$('#media-streaming-devices').hide(500);
						$('#projectors').hide(500);
						$('#set-top-boxes').hide(500);
						$('#televisions').hide(500);
						$('#all-tv-and-video').hide(500);
					//De input devices
					$('#input-devices').removeClass('activado');
						$('#keyboards').hide(500);
						$('#mice-and-track-balls').hide(500);
						$('#microphones').hide(500);
						$('#graphic-tables').hide(500);
						$('#web-cameras').hide(500);
						$('#all-input-devices').hide(500);
					//De software
					$('#software').removeClass('activado');
						$('#business-software').hide(500);
						$('#graphic-and-multimedia').hide(500);
						$('#operating-systems').hide(500);
						$('#utilities').hide(500);
						$('#all-software').hide(500);
				}
			});































			$('#video-games').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#game-consoles').hide(500);
					$('#game-controllers').hide(500);
					$('#game-keys').hide(500);
					$('#playstation-games').hide(500);
					$('#virtual-reality').hide(500);
					$('#all-video-games').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#game-consoles').show(500);
					$('#game-controllers').show(500);
					$('#game-keys').show(500);
					$('#playstation-games').show(500);
					$('#virtual-reality').show(500);
					$('#all-video-games').show(500);

					//De electronic accesories
					$('#electronic-accesories').removeClass('activado');
						$('#batteries').hide(500);
						$('#home-automation').hide(500);
						$('#remote-control').hide(500);
						$('#all-electronic-accesories').hide(500);
					//De computer accesories
					$('#computer-accesories').removeClass('activado');
						$('#computer-speakers').hide(500);
						$('#laptop-accesories').hide(500);
						$('#laptop-bags').hide(500);
						$('#service-and-warranty').hide(500);
						$('#tablet-accesories').hide(500);
						$('#all-computer-accesories').hide(500);
					//De audiovisual equipment
					$('#audiovisual-equipment').removeClass('activado');
						$('#audio-accesories').hide(500);
						$('#cables').hide(500);
						$('#studio').hide(500);
						$('#all-audiovisual-equipment').hide(500);
					//De cameras
					$('#cameras').removeClass('activado');
						$('#camcorders').hide(500);
						$('#cameras-accesories').hide(500);
						$('#camera-lenses').hide(500);
						$('#digital-cameras').hide(500);
						$('#drones').hide(500);
						$('#all-cameras').hide(500);
					//De communication
					$('#communication').removeClass('activado');
						$('#mobile-cell-phones').hide(500);
						$('#mobile-phone-accesories').hide(500);
						$('#smart-watches').hide(500);
						$('#two-way-radios').hide(500);
						$('#all-communication').hide(500);
					//De homeaudio
					$('#home-audio').removeClass('activado');
						$('#amplifiers-and-recievers').hide(500);
						$('#headphones').hide(500);
						$('#home-theater-systems').hide(500);
						$('#radio-players').hide(500);
						$('#speakers').hide(500);
						$('#all-home-audio').hide(500);
					//De gps & mp3
					$('#gps-and-mp3').removeClass('activado');
						$('#gps-accesories').hide(500);
						$('#gps-devices').hide(500);
						$('#mp3-and-media-players').hide(500);
						$('#all-gps-and-mp3').hide(500);
					
					//De portable electronics
					$('#portable-electronics').removeClass('activado');
						$('#ebook-reader-accesories').hide(500);
						$('#ebook-readers').hide(500);
						$('#portable-cd-players').hide(500);
						$('#portable-digital-recorders').hide(500);
						$('#portable-speakers').hide(500);
						$('#all-portable-electronics').hide(500);
					//De tv video
					$('#tv-and-video').removeClass('activado');
						$('#blu-ray-players').hide(500);
						$('#media-streaming-devices').hide(500);
						$('#projectors').hide(500);
						$('#set-top-boxes').hide(500);
						$('#televisions').hide(500);
						$('#all-tv-and-video').hide(500);
					//De input devices
					$('#input-devices').removeClass('activado');
						$('#keyboards').hide(500);
						$('#mice-and-track-balls').hide(500);
						$('#microphones').hide(500);
						$('#graphic-tables').hide(500);
						$('#web-cameras').hide(500);
						$('#all-input-devices').hide(500);
					//De software
					$('#software').removeClass('activado');
						$('#business-software').hide(500);
						$('#graphic-and-multimedia').hide(500);
						$('#operating-systems').hide(500);
						$('#utilities').hide(500);
						$('#all-software').hide(500);
				}
			});





































			$('#portable-electronics').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#ebook-reader-accesories').hide(500);
					$('#ebook-readers').hide(500);
					$('#portable-cd-players').hide(500);
					$('#portable-digital-recorders').hide(500);
					$('#portable-speakers').hide(500);
					$('#all-portable-electronics').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#ebook-reader-accesories').show(500);
					$('#ebook-readers').show(500);
					$('#portable-cd-players').show(500);
					$('#portable-digital-recorders').show(500);
					$('#portable-speakers').show(500);
					$('#all-portable-electronics').show(500);

					//De electronic accesories
					$('#electronic-accesories').removeClass('activado');
						$('#batteries').hide(500);
						$('#home-automation').hide(500);
						$('#remote-control').hide(500);
						$('#all-electronic-accesories').hide(500);
					//De computer accesories
					$('#computer-accesories').removeClass('activado');
						$('#computer-speakers').hide(500);
						$('#laptop-accesories').hide(500);
						$('#laptop-bags').hide(500);
						$('#service-and-warranty').hide(500);
						$('#tablet-accesories').hide(500);
						$('#all-computer-accesories').hide(500);
					//De audiovisual equipment
					$('#audiovisual-equipment').removeClass('activado');
						$('#audio-accesories').hide(500);
						$('#cables').hide(500);
						$('#studio').hide(500);
						$('#all-audiovisual-equipment').hide(500);
					//De cameras
					$('#cameras').removeClass('activado');
						$('#camcorders').hide(500);
						$('#cameras-accesories').hide(500);
						$('#camera-lenses').hide(500);
						$('#digital-cameras').hide(500);
						$('#drones').hide(500);
						$('#all-cameras').hide(500);
					//De communication
					$('#communication').removeClass('activado');
						$('#mobile-cell-phones').hide(500);
						$('#mobile-phone-accesories').hide(500);
						$('#smart-watches').hide(500);
						$('#two-way-radios').hide(500);
						$('#all-communication').hide(500);
					//De homeaudio
					$('#home-audio').removeClass('activado');
						$('#amplifiers-and-recievers').hide(500);
						$('#headphones').hide(500);
						$('#home-theater-systems').hide(500);
						$('#radio-players').hide(500);
						$('#speakers').hide(500);
						$('#all-home-audio').hide(500);
					//De gps & mp3
					$('#gps-and-mp3').removeClass('activado');
						$('#gps-accesories').hide(500);
						$('#gps-devices').hide(500);
						$('#mp3-and-media-players').hide(500);
						$('#all-gps-and-mp3').hide(500);
					//De video games
					$('#video-games').removeClass('activado');
						$('#game-consoles').hide(500);
						$('#game-controllers').hide(500);
						$('#game-keys').hide(500);
						$('#playstation-games').hide(500);
						$('#virtual-reality').hide(500);
						$('#all-video-games').hide(500);
					
					//De tv video
					$('#tv-and-video').removeClass('activado');
						$('#blu-ray-players').hide(500);
						$('#media-streaming-devices').hide(500);
						$('#projectors').hide(500);
						$('#set-top-boxes').hide(500);
						$('#televisions').hide(500);
						$('#all-tv-and-video').hide(500);
					//De input devices
					$('#input-devices').removeClass('activado');
						$('#keyboards').hide(500);
						$('#mice-and-track-balls').hide(500);
						$('#microphones').hide(500);
						$('#graphic-tables').hide(500);
						$('#web-cameras').hide(500);
						$('#all-input-devices').hide(500);
					//De software
					$('#software').removeClass('activado');
						$('#business-software').hide(500);
						$('#graphic-and-multimedia').hide(500);
						$('#operating-systems').hide(500);
						$('#utilities').hide(500);
						$('#all-software').hide(500);
				}
			});


































			$('#tv-and-video').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#blu-ray-players').hide(500);
					$('#media-streaming-devices').hide(500);
					$('#projectors').hide(500);
					$('#set-top-boxes').hide(500);
					$('#televisions').hide(500);
					$('#all-tv-and-video').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#blu-ray-players').show(500);
					$('#media-streaming-devices').show(500);
					$('#projectors').show(500);
					$('#set-top-boxes').show(500);
					$('#televisions').show(500);
					$('#all-tv-and-video').show(500);

					//De electronic accesories
					$('#electronic-accesories').removeClass('activado');
						$('#batteries').hide(500);
						$('#home-automation').hide(500);
						$('#remote-control').hide(500);
						$('#all-electronic-accesories').hide(500);
					//De computer accesories
					$('#computer-accesories').removeClass('activado');
						$('#computer-speakers').hide(500);
						$('#laptop-accesories').hide(500);
						$('#laptop-bags').hide(500);
						$('#service-and-warranty').hide(500);
						$('#tablet-accesories').hide(500);
						$('#all-computer-accesories').hide(500);
					//De audiovisual equipment
					$('#audiovisual-equipment').removeClass('activado');
						$('#audio-accesories').hide(500);
						$('#cables').hide(500);
						$('#studio').hide(500);
						$('#all-audiovisual-equipment').hide(500);
					//De cameras
					$('#cameras').removeClass('activado');
						$('#camcorders').hide(500);
						$('#cameras-accesories').hide(500);
						$('#camera-lenses').hide(500);
						$('#digital-cameras').hide(500);
						$('#drones').hide(500);
						$('#all-cameras').hide(500);
					//De communication
					$('#communication').removeClass('activado');
						$('#mobile-cell-phones').hide(500);
						$('#mobile-phone-accesories').hide(500);
						$('#smart-watches').hide(500);
						$('#two-way-radios').hide(500);
						$('#all-communication').hide(500);
					//De homeaudio
					$('#home-audio').removeClass('activado');
						$('#amplifiers-and-recievers').hide(500);
						$('#headphones').hide(500);
						$('#home-theater-systems').hide(500);
						$('#radio-players').hide(500);
						$('#speakers').hide(500);
						$('#all-home-audio').hide(500);
					//De gps & mp3
					$('#gps-and-mp3').removeClass('activado');
						$('#gps-accesories').hide(500);
						$('#gps-devices').hide(500);
						$('#mp3-and-media-players').hide(500);
						$('#all-gps-and-mp3').hide(500);
					//De video games
					$('#video-games').removeClass('activado');
						$('#game-consoles').hide(500);
						$('#game-controllers').hide(500);
						$('#game-keys').hide(500);
						$('#playstation-games').hide(500);
						$('#virtual-reality').hide(500);
						$('#all-video-games').hide(500);
					//De portable electronics
					$('#portable-electronics').removeClass('activado');
						$('#ebook-reader-accesories').hide(500);
						$('#ebook-readers').hide(500);
						$('#portable-cd-players').hide(500);
						$('#portable-digital-recorders').hide(500);
						$('#portable-speakers').hide(500);
						$('#all-portable-electronics').hide(500);
					
					//De input devices
					$('#input-devices').removeClass('activado');
						$('#keyboards').hide(500);
						$('#mice-and-track-balls').hide(500);
						$('#microphones').hide(500);
						$('#graphic-tables').hide(500);
						$('#web-cameras').hide(500);
						$('#all-input-devices').hide(500);
					//De software
					$('#software').removeClass('activado');
						$('#business-software').hide(500);
						$('#graphic-and-multimedia').hide(500);
						$('#operating-systems').hide(500);
						$('#utilities').hide(500);
						$('#all-software').hide(500);
				}
			});







































			$('#input-devices').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#keyboards').hide(500);
					$('#mice-and-track-balls').hide(500);
					$('#microphones').hide(500);
					$('#graphic-tables').hide(500);
					$('#web-cameras').hide(500);
					$('#all-input-devices').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#keyboards').show(500);
					$('#mice-and-track-balls').show(500);
					$('#microphones').show(500);
					$('#graphic-tables').show(500);
					$('#web-cameras').show(500);
					$('#all-input-devices').show(500);

					//De electronic accesories
					$('#electronic-accesories').removeClass('activado');
						$('#batteries').hide(500);
						$('#home-automation').hide(500);
						$('#remote-control').hide(500);
						$('#all-electronic-accesories').hide(500);
					//De computer accesories
					$('#computer-accesories').removeClass('activado');
						$('#computer-speakers').hide(500);
						$('#laptop-accesories').hide(500);
						$('#laptop-bags').hide(500);
						$('#service-and-warranty').hide(500);
						$('#tablet-accesories').hide(500);
						$('#all-computer-accesories').hide(500);
					//De audiovisual equipment
					$('#audiovisual-equipment').removeClass('activado');
						$('#audio-accesories').hide(500);
						$('#cables').hide(500);
						$('#studio').hide(500);
						$('#all-audiovisual-equipment').hide(500);
					//De cameras
					$('#cameras').removeClass('activado');
						$('#camcorders').hide(500);
						$('#cameras-accesories').hide(500);
						$('#camera-lenses').hide(500);
						$('#digital-cameras').hide(500);
						$('#drones').hide(500);
						$('#all-cameras').hide(500);
					//De communication
					$('#communication').removeClass('activado');
						$('#mobile-cell-phones').hide(500);
						$('#mobile-phone-accesories').hide(500);
						$('#smart-watches').hide(500);
						$('#two-way-radios').hide(500);
						$('#all-communication').hide(500);
					//De homeaudio
					$('#home-audio').removeClass('activado');
						$('#amplifiers-and-recievers').hide(500);
						$('#headphones').hide(500);
						$('#home-theater-systems').hide(500);
						$('#radio-players').hide(500);
						$('#speakers').hide(500);
						$('#all-home-audio').hide(500);
					//De gps & mp3
					$('#gps-and-mp3').removeClass('activado');
						$('#gps-accesories').hide(500);
						$('#gps-devices').hide(500);
						$('#mp3-and-media-players').hide(500);
						$('#all-gps-and-mp3').hide(500);
					//De video games
					$('#video-games').removeClass('activado');
						$('#game-consoles').hide(500);
						$('#game-controllers').hide(500);
						$('#game-keys').hide(500);
						$('#playstation-games').hide(500);
						$('#virtual-reality').hide(500);
						$('#all-video-games').hide(500);
					//De portable electronics
					$('#portable-electronics').removeClass('activado');
						$('#ebook-reader-accesories').hide(500);
						$('#ebook-readers').hide(500);
						$('#portable-cd-players').hide(500);
						$('#portable-digital-recorders').hide(500);
						$('#portable-speakers').hide(500);
						$('#all-portable-electronics').hide(500);
					//De tv video
					$('#tv-and-video').removeClass('activado');
						$('#blu-ray-players').hide(500);
						$('#media-streaming-devices').hide(500);
						$('#projectors').hide(500);
						$('#set-top-boxes').hide(500);
						$('#televisions').hide(500);
						$('#all-tv-and-video').hide(500);
					
					//De software
					$('#software').removeClass('activado');
						$('#business-software').hide(500);
						$('#graphic-and-multimedia').hide(500);
						$('#operating-systems').hide(500);
						$('#utilities').hide(500);
						$('#all-software').hide(500);
				}
			});







































			$('#software').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#business-software').hide(500);
					$('#graphic-and-multimedia').hide(500);
					$('#operating-systems').hide(500);
					$('#utilities').hide(500);
					$('#all-software').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#business-software').show(500);
					$('#graphic-and-multimedia').show(500);
					$('#operating-systems').show(500);
					$('#utilities').show(500);
					$('#all-software').show(500);

					//De electronic accesories
					$('#electronic-accesories').removeClass('activado');
						$('#batteries').hide(500);
						$('#home-automation').hide(500);
						$('#remote-control').hide(500);
						$('#all-electronic-accesories').hide(500);
					//De computer accesories
					$('#computer-accesories').removeClass('activado');
						$('#computer-speakers').hide(500);
						$('#laptop-accesories').hide(500);
						$('#laptop-bags').hide(500);
						$('#service-and-warranty').hide(500);
						$('#tablet-accesories').hide(500);
						$('#all-computer-accesories').hide(500);
					//De audiovisual equipment
					$('#audiovisual-equipment').removeClass('activado');
						$('#audio-accesories').hide(500);
						$('#cables').hide(500);
						$('#studio').hide(500);
						$('#all-audiovisual-equipment').hide(500);
					//De cameras
					$('#cameras').removeClass('activado');
						$('#camcorders').hide(500);
						$('#cameras-accesories').hide(500);
						$('#camera-lenses').hide(500);
						$('#digital-cameras').hide(500);
						$('#drones').hide(500);
						$('#all-cameras').hide(500);
					//De communication
					$('#communication').removeClass('activado');
						$('#mobile-cell-phones').hide(500);
						$('#mobile-phone-accesories').hide(500);
						$('#smart-watches').hide(500);
						$('#two-way-radios').hide(500);
						$('#all-communication').hide(500);
					//De homeaudio
					$('#home-audio').removeClass('activado');
						$('#amplifiers-and-recievers').hide(500);
						$('#headphones').hide(500);
						$('#home-theater-systems').hide(500);
						$('#radio-players').hide(500);
						$('#speakers').hide(500);
						$('#all-home-audio').hide(500);
					//De gps & mp3
					$('#gps-and-mp3').removeClass('activado');
						$('#gps-accesories').hide(500);
						$('#gps-devices').hide(500);
						$('#mp3-and-media-players').hide(500);
						$('#all-gps-and-mp3').hide(500);
					//De video games
					$('#video-games').removeClass('activado');
						$('#game-consoles').hide(500);
						$('#game-controllers').hide(500);
						$('#game-keys').hide(500);
						$('#playstation-games').hide(500);
						$('#virtual-reality').hide(500);
						$('#all-video-games').hide(500);
					//De portable electronics
					$('#portable-electronics').removeClass('activado');
						$('#ebook-reader-accesories').hide(500);
						$('#ebook-readers').hide(500);
						$('#portable-cd-players').hide(500);
						$('#portable-digital-recorders').hide(500);
						$('#portable-speakers').hide(500);
						$('#all-portable-electronics').hide(500);
					//De tv video
					$('#tv-and-video').removeClass('activado');
						$('#blu-ray-players').hide(500);
						$('#media-streaming-devices').hide(500);
						$('#projectors').hide(500);
						$('#set-top-boxes').hide(500);
						$('#televisions').hide(500);
						$('#all-tv-and-video').hide(500);
					//De input devices
					$('#input-devices').removeClass('activado');
						$('#keyboards').hide(500);
						$('#mice-and-track-balls').hide(500);
						$('#microphones').hide(500);
						$('#graphic-tables').hide(500);
						$('#web-cameras').hide(500);
						$('#all-input-devices').hide(500);
					
				}
			});








			

});
