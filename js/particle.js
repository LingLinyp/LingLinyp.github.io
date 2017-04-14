	//下雪效果

	var canvas = document.getElementById('MyCanvas');
	var ctx = canvas.getContext('2d');
	var W =   window.innerWeight || document.documentElement.clientWidth || document.body.clientWidth;
	var H = 500;
	canvas.width = W;
	canvas.height = H;

	var particles_number = 50;
	var particles = [];
	for(i = 0; i < particles_number; i++){
		particles.push({
			           x: Math.random()*W,
		               y: Math.random()*H,
		               r: Math.random()*3+1,
		              })
	}

   window.setInterval(draw, 100);
   
   function draw()
   {
   	ctx.clearRect(0, 0, W, H);

	ctx.fillStyle = 'rgb(255,255,255)';
	
	ctx.beginPath();
   	for(var i = 0; i < particles_number; i++)
   	{
   		var p = particles[i];
   		ctx.moveTo(p.x, p.y);
   		ctx.arc(p.x, p.y, p.r, 0, Math.PI *2);
   	}
   	
   	ctx.fill();
   	update();
   
   }

  function update()
	{
		var step = 1;
		for(var i = 0; i < particles_number; i++)
		{
			var p = particles[i];
			p.x = p.x + step;
			p.y = p.y + step;
			

			if (p.x > W)
			{
				p.x = p.x - W;
			}
			if (p.y > H)
			{
				p.y = p.y - H;
		    }
	    }
   }

//導航欄的設置
   $(window).scroll(function(){
             if($(window).scrollTop()>400)
            $(".navbar-custom").addClass("main");
            else
                 $(".navbar-custom").removeClass("main");
           });//导航栏背景变为不透明
   　　