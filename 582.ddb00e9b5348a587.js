"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[582],{582:(M,p,l)=>{l.r(p),l.d(p,{Tab3PageModule:()=>C});var a=l(9843),u=l(6814),g=l(95),d=l(3554),m=l(5877),h=l(5861),e=l(9468);function _(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"ion-item",11),e.NdJ("click",function(){const r=e.CHM(n).$implicit,c=e.oxw(2);return e.KtG(c.getChat(r))}),e.TgZ(1,"ion-thumbnail",12),e._UZ(2,"img",13),e.qZA(),e.TgZ(3,"ion-label",14)(4,"ion-note",15),e._uU(5),e.qZA(),e.TgZ(6,"h3",16),e._uU(7),e.qZA(),e.TgZ(8,"p"),e._uU(9,"Pur Date : Sept 9"),e.qZA(),e.TgZ(10,"p"),e._uU(11,"Exp Date : Sept 30"),e.qZA()()()}if(2&t){const n=s.$implicit;e.Q6J("detail",!0),e.xp6(2),e.Q6J("src",null==n?null:n.photo,e.LSH),e.xp6(3),e.Oqu(n.serviceType),e.xp6(2),e.Oqu(null==n?null:n.name)}}function T(t,s){if(1&t&&(e.TgZ(0,"ion-list"),e.YNc(1,_,12,4,"ion-item",10),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.msgList)}}function Z(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"ion-item",18),e.NdJ("click",function(){const r=e.CHM(n).$implicit,c=e.oxw(2);return e.KtG(c.setOpen(!0,r))}),e.TgZ(1,"ion-thumbnail",12),e._UZ(2,"img",13),e.qZA(),e.TgZ(3,"ion-label",14)(4,"ion-note",15),e._uU(5),e.qZA(),e.TgZ(6,"h3",16),e._uU(7),e.qZA(),e.TgZ(8,"p"),e._uU(9,"Pur Date : Sept 9"),e.qZA(),e.TgZ(10,"p"),e._uU(11,"Exp Date : Sept 30"),e.qZA()()()}if(2&t){const n=s.$implicit;e.xp6(2),e.Q6J("src",null==n?null:n.photo,e.LSH),e.xp6(3),e.Oqu(n.serviceType),e.xp6(2),e.Oqu(null==n?null:n.name)}}function f(t,s){if(1&t&&(e.TgZ(0,"ion-list"),e.YNc(1,Z,12,3,"ion-item",17),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.otherList)}}function x(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"ion-header")(1,"ion-toolbar",1)(2,"ion-title"),e._uU(3),e.qZA(),e.TgZ(4,"ion-buttons",19)(5,"ion-button",20),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.setOpen(!1,o.modalVal))}),e._uU(6,"Close"),e.qZA()()()(),e.TgZ(7,"ion-content",21)(8,"p"),e._uU(9),e.qZA()()}if(2&t){const n=e.oxw();e.xp6(3),e.Oqu(n.modalVal.name),e.xp6(6),e.hij(" ",n.modalVal.msg," ")}}const b=[{path:"",component:(()=>{var t;class s{constructor(i){this.router=i,this.mymodal="",this.selectedSegment="chat",this.otherList=[],this.msgList=[],this.dataList=[{id:1,name:"Ma May",photo:"",msg:"I am Fine.",type:"chat",serviceType:"Chat"},{id:2,name:"Hercule",photo:"",msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui. Eaque, dicta.",type:"other",serviceType:"MCU"},{id:3,name:"Min Nyo",photo:"",msg:"I am the way to home.",type:"other",serviceType:"MCU"},{id:4,name:"Tin NanDar",photo:"",msg:"ha ha.",type:"chat",serviceType:"Chat"},{id:5,name:"Dr Aung Min Oo",photo:"",msg:"Hello",type:"chat",serviceType:"Chat"}],this.isModalOpen=!1,this.dataList.forEach(o=>{"chat"!==o.type?this.otherList.push(o):this.msgList.push(o)})}getChat(i){this.mymodal="",this.router.navigate(["/chat-details"],{queryParams:i,queryParamsHandling:"preserve"})}setOpen(i,o){this.isModalOpen=i,this.modalVal=o}segmentChanged(i){var o=this;return(0,h.Z)(function*(){console.log(o.selectedSegment)})()}}return(t=s).\u0275fac=function(i){return new(i||t)(e.Y36(m.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-tab3"]],decls:18,vars:6,consts:[[3,"translucent"],["color","warning"],[3,"fullscreen"],["color","secondary",3,"ngModel","ngModelChange","ionChange"],["value","chat"],["name","chatbubble-ellipses"],["value","other"],["name","heart"],[4,"ngIf"],[3,"isOpen"],["lines","none",3,"detail","click",4,"ngFor","ngForOf"],["lines","none",3,"detail","click"],["slot","start"],["alt","Missing image","onerror","this.onerror=null;this.src='assets/images/thumbnail.svg';",3,"src"],[2,"margin-top","0px"],["color","secondary",2,"font-size","11px"],[2,"margin-top","5px"],["lines","none",3,"click",4,"ngFor","ngForOf"],["lines","none",3,"click"],["slot","end"],["color","secondary",3,"click"],[1,"ion-padding"]],template:function(i,o){1&i&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title"),e._uU(3," My cart "),e.qZA()()(),e.TgZ(4,"ion-content",2)(5,"ion-segment",3),e.NdJ("ngModelChange",function(c){return o.selectedSegment=c})("ionChange",function(c){return o.segmentChanged(c)}),e.TgZ(6,"ion-segment-button",4)(7,"ion-label"),e._uU(8,"Chat serices"),e.qZA(),e._UZ(9,"ion-icon",5),e.qZA(),e.TgZ(10,"ion-segment-button",6)(11,"ion-label"),e._uU(12,"Other"),e.qZA(),e._UZ(13,"ion-icon",7),e.qZA()(),e.YNc(14,T,2,1,"ion-list",8),e.YNc(15,f,2,1,"ion-list",8),e.TgZ(16,"ion-modal",9),e.YNc(17,x,10,2,"ng-template"),e.qZA()()),2&i&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(1),e.Q6J("ngModel",o.selectedSegment),e.xp6(9),e.Q6J("ngIf","chat"===o.selectedSegment),e.xp6(1),e.Q6J("ngIf","other"===o.selectedSegment),e.xp6(1),e.Q6J("isOpen",o.isModalOpen))},dependencies:[a.YG,a.Sm,a.W2,a.Gu,a.gu,a.Ie,a.Q$,a.q_,a.uN,a.cJ,a.GO,a.Bs,a.wd,a.sr,a.ki,a.QI,u.sg,u.O5,g.JJ,g.On],styles:["ion-thumbnail[_ngcontent-%COMP%]{--border-radius: 15px;--size: 90px}ion-text[_ngcontent-%COMP%]{font-size:11px}p[_ngcontent-%COMP%]{font-size:13px}ion-segment-button[_ngcontent-%COMP%]{--indicator-color: #0091c7}"]}),s})()}];let y=(()=>{var t;class s{}return(t=s).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.Bz.forChild(b),m.Bz]}),s})(),C=(()=>{var t;class s{}return(t=s).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.Pc,u.ez,g.u5,d.e,y]}),s})()}}]);