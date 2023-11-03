"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8577],{8577:(we,Q,h)=>{h.r(Q),h.d(Q,{ion_modal:()=>xe});var pe,he,E=h(5861),f=h(1688),M=h(8360),G=h(6559),m=h(839),oe=h(3830),$=h(6710),X=h(4874),l=h(1647),D=h(3567),A=h(1651),K=h(2085),re=h(1612),p=h(1774),z=h(5149),q=h(9203),N=h(6225),F=(h(7484),h(619),function(e){return e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT",e}(F||{}));const Z={getEngine(){const e=(0,X.g)();if(null!=e&&e.isPluginAvailable("StatusBar"))return e.Plugins.StatusBar},supportsDefaultStatusBarStyle(){const e=(0,X.g)();return!(null==e||!e.PluginHeaders)},setStyle(e){const t=this.getEngine();t&&t.setStyle(e)},getStyle:function(){return(pe=pe||(0,E.Z)(function*(){const t=this.getEngine();if(!t)return F.Default;const{style:n}=yield t.getInfo();return n})).apply(this,arguments)}},se=(e,t)=>{if(1===t)return 0;const n=1/(1-t);return e*n+-t*n},fe=()=>{!N.w||N.w.innerWidth>=768||!Z.supportsDefaultStatusBarStyle()||Z.setStyle({style:F.Dark})},ae=(e=F.Default)=>{!N.w||N.w.innerWidth>=768||!Z.supportsDefaultStatusBarStyle()||Z.setStyle({style:e})},me=function(t,n){return(he=he||(0,E.Z)(function*(o,i){"function"!=typeof o.canDismiss||!(yield o.canDismiss(void 0,l.G))||(i.isRunning()?i.onFinish(()=>{o.dismiss(void 0,"handler")},{oneTimeCallback:!0}):o.dismiss(void 0,"handler"))})).apply(this,arguments)},de=e=>.00255275*2.71828**(-14.9619*e)-1.00255*2.71828**(-.0380968*e)+1,ue=(e,t)=>(0,m.l)(400,e/Math.abs(1.1*t),500),ge=e=>{const{currentBreakpoint:t,backdropBreakpoint:n}=e,o=void 0===n||n<t,i=o?`calc(var(--backdrop-opacity) * ${t})`:"0",r=(0,p.c)("backdropAnimation").fromTo("opacity",0,i);return o&&r.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:(0,p.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:`translateY(${100-100*t}%)`}]),backdropAnimation:r}},be=e=>{const{currentBreakpoint:t,backdropBreakpoint:n}=e,o=`calc(var(--backdrop-opacity) * ${se(t,n)})`,i=[{offset:0,opacity:o},{offset:1,opacity:0}],r=[{offset:0,opacity:o},{offset:n,opacity:0},{offset:1,opacity:0}],s=(0,p.c)("backdropAnimation").keyframes(0!==n?r:i);return{wrapperAnimation:(0,p.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:`translateY(${100-100*t}%)`},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:s}},ye=(e,t)=>{const{presentingEl:n,currentBreakpoint:o}=t,i=(0,m.g)(e),{wrapperAnimation:r,backdropAnimation:s}=void 0!==o?ge(t):{backdropAnimation:(0,p.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,p.c)().fromTo("transform","translateY(100vh)","translateY(0vh)")};s.addElement(i.querySelector("ion-backdrop")),r.addElement(i.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const a=(0,p.c)("entering-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(r);if(n){const d=window.innerWidth<768,y="ION-MODAL"===n.tagName&&void 0!==n.presentingElement,g=(0,m.g)(n),S=(0,p.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),x=document.body;if(d){const v=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",w=`translateY(${y?"-10px":v}) scale(0.93)`;S.afterStyles({transform:w}).beforeAddWrite(()=>x.style.setProperty("background-color","black")).addElement(n).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:w,borderRadius:"10px 10px 0 0"}]),a.addAnimation(S)}else if(a.addAnimation(s),y){const k=`translateY(-10px) scale(${y?.93:1})`;S.afterStyles({transform:k}).addElement(g.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:k}]);const c=(0,p.c)().afterStyles({transform:k}).addElement(g.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:k}]);a.addAnimation([S,c])}else r.fromTo("opacity","0","1")}else a.addAnimation(s);return a},ke=(e,t,n=500)=>{const{presentingEl:o,currentBreakpoint:i}=t,r=(0,m.g)(e),{wrapperAnimation:s,backdropAnimation:a}=void 0!==i?be(t):{backdropAnimation:(0,p.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,p.c)().fromTo("transform","translateY(0vh)","translateY(100vh)")};a.addElement(r.querySelector("ion-backdrop")),s.addElement(r.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const d=(0,p.c)("leaving-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(n).addAnimation(s);if(o){const y=window.innerWidth<768,g="ION-MODAL"===o.tagName&&void 0!==o.presentingElement,S=(0,m.g)(o),x=(0,p.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(k=>{1===k&&(o.style.setProperty("overflow",""),Array.from(v.querySelectorAll("ion-modal:not(.overlay-hidden)")).filter(w=>void 0!==w.presentingElement).length<=1&&v.style.setProperty("background-color",""))}),v=document.body;if(y){const k=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",j=`translateY(${g?"-10px":k}) scale(0.93)`;x.addElement(o).keyframes([{offset:0,filter:"contrast(0.85)",transform:j,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),d.addAnimation(x)}else if(d.addAnimation(a),g){const c=`translateY(-10px) scale(${g?.93:1})`;x.addElement(S.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:c},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const w=(0,p.c)().addElement(S.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:c},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);d.addAnimation([x,w])}else s.fromTo("opacity","1","0")}else d.addAnimation(a);return d},Ae=(e,t)=>{const{currentBreakpoint:n}=t,o=(0,m.g)(e),{wrapperAnimation:i,backdropAnimation:r}=void 0!==n?ge(t):{backdropAnimation:(0,p.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,p.c)().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}])};return r.addElement(o.querySelector("ion-backdrop")),i.addElement(o.querySelector(".modal-wrapper")),(0,p.c)().addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([r,i])},Ce=(e,t)=>{const{currentBreakpoint:n}=t,o=(0,m.g)(e),{wrapperAnimation:i,backdropAnimation:r}=void 0!==n?be(t):{backdropAnimation:(0,p.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,p.c)().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}])};return r.addElement(o.querySelector("ion-backdrop")),i.addElement(o.querySelector(".modal-wrapper")),(0,p.c)().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([r,i])},xe=class{constructor(e){(0,f.r)(this,e),this.didPresent=(0,f.d)(this,"ionModalDidPresent",7),this.willPresent=(0,f.d)(this,"ionModalWillPresent",7),this.willDismiss=(0,f.d)(this,"ionModalWillDismiss",7),this.didDismiss=(0,f.d)(this,"ionModalDidDismiss",7),this.ionBreakpointDidChange=(0,f.d)(this,"ionBreakpointDidChange",7),this.didPresentShorthand=(0,f.d)(this,"didPresent",7),this.willPresentShorthand=(0,f.d)(this,"willPresent",7),this.willDismissShorthand=(0,f.d)(this,"willDismiss",7),this.didDismissShorthand=(0,f.d)(this,"didDismiss",7),this.ionMount=(0,f.d)(this,"ionMount",7),this.lockController=(0,oe.c)(),this.triggerController=(0,l.e)(),this.coreDelegate=(0,G.C)(),this.isSheetModal=!1,this.inheritedAttributes={},this.inline=!1,this.gestureAnimationDismissing=!1,this.onHandleClick=()=>{const{sheetTransition:t,handleBehavior:n}=this;"cycle"!==n||void 0!==t||this.moveToNextBreakpoint()},this.onBackdropTap=()=>{const{sheetTransition:t}=this;void 0===t&&this.dismiss(void 0,l.B)},this.onLifecycle=t=>{const n=this.usersElement,o=Te[t.type];if(n&&o){const i=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:t.detail});n.dispatchEvent(i)}},this.presented=!1,this.hasController=!1,this.overlayIndex=void 0,this.delegate=void 0,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.breakpoints=void 0,this.initialBreakpoint=void 0,this.backdropBreakpoint=0,this.handle=void 0,this.handleBehavior="none",this.component=void 0,this.componentProps=void 0,this.cssClass=void 0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.presentingElement=void 0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0,this.keepContentsMounted=!1,this.canDismiss=!0}onIsOpenChange(e,t){!0===e&&!1===t?this.present():!1===e&&!0===t&&this.dismiss()}triggerChanged(){const{trigger:e,el:t,triggerController:n}=this;e&&n.addClickListener(t,e)}breakpointsChanged(e){void 0!==e&&(this.sortedBreakpoints=e.sort((t,n)=>t-n))}connectedCallback(){const{el:e}=this;(0,l.j)(e),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}componentWillLoad(){const{breakpoints:e,initialBreakpoint:t,el:n}=this,o=this.isSheetModal=void 0!==e&&void 0!==t;this.inheritedAttributes=(0,m.k)(n,["aria-label","role"]),o&&(this.currentBreakpoint=this.initialBreakpoint),void 0!==e&&void 0!==t&&!e.includes(t)&&(0,$.p)("Your breakpoints array must include the initialBreakpoint value."),(0,l.k)(n)}componentDidLoad(){!0===this.isOpen&&(0,m.r)(()=>this.present()),this.breakpointsChanged(this.breakpoints)}getDelegate(e=!1){if(this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};const n=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:n,delegate:this.workingDelegate=n?this.delegate||this.coreDelegate:this.delegate}}checkCanDismiss(e,t){var n=this;return(0,E.Z)(function*(){const{canDismiss:o}=n;return"function"==typeof o?o(e,t):o})()}present(){var e=this;return(0,E.Z)(function*(){const t=yield e.lockController.lock();if(e.presented)return void t();const{presentingElement:n,el:o}=e;e.currentBreakpoint=e.initialBreakpoint;const{inline:i,delegate:r}=e.getDelegate(!0);e.ionMount.emit(),e.usersElement=yield(0,G.a)(r,o,e.component,["ion-page"],e.componentProps,i),(0,m.m)(o)?yield(0,A.e)(e.usersElement):e.keepContentsMounted||(yield(0,A.w)()),(0,f.w)(()=>e.el.classList.add("show-modal"));const s=void 0!==n;s&&"ios"===(0,K.b)(e)&&(e.statusBarStyle=yield Z.getStyle(),fe()),yield(0,l.f)(e,"modalEnter",ye,Ae,{presentingEl:n,currentBreakpoint:e.initialBreakpoint,backdropBreakpoint:e.backdropBreakpoint}),typeof window<"u"&&(e.keyboardOpenCallback=()=>{e.gesture&&(e.gesture.enable(!1),(0,m.r)(()=>{e.gesture&&e.gesture.enable(!0)}))},window.addEventListener(re.KEYBOARD_DID_OPEN,e.keyboardOpenCallback)),e.isSheetModal?e.initSheetGesture():s&&e.initSwipeToClose(),t()})()}initSwipeToClose(){var t,e=this;if("ios"!==(0,K.b)(this))return;const{el:n}=this,o=this.leaveAnimation||K.c.get("modalLeave",ke),i=this.animation=o(n,{presentingEl:this.presentingElement});if(!(0,M.a)(n))return void(0,M.p)(n);const s=null!==(t=this.statusBarStyle)&&void 0!==t?t:F.Default;this.gesture=((e,t,n,o)=>{const r=e.offsetHeight;let s=!1,a=!1,d=null,y=null,S=!0,x=0;const V=(0,q.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:39,direction:"y",threshold:10,canStart:b=>{const u=b.event.target;return null===u||!u.closest||(d=(0,M.f)(u),d?(y=(0,M.i)(d)?(0,m.g)(d).querySelector(".inner-scroll"):d,!d.querySelector("ion-refresher")&&0===y.scrollTop):null===u.closest("ion-footer"))},onStart:b=>{const{deltaY:u}=b;S=!d||!(0,M.i)(d)||d.scrollY,a=void 0!==e.canDismiss&&!0!==e.canDismiss,u>0&&d&&(0,M.d)(d),t.progressStart(!0,s?1:0)},onMove:b=>{const{deltaY:u}=b;u>0&&d&&(0,M.d)(d);const B=b.deltaY/r,P=B>=0&&a,O=P?.2:.9999,U=P?de(B/O):B,C=(0,m.l)(1e-4,U,O);t.progressStep(C),C>=.5&&x<.5?ae(n):C<.5&&x>=.5&&fe(),x=C},onEnd:b=>{const u=b.velocityY,B=b.deltaY/r,P=B>=0&&a,O=P?.2:.9999,U=P?de(B/O):B,C=(0,m.l)(1e-4,U,O),L=!P&&(b.deltaY+1e3*u)/r>=.5;let J=L?-.001:.001;L?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),J+=(0,z.g)([0,0],[.32,.72],[0,1],[1,1],C)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),J+=(0,z.g)([0,0],[1,0],[.68,.28],[1,1],C)[0]);const te=ue(L?B*r:(1-C)*r,u);s=L,V.enable(!1),d&&(0,M.r)(d,S),t.onFinish(()=>{L||V.enable(!0)}).progressEnd(L?1:0,J,te),P&&C>O/4?me(e,t):L&&o()}});return V})(n,i,s,()=>{this.gestureAnimationDismissing=!0,ae(this.statusBarStyle),this.animation.onFinish((0,E.Z)(function*(){yield e.dismiss(void 0,l.G),e.gestureAnimationDismissing=!1}))}),this.gesture.enable(!0)}initSheetGesture(){const{wrapperEl:e,initialBreakpoint:t,backdropBreakpoint:n}=this;if(!e||void 0===t)return;const o=this.enterAnimation||K.c.get("modalEnter",ye),i=this.animation=o(this.el,{presentingEl:this.presentingElement,currentBreakpoint:t,backdropBreakpoint:n});i.progressStart(!0,1);const{gesture:r,moveSheetToBreakpoint:s}=((e,t,n,o,i,r,s=[],a,d,y)=>{const x={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:0!==i?[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-i,opacity:0},{offset:1,opacity:0}]:[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}]},v=e.querySelector("ion-content"),k=n.clientHeight;let c=o,w=0,j=!1;const b=r.childAnimations.find(_=>"wrapperAnimation"===_.id),u=r.childAnimations.find(_=>"backdropAnimation"===_.id),B=s[s.length-1],P=s[0],O=()=>{e.style.setProperty("pointer-events","auto"),t.style.setProperty("pointer-events","auto"),e.classList.remove("ion-disable-focus-trap")},U=()=>{e.style.setProperty("pointer-events","none"),t.style.setProperty("pointer-events","none"),e.classList.add("ion-disable-focus-trap")};b&&u&&(b.keyframes([...x.WRAPPER_KEYFRAMES]),u.keyframes([...x.BACKDROP_KEYFRAMES]),r.progressStart(!0,1-c),c>i?O():U()),v&&c!==B&&(v.scrollY=!1);const te=_=>{const{breakpoint:Y,canDismiss:T,breakpointOffset:R,animated:H}=_,W=T&&0===Y,I=W?c:Y,ve=0!==I;return c=0,b&&u&&(b.keyframes([{offset:0,transform:`translateY(${100*R}%)`},{offset:1,transform:`translateY(${100*(1-I)}%)`}]),u.keyframes([{offset:0,opacity:`calc(var(--backdrop-opacity) * ${se(1-R,i)})`},{offset:1,opacity:`calc(var(--backdrop-opacity) * ${se(I,i)})`}]),r.progressStep(0)),ne.enable(!1),W?me(e,r):ve||d(),new Promise(ce=>{r.onFinish(()=>{ve?b&&u?(0,m.r)(()=>{b.keyframes([...x.WRAPPER_KEYFRAMES]),u.keyframes([...x.BACKDROP_KEYFRAMES]),r.progressStart(!0,1-I),c=I,y(c),v&&c===s[s.length-1]&&(v.scrollY=!0),c>i?O():U(),ne.enable(!0),ce()}):(ne.enable(!0),ce()):ce()},{oneTimeCallback:!0}).progressEnd(1,0,H?500:0)})},ne=(0,q.createGesture)({el:n,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:_=>{const Y=_.event.target.closest("ion-content");return c=a(),!(1===c&&Y)},onStart:()=>{j=void 0!==e.canDismiss&&!0!==e.canDismiss&&0===P,v&&(v.scrollY=!1),(0,m.r)(()=>{e.focus()}),r.progressStart(!0,1-c)},onMove:_=>{const T=s.length>1?1-s[1]:void 0,R=1-c+_.deltaY/k,H=void 0!==T&&R>=T&&j,W=H?.95:.9999,I=H&&void 0!==T?T+de((R-T)/(W-T)):R;w=(0,m.l)(1e-4,I,W),r.progressStep(w)},onEnd:_=>{const R=c-(_.deltaY+350*_.velocityY)/k,H=s.reduce((W,I)=>Math.abs(I-R)<Math.abs(W-R)?I:W);te({breakpoint:H,breakpointOffset:w,canDismiss:j,animated:!0})}});return{gesture:ne,moveSheetToBreakpoint:te}})(this.el,this.backdropEl,e,t,n,i,this.sortedBreakpoints,()=>{var a;return null!==(a=this.currentBreakpoint)&&void 0!==a?a:0},()=>this.sheetOnDismiss(),a=>{this.currentBreakpoint!==a&&(this.currentBreakpoint=a,this.ionBreakpointDidChange.emit({breakpoint:a}))});this.gesture=r,this.moveSheetToBreakpoint=s,this.gesture.enable(!0)}sheetOnDismiss(){var e=this;this.gestureAnimationDismissing=!0,this.animation.onFinish((0,E.Z)(function*(){e.currentBreakpoint=0,e.ionBreakpointDidChange.emit({breakpoint:e.currentBreakpoint}),yield e.dismiss(void 0,l.G),e.gestureAnimationDismissing=!1}))}dismiss(e,t){var n=this;return(0,E.Z)(function*(){var o;if(n.gestureAnimationDismissing&&t!==l.G)return!1;const i=yield n.lockController.lock();if("handler"!==t&&!(yield n.checkCanDismiss(e,t)))return i(),!1;const{presentingElement:r}=n;void 0!==r&&"ios"===(0,K.b)(n)&&ae(n.statusBarStyle),typeof window<"u"&&n.keyboardOpenCallback&&(window.removeEventListener(re.KEYBOARD_DID_OPEN,n.keyboardOpenCallback),n.keyboardOpenCallback=void 0);const a=l.n.get(n)||[],d=yield(0,l.g)(n,e,t,"modalLeave",ke,Ce,{presentingEl:r,currentBreakpoint:null!==(o=n.currentBreakpoint)&&void 0!==o?o:n.initialBreakpoint,backdropBreakpoint:n.backdropBreakpoint});if(d){const{delegate:y}=n.getDelegate();yield(0,G.d)(y,n.usersElement),(0,f.w)(()=>n.el.classList.remove("show-modal")),n.animation&&n.animation.destroy(),n.gesture&&n.gesture.destroy(),a.forEach(g=>g.destroy())}return n.currentBreakpoint=void 0,n.animation=void 0,i(),d})()}onDidDismiss(){return(0,l.h)(this.el,"ionModalDidDismiss")}onWillDismiss(){return(0,l.h)(this.el,"ionModalWillDismiss")}setCurrentBreakpoint(e){var t=this;return(0,E.Z)(function*(){if(!t.isSheetModal)return void(0,$.p)("setCurrentBreakpoint is only supported on sheet modals.");if(!t.breakpoints.includes(e))return void(0,$.p)(`Attempted to set invalid breakpoint value ${e}. Please double check that the breakpoint value is part of your defined breakpoints.`);const{currentBreakpoint:n,moveSheetToBreakpoint:o,canDismiss:i,breakpoints:r,animated:s}=t;n!==e&&o&&(t.sheetTransition=o({breakpoint:e,breakpointOffset:1-n,canDismiss:void 0!==i&&!0!==i&&0===r[0],animated:s}),yield t.sheetTransition,t.sheetTransition=void 0)})()}getCurrentBreakpoint(){var e=this;return(0,E.Z)(function*(){return e.currentBreakpoint})()}moveToNextBreakpoint(){var e=this;return(0,E.Z)(function*(){const{breakpoints:t,currentBreakpoint:n}=e;if(!t||null==n)return!1;const o=t.filter(a=>0!==a),r=(o.indexOf(n)+1)%o.length,s=o[r];return yield e.setCurrentBreakpoint(s),!0})()}render(){const{handle:e,isSheetModal:t,presentingElement:n,htmlAttributes:o,handleBehavior:i,inheritedAttributes:r}=this,s=!1!==e&&t,a=(0,K.b)(this),d=void 0!==n&&"ios"===a,y="cycle"===i;return(0,f.h)(f.H,Object.assign({"no-router":!0,tabindex:"-1"},o,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[a]:!0,"modal-default":!d&&!t,"modal-card":d,"modal-sheet":t,"overlay-hidden":!0},(0,D.g)(this.cssClass)),onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,f.h)("ion-backdrop",{ref:g=>this.backdropEl=g,visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),"ios"===a&&(0,f.h)("div",{class:"modal-shadow"}),(0,f.h)("div",Object.assign({role:"dialog"},r,{"aria-modal":"true",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:g=>this.wrapperEl=g}),s&&(0,f.h)("button",{class:"modal-handle",tabIndex:y?0:-1,"aria-label":"Activate to adjust the size of the dialog overlaying the screen",onClick:y?this.onHandleClick:void 0,part:"handle"}),(0,f.h)("slot",null)))}get el(){return(0,f.f)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},Te={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};xe.style={ios:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.modal-card) .modal-wrapper:dir(rtl){border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.modal-sheet) .modal-wrapper:dir(rtl){border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}}',md:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}'}},3567:(we,Q,h)=>{h.d(Q,{c:()=>G,g:()=>oe,h:()=>M,o:()=>X});var f,E=h(5861);const M=(l,D)=>null!==D.closest(l),G=(l,D)=>"string"==typeof l&&l.length>0?Object.assign({"ion-color":!0,[`ion-color-${l}`]:!0},D):D,oe=l=>{const D={};return(l=>void 0!==l?(Array.isArray(l)?l:l.split(" ")).filter(A=>null!=A).map(A=>A.trim()).filter(A=>""!==A):[])(l).forEach(A=>D[A]=!0),D},$=/^[a-z][a-z0-9+\-.]*:/,X=function(D,A,K,re){return(f=f||(0,E.Z)(function*(p,z,q,N){if(null!=p&&"#"!==p[0]&&!$.test(p)){const ie=document.querySelector("ion-router");if(ie)return null!=z&&z.preventDefault(),ie.push(p,q,N)}return!1})).apply(this,arguments)}}}]);