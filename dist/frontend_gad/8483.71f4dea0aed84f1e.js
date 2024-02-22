"use strict";(self.webpackChunkfrontend_gad=self.webpackChunkfrontend_gad||[]).push([[8483],{8483:(E,b,n)=>{n.r(b),n.d(b,{SiteModule:()=>Ne});var p=n(6814),t=n(9468),Z=n(1227),c=n(95);let m=(()=>{class o{constructor(){}createForm(e){return new c.cw({nomCourt:new c.NI(e.nomCourt,{nonNullable:!0,validators:[c.kI.required]}),nomLong:new c.NI(e.nomLong),nomFiliale:new c.NI(e.nomFiliale),entreprise:new c.NI(e.entreprise),departement:new c.NI(e.departement),pays:new c.NI(e.pays),nomVille:new c.NI(e.nomVille),filiale:new c.NI(e.filiale,{nonNullable:!0,validators:[c.kI.required]}),ville:new c.NI(e.ville,{nonNullable:!0,validators:[c.kI.required]}),utilisateurModification:new c.NI(e.utilisateurModification),utilisateurCreation:new c.NI(e.utilisateurCreation),dateCreation:new c.NI(e.dateCreation),dateDerniereModification:new c.NI(e.dateDerniereModification)})}createSearchForm(){return new c.cw({nomCourt:new c.NI("",{nonNullable:!0,validators:[c.kI.required]}),nomLong:new c.NI("",{nonNullable:!0,validators:[c.kI.required]})})}static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac})}return o})();var C=n(2572),g=n(7398),r=n(676);const d="Site",M=(0,r.PH)(`[${d} API] Load All`),T=(0,r.PH)(`[${d} API] Load All Success`,(0,r.Ky)()),F=(0,r.PH)(`[${d} API] Create`,(0,r.Ky)()),D=(0,r.PH)(`[${d} API] Create Success`,(0,r.Ky)()),W=(0,r.PH)(`[${d} API] Load`,(0,r.Ky)()),V=(0,r.PH)(`[${d} API] Load Success`,(0,r.Ky)()),j=(0,r.PH)(`[${d} API] Create Error`,(0,r.Ky)()),q=(0,r.PH)(`[${d} API] Reset Error`),X=(0,r.PH)(`[${d} API] Reset Error Field`,(0,r.Ky)()),tt=(0,r.PH)(`[${d} API] Reset`),et=(0,r.PH)(`[${d} API] Delete`,(0,r.Ky)()),ot=(0,r.PH)(`[${d} API] Delete Success`,(0,r.Ky)()),l={loadItems:M,loadItemsSuccess:T,resetItem:tt,createItem:F,createItemSuccess:D,loadItem:W,loadItemSuccess:V,updateItem:(0,r.PH)(`[${d} API] Update`,(0,r.Ky)()),updateItemSuccess:(0,r.PH)(`[${d} API] Update Success`,(0,r.Ky)()),deleteItem:et,deleteItemSuccess:ot,setError:j,resetError:q,resetErrorField:X,loadFormModel:(0,r.PH)(`[${d} API] Load Form Model`),resetFormModel:(0,r.PH)(`[${d} API] Reset Form Model`),loadFormModelSuccess:(0,r.PH)(`[${d} API] Load Form Model Success`,(0,r.Ky)()),resetSearch:(0,r.PH)(`[${d} API] Reset Search`),search:(0,r.PH)(`[${d} API] Search`,(0,r.Ky)()),changePage:(0,r.PH)(`[${d} API] Change Page`,(0,r.Ky)()),changePageSize:(0,r.PH)(`[${d} API] Change Page Size`,(0,r.Ky)())},ut=(0,r.Lq)({formModel:null,searchModel:{},items:[],currentItem:null,page:1,pageSize:15,totalElement:0,errors:null},(0,r.on)(l.loadItemsSuccess,(o,s)=>(console.log(s.items),{...o,items:s.items,totalElement:s.totalElement})),(0,r.on)(l.resetItem,(o,s)=>({...o,currentItem:null})),(0,r.on)(l.createItemSuccess,(o,s)=>({...o})),(0,r.on)(l.deleteItemSuccess,(o,s)=>({...o})),(0,r.on)(l.loadItemSuccess,(o,s)=>({...o,currentItem:s.item})),(0,r.on)(l.updateItemSuccess,(o,s)=>({...o})),(0,r.on)(l.loadFormModel,(o,s)=>({...o,formModel:null})),(0,r.on)(l.loadFormModelSuccess,(o,s)=>({...o,formModel:s.formModel})),(0,r.on)(l.resetSearch,(o,s)=>({...o,searchModel:{}})),(0,r.on)(l.search,(o,s)=>({...o,searchModel:s.searchModel})),(0,r.on)(l.changePage,(o,s)=>({...o,page:s.page})),(0,r.on)(l.changePageSize,(o,s)=>({...o,pageSize:s.pageSize})),(0,r.on)(l.setError,(o,s)=>({...o,errors:s.errors})),(0,r.on)(l.resetError,(o,s)=>({...o,errors:null})),(0,r.on)(l.resetErrorField,(o,s)=>{let e={};return null!==o.errors&&Object.entries(o.errors).forEach(([i,a])=>{i!==s.fieldName&&(e[`${i}`]=a)}),{...o,errors:e}})),y=(0,r.ZF)("sites"),_t=(0,r.P1)(y,o=>o.items),ft=(0,r.P1)(y,o=>o.currentItem),O=(0,r.P1)(y,o=>o.formModel),ht=(0,r.P1)(y,o=>o.searchModel),K=(0,r.P1)(y,o=>o.page),H=(0,r.P1)(y,o=>o.pageSize),gt=(0,r.P1)(y,o=>o.totalElement),Ct=(0,r.P1)(y,o=>o.errors);var vt=n(4849),L=n(8281),U=n(797),Q=n(3849),St=n(7251),Zt=n(166),xt=n(6327),bt=n(8564),Tt=n(8223),yt=n(602),It=n(1469),Mt=n(6326),Y=n(8346),k=n(1171),z=n(547),B=n(362);function Pt(o,s){1&o&&(t.TgZ(0,"th",35),t._uU(1,"R\xe9f\xe9rence"),t.qZA())}function At(o,s){if(1&o&&(t.TgZ(0,"td",36),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.refSys)}}function Lt(o,s){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Nom Court"),t.qZA())}function Ft(o,s){if(1&o&&(t.TgZ(0,"td",36),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.nomCourt)}}function Nt(o,s){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Nom Long"),t.qZA())}function Et(o,s){if(1&o&&(t.TgZ(0,"td",36),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.nomLong)}}function Dt(o,s){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Filiale"),t.qZA())}function Ot(o,s){if(1&o&&(t.TgZ(0,"td",36),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.filiale.nomLong)}}function Ut(o,s){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Ville"),t.qZA())}function Bt(o,s){if(1&o&&(t.TgZ(0,"td",36),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.ville.nomLong)}}function $t(o,s){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Date cr\xe9ation"),t.qZA())}function Jt(o,s){if(1&o&&(t.TgZ(0,"td",37),t._uU(1),t.ALo(2,"date"),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.dateCreation,"dd/MM/y \xe0 HH:mm:ss"))}}function wt(o,s){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Date Derni\xe8re Modif"),t.qZA())}function Kt(o,s){if(1&o&&(t.TgZ(0,"td",37),t._uU(1),t.ALo(2,"date"),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.dateDerniereModification,"dd/MM/y \xe0 HH:mm:ss"))}}function Ht(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"table",24),t.NdJ("itemSelected",function(a){t.CHM(e);const f=t.oxw(2);return t.KtG(f.itemSelected(a))}),t.ynx(1,25),t.YNc(2,Pt,2,0,"th",26),t.YNc(3,At,2,1,"td",27),t.BQk(),t.ynx(4,28),t.YNc(5,Lt,2,0,"th",26),t.YNc(6,Ft,2,1,"td",27),t.BQk(),t.ynx(7,29),t.YNc(8,Nt,2,0,"th",26),t.YNc(9,Et,2,1,"td",27),t.BQk(),t.ynx(10,30),t.YNc(11,Dt,2,0,"th",26),t.YNc(12,Ot,2,1,"td",27),t.BQk(),t.ynx(13,31),t.YNc(14,Ut,2,0,"th",26),t.YNc(15,Bt,2,1,"td",27),t.BQk(),t.ynx(16,32),t.YNc(17,$t,2,0,"th",26),t.YNc(18,Jt,3,4,"td",33),t.BQk(),t.ynx(19,34),t.YNc(20,wt,2,0,"th",26),t.YNc(21,Kt,3,4,"td",33),t.BQk(),t.qZA()}if(2&o){const e=s.ngIf,i=t.oxw(2);t.Q6J("items",e)("headers",i.headerTable)("selectable",!0)}}function Qt(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"app-crud-list",3),t.NdJ("searchButtonClicked",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.searchButtonClicked())})("refreshButtonClicked",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.refreshButtonClicked())})("pageSelected",function(a){t.CHM(e);const f=t.oxw();return t.KtG(f.pageSelected(a))})("pageSizeChange",function(a){t.CHM(e);const f=t.oxw();return t.KtG(f.pageSizeChange(a))})("closeButtonClicked",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.closeButtonClicked())}),t.TgZ(1,"div",4)(2,"div",5)(3,"div",6),t._UZ(4,"app-form-label",7),t.qZA(),t.TgZ(5,"div",8),t._UZ(6,"app-custom-textfield",9),t.qZA()()(),t.TgZ(7,"div",10)(8,"div",11)(9,"div",6),t._UZ(10,"app-form-label",12),t.qZA(),t.TgZ(11,"div",8),t._UZ(12,"app-custom-textfield",13),t.qZA()()(),t.TgZ(13,"div",14)(14,"app-custom-button",15),t.NdJ("buttonClicked",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.addButtonClicked())}),t.qZA(),t.TgZ(15,"app-custom-button",16),t.NdJ("buttonClicked",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.editButtonClicked())}),t.qZA(),t.TgZ(16,"app-custom-button",17),t.NdJ("buttonClicked",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.deleteButtonClicked())}),t.qZA()(),t.TgZ(17,"div",18),t._UZ(18,"app-custom-button",19)(19,"app-custom-button",20),t.TgZ(20,"app-print-button",21),t.NdJ("printButtonClicked",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.printButtonClicked())}),t.qZA()(),t.TgZ(21,"div",22),t.YNc(22,Ht,22,3,"table",23),t.ALo(23,"async"),t.qZA()()}if(2&o){const e=s.ngIf,i=t.oxw();t.Q6J("itemSelected",i.isItemSelected())("pageSize",e.pageSize)("currentPage",e.page)("totalElements",e.totalElement),t.xp6(1),t.Q6J("formGroup",i.searchForm),t.xp6(6),t.Q6J("formGroup",i.searchForm),t.xp6(8),t.Q6J("disabled",!i.isItemSelected()),t.xp6(1),t.Q6J("disabled",!i.isItemSelected()),t.xp6(6),t.Q6J("ngIf",t.lcZ(23,9,i.items$))}}(0,p.qS)(Z.Z,"fr-Fr");let Yt=(()=>{class o{constructor(e,i,a,f){this.router=e,this.modalService=i,this.store=a,this.siteFormService=f,this.headerTable=["R\xe9f\xe9rence","Nom Court","Nom Long","Filiale","Ville","Date Cr\xe9ation","Date Derni\xe8re Modif"],this.items$=this.store.select(_t),this.page$=this.store.select(K),this.pageSize$=this.store.select(H),this.totalElement$=this.store.select(gt),this.data$=(0,C.a)([this.page$,this.pageSize$,this.totalElement$]).pipe((0,g.U)(([x,J,u])=>({page:x,pageSize:J,totalElement:u}))),this.selectedItem=null}ngOnInit(){this.searchForm=this.siteFormService.createSearchForm(),this.store.dispatch(l.loadItems())}addButtonClicked(){this.router.navigate(["administration","site","add"])}editButtonClicked(){const e=this.selectedItem?.id;e&&(this.store.dispatch(l.resetItem()),this.router.navigate(["administration","site","edit",e]))}deleteButtonClicked(){const e=this.selectedItem;e&&this.modalService.openComponent(vt.n,{size:"md",otherclass:"custom-modal-height"}).afterClosed.subscribe(i=>{i&&"yes"===i&&this.store.dispatch(l.deleteItem({item:e}))})}itemSelected(e){this.selectedItem=e}pageSelected(e){this.store.dispatch(l.changePage({page:e}))}pageSizeChange(e){this.store.dispatch(l.changePageSize({pageSize:e}))}closeButtonClicked(){this.router.navigate(["administration"])}isItemSelected(){return null!==this.selectedItem}refreshButtonClicked(){this.searchForm.reset(),this.store.dispatch(l.resetSearch())}searchButtonClicked(){this.store.dispatch(l.search({searchModel:this.searchForm.value}))}printButtonClicked(){}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(L.F0),t.Y36(U.Z),t.Y36(r.yh),t.Y36(m))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-site-list"]],features:[t._Bn([m,{provide:t.soG,useValue:"fr-FR"}])],decls:4,vars:3,consts:[[1,"pt-3","ps-3","pe-3","pb-0","mb-0"],["pathLevelOne","Domiciliations","pathLevelTwo","Sites","pathLevelThree","Liste"],["title","Liste des Sites",3,"itemSelected","pageSize","currentPage","totalElements","searchButtonClicked","refreshButtonClicked","pageSelected","pageSizeChange","closeButtonClicked",4,"ngIf"],["title","Liste des Sites",3,"itemSelected","pageSize","currentPage","totalElements","searchButtonClicked","refreshButtonClicked","pageSelected","pageSizeChange","closeButtonClicked"],[1,"normal-search",3,"formGroup"],[1,"d-flex","flex-row","align-items-center"],[1,"text-end","me-1","width-label-search"],["title","Nom Court"],[1,"input-textfield-container","col-3"],["placeholder","","otherclass","item-input","formControlName","nomCourt"],[1,"advance-search",3,"formGroup"],[1,"d-flex","flex-row","mt-2","align-items-center"],["title","Nom Long"],["placeholder","","otherclass","item-input","formControlName","nomLong"],[1,"primary-actions"],["icon","icon-plus btn-icon-add fw-bold","title","Ajouter",1,"me-1",3,"buttonClicked"],["icon","icon-edit-alt btn-icon-edit","title","Modifier",1,"me-1",3,"disabled","buttonClicked"],["icon","icon-trash btn-icon-delete","title","Supprimer",3,"disabled","buttonClicked"],[1,"secondary-actions","d-flex"],["customClass","btn btn-sm button-action","title","Importer","url","import.svg"],["customClass","btn btn-sm button-action","title","Exporter","url","export.svg",1,"me-1","ms-1"],[3,"printButtonClicked"],[1,"table-content"],["appDynamicTable","",3,"items","headers","selectable","itemSelected",4,"ngIf"],["appDynamicTable","",3,"items","headers","selectable","itemSelected"],["appCellDef","R\xe9f\xe9rence"],["app-header-attribute-def-template","",4,"appHeaderDefTemplate"],["app-cell-def-template","","class","text-start",4,"appCellDefTemplate"],["appCellDef","Nom Court"],["appCellDef","Nom Long"],["appCellDef","Filiale"],["appCellDef","Ville"],["appCellDef","Date Cr\xe9ation"],["app-cell-def-template","",4,"appCellDefTemplate"],["appCellDef","Date Derni\xe8re Modif"],["app-header-attribute-def-template",""],["app-cell-def-template","",1,"text-start"],["app-cell-def-template",""]],template:function(i,a){1&i&&(t.TgZ(0,"div",0),t._UZ(1,"app-custom-breadcrumb",1),t.qZA(),t.YNc(2,Qt,24,11,"app-crud-list",2),t.ALo(3,"async")),2&i&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,a.data$)))},dependencies:[p.O5,Q.L,c.JJ,c.JL,c.sg,c.u,St._,Zt.x,xt.N,bt.D,Tt.h,yt.u,It.O,Mt.q,Y.W,k.h,z.Z,B.V,p.Ov,p.uU],styles:["[_nghost-%COMP%]{width:100%}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:center}"]})}return o})();var kt=n(8819),zt=n(9543),Gt=n(7426),Rt=n(9887),Wt=n(5973),Vt=n(4944),jt=n(2093),qt=n(6136),Xt=n(8513),te=n(586),ee=n(1327),oe=n(5188);function ie(o,s){1&o&&(t.TgZ(0,"th",47),t._uU(1,"Nom Court"),t.qZA())}function re(o,s){if(1&o&&(t.TgZ(0,"td",48),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.hij(" ",e.nomCourt," ")}}function ne(o,s){1&o&&(t.TgZ(0,"th",47),t._uU(1,"Nom Long"),t.qZA())}function se(o,s){if(1&o&&(t.TgZ(0,"td",48),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.hij(" ",e.nomLong," ")}}function le(o,s){1&o&&(t.TgZ(0,"table",42),t.ynx(1,43),t.YNc(2,ie,2,0,"th",44),t.YNc(3,re,2,1,"td",45),t.BQk(),t.ynx(4,46),t.YNc(5,ne,2,0,"th",44),t.YNc(6,se,2,1,"td",45),t.BQk(),t.qZA())}function ae(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"app-field-error-wrapper",39),t.NdJ("resetField",function(a){t.CHM(e);const f=t.oxw(2);return t.KtG(f.resetBackendError(a))}),t.TgZ(1,"app-item-search",40),t.YNc(2,le,7,0,"table",41),t.qZA()()}if(2&o){const e=s.ngIf,i=t.oxw(2);t.Q6J("errors",i.errors),t.xp6(1),t.Q6J("headers",i.filialeSelectItemsHeader)("items",e.filiales)("criterias",i.filialeItemCritterias)("itemDescription",i.filialeItemDescription)}}function ce(o,s){1&o&&(t.TgZ(0,"th",47),t._uU(1,"Nom Court"),t.qZA())}function pe(o,s){if(1&o&&(t.TgZ(0,"td",48),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.hij(" ",e.nomCourt," ")}}function me(o,s){1&o&&(t.TgZ(0,"th",47),t._uU(1,"Nom Long"),t.qZA())}function de(o,s){if(1&o&&(t.TgZ(0,"td",48),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.hij(" ",e.nomLong," ")}}function ue(o,s){1&o&&(t.TgZ(0,"table",42),t.ynx(1,43),t.YNc(2,ce,2,0,"th",44),t.YNc(3,pe,2,1,"td",45),t.BQk(),t.ynx(4,46),t.YNc(5,me,2,0,"th",44),t.YNc(6,de,2,1,"td",45),t.BQk(),t.qZA())}function _e(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"app-field-error-wrapper",39),t.NdJ("resetField",function(a){t.CHM(e);const f=t.oxw(2);return t.KtG(f.resetBackendError(a))}),t.TgZ(1,"app-item-search",49),t.YNc(2,ue,7,0,"table",41),t.qZA()()}if(2&o){const e=s.ngIf,i=t.oxw(2);t.Q6J("errors",i.errors),t.xp6(1),t.Q6J("headers",i.villeSelectItemsHeader)("items",e.villes)("criterias",i.villeItemCritterias)("itemDescription",i.villeItemDescription)}}function fe(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"form",2)(1,"div",3)(2,"app-panel-custom",4)(3,"div",5)(4,"div",6),t._UZ(5,"app-form-label",7),t.TgZ(6,"div",8),t._UZ(7,"app-custom-textfield",9),t.qZA()(),t.TgZ(8,"div",6),t._UZ(9,"app-form-label",10),t.TgZ(10,"div",8),t._UZ(11,"app-custom-textfield",11),t.qZA()()(),t.TgZ(12,"div",5)(13,"div",6),t._UZ(14,"app-form-label",12),t.TgZ(15,"div",8),t._UZ(16,"app-custom-textfield",13),t.qZA()(),t.TgZ(17,"div",6),t._UZ(18,"app-form-label",14),t.TgZ(19,"div",8),t._UZ(20,"app-custom-textfield",15),t.qZA()()()(),t.TgZ(21,"app-panel-custom",16)(22,"div",5)(23,"div",6),t._UZ(24,"app-form-label",17),t.TgZ(25,"div",8)(26,"app-field-error-wrapper",18),t.NdJ("resetField",function(a){t.CHM(e);const f=t.oxw();return t.KtG(f.resetBackendError(a))}),t._UZ(27,"app-custom-textfield",19),t.qZA()()(),t.TgZ(28,"div",6),t._UZ(29,"app-form-label",20),t.TgZ(30,"div",8),t._UZ(31,"app-custom-textfield",21),t.qZA()(),t.TgZ(32,"div",6),t.YNc(33,ae,3,5,"app-field-error-wrapper",22),t.ALo(34,"async"),t.qZA()(),t.TgZ(35,"div",5)(36,"div",6),t._UZ(37,"app-form-label",23),t.TgZ(38,"div",8)(39,"app-field-error-wrapper",18),t.NdJ("resetField",function(a){t.CHM(e);const f=t.oxw();return t.KtG(f.resetBackendError(a))}),t._UZ(40,"app-custom-textfield",24),t.qZA()()(),t.TgZ(41,"div",6),t._UZ(42,"app-form-label",25),t.TgZ(43,"div",8),t._UZ(44,"app-custom-textfield",26),t.qZA()(),t.TgZ(45,"div",27),t._UZ(46,"app-form-label",28),t.TgZ(47,"div",8),t._UZ(48,"app-custom-textfield",29),t.qZA()(),t.TgZ(49,"div",30),t.YNc(50,_e,3,5,"app-field-error-wrapper",22),t.ALo(51,"async"),t.qZA()()(),t.TgZ(52,"app-panel-custom",31)(53,"div",5)(54,"div",6),t._UZ(55,"app-form-label",32),t.TgZ(56,"div",8)(57,"app-field-error-wrapper",18),t.NdJ("resetField",function(a){t.CHM(e);const f=t.oxw();return t.KtG(f.resetBackendError(a))}),t._UZ(58,"app-custom-textfield",33),t.qZA()()(),t.TgZ(59,"div",6),t._UZ(60,"app-form-label",34),t.TgZ(61,"div",8),t._UZ(62,"app-custom-textfield",35),t.qZA()()()(),t.TgZ(63,"div",36)(64,"app-primary-button",37),t.NdJ("buttonClicked",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.submitForm())}),t.qZA(),t.TgZ(65,"app-cancel-button",38),t.NdJ("buttonClicked",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.returnToList())}),t.qZA()()()()}if(2&o){const e=t.oxw();t.Q6J("formGroup",e.form),t.xp6(7),t.Q6J("readonly",!0),t.xp6(4),t.Q6J("readonly",!0),t.xp6(5),t.Q6J("readonly",!0),t.xp6(4),t.Q6J("readonly",!0),t.xp6(6),t.Q6J("errors",e.errors),t.xp6(1),t.Q6J("readonly",!0),t.xp6(4),t.Q6J("readonly",!0),t.xp6(2),t.Q6J("ngIf",t.lcZ(34,15,e.formModel$)),t.xp6(6),t.Q6J("errors",e.errors),t.xp6(1),t.Q6J("readonly",!0),t.xp6(4),t.Q6J("readonly",!0),t.xp6(4),t.Q6J("readonly",!0),t.xp6(2),t.Q6J("ngIf",t.lcZ(51,17,e.formModel$)),t.xp6(7),t.Q6J("errors",e.errors)}}let G=(()=>{class o{constructor(e,i,a,f){this.formService=e,this.modalService=i,this.router=a,this.store=f,this.entreprises=[],this.filiales=[],this.errors=null,this.formModel$=this.store.select(O),this.selectedEntreprise=null,this.formSubmitted=new t.vpe,this.filialeSelectItemsHeader=["Nom Court","Nom Long"],this.filialeItemDescription=x=>x.nomCourt,this.filialeItemCritterias={nomCourt:"Nom Court",nomLong:"Nom Long"},this.villeSelectItemsHeader=["Nom Court","Nom Long"],this.villeItemDescription=x=>x.nomCourt,this.villeItemCritterias={nomCourt:"Nom Court",nomLong:"Nom Long"}}ngOnInit(){this.store.select(Ct).subscribe(e=>{this.errors=e}),this.store.dispatch(l.resetError()),this.form=this.formService.createForm(this.site),this.form.get("filiale")?.valueChanges.subscribe(e=>{e&&(this.form.get("entreprise")?.setValue(e.entreprise.nomLong),this.form.get("nomFiliale")?.setValue(e.nomLong))}),this.form.get("ville")?.valueChanges.subscribe(e=>{e&&(this.form.get("pays")?.setValue(e.departement.pays.libelle),this.form.get("departement")?.setValue(e.departement.nomLong),this.form.get("nomVille")?.setValue(e.nomLong))})}ngOnDestroy(){}submitForm(){this.formSubmitted.emit(this.form.value)}returnToList(){this.router.navigateByUrl("administration/site")}resetBackendError(e){this.store.dispatch(l.resetErrorField({fieldName:e}))}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(m),t.Y36(U.Z),t.Y36(L.F0),t.Y36(r.yh))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-site-form"]],inputs:{site:"site"},outputs:{formSubmitted:"formSubmitted"},features:[t._Bn([m])],decls:2,vars:1,consts:[["id","main",1,"ps-3","pe-3","pt-0"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],[1,"form-main","p-2"],["icon","fa fa-angle-right","title","Historique"],[1,"general-info"],[1,"input-container","col-4"],["title","Date Cr\xe9ation",1,"col-5","text-end"],[1,"input-textfield-container","col"],["otherclass","custom-style-form","placeholder","","formControlName","dateCreation",3,"readonly"],["title","Cr\xe9\xe9 Par",1,"col-5","text-end"],["otherclass","custom-style-form","placeholder","","formControlName","utilisateurCreation",3,"readonly"],["title","Date Derni\xe8re Modif",1,"col-5","text-end"],["otherclass","custom-style-form","placeholder","","formControlName","dateDerniereModification",3,"readonly"],["title","Modifi\xe9 Par",1,"col-5","text-end"],["otherclass","custom-style-form","placeholder","","formControlName","utilisateurModification",3,"readonly"],["icon","fa fa-angle-right","title","Informations sur La Filiale & Ville"],["title","Entreprise",1,"col-5","text-end"],[3,"errors","resetField"],["otherclass","custom-style-form","placeholder","","formControlName","entreprise",3,"readonly"],["title","Filiale",1,"col-5","text-end"],["otherclass","custom-style-form","placeholder","","formControlName","nomFiliale",3,"readonly"],["class","",3,"errors","resetField",4,"ngIf"],["title","Pays",1,"col-5","text-end"],["otherclass","custom-style-form","placeholder","","formControlName","pays",3,"readonly"],["title","D\xe9partement",1,"col-5","text-end"],["otherclass","custom-style-form","placeholder","","formControlName","departement",3,"readonly"],[1,"input-container","col-3"],["title","Ville",1,"col-5","text-end"],["otherclass","custom-style-form","placeholder","","formControlName","nomVille",3,"readonly"],[1,"input-container","col-1"],["icon","fa fa-angle-right","title","Informations g\xe9n\xe9rales"],["title","Nom Court",1,"col-5","text-end"],["otherclass","custom-style-form","placeholder","","formControlName","nomCourt"],["title","Nom Long",1,"col-5","text-end"],["otherclass","custom-style-form","placeholder","","formControlName","nomLong"],[1,"form-actions"],["title","Enregistrer",1,"me-1",3,"buttonClicked"],["title","Annuler","otherclass","custom-cancel-button",3,"buttonClicked"],[1,"",3,"errors","resetField"],["otherclass","custom-style-item-selection-form","formControlName","filiale",1,"ml-2",3,"headers","items","criterias","itemDescription"],["app-item-search-template-attribute","",4,"appItemSearchTemplate"],["app-item-search-template-attribute",""],["appItemSearchCellDef","Nom Court"],["app-item-search-header-def-template","","class","custom-head",4,"appItemSearchHeaderDefTemplate"],["app-item-search-cell-def-template","","class","custom-head",4,"appItemSearchCellDefTemplate"],["appItemSearchCellDef","Nom Long"],["app-item-search-header-def-template","",1,"custom-head"],["app-item-search-cell-def-template","",1,"custom-head"],["otherclass","custom-style-item-selection-form","formControlName","ville",1,"ml-2",3,"headers","items","criterias","itemDescription"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0),t.YNc(1,fe,66,19,"form",1),t.qZA()),2&i&&(t.xp6(1),t.Q6J("ngIf",a.form))},dependencies:[p.O5,c._Y,c.JJ,c.JL,c.sg,c.u,kt.F,Y.W,k.h,zt.C,z.Z,Gt.p,Rt.l,Wt.v,Vt.K,jt.d,qt.D,Xt.T,te.o,ee.g,oe.K,p.Ov],styles:[".general-info[_ngcontent-%COMP%]{display:flex;padding:5px 0;width:100%}.form-main[_ngcontent-%COMP%]{background-color:#e7e8ea;border:1px solid #c7c5c6}.input-container[_ngcontent-%COMP%]{display:flex}.input-textfield-container[_ngcontent-%COMP%]{margin-left:4px}.form-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:.5rem}.form-actions[_ngcontent-%COMP%]   app-primary-button[_ngcontent-%COMP%]{margin-left:.5rem}"]})}return o})(),he=(()=>{class o{constructor(e){this.store=e,this.formModel$=this.store.select(O),this.site={id:"",nomCourt:"",nomLong:"",nomFiliale:"",entreprise:"",nomVille:"",departement:"",pays:"",filiale:null,ville:null,dateDerniereModification:null,dateCreation:null,utilisateurCreation:"",utilisateurModification:""}}ngOnInit(){this.store.dispatch(l.resetItem()),this.store.dispatch(l.resetFormModel()),this.store.dispatch(l.loadFormModel())}addSite(e){this.store.dispatch(l.createItem({item:{nomCourt:e.nomCourt,nomLong:e.nomLong,filiale:e.filiale,ville:e.ville}}))}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(r.yh))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-site-add"]],decls:3,vars:1,consts:[[1,"pt-3","ps-3","pe-3","pb-0","mb-0"],["pathLevelOne","Domiciliations","pathLevelTwo","Sites","pathLevelThree","Ajouter"],["id","main",3,"site","formSubmitted"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0),t._UZ(1,"app-custom-breadcrumb",1),t.qZA(),t.TgZ(2,"app-site-form",2),t.NdJ("formSubmitted",function(x){return a.addSite(x)}),t.qZA()),2&i&&(t.xp6(2),t.Q6J("site",a.site))},dependencies:[B.V,G],styles:["[_nghost-%COMP%]{width:100%}"]})}return o})();var ge=n(7394);function Ce(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"app-site-form",3),t.NdJ("formSubmitted",function(a){t.CHM(e);const f=t.oxw();return t.KtG(f.editSite(a))}),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("site",e.siteDto)}}let ve=(()=>{class o{constructor(e,i){this.store=e,this.route=i,this.formModel$=this.store.select(O),this.site$=this.store.select(ft),this.siteDto=null,this.subscription=new ge.w0}ngOnInit(){this.store.dispatch(l.resetFormModel()),this.subscription=this.route.params.subscribe(e=>{this.id=e.id,this.id&&this.store.dispatch(l.loadItem({id:this.id}))}),this.store.dispatch(l.loadFormModel()),this.site$.subscribe(e=>{null!==e&&(this.siteDto={id:e.id,nomCourt:e.nomCourt,nomLong:e.nomLong,filiale:null===e.filiale?null:e.filiale,nomFiliale:null===e.filiale?"":e.filiale.nomLong,entreprise:null===e.filiale?"":e.filiale.entreprise.nomLong,ville:null===e.ville?null:e.ville,nomVille:null===e.ville?"":e.ville.nomLong,departement:null===e.ville?"":e.ville.departement.nomLong,pays:null===e.ville?"":e.ville.departement.pays.libelle,dateDerniereModification:null===e.dateDerniereModification?"":this.formatDate(e.dateDerniereModification),dateCreation:null===e.dateCreation?"":this.formatDate(e.dateCreation),utilisateurCreation:e.utilisateurCreation,utilisateurModification:e.utilisateurModification})})}formatDate(e){if(e){const i=new Date(e);return i.toLocaleDateString()+" \xe0 "+i.toLocaleTimeString()}return null}ngOnDestroy(){this.subscription.unsubscribe()}editSite(e){const i={id:e.id,nomCourt:e.nomCourt,nomLong:e.nomLong,ville:e.ville,filiale:e.filiale};this.store.dispatch(l.updateItem({id:Number(this.id),item:i}))}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(r.yh),t.Y36(L.gz))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-site-edit"]],decls:3,vars:1,consts:[[1,"pt-3","ps-3","pe-3","pb-0","mb-0"],["pathLevelOne","Tables","pathLevelTwo","D\xe9partement","pathLevelThree","Editer"],[3,"site","formSubmitted",4,"ngIf"],[3,"site","formSubmitted"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0),t._UZ(1,"app-custom-breadcrumb",1),t.qZA(),t.YNc(2,Ce,1,1,"app-site-form",2)),2&i&&(t.xp6(2),t.Q6J("ngIf",a.siteDto))},dependencies:[p.O5,B.V,G],styles:["[_nghost-%COMP%]{width:100%}"]})}return o})();var Se=n(9207),_=n(6465),Ze=n(2460),I=n(6328),xe=n(9026),P=n(6306),$=n(9397),be=n(1631),S=n(2096),Te=n(9862),v=n(6063),ye=n(3186),Ie=n(4664),Me=n(9989),Pe=n(1946);let R=(()=>{class o extends Me.v{getResourceBasePath(){return`${Pe.y}/site`}static#t=this.\u0275fac=function(){let e;return function(a){return(e||(e=t.n5z(o)))(a||o)}}();static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac})}return o})();var Ae=n(6366);let Le=(()=>{class o{constructor(e,i,a,f,x,J){this.siteService=e,this.authService=i,this.actions$=a,this.router=f,this.modalService=x,this.store=J,this.loadItems$=(0,_.GW)(()=>this.actions$.pipe((0,_.l4)(l.loadItems),(0,Ze.M)(this.store.select(K),this.store.select(H),this.store.select(ht)),(0,I.b)(([u,h,N,w])=>(console.log(h),this.store.dispatch((0,v.Q)()),(0,xe.$)(this.siteService.getAllWithPagination(h,N,w),this.siteService.count(w)).pipe((0,g.U)(([A,Ee])=>(this.store.dispatch((0,v.Z)()),l.loadItemsSuccess({items:A,totalElement:Ee}))),(0,P.K)(A=>(this.store.dispatch((0,v.Z)()),(0,S.of)(l.setError({errors:A})))))))),{dispatch:!0}),this.createItem$=(0,_.GW)(()=>this.actions$.pipe((0,_.l4)(l.createItem),(0,I.b)(u=>(this.store.dispatch((0,v.Q)()),this.siteService.add(u.item).pipe((0,$.b)(()=>{this.modalService.openAlert({type:"success",title:"Op\xe9ration r\xe9ussie",message:"Site ajout\xe9 avec succ\xe8s"}),this.router.navigateByUrl("administration/site")}),(0,g.U)(h=>l.createItemSuccess({item:h})),(0,P.K)(h=>(this.store.dispatch((0,v.Z)()),(0,S.of)(l.setError({errors:h})))))))),{dispatch:!0}),this.loadItem$=(0,_.GW)(()=>this.actions$.pipe((0,_.l4)(l.loadItem),(0,be.z)(u=>this.siteService.findById(u.id).pipe((0,g.U)(h=>l.loadItemSuccess({item:h})),(0,P.K)(h=>(this.store.dispatch((0,v.Z)()),(0,S.of)(l.setError({errors:h}))))))),{dispatch:!0}),this.deleteItem$=(0,_.GW)(()=>this.actions$.pipe((0,_.l4)(l.deleteItem),(0,I.b)(u=>this.siteService.delete(u.item.id,u.item)),(0,$.b)(()=>{this.modalService.openAlert({type:"success",title:"Op\xe9ration r\xe9ussie",message:"Site supprim\xe9 avec succ\xe8s"})}),(0,g.U)(()=>l.loadItems()),(0,P.K)(u=>(this.store.dispatch((0,v.Z)()),(0,S.of)(l.setError({errors:u}))))),{dispatch:!0}),this.updateItem$=(0,_.GW)(()=>this.actions$.pipe((0,_.l4)(l.updateItem),(0,I.b)(u=>(this.store.dispatch((0,v.Q)()),this.siteService.update(u.id,u.item).pipe((0,$.b)(()=>{this.store.dispatch((0,v.Z)()),this.modalService.openAlert({type:"success",title:"Op\xe9ration r\xe9ussie",message:"Site modifi\xe9e avec succ\xe8s"}),this.router.navigateByUrl("administration/site")}),(0,g.U)(h=>l.createItemSuccess({item:h})),(0,P.K)(h=>(this.store.dispatch((0,v.Z)()),(0,S.of)(l.setError({errors:h})))))))),{dispatch:!0}),this.loadFormModel$=(0,_.GW)(()=>this.actions$.pipe((0,_.l4)(l.loadFormModel),(0,I.b)(()=>this.siteService.getFormModel()),(0,g.U)(u=>l.loadFormModelSuccess({formModel:u})),(0,P.K)(u=>(0,S.of)(l.setError({errors:u}))))),this.resetSearch$=(0,_.GW)(()=>this.actions$.pipe((0,_.l4)(l.resetSearch),(0,I.b)(()=>(0,S.of)(l.changePage({page:1}))))),this.search$=(0,_.GW)(()=>this.actions$.pipe((0,_.l4)(l.search),(0,I.b)(()=>(0,S.of)(l.changePage({page:1}))))),this.changePage$=(0,_.GW)(()=>this.actions$.pipe((0,_.l4)(l.changePage),(0,g.U)(u=>l.loadItems()))),this.changePageSize$=(0,_.GW)(()=>this.actions$.pipe((0,_.l4)(l.changePageSize),(0,I.b)(()=>(0,S.of)(l.changePage({page:1}))))),this.handleError$=(0,_.GW)(()=>this.actions$.pipe((0,_.l4)(l.setError),(0,Ie.w)(u=>{if(this.store.dispatch((0,v.Q)()),u.errors instanceof Te.UA){if(422===u.errors.status){let h="",N=0;for(const[w,A]of Object.entries(u.errors.error))h+=0===N?A:"\n"+A,N++;this.modalService.openAlert({type:"error",title:"Op\xe9ration Erron\xe9e",message:h})}if(403===u.errors.status&&this.modalService.openAlert({type:"error",title:"Op\xe9ration Erron\xe9e",message:"Vous n'avez pas le droit requis pour effectuer cette action"}),401===u.errors.status){let h="Votre token a expir\xe9, veuillez vous reconnecter svp!";return this.authService.removeToken(),this.authService.removeUserInfo(),this.store.dispatch((0,v.Z)()),this.modalService.openAlert({type:"error",title:"Op\xe9ration Erron\xe9e",message:h}),(0,S.of)(ye.jM())}}return this.store.dispatch((0,v.Z)()),(0,S.of)({type:"noop"})})),{dispatch:!0})}static#t=this.\u0275fac=function(i){return new(i||o)(t.LFG(R),t.LFG(Ae.e),t.LFG(_.eX),t.LFG(L.F0),t.LFG(U.Z),t.LFG(r.yh))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac})}return o})();const Fe=[{path:"",component:Yt,pathMatch:"prefix"},{path:"add",component:he,pathMatch:"prefix"},{path:"edit/:id",component:ve,pathMatch:"prefix"}];let Ne=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({providers:[R],imports:[p.ez,Q.L,r.Aw.forFeature("sites",ut),_.sQ.forFeature(Le),Se.m,L.Bz.forChild(Fe)]})}return o})()},8819:(E,b,n)=>{n.d(b,{F:()=>t});var p=n(9468);let t=(()=>{class Z{constructor(){this.disabled=!1,this.buttonClicked=new p.vpe}emitButtonClicked(){this.buttonClicked.emit()}static#t=this.\u0275fac=function(C){return new(C||Z)};static#e=this.\u0275cmp=p.Xpm({type:Z,selectors:[["app-cancel-button"]],inputs:{title:"title",url:"url",otherclass:"otherclass",disabled:"disabled"},outputs:{buttonClicked:"buttonClicked"},decls:2,vars:5,consts:[[3,"disabled","click"]],template:function(C,g){1&C&&(p.TgZ(0,"button",0),p.NdJ("click",function(){return g.emitButtonClicked()}),p._uU(1),p.qZA()),2&C&&(p.Gre("cancel-button ",g.otherclass,""),p.Q6J("disabled",g.disabled),p.xp6(1),p.hij(" ",g.title,"\n"))},styles:[".cancel-button[_ngcontent-%COMP%]{color:#000;border:1px solid #6d7582;background-color:#fff;min-width:120px;display:flex!important;align-items:center!important;justify-content:center!important;font-size:12px;height:25px;padding:.75rem 0rem;border-radius:3px}"]})}return Z})()},4849:(E,b,n)=>{n.d(b,{n:()=>g});var p=n(1892),t=n(6814),Z=n(8666),c=n(2463),m=n(9468),C=n(166);let g=(()=>{class r{constructor(M,T){this.modalData=M,this.modalRef=T}close(){this.modalRef.close(void 0)}confirmAction(){this.modalRef.close("yes")}static#t=this.\u0275fac=function(T){return new(T||r)(m.Y36(p.S),m.Y36(p.R))};static#e=this.\u0275cmp=m.Xpm({type:r,selectors:[["app-confirm-alert"]],standalone:!0,features:[m.jDz],decls:13,vars:0,consts:[[1,"alert-header","mb-3"],[1,"alert-header-title"],[1,"mb-0"],[1,"pe-3","ps-3","pt-0"],[1,"d-flex","align-items-center","p-2"],[1,"me-3"],["src","assets/images/warning.svg","width","45px","alt",""],[1,"text"],[1,"form-actions"],["otherclass","custom-cancel-button color-warning","title","Oui",1,"me-1",3,"buttonClicked"],["otherclass","custom-cancel-button","title","Fermer",3,"buttonClicked"]],template:function(T,F){1&T&&(m.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),m._uU(3,"Confirmation de Suppression"),m.qZA()()(),m.TgZ(4,"div",3)(5,"div",4)(6,"div",5),m._UZ(7,"img",6),m.qZA(),m.TgZ(8,"div",7),m._uU(9," Voulez-vous vraiment effectuer cette action ? "),m.qZA()(),m.TgZ(10,"div",8)(11,"app-custom-button",9),m.NdJ("buttonClicked",function(){return F.confirmAction()}),m.qZA(),m.TgZ(12,"app-custom-button",10),m.NdJ("buttonClicked",function(){return F.close()}),m.qZA()()())},dependencies:[t.ez,Z.a,c.v,C.x],styles:[".general-info[_ngcontent-%COMP%]{display:flex;padding:5px 0;width:100%}.form-main[_ngcontent-%COMP%]{background-color:#e7e8ea;border:1px solid #c7c5c6}.input-container[_ngcontent-%COMP%]{display:flex;align-items:center}.input-textfield-container[_ngcontent-%COMP%]{margin-left:4px}.form-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:.5rem}.form-actions[_ngcontent-%COMP%]   app-primary-button[_ngcontent-%COMP%]{margin-left:.5rem}.alert-header[_ngcontent-%COMP%]{background-color:#ed6f25;color:#fff;padding:.5rem 1rem;display:flex;align-items:center}.alert-header-title[_ngcontent-%COMP%]{display:flex;align-items:center;flex-grow:1}.close-icon[_ngcontent-%COMP%]{cursor:pointer}.alert-header-title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1rem}input[type=file][_ngcontent-%COMP%]{font-size:13px}.circle-content-error[_ngcontent-%COMP%]{border-radius:50%;border:1px solid #ed6f25;color:#ed6f25;width:70px;height:70px;display:flex;align-items:center;justify-content:center}.circle-content-error[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25px}.text[_ngcontent-%COMP%]{font-size:14px!important}"]})}return r})()},3849:(E,b,n)=>{n.d(b,{L:()=>m});var p=n(9468),t=n(2463),Z=n(6814),c=n(166);let m=(()=>{class C{constructor(){this.printButtonClicked=new p.vpe}emitPrintButtonClicked(){this.printButtonClicked.emit()}static#t=this.\u0275fac=function(d){return new(d||C)};static#e=this.\u0275cmp=p.Xpm({type:C,selectors:[["app-print-button"]],outputs:{printButtonClicked:"printButtonClicked"},standalone:!0,features:[p.jDz],decls:1,vars:0,consts:[["customClass","btn btn-sm button-action","title","Imprimer","url","print.svg",3,"buttonClicked"]],template:function(d,M){1&d&&(p.TgZ(0,"app-custom-button",0),p.NdJ("buttonClicked",function(){return M.emitPrintButtonClicked()}),p.qZA())},dependencies:[Z.ez,t.v,c.x],styles:["[_nghost-%COMP%]{display:block}"]})}return C})()}}]);