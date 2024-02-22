"use strict";(self.webpackChunkfrontend_gad=self.webpackChunkfrontend_gad||[]).push([[3867],{3867:(ne,L,l)=>{l.r(L),l.d(L,{ValidationGroupeUtilisateurModule:()=>se});var f=l(6814),z=l(9207),O=l(6482),u=l(6465),U=l(8281),r=l(676);const p="GroupeUtilisateur Valide",R=(0,r.PH)(`[${p} API] Load All`),D=(0,r.PH)(`[${p} API] Load All Success`,(0,r.Ky)()),Y=(0,r.PH)(`[${p} API] Validate`,(0,r.Ky)()),N=(0,r.PH)(`[${p} API] Validate Success`,(0,r.Ky)()),Q=(0,r.PH)(`[${p} API] Load`,(0,r.Ky)()),J=(0,r.PH)(`[${p} API] Reset`),W=(0,r.PH)(`[${p} API] Load Success`,(0,r.Ky)()),k=(0,r.PH)(`[${p} API] Delete`,(0,r.Ky)()),w=(0,r.PH)(`[${p} API] Delete Success`,(0,r.Ky)()),X=(0,r.PH)(`[${p} API] Reject`,(0,r.Ky)()),q=(0,r.PH)(`[${p} API] Reject Success`,(0,r.Ky)()),tt=(0,r.PH)(`[${p} API] Load Form Model`),et=(0,r.PH)(`[${p} API] Reset Form Model`),it=(0,r.PH)(`[${p} API] Load Form Model Success`,(0,r.Ky)()),rt=(0,r.PH)(`[${p} API] Reset Search`),ot=(0,r.PH)(`[${p} API] Search`,(0,r.Ky)()),st=(0,r.PH)(`[${p} API] Change Page`,(0,r.Ky)()),at=(0,r.PH)(`[${p} API] Change Page Size`,(0,r.Ky)()),o={loadItems:R,loadItemsSuccess:D,resetItem:J,validateItem:Y,validateItemSuccess:N,loadItem:Q,loadItemSuccess:W,rejectItem:X,rejectItemSuccess:q,deleteItem:k,deleteItemSuccess:w,loadFormModel:tt,resetFormModel:et,loadFormModelSuccess:it,setError:(0,r.PH)(`[${p} API] Create Error`,(0,r.Ky)()),resetError:(0,r.PH)(`[${p} API] Reset Error`),resetErrorField:(0,r.PH)(`[${p} API] Reset Error Field`,(0,r.Ky)()),resetSearch:rt,search:ot,changePage:st,changePageSize:at},pt=(0,r.Lq)({formModel:null,searchModel:{},items:[],currentItem:null,page:1,pageSize:15,totalElement:0,errors:null},(0,r.on)(o.loadItemsSuccess,(e,n)=>({...e,items:n.items,totalElement:n.totalElement})),(0,r.on)(o.resetItem,(e,n)=>({...e,currentItem:null})),(0,r.on)(o.validateItemSuccess,(e,n)=>({...e})),(0,r.on)(o.deleteItemSuccess,(e,n)=>({...e})),(0,r.on)(o.loadItemSuccess,(e,n)=>({...e,currentItem:n.item})),(0,r.on)(o.rejectItemSuccess,(e,n)=>({...e})),(0,r.on)(o.loadFormModel,(e,n)=>({...e,formModel:null})),(0,r.on)(o.loadFormModelSuccess,(e,n)=>({...e,formModel:n.formModel})),(0,r.on)(o.resetSearch,(e,n)=>({...e,searchModel:{}})),(0,r.on)(o.search,(e,n)=>({...e,searchModel:n.searchModel})),(0,r.on)(o.changePage,(e,n)=>({...e,page:n.page})),(0,r.on)(o.changePageSize,(e,n)=>({...e,pageSize:n.pageSize})),(0,r.on)(o.setError,(e,n)=>({...e,errors:n.errors})),(0,r.on)(o.resetError,(e,n)=>({...e,errors:{}})),(0,r.on)(o.resetErrorField,(e,n)=>{let i={};return null!==e.errors&&Object.entries(e.errors).forEach(([s,a])=>{s!==n.fieldName&&(i[`${s}`]=a)}),{...e,errors:i}})),g=(0,r.ZF)("validation-groupe-utilisateurs");var v=l(6328),dt=l(9026),C=l(7398);const mt=(0,r.P1)(g,e=>e.items),Z=(0,r.P1)(g,e=>e.currentItem),b=(0,r.P1)(g,e=>e.formModel),ht=(0,r.P1)(g,e=>e.searchModel),A=(0,r.P1)(g,e=>e.page),V=(0,r.P1)(g,e=>e.pageSize),_t=(0,r.P1)(g,e=>e.totalElement),E=(0,r.P1)(g,e=>e.errors);var I=l(6306),x=l(9397),ft=l(1631),gt=l(9862),h=l(2096),_=l(6063),vt=l(2460),Ct=l(3186),Ut=l(4664),t=l(9468),It=l(1946),St=l(9989);let F=(()=>{class e extends St.v{getResourceBasePath(){return`${It.y}/validate-reject-role`}getIdValue(i){return i.id}validate(i,s){return this.http.post(`${this.url}/${this.getResourceBasePath()}/validate/${i}`,s)}reject(i,s,a){return this.http.post(`${this.url}/${this.getResourceBasePath()}/reject/${i}/${a}`,s)}static#t=this.\u0275fac=function(){let i;return function(a){return(i||(i=t.n5z(e)))(a||e)}}();static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})();var Tt=l(6366),Gt=l(797);let xt=(()=>{class e{constructor(i,s,a,d,y,$){this.validationGroupeUtilisateurService=i,this.authService=s,this.actions$=a,this.router=d,this.modalService=y,this.store=$,this.loadItems$=(0,u.GW)(()=>this.actions$.pipe((0,u.l4)(o.loadItems),(0,vt.M)(this.store.select(A),this.store.select(V),this.store.select(ht)),(0,v.b)(([c,m,G,M])=>(console.log(m),this.store.dispatch((0,_.Q)()),(0,dt.$)(this.validationGroupeUtilisateurService.getAllWithPagination(m,G,M),this.validationGroupeUtilisateurService.count(M)).pipe((0,C.U)(([S,ae])=>(this.store.dispatch((0,_.Z)()),o.loadItemsSuccess({items:S,totalElement:ae}))),(0,I.K)(S=>(this.store.dispatch((0,_.Z)()),(0,h.of)(o.setError({errors:S})))))))),{dispatch:!0}),this.validateItem$=(0,u.GW)(()=>this.actions$.pipe((0,u.l4)(o.validateItem),(0,v.b)(c=>this.validationGroupeUtilisateurService.validate(c.id,c.item)),(0,x.b)(()=>{this.modalService.openAlert({type:"success",title:"Op\xe9ration r\xe9ussie",message:"Groupe Utilisateur valid\xe9 avec succ\xe8s"}),this.router.navigateByUrl("administration/validation-groupe")}),(0,C.U)(c=>o.validateItemSuccess({item:c})),(0,I.K)(c=>(this.store.dispatch((0,_.Z)()),(0,h.of)(o.setError({errors:c}))))),{dispatch:!0}),this.loadItem$=(0,u.GW)(()=>this.actions$.pipe((0,u.l4)(o.loadItem),(0,ft.z)(c=>this.validationGroupeUtilisateurService.findById(c.id).pipe((0,C.U)(m=>o.loadItemSuccess({item:m})),(0,I.K)(m=>(this.store.dispatch((0,_.Z)()),(0,h.of)(o.setError({errors:m}))))))),{dispatch:!0}),this.deleteItem$=(0,u.GW)(()=>this.actions$.pipe((0,u.l4)(o.deleteItem),(0,v.b)(c=>this.validationGroupeUtilisateurService.delete(c.item.id,c.item)),(0,x.b)(()=>{this.modalService.openAlert({type:"success",title:"Op\xe9ration r\xe9ussie",message:"Utilisateur supprim\xe9 avec succ\xe8s"})}),(0,C.U)(()=>o.loadItems()),(0,I.K)(c=>(this.store.dispatch((0,_.Z)()),(0,h.of)(o.setError({errors:c}))))),{dispatch:!0}),this.rejectItem$=(0,u.GW)(()=>this.actions$.pipe((0,u.l4)(o.rejectItem),(0,v.b)(c=>this.validationGroupeUtilisateurService.reject(c.id,c.item,"R\xf4le Non Coh\xe9rent")),(0,x.b)(()=>{this.modalService.openAlert({type:"success",title:"Op\xe9ration r\xe9ussie",message:"Groupe Utilisateur Rejet\xe9 avec succ\xe8s"}),this.router.navigateByUrl("administration/validation-groupe")}),(0,C.U)(c=>o.rejectItemSuccess({item:c})),(0,I.K)(c=>(this.store.dispatch((0,_.Z)()),(0,h.of)(o.setError({errors:c}))))),{dispatch:!0}),this.loadFormModel$=(0,u.GW)(()=>this.actions$.pipe((0,u.l4)(o.loadFormModel),(0,v.b)(()=>this.validationGroupeUtilisateurService.getFormModel()),(0,C.U)(c=>o.loadFormModelSuccess({formModel:c})),(0,I.K)(c=>(0,h.of)(o.setError({errors:c}))))),this.resetSearch$=(0,u.GW)(()=>this.actions$.pipe((0,u.l4)(o.resetSearch),(0,v.b)(()=>(0,h.of)(o.changePage({page:1}))))),this.search$=(0,u.GW)(()=>this.actions$.pipe((0,u.l4)(o.search),(0,v.b)(()=>(0,h.of)(o.changePage({page:1}))))),this.changePage$=(0,u.GW)(()=>this.actions$.pipe((0,u.l4)(o.changePage),(0,C.U)(c=>o.loadItems()))),this.changePageSize$=(0,u.GW)(()=>this.actions$.pipe((0,u.l4)(o.changePageSize),(0,v.b)(()=>(0,h.of)(o.changePage({page:1}))))),this.handleError$=(0,u.GW)(()=>this.actions$.pipe((0,u.l4)(o.setError),(0,Ut.w)(c=>{if(this.store.dispatch((0,_.Q)()),c.errors instanceof gt.UA){if(422===c.errors.status){let m="",G=0;for(const[M,S]of Object.entries(c.errors.error))m+=0===G?S:"\n"+S,G++;this.modalService.openAlert({type:"error",title:"Op\xe9ration Erron\xe9e",message:m})}if(403===c.errors.status&&this.modalService.openAlert({type:"error",title:"Op\xe9ration Erron\xe9e",message:"Vous n'avez pas le droit requis pour effectuer cette action"}),401===c.errors.status){let m="Votre token a expir\xe9, veuillez vous reconnecter svp!";return this.authService.removeToken(),this.authService.removeUserInfo(),this.store.dispatch((0,_.Z)()),this.modalService.openAlert({type:"error",title:"Op\xe9ration Erron\xe9e",message:m}),(0,h.of)(Ct.jM())}}return this.store.dispatch((0,_.Z)()),(0,h.of)({type:"noop"})})),{dispatch:!0})}static#t=this.\u0275fac=function(s){return new(s||e)(t.LFG(F),t.LFG(Tt.e),t.LFG(u.eX),t.LFG(U.F0),t.LFG(Gt.Z),t.LFG(r.yh))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})();var B=l(7394),H=l(4557),P=l(362),j=l(2989);function Pt(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"app-groupe-utilisateur-form",4),t.NdJ("formSubmitted",function(a){t.CHM(i);const d=t.oxw(2);return t.KtG(d.validateGroupeUtilisateur(a))})("returnToList",function(){t.CHM(i);const a=t.oxw(2);return t.KtG(a.returnToList())})("fieldReset",function(a){t.CHM(i);const d=t.oxw(2);return t.KtG(d.resetBackendError(a))}),t.qZA()}if(2&e){const i=n.ngIf,s=t.oxw().ngIf,a=t.oxw();t.Q6J("groupeUtilisateur",i)("formModel",s)("errors",a.error)("operationType",a.operationType)}}function yt(e,n){if(1&e&&(t.ynx(0),t.YNc(1,Pt,1,4,"app-groupe-utilisateur-form",3),t.ALo(2,"async"),t.BQk()),2&e){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,i.groupeUtilisateur$))}}let $t=(()=>{class e{constructor(i,s,a){this.store=i,this.route=s,this.router=a,this.formModel$=this.store.select(b),this.groupeUtilisateur$=this.store.select(Z),this.errors$=this.store.select(E),this.error={},this.operationType=H.C.VALIDATE,this.subscription=new B.w0}ngOnInit(){this.store.dispatch(o.resetFormModel()),this.subscription=this.route.params.subscribe(i=>{this.id=i.id,this.id&&this.store.dispatch(o.loadItem({id:this.id}))}),this.store.dispatch(o.resetItem()),this.store.dispatch(o.loadFormModel()),this.errors$.subscribe(i=>{null!==i&&(this.error=i)})}ngOnDestroy(){this.subscription.unsubscribe()}validateGroupeUtilisateur(i){this.store.dispatch(o.validateItem({id:this.id,item:i}))}resetBackendError(i){console.log(i),this.store.dispatch(o.resetErrorField({fieldName:i}))}returnToList(){this.router.navigateByUrl("administration/validation-groupe")}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(r.yh),t.Y36(U.gz),t.Y36(U.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-validation-groupe-utilisateur-validate"]],decls:4,vars:3,consts:[[1,"pt-3","ps-3","pe-3","pb-0","mb-0"],["pathLevelOne","Profils et utilisateurs","pathLevelTwo","Groupes utilisateurs","pathLevelThree","Valider"],[4,"ngIf"],["actionTitle","Valider",3,"groupeUtilisateur","formModel","errors","operationType","formSubmitted","returnToList","fieldReset",4,"ngIf"],["actionTitle","Valider",3,"groupeUtilisateur","formModel","errors","operationType","formSubmitted","returnToList","fieldReset"]],template:function(s,a){1&s&&(t.TgZ(0,"div",0),t._UZ(1,"app-custom-breadcrumb",1),t.qZA(),t.YNc(2,yt,3,3,"ng-container",2),t.ALo(3,"async")),2&s&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,a.formModel$)))},dependencies:[f.O5,P.V,j.P,f.Ov],styles:["[_nghost-%COMP%]{width:100%}"]})}return e})();function Mt(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"app-groupe-utilisateur-form",4),t.NdJ("formSubmitted",function(a){t.CHM(i);const d=t.oxw(2);return t.KtG(d.rejectGroupeUtilisateur(a))})("returnToList",function(){t.CHM(i);const a=t.oxw(2);return t.KtG(a.returnToList())})("fieldReset",function(a){t.CHM(i);const d=t.oxw(2);return t.KtG(d.resetBackendError(a))}),t.qZA()}if(2&e){const i=n.ngIf,s=t.oxw().ngIf,a=t.oxw();t.Q6J("groupeUtilisateur",i)("formModel",s)("errors",a.error)("operationType",a.operationType)}}function Lt(e,n){if(1&e&&(t.ynx(0),t.YNc(1,Mt,1,4,"app-groupe-utilisateur-form",3),t.ALo(2,"async"),t.BQk()),2&e){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,i.groupeUtilisateur$))}}let Zt=(()=>{class e{constructor(i,s,a){this.store=i,this.route=s,this.router=a,this.formModel$=this.store.select(b),this.groupeUtilisateur$=this.store.select(Z),this.errors$=this.store.select(E),this.error={},this.operationType=H.C.VALIDATE,this.subscription=new B.w0}ngOnInit(){this.store.dispatch(o.resetFormModel()),this.subscription=this.route.params.subscribe(i=>{this.id=i.id,this.id&&this.store.dispatch(o.loadItem({id:this.id}))}),this.store.dispatch(o.resetItem()),this.store.dispatch(o.loadFormModel()),this.errors$.subscribe(i=>{null!==i&&(this.error=i)})}ngOnDestroy(){this.subscription.unsubscribe()}rejectGroupeUtilisateur(i){this.store.dispatch(o.rejectItem({id:this.id,item:i}))}resetBackendError(i){console.log(i),this.store.dispatch(o.resetErrorField({fieldName:i}))}returnToList(){this.router.navigateByUrl("administration/validation-groupe")}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(r.yh),t.Y36(U.gz),t.Y36(U.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-validation-groupe-utilisateur-reject"]],decls:4,vars:3,consts:[[1,"pt-3","ps-3","pe-3","pb-0","mb-0"],["pathLevelOne","Profils et utilisateurs","pathLevelTwo","Groupes utilisateurs","pathLevelThree","Rejeter"],[4,"ngIf"],["actionTitle","Rejeter",3,"groupeUtilisateur","formModel","errors","operationType","formSubmitted","returnToList","fieldReset",4,"ngIf"],["actionTitle","Rejeter",3,"groupeUtilisateur","formModel","errors","operationType","formSubmitted","returnToList","fieldReset"]],template:function(s,a){1&s&&(t.TgZ(0,"div",0),t._UZ(1,"app-custom-breadcrumb",1),t.qZA(),t.YNc(2,Lt,3,3,"ng-container",2),t.ALo(3,"async")),2&s&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,a.formModel$)))},dependencies:[f.O5,P.V,j.P,f.Ov],styles:["[_nghost-%COMP%]{width:100%}"]})}return e})();var K=l(7029),bt=l(2572),T=l(95),At=l(7251),Vt=l(166),Et=l(6327),Ft=l(8564),Bt=l(8223),Ht=l(602),jt=l(1469),Kt=l(6326),zt=l(8346),Ot=l(1171),Rt=l(547);function Dt(e,n){1&e&&(t.TgZ(0,"th",28),t._uU(1,"Libell\xe9"),t.qZA())}function Yt(e,n){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.Oqu(i.libelle)}}function Nt(e,n){1&e&&(t.TgZ(0,"th",28),t._uU(1,"Description"),t.qZA())}function Qt(e,n){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.Oqu(i.description)}}function Jt(e,n){1&e&&(t.TgZ(0,"th",28),t._uU(1,"Cr\xe9\xe9(e) Par"),t.qZA())}function Wt(e,n){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.Oqu(i.utilisateurCreation)}}function kt(e,n){1&e&&(t.TgZ(0,"th",28),t._uU(1,"Date Cr\xe9ation"),t.qZA())}function wt(e,n){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,i.dateCreation,"dd/MM/y \xe0 HH:mm:ss"))}}function Xt(e,n){1&e&&(t.TgZ(0,"th",28),t._uU(1,"Date Derni\xe8re Modif"),t.qZA())}function qt(e,n){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,i.dateDerniereModification,"dd/MM/y \xe0 HH:mm:ss"))}}function te(e,n){1&e&&(t.TgZ(0,"th",28),t._uU(1,"Modifi\xe9(e) Par"),t.qZA())}function ee(e,n){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.Oqu(i.utilisateurModification)}}function ie(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"table",19),t.NdJ("itemSelected",function(a){t.CHM(i);const d=t.oxw(2);return t.KtG(d.itemSelected(a))}),t.ynx(1,20),t.YNc(2,Dt,2,0,"th",21),t.YNc(3,Yt,2,1,"td",22),t.BQk(),t.ynx(4,23),t.YNc(5,Nt,2,0,"th",21),t.YNc(6,Qt,2,1,"td",22),t.BQk(),t.ynx(7,24),t.YNc(8,Jt,2,0,"th",21),t.YNc(9,Wt,2,1,"td",22),t.BQk(),t.ynx(10,25),t.YNc(11,kt,2,0,"th",21),t.YNc(12,wt,3,4,"td",22),t.BQk(),t.ynx(13,26),t.YNc(14,Xt,2,0,"th",21),t.YNc(15,qt,3,4,"td",22),t.BQk(),t.ynx(16,27),t.YNc(17,te,2,0,"th",21),t.YNc(18,ee,2,1,"td",22),t.BQk(),t.qZA()}if(2&e){const i=n.ngIf,s=t.oxw(2);t.Q6J("items",i)("headers",s.headerTable)("selectable",!0)}}function re(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"app-crud-list",3),t.NdJ("searchButtonClicked",function(){t.CHM(i);const a=t.oxw();return t.KtG(a.searchButtonClicked())})("refreshButtonClicked",function(){t.CHM(i);const a=t.oxw();return t.KtG(a.refreshButtonClicked())})("pageSelected",function(a){t.CHM(i);const d=t.oxw();return t.KtG(d.pageSelected(a))})("pageSizeChange",function(a){t.CHM(i);const d=t.oxw();return t.KtG(d.pageSizeChange(a))})("closeButtonClicked",function(){t.CHM(i);const a=t.oxw();return t.KtG(a.closeButtonClicked())}),t.TgZ(1,"div",4)(2,"div",5)(3,"div",6),t._UZ(4,"app-form-label",7),t.qZA(),t.TgZ(5,"div",8),t._UZ(6,"app-custom-textfield",9),t.qZA()()(),t.TgZ(7,"div",10)(8,"div",11)(9,"div",6),t._UZ(10,"app-form-label",12),t.qZA(),t.TgZ(11,"div",8),t._UZ(12,"app-custom-textfield",13),t.qZA()()(),t.TgZ(13,"div",14)(14,"app-custom-button",15),t.NdJ("buttonClicked",function(){t.CHM(i);const a=t.oxw();return t.KtG(a.validateButtonClicked())}),t.qZA(),t.TgZ(15,"app-custom-button",16),t.NdJ("buttonClicked",function(){t.CHM(i);const a=t.oxw();return t.KtG(a.rejectButtonClicked())}),t.qZA()(),t.TgZ(16,"div",17),t.YNc(17,ie,19,3,"table",18),t.ALo(18,"async"),t.qZA()()}if(2&e){const i=n.ngIf,s=t.oxw();t.Q6J("itemSelected",s.isItemSelected())("pageSize",i.pageSize)("currentPage",i.page)("totalElements",i.totalElement),t.xp6(1),t.Q6J("formGroup",s.searchForm),t.xp6(6),t.Q6J("formGroup",s.searchForm),t.xp6(7),t.Q6J("disabled",!s.isItemSelected()),t.xp6(1),t.Q6J("disabled",!s.isItemSelected()),t.xp6(2),t.Q6J("ngIf",t.lcZ(18,9,s.items$))}}const oe=[{path:"",component:(()=>{class e{constructor(i,s,a){this.router=i,this.store=s,this.groupeUtilisateurFormService=a,this.headerTable=["Lib\xe9ll\xe9","Description","Date Cr\xe9ation","Cr\xe9\xe9(e) Par","Date Derni\xe8re Modif","Modifi\xe9(e) Par"],this.items$=this.store.select(mt),this.page$=this.store.select(A),this.pageSize$=this.store.select(V),this.totalElement$=this.store.select(_t),this.data$=(0,bt.a)([this.page$,this.pageSize$,this.totalElement$]).pipe((0,C.U)(([d,y,$])=>({page:d,pageSize:y,totalElement:$}))),this.selectedItem=null}ngOnInit(){this.searchForm=this.groupeUtilisateurFormService.createSearchForm(),this.store.dispatch(o.loadItems())}validateButtonClicked(){const i=this.selectedItem?.id;i&&(this.store.dispatch(o.resetItem()),this.router.navigate(["administration","validation-groupe","validate",i]))}rejectButtonClicked(){const i=this.selectedItem?.id;i&&(this.store.dispatch(o.resetItem()),this.router.navigate(["administration","validation-groupe","reject",i]))}itemSelected(i){this.selectedItem=i}pageSelected(i){this.store.dispatch(o.changePage({page:i}))}pageSizeChange(i){this.store.dispatch(o.changePageSize({pageSize:i}))}closeButtonClicked(){this.router.navigate(["administration"])}isItemSelected(){return null!==this.selectedItem}refreshButtonClicked(){this.searchForm.reset(),this.store.dispatch(o.resetSearch())}searchButtonClicked(){this.store.dispatch(o.search({searchModel:this.searchForm.value}))}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(U.F0),t.Y36(r.yh),t.Y36(K.g))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-validation-groupe-utilisateur-list"]],features:[t._Bn([K.g])],decls:4,vars:3,consts:[[1,"pt-3","ps-3","pe-3","pb-0","mb-0"],["pathLevelOne","Profils et utilisateurs","pathLevelTwo","Validations Groupes utilisateurs","pathLevelThree","Liste"],["title","Liste des Groupes Utilisateurs \xe0 valider",3,"itemSelected","pageSize","currentPage","totalElements","searchButtonClicked","refreshButtonClicked","pageSelected","pageSizeChange","closeButtonClicked",4,"ngIf"],["title","Liste des Groupes Utilisateurs \xe0 valider",3,"itemSelected","pageSize","currentPage","totalElements","searchButtonClicked","refreshButtonClicked","pageSelected","pageSizeChange","closeButtonClicked"],[1,"normal-search",3,"formGroup"],[1,"d-flex","flex-row"],[1,"text-end","me-1","width-label-search"],["title","Libell\xe9"],[1,"input-textfield-container","col-3"],["placeholder","","otherclass","item-input","formControlName","libelle"],[1,"advance-search",3,"formGroup"],[1,"d-flex","flex-row","mt-2"],["title","Description"],["placeholder","","otherclass","item-input","formControlName","description"],[1,"primary-actions"],["url","Icones/Actions-01.png","title","Valider",1,"me-1",3,"disabled","buttonClicked"],["url","Icones/Actions-04.png","title","Rejeter",1,"me-1",3,"disabled","buttonClicked"],[1,"table-content"],["appDynamicTable","",3,"items","headers","selectable","itemSelected",4,"ngIf"],["appDynamicTable","",3,"items","headers","selectable","itemSelected"],["appCellDef","Lib\xe9ll\xe9"],["app-header-attribute-def-template","",4,"appHeaderDefTemplate"],["app-cell-def-template","","class","table-align-left",4,"appCellDefTemplate"],["appCellDef","Description"],["appCellDef","Cr\xe9\xe9(e) Par"],["appCellDef","Date Cr\xe9ation"],["appCellDef","Date Derni\xe8re Modif"],["appCellDef","Modifi\xe9(e) Par"],["app-header-attribute-def-template",""],["app-cell-def-template","",1,"table-align-left"]],template:function(s,a){1&s&&(t.TgZ(0,"div",0),t._UZ(1,"app-custom-breadcrumb",1),t.qZA(),t.YNc(2,re,19,11,"app-crud-list",2),t.ALo(3,"async")),2&s&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,a.data$)))},dependencies:[f.O5,T.JJ,T.JL,T.sg,T.u,At._,Vt.x,Et.N,Ft.D,Bt.h,Ht.u,jt.O,Kt.q,zt.W,Ot.h,Rt.Z,P.V,f.Ov,f.uU],styles:["[_nghost-%COMP%]{width:100%}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:center}"]})}return e})(),data:{routeModel:{module:"application",path:"user"}}},{path:"validate/:id",component:$t,data:{routeModel:{module:"application",path:"user"}}},{path:"reject/:id",component:Zt,data:{routeModel:{module:"application",path:"user"}}}];let se=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({providers:[F],imports:[f.ez,z.m,O.w,r.Aw.forFeature("validation-groupe-utilisateurs",pt),u.sQ.forFeature(xt),U.Bz.forChild(oe)]})}return e})()}}]);