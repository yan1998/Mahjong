		var tempobj=null;
		kolvo=0;
		images1=new Array();
		images2=new Array();
		function rand()
		{
			asmas1=new Array();
			asmas2=new Array();
			for(i=0;i<16;i++)
			{
				while(true)
				{
					x=Math.round(Math.random()*100/6.25);
					if(asmas1[x]!=true &&x!=0){images1[i]=x;asmas1[x]=true;break;}
				}
				while(true)
				{
					x1=Math.round(Math.random()*100/6.25);
					if(asmas2[x1]!=true && x1!=0){images2[i]=x1;asmas2[x1]=true;break;}
				}
			}
		}

		function NewGame()
		{
			var temp1,temp2;
			rand();
			for(i=1;i<=16;i++)
			{
				temp1=images1.pop();
				temp2=images2.pop();
				if(i<=8)
				{
				document.write("<img class='p"+temp1+"'style='cursor: pointer;border:1px solid black;position:absolute; top:20px; left:"+(300+i*57)+"px;' src='img/"+temp1+".jpg' onclick='func(this)'/><br/><br/>");
				document.write("<img class='p"+temp2+"'style='cursor: pointer;border:1px solid black;position:absolute; top:405px; left:"+(300+i*57)+"px;' src='img/"+temp2+".jpg' onclick='func(this)'/><br/><br/>");
				continue;
				}
				if(i<=14)
				{
					document.write("<img class='p"+temp1+"'style='cursor: pointer;border:1px solid black;position:absolute; top:97px; left:"+(i*57-99)+"px;' src='img/"+temp1+".jpg' onclick='func(this)'/><br/><br/>");
					document.write("<img class='p"+temp2+"'style='cursor: pointer;border:1px solid black;position:absolute; top:328px; left:"+(i*57-99)+"px;' src='img/"+temp2+".jpg' onclick='func(this)'/><br/><br/>");
				continue;
				}
				document.write("<img class='p"+temp1+"'style='cursor: pointer;border:1px solid black;position:absolute; top:"+(20+(i-13)*77)+"px;left:100px;' src='img/"+temp1+".jpg' onclick='func(this)'/><br/><br/>");
				document.write("<img class='p"+temp2+"'style='cursor: pointer;border:1px solid black;position:absolute; top:"+(20+(i-13)*77)+"px; left:1000px;' src='img/"+temp2+".jpg' onclick='func(this)'/><br/><br/>");
			}
			rand();
			for(i=1;i<=16;i++)
			{
				temp1=images1.pop();
				temp2=images2.pop();
				if(i<=8)
				{
				document.write("<img class='p"+temp1+"'style='cursor: pointer;border:1px solid black;position:absolute; top:174px; left:"+(300+i*57)+"px;' src='img/"+temp1+".jpg' onclick='func(this)'/><br/><br/>");
				document.write("<img class='p"+temp2+"'style='cursor: pointer;border:1px solid black;position:absolute; top:251px; left:"+(300+i*57)+"px;' src='img/"+temp2+".jpg' onclick='func(this)'/><br/><br/>");
				continue;
				}
				if(i<=13)
				{
				document.write("<img verh='true' class='p"+temp1+"'style='cursor: pointer;border:1px solid black;position:absolute; top:"+((i-8)*77-15)+"px; left:450px;' src='img/"+temp1+".jpg' onclick='func(this)'/><br/><br/>");
				document.write("<img verh='true' class='p"+temp2+"'style='cursor: pointer;border:1px solid black;position:absolute; top:"+((i-8)*77-15)+"px; left:680px;' src='img/"+temp2+".jpg' onclick='func(this)'/><br/><br/>");
				continue;
				}
				document.write("<img class='p"+temp1+"'style='cursor: pointer;border:1px solid black;position:absolute; top:500px; left:"+((i-15)*70+440)+"px;' src='img/"+temp1+".jpg' onclick='func(this)'/><br/><br/>");
				document.write("<img class='p"+temp2+"'style='cursor: pointer;border:1px solid black;position:absolute; top:500px; left:"+((i-15)*70+700)+"px;' src='img/"+temp2+".jpg' onclick='func(this)'/><br/><br/>");
			}
		}
		
		function func(obj)
		{
			if(!images(obj))return;
			if(tempobj==null){obj.style.opacity="0.5";tempobj=obj;return;}	
			if(obj==tempobj){obj.style.opacity="1";tempobj=null; tempclass=null;return;}
			if(obj.className==tempobj.className){tempobj.style.display="none"; obj.style.display="none";tempobj=null;kolvo+=2;if(kolvo==64){setTimeout("alert('Игра окончена!')", 100);}return;}
			if(tempobj!=null && tempobj.className!=obj.className){obj.style.opacity="0.5"; tempobj.style.opacity="1";tempobj=obj;return;}	
		}
				
		function images(obj)
		{
			m=document.getElementsByTagName("img");
			kol=0;
			for(i=0;i<m.length;i++)
			{
				if(m[i]==obj)continue;
				w=obj.getBoundingClientRect().left-m[i].getBoundingClientRect().left;
				if(m[i].style.display!="none"&&m[i].style.top==obj.style.top&&Math.abs(w)<=57){kol++; continue;}
				h=obj.getBoundingClientRect().top-m[i].getBoundingClientRect().top;
				if(obj.getAttribute('verh')!='true'&&m[i].style.display!="none"&&h>=-45&&h<=45&&Math.abs(w)<=57)return false;
				if(kol==2)return false;
			}
			return true;
		}
