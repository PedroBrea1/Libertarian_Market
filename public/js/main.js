$(function(){

			$('.elemento1').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#communication').hide(500);
					$('.elemento12').hide(500);
					$('.elemento13').hide(500);
					$('.elemento111').hide();
					$('.elemento112').hide();
					$('.elemento113').hide();
				}
				else{
					$(this).addClass('activado');
					$('#communication').show(500);
					$('.elemento12').show(500);
					$('.elemento13').show(500);
				}
			});

			$('#communication').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('#mobile').hide(500);
					$('.elemento112').hide(500);
					$('.elemento113').hide(500);
				}
				else{
					$(this).addClass('activado');
					$('#mobile').show(500);
					$('.elemento112').show(500);
					$('.elemento113').show(500);
				}
			});

			$('.elemento12').click(function(){

				if($(this).hasClass('activado')){
					$(this).removeClass('activado');
					$('.elemento121').hide();
					$('.elemento122').hide();
					$('.elemento123').hide();
				}
				else{
					$(this).addClass('activado');
					$('.elemento121').show();
					$('.elemento122').show();
					$('.elemento123').show();
				}
			});

		});