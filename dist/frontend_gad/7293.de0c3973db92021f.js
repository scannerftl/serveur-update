"use strict";(self.webpackChunkfrontend_gad=self.webpackChunkfrontend_gad||[]).push([[7293],{3396:(P,g,r)=>{r.d(g,{B:()=>h});var t=r(6814),p=r(9207),f=r(9468);let h=(()=>{class l{static#e=this.\u0275fac=function(o){return new(o||l)};static#t=this.\u0275mod=f.oAB({type:l});static#r=this.\u0275inj=f.cJS({imports:[t.ez,p.m]})}return l})()},5779:(P,g,r)=>{r.d(g,{P:()=>f});var t=r(95),p=r(9468);let f=(()=>{class h{constructor(){}createFormActionSuggeree(d){return new t.cw({id:new t.NI(this.getActionSuggereeId(d),{nonNullable:!0,validators:[t.kI.required]}),libelle:new t.NI(this.getActionSuggereeLibelle(d),{nonNullable:!0,validators:[t.kI.required]}),statut:new t.NI(this.getActionSuggereeStatut(d),{nonNullable:!0,validators:[t.kI.required]}),description:new t.NI(this.getActionSuggereeDescription(d),{}),refSys:new t.NI(this.getActionSuggereeRefSys(d),{})})}createFormNewActionSuggeree(){return new t.cw({id:new t.NI("",{nonNullable:!0,validators:[t.kI.required]}),libelle:new t.NI("",{nonNullable:!0,validators:[t.kI.required]}),statut:new t.NI(null,{nonNullable:!0,validators:[t.kI.required]}),description:new t.NI("",{}),refSys:new t.NI("",{})})}getActionSuggereeId(d){return null!==d?d.id:0}getActionSuggereeLibelle(d){return null!==d?d.libelle:""}getActionSuggereeStatut(d){return null!==d?d.statut:null}getActionSuggereeDescription(d){return null!==d?d.description:""}getActionSuggereeRefSys(d){return null!==d?d.refSys:""}static#e=this.\u0275fac=function(n){return new(n||h)};static#t=this.\u0275prov=p.Yz7({token:h,factory:h.\u0275fac})}return h})()},4970:(P,g,r)=>{r.d(g,{W:()=>h});var t=r(95),p=r(9468),f=r(5779);let h=(()=>{class l{constructor(n){this.actionSuggereeFormService=n}createFormEtape(n){return new t.cw({id:new t.NI(this.getEtapeId(n),{nonNullable:!0,validators:[t.kI.required]}),numeroEtape:new t.NI(this.getEtapeNumeroEtape(n),{nonNullable:!0,validators:[t.kI.required]}),actionSuggere:this.actionSuggereeFormService.createFormActionSuggeree(this.getEtapeActionSuggeree(n)),refSys:new t.NI(this.getEtapeRefSys(n),{})})}createFormNewEtape(){return new t.cw({id:new t.NI("",{nonNullable:!0,validators:[t.kI.required]}),numeroEtape:new t.NI(0,{nonNullable:!0,validators:[t.kI.required]}),actionSuggere:this.actionSuggereeFormService.createFormNewActionSuggeree(),refSys:new t.NI("",{})})}getEtapeId(n){return null!==n?n.id:""}getEtapeRefSys(n){return null!==n?n.refSys:""}getEtapeNumeroEtape(n){return null!==n?n.numeroEtape:0}getEtapeActionSuggeree(n){return null!==n?n.actionSuggere:null}static#e=this.\u0275fac=function(o){return new(o||l)(p.LFG(f.P))};static#t=this.\u0275prov=p.Yz7({token:l,factory:l.\u0275fac})}return l})()},1793:(P,g,r)=>{r.d(g,{K:()=>V});var t=r(6814),p=r(9207),f=r(2984),h=r(676),l=r(198);const n=(0,h.Lq)({savedFile:null,errors:null},(0,h.on)(l.NY.importFileSuccess,(C,$)=>({...C,savedFile:$.fileUploadResult})),(0,h.on)(l.NY.resetErrorField,(C,$)=>{let M={};return null!==C.errors&&Object.entries(C.errors).forEach(([y,K])=>{y!==$.fieldName&&(M[`${y}`]=K)}),{...C,errors:M}}));(0,h.ZF)("file-imports");var i=r(6465),L=r(6063),b=r(7398),T=r(6306),W=r(8504),z=r(7634),N=r(9468),H=r(8281),Y=r(797);let J=(()=>{class C{constructor(M,y,K,Q,j){this.fileService=M,this.actions$=y,this.router=K,this.modalService=Q,this.store=j,this.importFile$=(0,i.GW)(()=>this.actions$.pipe((0,i.l4)(l.NY.importFile),(0,z.z)(Z=>(this.store.dispatch((0,L.Q)()),this.fileService.import(Z.filePath).pipe((0,b.U)(x=>(console.log(x),this.store.dispatch((0,L.Z)()),l.NY.importFileSuccess({fileUploadResult:x,id:Z.id}))),(0,T.K)(x=>(console.log(x),(0,W._)(()=>x))))))),{dispatch:!0})}static#e=this.\u0275fac=function(y){return new(y||C)(N.LFG(f.I),N.LFG(i.eX),N.LFG(H.F0),N.LFG(Y.Z),N.LFG(h.yh))};static#t=this.\u0275prov=N.Yz7({token:C,factory:C.\u0275fac})}return C})(),V=(()=>{class C{static#e=this.\u0275fac=function(y){return new(y||C)};static#t=this.\u0275mod=N.oAB({type:C});static#r=this.\u0275inj=N.cJS({providers:[f.I],imports:[t.ez,p.m,h.Aw.forFeature("file-imports",n),i.sQ.forFeature(J)]})}return C})()},2984:(P,g,r)=>{r.d(g,{I:()=>h});var t=r(1946),p=r(9468),f=r(9862);let h=(()=>{class l{constructor(n){this.http=n,this.url="http://192.168.1.120:8080/source_file_service-impl-1.0-SNAPSHOT/api",this.resourceBasePath="items-file"}getResourceBasePath(){return`${t.y}/incident`}import(n){const o=new FormData;return o.append("file",n),this.http.post(`${this.url}/${this.resourceBasePath}/upload`,o)}static#e=this.\u0275fac=function(o){return new(o||l)(p.LFG(f.eN))};static#t=this.\u0275prov=p.Yz7({token:l,factory:l.\u0275fac})}return l})()},198:(P,g,r)=>{r.d(g,{NY:()=>o});var t=r(676);const p="FileUpload",o={importFile:(0,t.PH)(`[${p} API] Import File`,(0,t.Ky)()),importFileSuccess:(0,t.PH)(`[${p} API] Import File Success`,(0,t.Ky)()),setError:(0,t.PH)(`[${p} API] Create Error`,(0,t.Ky)()),resetError:(0,t.PH)(`[${p} API] Reset Error`),resetErrorField:(0,t.PH)(`[${p} API] Reset Error Field`,(0,t.Ky)())}},8510:(P,g,r)=>{r.d(g,{Y:()=>o});var t=r(6814),p=r(9207),f=r(2030),h=r(3396),l=r(1793),d=r(9468);let n=(()=>{class i{static#e=this.\u0275fac=function(T){return new(T||i)};static#t=this.\u0275mod=d.oAB({type:i});static#r=this.\u0275inj=d.cJS({imports:[t.ez,p.m]})}return i})(),o=(()=>{class i{static#e=this.\u0275fac=function(T){return new(T||i)};static#t=this.\u0275mod=d.oAB({type:i});static#r=this.\u0275inj=d.cJS({imports:[t.ez,p.m,f.h,n,h.B,l.K]})}return i})()},3096:(P,g,r)=>{r.d(g,{X:()=>h});var t=r(95),p=r(9468),f=r(3975);let h=(()=>{class l{constructor(n){this.solutionFormService=n}createForm(n,o,i){return this.currentIncident=i,this.currentOperationType=n,this.currentRoleIncident=o,console.log("Create Form : "+this.currentRoleIncident),new t.cw({titre:new t.NI(i.titre,{nonNullable:!0,validators:[t.kI.required]}),description:new t.NI(i.description,{nonNullable:!0,validators:[t.kI.required]}),equipement:new t.NI(i.equipement,{nonNullable:!0,validators:[t.kI.required]}),groupeEquipement:new t.NI(i.groupeEquipement),categorieEquipement:new t.NI(i.categorieEquipement),sousCategorieEquipement:new t.NI(i.sousCategorieEquipement),libelleEquipement:new t.NI(i.libelleEquipement),numeroSerie:new t.NI(i.numeroSerie),refSys:new t.NI(i.refSys),etapeIncident:new t.NI(i.etapeIncident),prioriteIncident:new t.NI(i.prioriteIncident,{}),typeIncident:new t.NI(i.typeIncident,{nonNullable:!0,validators:[t.kI.required]}),probleme:new t.NI(i.probleme,{nonNullable:"USER"!==this.currentRoleIncident,validators:[this.problemeValidator.bind(this)]}),impact:new t.NI(i.impact,{validators:[this.impactValidator.bind(this)]}),categorieIncident:new t.NI(i.categorieIncident,{validators:[this.categorieValidator.bind(this)]}),firstName:new t.NI(i.firstName),lastName:new t.NI(i.lastName),userName:new t.NI(i.userName),demandeur:new t.NI(i.demandeur,{validators:[this.demandeurValidator.bind(this)]}),firstNameGestionnaire:new t.NI(i.firstNameGestionnaire),lastNameGestionnaire:new t.NI(i.lastNameGestionnaire),userNameGestionnaire:new t.NI(i.userNameGestionnaire),firstNameSupport:new t.NI(i.firstNameSupport),lastNameSupport:new t.NI(i.lastNameSupport),userNameSupport:new t.NI(i.userNameSupport),test:new t.NI(i.test),gestionnaire:new t.NI(i.gestionnaire,{validators:[this.gestionnaireValidator.bind(this)]}),source:new t.NI(i.source,{nonNullable:!0,validators:[t.kI.required]}),severite:new t.NI(i.severite,{nonNullable:!0,validators:[t.kI.required]}),solution:this.solutionFormService.createFormSolution(this.currentOperationType,i.solution),dateCreation:new t.NI(i.dateCreation),dateDerniereModification:new t.NI(i.dateDerniereModification)})}createSearchForm(){return new t.cw({titre:new t.NI("",{nonNullable:!0})})}problemeValidator(n){return"USER"===this.currentRoleIncident?"ADD"===this.currentOperationType?null===n.value?null:{problemeInvalide:!0}:null===n.value?{problemeInvalide:!0}:null:(console.log(this.currentRoleIncident),null===n.value?{problemeInvalide:!0}:null)}impactValidator(n){return"USER"===this.currentRoleIncident&&"ADD"===this.currentOperationType?null===n.value?null:{impactInvalide:!0}:null===n.value?{impactInvalide:!0}:null}gestionnaireValidator(n){return"USER"===this.currentRoleIncident&&"ADD"===this.currentOperationType?null===n.value?null:{gestionnaireInvalide:!0}:null===n.value?{gestionnaireInvalide:!0}:null}demandeurValidator(n){return"USER"===this.currentRoleIncident&&"ADD"===this.currentOperationType?null===n.value?null:{demandeurInvalide:!0}:null===n.value?{demandeurInvalide:!0}:null}categorieValidator(n){return"USER"===this.currentRoleIncident&&"ADD"===this.currentOperationType?null===n.value?null:{categorieInvalide:!0}:null===n.value?{categorieInvalide:!0}:null}static#e=this.\u0275fac=function(o){return new(o||l)(p.LFG(f.x))};static#t=this.\u0275prov=p.Yz7({token:l,factory:l.\u0275fac})}return l})()},3975:(P,g,r)=>{r.d(g,{x:()=>h});var t=r(95),p=r(9468),f=r(4970);let h=(()=>{class l{constructor(n){this.etapeFormService=n}createFormSolution(n,o){return new t.cw({id:new t.NI({value:this.getSolutionId(o),disabled:"BEING_RESOLVED"!==n},{nonNullable:!0,validators:[t.kI.required]}),code:new t.NI({value:this.getSolutionCode(o),disabled:"BEING_RESOLVED"!==n},{nonNullable:!0,validators:[t.kI.required]}),libelle:new t.NI({value:this.getSolutionLibelle(o),disabled:"BEING_RESOLVED"!==n},{nonNullable:!0,validators:[t.kI.required]}),refSys:new t.NI({value:this.getSolutionRefSys(o),disabled:"BEING_RESOLVED"!==n},{}),description:new t.NI({value:this.getSolutionDescription(o),disabled:"BEING_RESOLVED"!==n},{}),nombreEtape:new t.NI({value:this.getSolutionNumber(o),disabled:"BEING_RESOLVED"!==n},{nonNullable:!0,validators:[t.kI.required]}),etapes:new t.Oe(this.createEtapeForms(this.getSolutionEtapes(o)))})}getSolutionId(n){return n?n.id:""}getSolutionCode(n){return n?n.code:""}getSolutionRefSys(n){return n?n.refSys:""}getSolutionLibelle(n){return n?n.libelle:""}getSolutionDescription(n){return n?n.description:""}getSolutionNumber(n){return n?n.nombreEtape:0}getSolutionEtapes(n){return n?n.etapes:[]}createEtapeForms(n){return n.map(o=>this.etapeFormService.createFormEtape(o))}static#e=this.\u0275fac=function(o){return new(o||l)(p.LFG(f.W))};static#t=this.\u0275prov=p.Yz7({token:l,factory:l.\u0275fac})}return l})()},2030:(P,g,r)=>{r.d(g,{h:()=>h});var t=r(6814),p=r(9207),f=r(9468);let h=(()=>{class l{static#e=this.\u0275fac=function(o){return new(o||l)};static#t=this.\u0275mod=f.oAB({type:l});static#r=this.\u0275inj=f.cJS({imports:[t.ez,p.m]})}return l})()},7293:(P,g,r)=>{r.r(g),r.d(g,{PrisEnChargeModule:()=>ot});var t=r(6814),p=r(5779),f=r(3096),h=r(4970),l=r(3975),d=r(2572),n=r(7398),o=r(676);const i="Pris En Charge Superviseur",L=(0,o.PH)(`[${i} API] Load All`),b=(0,o.PH)(`[${i} API] Load All Success`,(0,o.Ky)()),T=(0,o.PH)(`[${i} API] Create`,(0,o.Ky)()),W=(0,o.PH)(`[${i} API] Create Success`,(0,o.Ky)()),z=(0,o.PH)(`[${i} API] Load`,(0,o.Ky)()),N=(0,o.PH)(`[${i} API] Reset`),H=(0,o.PH)(`[${i} API] Load Success`,(0,o.Ky)()),Y=(0,o.PH)(`[${i} API] Delete`,(0,o.Ky)()),J=(0,o.PH)(`[${i} API] Delete Success`,(0,o.Ky)()),V=(0,o.PH)(`[${i} API] Update`,(0,o.Ky)()),C=(0,o.PH)(`[${i} API] Update Success`,(0,o.Ky)()),$=(0,o.PH)(`[${i} API] Load Form Model`),M=(0,o.PH)(`[${i} API] Reset Form Model`),y=(0,o.PH)(`[${i} API] Load Form Model Success`,(0,o.Ky)()),K=(0,o.PH)(`[${i} API] Reset Search`),Q=(0,o.PH)(`[${i} API] Search`,(0,o.Ky)()),j=(0,o.PH)(`[${i} API] Change Page`,(0,o.Ky)()),Z=(0,o.PH)(`[${i} API] Change Page Size`,(0,o.Ky)()),c={loadItems:L,loadItemsSuccess:b,resetItem:N,createItem:T,createItemSuccess:W,loadItem:z,loadItemSuccess:H,updateItem:V,updateItemSuccess:C,deleteItem:Y,deleteItemSuccess:J,loadFormModel:$,resetFormModel:M,loadFormModelSuccess:y,setError:(0,o.PH)(`[${i} API] Create Error`,(0,o.Ky)()),resetError:(0,o.PH)(`[${i} API] Reset Error`),resetErrorField:(0,o.PH)(`[${i} API] Reset Error Field`,(0,o.Ky)()),resetSearch:K,search:Q,changePage:j,changePageSize:Z},ce=(0,o.Lq)({formModel:null,searchModel:{},items:[],currentItem:null,page:1,pageSize:15,totalElement:0,errors:null},(0,o.on)(c.loadItemsSuccess,(s,u)=>({...s,items:u.items,totalElement:u.totalElement})),(0,o.on)(c.resetItem,(s,u)=>({...s,currentItem:null})),(0,o.on)(c.createItemSuccess,(s,u)=>({...s})),(0,o.on)(c.deleteItemSuccess,(s,u)=>({...s})),(0,o.on)(c.loadItemSuccess,(s,u)=>({...s,currentItem:u.item})),(0,o.on)(c.updateItemSuccess,(s,u)=>({...s})),(0,o.on)(c.loadFormModel,(s,u)=>({...s,formModel:null})),(0,o.on)(c.loadFormModelSuccess,(s,u)=>({...s,formModel:u.formModel})),(0,o.on)(c.resetSearch,(s,u)=>({...s,searchModel:{}})),(0,o.on)(c.search,(s,u)=>({...s,searchModel:u.searchModel})),(0,o.on)(c.changePage,(s,u)=>({...s,page:u.page})),(0,o.on)(c.changePageSize,(s,u)=>({...s,pageSize:u.pageSize})),(0,o.on)(c.setError,(s,u)=>({...s,errors:u.errors})),(0,o.on)(c.resetError,(s,u)=>({...s,errors:{}})),(0,o.on)(c.resetErrorField,(s,u)=>{let a={};return null!==s.errors&&Object.entries(s.errors).forEach(([m,_])=>{m!==u.fieldName&&(a[`${m}`]=_)}),{...s,errors:a}})),F=(0,o.ZF)("pris-en-charges"),ue=(0,o.P1)(F,s=>s.items),de=((0,o.P1)(F,s=>s.currentItem),(0,o.P1)(F,s=>s.formModel),(0,o.P1)(F,s=>s.searchModel)),re=(0,o.P1)(F,s=>s.page),ne=(0,o.P1)(F,s=>s.pageSize),me=(0,o.P1)(F,s=>s.totalElement);(0,o.P1)(F,s=>s.errors);var e=r(9468),X=r(8281),se=r(3849),G=r(95),pe=r(7251),he=r(166),fe=r(6327),ge=r(8564),ve=r(8223),Ee=r(602),_e=r(1469),Ie=r(6326),Ce=r(8346),Pe=r(1171),Se=r(547),De=r(362);function Ne(s,u){1&s&&(e.TgZ(0,"th",29),e._uU(1,"R\xe9f\xe9rence"),e.qZA())}const B=function(s){return{"alert-echeance":s}};function ye(s,u){if(1&s&&(e.TgZ(0,"td",30),e._uU(1),e.qZA()),2&s){const a=u.$implicit,m=e.oxw(3);e.Q6J("ngClass",e.VKq(2,B,m.isDueDate(a.dateEcheanceEnCoursResolution))),e.xp6(1),e.Oqu(a.refSys)}}function Ae(s,u){1&s&&(e.TgZ(0,"th",31),e._uU(1,"Libell\xe9 Demande"),e.qZA())}function Me(s,u){if(1&s&&(e.TgZ(0,"td",32),e._uU(1),e.qZA()),2&s){const a=u.$implicit,m=e.oxw(3);e.Q6J("ngClass",e.VKq(2,B,m.isDueDate(a.dateEcheanceEnCoursResolution))),e.xp6(1),e.Oqu(a.titre)}}function Fe(s,u){1&s&&(e.TgZ(0,"th",29),e._uU(1,"Equipement"),e.qZA())}function Oe(s,u){if(1&s&&(e.TgZ(0,"td",32),e._uU(1),e.qZA()),2&s){const a=u.$implicit,m=e.oxw(3);e.Q6J("ngClass",e.VKq(2,B,m.isDueDate(a.dateEcheanceEnCoursResolution))),e.xp6(1),e.Oqu(a.equipement.libelle)}}function Le(s,u){1&s&&(e.TgZ(0,"th",29),e._uU(1,"Statut"),e.qZA())}function Te(s,u){if(1&s&&(e.TgZ(0,"td",32),e._uU(1),e.qZA()),2&s){const a=u.$implicit,m=e.oxw(3);e.Q6J("ngClass",e.VKq(2,B,m.isDueDate(a.dateEcheanceEnCoursResolution))),e.xp6(1),e.Oqu(a.statutIncident)}}function xe(s,u){1&s&&(e.TgZ(0,"th",29),e._uU(1,"Demandeur"),e.qZA())}function Be(s,u){if(1&s&&(e.TgZ(0,"td",32),e._uU(1),e.qZA()),2&s){const a=u.$implicit,m=e.oxw(3);e.Q6J("ngClass",e.VKq(3,B,m.isDueDate(a.dateEcheanceEnCoursResolution))),e.xp6(1),e.AsE("",null==a.demandeur?null:a.demandeur.firstName," ",null==a.demandeur?null:a.demandeur.lastName,"")}}function be(s,u){1&s&&(e.TgZ(0,"th",29),e._uU(1,"Date \xe9mission"),e.qZA())}function Re(s,u){if(1&s&&(e.TgZ(0,"td",32),e._uU(1),e.ALo(2,"date"),e.qZA()),2&s){const a=u.$implicit,m=e.oxw(3);e.Q6J("ngClass",e.VKq(5,B,m.isDueDate(a.dateEcheanceEnCoursResolution))),e.xp6(1),e.Oqu(e.xi3(2,2,a.dateDeclaration,"dd/MM/y \xe0 HH:mm:ss"))}}function Ue(s,u){1&s&&(e.TgZ(0,"th",29),e._uU(1,"Date Derni\xe8re Modif"),e.qZA())}function $e(s,u){if(1&s&&(e.TgZ(0,"td",32),e._uU(1),e.ALo(2,"date"),e.qZA()),2&s){const a=u.$implicit,m=e.oxw(3);e.Q6J("ngClass",e.VKq(5,B,m.isDueDate(a.dateEcheanceEnCoursResolution))),e.xp6(1),e.Oqu(e.xi3(2,2,a.dateDerniereModification,"dd/MM/y \xe0 HH:mm:ss"))}}function Ke(s,u){if(1&s){const a=e.EpF();e.TgZ(0,"table",17),e.NdJ("itemSelected",function(_){e.CHM(a);const A=e.oxw(2);return e.KtG(A.itemSelected(_))}),e.ynx(1,18),e.YNc(2,Ne,2,0,"th",19),e.YNc(3,ye,2,4,"td",20),e.BQk(),e.ynx(4,21),e.YNc(5,Ae,2,0,"th",22),e.YNc(6,Me,2,4,"td",23),e.BQk(),e.ynx(7,24),e.YNc(8,Fe,2,0,"th",19),e.YNc(9,Oe,2,4,"td",23),e.BQk(),e.ynx(10,25),e.YNc(11,Le,2,0,"th",19),e.YNc(12,Te,2,4,"td",23),e.BQk(),e.ynx(13,26),e.YNc(14,xe,2,0,"th",19),e.YNc(15,Be,2,5,"td",23),e.BQk(),e.ynx(16,27),e.YNc(17,be,2,0,"th",19),e.YNc(18,Re,3,7,"td",23),e.BQk(),e.ynx(19,28),e.YNc(20,Ue,2,0,"th",19),e.YNc(21,$e,3,7,"td",23),e.BQk(),e.qZA()}if(2&s){const a=u.ngIf,m=e.oxw(2);e.Q6J("items",a)("headers",m.headerTable)("selectable",!0)}}function Ze(s,u){if(1&s){const a=e.EpF();e.TgZ(0,"app-crud-list",3),e.NdJ("searchButtonClicked",function(){e.CHM(a);const _=e.oxw();return e.KtG(_.searchButtonClicked())})("refreshButtonClicked",function(){e.CHM(a);const _=e.oxw();return e.KtG(_.refreshButtonClicked())})("pageSelected",function(_){e.CHM(a);const A=e.oxw();return e.KtG(A.pageSelected(_))})("pageSizeChange",function(_){e.CHM(a);const A=e.oxw();return e.KtG(A.pageSizeChange(_))})("closeButtonClicked",function(){e.CHM(a);const _=e.oxw();return e.KtG(_.closeButtonClicked())}),e.TgZ(1,"div",4)(2,"div",5)(3,"div",6),e._UZ(4,"app-form-label",7),e.qZA(),e.TgZ(5,"div",8),e._UZ(6,"app-custom-textfield",9),e.qZA()()(),e._UZ(7,"div",10)(8,"div",11),e.TgZ(9,"div",12),e._UZ(10,"app-custom-button",13),e.TgZ(11,"app-print-button",14),e.NdJ("printButtonClicked",function(){e.CHM(a);const _=e.oxw();return e.KtG(_.printButtonClicked())}),e.qZA()(),e.TgZ(12,"div",15),e.YNc(13,Ke,22,3,"table",16),e.ALo(14,"async"),e.qZA()()}if(2&s){const a=u.ngIf,m=e.oxw();e.Q6J("itemSelected",m.isItemSelected())("pageSize",a.pageSize)("currentPage",a.page)("totalElements",a.totalElement),e.xp6(1),e.Q6J("formGroup",m.searchForm),e.xp6(6),e.Q6J("formGroup",m.searchForm),e.xp6(6),e.Q6J("ngIf",e.lcZ(14,7,m.items$))}}let Ge=(()=>{class s{constructor(a,m,_){this.router=a,this.store=m,this.incidentFormService=_,this.isUpdateActivated=!1,this.headerTable=["R\xe9f\xe9rence","Cat & sous-categorie","Libell\xe9 Demande","Equipement","Statut","Priorit\xe9","S\xe9v\xe9rit\xe9","Impact","Demandeur","service/unit.Fonct","Date Cr\xe9ation","Date Dern modif"],this.items$=this.store.select(ue),this.page$=this.store.select(re),this.pageSize$=this.store.select(ne),this.totalElement$=this.store.select(me),this.data$=(0,d.a)([this.page$,this.pageSize$,this.totalElement$]).pipe((0,n.U)(([A,q,ee])=>({page:A,pageSize:q,totalElement:ee}))),this.selectedItem=null,this.actualDate=0}ngOnInit(){this.searchForm=this.incidentFormService.createSearchForm(),console.log(this.store.dispatch(c.loadItems())),this.store.dispatch(c.loadItems()),this.items$.subscribe(a=>{console.log(a)}),this.actualDate=Date.now()}isDueDate(a){return console.log(a-this.actualDate<=0),a-this.actualDate<=0}itemSelected(a){this.selectedItem=a}pageSelected(a){this.store.dispatch(c.changePage({page:a}))}pageSizeChange(a){this.store.dispatch(c.changePageSize({pageSize:a}))}closeButtonClicked(){this.router.navigate(["incidents"])}isItemSelected(){return null!==this.selectedItem}refreshButtonClicked(){this.searchForm.reset(),this.store.dispatch(c.resetSearch())}searchButtonClicked(){this.store.dispatch(c.search({searchModel:this.searchForm.value}))}printButtonClicked(){}static#e=this.\u0275fac=function(m){return new(m||s)(e.Y36(X.F0),e.Y36(o.yh),e.Y36(f.X))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-pris-en-charge-list"]],features:[e._Bn([f.X,l.x,h.W,p.P])],decls:4,vars:3,consts:[[1,"pt-3","ps-3","pe-3","pb-0","mb-0"],["pathLevelOne","Supervision Incident","pathLevelTwo","Pris En Charge","pathLevelThree","Liste"],["title","Liste des Incidents Pris En Charge",3,"itemSelected","pageSize","currentPage","totalElements","searchButtonClicked","refreshButtonClicked","pageSelected","pageSizeChange","closeButtonClicked",4,"ngIf"],["title","Liste des Incidents Pris En Charge",3,"itemSelected","pageSize","currentPage","totalElements","searchButtonClicked","refreshButtonClicked","pageSelected","pageSizeChange","closeButtonClicked"],[1,"normal-search",3,"formGroup"],[1,"d-flex","flex-row","align-items-center"],[1,"text-end","me-1","width-label-search"],["title","Libell\xe9"],[1,"input-textfield-container","col-3"],["placeholder","","otherclass","item-input","formControlName","titre"],[1,"advance-search",3,"formGroup"],[1,"primary-actions"],[1,"secondary-actions","d-flex"],["customClass","btn btn-sm button-action","title","Exporter","url","export.svg",1,"me-1","ms-1"],[3,"printButtonClicked"],[1,"table-content"],["appDynamicTable","",3,"items","headers","selectable","itemSelected",4,"ngIf"],["appDynamicTable","",3,"items","headers","selectable","itemSelected"],["appCellDef","R\xe9f\xe9rence"],["app-header-attribute-def-template","",4,"appHeaderDefTemplate"],["app-cell-def-template","",3,"ngClass",4,"appCellDefTemplate"],["appCellDef","Libell\xe9 Demande"],["app-header-attribute-def-template","","class","width-35",4,"appHeaderDefTemplate"],["app-cell-def-template","","class","left",3,"ngClass",4,"appCellDefTemplate"],["appCellDef","Equipement"],["appCellDef","Statut"],["appCellDef","Demandeur"],["appCellDef","Date Cr\xe9ation"],["appCellDef","Date Dern modif"],["app-header-attribute-def-template",""],["app-cell-def-template","",3,"ngClass"],["app-header-attribute-def-template","",1,"width-35"],["app-cell-def-template","",1,"left",3,"ngClass"]],template:function(m,_){1&m&&(e.TgZ(0,"div",0),e._UZ(1,"app-custom-breadcrumb",1),e.qZA(),e.YNc(2,Ze,15,9,"app-crud-list",2),e.ALo(3,"async")),2&m&&(e.xp6(2),e.Q6J("ngIf",e.lcZ(3,1,_.data$)))},dependencies:[t.mk,t.O5,se.L,G.JJ,G.JL,G.sg,G.u,pe._,he.x,fe.N,ge.D,ve.h,Ee.u,_e.O,Ie.q,Ce.W,Pe.h,Se.Z,De.V,t.Ov,t.uU],styles:["[_nghost-%COMP%]{width:100%}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:center}.left[_ngcontent-%COMP%]{text-align:left!important}.alert-echeance[_ngcontent-%COMP%]{background-color:#f5c2c7!important}"]})}return s})();var we=r(3396),We=r(1793),v=r(6465),ze=r(9207),He=r(2030),Ye=r(8510),Je=r(2460),O=r(6328),Ve=r(9026),R=r(6306),k=r(9397),Qe=r(1631),S=r(6063),je=r(9862),D=r(2096),Xe=r(3186),ke=r(4664),qe=r(9989),et=r(1946);let oe=(()=>{class s extends qe.v{getResourceBasePath(){return`${et.y}/supervision-incident-prise-en-charge`}getIdValue(a){return a.id}static#e=this.\u0275fac=function(){let a;return function(_){return(a||(a=e.n5z(s)))(_||s)}}();static#t=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac})}return s})();var tt=r(6366),rt=r(797);let nt=(()=>{class s{constructor(a,m,_,A,q,ee){this.prisEnChargeService=a,this.authService=m,this.actions$=_,this.router=A,this.modalService=q,this.store=ee,this.loadItems$=(0,v.GW)(()=>this.actions$.pipe((0,v.l4)(c.loadItems),(0,Je.M)(this.store.select(re),this.store.select(ne),this.store.select(de)),(0,O.b)(([E,I,w,te])=>(this.store.dispatch((0,S.Q)()),(0,Ve.$)(this.prisEnChargeService.getAllWithPagination(I,w,te),this.prisEnChargeService.count(te)).pipe((0,n.U)(([U,it])=>(this.store.dispatch((0,S.Z)()),c.loadItemsSuccess({items:U,totalElement:it}))),(0,R.K)(U=>(this.store.dispatch((0,S.Z)()),(0,D.of)(c.setError({errors:U})))))))),{dispatch:!0}),this.createItem$=(0,v.GW)(()=>this.actions$.pipe((0,v.l4)(c.createItem),(0,O.b)(E=>(this.store.dispatch((0,S.Q)()),console.log(E.item),this.prisEnChargeService.add(E.item).pipe((0,k.b)(()=>{this.store.dispatch((0,S.Z)()),this.modalService.openAlert({type:"success",title:"Op\xe9ration r\xe9ussie",message:"Incident ajout\xe9 avec succ\xe8s"}),this.router.navigateByUrl("incidents/incident-pris-en-charge")}),(0,n.U)(I=>c.createItemSuccess({item:I})),(0,R.K)(I=>(this.store.dispatch((0,S.Z)()),(0,D.of)(c.setError({errors:I})))))))),{dispatch:!0}),this.loadItem$=(0,v.GW)(()=>this.actions$.pipe((0,v.l4)(c.loadItem),(0,Qe.z)(E=>this.prisEnChargeService.findById(E.id).pipe((0,n.U)(I=>c.loadItemSuccess({item:I})),(0,R.K)(I=>(this.store.dispatch((0,S.Z)()),(0,D.of)(c.setError({errors:I}))))))),{dispatch:!0}),this.deleteItem$=(0,v.GW)(()=>this.actions$.pipe((0,v.l4)(c.deleteItem),(0,O.b)(E=>this.prisEnChargeService.delete(E.item.id,E.item)),(0,k.b)(()=>{this.modalService.openAlert({type:"success",title:"Op\xe9ration r\xe9ussie",message:"Incident supprim\xe9 avec succ\xe8s"})}),(0,n.U)(()=>c.loadItems()),(0,R.K)(E=>(this.store.dispatch((0,S.Z)()),(0,D.of)(c.setError({errors:E}))))),{dispatch:!0}),this.updateItem$=(0,v.GW)(()=>this.actions$.pipe((0,v.l4)(c.updateItem),(0,O.b)(E=>(this.store.dispatch((0,S.Q)()),this.prisEnChargeService.update(E.item.id,E.item).pipe((0,k.b)(()=>{this.store.dispatch((0,S.Z)()),this.modalService.openAlert({type:"success",title:"Op\xe9ration r\xe9ussie",message:"Incident modifi\xe9 avec succ\xe8s"}),this.router.navigateByUrl("incidents/incident-pris-en-charge")}),(0,n.U)(I=>c.createItemSuccess({item:I})),(0,R.K)(I=>(this.store.dispatch((0,S.Z)()),(0,D.of)(c.setError({errors:I})))))))),{dispatch:!0}),this.loadFormModel$=(0,v.GW)(()=>this.actions$.pipe((0,v.l4)(c.loadFormModel),(0,O.b)(()=>this.prisEnChargeService.getFormModel()),(0,n.U)(E=>c.loadFormModelSuccess({formModel:E})),(0,R.K)(E=>(0,D.of)(c.setError({errors:E}))))),this.resetSearch$=(0,v.GW)(()=>this.actions$.pipe((0,v.l4)(c.resetSearch),(0,O.b)(()=>(0,D.of)(c.changePage({page:1}))))),this.search$=(0,v.GW)(()=>this.actions$.pipe((0,v.l4)(c.search),(0,O.b)(()=>(0,D.of)(c.changePage({page:1}))))),this.changePage$=(0,v.GW)(()=>this.actions$.pipe((0,v.l4)(c.changePage),(0,n.U)(E=>c.loadItems()))),this.changePageSize$=(0,v.GW)(()=>this.actions$.pipe((0,v.l4)(c.changePageSize),(0,O.b)(()=>(0,D.of)(c.changePage({page:1}))))),this.handleError$=(0,v.GW)(()=>this.actions$.pipe((0,v.l4)(c.setError),(0,ke.w)(E=>{if(this.store.dispatch((0,S.Q)()),E.errors instanceof je.UA){if(422===E.errors.status){let I="",w=0;for(const[te,U]of Object.entries(E.errors.error))I+=0===w?U:"\n"+U,w++;this.modalService.openAlert({type:"error",title:"Op\xe9ration Erron\xe9e",message:I})}if(403===E.errors.status&&this.modalService.openAlert({type:"error",title:"Op\xe9ration Erron\xe9e",message:"Vous n'avez pas le droit requis pour effectuer cette action"}),401===E.errors.status){let I="Votre token a expir\xe9, veuillez vous reconnecter svp!";return this.authService.removeToken(),this.authService.removeUserInfo(),this.store.dispatch((0,S.Z)()),this.modalService.openAlert({type:"error",title:"Op\xe9ration Erron\xe9e",message:I}),(0,D.of)(Xe.jM())}}return this.store.dispatch((0,S.Z)()),(0,D.of)({type:"noop"})})),{dispatch:!0})}static#e=this.\u0275fac=function(m){return new(m||s)(e.LFG(oe),e.LFG(tt.e),e.LFG(v.eX),e.LFG(X.F0),e.LFG(rt.Z),e.LFG(o.yh))};static#t=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac})}return s})();const st=[{path:"",component:Ge,pathMatch:"prefix"}];let ot=(()=>{class s{static#e=this.\u0275fac=function(m){return new(m||s)};static#t=this.\u0275mod=e.oAB({type:s});static#r=this.\u0275inj=e.cJS({providers:[oe],imports:[t.ez,se.L,o.Aw.forFeature("pris-en-charges",ce),v.sQ.forFeature(nt),Ye.Y,He.h,we.B,We.K,ze.m,X.Bz.forChild(st)]})}return s})()},8346:(P,g,r)=>{r.d(g,{W:()=>h});var t=r(9468),p=r(95),f=r(7394);let h=(()=>{class l{constructor(){this.placeholder="",this.type="text",this.readonly=!1,this.otherclass="",this.subscription=new f.w0,this.disabled=!1,this.onTouched=()=>{},this.onChange=()=>{},this.control=new p.NI}writeValue(n){this.control.setValue(n)}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouched=n}setDisabledState(n){this.disabled=n,n?this.control.disable():this.control.enable()}ngOnInit(){this.subscription=this.control.valueChanges.subscribe(n=>{this.onChange(n)})}ngOnDestroy(){this.subscription.unsubscribe()}static#e=this.\u0275fac=function(o){return new(o||l)};static#t=this.\u0275cmp=t.Xpm({type:l,selectors:[["app-custom-textfield"]],inputs:{placeholder:"placeholder",type:"type",readonly:"readonly",otherclass:"otherclass"},features:[t._Bn([{provide:p.JU,useExisting:(0,t.Gpc)(()=>l),multi:!0}])],decls:1,vars:7,consts:[[3,"type","placeholder","formControl","readonly"]],template:function(o,i){1&o&&t._UZ(0,"input",0),2&o&&(t.Gre("custom-text-field m-0 form-control-sm ",i.otherclass,""),t.s9C("placeholder",i.placeholder),t.Q6J("type",i.type)("formControl",i.control)("readonly",i.readonly))},dependencies:[p.Fj,p.JJ,p.oH],styles:[".custom-text-field[_ngcontent-%COMP%]{display:block;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;appearance:none;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;border:1px solid #878787!important;margin-bottom:2px}.form-control-sm[_ngcontent-%COMP%]{font-size:12px!important;border-radius:0;min-width:100%}.custom-text-field[_ngcontent-%COMP%]:focus{background-color:#f0f4f5;border:0px!important;outline:0}.custom-text-field[_ngcontent-%COMP%]:read-only:focus{outline:0!important;border:1px solid #878787!important}"]})}return l})()},1171:(P,g,r)=>{r.d(g,{h:()=>p});var t=r(9468);let p=(()=>{class f{constructor(){this.title="",this.class=""}static#e=this.\u0275fac=function(d){return new(d||f)};static#t=this.\u0275cmp=t.Xpm({type:f,selectors:[["app-form-label"]],inputs:{title:"title",class:"class"},decls:2,vars:4,template:function(d,n){1&d&&(t.TgZ(0,"label"),t._uU(1),t.qZA()),2&d&&(t.Tol(n.class),t.xp6(1),t.Oqu(n.title))},styles:["label[_ngcontent-%COMP%]{font-size:12px;font-weight:500;color:#464445;margin-right:5px;min-width:100%;max-width:100%}"]})}return f})()},3849:(P,g,r)=>{r.d(g,{L:()=>l});var t=r(9468),p=r(2463),f=r(6814),h=r(166);let l=(()=>{class d{constructor(){this.printButtonClicked=new t.vpe}emitPrintButtonClicked(){this.printButtonClicked.emit()}static#e=this.\u0275fac=function(i){return new(i||d)};static#t=this.\u0275cmp=t.Xpm({type:d,selectors:[["app-print-button"]],outputs:{printButtonClicked:"printButtonClicked"},standalone:!0,features:[t.jDz],decls:1,vars:0,consts:[["customClass","btn btn-sm button-action","title","Imprimer","url","print.svg",3,"buttonClicked"]],template:function(i,L){1&i&&(t.TgZ(0,"app-custom-button",0),t.NdJ("buttonClicked",function(){return L.emitPrintButtonClicked()}),t.qZA())},dependencies:[f.ez,p.v,h.x],styles:["[_nghost-%COMP%]{display:block}"]})}return d})()},547:(P,g,r)=>{r.d(g,{Z:()=>f});var t=r(9468),p=r(95);let f=(()=>{class h{constructor(d){this.ngControl=d}static#e=this.\u0275fac=function(n){return new(n||h)(t.Y36(p.a5,10))};static#t=this.\u0275dir=t.lG2({type:h,selectors:[["","formControl",""],["","formControlName",""]]})}return h})()}}]);