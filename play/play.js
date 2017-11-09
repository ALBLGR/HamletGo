
		var media;
		var container;
		var control;
		var nowEvent;
		var timer;
		var timeSequence = {
			101: {type:'play', name:'A1S2_1(Claudius explain marriage)', src:'payload/A1S2 Part 1.mp4', next :103},
			// 102: {type:'play', name:'A1S2_2 Horatio', src:'payload/A1S5 Horatio.mp4',next: 103},
			103: {type:'play', name:'A1S4_1 Ghost', src:'payload/A1S4 Ghost.mp4',next: 401},
			104: {type:'play', name:'A1S4_2 Act crazy', src:'payload/A1S5 Horatio.mp4',next: 105},
			105: {type:'play', name:'A2S2 Polonius', src:'payload/A2S2 Polonius.mp4',next: 106},
			106: {type:'play', name:'A3S1 To be or', src:'payload/To be or not to be.mp4',next: 107},	
			107: {type:'play', name:'Ophelia', src:'payload/A3S3 Ophelia.mp4',next: 109},
			109: {type:'play', name:'The play', src:'payload/A3S2.mp4',next: 110},
			108: {type:'play', name:'Kill Polonius', src:'payload/A3S2_A4S3(killed polonius).mp4',next: 110},
			110: {type:'play', name:'on ship', src:'payload/seaview.mp4',next: 403},
			// 109: {type:'play', name:'A3S4_2 ghost appear', src:'payload/A3S3 Ophelia.mp4',next: 404},
			// 110: {type:'play', name:'drag Polonius body', src:'payload/A3S3 Ophelia.mp4',next: 110},
			111: {type:'play', name:'pirate captured hamlet', src:'payload/NIP 哈姆雷特被俘（加音效）.mp4',next: 113},
			112: {type:'play', name:'pirate killed by hamlet', src:'payload/NIP 海盗死（加音效）.mp4',next: 701},
			113: {type:'play', name:'drag hamlet off the ship', src:'payload/dragofftrain.mp4',next: 114},
			114: {type:'play', name:'at the grave', src:'payload/沙坑挖头.mov',next: 204},


			201: {type:'destiny', name:'Hamlet & Horatio live a happy life', src:'payload/siben.mp4',next :301},
			203: {type:'destiny', name:'Hamlet killed for treason (killing Claudius)', start : 36,end : 38,next :301},
			204: {type:'destiny', name:'the last dinner', src:'payload/A5S2 喝酒（原音）.mov',next :205},
			205: {type:'destiny', name:'the last dinner Claudius died', src:'payload/A5S2 Gertrude晕倒（原音）.mov',next :706},
			// 205: {type:'destiny', name:'Hamlet killed in UK', start : 42,end : 44,next :301},
			// 206: {type:'destiny', name:'Hamlet & Laertez dead in the grave', start : 45,end : 47,next :301},
			// 207: {type:'destiny', name:'Hamlet slain but Laertez lives', start : 48,end : 50,next :301},
			// 208: {type:'destiny', name:'Hamlet & Laertez slain by poisoned sword', start : 22,end : 30,next :301},
			209: {type:'destiny', name:'Hamlet killed at dinner', start : 51,end : 53,next :301},
			
			301: {type:'ending', name:'结尾', src:'payload/ending.mp4'},
			
			401: {type:'breakpoint', name:'To believe or not to believe',content:'Will Hamlet believe the word of the ghost......',option1:'believe',option2:'ignore', nav1:104, nav2:201 },
			// 402: {type:'breakpoint', name:'To say or not to say',content:'Ophelia I love you......',option1:'say it',option2:'hmmmmm..', nav1:103, nav2:201, annotation:'这里我看不太懂写了些啥，但是逻辑没错就是了'},
			403: {type:'breakpoint', name:'To kill or not to kill',content:'the pirates',option1:'kill',option2:'surrender', nav1:112, nav2:111 },

			// 404: {type:'breakpoint', name:'To kill or not to kill',content:'Damn it Polonius......',option1:'Stab',option2:'Forgive', nav1:109, nav2:204},
			405: {type:'breakpoint', name:'Oh no!',content:'Which is my sword',option1:'left one',option2:'right one', nav1:704, nav2:209 },
			406: {type:'breakpoint', name:'To kill or not to kill!',content:'Claudius.....',option1:'FIRST BLOOD',option2:'NO', nav1:601, nav2:111 },
			
			501:{type:'combat', name:'Fight with Laertez', src:'payload/',next:405},

			601: {type:'random', name:'杀claudius 可能被发现',option1:true,option2:false, nav1:702, nav2:201, rate:0.7},
			602: {type:'random', name:'whether pirate is killed',option1:true,option2:false, nav1:701, nav2:113, rate:0.1 },
			// 602: {type:'random', name:'Laertez反击',option1:true,option2:false, nav1:206, nav2:501, rate:0.2 },
			// 603: {type:'random', name:'Laertez给不给毒剑',option1:true,option2:false, nav1:108, nav2:109, rate:0.5 },

			// 701: {type:'surprize', name:'push over the table',option1:true,option2:false, nav1:110, nav2:111 }
			701:{type:'text',name:'Hamlet were killed in England.<br>END',duration:5000, next:301},
			702:{type:'text',name:'Hamlet were killed for murdering Claudius.<br>END',duration:5000, next:301},
			703:{type:'text',name:'Hamlet were killed for murdering Claudius.<br>END',duration:5000, next:301},
			704:{type:'text',name:'Hamlet were poisoned. Laertez to be the king.<br>END',duration:5000, next:301},
			705:{type:'text',name:'We are sorry, but the snippet of Hamlet fighting with Laertez was lost in somewhere in the campus.',duration:2000, next:115},
			706:{type:'text',name:'Hamlet Jr. to be the new king!<br>END',duration:4000, next:301},
		};



		// function timeEvent(time){
		// 	if(nowEvent.type=='play' ||nowEvent.type=='destiny' || nowEvent.type=='ending' ){   //要播放视频的内容
		// 		if(nowEvent.type=='ending' && time>nowEvent.end && time<nowEvent.end+1){ //END
		// 			togglePlay();
		// 			clearInterval(timer);
		// 		}

		// 		if(time>nowEvent.end && time<nowEvent.end+1){
		// 			console.info(nowEvent.name);
		// 			nowEvent = timeSequence[nowEvent.next]; //Advance to next item
					
		// 			if(nowEvent.type=='play' ||nowEvent.type=='destiny' || nowEvent.type=='ending'){ //normal play
		// 				media.currentTime = nowEvent.start;
		// 			}
		// 			else if (nowEvent.type=='breakpoint'){//bkpnt
		// 				showNavigation(nowEvent.name,nowEvent.content,nowEvent.option1,nowEvent.option2,nowEvent.nav1,nowEvent.nav2);
		// 			}
		// 			else if(nowEvent.type=='combat'){
		// 				addCombatWindow();
		// 				console.warn(nowEvent);
		// 				media.currentTime = nowEvent.start;
		// 			}
		// 			else if(nowEvent.type=='random'){
		// 				randomEvent();
		// 			}
		// 			else if(nowEvent.type=='text'){
		// 				handleText();
		// 			}
		// 		}
				
		// 	}
			
		// };

		function handleText(){
			$(media).hide();
			
			var span = document.createElement('span');
			span.className = 'promptText';
			span.innerHTML = nowEvent.name;
			container.appendChild(span);
			setTimeout(function() {
				
				nowEvent = timeSequence[nowEvent.next];
				reload(nowEvent.src);
				$(span).fadeOut();
				$(media).fadeIn();
				
			}, nowEvent.duration);
		};

		function handleEventChange(){
				if(nowEvent.type=='play' ||nowEvent.type=='destiny' || nowEvent.type=='ending' ){   //要播放视频的内容
				if(nowEvent.type=='ending' ){ //END
					clearInterval(timer);
					showContribution();
				}

					console.info(nowEvent.name);
					nowEvent = timeSequence[nowEvent.next]; //Advance to next item
					
					if(nowEvent.type=='play' ||nowEvent.type=='destiny' || nowEvent.type=='ending'){ //normal play
						reload(nowEvent.src);
					}
					else if (nowEvent.type=='breakpoint'){//bkpnt
						showNavigation(nowEvent.name,nowEvent.content,nowEvent.option1,nowEvent.option2,nowEvent.nav1,nowEvent.nav2);
					}
					else if(nowEvent.type=='combat'){
						addCombatWindow();
						console.warn(nowEvent);
						reload(nowEvent.src);
					}
					else if(nowEvent.type=='random'){
						randomEvent();
					}
					else if(nowEvent.type=='text'){
						handleText();
					}
				
			}
		};



			function randomEvent(){
			var nav1=nowEvent.nav1;
			var nav2=nowEvent.nav2;
			var rate=nowEvent.rate;
			var rand = Math.random();
			console.warn(rand);
			if(rand<rate){
				nowEvent = timeSequence[nav1];
				reload(nowEvent.src);
				if(nowEvent.type=='combat'){
						addCombatWindow();
						console.warn(nowEvent);
					}
				return true;
			}
			else{
				nowEvent = timeSequence[nav2];
				reload(nowEvent.src);
					 if(nowEvent.type=='combat'){
						addCombatWindow();
						console.warn(nowEvent);
					}
				return false;	
			}

		};

		window.onload = function(){
			reload(timeSequence[101].src);
			media = document.getElementById("video1");
			media.controls = false;
			media.pause();
			container = document.getElementById('container');
			nowEvent = timeSequence[101];
			showIntro();

	};

	function load(){
			media.play();
			timer = setInterval('refreshTime()',200);
			var onwaiting = document.createElement('img');
			container.appendChild(onwaiting);
			$(onwaiting).hide();
			onwaiting.className='onwaiting';
			onwaiting.src='onwaiting.gif';
			media.onwaiting= function(){
			$(onwaiting).show();
		};
			media.oncanplay= function(){
				$(onwaiting).hide();
			};

			media.onended = function(){
				
				handleEventChange();
			};

		addNavBtn();
	};


		function reload(url){
			document.getElementById("mp4_src").src=url;
			document.getElementById("video1").load();
		};
		function togglePlay(){
			if(media.paused){
				media.play();
			}
			else{
				media.pause();
			}
		};



		function refreshTime(){
				var time = media.currentTime;
				document.getElementById('currentTime').innerHTML = media.currentTime;
				console.debug(nowEvent.name);
				// timeEvent(time);
		};

		function addCombatWindow(){
			media.currentTime = nowEvent.start;
			var div=document.createElement("div");
			var box=document.createElement("span");
			div.appendChild(box);
			box.style="border:1px solid #00F;position:absolute;left:4%;top:1%;width:20%;height:5%";
			var shade=document.createElement("span");
			shade.style="background-color:red;position:absolute;left:0px;top:0px;height:100%;width:70%";
			box.appendChild(shade);
			div1=div.cloneNode(true);
			var lab = document.createElement("span");
			lab.style="position:absolute;left:4%;top:6%;font-size:2em;font-family:'Consolas';color:white";
			lab.innerHTML="HAMLET";
			div.appendChild(lab);
			document.getElementById('container').appendChild(div);
			var HPHamlet = setInterval(function() {
				var str=shade.style.width.replace("%","");
				if(str>1){
					console.debug(shade.style.width);
					str-=20*Math.random();
					shade.style.width=str+'%';
				}
				else{
					clearInterval(HPHamlet);
					console.info('Hamlet is slain!');
					nowEvent = timeSequence[nowEvent.next];
					if (nowEvent.type=='breakpoint'){//bkpnt
						showNavigation(nowEvent.name,nowEvent.content,nowEvent.option1,nowEvent.option2,nowEvent.nav1,nowEvent.nav2);
					}
					$(stab).hide();
				};

			}, 1000);
			
			var box1=div1.firstChild;
			box1.style="border:1px solid #00F;position:absolute;right:4%;top:1%;width:20%;height:5%";
			box1.firstChild.style="background-color:maroon;position:absolute;right:0px;top:0px;height:100%;width:50%;";
			var lab1 = document.createElement("span");
			lab1.style="position:absolute;right:4%;top:6%;font-size:2em;font-family:'Consolas';color:white";
			lab1.innerHTML="LAERTZ";
			div1.appendChild(lab1);
			document.getElementById('container').appendChild(div1);

			var name = document.createElement('span');
			name.style="position:absolute;left:0%;top:1%;width:100%;text-align:center;color:white";
			name.innerHTML="ROUND 1";
			document.getElementById('container').appendChild(name);

			var stab = showOption('Stab LAERTZ');
			stab.style.left='350px';
			$(stab).click(function(){
				var str=box1.firstChild.style.width.replace("%","");
				if(str>1){
					console.debug(box1.firstChild.style.width);
					str-=10;
					box1.firstChild.style.width=str+'%';
				}
				else{
					console.info('Laertz is slain!');
					clearInterval(HPHamlet);
					$(stab).hide();
					nowEvent = timeSequence[nowEvent.next];
					if (nowEvent.type=='breakpoint'){//bkpnt
						showNavigation(nowEvent.name,nowEvent.content,nowEvent.option1,nowEvent.option2,nowEvent.nav1,nowEvent.nav2);
					}
				};

			});

			console.debug('hey');
			document.getElementById('container').appendChild(stab);

			
		};

		function showNavigation(ti,cont,opt1,opt2,nav1,nav2){
			media.pause();
			var title = document.createElement('span');
			var content = document.createElement('span');
			var shadow = document.createElement('span');
			var img = document.createElement('img');
			var progressBar = document.createElement('div');
			progressBar.className='progressBar';
			progressBar.innerHTML="<div id='fountainG'><div id='fountainG_1' class='fountainG'></div>	<div id='fountainG_2' class='fountainG'></div><div id='fountainG_3' class='fountainG'></div>	<div id='fountainG_4' class='fountainG'></div><div id='fountainG_5' class='fountainG'></div>	<div id='fountainG_6' class='fountainG'></div><div id='fountainG_7' class='fountainG'></div><div id='fountainG_8' class='fountainG'></div></div>";
			img.src='hamlet.png';
			img.className='hamletImg'
			shadow.className='shadow';
			$(shadow).animate({opacity:0.3},'slow');
			title.className = 'optionTitle';
			content.className= 'optionContent';
			title.innerHTML = "<span><span class='glyphicon glyphicon-play' style='font-size:0.7em'></span></span>" + ti;
			content.innerHTML = cont;
			var option1 = showOption(opt1);
			var option2 = showOption(opt2);
			option1.style.left = '150px';
			option2.style.left = '550px';
			option1.style.top = '250px';
			option2.style.top = '250px';
			function hideAll(){
				$(shadow).animate({opacity:1},'fast');
				$(shadow).hide();
				$(title).hide();
				$(content).hide();
				$(option1).hide();
				$(option2).hide();
				$(img).hide();
				$(progressBar).hide();
			};
			$(option1).click(function(){
				nowEvent = timeSequence[nav1];
				reload(nowEvent.src);
				hideAll();
			});
			$(option2).click(function(){
				nowEvent = timeSequence[nav2];
				reload(nowEvent.src);
				hideAll();
			});
			container.appendChild(shadow);
			container.appendChild(img);
			container.appendChild(option1);
			container.appendChild(option2);
			container.appendChild(progressBar);
			container.appendChild(title);
			container.appendChild(content);

			return new Array(option1, option2);
		};

		function showOption(content){
			var stab=document.createElement('span');
			stab.className="option";
			var text=document.createElement('span');
			text.className='optionText';
			text.innerHTML="<span class='glyphicon glyphicon-chevron-left' style='font-size:0.7em;'></span>"+content;
			stab.appendChild(text);
			$(stab).click(function(){
    			$(this).animate({width:'-=100',left:'+=50'},'fast');
    			$(this).animate({width:'+=100',left:'-=50'},'fast');

  			});
  			return stab;
		};

		function addNavBtn(){
			var leftBtn = document.createElement('span');
			var leftIcon = document.createElement('span');
			leftBtn.className = 'navBtn';
			leftIcon.className = 'navIcon glyphicon glyphicon-chevron-left';
			leftBtn.id='leftBtn';
			leftBtn.style.bottom= '40px';
		    leftBtn.style.right= '100px';
			leftBtn.appendChild(leftIcon);
			container.appendChild(leftBtn);

			var rightBtn = document.createElement('span');
			var rightIcon = document.createElement('span');
			rightBtn.className = 'navBtn';
			rightIcon.className = 'navIcon glyphicon glyphicon-chevron-right';
			rightBtn.id='rightBtn';
			rightBtn.style.bottom= '40px';
		    rightBtn.style.right= '30px';
			rightBtn.appendChild(rightIcon);
			container.appendChild(rightBtn);
			$(leftBtn).click(function(){media.currentTime-=2;});
			$(rightBtn).click(function(){media.currentTime+=2;});
		};

		function showPrompt(text){
			var prompt = document.createElement('span');
			prompt.className="prompt";
			prompt.innerHTML=text;
			container.appendChild(prompt);
			return prompt;
		};

		function addImg(url,action,top,left,width){
			var img = document.createElement('img');
			img.className="img";
			img.src=url;
			img.style.top=top;
			img.style.left=left;
			img.style.width=width;
			img.onclick = action;
			container.appendChild(img);
			return img;
		};

		function showMsgBox(speaker,content,timeout,imgurl){
			var box = document.createElement('div');
			var img = document.createElement('img');
			var msg = document.createElement('span');
			var label = document.createElement('span');
			box.className='msgBox';
			msg.innerHTML=content;
			img.className="imgIcon";
			img.src=imgurl;
			msg.className='msg';
			label.className='charLabel'
			label.innerHTML=speaker;
			box.appendChild(img);
			box.appendChild(msg);		
			box.appendChild(label);	
			container.appendChild(box);
			setTimeout(function() {$(box).hide()}, timeout*1000);
			return box;
		};

		function showContribution(){
			var div = document.createElement('div');
				div.innerHTML = "<span style='font-size:1.2em;font-weight:bold'>Contributions</span><br>";
				div.innerHTML +="HTML5, CSS3<br>JavaScript<br><img src='hcj.jpg' style='width:200px'><br>";
				div.innerHTML +="-jQuery API<br><img src='jquery.jpg' style='width:200px'><br>";
				div.innerHTML +="-jPlayer API<br>";
				div.innerHTML +="<img src='jplayer.jpg' style='width:200px'><br>";
				div.innerHTML +="<img src='hcj.jpg' style='width:200px'><br>";
				div.innerHTML +="Twitter Bootstrap<br>";
				div.innerHTML +="<img src='bootstrap.jpg' style='width:200px'><br>";
				div.innerHTML +="Adobe Premiere<br>";
				div.innerHTML +="<img src='pr.jpg' style='width:100px'><br>";
				div.innerHTML +="Adobe After Effects<br>";
				div.innerHTML +="<img src='ae.jpg' style='width:100px'><br>";
				div.innerHTML +="Sublime Text<br>";
				div.innerHTML +="<img src='sublime.jpg' style='width:100px'><br>";
				div.innerHTML +="GitHub<br>";
				div.innerHTML +="<img src='github.jpg' style='width:100px'><br>";
				div.innerHTML +="<br>";
				div.innerHTML +="Chrome<br>";
				div.innerHTML +="<img src='chrome.jpg' style='width:200px'><br>";
				div.innerHTML +="<br>";
				div.innerHTML +="<strong>Credits</strong><br>";
				div.innerHTML +="Adobe Systems, Inc.<br>";
				div.innerHTML +="<img src='adobe.jpg' style='width:100px'><br>";
				div.innerHTML +="Oracle Systems, Inc.<br>";
				div.innerHTML +="<img src='oracle.jpg' style='width:200px'><br>";
				div.innerHTML +="Twitter, Inc<br>";
				div.innerHTML +="<img src='twitter.jpg' style='width:100px'><br>";
				div.innerHTML +="GitHub, Inc<br>";
				div.innerHTML +="<img src='github.jpg' style='width:100px'><br>";
				div.innerHTML +="World Wide Web Consortium<br>";
				div.innerHTML +="<img src='w3c.jpg' style='width:200px'><br>";
				div.innerHTML +="Google, Inc.<br>";
				div.innerHTML +="<img src='google.jpg' style='width:200px'><br>";
				div.innerHTML +="Some open-source components contributors<br>";
				div.innerHTML +="<br>";
				div.innerHTML +="<strong>Locations of Recording</strong><br>";
				div.innerHTML +="Some coffee house in OCT LOFT<br>";
				div.innerHTML +="<img src='oct.jpg' style='width:100px'><br>";
				div.innerHTML +="IKEA<br>";
				div.innerHTML +="<img src='ikea.jpg' style='width:200px'><br>";
				div.innerHTML +="Shenzhen Metro<br>";
				div.innerHTML +="<img src='szmetro.jpg' style='width:200px'><br>";
				div.innerHTML +="Coco Park<br>";
				div.innerHTML +="<img src='coco.jpg' style='width:100px'><br>";
				div.innerHTML +="Yitian Community Service Center<br>";
				div.innerHTML +="<img src='community.jpg' style='width:200px'><br>";
				div.innerHTML +="Shenzhen Middle School<br>";
				div.innerHTML +="<img src='szzx.jpg' style='width:200px'><br>";
				div.innerHTML +="<br>";
				div.innerHTML +="<strong>Cast</strong><br>";
				div.innerHTML +="Claudius – Hector Wang<br>";
				div.innerHTML +="Horatio – Patrick Zhong<br>";
				div.innerHTML +="Gertrude – Victoria Huang<br>";
				div.innerHTML +="Hamlet – Yorick Wang<br>";
				div.innerHTML +="Ophelia - Lydia Lin<br>";
				div.innerHTML +="Polonius / Laertez Eno Chen<br>";
				div.innerHTML +="<br>";
				div.innerHTML +="<br>";
				div.innerHTML +="After Effects<br>";
				div.innerHTML +="Editing & Recording - Kitty Cecelia <br>";
				div.innerHTML +="Web application - Eno Chen<br>";
				div.innerHTML +="<br><br><br><br><br><br><br><br><br>";
				div.innerHTML +="<strong style:'font-size:1.5em'>This project is open-source. Codes can be found on:</strong><br>";
				div.innerHTML +="<img src='github.jpg' style='width:100px'><br>";
				div.innerHTML +="<br><br><br>";
				div.innerHTML +="Special Credits to<br> ";
				div.innerHTML +="<div><img src='phill.jpg' style='width:100px'><span style='font-size:2em;font-weight:bold'>Phillip Stout</span></div><br>";
				div.innerHTML +="Instructor of AP English Language and Composition<br>";
				div.className = 'contribution';
				container.appendChild(div);
    			$(div).animate({bottom:'600px'},30000);
		};

		function showIntro(){
			var interactive = document.createElement('span');
			interactive.className = 'introInter';
			var a = document.createElement('span');
			var b = document.createElement('span');
			var c = document.createElement('span');
			a.innerHTML = '&gt;';
			b.innerHTML = '&gt;';
			c.innerHTML = '&gt;';
			$(a).hide();
			$(b).hide();
			$(c).hide();
			animateInt = function(){
				$(a).fadeIn('slow');
				$(b).fadeIn('slow');
				$(c).fadeIn('slow');
				$(a).fadeOut(0);
				$(b).fadeOut(0);
				$(c).fadeOut(0);
			};
			var timer = setInterval(animateInt, 1000);
			

			interactive.appendChild(a);
			interactive.appendChild(b);
			interactive.appendChild(c);
			var title = document.createElement('span');
			title.innerHTML = 'HamletGo!';
			title.className = "introTitle";
			var content = document.createElement('span');
			content.className = 'introContent';
			content.innerHTML = 'an interactive reproduction.'
			var note = document.createElement('span');
			note.innerHTML = "Please note that the performance of the film depends on your browser engine as it is rendered REAL-TIME.";
			note.innerHTML += "<br>For Phill, I strongly suggest you to check out the resources in <strong>payload/</strong> folder directly! Since some missing files are replaced by raw recording, the quality may be unsatisfied, sorry.";
			note.innerHTML += "<br>Use notepad to view play.js for application logic. They are dynamically loadded from this file.";
			note.className = 'introNote';
			var btn = showOption("OK. Let's GO!");
			btn.style.bottom = '30px';
			btn.style.left = '350px';
			container.appendChild(btn);
			container.appendChild(title);
			container.appendChild(content);
			container.appendChild(note);
			container.appendChild(interactive);
			$(btn).click(function(){
				clearInterval(timer);
				$(btn).hide();
				$(title).hide();
				$(content).hide();
				$(note).hide();
				$(interactive).hide();
				load();
			});
		};