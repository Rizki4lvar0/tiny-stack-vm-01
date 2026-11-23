import{readdirSync,readFileSync,mkdirSync,writeFileSync}from'node:fs';
const I=process.env.MAKEFUN_INPUT_DIR??'/input',O=process.env.MAKEFUN_OUTPUT_DIR??'/output';
const T="01146:;?0000000099999995999599999990000000000000044000000000000058000000000000004414";
for(const d of readdirSync(I).sort()){
const P=readFileSync(I+'/'+d+'/program.bin'),A=readFileSync(I+'/'+d+'/input.bin');
const S=new Int32Array(256),C=new Int32Array(64),M=new Int32Array(256),U=new Uint8Array(65536);
let p=0,s=0,c=0,o=0,q=0,t=0,e=-1;
while(e<0){
if(t==1e6){e=10;break}
if(p<0||p>=P.length){e=9;break}
const k=P[p];
if(!(k<8||k>15&&k<35||k>47&&k<53||k==64||k==65||k>79&&k<84)){e=5;break}
const m=k==1?1:k==2?4:k>47&&k<52?2:0;
if(p+m>=P.length){e=9;break}
const z=T.charCodeAt(k)-48,u=z>>2,v=z&3;
if(s<u){e=2;break}
if(s-u+v>256){e=3;break}
t++;const x=p+1+m;p=x;
switch(k){
case 0:e=0;break;
case 1:S[s++]=(P[x-1]<<24)>>24;break;
case 2:S[s++]=P[x-4]|P[x-3]<<8|P[x-2]<<16|P[x-1]<<24;break;
case 3:s--;break;
case 4:S[s]=S[s-1];s++;break;
case 5:{const a=S[s-1];S[s-1]=S[s-2];S[s-2]=a;break}
case 6:S[s]=S[s-2];s++;break;
case 7:{const a=S[s-3];S[s-3]=S[s-2];S[s-2]=S[s-1];S[s-1]=a;break}
case 23:S[s-1]=-S[s-1]|0;break;
case 27:S[s-1]=~S[s-1];break;
case 48:p=x+(((P[x-2]|P[x-1]<<8)<<16)>>16);break;
case 49:case 50:{const v=S[--s];if((k==49)==(v==0))p=x+(((P[x-2]|P[x-1]<<8)<<16)>>16);break}
case 51:if(c==64){e=7;break}C[c++]=x;p=P[x-2]|P[x-1]<<8;break;
case 52:if(c==0){e=8;break}p=C[--c];break;
case 64:{const a=S[s-1];if(a<0||a>255){e=6;break}S[s-1]=M[a];break}
case 65:{const a=S[s-1],v=S[s-2];if(a<0||a>255){e=6;break}s-=2;M[a]=v;break}
case 80:{const g=String(S[s-1]);if(o+g.length>65536){e=11;break}s--;U.set(Buffer.from(g),o);o+=g.length;break}
case 81:if(o>65535){e=11;break}U[o++]=S[--s]&255;break;
case 82:S[s++]=q<A.length?A[q++]:-1;break;
case 83:e=S[--s]&255;break;
default:{
const b=S[s-1],a=S[s-2];let r=0;
switch(k){
case 16:r=(a+b)|0;break;
case 17:r=(a-b)|0;break;
case 18:r=Math.imul(a,b);break;
case 19:if(!b){e=4;break}r=(a/b)|0;break;
case 20:if(!b){e=4;break}r=a%b|0;break;
case 21:if(!b){e=4;break}r=(a>>>0)/(b>>>0)|0;break;
case 22:if(!b){e=4;break}r=(a>>>0)%(b>>>0)|0;break;
case 24:r=a&b;break;
case 25:r=a|b;break;
case 26:r=a^b;break;
case 28:r=a<<(b&31);break;
case 29:r=a>>(b&31);break;
case 30:r=(a>>>(b&31))|0;break;
case 32:r=a==b?1:0;break;
case 33:r=a<b?1:0;break;
case 34:r=(a>>>0)<(b>>>0)?1:0;break;
}
if(e<0){s-=2;S[s++]=r}
}
}
}
mkdirSync(O+'/'+d,{recursive:true});
writeFileSync(O+'/'+d+'/stdout.bin',U.subarray(0,o));
writeFileSync(O+'/'+d+'/exit.txt',e+'\n');
}
