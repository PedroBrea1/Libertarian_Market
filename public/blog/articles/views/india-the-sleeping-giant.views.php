<?php include("../articuloplantillaheader.php");?>

      
      <title>India and Democracy</title>
      <div class="titulo-articulo">India and the consolidation of Democracy in the Post Covid World</div>
      <section>
        
        <img src="images/flag-india.jpg" class="imagencabecera">

        <div class="contenidoarticle">
          
          <p>
           In this article we will highlight the role and the significance that India can have in the following years. The key role that can have in the fact that the world economy continues being leaded by democratic countries. In other words, that the world economy maintains in the hands of their citizens.
          </p>
          
          <p>
            It is a fact that China will be the first world economy in the following years. Although their actual Gross Domestic Product is similar to the US, it is clear that in the following years the United States will be far behind the Chinese economy. The two main drivers that will make this happen is demographics and the competitive advantages that the Chinese economy has over the US. China has four times the population of the US economy and it is proven that demographics will be a key driver for economic growth in the future.
          </p>
          
          <p>
            This graph shows the forecast of economic growth of the leading countries by 2033 by the Center of Economics and Business Research based in London:
          </p>
          <br>
          <img src="images/art2/gdp2033.jpg" class="imagenarticle">
          <br>
          <p>
            As explained before, one of the main drivers of the difference in growth in the following years is the competitive advantage that developing countries have over the developed ones. Companies such as Apple are continuously pressured by US politicians to stop the production of smartphones in China and move their plants to the United States but Apple can’t do that. Apple can stop its production in China and move to another country with similar characteristics, but it can’t produce the smartphones in a developed country because their competitors will take a great advantage on them. The biggest smartphone companies in the world have their plants in countries similar to China because of their structures.   
          </p>
          
          <p>
            This is where India, a consolidated democracy since its independence in 1947, appears in the scene. India is a country with a similar structure as the Chinese economy and is a country where companies such as Apple can move in the following years. The main disadvantages that the Indian economy has are its bureacacy and lack of economic freedom. Although the country made efforts in the last years to improve this situation it is much more work to be done yet. Apple can move to any country in the south east Asia, but in this analysis the important thing is not just moving Apple away from non-democratic countries but also empowering the Indian economy. As empowering the indian economy is empowering democracy around the world, is empowering the citizens in continuing being in control of the world economy. 
          </p>
          
          <p>
            This following graph shows characteristics of the countries with low labour costs in East Asia from the Ranking Doing Business and the World Bank:
          </p>
          <br>
          <img src="images/art2/table.jpg" class="table">
          <p>
            The Chinese leaders had a great performance, just think that 40 years ago they had a central planned economy and now they are in the ranking 31 of the Doing Business review. This is an enormous change in a short period of time for an economy that has 1.400 million citizens. The smaller a country is, the easier that those changes can be made, but the Chinese leaders made it as well in such an enormous and complex country. Regarding the economy and the understanding of the market the only thing that remained in the Chinese Communist Party is its name.
          </p>
          
          <p>
            China made reforms since the end of the 1970’s and that is the main reason why it will be clearly the first world economy. India didn’t make reforms in that direction and it is still a sleeping giant and this giant is at sleep because of the lack of economic freedom in the country.   
          </p>
          
          <p>
            If the entire world had a big transformation because of the Chinese reforms, it can have a second big transformation if India make reforms in the same direction as well. This last sentence wasn’t a redundant one. If India makes the reforms that China did in the past the demand for the commodities will rise again and countries that produce that commodities can have another big opportunity to become developed countries as well. Countries such as Chile, that produce and sell copper to the entire world, took advantage of this phenomenon and it had increased the quality of life of their citizens.
          </p>
          
          <p>
            India has a great respect for democracy, freedom of speech and liberty of cult. In addition, since 2018 it is legal to be homosexual in the country. If you are reader from a developed economy in the west part of the world this will be normal for you, but for the countries in the East this is not a common issue.   
          </p>
          
          <p>
            The policies of the Indian politicians and the evolution in the structure of the Indian economy will be an important issue in the following decade. They can be a great driver to economic growth, to the reduction of poverty, a great opportunity for developing countries and will strengthen democracy in the global economy.
          </p>
          
          <p>
            What are your thougths? Do you think that India will do those reforms? Do you think that China one day will turn into a democracy?
          </p>
          <br>
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
        url:"../../ajax/articles/art2/add_comment_art2.php",
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
        url:"../../ajax/articles/art2/fetch_comment_art2.php",
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