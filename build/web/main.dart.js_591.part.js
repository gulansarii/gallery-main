self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={a5k:function a5k(){},
aFY(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.ad(0,e)
w=f.ad(0,e)
return e.a_(0,w.Bq(B.G(x.Gl(w)/t,0,1)))},
bJS(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.ad(0,q),o=e.b,n=o.ad(0,q),m=e.d,l=m.ad(0,q),k=p.Gl(n),j=n.Gl(n),i=p.Gl(l),h=l.Gl(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[A.aFY(d,q,o),A.aFY(d,o,x),A.aFY(d,x,m),A.aFY(d,m,q)]
v=B.bl("closestOverall")
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.aC()},
bNE(){var x=new B.bs(new Float64Array(16))
x.uu()
return new A.aco(x,$.ao())},
bwz(d,e,f){return Math.log(f/d)/Math.log(e/100)},
bxd(d,e){var x,w,v,u,t,s,r=new B.bs(new Float64Array(16))
r.ru(d)
r.ye(r)
x=e.a
w=e.b
v=new B.cE(new Float64Array(3))
v.uO(x,w,0)
v=r.Bl(v)
u=e.c
t=new B.cE(new Float64Array(3))
t.uO(u,w,0)
t=r.Bl(t)
w=e.d
s=new B.cE(new Float64Array(3))
s.uO(u,w,0)
s=r.Bl(s)
u=new B.cE(new Float64Array(3))
u.uO(x,w,0)
u=r.Bl(u)
x=new B.cE(new Float64Array(3))
x.ru(v)
w=new B.cE(new Float64Array(3))
w.ru(t)
v=new B.cE(new Float64Array(3))
v.ru(s)
t=new B.cE(new Float64Array(3))
t.ru(u)
return new A.a9f(x,w,v,t)},
bwr(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.n,w=0;w<4;++w){v=r[w]
u=A.bJS(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new B.j(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new B.j(x.a,t)}return A.boe(x)},
boe(d){return new B.j(B.bh3(C.d.oV(d.a,9)),B.bh3(C.d.oV(d.b,9)))},
bRo(d,e){if(d.m(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.a3:C.w},
LL:function LL(d,e,f,g,h,i){var _=this
_.r=d
_.x=e
_.ay=f
_.cx=g
_.db=h
_.a=i},
Tq:function Tq(d,e,f,g,h){var _=this
_.d=null
_.e=d
_.f=e
_.w=_.r=null
_.z=_.y=_.x=$
_.at=_.as=_.Q=null
_.ay=_.ax=0
_.ch=null
_.rW$=f
_.ar$=g
_.a=null
_.b=h
_.c=null},
b3K:function b3K(){},
ajN:function ajN(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aco:function aco(d,e){var _=this
_.a=d
_.U$=0
_.ac$=e
_.ao$=_.au$=0
_.aG$=!1},
T0:function T0(d,e){this.a=d
this.b=e},
aJK:function aJK(d,e){this.a=d
this.b=e},
Yq:function Yq(){},
bNF(){return new A.uv(null)},
uv:function uv(d){this.a=d},
WV:function WV(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.w=$
_.x=null
_.rW$=g
_.ar$=h
_.a=null
_.b=i
_.c=null},
bdC:function bdC(d,e){this.a=d
this.b=e},
bdD:function bdD(d){this.a=d},
bdJ:function bdJ(d){this.a=d},
bdI:function bdI(d){this.a=d},
bdH:function bdH(d){this.a=d},
bdG:function bdG(d){this.a=d},
bdF:function bdF(d,e){this.a=d
this.b=e},
bdE:function bdE(d,e,f){this.a=d
this.b=e
this.c=f},
afA:function afA(d,e){this.b=d
this.a=e},
aVc:function aVc(d,e){this.a=d
this.b=e},
Za:function Za(){},
bkV(d,e,f,g,h){var x=new A.a_p(e,g,f,B.b([],y.g),h,B.b([],y.h))
x.avv(d,e,f,g,h)
return x},
a_p:function a_p(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
auL:function auL(d){this.a=d},
auK:function auK(d){this.a=d},
auJ:function auJ(d){this.a=d},
aVb:function aVb(d){this.a=d
this.c=this.b=null},
b7O:function b7O(d,e){this.a=d
this.b=e},
hQ:function hQ(d,e,f){this.a=d
this.b=e
this.c=f},
afB:function afB(){},
a0G:function a0G(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
awh:function awh(d){this.a=d},
awg:function awg(d,e){this.a=d
this.b=e},
AT:function AT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aX1:function aX1(d){this.a=d},
a3K:function a3K(d,e,f){this.c=d
this.d=e
this.a=f},
a9f:function a9f(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},B,C,D,J,E,F
A=a.updateHolder(c[87],A)
B=c[0]
C=c[2]
D=c[127]
J=c[1]
E=c[100]
F=c[116]
A.a5k.prototype={}
A.LL.prototype={
K(){var x=null,w=y.z
return new A.Tq(new B.at(x,w),new B.at(x,w),x,x,C.j)}}
A.Tq.prototype={
gQc(){var x=$.ar.Z$.z.i(0,this.e).gab()
x.toString
x=y.x.a(x).k3
x.toString
return this.a.r.Jf(new B.A(0,0,0+x.a,0+x.b))},
gSx(){var x=$.ar.Z$.z.i(0,this.f).gab()
x.toString
x=y.x.a(x).k3
return new B.A(0,0,0+x.a,0+x.b)},
HN(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this
if(a2.m(0,C.n)){x=new B.bs(new Float64Array(16))
x.ru(a1)
return x}w=B.bl("alignedTranslation")
if(a0.Q!=null){a0.a.toString
switch(3){case 3:w.srI(a2)
break}}else w.srI(a2)
v=new B.bs(new Float64Array(16))
v.ru(a1)
v.px(0,w.aC().a,w.aC().b)
u=A.bxd(v,a0.gSx())
x=a0.gQc()
if(x.gakt(x))return v
x=a0.gQc()
t=a0.ay
s=new B.bs(new Float64Array(16))
s.uu()
r=x.c
q=x.a
p=r-q
o=x.d
x=x.b
n=o-x
s.px(0,p/2,n/2)
s.VB(t)
s.px(0,-p/2,-n/2)
t=new B.cE(new Float64Array(3))
t.uO(q,x,0)
t=s.Bl(t)
p=new B.cE(new Float64Array(3))
p.uO(r,x,0)
p=s.Bl(p)
x=new B.cE(new Float64Array(3))
x.uO(r,o,0)
x=s.Bl(x)
r=new B.cE(new Float64Array(3))
r.uO(q,o,0)
r=s.Bl(r)
q=new Float64Array(3)
new B.cE(q).ru(t)
t=new Float64Array(3)
new B.cE(t).ru(p)
p=new Float64Array(3)
new B.cE(p).ru(x)
x=new Float64Array(3)
new B.cE(x).ru(r)
r=q[0]
o=t[0]
n=p[0]
m=x[0]
l=Math.min(r,Math.min(o,Math.min(n,m)))
q=q[1]
t=t[1]
p=p[1]
x=x[1]
k=Math.min(q,Math.min(t,Math.min(p,x)))
j=Math.max(r,Math.max(o,Math.max(n,m)))
i=Math.max(q,Math.max(t,Math.max(p,x)))
x=new B.cE(new Float64Array(3))
x.uO(l,k,0)
t=new B.cE(new Float64Array(3))
t.uO(j,k,0)
r=new B.cE(new Float64Array(3))
r.uO(j,i,0)
q=new B.cE(new Float64Array(3))
q.uO(l,i,0)
p=new B.cE(new Float64Array(3))
p.ru(x)
x=new B.cE(new Float64Array(3))
x.ru(t)
t=new B.cE(new Float64Array(3))
t.ru(r)
r=new B.cE(new Float64Array(3))
r.ru(q)
h=new A.a9f(p,x,t,r)
g=A.bwr(h,u)
if(g.m(0,C.n))return v
x=v.Wh().a
t=x[0]
x=x[1]
f=a1.H3()
t-=g.a*f
x-=g.b*f
e=new B.bs(new Float64Array(16))
e.ru(a1)
r=new B.cE(new Float64Array(3))
r.uO(t,x,0)
e.a6a(r)
d=A.bwr(h,A.bxd(e,a0.gSx()))
if(d.m(0,C.n))return e
r=d.a===0
if(!r&&d.b!==0){x=new B.bs(new Float64Array(16))
x.ru(a1)
return x}t=r?t:0
x=d.b===0?x:0
r=new B.bs(new Float64Array(16))
r.ru(a1)
q=new B.cE(new Float64Array(3))
q.uO(t,x,0)
r.a6a(q)
return r},
ZT(d,e){var x,w,v,u,t,s,r=this
if(e===1){x=new B.bs(new Float64Array(16))
x.ru(d)
return x}w=r.d.a.H3()
x=r.gSx()
v=r.gQc()
u=r.gSx()
t=r.gQc()
s=B.G(Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b))),r.a.ay,2.5)
x=new B.bs(new Float64Array(16))
x.ru(d)
x.t4(0,s/w)
return x},
aIY(d,e,f){var x,w,v,u
if(e===0){x=new B.bs(new Float64Array(16))
x.ru(d)
return x}w=this.d.yu(f)
x=new B.bs(new Float64Array(16))
x.ru(d)
v=w.a
u=w.b
x.px(0,v,u)
x.VB(-e)
x.px(0,-v,-u)
return x},
Qz(d){switch(d){case D.aD6:return!1
case D.nA:this.a.toString
return!0
case D.kb:case null:this.a.toString
return!0}},
aag(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.nA
else return D.kb},
aI3(d){var x,w,v=this
v.a.cx.$1(d)
x=v.y
x===$&&B.c()
w=x.r
if(w!=null&&w.a!=null){x.uE(0)
x=v.y
x.sk(0,x.a)
x=v.r
if(x!=null)x.a.B(0,v.gRv())
v.r=null}x=v.z
x===$&&B.c()
w=x.r
if(w!=null&&w.a!=null){x.uE(0)
x=v.z
x.sk(0,x.a)
x=v.w
if(x!=null)x.a.B(0,v.gRy())
v.w=null}v.Q=v.ch=null
v.at=v.d.a.H3()
v.as=v.d.yu(d.b)
v.ax=v.ay},
aKq(d){var x,w,v,u,t,s,r=this,q=r.d.a.H3(),p=r.x=d.c,o=r.d.yu(p),n=r.ch
if(n===D.kb)n=r.ch=r.aag(d)
else if(n==null){n=r.aag(d)
r.ch=n}if(!r.Qz(n)){r.a.toString
return}switch(r.ch.a){case 1:n=r.at
n.toString
x=r.d
x.sk(0,r.ZT(x.a,n*d.d/q))
w=r.d.yu(p)
n=r.d
x=n.a
v=r.as
v.toString
n.sk(0,r.HN(x,w.ad(0,v)))
u=r.d.yu(p)
p=r.as
p.toString
if(!A.boe(p).m(0,A.boe(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}x=r.ax
x.toString
t=x+n
n=r.d
n.sk(0,r.aIY(n.a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=A.bRo(n,o)}n=r.as
n.toString
s=o.ad(0,n)
n=r.d
n.sk(0,r.HN(n.a,s))
r.as=r.d.yu(p)
break}r.a.toString},
aKm(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a.toString
m.as=m.ax=m.at=null
x=m.r
if(x!=null)x.a.B(0,m.gRv())
x=m.w
if(x!=null)x.a.B(0,m.gRy())
x=m.y
x===$&&B.c()
x.sk(0,x.a)
x=m.z
x===$&&B.c()
x.sk(0,x.a)
if(!m.Qz(m.ch)){m.Q=null
return}x=m.ch
if(x===D.kb){x=d.a.a
if(x.guq()<50){m.Q=null
return}w=m.d.a.Wh().a
v=w[0]
w=w[1]
m.a.toString
u=B.a4z(0.0000135,v,x.a,0,C.cu)
m.a.toString
t=B.a4z(0.0000135,w,x.b,0,C.cu)
x=x.guq()
m.a.toString
s=A.bwz(x,0.0000135,10)
x=u.gJ1()
r=t.gJ1()
q=y.L
p=B.aP(C.dW,m.y,null)
m.r=new B.H(p,new B.a6(new B.j(v,w),new B.j(x,r),q),q.h("H<Y.T>"))
m.y.e=B.dz(0,0,0,C.d.aS(s*1000),0,0)
p.a1(0,m.gRv())
m.y.p_(0)}else if(x===D.nA){x=d.b
w=Math.abs(x)
if(w<0.1){m.Q=null
return}o=m.d.a.H3()
m.a.toString
n=B.a4z(0.0026999999999999997,o,x/10,0,C.cu)
m.a.toString
s=A.bwz(w,0.0000135,0.1)
x=n.vP(0,s)
w=y.t
v=B.aP(C.dW,m.z,null)
m.w=new B.H(v,new B.a6(o,x,w),w.h("H<Y.T>"))
m.z.e=B.dz(0,0,0,C.d.aS(s*1000),0,0)
v.a1(0,m.gRy())
m.z.p_(0)}},
aI5(d){var x,w,v,u,t,s,r,q,p=this
if(y.C.b(d)){if(d.gum(d)===C.cQ){x=p.a.cx
w=d.gqw(d)
v=d.guA()
x.$1(new B.zR(w,v,0))
x=d.gqw(d).a_(0,d.gAy())
w=d.gAy()
u=B.zm(d.gtN(d),null,w,x)
if(!p.Qz(D.kb)){p.a.toString
return}x=p.d
x.toString
t=x.yu(d.guA())
x=p.d
x.toString
s=x.yu(d.guA().ad(0,u))
x=p.d
x.sk(0,p.HN(x.a,s.ad(0,t)))
p.a.toString
return}if(d.gAy().b===0)return
x=d.gAy()
p.a.toString
r=Math.exp(-x.b/200)}else if(y.P.b(d))r=d.gAx(d)
else return
x=p.a.cx
w=d.gqw(d)
v=d.guA()
x.$1(new B.zR(w,v,0))
if(!p.Qz(D.nA)){p.a.toString
return}x=p.d
x.toString
t=x.yu(d.guA())
x=p.d
x.sk(0,p.ZT(x.a,r))
x=p.d
x.toString
q=x.yu(d.guA())
x=p.d
x.sk(0,p.HN(x.a,q.ad(0,t)))
p.a.toString},
aJF(){var x,w,v,u,t=this,s=t.y
s===$&&B.c()
s=s.r
if(!(s!=null&&s.a!=null)){t.Q=null
s=t.r
if(s!=null)s.a.B(0,t.gRv())
t.r=null
s=t.y
s.sk(0,s.a)
return}s=t.d.a.Wh().a
x=s[0]
s=s[1]
w=t.d.yu(new B.j(x,s))
s=t.d
s.toString
x=t.r
v=x.b
x=x.a
u=s.yu(v.N(0,x.gk(x))).ad(0,w)
x=t.d
x.sk(0,t.HN(x.a,u))},
aKk(){var x,w,v,u,t,s=this,r=s.z
r===$&&B.c()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.B(0,s.gRy())
s.w=null
r=s.z
r.sk(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.N(0,r.gk(r))
r=s.d.a.H3()
x=s.d
x.toString
v=s.x
v===$&&B.c()
u=x.yu(v)
v=s.d
v.sk(0,s.ZT(v.a,w/r))
t=s.d.yu(s.x)
r=s.d
r.sk(0,s.HN(r.a,t.ad(0,u)))},
aKG(){this.E(new A.b3K())},
aa(){var x,w=this,v=null
w.ap()
x=w.a.db
w.d=x
x.a1(0,w.ga_f())
w.y=B.aV(C.u,v,v,v,1,v,w)
w.z=B.aV(C.u,v,v,v,1,v,w)},
ae(d){var x,w,v=this
v.aw(d)
x=v.a
if(x.db!==d.db){x=v.ga_f()
v.d.B(0,x)
w=v.a.db
v.d=w
w.a1(0,x)}},
j(){var x=this,w=x.y
w===$&&B.c()
w.j()
w=x.z
w===$&&B.c()
w.j()
x.d.B(0,x.ga_f())
x.a.toString
x.aug()},
n(d){var x,w,v=this,u=null,t=v.a
t.toString
x=v.d.a
w=new A.ajN(t.x,v.e,C.r,!0,x,u,u)
return B.DB(C.d9,B.cB(C.aU,w,C.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,v.gaKl(),v.gaI2(),v.gaKp(),u,u,u,u,u,u,u,u,u,u,u,!1,new B.j(0,-0.005)),v.f,u,u,u,v.gaI4(),u)}}
A.ajN.prototype={
n(d){var x=this,w=B.o8(x.w,new B.fP(x.c,x.d),x.r,!0)
return B.js(w,x.e,null)}}
A.aco.prototype={
yu(d){var x=this.a,w=new B.bs(new Float64Array(16))
if(w.ye(x)===0)B.W(B.fK(x,"other","Matrix cannot be inverted"))
x=new B.cE(new Float64Array(3))
x.uO(d.a,d.b,0)
x=w.Bl(x).a
return new B.j(x[0],x[1])}}
A.T0.prototype={
M(){return"_GestureType."+this.b}}
A.aJK.prototype={
M(){return"PanAxis."+this.b}}
A.Yq.prototype={
pE(){this.qe()
this.q4()
this.tl()},
j(){var x=this,w=x.ar$
if(w!=null)w.B(0,x.gti())
x.ar$=null
x.a3()}}
A.uv.prototype={
K(){var x=null
return new A.WV(new B.at(x,y.z),A.bkV(x,8,1,16,x),A.bNE(),x,x,C.j)}}
A.WV.prototype={
aJG(){var x=this,w=x.r,v=w.b
w=w.a
x.f.sk(0,v.N(0,w.gk(w)))
w=x.w
w===$&&B.c()
w=w.r
if(!(w!=null&&w.a!=null)){w=x.r
if(w!=null)w.a.B(0,x.ga_8())
x.r=null
w=x.w
w.sk(0,w.a)}},
aKo(d){var x,w=this,v=w.w
v===$&&B.c()
x=v.Q
x===$&&B.c()
if(x===C.ah){v.uE(0)
v=w.r
if(v!=null)v.a.B(0,w.ga_8())
w.r=null
v=w.w
v.sk(0,v.a)}},
aKD(d){var x=this,w=x.f.yu(d.a.ad(0,B.cJ(y.x.a($.ar.Z$.z.i(0,x.d).gab()).rO(0,null),C.n)))
x.E(new A.bdC(x,x.e.b_T(w)))},
aa(){var x=null
this.ap()
this.w=B.aV(C.u,x,x,x,1,x,this)},
n(d){var x=null,w=B.o(d)
return B.c3(B.cG(x,x,!1,x,x,1,x,x,x,!1,x,!1,x,x,x,x,!0,x,x,x,x,x,B.t(B.w(d,C.h,y.s).gbr(),x,x,x,x,x,x,x,x),x,x,x,1,x),w.ax.b,B.a_(x,new B.cT(new A.bdD(this),x),C.e,D.vl,x,x,x,x,x,x,x,x,x,x),x,x,!1,x,x,x,B.b([this.gb0C(),this.gaVA()],y.p),x)},
gb0C(){var x=null,w=this.c
w.toString
return B.ce(B.o(w).ax.cy,x,x,D.a5J,x,x,new A.bdJ(this),x,x,x,"Reset")},
gaVA(){var x=null,w=this.c
w.toString
return B.ce(B.o(w).ax.cy,x,x,D.a5G,x,x,new A.bdH(this),x,x,x,"Edit")},
j(){var x=this.w
x===$&&B.c()
x.j()
this.avm()}}
A.afA.prototype={
aH(d,e){this.b.ah(0,new A.aVc(this,d))},
v2(d){return d.b!==this.b}}
A.Za.prototype={
pE(){this.qe()
this.q4()
this.tl()},
j(){var x=this,w=x.ar$
if(w!=null)w.B(0,x.gti())
x.ar$=null
x.a3()}}
A.a_p.prototype={
avv(d,e,f,g,h){var x,w,v,u,t,s=this,r=s.b,q=-r,p=r-s.c,o=Math.sqrt(3)/2*p
r=0+o
x=q+0.5*p
w=q+1.5*p
v=q+2*p
u=0-o
C.b.a6(s.d,B.b([new B.j(0,q),new B.j(r,x),new B.j(r,w),new B.j(r,w),new B.j(0,v),new B.j(0,v),new B.j(u,w),new B.j(u,w),new B.j(u,x)],y.g))
if(d!=null)C.b.a6(s.f,d)
else{t=s.aaq(null)
for(r=s.f;t!=null;){r.push(t)
t=s.aaq(t)}}},
gp0(d){return new A.aVb(this.f)},
aav(d){var x=this.a,w=-x
if(d<=0)w-=d
else x-=d
return new A.b7O(w,x)},
aaq(d){var x,w,v,u=this
if(d==null)return new A.hQ(-u.a,0,D.iv)
x=d.a
w=u.aav(x)
if(x>=u.a&&d.b>=w.b)return null
v=d.b
if(v>=w.b){++x
return new A.hQ(x,u.aav(x).a,D.iv)}return new A.hQ(x,v+1,D.iv)},
gvp(d){var x=this.b,w=this.a
return new B.E((w*2+1)*(Math.sqrt(3)/2*x)*2,2*(x+w*1.5*x))},
b_T(d){var x=this,w=x.gvp(x),v=d.b-x.gvp(x).b/2,u=x.b,t=new A.hQ(C.d.aS((Math.sqrt(3)/3*(d.a-w.a/2)-0.3333333333333333*v)/u),C.d.aS(0.6666666666666666*v/u),D.iv)
w=D.R0.gaie().a
v=t.gaie().a
if(C.d.rK(Math.abs(w[0]-v[0])+Math.abs(w[1]-v[1])+Math.abs(w[2]-v[2]),2)>x.a)return null
return C.b.Gx(x.f,new A.auL(t))},
anJ(d,e){var x=this,w=Math.sqrt(3),v=x.b,u=d.a,t=Math.sqrt(3),s=d.b,r=x.d,q=B.an(r).h("am<1,j>"),p=B.az(new B.am(r,new A.auK(new B.tO(w*v*u+t/2*v*s+x.gvp(x).a/2,1.5*v*s+x.gvp(x).b/2,y.O)),q),!0,q.h("bN.E"))
q=B.bn(p.length,e,!1,y.G)
return $.a7().aia(C.Pb,p,q,null,null)},
aUR(d){var x=this
if(J.h(x.e,d))return x
return A.bkV(x.f,x.a,x.c,x.b,d)},
aUQ(d,e){var x,w,v=this,u=new A.hQ(d.a,d.b,e),t=v.f,s=C.b.Ux(t,new A.auJ(d))
if(J.h(v.t2(0,s),d)&&d.c.m(0,e))return v
x=B.i0(t,!0,y.X)
x[s]=u
w=v.e
if(d.m(0,w))w=u
return A.bkV(x,v.a,v.c,v.b,w)}}
A.aVb.prototype={
D(){var x,w=this,v=w.b
v=v==null?w.b=0:w.b=v+1
x=w.a
if(v>=x.length){w.c=null
return!1}w.c=x[v]
return!0},
gY(d){return this.c}}
A.b7O.prototype={}
A.hQ.prototype={
l(d){return"BoardPoint("+this.a+", "+this.b+", "+this.c.l(0)+")"},
m(d,e){if(e==null)return!1
if(J.aj(e)!==B.O(this))return!1
return e instanceof A.hQ&&e.a===this.a&&e.b===this.b},
gF(d){return B.a8(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
gaie(){var x=this.a,w=this.b,v=new B.cE(new Float64Array(3))
v.uO(x,w,-x-w)
return v}}
A.afB.prototype={}
A.a0G.prototype={
n(d){var x=this.c,w=B.k(x).h("m_<1,AT>")
return B.aC(B.az(new B.m_(x,new A.awh(this),w),!0,w.h("D.E")),C.l,null,C.a4,C.i,null)}}
A.AT.prototype={
n(d){var x=null,w=!this.d?x:D.a4Y
return B.a_(x,B.btz(!1,w,C.e,C.RY,0,2,!0,this.c,x,4,x,8,x,4,x,x,new A.aX1(this),C.dl,x,x),C.e,x,x,x,x,60,x,x,D.a2c,x,x,60)}}
A.a3K.prototype={
n(d){var x=null,w=B.dY([C.m,C.kR,C.oA,C.vs,D.vl],y.G),v=this.c
return B.ab(B.b([B.t(""+v.a+", "+v.b,x,x,x,x,C.jZ,C.rH,x,x),new A.a0G(w,v.c,this.d,x)],y.p),C.aO,x,C.k,C.i,C.o)}}
A.a9f.prototype={}
var z=a.updateTypes(["~()","~(zR)","K(hQ)","~(Ov)","~(EK)","~(hK)","~(jO)","~(hQ?)","AT(l)"])
A.b3K.prototype={
$0(){},
$S:0}
A.bdC.prototype={
$0(){var x=this.a
x.e=x.e.aUR(this.b)},
$S:0}
A.bdD.prototype={
$2(d,e){var x,w,v,u=null,t=e.b,s=e.d,r=this.a
if(r.x==null){x=new B.bs(new Float64Array(16))
x.uu()
w=r.e
w=w.gvp(w)
v=r.e
x.px(0,t/2-w.a/2,s/2-v.gvp(v).b/2)
r.x=x
r.f.sk(0,x)}x=r.e
x=x.gvp(x)
return B.js(B.di(B.cB(C.aU,new A.LL(new B.X(t,s,t,s),B.bn5(B.h1(u,u,u,new A.afA(r.e,u),x)),0.01,r.gaKn(),r.f,r.d),C.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,r.gaKC(),u,u,u,!1,C.a1),C.ap,u,u,u,u),C.r,u)},
$S:804}
A.bdJ.prototype={
$0(){var x=this.a
x.E(new A.bdI(x))},
$S:0}
A.bdI.prototype={
$0(){var x,w,v=this.a,u=v.w
u===$&&B.c()
u.sk(0,u.a)
u=v.f.a
x=v.x
w=v.w
v.r=new B.H(w,new B.pA(u,x),y.d.h("H<Y.T>"))
w.e=C.kY
w.a1(0,v.ga_8())
v.w.p_(0)},
$S:0}
A.bdH.prototype={
$0(){var x,w=this.a
if(w.e.e==null)return
x=w.c
x.toString
E.boT(new A.bdG(w),x,y.l)},
$S:0}
A.bdG.prototype={
$1(d){var x=null,w=this.a,v=w.e.e
v.toString
return B.a_(x,new A.a3K(v,new A.bdF(w,d),x),C.e,x,x,x,x,150,x,x,C.iF,x,x,1/0)},
$S:805}
A.bdF.prototype={
$1(d){var x=this.a
x.E(new A.bdE(x,d,this.b))},
$S:806}
A.bdE.prototype={
$0(){var x=this.a,w=x.e,v=w.e
v.toString
x.e=w.aUQ(v,this.b)
B.bC(this.c,!1).us(null)},
$S:0}
A.aVc.prototype={
$1(d){var x=d.c,w=this.a.b
this.b.Dd(w.anJ(d,B.P(C.d.aS(255*(J.h(w.e,d)?0.7:1)),x.gk(x)>>>16&255,x.gk(x)>>>8&255,x.gk(x)&255)),C.QY,$.a7().oO())},
$S:z+7}
A.auL.prototype={
$1(d){var x=this.a
return d.a===x.a&&d.b===x.b},
$S:z+2}
A.auK.prototype={
$1(d){var x=this.a
return new B.j(d.a+x.a,d.b+x.b)},
$S:252}
A.auJ.prototype={
$1(d){var x=this.a
return d.a===x.a&&d.b===x.b},
$S:z+2}
A.awh.prototype={
$1(d){var x=this.a
return new A.AT(d,d.m(0,x.d),new A.awg(x,d),null)},
$S:z+8}
A.awg.prototype={
$0(){this.a.e.$1(this.b)},
$S:15}
A.aX1.prototype={
$0(){this.a.e.$0()},
$S:0};(function aliases(){var x=A.Yq.prototype
x.aug=x.j
x=A.Za.prototype
x.avm=x.j})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=A.Tq.prototype,"gaI2","aI3",1)
x(v,"gaKp","aKq",3)
x(v,"gaKl","aKm",4)
x(v,"gaI4","aI5",5)
w(v,"gRv","aJF",0)
w(v,"gRy","aKk",0)
w(v,"ga_f","aKG",0)
w(v=A.WV.prototype,"ga_8","aJG",0)
x(v,"gaKn","aKo",1)
x(v,"gaKC","aKD",6)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.U,[A.a5k,A.afB,A.b7O,A.hQ,A.a9f])
v(B.B,[A.LL,A.uv])
v(B.F,[A.Yq,A.Za])
u(A.Tq,A.Yq)
v(B.hS,[A.b3K,A.bdC,A.bdJ,A.bdI,A.bdH,A.bdE,A.awg,A.aX1])
v(B.r,[A.ajN,A.a0G,A.AT,A.a3K])
u(A.aco,B.fq)
v(B.qB,[A.T0,A.aJK])
u(A.WV,A.Za)
u(A.bdD,B.ik)
v(B.f4,[A.bdG,A.bdF,A.aVc,A.auL,A.auK,A.auJ,A.awh])
u(A.afA,B.p3)
u(A.a_p,A.afB)
u(A.aVb,A.a5k)
x(A.Yq,B.cp)
x(A.Za,B.cp)
w(A.afB,B.D)})()
B.b7(b.typeUniverse,JSON.parse('{"LL":{"B":[],"d":[]},"Tq":{"F":["LL"]},"ajN":{"r":[],"d":[]},"aco":{"fq":["bs"],"al":[]},"uv":{"B":[],"d":[]},"WV":{"F":["uv"]},"afA":{"al":[]},"a_p":{"D":["hQ?"],"D.E":"hQ?"},"AT":{"r":[],"d":[]},"a0G":{"r":[],"d":[]},"a3K":{"r":[],"d":[]}}'))
B.aqj(b.typeUniverse,JSON.parse('{"a5k":1}'))
var y=(function rtii(){var x=B.a3
return{X:x("hQ"),G:x("l"),s:x("C"),h:x("x<hQ>"),g:x("x<j>"),p:x("x<d>"),z:x("at<F<B>>"),d:x("pA"),O:x("tO<z>"),P:x("zr"),C:x("tR"),x:x("y"),L:x("a6<j>"),t:x("a6<z>"),l:x("d")}})();(function constants(){D.iv=new B.l(4291677645)
D.R0=new A.hQ(0,0,D.iv)
D.vl=new B.l(4280756007)
D.a2c=new B.X(2,0,2,0)
D.a3E=new B.aH(57686,"MaterialIcons",null,!1)
D.a4Y=new B.bM(D.a3E,null,C.m,null,null)
D.a5G=new B.bM(F.pT,null,null,null,null)
D.a4g=new B.aH(58659,"MaterialIcons",null,!1)
D.a5J=new B.bM(D.a4g,null,null,null,null)
D.aER=new A.aJK(3,"free")
D.kb=new A.T0(0,"pan")
D.nA=new A.T0(1,"scale")
D.aD6=new A.T0(2,"rotate")})()}
$__dart_deferred_initializers__["9XMDHen2nZqAmXHT+GXua/ntDKg="] = $__dart_deferred_initializers__.current
