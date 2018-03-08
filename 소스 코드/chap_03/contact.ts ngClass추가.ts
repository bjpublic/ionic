
  bold:boolean=false;
  italic:boolean=false;
  large:boolean=false;

  currentClasses: {};

  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  {
      bold:   this.boldClass,
      italic: this.italicClass,
      large:  this.largeClass
    };
  }

