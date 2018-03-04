
//${CONFIG_BEGIN}
CFG_BINARY_FILES="*.bin|*.dat";
CFG_BRL_GAMETARGET_IMPLEMENTED="1";
CFG_BRL_THREAD_IMPLEMENTED="1";
CFG_CONFIG="debug";
CFG_HOST="winnt";
CFG_HTML5_WEBAUDIO_ENABLED="1";
CFG_IMAGE_FILES="*.png|*.jpg";
CFG_LANG="js";
CFG_MOJO_AUTO_SUSPEND_ENABLED="1";
CFG_MOJO_DRIVER_IMPLEMENTED="1";
CFG_MUSIC_FILES="*.wav|*.ogg|*.mp3|*.m4a";
CFG_OPENGL_GLES20_ENABLED="0";
CFG_SAFEMODE="0";
CFG_SOUND_FILES="*.wav|*.ogg|*.mp3|*.m4a";
CFG_TARGET="html5";
CFG_TEXT_FILES="*.txt|*.xml|*.json";
//${CONFIG_END}

//${METADATA_BEGIN}
var META_DATA="[mojo_font.png];type=image/png;width=864;height=13;\n[8x8_font.png];type=image/png;width=768;height=8;\n[Warrior.png];type=image/png;width=24;height=60;\n[archer.png];type=image/png;width=24;height=120;\n[archer_orig.png];type=image/png;width=24;height=120;\n[blast_16_5.png];type=image/png;width=80;height=16;\n[books_9x10_5.png];type=image/png;width=45;height=10;\n[char_map.png];type=image/png;width=256;height=128;\n[chest_13_2.png];type=image/png;width=26;height=13;\n[fighter.png];type=image/png;width=24;height=120;\n[magi.png];type=image/png;width=24;height=60;\n[map_select.png];type=image/png;width=8;height=6;\n[monsters_24x20_12.png];type=image/png;width=48;height=120;\n[monsters_24x20_24.png];type=image/png;width=96;height=120;\n[nin_font.png];type=image/png;width=576;height=8;\n[nin_font_thick.png];type=image/png;width=576;height=8;\n[ninja.png];type=image/png;width=24;height=60;\n[oldman.png];type=image/png;width=24;height=20;\n[slash_16_5.png];type=image/png;width=80;height=16;\n[tile_map.png];type=image/png;width=256;height=128;\n[title.png];type=image/png;width=138;height=39;\n[window2_4_9.png];type=image/png;width=12;height=12;\n[window3_4_9.png];type=image/png;width=12;height=12;\n[window_2_3.png];type=image/png;width=2;height=6;\n[window_4_9.png];type=image/png;width=12;height=12;\n[wizard.png];type=image/png;width=24;height=60;\n[wizard_map.png];type=image/png;width=160;height=144;\n";
//${METADATA_END}

//${TRANSCODE_BEGIN}

// Javascript Monkey runtime.
//
// Placed into the public domain 24/02/2011.
// No warranty implied; use at your own risk.

//***** JavaScript Runtime *****

var D2R=0.017453292519943295;
var R2D=57.29577951308232;

var err_info="";
var err_stack=[];

var dbg_index=0;

function push_err(){
	err_stack.push( err_info );
}

function pop_err(){
	err_info=err_stack.pop();
}

function stackTrace(){
	if( !err_info.length ) return "";
	var str=err_info+"\n";
	for( var i=err_stack.length-1;i>0;--i ){
		str+=err_stack[i]+"\n";
	}
	return str;
}

function print( str ){
	var cons=document.getElementById( "GameConsole" );
	if( cons ){
		cons.value+=str+"\n";
		cons.scrollTop=cons.scrollHeight-cons.clientHeight;
	}else if( window.console!=undefined ){
		window.console.log( str );
	}
	return 0;
}

function alertError( err ){
	if( typeof(err)=="string" && err=="" ) return;
	alert( "Monkey Runtime Error : "+err.toString()+"\n\n"+stackTrace() );
}

function error( err ){
	throw err;
}

function debugLog( str ){
	if( window.console!=undefined ) window.console.log( str );
}

function debugStop(){
	debugger;	//	error( "STOP" );
}

function dbg_object( obj ){
	if( obj ) return obj;
	error( "Null object access" );
}

function dbg_charCodeAt( str,index ){
	if( index<0 || index>=str.length ) error( "Character index out of range" );
	return str.charCodeAt( index );
}

function dbg_array( arr,index ){
	if( index<0 || index>=arr.length ) error( "Array index out of range" );
	dbg_index=index;
	return arr;
}

function new_bool_array( len ){
	var arr=Array( len );
	for( var i=0;i<len;++i ) arr[i]=false;
	return arr;
}

function new_number_array( len ){
	var arr=Array( len );
	for( var i=0;i<len;++i ) arr[i]=0;
	return arr;
}

function new_string_array( len ){
	var arr=Array( len );
	for( var i=0;i<len;++i ) arr[i]='';
	return arr;
}

function new_array_array( len ){
	var arr=Array( len );
	for( var i=0;i<len;++i ) arr[i]=[];
	return arr;
}

function new_object_array( len ){
	var arr=Array( len );
	for( var i=0;i<len;++i ) arr[i]=null;
	return arr;
}

function resize_bool_array( arr,len ){
	var i=arr.length;
	arr=arr.slice(0,len);
	if( len<=i ) return arr;
	arr.length=len;
	while( i<len ) arr[i++]=false;
	return arr;
}

function resize_number_array( arr,len ){
	var i=arr.length;
	arr=arr.slice(0,len);
	if( len<=i ) return arr;
	arr.length=len;
	while( i<len ) arr[i++]=0;
	return arr;
}

function resize_string_array( arr,len ){
	var i=arr.length;
	arr=arr.slice(0,len);
	if( len<=i ) return arr;
	arr.length=len;
	while( i<len ) arr[i++]="";
	return arr;
}

function resize_array_array( arr,len ){
	var i=arr.length;
	arr=arr.slice(0,len);
	if( len<=i ) return arr;
	arr.length=len;
	while( i<len ) arr[i++]=[];
	return arr;
}

function resize_object_array( arr,len ){
	var i=arr.length;
	arr=arr.slice(0,len);
	if( len<=i ) return arr;
	arr.length=len;
	while( i<len ) arr[i++]=null;
	return arr;
}

function string_compare( lhs,rhs ){
	var n=Math.min( lhs.length,rhs.length ),i,t;
	for( i=0;i<n;++i ){
		t=lhs.charCodeAt(i)-rhs.charCodeAt(i);
		if( t ) return t;
	}
	return lhs.length-rhs.length;
}

function string_replace( str,find,rep ){	//no unregex replace all?!?
	var i=0;
	for(;;){
		i=str.indexOf( find,i );
		if( i==-1 ) return str;
		str=str.substring( 0,i )+rep+str.substring( i+find.length );
		i+=rep.length;
	}
}

function string_trim( str ){
	var i=0,i2=str.length;
	while( i<i2 && str.charCodeAt(i)<=32 ) i+=1;
	while( i2>i && str.charCodeAt(i2-1)<=32 ) i2-=1;
	return str.slice( i,i2 );
}

function string_startswith( str,substr ){
	return substr.length<=str.length && str.slice(0,substr.length)==substr;
}

function string_endswith( str,substr ){
	return substr.length<=str.length && str.slice(str.length-substr.length,str.length)==substr;
}

function string_tochars( str ){
	var arr=new Array( str.length );
	for( var i=0;i<str.length;++i ) arr[i]=str.charCodeAt(i);
	return arr;
}

function string_fromchars( chars ){
	var str="",i;
	for( i=0;i<chars.length;++i ){
		str+=String.fromCharCode( chars[i] );
	}
	return str;
}

function object_downcast( obj,clas ){
	if( obj instanceof clas ) return obj;
	return null;
}

function object_implements( obj,iface ){
	if( obj && obj.implments && obj.implments[iface] ) return obj;
	return null;
}

function extend_class( clas ){
	var tmp=function(){};
	tmp.prototype=clas.prototype;
	return new tmp;
}

function ThrowableObject(){
}

ThrowableObject.prototype.toString=function(){ 
	return "Uncaught Monkey Exception"; 
}


function BBGameEvent(){}
BBGameEvent.KeyDown=1;
BBGameEvent.KeyUp=2;
BBGameEvent.KeyChar=3;
BBGameEvent.MouseDown=4;
BBGameEvent.MouseUp=5;
BBGameEvent.MouseMove=6;
BBGameEvent.TouchDown=7;
BBGameEvent.TouchUp=8;
BBGameEvent.TouchMove=9;
BBGameEvent.MotionAccel=10;

function BBGameDelegate(){}
BBGameDelegate.prototype.StartGame=function(){}
BBGameDelegate.prototype.SuspendGame=function(){}
BBGameDelegate.prototype.ResumeGame=function(){}
BBGameDelegate.prototype.UpdateGame=function(){}
BBGameDelegate.prototype.RenderGame=function(){}
BBGameDelegate.prototype.KeyEvent=function( ev,data ){}
BBGameDelegate.prototype.MouseEvent=function( ev,data,x,y ){}
BBGameDelegate.prototype.TouchEvent=function( ev,data,x,y ){}
BBGameDelegate.prototype.MotionEvent=function( ev,data,x,y,z ){}
BBGameDelegate.prototype.DiscardGraphics=function(){}

function BBDisplayMode( width,height ){
	this.width=width;
	this.height=height;
}

function BBGame(){
	BBGame._game=this;
	this._delegate=null;
	this._keyboardEnabled=false;
	this._updateRate=0;
	this._started=false;
	this._suspended=false;
	this._debugExs=(CFG_CONFIG=="debug");
	this._startms=Date.now();
}

BBGame.Game=function(){
	return BBGame._game;
}

BBGame.prototype.SetDelegate=function( delegate ){
	this._delegate=delegate;
}

BBGame.prototype.Delegate=function(){
	return this._delegate;
}

BBGame.prototype.SetUpdateRate=function( updateRate ){
	this._updateRate=updateRate;
}

BBGame.prototype.SetKeyboardEnabled=function( keyboardEnabled ){
	this._keyboardEnabled=keyboardEnabled;
}

BBGame.prototype.Started=function(){
	return this._started;
}

BBGame.prototype.Suspended=function(){
	return this._suspended;
}

BBGame.prototype.Millisecs=function(){
	return Date.now()-this._startms;
}

BBGame.prototype.GetDate=function( date ){
	var n=date.length;
	if( n>0 ){
		var t=new Date();
		date[0]=t.getFullYear();
		if( n>1 ){
			date[1]=t.getMonth()+1;
			if( n>2 ){
				date[2]=t.getDate();
				if( n>3 ){
					date[3]=t.getHours();
					if( n>4 ){
						date[4]=t.getMinutes();
						if( n>5 ){
							date[5]=t.getSeconds();
							if( n>6 ){
								date[6]=t.getMilliseconds();
							}
						}
					}
				}
			}
		}
	}
}

BBGame.prototype.SaveState=function( state ){
	localStorage.setItem( "monkeystate@"+document.URL,state );	//key can't start with dot in Chrome!
	return 1;
}

BBGame.prototype.LoadState=function(){
	var state=localStorage.getItem( "monkeystate@"+document.URL );
	if( state ) return state;
	return "";
}

BBGame.prototype.LoadString=function( path ){

	var xhr=new XMLHttpRequest();
	xhr.open( "GET",this.PathToUrl( path ),false );
	
	xhr.send( null );
	
	if( xhr.status==200 || xhr.status==0 ) return xhr.responseText;
	
	return "";
}

BBGame.prototype.PollJoystick=function( port,joyx,joyy,joyz,buttons ){
	return false;
}

BBGame.prototype.OpenUrl=function( url ){
	window.location=url;
}

BBGame.prototype.SetMouseVisible=function( visible ){
	if( visible ){
		this._canvas.style.cursor='default';	
	}else{
		this._canvas.style.cursor="url('data:image/cur;base64,AAACAAEAICAAAAAAAACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA55ZXBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOeWVxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADnllcGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9////////////////////+////////f/////////8%3D'), auto";
	}
}

BBGame.prototype.GetDeviceWidth=function(){
	return 0;
}

BBGame.prototype.GetDeviceHeight=function(){
	return 0;
}

BBGame.prototype.SetDeviceWindow=function( width,height,flags ){
}

BBGame.prototype.GetDisplayModes=function(){
	return new Array();
}

BBGame.prototype.GetDesktopMode=function(){
	return null;
}

BBGame.prototype.SetSwapInterval=function( interval ){
}

BBGame.prototype.PathToFilePath=function( path ){
	return "";
}

//***** js Game *****

BBGame.prototype.PathToUrl=function( path ){
	return path;
}

BBGame.prototype.LoadData=function( path ){

	var xhr=new XMLHttpRequest();
	xhr.open( "GET",this.PathToUrl( path ),false );

	if( xhr.overrideMimeType ) xhr.overrideMimeType( "text/plain; charset=x-user-defined" );

	xhr.send( null );
	if( xhr.status!=200 && xhr.status!=0 ) return null;

	var r=xhr.responseText;
	var buf=new ArrayBuffer( r.length );
	var bytes=new Int8Array( buf );
	for( var i=0;i<r.length;++i ){
		bytes[i]=r.charCodeAt( i );
	}
	return buf;
}

//***** INTERNAL ******

BBGame.prototype.Die=function( ex ){

	this._delegate=new BBGameDelegate();
	
	if( !ex.toString() ){
		return;
	}
	
	if( this._debugExs ){
		print( "Monkey Runtime Error : "+ex.toString() );
		print( stackTrace() );
	}
	
	throw ex;
}

BBGame.prototype.StartGame=function(){

	if( this._started ) return;
	this._started=true;
	
	if( this._debugExs ){
		try{
			this._delegate.StartGame();
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.StartGame();
	}
}

BBGame.prototype.SuspendGame=function(){

	if( !this._started || this._suspended ) return;
	this._suspended=true;
	
	if( this._debugExs ){
		try{
			this._delegate.SuspendGame();
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.SuspendGame();
	}
}

BBGame.prototype.ResumeGame=function(){

	if( !this._started || !this._suspended ) return;
	this._suspended=false;
	
	if( this._debugExs ){
		try{
			this._delegate.ResumeGame();
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.ResumeGame();
	}
}

BBGame.prototype.UpdateGame=function(){

	if( !this._started || this._suspended ) return;

	if( this._debugExs ){
		try{
			this._delegate.UpdateGame();
		}catch( ex ){
			this.Die( ex );
		}	
	}else{
		this._delegate.UpdateGame();
	}
}

BBGame.prototype.RenderGame=function(){

	if( !this._started ) return;
	
	if( this._debugExs ){
		try{
			this._delegate.RenderGame();
		}catch( ex ){
			this.Die( ex );
		}	
	}else{
		this._delegate.RenderGame();
	}
}

BBGame.prototype.KeyEvent=function( ev,data ){

	if( !this._started ) return;
	
	if( this._debugExs ){
		try{
			this._delegate.KeyEvent( ev,data );
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.KeyEvent( ev,data );
	}
}

BBGame.prototype.MouseEvent=function( ev,data,x,y ){

	if( !this._started ) return;
	
	if( this._debugExs ){
		try{
			this._delegate.MouseEvent( ev,data,x,y );
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.MouseEvent( ev,data,x,y );
	}
}

BBGame.prototype.TouchEvent=function( ev,data,x,y ){

	if( !this._started ) return;
	
	if( this._debugExs ){
		try{
			this._delegate.TouchEvent( ev,data,x,y );
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.TouchEvent( ev,data,x,y );
	}
}

BBGame.prototype.MotionEvent=function( ev,data,x,y,z ){

	if( !this._started ) return;
	
	if( this._debugExs ){
		try{
			this._delegate.MotionEvent( ev,data,x,y,z );
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.MotionEvent( ev,data,x,y,z );
	}
}

BBGame.prototype.DiscardGraphics=function(){

	if( !this._started ) return;
	
	if( this._debugExs ){
		try{
			this._delegate.DiscardGraphics();
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.DiscardGraphics();
	}
}


function BBHtml5Game( canvas ){
	BBGame.call( this );
	BBHtml5Game._game=this;
	this._canvas=canvas;
	this._loading=0;
	this._timerSeq=0;
	this._gl=null;
	if( CFG_OPENGL_GLES20_ENABLED=="1" ){
		this._gl=this._canvas.getContext( "webgl" );
		if( !this._gl ) this._gl=this._canvas.getContext( "experimental-webgl" );
		if( !this._gl ) this.Die( "Can't create WebGL" );
		gl=this._gl;
	}
}

BBHtml5Game.prototype=extend_class( BBGame );

BBHtml5Game.Html5Game=function(){
	return BBHtml5Game._game;
}

BBHtml5Game.prototype.ValidateUpdateTimer=function(){

	++this._timerSeq;
	if( this._suspended ) return;
	
	var game=this;
	var seq=game._timerSeq;
	
	var maxUpdates=4;
	var updateRate=this._updateRate;
	
	if( !updateRate ){

		var reqAnimFrame=(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame);
	
		if( reqAnimFrame ){
			function animate(){
				if( seq!=game._timerSeq ) return;
	
				game.UpdateGame();
				if( seq!=game._timerSeq ) return;
	
				reqAnimFrame( animate );
				game.RenderGame();
			}
			reqAnimFrame( animate );
			return;
		}
		
		maxUpdates=1;
		updateRate=60;
	}
	
	var updatePeriod=1000.0/updateRate;
	var nextUpdate=0;

	function timeElapsed(){
		if( seq!=game._timerSeq ) return;
		
		if( !nextUpdate ) nextUpdate=Date.now();
		
		for( var i=0;i<maxUpdates;++i ){
		
			game.UpdateGame();
			if( seq!=game._timerSeq ) return;
			
			nextUpdate+=updatePeriod;
			var delay=nextUpdate-Date.now();
			
			if( delay>0 ){
				setTimeout( timeElapsed,delay );
				game.RenderGame();
				return;
			}
		}
		nextUpdate=0;
		setTimeout( timeElapsed,0 );
		game.RenderGame();
	}

	setTimeout( timeElapsed,0 );
}

//***** BBGame methods *****

BBHtml5Game.prototype.SetUpdateRate=function( updateRate ){

	BBGame.prototype.SetUpdateRate.call( this,updateRate );
	
	this.ValidateUpdateTimer();
}

BBHtml5Game.prototype.GetMetaData=function( path,key ){
	if( path.indexOf( "monkey://data/" )!=0 ) return "";
	path=path.slice(14);

	var i=META_DATA.indexOf( "["+path+"]" );
	if( i==-1 ) return "";
	i+=path.length+2;

	var e=META_DATA.indexOf( "\n",i );
	if( e==-1 ) e=META_DATA.length;

	i=META_DATA.indexOf( ";"+key+"=",i )
	if( i==-1 || i>=e ) return "";
	i+=key.length+2;

	e=META_DATA.indexOf( ";",i );
	if( e==-1 ) return "";

	return META_DATA.slice( i,e );
}

BBHtml5Game.prototype.PathToUrl=function( path ){
	if( path.indexOf( "monkey:" )!=0 ){
		return path;
	}else if( path.indexOf( "monkey://data/" )==0 ) {
		return "data/"+path.slice( 14 );
	}
	return "";
}

BBHtml5Game.prototype.GetLoading=function(){
	return this._loading;
}

BBHtml5Game.prototype.IncLoading=function(){
	++this._loading;
	return this._loading;
}

BBHtml5Game.prototype.DecLoading=function(){
	--this._loading;
	return this._loading;
}

BBHtml5Game.prototype.GetCanvas=function(){
	return this._canvas;
}

BBHtml5Game.prototype.GetWebGL=function(){
	return this._gl;
}

BBHtml5Game.prototype.GetDeviceWidth=function(){
	return this._canvas.width;
}

BBHtml5Game.prototype.GetDeviceHeight=function(){
	return this._canvas.height;
}

//***** INTERNAL *****

BBHtml5Game.prototype.UpdateGame=function(){

	if( !this._loading ) BBGame.prototype.UpdateGame.call( this );
}

BBHtml5Game.prototype.SuspendGame=function(){

	BBGame.prototype.SuspendGame.call( this );
	
	BBGame.prototype.RenderGame.call( this );
	
	this.ValidateUpdateTimer();
}

BBHtml5Game.prototype.ResumeGame=function(){

	BBGame.prototype.ResumeGame.call( this );
	
	this.ValidateUpdateTimer();
}

BBHtml5Game.prototype.Run=function(){

	var game=this;
	var canvas=game._canvas;
	
	var xscale=1;
	var yscale=1;
	
	var touchIds=new Array( 32 );
	for( i=0;i<32;++i ) touchIds[i]=-1;
	
	function eatEvent( e ){
		if( e.stopPropagation ){
			e.stopPropagation();
			e.preventDefault();
		}else{
			e.cancelBubble=true;
			e.returnValue=false;
		}
	}
	
	function keyToChar( key ){
		switch( key ){
		case 8:case 9:case 13:case 27:case 32:return key;
		case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 45:return key|0x10000;
		case 46:return 127;
		}
		return 0;
	}
	
	function mouseX( e ){
		var x=e.clientX+document.body.scrollLeft;
		var c=canvas;
		while( c ){
			x-=c.offsetLeft;
			c=c.offsetParent;
		}
		return x*xscale;
	}
	
	function mouseY( e ){
		var y=e.clientY+document.body.scrollTop;
		var c=canvas;
		while( c ){
			y-=c.offsetTop;
			c=c.offsetParent;
		}
		return y*yscale;
	}

	function touchX( touch ){
		var x=touch.pageX;
		var c=canvas;
		while( c ){
			x-=c.offsetLeft;
			c=c.offsetParent;
		}
		return x;
	}			
	
	function touchY( touch ){
		var y=touch.pageY;
		var c=canvas;
		while( c ){
			y-=c.offsetTop;
			c=c.offsetParent;
		}
		return y;
	}
	
	canvas.onkeydown=function( e ){
		game.KeyEvent( BBGameEvent.KeyDown,e.keyCode );
		var chr=keyToChar( e.keyCode );
		if( chr ) game.KeyEvent( BBGameEvent.KeyChar,chr );
		if( e.keyCode<48 || (e.keyCode>111 && e.keyCode<122) ) eatEvent( e );
	}

	canvas.onkeyup=function( e ){
		game.KeyEvent( BBGameEvent.KeyUp,e.keyCode );
	}

	canvas.onkeypress=function( e ){
		if( e.charCode ){
			game.KeyEvent( BBGameEvent.KeyChar,e.charCode );
		}else if( e.which ){
			game.KeyEvent( BBGameEvent.KeyChar,e.which );
		}
	}

	canvas.onmousedown=function( e ){
		switch( e.button ){
		case 0:game.MouseEvent( BBGameEvent.MouseDown,0,mouseX(e),mouseY(e) );break;
		case 1:game.MouseEvent( BBGameEvent.MouseDown,2,mouseX(e),mouseY(e) );break;
		case 2:game.MouseEvent( BBGameEvent.MouseDown,1,mouseX(e),mouseY(e) );break;
		}
		eatEvent( e );
	}
	
	canvas.onmouseup=function( e ){
		switch( e.button ){
		case 0:game.MouseEvent( BBGameEvent.MouseUp,0,mouseX(e),mouseY(e) );break;
		case 1:game.MouseEvent( BBGameEvent.MouseUp,2,mouseX(e),mouseY(e) );break;
		case 2:game.MouseEvent( BBGameEvent.MouseUp,1,mouseX(e),mouseY(e) );break;
		}
		eatEvent( e );
	}
	
	canvas.onmousemove=function( e ){
		game.MouseEvent( BBGameEvent.MouseMove,-1,mouseX(e),mouseY(e) );
		eatEvent( e );
	}

	canvas.onmouseout=function( e ){
		game.MouseEvent( BBGameEvent.MouseUp,0,mouseX(e),mouseY(e) );
		game.MouseEvent( BBGameEvent.MouseUp,1,mouseX(e),mouseY(e) );
		game.MouseEvent( BBGameEvent.MouseUp,2,mouseX(e),mouseY(e) );
		eatEvent( e );
	}
	
	canvas.onclick=function( e ){
		if( game.Suspended() ){
			canvas.focus();
		}
		eatEvent( e );
		return;
	}
	
	canvas.oncontextmenu=function( e ){
		return false;
	}
	
	canvas.ontouchstart=function( e ){
		if( game.Suspended() ){
			canvas.focus();
		}
		for( var i=0;i<e.changedTouches.length;++i ){
			var touch=e.changedTouches[i];
			for( var j=0;j<32;++j ){
				if( touchIds[j]!=-1 ) continue;
				touchIds[j]=touch.identifier;
				game.TouchEvent( BBGameEvent.TouchDown,j,touchX(touch),touchY(touch) );
				break;
			}
		}
		eatEvent( e );
	}
	
	canvas.ontouchmove=function( e ){
		for( var i=0;i<e.changedTouches.length;++i ){
			var touch=e.changedTouches[i];
			for( var j=0;j<32;++j ){
				if( touchIds[j]!=touch.identifier ) continue;
				game.TouchEvent( BBGameEvent.TouchMove,j,touchX(touch),touchY(touch) );
				break;
			}
		}
		eatEvent( e );
	}
	
	canvas.ontouchend=function( e ){
		for( var i=0;i<e.changedTouches.length;++i ){
			var touch=e.changedTouches[i];
			for( var j=0;j<32;++j ){
				if( touchIds[j]!=touch.identifier ) continue;
				touchIds[j]=-1;
				game.TouchEvent( BBGameEvent.TouchUp,j,touchX(touch),touchY(touch) );
				break;
			}
		}
		eatEvent( e );
	}
	
	window.ondevicemotion=function( e ){
		var tx=e.accelerationIncludingGravity.x/9.81;
		var ty=e.accelerationIncludingGravity.y/9.81;
		var tz=e.accelerationIncludingGravity.z/9.81;
		var x,y;
		switch( window.orientation ){
		case   0:x=+tx;y=-ty;break;
		case 180:x=-tx;y=+ty;break;
		case  90:x=-ty;y=-tx;break;
		case -90:x=+ty;y=+tx;break;
		}
		game.MotionEvent( BBGameEvent.MotionAccel,0,x,y,tz );
		eatEvent( e );
	}

	canvas.onfocus=function( e ){
		if( CFG_MOJO_AUTO_SUSPEND_ENABLED=="1" ){
			game.ResumeGame();
		}
	}
	
	canvas.onblur=function( e ){
		for( var i=0;i<256;++i ) game.KeyEvent( BBGameEvent.KeyUp,i );
		if( CFG_MOJO_AUTO_SUSPEND_ENABLED=="1" ){
			game.SuspendGame();
		}
	}
	
	canvas.updateSize=function(){
		xscale=canvas.width/canvas.clientWidth;
		yscale=canvas.height/canvas.clientHeight;
		game.RenderGame();
	}
	
	canvas.updateSize();
	
	canvas.focus();
	
	game.StartGame();

	game.RenderGame();
}


function BBMonkeyGame( canvas ){
	BBHtml5Game.call( this,canvas );
}

BBMonkeyGame.prototype=extend_class( BBHtml5Game );

BBMonkeyGame.Main=function( canvas ){

	var game=new BBMonkeyGame( canvas );

	try{

		bbInit();
		bbMain();

	}catch( ex ){
	
		game.Die( ex );
		return;
	}

	if( !game.Delegate() ) return;
	
	game.Run();
}


// HTML5 mojo runtime.
//
// Copyright 2011 Mark Sibly, all rights reserved.
// No warranty implied; use at your own risk.

// ***** gxtkGraphics class *****

function gxtkGraphics(){
	this.game=BBHtml5Game.Html5Game();
	this.canvas=this.game.GetCanvas()
	this.width=this.canvas.width;
	this.height=this.canvas.height;
	this.gl=null;
	this.gc=this.canvas.getContext( '2d' );
	this.tmpCanvas=null;
	this.r=255;
	this.b=255;
	this.g=255;
	this.white=true;
	this.color="rgb(255,255,255)"
	this.alpha=1;
	this.blend="source-over";
	this.ix=1;this.iy=0;
	this.jx=0;this.jy=1;
	this.tx=0;this.ty=0;
	this.tformed=false;
	this.scissorX=0;
	this.scissorY=0;
	this.scissorWidth=0;
	this.scissorHeight=0;
	this.clipped=false;
}

gxtkGraphics.prototype.BeginRender=function(){
	this.width=this.canvas.width;
	this.height=this.canvas.height;
	if( !this.gc ) return 0;
	this.gc.save();
	if( this.game.GetLoading() ) return 2;
	return 1;
}

gxtkGraphics.prototype.EndRender=function(){
	if( this.gc ) this.gc.restore();
}

gxtkGraphics.prototype.Width=function(){
	return this.width;
}

gxtkGraphics.prototype.Height=function(){
	return this.height;
}

gxtkGraphics.prototype.LoadSurface=function( path ){
	var game=this.game;

	var ty=game.GetMetaData( path,"type" );
	if( ty.indexOf( "image/" )!=0 ) return null;
	
	game.IncLoading();

	var image=new Image();
	image.onload=function(){ game.DecLoading(); }
	image.onerror=function(){ game.DecLoading(); }
	image.meta_width=parseInt( game.GetMetaData( path,"width" ) );
	image.meta_height=parseInt( game.GetMetaData( path,"height" ) );
	image.src=game.PathToUrl( path );

	return new gxtkSurface( image,this );
}

gxtkGraphics.prototype.CreateSurface=function( width,height ){
	var canvas=document.createElement( 'canvas' );
	
	canvas.width=width;
	canvas.height=height;
	canvas.meta_width=width;
	canvas.meta_height=height;
	canvas.complete=true;
	
	var surface=new gxtkSurface( canvas,this );
	
	surface.gc=canvas.getContext( '2d' );
	
	return surface;
}

gxtkGraphics.prototype.SetAlpha=function( alpha ){
	this.alpha=alpha;
	this.gc.globalAlpha=alpha;
}

gxtkGraphics.prototype.SetColor=function( r,g,b ){
	this.r=r;
	this.g=g;
	this.b=b;
	this.white=(r==255 && g==255 && b==255);
	this.color="rgb("+(r|0)+","+(g|0)+","+(b|0)+")";
	this.gc.fillStyle=this.color;
	this.gc.strokeStyle=this.color;
}

gxtkGraphics.prototype.SetBlend=function( blend ){
	switch( blend ){
	case 1:
		this.blend="lighter";
		break;
	default:
		this.blend="source-over";
	}
	this.gc.globalCompositeOperation=this.blend;
}

gxtkGraphics.prototype.SetScissor=function( x,y,w,h ){
	this.scissorX=x;
	this.scissorY=y;
	this.scissorWidth=w;
	this.scissorHeight=h;
	this.clipped=(x!=0 || y!=0 || w!=this.canvas.width || h!=this.canvas.height);
	this.gc.restore();
	this.gc.save();
	if( this.clipped ){
		this.gc.beginPath();
		this.gc.rect( x,y,w,h );
		this.gc.clip();
		this.gc.closePath();
	}
	this.gc.fillStyle=this.color;
	this.gc.strokeStyle=this.color;	
	this.gc.globalAlpha=this.alpha;	
	this.gc.globalCompositeOperation=this.blend;
	if( this.tformed ) this.gc.setTransform( this.ix,this.iy,this.jx,this.jy,this.tx,this.ty );
}

gxtkGraphics.prototype.SetMatrix=function( ix,iy,jx,jy,tx,ty ){
	this.ix=ix;this.iy=iy;
	this.jx=jx;this.jy=jy;
	this.tx=tx;this.ty=ty;
	this.gc.setTransform( ix,iy,jx,jy,tx,ty );
	this.tformed=(ix!=1 || iy!=0 || jx!=0 || jy!=1 || tx!=0 || ty!=0);
}

gxtkGraphics.prototype.Cls=function( r,g,b ){
	if( this.tformed ) this.gc.setTransform( 1,0,0,1,0,0 );
	this.gc.fillStyle="rgb("+(r|0)+","+(g|0)+","+(b|0)+")";
	this.gc.globalAlpha=1;
	this.gc.globalCompositeOperation="source-over";
	this.gc.fillRect( 0,0,this.canvas.width,this.canvas.height );
	this.gc.fillStyle=this.color;
	this.gc.globalAlpha=this.alpha;
	this.gc.globalCompositeOperation=this.blend;
	if( this.tformed ) this.gc.setTransform( this.ix,this.iy,this.jx,this.jy,this.tx,this.ty );
}

gxtkGraphics.prototype.DrawPoint=function( x,y ){
	if( this.tformed ){
		var px=x;
		x=px * this.ix + y * this.jx + this.tx;
		y=px * this.iy + y * this.jy + this.ty;
		this.gc.setTransform( 1,0,0,1,0,0 );
		this.gc.fillRect( x,y,1,1 );
		this.gc.setTransform( this.ix,this.iy,this.jx,this.jy,this.tx,this.ty );
	}else{
		this.gc.fillRect( x,y,1,1 );
	}
}

gxtkGraphics.prototype.DrawRect=function( x,y,w,h ){
	if( w<0 ){ x+=w;w=-w; }
	if( h<0 ){ y+=h;h=-h; }
	if( w<=0 || h<=0 ) return;
	//
	this.gc.fillRect( x,y,w,h );
}

gxtkGraphics.prototype.DrawLine=function( x1,y1,x2,y2 ){
	if( this.tformed ){
		var x1_t=x1 * this.ix + y1 * this.jx + this.tx;
		var y1_t=x1 * this.iy + y1 * this.jy + this.ty;
		var x2_t=x2 * this.ix + y2 * this.jx + this.tx;
		var y2_t=x2 * this.iy + y2 * this.jy + this.ty;
		this.gc.setTransform( 1,0,0,1,0,0 );
	  	this.gc.beginPath();
	  	this.gc.moveTo( x1_t,y1_t );
	  	this.gc.lineTo( x2_t,y2_t );
	  	this.gc.stroke();
	  	this.gc.closePath();
		this.gc.setTransform( this.ix,this.iy,this.jx,this.jy,this.tx,this.ty );
	}else{
	  	this.gc.beginPath();
	  	this.gc.moveTo( x1,y1 );
	  	this.gc.lineTo( x2,y2 );
	  	this.gc.stroke();
	  	this.gc.closePath();
	}
}

gxtkGraphics.prototype.DrawOval=function( x,y,w,h ){
	if( w<0 ){ x+=w;w=-w; }
	if( h<0 ){ y+=h;h=-h; }
	if( w<=0 || h<=0 ) return;
	//
  	var w2=w/2,h2=h/2;
	this.gc.save();
	this.gc.translate( x+w2,y+h2 );
	this.gc.scale( w2,h2 );
  	this.gc.beginPath();
	this.gc.arc( 0,0,1,0,Math.PI*2,false );
	this.gc.fill();
  	this.gc.closePath();
	this.gc.restore();
}

gxtkGraphics.prototype.DrawPoly=function( verts ){
	if( verts.length<2 ) return;
	this.gc.beginPath();
	this.gc.moveTo( verts[0],verts[1] );
	for( var i=2;i<verts.length;i+=2 ){
		this.gc.lineTo( verts[i],verts[i+1] );
	}
	this.gc.fill();
	this.gc.closePath();
}

gxtkGraphics.prototype.DrawPoly2=function( verts,surface,srx,srcy ){
	if( verts.length<4 ) return;
	this.gc.beginPath();
	this.gc.moveTo( verts[0],verts[1] );
	for( var i=4;i<verts.length;i+=4 ){
		this.gc.lineTo( verts[i],verts[i+1] );
	}
	this.gc.fill();
	this.gc.closePath();
}

gxtkGraphics.prototype.DrawSurface=function( surface,x,y ){
	if( !surface.image.complete ) return;
	
	if( this.white ){
		this.gc.drawImage( surface.image,x,y );
		return;
	}
	
	this.DrawImageTinted( surface.image,x,y,0,0,surface.swidth,surface.sheight );
}

gxtkGraphics.prototype.DrawSurface2=function( surface,x,y,srcx,srcy,srcw,srch ){
	if( !surface.image.complete ) return;

	if( srcw<0 ){ srcx+=srcw;srcw=-srcw; }
	if( srch<0 ){ srcy+=srch;srch=-srch; }
	if( srcw<=0 || srch<=0 ) return;

	if( this.white ){
		this.gc.drawImage( surface.image,srcx,srcy,srcw,srch,x,y,srcw,srch );
		return;
	}
	
	this.DrawImageTinted( surface.image,x,y,srcx,srcy,srcw,srch  );
}

gxtkGraphics.prototype.DrawImageTinted=function( image,dx,dy,sx,sy,sw,sh ){

	if( !this.tmpCanvas ){
		this.tmpCanvas=document.createElement( "canvas" );
	}

	if( sw>this.tmpCanvas.width || sh>this.tmpCanvas.height ){
		this.tmpCanvas.width=Math.max( sw,this.tmpCanvas.width );
		this.tmpCanvas.height=Math.max( sh,this.tmpCanvas.height );
	}
	
	var tmpGC=this.tmpCanvas.getContext( "2d" );
	tmpGC.globalCompositeOperation="copy";
	
	tmpGC.drawImage( image,sx,sy,sw,sh,0,0,sw,sh );
	
	var imgData=tmpGC.getImageData( 0,0,sw,sh );
	
	var p=imgData.data,sz=sw*sh*4,i;
	
	for( i=0;i<sz;i+=4 ){
		p[i]=p[i]*this.r/255;
		p[i+1]=p[i+1]*this.g/255;
		p[i+2]=p[i+2]*this.b/255;
	}
	
	tmpGC.putImageData( imgData,0,0 );
	
	this.gc.drawImage( this.tmpCanvas,0,0,sw,sh,dx,dy,sw,sh );
}

gxtkGraphics.prototype.ReadPixels=function( pixels,x,y,width,height,offset,pitch ){

	var imgData=this.gc.getImageData( x,y,width,height );
	
	var p=imgData.data,i=0,j=offset,px,py;
	
	for( py=0;py<height;++py ){
		for( px=0;px<width;++px ){
			pixels[j++]=(p[i+3]<<24)|(p[i]<<16)|(p[i+1]<<8)|p[i+2];
			i+=4;
		}
		j+=pitch-width;
	}
}

gxtkGraphics.prototype.WritePixels2=function( surface,pixels,x,y,width,height,offset,pitch ){

	if( !surface.gc ){
		if( !surface.image.complete ) return;
		var canvas=document.createElement( "canvas" );
		canvas.width=surface.swidth;
		canvas.height=surface.sheight;
		surface.gc=canvas.getContext( "2d" );
		surface.gc.globalCompositeOperation="copy";
		surface.gc.drawImage( surface.image,0,0 );
		surface.image=canvas;
	}

	var imgData=surface.gc.createImageData( width,height );

	var p=imgData.data,i=0,j=offset,px,py,argb;
	
	for( py=0;py<height;++py ){
		for( px=0;px<width;++px ){
			argb=pixels[j++];
			p[i]=(argb>>16) & 0xff;
			p[i+1]=(argb>>8) & 0xff;
			p[i+2]=argb & 0xff;
			p[i+3]=(argb>>24) & 0xff;
			i+=4;
		}
		j+=pitch-width;
	}
	
	surface.gc.putImageData( imgData,x,y );
}

// ***** gxtkSurface class *****

function gxtkSurface( image,graphics ){
	this.image=image;
	this.graphics=graphics;
	this.swidth=image.meta_width;
	this.sheight=image.meta_height;
}

// ***** GXTK API *****

gxtkSurface.prototype.Discard=function(){
	if( this.image ){
		this.image=null;
	}
}

gxtkSurface.prototype.Width=function(){
	return this.swidth;
}

gxtkSurface.prototype.Height=function(){
	return this.sheight;
}

gxtkSurface.prototype.Loaded=function(){
	return this.image.complete;
}

gxtkSurface.prototype.OnUnsafeLoadComplete=function(){
}

if( CFG_HTML5_WEBAUDIO_ENABLED=="1" && (window.AudioContext || window.webkitAudioContext) ){

//print( "Using WebAudio!" );

// ***** WebAudio *****

var wa=null;

// ***** WebAudio gxtkSample *****

var gxtkSample=function(){
	this.waBuffer=null;
	this.state=0;
}

gxtkSample.prototype.Load=function( path ){
	if( this.state ) return false;

	var req=new XMLHttpRequest();
	
	req.open( "get",BBGame.Game().PathToUrl( path ),true );
	req.responseType="arraybuffer";
	
	var abuf=this;
	
	req.onload=function(){
		wa.decodeAudioData( req.response,function( buffer ){
			//success!
			abuf.waBuffer=buffer;
			abuf.state=1;
		},function(){
			abuf.state=-1;
		} );
	}
	
	req.onerror=function(){
		abuf.state=-1;
	}
	
	req.send();
	
	this.state=2;
			
	return true;
}

gxtkSample.prototype.Discard=function(){
}

// ***** WebAudio gxtkChannel *****

var gxtkChannel=function(){
	this.buffer=null;
	this.flags=0;
	this.volume=1;
	this.pan=0;
	this.rate=1;
	this.waSource=null;
	this.waPan=wa.create
	this.waGain=wa.createGain();
	this.waGain.connect( wa.destination );
	this.waPanner=wa.createPanner();
	this.waPanner.rolloffFactor=0;
	this.waPanner.connect( this.waGain );
	this.startTime=0;
	this.offset=0;
	this.state=0;
}

// ***** WebAudio gxtkAudio *****

var gxtkAudio=function(){

	if( !wa ){
		window.AudioContext=window.AudioContext || window.webkitAudioContext;
		wa=new AudioContext();
	}
	
	this.okay=true;
	this.music=null;
	this.musicState=0;
	this.musicVolume=1;
	this.channels=new Array();
	for( var i=0;i<32;++i ){
		this.channels[i]=new gxtkChannel();
	}
}

gxtkAudio.prototype.Suspend=function(){
	if( this.MusicState()==1 ) this.music.pause();
	for( var i=0;i<32;++i ){
		var chan=this.channels[i];
		if( chan.state!=1 ) continue;
		this.PauseChannel( i );
		chan.state=5;
	}
}

gxtkAudio.prototype.Resume=function(){
	if( this.MusicState()==1 ) this.music.play();
	for( var i=0;i<32;++i ){
		var chan=this.channels[i];
		if( chan.state!=5 ) continue;
		chan.state=2;
		this.ResumeChannel( i );
	}
}

gxtkAudio.prototype.LoadSample=function( path ){

	var sample=new gxtkSample();
	if( !sample.Load( BBHtml5Game.Html5Game().PathToUrl( path ) ) ) return null;
	
	return sample;
}

gxtkAudio.prototype.PlaySample=function( buffer,channel,flags ){

	if( buffer.state!=1 ) return;

	var chan=this.channels[channel];
	
	if( chan.state ){
		chan.waSource.onended=null
		chan.waSource.stop( 0 );
	}
	
	chan.buffer=buffer;
	chan.flags=flags;

	chan.waSource=wa.createBufferSource();
	chan.waSource.buffer=buffer.waBuffer;
	chan.waSource.playbackRate.value=chan.rate;
	chan.waSource.loop=(flags&1)!=0;
	chan.waSource.connect( chan.waPanner );
	
	chan.waSource.onended=function( e ){
		chan.waSource=null;
		chan.state=0;
	}

	chan.offset=0;	
	chan.startTime=wa.currentTime;
	chan.waSource.start( 0 );

	chan.state=1;
}

gxtkAudio.prototype.StopChannel=function( channel ){

	var chan=this.channels[channel];
	if( !chan.state ) return;
	
	if( chan.state==1 ){
		chan.waSource.onended=null;
		chan.waSource.stop( 0 );
		chan.waSource=null;
	}

	chan.state=0;
}

gxtkAudio.prototype.PauseChannel=function( channel ){

	var chan=this.channels[channel];
	if( chan.state!=1 ) return;
	
	chan.offset=(chan.offset+(wa.currentTime-chan.startTime)*chan.rate)%chan.buffer.waBuffer.duration;
	
	chan.waSource.onended=null;
	chan.waSource.stop( 0 );
	chan.waSource=null;
	
	chan.state=2;
}

gxtkAudio.prototype.ResumeChannel=function( channel ){

	var chan=this.channels[channel];
	if( chan.state!=2 ) return;
	
	chan.waSource=wa.createBufferSource();
	chan.waSource.buffer=chan.buffer.waBuffer;
	chan.waSource.playbackRate.value=chan.rate;
	chan.waSource.loop=(chan.flags&1)!=0;
	chan.waSource.connect( chan.waPanner );
	
	chan.waSource.onended=function( e ){
		chan.waSource=null;
		chan.state=0;
	}
	
	chan.startTime=wa.currentTime;
	chan.waSource.start( 0,chan.offset );

	chan.state=1;
}

gxtkAudio.prototype.ChannelState=function( channel ){
	return this.channels[channel].state & 3;
}

gxtkAudio.prototype.SetVolume=function( channel,volume ){
	var chan=this.channels[channel];

	chan.volume=volume;
	
	chan.waGain.gain.value=volume;
}

gxtkAudio.prototype.SetPan=function( channel,pan ){
	var chan=this.channels[channel];

	chan.pan=pan;
	
	var sin=Math.sin( pan*3.14159265359/2 );
	var cos=Math.cos( pan*3.14159265359/2 );
	
	chan.waPanner.setPosition( sin,0,-cos );
}

gxtkAudio.prototype.SetRate=function( channel,rate ){

	var chan=this.channels[channel];

	if( chan.state==1 ){
		//update offset for pause/resume
		var time=wa.currentTime;
		chan.offset=(chan.offset+(time-chan.startTime)*chan.rate)%chan.buffer.waBuffer.duration;
		chan.startTime=time;
	}

	chan.rate=rate;
	
	if( chan.waSource ) chan.waSource.playbackRate.value=rate;
}

gxtkAudio.prototype.PlayMusic=function( path,flags ){
	if( this.musicState ) this.music.pause();
	this.music=new Audio( BBGame.Game().PathToUrl( path ) );
	this.music.loop=(flags&1)!=0;
	this.music.play();
	this.musicState=1;
}

gxtkAudio.prototype.StopMusic=function(){
	if( !this.musicState ) return;
	this.music.pause();
	this.music=null;
	this.musicState=0;
}

gxtkAudio.prototype.PauseMusic=function(){
	if( this.musicState!=1 ) return;
	this.music.pause();
	this.musicState=2;
}

gxtkAudio.prototype.ResumeMusic=function(){
	if( this.musicState!=2 ) return;
	this.music.play();
	this.musicState=1;
}

gxtkAudio.prototype.MusicState=function(){
	if( this.musicState==1 && this.music.ended && !this.music.loop ){
		this.music=null;
		this.musicState=0;
	}
	return this.musicState;
}

gxtkAudio.prototype.SetMusicVolume=function( volume ){
	this.musicVolume=volume;
	if( this.musicState ) this.music.volume=volume;
}

}else{

//print( "Using OldAudio!" );

// ***** gxtkChannel class *****

var gxtkChannel=function(){
	this.sample=null;
	this.audio=null;
	this.volume=1;
	this.pan=0;
	this.rate=1;
	this.flags=0;
	this.state=0;
}

// ***** gxtkAudio class *****

var gxtkAudio=function(){
	this.game=BBHtml5Game.Html5Game();
	this.okay=typeof(Audio)!="undefined";
	this.music=null;
	this.channels=new Array(33);
	for( var i=0;i<33;++i ){
		this.channels[i]=new gxtkChannel();
		if( !this.okay ) this.channels[i].state=-1;
	}
}

gxtkAudio.prototype.Suspend=function(){
	var i;
	for( i=0;i<33;++i ){
		var chan=this.channels[i];
		if( chan.state==1 ){
			if( chan.audio.ended && !chan.audio.loop ){
				chan.state=0;
			}else{
				chan.audio.pause();
				chan.state=3;
			}
		}
	}
}

gxtkAudio.prototype.Resume=function(){
	var i;
	for( i=0;i<33;++i ){
		var chan=this.channels[i];
		if( chan.state==3 ){
			chan.audio.play();
			chan.state=1;
		}
	}
}

gxtkAudio.prototype.LoadSample=function( path ){
	if( !this.okay ) return null;

	var audio=new Audio( this.game.PathToUrl( path ) );
	if( !audio ) return null;
	
	return new gxtkSample( audio );
}

gxtkAudio.prototype.PlaySample=function( sample,channel,flags ){
	if( !this.okay ) return;
	
	var chan=this.channels[channel];

	if( chan.state>0 ){
		chan.audio.pause();
		chan.state=0;
	}
	
	for( var i=0;i<33;++i ){
		var chan2=this.channels[i];
		if( chan2.state==1 && chan2.audio.ended && !chan2.audio.loop ) chan.state=0;
		if( chan2.state==0 && chan2.sample ){
			chan2.sample.FreeAudio( chan2.audio );
			chan2.sample=null;
			chan2.audio=null;
		}
	}

	var audio=sample.AllocAudio();
	if( !audio ) return;

	audio.loop=(flags&1)!=0;
	audio.volume=chan.volume;
	audio.play();

	chan.sample=sample;
	chan.audio=audio;
	chan.flags=flags;
	chan.state=1;
}

gxtkAudio.prototype.StopChannel=function( channel ){
	var chan=this.channels[channel];
	
	if( chan.state>0 ){
		chan.audio.pause();
		chan.state=0;
	}
}

gxtkAudio.prototype.PauseChannel=function( channel ){
	var chan=this.channels[channel];
	
	if( chan.state==1 ){
		if( chan.audio.ended && !chan.audio.loop ){
			chan.state=0;
		}else{
			chan.audio.pause();
			chan.state=2;
		}
	}
}

gxtkAudio.prototype.ResumeChannel=function( channel ){
	var chan=this.channels[channel];
	
	if( chan.state==2 ){
		chan.audio.play();
		chan.state=1;
	}
}

gxtkAudio.prototype.ChannelState=function( channel ){
	var chan=this.channels[channel];
	if( chan.state==1 && chan.audio.ended && !chan.audio.loop ) chan.state=0;
	if( chan.state==3 ) return 1;
	return chan.state;
}

gxtkAudio.prototype.SetVolume=function( channel,volume ){
	var chan=this.channels[channel];
	if( chan.state>0 ) chan.audio.volume=volume;
	chan.volume=volume;
}

gxtkAudio.prototype.SetPan=function( channel,pan ){
	var chan=this.channels[channel];
	chan.pan=pan;
}

gxtkAudio.prototype.SetRate=function( channel,rate ){
	var chan=this.channels[channel];
	chan.rate=rate;
}

gxtkAudio.prototype.PlayMusic=function( path,flags ){
	this.StopMusic();
	
	this.music=this.LoadSample( path );
	if( !this.music ) return;
	
	this.PlaySample( this.music,32,flags );
}

gxtkAudio.prototype.StopMusic=function(){
	this.StopChannel( 32 );

	if( this.music ){
		this.music.Discard();
		this.music=null;
	}
}

gxtkAudio.prototype.PauseMusic=function(){
	this.PauseChannel( 32 );
}

gxtkAudio.prototype.ResumeMusic=function(){
	this.ResumeChannel( 32 );
}

gxtkAudio.prototype.MusicState=function(){
	return this.ChannelState( 32 );
}

gxtkAudio.prototype.SetMusicVolume=function( volume ){
	this.SetVolume( 32,volume );
}

// ***** gxtkSample class *****

//function gxtkSample( audio ){
var gxtkSample=function( audio ){
	this.audio=audio;
	this.free=new Array();
	this.insts=new Array();
}

gxtkSample.prototype.FreeAudio=function( audio ){
	this.free.push( audio );
}

gxtkSample.prototype.AllocAudio=function(){
	var audio;
	while( this.free.length ){
		audio=this.free.pop();
		try{
			audio.currentTime=0;
			return audio;
		}catch( ex ){
//			print( "AUDIO ERROR1!" );
		}
	}
	
	//Max out?
	if( this.insts.length==8 ) return null;
	
	audio=new Audio( this.audio.src );
	
	//yucky loop handler for firefox!
	//
	audio.addEventListener( 'ended',function(){
		if( this.loop ){
			try{
				this.currentTime=0;
				this.play();
			}catch( ex ){
//				print( "AUDIO ERROR2!" );
			}
		}
	},false );

	this.insts.push( audio );
	return audio;
}

gxtkSample.prototype.Discard=function(){
}

}


function BBThread(){
	this.result=null;
	this.running=false;
}

BBThread.prototype.Start=function(){
	this.result=null;
	this.running=true;
	this.Run__UNSAFE__();
}

BBThread.prototype.IsRunning=function(){
	return this.running;
}

BBThread.prototype.Result=function(){
	return this.result;
}

BBThread.prototype.Run__UNSAFE__=function(){
	this.running=false;
}


function BBAsyncImageLoaderThread(){
	this._running=false;
}

BBAsyncImageLoaderThread.prototype.Start=function(){

	var thread=this;

	thread._surface=null;
	thread._result=false;
	thread._running=true;

	var image=new Image();

	image.onload=function( e ){
		image.meta_width=image.width;
		image.meta_height=image.height;
		thread._surface=new gxtkSurface( image,thread._device )
		thread._result=true;
		thread._running=false;
	}
	
	image.onerror=function( e ){
		thread._running=false;
	}
	
	image.src=BBGame.Game().PathToUrl( thread._path );
}

BBAsyncImageLoaderThread.prototype.IsRunning=function(){
	return this._running;
}



function BBAsyncSoundLoaderThread(){
	this._running=false;
}
  
if( CFG_HTML5_WEBAUDIO_ENABLED=="1" && (window.AudioContext || window.webkitAudioContext) ){

BBAsyncSoundLoaderThread.prototype.Start=function(){

	this._sample=null;
	if( !this._device.okay ) return;
	
	var thread=this;
	
	thread._sample=null;
	thread._result=false;
	thread._running=true;

	var req=new XMLHttpRequest();
	req.open( "get",BBGame.Game().PathToUrl( this._path ),true );
	req.responseType="arraybuffer";
	
	req.onload=function(){
		//load success!
		wa.decodeAudioData( req.response,function( buffer ){
			//decode success!
			thread._sample=new gxtkSample();
			thread._sample.waBuffer=buffer;
			thread._sample.state=1;
			thread._result=true;
			thread._running=false;
		},function(){	
			//decode fail!
			thread._running=false;
		} );
	}
	
	req.onerror=function(){
		//load fail!
		thread._running=false;
	}
	
	req.send();
}
	
}else{
 
BBAsyncSoundLoaderThread.prototype.Start=function(){

	this._sample=null;
	if( !this._device.okay ) return;
	
	var audio=new Audio();
	if( !audio ) return;
	
	var thread=this;
	
	thread._sample=null;
	thread._result=false;
	thread._running=true;

	audio.src=BBGame.Game().PathToUrl( this._path );
	audio.preload='auto';	
	
	var success=function( e ){
		thread._sample=new gxtkSample( audio );
		thread._result=true;
		thread._running=false;
		audio.removeEventListener( 'canplaythrough',success,false );
		audio.removeEventListener( 'error',error,false );
	}
	
	var error=function( e ){
		thread._running=false;
		audio.removeEventListener( 'canplaythrough',success,false );
		audio.removeEventListener( 'error',error,false );
	}
	
	audio.addEventListener( 'canplaythrough',success,false );
	audio.addEventListener( 'error',error,false );
	
	//voodoo fix for Chrome!
	var timer=setInterval( function(){ if( !thread._running ) clearInterval( timer ); },200 );
	
	audio.load();
}

}
  
BBAsyncSoundLoaderThread.prototype.IsRunning=function(){
	return this._running;
}

function c_App(){
	Object.call(this);
}
c_App.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<152>";
	if((bb_app__app)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<152>";
		error("App has already been created");
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<153>";
	bb_app__app=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<154>";
	bb_app__delegate=c_GameDelegate.m_new.call(new c_GameDelegate);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<155>";
	bb_app__game.SetDelegate(bb_app__delegate);
	pop_err();
	return this;
}
c_App.prototype.p_OnResize=function(){
	push_err();
	pop_err();
	return 0;
}
c_App.prototype.p_OnCreate=function(){
	push_err();
	pop_err();
	return 0;
}
c_App.prototype.p_OnSuspend=function(){
	push_err();
	pop_err();
	return 0;
}
c_App.prototype.p_OnResume=function(){
	push_err();
	pop_err();
	return 0;
}
c_App.prototype.p_OnUpdate=function(){
	push_err();
	pop_err();
	return 0;
}
c_App.prototype.p_OnLoading=function(){
	push_err();
	pop_err();
	return 0;
}
c_App.prototype.p_OnRender=function(){
	push_err();
	pop_err();
	return 0;
}
c_App.prototype.p_OnClose=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<177>";
	bb_app_EndApp();
	pop_err();
	return 0;
}
c_App.prototype.p_OnBack=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<181>";
	this.p_OnClose();
	pop_err();
	return 0;
}
function c_MainClass(){
	c_App.call(this);
}
c_MainClass.prototype=extend_class(c_App);
c_MainClass.m_new=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<13>";
	c_App.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<15>";
	c_L.m_InitWQ();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<16>";
	bb_engine_game=(c_NinjaQuest.m_new.call(new c_NinjaQuest));
	pop_err();
	return this;
}
c_MainClass.prototype.p_UpdateScale=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<172>";
	if(bb_gui_lWidth==bb_app_DeviceWidth()){
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<174>";
	bb_gui_g_x_offset=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<176>";
	if(bb_app_DeviceWidth()>bb_app_DeviceHeight()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<177>";
		bb_gui_g_scale=(bb_app_DeviceHeight())/bb_engine_vScnHeight;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<178>";
		bb_gui_g_x_offset=((((bb_app_DeviceWidth())/bb_gui_g_scale-160.0)/2.0)|0);
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<180>";
		bb_gui_g_scale=(bb_app_DeviceWidth())/bb_engine_vScnWidth;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<185>";
	if(bb_app_DeviceHeight()>bb_app_DeviceWidth() && bb_app_DeviceHeight()-bb_app_DeviceWidth()>63 && c_NInput.m_V_A==null){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<186>";
		c_NInput.m_CreateVirtualControls(0);
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<188>";
		c_NInput.m_UpdateVirtualControls();
	}
	pop_err();
}
c_MainClass.prototype.p_LoadImages=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<20>";
	bb_engine_NLog("Loading Images...",0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<21>";
	bb_graphics_SetFont(bb_graphics_LoadImage("nin_font_thick.png",96,c_Image.m_DefaultFlags),32);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<23>";
	bb_engine_imageMap.p_Add2("window_1",bb_graphics_LoadImage2("window_4_9.png",4,4,9,c_Image.m_DefaultFlags));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<24>";
	bb_engine_imageMap.p_Add2("window_2",bb_graphics_LoadImage2("window2_4_9.png",4,4,9,c_Image.m_DefaultFlags));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<25>";
	bb_engine_imageMap.p_Add2("window_3",bb_graphics_LoadImage2("window3_4_9.png",4,4,9,c_Image.m_DefaultFlags));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<27>";
	bb_engine_soundMap.p_Add3("Blip1",bb_audio_LoadSound("Blip_Select1.wav"));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<28>";
	bb_engine_soundMap.p_Add3("Blip2",bb_audio_LoadSound("Blip_Select2.wav"));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<29>";
	bb_engine_soundMap.p_Add3("Hit",bb_audio_LoadSound("Explosion2.wav"));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<30>";
	bb_engine_soundMap.p_Add3("Powup",bb_audio_LoadSound("Powerup4.wav"));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<32>";
	c_GWindowDrawer.m_Set((bb_engine_imageMap),bb_engine_window_style);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<33>";
	c_GHealthDrawer.m_Init2("window_2_3.png",2,2,3);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<35>";
	bb_engine_imageMap.p_Add2("ninja",bb_graphics_LoadImage2("ninja.png",24,20,3,c_Image.m_DefaultFlags));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<36>";
	bb_engine_imageMap.p_Add2("wizard",bb_graphics_LoadImage2("wizard.png",24,20,3,c_Image.m_DefaultFlags));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<37>";
	bb_engine_imageMap.p_Add2("archer",bb_graphics_LoadImage2("archer.png",24,20,6,c_Image.m_DefaultFlags));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<38>";
	bb_engine_imageMap.p_Add2("magi",bb_graphics_LoadImage2("magi.png",24,20,3,c_Image.m_DefaultFlags));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<39>";
	bb_engine_imageMap.p_Add2("warrior",bb_graphics_LoadImage2("Warrior.png",24,20,3,c_Image.m_DefaultFlags));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<41>";
	bb_engine_imageMap.p_Add2("monsters",bb_graphics_LoadImage2("monsters_24x20_24.png",24,20,24,c_Image.m_DefaultFlags));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<43>";
	bb_engine_imageMap.p_Add2("blast",bb_graphics_LoadImage2("blast_16_5.png",16,16,5,c_Image.m_DefaultFlags));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<44>";
	bb_engine_imageMap.p_Add2("slash",bb_graphics_LoadImage2("slash_16_5.png",16,16,5,c_Image.m_DefaultFlags));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<46>";
	bb_engine_imageMap.p_Add2("tilemap",bb_graphics_LoadImage2("tile_map.png",16,16,128,c_Image.m_DefaultFlags));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<47>";
	bb_engine_imageMap.p_Add2("charmap",bb_graphics_LoadImage2("char_map.png",16,16,128,c_Image.m_DefaultFlags));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<49>";
	bb_engine_imageMap.p_Add2("map",bb_graphics_LoadImage("wizard_map.png",1,c_Image.m_DefaultFlags));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<50>";
	bb_engine_imageMap.p_Add2("map_selector",bb_graphics_LoadImage("map_select.png",1,c_Image.m_DefaultFlags));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<52>";
	bb_engine_imageMap.p_Add2("title",bb_graphics_LoadImage("title.png",1,c_Image.m_DefaultFlags));
	pop_err();
}
c_MainClass.prototype.p_OnCreate=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<62>";
	bb_app_SetUpdateRate(20);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<64>";
	this.p_UpdateScale();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<65>";
	bb_engine_NLog(bb_app_LoadState(),0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<66>";
	bb_engine_NLog("Start:::",0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<68>";
	bb_saveandload_LoadSettings(bb_app_LoadState());
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<70>";
	this.p_LoadImages();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<72>";
	bb_engine_titleScreen=(c_SMainMenu.m_new.call(new c_SMainMenu));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<73>";
	bb_engine_combatScreen=(c_SCombat.m_new.call(new c_SCombat));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<74>";
	bb_engine_characterScreen=(c_SCharacter.m_new.call(new c_SCharacter));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<75>";
	bb_engine_townMapScreen=(c_SMap.m_new.call(new c_SMap,dbg_object(bb_engine_game).m_worldMapName));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<76>";
	bb_engine_chatScreen=(c_SConversation.m_new.call(new c_SConversation));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<78>";
	bb_random_Seed=bb_app_Millisecs();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<80>";
	bb_engine_game.p_OnCreate();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<82>";
	pop_err();
	return 0;
}
c_MainClass.prototype.p_OnLoading=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<86>";
	bb_graphics_Cls(27.0,41.0,23.0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<87>";
	pop_err();
	return 0;
}
c_MainClass.prototype.p_OnRender=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<91>";
	bb_graphics_Scale(bb_gui_g_scale,bb_gui_g_scale);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<92>";
	c_GClearScreen.m_ClearScreen();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<94>";
	bb_graphics_PushMatrix();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<96>";
	bb_graphics_Translate((bb_gui_g_x_offset),0.0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<97>";
	bb_graphics_SetBlend(0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<99>";
	if(bb_engine_currentScreen!=null && !bb_engine_hasGoneNuclear){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<100>";
		bb_engine_currentScreen.p_OnRender();
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<102>";
		if(bb_engine_hasGoneNuclear){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<103>";
			bb_gui_GDrawTextPreserveBlend("[FATAL ERROR]",2,2);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<104>";
			bb_gui_GDrawTextPreserveBlend(bb_engine_nukeMessage,2,10);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<105>";
			if(bb_engine_nukeMessage.length>26){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<105>";
				bb_gui_GDrawTextPreserveBlend(bb_engine_nukeMessage.slice(26),2,18);
			}
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<106>";
			if(bb_engine_nukeMessage.length>52){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<106>";
				bb_gui_GDrawTextPreserveBlend(bb_engine_nukeMessage.slice(52),2,26);
			}
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<107>";
			if(bb_engine_nukeMessage.length>78){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<107>";
				bb_gui_GDrawTextPreserveBlend(bb_engine_nukeMessage.slice(78),2,34);
			}
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<108>";
			if(bb_engine_nukeMessage.length>104){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<108>";
				bb_gui_GDrawTextPreserveBlend(bb_engine_nukeMessage.slice(104),2,42);
			}
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<110>";
			bb_gui_GDrawTextPreserveBlend("No Screen Set",2,2);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<112>";
			bb_gui_GDrawTextPreserveBlend("*PRESS START",2,32);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<113>";
			bb_gui_GDrawTextPreserveBlend(" TO BATTLE AGAIN*",2,40);
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<116>";
		bb_gui_GDrawTextPreserveBlend("DW "+String(bb_app_DeviceWidth()),2,64);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<117>";
		bb_gui_GDrawTextPreserveBlend("GW "+String(160.0*bb_gui_g_scale),2,72);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<118>";
		bb_gui_GDrawTextPreserveBlend("LW "+String(bb_gui_lWidth),2,80);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<124>";
	c_NInput.m_Draw();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<126>";
	bb_graphics_PopMatrix();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<128>";
	bb_graphics_SetColor(0.0,0.0,0.0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<129>";
	bb_graphics_DrawRect(0.0,0.0,(bb_gui_g_x_offset),144.0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<130>";
	bb_graphics_DrawRect((bb_app_DeviceWidth())/bb_gui_g_scale-(bb_gui_g_x_offset),0.0,(bb_gui_g_x_offset),144.0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<132>";
	pop_err();
	return 0;
}
c_MainClass.prototype.p_OnUpdate=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<136>";
	this.p_UpdateScale();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<137>";
	c_NInput.m_Update();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<138>";
	if(bb_engine_currentScreen!=null){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<139>";
		bb_engine_currentScreen.p_OnUpdate();
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<145>";
		if(c_NInput.m_IsHit(5)){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<145>";
			bb_gui_lWidth=0;
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<148>";
	if((bb_input_KeyHit(114))!=0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<149>";
		if(bb_engine_currentScreen!=null){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<150>";
			bb_engine_currentScreen=null;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<152>";
			bb_app_SaveState("");
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<153>";
			bb_engine_NLog("Save State cleared",0);
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<156>";
	pop_err();
	return 0;
}
c_MainClass.prototype.p_OnSuspend=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<163>";
	pop_err();
	return 0;
}
c_MainClass.prototype.p_OnResume=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<168>";
	pop_err();
	return 0;
}
var bb_app__app=null;
function c_GameDelegate(){
	BBGameDelegate.call(this);
	this.m__graphics=null;
	this.m__audio=null;
	this.m__input=null;
}
c_GameDelegate.prototype=extend_class(BBGameDelegate);
c_GameDelegate.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<65>";
	pop_err();
	return this;
}
c_GameDelegate.prototype.StartGame=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<75>";
	this.m__graphics=(new gxtkGraphics);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<76>";
	bb_graphics_SetGraphicsDevice(this.m__graphics);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<77>";
	bb_graphics_SetFont(null,32);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<79>";
	this.m__audio=(new gxtkAudio);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<80>";
	bb_audio_SetAudioDevice(this.m__audio);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<82>";
	this.m__input=c_InputDevice.m_new.call(new c_InputDevice);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<83>";
	bb_input_SetInputDevice(this.m__input);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<85>";
	bb_app_ValidateDeviceWindow(false);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<87>";
	bb_app_EnumDisplayModes();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<89>";
	bb_app__app.p_OnCreate();
	pop_err();
}
c_GameDelegate.prototype.SuspendGame=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<93>";
	bb_app__app.p_OnSuspend();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<94>";
	this.m__audio.Suspend();
	pop_err();
}
c_GameDelegate.prototype.ResumeGame=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<98>";
	this.m__audio.Resume();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<99>";
	bb_app__app.p_OnResume();
	pop_err();
}
c_GameDelegate.prototype.UpdateGame=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<103>";
	bb_app_ValidateDeviceWindow(true);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<104>";
	this.m__input.p_BeginUpdate();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<105>";
	bb_app__app.p_OnUpdate();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<106>";
	this.m__input.p_EndUpdate();
	pop_err();
}
c_GameDelegate.prototype.RenderGame=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<110>";
	bb_app_ValidateDeviceWindow(true);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<111>";
	var t_mode=this.m__graphics.BeginRender();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<112>";
	if((t_mode)!=0){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<112>";
		bb_graphics_BeginRender();
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<113>";
	if(t_mode==2){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<113>";
		bb_app__app.p_OnLoading();
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<113>";
		bb_app__app.p_OnRender();
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<114>";
	if((t_mode)!=0){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<114>";
		bb_graphics_EndRender();
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<115>";
	this.m__graphics.EndRender();
	pop_err();
}
c_GameDelegate.prototype.KeyEvent=function(t_event,t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<119>";
	this.m__input.p_KeyEvent(t_event,t_data);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<120>";
	if(t_event!=1){
		pop_err();
		return;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<121>";
	var t_1=t_data;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<122>";
	if(t_1==432){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<123>";
		bb_app__app.p_OnClose();
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<124>";
		if(t_1==416){
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<125>";
			bb_app__app.p_OnBack();
		}
	}
	pop_err();
}
c_GameDelegate.prototype.MouseEvent=function(t_event,t_data,t_x,t_y){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<130>";
	this.m__input.p_MouseEvent(t_event,t_data,t_x,t_y);
	pop_err();
}
c_GameDelegate.prototype.TouchEvent=function(t_event,t_data,t_x,t_y){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<134>";
	this.m__input.p_TouchEvent(t_event,t_data,t_x,t_y);
	pop_err();
}
c_GameDelegate.prototype.MotionEvent=function(t_event,t_data,t_x,t_y,t_z){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<138>";
	this.m__input.p_MotionEvent(t_event,t_data,t_x,t_y,t_z);
	pop_err();
}
c_GameDelegate.prototype.DiscardGraphics=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<142>";
	this.m__graphics.DiscardGraphics();
	pop_err();
}
var bb_app__delegate=null;
var bb_app__game=null;
function c_L(){
	Object.call(this);
}
c_L.m___map=null;
c_L.m_InitWQ=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/lang.monkey<14>";
	c_L.m___map.p_Set("skilldesc_fire","Fire damage Enemy");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/lang.monkey<15>";
	c_L.m___map.p_Set("skilldesc_ensnare","Lowers Enemy Evasion");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/lang.monkey<16>";
	c_L.m___map.p_Set("skilldesc_smoke","Raises Ally Evasion");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/lang.monkey<17>";
	c_L.m___map.p_Set("skilldesc_ice","Ice damage Enemy");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/lang.monkey<18>";
	c_L.m___map.p_Set("skilldesc_terror","Lowers Enemy Luck");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/lang.monkey<19>";
	c_L.m___map.p_Set("skilldesc_boost","Raises Ally Str");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/lang.monkey<20>";
	c_L.m___map.p_Set("skilldesc_aero","Aero damage Enemy");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/lang.monkey<21>";
	c_L.m___map.p_Set("skilldesc_cure","Cures Ally debuffs");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/lang.monkey<22>";
	c_L.m___map.p_Set("skilldesc_poison","Lowers Enemy Str");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/lang.monkey<23>";
	c_L.m___map.p_Set("skilldesc_rock","Rock damage Enemy");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/lang.monkey<24>";
	c_L.m___map.p_Set("skilldesc_heal","Heals Ally HP");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/lang.monkey<25>";
	c_L.m___map.p_Set("skilldesc_focus","Raises Ally Luck");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/lang.monkey<26>";
	c_L.m___map.p_Set("skilldesc_slash","Attack all Enemies");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/lang.monkey<27>";
	c_L.m___map.p_Set("skilldesc_","");
	pop_err();
}
c_L.m_Get=function(t_k){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/lang.monkey<7>";
	if(c_L.m___map.p_Contains(t_k)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/lang.monkey<7>";
		var t_=c_L.m___map.p_Get(t_k);
		pop_err();
		return t_;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/lang.monkey<8>";
	var t_2="'"+t_k+"' STRING NOT FOUND";
	pop_err();
	return t_2;
}
function c_Map(){
	Object.call(this);
	this.m_root=null;
}
c_Map.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<7>";
	pop_err();
	return this;
}
c_Map.prototype.p_Compare=function(t_lhs,t_rhs){
}
c_Map.prototype.p_RotateLeft=function(t_node){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<251>";
	var t_child=dbg_object(t_node).m_right;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<252>";
	dbg_object(t_node).m_right=dbg_object(t_child).m_left;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<253>";
	if((dbg_object(t_child).m_left)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<254>";
		dbg_object(dbg_object(t_child).m_left).m_parent=t_node;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<256>";
	dbg_object(t_child).m_parent=dbg_object(t_node).m_parent;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<257>";
	if((dbg_object(t_node).m_parent)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<258>";
		if(t_node==dbg_object(dbg_object(t_node).m_parent).m_left){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<259>";
			dbg_object(dbg_object(t_node).m_parent).m_left=t_child;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<261>";
			dbg_object(dbg_object(t_node).m_parent).m_right=t_child;
		}
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<264>";
		this.m_root=t_child;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<266>";
	dbg_object(t_child).m_left=t_node;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<267>";
	dbg_object(t_node).m_parent=t_child;
	pop_err();
	return 0;
}
c_Map.prototype.p_RotateRight=function(t_node){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<271>";
	var t_child=dbg_object(t_node).m_left;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<272>";
	dbg_object(t_node).m_left=dbg_object(t_child).m_right;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<273>";
	if((dbg_object(t_child).m_right)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<274>";
		dbg_object(dbg_object(t_child).m_right).m_parent=t_node;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<276>";
	dbg_object(t_child).m_parent=dbg_object(t_node).m_parent;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<277>";
	if((dbg_object(t_node).m_parent)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<278>";
		if(t_node==dbg_object(dbg_object(t_node).m_parent).m_right){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<279>";
			dbg_object(dbg_object(t_node).m_parent).m_right=t_child;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<281>";
			dbg_object(dbg_object(t_node).m_parent).m_left=t_child;
		}
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<284>";
		this.m_root=t_child;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<286>";
	dbg_object(t_child).m_right=t_node;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<287>";
	dbg_object(t_node).m_parent=t_child;
	pop_err();
	return 0;
}
c_Map.prototype.p_InsertFixup=function(t_node){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<212>";
	while(((dbg_object(t_node).m_parent)!=null) && dbg_object(dbg_object(t_node).m_parent).m_color==-1 && ((dbg_object(dbg_object(t_node).m_parent).m_parent)!=null)){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<213>";
		if(dbg_object(t_node).m_parent==dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_left){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<214>";
			var t_uncle=dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_right;
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<215>";
			if(((t_uncle)!=null) && dbg_object(t_uncle).m_color==-1){
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<216>";
				dbg_object(dbg_object(t_node).m_parent).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<217>";
				dbg_object(t_uncle).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<218>";
				dbg_object(dbg_object(t_uncle).m_parent).m_color=-1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<219>";
				t_node=dbg_object(t_uncle).m_parent;
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<221>";
				if(t_node==dbg_object(dbg_object(t_node).m_parent).m_right){
					err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<222>";
					t_node=dbg_object(t_node).m_parent;
					err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<223>";
					this.p_RotateLeft(t_node);
				}
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<225>";
				dbg_object(dbg_object(t_node).m_parent).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<226>";
				dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_color=-1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<227>";
				this.p_RotateRight(dbg_object(dbg_object(t_node).m_parent).m_parent);
			}
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<230>";
			var t_uncle2=dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_left;
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<231>";
			if(((t_uncle2)!=null) && dbg_object(t_uncle2).m_color==-1){
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<232>";
				dbg_object(dbg_object(t_node).m_parent).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<233>";
				dbg_object(t_uncle2).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<234>";
				dbg_object(dbg_object(t_uncle2).m_parent).m_color=-1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<235>";
				t_node=dbg_object(t_uncle2).m_parent;
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<237>";
				if(t_node==dbg_object(dbg_object(t_node).m_parent).m_left){
					err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<238>";
					t_node=dbg_object(t_node).m_parent;
					err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<239>";
					this.p_RotateRight(t_node);
				}
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<241>";
				dbg_object(dbg_object(t_node).m_parent).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<242>";
				dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_color=-1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<243>";
				this.p_RotateLeft(dbg_object(dbg_object(t_node).m_parent).m_parent);
			}
		}
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<247>";
	dbg_object(this.m_root).m_color=1;
	pop_err();
	return 0;
}
c_Map.prototype.p_Set=function(t_key,t_value){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<29>";
	var t_node=this.m_root;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<30>";
	var t_parent=null;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<30>";
	var t_cmp=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<32>";
	while((t_node)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<33>";
		t_parent=t_node;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<34>";
		t_cmp=this.p_Compare(t_key,dbg_object(t_node).m_key);
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<35>";
		if(t_cmp>0){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<36>";
			t_node=dbg_object(t_node).m_right;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<37>";
			if(t_cmp<0){
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<38>";
				t_node=dbg_object(t_node).m_left;
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<40>";
				dbg_object(t_node).m_value=t_value;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<41>";
				pop_err();
				return false;
			}
		}
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<45>";
	t_node=c_Node.m_new.call(new c_Node,t_key,t_value,-1,t_parent);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<47>";
	if((t_parent)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<48>";
		if(t_cmp>0){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<49>";
			dbg_object(t_parent).m_right=t_node;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<51>";
			dbg_object(t_parent).m_left=t_node;
		}
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<53>";
		this.p_InsertFixup(t_node);
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<55>";
		this.m_root=t_node;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<57>";
	pop_err();
	return true;
}
c_Map.prototype.p_Clear=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<13>";
	this.m_root=null;
	pop_err();
	return 0;
}
c_Map.prototype.p_Add=function(t_key,t_value){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<61>";
	var t_node=this.m_root;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<62>";
	var t_parent=null;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<62>";
	var t_cmp=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<64>";
	while((t_node)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<65>";
		t_parent=t_node;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<66>";
		t_cmp=this.p_Compare(t_key,dbg_object(t_node).m_key);
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<67>";
		if(t_cmp>0){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<68>";
			t_node=dbg_object(t_node).m_right;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<69>";
			if(t_cmp<0){
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<70>";
				t_node=dbg_object(t_node).m_left;
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<72>";
				pop_err();
				return false;
			}
		}
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<76>";
	t_node=c_Node.m_new.call(new c_Node,t_key,t_value,-1,t_parent);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<78>";
	if((t_parent)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<79>";
		if(t_cmp>0){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<80>";
			dbg_object(t_parent).m_right=t_node;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<82>";
			dbg_object(t_parent).m_left=t_node;
		}
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<84>";
		this.p_InsertFixup(t_node);
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<86>";
		this.m_root=t_node;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<88>";
	pop_err();
	return true;
}
c_Map.prototype.p_FindNode=function(t_key){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<157>";
	var t_node=this.m_root;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<159>";
	while((t_node)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<160>";
		var t_cmp=this.p_Compare(t_key,dbg_object(t_node).m_key);
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<161>";
		if(t_cmp>0){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<162>";
			t_node=dbg_object(t_node).m_right;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<163>";
			if(t_cmp<0){
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<164>";
				t_node=dbg_object(t_node).m_left;
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<166>";
				pop_err();
				return t_node;
			}
		}
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<169>";
	pop_err();
	return t_node;
}
c_Map.prototype.p_Get=function(t_key){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<101>";
	var t_node=this.p_FindNode(t_key);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<102>";
	if((t_node)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<102>";
		pop_err();
		return dbg_object(t_node).m_value;
	}
	pop_err();
	return "";
}
c_Map.prototype.p_Keys=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<113>";
	var t_=c_MapKeys.m_new.call(new c_MapKeys,this);
	pop_err();
	return t_;
}
c_Map.prototype.p_FirstNode=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<125>";
	if(!((this.m_root)!=null)){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<125>";
		pop_err();
		return null;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<127>";
	var t_node=this.m_root;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<128>";
	while((dbg_object(t_node).m_left)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<129>";
		t_node=dbg_object(t_node).m_left;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<131>";
	pop_err();
	return t_node;
}
c_Map.prototype.p_Contains=function(t_key){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<25>";
	var t_=this.p_FindNode(t_key)!=null;
	pop_err();
	return t_;
}
c_Map.prototype.p_Count=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<17>";
	if((this.m_root)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<17>";
		var t_=this.m_root.p_Count2(0);
		pop_err();
		return t_;
	}
	pop_err();
	return 0;
}
c_Map.prototype.p_IsEmpty=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<21>";
	var t_=this.m_root==null;
	pop_err();
	return t_;
}
function c_StringMap(){
	c_Map.call(this);
}
c_StringMap.prototype=extend_class(c_Map);
c_StringMap.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<551>";
	c_Map.m_new.call(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<551>";
	pop_err();
	return this;
}
c_StringMap.prototype.p_Compare=function(t_lhs,t_rhs){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<554>";
	var t_=string_compare(t_lhs,t_rhs);
	pop_err();
	return t_;
}
function c_Node(){
	Object.call(this);
	this.m_key="";
	this.m_right=null;
	this.m_left=null;
	this.m_value="";
	this.m_color=0;
	this.m_parent=null;
}
c_Node.m_new=function(t_key,t_value,t_color,t_parent){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<364>";
	dbg_object(this).m_key=t_key;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<365>";
	dbg_object(this).m_value=t_value;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<366>";
	dbg_object(this).m_color=t_color;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<367>";
	dbg_object(this).m_parent=t_parent;
	pop_err();
	return this;
}
c_Node.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<361>";
	pop_err();
	return this;
}
c_Node.prototype.p_NextNode=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<385>";
	var t_node=null;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<386>";
	if((this.m_right)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<387>";
		t_node=this.m_right;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<388>";
		while((dbg_object(t_node).m_left)!=null){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<389>";
			t_node=dbg_object(t_node).m_left;
		}
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<391>";
		pop_err();
		return t_node;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<393>";
	t_node=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<394>";
	var t_parent=dbg_object(this).m_parent;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<395>";
	while(((t_parent)!=null) && t_node==dbg_object(t_parent).m_right){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<396>";
		t_node=t_parent;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<397>";
		t_parent=dbg_object(t_parent).m_parent;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<399>";
	pop_err();
	return t_parent;
}
c_Node.prototype.p_Count2=function(t_n){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<371>";
	if((this.m_left)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<371>";
		t_n=this.m_left.p_Count2(t_n);
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<372>";
	if((this.m_right)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<372>";
		t_n=this.m_right.p_Count2(t_n);
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<373>";
	var t_=t_n+1;
	pop_err();
	return t_;
}
function c_TGame(){
	Object.call(this);
	this.m_worldMapName="NOT SET";
}
c_TGame.m_new=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<110>";
	pop_err();
	return this;
}
c_TGame.prototype.p_OnCreate=function(){
}
c_TGame.prototype.p_NewGame=function(){
}
c_TGame.prototype.p_Town_Inn=function(t_townId){
}
c_TGame.prototype.p_Town_Shop=function(t_townId){
}
c_TGame.prototype.p_Town_Talk=function(t_townId){
}
c_TGame.prototype.p_Town_Enter=function(t_townId){
}
c_TGame.prototype.p_Combat_Random=function(t_zone){
}
c_TGame.prototype.p_Town_Name=function(t_townID){
}
function c_NinjaQuest(){
	c_TGame.call(this);
}
c_NinjaQuest.prototype=extend_class(c_TGame);
c_NinjaQuest.m_new=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<6>";
	c_TGame.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<7>";
	this.m_worldMapName="worldmap";
	pop_err();
	return this;
}
c_NinjaQuest.prototype.p_OnCreate=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<11>";
	bb_engine_SwitchScreenTo(bb_engine_titleScreen,true);
	pop_err();
}
c_NinjaQuest.prototype.p_NewGame=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<25>";
	bb_engine_ninja=c_DCharacter.m_new2.call(new c_DCharacter);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<26>";
	dbg_object(bb_engine_ninja).m_accessory=c_DItem.m_Generate(0,1);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<27>";
	bb_engine_ninja.p_InitStats(-1,5,3);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<28>";
	bb_engine_ninja.p_InitLevel(4,"NINJA");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<29>";
	dbg_object(bb_engine_ninja).m_img=bb_engine_imageMap.p_Get("ninja");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<30>";
	dbg_object(bb_engine_ninja).m_Skills.p_Add("aero","");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<32>";
	dbg_object(bb_engine_ninja).m_Skills.p_Add("smoke","");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<33>";
	bb_engine_playerCharacters.p_AddLast2(bb_engine_ninja);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<36>";
	bb_engine_NLog(":",0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<38>";
	bb_engine_SwitchScreenTo(bb_engine_townMapScreen,true);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<39>";
	bb_engine_townMapScreen.p_OnInit();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<40>";
	bb_engine_lastTown=128;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<41>";
	object_downcast((bb_engine_townMapScreen),c_SMap).p_PlacePlayerAt(bb_engine_lastTown);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<43>";
	object_downcast((bb_engine_chatScreen),c_SConversation).p_RunCutscene("boring_exposition");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<44>";
	bb_engine_SwitchScreenTo(bb_engine_chatScreen,true);
	pop_err();
}
c_NinjaQuest.prototype.p_Town_Name=function(t_townID){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<49>";
	var t_1=t_townID;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<50>";
	if(t_1==1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<50>";
		pop_err();
		return "NINJA VILLAGE";
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<51>";
		if(t_1==2){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<51>";
			pop_err();
			return "DANGER FOREST";
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<52>";
			if(t_1==3){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<52>";
				pop_err();
				return "CRAZY MINES";
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<53>";
				if(t_1==4){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<53>";
					pop_err();
					return "WALL CITY";
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<54>";
					if(t_1==5){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<54>";
						pop_err();
						return "WINDY PLAINS";
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<55>";
						if(t_1==6){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<55>";
							pop_err();
							return "SMELLY MARCHES";
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<56>";
							if(t_1==7){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<56>";
								pop_err();
								return "MOUNTAINGRAD";
							}else{
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<57>";
								if(t_1==8){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<57>";
									pop_err();
									return "MT.KRUGDOR";
								}else{
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<58>";
									if(t_1==9){
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<58>";
										pop_err();
										return "THE TOWER";
									}else{
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<60>";
										if(t_1==10){
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<60>";
											pop_err();
											return "*PIT";
										}else{
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<61>";
											if(t_1==11){
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<61>";
												pop_err();
												return "*FAE HOUSE";
											}else{
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<62>";
												if(t_1==12){
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<62>";
													pop_err();
													return "*VOLRATH'S CASTLE";
												}else{
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<63>";
													if(t_1==13){
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<63>";
														pop_err();
														return "*HERMIT'S CAVE";
													}else{
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<64>";
														if(t_1==14){
															err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<64>";
															pop_err();
															return "*ACTUAL BOSS";
														}else{
															err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<66>";
															if(t_1==255){
																err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<66>";
																pop_err();
																return "haX";
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<68>";
	pop_err();
	return "???";
}
c_NinjaQuest.prototype.p_Town_Enter=function(t_townId){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<77>";
	var t_specialID=bb_engine_ConvertToSpecialID(t_townId,0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<79>";
	var t_2=t_townId;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<80>";
	if(t_2==1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<81>";
		pop_err();
		return 1;
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<83>";
		if(t_2==2){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<84>";
			if(bb_engine_gameTriggers.p_Get("m"+String(t_specialID))=="2"){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<86>";
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<86>";
				var t_=bb_engine_playerCharacters.p_ObjectEnumerator();
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<86>";
				while(t_.p_HasNext()){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<86>";
					var t_ply=t_.p_NextObject();
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<87>";
					dbg_object(t_ply).m_HP=dbg_object(t_ply).m_maxHP;
				}
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<89>";
				c_GMessageTicker.m_Add("Party HP Restored!");
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<90>";
				pop_err();
				return 2;
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<93>";
				c_GMessageTicker.m_Add("I can't believe you");
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<94>";
				c_GMessageTicker.m_Add("left the forest over");
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<95>";
				c_GMessageTicker.m_Add("training with the ninjas!");
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<96>";
				c_GMessageTicker.m_Add("Defend yourself!");
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<99>";
				bb_engine_SwitchScreenTo(bb_engine_combatScreen,true);
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<100>";
				var t_cmtScn=object_downcast((bb_engine_combatScreen),c_SCombat);
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<101>";
				dbg_object(t_cmtScn).m_enemyList.p_AddLast5(c_CharArcher.m_new.call(new c_CharArcher,10));
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<102>";
				t_cmtScn.p_placeMonsters();
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<103>";
				bb_engine_gameTriggers.p_Set("m"+String(t_specialID),"1");
			}
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<106>";
			if(t_2==3){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<107>";
				if(bb_engine_gameTriggers.p_Get("m"+String(t_specialID))=="2"){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<109>";
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<109>";
					var t_3=bb_engine_playerCharacters.p_ObjectEnumerator();
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<109>";
					while(t_3.p_HasNext()){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<109>";
						var t_ply2=t_3.p_NextObject();
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<110>";
						dbg_object(t_ply2).m_HP=dbg_object(t_ply2).m_maxHP;
					}
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<112>";
					c_GMessageTicker.m_Add("Party HP Restored!");
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<113>";
					pop_err();
					return 2;
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<116>";
					bb_engine_SwitchScreenTo(bb_engine_combatScreen,true);
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<117>";
					var t_cmtScn2=object_downcast((bb_engine_combatScreen),c_SCombat);
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<119>";
					dbg_object(t_cmtScn2).m_enemyList.p_AddLast5(c_FrogWasp.m_new.call(new c_FrogWasp,30));
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<120>";
					dbg_object(t_cmtScn2).m_enemyList.p_First().p_AddSkill("fire");
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<121>";
					t_cmtScn2.p_placeMonsters();
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<122>";
					bb_engine_gameTriggers.p_Set("m"+String(t_specialID),"1");
				}
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<124>";
				if(t_2==4){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<125>";
					pop_err();
					return 1;
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<127>";
					if(t_2==5){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<128>";
						if(bb_engine_gameTriggers.p_Get("m"+String(t_specialID))=="2"){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<130>";
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<130>";
							var t_4=bb_engine_playerCharacters.p_ObjectEnumerator();
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<130>";
							while(t_4.p_HasNext()){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<130>";
								var t_ply3=t_4.p_NextObject();
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<131>";
								dbg_object(t_ply3).m_HP=dbg_object(t_ply3).m_maxHP;
							}
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<133>";
							c_GMessageTicker.m_Add("Party HP Restored!");
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<134>";
							pop_err();
							return 2;
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<137>";
							bb_engine_SwitchScreenTo(bb_engine_combatScreen,true);
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<138>";
							var t_cmtScn3=object_downcast((bb_engine_combatScreen),c_SCombat);
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<139>";
							dbg_object(t_cmtScn3).m_enemyList.p_AddLast5(c_FrogWasp.m_new.call(new c_FrogWasp,45));
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<140>";
							dbg_object(t_cmtScn3).m_enemyList.p_AddLast5(c_FrogWasp.m_new.call(new c_FrogWasp,45));
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<141>";
							dbg_object(t_cmtScn3).m_enemyList.p_First().p_AddSkill("fire");
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<142>";
							t_cmtScn3.p_placeMonsters();
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<143>";
							bb_engine_gameTriggers.p_Set("m"+String(t_specialID),"1");
						}
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<146>";
						if(t_2==6){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<147>";
							if(bb_engine_gameTriggers.p_Get("m"+String(t_specialID))=="2"){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<150>";
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<150>";
								var t_5=bb_engine_playerCharacters.p_ObjectEnumerator();
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<150>";
								while(t_5.p_HasNext()){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<150>";
									var t_ply4=t_5.p_NextObject();
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<151>";
									dbg_object(t_ply4).m_HP=dbg_object(t_ply4).m_maxHP;
								}
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<153>";
								c_GMessageTicker.m_Add("Party HP Restored!");
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<154>";
								pop_err();
								return 2;
							}else{
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<156>";
								c_GMessageTicker.m_Add("Debug");
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<157>";
								bb_engine_gameTriggers.p_Set("m"+String(t_specialID),"2");
							}
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<160>";
							if(t_2==7){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<161>";
								pop_err();
								return 1;
							}else{
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<163>";
								if(t_2==8){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<164>";
									if(bb_engine_gameTriggers.p_Get("m"+String(t_specialID))=="2"){
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<167>";
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<167>";
										var t_6=bb_engine_playerCharacters.p_ObjectEnumerator();
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<167>";
										while(t_6.p_HasNext()){
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<167>";
											var t_ply5=t_6.p_NextObject();
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<168>";
											dbg_object(t_ply5).m_HP=dbg_object(t_ply5).m_maxHP;
										}
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<170>";
										c_GMessageTicker.m_Add("Party HP Restored!");
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<171>";
										pop_err();
										return 2;
									}else{
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<173>";
										c_GMessageTicker.m_Add("Debug");
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<174>";
										bb_engine_gameTriggers.p_Set("m"+String(t_specialID),"2");
									}
								}else{
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<177>";
									if(t_2==9){
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<178>";
										if(bb_engine_gameTriggers.p_Get("m"+String(t_specialID))=="2"){
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<179>";
											c_GMessageTicker.m_Add("Nothing here.");
										}else{
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<181>";
											bb_engine_SwitchScreenTo(bb_engine_combatScreen,true);
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<182>";
											var t_cmtScn4=object_downcast((bb_engine_combatScreen),c_SCombat);
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<183>";
											dbg_object(t_cmtScn4).m_enemyList.p_AddLast5(c_FrogWasp.m_new.call(new c_FrogWasp,75));
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<184>";
											dbg_object(t_cmtScn4).m_enemyList.p_AddLast5(c_FrogWasp.m_new.call(new c_FrogWasp,75));
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<185>";
											dbg_object(t_cmtScn4).m_enemyList.p_AddLast5(c_FrogWasp.m_new.call(new c_FrogWasp,75));
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<186>";
											dbg_object(t_cmtScn4).m_enemyList.p_First().p_AddSkill("fire");
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<187>";
											t_cmtScn4.p_placeMonsters();
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<188>";
											bb_engine_gameTriggers.p_Set("m"+String(t_specialID),"1");
										}
									}else{
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<191>";
										if(t_2==10){
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<194>";
											if(bb_engine_gameTriggers.p_Get("m"+String(t_specialID))=="2"){
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<195>";
												c_GMessageTicker.m_Add("Nothing here.");
											}else{
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<198>";
												c_GMessageTicker.m_Add("You found Bahamaut!");
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<199>";
												c_GMessageTicker.m_Add("'Haha puny human,");
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<200>";
												c_GMessageTicker.m_Add("you will die this day!'");
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<203>";
												bb_engine_SwitchScreenTo(bb_engine_combatScreen,true);
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<204>";
												var t_cmtScn5=object_downcast((bb_engine_combatScreen),c_SCombat);
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<206>";
												dbg_object(t_cmtScn5).m_enemyList.p_AddLast5(c_BossBahamaut.m_new.call(new c_BossBahamaut,25));
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<207>";
												t_cmtScn5.p_placeMonsters();
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<208>";
												bb_engine_gameTriggers.p_Set("m"+String(t_specialID),"1");
											}
										}else{
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<211>";
											if(t_2==16){
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<212>";
												c_GMessageTicker.m_Add("Yellow Sign Message!");
											}else{
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<214>";
												if(t_2==32){
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<215>";
													c_GMessageTicker.m_Add("Green Sign Message!");
												}else{
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<217>";
													if(t_2==48){
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<218>";
														c_GMessageTicker.m_Add("Cyan Sign Message!");
													}else{
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<221>";
														pop_err();
														return -1;
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	pop_err();
	return 0;
}
c_NinjaQuest.prototype.p_Town_Inn=function(t_townId){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<225>";
	var t_3=t_townId;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<226>";
	if(t_3==1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<227>";
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<227>";
		var t_=bb_engine_playerCharacters.p_ObjectEnumerator();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<227>";
		while(t_.p_HasNext()){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<227>";
			var t_ply=t_.p_NextObject();
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<228>";
			dbg_object(t_ply).m_HP=dbg_object(t_ply).m_maxHP;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<230>";
		c_GMessageTicker.m_Add("Party HP restored!");
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<233>";
		if(t_3==4){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<234>";
			if(bb_engine_playerGold>=10){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<235>";
				bb_engine_playerGold-=10;
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<236>";
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<236>";
				var t_2=bb_engine_playerCharacters.p_ObjectEnumerator();
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<236>";
				while(t_2.p_HasNext()){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<236>";
					var t_ply2=t_2.p_NextObject();
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<237>";
					dbg_object(t_ply2).m_HP=dbg_object(t_ply2).m_maxHP;
				}
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<239>";
				c_GMessageTicker.m_Add("Party HP restored!");
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<240>";
				c_GMessageTicker.m_Add("The INN cost 10 gold.");
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<242>";
				c_GMessageTicker.m_Add("The INN costs 10 gold.");
			}
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<250>";
			c_GMessageTicker.m_Add("There's no inn here.");
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<251>";
			pop_err();
			return 0;
		}
	}
	pop_err();
	return 0;
}
c_NinjaQuest.prototype.p_Town_Shop=function(t_townId){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<256>";
	var t_4=t_townId;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<257>";
	if(t_4==1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<258>";
		pop_err();
		return 1;
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<268>";
		c_GMessageTicker.m_Add("There's no shop here.");
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<269>";
		pop_err();
		return 0;
	}
}
c_NinjaQuest.prototype.p_Town_Talk=function(t_townId){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<274>";
	var t_5=t_townId;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<275>";
	if(t_5==1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<276>";
		object_downcast((bb_engine_chatScreen),c_SConversation).p_RunCutscene("ThankYouNinja");
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<277>";
		bb_engine_SwitchScreenTo(bb_engine_chatScreen,true);
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<287>";
		c_GMessageTicker.m_Add("No one wants to talk.");
	}
	pop_err();
	return 0;
}
c_NinjaQuest.prototype.p_Combat_Random=function(t_zone){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<293>";
	var t_monsters=c_List5.m_new.call(new c_List5);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<295>";
	bb_engine_NLog("zone: "+t_zone,0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<296>";
	var t_6=t_zone.toLowerCase();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<297>";
	if(t_6=="monsters_forest_1"){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<298>";
		var t_7=((bb_random_Rnd3(7.0))|0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<299>";
		if(t_7==1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<300>";
			t_monsters.p_AddLast5(c_FrogBug.m_new.call(new c_FrogBug,1));
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<301>";
			t_monsters.p_AddLast5(c_FrogBug.m_new.call(new c_FrogBug,1));
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<302>";
			if(t_7==2){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<303>";
				t_monsters.p_AddLast5(c_FrogFly.m_new.call(new c_FrogFly,1));
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<304>";
				t_monsters.p_AddLast5(c_FrogBug.m_new.call(new c_FrogBug,1));
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<305>";
				if(t_7==4){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<306>";
					t_monsters.p_AddLast5(c_FrogBug.m_new.call(new c_FrogBug,3));
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<308>";
					t_monsters.p_AddLast5(c_FrogFly.m_new.call(new c_FrogFly,1));
				}
			}
		}
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<310>";
		if(t_6=="monsters_plain_1"){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<311>";
			var t_8=((bb_random_Rnd3(7.0))|0);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<312>";
			if(t_8==1){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<313>";
				t_monsters.p_AddLast5(c_FrogBug.m_new.call(new c_FrogBug,1));
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<314>";
				t_monsters.p_AddLast5(c_FrogBug.m_new.call(new c_FrogBug,1));
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<315>";
				if(t_8==2){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<316>";
					t_monsters.p_AddLast5(c_FrogFly.m_new.call(new c_FrogFly,1));
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<317>";
					t_monsters.p_AddLast5(c_FrogBug.m_new.call(new c_FrogBug,1));
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<318>";
					t_monsters.p_AddLast5(c_FrogFly.m_new.call(new c_FrogFly,1));
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<319>";
					if(t_8==4){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<320>";
						t_monsters.p_AddLast5(c_FrogBug.m_new.call(new c_FrogBug,2));
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<322>";
						t_monsters.p_AddLast5(c_FrogFly.m_new.call(new c_FrogFly,1));
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<323>";
						t_monsters.p_AddLast5(c_FrogFly.m_new.call(new c_FrogFly,1));
					}
				}
			}
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<325>";
			if(t_6=="monsters_forest_2"){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<326>";
				var t_9=((bb_random_Rnd3(7.0))|0);
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<327>";
				if(t_9==1){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<328>";
					t_monsters.p_AddLast5(c_FrogBug.m_new.call(new c_FrogBug,2));
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<329>";
					t_monsters.p_AddLast5(c_FrogBug.m_new.call(new c_FrogBug,2));
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<330>";
					t_monsters.p_AddLast5(c_FrogBug.m_new.call(new c_FrogBug,2));
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<331>";
					if(t_9==2){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<332>";
						t_monsters.p_AddLast5(c_FrogFly.m_new.call(new c_FrogFly,4));
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<333>";
						t_monsters.p_AddLast5(c_FrogBug.m_new.call(new c_FrogBug,3));
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<334>";
						if(t_9==4){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<335>";
							t_monsters.p_AddLast5(c_FrogSpider.m_new.call(new c_FrogSpider,7));
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<337>";
							t_monsters.p_AddLast5(c_FrogFly.m_new.call(new c_FrogFly,5));
						}
					}
				}
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<339>";
				if(t_6=="monsters_plain_2"){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<340>";
					var t_10=((bb_random_Rnd3(7.0))|0);
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<341>";
					if(t_10==1){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<342>";
						t_monsters.p_AddLast5(c_FrogSlime.m_new.call(new c_FrogSlime,5));
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<343>";
						t_monsters.p_AddLast5(c_FrogSlime.m_new.call(new c_FrogSlime,5));
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<344>";
						if(t_10==2){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<345>";
							t_monsters.p_AddLast5(c_FrogSkeleton.m_new.call(new c_FrogSkeleton,6));
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<346>";
							t_monsters.p_AddLast5(c_FrogSkeletonArcher.m_new.call(new c_FrogSkeletonArcher,6));
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<347>";
							t_monsters.p_AddLast5(c_FrogSkeleton.m_new.call(new c_FrogSkeleton,6));
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<348>";
							if(t_10==4){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<349>";
								t_monsters.p_AddLast5(c_FrogCROW.m_new.call(new c_FrogCROW,10));
							}else{
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<351>";
								t_monsters.p_AddLast5(c_FrogCROW.m_new.call(new c_FrogCROW,7));
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<352>";
								t_monsters.p_AddLast5(c_FrogCROW.m_new.call(new c_FrogCROW,7));
							}
						}
					}
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<354>";
					if(t_6=="monsters_marsh_1"){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<355>";
						var t_11=((bb_random_Rnd3(7.0))|0);
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<356>";
						if(t_11==1){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<357>";
							t_monsters.p_AddLast5(c_FrogSlime.m_new.call(new c_FrogSlime,5));
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<358>";
							t_monsters.p_AddLast5(c_FrogSlime.m_new.call(new c_FrogSlime,5));
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<359>";
							t_monsters.p_AddLast5(c_FrogSlime.m_new.call(new c_FrogSlime,5));
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<360>";
							t_monsters.p_AddLast5(c_FrogSlime.m_new.call(new c_FrogSlime,5));
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<361>";
							if(t_11==2){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<362>";
								t_monsters.p_AddLast5(c_FrogSkeleton.m_new.call(new c_FrogSkeleton,8));
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<363>";
								t_monsters.p_AddLast5(c_FrogSkeletonArcher.m_new.call(new c_FrogSkeletonArcher,10));
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<364>";
								t_monsters.p_AddLast5(c_FrogSkeleton.m_new.call(new c_FrogSkeleton,8));
							}else{
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<366>";
								t_monsters.p_AddLast5(c_FrogSlime.m_new.call(new c_FrogSlime,5));
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<367>";
								t_monsters.p_AddLast5(c_FrogEngima.m_new.call(new c_FrogEngima,10));
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<368>";
								t_monsters.p_AddLast5(c_FrogSlime.m_new.call(new c_FrogSlime,5));
							}
						}
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<370>";
						if(t_6=="safe"){
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<373>";
							t_monsters.p_AddLast5(c_FrogShambler.m_new.call(new c_FrogShambler,dbg_object(bb_engine_ninja).m_Level*((bb_random_Rnd2(3.0,5.0))|0)));
						}
					}
				}
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ninja_quest.monkey<376>";
	pop_err();
	return t_monsters;
}
var bb_engine_game=null;
function bbMain(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<206>";
	c_MainClass.m_new.call(new c_MainClass);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/main.monkey<207>";
	pop_err();
	return 0;
}
var bb_graphics_device=null;
function bb_graphics_SetGraphicsDevice(t_dev){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<63>";
	bb_graphics_device=t_dev;
	pop_err();
	return 0;
}
function c_Image(){
	Object.call(this);
	this.m_surface=null;
	this.m_width=0;
	this.m_height=0;
	this.m_frames=[];
	this.m_flags=0;
	this.m_tx=.0;
	this.m_ty=.0;
	this.m_source=null;
}
c_Image.m_DefaultFlags=0;
c_Image.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<70>";
	pop_err();
	return this;
}
c_Image.prototype.p_SetHandle=function(t_tx,t_ty){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<114>";
	dbg_object(this).m_tx=t_tx;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<115>";
	dbg_object(this).m_ty=t_ty;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<116>";
	dbg_object(this).m_flags=dbg_object(this).m_flags&-2;
	pop_err();
	return 0;
}
c_Image.prototype.p_ApplyFlags=function(t_iflags){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<197>";
	this.m_flags=t_iflags;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<199>";
	if((this.m_flags&2)!=0){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<200>";
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<200>";
		var t_=this.m_frames;
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<200>";
		var t_2=0;
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<200>";
		while(t_2<t_.length){
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<200>";
			var t_f=dbg_array(t_,t_2)[dbg_index];
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<200>";
			t_2=t_2+1;
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<201>";
			dbg_object(t_f).m_x+=1;
		}
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<203>";
		this.m_width-=2;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<206>";
	if((this.m_flags&4)!=0){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<207>";
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<207>";
		var t_3=this.m_frames;
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<207>";
		var t_4=0;
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<207>";
		while(t_4<t_3.length){
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<207>";
			var t_f2=dbg_array(t_3,t_4)[dbg_index];
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<207>";
			t_4=t_4+1;
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<208>";
			dbg_object(t_f2).m_y+=1;
		}
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<210>";
		this.m_height-=2;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<213>";
	if((this.m_flags&1)!=0){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<214>";
		this.p_SetHandle((this.m_width)/2.0,(this.m_height)/2.0);
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<217>";
	if(this.m_frames.length==1 && dbg_object(dbg_array(this.m_frames,0)[dbg_index]).m_x==0 && dbg_object(dbg_array(this.m_frames,0)[dbg_index]).m_y==0 && this.m_width==this.m_surface.Width() && this.m_height==this.m_surface.Height()){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<218>";
		this.m_flags|=65536;
	}
	pop_err();
	return 0;
}
c_Image.prototype.p_Init=function(t_surf,t_nframes,t_iflags){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<143>";
	if((this.m_surface)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<143>";
		error("Image already initialized");
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<144>";
	this.m_surface=t_surf;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<146>";
	this.m_width=((this.m_surface.Width()/t_nframes)|0);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<147>";
	this.m_height=this.m_surface.Height();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<149>";
	this.m_frames=new_object_array(t_nframes);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<150>";
	for(var t_i=0;t_i<t_nframes;t_i=t_i+1){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<151>";
		dbg_array(this.m_frames,t_i)[dbg_index]=c_Frame.m_new.call(new c_Frame,t_i*this.m_width,0);
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<154>";
	this.p_ApplyFlags(t_iflags);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<155>";
	pop_err();
	return this;
}
c_Image.prototype.p_Init2=function(t_surf,t_x,t_y,t_iwidth,t_iheight,t_nframes,t_iflags,t_src,t_srcx,t_srcy,t_srcw,t_srch){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<159>";
	if((this.m_surface)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<159>";
		error("Image already initialized");
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<160>";
	this.m_surface=t_surf;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<161>";
	this.m_source=t_src;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<163>";
	this.m_width=t_iwidth;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<164>";
	this.m_height=t_iheight;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<166>";
	this.m_frames=new_object_array(t_nframes);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<168>";
	var t_ix=t_x;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<168>";
	var t_iy=t_y;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<170>";
	for(var t_i=0;t_i<t_nframes;t_i=t_i+1){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<171>";
		if(t_ix+this.m_width>t_srcw){
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<172>";
			t_ix=0;
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<173>";
			t_iy+=this.m_height;
		}
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<175>";
		if(t_ix+this.m_width>t_srcw || t_iy+this.m_height>t_srch){
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<176>";
			error("Image frame outside surface");
		}
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<178>";
		dbg_array(this.m_frames,t_i)[dbg_index]=c_Frame.m_new.call(new c_Frame,t_ix+t_srcx,t_iy+t_srcy);
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<179>";
		t_ix+=this.m_width;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<182>";
	this.p_ApplyFlags(t_iflags);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<183>";
	pop_err();
	return this;
}
c_Image.prototype.p_Width=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<81>";
	pop_err();
	return this.m_width;
}
c_Image.prototype.p_Height=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<85>";
	pop_err();
	return this.m_height;
}
c_Image.prototype.p_Frames=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<93>";
	var t_=this.m_frames.length;
	pop_err();
	return t_;
}
function c_GraphicsContext(){
	Object.call(this);
	this.m_defaultFont=null;
	this.m_font=null;
	this.m_firstChar=0;
	this.m_matrixSp=0;
	this.m_ix=1.0;
	this.m_iy=.0;
	this.m_jx=.0;
	this.m_jy=1.0;
	this.m_tx=.0;
	this.m_ty=.0;
	this.m_tformed=0;
	this.m_matDirty=0;
	this.m_color_r=.0;
	this.m_color_g=.0;
	this.m_color_b=.0;
	this.m_alpha=.0;
	this.m_blend=0;
	this.m_scissor_x=.0;
	this.m_scissor_y=.0;
	this.m_scissor_width=.0;
	this.m_scissor_height=.0;
	this.m_matrixStack=new_number_array(192);
}
c_GraphicsContext.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<29>";
	pop_err();
	return this;
}
c_GraphicsContext.prototype.p_Validate=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<40>";
	if((this.m_matDirty)!=0){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<41>";
		bb_graphics_renderDevice.SetMatrix(dbg_object(bb_graphics_context).m_ix,dbg_object(bb_graphics_context).m_iy,dbg_object(bb_graphics_context).m_jx,dbg_object(bb_graphics_context).m_jy,dbg_object(bb_graphics_context).m_tx,dbg_object(bb_graphics_context).m_ty);
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<42>";
		this.m_matDirty=0;
	}
	pop_err();
	return 0;
}
var bb_graphics_context=null;
function bb_data_FixDataPath(t_path){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/data.monkey<7>";
	var t_i=t_path.indexOf(":/",0);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/data.monkey<8>";
	if(t_i!=-1 && t_path.indexOf("/",0)==t_i+1){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/data.monkey<8>";
		pop_err();
		return t_path;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/data.monkey<9>";
	if(string_startswith(t_path,"./") || string_startswith(t_path,"/")){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/data.monkey<9>";
		pop_err();
		return t_path;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/data.monkey<10>";
	var t_="monkey://data/"+t_path;
	pop_err();
	return t_;
}
function c_Frame(){
	Object.call(this);
	this.m_x=0;
	this.m_y=0;
}
c_Frame.m_new=function(t_x,t_y){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<23>";
	dbg_object(this).m_x=t_x;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<24>";
	dbg_object(this).m_y=t_y;
	pop_err();
	return this;
}
c_Frame.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<18>";
	pop_err();
	return this;
}
function bb_graphics_LoadImage(t_path,t_frameCount,t_flags){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<239>";
	var t_surf=bb_graphics_device.LoadSurface(bb_data_FixDataPath(t_path));
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<240>";
	if((t_surf)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<240>";
		var t_=(c_Image.m_new.call(new c_Image)).p_Init(t_surf,t_frameCount,t_flags);
		pop_err();
		return t_;
	}
	pop_err();
	return null;
}
function bb_graphics_LoadImage2(t_path,t_frameWidth,t_frameHeight,t_frameCount,t_flags){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<244>";
	var t_surf=bb_graphics_device.LoadSurface(bb_data_FixDataPath(t_path));
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<245>";
	if((t_surf)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<245>";
		var t_=(c_Image.m_new.call(new c_Image)).p_Init2(t_surf,0,0,t_frameWidth,t_frameHeight,t_frameCount,t_flags,null,0,0,t_surf.Width(),t_surf.Height());
		pop_err();
		return t_;
	}
	pop_err();
	return null;
}
function bb_graphics_SetFont(t_font,t_firstChar){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<548>";
	if(!((t_font)!=null)){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<549>";
		if(!((dbg_object(bb_graphics_context).m_defaultFont)!=null)){
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<550>";
			dbg_object(bb_graphics_context).m_defaultFont=bb_graphics_LoadImage("mojo_font.png",96,2);
		}
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<552>";
		t_font=dbg_object(bb_graphics_context).m_defaultFont;
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<553>";
		t_firstChar=32;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<555>";
	dbg_object(bb_graphics_context).m_font=t_font;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<556>";
	dbg_object(bb_graphics_context).m_firstChar=t_firstChar;
	pop_err();
	return 0;
}
var bb_audio_device=null;
function bb_audio_SetAudioDevice(t_dev){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/audio.monkey<22>";
	bb_audio_device=t_dev;
	pop_err();
	return 0;
}
function c_InputDevice(){
	Object.call(this);
	this.m__joyStates=new_object_array(4);
	this.m__keyDown=new_bool_array(512);
	this.m__keyHitPut=0;
	this.m__keyHitQueue=new_number_array(33);
	this.m__keyHit=new_number_array(512);
	this.m__charGet=0;
	this.m__charPut=0;
	this.m__charQueue=new_number_array(32);
	this.m__mouseX=.0;
	this.m__mouseY=.0;
	this.m__touchX=new_number_array(32);
	this.m__touchY=new_number_array(32);
	this.m__accelX=.0;
	this.m__accelY=.0;
	this.m__accelZ=.0;
}
c_InputDevice.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<26>";
	for(var t_i=0;t_i<4;t_i=t_i+1){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<27>";
		dbg_array(this.m__joyStates,t_i)[dbg_index]=c_JoyState.m_new.call(new c_JoyState);
	}
	pop_err();
	return this;
}
c_InputDevice.prototype.p_PutKeyHit=function(t_key){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<237>";
	if(this.m__keyHitPut==this.m__keyHitQueue.length){
		pop_err();
		return;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<238>";
	dbg_array(this.m__keyHit,t_key)[dbg_index]+=1;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<239>";
	dbg_array(this.m__keyHitQueue,this.m__keyHitPut)[dbg_index]=t_key;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<240>";
	this.m__keyHitPut+=1;
	pop_err();
}
c_InputDevice.prototype.p_BeginUpdate=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<189>";
	for(var t_i=0;t_i<4;t_i=t_i+1){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<190>";
		var t_state=dbg_array(this.m__joyStates,t_i)[dbg_index];
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<191>";
		if(!BBGame.Game().PollJoystick(t_i,dbg_object(t_state).m_joyx,dbg_object(t_state).m_joyy,dbg_object(t_state).m_joyz,dbg_object(t_state).m_buttons)){
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<191>";
			break;
		}
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<192>";
		for(var t_j=0;t_j<32;t_j=t_j+1){
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<193>";
			var t_key=256+t_i*32+t_j;
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<194>";
			if(dbg_array(dbg_object(t_state).m_buttons,t_j)[dbg_index]){
				err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<195>";
				if(!dbg_array(this.m__keyDown,t_key)[dbg_index]){
					err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<196>";
					dbg_array(this.m__keyDown,t_key)[dbg_index]=true;
					err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<197>";
					this.p_PutKeyHit(t_key);
				}
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<200>";
				dbg_array(this.m__keyDown,t_key)[dbg_index]=false;
			}
		}
	}
	pop_err();
}
c_InputDevice.prototype.p_EndUpdate=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<207>";
	for(var t_i=0;t_i<this.m__keyHitPut;t_i=t_i+1){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<208>";
		dbg_array(this.m__keyHit,dbg_array(this.m__keyHitQueue,t_i)[dbg_index])[dbg_index]=0;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<210>";
	this.m__keyHitPut=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<211>";
	this.m__charGet=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<212>";
	this.m__charPut=0;
	pop_err();
}
c_InputDevice.prototype.p_KeyEvent=function(t_event,t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<111>";
	var t_1=t_event;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<112>";
	if(t_1==1){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<113>";
		if(!dbg_array(this.m__keyDown,t_data)[dbg_index]){
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<114>";
			dbg_array(this.m__keyDown,t_data)[dbg_index]=true;
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<115>";
			this.p_PutKeyHit(t_data);
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<116>";
			if(t_data==1){
				err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<117>";
				dbg_array(this.m__keyDown,384)[dbg_index]=true;
				err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<118>";
				this.p_PutKeyHit(384);
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<119>";
				if(t_data==384){
					err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<120>";
					dbg_array(this.m__keyDown,1)[dbg_index]=true;
					err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<121>";
					this.p_PutKeyHit(1);
				}
			}
		}
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<124>";
		if(t_1==2){
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<125>";
			if(dbg_array(this.m__keyDown,t_data)[dbg_index]){
				err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<126>";
				dbg_array(this.m__keyDown,t_data)[dbg_index]=false;
				err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<127>";
				if(t_data==1){
					err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<128>";
					dbg_array(this.m__keyDown,384)[dbg_index]=false;
				}else{
					err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<129>";
					if(t_data==384){
						err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<130>";
						dbg_array(this.m__keyDown,1)[dbg_index]=false;
					}
				}
			}
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<133>";
			if(t_1==3){
				err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<134>";
				if(this.m__charPut<this.m__charQueue.length){
					err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<135>";
					dbg_array(this.m__charQueue,this.m__charPut)[dbg_index]=t_data;
					err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<136>";
					this.m__charPut+=1;
				}
			}
		}
	}
	pop_err();
}
c_InputDevice.prototype.p_MouseEvent=function(t_event,t_data,t_x,t_y){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<142>";
	var t_2=t_event;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<143>";
	if(t_2==4){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<144>";
		this.p_KeyEvent(1,1+t_data);
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<145>";
		if(t_2==5){
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<146>";
			this.p_KeyEvent(2,1+t_data);
			pop_err();
			return;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<148>";
			if(t_2==6){
			}else{
				pop_err();
				return;
			}
		}
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<152>";
	this.m__mouseX=t_x;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<153>";
	this.m__mouseY=t_y;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<154>";
	dbg_array(this.m__touchX,0)[dbg_index]=t_x;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<155>";
	dbg_array(this.m__touchY,0)[dbg_index]=t_y;
	pop_err();
}
c_InputDevice.prototype.p_TouchEvent=function(t_event,t_data,t_x,t_y){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<159>";
	var t_3=t_event;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<160>";
	if(t_3==7){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<161>";
		this.p_KeyEvent(1,384+t_data);
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<162>";
		if(t_3==8){
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<163>";
			this.p_KeyEvent(2,384+t_data);
			pop_err();
			return;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<165>";
			if(t_3==9){
			}else{
				pop_err();
				return;
			}
		}
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<169>";
	dbg_array(this.m__touchX,t_data)[dbg_index]=t_x;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<170>";
	dbg_array(this.m__touchY,t_data)[dbg_index]=t_y;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<171>";
	if(t_data==0){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<172>";
		this.m__mouseX=t_x;
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<173>";
		this.m__mouseY=t_y;
	}
	pop_err();
}
c_InputDevice.prototype.p_MotionEvent=function(t_event,t_data,t_x,t_y,t_z){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<178>";
	var t_4=t_event;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<179>";
	if(t_4==10){
	}else{
		pop_err();
		return;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<183>";
	this.m__accelX=t_x;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<184>";
	this.m__accelY=t_y;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<185>";
	this.m__accelZ=t_z;
	pop_err();
}
c_InputDevice.prototype.p_TouchX=function(t_index){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<77>";
	if(t_index>=0 && t_index<32){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<77>";
		pop_err();
		return dbg_array(this.m__touchX,t_index)[dbg_index];
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<78>";
	pop_err();
	return 0.0;
}
c_InputDevice.prototype.p_TouchY=function(t_index){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<82>";
	if(t_index>=0 && t_index<32){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<82>";
		pop_err();
		return dbg_array(this.m__touchY,t_index)[dbg_index];
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<83>";
	pop_err();
	return 0.0;
}
c_InputDevice.prototype.p_KeyDown=function(t_key){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<47>";
	if(t_key>0 && t_key<512){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<47>";
		pop_err();
		return dbg_array(this.m__keyDown,t_key)[dbg_index];
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<48>";
	pop_err();
	return false;
}
c_InputDevice.prototype.p_KeyHit=function(t_key){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<52>";
	if(t_key>0 && t_key<512){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<52>";
		pop_err();
		return dbg_array(this.m__keyHit,t_key)[dbg_index];
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<53>";
	pop_err();
	return 0;
}
c_InputDevice.prototype.p_JoyY=function(t_index,t_unit){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<103>";
	pop_err();
	return dbg_array(dbg_object(dbg_array(this.m__joyStates,t_unit)[dbg_index]).m_joyy,t_index)[dbg_index];
}
c_InputDevice.prototype.p_JoyX=function(t_index,t_unit){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<99>";
	pop_err();
	return dbg_array(dbg_object(dbg_array(this.m__joyStates,t_unit)[dbg_index]).m_joyx,t_index)[dbg_index];
}
function c_JoyState(){
	Object.call(this);
	this.m_joyx=new_number_array(2);
	this.m_joyy=new_number_array(2);
	this.m_joyz=new_number_array(2);
	this.m_buttons=new_bool_array(32);
}
c_JoyState.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/inputdevice.monkey<14>";
	pop_err();
	return this;
}
var bb_input_device=null;
function bb_input_SetInputDevice(t_dev){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/input.monkey<22>";
	bb_input_device=t_dev;
	pop_err();
	return 0;
}
var bb_app__devWidth=0;
var bb_app__devHeight=0;
function bb_app_ValidateDeviceWindow(t_notifyApp){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<57>";
	var t_w=bb_app__game.GetDeviceWidth();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<58>";
	var t_h=bb_app__game.GetDeviceHeight();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<59>";
	if(t_w==bb_app__devWidth && t_h==bb_app__devHeight){
		pop_err();
		return;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<60>";
	bb_app__devWidth=t_w;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<61>";
	bb_app__devHeight=t_h;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<62>";
	if(t_notifyApp){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<62>";
		bb_app__app.p_OnResize();
	}
	pop_err();
}
function c_DisplayMode(){
	Object.call(this);
	this.m__width=0;
	this.m__height=0;
}
c_DisplayMode.m_new=function(t_width,t_height){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<192>";
	this.m__width=t_width;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<193>";
	this.m__height=t_height;
	pop_err();
	return this;
}
c_DisplayMode.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<189>";
	pop_err();
	return this;
}
function c_Map2(){
	Object.call(this);
	this.m_root=null;
}
c_Map2.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<7>";
	pop_err();
	return this;
}
c_Map2.prototype.p_Compare2=function(t_lhs,t_rhs){
}
c_Map2.prototype.p_FindNode2=function(t_key){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<157>";
	var t_node=this.m_root;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<159>";
	while((t_node)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<160>";
		var t_cmp=this.p_Compare2(t_key,dbg_object(t_node).m_key);
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<161>";
		if(t_cmp>0){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<162>";
			t_node=dbg_object(t_node).m_right;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<163>";
			if(t_cmp<0){
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<164>";
				t_node=dbg_object(t_node).m_left;
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<166>";
				pop_err();
				return t_node;
			}
		}
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<169>";
	pop_err();
	return t_node;
}
c_Map2.prototype.p_Contains2=function(t_key){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<25>";
	var t_=this.p_FindNode2(t_key)!=null;
	pop_err();
	return t_;
}
c_Map2.prototype.p_RotateLeft2=function(t_node){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<251>";
	var t_child=dbg_object(t_node).m_right;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<252>";
	dbg_object(t_node).m_right=dbg_object(t_child).m_left;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<253>";
	if((dbg_object(t_child).m_left)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<254>";
		dbg_object(dbg_object(t_child).m_left).m_parent=t_node;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<256>";
	dbg_object(t_child).m_parent=dbg_object(t_node).m_parent;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<257>";
	if((dbg_object(t_node).m_parent)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<258>";
		if(t_node==dbg_object(dbg_object(t_node).m_parent).m_left){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<259>";
			dbg_object(dbg_object(t_node).m_parent).m_left=t_child;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<261>";
			dbg_object(dbg_object(t_node).m_parent).m_right=t_child;
		}
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<264>";
		this.m_root=t_child;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<266>";
	dbg_object(t_child).m_left=t_node;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<267>";
	dbg_object(t_node).m_parent=t_child;
	pop_err();
	return 0;
}
c_Map2.prototype.p_RotateRight2=function(t_node){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<271>";
	var t_child=dbg_object(t_node).m_left;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<272>";
	dbg_object(t_node).m_left=dbg_object(t_child).m_right;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<273>";
	if((dbg_object(t_child).m_right)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<274>";
		dbg_object(dbg_object(t_child).m_right).m_parent=t_node;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<276>";
	dbg_object(t_child).m_parent=dbg_object(t_node).m_parent;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<277>";
	if((dbg_object(t_node).m_parent)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<278>";
		if(t_node==dbg_object(dbg_object(t_node).m_parent).m_right){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<279>";
			dbg_object(dbg_object(t_node).m_parent).m_right=t_child;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<281>";
			dbg_object(dbg_object(t_node).m_parent).m_left=t_child;
		}
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<284>";
		this.m_root=t_child;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<286>";
	dbg_object(t_child).m_right=t_node;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<287>";
	dbg_object(t_node).m_parent=t_child;
	pop_err();
	return 0;
}
c_Map2.prototype.p_InsertFixup2=function(t_node){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<212>";
	while(((dbg_object(t_node).m_parent)!=null) && dbg_object(dbg_object(t_node).m_parent).m_color==-1 && ((dbg_object(dbg_object(t_node).m_parent).m_parent)!=null)){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<213>";
		if(dbg_object(t_node).m_parent==dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_left){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<214>";
			var t_uncle=dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_right;
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<215>";
			if(((t_uncle)!=null) && dbg_object(t_uncle).m_color==-1){
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<216>";
				dbg_object(dbg_object(t_node).m_parent).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<217>";
				dbg_object(t_uncle).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<218>";
				dbg_object(dbg_object(t_uncle).m_parent).m_color=-1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<219>";
				t_node=dbg_object(t_uncle).m_parent;
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<221>";
				if(t_node==dbg_object(dbg_object(t_node).m_parent).m_right){
					err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<222>";
					t_node=dbg_object(t_node).m_parent;
					err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<223>";
					this.p_RotateLeft2(t_node);
				}
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<225>";
				dbg_object(dbg_object(t_node).m_parent).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<226>";
				dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_color=-1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<227>";
				this.p_RotateRight2(dbg_object(dbg_object(t_node).m_parent).m_parent);
			}
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<230>";
			var t_uncle2=dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_left;
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<231>";
			if(((t_uncle2)!=null) && dbg_object(t_uncle2).m_color==-1){
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<232>";
				dbg_object(dbg_object(t_node).m_parent).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<233>";
				dbg_object(t_uncle2).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<234>";
				dbg_object(dbg_object(t_uncle2).m_parent).m_color=-1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<235>";
				t_node=dbg_object(t_uncle2).m_parent;
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<237>";
				if(t_node==dbg_object(dbg_object(t_node).m_parent).m_left){
					err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<238>";
					t_node=dbg_object(t_node).m_parent;
					err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<239>";
					this.p_RotateRight2(t_node);
				}
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<241>";
				dbg_object(dbg_object(t_node).m_parent).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<242>";
				dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_color=-1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<243>";
				this.p_RotateLeft2(dbg_object(dbg_object(t_node).m_parent).m_parent);
			}
		}
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<247>";
	dbg_object(this.m_root).m_color=1;
	pop_err();
	return 0;
}
c_Map2.prototype.p_Set2=function(t_key,t_value){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<29>";
	var t_node=this.m_root;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<30>";
	var t_parent=null;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<30>";
	var t_cmp=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<32>";
	while((t_node)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<33>";
		t_parent=t_node;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<34>";
		t_cmp=this.p_Compare2(t_key,dbg_object(t_node).m_key);
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<35>";
		if(t_cmp>0){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<36>";
			t_node=dbg_object(t_node).m_right;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<37>";
			if(t_cmp<0){
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<38>";
				t_node=dbg_object(t_node).m_left;
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<40>";
				dbg_object(t_node).m_value=t_value;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<41>";
				pop_err();
				return false;
			}
		}
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<45>";
	t_node=c_Node2.m_new.call(new c_Node2,t_key,t_value,-1,t_parent);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<47>";
	if((t_parent)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<48>";
		if(t_cmp>0){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<49>";
			dbg_object(t_parent).m_right=t_node;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<51>";
			dbg_object(t_parent).m_left=t_node;
		}
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<53>";
		this.p_InsertFixup2(t_node);
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<55>";
		this.m_root=t_node;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<57>";
	pop_err();
	return true;
}
c_Map2.prototype.p_Insert=function(t_key,t_value){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<146>";
	var t_=this.p_Set2(t_key,t_value);
	pop_err();
	return t_;
}
function c_IntMap(){
	c_Map2.call(this);
}
c_IntMap.prototype=extend_class(c_Map2);
c_IntMap.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<534>";
	c_Map2.m_new.call(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<534>";
	pop_err();
	return this;
}
c_IntMap.prototype.p_Compare2=function(t_lhs,t_rhs){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<537>";
	var t_=t_lhs-t_rhs;
	pop_err();
	return t_;
}
function c_Stack(){
	Object.call(this);
	this.m_data=[];
	this.m_length=0;
}
c_Stack.m_new=function(){
	push_err();
	pop_err();
	return this;
}
c_Stack.m_new2=function(t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/stack.monkey<13>";
	dbg_object(this).m_data=t_data.slice(0);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/stack.monkey<14>";
	dbg_object(this).m_length=t_data.length;
	pop_err();
	return this;
}
c_Stack.prototype.p_Push=function(t_value){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/stack.monkey<67>";
	if(this.m_length==this.m_data.length){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/stack.monkey<68>";
		this.m_data=resize_object_array(this.m_data,this.m_length*2+10);
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/stack.monkey<70>";
	dbg_array(this.m_data,this.m_length)[dbg_index]=t_value;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/stack.monkey<71>";
	this.m_length+=1;
	pop_err();
}
c_Stack.prototype.p_Push2=function(t_values,t_offset,t_count){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/stack.monkey<79>";
	for(var t_i=0;t_i<t_count;t_i=t_i+1){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/stack.monkey<80>";
		this.p_Push(dbg_array(t_values,t_offset+t_i)[dbg_index]);
	}
	pop_err();
}
c_Stack.prototype.p_Push3=function(t_values,t_offset){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/stack.monkey<75>";
	this.p_Push2(t_values,t_offset,t_values.length-t_offset);
	pop_err();
}
c_Stack.prototype.p_ToArray=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/stack.monkey<18>";
	var t_t=new_object_array(this.m_length);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/stack.monkey<19>";
	for(var t_i=0;t_i<this.m_length;t_i=t_i+1){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/stack.monkey<20>";
		dbg_array(t_t,t_i)[dbg_index]=dbg_array(this.m_data,t_i)[dbg_index];
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/stack.monkey<22>";
	pop_err();
	return t_t;
}
function c_Node2(){
	Object.call(this);
	this.m_key=0;
	this.m_right=null;
	this.m_left=null;
	this.m_value=null;
	this.m_color=0;
	this.m_parent=null;
}
c_Node2.m_new=function(t_key,t_value,t_color,t_parent){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<364>";
	dbg_object(this).m_key=t_key;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<365>";
	dbg_object(this).m_value=t_value;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<366>";
	dbg_object(this).m_color=t_color;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<367>";
	dbg_object(this).m_parent=t_parent;
	pop_err();
	return this;
}
c_Node2.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<361>";
	pop_err();
	return this;
}
var bb_app__displayModes=[];
var bb_app__desktopMode=null;
function bb_app_DeviceWidth(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<263>";
	pop_err();
	return bb_app__devWidth;
}
function bb_app_DeviceHeight(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<267>";
	pop_err();
	return bb_app__devHeight;
}
function bb_app_EnumDisplayModes(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<33>";
	var t_modes=bb_app__game.GetDisplayModes();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<34>";
	var t_mmap=c_IntMap.m_new.call(new c_IntMap);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<35>";
	var t_mstack=c_Stack.m_new.call(new c_Stack);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<36>";
	for(var t_i=0;t_i<t_modes.length;t_i=t_i+1){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<37>";
		var t_w=dbg_object(dbg_array(t_modes,t_i)[dbg_index]).width;
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<38>";
		var t_h=dbg_object(dbg_array(t_modes,t_i)[dbg_index]).height;
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<39>";
		var t_size=t_w<<16|t_h;
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<40>";
		if(t_mmap.p_Contains2(t_size)){
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<42>";
			var t_mode=c_DisplayMode.m_new.call(new c_DisplayMode,dbg_object(dbg_array(t_modes,t_i)[dbg_index]).width,dbg_object(dbg_array(t_modes,t_i)[dbg_index]).height);
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<43>";
			t_mmap.p_Insert(t_size,t_mode);
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<44>";
			t_mstack.p_Push(t_mode);
		}
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<47>";
	bb_app__displayModes=t_mstack.p_ToArray();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<48>";
	var t_mode2=bb_app__game.GetDesktopMode();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<49>";
	if((t_mode2)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<50>";
		bb_app__desktopMode=c_DisplayMode.m_new.call(new c_DisplayMode,dbg_object(t_mode2).width,dbg_object(t_mode2).height);
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<52>";
		bb_app__desktopMode=c_DisplayMode.m_new.call(new c_DisplayMode,bb_app_DeviceWidth(),bb_app_DeviceHeight());
	}
	pop_err();
}
var bb_graphics_renderDevice=null;
function bb_graphics_SetMatrix(t_ix,t_iy,t_jx,t_jy,t_tx,t_ty){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<312>";
	dbg_object(bb_graphics_context).m_ix=t_ix;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<313>";
	dbg_object(bb_graphics_context).m_iy=t_iy;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<314>";
	dbg_object(bb_graphics_context).m_jx=t_jx;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<315>";
	dbg_object(bb_graphics_context).m_jy=t_jy;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<316>";
	dbg_object(bb_graphics_context).m_tx=t_tx;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<317>";
	dbg_object(bb_graphics_context).m_ty=t_ty;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<318>";
	dbg_object(bb_graphics_context).m_tformed=((t_ix!=1.0 || t_iy!=0.0 || t_jx!=0.0 || t_jy!=1.0 || t_tx!=0.0 || t_ty!=0.0)?1:0);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<319>";
	dbg_object(bb_graphics_context).m_matDirty=1;
	pop_err();
	return 0;
}
function bb_graphics_SetMatrix2(t_m){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<308>";
	bb_graphics_SetMatrix(dbg_array(t_m,0)[dbg_index],dbg_array(t_m,1)[dbg_index],dbg_array(t_m,2)[dbg_index],dbg_array(t_m,3)[dbg_index],dbg_array(t_m,4)[dbg_index],dbg_array(t_m,5)[dbg_index]);
	pop_err();
	return 0;
}
function bb_graphics_SetColor(t_r,t_g,t_b){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<254>";
	dbg_object(bb_graphics_context).m_color_r=t_r;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<255>";
	dbg_object(bb_graphics_context).m_color_g=t_g;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<256>";
	dbg_object(bb_graphics_context).m_color_b=t_b;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<257>";
	bb_graphics_renderDevice.SetColor(t_r,t_g,t_b);
	pop_err();
	return 0;
}
function bb_graphics_SetAlpha(t_alpha){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<271>";
	dbg_object(bb_graphics_context).m_alpha=t_alpha;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<272>";
	bb_graphics_renderDevice.SetAlpha(t_alpha);
	pop_err();
	return 0;
}
function bb_graphics_SetBlend(t_blend){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<280>";
	dbg_object(bb_graphics_context).m_blend=t_blend;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<281>";
	bb_graphics_renderDevice.SetBlend(t_blend);
	pop_err();
	return 0;
}
function bb_graphics_SetScissor(t_x,t_y,t_width,t_height){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<289>";
	dbg_object(bb_graphics_context).m_scissor_x=t_x;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<290>";
	dbg_object(bb_graphics_context).m_scissor_y=t_y;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<291>";
	dbg_object(bb_graphics_context).m_scissor_width=t_width;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<292>";
	dbg_object(bb_graphics_context).m_scissor_height=t_height;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<293>";
	bb_graphics_renderDevice.SetScissor(((t_x)|0),((t_y)|0),((t_width)|0),((t_height)|0));
	pop_err();
	return 0;
}
function bb_graphics_BeginRender(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<225>";
	bb_graphics_renderDevice=bb_graphics_device;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<226>";
	dbg_object(bb_graphics_context).m_matrixSp=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<227>";
	bb_graphics_SetMatrix(1.0,0.0,0.0,1.0,0.0,0.0);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<228>";
	bb_graphics_SetColor(255.0,255.0,255.0);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<229>";
	bb_graphics_SetAlpha(1.0);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<230>";
	bb_graphics_SetBlend(0);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<231>";
	bb_graphics_SetScissor(0.0,0.0,(bb_app_DeviceWidth()),(bb_app_DeviceHeight()));
	pop_err();
	return 0;
}
function bb_graphics_EndRender(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<235>";
	bb_graphics_renderDevice=null;
	pop_err();
	return 0;
}
function c_BBGameEvent(){
	Object.call(this);
}
function bb_app_EndApp(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<259>";
	error("");
	pop_err();
}
var bb_app__updateRate=0;
function bb_app_SetUpdateRate(t_hertz){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<224>";
	bb_app__updateRate=t_hertz;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<225>";
	bb_app__game.SetUpdateRate(t_hertz);
	pop_err();
}
var bb_gui_lWidth=0;
var bb_gui_g_x_offset=0;
var bb_engine_vScnHeight=0;
var bb_gui_g_scale=0;
var bb_engine_vScnWidth=0;
function c_NInput(){
	Object.call(this);
}
c_NInput.m_V_A=null;
c_NInput.m_V_B=null;
c_NInput.m_V_Start=null;
c_NInput.m_V_UP=null;
c_NInput.m_V_DOWN=null;
c_NInput.m_V_LEFT=null;
c_NInput.m_V_RIGHT=null;
c_NInput.m_UpdateVirtualControls=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<52>";
	if(c_NInput.m_V_Start==null){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<52>";
		pop_err();
		return 0;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<54>";
	var t_height=(((bb_app_DeviceHeight())/bb_gui_g_scale-144.0)|0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<56>";
	var t_difference=((t_height/4)|0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<58>";
	c_NInput.m_V_A.p_Set4(104,144+t_difference+32+((t_difference/8)|0),30,30);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<59>";
	c_NInput.m_V_B.p_Set4(120,144+t_difference+2-((t_difference/8)|0),30,30);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<61>";
	c_NInput.m_V_Start.p_Set4((((bb_app_DeviceWidth())/bb_gui_g_scale/2.0-32.0)|0),(((bb_app_DeviceHeight())/bb_gui_g_scale-14.0-((t_difference/3)|0))|0),38,16);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<63>";
	c_NInput.m_V_UP.p_Set4(24,144+(t_difference+24)-21,20,24);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<64>";
	c_NInput.m_V_DOWN.p_Set4(24,144+(t_difference+24)+17,20,24);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<66>";
	c_NInput.m_V_LEFT.p_Set4(4,144+t_difference+24,24,20);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<67>";
	c_NInput.m_V_RIGHT.p_Set4(40,144+t_difference+24,24,20);
	pop_err();
	return 0;
}
c_NInput.m_CreateVirtualControls=function(t_type){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<26>";
	var t_height=(((bb_app_DeviceHeight())/bb_gui_g_scale-144.0)|0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<28>";
	var t_difference=((t_height/4)|0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<30>";
	var t_1=t_type;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<31>";
	if(t_1==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<32>";
		c_NInput.m_V_A=c_GButton.m_new.call(new c_GButton,104,144+t_difference+32+((t_difference/8)|0),30,30);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<33>";
		dbg_object(c_NInput.m_V_A).m_text="A";
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<34>";
		c_NInput.m_V_B=c_GButton.m_new.call(new c_GButton,120,144+t_difference+2-((t_difference/8)|0),30,30);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<35>";
		dbg_object(c_NInput.m_V_B).m_text="B";
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<37>";
		c_NInput.m_V_Start=c_GButton.m_new.call(new c_GButton,(((bb_app_DeviceWidth())/bb_gui_g_scale/2.0-32.0)|0),(((bb_app_DeviceHeight())/bb_gui_g_scale-14.0)|0),38,16);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<38>";
		dbg_object(c_NInput.m_V_Start).m_text="START";
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<40>";
		c_NInput.m_V_UP=c_GButton.m_new.call(new c_GButton,24,144+(t_difference+24)-21,20,24);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<41>";
		c_NInput.m_V_DOWN=c_GButton.m_new.call(new c_GButton,24,144+(t_difference+24)+17,20,24);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<43>";
		c_NInput.m_V_LEFT=c_GButton.m_new.call(new c_GButton,4,144+t_difference+24,24,20);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<44>";
		c_NInput.m_V_RIGHT=c_GButton.m_new.call(new c_GButton,40,144+t_difference+24,24,20);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<48>";
	c_NInput.m_UpdateVirtualControls();
	pop_err();
	return 0;
}
c_NInput.m_Draw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<251>";
	c_GWindowDrawer.m_Draw(0,144,160,(((bb_app_DeviceHeight())/bb_gui_g_scale-140.0)|0));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<253>";
	if((c_NInput.m_V_A)!=null){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<254>";
		c_NInput.m_V_A.p_Draw();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<255>";
		c_NInput.m_V_B.p_Draw();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<257>";
		c_NInput.m_V_UP.p_Draw();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<258>";
		c_NInput.m_V_DOWN.p_Draw();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<259>";
		c_NInput.m_V_LEFT.p_Draw();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<260>";
		c_NInput.m_V_RIGHT.p_Draw();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<262>";
		c_NInput.m_V_Start.p_Draw();
	}
	pop_err();
}
c_NInput.m_VirtualX=0;
c_NInput.m_VirtualY=0;
c_NInput.m_currentPoll=0;
c_NInput.m_pollSpeed=0;
c_NInput.m_Update=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<229>";
	c_NInput.m_VirtualX=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<230>";
	c_NInput.m_VirtualY=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<232>";
	if((c_NInput.m_V_A)!=null){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<233>";
		c_NInput.m_V_A.p_Update();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<234>";
		c_NInput.m_V_B.p_Update();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<236>";
		c_NInput.m_V_UP.p_Update();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<237>";
		c_NInput.m_V_DOWN.p_Update();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<238>";
		c_NInput.m_V_LEFT.p_Update();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<239>";
		c_NInput.m_V_RIGHT.p_Update();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<241>";
		c_NInput.m_V_Start.p_Update();
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<244>";
	c_NInput.m_currentPoll=(c_NInput.m_currentPoll+1) % c_NInput.m_pollSpeed;
	pop_err();
}
c_NInput.m_lastJoyY=0;
c_NInput.m_lastJoyX=0;
c_NInput.m_IsHit=function(t_keycode){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<72>";
	var t_2=t_keycode;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<73>";
	if(t_2==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<74>";
		if(c_NInput.m_VirtualY>0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<74>";
			pop_err();
			return true;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<75>";
		if((bb_input_KeyHit(38))!=0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<75>";
			pop_err();
			return true;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<76>";
		if((bb_input_JoyHit(9,0))!=0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<76>";
			pop_err();
			return true;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<77>";
		if((c_NInput.m_V_UP)!=null){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<77>";
			if(dbg_object(c_NInput.m_V_UP).m_isHit){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<77>";
				pop_err();
				return true;
			}
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<78>";
			if(bb_input_JoyY(0,0)>0.5 && c_NInput.m_lastJoyY<1){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<78>";
				c_NInput.m_lastJoyY=1;
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<78>";
				pop_err();
				return true;
			}
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<79>";
			c_NInput.m_lastJoyY=0;
		}
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<80>";
		if(t_2==1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<81>";
			if(c_NInput.m_VirtualY<0){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<81>";
				pop_err();
				return true;
			}
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<82>";
			if((bb_input_KeyHit(40))!=0){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<82>";
				pop_err();
				return true;
			}
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<83>";
			if((bb_input_JoyHit(11,0))!=0){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<83>";
				pop_err();
				return true;
			}
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<84>";
			if((c_NInput.m_V_DOWN)!=null){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<84>";
				if(dbg_object(c_NInput.m_V_DOWN).m_isHit){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<84>";
					pop_err();
					return true;
				}
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<85>";
				if(bb_input_JoyY(0,0)<-0.5 && c_NInput.m_lastJoyY>-1){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<85>";
					c_NInput.m_lastJoyY=-1;
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<85>";
					pop_err();
					return true;
				}
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<86>";
				c_NInput.m_lastJoyY=0;
			}
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<87>";
			if(t_2==2){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<88>";
				if(c_NInput.m_VirtualX>0){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<88>";
					pop_err();
					return true;
				}
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<89>";
				if((bb_input_KeyHit(39))!=0){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<89>";
					pop_err();
					return true;
				}
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<90>";
				if((bb_input_JoyHit(10,0))!=0){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<90>";
					pop_err();
					return true;
				}
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<91>";
				if((c_NInput.m_V_RIGHT)!=null){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<91>";
					if(dbg_object(c_NInput.m_V_RIGHT).m_isHit){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<91>";
						pop_err();
						return true;
					}
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<92>";
					if(bb_input_JoyX(0,0)>0.5 && c_NInput.m_lastJoyX>1){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<92>";
						c_NInput.m_lastJoyX=1;
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<92>";
						pop_err();
						return true;
					}
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<93>";
					c_NInput.m_lastJoyY=0;
				}
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<94>";
				if(t_2==3){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<95>";
					if(c_NInput.m_VirtualX<0){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<95>";
						pop_err();
						return true;
					}
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<96>";
					if((bb_input_KeyHit(37))!=0){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<96>";
						pop_err();
						return true;
					}
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<97>";
					if((bb_input_JoyHit(8,0))!=0){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<97>";
						pop_err();
						return true;
					}
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<98>";
					if((c_NInput.m_V_LEFT)!=null){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<98>";
						if(dbg_object(c_NInput.m_V_LEFT).m_isHit){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<98>";
							pop_err();
							return true;
						}
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<99>";
						if(bb_input_JoyX(0,0)<-0.5 && c_NInput.m_lastJoyX>-1){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<99>";
							c_NInput.m_lastJoyX=-1;
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<99>";
							pop_err();
							return true;
						}
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<100>";
						c_NInput.m_lastJoyY=0;
					}
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<102>";
					if(t_2==5){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<103>";
						if((bb_input_KeyHit(90))!=0){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<103>";
							pop_err();
							return true;
						}
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<104>";
						if((bb_input_JoyHit(0,0))!=0){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<104>";
							pop_err();
							return true;
						}
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<105>";
						if((c_NInput.m_V_A)!=null){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<105>";
							if(dbg_object(c_NInput.m_V_A).m_isHit){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<105>";
								pop_err();
								return true;
							}
						}
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<107>";
						if(t_2==6){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<108>";
							if((bb_input_KeyHit(88))!=0){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<108>";
								pop_err();
								return true;
							}
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<109>";
							if((bb_input_JoyHit(1,0))!=0){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<109>";
								pop_err();
								return true;
							}
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<110>";
							if((c_NInput.m_V_B)!=null){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<110>";
								if(dbg_object(c_NInput.m_V_B).m_isHit){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<110>";
									pop_err();
									return true;
								}
							}
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<112>";
							if(t_2==8){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<113>";
								if((bb_input_KeyHit(13))!=0){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<113>";
									pop_err();
									return true;
								}
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<114>";
								if((bb_input_KeyHit(32))!=0){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<114>";
									pop_err();
									return true;
								}
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<115>";
								if((bb_input_JoyHit(7,0))!=0){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<115>";
									pop_err();
									return true;
								}
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<116>";
								if((c_NInput.m_V_Start)!=null){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<116>";
									if(dbg_object(c_NInput.m_V_Start).m_isHit){
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<116>";
										pop_err();
										return true;
									}
								}
							}
						}
					}
				}
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<119>";
	pop_err();
	return false;
}
c_NInput.m_IsDown=function(t_keycode){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<123>";
	var t_3=t_keycode;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<124>";
	if(t_3==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<125>";
		if(c_NInput.m_VirtualY>0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<125>";
			pop_err();
			return true;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<126>";
		if((bb_input_KeyDown(38))!=0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<126>";
			pop_err();
			return true;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<127>";
		if((bb_input_JoyDown(9,0))!=0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<127>";
			pop_err();
			return true;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<128>";
		if((c_NInput.m_V_UP)!=null){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<128>";
			if(dbg_object(c_NInput.m_V_UP).m_isDown){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<128>";
				pop_err();
				return true;
			}
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<129>";
			if(bb_input_JoyY(0,0)>0.5){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<129>";
				pop_err();
				return true;
			}
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<130>";
			c_NInput.m_lastJoyY=0;
		}
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<131>";
		if(t_3==1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<132>";
			if(c_NInput.m_VirtualY<0){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<132>";
				pop_err();
				return true;
			}
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<133>";
			if((bb_input_KeyDown(40))!=0){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<133>";
				pop_err();
				return true;
			}
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<134>";
			if((bb_input_JoyDown(11,0))!=0){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<134>";
				pop_err();
				return true;
			}
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<135>";
			if((c_NInput.m_V_DOWN)!=null){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<135>";
				if(dbg_object(c_NInput.m_V_DOWN).m_isDown){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<135>";
					pop_err();
					return true;
				}
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<136>";
				if(bb_input_JoyY(0,0)<-0.5){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<136>";
					pop_err();
					return true;
				}
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<137>";
				c_NInput.m_lastJoyY=0;
			}
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<138>";
			if(t_3==2){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<139>";
				if(c_NInput.m_VirtualX>0){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<139>";
					pop_err();
					return true;
				}
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<140>";
				if((bb_input_KeyDown(39))!=0){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<140>";
					pop_err();
					return true;
				}
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<141>";
				if((bb_input_JoyDown(10,0))!=0){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<141>";
					pop_err();
					return true;
				}
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<142>";
				if((c_NInput.m_V_RIGHT)!=null){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<142>";
					if(dbg_object(c_NInput.m_V_RIGHT).m_isDown){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<142>";
						pop_err();
						return true;
					}
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<143>";
					if(bb_input_JoyX(0,0)>0.5){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<143>";
						pop_err();
						return true;
					}
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<144>";
					c_NInput.m_lastJoyY=0;
				}
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<145>";
				if(t_3==3){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<146>";
					if(c_NInput.m_VirtualX<0){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<146>";
						pop_err();
						return true;
					}
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<147>";
					if((bb_input_KeyDown(37))!=0){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<147>";
						pop_err();
						return true;
					}
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<148>";
					if((bb_input_JoyDown(8,0))!=0){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<148>";
						pop_err();
						return true;
					}
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<149>";
					if((c_NInput.m_V_LEFT)!=null){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<149>";
						if(dbg_object(c_NInput.m_V_LEFT).m_isDown){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<149>";
							pop_err();
							return true;
						}
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<150>";
						if(bb_input_JoyX(0,0)<-0.5){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<150>";
							pop_err();
							return true;
						}
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<151>";
						c_NInput.m_lastJoyY=0;
					}
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<153>";
					if(t_3==5){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<154>";
						if((bb_input_KeyDown(90))!=0){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<154>";
							pop_err();
							return true;
						}
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<155>";
						if((bb_input_JoyDown(0,0))!=0){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<155>";
							pop_err();
							return true;
						}
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<156>";
						if((c_NInput.m_V_A)!=null){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<156>";
							if(dbg_object(c_NInput.m_V_A).m_isDown){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<156>";
								pop_err();
								return true;
							}
						}
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<158>";
						if(t_3==6){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<159>";
							if((bb_input_KeyDown(88))!=0){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<159>";
								pop_err();
								return true;
							}
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<160>";
							if((bb_input_JoyDown(1,0))!=0){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<160>";
								pop_err();
								return true;
							}
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<161>";
							if((c_NInput.m_V_B)!=null){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<161>";
								if(dbg_object(c_NInput.m_V_B).m_isDown){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<161>";
									pop_err();
									return true;
								}
							}
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<163>";
							if(t_3==8){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<164>";
								if((bb_input_KeyDown(13))!=0){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<164>";
									pop_err();
									return true;
								}
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<165>";
								if((bb_input_KeyDown(32))!=0){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<165>";
									pop_err();
									return true;
								}
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<166>";
								if((bb_input_JoyDown(7,0))!=0){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<166>";
									pop_err();
									return true;
								}
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<167>";
								if((c_NInput.m_V_Start)!=null){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<167>";
									if(dbg_object(c_NInput.m_V_Start).m_isDown){
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<167>";
										pop_err();
										return true;
									}
								}
							}
						}
					}
				}
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<170>";
	pop_err();
	return false;
}
c_NInput.m_GetXAxis=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<174>";
	var t_result=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<175>";
	if(c_NInput.m_IsHit(2)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<175>";
		t_result=1;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<176>";
	if(c_NInput.m_IsHit(3)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<176>";
		t_result=-1;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<178>";
	if(c_NInput.m_currentPoll==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<179>";
		if(c_NInput.m_IsDown(2)){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<179>";
			t_result=1;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<180>";
		if(c_NInput.m_IsDown(3)){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<180>";
			t_result=-1;
		}
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<181>";
		if(t_result!=0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<182>";
			c_NInput.m_currentPoll=0;
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<185>";
	pop_err();
	return t_result;
}
c_NInput.m_GetYAxis=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<189>";
	var t_result=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<190>";
	if(c_NInput.m_IsHit(1)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<190>";
		t_result+=1;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<191>";
	if(c_NInput.m_IsHit(0)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<191>";
		t_result-=1;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<193>";
	if(c_NInput.m_currentPoll==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<194>";
		if(c_NInput.m_IsDown(1)){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<194>";
			t_result+=1;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<195>";
		if(c_NInput.m_IsDown(0)){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<195>";
			t_result-=1;
		}
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<196>";
		if(t_result!=0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<197>";
			c_NInput.m_currentPoll=0;
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/input.monkey<199>";
	pop_err();
	return t_result;
}
function c_GRect(){
	Object.call(this);
	this.m_x=0;
	this.m_y=0;
	this.m_w=0;
	this.m_h=0;
}
c_GRect.m_new=function(t_xx,t_yy,t_ww,t_hh){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<51>";
	this.m_x=t_xx;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<52>";
	this.m_y=t_yy;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<53>";
	this.m_w=t_ww;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<54>";
	this.m_h=t_hh;
	pop_err();
	return this;
}
c_GRect.m_new2=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<47>";
	pop_err();
	return this;
}
c_GRect.prototype.p_Set3=function(t_xx,t_yy){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<58>";
	this.m_x=t_xx;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<59>";
	this.m_y=t_yy;
	pop_err();
}
c_GRect.prototype.p_Set4=function(t_xx,t_yy,t_ww,t_hh){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<63>";
	this.m_x=t_xx;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<64>";
	this.m_y=t_yy;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<65>";
	this.m_w=t_ww;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<66>";
	this.m_h=t_hh;
	pop_err();
}
function c_GButton(){
	c_GRect.call(this);
	this.m_text="";
	this.m_isDown=false;
	this.m_justify=0;
	this.m_isHit=false;
	this.m_isHover=false;
	this.m_nominalDown=false;
}
c_GButton.prototype=extend_class(c_GRect);
c_GButton.m_new=function(t_xx,t_yy,t_ww,t_hh){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<74>";
	c_GRect.m_new2.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<75>";
	this.m_x=t_xx;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<76>";
	this.m_y=t_yy;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<77>";
	this.m_w=t_ww;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<78>";
	this.m_h=t_hh;
	pop_err();
	return this;
}
c_GButton.m_new2=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<70>";
	c_GRect.m_new2.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<70>";
	pop_err();
	return this;
}
c_GButton.prototype.p_Draw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<82>";
	if(this.m_isDown){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<83>";
		c_GClearScreen.m_ToGrey();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<84>";
		bb_graphics_DrawRect((this.m_x),(this.m_y),(this.m_w),(this.m_h));
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<85>";
		bb_graphics_SetColor(255.0,255.0,255.0);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<87>";
	c_GWindowDrawer.m_Draw(this.m_x,this.m_y,this.m_w,this.m_h);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<88>";
	if(this.m_justify<0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<89>";
		bb_gui_GDrawTextPreserveBlend(this.m_text,this.m_x+3,this.m_y+((this.m_h/2)|0)-4);
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<90>";
		if(this.m_justify>0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<91>";
			bb_gui_GDrawTextPreserveBlend(this.m_text,this.m_x-this.m_text.length*6-3,this.m_y+((this.m_h/2)|0)-4);
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<93>";
			bb_gui_GDrawTextPreserveBlend(this.m_text,this.m_x+(((this.m_w/2)|0)-this.m_text.length*3),this.m_y+((this.m_h/2)|0)-4);
		}
	}
	pop_err();
}
c_GButton.prototype.p_Check=function(t_input){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<111>";
	if(bb_input_TouchX(t_input)/bb_gui_g_scale<(this.m_x)){
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<112>";
	if(bb_input_TouchX(t_input)/bb_gui_g_scale>(this.m_x+this.m_w)){
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<113>";
	if(bb_input_TouchY(t_input)/bb_gui_g_scale<(this.m_y)){
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<114>";
	if(bb_input_TouchY(t_input)/bb_gui_g_scale>(this.m_y+this.m_h)){
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<116>";
	this.m_isHover=true;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<117>";
	if((bb_input_TouchDown(t_input))!=0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<118>";
		if(this.m_isDown==false){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<118>";
			this.m_isHit=true;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<119>";
		this.m_isDown=true;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<120>";
		this.m_nominalDown=true;
	}
	pop_err();
}
c_GButton.prototype.p_Update=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<98>";
	this.m_isHit=false;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<99>";
	this.m_isHover=false;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<100>";
	this.m_nominalDown=false;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<102>";
	for(var t_count=0;t_count<=5;t_count=t_count+1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<103>";
		this.p_Check(t_count);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<107>";
	if(!this.m_nominalDown){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<107>";
		this.m_isDown=false;
	}
	pop_err();
}
function bb_app_LoadState(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<212>";
	var t_=bb_app__game.LoadState();
	pop_err();
	return t_;
}
function bb_engine_NLog(t_msg,t_pri){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<78>";
	if(t_pri==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<79>";
		print("[NQ] "+t_msg);
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<80>";
		if(t_pri==1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<81>";
			print("[NQ_WARNING] "+t_msg);
		}
	}
	pop_err();
}
function c_JSONData(){
	Object.call(this);
}
c_JSONData.m_GetJSONObject=function(t_tokeniser){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<131>";
	var t_jsonObject=c_JSONObject.m_new.call(new c_JSONObject);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<132>";
	var t_data1=null;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<133>";
	var t_data2=null;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<136>";
	t_data1=c_JSONData.m_GetJSONDataItem(t_tokeniser);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<137>";
	if(dbg_object(t_data1).m_dataType==9 && dbg_object(dbg_object(object_downcast((t_data1),c_JSONNonData)).m_value).m_tokenType==2){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<139>";
		var t_=(t_jsonObject);
		pop_err();
		return t_;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<142>";
	do{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<143>";
		if(dbg_object(t_data1).m_dataType!=5){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<144>";
			var t_2=(c_JSONDataError.m_new.call(new c_JSONDataError,"Expected item name, got "+(t_data1.p_ToString()),t_tokeniser.p_GetCurrentSectionString(20,20)));
			pop_err();
			return t_2;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<147>";
		t_data2=c_JSONData.m_GetJSONDataItem(t_tokeniser);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<149>";
		if(dbg_object(t_data2).m_dataType!=9){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<150>";
			var t_3=(c_JSONDataError.m_new.call(new c_JSONDataError,"Expected ':', got "+(t_data2.p_ToString()),t_tokeniser.p_GetCurrentSectionString(20,20)));
			pop_err();
			return t_3;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<152>";
			if(dbg_object(dbg_object(object_downcast((t_data2),c_JSONNonData)).m_value).m_tokenType!=6){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<153>";
				var t_4=(c_JSONDataError.m_new.call(new c_JSONDataError,"Expected ':', got "+(dbg_object(object_downcast((t_data2),c_JSONNonData)).m_value.p_ToString()),t_tokeniser.p_GetCurrentSectionString(20,20)));
				pop_err();
				return t_4;
			}
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<157>";
		t_data2=c_JSONData.m_GetJSONDataItem(t_tokeniser);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<159>";
		if(dbg_object(t_data2).m_dataType==-1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<160>";
			pop_err();
			return t_data2;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<161>";
			if(dbg_object(t_data2).m_dataType==9){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<162>";
				var t_5=(c_JSONDataError.m_new.call(new c_JSONDataError,"Expected item value, got "+(dbg_object(object_downcast((t_data2),c_JSONNonData)).m_value.p_ToString()),t_tokeniser.p_GetCurrentSectionString(20,20)));
				pop_err();
				return t_5;
			}
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<165>";
		t_jsonObject.p_AddItem(dbg_object(object_downcast((t_data1),c_JSONString)).m_value,t_data2);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<166>";
		t_data2=c_JSONData.m_GetJSONDataItem(t_tokeniser);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<168>";
		if(dbg_object(t_data2).m_dataType!=9){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<169>";
			var t_6=(c_JSONDataError.m_new.call(new c_JSONDataError,"Expected ',' or '}', got "+(t_data2.p_ToString()),t_tokeniser.p_GetCurrentSectionString(20,20)));
			pop_err();
			return t_6;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<171>";
			if(dbg_object(dbg_object(object_downcast((t_data2),c_JSONNonData)).m_value).m_tokenType==2){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<172>";
				break;
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<173>";
				if(dbg_object(dbg_object(object_downcast((t_data2),c_JSONNonData)).m_value).m_tokenType!=0){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<174>";
					var t_7=(c_JSONDataError.m_new.call(new c_JSONDataError,"Expected ',' or '}', got "+(dbg_object(object_downcast((t_data2),c_JSONNonData)).m_value.p_ToString()),t_tokeniser.p_GetCurrentSectionString(20,20)));
					pop_err();
					return t_7;
				}
			}
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<177>";
		t_data1=c_JSONData.m_GetJSONDataItem(t_tokeniser);
	}while(!(false));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<180>";
	var t_8=(t_jsonObject);
	pop_err();
	return t_8;
}
c_JSONData.m_GetJSONArray=function(t_tokeniser){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<184>";
	var t_jsonArray=c_JSONArray.m_new.call(new c_JSONArray);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<185>";
	var t_data=null;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<188>";
	t_data=c_JSONData.m_GetJSONDataItem(t_tokeniser);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<189>";
	if(dbg_object(t_data).m_dataType==9 && dbg_object(dbg_object(object_downcast((t_data),c_JSONNonData)).m_value).m_tokenType==4){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<190>";
		var t_=(t_jsonArray);
		pop_err();
		return t_;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<193>";
	do{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<194>";
		if(dbg_object(t_data).m_dataType==9){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<195>";
			var t_2=(c_JSONDataError.m_new.call(new c_JSONDataError,"Expected data value, got "+(t_data.p_ToString()),t_tokeniser.p_GetCurrentSectionString(20,20)));
			pop_err();
			return t_2;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<196>";
			if(dbg_object(t_data).m_dataType==-1){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<197>";
				pop_err();
				return t_data;
			}
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<199>";
		t_jsonArray.p_AddItem2(t_data);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<201>";
		t_data=c_JSONData.m_GetJSONDataItem(t_tokeniser);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<203>";
		if(dbg_object(t_data).m_dataType==9){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<204>";
			var t_token=dbg_object(object_downcast((t_data),c_JSONNonData)).m_value;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<205>";
			if(dbg_object(t_token).m_tokenType==0){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<206>";
				t_data=c_JSONData.m_GetJSONDataItem(t_tokeniser);
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<207>";
				continue;
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<208>";
				if(dbg_object(t_token).m_tokenType==4){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<209>";
					break;
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<211>";
					var t_3=(c_JSONDataError.m_new.call(new c_JSONDataError,"Expected ',' or '], got "+(t_token.p_ToString()),t_tokeniser.p_GetCurrentSectionString(20,20)));
					pop_err();
					return t_3;
				}
			}
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<214>";
			var t_4=(c_JSONDataError.m_new.call(new c_JSONDataError,"Expected ',' or '], got "+(t_data.p_ToString()),t_tokeniser.p_GetCurrentSectionString(20,20)));
			pop_err();
			return t_4;
		}
	}while(!(false));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<218>";
	var t_5=(t_jsonArray);
	pop_err();
	return t_5;
}
c_JSONData.m_HexCharToInt=function(t_char){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<331>";
	if(t_char>=48 && t_char<=57){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<332>";
		var t_=t_char-48;
		pop_err();
		return t_;
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<333>";
		if(t_char>=65 && t_char<=70){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<334>";
			var t_2=t_char-55;
			pop_err();
			return t_2;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<335>";
			if(t_char>=97 && t_char<=102){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<336>";
				var t_3=t_char-87;
				pop_err();
				return t_3;
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<338>";
	pop_err();
	return 0;
}
c_JSONData.m_UnEscapeUnicode=function(t_hexString){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<342>";
	var t_charCode=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<343>";
	for(var t_i=0;t_i<4;t_i=t_i+1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<344>";
		t_charCode<<=4;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<345>";
		t_charCode+=c_JSONData.m_HexCharToInt(dbg_charCodeAt(t_hexString,t_i));
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<347>";
	var t_=String.fromCharCode(t_charCode);
	pop_err();
	return t_;
}
c_JSONData.m_UnEscapeJSON=function(t_input){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<287>";
	var t_escIndex=t_input.indexOf("\\",0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<289>";
	if(t_escIndex==-1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<290>";
		pop_err();
		return t_input;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<293>";
	var t_copyStartIndex=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<294>";
	var t_retString=c_StringBuilder.m_new.call(new c_StringBuilder,t_input.length);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<296>";
	while(t_escIndex!=-1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<297>";
		t_retString.p_AddString(t_input.slice(t_copyStartIndex,t_escIndex));
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<298>";
		var t_2=dbg_charCodeAt(t_input,t_escIndex+1);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<299>";
		if(t_2==110){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<300>";
			t_retString.p_AddString("\n");
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<301>";
			if(t_2==34){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<302>";
				t_retString.p_AddString("\"");
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<303>";
				if(t_2==116){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<304>";
					t_retString.p_AddString("\t");
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<305>";
					if(t_2==92){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<306>";
						t_retString.p_AddString("\\");
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<307>";
						if(t_2==47){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<308>";
							t_retString.p_AddString("/");
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<309>";
							if(t_2==114){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<310>";
								t_retString.p_AddString("\r");
							}else{
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<311>";
								if(t_2==102){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<312>";
									t_retString.p_AddString(String.fromCharCode(12));
								}else{
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<313>";
									if(t_2==98){
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<314>";
										t_retString.p_AddString(String.fromCharCode(8));
									}else{
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<315>";
										if(t_2==117){
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<316>";
											t_retString.p_AddString(c_JSONData.m_UnEscapeUnicode(t_input.slice(t_escIndex+2,t_escIndex+6)));
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<317>";
											t_escIndex+=4;
										}
									}
								}
							}
						}
					}
				}
			}
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<319>";
		t_copyStartIndex=t_escIndex+2;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<320>";
		t_escIndex=t_input.indexOf("\\",t_copyStartIndex);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<323>";
	if(t_copyStartIndex<t_input.length){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<324>";
		t_retString.p_AddString(t_input.slice(t_copyStartIndex));
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<327>";
	var t_=t_retString.p_ToString();
	pop_err();
	return t_;
}
c_JSONData.m_GetJSONDataItem=function(t_tokeniser){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<104>";
	var t_token=t_tokeniser.p_NextToken();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<106>";
	var t_1=dbg_object(t_token).m_tokenType;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<107>";
	if(t_1==1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<108>";
		var t_=c_JSONData.m_GetJSONObject(t_tokeniser);
		pop_err();
		return t_;
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<109>";
		if(t_1==3){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<110>";
			var t_2=c_JSONData.m_GetJSONArray(t_tokeniser);
			pop_err();
			return t_2;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<111>";
			if(t_1==10){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<112>";
				var t_3=(c_JSONString.m_new.call(new c_JSONString,(object_downcast((dbg_object(t_token).m_value),c_StringObject).p_ToString()),false));
				pop_err();
				return t_3;
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<113>";
				if(t_1==11){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<114>";
					var t_4=(c_JSONFloat.m_new.call(new c_JSONFloat,object_downcast((dbg_object(t_token).m_value),c_FloatObject).p_ToFloat()));
					pop_err();
					return t_4;
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<115>";
					if(t_1==12){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<116>";
						var t_5=(c_JSONFloat.m_new2.call(new c_JSONFloat,object_downcast((dbg_object(t_token).m_value),c_StringObject).p_ToString()));
						pop_err();
						return t_5;
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<117>";
						if(t_1==13){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<118>";
							var t_6=(c_JSONInteger.m_new.call(new c_JSONInteger,(object_downcast((dbg_object(t_token).m_value),c_IntObject).p_ToInt())));
							pop_err();
							return t_6;
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<119>";
							if(t_1==7){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<120>";
								var t_7=(c_JSONBool.m_new.call(new c_JSONBool,true));
								pop_err();
								return t_7;
							}else{
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<121>";
								if(t_1==8){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<122>";
									var t_8=(c_JSONBool.m_new.call(new c_JSONBool,false));
									pop_err();
									return t_8;
								}else{
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<123>";
									if(t_1==9){
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<124>";
										var t_9=(c_JSONNull.m_new.call(new c_JSONNull));
										pop_err();
										return t_9;
									}else{
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<126>";
										var t_10=(c_JSONNonData.m_new.call(new c_JSONNonData,t_token));
										pop_err();
										return t_10;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
c_JSONData.m_ReadJSON=function(t_jsonString){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<71>";
	var t_tokeniser=c_JSONTokeniser.m_new.call(new c_JSONTokeniser,t_jsonString,false);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<73>";
	var t_data=c_JSONData.m_GetJSONDataItem(t_tokeniser);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<75>";
	if(t_data==null){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<76>";
		var t_=(c_JSONDataError.m_new.call(new c_JSONDataError,"Unknown JSON error.",t_tokeniser.p_GetCurrentSectionString(20,20)));
		pop_err();
		return t_;
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<77>";
		if(dbg_object(t_data).m_dataType==-1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<78>";
			print(t_data.p_ToString());
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<79>";
			if(dbg_object(t_data).m_dataType!=1 && dbg_object(t_data).m_dataType!=2){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<80>";
				var t_2=(c_JSONDataError.m_new.call(new c_JSONDataError,"JSON Document malformed. Root node is not an object or an array",t_tokeniser.p_GetCurrentSectionString(20,20)));
				pop_err();
				return t_2;
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<83>";
	pop_err();
	return t_data;
}
c_JSONData.m_CreateJSONDataItem=function(t_value){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<88>";
	var t_=(c_JSONFloat.m_new.call(new c_JSONFloat,t_value));
	pop_err();
	return t_;
}
c_JSONData.m_CreateJSONDataItem2=function(t_value){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<92>";
	var t_=(c_JSONInteger.m_new.call(new c_JSONInteger,t_value));
	pop_err();
	return t_;
}
c_JSONData.m_CreateJSONDataItem3=function(t_value){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<96>";
	var t_=(c_JSONString.m_new.call(new c_JSONString,t_value,true));
	pop_err();
	return t_;
}
c_JSONData.m_CreateJSONDataItem4=function(t_value){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<100>";
	var t_=(c_JSONBool.m_new.call(new c_JSONBool,t_value));
	pop_err();
	return t_;
}
c_JSONData.m_IntToHexString=function(t_input){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<265>";
	var t_retString=new_string_array(4);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<266>";
	var t_index=3;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<267>";
	var t_nibble=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<268>";
	while(t_input>0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<269>";
		t_nibble=t_input&15;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<270>";
		if(t_nibble<10){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<271>";
			dbg_array(t_retString,t_index)[dbg_index]=String.fromCharCode(48+t_nibble);
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<273>";
			dbg_array(t_retString,t_index)[dbg_index]=String.fromCharCode(55+t_nibble);
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<275>";
		t_index-=1;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<276>";
		t_input>>=4;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<279>";
	while(t_index>=0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<280>";
		dbg_array(t_retString,t_index)[dbg_index]="0";
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<281>";
		t_index-=1;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<283>";
	var t_=t_retString.join("");
	pop_err();
	return t_;
}
c_JSONData.m_EscapeJSON=function(t_input){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<222>";
	var t_ch=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<223>";
	var t_retString=c_StringBuilder.m_new.call(new c_StringBuilder,t_input.length);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<224>";
	var t_lastSlice=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<226>";
	for(var t_i=0;t_i<t_input.length;t_i=t_i+1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<227>";
		t_ch=dbg_charCodeAt(t_input,t_i);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<228>";
		if(t_ch>127 || t_ch<32 || t_ch==92 || t_ch==34 || t_ch==47){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<229>";
			t_retString.p_AddString(t_input.slice(t_lastSlice,t_i));
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<230>";
			if(t_ch==34){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<231>";
				t_retString.p_AddString("\\\"");
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<232>";
				if(t_ch==10){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<233>";
					t_retString.p_AddString("\\n");
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<234>";
					if(t_ch==13){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<235>";
						t_retString.p_AddString("\\r");
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<236>";
						if(t_ch==92){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<237>";
							t_retString.p_AddString("\\\\");
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<238>";
							if(t_ch==47){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<239>";
								t_retString.p_AddString("\\/");
							}else{
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<240>";
								if(t_ch>127){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<241>";
									t_retString.p_AddString("\\u");
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<242>";
									t_retString.p_AddString(c_JSONData.m_IntToHexString(t_ch));
								}else{
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<243>";
									if(t_ch==8){
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<244>";
										t_retString.p_AddString("\\b");
									}else{
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<245>";
										if(t_ch==12){
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<246>";
											t_retString.p_AddString("\\f");
										}else{
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<247>";
											if(t_ch==9){
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<248>";
												t_retString.p_AddString("\\t");
											}
										}
									}
								}
							}
						}
					}
				}
			}
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<250>";
			t_lastSlice=t_i+1;
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<253>";
	t_retString.p_AddString(t_input.slice(t_lastSlice));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<254>";
	var t_s=t_retString.p_ToString();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<261>";
	pop_err();
	return t_s;
}
function c_JSONDataItem(){
	Object.call(this);
	this.m_dataType=7;
}
c_JSONDataItem.m_new=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<366>";
	pop_err();
	return this;
}
c_JSONDataItem.prototype.p_ToString=function(){
}
c_JSONDataItem.prototype.p_ToInt=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<371>";
	print("Unsupported conversion to Int for "+this.p_ToString());
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<372>";
	pop_err();
	return -1;
}
c_JSONDataItem.prototype.p_ToFloat=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<376>";
	print("Unsupported conversion to Float for "+this.p_ToString());
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<377>";
	pop_err();
	return -1.0;
}
c_JSONDataItem.prototype.p_ToBool=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<381>";
	print("Unsupported conversion to Bool for "+this.p_ToString());
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<382>";
	pop_err();
	return false;
}
c_JSONDataItem.prototype.p_ToJSONString=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<388>";
	var t_=this.p_ToString();
	pop_err();
	return t_;
}
function c_JSONTokeniser(){
	Object.call(this);
	this.m_silent=false;
	this.m_jsonString="";
	this.m_stringIndex=0;
	this.m_char=0;
}
c_JSONTokeniser.prototype.p_NextChar=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<197>";
	if(this.m_stringIndex>=this.m_jsonString.length){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<198>";
		this.m_char=0;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<199>";
		pop_err();
		return this.m_char;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<201>";
	this.m_char=dbg_charCodeAt(this.m_jsonString,this.m_stringIndex);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<202>";
	this.m_stringIndex+=1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<203>";
	pop_err();
	return this.m_char;
}
c_JSONTokeniser.m_new=function(t_jsonString,t_silent){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<120>";
	dbg_object(this).m_silent=t_silent;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<121>";
	dbg_object(this).m_jsonString=t_jsonString;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<122>";
	this.p_NextChar();
	pop_err();
	return this;
}
c_JSONTokeniser.m_new2=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<108>";
	pop_err();
	return this;
}
c_JSONTokeniser.prototype.p_SkipWhitespace=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<252>";
	var t_index=this.m_stringIndex;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<253>";
	while(this.m_char<=32 && this.m_char!=0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<254>";
		this.p_NextChar();
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<256>";
	var t_=this.m_stringIndex-t_index;
	pop_err();
	return t_;
}
c_JSONTokeniser.prototype.p_GetCurrentSectionString=function(t_backwards,t_forwards){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<126>";
	var t_="Section: "+this.m_jsonString.slice(bb_math_Max(this.m_stringIndex-t_backwards,0),bb_math_Min(this.m_stringIndex+t_forwards,this.m_jsonString.length));
	pop_err();
	return t_;
}
c_JSONTokeniser.prototype.p_ParseFailure=function(t_description){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<290>";
	if(this.m_silent){
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<293>";
	print("JSON parse error at index: "+String(this.m_stringIndex));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<294>";
	print(t_description);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<295>";
	print(this.p_GetCurrentSectionString(20,20));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<296>";
	this.m_stringIndex=this.m_jsonString.length;
	pop_err();
}
c_JSONTokeniser.prototype.p_SkipComments=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<260>";
	var t_index=this.m_stringIndex;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<261>";
	if(this.m_char==47){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<262>";
		this.p_NextChar();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<263>";
		if(this.m_char==47){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<264>";
			while(this.m_char!=13 && this.m_char!=10 && this.m_char!=0){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<265>";
				this.p_NextChar();
			}
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<267>";
			if(this.m_char==42){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<268>";
				do{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<269>";
					this.p_NextChar();
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<270>";
					if(this.m_char==42){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<271>";
						this.p_NextChar();
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<272>";
						if(this.m_char==47){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<273>";
							break;
						}
					}
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<276>";
					if(this.m_char==0){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<277>";
						this.p_ParseFailure("Unterminated comment");
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<278>";
						break;
					}
				}while(!(false));
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<282>";
				this.p_ParseFailure("Unrecognised comment opening");
			}
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<284>";
		this.p_NextChar();
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<286>";
	var t_=this.m_stringIndex-t_index;
	pop_err();
	return t_;
}
c_JSONTokeniser.prototype.p_SkipIgnored=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<243>";
	var t_ignoredCount=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<244>";
	do{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<245>";
		t_ignoredCount=0;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<246>";
		t_ignoredCount+=this.p_SkipWhitespace();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<247>";
		t_ignoredCount+=this.p_SkipComments();
	}while(!(t_ignoredCount==0));
	pop_err();
}
c_JSONTokeniser.prototype.p_IsDigit=function(t_char){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<239>";
	var t_=t_char>=48 && t_char<=58;
	pop_err();
	return t_;
}
c_JSONTokeniser.prototype.p_ParseInteger=function(t_str){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<230>";
	var t_=parseInt((t_str),10);
	pop_err();
	return t_;
}
c_JSONTokeniser.prototype.p_ParseNumberToken=function(t_firstChar){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<207>";
	var t_index=this.m_stringIndex-1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<210>";
	while(this.m_char!=32 && this.m_char!=44 && this.m_char!=125 && this.m_char!=93 && this.m_char!=0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<211>";
		this.p_NextChar();
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<213>";
	if(this.m_char==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<214>";
		this.p_ParseFailure("Unterminated Number");
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<215>";
		var t_=c_JSONToken.m_CreateToken4(-1,null);
		pop_err();
		return t_;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<218>";
	var t_numberString=this.m_jsonString.slice(t_index,this.m_stringIndex-1);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<220>";
	if(t_numberString.indexOf(".",0)!=-1 || t_numberString.indexOf("e",0)!=-1 || t_numberString.indexOf("E",0)!=-1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<221>";
		var t_2=c_JSONToken.m_CreateToken3(12,t_numberString);
		pop_err();
		return t_2;
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<223>";
		var t_value=this.p_ParseInteger(t_numberString);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<224>";
		var t_3=c_JSONToken.m_CreateToken2(13,t_value);
		pop_err();
		return t_3;
	}
}
c_JSONTokeniser.prototype.p_NextToken=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<130>";
	var t_retToken=null;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<131>";
	this.p_SkipIgnored();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<133>";
	var t_2=this.m_char;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<135>";
	if(t_2==123){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<136>";
		t_retToken=c_JSONToken.m_CreateToken3(1,"{");
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<137>";
		if(t_2==125){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<138>";
			t_retToken=c_JSONToken.m_CreateToken3(2,"}");
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<139>";
			if(t_2==91){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<140>";
				t_retToken=c_JSONToken.m_CreateToken3(3,"[");
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<141>";
				if(t_2==93){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<142>";
					t_retToken=c_JSONToken.m_CreateToken3(4,"]");
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<143>";
					if(t_2==44){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<144>";
						t_retToken=c_JSONToken.m_CreateToken3(0,",");
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<145>";
						if(t_2==58){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<146>";
							t_retToken=c_JSONToken.m_CreateToken3(6,":");
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<147>";
							if(t_2==116){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<148>";
								if(string_compare(this.m_jsonString.slice(this.m_stringIndex,this.m_stringIndex+3),"rue")==0){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<149>";
									this.m_stringIndex+=3;
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<150>";
									t_retToken=c_JSONToken.m_CreateToken3(7,"true");
								}
							}else{
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<152>";
								if(t_2==102){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<153>";
									if(string_compare(this.m_jsonString.slice(this.m_stringIndex,this.m_stringIndex+4),"alse")==0){
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<154>";
										this.m_stringIndex+=4;
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<155>";
										t_retToken=c_JSONToken.m_CreateToken3(8,"false");
									}
								}else{
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<157>";
									if(t_2==110){
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<158>";
										if(string_compare(this.m_jsonString.slice(this.m_stringIndex,this.m_stringIndex+3),"ull")==0){
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<159>";
											this.m_stringIndex+=3;
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<160>";
											t_retToken=c_JSONToken.m_CreateToken3(9,"null");
										}
									}else{
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<162>";
										if(t_2==34){
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<163>";
											var t_startIndex=this.m_stringIndex;
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<164>";
											var t_endIndex=this.m_jsonString.indexOf("\"",this.m_stringIndex);
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<165>";
											while(t_endIndex!=-1 && dbg_charCodeAt(this.m_jsonString,t_endIndex-1)==92){
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<166>";
												t_endIndex=this.m_jsonString.indexOf("\"",t_endIndex+1);
											}
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<168>";
											if(t_endIndex==-1){
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<169>";
												this.p_ParseFailure("Unterminated string");
											}
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<172>";
											t_retToken=c_JSONToken.m_CreateToken3(10,this.m_jsonString.slice(t_startIndex,t_endIndex));
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<173>";
											this.m_stringIndex=t_endIndex+1;
										}else{
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<177>";
											if(this.m_char==45 || this.p_IsDigit(this.m_char)){
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<178>";
												var t_=this.p_ParseNumberToken(this.m_char);
												pop_err();
												return t_;
											}else{
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<179>";
												if(this.m_char==0){
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<180>";
													t_retToken=null;
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<184>";
	if(t_retToken==null){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<185>";
		this.p_ParseFailure("Unknown token, char: "+String.fromCharCode(this.m_char));
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<186>";
		t_retToken=c_JSONToken.m_CreateToken4(-1,null);
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<188>";
		this.p_NextChar();
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<190>";
	pop_err();
	return t_retToken;
}
function c_ASCIICodes(){
	Object.call(this);
}
function c_JSONToken(){
	Object.call(this);
	this.m_tokenType=0;
	this.m_value=null;
}
c_JSONToken.m_new=function(t_tokenType,t_value){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<54>";
	dbg_object(this).m_tokenType=t_tokenType;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<55>";
	dbg_object(this).m_value=t_value;
	pop_err();
	return this;
}
c_JSONToken.m_new2=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<30>";
	pop_err();
	return this;
}
c_JSONToken.m_reusableToken=null;
c_JSONToken.m_CreateToken=function(t_tokenType,t_value){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<61>";
	dbg_object(c_JSONToken.m_reusableToken).m_tokenType=t_tokenType;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<62>";
	dbg_object(c_JSONToken.m_reusableToken).m_value=(c_FloatObject.m_new2.call(new c_FloatObject,t_value));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<63>";
	pop_err();
	return c_JSONToken.m_reusableToken;
}
c_JSONToken.m_CreateToken2=function(t_tokenType,t_value){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<67>";
	dbg_object(c_JSONToken.m_reusableToken).m_tokenType=t_tokenType;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<68>";
	dbg_object(c_JSONToken.m_reusableToken).m_value=(c_IntObject.m_new.call(new c_IntObject,t_value));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<69>";
	pop_err();
	return c_JSONToken.m_reusableToken;
}
c_JSONToken.m_CreateToken3=function(t_tokenType,t_value){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<73>";
	dbg_object(c_JSONToken.m_reusableToken).m_tokenType=t_tokenType;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<74>";
	dbg_object(c_JSONToken.m_reusableToken).m_value=(c_StringObject.m_new3.call(new c_StringObject,t_value));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<75>";
	pop_err();
	return c_JSONToken.m_reusableToken;
}
c_JSONToken.m_CreateToken4=function(t_tokenType,t_value){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<79>";
	dbg_object(c_JSONToken.m_reusableToken).m_tokenType=t_tokenType;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<80>";
	dbg_object(c_JSONToken.m_reusableToken).m_value=t_value;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<81>";
	pop_err();
	return c_JSONToken.m_reusableToken;
}
c_JSONToken.prototype.p_GetValueString=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<89>";
	var t_1=this.m_tokenType;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<90>";
	if(t_1==11){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<91>";
		var t_=""+(object_downcast((this.m_value),c_FloatObject).p_ToString());
		pop_err();
		return t_;
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<92>";
		if(t_1==13){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<93>";
			var t_2=""+(object_downcast((this.m_value),c_IntObject).p_ToString());
			pop_err();
			return t_2;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<94>";
			if(t_1==9){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<95>";
				pop_err();
				return "NULL";
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<97>";
				if((this.m_value)!=null){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<98>";
					var t_3=(object_downcast((this.m_value),c_StringObject).p_ToString());
					pop_err();
					return t_3;
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<100>";
					pop_err();
					return "Null value";
				}
			}
		}
	}
}
c_JSONToken.prototype.p_ToString=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/tokeniser.monkey<85>";
	var t_="JSONToken - type: "+String(this.m_tokenType)+", value: "+this.p_GetValueString();
	pop_err();
	return t_;
}
function bb_math_Max(t_x,t_y){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/math.monkey<56>";
	if(t_x>t_y){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/math.monkey<56>";
		pop_err();
		return t_x;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/math.monkey<57>";
	pop_err();
	return t_y;
}
function bb_math_Max2(t_x,t_y){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/math.monkey<83>";
	if(t_x>t_y){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/math.monkey<83>";
		pop_err();
		return t_x;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/math.monkey<84>";
	pop_err();
	return t_y;
}
function bb_math_Min(t_x,t_y){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/math.monkey<51>";
	if(t_x<t_y){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/math.monkey<51>";
		pop_err();
		return t_x;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/math.monkey<52>";
	pop_err();
	return t_y;
}
function bb_math_Min2(t_x,t_y){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/math.monkey<78>";
	if(t_x<t_y){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/math.monkey<78>";
		pop_err();
		return t_x;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/math.monkey<79>";
	pop_err();
	return t_y;
}
function c_FloatObject(){
	Object.call(this);
	this.m_value=.0;
}
c_FloatObject.m_new=function(t_value){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/boxes.monkey<59>";
	dbg_object(this).m_value=(t_value);
	pop_err();
	return this;
}
c_FloatObject.m_new2=function(t_value){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/boxes.monkey<63>";
	dbg_object(this).m_value=t_value;
	pop_err();
	return this;
}
c_FloatObject.m_new3=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/boxes.monkey<55>";
	pop_err();
	return this;
}
c_FloatObject.prototype.p_ToString=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/boxes.monkey<75>";
	var t_=String(this.m_value);
	pop_err();
	return t_;
}
c_FloatObject.prototype.p_ToFloat=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/boxes.monkey<71>";
	pop_err();
	return this.m_value;
}
function c_IntObject(){
	Object.call(this);
	this.m_value=0;
}
c_IntObject.m_new=function(t_value){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/boxes.monkey<27>";
	dbg_object(this).m_value=t_value;
	pop_err();
	return this;
}
c_IntObject.m_new2=function(t_value){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/boxes.monkey<31>";
	dbg_object(this).m_value=((t_value)|0);
	pop_err();
	return this;
}
c_IntObject.m_new3=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/boxes.monkey<23>";
	pop_err();
	return this;
}
c_IntObject.prototype.p_ToString=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/boxes.monkey<43>";
	var t_=String(this.m_value);
	pop_err();
	return t_;
}
c_IntObject.prototype.p_ToInt=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/boxes.monkey<35>";
	pop_err();
	return this.m_value;
}
function c_StringObject(){
	Object.call(this);
	this.m_value="";
}
c_StringObject.m_new=function(t_value){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/boxes.monkey<92>";
	dbg_object(this).m_value=String(t_value);
	pop_err();
	return this;
}
c_StringObject.m_new2=function(t_value){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/boxes.monkey<96>";
	dbg_object(this).m_value=String(t_value);
	pop_err();
	return this;
}
c_StringObject.m_new3=function(t_value){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/boxes.monkey<100>";
	dbg_object(this).m_value=t_value;
	pop_err();
	return this;
}
c_StringObject.m_new4=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/boxes.monkey<88>";
	pop_err();
	return this;
}
c_StringObject.prototype.p_ToString=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/boxes.monkey<104>";
	pop_err();
	return this.m_value;
}
function c_JSONObject(){
	c_JSONDataItem.call(this);
	this.m_values=c_StringMap2.m_new.call(new c_StringMap2);
}
c_JSONObject.prototype=extend_class(c_JSONDataItem);
c_JSONObject.m_new=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<691>";
	c_JSONDataItem.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<692>";
	this.m_dataType=1;
	pop_err();
	return this;
}
c_JSONObject.prototype.p_AddItem=function(t_name,t_dataItem){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<712>";
	this.m_values.p_Set5(t_name,t_dataItem);
	pop_err();
}
c_JSONObject.prototype.p_Contains=function(t_name){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<724>";
	var t_=this.m_values.p_Contains(t_name);
	pop_err();
	return t_;
}
c_JSONObject.prototype.p_GetItem=function(t_name){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<720>";
	var t_=this.m_values.p_Get(t_name);
	pop_err();
	return t_;
}
c_JSONObject.prototype.p_GetItem2=function(t_name,t_defaultValue){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<728>";
	var t_item=this.m_values.p_Get(t_name);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<729>";
	if(t_item!=null){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<730>";
		var t_=(t_item.p_ToString());
		pop_err();
		return t_;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<732>";
	pop_err();
	return t_defaultValue;
}
c_JSONObject.prototype.p_GetItem3=function(t_name,t_defaultValue){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<736>";
	var t_item=this.m_values.p_Get(t_name);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<737>";
	if(t_item!=null){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<738>";
		var t_=(t_item.p_ToInt());
		pop_err();
		return t_;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<740>";
	pop_err();
	return t_defaultValue;
}
c_JSONObject.prototype.p_GetItem4=function(t_name,t_defaultValue){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<744>";
	var t_item=this.m_values.p_Get(t_name);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<745>";
	if(t_item!=null){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<746>";
		var t_=(t_item.p_ToFloat());
		pop_err();
		return t_;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<748>";
	pop_err();
	return t_defaultValue;
}
c_JSONObject.prototype.p_GetItem5=function(t_name,t_defaultValue){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<752>";
	var t_item=this.m_values.p_Get(t_name);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<753>";
	if(t_item!=null){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<754>";
		var t_=(t_item.p_ToBool());
		pop_err();
		return t_;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<756>";
	pop_err();
	return t_defaultValue;
}
c_JSONObject.prototype.p_ToString=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<782>";
	var t_retString=c_StringBuilder.m_new.call(new c_StringBuilder,this.m_values.p_Count()*5+5);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<783>";
	var t_first=true;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<785>";
	t_retString.p_AddString("{");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<787>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<787>";
	var t_=this.m_values.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<787>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<787>";
		var t_v=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<788>";
		if(t_first){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<789>";
			t_first=false;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<791>";
			t_retString.p_AddString(",");
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<793>";
		t_retString.p_AddString("\"");
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<794>";
		t_retString.p_AddString(t_v.p_Key());
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<795>";
		t_retString.p_AddString("\":");
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<796>";
		t_retString.p_AddString(t_v.p_Value().p_ToString());
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<798>";
	t_retString.p_AddString("}");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<799>";
	var t_2=t_retString.p_ToString();
	pop_err();
	return t_2;
}
c_JSONObject.prototype.p_AddPrim=function(t_name,t_value){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<696>";
	this.m_values.p_Set5(t_name,c_JSONData.m_CreateJSONDataItem4(t_value));
	pop_err();
}
c_JSONObject.prototype.p_AddPrim2=function(t_name,t_value){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<700>";
	this.m_values.p_Set5(t_name,c_JSONData.m_CreateJSONDataItem2(t_value));
	pop_err();
}
c_JSONObject.prototype.p_AddPrim3=function(t_name,t_value){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<704>";
	this.m_values.p_Set5(t_name,c_JSONData.m_CreateJSONDataItem(t_value));
	pop_err();
}
c_JSONObject.prototype.p_AddPrim4=function(t_name,t_value){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<708>";
	this.m_values.p_Set5(t_name,c_JSONData.m_CreateJSONDataItem3(t_value));
	pop_err();
}
c_JSONObject.prototype.p_ToJSONString=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<761>";
	var t_retString=c_StringBuilder.m_new.call(new c_StringBuilder,this.m_values.p_Count()*5+5);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<762>";
	var t_first=true;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<764>";
	t_retString.p_AddString("{");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<766>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<766>";
	var t_=this.m_values.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<766>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<766>";
		var t_v=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<767>";
		if(t_first){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<768>";
			t_first=false;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<770>";
			t_retString.p_AddString(",");
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<772>";
		t_retString.p_AddString("\"");
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<773>";
		t_retString.p_AddString(c_JSONData.m_EscapeJSON(t_v.p_Key()));
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<774>";
		t_retString.p_AddString("\":");
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<775>";
		t_retString.p_AddString(t_v.p_Value().p_ToJSONString());
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<777>";
	t_retString.p_AddString("}");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<778>";
	var t_2=t_retString.p_ToString();
	pop_err();
	return t_2;
}
function c_JSONDataType(){
	Object.call(this);
}
function c_JSONNonData(){
	c_JSONDataItem.call(this);
	this.m_value=null;
}
c_JSONNonData.prototype=extend_class(c_JSONDataItem);
c_JSONNonData.m_new=function(t_token){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<408>";
	c_JSONDataItem.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<409>";
	this.m_dataType=9;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<410>";
	this.m_value=t_token;
	pop_err();
	return this;
}
c_JSONNonData.m_new2=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<405>";
	c_JSONDataItem.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<405>";
	pop_err();
	return this;
}
c_JSONNonData.prototype.p_ToString=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<414>";
	pop_err();
	return "Non Data";
}
function c_JSONDataError(){
	c_JSONDataItem.call(this);
	this.m_value="";
}
c_JSONDataError.prototype=extend_class(c_JSONDataItem);
c_JSONDataError.m_new=function(t_errorDescription,t_location){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<395>";
	c_JSONDataItem.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<396>";
	this.m_dataType=-1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<397>";
	this.m_value=t_errorDescription+"\nJSON Location: "+t_location;
	pop_err();
	return this;
}
c_JSONDataError.m_new2=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<392>";
	c_JSONDataItem.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<392>";
	pop_err();
	return this;
}
c_JSONDataError.prototype.p_ToString=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<401>";
	pop_err();
	return this.m_value;
}
function c_JSONString(){
	c_JSONDataItem.call(this);
	this.m_value="";
	this.m_jsonReady="";
}
c_JSONString.prototype=extend_class(c_JSONDataItem);
c_JSONString.m_new=function(t_value,t_isMonkeyString){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<489>";
	c_JSONDataItem.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<490>";
	this.m_dataType=5;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<491>";
	if(!t_isMonkeyString){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<492>";
		dbg_object(this).m_value=c_JSONData.m_UnEscapeJSON(t_value);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<493>";
		this.m_jsonReady="\""+t_value+"\"";
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<495>";
		dbg_object(this).m_value=t_value;
	}
	pop_err();
	return this;
}
c_JSONString.m_new2=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<481>";
	c_JSONDataItem.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<481>";
	pop_err();
	return this;
}
c_JSONString.prototype.p_ToString=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<507>";
	pop_err();
	return this.m_value;
}
c_JSONString.prototype.p_ToJSONString=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<500>";
	if(this.m_jsonReady==""){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<501>";
		this.m_jsonReady="\""+c_JSONData.m_EscapeJSON(this.m_value)+"\"";
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<503>";
	pop_err();
	return this.m_jsonReady;
}
function c_Map3(){
	Object.call(this);
	this.m_root=null;
}
c_Map3.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<7>";
	pop_err();
	return this;
}
c_Map3.prototype.p_Compare=function(t_lhs,t_rhs){
}
c_Map3.prototype.p_RotateLeft3=function(t_node){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<251>";
	var t_child=dbg_object(t_node).m_right;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<252>";
	dbg_object(t_node).m_right=dbg_object(t_child).m_left;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<253>";
	if((dbg_object(t_child).m_left)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<254>";
		dbg_object(dbg_object(t_child).m_left).m_parent=t_node;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<256>";
	dbg_object(t_child).m_parent=dbg_object(t_node).m_parent;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<257>";
	if((dbg_object(t_node).m_parent)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<258>";
		if(t_node==dbg_object(dbg_object(t_node).m_parent).m_left){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<259>";
			dbg_object(dbg_object(t_node).m_parent).m_left=t_child;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<261>";
			dbg_object(dbg_object(t_node).m_parent).m_right=t_child;
		}
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<264>";
		this.m_root=t_child;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<266>";
	dbg_object(t_child).m_left=t_node;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<267>";
	dbg_object(t_node).m_parent=t_child;
	pop_err();
	return 0;
}
c_Map3.prototype.p_RotateRight3=function(t_node){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<271>";
	var t_child=dbg_object(t_node).m_left;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<272>";
	dbg_object(t_node).m_left=dbg_object(t_child).m_right;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<273>";
	if((dbg_object(t_child).m_right)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<274>";
		dbg_object(dbg_object(t_child).m_right).m_parent=t_node;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<276>";
	dbg_object(t_child).m_parent=dbg_object(t_node).m_parent;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<277>";
	if((dbg_object(t_node).m_parent)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<278>";
		if(t_node==dbg_object(dbg_object(t_node).m_parent).m_right){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<279>";
			dbg_object(dbg_object(t_node).m_parent).m_right=t_child;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<281>";
			dbg_object(dbg_object(t_node).m_parent).m_left=t_child;
		}
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<284>";
		this.m_root=t_child;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<286>";
	dbg_object(t_child).m_right=t_node;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<287>";
	dbg_object(t_node).m_parent=t_child;
	pop_err();
	return 0;
}
c_Map3.prototype.p_InsertFixup3=function(t_node){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<212>";
	while(((dbg_object(t_node).m_parent)!=null) && dbg_object(dbg_object(t_node).m_parent).m_color==-1 && ((dbg_object(dbg_object(t_node).m_parent).m_parent)!=null)){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<213>";
		if(dbg_object(t_node).m_parent==dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_left){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<214>";
			var t_uncle=dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_right;
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<215>";
			if(((t_uncle)!=null) && dbg_object(t_uncle).m_color==-1){
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<216>";
				dbg_object(dbg_object(t_node).m_parent).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<217>";
				dbg_object(t_uncle).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<218>";
				dbg_object(dbg_object(t_uncle).m_parent).m_color=-1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<219>";
				t_node=dbg_object(t_uncle).m_parent;
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<221>";
				if(t_node==dbg_object(dbg_object(t_node).m_parent).m_right){
					err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<222>";
					t_node=dbg_object(t_node).m_parent;
					err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<223>";
					this.p_RotateLeft3(t_node);
				}
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<225>";
				dbg_object(dbg_object(t_node).m_parent).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<226>";
				dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_color=-1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<227>";
				this.p_RotateRight3(dbg_object(dbg_object(t_node).m_parent).m_parent);
			}
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<230>";
			var t_uncle2=dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_left;
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<231>";
			if(((t_uncle2)!=null) && dbg_object(t_uncle2).m_color==-1){
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<232>";
				dbg_object(dbg_object(t_node).m_parent).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<233>";
				dbg_object(t_uncle2).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<234>";
				dbg_object(dbg_object(t_uncle2).m_parent).m_color=-1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<235>";
				t_node=dbg_object(t_uncle2).m_parent;
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<237>";
				if(t_node==dbg_object(dbg_object(t_node).m_parent).m_left){
					err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<238>";
					t_node=dbg_object(t_node).m_parent;
					err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<239>";
					this.p_RotateRight3(t_node);
				}
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<241>";
				dbg_object(dbg_object(t_node).m_parent).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<242>";
				dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_color=-1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<243>";
				this.p_RotateLeft3(dbg_object(dbg_object(t_node).m_parent).m_parent);
			}
		}
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<247>";
	dbg_object(this.m_root).m_color=1;
	pop_err();
	return 0;
}
c_Map3.prototype.p_Set5=function(t_key,t_value){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<29>";
	var t_node=this.m_root;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<30>";
	var t_parent=null;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<30>";
	var t_cmp=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<32>";
	while((t_node)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<33>";
		t_parent=t_node;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<34>";
		t_cmp=this.p_Compare(t_key,dbg_object(t_node).m_key);
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<35>";
		if(t_cmp>0){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<36>";
			t_node=dbg_object(t_node).m_right;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<37>";
			if(t_cmp<0){
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<38>";
				t_node=dbg_object(t_node).m_left;
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<40>";
				dbg_object(t_node).m_value=t_value;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<41>";
				pop_err();
				return false;
			}
		}
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<45>";
	t_node=c_Node3.m_new.call(new c_Node3,t_key,t_value,-1,t_parent);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<47>";
	if((t_parent)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<48>";
		if(t_cmp>0){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<49>";
			dbg_object(t_parent).m_right=t_node;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<51>";
			dbg_object(t_parent).m_left=t_node;
		}
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<53>";
		this.p_InsertFixup3(t_node);
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<55>";
		this.m_root=t_node;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<57>";
	pop_err();
	return true;
}
c_Map3.prototype.p_FindNode=function(t_key){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<157>";
	var t_node=this.m_root;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<159>";
	while((t_node)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<160>";
		var t_cmp=this.p_Compare(t_key,dbg_object(t_node).m_key);
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<161>";
		if(t_cmp>0){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<162>";
			t_node=dbg_object(t_node).m_right;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<163>";
			if(t_cmp<0){
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<164>";
				t_node=dbg_object(t_node).m_left;
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<166>";
				pop_err();
				return t_node;
			}
		}
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<169>";
	pop_err();
	return t_node;
}
c_Map3.prototype.p_Contains=function(t_key){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<25>";
	var t_=this.p_FindNode(t_key)!=null;
	pop_err();
	return t_;
}
c_Map3.prototype.p_Get=function(t_key){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<101>";
	var t_node=this.p_FindNode(t_key);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<102>";
	if((t_node)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<102>";
		pop_err();
		return dbg_object(t_node).m_value;
	}
	pop_err();
	return null;
}
c_Map3.prototype.p_Count=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<17>";
	if((this.m_root)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<17>";
		var t_=this.m_root.p_Count2(0);
		pop_err();
		return t_;
	}
	pop_err();
	return 0;
}
c_Map3.prototype.p_FirstNode=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<125>";
	if(!((this.m_root)!=null)){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<125>";
		pop_err();
		return null;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<127>";
	var t_node=this.m_root;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<128>";
	while((dbg_object(t_node).m_left)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<129>";
		t_node=dbg_object(t_node).m_left;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<131>";
	pop_err();
	return t_node;
}
c_Map3.prototype.p_ObjectEnumerator=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<121>";
	var t_=c_NodeEnumerator.m_new.call(new c_NodeEnumerator,this.p_FirstNode());
	pop_err();
	return t_;
}
c_Map3.prototype.p_Keys=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<113>";
	var t_=c_MapKeys2.m_new.call(new c_MapKeys2,this);
	pop_err();
	return t_;
}
function c_StringMap2(){
	c_Map3.call(this);
}
c_StringMap2.prototype=extend_class(c_Map3);
c_StringMap2.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<551>";
	c_Map3.m_new.call(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<551>";
	pop_err();
	return this;
}
c_StringMap2.prototype.p_Compare=function(t_lhs,t_rhs){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<554>";
	var t_=string_compare(t_lhs,t_rhs);
	pop_err();
	return t_;
}
function c_Node3(){
	Object.call(this);
	this.m_key="";
	this.m_right=null;
	this.m_left=null;
	this.m_value=null;
	this.m_color=0;
	this.m_parent=null;
}
c_Node3.m_new=function(t_key,t_value,t_color,t_parent){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<364>";
	dbg_object(this).m_key=t_key;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<365>";
	dbg_object(this).m_value=t_value;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<366>";
	dbg_object(this).m_color=t_color;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<367>";
	dbg_object(this).m_parent=t_parent;
	pop_err();
	return this;
}
c_Node3.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<361>";
	pop_err();
	return this;
}
c_Node3.prototype.p_Count2=function(t_n){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<371>";
	if((this.m_left)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<371>";
		t_n=this.m_left.p_Count2(t_n);
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<372>";
	if((this.m_right)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<372>";
		t_n=this.m_right.p_Count2(t_n);
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<373>";
	var t_=t_n+1;
	pop_err();
	return t_;
}
c_Node3.prototype.p_NextNode=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<385>";
	var t_node=null;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<386>";
	if((this.m_right)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<387>";
		t_node=this.m_right;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<388>";
		while((dbg_object(t_node).m_left)!=null){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<389>";
			t_node=dbg_object(t_node).m_left;
		}
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<391>";
		pop_err();
		return t_node;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<393>";
	t_node=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<394>";
	var t_parent=dbg_object(this).m_parent;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<395>";
	while(((t_parent)!=null) && t_node==dbg_object(t_parent).m_right){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<396>";
		t_node=t_parent;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<397>";
		t_parent=dbg_object(t_parent).m_parent;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<399>";
	pop_err();
	return t_parent;
}
c_Node3.prototype.p_Key=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<377>";
	pop_err();
	return this.m_key;
}
c_Node3.prototype.p_Value=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<381>";
	pop_err();
	return this.m_value;
}
function c_JSONArray(){
	c_JSONDataItem.call(this);
	this.m_values=c_List.m_new.call(new c_List);
}
c_JSONArray.prototype=extend_class(c_JSONDataItem);
c_JSONArray.m_new=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<554>";
	c_JSONDataItem.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<555>";
	this.m_dataType=2;
	pop_err();
	return this;
}
c_JSONArray.prototype.p_AddItem2=function(t_dataItem){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<575>";
	this.m_values.p_AddLast(t_dataItem);
	pop_err();
}
c_JSONArray.prototype.p_ToString=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<629>";
	var t_retString=c_StringBuilder.m_new.call(new c_StringBuilder,this.m_values.p_Count()*2+5);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<630>";
	var t_first=true;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<632>";
	t_retString.p_AddString("[");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<634>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<634>";
	var t_=this.m_values.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<634>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<634>";
		var t_v=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<635>";
		if(t_first){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<636>";
			t_first=false;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<638>";
			t_retString.p_AddString(",");
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<640>";
		t_retString.p_AddString(t_v.p_ToString());
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<643>";
	t_retString.p_AddString("]");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<645>";
	var t_2=t_retString.p_ToString();
	pop_err();
	return t_2;
}
c_JSONArray.prototype.p_ObjectEnumerator=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<649>";
	var t_=this.m_values.p_ObjectEnumerator();
	pop_err();
	return t_;
}
c_JSONArray.prototype.p_ToIntArray=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<583>";
	var t_result=[];
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<585>";
	t_result=resize_number_array(t_result,this.m_values.p_Count());
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<587>";
	var t_i=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<588>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<588>";
	var t_=this.m_values.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<588>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<588>";
		var t_v=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<589>";
		dbg_array(t_result,t_i)[dbg_index]=t_v.p_ToInt();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<590>";
		t_i+=1;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<593>";
	pop_err();
	return t_result;
}
c_JSONArray.prototype.p_ToStringArray=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<597>";
	var t_result=[];
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<599>";
	t_result=resize_string_array(t_result,this.m_values.p_Count());
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<601>";
	var t_i=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<602>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<602>";
	var t_=this.m_values.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<602>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<602>";
		var t_v=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<603>";
		dbg_array(t_result,t_i)[dbg_index]=t_v.p_ToString();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<604>";
		t_i+=1;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<607>";
	pop_err();
	return t_result;
}
c_JSONArray.prototype.p_ToJSONString=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<611>";
	var t_retString=c_StringBuilder.m_new.call(new c_StringBuilder,this.m_values.p_Count()*2+5);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<612>";
	var t_first=true;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<613>";
	t_retString.p_AddString("[");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<614>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<614>";
	var t_=this.m_values.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<614>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<614>";
		var t_v=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<615>";
		if(t_first){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<616>";
			t_first=false;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<618>";
			t_retString.p_AddString(",");
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<620>";
		t_retString.p_AddString(t_v.p_ToJSONString());
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<623>";
	t_retString.p_AddString("]");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<625>";
	var t_2=t_retString.p_ToString();
	pop_err();
	return t_2;
}
function c_List(){
	Object.call(this);
	this.m__head=(c_HeadNode.m_new.call(new c_HeadNode));
}
c_List.m_new=function(){
	push_err();
	pop_err();
	return this;
}
c_List.prototype.p_AddLast=function(t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<108>";
	var t_=c_Node4.m_new.call(new c_Node4,this.m__head,dbg_object(this.m__head).m__pred,t_data);
	pop_err();
	return t_;
}
c_List.m_new2=function(t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	var t_=t_data;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	var t_2=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	while(t_2<t_.length){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
		var t_t=dbg_array(t_,t_2)[dbg_index];
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
		t_2=t_2+1;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<14>";
		this.p_AddLast(t_t);
	}
	pop_err();
	return this;
}
c_List.prototype.p_Count=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<41>";
	var t_n=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<41>";
	var t_node=dbg_object(this.m__head).m__succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<42>";
	while(t_node!=this.m__head){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<43>";
		t_node=dbg_object(t_node).m__succ;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<44>";
		t_n+=1;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<46>";
	pop_err();
	return t_n;
}
c_List.prototype.p_ObjectEnumerator=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<186>";
	var t_=c_Enumerator.m_new.call(new c_Enumerator,this);
	pop_err();
	return t_;
}
function c_Node4(){
	Object.call(this);
	this.m__succ=null;
	this.m__pred=null;
	this.m__data=null;
}
c_Node4.m_new=function(t_succ,t_pred,t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<261>";
	this.m__succ=t_succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<262>";
	this.m__pred=t_pred;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<263>";
	dbg_object(this.m__succ).m__pred=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<264>";
	dbg_object(this.m__pred).m__succ=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<265>";
	this.m__data=t_data;
	pop_err();
	return this;
}
c_Node4.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<258>";
	pop_err();
	return this;
}
function c_HeadNode(){
	c_Node4.call(this);
}
c_HeadNode.prototype=extend_class(c_Node4);
c_HeadNode.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<310>";
	c_Node4.m_new2.call(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<311>";
	this.m__succ=(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<312>";
	this.m__pred=(this);
	pop_err();
	return this;
}
function c_StringBuilder(){
	Object.call(this);
	this.m_retStrings=[];
	this.m_index=0;
}
c_StringBuilder.m_new=function(t_initialSize){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<39>";
	if(t_initialSize<1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<40>";
		t_initialSize=1;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<42>";
	this.m_retStrings=new_string_array(t_initialSize);
	pop_err();
	return this;
}
c_StringBuilder.prototype.p_AddString=function(t_add){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<46>";
	if(this.m_index==this.m_retStrings.length){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<47>";
		this.m_retStrings=resize_string_array(this.m_retStrings,this.m_retStrings.length*2);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<49>";
	dbg_array(this.m_retStrings,this.m_index)[dbg_index]=t_add;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<50>";
	this.m_index+=1;
	pop_err();
}
c_StringBuilder.prototype.p_ToString=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<54>";
	if(this.m_index<2){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<55>";
		pop_err();
		return dbg_array(this.m_retStrings,0)[dbg_index];
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<57>";
		var t_=this.m_retStrings.slice(0,this.m_index).join("");
		pop_err();
		return t_;
	}
}
function c_JSONFloat(){
	c_JSONDataItem.call(this);
	this.m_value=.0;
	this.m_unparsedStr="";
	this.m_unparsed=false;
}
c_JSONFloat.prototype=extend_class(c_JSONDataItem);
c_JSONFloat.m_new=function(t_value){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<423>";
	c_JSONDataItem.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<424>";
	this.m_dataType=3;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<425>";
	dbg_object(this).m_value=t_value;
	pop_err();
	return this;
}
c_JSONFloat.m_new2=function(t_unparsedStr){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<431>";
	c_JSONDataItem.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<432>";
	this.m_dataType=3;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<433>";
	dbg_object(this).m_unparsedStr=t_unparsedStr;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<434>";
	dbg_object(this).m_unparsed=true;
	pop_err();
	return this;
}
c_JSONFloat.m_new3=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<418>";
	c_JSONDataItem.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<418>";
	pop_err();
	return this;
}
c_JSONFloat.prototype.p_Parse=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<438>";
	if(this.m_unparsed){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<439>";
		this.m_value=parseFloat(this.m_unparsedStr);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<440>";
		this.m_unparsed=false;
	}
	pop_err();
}
c_JSONFloat.prototype.p_ToInt=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<445>";
	this.p_Parse();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<446>";
	var t_=((this.m_value)|0);
	pop_err();
	return t_;
}
c_JSONFloat.prototype.p_ToFloat=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<450>";
	this.p_Parse();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<451>";
	pop_err();
	return this.m_value;
}
c_JSONFloat.prototype.p_ToString=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<455>";
	this.p_Parse();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<456>";
	var t_=String(this.m_value);
	pop_err();
	return t_;
}
function c_JSONInteger(){
	c_JSONDataItem.call(this);
	this.m_value=0;
}
c_JSONInteger.prototype=extend_class(c_JSONDataItem);
c_JSONInteger.m_new=function(t_value){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<463>";
	c_JSONDataItem.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<464>";
	this.m_dataType=4;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<465>";
	dbg_object(this).m_value=t_value;
	pop_err();
	return this;
}
c_JSONInteger.m_new2=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<460>";
	c_JSONDataItem.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<460>";
	pop_err();
	return this;
}
c_JSONInteger.prototype.p_ToInt=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<469>";
	pop_err();
	return this.m_value;
}
c_JSONInteger.prototype.p_ToFloat=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<473>";
	var t_=(this.m_value);
	pop_err();
	return t_;
}
c_JSONInteger.prototype.p_ToString=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<477>";
	var t_=String(this.m_value);
	pop_err();
	return t_;
}
function c_JSONBool(){
	c_JSONDataItem.call(this);
	this.m_value=false;
}
c_JSONBool.prototype=extend_class(c_JSONDataItem);
c_JSONBool.m_new=function(t_value){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<515>";
	c_JSONDataItem.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<516>";
	this.m_dataType=6;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<517>";
	dbg_object(this).m_value=t_value;
	pop_err();
	return this;
}
c_JSONBool.m_new2=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<512>";
	c_JSONDataItem.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<512>";
	pop_err();
	return this;
}
c_JSONBool.prototype.p_ToBool=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<521>";
	pop_err();
	return this.m_value;
}
c_JSONBool.prototype.p_ToString=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<525>";
	if(this.m_value){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<526>";
		pop_err();
		return "True";
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<528>";
		pop_err();
		return "False";
	}
}
c_JSONBool.prototype.p_ToJSONString=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<533>";
	if(this.m_value){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<534>";
		pop_err();
		return "true";
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<536>";
		pop_err();
		return "false";
	}
}
function c_JSONNull(){
	c_JSONDataItem.call(this);
}
c_JSONNull.prototype=extend_class(c_JSONDataItem);
c_JSONNull.m_new=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<542>";
	c_JSONDataItem.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<542>";
	pop_err();
	return this;
}
c_JSONNull.prototype.p_ToString=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<546>";
	this.m_dataType=7;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/json/jsondata.monkey<547>";
	pop_err();
	return "NULL";
}
var bb_engine_window_style=0;
function bb_audio_SetMusicVolume(t_volume){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/audio.monkey<105>";
	bb_audio_device.SetMusicVolume(t_volume);
	pop_err();
	return 0;
}
function bb_audio_SetChannelVolume(t_channel,t_volume){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/audio.monkey<73>";
	bb_audio_device.SetVolume(t_channel,t_volume);
	pop_err();
	return 0;
}
var bb_engine_gSound=0;
function bb_engine_SetSoundLevel(t_newSoundLevel){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<86>";
	if(t_newSoundLevel>0.98){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<86>";
		t_newSoundLevel=1.0;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<87>";
	bb_audio_SetMusicVolume(t_newSoundLevel);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<88>";
	bb_audio_SetChannelVolume(((t_newSoundLevel)|0),0.0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<89>";
	bb_engine_gSound=t_newSoundLevel;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<90>";
	bb_engine_NLog("Sound Level set to: "+String(bb_engine_gSound),0);
	pop_err();
}
function bb_saveandload_LoadSettingsPrims(t_file){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<150>";
	if(t_file.p_Contains("window_style")){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<151>";
		bb_engine_window_style=t_file.p_GetItem3("window_style",1);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<154>";
	if(t_file.p_Contains("global_sound")){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<155>";
		bb_engine_SetSoundLevel(t_file.p_GetItem4("global_sound",1.0));
	}
	pop_err();
}
function bb_saveandload_LoadSettings(t_file){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<53>";
	bb_saveandload_LoadSettingsPrims(object_downcast((c_JSONData.m_ReadJSON(t_file)),c_JSONObject));
	pop_err();
}
function c_Map4(){
	Object.call(this);
	this.m_root=null;
}
c_Map4.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<7>";
	pop_err();
	return this;
}
c_Map4.prototype.p_Compare=function(t_lhs,t_rhs){
}
c_Map4.prototype.p_RotateLeft4=function(t_node){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<251>";
	var t_child=dbg_object(t_node).m_right;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<252>";
	dbg_object(t_node).m_right=dbg_object(t_child).m_left;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<253>";
	if((dbg_object(t_child).m_left)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<254>";
		dbg_object(dbg_object(t_child).m_left).m_parent=t_node;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<256>";
	dbg_object(t_child).m_parent=dbg_object(t_node).m_parent;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<257>";
	if((dbg_object(t_node).m_parent)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<258>";
		if(t_node==dbg_object(dbg_object(t_node).m_parent).m_left){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<259>";
			dbg_object(dbg_object(t_node).m_parent).m_left=t_child;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<261>";
			dbg_object(dbg_object(t_node).m_parent).m_right=t_child;
		}
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<264>";
		this.m_root=t_child;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<266>";
	dbg_object(t_child).m_left=t_node;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<267>";
	dbg_object(t_node).m_parent=t_child;
	pop_err();
	return 0;
}
c_Map4.prototype.p_RotateRight4=function(t_node){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<271>";
	var t_child=dbg_object(t_node).m_left;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<272>";
	dbg_object(t_node).m_left=dbg_object(t_child).m_right;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<273>";
	if((dbg_object(t_child).m_right)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<274>";
		dbg_object(dbg_object(t_child).m_right).m_parent=t_node;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<276>";
	dbg_object(t_child).m_parent=dbg_object(t_node).m_parent;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<277>";
	if((dbg_object(t_node).m_parent)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<278>";
		if(t_node==dbg_object(dbg_object(t_node).m_parent).m_right){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<279>";
			dbg_object(dbg_object(t_node).m_parent).m_right=t_child;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<281>";
			dbg_object(dbg_object(t_node).m_parent).m_left=t_child;
		}
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<284>";
		this.m_root=t_child;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<286>";
	dbg_object(t_child).m_right=t_node;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<287>";
	dbg_object(t_node).m_parent=t_child;
	pop_err();
	return 0;
}
c_Map4.prototype.p_InsertFixup4=function(t_node){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<212>";
	while(((dbg_object(t_node).m_parent)!=null) && dbg_object(dbg_object(t_node).m_parent).m_color==-1 && ((dbg_object(dbg_object(t_node).m_parent).m_parent)!=null)){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<213>";
		if(dbg_object(t_node).m_parent==dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_left){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<214>";
			var t_uncle=dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_right;
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<215>";
			if(((t_uncle)!=null) && dbg_object(t_uncle).m_color==-1){
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<216>";
				dbg_object(dbg_object(t_node).m_parent).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<217>";
				dbg_object(t_uncle).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<218>";
				dbg_object(dbg_object(t_uncle).m_parent).m_color=-1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<219>";
				t_node=dbg_object(t_uncle).m_parent;
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<221>";
				if(t_node==dbg_object(dbg_object(t_node).m_parent).m_right){
					err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<222>";
					t_node=dbg_object(t_node).m_parent;
					err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<223>";
					this.p_RotateLeft4(t_node);
				}
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<225>";
				dbg_object(dbg_object(t_node).m_parent).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<226>";
				dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_color=-1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<227>";
				this.p_RotateRight4(dbg_object(dbg_object(t_node).m_parent).m_parent);
			}
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<230>";
			var t_uncle2=dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_left;
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<231>";
			if(((t_uncle2)!=null) && dbg_object(t_uncle2).m_color==-1){
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<232>";
				dbg_object(dbg_object(t_node).m_parent).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<233>";
				dbg_object(t_uncle2).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<234>";
				dbg_object(dbg_object(t_uncle2).m_parent).m_color=-1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<235>";
				t_node=dbg_object(t_uncle2).m_parent;
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<237>";
				if(t_node==dbg_object(dbg_object(t_node).m_parent).m_left){
					err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<238>";
					t_node=dbg_object(t_node).m_parent;
					err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<239>";
					this.p_RotateRight4(t_node);
				}
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<241>";
				dbg_object(dbg_object(t_node).m_parent).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<242>";
				dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_color=-1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<243>";
				this.p_RotateLeft4(dbg_object(dbg_object(t_node).m_parent).m_parent);
			}
		}
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<247>";
	dbg_object(this.m_root).m_color=1;
	pop_err();
	return 0;
}
c_Map4.prototype.p_Add2=function(t_key,t_value){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<61>";
	var t_node=this.m_root;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<62>";
	var t_parent=null;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<62>";
	var t_cmp=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<64>";
	while((t_node)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<65>";
		t_parent=t_node;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<66>";
		t_cmp=this.p_Compare(t_key,dbg_object(t_node).m_key);
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<67>";
		if(t_cmp>0){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<68>";
			t_node=dbg_object(t_node).m_right;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<69>";
			if(t_cmp<0){
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<70>";
				t_node=dbg_object(t_node).m_left;
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<72>";
				pop_err();
				return false;
			}
		}
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<76>";
	t_node=c_Node5.m_new.call(new c_Node5,t_key,t_value,-1,t_parent);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<78>";
	if((t_parent)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<79>";
		if(t_cmp>0){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<80>";
			dbg_object(t_parent).m_right=t_node;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<82>";
			dbg_object(t_parent).m_left=t_node;
		}
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<84>";
		this.p_InsertFixup4(t_node);
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<86>";
		this.m_root=t_node;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<88>";
	pop_err();
	return true;
}
c_Map4.prototype.p_FindNode=function(t_key){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<157>";
	var t_node=this.m_root;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<159>";
	while((t_node)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<160>";
		var t_cmp=this.p_Compare(t_key,dbg_object(t_node).m_key);
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<161>";
		if(t_cmp>0){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<162>";
			t_node=dbg_object(t_node).m_right;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<163>";
			if(t_cmp<0){
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<164>";
				t_node=dbg_object(t_node).m_left;
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<166>";
				pop_err();
				return t_node;
			}
		}
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<169>";
	pop_err();
	return t_node;
}
c_Map4.prototype.p_Contains=function(t_key){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<25>";
	var t_=this.p_FindNode(t_key)!=null;
	pop_err();
	return t_;
}
c_Map4.prototype.p_Get=function(t_key){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<101>";
	var t_node=this.p_FindNode(t_key);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<102>";
	if((t_node)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<102>";
		pop_err();
		return dbg_object(t_node).m_value;
	}
	pop_err();
	return null;
}
function c_StringMap3(){
	c_Map4.call(this);
}
c_StringMap3.prototype=extend_class(c_Map4);
c_StringMap3.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<551>";
	c_Map4.m_new.call(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<551>";
	pop_err();
	return this;
}
c_StringMap3.prototype.p_Compare=function(t_lhs,t_rhs){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<554>";
	var t_=string_compare(t_lhs,t_rhs);
	pop_err();
	return t_;
}
var bb_engine_imageMap=null;
function c_Node5(){
	Object.call(this);
	this.m_key="";
	this.m_right=null;
	this.m_left=null;
	this.m_value=null;
	this.m_color=0;
	this.m_parent=null;
}
c_Node5.m_new=function(t_key,t_value,t_color,t_parent){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<364>";
	dbg_object(this).m_key=t_key;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<365>";
	dbg_object(this).m_value=t_value;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<366>";
	dbg_object(this).m_color=t_color;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<367>";
	dbg_object(this).m_parent=t_parent;
	pop_err();
	return this;
}
c_Node5.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<361>";
	pop_err();
	return this;
}
function c_Sound(){
	Object.call(this);
	this.m_sample=null;
}
c_Sound.m_new=function(t_sample){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/audio.monkey<32>";
	dbg_object(this).m_sample=t_sample;
	pop_err();
	return this;
}
c_Sound.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/audio.monkey<29>";
	pop_err();
	return this;
}
function bb_audio_LoadSound(t_path){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/audio.monkey<47>";
	var t_sample=bb_audio_device.LoadSample(bb_data_FixDataPath(t_path));
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/audio.monkey<48>";
	if((t_sample)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/audio.monkey<48>";
		var t_=c_Sound.m_new.call(new c_Sound,t_sample);
		pop_err();
		return t_;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/audio.monkey<49>";
	pop_err();
	return null;
}
function c_Map5(){
	Object.call(this);
	this.m_root=null;
}
c_Map5.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<7>";
	pop_err();
	return this;
}
c_Map5.prototype.p_Compare=function(t_lhs,t_rhs){
}
c_Map5.prototype.p_RotateLeft5=function(t_node){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<251>";
	var t_child=dbg_object(t_node).m_right;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<252>";
	dbg_object(t_node).m_right=dbg_object(t_child).m_left;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<253>";
	if((dbg_object(t_child).m_left)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<254>";
		dbg_object(dbg_object(t_child).m_left).m_parent=t_node;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<256>";
	dbg_object(t_child).m_parent=dbg_object(t_node).m_parent;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<257>";
	if((dbg_object(t_node).m_parent)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<258>";
		if(t_node==dbg_object(dbg_object(t_node).m_parent).m_left){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<259>";
			dbg_object(dbg_object(t_node).m_parent).m_left=t_child;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<261>";
			dbg_object(dbg_object(t_node).m_parent).m_right=t_child;
		}
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<264>";
		this.m_root=t_child;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<266>";
	dbg_object(t_child).m_left=t_node;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<267>";
	dbg_object(t_node).m_parent=t_child;
	pop_err();
	return 0;
}
c_Map5.prototype.p_RotateRight5=function(t_node){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<271>";
	var t_child=dbg_object(t_node).m_left;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<272>";
	dbg_object(t_node).m_left=dbg_object(t_child).m_right;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<273>";
	if((dbg_object(t_child).m_right)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<274>";
		dbg_object(dbg_object(t_child).m_right).m_parent=t_node;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<276>";
	dbg_object(t_child).m_parent=dbg_object(t_node).m_parent;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<277>";
	if((dbg_object(t_node).m_parent)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<278>";
		if(t_node==dbg_object(dbg_object(t_node).m_parent).m_right){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<279>";
			dbg_object(dbg_object(t_node).m_parent).m_right=t_child;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<281>";
			dbg_object(dbg_object(t_node).m_parent).m_left=t_child;
		}
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<284>";
		this.m_root=t_child;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<286>";
	dbg_object(t_child).m_right=t_node;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<287>";
	dbg_object(t_node).m_parent=t_child;
	pop_err();
	return 0;
}
c_Map5.prototype.p_InsertFixup5=function(t_node){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<212>";
	while(((dbg_object(t_node).m_parent)!=null) && dbg_object(dbg_object(t_node).m_parent).m_color==-1 && ((dbg_object(dbg_object(t_node).m_parent).m_parent)!=null)){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<213>";
		if(dbg_object(t_node).m_parent==dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_left){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<214>";
			var t_uncle=dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_right;
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<215>";
			if(((t_uncle)!=null) && dbg_object(t_uncle).m_color==-1){
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<216>";
				dbg_object(dbg_object(t_node).m_parent).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<217>";
				dbg_object(t_uncle).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<218>";
				dbg_object(dbg_object(t_uncle).m_parent).m_color=-1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<219>";
				t_node=dbg_object(t_uncle).m_parent;
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<221>";
				if(t_node==dbg_object(dbg_object(t_node).m_parent).m_right){
					err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<222>";
					t_node=dbg_object(t_node).m_parent;
					err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<223>";
					this.p_RotateLeft5(t_node);
				}
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<225>";
				dbg_object(dbg_object(t_node).m_parent).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<226>";
				dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_color=-1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<227>";
				this.p_RotateRight5(dbg_object(dbg_object(t_node).m_parent).m_parent);
			}
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<230>";
			var t_uncle2=dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_left;
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<231>";
			if(((t_uncle2)!=null) && dbg_object(t_uncle2).m_color==-1){
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<232>";
				dbg_object(dbg_object(t_node).m_parent).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<233>";
				dbg_object(t_uncle2).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<234>";
				dbg_object(dbg_object(t_uncle2).m_parent).m_color=-1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<235>";
				t_node=dbg_object(t_uncle2).m_parent;
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<237>";
				if(t_node==dbg_object(dbg_object(t_node).m_parent).m_left){
					err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<238>";
					t_node=dbg_object(t_node).m_parent;
					err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<239>";
					this.p_RotateRight5(t_node);
				}
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<241>";
				dbg_object(dbg_object(t_node).m_parent).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<242>";
				dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_color=-1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<243>";
				this.p_RotateLeft5(dbg_object(dbg_object(t_node).m_parent).m_parent);
			}
		}
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<247>";
	dbg_object(this.m_root).m_color=1;
	pop_err();
	return 0;
}
c_Map5.prototype.p_Add3=function(t_key,t_value){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<61>";
	var t_node=this.m_root;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<62>";
	var t_parent=null;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<62>";
	var t_cmp=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<64>";
	while((t_node)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<65>";
		t_parent=t_node;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<66>";
		t_cmp=this.p_Compare(t_key,dbg_object(t_node).m_key);
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<67>";
		if(t_cmp>0){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<68>";
			t_node=dbg_object(t_node).m_right;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<69>";
			if(t_cmp<0){
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<70>";
				t_node=dbg_object(t_node).m_left;
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<72>";
				pop_err();
				return false;
			}
		}
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<76>";
	t_node=c_Node6.m_new.call(new c_Node6,t_key,t_value,-1,t_parent);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<78>";
	if((t_parent)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<79>";
		if(t_cmp>0){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<80>";
			dbg_object(t_parent).m_right=t_node;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<82>";
			dbg_object(t_parent).m_left=t_node;
		}
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<84>";
		this.p_InsertFixup5(t_node);
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<86>";
		this.m_root=t_node;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<88>";
	pop_err();
	return true;
}
c_Map5.prototype.p_FindNode=function(t_key){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<157>";
	var t_node=this.m_root;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<159>";
	while((t_node)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<160>";
		var t_cmp=this.p_Compare(t_key,dbg_object(t_node).m_key);
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<161>";
		if(t_cmp>0){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<162>";
			t_node=dbg_object(t_node).m_right;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<163>";
			if(t_cmp<0){
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<164>";
				t_node=dbg_object(t_node).m_left;
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<166>";
				pop_err();
				return t_node;
			}
		}
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<169>";
	pop_err();
	return t_node;
}
c_Map5.prototype.p_Contains=function(t_key){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<25>";
	var t_=this.p_FindNode(t_key)!=null;
	pop_err();
	return t_;
}
c_Map5.prototype.p_Get=function(t_key){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<101>";
	var t_node=this.p_FindNode(t_key);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<102>";
	if((t_node)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<102>";
		pop_err();
		return dbg_object(t_node).m_value;
	}
	pop_err();
	return null;
}
function c_StringMap4(){
	c_Map5.call(this);
}
c_StringMap4.prototype=extend_class(c_Map5);
c_StringMap4.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<551>";
	c_Map5.m_new.call(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<551>";
	pop_err();
	return this;
}
c_StringMap4.prototype.p_Compare=function(t_lhs,t_rhs){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<554>";
	var t_=string_compare(t_lhs,t_rhs);
	pop_err();
	return t_;
}
var bb_engine_soundMap=null;
function c_Node6(){
	Object.call(this);
	this.m_key="";
	this.m_right=null;
	this.m_left=null;
	this.m_value=null;
	this.m_color=0;
	this.m_parent=null;
}
c_Node6.m_new=function(t_key,t_value,t_color,t_parent){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<364>";
	dbg_object(this).m_key=t_key;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<365>";
	dbg_object(this).m_value=t_value;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<366>";
	dbg_object(this).m_color=t_color;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<367>";
	dbg_object(this).m_parent=t_parent;
	pop_err();
	return this;
}
c_Node6.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<361>";
	pop_err();
	return this;
}
function c_GWindowDrawer(){
	Object.call(this);
}
c_GWindowDrawer.m___Image=null;
c_GWindowDrawer.m_Set=function(t_imageMap,t_type){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<129>";
	var t_windowStyle="window_"+String(t_type);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<130>";
	if(t_imageMap.p_Contains(t_windowStyle)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<131>";
		c_GWindowDrawer.m___Image=t_imageMap.p_Get(t_windowStyle);
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<133>";
		print("Cannot find key '"+t_windowStyle+"' in the given map.");
	}
	pop_err();
}
c_GWindowDrawer.m_Draw=function(t_x,t_y,t_w,t_h){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<146>";
	if(c_GWindowDrawer.m___Image==null){
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<148>";
	c_GClearScreen.m_ToBG();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<149>";
	bb_graphics_DrawRect((t_x),(t_y),(t_w),(t_h));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<150>";
	bb_graphics_SetColor(255.0,255.0,255.0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<153>";
	bb_graphics_DrawImage(c_GWindowDrawer.m___Image,(t_x),(t_y),0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<154>";
	bb_graphics_DrawImage(c_GWindowDrawer.m___Image,(t_x+t_w-4),(t_y),2);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<155>";
	bb_graphics_DrawImage(c_GWindowDrawer.m___Image,(t_x+t_w-4),(t_y+t_h-4),4);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<156>";
	bb_graphics_DrawImage(c_GWindowDrawer.m___Image,(t_x),(t_y+t_h-4),6);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<159>";
	bb_graphics_DrawImage2(c_GWindowDrawer.m___Image,(t_x+4),(t_y),0.0,(t_w)/4.0-2.0,1.0,1);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<160>";
	bb_graphics_DrawImage2(c_GWindowDrawer.m___Image,(t_x+4),(t_y+t_h-4),0.0,(t_w)/4.0-2.0,1.0,5);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<162>";
	bb_graphics_DrawImage2(c_GWindowDrawer.m___Image,(t_x+t_w-4),(t_y+4),0.0,1.0,(t_h)/4.0-2.0,3);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<163>";
	bb_graphics_DrawImage2(c_GWindowDrawer.m___Image,(t_x),(t_y+4),0.0,1.0,(t_h)/4.0-2.0,7);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<165>";
	c_GClearScreen.m_ToBG();
	pop_err();
}
function c_GHealthDrawer(){
	Object.call(this);
}
c_GHealthDrawer.m___Image=null;
c_GHealthDrawer.m_Init=function(t_img){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<173>";
	c_GHealthDrawer.m___Image=t_img;
	pop_err();
}
c_GHealthDrawer.m_Init2=function(t_img,t_width,t_height,t_frames){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<177>";
	c_GHealthDrawer.m___Image=bb_graphics_LoadImage2(t_img,t_width,t_height,t_frames,c_Image.m_DefaultFlags);
	pop_err();
}
c_GHealthDrawer.m_Draw=function(t_x,t_y,t_perc,t_h){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<181>";
	if(c_GHealthDrawer.m___Image==null){
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<182>";
	if(t_h<6){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<182>";
		t_h=6;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<185>";
	bb_graphics_DrawImage(c_GHealthDrawer.m___Image,(t_x),(t_y),0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<186>";
	bb_graphics_DrawImage(c_GHealthDrawer.m___Image,(t_x),(t_y+t_h-2),1);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<189>";
	bb_graphics_DrawImage2(c_GHealthDrawer.m___Image,(t_x),(t_y+t_h-2),0.0,1.0,-t_perc*(t_h-4)/2.0,2);
	pop_err();
}
function c_TScreen(){
	Object.call(this);
	this.m_menuColumn=0;
	this.m_menuIndex=0;
}
c_TScreen.m_new=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<129>";
	pop_err();
	return this;
}
c_TScreen.prototype.p_OnRender=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<139>";
	pop_err();
	return 0;
}
c_TScreen.prototype.p_OnUpdate=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<135>";
	pop_err();
	return 0;
}
c_TScreen.prototype.p_OnInit=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<131>";
	pop_err();
	return 0;
}
c_TScreen.prototype.p_UpDownMenu=function(t_upperLimit,t_lowerLimit){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<148>";
	var t_changed=false;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<150>";
	if(c_NInput.m_IsHit(0)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<150>";
		this.m_menuIndex-=1;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<150>";
		t_changed=true;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<150>";
		bb_engine_NPlaySound("Blip2",0);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<151>";
	if(c_NInput.m_IsHit(1)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<151>";
		this.m_menuIndex+=1;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<151>";
		t_changed=true;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<151>";
		bb_engine_NPlaySound("Blip1",0);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<153>";
	if(this.m_menuIndex<t_lowerLimit){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<153>";
		this.m_menuIndex=t_upperLimit-1;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<154>";
	if(this.m_menuIndex==t_upperLimit){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<154>";
		this.m_menuIndex=t_lowerLimit;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<156>";
	pop_err();
	return t_changed;
}
c_TScreen.prototype.p_ResetMenu=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<168>";
	this.m_menuIndex=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<169>";
	this.m_menuColumn=0;
	pop_err();
}
c_TScreen.prototype.p_LeftRightMenu=function(t_upperLimit,t_lowerLimit){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<160>";
	if(c_NInput.m_IsHit(3)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<160>";
		this.m_menuColumn-=1;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<160>";
		bb_engine_NPlaySoundSpeed("Blip2",1.05,0);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<161>";
	if(c_NInput.m_IsHit(2)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<161>";
		this.m_menuColumn+=1;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<161>";
		bb_engine_NPlaySoundSpeed("Blip1",0.95,0);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<163>";
	if(this.m_menuColumn<t_lowerLimit){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<163>";
		this.m_menuColumn=t_upperLimit-1;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<164>";
	if(this.m_menuColumn==t_upperLimit){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<164>";
		this.m_menuColumn=t_lowerLimit;
	}
	pop_err();
}
c_TScreen.prototype.p_AllIndexMenu=function(t_upperLimit,t_lowerLimit){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<173>";
	if(c_NInput.m_IsHit(0)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<173>";
		this.m_menuIndex-=1;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<173>";
		bb_engine_NPlaySound("Blip2",0);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<174>";
	if(c_NInput.m_IsHit(1)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<174>";
		this.m_menuIndex+=1;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<174>";
		bb_engine_NPlaySound("Blip1",0);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<175>";
	if(c_NInput.m_IsHit(3)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<175>";
		this.m_menuIndex-=1;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<175>";
		bb_engine_NPlaySoundSpeed("Blip2",1.05,0);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<176>";
	if(c_NInput.m_IsHit(2)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<176>";
		this.m_menuIndex+=1;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<176>";
		bb_engine_NPlaySoundSpeed("Blip1",0.95,0);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<178>";
	if(this.m_menuIndex<t_lowerLimit){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<178>";
		this.m_menuIndex=t_upperLimit-1;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<179>";
	if(this.m_menuIndex==t_upperLimit){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<179>";
		this.m_menuIndex=t_lowerLimit;
	}
	pop_err();
}
function c_SMainMenu(){
	c_TScreen.call(this);
	this.m_monsterFrame=0;
	this.m_title=null;
	this.m_img1=null;
	this.m_img2=null;
}
c_SMainMenu.prototype=extend_class(c_TScreen);
c_SMainMenu.m_new=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<22>";
	c_TScreen.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<22>";
	pop_err();
	return this;
}
c_SMainMenu.prototype.p_OnInit=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<30>";
	c_modes.m_current=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<31>";
	this.m_menuColumn=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<32>";
	this.m_menuIndex=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<33>";
	this.m_monsterFrame=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<35>";
	this.m_title=bb_engine_imageMap.p_Get("title");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<36>";
	this.m_img1=bb_engine_imageMap.p_Get("ninja");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<37>";
	this.m_img2=bb_engine_imageMap.p_Get("monsters");
	pop_err();
	return 0;
}
c_SMainMenu.prototype.p_GoTo=function(t_mode){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<74>";
	c_modes.m_current=t_mode;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<76>";
	this.m_menuIndex=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<77>";
	this.m_menuColumn=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<78>";
	this.m_monsterFrame=0;
	pop_err();
}
c_SMainMenu.prototype.p_INFO_Update=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<91>";
	if(c_NInput.m_IsHit(8)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<91>";
		this.p_GoTo(1);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<93>";
	if(this.m_menuColumn<22){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<94>";
		this.m_menuColumn+=1;
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<96>";
		this.m_menuColumn=22;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<97>";
		if(this.m_menuIndex==0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<97>";
			this.m_menuIndex=3;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<98>";
		if(this.m_menuIndex>0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<99>";
			this.m_menuIndex-=1;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<100>";
			if(this.m_menuIndex==0){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<100>";
				this.m_menuIndex=-5;
			}
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<102>";
			this.m_menuIndex+=1;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<103>";
			if(this.m_menuIndex==0){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<104>";
				this.m_menuIndex=5;
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<105>";
				this.m_monsterFrame+=1;
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<106>";
				if(this.m_img2.p_Frames()-1<this.m_monsterFrame){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<106>";
					this.m_monsterFrame=0;
				}
			}
		}
	}
	pop_err();
}
c_SMainMenu.prototype.p_MENU_Update=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<128>";
	if(c_NInput.m_IsHit(6)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<128>";
		this.p_GoTo(0);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<130>";
	this.p_UpDownMenu(3,0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<132>";
	if(c_NInput.m_IsHit(5) || c_NInput.m_IsHit(8)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<133>";
		bb_engine_NPlaySoundSpeed("Hit",0.7,0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<134>";
		var t_3=this.m_menuIndex;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<135>";
		if(t_3==0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<136>";
			c_modes.m_current=2;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<138>";
			if(t_3==1){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<140>";
				if(bb_app_LoadState()!=""){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<141>";
					bb_saveandload_LoadGame2(bb_app_LoadState());
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<142>";
					bb_engine_SwitchScreenTo(bb_engine_townMapScreen,true);
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<144>";
					bb_engine_ClearActiveEvents();
				}
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<147>";
				if(t_3==2){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<148>";
					c_modes.m_current=3;
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<149>";
					this.p_ResetMenu();
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<150>";
					this.m_menuColumn=bb_engine_window_style-1;
				}
			}
		}
	}
	pop_err();
}
c_SMainMenu.prototype.p_SETTINGS_Update=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<177>";
	var t_4=this.m_menuIndex;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<178>";
	if(t_4==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<179>";
		bb_engine_window_style=this.m_menuColumn+1;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<180>";
		c_GWindowDrawer.m_Set((bb_engine_imageMap),bb_engine_window_style);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<182>";
		this.p_LeftRightMenu(3,0);
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<184>";
		if(t_4==1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<185>";
			bb_engine_SetSoundLevel(0.3333*(this.m_menuColumn));
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<187>";
			this.p_LeftRightMenu(4,0);
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<189>";
			if(t_4==2){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<190>";
				if(c_NInput.m_IsHit(5)){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<191>";
					bb_engine_NPlaySoundSpeed("Hit",1.1,0);
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<192>";
					bb_saveandload_LoadSettings(bb_app_LoadState());
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<193>";
					c_modes.m_current=1;
				}
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<196>";
				if(t_4==3){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<197>";
					if(c_NInput.m_IsHit(5)){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<198>";
						bb_engine_NPlaySoundSpeed("Hit",0.7,0);
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<199>";
						if(bb_app_LoadState()==""){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<200>";
							bb_app_SaveState(bb_saveandload_SaveSettings());
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<203>";
							var t_newWindowStyle=bb_engine_window_style;
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<204>";
							var t_newGlobalSound=bb_engine_gSound;
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<206>";
							bb_saveandload_LoadGame2(bb_app_LoadState());
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<209>";
							bb_engine_window_style=t_newWindowStyle;
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<210>";
							bb_engine_SetSoundLevel(t_newGlobalSound);
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<212>";
							bb_app_SaveState(bb_saveandload_SaveGame());
						}
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<214>";
						this.p_ResetMenu();
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<215>";
						c_modes.m_current=1;
					}
				}
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<219>";
	if(this.p_UpDownMenu(4,0)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<220>";
		var t_5=this.m_menuIndex;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<221>";
		if(t_5==0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<222>";
			this.m_menuColumn=bb_engine_window_style-1;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<223>";
			if(t_5==1){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<224>";
				this.m_menuColumn=((bb_engine_gSound/0.3333)|0);
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<226>";
				this.m_menuColumn=0;
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<230>";
	if(c_NInput.m_IsHit(8)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<231>";
		bb_saveandload_LoadSettings(bb_app_LoadState());
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<232>";
		this.p_ResetMenu();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<233>";
		c_modes.m_current=1;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<234>";
		bb_engine_NPlaySoundSpeed("Hit",1.1,0);
	}
	pop_err();
}
c_SMainMenu.prototype.p__Update=function(){
	push_err();
	pop_err();
}
c_SMainMenu.prototype.p_OnUpdate=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<41>";
	var t_1=c_modes.m_current;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<42>";
	if(t_1==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<43>";
		this.p_INFO_Update();
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<44>";
		if(t_1==1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<45>";
			this.p_MENU_Update();
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<46>";
			if(t_1==2){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<47>";
				bb_engine_Reset();
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<48>";
				bb_engine_game.p_NewGame();
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<49>";
				if(t_1==3){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<50>";
					this.p_SETTINGS_Update();
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<52>";
					this.p__Update();
				}
			}
		}
	}
	pop_err();
	return 0;
}
c_SMainMenu.prototype.p_DrawLogo=function(t_position){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<169>";
	bb_graphics_DrawImage(this.m_title,(80-((this.m_title.p_Width()/2)|0)),16.0-144.0*(1.0+Math.cos(((t_position*180/20)|0)*D2R)),0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<170>";
	bb_gui_GDrawTextPreserveBlend("2013-18 - Alpha v0.8",0,136);
	pop_err();
}
c_SMainMenu.prototype.p_INFO_Draw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<112>";
	this.p_DrawLogo(this.m_menuColumn);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<114>";
	bb_graphics_DrawImage(this.m_img1,(32-2*(22-this.m_menuColumn)),72.0,0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<116>";
	if(this.m_menuColumn==22){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<117>";
		bb_graphics_DrawImage(this.m_img2,(160-this.m_img2.p_Width()-32),72.0,this.m_monsterFrame);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<120>";
	if(this.m_menuIndex>0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<120>";
		bb_gui_GDrawTextPreserveBlend("Press Start to Play!",24,104);
	}
	pop_err();
}
c_SMainMenu.prototype.p__Draw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<261>";
	bb_gui_GDrawTextPreserveBlend("Made by Karl Nyborg",0,128);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<262>";
	bb_gui_GDrawTextPreserveBlend("Battle Art by Yokomeshi",0,120);
	pop_err();
}
c_SMainMenu.prototype.p_MENU_Draw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<155>";
	this.p_DrawLogo(22);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<157>";
	c_GWindowDrawer.m_Draw(80,60,80,48);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<158>";
	bb_graphics_DrawImage(this.m_img1,32.0,72.0,0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<160>";
	bb_gui_GDrawTextPreserveBlend("New Game",90,72);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<161>";
	if(bb_app_LoadState()==""){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<161>";
		bb_graphics_SetAlpha(0.5);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<162>";
	bb_gui_GDrawTextPreserveBlend("Load Game",90,80);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<163>";
	bb_graphics_SetAlpha(1.0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<164>";
	bb_gui_GDrawTextPreserveBlend("Settings",90,88);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<165>";
	bb_gui_GDrawTextPreserveBlend(">",84,72+8*this.m_menuIndex);
	pop_err();
}
c_SMainMenu.prototype.p_SETTINGS_Draw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<239>";
	this.p_DrawLogo(22);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<241>";
	c_GWindowDrawer.m_Draw(4,((bb_engine_vScnHeight/2.0)|0),((bb_engine_vScnWidth-8.0)|0),((bb_engine_vScnHeight/3.0)|0));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<243>";
	bb_gui_GDrawTextPreserveBlend("1 2 3",14,80);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<244>";
	bb_gui_GDrawTextPreserveBlend("Window Style",60,80);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<245>";
	bb_gui_GDrawTextPreserveBlend("0 . : |",14,88);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<246>";
	bb_gui_GDrawTextPreserveBlend("Sound Level",60,88);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<247>";
	bb_gui_GDrawTextPreserveBlend("Exit",14,96);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<248>";
	bb_gui_GDrawTextPreserveBlend("Save & Exit",14,104);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<250>";
	bb_gui_GDrawTextPreserveBlend(">",8+12*this.m_menuColumn,80+8*this.m_menuIndex);
	pop_err();
}
c_SMainMenu.prototype.p_OnRender=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<57>";
	var t_2=c_modes.m_current;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<58>";
	if(t_2==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<59>";
		this.p_INFO_Draw();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<60>";
		this.p__Draw();
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<61>";
		if(t_2==1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<62>";
			this.p_MENU_Draw();
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<63>";
			this.p__Draw();
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<64>";
			if(t_2==2){
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<66>";
				if(t_2==3){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenMainMenu.monkey<67>";
					this.p_SETTINGS_Draw();
				}
			}
		}
	}
	pop_err();
	return 0;
}
var bb_engine_titleScreen=null;
function c_SCombat(){
	c_TScreen.call(this);
	this.m_combatTarget=null;
	this.m_enemyList=c_List5.m_new.call(new c_List5);
	this.m_blockingEffect=null;
	this.m_currentCharTurn=0;
	this.m_currentEnemyTurn=0;
	this.m_curCharData=null;
	this.m_xpGained=0;
	this.m_goldGained=0;
	this.m_SelectedSkill="";
}
c_SCombat.prototype=extend_class(c_TScreen);
c_SCombat.m_new=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<15>";
	c_TScreen.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<15>";
	pop_err();
	return this;
}
c_SCombat.prototype.p_Clear=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<30>";
	this.m_combatTarget=null;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<31>";
	this.m_enemyList.p_Clear();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<32>";
	this.m_blockingEffect=null;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<33>";
	this.m_currentCharTurn=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<34>";
	this.m_currentEnemyTurn=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<35>";
	this.m_curCharData=null;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<36>";
	this.m_menuColumn=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<37>";
	this.m_menuIndex=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<38>";
	this.m_xpGained=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<39>";
	this.m_goldGained=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<40>";
	this.m_SelectedSkill="";
	pop_err();
}
c_SCombat.prototype.p_NextRound=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<334>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<334>";
	var t_=bb_engine_playerCharacters.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<334>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<334>";
		var t_ply=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<335>";
		t_ply.p_UpdateBuffs();
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<338>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<338>";
	var t_2=this.m_enemyList.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<338>";
	while(t_2.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<338>";
		var t_emy=t_2.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<339>";
		t_emy.p_UpdateBuffs();
	}
	pop_err();
}
c_SCombat.prototype.p_EndCombatLose=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<909>";
	bb_engine_SwitchScreenTo(bb_engine_townMapScreen,true);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<910>";
	this.p_Clear();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<912>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<912>";
	var t_=bb_engine_playerCharacters.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<912>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<912>";
		var t_ply=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<913>";
		if(dbg_object(t_ply).m_HP<1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<913>";
			dbg_object(t_ply).m_HP=1;
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<916>";
	bb_engine_ClearActiveEvents();
	pop_err();
}
c_SCombat.prototype.p_IsGameOver=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<344>";
	var t_gameOver=true;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<346>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<346>";
	var t_=bb_engine_playerCharacters.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<346>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<346>";
		var t_ply=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<347>";
		if(dbg_object(t_ply).m_HP>0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<347>";
			t_gameOver=false;
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<349>";
	if(t_gameOver){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<350>";
		this.p_EndCombatLose();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<351>";
		bb_engine_NLog("GAME OVER",0);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<353>";
	var t_2=((t_gameOver)?1:0);
	pop_err();
	return t_2;
}
c_SCombat.prototype.p_EndPlayerTurn=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<741>";
	this.m_currentCharTurn=-1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<742>";
	this.m_currentEnemyTurn=-1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<743>";
	c_modes2.m_current=3;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<744>";
	this.m_curCharData=null;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<745>";
	c_GMessageTicker.m_Add("Enemy is thinking!");
	pop_err();
	return 0;
}
c_SCombat.prototype.p_placePlayers=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<703>";
	var t_nudge=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<704>";
	var t_13=bb_engine_playerCharacters.p_Count();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<705>";
	if(t_13==4){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<706>";
		t_nudge=0;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<706>";
		if(this.m_currentCharTurn!=0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<706>";
			t_nudge=-4;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<707>";
		bb_engine_playerCharacters.p_First().p_SetPosition(14+t_nudge,14);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<709>";
		t_nudge=0;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<709>";
		if(this.m_currentCharTurn!=1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<709>";
			t_nudge=-4;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<710>";
		dbg_array(bb_engine_playerCharacters.p_ToArray(),1)[dbg_index].p_SetPosition(22+t_nudge,36);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<712>";
		t_nudge=0;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<712>";
		if(this.m_currentCharTurn!=2){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<712>";
			t_nudge=-4;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<713>";
		dbg_array(bb_engine_playerCharacters.p_ToArray(),2)[dbg_index].p_SetPosition(14+t_nudge,58);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<715>";
		t_nudge=0;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<715>";
		if(this.m_currentCharTurn!=3){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<715>";
			t_nudge=-4;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<716>";
		dbg_array(bb_engine_playerCharacters.p_ToArray(),3)[dbg_index].p_SetPosition(22+t_nudge,80);
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<718>";
		if(t_13==3){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<719>";
			t_nudge=0;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<719>";
			if(this.m_currentCharTurn!=0){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<719>";
				t_nudge=-4;
			}
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<720>";
			bb_engine_playerCharacters.p_First().p_SetPosition(14+t_nudge,24);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<722>";
			t_nudge=0;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<722>";
			if(this.m_currentCharTurn!=1){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<722>";
				t_nudge=-4;
			}
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<723>";
			dbg_array(bb_engine_playerCharacters.p_ToArray(),1)[dbg_index].p_SetPosition(22+t_nudge,48);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<725>";
			t_nudge=0;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<725>";
			if(this.m_currentCharTurn!=2){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<725>";
				t_nudge=-4;
			}
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<726>";
			bb_engine_playerCharacters.p_Last().p_SetPosition(14+t_nudge,72);
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<728>";
			if(t_13==2){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<729>";
				t_nudge=0;
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<729>";
				if(this.m_currentCharTurn!=0){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<729>";
					t_nudge=-4;
				}
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<730>";
				bb_engine_playerCharacters.p_First().p_SetPosition(14+t_nudge,32);
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<732>";
				t_nudge=0;
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<732>";
				if(this.m_currentCharTurn!=1){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<732>";
					t_nudge=-4;
				}
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<733>";
				bb_engine_playerCharacters.p_Last().p_SetPosition(22+t_nudge,64);
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<736>";
				bb_engine_playerCharacters.p_First().p_SetPosition(20,48);
			}
		}
	}
	pop_err();
}
c_SCombat.prototype.p_modeNTUpdate=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<631>";
	bb_engine_NLog("modeNTUpdate:startCharTurn"+String(this.m_currentCharTurn),0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<632>";
	if(this.m_currentCharTurn==-1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<632>";
		this.p_NextRound();
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<633>";
	this.m_currentCharTurn+=1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<634>";
	this.m_menuIndex=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<635>";
	this.m_menuColumn=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<636>";
	c_modes2.m_current=1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<638>";
	bb_engine_NLog("modeNTUpdate:currentCharTurn"+String(this.m_currentCharTurn),0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<639>";
	if((this.p_IsGameOver())!=0){
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<641>";
	this.m_curCharData=null;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<643>";
	if(this.m_currentCharTurn==bb_engine_playerCharacters.p_Count()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<644>";
		this.m_curCharData=null;
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<646>";
		this.m_curCharData=dbg_array(bb_engine_playerCharacters.p_ToArray(),this.m_currentCharTurn)[dbg_index];
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<649>";
	if(this.m_curCharData==null){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<650>";
		bb_engine_NLog(String(this.m_currentCharTurn)+" leads to a null character",0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<651>";
		this.p_EndPlayerTurn();
		pop_err();
		return;
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<654>";
		bb_engine_NLog(String(this.m_currentCharTurn)+" does NOT lead to a null character",0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<655>";
		if(dbg_object(this.m_curCharData).m_HP==0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<657>";
			c_modes2.m_current=11;
			pop_err();
			return;
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<662>";
	this.p_placePlayers();
	pop_err();
}
c_SCombat.prototype.p_OnInit=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<44>";
	this.p_Clear();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<46>";
	this.m_currentCharTurn=-1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<47>";
	this.p_modeNTUpdate();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<50>";
	c_modes2.m_current=0;
	pop_err();
	return 0;
}
c_SCombat.prototype.p_GoToRun=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<976>";
	this.m_menuColumn=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<977>";
	this.m_menuIndex=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<978>";
	this.m_currentEnemyTurn=1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<979>";
	this.m_currentCharTurn=5;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<981>";
	c_modes2.m_current=12;
	pop_err();
}
c_SCombat.prototype.p_modePlayerUpdate=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<387>";
	this.p_UpDownMenu(4,0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<389>";
	if(c_NInput.m_IsHit(5)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<390>";
		var t_10=this.m_menuIndex;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<391>";
		if(t_10==0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<392>";
			this.m_combatTarget=null;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<394>";
			c_modes2.m_current=5;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<395>";
			this.m_combatTarget=(this.m_enemyList.p_First());
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<399>";
			if(t_10==1){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<400>";
				c_modes2.m_current=2;
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<401>";
				this.m_menuColumn=0;
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<402>";
				this.m_menuIndex=0;
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<403>";
				if(t_10==2){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<404>";
					dbg_object(this.m_curCharData).m_evasion+=75;
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<405>";
					c_modes2.m_current=11;
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<406>";
					c_GMessageTicker.m_Add(dbg_object(this.m_curCharData).m_Name+" guarded");
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<409>";
					if(bb_random_Rnd3(150.0)>(this.m_enemyList.p_Count()*10-dbg_object(this.m_curCharData).m_evasion)){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<410>";
						this.p_GoToRun();
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<412>";
						c_modes2.m_current=11;
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<413>";
						c_GMessageTicker.m_Add("Running away failed!");
					}
				}
			}
		}
	}
	pop_err();
}
c_SCombat.prototype.p_UseSpellOnCombatTarget=function(t_attacker,t_spellName,t_surpress){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<201>";
	var t_spellPower=bb_combat_GetSpellPower(t_spellName,this.m_combatTarget,t_attacker,false);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<202>";
	this.m_blockingEffect=c_GEffect.m_Create(bb_engine_imageMap.p_Get("blast"),dbg_object(this.m_combatTarget).m_x+4,dbg_object(this.m_combatTarget).m_y+2,250);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<203>";
	if(!t_surpress){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<203>";
		c_GMessageTicker.m_Add(dbg_object(t_attacker).m_Name+" used "+t_spellName.toUpperCase());
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<205>";
	if(bb_engine_playerCharacters.p_Contains3(this.m_combatTarget) && bb_engine_playerCharacters.p_Contains3(t_attacker)){
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<207>";
		if(t_attacker==this.m_combatTarget){
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<210>";
			if(bb_random_Rnd3(200.0)<(dbg_object(this.m_combatTarget).m_evasion-((dbg_object(t_attacker).m_LuckBuffed/4)|0))){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<211>";
				c_GMessageTicker.m_Add(dbg_object(t_attacker).m_Name+" missed!");
				pop_err();
				return;
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<216>";
	bb_engine_NLog("Pre affect - "+this.m_combatTarget.p_GetStats()+" Evasion:"+String(dbg_object(this.m_combatTarget).m_evasion),0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<218>";
	var t_4=t_spellName.toLowerCase();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<221>";
	if(t_4=="smoke"){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<222>";
		this.m_combatTarget.p_AddBuff("evade",t_spellPower,bb_combat_GetSpellDuration(t_spellName,t_attacker),true);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<223>";
		if(this.m_combatTarget==t_attacker){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<224>";
			c_GMessageTicker.m_Add(dbg_object(t_attacker).m_Name+" self-buffed!");
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<226>";
			c_GMessageTicker.m_Add(dbg_object(t_attacker).m_Name+" buffed "+dbg_object(this.m_combatTarget).m_Name+"!");
		}
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<228>";
		if(t_4=="ensnare"){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<229>";
			this.m_combatTarget.p_AddBuff("evade",-1*t_spellPower,2+((dbg_object(t_attacker).m_KnowledgeBuffed/20)|0),true);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<230>";
			c_GMessageTicker.m_Add(dbg_object(t_attacker).m_Name+" debuffed "+dbg_object(this.m_combatTarget).m_Name+"!");
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<232>";
			if(t_4=="focus"){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<233>";
				this.m_combatTarget.p_AddBuff("luck",t_spellPower,bb_combat_GetSpellDuration(t_spellName,t_attacker),true);
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<234>";
				if(this.m_combatTarget==t_attacker){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<235>";
					c_GMessageTicker.m_Add(dbg_object(t_attacker).m_Name+" self-buffed!");
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<237>";
					c_GMessageTicker.m_Add(dbg_object(t_attacker).m_Name+" buffed "+dbg_object(this.m_combatTarget).m_Name+"!");
				}
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<239>";
				if(t_4=="terror"){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<240>";
					this.m_combatTarget.p_AddBuff("luck",-1*t_spellPower,bb_combat_GetSpellDuration(t_spellName,t_attacker),true);
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<241>";
					c_GMessageTicker.m_Add(dbg_object(t_attacker).m_Name+" debuffed "+dbg_object(this.m_combatTarget).m_Name+"!");
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<243>";
					if(t_4=="boost"){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<244>";
						this.m_combatTarget.p_AddBuff("strength",t_spellPower,bb_combat_GetSpellDuration(t_spellName,t_attacker),true);
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<246>";
						if(this.m_combatTarget==t_attacker){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<247>";
							c_GMessageTicker.m_Add(dbg_object(t_attacker).m_Name+" self-buffed!");
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<249>";
							c_GMessageTicker.m_Add(dbg_object(t_attacker).m_Name+" buffed "+dbg_object(this.m_combatTarget).m_Name+"!");
						}
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<251>";
						if(t_4=="posion"){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<252>";
							this.m_combatTarget.p_AddBuff("strength",-1*t_spellPower,bb_combat_GetSpellDuration(t_spellName,t_attacker),true);
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<253>";
							c_GMessageTicker.m_Add(dbg_object(t_attacker).m_Name+" debuffed "+dbg_object(this.m_combatTarget).m_Name+"!");
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<257>";
							if(t_4=="heal"){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<258>";
								dbg_object(this.m_combatTarget).m_HP+=t_spellPower;
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<259>";
								if(dbg_object(this.m_combatTarget).m_maxHP<dbg_object(this.m_combatTarget).m_HP){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<259>";
									dbg_object(this.m_combatTarget).m_HP=dbg_object(this.m_combatTarget).m_maxHP;
								}
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<260>";
								c_GMessageTicker.m_Add(dbg_object(this.m_combatTarget).m_Name+" was healed "+String(t_spellPower));
							}else{
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<261>";
								if(t_4=="cure"){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<262>";
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<262>";
									var t_=dbg_object(this.m_combatTarget).m_Buffs.p_ObjectEnumerator();
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<262>";
									while(t_.p_HasNext()){
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<262>";
										var t_buff=t_.p_NextObject();
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<263>";
										if(dbg_object(t_buff).m_amt<0){
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<264>";
											dbg_object(this.m_combatTarget).m_Buffs.p_RemoveEach(t_buff);
										}
									}
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<267>";
									c_GMessageTicker.m_Add(dbg_object(this.m_combatTarget).m_Name+" isn't debuffed");
								}else{
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<269>";
									if(t_4=="slash"){
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<270>";
										var t_5=this.m_combatTarget.p_IsWeak("attack");
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<271>";
										if(t_5==1){
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<272>";
											c_GMessageTicker.m_Add(dbg_object(this.m_combatTarget).m_Name+" is weak!");
										}else{
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<273>";
											if(t_5==-1){
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<274>";
												c_GMessageTicker.m_Add(dbg_object(this.m_combatTarget).m_Name+" is strong!");
											}
										}
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<277>";
										c_GMessageTicker.m_Add(dbg_object(this.m_combatTarget).m_Name+" took "+String(t_spellPower)+" dmg");
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<278>";
										dbg_object(this.m_combatTarget).m_HP-=t_spellPower;
									}else{
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<280>";
										if(t_4=="aero"){
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<281>";
											var t_6=this.m_combatTarget.p_IsWeak("aero");
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<282>";
											if(t_6==1){
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<283>";
												c_GMessageTicker.m_Add(dbg_object(this.m_combatTarget).m_Name+" is weak!");
											}else{
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<284>";
												if(t_6==-1){
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<285>";
													c_GMessageTicker.m_Add(dbg_object(this.m_combatTarget).m_Name+" is strong!");
												}
											}
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<287>";
											c_GMessageTicker.m_Add(dbg_object(this.m_combatTarget).m_Name+" took "+String(t_spellPower)+" dmg");
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<288>";
											dbg_object(this.m_combatTarget).m_HP-=t_spellPower;
										}else{
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<290>";
											if(t_4=="fire"){
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<291>";
												var t_7=this.m_combatTarget.p_IsWeak("fire");
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<292>";
												if(t_7==1){
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<293>";
													c_GMessageTicker.m_Add(dbg_object(this.m_combatTarget).m_Name+" is weak!");
												}else{
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<294>";
													if(t_7==-1){
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<295>";
														c_GMessageTicker.m_Add(dbg_object(this.m_combatTarget).m_Name+" is strong!");
													}
												}
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<298>";
												c_GMessageTicker.m_Add(dbg_object(this.m_combatTarget).m_Name+" took "+String(t_spellPower)+" dmg");
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<299>";
												dbg_object(this.m_combatTarget).m_HP-=t_spellPower;
											}else{
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<301>";
												if(t_4=="ice"){
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<302>";
													var t_8=this.m_combatTarget.p_IsWeak("ice");
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<303>";
													if(t_8==1){
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<304>";
														c_GMessageTicker.m_Add(dbg_object(this.m_combatTarget).m_Name+" is weak!");
													}else{
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<305>";
														if(t_8==-1){
															err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<306>";
															c_GMessageTicker.m_Add(dbg_object(this.m_combatTarget).m_Name+" is strong!");
														}
													}
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<309>";
													c_GMessageTicker.m_Add(dbg_object(this.m_combatTarget).m_Name+" took "+String(t_spellPower)+" dmg");
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<310>";
													dbg_object(this.m_combatTarget).m_HP-=t_spellPower;
												}else{
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<312>";
													if(t_4=="rock"){
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<313>";
														var t_9=this.m_combatTarget.p_IsWeak("rock");
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<314>";
														if(t_9==1){
															err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<315>";
															c_GMessageTicker.m_Add(dbg_object(this.m_combatTarget).m_Name+" is weak!");
														}else{
															err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<316>";
															if(t_9==-1){
																err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<317>";
																c_GMessageTicker.m_Add(dbg_object(this.m_combatTarget).m_Name+" is strong!");
															}
														}
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<320>";
														c_GMessageTicker.m_Add(dbg_object(this.m_combatTarget).m_Name+" took "+String(t_spellPower)+" dmg");
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<321>";
														dbg_object(this.m_combatTarget).m_HP-=t_spellPower;
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<324>";
	bb_engine_NLog(this.m_combatTarget.p_GetStats()+" Evasion:"+String(dbg_object(this.m_combatTarget).m_evasion),0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<325>";
	this.m_combatTarget.p_CalculateBuffs();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<326>";
	bb_engine_NLog("Post affect -- "+this.m_combatTarget.p_GetStats()+" Evasion:"+String(dbg_object(this.m_combatTarget).m_evasion),0);
	pop_err();
}
c_SCombat.prototype.p_GoToWin=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<846>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<846>";
	var t_=bb_engine_playerCharacters.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<846>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<846>";
		var t_pc=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<847>";
		dbg_object(t_pc).m_LvlUp=false;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<848>";
		if(dbg_object(t_pc).m_HP>0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<849>";
			t_pc.p_AddXP(this.m_xpGained);
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<851>";
			t_pc.p_AddXP(this.m_xpGained*2);
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<854>";
	bb_engine_playerGold+=this.m_goldGained;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<857>";
	this.m_menuColumn=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<858>";
	this.m_menuIndex=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<859>";
	this.m_currentEnemyTurn=1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<860>";
	this.m_currentCharTurn=5;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<862>";
	c_modes2.m_current=10;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<864>";
	if(bb_engine_gameTriggers.p_Get("m"+String(bb_engine_ConvertToSpecialID(10,0)))=="1"){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<865>";
		c_GMessageTicker.m_Add("'How? Meer mortals..'");
	}
	pop_err();
}
c_SCombat.prototype.p_CheckIfMonsterIsDead=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<606>";
	if(dbg_object(this.m_combatTarget).m_HP<1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<607>";
		c_GMessageTicker.m_Add(dbg_object(this.m_combatTarget).m_Name+" died!");
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<608>";
		this.m_enemyList.p_RemoveEach2(object_downcast((this.m_combatTarget),c_DMonster));
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<609>";
		this.m_xpGained+=this.m_combatTarget.p_CalcXPWorth();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<610>";
		bb_engine_NLog("[Added "+String(this.m_combatTarget.p_CalcXPWorth())+" xp]",0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<611>";
		this.m_goldGained=(((this.m_goldGained)+(dbg_object(this.m_combatTarget).m_Level*10+dbg_object(this.m_combatTarget).m_EnduranceBuffed*10+dbg_object(this.m_combatTarget).m_Skills.p_Count()*25)*0.1)|0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<612>";
		bb_engine_NLog("[Added "+String(this.m_combatTarget.p_CalcXPWorth())+" xp]",0);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<615>";
	if(this.m_enemyList.p_Count()==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<616>";
		this.p_GoToWin();
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<618>";
		c_modes2.m_current=11;
	}
	pop_err();
}
c_SCombat.prototype.p_modeSkillUpdate=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<448>";
	if(c_NInput.m_IsHit(5) && this.m_SelectedSkill!=""){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<449>";
		bb_engine_NLog("Selected Skill '"+this.m_SelectedSkill+"'!",0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<450>";
		this.m_combatTarget=null;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<452>";
		this.m_menuIndex=0;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<453>";
		c_GMessageTicker.m_lastMsgMs=0;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<455>";
		if(this.m_combatTarget==this.m_curCharData){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<456>";
			this.p_UseSpellOnCombatTarget(this.m_curCharData,this.m_SelectedSkill,false);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<457>";
			c_modes2.m_current=11;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<460>";
			var t_11=this.m_SelectedSkill;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<461>";
			if(t_11=="smoke"){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<462>";
				c_modes2.m_current=6;
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<463>";
				if(t_11=="heal"){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<464>";
					c_modes2.m_current=6;
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<465>";
					if(t_11=="cure"){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<466>";
						c_modes2.m_current=6;
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<468>";
						if(t_11=="slash"){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<469>";
							c_modes2.m_current=11;
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<471>";
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<471>";
							var t_=this.m_enemyList.p_ObjectEnumerator();
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<471>";
							while(t_.p_HasNext()){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<471>";
								var t_emy=t_.p_NextObject();
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<472>";
								this.m_combatTarget=(t_emy);
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<473>";
								this.p_UseSpellOnCombatTarget(this.m_curCharData,this.m_SelectedSkill,t_emy!=this.m_enemyList.p_First());
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<474>";
								this.p_CheckIfMonsterIsDead();
							}
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<480>";
							c_modes2.m_current=7;
						}
					}
				}
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<485>";
	if(c_NInput.m_IsHit(6)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<486>";
		this.m_menuIndex=1;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<487>";
		c_GMessageTicker.m_lastMsgMs=0;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<488>";
		c_modes2.m_current=1;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<491>";
	this.p_UpDownMenu(4,0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<493>";
	this.p_LeftRightMenu(3,0);
	pop_err();
}
c_SCombat.prototype.p_AttackCombatTarget=function(t_attacker){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<178>";
	this.m_blockingEffect=c_GEffect.m_Create(bb_engine_imageMap.p_Get("slash"),dbg_object(this.m_combatTarget).m_x+4,dbg_object(this.m_combatTarget).m_y+2,250);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<180>";
	if(bb_random_Rnd3(100.0)<(dbg_object(this.m_combatTarget).m_evasion-((dbg_object(t_attacker).m_LuckBuffed/4)|0))){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<181>";
		c_GMessageTicker.m_Add(dbg_object(t_attacker).m_Name+" missed!");
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<183>";
		var t_damage=this.m_curCharData.p_Fight(0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<186>";
		var t_3=this.m_combatTarget.p_IsWeak("attack");
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<187>";
		if(t_3==1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<188>";
			t_damage*=2;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<189>";
			c_GMessageTicker.m_Add(dbg_object(this.m_combatTarget).m_Name+" is weak!");
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<190>";
			if(t_3==-1){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<191>";
				t_damage=((t_damage/2)|0);
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<192>";
				c_GMessageTicker.m_Add(dbg_object(this.m_combatTarget).m_Name+" is strong!");
			}
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<195>";
		c_GMessageTicker.m_Add(dbg_object(this.m_combatTarget).m_Name+" took "+String(t_damage)+" dmg");
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<196>";
		dbg_object(this.m_combatTarget).m_HP-=t_damage;
	}
	pop_err();
}
c_SCombat.prototype.p_modeEnemyUpdate=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<760>";
	if(c_GMessageTicker.m_msgList.p_Count()==0 && c_GMessageTicker.m_curMsg==""){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<761>";
		if(this.m_currentEnemyTurn==-1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<763>";
			this.m_currentEnemyTurn=0;
		}
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<766>";
		if(this.m_currentEnemyTurn==-1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<767>";
			this.m_curCharData=(dbg_array(this.m_enemyList.p_ToArray(),0)[dbg_index]);
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<769>";
		if(c_NInput.m_IsHit(5)){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<769>";
			c_GMessageTicker.m_Skip();
		}
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<773>";
	if((this.p_IsGameOver())!=0){
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<775>";
	var t_currentMonster=dbg_array(this.m_enemyList.p_ToArray(),this.m_currentEnemyTurn)[dbg_index];
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<776>";
	t_currentMonster.p_CalculateBuffs();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<779>";
	this.m_combatTarget=null;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<780>";
	for(var t_timeOut=0;t_timeOut<=8;t_timeOut=t_timeOut+1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<781>";
		if(bb_engine_playerCharacters.p_Count()==1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<782>";
			this.m_combatTarget=bb_engine_playerCharacters.p_First();
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<784>";
			this.m_combatTarget=dbg_array(bb_engine_playerCharacters.p_ToArray(),((bb_random_Rnd3(bb_engine_playerCharacters.p_Count()))|0))[dbg_index];
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<786>";
		if(dbg_object(this.m_combatTarget).m_HP>0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<786>";
			break;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<787>";
		this.m_combatTarget=null;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<789>";
	if(this.m_combatTarget==null){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<791>";
		c_GMessageTicker.m_Add(dbg_object(t_currentMonster).m_Name+" is confused!");
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<796>";
	if(dbg_object(t_currentMonster).m_Skills.p_IsEmpty()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<797>";
		this.p_AttackCombatTarget(t_currentMonster);
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<799>";
		if(bb_random_Rnd3(100.0)<(10+dbg_object(t_currentMonster).m_KnowledgeBuffed*2+dbg_object(t_currentMonster).m_Skills.p_Count()*2)){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<801>";
			var t_t=((bb_random_Rnd3(dbg_object(t_currentMonster).m_Skills.p_Count()+1))|0);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<801>";
			var t_i=0;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<802>";
			if(t_t>=dbg_object(t_currentMonster).m_Skills.p_Count()){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<803>";
				t_t=0;
			}
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<805>";
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<805>";
			var t_=dbg_object(t_currentMonster).m_Skills.p_Keys().p_ObjectEnumerator();
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<805>";
			while(t_.p_HasNext()){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<805>";
				var t_skill=t_.p_NextObject();
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<806>";
				if(t_t==t_i){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<807>";
					var t_14=t_skill.toLowerCase();
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<808>";
					if(t_14=="smoke"){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<808>";
						this.m_combatTarget=(t_currentMonster);
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<809>";
						if(t_14=="focus"){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<809>";
							this.m_combatTarget=(t_currentMonster);
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<810>";
							if(t_14=="boost"){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<810>";
								this.m_combatTarget=(t_currentMonster);
							}else{
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<812>";
								if(t_14=="heal"){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<812>";
									this.m_combatTarget=(t_currentMonster);
								}else{
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<813>";
									if(t_14=="cure"){
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<813>";
										this.m_combatTarget=(t_currentMonster);
									}
								}
							}
						}
					}
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<816>";
					this.p_UseSpellOnCombatTarget((t_currentMonster),t_skill,false);
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<817>";
					break;
				}
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<820>";
				t_i+=1;
			}
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<823>";
			this.p_AttackCombatTarget(t_currentMonster);
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<826>";
		if(this.m_currentEnemyTurn+1<this.m_enemyList.p_Count()){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<828>";
			this.m_curCharData=(dbg_array(this.m_enemyList.p_ToArray(),this.m_currentEnemyTurn)[dbg_index]);
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<833>";
	if(dbg_object(this.m_combatTarget).m_HP<0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<834>";
		dbg_object(this.m_combatTarget).m_HP=0;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<835>";
		c_GMessageTicker.m_Add(dbg_object(this.m_combatTarget).m_Name+" died!");
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<838>";
	this.m_currentEnemyTurn+=1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<839>";
	if(this.m_currentEnemyTurn==this.m_enemyList.p_Count()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<840>";
		c_modes2.m_current=11;
	}
	pop_err();
}
c_SCombat.prototype.p_modeselectEnemyFightUpdate=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<510>";
	if(this.m_enemyList.p_Count()==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<510>";
		c_modes2.m_current=1;
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<512>";
	this.p_UpDownMenu(this.m_enemyList.p_Count(),0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<514>";
	if(this.m_enemyList.p_Count()<this.m_menuIndex){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<514>";
		this.m_menuIndex=0;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<516>";
	this.m_combatTarget=(dbg_array(this.m_enemyList.p_ToArray(),this.m_menuIndex)[dbg_index]);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<518>";
	if(c_NInput.m_IsHit(5) && this.m_combatTarget!=null){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<519>";
		c_modes2.m_current=4;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<522>";
	if(c_NInput.m_IsHit(6)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<523>";
		this.m_menuIndex=0;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<524>";
		c_modes2.m_current=1;
	}
	pop_err();
}
c_SCombat.prototype.p_modeselectEnemyUpdate=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<538>";
	if(this.m_enemyList.p_Count()==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<538>";
		c_modes2.m_current=1;
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<540>";
	this.p_UpDownMenu(this.m_enemyList.p_Count(),0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<542>";
	if(this.m_enemyList.p_Count()<this.m_menuIndex){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<542>";
		this.m_menuIndex=0;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<544>";
	this.m_combatTarget=(dbg_array(this.m_enemyList.p_ToArray(),this.m_menuIndex)[dbg_index]);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<546>";
	if(c_NInput.m_IsHit(5) && this.m_combatTarget!=null){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<547>";
		this.p_UseSpellOnCombatTarget(this.m_curCharData,this.m_SelectedSkill,false);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<549>";
		this.p_CheckIfMonsterIsDead();
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<552>";
	if(c_NInput.m_IsHit(6)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<553>";
		this.m_menuIndex=0;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<554>";
		c_modes2.m_current=1;
	}
	pop_err();
}
c_SCombat.prototype.p_modeselectFriendUpdate=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<572>";
	this.p_UpDownMenu(bb_engine_playerCharacters.p_Count(),0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<574>";
	this.m_combatTarget=dbg_array(bb_engine_playerCharacters.p_ToArray(),this.m_menuIndex)[dbg_index];
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<576>";
	if(c_NInput.m_IsHit(5) && this.m_combatTarget!=null){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<577>";
		this.p_UseSpellOnCombatTarget(this.m_curCharData,this.m_SelectedSkill,false);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<578>";
		c_modes2.m_current=11;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<581>";
	if(c_NInput.m_IsHit(6)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<582>";
		this.m_menuIndex=0;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<583>";
		this.m_menuColumn=0;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<584>";
		c_modes2.m_current=1;
	}
	pop_err();
}
c_SCombat.prototype.p_modefightUpdate=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<597>";
	if(this.m_enemyList.p_Count()==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<597>";
		this.p_GoToWin();
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<598>";
	if(this.m_combatTarget==null){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<598>";
		this.m_combatTarget=(this.m_enemyList.p_First());
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<600>";
	this.p_AttackCombatTarget(this.m_curCharData);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<602>";
	this.p_CheckIfMonsterIsDead();
	pop_err();
}
c_SCombat.prototype.p_EndCombatWin=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<920>";
	bb_engine_SwitchScreenTo(bb_engine_townMapScreen,true);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<921>";
	this.p_Clear();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<923>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<923>";
	var t_=bb_engine_playerCharacters.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<923>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<923>";
		var t_ply=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<924>";
		if(dbg_object(t_ply).m_HP<1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<924>";
			dbg_object(t_ply).m_HP=1;
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<929>";
	if(bb_engine_gameTriggers.p_Get("m"+String(bb_engine_ConvertToSpecialID(2,0)))=="1"){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<930>";
		bb_engine_gameTriggers.p_Set("m"+String(bb_engine_ConvertToSpecialID(2,0)),"2");
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<932>";
		if(bb_engine_archer==null){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<933>";
			c_GMessageTicker.m_Add("Archer joined your Party!");
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<934>";
			bb_engine_archer=c_DCharacter.m_new2.call(new c_DCharacter);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<935>";
			dbg_object(bb_engine_archer).m_accessory=c_DItem.m_Generate(0,4);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<936>";
			bb_engine_archer.p_InitStats(4,5,3);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<937>";
			bb_engine_archer.p_InitLevel(5,"ARCHER");
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<938>";
			dbg_object(bb_engine_archer).m_img=bb_engine_imageMap.p_Get("archer");
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<939>";
			dbg_object(bb_engine_archer).m_Skills.p_Add("cure","");
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<942>";
			bb_engine_playerCharacters.p_AddLast2(bb_engine_archer);
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<946>";
	if(bb_engine_gameTriggers.p_Get("m"+String(bb_engine_ConvertToSpecialID(10,0)))=="1"){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<947>";
		bb_engine_gameTriggers.p_Set("m"+String(bb_engine_ConvertToSpecialID(10,0)),"2");
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<950>";
	if(bb_engine_gameTriggers.p_Get("m"+String(bb_engine_ConvertToSpecialID(3,0)))=="1"){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<951>";
		bb_engine_gameTriggers.p_Set("m"+String(bb_engine_ConvertToSpecialID(3,0)),"2");
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<954>";
	if(bb_engine_gameTriggers.p_Get("m"+String(bb_engine_ConvertToSpecialID(5,0)))=="1"){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<955>";
		bb_engine_gameTriggers.p_Set("m"+String(bb_engine_ConvertToSpecialID(5,0)),"2");
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<958>";
	if(bb_engine_gameTriggers.p_Get("m"+String(bb_engine_ConvertToSpecialID(6,0)))=="1"){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<959>";
		bb_engine_gameTriggers.p_Set("m"+String(bb_engine_ConvertToSpecialID(6,0)),"2");
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<962>";
	if(bb_engine_gameTriggers.p_Get("m"+String(bb_engine_ConvertToSpecialID(8,0)))=="1"){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<963>";
		bb_engine_gameTriggers.p_Set("m"+String(bb_engine_ConvertToSpecialID(8,0)),"2");
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<966>";
	if(bb_engine_gameTriggers.p_Get("m"+String(bb_engine_ConvertToSpecialID(9,0)))=="1"){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<967>";
		bb_engine_gameTriggers.p_Set("m"+String(bb_engine_ConvertToSpecialID(9,0)),"2");
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<970>";
	bb_engine_ClearActiveEvents();
	pop_err();
}
c_SCombat.prototype.p_modeWinUpdate=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<877>";
	if(this.m_menuColumn<this.m_xpGained){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<878>";
		this.m_menuColumn+=1;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<879>";
		if(this.m_menuColumn>10){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<879>";
			this.m_menuColumn+=4;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<880>";
		if(this.m_menuColumn>50){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<880>";
			this.m_menuColumn+=5;
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<882>";
	if(this.m_menuColumn>this.m_xpGained){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<882>";
		this.m_menuColumn=this.m_xpGained;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<884>";
	if(this.m_menuIndex<this.m_goldGained){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<885>";
		this.m_menuIndex+=5;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<886>";
		if(this.m_menuIndex>25){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<886>";
			this.m_menuIndex+=5;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<887>";
		if(this.m_menuIndex>100){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<887>";
			this.m_menuIndex+=15;
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<889>";
	if(this.m_menuIndex>this.m_goldGained){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<889>";
		this.m_menuIndex=this.m_goldGained;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<891>";
	if(c_NInput.m_IsHit(5)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<892>";
		if(c_GMessageTicker.m_curMsg=="" && this.m_menuIndex==this.m_goldGained && this.m_menuColumn==this.m_xpGained){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<892>";
			this.p_EndCombatWin();
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<893>";
		if(c_GMessageTicker.m_curMsg!=""){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<893>";
			c_GMessageTicker.m_Skip();
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<896>";
	if(this.m_currentCharTurn==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<897>";
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<897>";
		var t_=bb_engine_playerCharacters.p_ObjectEnumerator();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<897>";
		while(t_.p_HasNext()){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<897>";
			var t_ply=t_.p_NextObject();
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<898>";
			dbg_object(t_ply).m_y+=this.m_currentEnemyTurn*4;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<900>";
		this.m_currentEnemyTurn*=-1;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<901>";
		this.m_currentCharTurn=5;
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<903>";
		this.m_currentCharTurn-=1;
	}
	pop_err();
}
c_SCombat.prototype.p_modeRunUpdate=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<992>";
	if(c_NInput.m_IsHit(5)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<993>";
		if(c_GMessageTicker.m_curMsg==""){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<994>";
			this.p_EndCombatLose();
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<996>";
			c_GMessageTicker.m_Skip();
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<1000>";
	if(this.m_currentCharTurn==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<1001>";
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<1001>";
		var t_=bb_engine_playerCharacters.p_ObjectEnumerator();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<1001>";
		while(t_.p_HasNext()){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<1001>";
			var t_ply=t_.p_NextObject();
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<1002>";
			dbg_object(t_ply).m_y+=this.m_currentEnemyTurn*4;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<1003>";
			dbg_object(t_ply).m_x=-4;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<1005>";
		this.m_currentEnemyTurn*=-1;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<1006>";
		this.m_currentCharTurn=5;
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<1008>";
		this.m_currentCharTurn-=1;
	}
	pop_err();
}
c_SCombat.prototype.p_OnUpdate=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<55>";
	c_GEffect.m_UpdateAll();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<56>";
	c_GMessageTicker.m_Update();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<58>";
	if((this.m_blockingEffect)!=null){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<59>";
		if(c_GEffect.m_effectList.p_Contains4(this.m_blockingEffect)){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<60>";
			pop_err();
			return 0;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<62>";
			this.m_blockingEffect=null;
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<66>";
	var t_1=c_modes2.m_current;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<67>";
	if(t_1==1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<68>";
		this.p_modePlayerUpdate();
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<69>";
		if(t_1==2){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<70>";
			this.p_modeSkillUpdate();
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<71>";
			if(t_1==3){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<72>";
				this.p_modeEnemyUpdate();
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<73>";
				if(t_1==5){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<74>";
					this.p_modeselectEnemyFightUpdate();
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<75>";
					if(t_1==7){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<76>";
						this.p_modeselectEnemyUpdate();
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<77>";
						if(t_1==6){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<78>";
							this.p_modeselectFriendUpdate();
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<79>";
							if(t_1==4){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<80>";
								this.p_modefightUpdate();
							}else{
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<81>";
								if(t_1==11){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<82>";
									this.p_modeNTUpdate();
								}else{
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<83>";
									if(t_1==10){
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<84>";
										this.p_modeWinUpdate();
									}else{
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<85>";
										if(t_1==12){
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<86>";
											this.p_modeRunUpdate();
										}else{
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<87>";
											if(t_1==0){
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<88>";
												if(c_GMessageTicker.m_curMsg==""){
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<88>";
													c_modes2.m_current=1;
												}
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<89>";
												if(c_GMessageTicker.m_curMsg!="" && c_NInput.m_IsHit(5)){
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<89>";
													c_GMessageTicker.m_Skip();
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	pop_err();
	return 0;
}
c_SCombat.prototype.p_DrawBattle=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<141>";
	if((bb_engine_townMapScreen)!=null){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<142>";
		var t_tmp=object_downcast((bb_engine_townMapScreen),c_SMap);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<143>";
		if(dbg_object(t_tmp).m_map!=null && dbg_object(t_tmp).m_tilemap!=null){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<144>";
			bb_graphics_PushMatrix();
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<145>";
			bb_graphics_Scale(4.0,4.0);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<146>";
			bb_graphics_Translate(13.0,9.0);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<147>";
			bb_graphics_SetAlpha(0.5);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<148>";
			bb_graphics_DrawImage(dbg_object(t_tmp).m_tilemap,0.0,0.0,dbg_array(dbg_array(dbg_object(dbg_object(t_tmp).m_map).m_currentMap,dbg_object(t_tmp).m_y)[dbg_index],dbg_object(t_tmp).m_x)[dbg_index]);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<149>";
			bb_graphics_SetAlpha(1.0);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<150>";
			bb_graphics_PopMatrix();
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<154>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<154>";
	var t_=bb_engine_playerCharacters.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<154>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<154>";
		var t_ply=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<155>";
		t_ply.p_Draw();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<156>";
		if(c_modes2.m_current==10){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<157>";
			if(dbg_object(t_ply).m_HP==0){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<158>";
				bb_gui_GDrawTextPreserveBlend("K.O.",dbg_object(t_ply).m_x+24+4,dbg_object(t_ply).m_y+4);
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<160>";
				if(dbg_object(t_ply).m_LvlUp){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<161>";
					bb_gui_GDrawTextPreserveBlend("LEVEL UP!",dbg_object(t_ply).m_x+24+4,dbg_object(t_ply).m_y+4);
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<163>";
					bb_gui_GDrawTextPreserveBlend(String(dbg_object(t_ply).m_XPNextLevel+this.m_xpGained-this.m_menuColumn)+"xp left",dbg_object(t_ply).m_x+24+4,dbg_object(t_ply).m_y+4);
				}
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<169>";
	var t_curEmyNum=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<170>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<170>";
	var t_2=this.m_enemyList.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<170>";
	while(t_2.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<170>";
		var t_emy=t_2.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<171>";
		t_emy.p_Draw();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<172>";
		t_curEmyNum+=1;
	}
	pop_err();
}
c_SCombat.prototype.p_modePlayerDraw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<358>";
	if(this.m_curCharData==null){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<359>";
		bb_gui_GDrawTextPreserveBlend("No Current Character",44,110);
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<363>";
	bb_gui_GDrawTextPreserveBlend("<-",dbg_object(this.m_curCharData).m_x+24,dbg_object(this.m_curCharData).m_y+8);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<365>";
	c_GWindowDrawer.m_Draw(0,106,42,42);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<367>";
	bb_gui_GDrawTextPreserveBlend(" FIGHT",2,110);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<368>";
	bb_gui_GDrawTextPreserveBlend(" SKILL",2,118);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<369>";
	bb_gui_GDrawTextPreserveBlend(" BLOCK",2,126);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<370>";
	bb_gui_GDrawTextPreserveBlend(" RUN",2,134);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<372>";
	bb_gui_GDrawTextPreserveBlend(">",2,110+this.m_menuIndex*8);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<375>";
	c_GWindowDrawer.m_Draw(41,106,119,42);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<377>";
	bb_gui_GDrawTextPreserveBlend(dbg_object(this.m_curCharData).m_Name+"  Lvl "+String(dbg_object(this.m_curCharData).m_Level),44,110);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<378>";
	bb_gui_GDrawTextPreserveBlend("HP "+String(dbg_object(this.m_curCharData).m_HP)+"/"+String(dbg_object(this.m_curCharData).m_maxHP),44,118);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<379>";
	bb_gui_GDrawTextPreserveBlend("St"+String(dbg_object(this.m_curCharData).m_StrengthBuffed)+" En"+String(dbg_object(this.m_curCharData).m_EnduranceBuffed)+" Kn"+String(dbg_object(this.m_curCharData).m_KnowledgeBuffed)+" Lu"+String(dbg_object(this.m_curCharData).m_LuckBuffed),44,126);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<381>";
	bb_gui_GDrawTextPreserveBlend("Next Level: "+String(dbg_object(this.m_curCharData).m_XPNextLevel),44,134);
	pop_err();
}
c_SCombat.prototype.p_modeSkillDraw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<422>";
	c_GWindowDrawer.m_Draw(0,106,160,42);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<423>";
	bb_gui_GDrawTextPreserveBlend(">",2+50*this.m_menuColumn,110+this.m_menuIndex*8);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<425>";
	c_GMessageTicker.m_curMsg="";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<426>";
	c_GMessageTicker.m_lastMsgMs=-1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<427>";
	this.m_SelectedSkill="";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<429>";
	var t_tColumn=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<429>";
	var t_tRow=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<431>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<431>";
	var t_=dbg_object(this.m_curCharData).m_Skills.p_Keys().p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<431>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<431>";
		var t_key=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<432>";
		bb_gui_GDrawTextPreserveBlend(t_key.toUpperCase(),8+50*t_tColumn,110+t_tRow*8);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<433>";
		if(this.m_menuColumn==t_tColumn && this.m_menuIndex==t_tRow){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<434>";
			c_GMessageTicker.m_Set(c_L.m_Get("skilldesc_"+t_key.toLowerCase()));
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<435>";
			this.m_SelectedSkill=t_key.toLowerCase();
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<438>";
		t_tRow+=1;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<439>";
		if(t_tRow==4){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<440>";
			t_tRow=0;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<441>";
			t_tColumn+=1;
		}
	}
	pop_err();
}
c_SCombat.prototype.p_DrawBasicStats=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<129>";
	var t_i=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<130>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<130>";
	var t_=bb_engine_playerCharacters.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<130>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<130>";
		var t_char=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<132>";
		bb_gui_GDrawTextPreserveBlend(dbg_object(t_char).m_Name,6,110+t_i*8);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<133>";
		bb_gui_GDrawTextPreserveBlend("LVL:"+String(dbg_object(t_char).m_Level),62,110+t_i*8);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<134>";
		bb_gui_GDrawTextPreserveBlend(String(dbg_object(t_char).m_HP)+"/"+String(dbg_object(t_char).m_maxHP)+"HP",102,110+t_i*8);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<135>";
		t_i+=1;
	}
	pop_err();
}
c_SCombat.prototype.p_modeEnemyDraw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<751>";
	c_GWindowDrawer.m_Draw(0,106,160,42);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<752>";
	if((this.m_curCharData)!=null){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<752>";
		bb_gui_GDrawTextPreserveBlend("->",dbg_object(this.m_curCharData).m_x-12,dbg_object(this.m_curCharData).m_y+8);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<754>";
	this.p_DrawBasicStats();
	pop_err();
}
c_SCombat.prototype.p_modeselectEnemyFightDraw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<500>";
	c_GWindowDrawer.m_Draw(0,106,160,42);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<501>";
	if(this.m_combatTarget==null){
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<502>";
	bb_gui_GDrawTextPreserveBlend("->",dbg_object(this.m_combatTarget).m_x-12,dbg_object(this.m_combatTarget).m_y+8);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<504>";
	bb_gui_GDrawTextPreserveBlend(dbg_object(this.m_combatTarget).m_Name+"  Lvl "+String(dbg_object(this.m_combatTarget).m_Level),3,110);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<505>";
	bb_gui_GDrawTextPreserveBlend("HP "+String(dbg_object(this.m_combatTarget).m_HP)+"/"+String(dbg_object(this.m_combatTarget).m_maxHP),3,118);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<506>";
	if((bb_input_KeyDown(70))!=0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<506>";
		bb_gui_GDrawTextPreserveBlend("St"+String(dbg_object(this.m_combatTarget).m_StrengthBuffed)+" En"+String(dbg_object(this.m_combatTarget).m_EnduranceBuffed)+" Kn"+String(dbg_object(this.m_combatTarget).m_KnowledgeBuffed)+" Lu"+String(dbg_object(this.m_combatTarget).m_LuckBuffed),44,126);
	}
	pop_err();
}
c_SCombat.prototype.p_modeselectEnemyDraw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<529>";
	c_GWindowDrawer.m_Draw(0,106,160,42);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<530>";
	if(this.m_combatTarget==null){
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<531>";
	bb_gui_GDrawTextPreserveBlend("->",dbg_object(this.m_combatTarget).m_x-12,dbg_object(this.m_combatTarget).m_y+8);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<533>";
	bb_gui_GDrawTextPreserveBlend(dbg_object(this.m_combatTarget).m_Name+"  Lvl "+String(dbg_object(this.m_combatTarget).m_Level),3,110);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<534>";
	bb_gui_GDrawTextPreserveBlend("HP "+String(dbg_object(this.m_combatTarget).m_HP)+"/"+String(dbg_object(this.m_combatTarget).m_maxHP),3,118);
	pop_err();
}
c_SCombat.prototype.p_modeselectFriendDraw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<562>";
	c_GWindowDrawer.m_Draw(0,106,160,42);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<563>";
	if(this.m_combatTarget==null){
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<564>";
	bb_gui_GDrawTextPreserveBlend("<-",dbg_object(this.m_combatTarget).m_x+24,dbg_object(this.m_combatTarget).m_y+8);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<566>";
	bb_gui_GDrawTextPreserveBlend(dbg_object(this.m_combatTarget).m_Name+"  Lvl "+String(dbg_object(this.m_combatTarget).m_Level),3,110);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<567>";
	bb_gui_GDrawTextPreserveBlend("HP "+String(dbg_object(this.m_combatTarget).m_HP)+"/"+String(dbg_object(this.m_combatTarget).m_maxHP),3,118);
	pop_err();
}
c_SCombat.prototype.p_modeWinDraw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<870>";
	c_GWindowDrawer.m_Draw(0,106,160,42);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<871>";
	bb_gui_GDrawTextPreserveBlend("You gained "+String(this.m_menuColumn)+" XP and",12,112);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<872>";
	bb_gui_GDrawTextPreserveBlend("           "+String(this.m_menuIndex)+" GP!",12,120);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<873>";
	if(c_GMessageTicker.m_isBlank()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<873>";
		bb_gui_GDrawTextPreserveBlend("Press A to continue.",8,132);
	}
	pop_err();
}
c_SCombat.prototype.p_modeRunDraw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<985>";
	c_GWindowDrawer.m_Draw(0,106,160,42);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<986>";
	bb_gui_GDrawTextPreserveBlend("You fled combat!",12,116);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<987>";
	if(c_GMessageTicker.m_curMsg==""){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<987>";
		bb_gui_GDrawTextPreserveBlend("Press A to continue.",8,132);
	}
	pop_err();
}
c_SCombat.prototype.p_OnRender=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<95>";
	this.p_DrawBattle();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<97>";
	var t_2=c_modes2.m_current;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<98>";
	if(t_2==1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<99>";
		this.p_modePlayerDraw();
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<100>";
		if(t_2==2){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<101>";
			this.p_modeSkillDraw();
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<102>";
			if(t_2==3){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<103>";
				this.p_modeEnemyDraw();
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<106>";
				if(t_2==5){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<107>";
					this.p_modeselectEnemyFightDraw();
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<108>";
					if(t_2==7){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<109>";
						this.p_modeselectEnemyDraw();
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<110>";
						if(t_2==6){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<111>";
							this.p_modeselectFriendDraw();
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<112>";
							if(t_2==10){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<113>";
								this.p_modeWinDraw();
							}else{
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<114>";
								if(t_2==12){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<115>";
									this.p_modeRunDraw();
								}else{
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<117>";
									c_GWindowDrawer.m_Draw(0,106,160,42);
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<119>";
									this.p_DrawBasicStats();
								}
							}
						}
					}
				}
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<122>";
	c_GEffect.m_DrawAll();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<123>";
	c_GMessageTicker.m_Draw();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<124>";
	bb_graphics_DrawText(String(c_modes2.m_current),0.0,0.0,0.0,0.0);
	pop_err();
	return 0;
}
c_SCombat.prototype.p_placeMonsters=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<666>";
	var t_emy=null;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<666>";
	var t_emyArr=this.m_enemyList.p_ToArray();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<667>";
	var t_12=this.m_enemyList.p_Count();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<668>";
	if(t_12==4){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<669>";
		t_emy=dbg_array(t_emyArr,0)[dbg_index];
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<670>";
		t_emy.p_SetPosition(124,14);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<672>";
		t_emy=dbg_array(t_emyArr,1)[dbg_index];
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<673>";
		t_emy.p_SetPosition(116,36);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<675>";
		t_emy=dbg_array(t_emyArr,2)[dbg_index];
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<676>";
		t_emy.p_SetPosition(124,58);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<678>";
		t_emy=dbg_array(t_emyArr,3)[dbg_index];
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<679>";
		t_emy.p_SetPosition(116,80);
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<680>";
		if(t_12==3){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<681>";
			t_emy=dbg_array(t_emyArr,0)[dbg_index];
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<682>";
			t_emy.p_SetPosition(124,24);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<684>";
			t_emy=dbg_array(t_emyArr,1)[dbg_index];
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<685>";
			t_emy.p_SetPosition(116,48);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<687>";
			t_emy=dbg_array(t_emyArr,2)[dbg_index];
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<688>";
			t_emy.p_SetPosition(124,72);
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<689>";
			if(t_12==2){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<690>";
				t_emy=dbg_array(t_emyArr,0)[dbg_index];
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<691>";
				t_emy.p_SetPosition(124,36);
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<693>";
				t_emy=dbg_array(t_emyArr,1)[dbg_index];
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<694>";
				t_emy.p_SetPosition(116,60);
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<697>";
				t_emy=this.m_enemyList.p_First();
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCombat.monkey<698>";
				t_emy.p_SetPosition(120,48);
			}
		}
	}
	pop_err();
}
var bb_engine_combatScreen=null;
function c_SCharacter(){
	c_TScreen.call(this);
	this.m_SKILL_mode=0;
	this.m_curCharData=null;
	this.m_SelectedSkill="";
	this.m_EQUIP_mode=0;
	this.m_EQUIP_character=0;
	this.m_curSkillTxt="";
}
c_SCharacter.prototype=extend_class(c_TScreen);
c_SCharacter.m_new=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<16>";
	c_TScreen.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<16>";
	pop_err();
	return this;
}
c_SCharacter.prototype.p_BackToMenu=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<83>";
	c_modes3.m_current=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<85>";
	this.m_menuIndex=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<86>";
	this.m_menuColumn=0;
	pop_err();
}
c_SCharacter.prototype.p_OnInit=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<19>";
	this.p_BackToMenu();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<20>";
	bb_engine_NLog("ON INIT",0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<21>";
	c_GMessageTicker.m_Set("");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<22>";
	if(bb_map_file_currentMap==null){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<23>";
		bb_map_file_currentMap=c_GameMap.m_new.call(new c_GameMap);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<24>";
		bb_map_file_currentMap.p_Setup_Wizard();
	}
	pop_err();
	return 0;
}
c_SCharacter.prototype.p_SAVE_Update=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<557>";
	bb_app_SaveState(bb_saveandload_SaveGame());
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<558>";
	c_GMessageTicker.m_Add("Game Saved");
	pop_err();
}
c_SCharacter.prototype.p_LOAD_Update=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<568>";
	if(bb_app_LoadState()!=""){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<569>";
		bb_saveandload_LoadGame(object_downcast((c_JSONData.m_ReadJSON(bb_app_LoadState())),c_JSONObject));
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<570>";
		bb_engine_SwitchScreenTo(bb_engine_townMapScreen,true);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<571>";
		c_GMessageTicker.m_Add("Game Loaded");
	}
	pop_err();
}
c_SCharacter.prototype.p_MENU_Update=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<90>";
	this.p_UpDownMenu(8,0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<92>";
	if(c_NInput.m_IsHit(5)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<93>";
		var t_3=this.m_menuIndex;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<94>";
		if(t_3==0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<95>";
			c_modes3.m_current=1;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<96>";
			if(t_3==1){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<97>";
				c_modes3.m_current=2;
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<98>";
				this.m_SKILL_mode=0;
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<99>";
				this.m_menuIndex=0;
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<100>";
				this.m_menuColumn=0;
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<101>";
				if(t_3==2){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<102>";
					c_modes3.m_current=3;
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<103>";
					if(t_3==3){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<104>";
						c_modes3.m_current=4;
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<105>";
						if(t_3==4){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<106>";
							c_modes3.m_current=5;
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<107>";
							this.m_menuIndex=bb_engine_currentLocation;
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<108>";
							if(t_3==5){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<110>";
								this.p_SAVE_Update();
							}else{
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<111>";
								if(t_3==6){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<113>";
									this.p_LOAD_Update();
								}else{
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<114>";
									if(t_3==7){
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<115>";
										c_modes3.m_current=10;
									}
								}
							}
						}
					}
				}
			}
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<117>";
		this.m_menuIndex=0;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<118>";
		this.m_menuColumn=0;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<120>";
	if(c_NInput.m_IsHit(6)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<121>";
		bb_engine_SwitchScreenTo(bb_engine_lastScreen,true);
	}
	pop_err();
}
c_SCharacter.prototype.p_INFO_Update=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<164>";
	if(c_NInput.m_IsHit(6)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<164>";
		this.p_BackToMenu();
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<166>";
	this.p_UpDownMenu(bb_engine_playerCharacters.p_Count(),0);
	pop_err();
}
c_SCharacter.prototype.p_SKILL_Update=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<206>";
	if(this.m_SKILL_mode==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<207>";
		this.p_UpDownMenu(bb_engine_playerCharacters.p_Count(),0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<208>";
		this.m_curCharData=dbg_array(bb_engine_playerCharacters.p_ToArray(),this.m_menuIndex)[dbg_index];
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<210>";
		if(c_NInput.m_IsHit(5)){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<211>";
			this.m_SKILL_mode=1;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<212>";
			this.m_menuColumn=0;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<213>";
			this.m_menuIndex=0;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<215>";
		if(c_NInput.m_IsHit(6)){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<215>";
			this.p_BackToMenu();
		}
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<217>";
		this.p_UpDownMenu(4,0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<218>";
		this.p_LeftRightMenu(3,0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<220>";
		if(c_NInput.m_IsHit(5) && this.m_SelectedSkill.toUpperCase()=="HEAL"){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<221>";
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<221>";
			var t_=bb_engine_playerCharacters.p_ObjectEnumerator();
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<221>";
			while(t_.p_HasNext()){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<221>";
				var t_char=t_.p_NextObject();
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<222>";
				dbg_object(t_char).m_HP=dbg_object(t_char).m_maxHP;
			}
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<227>";
		if(c_NInput.m_IsHit(6)){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<228>";
			this.m_SKILL_mode=0;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<230>";
			var t_i=0;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<231>";
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<231>";
			var t_2=bb_engine_playerCharacters.p_ObjectEnumerator();
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<231>";
			while(t_2.p_HasNext()){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<231>";
				var t_char2=t_2.p_NextObject();
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<232>";
				if(t_char2==this.m_curCharData){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<233>";
					this.m_menuIndex=t_i;
				}
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<235>";
				t_i+=1;
			}
		}
	}
	pop_err();
}
c_SCharacter.prototype.p_EQUIP_Update=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<409>";
	var t_5=this.m_EQUIP_mode;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<410>";
	if(t_5==1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<413>";
		if(c_NInput.m_IsHit(5)){
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<416>";
		if(c_NInput.m_IsHit(6)){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<417>";
			this.m_menuIndex=this.m_EQUIP_character;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<418>";
			this.m_EQUIP_mode=0;
		}
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<422>";
		this.p_UpDownMenu(bb_engine_playerCharacters.p_Count(),0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<423>";
		this.p_LeftRightMenu(2,0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<425>";
		if(c_NInput.m_IsHit(5)){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<426>";
			if(this.m_menuColumn==0){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<428>";
				var t_i=0;
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<429>";
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<429>";
				var t_=bb_engine_playerCharacters.p_ObjectEnumerator();
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<429>";
				while(t_.p_HasNext()){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<429>";
					var t_char=t_.p_NextObject();
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<430>";
					if(t_i==this.m_menuIndex){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<431>";
						bb_engine_playerItems.p_AddLast8(dbg_object(t_char).m_accessory);
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<432>";
						dbg_object(t_char).m_accessory=null;
					}
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<434>";
					t_i+=1;
				}
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<438>";
				this.m_EQUIP_character=this.m_menuIndex;
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<439>";
				this.m_EQUIP_mode=1;
			}
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<443>";
		if(c_NInput.m_IsHit(6)){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<443>";
			this.p_BackToMenu();
		}
	}
	pop_err();
}
c_SCharacter.prototype.p_ITEMS_Update=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<503>";
	if(c_NInput.m_IsHit(6)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<503>";
		c_modes3.m_current=0;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<505>";
	var t_6=bb_engine_playerItems.p_Count();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<506>";
	if(t_6==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<507>";
		this.m_menuIndex=0;
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<508>";
		if(t_6==1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<509>";
			this.m_menuIndex=0;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<511>";
			this.p_UpDownMenu(bb_engine_playerItems.p_Count(),0);
		}
	}
	pop_err();
}
c_SCharacter.prototype.p_MAP_Update=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<533>";
	if(c_NInput.m_IsHit(6)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<533>";
		this.p_BackToMenu();
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<534>";
	this.p_AllIndexMenu(9,0);
	pop_err();
}
c_SCharacter.prototype.p_QUIT_Update=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<584>";
	this.p_LeftRightMenu(2,0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<586>";
	if(c_NInput.m_IsHit(5)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<587>";
		if(this.m_menuColumn==1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<588>";
			bb_engine_SwitchScreenTo(bb_engine_titleScreen,true);
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<590>";
			this.p_BackToMenu();
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<593>";
	if(this.m_menuColumn==1 && c_NInput.m_IsHit(5)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<593>";
		bb_engine_SwitchScreenTo(bb_engine_titleScreen,true);
	}
	pop_err();
}
c_SCharacter.prototype.p_OnUpdate=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<29>";
	c_GMessageTicker.m_Update();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<30>";
	var t_1=c_modes3.m_current;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<31>";
	if(t_1==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<32>";
		this.p_MENU_Update();
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<33>";
		if(t_1==1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<34>";
			this.p_INFO_Update();
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<35>";
			if(t_1==2){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<36>";
				this.p_SKILL_Update();
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<37>";
				if(t_1==3){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<38>";
					this.p_EQUIP_Update();
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<39>";
					if(t_1==4){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<40>";
						this.p_ITEMS_Update();
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<41>";
						if(t_1==5){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<42>";
							this.p_MAP_Update();
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<43>";
							if(t_1==6){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<44>";
								this.p_SAVE_Update();
							}else{
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<45>";
								if(t_1==7){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<46>";
									this.p_LOAD_Update();
								}else{
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<47>";
									if(t_1==10){
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<48>";
										this.p_QUIT_Update();
									}
								}
							}
						}
					}
				}
			}
		}
	}
	pop_err();
	return 0;
}
c_SCharacter.prototype.p_MENU_Draw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<125>";
	c_GWindowDrawer.m_Draw(118,0,42,120);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<126>";
	c_GWindowDrawer.m_Draw(0,120,160,24);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<127>";
	bb_gui_GDrawTextPreserveBlend("GOLD: "+String(bb_engine_playerGold),4,124);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<130>";
	bb_gui_GDrawTextPreserveBlend(" INFO",120,4);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<131>";
	bb_gui_GDrawTextPreserveBlend(" SKILL",120,12);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<132>";
	bb_gui_GDrawTextPreserveBlend(" EQUIP",120,20);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<133>";
	bb_gui_GDrawTextPreserveBlend(" ITEMS",120,28);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<134>";
	bb_gui_GDrawTextPreserveBlend(" MAP",120,36);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<135>";
	bb_gui_GDrawTextPreserveBlend(" SAVE",120,44);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<136>";
	bb_gui_GDrawTextPreserveBlend(" LOAD",120,52);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<137>";
	bb_gui_GDrawTextPreserveBlend(" QUIT",120,60);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<139>";
	bb_gui_GDrawTextPreserveBlend(">",120,4+this.m_menuIndex*8);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<141>";
	var t_i=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<142>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<142>";
	var t_=bb_engine_playerCharacters.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<142>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<142>";
		var t_char=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<143>";
		t_char.p_Draw2(2,4+t_i*24);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<144>";
		bb_gui_GDrawTextPreserveBlend(dbg_object(t_char).m_Name+" LVL:"+String(dbg_object(t_char).m_Level),24,6+t_i*24);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<145>";
		bb_gui_GDrawTextPreserveBlend(String(dbg_object(t_char).m_HP)+"/"+String(dbg_object(t_char).m_maxHP)+"HP",24,6+t_i*24+8);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<146>";
		t_i+=1;
	}
	pop_err();
}
c_SCharacter.prototype.p_INFO_Draw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<169>";
	c_GWindowDrawer.m_Draw(0,32,160,112);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<171>";
	var t_i=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<172>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<172>";
	var t_=bb_engine_playerCharacters.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<172>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<172>";
		var t_char=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<173>";
		if(t_i==this.m_menuIndex){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<174>";
			t_char.p_Draw2(2,4);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<175>";
			bb_gui_GDrawTextPreserveBlend(dbg_object(t_char).m_Name,28,6);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<176>";
			bb_gui_GDrawTextPreserveBlend("LVL:"+String(dbg_object(t_char).m_Level),88,6);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<177>";
			bb_gui_GDrawTextPreserveBlend(String(dbg_object(t_char).m_HP)+"/"+String(dbg_object(t_char).m_maxHP)+" HP",28,14);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<178>";
			bb_gui_GDrawTextPreserveBlend("Next:"+String(dbg_object(t_char).m_XPNextLevel),88,14);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<180>";
			bb_gui_GDrawTextPreserveBlend("Strength:  "+String(dbg_object(t_char).m_StrengthBuffed),6,38);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<181>";
			bb_gui_GDrawTextPreserveBlend("Endurance: "+String(dbg_object(t_char).m_EnduranceBuffed),6,46);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<182>";
			bb_gui_GDrawTextPreserveBlend("Knowledge: "+String(dbg_object(t_char).m_KnowledgeBuffed),6,54);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<183>";
			bb_gui_GDrawTextPreserveBlend("Luck:      "+String(dbg_object(t_char).m_LuckBuffed),6,62);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<184>";
			bb_gui_GDrawTextPreserveBlend("XP: "+String(dbg_object(t_char).m_XP),6,78);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<186>";
			bb_gui_GDrawTextPreserveBlend("Attack: "+String(t_char.p_Fight(-1))+" - "+String(t_char.p_Fight(1)),6,94);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<188>";
			if(dbg_object(t_char).m_accessory!=null){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<189>";
				bb_gui_GDrawTextPreserveBlend("Equip: "+dbg_object(dbg_object(t_char).m_accessory).m_Name,6,102);
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<191>";
				bb_gui_GDrawTextPreserveBlend("Equip: n/a",6,102);
			}
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<195>";
		t_i+=1;
	}
	pop_err();
}
c_SCharacter.prototype.p___SKILLS=function(t_skillY){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<343>";
	if(this.m_SKILL_mode==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<343>";
		bb_graphics_SetAlpha(0.5);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<345>";
	if(dbg_object(this.m_curCharData).m_Skills.p_Contains("fire")){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<346>";
		bb_gui_GDrawTextPreserveBlend("FIRE",8,t_skillY+4+0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<347>";
		if(this.m_menuColumn==0 && this.m_menuIndex==0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<347>";
			this.m_curSkillTxt="Does Fire Damage";
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<347>";
			this.m_SelectedSkill="fire";
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<349>";
	if(dbg_object(this.m_curCharData).m_Skills.p_Contains("ensnare")){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<350>";
		bb_gui_GDrawTextPreserveBlend("ENSNARE",58,t_skillY+4+0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<351>";
		if(this.m_menuColumn==1 && this.m_menuIndex==0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<351>";
			this.m_curSkillTxt="Lowers Enemy Evasion";
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<351>";
			this.m_SelectedSkill="ensnare";
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<353>";
	if(dbg_object(this.m_curCharData).m_Skills.p_Contains("smoke")){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<354>";
		bb_gui_GDrawTextPreserveBlend("SMOKE",108,t_skillY+4+0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<355>";
		if(this.m_menuColumn==2 && this.m_menuIndex==0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<355>";
			this.m_curSkillTxt="Raises Target Evasion";
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<355>";
			this.m_SelectedSkill="smoke";
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<358>";
	if(dbg_object(this.m_curCharData).m_Skills.p_Contains("ice")){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<359>";
		bb_gui_GDrawTextPreserveBlend("ICE",8,t_skillY+4+8);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<360>";
		if(this.m_menuColumn==0 && this.m_menuIndex==1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<360>";
			this.m_curSkillTxt="Does Ice Damage";
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<360>";
			this.m_SelectedSkill="ice";
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<362>";
	if(dbg_object(this.m_curCharData).m_Skills.p_Contains("terror")){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<363>";
		bb_gui_GDrawTextPreserveBlend("TERROR",58,t_skillY+4+8);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<364>";
		if(this.m_menuColumn==1 && this.m_menuIndex==1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<364>";
			this.m_curSkillTxt="Lowers Enemy Luck";
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<364>";
			this.m_SelectedSkill="terror";
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<366>";
	if(dbg_object(this.m_curCharData).m_Skills.p_Contains("boost")){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<367>";
		bb_gui_GDrawTextPreserveBlend("BOOST",108,t_skillY+4+8);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<368>";
		if(this.m_menuColumn==2 && this.m_menuIndex==1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<368>";
			this.m_curSkillTxt="Raises Target Strength";
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<368>";
			this.m_SelectedSkill="boost";
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<371>";
	if(dbg_object(this.m_curCharData).m_Skills.p_Contains("aero")){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<372>";
		bb_gui_GDrawTextPreserveBlend("AERO1",8,t_skillY+4+16);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<373>";
		if(this.m_menuColumn==0 && this.m_menuIndex==2){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<373>";
			this.m_curSkillTxt="Does Aero Damage";
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<373>";
			this.m_SelectedSkill="aero";
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<375>";
	if(dbg_object(this.m_curCharData).m_Skills.p_Contains("cure")){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<376>";
		bb_gui_GDrawTextPreserveBlend("CURE",58,t_skillY+4+16);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<377>";
		if(this.m_menuColumn==1 && this.m_menuIndex==2){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<377>";
			this.m_curSkillTxt="Cures Target debuffs";
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<377>";
			this.m_SelectedSkill="cure";
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<379>";
	if(dbg_object(this.m_curCharData).m_Skills.p_Contains("poison")){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<380>";
		bb_gui_GDrawTextPreserveBlend("POISON",108,t_skillY+4+16);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<381>";
		if(this.m_menuColumn==2 && this.m_menuIndex==2){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<381>";
			this.m_curSkillTxt="Lowers Enemy Strength";
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<381>";
			this.m_SelectedSkill="posion";
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<384>";
	if(dbg_object(this.m_curCharData).m_Skills.p_Contains("rock")){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<385>";
		bb_gui_GDrawTextPreserveBlend("ROCK",8,t_skillY+4+24);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<386>";
		if(this.m_menuColumn==0 && this.m_menuIndex==3){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<386>";
			this.m_curSkillTxt="Does Rock Damage";
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<386>";
			this.m_SelectedSkill="rock";
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<388>";
	if(dbg_object(this.m_curCharData).m_Skills.p_Contains("heal")){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<389>";
		bb_gui_GDrawTextPreserveBlend("HEAL",58,t_skillY+4+24);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<390>";
		if(this.m_menuColumn==1 && this.m_menuIndex==3){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<390>";
			this.m_curSkillTxt="Heals Target HP";
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<390>";
			this.m_SelectedSkill="heal";
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<392>";
	if(dbg_object(this.m_curCharData).m_Skills.p_Contains("focus")){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<393>";
		bb_gui_GDrawTextPreserveBlend("FOCUS",108,t_skillY+4+24);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<394>";
		if(this.m_menuColumn==2 && this.m_menuIndex==3){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<394>";
			this.m_curSkillTxt="Raises Target Luck";
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<394>";
			this.m_SelectedSkill="focus";
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<397>";
	bb_graphics_SetAlpha(1.0);
	pop_err();
}
c_SCharacter.prototype.p_SKILL_Draw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<241>";
	var t_skillY=12;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<242>";
	c_GWindowDrawer.m_Draw(0,t_skillY,160,42);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<244>";
	this.m_curSkillTxt="";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<245>";
	this.m_SelectedSkill="";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<247>";
	if(!((this.m_curCharData)!=null)){
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<249>";
	if(this.m_SKILL_mode==1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<250>";
		bb_gui_GDrawTextPreserveBlend(">",2+50*this.m_menuColumn,t_skillY+4+this.m_menuIndex*8);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<251>";
		bb_gui_GDrawTextPreserveBlend(dbg_object(this.m_curCharData).m_Name,2,2);
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<255>";
		bb_gui_GDrawTextPreserveBlend(">"+dbg_object(this.m_curCharData).m_Name,2,2);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<259>";
	bb_gui_GDrawTextPreserveBlend("LVL: "+String(dbg_object(this.m_curCharData).m_Level),66,2);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<261>";
	this.p___SKILLS(t_skillY);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<262>";
	if(this.m_SKILL_mode==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<263>";
		bb_gui_GDrawTextPreserveBlend("Select Character",2,t_skillY+38+6);
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<265>";
		var t_tmp=0;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<267>";
		bb_gui_GDrawTextPreserveBlend(this.m_curSkillTxt,2,t_skillY+38+6);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<269>";
		var t_4=this.m_SelectedSkill.toLowerCase();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<272>";
		if(t_4=="smoke"){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<273>";
			bb_gui_GDrawTextPreserveBlend("Power: "+String(bb_combat_GetSpellPower(this.m_SelectedSkill,null,this.m_curCharData,true)),6,t_skillY+38+6+8);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<274>";
			bb_gui_GDrawTextPreserveBlend("Duration: "+String(bb_combat_GetSpellDuration(this.m_SelectedSkill,this.m_curCharData)),6,t_skillY+38+6+16);
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<275>";
			if(t_4=="ensnare"){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<276>";
				bb_gui_GDrawTextPreserveBlend("Power: "+String(bb_combat_GetSpellPower(this.m_SelectedSkill,null,this.m_curCharData,true)),6,t_skillY+38+6+8);
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<277>";
				bb_gui_GDrawTextPreserveBlend("Duration: "+String(bb_combat_GetSpellDuration(this.m_SelectedSkill,this.m_curCharData)),6,t_skillY+38+6+16);
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<278>";
				if(t_4=="focus"){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<279>";
					bb_gui_GDrawTextPreserveBlend("Power: "+String(bb_combat_GetSpellPower(this.m_SelectedSkill,null,this.m_curCharData,true)),6,t_skillY+38+6+8);
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<280>";
					bb_gui_GDrawTextPreserveBlend("Duration: "+String(bb_combat_GetSpellDuration(this.m_SelectedSkill,this.m_curCharData)),6,t_skillY+38+6+16);
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<281>";
					if(t_4=="terror"){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<282>";
						bb_gui_GDrawTextPreserveBlend("Power: "+String(bb_combat_GetSpellPower(this.m_SelectedSkill,null,this.m_curCharData,true)),6,t_skillY+38+6+8);
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<283>";
						bb_gui_GDrawTextPreserveBlend("Duration: "+String(bb_combat_GetSpellDuration(this.m_SelectedSkill,this.m_curCharData)),6,t_skillY+38+6+16);
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<285>";
						if(t_4=="boost"){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<286>";
							bb_gui_GDrawTextPreserveBlend("Power: "+String(bb_combat_GetSpellPower(this.m_SelectedSkill,null,this.m_curCharData,true)),6,t_skillY+38+6+8);
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<287>";
							bb_gui_GDrawTextPreserveBlend("Duration: "+String(bb_combat_GetSpellDuration(this.m_SelectedSkill,this.m_curCharData)),6,t_skillY+38+6+16);
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<288>";
							if(t_4=="posion"){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<289>";
								bb_gui_GDrawTextPreserveBlend("Power: "+String(bb_combat_GetSpellPower(this.m_SelectedSkill,null,this.m_curCharData,true)),6,t_skillY+38+6+8);
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<290>";
								bb_gui_GDrawTextPreserveBlend("Duration: "+String(bb_combat_GetSpellDuration(this.m_SelectedSkill,this.m_curCharData)),6,t_skillY+38+6+16);
							}else{
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<295>";
								if(t_4=="heal"){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<296>";
									bb_gui_GDrawTextPreserveBlend("Power: "+String(bb_combat_GetSpellPower(this.m_SelectedSkill,null,this.m_curCharData,true)),6,t_skillY+38+6+8);
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<297>";
									bb_gui_GDrawTextPreserveBlend("Duration: n/a",6,t_skillY+38+6+16);
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<298>";
									bb_gui_GDrawTextPreserveBlend("Press A to heal your party",2,t_skillY+38+6+24);
								}else{
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<299>";
									if(t_4=="cure"){
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<300>";
										bb_gui_GDrawTextPreserveBlend("Power: n/a",6,t_skillY+38+6+8);
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<301>";
										bb_gui_GDrawTextPreserveBlend("Duration: n/a",6,t_skillY+38+6+16);
									}else{
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<303>";
										if(t_4=="aero"){
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<304>";
											t_tmp=bb_combat_GetSpellPower(this.m_SelectedSkill,null,this.m_curCharData,true);
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<306>";
											bb_gui_GDrawTextPreserveBlend("Power: "+String(t_tmp-((dbg_object(this.m_curCharData).m_LuckBuffed/3)|0))+"-"+String(t_tmp),6,t_skillY+38+6+8);
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<307>";
											bb_gui_GDrawTextPreserveBlend("Duration: n/a",6,t_skillY+38+6+16);
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<308>";
											bb_gui_GDrawTextPreserveBlend(" vs. Weak: "+String(t_tmp*2),6,t_skillY+38+6+24);
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<309>";
											bb_gui_GDrawTextPreserveBlend(" vs. Strong: "+String((t_tmp/2)|0),6,t_skillY+38+6+32);
										}else{
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<311>";
											if(t_4=="fire"){
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<312>";
												t_tmp=bb_combat_GetSpellPower(this.m_SelectedSkill,null,this.m_curCharData,true);
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<314>";
												bb_gui_GDrawTextPreserveBlend("Power: "+String(t_tmp-((dbg_object(this.m_curCharData).m_LuckBuffed/3)|0))+"-"+String(t_tmp),6,t_skillY+38+6+8);
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<315>";
												bb_gui_GDrawTextPreserveBlend("Duration: n/a",6,t_skillY+38+6+16);
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<316>";
												bb_gui_GDrawTextPreserveBlend(" vs. Weak: "+String(t_tmp*2),6,t_skillY+38+6+24);
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<317>";
												bb_gui_GDrawTextPreserveBlend(" vs. Strong: "+String((t_tmp/2)|0),6,t_skillY+38+6+32);
											}else{
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<319>";
												if(t_4=="ice"){
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<320>";
													t_tmp=bb_combat_GetSpellPower(this.m_SelectedSkill,null,this.m_curCharData,true);
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<322>";
													bb_gui_GDrawTextPreserveBlend("Power: "+String(t_tmp-((dbg_object(this.m_curCharData).m_LuckBuffed/3)|0))+"-"+String(t_tmp),6,t_skillY+38+6+8);
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<323>";
													bb_gui_GDrawTextPreserveBlend("Duration: n/a",6,t_skillY+38+6+16);
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<324>";
													bb_gui_GDrawTextPreserveBlend(" vs. Weak: "+String(t_tmp*2),6,t_skillY+38+6+24);
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<325>";
													bb_gui_GDrawTextPreserveBlend(" vs. Strong: "+String((t_tmp/2)|0),6,t_skillY+38+6+32);
												}else{
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<327>";
													if(t_4=="rock"){
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<328>";
														t_tmp=bb_combat_GetSpellPower(this.m_SelectedSkill,null,this.m_curCharData,true);
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<330>";
														bb_gui_GDrawTextPreserveBlend("Power: "+String(t_tmp-((dbg_object(this.m_curCharData).m_LuckBuffed/3)|0))+"-"+String(t_tmp),6,t_skillY+38+6+8);
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<331>";
														bb_gui_GDrawTextPreserveBlend("Duration: n/a",6,t_skillY+38+6+16);
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<332>";
														bb_gui_GDrawTextPreserveBlend(" vs. Weak: "+String(t_tmp*2),6,t_skillY+38+6+24);
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<333>";
														bb_gui_GDrawTextPreserveBlend(" vs. Strong: "+String((t_tmp/2)|0),6,t_skillY+38+6+32);
													}else{
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<336>";
														bb_gui_GDrawTextPreserveBlend("Select Skill",2,t_skillY+38+6);
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	pop_err();
}
c_SCharacter.prototype.p_EQUIP_Draw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<448>";
	c_GWindowDrawer.m_Draw(0,32,160,104);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<450>";
	if(this.m_menuColumn==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<451>";
		bb_gui_GDrawTextPreserveBlend("[Unequip]  Equip ",2,((bb_engine_vScnHeight-8.0)|0));
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<453>";
		bb_gui_GDrawTextPreserveBlend(" Unequip  [Equip]",2,((bb_engine_vScnHeight-8.0)|0));
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<456>";
	var t_i=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<457>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<457>";
	var t_=bb_engine_playerCharacters.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<457>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<457>";
		var t_char=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<458>";
		if(t_i==this.m_menuIndex){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<459>";
			t_char.p_Draw2(2,4);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<460>";
			bb_gui_GDrawTextPreserveBlend(dbg_object(t_char).m_Name,28,6);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<461>";
			bb_gui_GDrawTextPreserveBlend("LVL:"+String(dbg_object(t_char).m_Level),88,6);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<462>";
			bb_gui_GDrawTextPreserveBlend(String(dbg_object(t_char).m_HP)+"/"+String(dbg_object(t_char).m_maxHP)+" HP",28,14);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<464>";
			bb_gui_GDrawTextPreserveBlend("STR: "+String(dbg_object(t_char).m_Strength)+" +"+String(dbg_object(t_char).m_StrengthBuffed-dbg_object(t_char).m_Strength),6,38);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<465>";
			bb_gui_GDrawTextPreserveBlend("END: "+String(dbg_object(t_char).m_Endurance)+" +"+String(dbg_object(t_char).m_EnduranceBuffed-dbg_object(t_char).m_Endurance),6,46);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<467>";
			bb_gui_GDrawTextPreserveBlend("KNW: "+String(dbg_object(t_char).m_Knowledge)+" +"+String(dbg_object(t_char).m_KnowledgeBuffed-dbg_object(t_char).m_Knowledge),78,38);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<468>";
			bb_gui_GDrawTextPreserveBlend("LUC: "+String(dbg_object(t_char).m_Luck)+" +"+String(dbg_object(t_char).m_LuckBuffed-dbg_object(t_char).m_Luck),78,46);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<470>";
			bb_gui_GDrawTextPreserveBlend("Attack: "+String(t_char.p_Fight(-1)-((dbg_object(t_char).m_AtkBuffed/2)|0))+"-"+String(t_char.p_Fight(1)-dbg_object(t_char).m_AtkBuffed)+" +"+String(dbg_object(t_char).m_AtkBuffed),6,54);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<472>";
			if(dbg_object(t_char).m_accessory!=null){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<473>";
				bb_gui_GDrawTextPreserveBlend("Equip: "+dbg_object(dbg_object(t_char).m_accessory).m_Name,6,70);
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<475>";
				var t_j=9;
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<476>";
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<476>";
				var t_2=dbg_object(dbg_object(t_char).m_accessory).m_Buffs.p_ObjectEnumerator();
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<476>";
				while(t_2.p_HasNext()){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<476>";
					var t_tmpBuff=t_2.p_NextObject();
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<477>";
					bb_gui_GDrawTextPreserveBlend(dbg_object(t_tmpBuff).m_type.toUpperCase()+": "+String(dbg_object(t_tmpBuff).m_amt),6,6+8*t_j);
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<478>";
					t_j+=1;
				}
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<480>";
				t_j+=1;
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<482>";
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<482>";
				var t_3=dbg_object(dbg_object(t_char).m_accessory).m_Weaknesses.p_Keys().p_ObjectEnumerator();
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<482>";
				while(t_3.p_HasNext()){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<482>";
					var t_weakness=t_3.p_NextObject();
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<483>";
					var t_weaknessAmt=parseInt((dbg_object(dbg_object(t_char).m_accessory).m_Weaknesses.p_Get(t_weakness)),10);
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<484>";
					if(t_weaknessAmt>0){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<485>";
						bb_gui_GDrawTextPreserveBlend("WEAK to"+t_weakness.toUpperCase(),6,6+8*t_j);
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<486>";
						if(t_weaknessAmt<0){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<487>";
							bb_gui_GDrawTextPreserveBlend("STRONG to"+t_weakness.toUpperCase(),6,6+8*t_j);
						}
					}
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<489>";
					t_j+=1;
				}
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<492>";
				bb_gui_GDrawTextPreserveBlend("Equip: n/a",6,70);
			}
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<495>";
		t_i+=1;
	}
	pop_err();
}
c_SCharacter.prototype.p_ITEMS_Draw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<515>";
	c_GWindowDrawer.m_Draw(0,0,160,112);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<516>";
	var t_i=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<517>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<517>";
	var t_=bb_engine_playerItems.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<517>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<517>";
		var t_item=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<518>";
		if(t_i==this.m_menuIndex){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<519>";
			bb_gui_GDrawTextPreserveBlend(">",6,6+8*t_i);
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<521>";
		bb_gui_GDrawTextPreserveBlend(dbg_object(t_item).m_Name,12,6+8*t_i);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<522>";
		bb_gui_GDrawTextPreserveBlend(String(dbg_object(t_item).m_type),6,112);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<523>";
		t_i+=1;
	}
	pop_err();
}
c_SCharacter.prototype.p_MAP_Draw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<538>";
	bb_graphics_DrawImage(bb_engine_imageMap.p_Get("map"),0.0,0.0,0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<540>";
	if(this.m_menuIndex!=bb_engine_currentLocation){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<541>";
		bb_graphics_SetAlpha(0.5);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<542>";
		bb_graphics_DrawImage(bb_engine_imageMap.p_Get("map_selector"),(dbg_object(dbg_array(dbg_object(bb_map_file_currentMap).m_location_array,bb_engine_currentLocation)[dbg_index]).m_x-3),(dbg_object(dbg_array(dbg_object(bb_map_file_currentMap).m_location_array,bb_engine_currentLocation)[dbg_index]).m_y-2),0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<543>";
		bb_graphics_SetAlpha(1.0);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<545>";
	if(bb_app_Millisecs() % 1000<500){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<545>";
		bb_graphics_DrawImage(bb_engine_imageMap.p_Get("map_selector"),(dbg_object(dbg_array(dbg_object(bb_map_file_currentMap).m_location_array,this.m_menuIndex)[dbg_index]).m_x-3),(dbg_object(dbg_array(dbg_object(bb_map_file_currentMap).m_location_array,this.m_menuIndex)[dbg_index]).m_y-2),0);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<547>";
	c_GWindowDrawer.m_Draw(0,112,160,32);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<549>";
	bb_gui_GDrawTextPreserveBlend(dbg_object(dbg_array(dbg_object(bb_map_file_currentMap).m_location_array,this.m_menuIndex)[dbg_index]).m_name,4,116);
	pop_err();
}
c_SCharacter.prototype.p_SAVE_Draw=function(){
	push_err();
	pop_err();
}
c_SCharacter.prototype.p_LOAD_Draw=function(){
	push_err();
	pop_err();
}
c_SCharacter.prototype.p_QUIT_Draw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<598>";
	this.p_MENU_Draw();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<600>";
	c_GWindowDrawer.m_Draw(0,120,160,24);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<601>";
	if(this.m_menuColumn==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<602>";
		bb_gui_GDrawTextPreserveBlend("Are you sure?  YES  [NO]",4,124);
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<603>";
		if(this.m_menuColumn==1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<604>";
			bb_gui_GDrawTextPreserveBlend("Are you sure? [YES]  NO",4,124);
		}
	}
	pop_err();
}
c_SCharacter.prototype.p_OnRender=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<53>";
	var t_2=c_modes3.m_current;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<54>";
	if(t_2==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<55>";
		this.p_MENU_Draw();
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<56>";
		if(t_2==1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<57>";
			this.p_INFO_Draw();
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<58>";
			if(t_2==2){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<59>";
				this.p_SKILL_Draw();
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<60>";
				if(t_2==3){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<61>";
					this.p_EQUIP_Draw();
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<62>";
					if(t_2==4){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<63>";
						this.p_ITEMS_Draw();
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<64>";
						if(t_2==5){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<65>";
							this.p_MAP_Draw();
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<66>";
							if(t_2==6){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<67>";
								this.p_SAVE_Draw();
							}else{
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<68>";
								if(t_2==7){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<69>";
									this.p_LOAD_Draw();
								}else{
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<70>";
									if(t_2==10){
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<71>";
										this.p_QUIT_Draw();
									}
								}
							}
						}
					}
				}
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenCharacter.monkey<74>";
	c_GMessageTicker.m_Draw();
	pop_err();
	return 0;
}
var bb_engine_characterScreen=null;
function c_SMap(){
	c_TScreen.call(this);
	this.m_tileMapName="NOT SET";
	this.m_charMapName="NOT SET";
	this.m_mapName="NOT SET";
	this.m_map=null;
	this.m_x=4;
	this.m_y=4;
	this.m_tilemap=null;
	this.m_charmap=null;
	this.m_nextBattle=1;
	this.m_dir=0;
}
c_SMap.prototype=extend_class(c_TScreen);
c_SMap.m_new=function(t_mapN){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<34>";
	c_TScreen.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<35>";
	this.m_tileMapName="tilemap";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<36>";
	this.m_charMapName="charmap";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<37>";
	this.m_mapName=t_mapN;
	pop_err();
	return this;
}
c_SMap.m_new2=function(t_mapN,t_tileMapN,t_charMapN){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<40>";
	c_TScreen.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<41>";
	this.m_tileMapName=t_tileMapN;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<42>";
	this.m_charMapName=t_charMapN;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<43>";
	this.m_mapName=t_mapN;
	pop_err();
	return this;
}
c_SMap.m_new3=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<21>";
	c_TScreen.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<21>";
	pop_err();
	return this;
}
c_SMap.prototype.p_PlacePlayerAt=function(t_id){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<65>";
	if(!((this.m_map)!=null)){
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<66>";
	if(this.m_map.p_SearchMap(dbg_object(this.m_map).m_currentSpecial,t_id)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<67>";
		this.m_x=dbg_object(this.m_map).m_tmpX;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<68>";
		this.m_y=dbg_object(this.m_map).m_tmpY;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<69>";
		print("Starting player at "+String(t_id)+" ["+String(this.m_x)+","+String(this.m_y)+"]");
	}
	pop_err();
}
c_SMap.prototype.p_PlacePlayerAt2=function(t_xx,t_yy){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<74>";
	this.m_x=t_xx;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<75>";
	this.m_y=t_yy;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<76>";
	print("Placing player at ["+String(this.m_x)+","+String(this.m_y)+"]");
	pop_err();
}
c_SMap.prototype.p_OnInit=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<47>";
	c_modes4.m_current=5;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<48>";
	this.m_menuColumn=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<49>";
	this.m_menuIndex=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<51>";
	this.m_tilemap=bb_engine_imageMap.p_Get(this.m_tileMapName);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<52>";
	this.m_charmap=bb_engine_imageMap.p_Get(this.m_charMapName);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<53>";
	c_GMessageTicker.m_Set("");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<55>";
	this.m_map=c_DMap.m_FindMap(this.m_mapName);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<57>";
	this.m_nextBattle=((bb_random_Rnd2(3.0,10.0))|0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<59>";
	print("Initing player at ["+String(this.m_x)+","+String(this.m_y)+"]");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<61>";
	pop_err();
	return 0;
}
c_SMap.prototype.p_TOWN_Update=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<187>";
	this.p_UpDownMenu(4,0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<189>";
	if(c_NInput.m_IsHit(5)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<190>";
		var t_5=this.m_menuIndex;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<191>";
		if(t_5==0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<192>";
			bb_engine_game.p_Town_Inn(bb_engine_GetTownId(bb_engine_lastTown));
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<194>";
			if(t_5==1){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<195>";
				if(bb_engine_game.p_Town_Shop(bb_engine_GetTownId(bb_engine_lastTown))==1){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<196>";
					c_modes4.m_current=3;
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<197>";
					this.m_menuColumn=0;
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<198>";
					this.m_menuIndex=0;
				}
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<201>";
				if(t_5==2){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<202>";
					bb_engine_game.p_Town_Talk(bb_engine_GetTownId(bb_engine_lastTown));
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<204>";
					if(t_5==3){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<205>";
						c_modes4.m_current=5;
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<206>";
						this.m_menuColumn=0;
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<207>";
						this.m_menuIndex=0;
					}
				}
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<211>";
	if(c_NInput.m_IsHit(6)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<212>";
		c_modes4.m_current=5;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<213>";
		this.m_menuColumn=0;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<214>";
		this.m_menuIndex=0;
	}
	pop_err();
}
c_SMap.prototype.p_GoToTown=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<136>";
	c_modes4.m_current=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<138>";
	this.m_menuIndex=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<139>";
	this.m_menuColumn=0;
	pop_err();
}
c_SMap.prototype.p_EQUIP_Update=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<239>";
	this.p_UpDownMenu(5,0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<241>";
	if(c_NInput.m_IsHit(5)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<242>";
		var t_6=this.m_menuIndex;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<243>";
		if(t_6==0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<244>";
			c_GMessageTicker.m_Add("No one is selling!");
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<246>";
			if(t_6==1){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<247>";
				c_GMessageTicker.m_Add("No one is buying!");
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<249>";
				if(t_6==2){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<250>";
					c_GMessageTicker.m_Add("No one is training!");
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<252>";
					if(t_6==4){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<253>";
						this.p_GoToTown();
					}
				}
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<257>";
	if(c_NInput.m_IsHit(6)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<258>";
		this.p_GoToTown();
	}
	pop_err();
}
c_SMap.prototype.p_GetSpecialTileInFrontOfYou=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<156>";
	var t_3=this.m_dir;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<157>";
	if(t_3==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<158>";
		var t_=dbg_array(dbg_array(dbg_object(this.m_map).m_currentSpecial,this.m_y)[dbg_index],this.m_x+1)[dbg_index];
		pop_err();
		return t_;
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<159>";
		if(t_3==1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<160>";
			var t_2=dbg_array(dbg_array(dbg_object(this.m_map).m_currentSpecial,this.m_y+1)[dbg_index],this.m_x)[dbg_index];
			pop_err();
			return t_2;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<161>";
			if(t_3==2){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<162>";
				var t_4=dbg_array(dbg_array(dbg_object(this.m_map).m_currentSpecial,this.m_y)[dbg_index],this.m_x-1)[dbg_index];
				pop_err();
				return t_4;
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<163>";
				if(t_3==3){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<164>";
					var t_5=dbg_array(dbg_array(dbg_object(this.m_map).m_currentSpecial,this.m_y-1)[dbg_index],this.m_x)[dbg_index];
					pop_err();
					return t_5;
				}
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<166>";
	pop_err();
	return -1;
}
c_SMap.prototype.p_MoveYouForward=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<170>";
	var t_4=this.m_dir;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<171>";
	if(t_4==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<172>";
		this.m_x+=1;
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<173>";
		if(t_4==1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<174>";
			this.m_y+=1;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<175>";
			if(t_4==2){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<176>";
				this.m_x-=1;
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<177>";
				if(t_4==3){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<178>";
					this.m_y-=1;
				}
			}
		}
	}
	pop_err();
}
c_SMap.prototype.p_CheckTileEffect=function(t_specialID){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<409>";
	if(!bb_engine_gameTriggers.p_Contains("m"+String(t_specialID))){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<410>";
		bb_engine_gameTriggers.p_Add("m"+String(t_specialID),"0");
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<412>";
	bb_engine_lastTown=t_specialID;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<414>";
	var t_9=bb_engine_game.p_Town_Enter(bb_engine_GetTownId(bb_engine_lastTown));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<415>";
	if(t_9==1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<416>";
		this.p_GoToTown();
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<418>";
		if(t_9==2){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<419>";
			this.m_nextBattle=((bb_random_Rnd2(4.0,10.0))|0);
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<421>";
			if(t_9==-1){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<422>";
				pop_err();
				return true;
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<425>";
	pop_err();
	return false;
}
c_SMap.prototype.p_GetCurrentZoneName=function(t_prefix){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<394>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<394>";
	var t_=dbg_object(this.m_map).m_monsterZones.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<394>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<394>";
		var t_r=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<395>";
		if(!(dbg_object(t_r).m_name.indexOf(t_prefix)!=-1)){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<395>";
			continue;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<397>";
		if(this.m_x*16>dbg_object(t_r).m_x && this.m_x*16<dbg_object(t_r).m_x+dbg_object(t_r).m_w){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<398>";
			if(this.m_y*16>dbg_object(t_r).m_y && this.m_y*16<dbg_object(t_r).m_y+dbg_object(t_r).m_h){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<400>";
				pop_err();
				return dbg_object(t_r).m_name;
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<404>";
	bb_engine_NLog("GetCurrentZoneName :: Failed: "+String(this.m_x)+","+String(this.m_y),0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<405>";
	pop_err();
	return "";
}
c_SMap.prototype.p__Update=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<285>";
	if(c_NInput.m_IsHit(8)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<285>";
		bb_engine_SwitchScreenTo(bb_engine_characterScreen,true);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<288>";
	var t_moved=false;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<290>";
	if(c_NInput.m_IsDown(6)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<291>";
		this.m_x+=c_NInput.m_GetXAxis();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<292>";
		this.m_y+=c_NInput.m_GetYAxis();
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<295>";
		var t_7=c_NInput.m_GetXAxis();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<296>";
		if(t_7==1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<297>";
			this.m_dir=0;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<297>";
			t_moved=true;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<298>";
			if(t_7==-1){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<299>";
				this.m_dir=2;
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<299>";
				t_moved=true;
			}
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<301>";
		var t_8=c_NInput.m_GetYAxis();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<302>";
		if(t_8==1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<303>";
			this.m_dir=1;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<303>";
			t_moved=true;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<304>";
			if(t_8==-1){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<305>";
				this.m_dir=3;
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<305>";
				t_moved=true;
			}
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<309>";
		if(t_moved==true){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<312>";
			if(this.p_GetSpecialTileInFrontOfYou()<143 || bb_engine_gameTriggers.p_Get("m"+String(this.p_GetSpecialTileInFrontOfYou()-16))=="2"){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<313>";
				this.p_MoveYouForward();
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<314>";
				t_moved=this.p_CheckTileEffect(dbg_array(dbg_array(dbg_object(this.m_map).m_currentSpecial,this.m_y)[dbg_index],this.m_x)[dbg_index]);
			}
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<316>";
			if(c_NInput.m_IsHit(5)){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<318>";
				this.p_CheckTileEffect(dbg_array(dbg_array(dbg_object(this.m_map).m_currentSpecial,this.m_y)[dbg_index],this.m_x)[dbg_index]);
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<324>";
	if(t_moved && dbg_array(dbg_array(dbg_object(this.m_map).m_currentSpecial,this.m_y)[dbg_index],this.m_x)[dbg_index]<128){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<326>";
		if(this.m_nextBattle>0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<327>";
			this.m_nextBattle-=1;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<329>";
			this.m_nextBattle=((bb_random_Rnd2(5.0,20.0))|0);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<331>";
			if(this.p_GetCurrentZoneName("safe")==""){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<332>";
				if(this.p_GetCurrentZoneName("monsters_")!=""){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<332>";
					bb_combat_RandomBattle(this.p_GetCurrentZoneName("monsters_"));
				}
			}
		}
	}
	pop_err();
}
c_SMap.prototype.p_OnUpdate=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<80>";
	c_GMessageTicker.m_Update();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<82>";
	var t_1=c_modes4.m_current;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<83>";
	if(t_1==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<84>";
		this.p_TOWN_Update();
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<89>";
		if(t_1==3){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<90>";
			this.p_EQUIP_Update();
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<102>";
			this.p__Update();
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<104>";
	pop_err();
	return 0;
}
c_SMap.prototype.p_DrawMap=function(t_offsetX,t_offsetY){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<367>";
	for(var t_i=0;t_i<=dbg_object(this.m_map).m_currentMap.length-1;t_i=t_i+1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<368>";
		for(var t_j=0;t_j<=dbg_array(dbg_object(this.m_map).m_currentMap,t_i)[dbg_index].length-1;t_j=t_j+1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<369>";
			if(dbg_array(dbg_array(dbg_object(this.m_map).m_currentMap,t_i)[dbg_index],t_j)[dbg_index]>-1){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<369>";
				bb_graphics_DrawImage(this.m_tilemap,(t_j*16-t_offsetX),(t_i*16-t_offsetY),dbg_array(dbg_array(dbg_object(this.m_map).m_currentMap,t_i)[dbg_index],t_j)[dbg_index]);
			}
		}
	}
	pop_err();
}
c_SMap.prototype.p_WorldMap_Names=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<432>";
	var t_townId=bb_engine_GetTownId(dbg_array(dbg_array(dbg_object(this.m_map).m_currentSpecial,this.m_y)[dbg_index],this.m_x)[dbg_index]);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<433>";
	var t_txt=bb_engine_game.p_Town_Name(t_townId);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<434>";
	t_txt="["+String(t_townId)+"]"+t_txt;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<435>";
	pop_err();
	return t_txt;
}
c_SMap.prototype.p_TOWN_Draw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<219>";
	this.p_DrawMap(16*(this.m_x-5)+8,16*(this.m_y-4));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<222>";
	c_GWindowDrawer.m_Draw(((bb_engine_vScnWidth-64.0)|0),-4,64,((bb_engine_vScnHeight+8.0)|0));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<224>";
	c_GWindowDrawer.m_Draw(-4,-4,168,16);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<225>";
	bb_gui_GDrawTextPreserveBlend(this.p_WorldMap_Names(),1,0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<227>";
	bb_gui_GDrawTextPreserveBlend(">",((bb_engine_vScnWidth-60.0)|0),16+this.m_menuIndex*8);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<229>";
	bb_gui_GDrawTextPreserveBlend("INN",((bb_engine_vScnWidth-54.0)|0),16);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<230>";
	bb_gui_GDrawTextPreserveBlend("SHOP",((bb_engine_vScnWidth-54.0)|0),24);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<231>";
	bb_gui_GDrawTextPreserveBlend("TALK",((bb_engine_vScnWidth-54.0)|0),32);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<232>";
	bb_gui_GDrawTextPreserveBlend("BACK",((bb_engine_vScnWidth-54.0)|0),40);
	pop_err();
}
c_SMap.prototype.p_EQUIP_Draw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<263>";
	this.p_DrawMap(16*(this.m_x-5)+8,16*(this.m_y-4));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<266>";
	c_GWindowDrawer.m_Draw(((bb_engine_vScnWidth-64.0)|0),-4,64,((bb_engine_vScnHeight+8.0)|0));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<268>";
	c_GWindowDrawer.m_Draw(-4,-4,168,16);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<269>";
	bb_gui_GDrawTextPreserveBlend(this.p_WorldMap_Names(),1,0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<271>";
	bb_gui_GDrawTextPreserveBlend(">",((bb_engine_vScnWidth-60.0)|0),16+this.m_menuIndex*8);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<273>";
	bb_gui_GDrawTextPreserveBlend("BUY",((bb_engine_vScnWidth-54.0)|0),16);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<274>";
	bb_gui_GDrawTextPreserveBlend("SELL",((bb_engine_vScnWidth-54.0)|0),24);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<275>";
	bb_gui_GDrawTextPreserveBlend("TRAIN",((bb_engine_vScnWidth-54.0)|0),32);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<276>";
	bb_gui_GDrawTextPreserveBlend(" ",((bb_engine_vScnWidth-54.0)|0),40);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<277>";
	bb_gui_GDrawTextPreserveBlend("BACK",((bb_engine_vScnWidth-54.0)|0),48);
	pop_err();
}
c_SMap.prototype.p_DrawPlayer=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<375>";
	var t_frame=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<377>";
	if(this.m_dir==1 || this.m_dir==3){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<378>";
		if(this.m_dir==1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<379>";
			t_frame=0;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<381>";
			t_frame=3;
		}
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<384>";
		if(this.m_dir==0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<385>";
			t_frame=16;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<387>";
			t_frame=19;
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<390>";
	bb_graphics_DrawImage(this.m_charmap,(72+c_NInput.m_GetXAxis()),(64+c_NInput.m_GetYAxis()),t_frame);
	pop_err();
}
c_SMap.prototype.p__Draw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<349>";
	this.p_DrawMap(16*(this.m_x-5)+8,16*(this.m_y-4));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<350>";
	this.p_DrawPlayer();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<356>";
	if(dbg_array(dbg_array(dbg_object(this.m_map).m_currentSpecial,this.m_y)[dbg_index],this.m_x)[dbg_index]>127){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<357>";
		c_GWindowDrawer.m_Draw(-4,132,168,16);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<359>";
		bb_gui_GDrawTextPreserveBlend(this.p_WorldMap_Names(),1,135);
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<360>";
		if((bb_input_KeyDown(80))!=0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<361>";
			c_GWindowDrawer.m_Draw(-4,132,168,16);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<362>";
			bb_gui_GDrawTextPreserveBlend(this.p_GetCurrentZoneName(""),1,135);
		}
	}
	pop_err();
}
c_SMap.prototype.p_OnRender=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<108>";
	var t_2=c_modes4.m_current;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<109>";
	if(t_2==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<110>";
		this.p_TOWN_Draw();
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<115>";
		if(t_2==3){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<116>";
			this.p_EQUIP_Draw();
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<128>";
			this.p__Draw();
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<131>";
	c_GMessageTicker.m_Draw();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<132>";
	pop_err();
	return 0;
}
var bb_engine_townMapScreen=null;
function c_SConversation(){
	c_TScreen.call(this);
	this.m_lines=["",""];
	this.m_curLine=0;
	this.m_curLineChar=0;
	this.m_optionNumbers=0;
	this.m_isReadingText=false;
	this.m_textSpeedLast=0;
	this.m_script=null;
	this.m_treeEnded=false;
}
c_SConversation.prototype=extend_class(c_TScreen);
c_SConversation.m_new=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<18>";
	c_TScreen.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<18>";
	pop_err();
	return this;
}
c_SConversation.m_maxLines=0;
c_SConversation.prototype.p_ResetLines=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<30>";
	this.m_lines=resize_string_array(this.m_lines,c_SConversation.m_maxLines);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<32>";
	for(var t_c=0;t_c<=c_SConversation.m_maxLines-1;t_c=t_c+1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<33>";
		dbg_array(this.m_lines,t_c)[dbg_index]="";
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<36>";
	this.m_curLine=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<37>";
	this.m_curLineChar=0;
	pop_err();
}
c_SConversation.prototype.p_OnInit=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<41>";
	c_modes5.m_current=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<42>";
	this.m_menuColumn=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<43>";
	this.m_menuIndex=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<44>";
	this.p_ResetLines();
	pop_err();
	return 0;
}
c_SConversation.prototype.p__skip=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<315>";
	this.m_textSpeedLast=bb_app_Millisecs();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<316>";
	this.m_isReadingText=false;
	pop_err();
}
c_SConversation.prototype.p_ExecuteScriptItem=function(t_cSI){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<191>";
	var t_header="Exec["+String(dbg_object(t_cSI).m_type)+",";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<192>";
	for(var t_k=0;t_k<=dbg_object(t_cSI).m_data.length-1;t_k=t_k+1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<193>";
		t_header=t_header+dbg_array(dbg_object(t_cSI).m_data,t_k)[dbg_index];
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<194>";
		if(t_k<dbg_object(t_cSI).m_data.length-1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<194>";
			t_header=t_header+",";
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<196>";
	bb_engine_NLog(t_header+"] ",0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<197>";
	this.m_isReadingText=false;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<201>";
	var t_3=dbg_object(t_cSI).m_type;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<202>";
	if(t_3==1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<204>";
		c_modes5.m_current=10;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<205>";
		this.p_ResetLines();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<206>";
		for(var t_c=0;t_c<=c_SConversation.m_maxLines-1;t_c=t_c+1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<207>";
			if(t_c<dbg_object(t_cSI).m_data.length){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<208>";
				dbg_array(this.m_lines,t_c)[dbg_index]=dbg_array(dbg_object(t_cSI).m_data,t_c)[dbg_index];
			}
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<211>";
		this.m_isReadingText=true;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<212>";
		this.m_textSpeedLast=bb_app_Millisecs();
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<218>";
		if(t_3==10){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<220>";
			c_modes5.m_current=20;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<221>";
			this.p_ResetLines();
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<222>";
			for(var t_c2=0;t_c2<=c_SConversation.m_maxLines-1;t_c2=t_c2+1){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<223>";
				if(t_c2<dbg_object(t_cSI).m_data.length){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<224>";
					if(t_c2>0){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<224>";
						dbg_array(this.m_lines,t_c2)[dbg_index]="  ";
					}
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<225>";
					dbg_array(this.m_lines,t_c2)[dbg_index]=dbg_array(this.m_lines,t_c2)[dbg_index]+dbg_array(dbg_object(t_cSI).m_data,t_c2)[dbg_index];
				}
			}
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<228>";
			this.m_optionNumbers=dbg_object(t_cSI).m_data.length-1;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<229>";
			this.p__skip();
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<231>";
			if(t_3==30){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<233>";
				c_modes5.m_current=0;
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<235>";
				this.m_script.p_ChangeThread(dbg_array(dbg_object(t_cSI).m_data,0)[dbg_index]);
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<236>";
				this.p__skip();
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<239>";
				if(t_3==40){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<241>";
					c_modes5.m_current=0;
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<243>";
					var t_trigger=bb_engine_gameTriggers.p_Get(dbg_array(dbg_object(t_cSI).m_data,0)[dbg_index]);
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<247>";
					var t_4=dbg_array(dbg_object(t_cSI).m_data,1)[dbg_index];
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<248>";
					if(t_4=="!empty"){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<249>";
						if(t_trigger==""){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<250>";
							this.m_script.p_ChangeThread(dbg_array(dbg_object(t_cSI).m_data,2)[dbg_index]);
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<252>";
							bb_engine_NLog("[SCRIPT] !empty Failed "+dbg_array(dbg_object(t_cSI).m_data,0)[dbg_index]+"=?'"+t_trigger+"'",0);
						}
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<254>";
						if(t_4=="!any"){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<255>";
							if(!(t_trigger=="")){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<256>";
								this.m_script.p_ChangeThread(dbg_array(dbg_object(t_cSI).m_data,2)[dbg_index]);
							}else{
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<258>";
								bb_engine_NLog("[SCRIPT] !any Failed "+dbg_array(dbg_object(t_cSI).m_data,0)[dbg_index]+"=?'"+t_trigger+"'",0);
							}
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<261>";
							if(t_trigger.toLowerCase()==dbg_array(dbg_object(t_cSI).m_data,1)[dbg_index].toLowerCase()){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<262>";
								this.m_script.p_ChangeThread(dbg_array(dbg_object(t_cSI).m_data,2)[dbg_index]);
							}else{
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<264>";
								bb_engine_NLog("[SCRIPT] Failed "+dbg_array(dbg_object(t_cSI).m_data,0)[dbg_index]+"=?'"+t_trigger+"'",0);
							}
						}
					}
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<268>";
					this.p__skip();
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<270>";
					if(t_3==41){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<272>";
						c_modes5.m_current=0;
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<273>";
						if(dbg_object(t_cSI).m_data.length>1){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<274>";
							bb_engine_gameTriggers.p_Set(dbg_array(dbg_object(t_cSI).m_data,0)[dbg_index],dbg_array(dbg_object(t_cSI).m_data,1)[dbg_index]);
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<276>";
							bb_engine_gameTriggers.p_Set(dbg_array(dbg_object(t_cSI).m_data,0)[dbg_index],"");
						}
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<278>";
						bb_engine_NLog("[SCRIPT] Set: "+dbg_array(dbg_object(t_cSI).m_data,0)[dbg_index]+"='"+bb_engine_gameTriggers.p_Get(dbg_array(dbg_object(t_cSI).m_data,0)[dbg_index])+"'",0);
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<279>";
						this.p__skip();
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<281>";
						if(t_3==20){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<283>";
							var t_co=this.m_script.p_GetObject(dbg_array(dbg_object(t_cSI).m_data,0)[dbg_index]);
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<284>";
							var t_5=dbg_object(t_cSI).m_data.length;
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<285>";
							if(t_5==2){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<285>";
								t_co.p_SetAnimation(parseInt((dbg_array(dbg_object(t_cSI).m_data,1)[dbg_index]),10),0,250);
							}else{
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<286>";
								if(t_5==3){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<286>";
									t_co.p_SetAnimation(parseInt((dbg_array(dbg_object(t_cSI).m_data,1)[dbg_index]),10),parseInt((dbg_array(dbg_object(t_cSI).m_data,2)[dbg_index]),10),250);
								}else{
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<287>";
									if(t_5==4){
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<287>";
										t_co.p_SetAnimation(parseInt((dbg_array(dbg_object(t_cSI).m_data,1)[dbg_index]),10),parseInt((dbg_array(dbg_object(t_cSI).m_data,2)[dbg_index]),10),parseInt((dbg_array(dbg_object(t_cSI).m_data,3)[dbg_index]),10));
									}
								}
							}
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<289>";
							this.p__skip();
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<292>";
							if(t_3==50){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<293>";
								bb_engine_NLog("Trying to add object ID: "+dbg_array(dbg_object(t_cSI).m_data,0)[dbg_index],0);
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<294>";
								this.m_script.p_AddObject(dbg_array(dbg_object(t_cSI).m_data,0)[dbg_index],parseInt((dbg_array(dbg_object(t_cSI).m_data,1)[dbg_index]),10),parseInt((dbg_array(dbg_object(t_cSI).m_data,2)[dbg_index]),10),dbg_array(dbg_object(t_cSI).m_data,3)[dbg_index],0);
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<295>";
								this.p__skip();
							}else{
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<297>";
								if(t_3==51){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<298>";
									bb_engine_NLog("Trying to modify object ID: "+dbg_array(dbg_object(t_cSI).m_data,0)[dbg_index],0);
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<299>";
									dbg_object(this.m_script.p_GetObject(dbg_array(dbg_object(t_cSI).m_data,0)[dbg_index])).m_sx=parseFloat(dbg_array(dbg_object(t_cSI).m_data,1)[dbg_index]);
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<300>";
									dbg_object(this.m_script.p_GetObject(dbg_array(dbg_object(t_cSI).m_data,0)[dbg_index])).m_sy=parseFloat(dbg_array(dbg_object(t_cSI).m_data,2)[dbg_index]);
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<301>";
									this.p__skip();
								}else{
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<303>";
									if(t_3==52){
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<304>";
										bb_engine_NLog("Trying to move object ID: "+dbg_array(dbg_object(t_cSI).m_data,0)[dbg_index],0);
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<305>";
										dbg_object(this.m_script.p_GetObject(dbg_array(dbg_object(t_cSI).m_data,0)[dbg_index])).m_x=parseInt((dbg_array(dbg_object(t_cSI).m_data,1)[dbg_index]),10);
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<306>";
										dbg_object(this.m_script.p_GetObject(dbg_array(dbg_object(t_cSI).m_data,0)[dbg_index])).m_y=parseInt((dbg_array(dbg_object(t_cSI).m_data,2)[dbg_index]),10);
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<307>";
										this.p__skip();
									}else{
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<310>";
										bb_engine_GoNuclear("Script Item Type '"+String(dbg_object(t_cSI).m_type)+"' not recongized!!! Can't continue!");
									}
								}
							}
						}
					}
				}
			}
		}
	}
	pop_err();
}
c_SConversation.prototype.p_GetNextScriptItem=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<84>";
	var t_csi=dbg_object(this.m_script).m_currentThread.p_NextScriptItem();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<85>";
	if(t_csi!=null){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<86>";
		this.p_ExecuteScriptItem(t_csi);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<87>";
		this.m_treeEnded=false;
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<89>";
		if(c_modes5.m_current!=20){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<89>";
			this.m_treeEnded=true;
		}
	}
	pop_err();
	return 0;
}
c_SConversation.prototype.p__Update=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<95>";
	if(!this.m_treeEnded){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<96>";
		if(c_modes5.m_current!=10 || !this.m_isReadingText && this.m_textSpeedLast+500<bb_app_Millisecs() && c_NInput.m_IsHit(5) || c_NInput.m_IsHit(8)){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<98>";
			this.p_GetNextScriptItem();
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<104>";
	if(this.m_isReadingText){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<105>";
		if(c_NInput.m_IsDown(6)){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<106>";
			this.m_curLineChar+=3;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<108>";
			this.m_curLineChar+=1;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<112>";
		if(this.m_curLineChar>dbg_array(this.m_lines,this.m_curLine)[dbg_index].length){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<113>";
			this.m_curLine+=1;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<114>";
			this.m_curLineChar=0;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<118>";
		if(this.m_curLine==c_SConversation.m_maxLines){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<119>";
			this.m_isReadingText=false;
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<124>";
	if(this.m_treeEnded && this.m_textSpeedLast<bb_app_Millisecs()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<125>";
		if(c_NInput.m_IsDown(5)){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<127>";
			bb_engine_SwitchScreenTo(bb_engine_lastScreen,true);
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<132>";
	this.m_script.p_DoObjectAnimations();
	pop_err();
}
c_SConversation.prototype.p_OnUpdate=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<48>";
	var t_1=c_modes5.m_current;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<49>";
	if(t_1==20){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<50>";
		this.p_UpDownMenu(this.m_optionNumbers,0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<51>";
		if(c_NInput.m_IsHit(5)){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<52>";
			this.p_ExecuteScriptItem(c_chatScriptItem.m_new.call(new c_chatScriptItem,30,[dbg_array(this.m_lines,this.m_menuIndex+1)[dbg_index].slice(dbg_array(this.m_lines,this.m_menuIndex+1)[dbg_index].indexOf("`",0)+1)]));
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<54>";
		this.p__Update();
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<58>";
		this.p__Update();
	}
	pop_err();
	return 0;
}
c_SConversation.prototype.p__Draw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<137>";
	this.m_script.p_DrawObjects();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<139>";
	c_GWindowDrawer.m_Draw(-4,136-8*c_SConversation.m_maxLines-8,168,8*c_SConversation.m_maxLines+16+4);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<141>";
	if(this.m_isReadingText){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<142>";
		for(var t_c=0;t_c<=this.m_curLine;t_c=t_c+1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<143>";
			if(t_c==this.m_curLine){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<144>";
				bb_gui_GDrawTextPreserveBlend(dbg_array(this.m_lines,t_c)[dbg_index].slice(0,this.m_curLineChar),2,134-8*(c_SConversation.m_maxLines-t_c));
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<146>";
				bb_gui_GDrawTextPreserveBlend(dbg_array(this.m_lines,t_c)[dbg_index],2,134-8*(c_SConversation.m_maxLines-t_c));
			}
		}
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<151>";
		for(var t_c2=0;t_c2<=c_SConversation.m_maxLines-1;t_c2=t_c2+1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<152>";
			if(dbg_array(this.m_lines,t_c2)[dbg_index].indexOf("`")!=-1){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<153>";
				bb_gui_GDrawTextPreserveBlend(dbg_array(this.m_lines,t_c2)[dbg_index].slice(0,dbg_array(this.m_lines,t_c2)[dbg_index].indexOf("`",0)),2,134-8*(c_SConversation.m_maxLines-t_c2));
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<155>";
				bb_gui_GDrawTextPreserveBlend(dbg_array(this.m_lines,t_c2)[dbg_index],2,134-8*(c_SConversation.m_maxLines-t_c2));
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<163>";
	if(!this.m_isReadingText){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<163>";
		bb_gui_GDrawTextPreserveBlend("Press A",114,136);
	}
	pop_err();
}
c_SConversation.prototype.p_OnRender=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<63>";
	var t_2=c_modes5.m_current;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<64>";
	if(t_2==20){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<65>";
		this.p__Draw();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<66>";
		bb_gui_GDrawTextPreserveBlend(">",4,142-8*(5-this.m_menuIndex));
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<70>";
		this.p__Draw();
	}
	pop_err();
	return 0;
}
c_SConversation.prototype.p_RunThread=function(t_thread){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<183>";
	var t_cthread=this.m_script.p_GetThread(t_thread);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<185>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<185>";
	var t_=dbg_object(t_cthread).m_script.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<185>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<185>";
		var t_i=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<186>";
		this.p_ExecuteScriptItem(t_i);
	}
	pop_err();
}
c_SConversation.prototype.p_RunCutscene=function(t_scriptFile){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<173>";
	this.m_script=c_chatScript.m_new.call(new c_chatScript);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<175>";
	this.m_script.p_Load(t_scriptFile);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<176>";
	this.p_RunThread("init");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<177>";
	dbg_object(this.m_script).m_currentThread=this.m_script.p_GetThread("main");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<179>";
	this.m_treeEnded=false;
	pop_err();
}
var bb_engine_chatScreen=null;
function bb_app_Millisecs(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<233>";
	var t_=bb_app__game.Millisecs();
	pop_err();
	return t_;
}
var bb_random_Seed=0;
function bb_graphics_DebugRenderDevice(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<53>";
	if(!((bb_graphics_renderDevice)!=null)){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<53>";
		error("Rendering operations can only be performed inside OnRender");
	}
	pop_err();
	return 0;
}
function bb_graphics_Cls(t_r,t_g,t_b){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<378>";
	bb_graphics_DebugRenderDevice();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<380>";
	bb_graphics_renderDevice.Cls(t_r,t_g,t_b);
	pop_err();
	return 0;
}
function bb_graphics_Transform(t_ix,t_iy,t_jx,t_jy,t_tx,t_ty){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<355>";
	var t_ix2=t_ix*dbg_object(bb_graphics_context).m_ix+t_iy*dbg_object(bb_graphics_context).m_jx;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<356>";
	var t_iy2=t_ix*dbg_object(bb_graphics_context).m_iy+t_iy*dbg_object(bb_graphics_context).m_jy;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<357>";
	var t_jx2=t_jx*dbg_object(bb_graphics_context).m_ix+t_jy*dbg_object(bb_graphics_context).m_jx;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<358>";
	var t_jy2=t_jx*dbg_object(bb_graphics_context).m_iy+t_jy*dbg_object(bb_graphics_context).m_jy;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<359>";
	var t_tx2=t_tx*dbg_object(bb_graphics_context).m_ix+t_ty*dbg_object(bb_graphics_context).m_jx+dbg_object(bb_graphics_context).m_tx;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<360>";
	var t_ty2=t_tx*dbg_object(bb_graphics_context).m_iy+t_ty*dbg_object(bb_graphics_context).m_jy+dbg_object(bb_graphics_context).m_ty;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<361>";
	bb_graphics_SetMatrix(t_ix2,t_iy2,t_jx2,t_jy2,t_tx2,t_ty2);
	pop_err();
	return 0;
}
function bb_graphics_Transform2(t_m){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<351>";
	bb_graphics_Transform(dbg_array(t_m,0)[dbg_index],dbg_array(t_m,1)[dbg_index],dbg_array(t_m,2)[dbg_index],dbg_array(t_m,3)[dbg_index],dbg_array(t_m,4)[dbg_index],dbg_array(t_m,5)[dbg_index]);
	pop_err();
	return 0;
}
function bb_graphics_Scale(t_x,t_y){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<369>";
	bb_graphics_Transform(t_x,0.0,0.0,t_y,0.0,0.0);
	pop_err();
	return 0;
}
function c_GClearScreen(){
	Object.call(this);
}
c_GClearScreen.m_Red=0;
c_GClearScreen.m_Green=0;
c_GClearScreen.m_Blue=0;
c_GClearScreen.m_ClearScreen=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<29>";
	bb_graphics_Cls((c_GClearScreen.m_Red),(c_GClearScreen.m_Green),(c_GClearScreen.m_Blue));
	pop_err();
}
c_GClearScreen.m_ToBG=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<43>";
	bb_graphics_SetColor((c_GClearScreen.m_Red),(c_GClearScreen.m_Green),(c_GClearScreen.m_Blue));
	pop_err();
}
c_GClearScreen.m_ToGrey=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<39>";
	bb_graphics_SetColor(((c_GClearScreen.m_Red/2)|0),((c_GClearScreen.m_Green/2)|0),((c_GClearScreen.m_Blue/2)|0));
	pop_err();
}
function bb_graphics_PushMatrix(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<333>";
	var t_sp=dbg_object(bb_graphics_context).m_matrixSp;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<334>";
	if(t_sp==dbg_object(bb_graphics_context).m_matrixStack.length){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<334>";
		dbg_object(bb_graphics_context).m_matrixStack=resize_number_array(dbg_object(bb_graphics_context).m_matrixStack,t_sp*2);
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<335>";
	dbg_array(dbg_object(bb_graphics_context).m_matrixStack,t_sp+0)[dbg_index]=dbg_object(bb_graphics_context).m_ix;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<336>";
	dbg_array(dbg_object(bb_graphics_context).m_matrixStack,t_sp+1)[dbg_index]=dbg_object(bb_graphics_context).m_iy;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<337>";
	dbg_array(dbg_object(bb_graphics_context).m_matrixStack,t_sp+2)[dbg_index]=dbg_object(bb_graphics_context).m_jx;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<338>";
	dbg_array(dbg_object(bb_graphics_context).m_matrixStack,t_sp+3)[dbg_index]=dbg_object(bb_graphics_context).m_jy;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<339>";
	dbg_array(dbg_object(bb_graphics_context).m_matrixStack,t_sp+4)[dbg_index]=dbg_object(bb_graphics_context).m_tx;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<340>";
	dbg_array(dbg_object(bb_graphics_context).m_matrixStack,t_sp+5)[dbg_index]=dbg_object(bb_graphics_context).m_ty;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<341>";
	dbg_object(bb_graphics_context).m_matrixSp=t_sp+6;
	pop_err();
	return 0;
}
function bb_graphics_Translate(t_x,t_y){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<365>";
	bb_graphics_Transform(1.0,0.0,0.0,1.0,t_x,t_y);
	pop_err();
	return 0;
}
var bb_engine_currentScreen=null;
var bb_engine_hasGoneNuclear=false;
function bb_graphics_GetBlend(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<285>";
	pop_err();
	return dbg_object(bb_graphics_context).m_blend;
}
function bb_graphics_DrawImage(t_image,t_x,t_y,t_frame){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<452>";
	bb_graphics_DebugRenderDevice();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<453>";
	if(t_frame<0 || t_frame>=dbg_object(t_image).m_frames.length){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<453>";
		error("Invalid image frame");
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<456>";
	var t_f=dbg_array(dbg_object(t_image).m_frames,t_frame)[dbg_index];
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<458>";
	bb_graphics_context.p_Validate();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<460>";
	if((dbg_object(t_image).m_flags&65536)!=0){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<461>";
		bb_graphics_renderDevice.DrawSurface(dbg_object(t_image).m_surface,t_x-dbg_object(t_image).m_tx,t_y-dbg_object(t_image).m_ty);
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<463>";
		bb_graphics_renderDevice.DrawSurface2(dbg_object(t_image).m_surface,t_x-dbg_object(t_image).m_tx,t_y-dbg_object(t_image).m_ty,dbg_object(t_f).m_x,dbg_object(t_f).m_y,dbg_object(t_image).m_width,dbg_object(t_image).m_height);
	}
	pop_err();
	return 0;
}
function bb_graphics_Rotate(t_angle){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<373>";
	bb_graphics_Transform(Math.cos((t_angle)*D2R),-Math.sin((t_angle)*D2R),Math.sin((t_angle)*D2R),Math.cos((t_angle)*D2R),0.0,0.0);
	pop_err();
	return 0;
}
function bb_graphics_PopMatrix(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<345>";
	var t_sp=dbg_object(bb_graphics_context).m_matrixSp-6;
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<346>";
	bb_graphics_SetMatrix(dbg_array(dbg_object(bb_graphics_context).m_matrixStack,t_sp+0)[dbg_index],dbg_array(dbg_object(bb_graphics_context).m_matrixStack,t_sp+1)[dbg_index],dbg_array(dbg_object(bb_graphics_context).m_matrixStack,t_sp+2)[dbg_index],dbg_array(dbg_object(bb_graphics_context).m_matrixStack,t_sp+3)[dbg_index],dbg_array(dbg_object(bb_graphics_context).m_matrixStack,t_sp+4)[dbg_index],dbg_array(dbg_object(bb_graphics_context).m_matrixStack,t_sp+5)[dbg_index]);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<347>";
	dbg_object(bb_graphics_context).m_matrixSp=t_sp;
	pop_err();
	return 0;
}
function bb_graphics_DrawImage2(t_image,t_x,t_y,t_rotation,t_scaleX,t_scaleY,t_frame){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<470>";
	bb_graphics_DebugRenderDevice();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<471>";
	if(t_frame<0 || t_frame>=dbg_object(t_image).m_frames.length){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<471>";
		error("Invalid image frame");
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<474>";
	var t_f=dbg_array(dbg_object(t_image).m_frames,t_frame)[dbg_index];
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<476>";
	bb_graphics_PushMatrix();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<478>";
	bb_graphics_Translate(t_x,t_y);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<479>";
	bb_graphics_Rotate(t_rotation);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<480>";
	bb_graphics_Scale(t_scaleX,t_scaleY);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<482>";
	bb_graphics_Translate(-dbg_object(t_image).m_tx,-dbg_object(t_image).m_ty);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<484>";
	bb_graphics_context.p_Validate();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<486>";
	if((dbg_object(t_image).m_flags&65536)!=0){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<487>";
		bb_graphics_renderDevice.DrawSurface(dbg_object(t_image).m_surface,0.0,0.0);
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<489>";
		bb_graphics_renderDevice.DrawSurface2(dbg_object(t_image).m_surface,0.0,0.0,dbg_object(t_f).m_x,dbg_object(t_f).m_y,dbg_object(t_image).m_width,dbg_object(t_image).m_height);
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<492>";
	bb_graphics_PopMatrix();
	pop_err();
	return 0;
}
function bb_graphics_DrawText(t_text,t_x,t_y,t_xalign,t_yalign){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<577>";
	bb_graphics_DebugRenderDevice();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<579>";
	if(!((dbg_object(bb_graphics_context).m_font)!=null)){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<579>";
		pop_err();
		return 0;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<581>";
	var t_w=dbg_object(bb_graphics_context).m_font.p_Width();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<582>";
	var t_h=dbg_object(bb_graphics_context).m_font.p_Height();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<584>";
	t_x-=Math.floor((t_w*t_text.length)*t_xalign);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<585>";
	t_y-=Math.floor((t_h)*t_yalign);
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<587>";
	for(var t_i=0;t_i<t_text.length;t_i=t_i+1){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<588>";
		var t_ch=dbg_charCodeAt(t_text,t_i)-dbg_object(bb_graphics_context).m_firstChar;
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<589>";
		if(t_ch>=0 && t_ch<dbg_object(bb_graphics_context).m_font.p_Frames()){
			err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<590>";
			bb_graphics_DrawImage(dbg_object(bb_graphics_context).m_font,t_x+(t_i*t_w),t_y,t_ch);
		}
	}
	pop_err();
	return 0;
}
function bb_gui_GDrawTextPreserveBlend(t_txt,t_x,t_y){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<14>";
	var t_tmp=bb_graphics_GetBlend();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<15>";
	bb_graphics_SetBlend(0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<16>";
	bb_graphics_DrawText(t_txt,(t_x),(t_y),0.0,0.0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<17>";
	bb_graphics_SetBlend(t_tmp);
	pop_err();
}
var bb_engine_nukeMessage="";
function bb_graphics_DrawRect(t_x,t_y,t_w,t_h){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<393>";
	bb_graphics_DebugRenderDevice();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<395>";
	bb_graphics_context.p_Validate();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/graphics.monkey<396>";
	bb_graphics_renderDevice.DrawRect(t_x,t_y,t_w,t_h);
	pop_err();
	return 0;
}
function bb_input_TouchX(t_index){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/input.monkey<76>";
	var t_=bb_input_device.p_TouchX(t_index);
	pop_err();
	return t_;
}
function bb_input_TouchY(t_index){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/input.monkey<80>";
	var t_=bb_input_device.p_TouchY(t_index);
	pop_err();
	return t_;
}
function bb_input_TouchDown(t_index){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/input.monkey<84>";
	var t_=((bb_input_device.p_KeyDown(384+t_index))?1:0);
	pop_err();
	return t_;
}
function bb_input_KeyHit(t_key){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/input.monkey<44>";
	var t_=bb_input_device.p_KeyHit(t_key);
	pop_err();
	return t_;
}
function bb_input_JoyHit(t_button,t_unit){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/input.monkey<110>";
	var t_=bb_input_device.p_KeyHit(256|t_unit<<5|t_button);
	pop_err();
	return t_;
}
function bb_input_JoyY(t_index,t_unit){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/input.monkey<98>";
	var t_=bb_input_device.p_JoyY(t_index,t_unit);
	pop_err();
	return t_;
}
function bb_input_JoyX(t_index,t_unit){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/input.monkey<94>";
	var t_=bb_input_device.p_JoyX(t_index,t_unit);
	pop_err();
	return t_;
}
function bb_app_SaveState(t_state){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<216>";
	bb_app__game.SaveState(t_state);
	pop_err();
}
var bb_engine_lastScreen=null;
function bb_engine_SwitchScreenTo(t_newScn,t_autoInit){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<64>";
	bb_engine_lastScreen=bb_engine_currentScreen;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<65>";
	bb_engine_currentScreen=t_newScn;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<66>";
	if(t_autoInit){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<66>";
		bb_engine_currentScreen.p_OnInit();
	}
	pop_err();
}
function c_NodeEnumerator(){
	Object.call(this);
	this.m_node=null;
}
c_NodeEnumerator.m_new=function(t_node){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<437>";
	dbg_object(this).m_node=t_node;
	pop_err();
	return this;
}
c_NodeEnumerator.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<434>";
	pop_err();
	return this;
}
c_NodeEnumerator.prototype.p_HasNext=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<441>";
	var t_=this.m_node!=null;
	pop_err();
	return t_;
}
c_NodeEnumerator.prototype.p_NextObject=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<445>";
	var t_t=this.m_node;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<446>";
	this.m_node=this.m_node.p_NextNode();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<447>";
	pop_err();
	return t_t;
}
function c_Enumerator(){
	Object.call(this);
	this.m__list=null;
	this.m__curr=null;
}
c_Enumerator.m_new=function(t_list){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<326>";
	this.m__list=t_list;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<327>";
	this.m__curr=dbg_object(dbg_object(t_list).m__head).m__succ;
	pop_err();
	return this;
}
c_Enumerator.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<323>";
	pop_err();
	return this;
}
c_Enumerator.prototype.p_HasNext=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<331>";
	while(dbg_object(dbg_object(this.m__curr).m__succ).m__pred!=this.m__curr){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<332>";
		this.m__curr=dbg_object(this.m__curr).m__succ;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<334>";
	var t_=this.m__curr!=dbg_object(this.m__list).m__head;
	pop_err();
	return t_;
}
c_Enumerator.prototype.p_NextObject=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<338>";
	var t_data=dbg_object(this.m__curr).m__data;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<339>";
	this.m__curr=dbg_object(this.m__curr).m__succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<340>";
	pop_err();
	return t_data;
}
function c_modes(){
	Object.call(this);
}
c_modes.m_current=0;
function bb_audio_SetChannelRate(t_channel,t_rate){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/audio.monkey<81>";
	bb_audio_device.SetRate(t_channel,t_rate);
	pop_err();
	return 0;
}
function bb_audio_PlaySound(t_sound,t_channel,t_flags){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/audio.monkey<53>";
	if(((t_sound)!=null) && ((dbg_object(t_sound).m_sample)!=null)){
		err_info="D:/Dev/MonkeyXPro80c/modules/mojo/audio.monkey<53>";
		bb_audio_device.PlaySample(dbg_object(t_sound).m_sample,t_channel,t_flags);
	}
	pop_err();
	return 0;
}
function bb_engine_NPlaySound(t_soundKey,t_soundChannel){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<94>";
	bb_engine_NLog("Attempting to play: '"+t_soundKey+"' on chan #"+String(t_soundChannel),0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<95>";
	bb_audio_SetChannelRate(t_soundChannel,1.0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<96>";
	if(!bb_engine_soundMap.p_Contains(t_soundKey) || bb_engine_gSound==0.0){
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<97>";
	bb_engine_NLog("Playing the above sound. Retval: "+String(bb_audio_PlaySound(bb_engine_soundMap.p_Get(t_soundKey),t_soundChannel,0)),0);
	pop_err();
}
function bb_engine_NPlaySoundSpeed(t_soundKey,t_speedRate,t_soundChannel){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<101>";
	bb_engine_NLog("Attempting to play: '"+t_soundKey+"' on chan #"+String(t_soundChannel)+" with rate: "+String(t_speedRate),0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<102>";
	bb_audio_SetChannelRate(t_soundChannel,t_speedRate);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<103>";
	if(!bb_engine_soundMap.p_Contains(t_soundKey) || bb_engine_gSound==0.0){
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<104>";
	bb_engine_NLog("Playing the above sound. Retval: "+String(bb_audio_PlaySound(bb_engine_soundMap.p_Get(t_soundKey),t_soundChannel,0)),0);
	pop_err();
}
function c_TAttributes(){
	Object.call(this);
	this.m_Name="";
	this.m_Buffs=c_List3.m_new.call(new c_List3);
	this.m_Weaknesses=c_StringMap.m_new.call(new c_StringMap);
}
c_TAttributes.m_new=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<10>";
	pop_err();
	return this;
}
c_TAttributes.prototype.p_AddBuff=function(t_buffStr,t_amt,t_length,t_override){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<19>";
	t_buffStr=t_buffStr.toLowerCase();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<20>";
	print("Adding a "+t_buffStr+" buff to "+this.m_Name);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<21>";
	if(t_override){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<22>";
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<22>";
		var t_=this.m_Buffs.p_ObjectEnumerator();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<22>";
		while(t_.p_HasNext()){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<22>";
			var t_buff=t_.p_NextObject();
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<23>";
			if(t_buffStr==dbg_object(t_buff).m_type){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<24>";
				dbg_object(t_buff).m_amt=t_amt;
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<25>";
				dbg_object(t_buff).m_turnsLeft=t_length;
				pop_err();
				return;
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<30>";
	this.m_Buffs.p_AddLast3(c_DBuff.m_new.call(new c_DBuff,t_buffStr,t_amt,t_length));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<31>";
	print("Buff Count: "+String(this.m_Buffs.p_Count()));
	pop_err();
}
c_TAttributes.prototype.p_AddWeakness=function(t_skillName,t_amt){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<35>";
	t_skillName=t_skillName.toLowerCase();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<36>";
	this.m_Weaknesses.p_Add(t_skillName,String(t_amt));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<37>";
	pop_err();
	return true;
}
c_TAttributes.prototype.p_GetWeakness=function(t_spellType){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<41>";
	if(!this.m_Weaknesses.p_Contains(t_spellType.toLowerCase())){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<41>";
		pop_err();
		return 0;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<42>";
	var t_=parseInt((this.m_Weaknesses.p_Get(t_spellType.toLowerCase())),10);
	pop_err();
	return t_;
}
function c_DCharacter(){
	c_TAttributes.call(this);
	this.m_XP=0;
	this.m_Level=0;
	this.m_XPNextLevel=0;
	this.m_Strength=0;
	this.m_Endurance=0;
	this.m_Knowledge=0;
	this.m_Skills=c_StringMap.m_new.call(new c_StringMap);
	this.m_HP=0;
	this.m_x=0;
	this.m_y=0;
	this.m_img=null;
	this.m_frame=0;
	this.m_StrengthBuffed=0;
	this.m_EnduranceBuffed=0;
	this.m_KnowledgeBuffed=0;
	this.m_Luck=0;
	this.m_LuckBuffed=0;
	this.m_AtkBuffed=0;
	this.m_evasion=0;
	this.m_accessory=null;
	this.m_maxHP=0;
	this.m_LvlUp=false;
	this.m_imgName="";
}
c_DCharacter.prototype=extend_class(c_TAttributes);
c_DCharacter.prototype.p_CalculateBuffs=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<331>";
	this.m_StrengthBuffed=this.m_Strength;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<332>";
	this.m_EnduranceBuffed=this.m_Endurance;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<333>";
	this.m_KnowledgeBuffed=this.m_Knowledge;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<334>";
	this.m_LuckBuffed=this.m_Luck;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<335>";
	this.m_AtkBuffed=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<336>";
	this.m_evasion=5;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<339>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<339>";
	var t_=this.m_Buffs.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<339>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<339>";
		var t_tmp=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<340>";
		bb_engine_NLog("Checking... ["+dbg_object(t_tmp).m_type.toLowerCase().slice(0,3)+"]"+dbg_object(t_tmp).m_type.toLowerCase().slice(3)+" Amt: "+String(dbg_object(t_tmp).m_amt),0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<341>";
		var t_3=dbg_object(t_tmp).m_type.toLowerCase().slice(0,3);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<342>";
		if(t_3=="str"){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<343>";
			this.m_StrengthBuffed+=dbg_object(t_tmp).m_amt;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<344>";
			if(t_3=="end"){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<345>";
				this.m_EnduranceBuffed+=dbg_object(t_tmp).m_amt;
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<346>";
				if(t_3=="kno"){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<347>";
					this.m_KnowledgeBuffed+=dbg_object(t_tmp).m_amt;
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<348>";
					if(t_3=="luc"){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<349>";
						this.m_LuckBuffed+=dbg_object(t_tmp).m_amt;
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<350>";
						if(t_3=="eva"){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<351>";
							this.m_evasion+=dbg_object(t_tmp).m_amt;
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<352>";
							if(t_3=="att"){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<353>";
								this.m_AtkBuffed+=dbg_object(t_tmp).m_amt;
							}
						}
					}
				}
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<357>";
	if(this.m_accessory!=null){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<358>";
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<358>";
		var t_2=dbg_object(this.m_accessory).m_Buffs.p_ObjectEnumerator();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<358>";
		while(t_2.p_HasNext()){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<358>";
			var t_tmp2=t_2.p_NextObject();
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<359>";
			var t_4=dbg_object(t_tmp2).m_type.toLowerCase().slice(0,3);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<360>";
			if(t_4=="str"){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<361>";
				this.m_StrengthBuffed+=dbg_object(t_tmp2).m_amt;
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<362>";
				if(t_4=="end"){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<363>";
					this.m_EnduranceBuffed+=dbg_object(t_tmp2).m_amt;
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<364>";
					if(t_4=="kno"){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<365>";
						this.m_KnowledgeBuffed+=dbg_object(t_tmp2).m_amt;
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<366>";
						if(t_4=="luc"){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<367>";
							this.m_LuckBuffed+=dbg_object(t_tmp2).m_amt;
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<368>";
							if(t_4=="eva"){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<369>";
								this.m_evasion+=dbg_object(t_tmp2).m_amt;
							}else{
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<370>";
								if(t_4=="att"){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<371>";
									this.m_AtkBuffed+=dbg_object(t_tmp2).m_amt;
								}
							}
						}
					}
				}
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<377>";
	if(this.m_StrengthBuffed<1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<377>";
		this.m_StrengthBuffed=1;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<378>";
	if(this.m_EnduranceBuffed<1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<378>";
		this.m_EnduranceBuffed=1;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<379>";
	if(this.m_KnowledgeBuffed<1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<379>";
		this.m_KnowledgeBuffed=1;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<380>";
	if(this.m_LuckBuffed<1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<380>";
		this.m_LuckBuffed=1;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<381>";
	this.m_evasion+=((this.m_LuckBuffed/4)|0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<382>";
	if(this.m_evasion<1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<382>";
		this.m_evasion=1;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<384>";
	this.m_maxHP=this.m_EnduranceBuffed*5+this.m_Level;
	pop_err();
}
c_DCharacter.prototype.p_Clear=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<162>";
	this.m_Name="";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<163>";
	this.m_XP=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<164>";
	this.m_Level=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<165>";
	this.m_XPNextLevel=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<166>";
	this.m_Strength=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<167>";
	this.m_Endurance=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<168>";
	this.m_Knowledge=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<169>";
	this.m_Buffs.p_Clear();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<170>";
	this.m_Skills.p_Clear();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<171>";
	this.m_Weaknesses.p_Clear();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<172>";
	this.m_HP=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<173>";
	this.m_x=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<174>";
	this.m_y=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<175>";
	this.m_img=null;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<176>";
	this.m_frame=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<177>";
	this.p_CalculateBuffs();
	pop_err();
}
c_DCharacter.prototype.p_InitStats=function(t_archetype,t_median,t_edge){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<204>";
	var t_1=t_archetype;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<205>";
	if(t_1==1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<206>";
		this.m_Strength=t_median+t_edge;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<207>";
		this.m_Endurance=t_median-((t_edge/2)|0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<208>";
		this.m_Knowledge=t_median-t_edge;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<209>";
		this.m_Luck=t_median-((t_edge/3)|0);
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<210>";
		if(t_1==2){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<211>";
			this.m_Strength=t_median-((t_edge/3)|0);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<212>";
			this.m_Endurance=t_median+t_edge;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<213>";
			this.m_Knowledge=t_median-((t_edge/2)|0);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<214>";
			this.m_Luck=t_median-t_edge;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<215>";
			if(t_1==3){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<216>";
				this.m_Strength=t_median-t_edge;
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<217>";
				this.m_Endurance=t_median-((t_edge/2)|0);
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<218>";
				this.m_Knowledge=t_median+t_edge;
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<219>";
				this.m_Luck=t_median-((t_edge/3)|0);
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<220>";
				if(t_1==4){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<221>";
					this.m_Strength=t_median-((t_edge/2)|0);
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<222>";
					this.m_Endurance=t_median-t_edge;
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<223>";
					this.m_Knowledge=t_median-((t_edge/3)|0);
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<224>";
					this.m_Luck=t_median+t_edge;
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<226>";
					this.m_Strength=t_median;
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<227>";
					this.m_Endurance=t_median;
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<228>";
					this.m_Knowledge=t_median-((t_edge/2)|0);
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<229>";
					this.m_Luck=t_median-((t_edge/3)|0);
				}
			}
		}
	}
	pop_err();
}
c_DCharacter.prototype.p_UpdateBuffs=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<388>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<388>";
	var t_=this.m_Buffs.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<388>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<388>";
		var t_tmp=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<389>";
		if(dbg_object(t_tmp).m_turnsLeft>0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<389>";
			dbg_object(t_tmp).m_turnsLeft-=1;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<390>";
		if(dbg_object(t_tmp).m_turnsLeft==0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<391>";
			this.m_Buffs.p_RemoveEach(t_tmp);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<392>";
			c_GMessageTicker.m_Add(this.m_Name+"'s "+dbg_object(t_tmp).m_type.toUpperCase()+" buff ended");
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<395>";
	this.p_CalculateBuffs();
	pop_err();
}
c_DCharacter.prototype.p_PickAttributeIncrease=function(t_index,t_increase,t_mute){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<288>";
	var t_2=t_index % 4;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<289>";
	if(t_2==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<290>";
		this.m_Strength+=t_increase;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<291>";
		if(!t_mute){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<291>";
			c_GMessageTicker.m_Add(this.m_Name+" has gained "+String(t_increase)+" str!");
		}
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<292>";
		if(t_2==1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<293>";
			this.m_Endurance+=t_increase;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<294>";
			if(!t_mute){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<294>";
				c_GMessageTicker.m_Add(this.m_Name+" has gained "+String(t_increase)+" end!");
			}
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<295>";
			if(t_2==2){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<296>";
				this.m_Knowledge+=t_increase;
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<297>";
				if(!t_mute){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<297>";
					c_GMessageTicker.m_Add(this.m_Name+" has gained "+String(t_increase)+" knw!");
				}
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<298>";
				if(t_2==3){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<299>";
					this.m_Luck+=t_increase;
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<300>";
					if(!t_mute){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<300>";
						c_GMessageTicker.m_Add(this.m_Name+" has gained "+String(t_increase)+" luck!");
					}
				}
			}
		}
	}
	pop_err();
}
c_DCharacter.prototype.p_LevelUp=function(t_mute){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<305>";
	var t_lvl=this.m_Level+1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<306>";
	var t_oldHP=this.m_maxHP;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<308>";
	if(!t_mute){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<308>";
		c_GMessageTicker.m_Add(this.m_Name+" has leveled up!");
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<310>";
	if(t_lvl % 2==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<311>";
		this.p_PickAttributeIncrease(t_lvl+this.m_Name.length,1,t_mute);
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<313>";
		this.p_PickAttributeIncrease(t_lvl+this.m_Name.length,1,t_mute);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<314>";
		this.p_PickAttributeIncrease(t_lvl+3+this.m_Name.length,1,t_mute);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<317>";
	this.p_CalculateBuffs();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<318>";
	this.m_HP+=this.m_maxHP-t_oldHP;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<320>";
	this.m_Level=t_lvl;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<321>";
	if(this.m_XP<this.m_XPNextLevel){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<321>";
		this.m_XP+=this.m_XPNextLevel;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<322>";
	this.m_XPNextLevel=t_lvl*t_lvl+(this.m_Strength*2+this.m_Endurance*3+this.m_Knowledge*4+this.m_Luck);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<323>";
	print(dbg_object(this).m_Name+"] XP Next Level (before Log): "+String(this.m_XPNextLevel));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<324>";
	print(String(t_lvl)+" -> "+String(Math.log(this.m_XPNextLevel)));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<325>";
	this.m_XPNextLevel=((Math.log(this.m_XPNextLevel)*20.0)|0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<326>";
	print(dbg_object(this).m_Name+"] XP Next Level: "+String(this.m_XPNextLevel));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<327>";
	this.m_LvlUp=true;
	pop_err();
}
c_DCharacter.prototype.p_InitLevel=function(t_lvl,t_nme){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<234>";
	if(this.m_Strength==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<235>";
		this.p_InitStats(-1,5,1);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<237>";
	this.p_UpdateBuffs();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<238>";
	this.m_HP=this.m_maxHP;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<239>";
	this.m_Name=t_nme;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<241>";
	this.m_Level=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<242>";
	this.m_XPNextLevel=((Math.pow((t_lvl),2.0)/4.0*100.0)|0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<243>";
	this.m_XP=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<244>";
	if(t_lvl>1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<245>";
		for(var t_i=1;t_i<=t_lvl;t_i=t_i+1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<246>";
			this.p_LevelUp(true);
		}
	}
	pop_err();
}
c_DCharacter.m_new=function(t_level){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<156>";
	c_TAttributes.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<157>";
	this.p_Clear();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<158>";
	if(t_level>0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<158>";
		this.p_InitLevel(t_level,"");
	}
	pop_err();
	return this;
}
c_DCharacter.m_new2=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<46>";
	c_TAttributes.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<46>";
	pop_err();
	return this;
}
c_DCharacter.prototype.p_LoadStringJSON=function(t_save){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<80>";
	this.p_Clear();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<81>";
	bb_engine_NLog("PC: "+(t_save.p_ToString()),0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<83>";
	this.m_Name=t_save.p_GetItem2("name","");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<85>";
	this.m_XP=t_save.p_GetItem3("xp",0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<87>";
	this.m_Level=t_save.p_GetItem3("level",0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<89>";
	this.m_XPNextLevel=t_save.p_GetItem3("xpnext",0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<91>";
	this.m_Strength=t_save.p_GetItem3("str",0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<93>";
	this.m_Endurance=t_save.p_GetItem3("end",0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<95>";
	this.m_Knowledge=t_save.p_GetItem3("kno",0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<97>";
	this.m_Luck=t_save.p_GetItem3("luc",0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<98>";
	this.m_HP=t_save.p_GetItem3("hp",0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<100>";
	this.m_imgName=t_save.p_GetItem2("imgname","");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<102>";
	this.m_frame=t_save.p_GetItem3("frame",0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<104>";
	if(t_save.p_Contains("accid")){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<104>";
		this.m_accessory=c_DItem.m_Generate(0,t_save.p_GetItem3("accid",0));
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<107>";
	bb_saveandload_LoadStringMap(this.m_Skills,t_save.p_GetItem2("skills",""));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<109>";
	bb_saveandload_LoadStringMap(this.m_Weaknesses,t_save.p_GetItem2("weaknesses",""));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<111>";
	this.p_CalculateBuffs();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<112>";
	var t_=(t_save.p_ToInt());
	pop_err();
	return t_;
}
c_DCharacter.prototype.p_SaveStringJSON=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<60>";
	var t_save=c_JSONObject.m_new.call(new c_JSONObject);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<61>";
	t_save.p_AddPrim4("name",this.m_Name);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<62>";
	t_save.p_AddPrim2("xp",this.m_XP);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<63>";
	t_save.p_AddPrim2("level",this.m_Level);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<64>";
	t_save.p_AddPrim2("xpnext",this.m_XPNextLevel);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<65>";
	t_save.p_AddPrim2("str",this.m_Strength);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<66>";
	t_save.p_AddPrim2("end",this.m_Endurance);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<67>";
	t_save.p_AddPrim2("kno",this.m_Knowledge);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<68>";
	t_save.p_AddPrim2("luc",this.m_Luck);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<69>";
	t_save.p_AddPrim2("hp",this.m_HP);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<70>";
	t_save.p_AddPrim4("imgname",this.m_imgName);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<71>";
	t_save.p_AddPrim2("frame",this.m_frame);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<72>";
	if(this.m_accessory!=null){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<72>";
		t_save.p_AddPrim2("accid",dbg_object(this.m_accessory).m_id);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<74>";
	t_save.p_AddPrim4("skills",bb_saveandload_SaveStringMap(this.m_Skills,"`"));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<75>";
	t_save.p_AddPrim4("weaknesses",bb_saveandload_SaveStringMap(this.m_Weaknesses,"`"));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<76>";
	pop_err();
	return t_save;
}
c_DCharacter.prototype.p_SetPosition=function(t_xx,t_yy){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<199>";
	this.m_x=t_xx;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<200>";
	this.m_y=t_yy;
	pop_err();
}
c_DCharacter.prototype.p_IsWeak=function(t_spellType){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<434>";
	t_spellType=t_spellType.toLowerCase();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<435>";
	if((this.m_accessory)!=null){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<435>";
		var t_=this.p_GetWeakness(t_spellType)+this.m_accessory.p_GetWeakness(t_spellType);
		pop_err();
		return t_;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<436>";
	var t_2=this.p_GetWeakness(t_spellType);
	pop_err();
	return t_2;
}
c_DCharacter.prototype.p_GetStats=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<181>";
	this.p_CalculateBuffs();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<182>";
	var t_=this.m_Name+" "+String(this.m_HP)+"/"+String(this.m_maxHP)+" Lvl"+String(this.m_Level)+" S"+String(this.m_StrengthBuffed)+" E"+String(this.m_EnduranceBuffed)+" K"+String(this.m_KnowledgeBuffed)+" L"+String(this.m_LuckBuffed)+" B"+String(this.m_Buffs.p_Count());
	pop_err();
	return t_;
}
c_DCharacter.prototype.p_CalcXPWorth=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<284>";
	var t_=this.m_Strength*2+this.m_Endurance*5+this.m_Knowledge*2+this.m_Luck*2+this.m_Skills.p_Count()*10;
	pop_err();
	return t_;
}
c_DCharacter.prototype.p_AddXP=function(t_xpGained){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<273>";
	bb_engine_NLog(this.m_Name+" gained "+String(t_xpGained),0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<274>";
	this.m_XPNextLevel-=t_xpGained;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<275>";
	this.m_XP+=t_xpGained;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<276>";
	if(this.m_XPNextLevel<0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<277>";
		t_xpGained=bb_math_Abs(this.m_XPNextLevel);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<278>";
		this.p_LevelUp(false);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<279>";
		this.p_AddXP(t_xpGained);
	}
	pop_err();
}
c_DCharacter.prototype.p_Fight=function(t_bound){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<422>";
	var t_attack=((this.m_StrengthBuffed/2)|0)+this.m_Level+((this.m_AtkBuffed/2)|0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<423>";
	var t_max=this.m_StrengthBuffed+this.m_LuckBuffed+this.m_Level*2+this.m_AtkBuffed;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<425>";
	if(t_bound<0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<425>";
		pop_err();
		return t_attack;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<426>";
	if(t_bound>0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<426>";
		pop_err();
		return t_max;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<428>";
	t_attack=((bb_random_Rnd2((t_attack),(t_max)))|0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<430>";
	pop_err();
	return t_attack;
}
c_DCharacter.prototype.p_Draw2=function(t_xx,t_yy){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<186>";
	c_GHealthDrawer.m_Draw(t_xx-4,t_yy,(this.m_HP)/(this.m_maxHP),this.m_img.p_Height()+2);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<187>";
	if(this.m_HP==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<188>";
		bb_graphics_DrawImage2(this.m_img,(t_xx),(t_yy+this.m_img.p_Width()),90.0,1.0,1.0,this.m_frame);
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<190>";
		bb_graphics_DrawImage(this.m_img,(t_xx),(t_yy),this.m_frame);
	}
	pop_err();
}
c_DCharacter.prototype.p_Draw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<195>";
	this.p_Draw2(this.m_x,this.m_y);
	pop_err();
}
c_DCharacter.prototype.p_LevelToLevel=function(t_lvl){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<252>";
	if(t_lvl>this.m_Level){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<253>";
		for(var t_i=this.m_Level+1;t_i<=t_lvl;t_i=t_i+1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<254>";
			this.p_LevelUp(true);
		}
	}
	pop_err();
}
c_DCharacter.prototype.p_HasSkill=function(t_skillName){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<409>";
	t_skillName=t_skillName.toLowerCase();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<410>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<410>";
	var t_=this.m_Skills.p_Keys().p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<410>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<410>";
		var t_skill=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<411>";
		if(t_skill.toLowerCase()==t_skillName){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<411>";
			pop_err();
			return true;
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<413>";
	pop_err();
	return false;
}
c_DCharacter.prototype.p_AddSkill=function(t_skillName){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<417>";
	if(this.p_HasSkill(t_skillName)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<417>";
		pop_err();
		return false;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<418>";
	this.m_Skills.p_Add(t_skillName,"");
	pop_err();
	return false;
}
function c_List2(){
	Object.call(this);
	this.m__head=(c_HeadNode2.m_new.call(new c_HeadNode2));
}
c_List2.m_new=function(){
	push_err();
	pop_err();
	return this;
}
c_List2.prototype.p_AddLast2=function(t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<108>";
	var t_=c_Node7.m_new.call(new c_Node7,this.m__head,dbg_object(this.m__head).m__pred,t_data);
	pop_err();
	return t_;
}
c_List2.m_new2=function(t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	var t_=t_data;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	var t_2=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	while(t_2<t_.length){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
		var t_t=dbg_array(t_,t_2)[dbg_index];
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
		t_2=t_2+1;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<14>";
		this.p_AddLast2(t_t);
	}
	pop_err();
	return this;
}
c_List2.prototype.p_Clear=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<36>";
	dbg_object(this.m__head).m__succ=this.m__head;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<37>";
	dbg_object(this.m__head).m__pred=this.m__head;
	pop_err();
	return 0;
}
c_List2.prototype.p_ObjectEnumerator=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<186>";
	var t_=c_Enumerator3.m_new.call(new c_Enumerator3,this);
	pop_err();
	return t_;
}
c_List2.prototype.p_Count=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<41>";
	var t_n=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<41>";
	var t_node=dbg_object(this.m__head).m__succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<42>";
	while(t_node!=this.m__head){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<43>";
		t_node=dbg_object(t_node).m__succ;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<44>";
		t_n+=1;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<46>";
	pop_err();
	return t_n;
}
c_List2.prototype.p_ToArray=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<19>";
	var t_arr=new_object_array(this.p_Count());
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<19>";
	var t_i=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<20>";
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<20>";
	var t_=this.p_ObjectEnumerator();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<20>";
	while(t_.p_HasNext()){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<20>";
		var t_t=t_.p_NextObject();
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<21>";
		dbg_array(t_arr,t_i)[dbg_index]=t_t;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<22>";
		t_i+=1;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<24>";
	pop_err();
	return t_arr;
}
c_List2.prototype.p_IsEmpty=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<50>";
	var t_=dbg_object(this.m__head).m__succ==this.m__head;
	pop_err();
	return t_;
}
c_List2.prototype.p_First=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<73>";
	if(this.p_IsEmpty()){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<73>";
		error("Illegal operation on empty list");
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<75>";
	pop_err();
	return dbg_object(dbg_object(this.m__head).m__succ).m__data;
}
c_List2.prototype.p_Last=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<80>";
	if(this.p_IsEmpty()){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<80>";
		error("Illegal operation on empty list");
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<82>";
	pop_err();
	return dbg_object(dbg_object(this.m__head).m__pred).m__data;
}
c_List2.prototype.p_Equals=function(t_lhs,t_rhs){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<28>";
	var t_=t_lhs==t_rhs;
	pop_err();
	return t_;
}
c_List2.prototype.p_Contains3=function(t_value){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<54>";
	var t_node=dbg_object(this.m__head).m__succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<55>";
	while(t_node!=this.m__head){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<56>";
		if(this.p_Equals(dbg_object(t_node).m__data,t_value)){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<56>";
			pop_err();
			return true;
		}
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<57>";
		t_node=dbg_object(t_node).m__succ;
	}
	pop_err();
	return false;
}
function c_Node7(){
	Object.call(this);
	this.m__succ=null;
	this.m__pred=null;
	this.m__data=null;
}
c_Node7.m_new=function(t_succ,t_pred,t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<261>";
	this.m__succ=t_succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<262>";
	this.m__pred=t_pred;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<263>";
	dbg_object(this.m__succ).m__pred=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<264>";
	dbg_object(this.m__pred).m__succ=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<265>";
	this.m__data=t_data;
	pop_err();
	return this;
}
c_Node7.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<258>";
	pop_err();
	return this;
}
function c_HeadNode2(){
	c_Node7.call(this);
}
c_HeadNode2.prototype=extend_class(c_Node7);
c_HeadNode2.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<310>";
	c_Node7.m_new2.call(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<311>";
	this.m__succ=(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<312>";
	this.m__pred=(this);
	pop_err();
	return this;
}
var bb_engine_playerCharacters=null;
var bb_engine_ninja=null;
var bb_engine_archer=null;
var bb_engine_sage=null;
var bb_engine_warrior=null;
var bb_engine_playerGold=0;
var bb_engine_currentLocation=0;
var bb_engine_lastTown=0;
var bb_engine_gameTriggers=null;
function bb_saveandload__SplitPair(t_map,t_pair){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<141>";
	t_map.p_Set(t_pair.slice(0,t_pair.indexOf("`",0)),t_pair.slice(t_pair.indexOf("`",0)+1));
	pop_err();
}
function bb_engine_GoNuclear(t_msg){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<71>";
	bb_engine_hasGoneNuclear=true;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<72>";
	bb_engine_nukeMessage=t_msg;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<73>";
	print("[FATAL ERROR] "+bb_engine_nukeMessage);
	pop_err();
}
function bb_saveandload_LoadStringMap(t_map,t_loading){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<121>";
	t_loading=string_replace(string_replace(t_loading,"[",""),"]","");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<122>";
	t_map.p_Clear();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<123>";
	if(t_loading==""){
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<124>";
	if(!(t_loading.indexOf("~")!=-1)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<125>";
		bb_saveandload__SplitPair(t_map,t_loading);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<128>";
	var t_pairs=t_loading.split("~");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<129>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<129>";
	var t_=t_pairs;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<129>";
	var t_2=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<129>";
	while(t_2<t_.length){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<129>";
		var t_pair=dbg_array(t_,t_2)[dbg_index];
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<129>";
		t_2=t_2+1;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<130>";
		if(!(t_pair.indexOf("`")!=-1)){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<131>";
			bb_engine_GoNuclear("["+t_pair+"] Does not contain token! "+t_loading);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<132>";
			continue;
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<134>";
		bb_saveandload__SplitPair(t_map,t_pair);
	}
	pop_err();
}
function c_DBuff(){
	Object.call(this);
	this.m_type="";
	this.m_amt=0;
	this.m_turnsLeft=-1;
}
c_DBuff.m_new=function(t_t,t_a,t_tl){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<446>";
	this.m_type=t_t;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<447>";
	this.m_amt=t_a;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<448>";
	this.m_turnsLeft=t_tl;
	pop_err();
	return this;
}
c_DBuff.m_new2=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<440>";
	pop_err();
	return this;
}
function c_List3(){
	Object.call(this);
	this.m__head=(c_HeadNode3.m_new.call(new c_HeadNode3));
}
c_List3.m_new=function(){
	push_err();
	pop_err();
	return this;
}
c_List3.prototype.p_AddLast3=function(t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<108>";
	var t_=c_Node8.m_new.call(new c_Node8,this.m__head,dbg_object(this.m__head).m__pred,t_data);
	pop_err();
	return t_;
}
c_List3.m_new2=function(t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	var t_=t_data;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	var t_2=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	while(t_2<t_.length){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
		var t_t=dbg_array(t_,t_2)[dbg_index];
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
		t_2=t_2+1;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<14>";
		this.p_AddLast3(t_t);
	}
	pop_err();
	return this;
}
c_List3.prototype.p_Clear=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<36>";
	dbg_object(this.m__head).m__succ=this.m__head;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<37>";
	dbg_object(this.m__head).m__pred=this.m__head;
	pop_err();
	return 0;
}
c_List3.prototype.p_ObjectEnumerator=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<186>";
	var t_=c_Enumerator2.m_new.call(new c_Enumerator2,this);
	pop_err();
	return t_;
}
c_List3.prototype.p_Equals2=function(t_lhs,t_rhs){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<28>";
	var t_=t_lhs==t_rhs;
	pop_err();
	return t_;
}
c_List3.prototype.p_RemoveEach=function(t_value){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<151>";
	var t_node=dbg_object(this.m__head).m__succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<152>";
	while(t_node!=this.m__head){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<153>";
		var t_succ=dbg_object(t_node).m__succ;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<154>";
		if(this.p_Equals2(dbg_object(t_node).m__data,t_value)){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<154>";
			t_node.p_Remove();
		}
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<155>";
		t_node=t_succ;
	}
	pop_err();
	return 0;
}
c_List3.prototype.p_Count=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<41>";
	var t_n=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<41>";
	var t_node=dbg_object(this.m__head).m__succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<42>";
	while(t_node!=this.m__head){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<43>";
		t_node=dbg_object(t_node).m__succ;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<44>";
		t_n+=1;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<46>";
	pop_err();
	return t_n;
}
function c_Node8(){
	Object.call(this);
	this.m__succ=null;
	this.m__pred=null;
	this.m__data=null;
}
c_Node8.m_new=function(t_succ,t_pred,t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<261>";
	this.m__succ=t_succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<262>";
	this.m__pred=t_pred;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<263>";
	dbg_object(this.m__succ).m__pred=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<264>";
	dbg_object(this.m__pred).m__succ=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<265>";
	this.m__data=t_data;
	pop_err();
	return this;
}
c_Node8.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<258>";
	pop_err();
	return this;
}
c_Node8.prototype.p_Remove=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<274>";
	if(dbg_object(this.m__succ).m__pred!=this){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<274>";
		error("Illegal operation on removed node");
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<276>";
	dbg_object(this.m__succ).m__pred=this.m__pred;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<277>";
	dbg_object(this.m__pred).m__succ=this.m__succ;
	pop_err();
	return 0;
}
function c_HeadNode3(){
	c_Node8.call(this);
}
c_HeadNode3.prototype=extend_class(c_Node8);
c_HeadNode3.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<310>";
	c_Node8.m_new2.call(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<311>";
	this.m__succ=(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<312>";
	this.m__pred=(this);
	pop_err();
	return this;
}
function c_Enumerator2(){
	Object.call(this);
	this.m__list=null;
	this.m__curr=null;
}
c_Enumerator2.m_new=function(t_list){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<326>";
	this.m__list=t_list;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<327>";
	this.m__curr=dbg_object(dbg_object(t_list).m__head).m__succ;
	pop_err();
	return this;
}
c_Enumerator2.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<323>";
	pop_err();
	return this;
}
c_Enumerator2.prototype.p_HasNext=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<331>";
	while(dbg_object(dbg_object(this.m__curr).m__succ).m__pred!=this.m__curr){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<332>";
		this.m__curr=dbg_object(this.m__curr).m__succ;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<334>";
	var t_=this.m__curr!=dbg_object(this.m__list).m__head;
	pop_err();
	return t_;
}
c_Enumerator2.prototype.p_NextObject=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<338>";
	var t_data=dbg_object(this.m__curr).m__data;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<339>";
	this.m__curr=dbg_object(this.m__curr).m__succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<340>";
	pop_err();
	return t_data;
}
function c_DItem(){
	c_TAttributes.call(this);
	this.m_id=0;
	this.m_value=0;
	this.m_type=0;
}
c_DItem.prototype=extend_class(c_TAttributes);
c_DItem.m_new=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<3>";
	c_TAttributes.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<3>";
	pop_err();
	return this;
}
c_DItem.prototype.p_Set6=function(t_nn,t_ii,t_vv,t_tt){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<15>";
	this.m_Name=t_nn;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<16>";
	this.m_id=t_ii;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<17>";
	this.m_value=t_vv;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<18>";
	this.m_type=t_tt;
	pop_err();
	return 0;
}
c_DItem.m_Generate=function(t_tt,t_id){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<22>";
	var t_item=c_DItem.m_new.call(new c_DItem);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<23>";
	var t_1=t_id;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<24>";
	if(t_1==1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<25>";
		t_item.p_Set6("Ninja Scarf",t_id,50,0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<26>";
		t_item.p_AddBuff("attack",1,1,true);
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<27>";
		if(t_1==2){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<28>";
			t_item.p_Set6("Smoke Bombs",t_id,150,0);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<29>";
			t_item.p_AddBuff("evasion",25,1,true);
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<30>";
			if(t_1==3){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<31>";
				t_item.p_Set6("Sage Cap",t_id,100,0);
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<32>";
				t_item.p_AddBuff("knowledge",1,1,true);
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<33>";
				if(t_1==4){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<34>";
					t_item.p_Set6("Shadow Cloak",t_id,150,0);
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<35>";
					t_item.p_AddBuff("evasion",15,1,true);
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<36>";
					t_item.p_AddBuff("luck",1,1,true);
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<37>";
					t_item.p_AddBuff("endurance",-1,1,true);
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<38>";
					t_item.p_AddWeakness("fire",1);
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<39>";
					if(t_1==5){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<40>";
						t_item.p_Set6("Longsword",t_id,175,0);
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<41>";
						t_item.p_AddBuff("attack",5,1,true);
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<42>";
						t_item.p_AddBuff("luck",-1,1,true);
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<43>";
						t_item.p_AddWeakness("rock",-1);
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<45>";
						t_item=null;
					}
				}
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/items.monkey<47>";
	pop_err();
	return t_item;
}
function c_GMessageTicker(){
	Object.call(this);
}
c_GMessageTicker.m_msgList=null;
c_GMessageTicker.m_Add=function(t_msg){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<256>";
	if(t_msg.length>25){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<257>";
		print("["+t_msg.slice(0,24)+"..]");
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<258>";
		c_GMessageTicker.m_msgList.p_AddLast4(t_msg.slice(0,24)+"~");
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<259>";
		c_GMessageTicker.m_Add(t_msg.slice(24));
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<261>";
		print("["+t_msg+"]");
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<262>";
		c_GMessageTicker.m_msgList.p_AddLast4(t_msg);
	}
	pop_err();
}
c_GMessageTicker.m_lastMsgMs=0;
c_GMessageTicker.m_curMsg="";
c_GMessageTicker.m_msgSpeed=0;
c_GMessageTicker.m_Skip=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<276>";
	if(c_GMessageTicker.m_lastMsgMs==-1){
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<277>";
	if(c_GMessageTicker.m_msgList.p_Count()==0 && c_GMessageTicker.m_curMsg!=""){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<278>";
		c_GMessageTicker.m_lastMsgMs=0;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<279>";
		c_GMessageTicker.m_curMsg="";
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<280>";
		if(c_GMessageTicker.m_msgList.p_Count()>0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<281>";
			c_GMessageTicker.m_curMsg=c_GMessageTicker.m_msgList.p_RemoveFirst();
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<282>";
			c_GMessageTicker.m_lastMsgMs=c_GMessageTicker.m_curMsg.length*c_GMessageTicker.m_msgSpeed;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<283>";
			if(c_GMessageTicker.m_lastMsgMs<c_GMessageTicker.m_msgSpeed*10){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<283>";
				c_GMessageTicker.m_lastMsgMs=c_GMessageTicker.m_msgSpeed*10;
			}
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<284>";
			c_GMessageTicker.m_lastMsgMs=bb_app_Millisecs()+c_GMessageTicker.m_lastMsgMs;
		}
	}
	pop_err();
}
c_GMessageTicker.m_Update=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<268>";
	if(c_GMessageTicker.m_lastMsgMs==-1){
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<270>";
	if(bb_app_Millisecs()>c_GMessageTicker.m_lastMsgMs){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<271>";
		c_GMessageTicker.m_Skip();
	}
	pop_err();
}
c_GMessageTicker.m_Set=function(t_newMessage){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<247>";
	c_GMessageTicker.m_curMsg=t_newMessage;
	pop_err();
}
c_GMessageTicker.m_isBlank=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<251>";
	if(c_GMessageTicker.m_curMsg==""){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<251>";
		pop_err();
		return true;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<252>";
	pop_err();
	return false;
}
c_GMessageTicker.m_Draw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<289>";
	if(c_GMessageTicker.m_curMsg!=""){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<291>";
		c_GWindowDrawer.m_Draw(-4,-4,164,16);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<292>";
		bb_gui_GDrawTextPreserveBlend(c_GMessageTicker.m_curMsg,80-c_GMessageTicker.m_curMsg.length*3,0);
	}
	pop_err();
}
function c_List4(){
	Object.call(this);
	this.m__head=(c_HeadNode4.m_new.call(new c_HeadNode4));
}
c_List4.m_new=function(){
	push_err();
	pop_err();
	return this;
}
c_List4.prototype.p_AddLast4=function(t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<108>";
	var t_=c_Node9.m_new.call(new c_Node9,this.m__head,dbg_object(this.m__head).m__pred,t_data);
	pop_err();
	return t_;
}
c_List4.m_new2=function(t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	var t_=t_data;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	var t_2=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	while(t_2<t_.length){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
		var t_t=dbg_array(t_,t_2)[dbg_index];
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
		t_2=t_2+1;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<14>";
		this.p_AddLast4(t_t);
	}
	pop_err();
	return this;
}
c_List4.prototype.p_Count=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<41>";
	var t_n=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<41>";
	var t_node=dbg_object(this.m__head).m__succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<42>";
	while(t_node!=this.m__head){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<43>";
		t_node=dbg_object(t_node).m__succ;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<44>";
		t_n+=1;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<46>";
	pop_err();
	return t_n;
}
c_List4.prototype.p_IsEmpty=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<50>";
	var t_=dbg_object(this.m__head).m__succ==this.m__head;
	pop_err();
	return t_;
}
c_List4.prototype.p_RemoveFirst=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<87>";
	if(this.p_IsEmpty()){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<87>";
		error("Illegal operation on empty list");
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<89>";
	var t_data=dbg_object(dbg_object(this.m__head).m__succ).m__data;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<90>";
	dbg_object(this.m__head).m__succ.p_Remove();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<91>";
	pop_err();
	return t_data;
}
c_List4.prototype.p_Equals3=function(t_lhs,t_rhs){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<28>";
	var t_=t_lhs==t_rhs;
	pop_err();
	return t_;
}
c_List4.prototype.p_Find=function(t_value,t_start){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<116>";
	while(t_start!=this.m__head){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<117>";
		if(this.p_Equals3(t_value,dbg_object(t_start).m__data)){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<117>";
			pop_err();
			return t_start;
		}
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<118>";
		t_start=dbg_object(t_start).m__succ;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<120>";
	pop_err();
	return null;
}
c_List4.prototype.p_Find2=function(t_value){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<112>";
	var t_=this.p_Find(t_value,dbg_object(this.m__head).m__succ);
	pop_err();
	return t_;
}
c_List4.prototype.p_RemoveFirst2=function(t_value){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<141>";
	var t_node=this.p_Find2(t_value);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<142>";
	if((t_node)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<142>";
		t_node.p_Remove();
	}
	pop_err();
}
function c_Node9(){
	Object.call(this);
	this.m__succ=null;
	this.m__pred=null;
	this.m__data="";
}
c_Node9.m_new=function(t_succ,t_pred,t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<261>";
	this.m__succ=t_succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<262>";
	this.m__pred=t_pred;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<263>";
	dbg_object(this.m__succ).m__pred=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<264>";
	dbg_object(this.m__pred).m__succ=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<265>";
	this.m__data=t_data;
	pop_err();
	return this;
}
c_Node9.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<258>";
	pop_err();
	return this;
}
c_Node9.prototype.p_Remove=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<274>";
	if(dbg_object(this.m__succ).m__pred!=this){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<274>";
		error("Illegal operation on removed node");
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<276>";
	dbg_object(this.m__succ).m__pred=this.m__pred;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<277>";
	dbg_object(this.m__pred).m__succ=this.m__succ;
	pop_err();
	return 0;
}
function c_HeadNode4(){
	c_Node9.call(this);
}
c_HeadNode4.prototype=extend_class(c_Node9);
c_HeadNode4.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<310>";
	c_Node9.m_new2.call(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<311>";
	this.m__succ=(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<312>";
	this.m__pred=(this);
	pop_err();
	return this;
}
function c_DMap(){
	Object.call(this);
	this.m_currentSpecial=[];
	this.m_tmpX=0;
	this.m_tmpY=0;
	this.m_name="";
	this.m_currentMap=[];
	this.m_monsterZones=c_List9.m_new.call(new c_List9);
}
c_DMap.prototype.p_SearchMap=function(t_targetMap,t_id){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<487>";
	for(var t_i=0;t_i<=t_targetMap.length-1;t_i=t_i+1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<488>";
		for(var t_j=0;t_j<=dbg_array(t_targetMap,t_i)[dbg_index].length-1;t_j=t_j+1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<489>";
			if(dbg_array(dbg_array(t_targetMap,t_i)[dbg_index],t_j)[dbg_index]==t_id){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<490>";
				this.m_tmpX=t_j;
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<491>";
				this.m_tmpY=t_i;
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<492>";
				pop_err();
				return true;
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<496>";
	pop_err();
	return false;
}
c_DMap.m_maps=null;
c_DMap.m_new=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<463>";
	pop_err();
	return this;
}
c_DMap.prototype.p_LoadMap=function(t_mapFilename){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<500>";
	bb_engine_NLog("Loading Map: '"+t_mapFilename+"'",0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<501>";
	if(bb_app_LoadString("maps/"+t_mapFilename+".json")==""){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<501>";
		bb_engine_GoNuclear("Can not find map file '"+t_mapFilename+".json'!!!");
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<502>";
	var t_file=object_downcast((c_JSONData.m_ReadJSON(bb_app_LoadString("maps/"+t_mapFilename+".json"))),c_JSONObject);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<503>";
	var t_width=t_file.p_GetItem("width").p_ToInt();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<504>";
	var t_height=t_file.p_GetItem("height").p_ToInt();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<505>";
	this.m_name=t_mapFilename.toLowerCase();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<506>";
	c_DMap.m_maps.p_Set7(this.m_name,this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<508>";
	this.m_currentMap=resize_array_array(this.m_currentMap,t_height);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<509>";
	this.m_currentSpecial=resize_array_array(this.m_currentSpecial,t_height);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<510>";
	for(var t_i=0;t_i<=t_height-1;t_i=t_i+1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<511>";
		dbg_array(this.m_currentMap,t_i)[dbg_index]=resize_number_array(dbg_array(this.m_currentMap,t_i)[dbg_index],t_width);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<512>";
		dbg_array(this.m_currentSpecial,t_i)[dbg_index]=resize_number_array(dbg_array(this.m_currentSpecial,t_i)[dbg_index],t_width);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<515>";
	this.m_monsterZones.p_Clear();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<517>";
	var t_layers=object_downcast((t_file.p_GetItem("layers")),c_JSONArray);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<518>";
	var t_tmpIntArr=[];
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<519>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<519>";
	var t_=t_layers.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<519>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<519>";
		var t_jDI=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<520>";
		bb_engine_NLog("jDI = "+(object_downcast((t_jDI),c_JSONObject).p_GetItem("name").p_ToString()),0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<521>";
		var t_jObj=object_downcast((t_jDI),c_JSONObject);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<523>";
		var t_10=t_jObj.p_GetItem("name").p_ToString().toLowerCase();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<524>";
		if(t_10=="background"){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<525>";
			t_tmpIntArr=object_downcast((t_jObj.p_GetItem("data")),c_JSONArray).p_ToIntArray();
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<526>";
			var t_k=0;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<527>";
			for(var t_i2=0;t_i2<=t_height-1;t_i2=t_i2+1){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<528>";
				for(var t_j=0;t_j<=t_width-1;t_j=t_j+1){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<529>";
					dbg_array(dbg_array(this.m_currentMap,t_i2)[dbg_index],t_j)[dbg_index]=dbg_array(t_tmpIntArr,t_k)[dbg_index]-1;
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<530>";
					t_k+=1;
				}
			}
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<534>";
			if(t_10=="collision"){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<535>";
				t_tmpIntArr=object_downcast((t_jObj.p_GetItem("data")),c_JSONArray).p_ToIntArray();
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<536>";
				var t_k2=0;
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<537>";
				for(var t_i3=0;t_i3<=t_height-1;t_i3=t_i3+1){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<538>";
					for(var t_j2=0;t_j2<=t_width-1;t_j2=t_j2+1){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<539>";
						dbg_array(dbg_array(this.m_currentSpecial,t_i3)[dbg_index],t_j2)[dbg_index]=dbg_array(t_tmpIntArr,t_k2)[dbg_index]-1;
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<540>";
						t_k2+=1;
					}
				}
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<544>";
				if(t_10=="object"){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<545>";
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<545>";
					var t_2=object_downcast((t_jObj.p_GetItem("objects")),c_JSONArray).p_ObjectEnumerator();
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<545>";
					while(t_2.p_HasNext()){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<545>";
						var t_jDI2=t_2.p_NextObject();
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<546>";
						var t_jObj2=object_downcast((t_jDI2),c_JSONObject);
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<547>";
						var t_tmpMZ=c_DBoundingBox.m_new.call(new c_DBoundingBox);
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<548>";
						dbg_object(t_tmpMZ).m_x=t_jObj2.p_GetItem("x").p_ToInt();
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<549>";
						dbg_object(t_tmpMZ).m_y=t_jObj2.p_GetItem("y").p_ToInt();
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<550>";
						dbg_object(t_tmpMZ).m_w=t_jObj2.p_GetItem("width").p_ToInt();
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<551>";
						dbg_object(t_tmpMZ).m_h=t_jObj2.p_GetItem("height").p_ToInt();
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<552>";
						dbg_object(t_tmpMZ).m_name=t_jObj2.p_GetItem("name").p_ToString();
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<554>";
						this.m_monsterZones.p_AddLast9(t_tmpMZ);
					}
				}
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<559>";
	pop_err();
	return true;
}
c_DMap.m_FindMap=function(t_mapName){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<467>";
	if(c_DMap.m_maps.p_Contains(t_mapName.toLowerCase())){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<468>";
		var t_=c_DMap.m_maps.p_Get(t_mapName.toLowerCase());
		pop_err();
		return t_;
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<470>";
		(c_DMap.m_new.call(new c_DMap)).p_LoadMap(t_mapName);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<471>";
		if(c_DMap.m_maps.p_Contains(t_mapName.toLowerCase())){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<472>";
			var t_2=c_DMap.m_maps.p_Get(t_mapName.toLowerCase());
			pop_err();
			return t_2;
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<475>";
	bb_engine_NLog("[_MAP] Failed to find/load "+t_mapName+".json !",0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenTownMap.monkey<476>";
	pop_err();
	return null;
}
function bb_saveandload_LoadGame(t_file){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<61>";
	var t_tmp=null;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<62>";
	print("LoadGame: [[["+(t_file.p_ToString())+"]]]");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<64>";
	bb_saveandload_LoadSettingsPrims(t_file);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<66>";
	bb_engine_playerCharacters.p_Clear();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<68>";
	bb_engine_ninja=null;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<68>";
	bb_engine_archer=null;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<68>";
	bb_engine_sage=null;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<68>";
	bb_engine_warrior=null;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<70>";
	bb_engine_playerGold=t_file.p_GetItem3("gold",0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<71>";
	bb_engine_currentLocation=t_file.p_GetItem3("currentlocation",0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<72>";
	bb_engine_lastTown=t_file.p_GetItem3("lasttown",128);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<73>";
	bb_saveandload_LoadStringMap(bb_engine_gameTriggers,t_file.p_GetItem2("gametriggers",""));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<75>";
	if(t_file.p_Contains("ninja")){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<76>";
		bb_engine_ninja=c_DCharacter.m_new.call(new c_DCharacter,0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<77>";
		bb_engine_ninja.p_LoadStringJSON(object_downcast((t_file.p_GetItem("ninja")),c_JSONObject));
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<78>";
		bb_engine_playerCharacters.p_AddLast2(bb_engine_ninja);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<79>";
		dbg_object(bb_engine_ninja).m_img=bb_engine_imageMap.p_Get("ninja");
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<81>";
	if(t_file.p_Contains("archer")){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<82>";
		bb_engine_archer=c_DCharacter.m_new.call(new c_DCharacter,0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<83>";
		bb_engine_archer.p_LoadStringJSON(object_downcast((t_file.p_GetItem("archer")),c_JSONObject));
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<84>";
		bb_engine_playerCharacters.p_AddLast2(bb_engine_archer);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<85>";
		dbg_object(bb_engine_archer).m_img=bb_engine_imageMap.p_Get("archer");
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<87>";
	if(t_file.p_Contains("sage")){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<88>";
		bb_engine_sage=c_DCharacter.m_new.call(new c_DCharacter,0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<89>";
		bb_engine_sage.p_LoadStringJSON(object_downcast((t_file.p_GetItem("sage")),c_JSONObject));
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<90>";
		bb_engine_playerCharacters.p_AddLast2(bb_engine_sage);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<91>";
		dbg_object(bb_engine_sage).m_img=bb_engine_imageMap.p_Get("magi");
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<93>";
	if(t_file.p_Contains("warrior")){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<94>";
		bb_engine_warrior=c_DCharacter.m_new.call(new c_DCharacter,0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<95>";
		bb_engine_warrior.p_LoadStringJSON(object_downcast((t_file.p_GetItem("warrior")),c_JSONObject));
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<96>";
		bb_engine_playerCharacters.p_AddLast2(bb_engine_warrior);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<97>";
		dbg_object(bb_engine_sage).m_img=bb_engine_imageMap.p_Get("warrior");
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<100>";
	if(t_file.p_Contains("current_map")){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<101>";
		t_tmp=object_downcast((t_file.p_GetItem("current_map")),c_JSONObject);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<103>";
		object_downcast((bb_engine_townMapScreen),c_SMap).p_PlacePlayerAt2(t_tmp.p_GetItem3("x",18),t_tmp.p_GetItem3("y",39));
	}
	pop_err();
}
function bb_saveandload_LoadGame2(t_file){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<57>";
	bb_saveandload_LoadGame(object_downcast((c_JSONData.m_ReadJSON(t_file)),c_JSONObject));
	pop_err();
}
function bb_engine_ClearActiveEvents(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<202>";
	for(var t_i=0;t_i<=16;t_i=t_i+1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<203>";
		print("m"+String(t_i+128)+" = "+bb_engine_gameTriggers.p_Get("m"+String(128+t_i)));
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<204>";
		if(bb_engine_gameTriggers.p_Get("m"+String(128+t_i))=="1"){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<205>";
			bb_engine_gameTriggers.p_Set("m"+String(128+t_i),"0");
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<206>";
			print("Set to 0!");
		}
	}
	pop_err();
}
function bb_engine_Reset(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<52>";
	bb_engine_playerGold=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<53>";
	bb_engine_currentLocation=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<54>";
	bb_engine_lastTown=128;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<55>";
	bb_engine_gameTriggers.p_Clear();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<56>";
	bb_engine_playerCharacters.p_Clear();
	pop_err();
}
function bb_saveandload_AddSettingsPrims(t_file){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<145>";
	t_file.p_AddPrim2("window_style",bb_engine_window_style);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<146>";
	t_file.p_AddPrim3("global_sound",bb_engine_gSound);
	pop_err();
}
function bb_saveandload_SaveSettings(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<15>";
	bb_engine_NLog("Warning: Saving just the settings does NOT save the last player's state!",0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<17>";
	var t_file=c_JSONObject.m_new.call(new c_JSONObject);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<19>";
	bb_saveandload_AddSettingsPrims(t_file);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<21>";
	print(t_file.p_ToJSONString());
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<22>";
	var t_=t_file.p_ToJSONString();
	pop_err();
	return t_;
}
function c_MapKeys(){
	Object.call(this);
	this.m_map=null;
}
c_MapKeys.m_new=function(t_map){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<503>";
	dbg_object(this).m_map=t_map;
	pop_err();
	return this;
}
c_MapKeys.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<500>";
	pop_err();
	return this;
}
c_MapKeys.prototype.p_ObjectEnumerator=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<507>";
	var t_=c_KeyEnumerator.m_new.call(new c_KeyEnumerator,this.m_map.p_FirstNode());
	pop_err();
	return t_;
}
function c_KeyEnumerator(){
	Object.call(this);
	this.m_node=null;
}
c_KeyEnumerator.m_new=function(t_node){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<459>";
	dbg_object(this).m_node=t_node;
	pop_err();
	return this;
}
c_KeyEnumerator.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<456>";
	pop_err();
	return this;
}
c_KeyEnumerator.prototype.p_HasNext=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<463>";
	var t_=this.m_node!=null;
	pop_err();
	return t_;
}
c_KeyEnumerator.prototype.p_NextObject=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<467>";
	var t_t=this.m_node;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<468>";
	this.m_node=this.m_node.p_NextNode();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<469>";
	pop_err();
	return dbg_object(t_t).m_key;
}
function bb_saveandload_SaveStringMap(t_map,t_delimiter){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<112>";
	var t_output="";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<113>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<113>";
	var t_=t_map.p_Keys().p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<113>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<113>";
		var t_key=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<114>";
		if(t_output!=""){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<114>";
			t_output=t_output+"~";
		}
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<115>";
		t_output=t_output+(t_key+t_delimiter+t_map.p_Get(t_key));
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<117>";
	var t_2="["+t_output+"]";
	pop_err();
	return t_2;
}
function c_Enumerator3(){
	Object.call(this);
	this.m__list=null;
	this.m__curr=null;
}
c_Enumerator3.m_new=function(t_list){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<326>";
	this.m__list=t_list;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<327>";
	this.m__curr=dbg_object(dbg_object(t_list).m__head).m__succ;
	pop_err();
	return this;
}
c_Enumerator3.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<323>";
	pop_err();
	return this;
}
c_Enumerator3.prototype.p_HasNext=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<331>";
	while(dbg_object(dbg_object(this.m__curr).m__succ).m__pred!=this.m__curr){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<332>";
		this.m__curr=dbg_object(this.m__curr).m__succ;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<334>";
	var t_=this.m__curr!=dbg_object(this.m__list).m__head;
	pop_err();
	return t_;
}
c_Enumerator3.prototype.p_NextObject=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<338>";
	var t_data=dbg_object(this.m__curr).m__data;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<339>";
	this.m__curr=dbg_object(this.m__curr).m__succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<340>";
	pop_err();
	return t_data;
}
function bb_saveandload_SaveGame(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<26>";
	var t_file=c_JSONObject.m_new.call(new c_JSONObject);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<27>";
	var t_tmp=null;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<27>";
	var t_tmpMap=object_downcast((bb_engine_townMapScreen),c_SMap);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<29>";
	bb_saveandload_AddSettingsPrims(t_file);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<31>";
	t_file.p_AddPrim2("gold",bb_engine_playerGold);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<32>";
	t_file.p_AddPrim2("currentlocation",bb_engine_currentLocation);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<33>";
	t_file.p_AddPrim2("lasttown",bb_engine_lastTown);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<35>";
	t_file.p_AddPrim4("gametriggers",bb_saveandload_SaveStringMap(bb_engine_gameTriggers,"`"));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<36>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<36>";
	var t_=bb_engine_playerCharacters.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<36>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<36>";
		var t_pc=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<37>";
		t_file.p_AddItem(dbg_object(t_pc).m_Name.toLowerCase(),(t_pc.p_SaveStringJSON()));
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<40>";
	if(bb_engine_townMapScreen!=null && ((dbg_object(t_tmpMap).m_map)!=null)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<41>";
		t_tmp=c_JSONObject.m_new.call(new c_JSONObject);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<42>";
		t_tmp.p_AddPrim4("name",dbg_object(dbg_object(t_tmpMap).m_map).m_name);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<43>";
		t_tmp.p_AddPrim2("x",dbg_object(t_tmpMap).m_x);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<44>";
		t_tmp.p_AddPrim2("y",dbg_object(t_tmpMap).m_y);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<45>";
		t_file.p_AddItem("current_map",(t_tmp));
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<48>";
	print(t_file.p_ToJSONString());
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/saveandload.monkey<49>";
	var t_2=t_file.p_ToJSONString();
	pop_err();
	return t_2;
}
function c_DMonster(){
	c_DCharacter.call(this);
}
c_DMonster.prototype=extend_class(c_DCharacter);
c_DMonster.prototype.p_Draw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<454>";
	c_DCharacter.prototype.p_Draw.call(this);
	pop_err();
}
c_DMonster.prototype.p_Draw2=function(t_xx,t_yy){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<458>";
	c_GHealthDrawer.m_Draw(t_xx+this.m_img.p_Width()+4,t_yy,(this.m_HP)/(this.m_maxHP),this.m_img.p_Height()+2);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<459>";
	if(this.m_HP==0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<460>";
		bb_graphics_DrawImage2(this.m_img,(t_xx),(t_yy+this.m_img.p_Width()),90.0,1.0,1.0,this.m_frame);
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<462>";
		bb_graphics_DrawImage(this.m_img,(t_xx),(t_yy),this.m_frame);
	}
	pop_err();
}
c_DMonster.m_new=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<452>";
	c_DCharacter.m_new2.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/character.monkey<452>";
	pop_err();
	return this;
}
function c_List5(){
	Object.call(this);
	this.m__head=(c_HeadNode5.m_new.call(new c_HeadNode5));
}
c_List5.m_new=function(){
	push_err();
	pop_err();
	return this;
}
c_List5.prototype.p_AddLast5=function(t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<108>";
	var t_=c_Node10.m_new.call(new c_Node10,this.m__head,dbg_object(this.m__head).m__pred,t_data);
	pop_err();
	return t_;
}
c_List5.m_new2=function(t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	var t_=t_data;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	var t_2=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	while(t_2<t_.length){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
		var t_t=dbg_array(t_,t_2)[dbg_index];
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
		t_2=t_2+1;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<14>";
		this.p_AddLast5(t_t);
	}
	pop_err();
	return this;
}
c_List5.prototype.p_Clear=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<36>";
	dbg_object(this.m__head).m__succ=this.m__head;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<37>";
	dbg_object(this.m__head).m__pred=this.m__head;
	pop_err();
	return 0;
}
c_List5.prototype.p_ObjectEnumerator=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<186>";
	var t_=c_Enumerator4.m_new.call(new c_Enumerator4,this);
	pop_err();
	return t_;
}
c_List5.prototype.p_IsEmpty=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<50>";
	var t_=dbg_object(this.m__head).m__succ==this.m__head;
	pop_err();
	return t_;
}
c_List5.prototype.p_First=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<73>";
	if(this.p_IsEmpty()){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<73>";
		error("Illegal operation on empty list");
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<75>";
	pop_err();
	return dbg_object(dbg_object(this.m__head).m__succ).m__data;
}
c_List5.prototype.p_Count=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<41>";
	var t_n=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<41>";
	var t_node=dbg_object(this.m__head).m__succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<42>";
	while(t_node!=this.m__head){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<43>";
		t_node=dbg_object(t_node).m__succ;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<44>";
		t_n+=1;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<46>";
	pop_err();
	return t_n;
}
c_List5.prototype.p_Equals4=function(t_lhs,t_rhs){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<28>";
	var t_=t_lhs==t_rhs;
	pop_err();
	return t_;
}
c_List5.prototype.p_RemoveEach2=function(t_value){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<151>";
	var t_node=dbg_object(this.m__head).m__succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<152>";
	while(t_node!=this.m__head){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<153>";
		var t_succ=dbg_object(t_node).m__succ;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<154>";
		if(this.p_Equals4(dbg_object(t_node).m__data,t_value)){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<154>";
			t_node.p_Remove();
		}
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<155>";
		t_node=t_succ;
	}
	pop_err();
	return 0;
}
c_List5.prototype.p_ToArray=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<19>";
	var t_arr=new_object_array(this.p_Count());
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<19>";
	var t_i=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<20>";
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<20>";
	var t_=this.p_ObjectEnumerator();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<20>";
	while(t_.p_HasNext()){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<20>";
		var t_t=t_.p_NextObject();
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<21>";
		dbg_array(t_arr,t_i)[dbg_index]=t_t;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<22>";
		t_i+=1;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<24>";
	pop_err();
	return t_arr;
}
function c_Node10(){
	Object.call(this);
	this.m__succ=null;
	this.m__pred=null;
	this.m__data=null;
}
c_Node10.m_new=function(t_succ,t_pred,t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<261>";
	this.m__succ=t_succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<262>";
	this.m__pred=t_pred;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<263>";
	dbg_object(this.m__succ).m__pred=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<264>";
	dbg_object(this.m__pred).m__succ=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<265>";
	this.m__data=t_data;
	pop_err();
	return this;
}
c_Node10.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<258>";
	pop_err();
	return this;
}
c_Node10.prototype.p_Remove=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<274>";
	if(dbg_object(this.m__succ).m__pred!=this){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<274>";
		error("Illegal operation on removed node");
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<276>";
	dbg_object(this.m__succ).m__pred=this.m__pred;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<277>";
	dbg_object(this.m__pred).m__succ=this.m__succ;
	pop_err();
	return 0;
}
function c_HeadNode5(){
	c_Node10.call(this);
}
c_HeadNode5.prototype=extend_class(c_Node10);
c_HeadNode5.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<310>";
	c_Node10.m_new2.call(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<311>";
	this.m__succ=(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<312>";
	this.m__pred=(this);
	pop_err();
	return this;
}
function c_GEffect(){
	Object.call(this);
	this.m_img=null;
	this.m_lastMS=0;
	this.m_speed=250;
	this.m_frame=0;
	this.m_x=0;
	this.m_y=0;
}
c_GEffect.m_effectList=null;
c_GEffect.prototype.p_Update=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<224>";
	if(!((this.m_img)!=null)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<224>";
		c_GEffect.m_effectList.p_RemoveEach3(this);
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<226>";
	if(bb_app_Millisecs()>this.m_lastMS){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<227>";
		this.m_lastMS=bb_app_Millisecs()+this.m_speed;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<228>";
		this.m_frame+=1;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<229>";
		if(this.m_frame==this.m_img.p_Frames()){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<229>";
			c_GEffect.m_effectList.p_RemoveEach3(this);
		}
	}
	pop_err();
}
c_GEffect.m_UpdateAll=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<204>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<204>";
	var t_=c_GEffect.m_effectList.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<204>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<204>";
		var t_eft=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<205>";
		t_eft.p_Update();
	}
	pop_err();
	return 0;
}
c_GEffect.m_new=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<194>";
	pop_err();
	return this;
}
c_GEffect.m_Create=function(t_img,t_x,t_y,t_speed){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<210>";
	var t_eft=c_GEffect.m_new.call(new c_GEffect);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<211>";
	dbg_object(t_eft).m_speed=t_speed;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<212>";
	dbg_object(t_eft).m_img=t_img;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<213>";
	dbg_object(t_eft).m_x=t_x;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<214>";
	dbg_object(t_eft).m_y=t_y;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<215>";
	c_GEffect.m_effectList.p_AddLast6(t_eft);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<216>";
	pop_err();
	return t_eft;
}
c_GEffect.prototype.p_Draw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<234>";
	if(!((this.m_img)!=null)){
		pop_err();
		return;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<236>";
	bb_graphics_DrawImage(this.m_img,(this.m_x),(this.m_y),this.m_frame);
	pop_err();
}
c_GEffect.m_DrawAll=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<198>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<198>";
	var t_=c_GEffect.m_effectList.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<198>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<198>";
		var t_eft=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/gui.monkey<199>";
		t_eft.p_Draw();
	}
	pop_err();
	return 0;
}
function c_Enumerator4(){
	Object.call(this);
	this.m__list=null;
	this.m__curr=null;
}
c_Enumerator4.m_new=function(t_list){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<326>";
	this.m__list=t_list;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<327>";
	this.m__curr=dbg_object(dbg_object(t_list).m__head).m__succ;
	pop_err();
	return this;
}
c_Enumerator4.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<323>";
	pop_err();
	return this;
}
c_Enumerator4.prototype.p_HasNext=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<331>";
	while(dbg_object(dbg_object(this.m__curr).m__succ).m__pred!=this.m__curr){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<332>";
		this.m__curr=dbg_object(this.m__curr).m__succ;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<334>";
	var t_=this.m__curr!=dbg_object(this.m__list).m__head;
	pop_err();
	return t_;
}
c_Enumerator4.prototype.p_NextObject=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<338>";
	var t_data=dbg_object(this.m__curr).m__data;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<339>";
	this.m__curr=dbg_object(this.m__curr).m__succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<340>";
	pop_err();
	return t_data;
}
function c_modes2(){
	Object.call(this);
}
c_modes2.m_current=0;
function c_List6(){
	Object.call(this);
	this.m__head=(c_HeadNode6.m_new.call(new c_HeadNode6));
}
c_List6.m_new=function(){
	push_err();
	pop_err();
	return this;
}
c_List6.prototype.p_AddLast6=function(t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<108>";
	var t_=c_Node11.m_new.call(new c_Node11,this.m__head,dbg_object(this.m__head).m__pred,t_data);
	pop_err();
	return t_;
}
c_List6.m_new2=function(t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	var t_=t_data;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	var t_2=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	while(t_2<t_.length){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
		var t_t=dbg_array(t_,t_2)[dbg_index];
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
		t_2=t_2+1;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<14>";
		this.p_AddLast6(t_t);
	}
	pop_err();
	return this;
}
c_List6.prototype.p_ObjectEnumerator=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<186>";
	var t_=c_Enumerator5.m_new.call(new c_Enumerator5,this);
	pop_err();
	return t_;
}
c_List6.prototype.p_Equals5=function(t_lhs,t_rhs){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<28>";
	var t_=t_lhs==t_rhs;
	pop_err();
	return t_;
}
c_List6.prototype.p_RemoveEach3=function(t_value){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<151>";
	var t_node=dbg_object(this.m__head).m__succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<152>";
	while(t_node!=this.m__head){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<153>";
		var t_succ=dbg_object(t_node).m__succ;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<154>";
		if(this.p_Equals5(dbg_object(t_node).m__data,t_value)){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<154>";
			t_node.p_Remove();
		}
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<155>";
		t_node=t_succ;
	}
	pop_err();
	return 0;
}
c_List6.prototype.p_Contains4=function(t_value){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<54>";
	var t_node=dbg_object(this.m__head).m__succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<55>";
	while(t_node!=this.m__head){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<56>";
		if(this.p_Equals5(dbg_object(t_node).m__data,t_value)){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<56>";
			pop_err();
			return true;
		}
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<57>";
		t_node=dbg_object(t_node).m__succ;
	}
	pop_err();
	return false;
}
function c_Node11(){
	Object.call(this);
	this.m__succ=null;
	this.m__pred=null;
	this.m__data=null;
}
c_Node11.m_new=function(t_succ,t_pred,t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<261>";
	this.m__succ=t_succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<262>";
	this.m__pred=t_pred;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<263>";
	dbg_object(this.m__succ).m__pred=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<264>";
	dbg_object(this.m__pred).m__succ=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<265>";
	this.m__data=t_data;
	pop_err();
	return this;
}
c_Node11.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<258>";
	pop_err();
	return this;
}
c_Node11.prototype.p_Remove=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<274>";
	if(dbg_object(this.m__succ).m__pred!=this){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<274>";
		error("Illegal operation on removed node");
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<276>";
	dbg_object(this.m__succ).m__pred=this.m__pred;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<277>";
	dbg_object(this.m__pred).m__succ=this.m__succ;
	pop_err();
	return 0;
}
function c_HeadNode6(){
	c_Node11.call(this);
}
c_HeadNode6.prototype=extend_class(c_Node11);
c_HeadNode6.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<310>";
	c_Node11.m_new2.call(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<311>";
	this.m__succ=(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<312>";
	this.m__pred=(this);
	pop_err();
	return this;
}
function c_Enumerator5(){
	Object.call(this);
	this.m__list=null;
	this.m__curr=null;
}
c_Enumerator5.m_new=function(t_list){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<326>";
	this.m__list=t_list;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<327>";
	this.m__curr=dbg_object(dbg_object(t_list).m__head).m__succ;
	pop_err();
	return this;
}
c_Enumerator5.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<323>";
	pop_err();
	return this;
}
c_Enumerator5.prototype.p_HasNext=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<331>";
	while(dbg_object(dbg_object(this.m__curr).m__succ).m__pred!=this.m__curr){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<332>";
		this.m__curr=dbg_object(this.m__curr).m__succ;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<334>";
	var t_=this.m__curr!=dbg_object(this.m__list).m__head;
	pop_err();
	return t_;
}
c_Enumerator5.prototype.p_NextObject=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<338>";
	var t_data=dbg_object(this.m__curr).m__data;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<339>";
	this.m__curr=dbg_object(this.m__curr).m__succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<340>";
	pop_err();
	return t_data;
}
function bb_random_Rnd(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/random.monkey<21>";
	bb_random_Seed=bb_random_Seed*1664525+1013904223|0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/random.monkey<22>";
	var t_=(bb_random_Seed>>8&16777215)/16777216.0;
	pop_err();
	return t_;
}
function bb_random_Rnd2(t_low,t_high){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/random.monkey<30>";
	var t_=bb_random_Rnd3(t_high-t_low)+t_low;
	pop_err();
	return t_;
}
function bb_random_Rnd3(t_range){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/random.monkey<26>";
	var t_=bb_random_Rnd()*t_range;
	pop_err();
	return t_;
}
function bb_combat_GetSpellPower(t_spellName,t_combatTarget,t_attacker,t_max){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<28>";
	var t_spellPower=((dbg_object(t_attacker).m_KnowledgeBuffed/4)|0)+1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<29>";
	var t_1=t_spellName.toLowerCase();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<32>";
	if(t_1=="smoke"){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<33>";
		t_spellPower*=5;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<35>";
		t_spellPower+=((dbg_object(t_attacker).m_LuckBuffed/2)|0);
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<40>";
		if(t_1=="ensnare"){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<41>";
			t_spellPower*=5;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<43>";
			t_spellPower+=((dbg_object(t_attacker).m_LuckBuffed/2)|0);
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<48>";
			if(t_1=="focus"){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<49>";
				t_spellPower*=2;
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<51>";
				t_spellPower+=((dbg_object(t_attacker).m_LuckBuffed/2)|0);
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<55>";
				if(t_1=="terror"){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<58>";
					t_spellPower+=((dbg_object(t_attacker).m_LuckBuffed/2)|0);
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<63>";
					if(t_1=="boost"){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<64>";
						t_spellPower*=2;
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<66>";
						t_spellPower+=((dbg_object(t_attacker).m_LuckBuffed/2)|0);
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<70>";
						if(t_1=="posion"){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<73>";
							t_spellPower+=((dbg_object(t_attacker).m_LuckBuffed/2)|0);
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<80>";
							if(t_1=="heal"){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<81>";
								t_spellPower=t_spellPower*3+dbg_object(t_attacker).m_KnowledgeBuffed;
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<83>";
								t_spellPower+=((dbg_object(t_attacker).m_LuckBuffed/3)|0);
							}else{
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<87>";
								if(t_1=="cure"){
								}else{
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<90>";
									if(t_1=="aero"){
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<91>";
										t_spellPower+=((dbg_object(t_attacker).m_KnowledgeBuffed/1)|0);
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<92>";
										if(t_max){
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<93>";
											t_spellPower+=((dbg_object(t_attacker).m_LuckBuffed/3)|0);
										}else{
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<95>";
											t_spellPower+=((((bb_random_Rnd3(dbg_object(t_attacker).m_LuckBuffed))|0)/3)|0);
										}
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<97>";
										if(t_combatTarget!=null){
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<98>";
											var t_2=t_combatTarget.p_IsWeak("aero");
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<99>";
											if(t_2==1){
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<100>";
												t_spellPower*=2;
											}else{
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<101>";
												if(t_2==-1){
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<102>";
													t_spellPower=((t_spellPower/2)|0);
												}
											}
										}
									}else{
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<106>";
										if(t_1=="slash"){
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<107>";
											t_spellPower=((t_spellPower/2)|0);
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<108>";
											t_spellPower+=((dbg_object(t_attacker).m_KnowledgeBuffed/1)|0);
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<109>";
											if(t_max){
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<110>";
												t_spellPower+=((dbg_object(t_attacker).m_LuckBuffed/3)|0);
											}else{
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<112>";
												t_spellPower+=((((bb_random_Rnd3(dbg_object(t_attacker).m_LuckBuffed))|0)/3)|0);
											}
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<114>";
											if(t_combatTarget!=null){
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<115>";
												var t_3=t_combatTarget.p_IsWeak("attack");
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<116>";
												if(t_3==1){
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<117>";
													t_spellPower*=2;
												}else{
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<118>";
													if(t_3==-1){
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<119>";
														t_spellPower=((t_spellPower/2)|0);
													}
												}
											}
										}else{
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<123>";
											if(t_1=="fire"){
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<124>";
												t_spellPower+=((dbg_object(t_attacker).m_KnowledgeBuffed/1)|0);
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<125>";
												if(t_max){
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<126>";
													t_spellPower+=((dbg_object(t_attacker).m_LuckBuffed/3)|0);
												}else{
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<128>";
													t_spellPower+=((((bb_random_Rnd3(dbg_object(t_attacker).m_LuckBuffed))|0)/3)|0);
												}
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<130>";
												if(t_combatTarget!=null){
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<131>";
													var t_4=t_combatTarget.p_IsWeak("fire");
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<132>";
													if(t_4==1){
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<133>";
														t_spellPower*=2;
													}else{
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<134>";
														if(t_4==-1){
															err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<135>";
															t_spellPower=((t_spellPower/2)|0);
														}
													}
												}
											}else{
												err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<139>";
												if(t_1=="ice"){
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<140>";
													t_spellPower+=((dbg_object(t_attacker).m_KnowledgeBuffed/1)|0);
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<141>";
													if(t_max){
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<142>";
														t_spellPower+=((dbg_object(t_attacker).m_LuckBuffed/3)|0);
													}else{
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<144>";
														t_spellPower+=((((bb_random_Rnd3(dbg_object(t_attacker).m_LuckBuffed))|0)/3)|0);
													}
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<146>";
													if(t_combatTarget!=null){
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<147>";
														var t_5=t_combatTarget.p_IsWeak("ice");
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<148>";
														if(t_5==1){
															err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<149>";
															t_spellPower*=2;
														}else{
															err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<150>";
															if(t_5==-1){
																err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<151>";
																t_spellPower=((t_spellPower/2)|0);
															}
														}
													}
												}else{
													err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<155>";
													if(t_1=="rock"){
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<156>";
														t_spellPower+=((dbg_object(t_attacker).m_KnowledgeBuffed/1)|0);
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<157>";
														if(t_max){
															err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<158>";
															t_spellPower+=((dbg_object(t_attacker).m_LuckBuffed/3)|0);
														}else{
															err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<160>";
															t_spellPower+=((((bb_random_Rnd3(dbg_object(t_attacker).m_LuckBuffed))|0)/3)|0);
														}
														err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<162>";
														if(t_combatTarget!=null){
															err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<163>";
															var t_6=t_combatTarget.p_IsWeak("rock");
															err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<164>";
															if(t_6==1){
																err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<165>";
																t_spellPower*=2;
															}else{
																err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<166>";
																if(t_6==-1){
																	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<167>";
																	t_spellPower=((t_spellPower/2)|0);
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<172>";
	pop_err();
	return t_spellPower;
}
function bb_combat_GetSpellDuration(t_spellName,t_attacker){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<176>";
	var t_7=t_spellName.toLowerCase();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<179>";
	if(t_7=="smoke"){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<180>";
		var t_=3+((dbg_object(t_attacker).m_KnowledgeBuffed/20)|0);
		pop_err();
		return t_;
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<181>";
		if(t_7=="ensnare"){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<182>";
			var t_2=3+((dbg_object(t_attacker).m_KnowledgeBuffed/20)|0);
			pop_err();
			return t_2;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<184>";
			if(t_7=="focus"){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<185>";
				var t_3=3+((dbg_object(t_attacker).m_KnowledgeBuffed/20)|0);
				pop_err();
				return t_3;
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<186>";
				if(t_7=="terror"){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<187>";
					var t_4=3+((dbg_object(t_attacker).m_KnowledgeBuffed/20)|0);
					pop_err();
					return t_4;
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<189>";
					if(t_7=="boost"){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<190>";
						var t_5=3+((dbg_object(t_attacker).m_KnowledgeBuffed/20)|0);
						pop_err();
						return t_5;
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<192>";
						if(t_7=="posion"){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<193>";
							var t_6=3+((dbg_object(t_attacker).m_KnowledgeBuffed/20)|0);
							pop_err();
							return t_6;
						}
					}
				}
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<197>";
	pop_err();
	return 0;
}
function bb_math_Abs(t_x){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/math.monkey<46>";
	if(t_x>=0){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/math.monkey<46>";
		pop_err();
		return t_x;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/math.monkey<47>";
	var t_=-t_x;
	pop_err();
	return t_;
}
function bb_math_Abs2(t_x){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/math.monkey<73>";
	if(t_x>=0.0){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/math.monkey<73>";
		pop_err();
		return t_x;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/math.monkey<74>";
	var t_=-t_x;
	pop_err();
	return t_;
}
function bb_engine_ConvertToSpecialID(t_ID,t_type){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<218>";
	var t_=t_ID+128-1+t_type*16;
	pop_err();
	return t_;
}
function bb_input_KeyDown(t_key){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/input.monkey<40>";
	var t_=((bb_input_device.p_KeyDown(t_key))?1:0);
	pop_err();
	return t_;
}
function c_modes3(){
	Object.call(this);
}
c_modes3.m_current=0;
function c_GameMap(){
	Object.call(this);
	this.m_locations=c_List7.m_new.call(new c_List7);
	this.m_location_array=[];
}
c_GameMap.m_new=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/map_file.monkey<6>";
	pop_err();
	return this;
}
c_GameMap.prototype.p_Setup_Wizard=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/map_file.monkey<12>";
	this.m_locations.p_AddLast7(c_map_point.m_new.call(new c_map_point,44,99,"Ninja Village"));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/map_file.monkey<13>";
	this.m_locations.p_AddLast7(c_map_point.m_new.call(new c_map_point,68,83,"Danger Forest"));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/map_file.monkey<14>";
	this.m_locations.p_AddLast7(c_map_point.m_new.call(new c_map_point,50,79,"Crazy Mines"));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/map_file.monkey<15>";
	this.m_locations.p_AddLast7(c_map_point.m_new.call(new c_map_point,41,58,"Wall City"));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/map_file.monkey<16>";
	this.m_locations.p_AddLast7(c_map_point.m_new.call(new c_map_point,52,41,"Windy Plains"));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/map_file.monkey<17>";
	this.m_locations.p_AddLast7(c_map_point.m_new.call(new c_map_point,75,50,"Smelly Marshes"));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/map_file.monkey<18>";
	this.m_locations.p_AddLast7(c_map_point.m_new.call(new c_map_point,87,29,"Mountaingrad"));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/map_file.monkey<19>";
	this.m_locations.p_AddLast7(c_map_point.m_new.call(new c_map_point,95,57,"Krugdor"));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/map_file.monkey<20>";
	this.m_locations.p_AddLast7(c_map_point.m_new.call(new c_map_point,122,36,"The Tower"));
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/map_file.monkey<21>";
	this.m_location_array=this.m_locations.p_ToArray();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/map_file.monkey<23>";
	print(String(dbg_object(dbg_array(this.m_location_array,0)[dbg_index]).m_x)+", "+String(dbg_object(dbg_array(this.m_location_array,0)[dbg_index]).m_y)+", "+dbg_object(dbg_array(this.m_location_array,0)[dbg_index]).m_name);
	pop_err();
}
var bb_map_file_currentMap=null;
function c_map_point(){
	Object.call(this);
	this.m_x=0;
	this.m_y=0;
	this.m_name="";
}
c_map_point.m_new=function(t_xx,t_yy,t_nn){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/map_file.monkey<32>";
	this.m_x=t_xx;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/map_file.monkey<33>";
	this.m_y=t_yy;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/map_file.monkey<34>";
	this.m_name=t_nn;
	pop_err();
	return this;
}
c_map_point.m_new2=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/map_file.monkey<27>";
	pop_err();
	return this;
}
function c_List7(){
	Object.call(this);
	this.m__head=(c_HeadNode7.m_new.call(new c_HeadNode7));
}
c_List7.m_new=function(){
	push_err();
	pop_err();
	return this;
}
c_List7.prototype.p_AddLast7=function(t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<108>";
	var t_=c_Node12.m_new.call(new c_Node12,this.m__head,dbg_object(this.m__head).m__pred,t_data);
	pop_err();
	return t_;
}
c_List7.m_new2=function(t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	var t_=t_data;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	var t_2=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	while(t_2<t_.length){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
		var t_t=dbg_array(t_,t_2)[dbg_index];
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
		t_2=t_2+1;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<14>";
		this.p_AddLast7(t_t);
	}
	pop_err();
	return this;
}
c_List7.prototype.p_Count=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<41>";
	var t_n=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<41>";
	var t_node=dbg_object(this.m__head).m__succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<42>";
	while(t_node!=this.m__head){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<43>";
		t_node=dbg_object(t_node).m__succ;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<44>";
		t_n+=1;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<46>";
	pop_err();
	return t_n;
}
c_List7.prototype.p_ObjectEnumerator=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<186>";
	var t_=c_Enumerator6.m_new.call(new c_Enumerator6,this);
	pop_err();
	return t_;
}
c_List7.prototype.p_ToArray=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<19>";
	var t_arr=new_object_array(this.p_Count());
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<19>";
	var t_i=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<20>";
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<20>";
	var t_=this.p_ObjectEnumerator();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<20>";
	while(t_.p_HasNext()){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<20>";
		var t_t=t_.p_NextObject();
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<21>";
		dbg_array(t_arr,t_i)[dbg_index]=t_t;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<22>";
		t_i+=1;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<24>";
	pop_err();
	return t_arr;
}
function c_Node12(){
	Object.call(this);
	this.m__succ=null;
	this.m__pred=null;
	this.m__data=null;
}
c_Node12.m_new=function(t_succ,t_pred,t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<261>";
	this.m__succ=t_succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<262>";
	this.m__pred=t_pred;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<263>";
	dbg_object(this.m__succ).m__pred=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<264>";
	dbg_object(this.m__pred).m__succ=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<265>";
	this.m__data=t_data;
	pop_err();
	return this;
}
c_Node12.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<258>";
	pop_err();
	return this;
}
function c_HeadNode7(){
	c_Node12.call(this);
}
c_HeadNode7.prototype=extend_class(c_Node12);
c_HeadNode7.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<310>";
	c_Node12.m_new2.call(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<311>";
	this.m__succ=(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<312>";
	this.m__pred=(this);
	pop_err();
	return this;
}
function c_Enumerator6(){
	Object.call(this);
	this.m__list=null;
	this.m__curr=null;
}
c_Enumerator6.m_new=function(t_list){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<326>";
	this.m__list=t_list;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<327>";
	this.m__curr=dbg_object(dbg_object(t_list).m__head).m__succ;
	pop_err();
	return this;
}
c_Enumerator6.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<323>";
	pop_err();
	return this;
}
c_Enumerator6.prototype.p_HasNext=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<331>";
	while(dbg_object(dbg_object(this.m__curr).m__succ).m__pred!=this.m__curr){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<332>";
		this.m__curr=dbg_object(this.m__curr).m__succ;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<334>";
	var t_=this.m__curr!=dbg_object(this.m__list).m__head;
	pop_err();
	return t_;
}
c_Enumerator6.prototype.p_NextObject=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<338>";
	var t_data=dbg_object(this.m__curr).m__data;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<339>";
	this.m__curr=dbg_object(this.m__curr).m__succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<340>";
	pop_err();
	return t_data;
}
function c_List8(){
	Object.call(this);
	this.m__head=(c_HeadNode8.m_new.call(new c_HeadNode8));
}
c_List8.m_new=function(){
	push_err();
	pop_err();
	return this;
}
c_List8.prototype.p_AddLast8=function(t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<108>";
	var t_=c_Node13.m_new.call(new c_Node13,this.m__head,dbg_object(this.m__head).m__pred,t_data);
	pop_err();
	return t_;
}
c_List8.m_new2=function(t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	var t_=t_data;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	var t_2=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	while(t_2<t_.length){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
		var t_t=dbg_array(t_,t_2)[dbg_index];
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
		t_2=t_2+1;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<14>";
		this.p_AddLast8(t_t);
	}
	pop_err();
	return this;
}
c_List8.prototype.p_Count=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<41>";
	var t_n=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<41>";
	var t_node=dbg_object(this.m__head).m__succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<42>";
	while(t_node!=this.m__head){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<43>";
		t_node=dbg_object(t_node).m__succ;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<44>";
		t_n+=1;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<46>";
	pop_err();
	return t_n;
}
c_List8.prototype.p_ObjectEnumerator=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<186>";
	var t_=c_Enumerator7.m_new.call(new c_Enumerator7,this);
	pop_err();
	return t_;
}
function c_Node13(){
	Object.call(this);
	this.m__succ=null;
	this.m__pred=null;
	this.m__data=null;
}
c_Node13.m_new=function(t_succ,t_pred,t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<261>";
	this.m__succ=t_succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<262>";
	this.m__pred=t_pred;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<263>";
	dbg_object(this.m__succ).m__pred=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<264>";
	dbg_object(this.m__pred).m__succ=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<265>";
	this.m__data=t_data;
	pop_err();
	return this;
}
c_Node13.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<258>";
	pop_err();
	return this;
}
function c_HeadNode8(){
	c_Node13.call(this);
}
c_HeadNode8.prototype=extend_class(c_Node13);
c_HeadNode8.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<310>";
	c_Node13.m_new2.call(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<311>";
	this.m__succ=(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<312>";
	this.m__pred=(this);
	pop_err();
	return this;
}
var bb_engine_playerItems=null;
function c_Enumerator7(){
	Object.call(this);
	this.m__list=null;
	this.m__curr=null;
}
c_Enumerator7.m_new=function(t_list){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<326>";
	this.m__list=t_list;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<327>";
	this.m__curr=dbg_object(dbg_object(t_list).m__head).m__succ;
	pop_err();
	return this;
}
c_Enumerator7.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<323>";
	pop_err();
	return this;
}
c_Enumerator7.prototype.p_HasNext=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<331>";
	while(dbg_object(dbg_object(this.m__curr).m__succ).m__pred!=this.m__curr){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<332>";
		this.m__curr=dbg_object(this.m__curr).m__succ;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<334>";
	var t_=this.m__curr!=dbg_object(this.m__list).m__head;
	pop_err();
	return t_;
}
c_Enumerator7.prototype.p_NextObject=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<338>";
	var t_data=dbg_object(this.m__curr).m__data;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<339>";
	this.m__curr=dbg_object(this.m__curr).m__succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<340>";
	pop_err();
	return t_data;
}
function c_modes4(){
	Object.call(this);
}
c_modes4.m_current=0;
function c_Map6(){
	Object.call(this);
	this.m_root=null;
}
c_Map6.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<7>";
	pop_err();
	return this;
}
c_Map6.prototype.p_Compare=function(t_lhs,t_rhs){
}
c_Map6.prototype.p_FindNode=function(t_key){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<157>";
	var t_node=this.m_root;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<159>";
	while((t_node)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<160>";
		var t_cmp=this.p_Compare(t_key,dbg_object(t_node).m_key);
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<161>";
		if(t_cmp>0){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<162>";
			t_node=dbg_object(t_node).m_right;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<163>";
			if(t_cmp<0){
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<164>";
				t_node=dbg_object(t_node).m_left;
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<166>";
				pop_err();
				return t_node;
			}
		}
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<169>";
	pop_err();
	return t_node;
}
c_Map6.prototype.p_Contains=function(t_key){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<25>";
	var t_=this.p_FindNode(t_key)!=null;
	pop_err();
	return t_;
}
c_Map6.prototype.p_Get=function(t_key){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<101>";
	var t_node=this.p_FindNode(t_key);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<102>";
	if((t_node)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<102>";
		pop_err();
		return dbg_object(t_node).m_value;
	}
	pop_err();
	return null;
}
c_Map6.prototype.p_RotateLeft6=function(t_node){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<251>";
	var t_child=dbg_object(t_node).m_right;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<252>";
	dbg_object(t_node).m_right=dbg_object(t_child).m_left;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<253>";
	if((dbg_object(t_child).m_left)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<254>";
		dbg_object(dbg_object(t_child).m_left).m_parent=t_node;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<256>";
	dbg_object(t_child).m_parent=dbg_object(t_node).m_parent;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<257>";
	if((dbg_object(t_node).m_parent)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<258>";
		if(t_node==dbg_object(dbg_object(t_node).m_parent).m_left){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<259>";
			dbg_object(dbg_object(t_node).m_parent).m_left=t_child;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<261>";
			dbg_object(dbg_object(t_node).m_parent).m_right=t_child;
		}
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<264>";
		this.m_root=t_child;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<266>";
	dbg_object(t_child).m_left=t_node;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<267>";
	dbg_object(t_node).m_parent=t_child;
	pop_err();
	return 0;
}
c_Map6.prototype.p_RotateRight6=function(t_node){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<271>";
	var t_child=dbg_object(t_node).m_left;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<272>";
	dbg_object(t_node).m_left=dbg_object(t_child).m_right;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<273>";
	if((dbg_object(t_child).m_right)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<274>";
		dbg_object(dbg_object(t_child).m_right).m_parent=t_node;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<276>";
	dbg_object(t_child).m_parent=dbg_object(t_node).m_parent;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<277>";
	if((dbg_object(t_node).m_parent)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<278>";
		if(t_node==dbg_object(dbg_object(t_node).m_parent).m_right){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<279>";
			dbg_object(dbg_object(t_node).m_parent).m_right=t_child;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<281>";
			dbg_object(dbg_object(t_node).m_parent).m_left=t_child;
		}
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<284>";
		this.m_root=t_child;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<286>";
	dbg_object(t_child).m_right=t_node;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<287>";
	dbg_object(t_node).m_parent=t_child;
	pop_err();
	return 0;
}
c_Map6.prototype.p_InsertFixup6=function(t_node){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<212>";
	while(((dbg_object(t_node).m_parent)!=null) && dbg_object(dbg_object(t_node).m_parent).m_color==-1 && ((dbg_object(dbg_object(t_node).m_parent).m_parent)!=null)){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<213>";
		if(dbg_object(t_node).m_parent==dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_left){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<214>";
			var t_uncle=dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_right;
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<215>";
			if(((t_uncle)!=null) && dbg_object(t_uncle).m_color==-1){
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<216>";
				dbg_object(dbg_object(t_node).m_parent).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<217>";
				dbg_object(t_uncle).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<218>";
				dbg_object(dbg_object(t_uncle).m_parent).m_color=-1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<219>";
				t_node=dbg_object(t_uncle).m_parent;
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<221>";
				if(t_node==dbg_object(dbg_object(t_node).m_parent).m_right){
					err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<222>";
					t_node=dbg_object(t_node).m_parent;
					err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<223>";
					this.p_RotateLeft6(t_node);
				}
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<225>";
				dbg_object(dbg_object(t_node).m_parent).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<226>";
				dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_color=-1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<227>";
				this.p_RotateRight6(dbg_object(dbg_object(t_node).m_parent).m_parent);
			}
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<230>";
			var t_uncle2=dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_left;
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<231>";
			if(((t_uncle2)!=null) && dbg_object(t_uncle2).m_color==-1){
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<232>";
				dbg_object(dbg_object(t_node).m_parent).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<233>";
				dbg_object(t_uncle2).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<234>";
				dbg_object(dbg_object(t_uncle2).m_parent).m_color=-1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<235>";
				t_node=dbg_object(t_uncle2).m_parent;
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<237>";
				if(t_node==dbg_object(dbg_object(t_node).m_parent).m_left){
					err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<238>";
					t_node=dbg_object(t_node).m_parent;
					err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<239>";
					this.p_RotateRight6(t_node);
				}
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<241>";
				dbg_object(dbg_object(t_node).m_parent).m_color=1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<242>";
				dbg_object(dbg_object(dbg_object(t_node).m_parent).m_parent).m_color=-1;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<243>";
				this.p_RotateLeft6(dbg_object(dbg_object(t_node).m_parent).m_parent);
			}
		}
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<247>";
	dbg_object(this.m_root).m_color=1;
	pop_err();
	return 0;
}
c_Map6.prototype.p_Set7=function(t_key,t_value){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<29>";
	var t_node=this.m_root;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<30>";
	var t_parent=null;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<30>";
	var t_cmp=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<32>";
	while((t_node)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<33>";
		t_parent=t_node;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<34>";
		t_cmp=this.p_Compare(t_key,dbg_object(t_node).m_key);
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<35>";
		if(t_cmp>0){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<36>";
			t_node=dbg_object(t_node).m_right;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<37>";
			if(t_cmp<0){
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<38>";
				t_node=dbg_object(t_node).m_left;
			}else{
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<40>";
				dbg_object(t_node).m_value=t_value;
				err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<41>";
				pop_err();
				return false;
			}
		}
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<45>";
	t_node=c_Node14.m_new.call(new c_Node14,t_key,t_value,-1,t_parent);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<47>";
	if((t_parent)!=null){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<48>";
		if(t_cmp>0){
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<49>";
			dbg_object(t_parent).m_right=t_node;
		}else{
			err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<51>";
			dbg_object(t_parent).m_left=t_node;
		}
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<53>";
		this.p_InsertFixup6(t_node);
	}else{
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<55>";
		this.m_root=t_node;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<57>";
	pop_err();
	return true;
}
function c_StringMap5(){
	c_Map6.call(this);
}
c_StringMap5.prototype=extend_class(c_Map6);
c_StringMap5.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<551>";
	c_Map6.m_new.call(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<551>";
	pop_err();
	return this;
}
c_StringMap5.prototype.p_Compare=function(t_lhs,t_rhs){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<554>";
	var t_=string_compare(t_lhs,t_rhs);
	pop_err();
	return t_;
}
function c_Node14(){
	Object.call(this);
	this.m_key="";
	this.m_right=null;
	this.m_left=null;
	this.m_value=null;
	this.m_color=0;
	this.m_parent=null;
}
c_Node14.m_new=function(t_key,t_value,t_color,t_parent){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<364>";
	dbg_object(this).m_key=t_key;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<365>";
	dbg_object(this).m_value=t_value;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<366>";
	dbg_object(this).m_color=t_color;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<367>";
	dbg_object(this).m_parent=t_parent;
	pop_err();
	return this;
}
c_Node14.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<361>";
	pop_err();
	return this;
}
function bb_app_LoadString(t_path){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/app.monkey<220>";
	var t_=bb_app__game.LoadString(bb_data_FixDataPath(t_path));
	pop_err();
	return t_;
}
function c_DBoundingBox(){
	c_GRect.call(this);
	this.m_name="";
}
c_DBoundingBox.prototype=extend_class(c_GRect);
c_DBoundingBox.m_new=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<186>";
	c_GRect.m_new2.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<186>";
	pop_err();
	return this;
}
function c_List9(){
	Object.call(this);
	this.m__head=(c_HeadNode9.m_new.call(new c_HeadNode9));
}
c_List9.m_new=function(){
	push_err();
	pop_err();
	return this;
}
c_List9.prototype.p_AddLast9=function(t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<108>";
	var t_=c_Node15.m_new.call(new c_Node15,this.m__head,dbg_object(this.m__head).m__pred,t_data);
	pop_err();
	return t_;
}
c_List9.m_new2=function(t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	var t_=t_data;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	var t_2=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	while(t_2<t_.length){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
		var t_t=dbg_array(t_,t_2)[dbg_index];
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
		t_2=t_2+1;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<14>";
		this.p_AddLast9(t_t);
	}
	pop_err();
	return this;
}
c_List9.prototype.p_Clear=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<36>";
	dbg_object(this.m__head).m__succ=this.m__head;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<37>";
	dbg_object(this.m__head).m__pred=this.m__head;
	pop_err();
	return 0;
}
c_List9.prototype.p_ObjectEnumerator=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<186>";
	var t_=c_Enumerator8.m_new.call(new c_Enumerator8,this);
	pop_err();
	return t_;
}
function c_Node15(){
	Object.call(this);
	this.m__succ=null;
	this.m__pred=null;
	this.m__data=null;
}
c_Node15.m_new=function(t_succ,t_pred,t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<261>";
	this.m__succ=t_succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<262>";
	this.m__pred=t_pred;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<263>";
	dbg_object(this.m__succ).m__pred=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<264>";
	dbg_object(this.m__pred).m__succ=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<265>";
	this.m__data=t_data;
	pop_err();
	return this;
}
c_Node15.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<258>";
	pop_err();
	return this;
}
function c_HeadNode9(){
	c_Node15.call(this);
}
c_HeadNode9.prototype=extend_class(c_Node15);
c_HeadNode9.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<310>";
	c_Node15.m_new2.call(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<311>";
	this.m__succ=(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<312>";
	this.m__pred=(this);
	pop_err();
	return this;
}
function bb_engine_GetTownId(t_locationId){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/engine.monkey<222>";
	var t_=t_locationId-128+1;
	pop_err();
	return t_;
}
function bb_input_JoyDown(t_button,t_unit){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/mojo/input.monkey<106>";
	var t_=((bb_input_device.p_KeyDown(256|t_unit<<5|t_button))?1:0);
	pop_err();
	return t_;
}
function c_Enumerator8(){
	Object.call(this);
	this.m__list=null;
	this.m__curr=null;
}
c_Enumerator8.m_new=function(t_list){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<326>";
	this.m__list=t_list;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<327>";
	this.m__curr=dbg_object(dbg_object(t_list).m__head).m__succ;
	pop_err();
	return this;
}
c_Enumerator8.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<323>";
	pop_err();
	return this;
}
c_Enumerator8.prototype.p_HasNext=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<331>";
	while(dbg_object(dbg_object(this.m__curr).m__succ).m__pred!=this.m__curr){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<332>";
		this.m__curr=dbg_object(this.m__curr).m__succ;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<334>";
	var t_=this.m__curr!=dbg_object(this.m__list).m__head;
	pop_err();
	return t_;
}
c_Enumerator8.prototype.p_NextObject=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<338>";
	var t_data=dbg_object(this.m__curr).m__data;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<339>";
	this.m__curr=dbg_object(this.m__curr).m__succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<340>";
	pop_err();
	return t_data;
}
function bb_combat_RandomBattle(t_zone){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<18>";
	bb_engine_SwitchScreenTo(bb_engine_combatScreen,true);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<19>";
	var t_cmtScn=object_downcast((bb_engine_combatScreen),c_SCombat);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<21>";
	dbg_object(t_cmtScn).m_enemyList=bb_engine_game.p_Combat_Random(t_zone);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<23>";
	c_GMessageTicker.m_Add(String(dbg_object(t_cmtScn).m_enemyList.p_Count())+" enemies approach!");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/combat.monkey<24>";
	t_cmtScn.p_placeMonsters();
	pop_err();
}
function c_modes5(){
	Object.call(this);
}
c_modes5.m_current=0;
function c_chatScriptItem(){
	Object.call(this);
	this.m_type=0;
	this.m_data=[];
}
c_chatScriptItem.m_new=function(t_tt,t_dd){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<539>";
	this.m_type=t_tt;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<540>";
	this.m_data=t_dd;
	pop_err();
	return this;
}
c_chatScriptItem.m_new2=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<488>";
	pop_err();
	return this;
}
c_chatScriptItem.m_StrToInt=function(t_str){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<501>";
	var t_value=-1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<502>";
	var t_6=t_str.toLowerCase();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<503>";
	if(t_6=="player_talk"){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<503>";
		t_value=1;
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<504>";
		if(t_6=="other_talk"){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<504>";
			t_value=5;
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<505>";
			if(t_6=="option_select"){
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<505>";
				t_value=10;
			}else{
				err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<506>";
				if(t_6=="animation_change"){
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<506>";
					t_value=20;
				}else{
					err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<507>";
					if(t_6=="change_thread"){
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<507>";
						t_value=30;
					}else{
						err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<508>";
						if(t_6=="trigger_check"){
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<508>";
							t_value=40;
						}else{
							err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<509>";
							if(t_6=="trigger_set"){
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<509>";
								t_value=41;
							}else{
								err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<510>";
								if(t_6=="add_object"){
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<510>";
									t_value=50;
								}else{
									err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<511>";
									if(t_6=="scale_object"){
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<511>";
										t_value=51;
									}else{
										err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<512>";
										if(t_6=="place_object"){
											err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<512>";
											t_value=52;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<514>";
	pop_err();
	return t_value;
}
function c_chatScript(){
	Object.call(this);
	this.m_threads=c_List10.m_new.call(new c_List10);
	this.m_currentThread=null;
	this.m_cObjectList=c_List11.m_new.call(new c_List11);
	this.m_highestID=0;
}
c_chatScript.prototype.p_GetThread=function(t_name){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<401>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<401>";
	var t_=this.m_threads.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<401>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<401>";
		var t_co=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<402>";
		if(dbg_object(t_co).m_name.toLowerCase().indexOf(t_name.toLowerCase())!=-1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<403>";
			pop_err();
			return t_co;
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<406>";
	bb_engine_GoNuclear("Can not find chatThread named '"+t_name+"'!");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<407>";
	pop_err();
	return null;
}
c_chatScript.prototype.p_ChangeThread=function(t_name){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<395>";
	this.m_currentThread=this.p_GetThread(t_name);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<396>";
	dbg_object(this.m_currentThread).m_currentSID=-1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<397>";
	bb_engine_NLog("[SCRIPT] Changed to "+t_name,0);
	pop_err();
}
c_chatScript.prototype.p_GetObject=function(t_name){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<443>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<443>";
	var t_=this.m_cObjectList.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<443>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<443>";
		var t_co=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<444>";
		if(dbg_object(t_co).m_name.toLowerCase().indexOf(t_name.toLowerCase())!=-1){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<445>";
			pop_err();
			return t_co;
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<448>";
	bb_engine_GoNuclear("Can not find ChatObject named '"+t_name+"'!");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<449>";
	pop_err();
	return null;
}
c_chatScript.prototype.p_GetObject2=function(t_cid){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<453>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<453>";
	var t_=this.m_cObjectList.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<453>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<453>";
		var t_co=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<454>";
		if(dbg_object(t_co).m_scriptID==t_cid){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<455>";
			pop_err();
			return t_co;
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<458>";
	bb_engine_GoNuclear("Can not find ChatObject with the ID of '"+String(t_cid)+"'!");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<459>";
	pop_err();
	return null;
}
c_chatScript.prototype.p_GetNextCID=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<411>";
	this.m_highestID+=1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<412>";
	pop_err();
	return this.m_highestID;
}
c_chatScript.prototype.p_AddObject=function(t_name,t_x,t_y,t_imgName,t_frame){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<428>";
	var t_cO=c_chatObject.m_new.call(new c_chatObject);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<429>";
	dbg_object(t_cO).m_scriptID=this.p_GetNextCID();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<430>";
	dbg_object(t_cO).m_x=t_x;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<431>";
	dbg_object(t_cO).m_y=t_y;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<432>";
	dbg_object(t_cO).m_name=t_name;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<433>";
	dbg_object(t_cO).m_imgName=t_imgName;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<434>";
	dbg_object(t_cO).m_img=bb_engine_imageMap.p_Get(t_imgName);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<435>";
	dbg_object(t_cO).m_frame=t_frame;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<437>";
	bb_engine_NLog("Added "+t_name+" with ID "+String(dbg_object(t_cO).m_scriptID),0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<438>";
	this.m_cObjectList.p_AddLast11(t_cO);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<439>";
	pop_err();
	return t_cO;
}
c_chatScript.prototype.p_DoObjectAnimations=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<422>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<422>";
	var t_=this.m_cObjectList.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<422>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<422>";
		var t_co=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<423>";
		t_co.p_DoAnimation();
	}
	pop_err();
}
c_chatScript.prototype.p_DrawObjects=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<416>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<416>";
	var t_=this.m_cObjectList.p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<416>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<416>";
		var t_co=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<417>";
		t_co.p_Draw();
	}
	pop_err();
}
c_chatScript.m_new=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<355>";
	pop_err();
	return this;
}
c_chatScript.prototype.p_CreateThread=function(t_name){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<388>";
	var t_ct=c_chatThread.m_new.call(new c_chatThread);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<389>";
	dbg_object(t_ct).m_name=t_name;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<390>";
	this.m_threads.p_AddLast10(t_ct);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<391>";
	pop_err();
	return t_ct;
}
c_chatScript.prototype.p_Load=function(t_scriptName){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<367>";
	t_scriptName="scripts/"+t_scriptName+".json";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<368>";
	if(bb_app_LoadString(t_scriptName)==""){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<368>";
		bb_engine_GoNuclear("Can not find script file '"+t_scriptName+"'!!!");
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<369>";
	var t_file=object_downcast((c_JSONData.m_ReadJSON(bb_app_LoadString(t_scriptName))),c_JSONObject);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<371>";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<371>";
	var t_=dbg_object(t_file).m_values.p_Keys().p_ObjectEnumerator();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<371>";
	while(t_.p_HasNext()){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<371>";
		var t_thread=t_.p_NextObject();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<372>";
		var t_t=this.p_CreateThread(t_thread);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<373>";
		bb_engine_NLog("Loading Thread: "+t_thread,0);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<375>";
		var t_scriptItems=object_downcast((t_file.p_GetItem(t_thread)),c_JSONArray);
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<376>";
		var t_tmpStrArr=[];
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<377>";
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<377>";
		var t_2=dbg_object(t_scriptItems).m_values.p_ObjectEnumerator();
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<377>";
		while(t_2.p_HasNext()){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<377>";
			var t_scriptType=t_2.p_NextObject();
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<378>";
			t_tmpStrArr=object_downcast((t_scriptType),c_JSONArray).p_ToStringArray();
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<380>";
			bb_engine_NLog("jObj: "+dbg_array(t_tmpStrArr,0)[dbg_index],0);
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<381>";
			t_t.p_AddScriptItem(c_chatScriptItem.m_StrToInt(dbg_array(t_tmpStrArr,0)[dbg_index].toLowerCase()),t_tmpStrArr.slice(1));
		}
	}
	pop_err();
}
function c_chatThread(){
	Object.call(this);
	this.m_name="null";
	this.m_currentSID=-1;
	this.m_script=c_List12.m_new.call(new c_List12);
}
c_chatThread.prototype.p_NextScriptItem=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<469>";
	if(this.m_currentSID<this.m_script.p_Count()-1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<470>";
		this.m_currentSID+=1;
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<472>";
		pop_err();
		return null;
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<474>";
	var t_=dbg_array(this.m_script.p_ToArray(),this.m_currentSID)[dbg_index];
	pop_err();
	return t_;
}
c_chatThread.m_new=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<463>";
	pop_err();
	return this;
}
c_chatThread.prototype.p_AddScriptItem=function(t_type,t_data){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<478>";
	var t_si=c_chatScriptItem.m_new2.call(new c_chatScriptItem);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<480>";
	dbg_object(t_si).m_data=t_data;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<481>";
	dbg_object(t_si).m_type=t_type;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<483>";
	this.m_script.p_AddLast12(t_si);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<484>";
	pop_err();
	return t_si;
}
function c_List10(){
	Object.call(this);
	this.m__head=(c_HeadNode10.m_new.call(new c_HeadNode10));
}
c_List10.m_new=function(){
	push_err();
	pop_err();
	return this;
}
c_List10.prototype.p_AddLast10=function(t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<108>";
	var t_=c_Node16.m_new.call(new c_Node16,this.m__head,dbg_object(this.m__head).m__pred,t_data);
	pop_err();
	return t_;
}
c_List10.m_new2=function(t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	var t_=t_data;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	var t_2=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	while(t_2<t_.length){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
		var t_t=dbg_array(t_,t_2)[dbg_index];
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
		t_2=t_2+1;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<14>";
		this.p_AddLast10(t_t);
	}
	pop_err();
	return this;
}
c_List10.prototype.p_ObjectEnumerator=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<186>";
	var t_=c_Enumerator9.m_new.call(new c_Enumerator9,this);
	pop_err();
	return t_;
}
function c_Node16(){
	Object.call(this);
	this.m__succ=null;
	this.m__pred=null;
	this.m__data=null;
}
c_Node16.m_new=function(t_succ,t_pred,t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<261>";
	this.m__succ=t_succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<262>";
	this.m__pred=t_pred;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<263>";
	dbg_object(this.m__succ).m__pred=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<264>";
	dbg_object(this.m__pred).m__succ=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<265>";
	this.m__data=t_data;
	pop_err();
	return this;
}
c_Node16.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<258>";
	pop_err();
	return this;
}
function c_HeadNode10(){
	c_Node16.call(this);
}
c_HeadNode10.prototype=extend_class(c_Node16);
c_HeadNode10.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<310>";
	c_Node16.m_new2.call(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<311>";
	this.m__succ=(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<312>";
	this.m__pred=(this);
	pop_err();
	return this;
}
function c_Enumerator9(){
	Object.call(this);
	this.m__list=null;
	this.m__curr=null;
}
c_Enumerator9.m_new=function(t_list){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<326>";
	this.m__list=t_list;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<327>";
	this.m__curr=dbg_object(dbg_object(t_list).m__head).m__succ;
	pop_err();
	return this;
}
c_Enumerator9.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<323>";
	pop_err();
	return this;
}
c_Enumerator9.prototype.p_HasNext=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<331>";
	while(dbg_object(dbg_object(this.m__curr).m__succ).m__pred!=this.m__curr){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<332>";
		this.m__curr=dbg_object(this.m__curr).m__succ;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<334>";
	var t_=this.m__curr!=dbg_object(this.m__list).m__head;
	pop_err();
	return t_;
}
c_Enumerator9.prototype.p_NextObject=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<338>";
	var t_data=dbg_object(this.m__curr).m__data;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<339>";
	this.m__curr=dbg_object(this.m__curr).m__succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<340>";
	pop_err();
	return t_data;
}
function c_chatObject(){
	c_GRect.call(this);
	this.m_name="";
	this.m_scriptID=0;
	this.m_animationEffect=0;
	this.m_animationSpeed=0;
	this.m_animationVar=0;
	this.m_animationCounter=0;
	this.m_imgName="";
	this.m_img=null;
	this.m_frame=0;
	this.m_sx=1.0;
	this.m_sy=1.0;
}
c_chatObject.prototype=extend_class(c_GRect);
c_chatObject.prototype.p_SetAnimation=function(t_type,t_animVar,t_animSpeed){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<579>";
	this.m_animationEffect=t_type;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<580>";
	this.m_animationSpeed=t_animSpeed;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<581>";
	var t_10=this.m_animationEffect;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<582>";
	if(t_10==1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<583>";
		this.m_animationVar=t_animVar;
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<584>";
		this.m_animationCounter=bb_app_Millisecs();
	}
	pop_err();
	return 0;
}
c_chatObject.m_new=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<544>";
	c_GRect.m_new2.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<544>";
	pop_err();
	return this;
}
c_chatObject.prototype.p_DoAnimation=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<569>";
	var t_9=this.m_animationEffect;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<570>";
	if(t_9==1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<571>";
		if(this.m_animationCounter<bb_app_Millisecs()){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<572>";
			this.m_animationVar*=-1;
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<573>";
			this.m_animationCounter=bb_app_Millisecs()+this.m_animationSpeed;
		}
	}
	pop_err();
	return 0;
}
c_chatObject.prototype.p_Draw=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<557>";
	if(!((this.m_img)!=null)){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<557>";
		bb_engine_GoNuclear(this.m_name+" does not have a valid IMG loaded. Filename: "+this.m_imgName);
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<559>";
	var t_8=this.m_animationEffect;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<560>";
	if(t_8==1){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<561>";
		bb_graphics_DrawImage2(this.m_img,(this.m_x),(this.m_y+this.m_animationVar),0.0,this.m_sx,this.m_sy,this.m_frame);
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/ScreenConversation.monkey<564>";
		bb_graphics_DrawImage2(this.m_img,(this.m_x),(this.m_y),0.0,this.m_sx,this.m_sy,this.m_frame);
	}
	pop_err();
}
function c_List11(){
	Object.call(this);
	this.m__head=(c_HeadNode11.m_new.call(new c_HeadNode11));
}
c_List11.m_new=function(){
	push_err();
	pop_err();
	return this;
}
c_List11.prototype.p_AddLast11=function(t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<108>";
	var t_=c_Node17.m_new.call(new c_Node17,this.m__head,dbg_object(this.m__head).m__pred,t_data);
	pop_err();
	return t_;
}
c_List11.m_new2=function(t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	var t_=t_data;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	var t_2=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	while(t_2<t_.length){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
		var t_t=dbg_array(t_,t_2)[dbg_index];
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
		t_2=t_2+1;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<14>";
		this.p_AddLast11(t_t);
	}
	pop_err();
	return this;
}
c_List11.prototype.p_ObjectEnumerator=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<186>";
	var t_=c_Enumerator10.m_new.call(new c_Enumerator10,this);
	pop_err();
	return t_;
}
function c_Node17(){
	Object.call(this);
	this.m__succ=null;
	this.m__pred=null;
	this.m__data=null;
}
c_Node17.m_new=function(t_succ,t_pred,t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<261>";
	this.m__succ=t_succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<262>";
	this.m__pred=t_pred;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<263>";
	dbg_object(this.m__succ).m__pred=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<264>";
	dbg_object(this.m__pred).m__succ=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<265>";
	this.m__data=t_data;
	pop_err();
	return this;
}
c_Node17.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<258>";
	pop_err();
	return this;
}
function c_HeadNode11(){
	c_Node17.call(this);
}
c_HeadNode11.prototype=extend_class(c_Node17);
c_HeadNode11.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<310>";
	c_Node17.m_new2.call(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<311>";
	this.m__succ=(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<312>";
	this.m__pred=(this);
	pop_err();
	return this;
}
function c_Enumerator10(){
	Object.call(this);
	this.m__list=null;
	this.m__curr=null;
}
c_Enumerator10.m_new=function(t_list){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<326>";
	this.m__list=t_list;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<327>";
	this.m__curr=dbg_object(dbg_object(t_list).m__head).m__succ;
	pop_err();
	return this;
}
c_Enumerator10.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<323>";
	pop_err();
	return this;
}
c_Enumerator10.prototype.p_HasNext=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<331>";
	while(dbg_object(dbg_object(this.m__curr).m__succ).m__pred!=this.m__curr){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<332>";
		this.m__curr=dbg_object(this.m__curr).m__succ;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<334>";
	var t_=this.m__curr!=dbg_object(this.m__list).m__head;
	pop_err();
	return t_;
}
c_Enumerator10.prototype.p_NextObject=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<338>";
	var t_data=dbg_object(this.m__curr).m__data;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<339>";
	this.m__curr=dbg_object(this.m__curr).m__succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<340>";
	pop_err();
	return t_data;
}
function c_List12(){
	Object.call(this);
	this.m__head=(c_HeadNode12.m_new.call(new c_HeadNode12));
}
c_List12.m_new=function(){
	push_err();
	pop_err();
	return this;
}
c_List12.prototype.p_AddLast12=function(t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<108>";
	var t_=c_Node18.m_new.call(new c_Node18,this.m__head,dbg_object(this.m__head).m__pred,t_data);
	pop_err();
	return t_;
}
c_List12.m_new2=function(t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	var t_=t_data;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	var t_2=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
	while(t_2<t_.length){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
		var t_t=dbg_array(t_,t_2)[dbg_index];
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<13>";
		t_2=t_2+1;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<14>";
		this.p_AddLast12(t_t);
	}
	pop_err();
	return this;
}
c_List12.prototype.p_Count=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<41>";
	var t_n=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<41>";
	var t_node=dbg_object(this.m__head).m__succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<42>";
	while(t_node!=this.m__head){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<43>";
		t_node=dbg_object(t_node).m__succ;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<44>";
		t_n+=1;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<46>";
	pop_err();
	return t_n;
}
c_List12.prototype.p_ObjectEnumerator=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<186>";
	var t_=c_Enumerator11.m_new.call(new c_Enumerator11,this);
	pop_err();
	return t_;
}
c_List12.prototype.p_ToArray=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<19>";
	var t_arr=new_object_array(this.p_Count());
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<19>";
	var t_i=0;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<20>";
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<20>";
	var t_=this.p_ObjectEnumerator();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<20>";
	while(t_.p_HasNext()){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<20>";
		var t_t=t_.p_NextObject();
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<21>";
		dbg_array(t_arr,t_i)[dbg_index]=t_t;
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<22>";
		t_i+=1;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<24>";
	pop_err();
	return t_arr;
}
function c_Node18(){
	Object.call(this);
	this.m__succ=null;
	this.m__pred=null;
	this.m__data=null;
}
c_Node18.m_new=function(t_succ,t_pred,t_data){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<261>";
	this.m__succ=t_succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<262>";
	this.m__pred=t_pred;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<263>";
	dbg_object(this.m__succ).m__pred=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<264>";
	dbg_object(this.m__pred).m__succ=this;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<265>";
	this.m__data=t_data;
	pop_err();
	return this;
}
c_Node18.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<258>";
	pop_err();
	return this;
}
function c_HeadNode12(){
	c_Node18.call(this);
}
c_HeadNode12.prototype=extend_class(c_Node18);
c_HeadNode12.m_new=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<310>";
	c_Node18.m_new2.call(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<311>";
	this.m__succ=(this);
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<312>";
	this.m__pred=(this);
	pop_err();
	return this;
}
function c_Enumerator11(){
	Object.call(this);
	this.m__list=null;
	this.m__curr=null;
}
c_Enumerator11.m_new=function(t_list){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<326>";
	this.m__list=t_list;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<327>";
	this.m__curr=dbg_object(dbg_object(t_list).m__head).m__succ;
	pop_err();
	return this;
}
c_Enumerator11.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<323>";
	pop_err();
	return this;
}
c_Enumerator11.prototype.p_HasNext=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<331>";
	while(dbg_object(dbg_object(this.m__curr).m__succ).m__pred!=this.m__curr){
		err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<332>";
		this.m__curr=dbg_object(this.m__curr).m__succ;
	}
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<334>";
	var t_=this.m__curr!=dbg_object(this.m__list).m__head;
	pop_err();
	return t_;
}
c_Enumerator11.prototype.p_NextObject=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<338>";
	var t_data=dbg_object(this.m__curr).m__data;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<339>";
	this.m__curr=dbg_object(this.m__curr).m__succ;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/list.monkey<340>";
	pop_err();
	return t_data;
}
function c_MapKeys2(){
	Object.call(this);
	this.m_map=null;
}
c_MapKeys2.m_new=function(t_map){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<503>";
	dbg_object(this).m_map=t_map;
	pop_err();
	return this;
}
c_MapKeys2.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<500>";
	pop_err();
	return this;
}
c_MapKeys2.prototype.p_ObjectEnumerator=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<507>";
	var t_=c_KeyEnumerator2.m_new.call(new c_KeyEnumerator2,this.m_map.p_FirstNode());
	pop_err();
	return t_;
}
function c_KeyEnumerator2(){
	Object.call(this);
	this.m_node=null;
}
c_KeyEnumerator2.m_new=function(t_node){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<459>";
	dbg_object(this).m_node=t_node;
	pop_err();
	return this;
}
c_KeyEnumerator2.m_new2=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<456>";
	pop_err();
	return this;
}
c_KeyEnumerator2.prototype.p_HasNext=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<463>";
	var t_=this.m_node!=null;
	pop_err();
	return t_;
}
c_KeyEnumerator2.prototype.p_NextObject=function(){
	push_err();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<467>";
	var t_t=this.m_node;
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<468>";
	this.m_node=this.m_node.p_NextNode();
	err_info="D:/Dev/MonkeyXPro80c/modules/monkey/map.monkey<469>";
	pop_err();
	return dbg_object(t_t).m_key;
}
function c_CharArcher(){
	c_DMonster.call(this);
}
c_CharArcher.prototype=extend_class(c_DMonster);
c_CharArcher.prototype.p_InitLevel=function(t_lvl,t_nme){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<421>";
	this.m_img=bb_engine_imageMap.p_Get("archer");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<422>";
	this.m_frame=1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<424>";
	this.m_Strength=10;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<425>";
	this.m_Endurance=3;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<426>";
	this.m_Knowledge=5;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<427>";
	this.m_Luck=15;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<428>";
	this.p_LevelToLevel(10);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<429>";
	this.p_UpdateBuffs();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<431>";
	this.m_HP=this.m_maxHP;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<432>";
	this.m_Name="ARCHER";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<433>";
	this.p_AddSkill("ice");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<435>";
	this.m_Level=10;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<436>";
	this.m_XPNextLevel=0;
	pop_err();
}
c_CharArcher.m_new=function(t_level){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<419>";
	c_DMonster.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<419>";
	this.p_InitLevel(t_level,"");
	pop_err();
	return this;
}
c_CharArcher.m_new2=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<418>";
	c_DMonster.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<418>";
	pop_err();
	return this;
}
function c_FrogWasp(){
	c_DMonster.call(this);
}
c_FrogWasp.prototype=extend_class(c_DMonster);
c_FrogWasp.prototype.p_InitLevel=function(t_lvl,t_nme){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<220>";
	this.m_img=bb_engine_imageMap.p_Get("monsters");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<221>";
	this.m_frame=2;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<230>";
	this.m_Strength=2;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<231>";
	this.m_Endurance=4;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<232>";
	this.m_Knowledge=1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<233>";
	this.m_Luck=2;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<234>";
	this.p_LevelToLevel(t_lvl);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<235>";
	this.p_UpdateBuffs();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<237>";
	this.m_HP=this.m_maxHP;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<238>";
	this.m_Name="WASP";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<239>";
	this.p_AddSkill("boost");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<240>";
	this.p_AddSkill("aero");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<241>";
	this.p_AddSkill("posion");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<242>";
	this.p_AddWeakness("aero",1);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<245>";
	this.m_XPNextLevel=0;
	pop_err();
}
c_FrogWasp.m_new=function(t_level){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<218>";
	c_DMonster.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<218>";
	this.p_InitLevel(t_level,"");
	pop_err();
	return this;
}
c_FrogWasp.m_new2=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<217>";
	c_DMonster.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<217>";
	pop_err();
	return this;
}
function c_BossBahamaut(){
	c_DMonster.call(this);
}
c_BossBahamaut.prototype=extend_class(c_DMonster);
c_BossBahamaut.prototype.p_InitLevel=function(t_lvl,t_nme){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<387>";
	this.m_img=bb_engine_imageMap.p_Get("monsters");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<388>";
	this.m_frame=2;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<397>";
	this.m_Strength=2;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<398>";
	this.m_Endurance=8;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<399>";
	this.m_Knowledge=4;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<400>";
	this.m_Luck=15;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<401>";
	this.p_LevelToLevel(t_lvl);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<402>";
	this.p_UpdateBuffs();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<404>";
	this.m_HP=this.m_maxHP;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<405>";
	this.m_Name="BAHAMAUT";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<406>";
	this.p_AddSkill("fire");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<407>";
	this.p_AddSkill("fire");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<408>";
	this.p_AddSkill("fire");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<409>";
	this.p_AddSkill("boost");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<410>";
	this.p_AddSkill("aero");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<411>";
	this.p_AddWeakness("aero",-1);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<414>";
	this.m_XPNextLevel=0;
	pop_err();
}
c_BossBahamaut.m_new=function(t_level){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<385>";
	c_DMonster.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<385>";
	this.p_InitLevel(t_level,"");
	pop_err();
	return this;
}
c_BossBahamaut.m_new2=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<384>";
	c_DMonster.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<384>";
	pop_err();
	return this;
}
function c_FrogBug(){
	c_DMonster.call(this);
}
c_FrogBug.prototype=extend_class(c_DMonster);
c_FrogBug.prototype.p_InitLevel=function(t_lvl,t_nme){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<41>";
	this.m_img=bb_engine_imageMap.p_Get("monsters");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<42>";
	this.m_frame=4;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<47>";
	this.m_Strength=1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<48>";
	this.m_Endurance=2;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<49>";
	this.m_Knowledge=1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<50>";
	this.m_Luck=2;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<51>";
	this.p_LevelToLevel(t_lvl);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<52>";
	this.p_UpdateBuffs();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<54>";
	this.m_HP=this.m_maxHP;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<55>";
	this.m_Name="BUG";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<56>";
	this.p_AddWeakness("fire",1);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<57>";
	this.p_AddWeakness("ice",1);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<58>";
	this.p_AddWeakness("rock",1);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<59>";
	this.p_AddWeakness("attack",-1);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<61>";
	this.m_Level=t_lvl;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<62>";
	this.m_XPNextLevel=0;
	pop_err();
}
c_FrogBug.m_new=function(t_level){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<38>";
	c_DMonster.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<38>";
	this.p_InitLevel(t_level,"");
	pop_err();
	return this;
}
c_FrogBug.m_new2=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<37>";
	c_DMonster.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<37>";
	pop_err();
	return this;
}
function c_FrogFly(){
	c_DMonster.call(this);
}
c_FrogFly.prototype=extend_class(c_DMonster);
c_FrogFly.prototype.p_InitLevel=function(t_lvl,t_nme){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<188>";
	this.m_img=bb_engine_imageMap.p_Get("monsters");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<189>";
	this.m_frame=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<199>";
	this.m_Strength=1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<200>";
	this.m_Endurance=1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<201>";
	this.m_Knowledge=1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<202>";
	this.m_Luck=3;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<203>";
	this.p_LevelToLevel(t_lvl);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<204>";
	this.p_UpdateBuffs();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<206>";
	this.m_HP=this.m_maxHP;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<207>";
	this.m_Name="FLY";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<208>";
	this.p_AddSkill("focus");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<209>";
	this.p_AddWeakness("rock",1);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<210>";
	this.p_AddWeakness("aero",1);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<212>";
	this.m_Level=t_lvl;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<213>";
	this.m_XPNextLevel=0;
	pop_err();
}
c_FrogFly.m_new=function(t_level){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<186>";
	c_DMonster.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<186>";
	this.p_InitLevel(t_level,"");
	pop_err();
	return this;
}
c_FrogFly.m_new2=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<185>";
	c_DMonster.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<185>";
	pop_err();
	return this;
}
function c_FrogSpider(){
	c_DMonster.call(this);
}
c_FrogSpider.prototype=extend_class(c_DMonster);
c_FrogSpider.prototype.p_InitLevel=function(t_lvl,t_nme){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<69>";
	this.m_img=bb_engine_imageMap.p_Get("monsters");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<70>";
	this.m_frame=1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<72>";
	this.m_Strength=2;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<73>";
	this.m_Endurance=3;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<74>";
	this.m_Knowledge=3;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<75>";
	this.m_Luck=1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<76>";
	this.p_LevelToLevel(t_lvl);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<77>";
	this.p_UpdateBuffs();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<79>";
	this.m_HP=this.m_maxHP;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<80>";
	this.m_Name="SPIDR";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<81>";
	this.p_AddSkill("posion");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<82>";
	this.p_AddSkill("posion");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<83>";
	this.p_AddWeakness("ice",1);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<84>";
	this.p_AddWeakness("aero",1);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<86>";
	this.m_Level=t_lvl;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<87>";
	this.m_XPNextLevel=0;
	pop_err();
}
c_FrogSpider.m_new=function(t_level){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<67>";
	c_DMonster.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<67>";
	this.p_InitLevel(t_level,"");
	pop_err();
	return this;
}
c_FrogSpider.m_new2=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<66>";
	c_DMonster.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<66>";
	pop_err();
	return this;
}
function c_FrogSlime(){
	c_DMonster.call(this);
}
c_FrogSlime.prototype=extend_class(c_DMonster);
c_FrogSlime.prototype.p_InitLevel=function(t_lvl,t_nme){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<165>";
	this.m_img=bb_engine_imageMap.p_Get("monsters");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<166>";
	this.m_frame=3;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<168>";
	this.m_Strength=1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<169>";
	this.m_Endurance=1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<170>";
	this.m_Knowledge=1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<171>";
	this.m_Luck=1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<172>";
	this.p_LevelToLevel(t_lvl);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<173>";
	this.p_UpdateBuffs();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<175>";
	this.m_HP=this.m_maxHP;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<176>";
	this.m_Name="SLIME";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<177>";
	this.p_AddWeakness("ice",1);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<178>";
	this.p_AddWeakness("aero",1);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<180>";
	this.m_Level=t_lvl;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<181>";
	this.m_XPNextLevel=0;
	pop_err();
}
c_FrogSlime.m_new=function(t_level){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<163>";
	c_DMonster.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<163>";
	this.p_InitLevel(t_level,"");
	pop_err();
	return this;
}
c_FrogSlime.m_new2=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<162>";
	c_DMonster.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<162>";
	pop_err();
	return this;
}
function c_FrogSkeleton(){
	c_DMonster.call(this);
}
c_FrogSkeleton.prototype=extend_class(c_DMonster);
c_FrogSkeleton.prototype.p_InitLevel=function(t_lvl,t_nme){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<119>";
	this.m_img=bb_engine_imageMap.p_Get("monsters");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<120>";
	this.m_frame=17;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<122>";
	this.m_Strength=3;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<123>";
	this.m_Endurance=3;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<124>";
	this.m_Knowledge=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<125>";
	this.m_Luck=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<126>";
	this.p_LevelToLevel(t_lvl);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<127>";
	this.p_UpdateBuffs();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<129>";
	this.m_HP=this.m_maxHP;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<130>";
	this.m_Name="SKELE";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<131>";
	this.p_AddWeakness("aero",1);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<132>";
	this.p_AddWeakness("attack",2);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<134>";
	this.m_Level=t_lvl;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<135>";
	this.m_XPNextLevel=0;
	pop_err();
}
c_FrogSkeleton.m_new=function(t_level){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<117>";
	c_DMonster.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<117>";
	this.p_InitLevel(t_level,"");
	pop_err();
	return this;
}
c_FrogSkeleton.m_new2=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<116>";
	c_DMonster.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<116>";
	pop_err();
	return this;
}
function c_FrogSkeletonArcher(){
	c_DMonster.call(this);
}
c_FrogSkeletonArcher.prototype=extend_class(c_DMonster);
c_FrogSkeletonArcher.prototype.p_InitLevel=function(t_lvl,t_nme){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<142>";
	this.m_img=bb_engine_imageMap.p_Get("monsters");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<143>";
	this.m_frame=16;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<145>";
	this.m_Strength=2;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<146>";
	this.m_Endurance=3;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<147>";
	this.m_Knowledge=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<148>";
	this.m_Luck=5;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<149>";
	this.p_LevelToLevel(t_lvl);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<150>";
	this.p_UpdateBuffs();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<152>";
	this.m_HP=this.m_maxHP;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<153>";
	this.m_Name="SKARC";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<154>";
	this.p_AddWeakness("aero",1);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<155>";
	this.p_AddWeakness("attack",2);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<157>";
	this.m_Level=t_lvl;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<158>";
	this.m_XPNextLevel=0;
	pop_err();
}
c_FrogSkeletonArcher.m_new=function(t_level){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<140>";
	c_DMonster.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<140>";
	this.p_InitLevel(t_level,"");
	pop_err();
	return this;
}
c_FrogSkeletonArcher.m_new2=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<139>";
	c_DMonster.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<139>";
	pop_err();
	return this;
}
function c_FrogCROW(){
	c_DMonster.call(this);
}
c_FrogCROW.prototype=extend_class(c_DMonster);
c_FrogCROW.prototype.p_InitLevel=function(t_lvl,t_nme){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<94>";
	this.m_img=bb_engine_imageMap.p_Get("monsters");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<95>";
	this.m_frame=8;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<97>";
	this.m_Strength=1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<98>";
	this.m_Endurance=8;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<99>";
	this.m_Knowledge=1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<100>";
	this.m_Luck=1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<101>";
	this.p_LevelToLevel(t_lvl);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<102>";
	this.p_UpdateBuffs();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<104>";
	this.m_HP=this.m_maxHP;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<105>";
	this.m_Name="CROH";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<106>";
	this.p_AddSkill("posion");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<107>";
	this.p_AddSkill("posion");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<108>";
	this.p_AddWeakness("attack",1);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<109>";
	this.p_AddWeakness("aero",1);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<111>";
	this.m_Level=t_lvl;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<112>";
	this.m_XPNextLevel=0;
	pop_err();
}
c_FrogCROW.m_new=function(t_level){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<92>";
	c_DMonster.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<92>";
	this.p_InitLevel(t_level,"");
	pop_err();
	return this;
}
c_FrogCROW.m_new2=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<91>";
	c_DMonster.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<91>";
	pop_err();
	return this;
}
function c_FrogEngima(){
	c_DMonster.call(this);
}
c_FrogEngima.prototype=extend_class(c_DMonster);
c_FrogEngima.prototype.p_InitLevel=function(t_lvl,t_nme){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<285>";
	this.m_img=bb_engine_imageMap.p_Get("monsters");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<286>";
	this.m_frame=10;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<288>";
	this.m_Strength=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<289>";
	this.m_Endurance=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<290>";
	this.m_Knowledge=0;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<291>";
	this.m_Luck=5;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<292>";
	this.p_LevelToLevel(t_lvl);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<293>";
	this.p_UpdateBuffs();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<295>";
	this.m_HP=(((this.m_maxHP)+bb_random_Rnd2(-5.0,5.0))|0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<296>";
	this.m_Name="ENGM";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<298>";
	this.p_AddSkill("focus");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<299>";
	var t_1=bb_random_Rnd2(0.0,3.0);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<300>";
	if(t_1==1.0){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<301>";
		this.p_AddSkill("terror");
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<302>";
		this.p_AddWeakness("fire",1);
	}else{
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<303>";
		if(t_1==2.0){
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<304>";
			this.p_AddSkill("fire");
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<305>";
			this.p_AddWeakness("ice",1);
		}else{
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<307>";
			this.p_AddSkill("aero");
			err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<308>";
			this.p_AddWeakness("rock",1);
		}
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<310>";
	this.p_AddWeakness("attack",-1);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<312>";
	this.m_Level=t_lvl;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<313>";
	this.m_XPNextLevel=0;
	pop_err();
}
c_FrogEngima.m_new=function(t_level){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<283>";
	c_DMonster.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<283>";
	this.p_InitLevel(t_level,"");
	pop_err();
	return this;
}
c_FrogEngima.m_new2=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<282>";
	c_DMonster.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<282>";
	pop_err();
	return this;
}
function c_FrogShambler(){
	c_DMonster.call(this);
}
c_FrogShambler.prototype=extend_class(c_DMonster);
c_FrogShambler.prototype.p_InitLevel=function(t_lvl,t_nme){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<321>";
	this.m_img=bb_engine_imageMap.p_Get("monsters");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<322>";
	this.m_frame=7;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<324>";
	this.m_Strength=1;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<325>";
	this.m_Endurance=2;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<326>";
	this.m_Knowledge=3;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<327>";
	this.m_Luck=20;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<328>";
	this.p_LevelToLevel(t_lvl);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<329>";
	this.p_UpdateBuffs();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<331>";
	this.m_HP=this.m_maxHP;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<332>";
	this.m_Name="SHMBR";
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<334>";
	this.p_AddSkill("focus");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<335>";
	this.p_AddSkill("terror");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<336>";
	this.p_AddSkill("aero");
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<337>";
	if(t_lvl>10){
		err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<338>";
		this.p_AddSkill("fire");
	}
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<340>";
	this.p_AddWeakness("ice",-1);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<341>";
	this.p_AddWeakness("fire",-1);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<342>";
	this.p_AddWeakness("aero",-1);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<343>";
	this.p_AddWeakness("rock",-1);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<344>";
	this.p_AddWeakness("attack",-1);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<346>";
	this.m_Level=t_lvl;
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<347>";
	this.m_XPNextLevel=0;
	pop_err();
}
c_FrogShambler.m_new=function(t_level){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<319>";
	c_DMonster.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<319>";
	this.p_InitLevel(t_level,"");
	pop_err();
	return this;
}
c_FrogShambler.m_new2=function(){
	push_err();
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<318>";
	c_DMonster.m_new.call(this);
	err_info="D:/Dropbox/Public/Projects/Adventure!/NinjaQuest!/monsters.monkey<318>";
	pop_err();
	return this;
}
function bbInit(){
	bb_app__app=null;
	bb_app__delegate=null;
	bb_app__game=BBGame.Game();
	c_L.m___map=c_StringMap.m_new.call(new c_StringMap);
	bb_engine_game=null;
	bb_graphics_device=null;
	bb_graphics_context=c_GraphicsContext.m_new.call(new c_GraphicsContext);
	c_Image.m_DefaultFlags=0;
	bb_audio_device=null;
	bb_input_device=null;
	bb_app__devWidth=0;
	bb_app__devHeight=0;
	bb_app__displayModes=[];
	bb_app__desktopMode=null;
	bb_graphics_renderDevice=null;
	bb_app__updateRate=0;
	bb_gui_lWidth=0;
	bb_gui_g_x_offset=0;
	bb_engine_vScnHeight=144.0;
	bb_gui_g_scale=1.0;
	bb_engine_vScnWidth=160.0;
	c_NInput.m_V_A=null;
	c_NInput.m_V_B=null;
	c_NInput.m_V_Start=null;
	c_NInput.m_V_UP=null;
	c_NInput.m_V_DOWN=null;
	c_NInput.m_V_LEFT=null;
	c_NInput.m_V_RIGHT=null;
	c_JSONToken.m_reusableToken=c_JSONToken.m_new.call(new c_JSONToken,-1,null);
	bb_engine_window_style=1;
	bb_engine_gSound=1.0;
	bb_engine_imageMap=c_StringMap3.m_new.call(new c_StringMap3);
	bb_engine_soundMap=c_StringMap4.m_new.call(new c_StringMap4);
	c_GWindowDrawer.m___Image=null;
	c_GHealthDrawer.m___Image=null;
	bb_engine_titleScreen=null;
	bb_engine_combatScreen=null;
	bb_engine_characterScreen=null;
	bb_engine_townMapScreen=null;
	bb_engine_chatScreen=null;
	bb_random_Seed=1234;
	c_GClearScreen.m_Red=110;
	c_GClearScreen.m_Green=167;
	c_GClearScreen.m_Blue=92;
	bb_engine_currentScreen=null;
	bb_engine_hasGoneNuclear=false;
	bb_engine_nukeMessage="";
	c_NInput.m_VirtualX=0;
	c_NInput.m_VirtualY=0;
	c_NInput.m_currentPoll=0;
	c_NInput.m_pollSpeed=5;
	c_NInput.m_lastJoyY=0;
	c_NInput.m_lastJoyX=0;
	bb_engine_lastScreen=null;
	c_modes.m_current=0;
	bb_engine_playerCharacters=c_List2.m_new.call(new c_List2);
	bb_engine_ninja=null;
	bb_engine_archer=null;
	bb_engine_sage=null;
	bb_engine_warrior=null;
	bb_engine_playerGold=0;
	bb_engine_currentLocation=0;
	bb_engine_lastTown=128;
	bb_engine_gameTriggers=c_StringMap.m_new.call(new c_StringMap);
	c_GMessageTicker.m_msgList=c_List4.m_new.call(new c_List4);
	c_modes2.m_current=0;
	c_GEffect.m_effectList=c_List6.m_new.call(new c_List6);
	c_GMessageTicker.m_lastMsgMs=0;
	c_GMessageTicker.m_curMsg="";
	c_GMessageTicker.m_msgSpeed=140;
	c_modes3.m_current=0;
	bb_map_file_currentMap=null;
	bb_engine_playerItems=c_List8.m_new.call(new c_List8);
	c_modes4.m_current=0;
	c_DMap.m_maps=c_StringMap5.m_new.call(new c_StringMap5);
	c_modes5.m_current=0;
	c_SConversation.m_maxLines=5;
}
//${TRANSCODE_END}
