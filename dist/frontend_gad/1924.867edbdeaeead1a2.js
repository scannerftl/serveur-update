"use strict";(self.webpackChunkfrontend_gad=self.webpackChunkfrontend_gad||[]).push([[1924],{9989:(_,f,s)=>{s.d(f,{v:()=>e});var o=s(5966),t=s(9468),u=s(9862);let e=(()=>{class h{constructor(n,a){this.url=n,this.http=a}getAll(){return this.http.post(`${this.url}/${this.getResourceBasePath()}`,{})}getCurrent(){return this.http.get(`${this.url}/${this.getResourceBasePath()}/current`)}getFormModel(){return this.http.get(`${this.url}/${this.getResourceBasePath()}/form-model`)}saveCurrent(n){return this.http.post(`${this.url}/${this.getResourceBasePath()}/save-current`,n)}getAllWithPagination(n,a,y){return this.http.post(`${this.url}/${this.getResourceBasePath()}/findwithpagination/${n}/${a}`,y)}add(n){return this.http.post(`${this.url}/${this.getResourceBasePath()}/add`,n)}update(n,a){return this.http.post(`${this.url}/${this.getResourceBasePath()}/update/${n}`,a)}delete(n,a){return this.http.post(`${this.url}/${this.getResourceBasePath()}/delete/${n}`,a)}findById(n){return this.http.get(`${this.url}/${this.getResourceBasePath()}/findbyid/${n}`)}count(n){return this.http.post(`${this.url}/${this.getResourceBasePath()}/count`,n)}static#t=this.\u0275fac=function(a){return new(a||h)(t.LFG(o.z),t.LFG(u.eN))};static#e=this.\u0275prov=t.Yz7({token:h,factory:h.\u0275fac})}return h})()},1924:(_,f,s)=>{s.r(f),s.d(f,{ParametreEcheanceModule:()=>mt});var o=s(6814),t=s(1946),u=s(9989),e=s(9468);let h=(()=>{class r extends u.v{getResourceBasePath(){return`${t.y}/parametreEcheanceIncident`}static#t=this.\u0275fac=function(){let i;return function(x){return(i||(i=e.n5z(r)))(x||r)}}();static#e=this.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac})}return r})();var l=s(6465),n=s(676);const a="Parametre Echeance",y=(0,n.PH)(`[${a} API] Load All`),M=(0,n.PH)(`[${a} API] Load All Success`,(0,n.Ky)()),T=(0,n.PH)(`[${a} API] Load Current`),d=(0,n.PH)(`[${a} API] Load Current Success`,(0,n.Ky)()),p={loadItems:y,loadItemsSuccess:M,createItem:(0,n.PH)(`[${a} API] Create`,(0,n.Ky)()),createItemSuccess:(0,n.PH)(`[${a} API] Create Success`,(0,n.Ky)()),loadCurrentItem:T,loadCurrentItemSuccess:d,updateItem:(0,n.PH)(`[${a} API] Update`,(0,n.Ky)()),updateItemSuccess:(0,n.PH)(`[${a} API] Update Success`,(0,n.Ky)()),setLoadingStatut:(0,n.PH)(`[${a} API] Loading`,(0,n.Ky)()),setError:(0,n.PH)(`[${a} API] Create Error`,(0,n.Ky)()),resetError:(0,n.PH)(`[${a} API] Reset Error`),resetErrorField:(0,n.PH)(`[${a} API] Reset Error Field`,(0,n.Ky)())},k=(0,n.Lq)({items:[],currentItem:null,isLoading:!1,errors:null},(0,n.on)(p.loadItemsSuccess,(r,b)=>({...r,items:b.items})),(0,n.on)(p.loadCurrentItem,(r,b)=>({...r,isLoading:!0})),(0,n.on)(p.loadCurrentItemSuccess,(r,b)=>({...r,currentItem:b.item,isLoading:!1})),(0,n.on)(p.createItem,(r,b)=>({...r,isLoading:!0})),(0,n.on)(p.createItemSuccess,(r,b)=>({...r,currentItem:b.item,isLoading:!1})),(0,n.on)(p.updateItem,(r,b)=>({...r,isLoading:!0})),(0,n.on)(p.updateItemSuccess,(r,b)=>({...r,currentItem:b.item,isLoading:!1})),(0,n.on)(p.setLoadingStatut,(r,b)=>({...r,isLoading:b.loading})),(0,n.on)(p.setError,(r,b)=>({...r,errors:b.errors})),(0,n.on)(p.resetError,(r,b)=>({...r,errors:null})),(0,n.on)(p.resetErrorField,(r,b)=>{let i={};return null!==r.errors&&Object.entries(r.errors).forEach(([c,x])=>{c!==b.fieldName&&(i[`${c}`]=x)}),{...r,errors:i}})),F=(0,n.ZF)("parametre-echeances");var H=s(9862),O=s(6328),A=s(7398),U=s(6306),$=s(9397),I=s(2096),P=s(6063),Y=s(4664),V=s(3186),X=s(6366),R=s(8281),B=s(797);let q=(()=>{class r{constructor(i,c,x,D,S,ft){this.parametreEcheanceService=i,this.authService=c,this.router=x,this.actions$=D,this.modalService=S,this.store=ft,this.loadItems$=(0,l.GW)(()=>this.actions$.pipe((0,l.l4)(p.loadItems),(0,O.b)(Z=>(this.store.dispatch((0,P.Q)()),this.parametreEcheanceService.getAll().pipe((0,A.U)(m=>(console.log(m),this.store.dispatch((0,P.Z)()),p.loadItemsSuccess({items:m}))),(0,U.K)(m=>(this.store.dispatch((0,P.Z)()),(0,I.of)(p.setError({errors:m})))))))),{dispatch:!0}),this.createItem$=(0,l.GW)(()=>this.actions$.pipe((0,l.l4)(p.createItem),(0,O.b)(Z=>(this.store.dispatch((0,P.Q)()),this.parametreEcheanceService.add(Z.item).pipe((0,$.b)(()=>{this.store.dispatch((0,P.Z)()),this.modalService.openAlert({type:"success",title:"Op\xe9ration r\xe9ussie",message:"Param\xe8tre ajout\xe9e avec succ\xe8s"})}),(0,A.U)(m=>p.createItemSuccess({item:m})),(0,U.K)(m=>(this.store.dispatch((0,P.Z)()),(0,I.of)(p.setError({errors:m})))))))),{dispatch:!0}),this.loadCurrentItem$=(0,l.GW)(()=>this.actions$.pipe((0,l.l4)(p.loadCurrentItem),(0,O.b)(Z=>(this.store.dispatch((0,P.Q)()),this.parametreEcheanceService.getCurrent().pipe((0,A.U)(m=>(this.store.dispatch((0,P.Z)()),p.loadCurrentItemSuccess({item:m}))),(0,U.K)(m=>(this.store.dispatch((0,P.Z)()),(0,I.of)(p.setError({errors:m})))))))),{dispatch:!0}),this.updateItem$=(0,l.GW)(()=>this.actions$.pipe((0,l.l4)(p.updateItem),(0,O.b)(Z=>(this.store.dispatch((0,P.Q)()),console.log(Z.item),this.parametreEcheanceService.update(Z.id,Z.item).pipe((0,$.b)(()=>{this.store.dispatch((0,P.Z)()),this.modalService.openAlert({type:"success",title:"Op\xe9ration r\xe9ussie",message:"Param\xe8tre modifi\xe9e avec succ\xe8s"}),this.router.navigateByUrl("incidents")}),(0,A.U)(m=>p.updateItemSuccess({item:m})),(0,U.K)(m=>(this.store.dispatch((0,P.Z)()),(0,I.of)(p.setError({errors:m})))))))),{dispatch:!0}),this.handleError$=(0,l.GW)(()=>this.actions$.pipe((0,l.l4)(p.setError),(0,Y.w)(Z=>{if(this.store.dispatch((0,P.Q)()),Z.errors instanceof H.UA){if(422===Z.errors.status){let m="",J=0;for(const[bt,K]of Object.entries(Z.errors.error))m+=0===J?K:"\n"+K,J++;this.modalService.openAlert({type:"error",title:"Op\xe9ration Erron\xe9e",message:m})}if(401===Z.errors.status){let m="Votre token a expir\xe9, veuillez vous reconnecter svp!";return this.authService.removeToken(),this.authService.removeUserInfo(),this.store.dispatch((0,P.Z)()),this.modalService.openAlert({type:"error",title:"Op\xe9ration Erron\xe9e",message:m}),(0,I.of)(V.jM())}}return this.store.dispatch((0,P.Z)()),(0,I.of)({type:"noop"})})),{dispatch:!0})}static#t=this.\u0275fac=function(c){return new(c||r)(e.LFG(h),e.LFG(X.e),e.LFG(R.F0),e.LFG(l.eX),e.LFG(B.Z),e.LFG(n.yh))};static#e=this.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac})}return r})();var tt=s(362),C=s(95);let N=(()=>{class r{constructor(){}createForm(i){return new C.cw({echeancePrisEnCharge:new C.NI(i.echeancePrisEnCharge,{nonNullable:!0,validators:[C.kI.required]}),echeanceEnCoursResolution:new C.NI(i.echeanceEnCoursResolution,{nonNullable:!0,validators:[C.kI.required]}),echeanceResolu:new C.NI(i.echeanceResolu,{nonNullable:!0,validators:[C.kI.required]}),echeanceClos:new C.NI(i.echeanceClos,{nonNullable:!0,validators:[C.kI.required]}),utilisateurModification:new C.NI(i.utilisateurModification),utilisateurCreation:new C.NI(i.utilisateurCreation),dateCreation:new C.NI(i.dateCreation),dateDerniereModification:new C.NI(i.dateDerniereModification)})}updateForm(i,c){c.get("echeancePrisEnCharge")?.setValue(i.echeancePrisEnCharge),c.get("echeanceEnCoursResolution")?.setValue(i.echeanceEnCoursResolution),c.get("echeanceResolu")?.setValue(i.echeanceResolu),c.get("echeanceClos")?.setValue(i.echeanceClos),c.get("utilisateurModification")?.setValue(i.utilisateurModification),c.get("utilisateurCreation")?.setValue(i.utilisateurCreation),c.get("dateCreation")?.setValue(i.dateCreation),c.get("dateDerniereModification")?.setValue(i.dateDerniereModification)}static#t=this.\u0275fac=function(c){return new(c||r)};static#e=this.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac})}return r})();var et=s(7394);const w=(0,n.P1)(F,r=>r.items);(0,n.P1)(F,r=>r.currentItem),(0,n.P1)(F,r=>r.isLoading);var nt=s(8819),ot=s(8346),rt=s(1171),it=s(9543),st=s(547),at=s(9887);function ct(r,b){if(1&r){const i=e.EpF();e.TgZ(0,"form",2)(1,"div",3)(2,"app-panel-custom",4)(3,"div",5)(4,"div",6),e._UZ(5,"app-form-label",7),e.TgZ(6,"div",8),e._UZ(7,"app-custom-textfield",9),e.qZA()(),e.TgZ(8,"div",6),e._UZ(9,"app-form-label",10),e.TgZ(10,"div",8),e._UZ(11,"app-custom-textfield",11),e.qZA()()(),e.TgZ(12,"div",5)(13,"div",6),e._UZ(14,"app-form-label",12),e.TgZ(15,"div",8),e._UZ(16,"app-custom-textfield",13),e.qZA()(),e.TgZ(17,"div",6),e._UZ(18,"app-form-label",14),e.TgZ(19,"div",8),e._UZ(20,"app-custom-textfield",15),e.qZA()()()(),e.TgZ(21,"app-panel-custom",16)(22,"div",5)(23,"div",6),e._UZ(24,"app-form-label",17),e.TgZ(25,"div",8),e._UZ(26,"app-custom-textfield",18),e.qZA()(),e.TgZ(27,"div",19),e._UZ(28,"app-form-label",20),e.TgZ(29,"div",8),e._UZ(30,"app-custom-textfield",21),e.qZA()()(),e.TgZ(31,"div",5)(32,"div",6),e._UZ(33,"app-form-label",22),e.TgZ(34,"div",8),e._UZ(35,"app-custom-textfield",23),e.qZA()(),e.TgZ(36,"div",19),e._UZ(37,"app-form-label",24),e.TgZ(38,"div",8),e._UZ(39,"app-custom-textfield",25),e.qZA()()()(),e.TgZ(40,"div",26)(41,"app-primary-button",27),e.NdJ("buttonClicked",function(){e.CHM(i);const x=e.oxw();return e.KtG(x.submitForm())}),e.qZA(),e.TgZ(42,"app-cancel-button",28),e.NdJ("buttonClicked",function(){e.CHM(i);const x=e.oxw();return e.KtG(x.returnToList())}),e.qZA()()()()}if(2&r){const i=e.oxw();e.Q6J("formGroup",i.form),e.xp6(7),e.Q6J("readonly",!0),e.xp6(4),e.Q6J("readonly",!0),e.xp6(5),e.Q6J("readonly",!0),e.xp6(4),e.Q6J("readonly",!0)}}let lt=(()=>{class r{constructor(i,c,x,D){this.formService=i,this.modalService=c,this.router=x,this.store=D,this.items$=this.store.select(w),this.formSubmitted=new e.vpe,this.subscription=new et.w0}ngOnInit(){this.subscription=this.store.select(w).subscribe({next:i=>{this.parametreEcheance=null!==i?{id:i[0].id,echeanceDeclare:i[0].echeanceDeclare,echeancePrisEnCharge:i[0].echeancePrisEnCharge,echeanceEnCoursResolution:i[0].echeanceEnCoursResolution,echeanceResolu:i[0].echeanceResolu,echeanceClos:i[0].echeanceClos,dateDerniereModification:null===i[0].dateDerniereModification?"":this.formatDate(i[0].dateDerniereModification),dateCreation:null===i[0].dateCreation?"":this.formatDate(i[0].dateCreation),utilisateurCreation:i[0].utilisateurCreation,utilisateurModification:i[0].utilisateurModification}:{id:"",echeanceDeclare:0,echeancePrisEnCharge:0,echeanceEnCoursResolution:0,echeanceResolu:0,echeanceClos:0,dateDerniereModification:null,dateCreation:null,utilisateurCreation:"",utilisateurModification:""},this.form?this.formService.updateForm(this.parametreEcheance,this.form):this.form=this.formService.createForm(this.parametreEcheance)}})}formatDate(i){if(i){const c=new Date(i);return c.toLocaleDateString()+" \xe0 "+c.toLocaleTimeString()}return null}ngOnDestroy(){this.subscription.unsubscribe()}submitForm(){let i={id:this.parametreEcheance.id,echeanceDeclare:0,echeancePrisEnCharge:Number(this.form.get("echeancePrisEnCharge")?.value),echeanceEnCoursResolution:Number(this.form.get("echeanceEnCoursResolution")?.value),echeanceResolu:Number(this.form.get("echeanceResolu")?.value),echeanceClos:Number(this.form.get("echeanceClos")?.value),dateDerniereModification:this.parametreEcheance.dateDerniereModification,dateCreation:this.parametreEcheance.dateCreation,utilisateurCreation:this.parametreEcheance.utilisateurCreation,utilisateurModification:this.parametreEcheance.utilisateurModification};this.formSubmitted.emit(i),console.log(this.parametreEcheance)}returnToList(){this.router.navigateByUrl("incidents")}static#t=this.\u0275fac=function(c){return new(c||r)(e.Y36(N),e.Y36(B.Z),e.Y36(R.F0),e.Y36(n.yh))};static#e=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-parametre-echeance-form"]],inputs:{parametreEcheance:"parametreEcheance"},outputs:{formSubmitted:"formSubmitted"},features:[e._Bn([N])],decls:2,vars:1,consts:[[1,"pe-3","ps-3","pt-0"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],[1,"form-main","p-2"],["icon","fa fa-angle-right","title","Historique"],[1,"general-info"],[1,"input-container","col-4"],["title","Date Cr\xe9ation",1,"col-5","text-end"],[1,"input-textfield-container","col"],["otherclass","custom-style-form","placeholder","","formControlName","dateCreation",3,"readonly"],["title","Cr\xe9\xe9 Par",1,"col-5","text-end"],["otherclass","custom-style-form","placeholder","","formControlName","utilisateurCreation",3,"readonly"],["title","Date Derni\xe8re Modif",1,"col-5","text-end"],["otherclass","custom-style-form","formControlName","dateDerniereModification","placeholder","",3,"readonly"],["title","Modifi\xe9 Par",1,"col-5","text-end"],["otherclass","custom-style-form","placeholder","","formControlName","utilisateurModification",3,"readonly"],["icon","fa fa-angle-right","title","Informations g\xe9n\xe9rales"],["title","Ech\xe9ance Prise En Charge",1,"col-6","text-end"],["otherclass","custom-style-form","placeholder","","formControlName","echeancePrisEnCharge"],[1,"input-container","col-5"],["title","Ech\xe9ance En Cours de R\xe9solution",1,"col-6","text-end"],["otherclass","custom-style-form","placeholder","","formControlName","echeanceEnCoursResolution"],["title","Ech\xe9ance R\xe9solu",1,"col-6","text-end"],["otherclass","custom-style-form","placeholder","","formControlName","echeanceResolu"],["title","Ech\xe9ance Cl\xf4ture",1,"col-6","text-end"],["otherclass","custom-style-form","placeholder","","formControlName","echeanceClos"],[1,"form-actions"],["title","Enregistrer",1,"me-1",3,"buttonClicked"],["otherclass","custom-cancel-button","title","Annuler",3,"buttonClicked"]],template:function(c,x){1&c&&(e.TgZ(0,"div",0),e.YNc(1,ct,43,5,"form",1),e.qZA()),2&c&&(e.xp6(1),e.Q6J("ngIf",x.form))},dependencies:[o.O5,C._Y,C.JJ,C.JL,C.sg,C.u,nt.F,ot.W,rt.h,it.C,st.Z,at.l],styles:["[_nghost-%COMP%]{font-size:12px}.general-info[_ngcontent-%COMP%]{display:flex;padding:5px 0}.form-main[_ngcontent-%COMP%]{background-color:#e7e8ea;border:1px solid #c7c5c6}.input-container[_ngcontent-%COMP%]{display:flex;align-items:center}.input-container[_ngcontent-%COMP%] + .input-container[_ngcontent-%COMP%]{//margin-left: 32px}.input-textfield-container[_ngcontent-%COMP%]{width:250px;margin-left:4px}.form-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:.5rem}.form-actions[_ngcontent-%COMP%]   app-primary-button[_ngcontent-%COMP%]{margin-left:.5rem}"]})}return r})(),ut=(()=>{class r{constructor(i){this.store=i,this.isUpdate=!1}ngOnInit(){this.store.dispatch(p.loadItems())}saveCurrentParametreEcheance(i){console.log(i),this.store.dispatch(i.id?p.updateItem({id:i.id,item:i}):p.createItem({item:i}))}static#t=this.\u0275fac=function(c){return new(c||r)(e.Y36(n.yh))};static#e=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-parametre-echeance-configuration"]],decls:3,vars:0,consts:[[1,"pt-3","ps-3","pe-3","pb-0","mb-0"],["pathLevelOne","Configuration","pathLevelTwo","Param\xe8tre Ech\xe9ance","pathLevelThree","Ajouter"],[3,"formSubmitted"]],template:function(c,x){1&c&&(e.TgZ(0,"div",0),e._UZ(1,"app-custom-breadcrumb",1),e.qZA(),e.TgZ(2,"app-parametre-echeance-form",2),e.NdJ("formSubmitted",function(S){return x.saveCurrentParametreEcheance(S)}),e.qZA())},dependencies:[tt.V,lt],styles:["[_nghost-%COMP%]{width:100%}"]})}return r})();var dt=s(9207);const ht=[{path:"",component:ut,canActivate:[s(8036).p],data:{module:"Incident",path:"parametreEcheanceIncident"}}];let mt=(()=>{class r{static#t=this.\u0275fac=function(c){return new(c||r)};static#e=this.\u0275mod=e.oAB({type:r});static#n=this.\u0275inj=e.cJS({providers:[h],imports:[o.ez,dt.m,n.Aw.forFeature("parametre-echeances",k),l.sQ.forFeature(q),R.Bz.forChild(ht)]})}return r})()},8819:(_,f,s)=>{s.d(f,{F:()=>t});var o=s(9468);let t=(()=>{class u{constructor(){this.disabled=!1,this.buttonClicked=new o.vpe}emitButtonClicked(){this.buttonClicked.emit()}static#t=this.\u0275fac=function(l){return new(l||u)};static#e=this.\u0275cmp=o.Xpm({type:u,selectors:[["app-cancel-button"]],inputs:{title:"title",url:"url",otherclass:"otherclass",disabled:"disabled"},outputs:{buttonClicked:"buttonClicked"},decls:2,vars:5,consts:[[3,"disabled","click"]],template:function(l,n){1&l&&(o.TgZ(0,"button",0),o.NdJ("click",function(){return n.emitButtonClicked()}),o._uU(1),o.qZA()),2&l&&(o.Gre("cancel-button ",n.otherclass,""),o.Q6J("disabled",n.disabled),o.xp6(1),o.hij(" ",n.title,"\n"))},styles:[".cancel-button[_ngcontent-%COMP%]{color:#000;border:1px solid #6d7582;background-color:#fff;min-width:120px;display:flex!important;align-items:center!important;justify-content:center!important;font-size:12px;height:25px;padding:.75rem 0rem;border-radius:3px}"]})}return u})()},362:(_,f,s)=>{s.d(f,{V:()=>T});var o=s(590),t=s(9468),u=s(6814),e=s(5597);let h=(()=>{class d{constructor(){this.periode=""}static#t=this.\u0275fac=function(v){return new(v||d)};static#e=this.\u0275cmp=t.Xpm({type:d,selectors:[["app-periode"]],inputs:{periode:"periode"},decls:4,vars:1,consts:[[1,"periode-box"],[1,"triangle-box"],[1,"panel-periode"]],template:function(v,g){1&v&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"div",2),t._uU(3),t.qZA()()),2&v&&(t.xp6(3),t.hij(" ",g.periode," "))},styles:[".periode-box[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.triangle-box[_ngcontent-%COMP%]{clip-path:polygon(100% 0,0 55%,100% 100%);border:1px solid #dd0e14;background-color:#dd0e14;width:13px;height:13px;margin-right:-2px}.panel-periode[_ngcontent-%COMP%]{color:#fff;display:flex;align-items:center;justify-content:center;padding:5px;border:1px solid #dd0e14;background-color:#dd0e14;font-weight:400!important;border-radius:6px;font-size:.68rem}"]})}return d})();var l=s(1227);(0,u.qS)(l.Z,"fr-Fr");let n=(()=>{class d{constructor(){this.nbreElt=0}static#t=this.\u0275fac=function(v){return new(v||d)};static#e=this.\u0275cmp=t.Xpm({type:d,selectors:[["app-nbre-elt"]],inputs:{nbreElt:"nbreElt"},features:[t._Bn([{provide:t.soG,useValue:"fr-FR"}])],decls:7,vars:3,consts:[[1,"info-element-box"],[1,"icons-icon-view"],[1,"label-element","me-1","ms-1"],[1,"number"]],template:function(v,g){1&v&&(t.TgZ(0,"div",0),t._UZ(1,"span",1),t.TgZ(2,"span",2),t._uU(3,"Nombre d'El\xe9ments :"),t.qZA(),t.TgZ(4,"span",3),t._uU(5),t.ALo(6,"number"),t.qZA()()),2&v&&(t.xp6(5),t.Oqu(t.lcZ(6,1,g.nbreElt)))},dependencies:[u.JJ],styles:[".info-element-box[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin-left:auto;border:1px solid #d0d5d9;padding:5px 10px;border-radius:5px;background-color:#e9f0f8;font-size:.68rem}span.icons-icon-view[_ngcontent-%COMP%]{font-size:17px;color:#4a5068}span.number[_ngcontent-%COMP%]{font-weight:700;color:#2d72b7}"]})}return d})();function a(d,L){if(1&d&&t._UZ(0,"app-periode",18),2&d){const E=t.oxw();t.Q6J("periode",E.periode)}}function y(d,L){if(1&d&&t._UZ(0,"app-nbre-elt",19),2&d){const E=t.oxw();t.Q6J("nbreElt",E.nbreElt)}}const M=function(d){return{"ms-auto":d}};let T=(()=>{class d{constructor(){this.pathLevelOne="",this.pathLevelTwo="",this.pathLevelThree="",this.hide=!0,this.periode="",this.nbreElt=0,this.month=0,this.realMonth="0",this.realDay="0",this.year="0",this.chevronRigth=o._tD}ngOnInit(){this.date=new Date,this.realDay=this.formatNumber(this.date.getDate()),this.month=this.date.getMonth()+1,this.realMonth=this.formatNumber(this.month),this.year=this.date.getFullYear().toString().substr(-2),""===this.periode&&(this.periode="P\xe9riode du : "+this.realDay+"/"+this.realMonth+"/"+this.date.getFullYear())}formatNumber(E){return E<10?"0"+E:""+E}static#t=this.\u0275fac=function(v){return new(v||d)};static#e=this.\u0275cmp=t.Xpm({type:d,selectors:[["app-custom-breadcrumb"]],inputs:{pathLevelOne:"pathLevelOne",pathLevelTwo:"pathLevelTwo",pathLevelThree:"pathLevelThree",hide:"hide",periode:"periode",nbreElt:"nbreElt"},decls:27,vars:13,consts:[["id","breadcrumb","hide","hide","periode","periode","nbreElt","nbreElt",1,"w-full","mb-1"],[1,"d-flex","align-items-center","mb-1"],[1,"icons-icon-home","pt-1",2,"font-size","18px"],[1,"pt-2",2,"margin-right","5px","margin-left","5px","font-size","10px"],[3,"icon"],[1,"pt-2"],[1,"clip-path"],[1,"triangle"],[1,"ms-2"],["class","ms-1",3,"periode",4,"ngIf"],["class","ms-auto me-2",3,"nbreElt",4,"ngIf"],[1,"d-flex","align-items-center",3,"ngClass"],[1,"me-1"],["src","/assets/images/Icones/icon-calendar.svg","width","20px"],[1,"today-day"],[1,"today-month"],[1,"today-year"],[1,"mt-0"],[1,"ms-1",3,"periode"],[1,"ms-auto","me-2",3,"nbreElt"]],template:function(v,g){1&v&&(t.TgZ(0,"div",0)(1,"h6",1),t._UZ(2,"span",2),t.TgZ(3,"span",3),t._UZ(4,"fa-icon",4),t.qZA(),t.TgZ(5,"span",5),t._uU(6),t.qZA(),t.TgZ(7,"span",3),t._UZ(8,"fa-icon",4),t.qZA(),t.TgZ(9,"span",5),t._uU(10),t.qZA(),t.TgZ(11,"div",6),t._UZ(12,"div",7),t.TgZ(13,"span",8),t._uU(14),t.qZA()(),t.YNc(15,a,1,1,"app-periode",9),t.YNc(16,y,1,1,"app-nbre-elt",10),t.TgZ(17,"div",11)(18,"span",12),t._UZ(19,"img",13),t.qZA(),t.TgZ(20,"span",14),t._uU(21),t.qZA(),t.TgZ(22,"span",15),t._uU(23),t.qZA(),t.TgZ(24,"span",16),t._uU(25),t.qZA()()(),t._UZ(26,"hr",17),t.qZA()),2&v&&(t.xp6(4),t.Q6J("icon",g.chevronRigth),t.xp6(2),t.Oqu(g.pathLevelOne),t.xp6(2),t.Q6J("icon",g.chevronRigth),t.xp6(2),t.Oqu(g.pathLevelTwo),t.xp6(4),t.Oqu(g.pathLevelThree),t.xp6(1),t.Q6J("ngIf",!1===g.hide&&""!==g.periode),t.xp6(1),t.Q6J("ngIf",!1===g.hide),t.xp6(1),t.Q6J("ngClass",t.VKq(11,M,!0===g.hide)),t.xp6(4),t.Oqu(g.realDay),t.xp6(2),t.Oqu(g.realMonth),t.xp6(2),t.Oqu(g.year))},dependencies:[u.mk,u.O5,e.BN,h,n],styles:["#breadcrumb[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:12.25px;font-weight:600}h6[_ngcontent-%COMP%]   .fa.fa-chevron-right[_ngcontent-%COMP%]{color:#3a3a38}.today-day[_ngcontent-%COMP%], .today-month[_ngcontent-%COMP%], .today-year[_ngcontent-%COMP%]{background-color:#2f4050;border:1px solid #2f4050;color:#fff;display:flex;align-items:center;justify-content:center;width:21px;height:21px;font-weight:400!important}.today-month[_ngcontent-%COMP%]{margin-left:3px;margin-right:3px}hr[_ngcontent-%COMP%]{background-color:#bcbabb!important;color:#bcbabb!important;height:1px}.clip-path[_ngcontent-%COMP%]{clip-path:polygon(0% 0%,85% 0,100% 50%,84% 100%,0% 100%);background:linear-gradient(to right,#5eb78b,#5aaf8e,#52a591,#519e98,#498d98,#488598,#436c98);font-weight:550;color:#fff;min-width:50px;min-height:15px;display:flex;align-items:center;margin-top:8px;margin-left:5px;padding-right:15px;border:1px solid white}.triangle[_ngcontent-%COMP%]{clip-path:polygon(100% 47%,0 0,0 100%);background-color:#fff;max-width:5px;min-width:5px;max-height:8px;min-height:8px;border:1px solid white}"]})}return d})()},8346:(_,f,s)=>{s.d(f,{W:()=>e});var o=s(9468),t=s(95),u=s(7394);let e=(()=>{class h{constructor(){this.placeholder="",this.type="text",this.readonly=!1,this.otherclass="",this.subscription=new u.w0,this.disabled=!1,this.onTouched=()=>{},this.onChange=()=>{},this.control=new t.NI}writeValue(n){this.control.setValue(n)}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouched=n}setDisabledState(n){this.disabled=n,n?this.control.disable():this.control.enable()}ngOnInit(){this.subscription=this.control.valueChanges.subscribe(n=>{this.onChange(n)})}ngOnDestroy(){this.subscription.unsubscribe()}static#t=this.\u0275fac=function(a){return new(a||h)};static#e=this.\u0275cmp=o.Xpm({type:h,selectors:[["app-custom-textfield"]],inputs:{placeholder:"placeholder",type:"type",readonly:"readonly",otherclass:"otherclass"},features:[o._Bn([{provide:t.JU,useExisting:(0,o.Gpc)(()=>h),multi:!0}])],decls:1,vars:7,consts:[[3,"type","placeholder","formControl","readonly"]],template:function(a,y){1&a&&o._UZ(0,"input",0),2&a&&(o.Gre("custom-text-field m-0 form-control-sm ",y.otherclass,""),o.s9C("placeholder",y.placeholder),o.Q6J("type",y.type)("formControl",y.control)("readonly",y.readonly))},dependencies:[t.Fj,t.JJ,t.oH],styles:[".custom-text-field[_ngcontent-%COMP%]{display:block;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;appearance:none;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;border:1px solid #878787!important;margin-bottom:2px}.form-control-sm[_ngcontent-%COMP%]{font-size:12px!important;border-radius:0;min-width:100%}.custom-text-field[_ngcontent-%COMP%]:focus{background-color:#f0f4f5;border:0px!important;outline:0}.custom-text-field[_ngcontent-%COMP%]:read-only:focus{outline:0!important;border:1px solid #878787!important}"]})}return h})()},1171:(_,f,s)=>{s.d(f,{h:()=>t});var o=s(9468);let t=(()=>{class u{constructor(){this.title="",this.class=""}static#t=this.\u0275fac=function(l){return new(l||u)};static#e=this.\u0275cmp=o.Xpm({type:u,selectors:[["app-form-label"]],inputs:{title:"title",class:"class"},decls:2,vars:4,template:function(l,n){1&l&&(o.TgZ(0,"label"),o._uU(1),o.qZA()),2&l&&(o.Tol(n.class),o.xp6(1),o.Oqu(n.title))},styles:["label[_ngcontent-%COMP%]{font-size:12px;font-weight:500;color:#464445;margin-right:5px;min-width:100%;max-width:100%}"]})}return u})()},9887:(_,f,s)=>{s.d(f,{l:()=>n});var o=s(9468),t=s(6814);function u(a,y){if(1&a&&(o.TgZ(0,"h5",3),o._UZ(1,"span"),o._uU(2),o.Hsn(3,1),o.qZA()),2&a){const M=o.oxw();o.xp6(1),o.Tol(M.icon),o.xp6(1),o.hij(" ",M.title," ")}}function e(a,y){1&a&&o._UZ(0,"hr",4)}const h=["*",[["",8,"button-head"]]],l=["*",".button-head"];let n=(()=>{class a{constructor(){this.title="",this.icon="",this.background="white",this.otherclass=""}static#t=this.\u0275fac=function(T){return new(T||a)};static#e=this.\u0275cmp=o.Xpm({type:a,selectors:[["app-panel-custom"]],inputs:{title:"title",icon:"icon",background:"background",otherclass:"otherclass"},ngContentSelectors:l,decls:5,vars:6,consts:[["class","title-panel-custom mb-1",4,"ngIf"],["class","mt-0",4,"ngIf"],[1,"panel-custom-body"],[1,"title-panel-custom","mb-1"],[1,"mt-0"]],template:function(T,d){1&T&&(o.F$t(h),o.TgZ(0,"div"),o.YNc(1,u,4,4,"h5",0),o.YNc(2,e,1,0,"hr",1),o.TgZ(3,"div",2),o.Hsn(4),o.qZA()()),2&T&&(o.MT6("panel-custom ",d.background," ",d.otherclass,""),o.xp6(1),o.Q6J("ngIf",d.title),o.xp6(1),o.Q6J("ngIf",d.title))},dependencies:[t.O5],styles:[".panel-custom[_ngcontent-%COMP%]{border:1px solid #c7c5c6;padding:15px;margin-bottom:3px}.title-panel-custom[_ngcontent-%COMP%]{display:flex;align-items:center;color:#045a5e;font-size:15px;font-family:aileronbold}.title-panel-custom[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#46ad7e;margin-right:5px}"]})}return a})()},9543:(_,f,s)=>{s.d(f,{C:()=>t});var o=s(9468);let t=(()=>{class u{constructor(){this.otherclass="",this.disabled=!1,this.buttonClicked=new o.vpe}emitButtonClicked(h){h.preventDefault(),this.buttonClicked.emit()}static#t=this.\u0275fac=function(l){return new(l||u)};static#e=this.\u0275cmp=o.Xpm({type:u,selectors:[["app-primary-button"]],inputs:{title:"title",otherclass:"otherclass",disabled:"disabled"},outputs:{buttonClicked:"buttonClicked"},decls:2,vars:5,consts:[[3,"disabled","click"]],template:function(l,n){1&l&&(o.TgZ(0,"button",0),o.NdJ("click",function(y){return n.emitButtonClicked(y)}),o._uU(1),o.qZA()),2&l&&(o.Gre("primary-button ",n.otherclass,""),o.Q6J("disabled",n.disabled),o.xp6(1),o.hij(" ",n.title,"\n"))},styles:[".primary-button[_ngcontent-%COMP%]{color:#fff;border:1px solid #1EA860;background-color:#1ea860;display:flex!important;align-items:center!important;justify-content:center!important;font-size:12px;height:30px;padding:.75rem 1rem;border-radius:6px}.primary-button[_ngcontent-%COMP%]:hover{background-color:#2da899;border:1px solid #2DA899}.primary-button[_ngcontent-%COMP%]:disabled{color:#fff;border:1px solid #3d4957;background-color:#3d4957;min-width:80px;display:flex!important;align-items:center!important;justify-content:center!important;font-size:12px;height:24px;opacity:.7;padding:.75rem 0rem}"]})}return u})()},547:(_,f,s)=>{s.d(f,{Z:()=>u});var o=s(9468),t=s(95);let u=(()=>{class e{constructor(l){this.ngControl=l}static#t=this.\u0275fac=function(n){return new(n||e)(o.Y36(t.a5,10))};static#e=this.\u0275dir=o.lG2({type:e,selectors:[["","formControl",""],["","formControlName",""]]})}return e})()}}]);