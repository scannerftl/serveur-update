(self.webpackChunkfrontend_gad=self.webpackChunkfrontend_gad||[]).push([[9563],{9563:(x,A,r)=>{"use strict";r.r(A),r.d(A,{JournalSortieStockModule:()=>te});var c=r(6814),t=r(9468),g=r(95);let v=(()=>{class e{constructor(){}createSearchForm(){return new g.cw({quantite:new g.NI(0,{nonNullable:!0,validators:[g.kI.required]})})}static#t=this.\u0275fac=function(u){return new(u||e)};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})();var P=r(2572),m=r(7398),o=r(676);const l="Journal Sortie Stock",C=(0,o.PH)(`[${l} API] Load All`),a=(0,o.PH)(`[${l} API] Load All Success`,(0,o.Ky)()),p=(0,o.PH)(`[${l} API] Create`,(0,o.Ky)()),I=(0,o.PH)(`[${l} API] Create Success`,(0,o.Ky)()),d=(0,o.PH)(`[${l} API] Create Error`,(0,o.Ky)()),E=(0,o.PH)(`[${l} API] Reset Error`),K=(0,o.PH)(`[${l} API] Reset Error Field`,(0,o.Ky)()),U=(0,o.PH)(`[${l} API] Load`,(0,o.Ky)()),Z=(0,o.PH)(`[${l} API] Load Success`,(0,o.Ky)()),J=(0,o.PH)(`[${l} API] Reset`),O=(0,o.PH)(`[${l} API] Delete`,(0,o.Ky)()),L=(0,o.PH)(`[${l} API] Delete Success`,(0,o.Ky)()),n={loadItems:C,loadItemsSuccess:a,resetItem:J,createItem:p,createItemSuccess:I,setError:d,resetError:E,resetErrorField:K,loadItem:U,loadItemSuccess:Z,updateItem:(0,o.PH)(`[${l} API] Update`,(0,o.Ky)()),updateItemSuccess:(0,o.PH)(`[${l} API] Update Success`,(0,o.Ky)()),deleteItem:O,deleteItemSuccess:L,loadFormModel:(0,o.PH)(`[${l} API] Load Form Model`),resetFormModel:(0,o.PH)(`[${l} API] Reset Form Model`),loadFormModelSuccess:(0,o.PH)(`[${l} API] Load Form Model Success`,(0,o.Ky)()),resetSearch:(0,o.PH)(`[${l} API] Reset Search`),search:(0,o.PH)(`[${l} API] Search`,(0,o.Ky)()),changePage:(0,o.PH)(`[${l} API] Change Page`,(0,o.Ky)()),changePageSize:(0,o.PH)(`[${l} API] Change Page Size`,(0,o.Ky)()),downloadFile:(0,o.PH)(`[${l} API] Download File`),downloadFileSuccess:(0,o.PH)(`[${l} API] Download File Success`)},ct=(0,o.Lq)({formModel:null,searchModel:{},items:[],currentItem:null,page:1,pageSize:15,totalElement:0,errors:null},(0,o.on)(n.loadItemsSuccess,(e,i)=>({...e,items:i.items,totalElement:i.totalElement})),(0,o.on)(n.resetItem,(e,i)=>({...e,currentItem:null})),(0,o.on)(n.createItemSuccess,(e,i)=>({...e})),(0,o.on)(n.setError,(e,i)=>({...e,errors:i.errors})),(0,o.on)(n.resetError,(e,i)=>({...e,errors:null})),(0,o.on)(n.resetErrorField,(e,i)=>{let s={};return null!==e.errors&&Object.entries(e.errors).forEach(([u,S])=>{u!==i.fieldName&&(s[`${u}`]=S)}),{...e,errors:s}}),(0,o.on)(n.deleteItemSuccess,(e,i)=>({...e})),(0,o.on)(n.loadItemSuccess,(e,i)=>({...e,currentItem:i.item})),(0,o.on)(n.updateItemSuccess,(e,i)=>({...e})),(0,o.on)(n.loadFormModel,(e,i)=>({...e,formModel:null})),(0,o.on)(n.loadFormModelSuccess,(e,i)=>({...e,formModel:i.formModel})),(0,o.on)(n.resetSearch,(e,i)=>({...e,searchModel:{}})),(0,o.on)(n.search,(e,i)=>({...e,searchModel:i.searchModel})),(0,o.on)(n.changePage,(e,i)=>({...e,page:i.page})),(0,o.on)(n.changePageSize,(e,i)=>({...e,pageSize:i.pageSize}))),b=(0,o.ZF)("journal-sortie-stocks"),lt=(0,o.P1)(b,e=>e.items),ut=((0,o.P1)(b,e=>e.currentItem),(0,o.P1)(b,e=>e.errors),(0,o.P1)(b,e=>e.formModel),(0,o.P1)(b,e=>e.searchModel)),w=(0,o.P1)(b,e=>e.page),N=(0,o.P1)(b,e=>e.pageSize),pt=(0,o.P1)(b,e=>e.totalElement);var H=r(8281),W=r(3849),dt=r(7251),mt=r(166),ht=r(6327),ft=r(8564),_t=r(8223),St=r(602),gt=r(1469),vt=r(6326),Ct=r(8346),Et=r(1171),Pt=r(547),yt=r(362);function At(e,i){1&e&&(t.TgZ(0,"th",28),t._uU(1,"R\xe9f\xe9rence"),t.qZA())}function It(e,i){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&e){const s=i.$implicit;t.xp6(1),t.Oqu(s.refSys)}}function Tt(e,i){1&e&&(t.TgZ(0,"th",28),t._uU(1,"Mod\xe8le Equipement"),t.qZA())}function bt(e,i){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&e){const s=i.$implicit;t.xp6(1),t.Oqu(s.modelEquip.libelle)}}function Mt(e,i){1&e&&(t.TgZ(0,"th",28),t._uU(1,"Cat\xe9gorie Equipement"),t.qZA())}function xt(e,i){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&e){const s=i.$implicit;t.xp6(1),t.Oqu(s.modelEquip.categoryEquip.libelle)}}function Lt(e,i){1&e&&(t.TgZ(0,"th",28),t._uU(1,"Provenance"),t.qZA())}function Ft(e,i){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&e){const s=i.$implicit;t.xp6(1),t.Oqu(s.typeStockOut)}}function $t(e,i){1&e&&(t.TgZ(0,"th",28),t._uU(1,"Quantit\xe9"),t.qZA())}function kt(e,i){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&e){const s=i.$implicit;t.xp6(1),t.Oqu(s.quantite)}}function Bt(e,i){1&e&&(t.TgZ(0,"th",30),t._uU(1,"Date cr\xe9ation"),t.qZA())}function Zt(e,i){if(1&e&&(t.TgZ(0,"td",31),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const s=i.$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,s.dateCreation,"dd/MM/y \xe0 HH:mm:ss"))}}function Ot(e,i){1&e&&(t.TgZ(0,"th",30),t._uU(1,"Date Derni\xe8re Modif"),t.qZA())}function Dt(e,i){if(1&e&&(t.TgZ(0,"td",31),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const s=i.$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,s.dateDerniereModification,"dd/MM/y \xe0 HH:mm:ss"))}}function Ut(e,i){if(1&e){const s=t.EpF();t.TgZ(0,"table",16),t.NdJ("itemSelected",function(S){t.CHM(s);const M=t.oxw(2);return t.KtG(M.itemSelected(S))}),t.ynx(1,17),t.YNc(2,At,2,0,"th",18),t.YNc(3,It,2,1,"td",19),t.BQk(),t.ynx(4,20),t.YNc(5,Tt,2,0,"th",18),t.YNc(6,bt,2,1,"td",19),t.BQk(),t.ynx(7,21),t.YNc(8,Mt,2,0,"th",18),t.YNc(9,xt,2,1,"td",19),t.BQk(),t.ynx(10,22),t.YNc(11,Lt,2,0,"th",18),t.YNc(12,Ft,2,1,"td",19),t.BQk(),t.ynx(13,23),t.YNc(14,$t,2,0,"th",18),t.YNc(15,kt,2,1,"td",19),t.BQk(),t.ynx(16,24),t.YNc(17,Bt,2,0,"th",25),t.YNc(18,Zt,3,4,"td",26),t.BQk(),t.ynx(19,27),t.YNc(20,Ot,2,0,"th",25),t.YNc(21,Dt,3,4,"td",26),t.BQk(),t.qZA()}if(2&e){const s=i.ngIf,u=t.oxw(2);t.Q6J("items",s)("headers",u.headerTable)("selectable",!0)}}function Jt(e,i){if(1&e){const s=t.EpF();t.TgZ(0,"app-crud-list",3),t.NdJ("searchButtonClicked",function(){t.CHM(s);const S=t.oxw();return t.KtG(S.searchButtonClicked())})("refreshButtonClicked",function(){t.CHM(s);const S=t.oxw();return t.KtG(S.refreshButtonClicked())})("pageSelected",function(S){t.CHM(s);const M=t.oxw();return t.KtG(M.pageSelected(S))})("pageSizeChange",function(S){t.CHM(s);const M=t.oxw();return t.KtG(M.pageSizeChange(S))})("closeButtonClicked",function(){t.CHM(s);const S=t.oxw();return t.KtG(S.closeButtonClicked())}),t.TgZ(1,"div",4)(2,"div",5)(3,"div",6),t._UZ(4,"app-form-label",7),t.qZA(),t.TgZ(5,"div",8),t._UZ(6,"app-custom-textfield",9),t.qZA()()(),t._UZ(7,"div",10),t.TgZ(8,"div",11),t._UZ(9,"app-custom-button",12),t.TgZ(10,"app-print-button",13),t.NdJ("printButtonClicked",function(){t.CHM(s);const S=t.oxw();return t.KtG(S.printButtonClicked())}),t.qZA()(),t.TgZ(11,"div",14),t.YNc(12,Ut,22,3,"table",15),t.ALo(13,"async"),t.qZA()()}if(2&e){const s=i.ngIf,u=t.oxw();t.Q6J("itemSelected",u.isItemSelected())("pageSize",s.pageSize)("currentPage",s.page)("totalElements",s.totalElement),t.xp6(1),t.Q6J("formGroup",u.searchForm),t.xp6(6),t.Q6J("formGroup",u.searchForm),t.xp6(5),t.Q6J("ngIf",t.lcZ(13,7,u.items$))}}let Kt=(()=>{class e{constructor(s,u,S,M){this.router=s,this.store=u,this.journalSortieStockFormService=S,this.headerTable=["R\xe9f\xe9rence","Mod\xe8le Equipement","Cat\xe9gorie Equipement","Provenance","Quantit\xe9","Date Cr\xe9ation","Date Derni\xe8re Modif"],this.items$=this.store.select(lt),this.page$=this.store.select(w),this.pageSize$=this.store.select(N),this.totalElement$=this.store.select(pt),this.data$=(0,P.a)([this.page$,this.pageSize$,this.totalElement$]).pipe((0,m.U)(([j,G,f])=>({page:j,pageSize:G,totalElement:f}))),this.selectedItem=null}ngOnInit(){this.searchForm=this.journalSortieStockFormService.createSearchForm(),this.store.dispatch(n.loadItems())}itemSelected(s){this.selectedItem=s}pageSelected(s){this.store.dispatch(n.changePage({page:s}))}pageSizeChange(s){this.store.dispatch(n.changePageSize({pageSize:s}))}closeButtonClicked(){this.router.navigate(["parc-informatique"])}isItemSelected(){return null!==this.selectedItem}refreshButtonClicked(){this.searchForm.reset(),this.store.dispatch(n.resetSearch())}searchButtonClicked(){this.store.dispatch(n.search({searchModel:this.searchForm.value}))}printButtonClicked(){this.store.dispatch(n.downloadFile())}static#t=this.\u0275fac=function(u){return new(u||e)(t.Y36(H.F0),t.Y36(o.yh),t.Y36(v),t.Y36(t.soG))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-journal-sortie-stock-list"]],features:[t._Bn([v,{provide:t.soG,useValue:"fr-FR"}])],decls:4,vars:3,consts:[[1,"pt-3","ps-3","pe-3","pb-0","mb-0"],["pathLevelOne","Stock","pathLevelTwo","Journal Sortie Stock","pathLevelThree","Liste"],["title","Journal des Sorties de Stock",3,"itemSelected","pageSize","currentPage","totalElements","searchButtonClicked","refreshButtonClicked","pageSelected","pageSizeChange","closeButtonClicked",4,"ngIf"],["title","Journal des Sorties de Stock",3,"itemSelected","pageSize","currentPage","totalElements","searchButtonClicked","refreshButtonClicked","pageSelected","pageSizeChange","closeButtonClicked"],[1,"normal-search",3,"formGroup"],[1,"d-flex","flex-row","align-items-center"],[1,"text-end","me-2","width-label-search-2"],["title","Quantit\xe9"],[1,"input-textfield-container","col-3"],["placeholder","","otherclass","item-input","formControlName","quantite"],[1,"advance-search",3,"formGroup"],[1,"secondary-actions","d-flex"],["customClass","btn btn-sm button-action","title","Exporter","url","export.svg",1,"me-1","ms-1"],[3,"printButtonClicked"],[1,"table-content"],["appDynamicTable","",3,"items","headers","selectable","itemSelected",4,"ngIf"],["appDynamicTable","",3,"items","headers","selectable","itemSelected"],["appCellDef","R\xe9f\xe9rence"],["app-header-attribute-def-template","","class","text-start ps-2",4,"appHeaderDefTemplate"],["app-cell-def-template","","class","text-start",4,"appCellDefTemplate"],["appCellDef","Mod\xe8le Equipement"],["appCellDef","Cat\xe9gorie Equipement"],["appCellDef","Provenance"],["appCellDef","Quantit\xe9"],["appCellDef","Date Cr\xe9ation"],["app-header-attribute-def-template","",4,"appHeaderDefTemplate"],["app-cell-def-template","",4,"appCellDefTemplate"],["appCellDef","Date Derni\xe8re Modif"],["app-header-attribute-def-template","",1,"text-start","ps-2"],["app-cell-def-template","",1,"text-start"],["app-header-attribute-def-template",""],["app-cell-def-template",""]],template:function(u,S){1&u&&(t.TgZ(0,"div",0),t._UZ(1,"app-custom-breadcrumb",1),t.qZA(),t.YNc(2,Jt,14,9,"app-crud-list",2),t.ALo(3,"async")),2&u&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,S.data$)))},dependencies:[W.L,c.O5,g.JJ,g.JL,g.sg,g.u,dt._,mt.x,ht.N,ft.D,_t.h,St.u,gt.O,vt.q,Ct.W,Et.h,Pt.Z,yt.V,c.Ov,c.uU],styles:["[_nghost-%COMP%]{width:100%}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:center}"]})}return e})();var Ht=r(9207),h=r(6465),zt=r(2460),F=r(6328),Rt=r(9026),$=r(6306),z=r(1631),R=r(9397),y=r(6063),jt=r(9862),T=r(2096),Gt=r(3186),wt=r(4664),Nt=r(217),Wt=r(1946),Yt=r(9989);let Y=(()=>{class e extends Yt.v{getResourceBasePath(){return`${Wt.y}/journal-sortie-stock`}getPrintAll(){return this.http.post(`${this.url}/${this.getResourceBasePath()}/print/all`,{},{observe:"response",responseType:"blob"})}static#t=this.\u0275fac=function(){let s;return function(S){return(s||(s=t.n5z(e)))(S||e)}}();static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})();var Qt=r(6366),Xt=r(797);let Vt=(()=>{class e{constructor(s,u,S,M,j,G){this.journalSortieStockService=s,this.authService=u,this.actions$=S,this.router=M,this.modalService=j,this.store=G,this.loadItems$=(0,h.GW)(()=>this.actions$.pipe((0,h.l4)(n.loadItems),(0,zt.M)(this.store.select(w),this.store.select(N),this.store.select(ut)),(0,F.b)(([f,_,k,D])=>(console.log(_),this.store.dispatch((0,y.Q)()),(0,Rt.$)(this.journalSortieStockService.getAllWithPagination(_,k,D),this.journalSortieStockService.count(D)).pipe((0,m.U)(([B,ee])=>(this.store.dispatch((0,y.Z)()),n.loadItemsSuccess({items:B,totalElement:ee}))),(0,$.K)(B=>(this.store.dispatch((0,y.Z)()),(0,T.of)(n.setError({errors:B})))))))),{dispatch:!0}),this.createItem$=(0,h.GW)(()=>this.actions$.pipe((0,h.l4)(n.createItem),(0,z.z)(f=>this.journalSortieStockService.add(f.item).pipe((0,R.b)(()=>{this.modalService.openAlert({type:"success",title:"Op\xe9ration r\xe9ussie",message:"Groupe utilisateur ajout\xe9 avec succ\xe8s"}),this.router.navigateByUrl("parc-informatique/journal-sortie-stock")}),(0,m.U)(_=>n.createItemSuccess({item:_})),(0,$.K)(_=>(this.store.dispatch((0,y.Z)()),(0,T.of)(n.setError({errors:_}))))))),{dispatch:!0}),this.loadItem$=(0,h.GW)(()=>this.actions$.pipe((0,h.l4)(n.loadItem),(0,z.z)(f=>this.journalSortieStockService.findById(f.id).pipe((0,m.U)(_=>n.loadItemSuccess({item:_})),(0,$.K)(_=>(this.store.dispatch((0,y.Z)()),(0,T.of)(n.setError({errors:_}))))))),{dispatch:!0}),this.deleteItem$=(0,h.GW)(()=>this.actions$.pipe((0,h.l4)(n.deleteItem),(0,F.b)(f=>this.journalSortieStockService.delete(f.item.id,f.item)),(0,R.b)(()=>{this.modalService.openAlert({type:"success",title:"Op\xe9ration r\xe9ussie",message:"Groupe utilisateur supprim\xe9 avec succ\xe8s"})}),(0,m.U)(()=>n.loadItems()),(0,$.K)(f=>(this.store.dispatch((0,y.Z)()),(0,T.of)(n.setError({errors:f}))))),{dispatch:!0}),this.updateItem$=(0,h.GW)(()=>this.actions$.pipe((0,h.l4)(n.updateItem),(0,F.b)(f=>this.journalSortieStockService.update(f.item.id,f.item).pipe((0,R.b)(()=>{this.modalService.openAlert({type:"success",title:"Op\xe9ration r\xe9ussie",message:"Groupe utilisateur modifi\xe9 avec succ\xe8s"}),this.router.navigateByUrl("parc-informatique/journal-sortie-stock")}),(0,$.K)(_=>(this.store.dispatch((0,y.Z)()),(0,T.of)(n.setError({errors:_}))))))),{dispatch:!1}),this.downloadFile$=(0,h.GW)(()=>this.actions$.pipe((0,h.l4)(n.downloadFile),(0,z.z)(f=>(this.store.dispatch((0,y.Q)()),this.journalSortieStockService.getPrintAll().pipe((0,m.U)(_=>{console.log(_),this.store.dispatch((0,y.Z)());let k=_.headers.get("content-disposition")?.split(";")[1].split("=")[1];return(0,Nt.saveAs)(_.body,k),n.loadItems()}),(0,$.K)(_=>(this.store.dispatch((0,y.Z)()),(0,T.of)(n.setError({errors:_})))))))),{dispatch:!0}),this.loadFormModel$=(0,h.GW)(()=>this.actions$.pipe((0,h.l4)(n.loadFormModel),(0,F.b)(()=>this.journalSortieStockService.getFormModel()),(0,m.U)(f=>n.loadFormModelSuccess({formModel:f})),(0,$.K)(f=>(0,T.of)(n.setError({errors:f}))))),this.resetSearch$=(0,h.GW)(()=>this.actions$.pipe((0,h.l4)(n.resetSearch),(0,F.b)(()=>(0,T.of)(n.changePage({page:1}))))),this.search$=(0,h.GW)(()=>this.actions$.pipe((0,h.l4)(n.search),(0,F.b)(()=>(0,T.of)(n.changePage({page:1}))))),this.changePage$=(0,h.GW)(()=>this.actions$.pipe((0,h.l4)(n.changePage),(0,m.U)(f=>n.loadItems()))),this.changePageSize$=(0,h.GW)(()=>this.actions$.pipe((0,h.l4)(n.changePageSize),(0,F.b)(()=>(0,T.of)(n.changePage({page:1}))))),this.handleError$=(0,h.GW)(()=>this.actions$.pipe((0,h.l4)(n.setError),(0,wt.w)(f=>{if(this.store.dispatch((0,y.Q)()),f.errors instanceof jt.UA){if(422===f.errors.status){let _="",k=0;for(const[D,B]of Object.entries(f.errors.error))_+=0===k?B:"\n"+B,k++;this.modalService.openAlert({type:"error",title:"Op\xe9ration Erron\xe9e",message:_})}if(403===f.errors.status&&this.modalService.openAlert({type:"error",title:"Op\xe9ration Erron\xe9e",message:"Vous n'avez pas le droit requis pour effectuer cette action"}),401===f.errors.status){let _="Votre token a expir\xe9, veuillez vous reconnecter svp!";return this.authService.removeToken(),this.authService.removeUserInfo(),this.store.dispatch((0,y.Z)()),this.modalService.openAlert({type:"error",title:"Op\xe9ration Erron\xe9e",message:_}),(0,T.of)(Gt.jM())}}return this.store.dispatch((0,y.Z)()),(0,T.of)({type:"noop"})})),{dispatch:!0})}static#t=this.\u0275fac=function(u){return new(u||e)(t.LFG(Y),t.LFG(Qt.e),t.LFG(h.eX),t.LFG(H.F0),t.LFG(Xt.Z),t.LFG(o.yh))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})();const qt=[{path:"",component:Kt,pathMatch:"prefix"}];let te=(()=>{class e{static#t=this.\u0275fac=function(u){return new(u||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({providers:[Y],imports:[W.L,c.ez,o.Aw.forFeature("journal-sortie-stocks",ct),h.sQ.forFeature(Vt),Ht.m,H.Bz.forChild(qt)]})}return e})()},8346:(x,A,r)=>{"use strict";r.d(A,{W:()=>v});var c=r(9468),t=r(95),g=r(7394);let v=(()=>{class P{constructor(){this.placeholder="",this.type="text",this.readonly=!1,this.otherclass="",this.subscription=new g.w0,this.disabled=!1,this.onTouched=()=>{},this.onChange=()=>{},this.control=new t.NI}writeValue(o){this.control.setValue(o)}registerOnChange(o){this.onChange=o}registerOnTouched(o){this.onTouched=o}setDisabledState(o){this.disabled=o,o?this.control.disable():this.control.enable()}ngOnInit(){this.subscription=this.control.valueChanges.subscribe(o=>{this.onChange(o)})}ngOnDestroy(){this.subscription.unsubscribe()}static#t=this.\u0275fac=function(l){return new(l||P)};static#e=this.\u0275cmp=c.Xpm({type:P,selectors:[["app-custom-textfield"]],inputs:{placeholder:"placeholder",type:"type",readonly:"readonly",otherclass:"otherclass"},features:[c._Bn([{provide:t.JU,useExisting:(0,c.Gpc)(()=>P),multi:!0}])],decls:1,vars:7,consts:[[3,"type","placeholder","formControl","readonly"]],template:function(l,C){1&l&&c._UZ(0,"input",0),2&l&&(c.Gre("custom-text-field m-0 form-control-sm ",C.otherclass,""),c.s9C("placeholder",C.placeholder),c.Q6J("type",C.type)("formControl",C.control)("readonly",C.readonly))},dependencies:[t.Fj,t.JJ,t.oH],styles:[".custom-text-field[_ngcontent-%COMP%]{display:block;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;appearance:none;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;border:1px solid #878787!important;margin-bottom:2px}.form-control-sm[_ngcontent-%COMP%]{font-size:12px!important;border-radius:0;min-width:100%}.custom-text-field[_ngcontent-%COMP%]:focus{background-color:#f0f4f5;border:0px!important;outline:0}.custom-text-field[_ngcontent-%COMP%]:read-only:focus{outline:0!important;border:1px solid #878787!important}"]})}return P})()},1171:(x,A,r)=>{"use strict";r.d(A,{h:()=>t});var c=r(9468);let t=(()=>{class g{constructor(){this.title="",this.class=""}static#t=this.\u0275fac=function(m){return new(m||g)};static#e=this.\u0275cmp=c.Xpm({type:g,selectors:[["app-form-label"]],inputs:{title:"title",class:"class"},decls:2,vars:4,template:function(m,o){1&m&&(c.TgZ(0,"label"),c._uU(1),c.qZA()),2&m&&(c.Tol(o.class),c.xp6(1),c.Oqu(o.title))},styles:["label[_ngcontent-%COMP%]{font-size:12px;font-weight:500;color:#464445;margin-right:5px;min-width:100%;max-width:100%}"]})}return g})()},3849:(x,A,r)=>{"use strict";r.d(A,{L:()=>P});var c=r(9468),t=r(2463),g=r(6814),v=r(166);let P=(()=>{class m{constructor(){this.printButtonClicked=new c.vpe}emitPrintButtonClicked(){this.printButtonClicked.emit()}static#t=this.\u0275fac=function(C){return new(C||m)};static#e=this.\u0275cmp=c.Xpm({type:m,selectors:[["app-print-button"]],outputs:{printButtonClicked:"printButtonClicked"},standalone:!0,features:[c.jDz],decls:1,vars:0,consts:[["customClass","btn btn-sm button-action","title","Imprimer","url","print.svg",3,"buttonClicked"]],template:function(C,a){1&C&&(c.TgZ(0,"app-custom-button",0),c.NdJ("buttonClicked",function(){return a.emitPrintButtonClicked()}),c.qZA())},dependencies:[g.ez,t.v,v.x],styles:["[_nghost-%COMP%]{display:block}"]})}return m})()},547:(x,A,r)=>{"use strict";r.d(A,{Z:()=>g});var c=r(9468),t=r(95);let g=(()=>{class v{constructor(m){this.ngControl=m}static#t=this.\u0275fac=function(o){return new(o||v)(c.Y36(t.a5,10))};static#e=this.\u0275dir=c.lG2({type:v,selectors:[["","formControl",""],["","formControlName",""]]})}return v})()},217:function(x,A){var r,t;void 0!==(t="function"==typeof(r=function(){"use strict";function v(a,p,I){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){C(d.response,p,I)},d.onerror=function(){console.error("could not download file")},d.send()}function P(a){var p=new XMLHttpRequest;p.open("HEAD",a,!1);try{p.send()}catch{}return 200<=p.status&&299>=p.status}function m(a){try{a.dispatchEvent(new MouseEvent("click"))}catch{var p=document.createEvent("MouseEvents");p.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(p)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,l=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),C=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(a,p,I){var d=o.URL||o.webkitURL,E=document.createElement("a");E.download=p=p||a.name||"download",E.rel="noopener","string"==typeof a?(E.href=a,E.origin===location.origin?m(E):P(E.href)?v(a,p,I):m(E,E.target="_blank")):(E.href=d.createObjectURL(a),setTimeout(function(){d.revokeObjectURL(E.href)},4e4),setTimeout(function(){m(E)},0))}:"msSaveOrOpenBlob"in navigator?function(a,p,I){if(p=p||a.name||"download","string"!=typeof a)navigator.msSaveOrOpenBlob(function g(a,p){return typeof p>"u"?p={autoBom:!1}:"object"!=typeof p&&(console.warn("Deprecated: Expected third argument to be a object"),p={autoBom:!p}),p.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\ufeff",a],{type:a.type}):a}(a,I),p);else if(P(a))v(a,p,I);else{var d=document.createElement("a");d.href=a,d.target="_blank",setTimeout(function(){m(d)})}}:function(a,p,I,d){if((d=d||open("","_blank"))&&(d.document.title=d.document.body.innerText="downloading..."),"string"==typeof a)return v(a,p,I);var E="application/octet-stream"===a.type,K=/constructor/i.test(o.HTMLElement)||o.safari,U=/CriOS\/[\d]+/.test(navigator.userAgent);if((U||E&&K||l)&&typeof FileReader<"u"){var Z=new FileReader;Z.onloadend=function(){var L=Z.result;L=U?L:L.replace(/^data:[^;]*;/,"data:attachment/file;"),d?d.location.href=L:location=L,d=null},Z.readAsDataURL(a)}else{var J=o.URL||o.webkitURL,O=J.createObjectURL(a);d?d.location=O:location.href=O,d=null,setTimeout(function(){J.revokeObjectURL(O)},4e4)}});o.saveAs=C.saveAs=C,x.exports=C})?r.apply(A,[]):r)&&(x.exports=t)}}]);