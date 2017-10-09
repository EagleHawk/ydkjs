
//Create a Model
var CredSong = Backbone.Model.extend({}); //Row level

//Create a instance of the model
// var song = new CredSong({
//   title: "Ladki Beautiful...Kar Gayi Chulll",
//   genre: 'bollywood',
//   singer:'Baadshah'
// });
// console.log("Get an attribute:"+song.get('title'));
// console.log("Set an attribute:"+song.set('singer','rahul'));

//Create a Collection

var CredSongs= Backbone.Collection.extend({}); // Table Level
var songs = new CredSongs({
	model:CredSong
})

//Create a Row level View 
var SongView = Backbone.View.extend({
	render:function()
	{
		var html="<h3>"+this.model.get('title')+"</h3>";
		$(this.el).html(html);
		return this;
	}
})

//Create a Table level View
var SongsView = Backbone.View.extend({
	render:function(){
		var self=this;
		this.model.each(function(song){
			var songView = new SongView({model:song});
			self.$el.append(songView.render().$el);
		})
	}
});


//Create a instance of the collection
var Songs=new CredSongs([
		new CredSong({
			title: "Ladki Beautiful...Kar Gayi Chulll",
			genre: 'bollywood',
			singer:'Baadshah'
		}),
		new CredSong({
			title: "Tamma Tamma Loge...",
			genre: 'bollywood',
			singer:'Bappi Lehri'
		}),

		new CredSong({
			title: "Closer...",
			genre: 'pop',
			singer:'chainsmokers'
		})
		
	]);
//Create a instance of the songs view

var songsview=new SongsView({el:"#container",model:Songs});
songsview.render();
