"use strict";(self.webpackChunkDraftDex=self.webpackChunkDraftDex||[]).push([[7983],{7983:(S,m,r)=>{r.d(m,{d:()=>L,j:()=>w});var a=r(9969),c=r(177),e=r(4438),h=r(5779),d=r(1455),f=r(1512),_=r(563),u=r(4420);const y=["*"],v=(i,l)=>({showTransitionParams:i,hideTransitionParams:l}),b=(i,l)=>({value:i,params:l});function g(i,l){1&i&&e.eu8(0)}function C(i,l){1&i&&e.nrm(0,"TimesIcon",8),2&i&&e.Y8G("styleClass","p-overlaypanel-close-icon")}function T(i,l){}function k(i,l){1&i&&e.DNE(0,T,0,0,"ng-template")}function O(i,l){if(1&i&&(e.j41(0,"span",9),e.DNE(1,k,1,0,null,3),e.k0s()),2&i){const t=e.XpG(3);e.R7$(),e.Y8G("ngTemplateOutlet",t.closeIconTemplate)}}function I(i,l){if(1&i){const t=e.RV6();e.j41(0,"button",5),e.bIt("click",function(s){e.eBV(t);const o=e.XpG(2);return e.Njj(o.onCloseClick(s))})("keydown.enter",function(){e.eBV(t);const s=e.XpG(2);return e.Njj(s.hide())}),e.DNE(1,C,1,1,"TimesIcon",6)(2,O,2,1,"span",7),e.k0s()}if(2&i){const t=e.XpG(2);e.BMQ("aria-label",t.ariaCloseLabel),e.R7$(),e.Y8G("ngIf",!t.closeIconTemplate),e.R7$(),e.Y8G("ngIf",t.closeIconTemplate)}}function D(i,l){if(1&i){const t=e.RV6();e.j41(0,"div",1),e.bIt("click",function(s){e.eBV(t);const o=e.XpG();return e.Njj(o.onOverlayClick(s))})("@animation.start",function(s){e.eBV(t);const o=e.XpG();return e.Njj(o.onAnimationStart(s))})("@animation.done",function(s){e.eBV(t);const o=e.XpG();return e.Njj(o.onAnimationEnd(s))}),e.j41(1,"div",2),e.bIt("click",function(s){e.eBV(t);const o=e.XpG();return e.Njj(o.onContentClick(s))})("mousedown",function(s){e.eBV(t);const o=e.XpG();return e.Njj(o.onContentClick(s))}),e.SdG(2),e.DNE(3,g,1,0,"ng-container",3),e.k0s(),e.DNE(4,I,3,3,"button",4),e.k0s()}if(2&i){const t=e.XpG();e.HbH(t.styleClass),e.Y8G("ngClass","p-overlaypanel p-component")("ngStyle",t.style)("@animation",e.l_i(13,b,t.overlayVisible?"open":"close",e.l_i(10,v,t.showTransitionOptions,t.hideTransitionOptions))),e.BMQ("aria-modal",t.overlayVisible)("aria-label",t.ariaLabel)("aria-labelledBy",t.ariaLabelledBy),e.R7$(3),e.Y8G("ngTemplateOutlet",t.contentTemplate),e.R7$(),e.Y8G("ngIf",t.showCloseIcon)}}let w=(()=>{class i{document;platformId;el;renderer;cd;zone;config;overlayService;ariaLabel;ariaLabelledBy;dismissable=!0;showCloseIcon;style;styleClass;appendTo="body";autoZIndex=!0;ariaCloseLabel;baseZIndex=0;focusOnShow=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";onShow=new e.bkB;onHide=new e.bkB;templates;container;overlayVisible=!1;render=!1;isOverlayAnimationInProgress=!1;selfClick=!1;documentClickListener;target;willHide;scrollHandler;documentResizeListener;contentTemplate;closeIconTemplate;destroyCallback;overlayEventListener;overlaySubscription;constructor(t,n,s,o,p,P,E,x){this.document=t,this.platformId=n,this.el=s,this.renderer=o,this.cd=p,this.zone=P,this.config=E,this.overlayService=x}ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":default:this.contentTemplate=t.template;break;case"closeicon":this.closeIconTemplate=t.template}this.cd.markForCheck()})}bindDocumentClickListener(){if((0,c.UE)(this.platformId)&&!this.documentClickListener&&this.dismissable){let t=d.D.isIOS()?"touchstart":"click";this.documentClickListener=this.renderer.listen(this.el?this.el.nativeElement.ownerDocument:this.document,t,s=>{!this.container?.contains(s.target)&&this.target!==s.target&&!this.target.contains(s.target)&&!this.selfClick&&this.hide(),this.selfClick=!1,this.cd.markForCheck()})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(t,n){this.isOverlayAnimationInProgress||(this.overlayVisible?(this.hasTargetChanged(t,n)&&(this.destroyCallback=()=>{this.show(null,n||t.currentTarget||t.target)}),this.hide()):this.show(t,n))}show(t,n){n&&t&&t.stopPropagation(),!this.isOverlayAnimationInProgress&&(this.target=n||t.currentTarget||t.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck())}onOverlayClick(t){this.overlayService.add({originalEvent:t,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(t){const n=t.target;this.selfClick=t.offsetX<n.clientWidth&&t.offsetY<n.clientHeight}hasTargetChanged(t,n){return null!=this.target&&this.target!==(n||t.currentTarget||t.target)}appendContainer(){this.appendTo&&("body"===this.appendTo?this.renderer.appendChild(this.document.body,this.container):d.D.appendChild(this.container,this.appendTo))}restoreAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}align(){this.autoZIndex&&u.Q$.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay),d.D.absolutePosition(this.container,this.target,!1);const t=d.D.getOffset(this.container),n=d.D.getOffset(this.target),s=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius");let o=0;t.left<n.left&&(o=n.left-t.left-2*parseFloat(s)),this.container?.style.setProperty("--overlayArrowLeft",`${o}px`),t.top<n.top&&(d.D.addClass(this.container,"p-overlaypanel-flipped"),this.showCloseIcon&&this.renderer.setStyle(this.container,"margin-top","-30px"))}onAnimationStart(t){"open"===t.toState&&(this.container=t.element,this.appendContainer(),this.align(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=n=>{this.container&&this.container.contains(n.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)),this.isOverlayAnimationInProgress=!0}onAnimationEnd(t){switch(t.toState){case"void":this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe();break;case"close":this.autoZIndex&&u.Q$.clear(this.container),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1}this.isOverlayAnimationInProgress=!1}focus(){let t=d.D.findSingle(this.container,"[autofocus]");t&&this.zone.runOutsideAngular(()=>{setTimeout(()=>t.focus(),5)})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onCloseClick(t){this.hide(),t.preventDefault()}onEscapeKeydown(t){this.hide()}onWindowResize(){this.overlayVisible&&!d.D.isTouchDevice()&&this.hide()}bindDocumentResizeListener(){(0,c.UE)(this.platformId)&&!this.documentResizeListener&&(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",this.onWindowResize.bind(this)))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){(0,c.UE)(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new d.b(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&u.Q$.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe()}static \u0275fac=function(n){return new(n||i)(e.rXU(c.qQ),e.rXU(e.Agw),e.rXU(e.aKT),e.rXU(e.sFG),e.rXU(e.gRc),e.rXU(e.SKi),e.rXU(h.r1),e.rXU(h.si))};static \u0275cmp=e.VBU({type:i,selectors:[["p-overlayPanel"]],contentQueries:function(n,s,o){if(1&n&&e.wni(o,h.Ei,4),2&n){let p;e.mGM(p=e.lsd())&&(s.templates=p)}},hostAttrs:[1,"p-element"],hostBindings:function(n,s){1&n&&e.bIt("keydown.escape",function(p){return s.onEscapeKeydown(p)},!1,e.EBC)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",dismissable:[e.Mj6.HasDecoratorInputTransform,"dismissable","dismissable",e.L39],showCloseIcon:[e.Mj6.HasDecoratorInputTransform,"showCloseIcon","showCloseIcon",e.L39],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[e.Mj6.HasDecoratorInputTransform,"autoZIndex","autoZIndex",e.L39],ariaCloseLabel:"ariaCloseLabel",baseZIndex:[e.Mj6.HasDecoratorInputTransform,"baseZIndex","baseZIndex",e.Udg],focusOnShow:[e.Mj6.HasDecoratorInputTransform,"focusOnShow","focusOnShow",e.L39],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide"},features:[e.GFd],ngContentSelectors:y,decls:1,vars:1,consts:[["role","dialog",3,"ngClass","ngStyle","class","click",4,"ngIf"],["role","dialog",3,"click","ngClass","ngStyle"],[1,"p-overlaypanel-content",3,"click","mousedown"],[4,"ngTemplateOutlet"],["type","button","class","p-overlaypanel-close p-link","pRipple","",3,"click","keydown.enter",4,"ngIf"],["type","button","pRipple","",1,"p-overlaypanel-close","p-link",3,"click","keydown.enter"],[3,"styleClass",4,"ngIf"],["class","p-overlaypanel-close-icon",4,"ngIf"],[3,"styleClass"],[1,"p-overlaypanel-close-icon"]],template:function(n,s){1&n&&(e.NAR(),e.DNE(0,D,5,16,"div",0)),2&n&&e.Y8G("ngIf",s.render)},dependencies:()=>[c.YU,c.bT,c.T3,c.B3,_.n,f.A],styles:['@layer primeng{.p-overlaypanel{position:absolute;margin-top:10px;top:0;left:0}.p-overlaypanel-flipped{margin-top:0;margin-bottom:10px}.p-overlaypanel-close{display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-overlaypanel:after,.p-overlaypanel:before{bottom:100%;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);content:" ";height:0;width:0;position:absolute;pointer-events:none}.p-overlaypanel:after{border-width:8px;margin-left:-8px}.p-overlaypanel:before{border-width:10px;margin-left:-10px}.p-overlaypanel-shifted:after,.p-overlaypanel-shifted:before{left:auto;right:1.25em;margin-left:auto}.p-overlaypanel-flipped:after,.p-overlaypanel-flipped:before{bottom:auto;top:100%}.p-overlaypanel.p-overlaypanel-flipped:after{border-bottom-color:transparent}.p-overlaypanel.p-overlaypanel-flipped:before{border-bottom-color:transparent}}\n'],encapsulation:2,data:{animation:[(0,a.hZ)("animation",[(0,a.wk)("void",(0,a.iF)({transform:"scaleY(0.8)",opacity:0})),(0,a.wk)("close",(0,a.iF)({opacity:0})),(0,a.wk)("open",(0,a.iF)({transform:"translateY(0)",opacity:1})),(0,a.kY)("void => open",(0,a.i0)("{{showTransitionParams}}")),(0,a.kY)("open => close",(0,a.i0)("{{hideTransitionParams}}"))])]},changeDetection:0})}return i})(),L=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=e.$C({type:i});static \u0275inj=e.G2t({imports:[c.MD,_.Z,h.Gg,f.A,h.Gg]})}return i})()}}]);