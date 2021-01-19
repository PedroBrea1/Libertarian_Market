<?php include("../articuloplantillaheader.php");?>
      <title>Mask Evidence</title>  
      <div class="titulo-articulo">Please wear masks! There is hard evidence that are useful to avoid contagion!</div>
      <section>
      	<img src="images/surgical-mask.jpg" class="imagencabecera">

      	<div class="contenidoarticle">
      		
      		<p>
	      		In this article we will make a review on what is proved on the propagation of the coronavirus because understanding this will make us take conscience on the importance of wearing the masks. We will highlight a concrete case in which a massive contagion was avoided and a final reflection on some measures that governments could take. 
	      	</p>
	      	<p>
	      		The World Healt Organization, the only institution authorized to define what information is valid and what is not in this crisis, states the following:
	      	</p>
	      	<p class="specialtext1">
	      		“Current evidence suggests that COVID-19 spreads between people through direct, indirect (through contaminated objects or surfaces), or close contact with infected people via mouth and nose secretions. These include saliva, respiratory secretions or secretion droplets. These are released from the mouth or nose when an infected person coughs, sneezes, speaks or sings, for example. People who are in close contact (within 1 metre) with an infected person can catch COVID-19 when those infectious droplets get into their mouth, nose or eyes.
	      	</p>
	      	<p class="specialtext1">
	      		To avoid contact with these droplets, it is important to stay at least 1 metre away from others, clean hands frequently, and cover the mouth with a tissue or bent elbow when sneezing or coughing. When physical distancing (standing one metre or more away) is not possible, wearing a fabric mask is an important measure to protect others. Cleaning hands frequently is also critical.”
	      	</p>
	      	<p>
	      		After reading the conclusión that the WHO has arrived after the evaluation of different research that was made by institutions around the world it is clear that the use of the mask is absolutely important to avoid massive risk contagion. If we all have in clear how the transmission of the virus is, we will be much more conscious of how the virus is transmitted.
	      	</p>
	      	<br>
	        <img src="images/art3/bluefacemask.png" class="imagenarticle">
	        <br>
	      	<p>
	      		Until now, everything said is far away from the day-by-day of the reader as well as the writer of this article… so let’s talk about a concrete case in which the use of a mask avoided a great contagion.
	      	</p>
	      	<p>
	      		The case occurred in the United States in a hairdressing in Springfield, Missouri. Two hairdressers proved to have the virus and were in contact with 140 clients. When the clients were tested none of them give a positive result in the test. What happened? The hairdressers were responsable workers that do their job wearing the mask.
	      	</p>
	      	<br>
	        <img src="images/art3/image.jpg" class="imagenarticle">
	        <br>
	      	<p>
	      		Although authorities repeat once and again how important is to wear the mask, although what the WHO research conclude… it is in a real life case were the society takes real consciousness of the importance of wearing the mask. Why? Because it is a case of the day-by-day of every citizen while the government authorities and WHO are far away from the day-by-day of people matters. It is natural, it is what it is.
	      	</p>
	      	<p>
	      		Human nature reveals that people make all the time cost/benefit calculations in order to make their decisions. If there is not cost for not wearing the mask, then people won’t wear it. Appealing to the consciousness of the society won’t bring good results, if people are not fined for wearing a mask the contagion rate will be very difficult to be reduced.  
	      	</p>
	      	<p>
	      		This means making a decision taking into account human nature and without taking away freedom from society. Specially the freedom of going to work which is one of the most important issues in the life of an individual. In this case, appealing to the economic incentives can bring great results in reducing the contagion.
	      	</p>
	      	<p>
	      		Citizens must be fined for not wearing masks in public places as well as businesses must also be fined in cases where their employees don’t wear a mask and don’t respect the maximum capacity in their locals in order to avoid social distancing. The máximum capacity measure is a one that have a great economic impact, not just for the businesses but for the workers that won’t recover their job. It is a painful decision to make but if the contagion is under control people will be more calmed and would be a driver to a better recovery of the economy.
	      	</p>
	      	<p>
	      		What are your thoughts? Do you think that people should be fined for not wearing a mask? Do you think that appealing to the consciousness of the society is enough to make people wear the mask?
	      	</p>
	      	<p>
	      		
	      	</p>
	      	<p>
	      		
	      	</p>
	      	<p>
	      		
	      	</p>
	      	<p>
	      		 
	      	</p>
	      	<p>
	      		
	      	</p>
      		<br>    		
      	</div>
      	
      </section>

      <section>       
        <form action="" method="POST" class="formcomments" id="comment_form">
        <input type="text" name="comment_name" id="comment_name" placeholder="Username" class="commentusername">
        <textarea type="text" name="comment_content" id="comment_content" placeholder="Comments" class="commentary"></textarea>
        <div>
          <input type="hidden" name="comment_id" id="comment_id" value="0" />
          <input type="submit" name="send" value="Send comment" class="buttoncomment">
        </div>
        
        </form>
        <span id="comment_message"></span>
        <br>
        



        <div class="newsletterarticle">
          <h3>Newsletter</h3>
          <h4>Get informed when the next article is published!</h4>
          <a href="../../newsletter-sign-up.php">Suscribe</a>
        </div>
      
        <div id="display_comment" class="allcomments"></div>

       
      </section>

<?php include("../articuloplantillafooter.php");?>
      
 <script type="text/javascript">
  $(document).ready(function(){

    $('#comment_form').on('submit', function(event){
      event.preventDefault();
      var form_data = $(this).serialize();
      $.ajax({
        url:"../../ajax/articles/art3/add_comment_art3.php",
        method:"POST",
        data:form_data,
        dataType:"JSON",
        success:function(data)
        {
          if(data.error == '')
					{
						$('#comment_form')[0].reset();
						//$('#comment_message').html(data.error);
						$('#comment_id').val('0');
     					load_comment();
     					alert("Comment added!");
					}else{
					    alert("Please fill all the data!");
					}
        }
      })


    });

    load_comment();

    function load_comment()
    {
      $.ajax({
        url:"../../ajax/articles/art3/fetch_comment_art3.php",
        method:"POST",
        success:function(data)
        {
          $('#display_comment').html(data);
        }
      })
    }

    $(document).on('click', '.reply', function(){
      var comment_id = $(this).attr("id");
      $('#comment_id').val(comment_id);
      $('#comment_name').focus();
     });

  });



</script>