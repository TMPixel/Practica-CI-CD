"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4197],{4197:(j,m,a)=>{a.r(m),a.d(m,{HomePageModule:()=>F});var c=a(177),d=a(4341),s=a(1075),u=a(4964),o=a(4438),g=a(1662),p=a(5265),v=a(467),f=a(9381),P=a(3683);function _(e,r){if(1&e&&(o.j41(0,"ion-avatar"),o.nrm(1,"img",13),o.k0s()),2&e){const n=o.XpG();o.R7$(),o.Y8G("src",n.form.value.image,o.B4B)}}function h(e,r){1&e&&o.nrm(0,"ion-icon",14)}function U(e,r){1&e&&(o.j41(0,"div"),o.EFF(1,"El nombre es requerido"),o.k0s())}function G(e,r){1&e&&(o.j41(0,"div"),o.EFF(1,"Ingrese al menos 4 caracteres"),o.k0s())}function b(e,r){if(1&e&&(o.j41(0,"div",15),o.DNE(1,U,2,0,"div",4)(2,G,2,0,"div",4),o.k0s()),2&e){const n=o.XpG();o.R7$(),o.Y8G("ngIf",null==n.form.controls.name.errors?null:n.form.controls.name.errors.required),o.R7$(),o.Y8G("ngIf",null==n.form.controls.name.errors?null:n.form.controls.name.errors.minlenght)}}function I(e,r){1&e&&(o.j41(0,"div"),o.EFF(1,"El precio es requerido"),o.k0s())}function R(e,r){1&e&&(o.j41(0,"div"),o.EFF(1,"El precio m\xednimo debe ser 0"),o.k0s())}function C(e,r){if(1&e&&(o.j41(0,"div",15),o.DNE(1,I,2,0,"div",4)(2,R,2,0,"div",4),o.k0s()),2&e){const n=o.XpG();o.R7$(),o.Y8G("ngIf",null==n.form.controls.price.errors?null:n.form.controls.price.errors.required),o.R7$(),o.Y8G("ngIf",null==n.form.controls.price.errors?null:n.form.controls.price.errors.min)}}function k(e,r){1&e&&(o.j41(0,"div"),o.EFF(1,"Las unidades son requerido"),o.k0s())}function T(e,r){1&e&&(o.j41(0,"div"),o.EFF(1,"Las unidades m\xednimo debe ser 0"),o.k0s())}function M(e,r){if(1&e&&(o.j41(0,"div",15),o.DNE(1,k,2,0,"div",4)(2,T,2,0,"div",4),o.k0s()),2&e){const n=o.XpG();o.R7$(),o.Y8G("ngIf",null==n.form.controls.soldUnits.errors?null:n.form.controls.soldUnits.errors.required),o.R7$(),o.Y8G("ngIf",null==n.form.controls.soldUnits.errors?null:n.form.controls.soldUnits.errors.min)}}let A=(()=>{var e;class r{constructor(){this.utilsSrv=(0,o.WQX)(p.T),this.form=new d.gE({id:new d.MJ(""),image:new d.MJ("",[d.k0.required]),name:new d.MJ("",[d.k0.required,d.k0.minLength(4)]),price:new d.MJ(null,[d.k0.required,d.k0.min(0)]),soldUnits:new d.MJ(null,[d.k0.required,d.k0.min(0)])})}ngOnInit(){}submit(){}takeImage(){var i=this;return(0,v.A)(function*(){const t=(yield i.utilsSrv.takePicture("Imagen del producto")).dataUrl;i.form.controls.image.setValue(t)})()}}return(e=r).\u0275fac=function(i){return new(i||e)},e.\u0275cmp=o.VBU({type:e,selectors:[["app-add-update-product"]],inputs:{product:"product"},decls:18,vars:14,consts:[[3,"isModal","title"],[3,"fullscreen"],[1,"d-flex-center"],[1,"auth-form",3,"ngSubmit","keypres.enter","formGroup"],[4,"ngIf"],["class","image-icon","name","image-outline",4,"ngIf"],["mode","ios","size","small","shape","round",3,"click"],["autocomplete","name","type","text","label","Nombre",3,"control"],["class","validators",4,"ngIf"],["type","number","label","Precio",3,"control"],["type","number","label","Unidades Vendidas",3,"control"],["type","submit","mode","ios",1,"ion-margin",3,"disabled"],["slot","end","name","checkmark-circle-outline"],[3,"src"],["name","image-outline",1,"image-icon"],[1,"validators"]],template:function(i,t){1&i&&(o.nrm(0,"app-header",0),o.j41(1,"ion-content",1)(2,"div",2)(3,"form",3),o.bIt("ngSubmit",function(){return t.submit()})("keypres.enter",function(){return t.submit()}),o.DNE(4,_,2,1,"ion-avatar",4)(5,h,1,0,"ion-icon",5),o.nrm(6,"br"),o.j41(7,"ion-button",6),o.bIt("click",function(){return t.takeImage()}),o.EFF(8," Tomar/Seleccionar "),o.k0s(),o.nrm(9,"app-custom-input",7),o.DNE(10,b,3,2,"div",8),o.nrm(11,"app-custom-input",9),o.DNE(12,C,3,2,"div",8),o.nrm(13,"app-custom-input",10),o.DNE(14,M,3,2,"div",8),o.j41(15,"ion-button",11),o.EFF(16),o.nrm(17,"ion-icon",12),o.k0s()()()()),2&i&&(o.Y8G("isModal",!0)("title",t.product?"Actualizar Producto":"Registrar Producto"),o.R7$(),o.Y8G("fullscreen",!0),o.R7$(2),o.Y8G("formGroup",t.form),o.R7$(),o.Y8G("ngIf",t.form.value.image),o.R7$(),o.Y8G("ngIf",!t.form.value.image),o.R7$(4),o.Y8G("control",t.form.controls.name),o.R7$(),o.Y8G("ngIf",t.form.controls.name.errors&&t.form.controls.name.touched),o.R7$(),o.Y8G("control",t.form.controls.price),o.R7$(),o.Y8G("ngIf",t.form.controls.price.errors&&t.form.controls.price.touched),o.R7$(),o.Y8G("control",t.form.controls.soldUnits),o.R7$(),o.Y8G("ngIf",t.form.controls.soldUnits.errors&&t.form.controls.soldUnits.touched),o.R7$(),o.Y8G("disabled",t.form.invalid),o.R7$(),o.SpI(" ",t.product?"Actualizar producto":"Agregar producto"," "))},dependencies:[c.bT,s.mC,s.Jm,s.W9,s.iq,d.qT,d.cb,d.j4,f.l,P.H],styles:[".image-icon[_ngcontent-%COMP%]{font-size:100px;opacity:30%}ion-avatar[_ngcontent-%COMP%]{width:200px;height:160px;--border-radius: 15px;margin:0 auto}"]}),r})();function Y(e,r){1&e&&o.nrm(0,"ion-card",6)}const $=[{path:"",component:(()=>{var e;class r{constructor(){this.utilsSrv=(0,o.WQX)(p.T),this.firebaseSrv=(0,o.WQX)(g.f),this.products=[],this.loading=!1}ngOnInit(){}doRefresh(i){}addUpdateProduct(i){this.utilsSrv.presentModal({component:A,cssClass:"add-update-modal",componentProps:{product:i}})}}return(e=r).\u0275fac=function(i){return new(i||e)},e.\u0275cmp=o.VBU({type:e,selectors:[["app-home"]],decls:8,vars:2,consts:[["title","Inicio :3",3,"showMenu"],["slot","fixed","pullFactor","0.8","pullMin","60","pullMax","120",3,"ionRefresh"],["mode","ios","color","secondary","class","d-flex-center iont-text-center",4,"ngIf"],["vertical","bottom","horizontal","end","slot","fixed"],[3,"click"],["name","add"],["mode","ios","color","secondary",1,"d-flex-center","iont-text-center"]],template:function(i,t){1&i&&(o.nrm(0,"app-header",0),o.j41(1,"ion-content")(2,"ion-refresher",1),o.bIt("ionRefresh",function(H){return t.doRefresh(H)}),o.nrm(3,"ion-refresher-content"),o.k0s(),o.DNE(4,Y,1,0,"ion-card",2),o.j41(5,"ion-fab",3)(6,"ion-fab-button",4),o.bIt("click",function(){return t.addUpdateProduct()}),o.nrm(7,"ion-icon",5),o.k0s()()()),2&i&&(o.Y8G("showMenu",!0),o.R7$(4),o.Y8G("ngIf",!t.loading&&t.products.length))},dependencies:[c.bT,s.b_,s.W9,s.Q8,s.YW,s.iq,s.To,s.Ki,f.l]}),r})()}];let E=(()=>{var e;class r{}return(e=r).\u0275fac=function(i){return new(i||e)},e.\u0275mod=o.$C({type:e}),e.\u0275inj=o.G2t({imports:[u.iI.forChild($),u.iI]}),r})();var y=a(3887);let F=(()=>{var e;class r{}return(e=r).\u0275fac=function(i){return new(i||e)},e.\u0275mod=o.$C({type:e}),e.\u0275inj=o.G2t({imports:[c.MD,d.YN,s.bv,E,y.G]}),r})()}}]);