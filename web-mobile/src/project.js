require=function e(t,n,o){function c(a,s){if(!n[a]){if(!t[a]){var d="function"==typeof require&&require;if(!s&&d)return d(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var r=n[a]={exports:{}};t[a][0].call(r.exports,function(e){var n=t[a][1][e];return c(n||e)},r,r.exports,e,t,n,o)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)c(o[a]);return c}({End:[function(e,t,n){"use strict";cc._RF.push(t,"5706f7D98RHd7s9aNyIjUOT","End"),cc.Class({extends:cc.Component,properties:{win:{default:null,type:cc.Node},lose:{default:null,type:cc.Node},tie:{default:null,type:cc.Node},btn:{default:null,type:cc.Node}},onLoad:function(){this.win.opacity=this.lose.opacity=this.tie.opacity=0,1==window.win?this.win.opacity=255:2==window.win?this.lose.opacity=255:this.tie.opacity=255,this.btn.on("touchend",function(e){cc.director.loadScene("sel")})},start:function(){}}),cc._RF.pop()},{}],Mball:[function(e,t,n){"use strict";cc._RF.push(t,"a4fc0xwUzNAmrvmb0LEieOU","Mball"),cc.Class({extends:cc.Component,properties:{gameCtl:e("Mcanvas"),y1:0,y2:0},again:function(e){var t=t=cc.randomMinus1To1()>0?1:-1,n=n=cc.randomMinus1To1()>0?1:-1;this.scheduleOnce(function(){this.node.position=cc.v2(0,0),this.getComponent(cc.RigidBody).linearVelocity=cc.v2(this.speedx*t,this.speedy*n),cc.director.getPhysicsManager().enabled=!0,this.gameCtl.unscheduleAllCallbacks(),1==window.Sel&&this.gameCtl.robot()},2)},onBeginContact:function(e,t,n){var o=parseInt(this.getComponent(cc.RigidBody).getWorldPosition().x),c=parseInt(this.getComponent(cc.RigidBody).getWorldPosition().y);this.stop[0]!=o&&this.stop[1]!=c||this.again();var a=e.getWorldManifold().points,s=t.body.getLinearVelocityFromWorldPoint(a[i]).y;switch(n.tag){case 1:s>0?e.disabled=!0:this.gameCtl.onBallContactPaddle(t.node,n.node);break;case 2:s<0?e.disabled=!0:this.gameCtl.onBallContactPaddle(t.node,n.node);break;case 3:this.gameCtl.onBallContactWall(t.node,n.node);break;case 11:case 22:this.gameCtl.onBallContactGround(t.node,n.node)}this.stop[0]=o,this.stop[1]=c},onEndContact:function(e,t,n){1!=n.tag&&2!=n.tag||this.gameCtl.onBallEndMan(t.node,n.node)},init:function(){this.speedy=300,this.speedx=400;var e=e=cc.randomMinus1To1()>0?1:-1,t=t=cc.randomMinus1To1()>0?1:-1;this.getComponent(cc.RigidBody).linearVelocity=cc.v2(this.speedy*e,this.speedx*t)},onLoad:function(){this.stop=[],cc.director.getPhysicsManager().enabled=!0},start:function(){},thouch:function(){var e=this,t=0;this.node.parent.on("touchstart",function(n){t=e.node.parent.convertToNodeSpaceAR(n.getLocation()).x}),this.node.parent.on("touchmove",function(n){e.node.getPosition().y;for(var o=e.node.parent.convertToNodeSpaceAR(n.getLocation()).x,c=o-t,i=[],a=1;a<=10;a++)i.push(cc.find("Canvas/PhysicsLayer/teamA/playA"+a).x);var s=i;(i=i.map(function(e){return e+.4*c}))[0]<120&&i[0]>-120&&(s[0]=cc.find("Canvas/PhysicsLayer/teamA/playA1").x=i[0]),i[1]<330&&i[2]>-330&&(s[1]=cc.find("Canvas/PhysicsLayer/teamA/playA2").x=i[1],s[2]=cc.find("Canvas/PhysicsLayer/teamA/playA3").x=i[2]),i[3]<330&&i[6]>-330&&(s[3]=cc.find("Canvas/PhysicsLayer/teamA/playA4").x=i[3],s[4]=cc.find("Canvas/PhysicsLayer/teamA/playA5").x=i[4],s[5]=cc.find("Canvas/PhysicsLayer/teamA/playA6").x=i[5],s[6]=cc.find("Canvas/PhysicsLayer/teamA/playA7").x=i[6]),i[7]<330&&i[9]>-330&&(s[7]=cc.find("Canvas/PhysicsLayer/teamA/playA8").x=i[7],s[8]=cc.find("Canvas/PhysicsLayer/teamA/playA9").x=i[8],s[9]=cc.find("Canvas/PhysicsLayer/teamA/playA10").x=i[9]),t=o})},update:function(e){}}),cc._RF.pop()},{Mcanvas:"Mcanvas"}],Mcanvas:[function(e,t,n){"use strict";cc._RF.push(t,"a970fPOx5JDlamA9G/ilfj2","Mcanvas");var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};cc.Class({extends:cc.Component,properties:{score_d1:0,score_d2:0,bsc:{default:null,type:cc.Node},rsc:{default:null,type:cc.Node},stoptime:{default:null,type:cc.Node},ball:{default:null,type:cc.Node},teamA:{default:null,type:cc.Node},teamB:{default:null,type:cc.Node}},init:function(){var e=this;console.log(window.render),cc.director.setDisplayStats(!1),this.ball.getComponent("Mball").init();var t=1,n=60,o=setInterval(function(){if(0==n){if(--t<0)return cc.director.getPhysicsManager().enabled=!1,e.unscheduleAllCallbacks(),clearInterval(o),setTimeout(function(){cc.director.loadScene("end")},500),!1;n=60}--n<10&&(n="0"+n),e.stoptime.getComponent(cc.Label).string=t+":"+n},1e3);1==window.Sel&&this.robot(),this.thouch()},onLoad:function(){var e=this;setTimeout(function(){e.init()},400)},robot:function(){var e=10;this.schedule(function(){for(var t=[],n=0;n<this.teamB.children.length;n++)t.push(this.teamB.children[n].x);this.teamB.children[9].x>100?e=-20*Math.random():this.teamB.children[9].x<-100&&(e=20*Math.random());var o=t=t.map(function(t){return t+e});this.play_move(this.teamB.children,t,o)},.1)},play_move:function(e,t,n){"object"==(void 0===t?"undefined":o(t))&&(t[9]<120&&t[9]>-120&&(n[9]=e[9].x=t[9]),t[8]<330&&t[7]>-330&&(n[8]=e[8].x=t[8],n[7]=e[7].x=t[7]),t[6]<330&&t[3]>-330&&(n[6]=e[6].x=t[6],n[5]=e[5].x=t[5],n[4]=e[4].x=t[4],n[3]=e[3].x=t[3]),t[2]<330&&t[0]>-330&&(n[2]=e[2].x=t[2],n[1]=e[1].x=t[1],n[0]=e[0].x=t[0]))},thouch:function(){var e=this,t=0;if(this.node.on("touchstart",function(n){t=e.node.convertToNodeSpaceAR(n.getLocation()).x}),this.node.on("touchmove",function(n){for(var o=e,c=e.node.convertToNodeSpaceAR(n.getLocation()).x,i=c-t,a=[],s=0;s<e.teamA.children.length;s++)a.push(e.teamA.children[s].x);var d=a;a=a.map(function(e){return e+.5*i}),e.play_move(o.teamA.children,a,d),t=c,1!=window.Sel&&ws.send(d)}),1!=window.Sel){var n=this;ws.onmessage=function(e){var t=e.data;t=t.split(",");for(var o=0;o<t.length;o++)n.teamB.children[o].x=t[o]}}},onBallContactGround:function(e,t){cc.director.getPhysicsManager().enabled=!1,"doorA"==t._name?this.score_d1+=1:"doorB"==t._name&&(this.score_d2+=1),this.ball.getComponent("Mball").again()},onBallContactPaddle:function(e,t){t.height=40},onBallContactWall:function(e,t){},onBallEndMan:function(e,t){t.height=30},update:function(e){this.bsc.getComponent(cc.Label).string=this.score_d1,this.rsc.getComponent(cc.Label).string=this.score_d2,this.score_d1>this.score_d2?window.win=1:window.win=2}}),cc._RF.pop()},{}],Sel:[function(e,t,n){"use strict";cc._RF.push(t,"dad0aFbTe9EqLy63a7qyfVV","Sel"),window.ws=null,window.win=0,window.Sel=1,cc.Class({extends:cc.Component,properties:{SelOne:{default:null,type:cc.Node},SelFriend:{default:null,type:cc.Node},SelRandom:{default:null,type:cc.Node},fx:{default:null,type:cc.Node}},onLoad:function(){var e=this;this.SelOne.on(cc.Node.EventType.TOUCH_START,function(t){e.size(2,this)}),this.SelFriend.on(cc.Node.EventType.TOUCH_START,function(t){e.size(2,this)}),this.SelRandom.on(cc.Node.EventType.TOUCH_START,function(t){e.size(2,this)}),this.SelOne.on("touchend",function(t){e.size(0,this),cc.director.loadScene("wait"),window.Sel=1}),this.SelFriend.on("touchend",function(t){e.size(0,this),window.Sel=2,e.fx.getComponent(cc.Animation).play(),setTimeout(function(){cc.director.loadScene("wait")},3e3)}),this.SelRandom.on("touchend",function(t){e.size(0,this),window.Sel=3,cc.director.loadScene("wait")}),cc.director.preloadScene("wait",function(){})},size:function(e,t){e>1?(t.width=320,t.height=80):(t.width=350,t.height=100)},start:function(){}}),cc._RF.pop()},{}],W_vs:[function(e,t,n){"use strict";cc._RF.push(t,"96dadOkBYdI3ZGcfM+VLH1Y","W_vs"),cc.Class({extends:cc.Component,properties:{bg:{default:null,type:cc.Node}},onAnimCompleted:function(){cc.log(this.getComponent(cc.Animation).play("W_vs").wrapMode)},onAnimin:function(){cc.log(this.num),this.num++,2==this.num&&cc.director.loadScene("main")},onLoad:function(){this.num=0},start:function(){}}),cc._RF.pop()},{}],Wait:[function(e,t,n){"use strict";cc._RF.push(t,"360a9D0B4FJrpvW2Iw025o8","Wait"),cc.Class({extends:cc.Component,properties:{Wblue:{default:null,type:cc.Node},Wred:{default:null,type:cc.Node},Wvs:{default:null,type:cc.Node}},onLoad:function(){cc.director.preloadScene("main",function(){}),this.scheduleOnce(function(){this.Wblue.getComponent(cc.Animation).play("W_blue").wrapMode=cc.WrapMode.Reverse,this.Wred.getComponent(cc.Animation).play("W_red").wrapMode=cc.WrapMode.Reverse,this.Wvs.getComponent(cc.Animation).play("W_vs").wrapMode=cc.WrapMode.Reverse},2),1==window.Sel&&(cc.find("Canvas/blue/play1").opacity=cc.find("Canvas/red/play2").opacity=0)},start:function(){}}),cc._RF.pop()},{}]},{},["End","Mball","Mcanvas","Sel","W_vs","Wait"]);