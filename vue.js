var vm = new Vue({
	el: '#main',
	data: {
		url:'',
		title: '',
		videoActive: '',
		show: false,
		list: [],
	},
	methods: {
		showTitle: function() {
			if(this.url!='')
			this.show=!this.show;
			setTimeout(function(){ $('#ttl').focus();}, 100)
		},
		addData: function() {
			if(this.title!='')
			this.show=!this.show;
			this.list.push({url:this.url, title: this.title, active: false})
			localStorage.setItem('pistas', JSON.stringify(this.list))
			this.url = this.title = '';
		},
		playVideo: function(video) {
			var url = video.url;
			var newUrl = url.replace('watch=v=', 'embed/');
			this.videoActive = newUrl + '?&autoplay=1';
			for(i=0;i<this.llist.length;i++){
				this.llist[i].active = false
			}
			video.active = true;
		},
		delVideo: function(video) {
			this.list.splice(this.list.indexOf(video),1)
			localStorage.setItem('pistas', JSON.stringify(this.list))
		}

	}
})