Page({
  data: {
    showAbout: false,
    version:false
  },
  
  showAbout() {
    this.setData({
      showAbout: true
    });
  },

  version(){
this.setData({
  version:true
});
  }
});