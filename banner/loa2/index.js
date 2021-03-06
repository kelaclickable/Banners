(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg.jpg?1469024349894", id:"bg"},
		{src:"images/body.png?1469024349894", id:"body"},
		{src:"images/energyball.png?1469024349894", id:"energyball"},
		{src:"images/firesword.png?1469024349894", id:"firesword"},
		{src:"images/hand_1.png?1469024349894", id:"hand_1"},
		{src:"images/hand_2.png?1469024349894", id:"hand_2"},
		{src:"images/icesword.png?1469024349894", id:"icesword"},
		{src:"images/light.png?1469024349894", id:"light"},
		{src:"images/logo.png?1469024349894", id:"logo"},
		{src:"images/swordhand.png?1469024349894", id:"swordhand"},
		{src:"images/wing.png?1469024349894", id:"wing"}
	]
};



// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,717,448);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,476);


(lib.energyball = function() {
	this.initialize(img.energyball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,144);


(lib.firesword = function() {
	this.initialize(img.firesword);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,273);


(lib.hand_1 = function() {
	this.initialize(img.hand_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,39);


(lib.hand_2 = function() {
	this.initialize(img.hand_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,132);


(lib.icesword = function() {
	this.initialize(img.icesword);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,266);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,459,59);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,68);


(lib.swordhand = function() {
	this.initialize(img.swordhand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,352);


(lib.wing = function() {
	this.initialize(img.wing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,551,350);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.light();
	this.instance.setTransform(-229.5,-128.7,1,4.363);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229.5,-128.7,459,257.4);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMFFJIiuiaIAAB+QAAAIAGAGQAGAGAJAAIAHAAIAAADIhrAAIAAgDIAGAAQAJAAAGgGQAGgGAAgIIAAinQAAgXgDgPIgBgFIAEAAICtCZIAAh9QABgIgGgGQgGgFgJAAIgHAAIAAgEIBrAAIAAAEIgGAAQgJAAgFAFQgHAGAAAIIAACmQAAAYADAPIABAFgAE2FBQgYgIgTgQQgkggAAg3QgBgbAKgWQAIgWATgQQAkggA+AAQA8AAAmAgQASAQAJAWQAKAWAAAbQAAAcgKAVQgJAWgSAQQgTAQgYAIQgZAIgeAAQgeAAgZgIgAE1CGQgKAOgFATQgGATAAAYQAAAYAGATQAFATAKAOQAVAcAjAAQARAAAOgHQAOgHAKgOQAVgcAAgwQAAgwgVgcQgKgNgOgIQgOgHgRAAQgjAAgVAcgAolFJIhKiWIg0BvQgIAUAAATIgDAAIhRjSQgFgJgIgFQgHgFgKAAIgDAAIAAgEIBrAAIAAAEIgCAAQgIAAgDAEQgDAFgBAEIACAIIAoBnIA7iFIAEAAIBCCGIAfhoQAEgPgKgFIgHgBIgCAAIAAgEIBHAAIAAAEIgDAAQgJAAgHAFQgJAEgDAJIg5CsQgFASgBARIAAAEgAAIFEIAAgDIAFAAQAIAAAGgGQAGgGAAgIIAAi1QAAgJgGgFQgGgGgIAAIgFAAIAAgEIBxAAQAVAAARAFQAQAEALAJQAMAJAFAMQAGAMAAAQQAAATgJAQQgUAhgoAAQgKAAgKgDQgKgDgKgHIAAgDQAmAAALgnIACgOQAAgagMgMQgHgHgIgDQgIgDgLAAIgRAAIAAC9QAAANAKAFQAFADAFAAIAFAAIAAADgAhnFEIAAgDIADAAQAHAAAEgFQADgFAAgDIgBgIIgPgjIhQAAIgQAjIgBAIQAAAEADAEQAEAFAHAAIAEAAIAAADIhNAAIAAgDIAEAAQAHAAAIgFQAJgFAFgKIBPipQAQgmABgIIADAAIBmDVQAFALAIAFQAIAGAHAAIADAAIAAADgAhsD6IgihQIgiBQIBEAAgAnAFEIAAgDIAFAAQAIAAAGgGQAGgGAAgIIAAi1QAAgJgGgFQgGgGgIAAIgFAAIAAgEICGAAIAWgCIARgEIAAA9IgEAAIAAgDQABgRgKgKQgJgJgQgBIg3AAIAABdIAsAAQANgBAHgIQAJgIgBgNIAAgDIAEAAIAABRIgEAAIAAgDQAAgSgNgIQgHgEgIAAIgsAAIAABaIAuAAQAMAAAKgEQAJgDAJgIQAIgHAGgKQAGgKAEgNIAEAAIgPBGgADlh5QglgfAAg4QAAgcAJgWQAJgWASgQQAlgfBAAAQAZAAAVAEQAWAFARAIIAAA9IgCAAQgKgigTgPQgVgOgeAAQgoAAgVAcQgLANgFATQgFATAAAYQAAAwAUAcQALAOAPAHQAPAIATAAQAbAAARgJQAJgEAGgHQAHgGAGgKQAKgSAFggIADAAIAEA6QgGAJgIAIQgKAIgMAGQgMAGgPADQgOADgSAAQhAgBgkgfgApahfQgTgGgJgIQgBgHAAgJQgBgNADgKQADgLAFgJIADAAIAAAFQAAAXAQASQARASAeAAQALAAAHgDQAJgCAGgFQALgKAAgMQAAgNgHgHQgGgHgPgKIg2giQgjgWAAghIABgHQADgbASgQQASgPAaAAQAZAAAcADIAVAAIgGAyIgDAAQAAgJgDgHQgDgHgHgFQgMgKgUAAQgUAAgMAJQgMAIAAAOQAAAMALAIIBKAuQAQAJAIAOQAHANABAQQgBASgGAOQgGANgNAKQgMAJgQAFQgQAFgUAAQgYAAgTgGgAH0heIAAgEIADAAQAJAAAGgGQAHgFgBgJIAAi9IgrAAQgRAAgJAJQgJAKAAAQIAAAEIgFAAIAAg8IApAFICMAAQARAAAKgCIANgDIAAA8IgEAAIAAgEQAAgQgJgKQgJgJgRAAIgrAAIAAC9QAAAJAGAFQAGAGAIAAIAEAAIAAAEgAgTheIAAgEIAEAAQAIAAAHgGQADgFABgJIAAi1QgBgIgDgGQgHgFgIAAIgEAAIAAgEICEAAIAVgCIASgEIAAA8IgEAAIAAgDQAAgRgJgJQgKgKgPAAIg3AAIAABcIArAAQANAAAIgIQAIgJAAgNIAAgCIADAAIAABQIgDAAIAAgDQAAgRgOgIQgGgEgJAAIgrAAIAABaIAuAAQALgBAKgDQAKgEAIgHQAIgHAHgKQAGgKAEgNIADAAIgOBGgAjjheIAAgEIAEAAQAIAAAHgGQAFgFAAgJIAAi0QAAgJgFgGQgHgFgIAAIgEAAIAAgEIBpAAIAAAEIgEAAQgKAAgFAFQgHAGABAJIAAC9IAuAAQALgBAKgDQAKgEAIgHQAIgHAHgKQAFgKAEgNIAEAAIgOBGgAm5heIAAgEIAEAAQAJAAAGgGQAGgFABgJIAAi1QgBgIgGgGQgGgFgJAAIgEAAIAAgEICGAAIAWgCIARgEIAAA8IgDAAIAAgDQgBgRgIgJQgKgKgQAAIg3AAIAABcIAsAAQAMAAAIgIQAJgJAAgNIAAgCIADAAIAABQIgDAAIAAgDQAAgRgOgIQgHgEgIAAIgsAAIAABaIAuAAQAMgBAJgDQAKgEAJgHQAIgHAGgKQAGgKAEgNIADAAIgOBGg");
	this.shape.setTransform(12.7,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.4,-33.4,160.2,65.9);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(32.9,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-33.2,185.8,65.4);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.light();
	this.instance.setTransform(29.5,-229.5,1,1,90);

	this.instance_1 = new lib.light();
	this.instance_1.setTransform(-229.5,-29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229.5,-229.5,459,459);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwrF7IAAr1MAhXAAAIAAL1g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AwdX5MAAAgvxMAg7AAAMAAAAvxg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.light();
	this.instance.setTransform(-29.5,229.5,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.5,-229.5,59,459);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhtNqIAAiPIAlAAIAABiIA5AAIAAhXIAjAAIAABXIBaAAIAAAtgAhtK+IAAgtIDbAAIAAAtgAhtJnIAAhSQAAgTAFgPQAEgQAJgKQAIgLAMgFQANgGAQAAQAMAAAKADQAJADAIAFQAFAFAGAHQAGAIAEAJIBagwIACAAIAAAxIhRApIAAAkIBRAAIAAAugAg/H5QgJAJAAATIAAAkIBCAAIAAgkQAAgJgCgHQgCgHgFgFQgEgEgGgCQgGgCgHAAQgQAAgJAIgAhtGhIAAiTIAlAAIAABmIA1AAIAAhYIAhAAIAABYIA7AAIAAhnIAlAAIAACUgAApCBQAKAAAGgDQAHgDAFgGQAEgFACgIQACgJAAgJQAAgJgCgHQgCgGgDgEQgEgEgEgDQgFgCgFAAQgGAAgEACQgFACgEAEQgEAFgEAJIgSAyQgHANgGAKQgIAKgLAGQgLAGgOAAQgOAAgLgGQgMgGgHgLQgJgLgEgOQgFgPAAgSQAAgSAGgQQAFgOAJgLQAJgLAMgFQANgGAPAAIAAAtQgHAAgGACQgGADgFAEQgEAFgCAHQgCAGAAAKQAAAJACAGQACAHADAEQAEAEAEACQAFADAFAAQALAAAIgLQAHgMAGgVQAGgSAGgOQAGgNAIgKQAIgJALgFQALgEAOAAQAOAAALAFQAMAGAIALQAIAKAEAPQAEAPAAASIgCAWQgCALgEAJQgEAKgGAJQgGAIgIAHQgIAGgKADQgKAEgMAAgAhtg2ICbgdIibglIAAgmICbgkIibgeIAAgtIDbAxIAAAuIiSAjICSAkIAAAuIjbAxgAgDkfQgZAAgUgHQgUgHgOgMQgOgNgIgRQgIgRAAgVQAAgUAIgSQAIgRAOgMQAOgNAUgHQAUgHAZAAIAIAAQAZAAAUAHQAUAHAOAMQAOANAHARQAIARAAAVQAAAVgIARQgHARgOAMQgOANgUAHQgUAHgZAAgAg4mgQgSAMAAAXQAAAXASANQASAMAjAAIAIAAQARAAANgDQANgDAJgHQAJgGAFgJQAFgJAAgLQAAgXgTgMQgSgNgiAAIgIAAQgjAAgSANgAhtn7IAAhSQAAgTAFgPQAEgPAJgLQAIgKAMgGQANgFAQAAQAMAAAKACQAJADAIAFQAFAFAGAHQAGAIAEAJIBagwIACAAIAAAxIhRApIAAAkIBRAAIAAAugAg/poQgJAJAAASIAAAkIBCAAIAAgkQAAgJgCgHQgCgHgFgEQgEgFgGgCQgGgCgHAAQgQAAgJAJgAhtrBIAAhEQAAgWAIgTQAIgSAOgNQANgNAUgIQATgHAYAAIAIAAQAYAAATAHQATAHAOAOQAOANAHATQAIASAAAXIAABDgAg2stQgSANAAAbIAAAXICRAAIAAgWQAAgbgRgOQgSgOghAAIgJAAQghAAgRAOg");
	this.shape.setTransform(69.1,-21.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// img
	this.instance = new lib.firesword();
	this.instance.setTransform(38.5,136.5,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-136.5,118.9,273);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah7N8IAAgzID3AAIAAAzgAgHMhQgbAAgWgIQgWgHgQgNQgPgOgJgTQgIgTAAgYQAAgXAHgSQAGgRAMgNQALgMARgHQAQgHATgCIAAAzQgLABgJADQgIADgGAGQgGAFgDAJQgDAJAAAMQAAAaATANQATANAnAAIAPAAQATAAAPgDQAOgDAKgGQAKgGAFgKQAEgJAAgOQAAgMgCgJQgDgIgFgHQgGgFgIgDQgJgEgLgBIAAgzQATACAQAHQAQAHALANQAMAMAGASQAGASAAAXQAAAYgIATQgIATgQANQgPAOgXAHQgWAHgbAAgAh7I1IAAimIAqAAIAABzIA7AAIAAhjIAmAAIAABjIBDAAIAAh0IApAAIAACngAAuDwQALAAAIgDQAIgEAFgGQAEgGADgJQACgKAAgLQAAgKgCgHQgCgHgEgFQgEgFgFgCQgFgCgGAAQgHAAgFACQgFABgFAGQgEAFgEAKIgWA4QgHAQgHALQgJALgMAHQgMAGgRAAQgPAAgNgHQgNgGgJgMQgJgNgFgRQgFgQAAgUQAAgVAGgRQAGgRAKgMQAKgMAOgGQAOgHARAAIAAA0QgIAAgHACQgGACgFAGQgFAFgDAIQgCAHAAAKQAAAKACAIQACAHAEAFQAEAFAGACQAFADAGAAQAMAAAIgMQAJgNAHgYQAGgVAHgPQAHgQAJgKQAKgKAMgGQAMgFAPAAQARAAAMAHQANAGAJAMQAJALAFARQAEARAAAUQAAAMgCANQgCAMgFALQgEALgGAKQgHAKgJAHQgJAHgMAEQgLAEgOAAgAh7AgICvggIivgpIAAgrICvgpIivghIAAgzID3A3IAAA0IikAoICkAoIAAAyIj3A3gAgEjlQgcAAgXgIQgWgIgQgOQgQgOgJgTQgIgUAAgXQAAgXAIgUQAJgUAQgOQAQgOAWgHQAXgIAcAAIAJAAQAdAAAWAIQAXAHAQAOQAPAOAJAUQAIATAAAYQAAAXgIATQgJAUgPAOQgQAOgXAIQgWAIgdAAgAg/l3QgVAOAAAaQAAAaAVAOQAUAOAnAAIAJAAQAUAAAPgEQAPgDAKgHQAKgHAFgLQAFgKAAgMQAAgagUgOQgVgOgnAAIgJAAQgnAAgUAOgAh7neIAAhcQAAgWAFgRQAFgRAKgMQAJgMAOgGQAOgGATAAQANAAALADQALADAIAGQAHAFAGAJQAHAIAEAKIBmg1IACAAIAAA2IhbAvIAAApIBbAAIAAAzgAhHpZQgKAKAAAVIAAApIBKAAIAAgpQAAgKgCgIQgDgIgFgFQgFgFgGgCQgHgDgIAAQgSAAgKAKgAh7q9IAAhMQAAgaAJgVQAJgUAPgPQAQgPAWgJQAVgIAbAAIAJAAQAbAAAWAIQAWAJAPAPQAQAPAIAVQAJAVAAAZIAABMgAg+s3QgTAPAAAfIAAAZICkAAIAAgZQAAgegUgQQgUgQgmAAIgJAAQgmAAgUAQg");
	this.shape.setTransform(59.4,-25.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// img
	this.instance = new lib.icesword();
	this.instance.setTransform(40,133,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-133,112.2,266);


(lib.wing_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing();
	this.instance.setTransform(-275.5,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-275.5,-175,551,350);


(lib.sword_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.swordhand();
	this.instance.setTransform(-119,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119,-176,238,352);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo_img
	this.instance = new lib.logo();
	this.instance.setTransform(-95.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-23.5,166,68);


(lib.hand_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand_1();
	this.instance.setTransform(-20,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-19.5,40,39);


(lib.energyball_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.energyball();
	this.instance.setTransform(-68.5,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.5,-72,137,144);


(lib.body_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body();
	this.instance.setTransform(-102.5,-238);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.5,-238,205,476);


(lib.bg_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.setTransform(-358.5,-224);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-358.5,-224,717,448);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229.5,-128.7,459,257.4);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.578},7).to({alpha:1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.4,-33.4,160.2,65.9);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.578},7).to({alpha:1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-33.2,185.8,65.4);


(lib.wings = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// left
	this.wing = new lib.wing_1();
	this.wing.setTransform(-551,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.wing).to({scaleX:0.59,scaleY:0.77,skewX:-21.2,skewY:158.8,x:-407.8,y:25.6,alpha:0.641},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,skewX:0,skewY:180,x:-551,y:0,alpha:1},20,cjs.Ease.get(1)).wait(1));

	// right
	this.wing_1 = new lib.wing_1();

	this.timeline.addTween(cjs.Tween.get(this.wing_1).to({scaleX:0.65,scaleY:0.77,rotation:19.2,x:-114.4,y:24,alpha:0.641},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0,x:0,y:0,alpha:1},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-826.5,-175,1102,350);


(lib.weapon_selction = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// fire
	this.instance = new lib.Символ2();
	this.instance.setTransform(67.8,-21,0.682,0.682);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:21,scaleX:0.62,scaleY:0.62,x:78.3,y:-12.4,alpha:0.871},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:76.3,y:-7.7,alpha:0.802},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:75,y:-4.8,alpha:0.758},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:73.9,y:-2.4,alpha:0.722},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:73.2,y:-0.6,alpha:0.695},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:72.6,y:0.7,alpha:0.676},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:72.1,y:1.7,alpha:0.661},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:71.8,y:2.5,alpha:0.649},0).wait(1).to({regX:0,scaleX:0.51,scaleY:0.51,x:61,y:3.1,alpha:0.641},0).wait(1).to({regX:21,scaleX:0.56,scaleY:0.56,x:75.1,y:-4.9,alpha:0.76},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:77,y:-9.4,alpha:0.827},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:78.3,y:-12.3,alpha:0.87},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:79.3,y:-14.6,alpha:0.905},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:80.1,y:-16.5,alpha:0.933},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:80.7,y:-17.9,alpha:0.954},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:81.2,y:-19,alpha:0.97},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:81.6,y:-19.8,alpha:0.982},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:81.9,y:-20.5,alpha:0.992},0).wait(1).to({regX:0,scaleX:0.68,scaleY:0.68,x:67.8,y:-21,alpha:1},0).wait(1));

	// ice
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(-28,1.8,0.528,0.528,0,0,0,0.1,0);
	this.instance_1.alpha = 0.641;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:16.1,scaleX:0.58,scaleY:0.58,x:-22.6,y:-5.5,alpha:0.769},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:-24.3,y:-9.4,alpha:0.838},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:-25.4,y:-12,alpha:0.883},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-26.3,y:-14,alpha:0.918},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:-26.9,y:-15.5,alpha:0.945},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:-27.4,y:-16.7,alpha:0.965},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:-27.7,y:-17.5,alpha:0.98},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:-28,y:-18.1,alpha:0.991},0).wait(1).to({regX:0,scaleX:0.68,scaleY:0.68,x:-39.2,y:-18.7,alpha:1},0).wait(1).to({regX:16.1,scaleX:0.63,scaleY:0.63,x:-25.3,y:-11.9,alpha:0.881},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:-23.7,y:-8,alpha:0.813},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:-22.6,y:-5.5,alpha:0.77},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:-21.8,y:-3.6,alpha:0.736},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:-21.1,y:-2,alpha:0.708},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:-20.6,y:-0.8,alpha:0.687},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:-20.2,y:0.1,alpha:0.671},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:-19.9,y:0.8,alpha:0.658},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:-19.7,y:1.4,alpha:0.649},0).wait(1).to({regX:0.1,scaleX:0.53,scaleY:0.53,x:-28,y:1.8,alpha:0.641},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.2,-114.1,171.8,186.2);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(10));

	// Слой 5
	this.instance = new lib.Символ15();
	this.instance.setTransform(-91.2,-64.8,0.491,0.148);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:-80.8,alpha:1},4,cjs.Ease.get(-1)).to({scaleX:0.49,scaleY:0.15,x:-91.2,alpha:0},4,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:-80.8,alpha:1},4,cjs.Ease.get(-1)).to({scaleX:0.49,scaleY:0.15,x:-91.2,alpha:0},4,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(-80,-66.8,1,0.275);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({scaleY:1,y:-69.2,alpha:1},4,cjs.Ease.get(-1)).wait(1).to({scaleY:0.28,y:-66.8,alpha:0},4).to({_off:true},1).wait(4));

	// Слой 1
	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(-91.9,-65.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:0.27,alpha:0},4,cjs.Ease.get(1)).to({_off:true},1).wait(8).to({_off:false},0).to({scaleY:1,alpha:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.9,-98.6,237.7,65.4);


(lib.pricel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ8();
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ8();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Ar7L7Qk7k8gBm/QABm+E7k9QE9k7G+gBQG/ABE8E7QE8E9AAG+QAAG/k8E8Qk8E9m/AAQm+AAk9k9gArWrWQksEtgBGpQABGpEsEuQEuEsGoAAQGqAAEsksQEtkuAAmpQAAmpktktQksktmqABQmogBkuEtg");
	this.shape.setTransform(-1.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229.5,-229.5,459,459);


(lib.light_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.5,-229.5,59,459);


(lib.icesword_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shine
	this.instance = new lib.light_1();
	this.instance.setTransform(0,-4.4,3.9,1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.762},7).to({alpha:0},7).wait(1));

	// sword_img
	this.instance_1 = new lib.icesword();
	this.instance_1.setTransform(-40,-133);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-233.9,230.1,459);


(lib.icesword_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sword
	this.icesword_in = new lib.icesword_in();

	this.timeline.addTween(cjs.Tween.get(this.icesword_in).to({rotation:-4.5,x:2.6,y:-9.6},9,cjs.Ease.get(-1)).to({rotation:-9.2,x:5.2,y:-19.3},9,cjs.Ease.get(1)).to({rotation:-4.5,x:2.7,y:-9.6},9,cjs.Ease.get(-1)).to({rotation:0,x:0,y:0},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-233.9,230.1,459);


(lib.firesword_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shine
	this.instance = new lib.light_1();
	this.instance.setTransform(0,-4.4,3.9,1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.762},7).to({alpha:0},7).wait(1));

	// sword_img
	this.instance_1 = new lib.firesword();
	this.instance_1.setTransform(-38.5,-136.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-233.9,230.1,459);


(lib.firesword_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sword
	this.firesword_in = new lib.firesword_in();

	this.timeline.addTween(cjs.Tween.get(this.firesword_in).to({rotation:-5.1,x:2.3,y:-8.6},8,cjs.Ease.get(-1)).to({rotation:-11.7,x:5.2,y:-19.3},10,cjs.Ease.get(1)).to({rotation:-5.8,x:2.6,y:-9.6},9,cjs.Ease.get(-1)).to({rotation:0,x:0,y:0},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-233.9,230.1,459);


(lib.energyball_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// energyball - копия
	this.energyball = new lib.energyball_in();
	this.energyball.setTransform(-4.4,2.4,0.735,0.735,0,0,180);
	this.energyball.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.energyball).to({scaleX:1,scaleY:1,alpha:1},8).to({scaleX:0.74,scaleY:0.74,alpha:0},8).wait(1));

	// energyball
	this.energyball_1 = new lib.energyball_in();

	this.timeline.addTween(cjs.Tween.get(this.energyball_1).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.5,-72,137,144);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pricel();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229.5,-229.5,459,459);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.light = new lib.light_1();
	this.light.setTransform(0,141.6,1,2.274,90);
	this.light.compositeOperation = "lighter";

	this.light_1 = new lib.light_1();
	this.light_1.setTransform(0,-165.4,1,2.274,90);
	this.light_1.compositeOperation = "lighter";

	this.light_2 = new lib.light_1();
	this.light_2.setTransform(320.8,0,1,1.172);
	this.light_2.compositeOperation = "lighter";

	this.light_3 = new lib.light_1();
	this.light_3.setTransform(-320.7,0,1,1.172);
	this.light_3.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.light_3},{t:this.light_2},{t:this.light_1},{t:this.light}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-521.8,-269.1,1043.7,538.2);


(lib.sword = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(25));

	// firesword
	this.instance = new lib.firesword_1();
	this.instance.setTransform(0,-0.1,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-10.1},3,cjs.Ease.get(1)).to({y:248.9},8,cjs.Ease.get(-1)).to({_off:true},1).wait(23).to({_off:false},0).to({y:-10.1},9,cjs.Ease.get(1)).to({y:-0.1},3,cjs.Ease.get(-1)).wait(1));

	// icesword
	this.icesword = new lib.icesword_1();
	this.icesword.setTransform(-0.6,248.5,1,1,-15);
	this.icesword._off = true;

	this.timeline.addTween(cjs.Tween.get(this.icesword).wait(11).to({_off:false},0).to({y:-10.5},9,cjs.Ease.get(1)).to({y:-0.5},3,cjs.Ease.get(-1)).to({y:-10.5},3,cjs.Ease.get(1)).to({y:248.5},9,cjs.Ease.get(-1)).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.7,-255.9,341.1,502.9);


(lib.lights = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// light
	this.light = new lib.light_1();
	this.light.setTransform(555,39.7,1,0.216);
	this.light.alpha = 0;
	this.light._off = true;

	this.timeline.addTween(cjs.Tween.get(this.light).wait(14).to({_off:false},0).to({scaleY:1,y:-12.1,alpha:1},5,cjs.Ease.get(-1)).to({scaleY:0.22,y:39.7,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// light
	this.light_1 = new lib.light_1();
	this.light_1.setTransform(454.6,39.7,1,0.216);
	this.light_1.alpha = 0;
	this.light_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.light_1).wait(12).to({_off:false},0).to({scaleY:1,y:-12.1,alpha:1},5,cjs.Ease.get(-1)).to({scaleY:0.22,y:39.7,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(2));

	// light
	this.light_2 = new lib.light_1();
	this.light_2.setTransform(358.6,39.7,1,0.216);
	this.light_2.alpha = 0;
	this.light_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.light_2).wait(10).to({_off:false},0).to({scaleY:1,y:-12.1,alpha:1},5,cjs.Ease.get(-1)).to({scaleY:0.22,y:39.7,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(4));

	// light
	this.light_3 = new lib.light_1();
	this.light_3.setTransform(268.2,39.7,1,0.216);
	this.light_3.alpha = 0;
	this.light_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.light_3).wait(8).to({_off:false},0).to({scaleY:1,y:-12.1,alpha:1},5,cjs.Ease.get(-1)).to({scaleY:0.22,y:39.7,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(6));

	// light
	this.light_4 = new lib.light_1();
	this.light_4.setTransform(169.9,39.7,1,0.216);
	this.light_4.alpha = 0;
	this.light_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.light_4).wait(6).to({_off:false},0).to({scaleY:1,y:-12.1,alpha:1},5,cjs.Ease.get(-1)).to({scaleY:0.22,y:39.7,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(8));

	// light
	this.light_5 = new lib.light_1();
	this.light_5.setTransform(79.5,39.7,1,0.216);
	this.light_5.alpha = 0;
	this.light_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.light_5).wait(4).to({_off:false},0).to({scaleY:1,y:-12.1,alpha:1},5,cjs.Ease.get(-1)).to({scaleY:0.22,y:39.7,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(10));

	// light
	this.light_6 = new lib.light_1();
	this.light_6.setTransform(0.1,39.7,1,0.216);
	this.light_6.alpha = 0;
	this.light_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.light_6).wait(2).to({_off:false},0).to({scaleY:1,y:-12.1,alpha:1},5,cjs.Ease.get(-1)).to({scaleY:0.22,y:39.7,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(12));

	// light
	this.light_7 = new lib.light_1();
	this.light_7.setTransform(-78.3,39.7,1,0.216);
	this.light_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.light_7).to({scaleY:1,y:-12.1,alpha:1},5,cjs.Ease.get(-1)).to({scaleY:0.22,y:39.7,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.8,-9.9,59,99.3);


(lib.hit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25));

	// Слой 2 - копия: 2
	this.energyball = new lib.energyball_1();
	this.energyball.setTransform(-2.4,-0.8,0.708,0.708);
	this.energyball.alpha = 0;
	this.energyball.compositeOperation = "lighter";
	this.energyball._off = true;

	this.timeline.addTween(cjs.Tween.get(this.energyball).wait(1).to({_off:false},0).wait(1).to({regX:-2.2,regY:1.2,scaleX:5.24,scaleY:2.91,x:-23.2,y:-11.5,alpha:0.214},0).wait(1).to({scaleX:7.55,scaleY:4.02,x:-32.9,y:-17.4,alpha:0.323},0).wait(1).to({scaleX:8.97,scaleY:4.71,x:-39,y:-21,alpha:0.39},0).wait(1).to({scaleX:9.88,scaleY:5.15,x:-42.8,y:-23.3,alpha:0.432},0).wait(1).to({scaleX:10.46,scaleY:5.43,x:-45.2,y:-24.9,alpha:0.46},0).wait(1).to({regX:0,regY:0,scaleX:10.9,scaleY:5.65,x:-23.2,y:-32.8,alpha:0.48},0).to({alpha:0},17).wait(1));

	// Слой 2 - копия
	this.energyball_1 = new lib.energyball_1();
	this.energyball_1.setTransform(-2.4,-0.8,0.708,0.708);
	this.energyball_1.alpha = 0;
	this.energyball_1.compositeOperation = "lighter";
	this.energyball_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.energyball_1).wait(1).to({_off:false},0).wait(1).to({regX:-2.2,regY:1.2,scaleX:5.24,scaleY:2.91,x:-23.2,y:-11.5,alpha:0.214},0).wait(1).to({scaleX:7.55,scaleY:4.02,x:-32.9,y:-17.4,alpha:0.323},0).wait(1).to({scaleX:8.97,scaleY:4.71,x:-39,y:-21,alpha:0.39},0).wait(1).to({scaleX:9.88,scaleY:5.15,x:-42.8,y:-23.3,alpha:0.432},0).wait(1).to({scaleX:10.46,scaleY:5.43,x:-45.2,y:-24.9,alpha:0.46},0).wait(1).to({regX:0,regY:0,scaleX:10.9,scaleY:5.65,x:-23.2,y:-32.8,alpha:0.48},0).to({alpha:0},17).wait(1));

	// Слой 2
	this.energyball_2 = new lib.energyball_1();
	this.energyball_2.setTransform(-2.4,-0.8,0.708,0.708);
	this.energyball_2.alpha = 0;
	this.energyball_2.compositeOperation = "lighter";
	this.energyball_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.energyball_2).wait(1).to({_off:false},0).wait(1).to({regX:-2.2,regY:1.2,scaleX:5.24,scaleY:2.91,x:-23.2,y:-11.5,alpha:0.214},0).wait(1).to({scaleX:7.55,scaleY:4.02,x:-32.9,y:-17.4,alpha:0.323},0).wait(1).to({scaleX:8.97,scaleY:4.71,x:-39,y:-21,alpha:0.39},0).wait(1).to({scaleX:9.88,scaleY:5.15,x:-42.8,y:-23.3,alpha:0.432},0).wait(1).to({scaleX:10.46,scaleY:5.43,x:-45.2,y:-24.9,alpha:0.46},0).wait(1).to({regX:0,regY:0,scaleX:10.9,scaleY:5.65,x:-23.2,y:-32.8,alpha:0.48},0).to({alpha:0},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.hand_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// energy
	this.energyball = new lib.energyball_1();
	this.energyball.setTransform(3.6,43.8);
	this.energyball.alpha = 0.852;
	this.energyball.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.energyball).wait(1));

	// img
	this.instance = new lib.hand_2();
	this.instance.setTransform(-26,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.9,-66,137,181.8);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lights
	this.lights = new lib.lights();
	this.lights.setTransform(-242.7,132.4);

	this.timeline.addTween(cjs.Tween.get(this.lights).wait(30));

	// img
	this.bg_in = new lib.bg_in();

	this.timeline.addTween(cjs.Tween.get(this.bg_in).to({scaleX:1,scaleY:1,y:4.4},4,cjs.Ease.get(-1)).to({scaleX:0.99,scaleY:0.99,y:9.8},5,cjs.Ease.get(1)).to({scaleX:0.99,scaleY:0.99,y:5.4},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:0},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-358.5,-224,717,448);


(lib.angel_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.parent.parent.bg.gotoAndPlay(0);
	}
	this.frame_109 = function() {
		this.parent.parent.hit.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(109).call(this.frame_109).wait(8));

	// hand_2
	this.hand_2 = new lib.hand_2_1();
	this.hand_2.setTransform(94.8,-115.6);

	this.timeline.addTween(cjs.Tween.get(this.hand_2).to({scaleY:0.95,y:-130.8},4,cjs.Ease.get(-1)).to({scaleY:0.89,y:-146},5,cjs.Ease.get(1)).to({scaleY:0.95,y:-129.8},10,cjs.Ease.get(-1)).to({scaleY:1,y:-115.6},10,cjs.Ease.get(1)).to({scaleY:0.95,y:-130.8},4,cjs.Ease.get(-1)).to({scaleY:0.89,y:-146},5,cjs.Ease.get(1)).to({scaleY:0.95,y:-129.8},10,cjs.Ease.get(-1)).to({scaleY:1,y:-115.6},10,cjs.Ease.get(1)).to({scaleY:0.95,y:-130.8},4,cjs.Ease.get(-1)).to({scaleY:0.89,y:-146},5,cjs.Ease.get(1)).to({scaleY:0.95,y:-129.8},10,cjs.Ease.get(-1)).to({scaleY:1,y:-115.6},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:0.98,rotation:13,x:89.1,y:-119.5},8,cjs.Ease.get(-1)).to({scaleX:1,scaleY:0.89,rotation:66.5,x:65.6,y:-135.3},8,cjs.Ease.get(1)).to({scaleX:1.08,scaleY:0.87,rotation:53.1,x:62,y:-131.8},6,cjs.Ease.get(-1)).to({scaleX:1.16,scaleY:0.84,rotation:39.1,x:64.6,y:-128.1},1,cjs.Ease.get(1)).to({scaleX:1.2,scaleY:0.83,rotation:32.6,x:42.6,y:-126.4},1).to({scaleX:1.16,scaleY:0.84,rotation:39.1,x:64.6,y:-128.1},1).to({scaleX:1.2,scaleY:0.83,rotation:32.6,x:42.6,y:-126.4},1).to({scaleX:1.16,scaleY:0.84,rotation:39.1,x:64.6,y:-128.1},1).to({scaleX:1.4,scaleY:0.77,rotation:0,x:47.6,y:-117.8},2).wait(1));

	// body
	this.body = new lib.body_1();

	this.timeline.addTween(cjs.Tween.get(this.body).to({y:-12},4,cjs.Ease.get(-1)).to({y:-24},5,cjs.Ease.get(1)).to({y:-11.2},10,cjs.Ease.get(-1)).to({y:0},10,cjs.Ease.get(1)).to({y:-12},4,cjs.Ease.get(-1)).to({y:-24},5,cjs.Ease.get(1)).to({y:-11.2},10,cjs.Ease.get(-1)).to({y:0},10,cjs.Ease.get(1)).to({y:-12},4,cjs.Ease.get(-1)).to({y:-24},5,cjs.Ease.get(1)).to({y:-11.2},10,cjs.Ease.get(-1)).to({y:0},10,cjs.Ease.get(1)).to({y:-4.7},8,cjs.Ease.get(-1)).to({y:-24},8,cjs.Ease.get(1)).to({y:-19.1},6,cjs.Ease.get(-1)).to({x:6.4,y:-14},1,cjs.Ease.get(1)).to({x:-13.8,y:-11.7},1).to({x:6.4,y:-14},1).to({x:-13.8,y:-11.7},1).to({x:6.4,y:-14},1).to({x:0,y:0},2).wait(1));

	// hand_1
	this.hand_1 = new lib.hand_1_1();
	this.hand_1.setTransform(71.2,-126);

	this.timeline.addTween(cjs.Tween.get(this.hand_1).to({scaleY:0.9,x:72.4,y:-140},4,cjs.Ease.get(-1)).to({scaleY:0.8,x:73.6,y:-154},5,cjs.Ease.get(1)).to({scaleY:0.9,x:72.3,y:-139},10,cjs.Ease.get(-1)).to({scaleY:1,x:71.2,y:-126},10,cjs.Ease.get(1)).to({scaleY:0.9,x:72.4,y:-140},4,cjs.Ease.get(-1)).to({scaleY:0.8,x:73.6,y:-154},5,cjs.Ease.get(1)).to({scaleY:0.9,x:72.3,y:-139},10,cjs.Ease.get(-1)).to({scaleY:1,x:71.2,y:-126},10,cjs.Ease.get(1)).to({scaleY:0.9,x:72.4,y:-140},4,cjs.Ease.get(-1)).to({scaleY:0.8,x:73.6,y:-154},5,cjs.Ease.get(1)).to({scaleY:0.9,x:72.3,y:-139},10,cjs.Ease.get(-1)).to({scaleY:1,x:71.2,y:-126},10,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.96,rotation:5.8,x:69.2,y:-130.6},8,cjs.Ease.get(-1)).to({scaleX:0.52,scaleY:0.8,rotation:30,x:60.8,y:-149.2},8,cjs.Ease.get(1)).to({scaleX:0.61,scaleY:0.84,rotation:36.1,x:61.1,y:-143.9},6,cjs.Ease.get(-1)).to({scaleX:0.71,scaleY:0.88,rotation:42.4,x:67.9,y:-138.2},1,cjs.Ease.get(1)).to({scaleX:0.76,scaleY:0.9,rotation:45.4,x:47.8,y:-135.6},1).to({scaleX:0.71,scaleY:0.88,rotation:42.4,x:67.9,y:-138.2},1).to({scaleX:0.76,scaleY:0.9,rotation:45.4,x:47.8,y:-135.6},1).to({scaleX:0.71,scaleY:0.88,rotation:42.4,x:67.9,y:-138.2},1).to({scaleX:1,scaleY:1,rotation:60,x:62.4,y:-122.8},2).wait(1));

	// swordhand
	this.sword_hand = new lib.sword_hand();
	this.sword_hand.setTransform(-27.2,-102.4,1,1,0,0,0,112.8,-149.6);

	this.timeline.addTween(cjs.Tween.get(this.sword_hand).to({rotation:-7.1,x:-27.1,y:-114.4},4,cjs.Ease.get(-1)).to({regX:112.9,rotation:-14.4,y:-126.5},5,cjs.Ease.get(1)).to({regX:112.8,regY:-149.5,rotation:-6.6,x:-27.2,y:-113.5},10,cjs.Ease.get(-1)).to({regY:-149.6,rotation:0,y:-102.4},10,cjs.Ease.get(1)).to({rotation:-7.1,x:-27.1,y:-114.4},4,cjs.Ease.get(-1)).to({regX:112.9,rotation:-14.4,y:-126.5},5,cjs.Ease.get(1)).to({regX:112.8,regY:-149.5,rotation:-6.6,x:-27.2,y:-113.5},10,cjs.Ease.get(-1)).to({regY:-149.6,rotation:0,y:-102.4},10,cjs.Ease.get(1)).to({rotation:-7.1,x:-27.1,y:-114.4},4,cjs.Ease.get(-1)).to({regX:112.9,rotation:-14.4,y:-126.5},5,cjs.Ease.get(1)).to({regX:112.8,regY:-149.5,rotation:-6.6,x:-27.2,y:-113.5},10,cjs.Ease.get(-1)).to({regY:-149.6,rotation:0,y:-102.4},10,cjs.Ease.get(1)).to({regY:-149.7,rotation:-2.8,y:-107.2},8,cjs.Ease.get(-1)).to({regX:112.9,regY:-149.6,rotation:-14.4,x:-27.1,y:-126.5},8,cjs.Ease.get(1)).to({regX:112.8,scaleX:1,scaleY:1,rotation:-11.5,x:-27.2,y:-121.6},6,cjs.Ease.get(-1)).to({regY:-149.5,rotation:-8.3,x:-20.8,y:-116.4},1,cjs.Ease.get(1)).to({rotation:-6.8,x:-41.1,y:-114},1).to({rotation:-8.3,x:-20.8,y:-116.4},1).to({rotation:-6.8,x:-41.1,y:-114},1).to({rotation:-8.3,x:-20.8,y:-116.4},1).to({regY:-149.6,scaleX:1,scaleY:1,rotation:0,x:-27.2,y:-102.4},2).wait(1));

	// wings
	this.wings = new lib.wings();
	this.wings.setTransform(283.2,-95.2);

	this.timeline.addTween(cjs.Tween.get(this.wings).to({y:-107.2},4,cjs.Ease.get(-1)).to({y:-119.2},5,cjs.Ease.get(1)).to({y:-106.4},10,cjs.Ease.get(-1)).to({y:-95.2},10,cjs.Ease.get(1)).to({y:-107.2},4,cjs.Ease.get(-1)).to({y:-119.2},5,cjs.Ease.get(1)).to({y:-106.4},10,cjs.Ease.get(-1)).to({y:-95.2},10,cjs.Ease.get(1)).to({y:-107.2},4,cjs.Ease.get(-1)).to({y:-119.2},5,cjs.Ease.get(1)).to({y:-106.4},10,cjs.Ease.get(-1)).to({y:-95.2},10,cjs.Ease.get(1)).to({y:-99.9},8,cjs.Ease.get(-1)).to({y:-119.2},8,cjs.Ease.get(1)).to({y:-114.3},6,cjs.Ease.get(-1)).to({x:289.6,y:-109.2},1,cjs.Ease.get(1)).to({x:269.4,y:-106.9},1).to({x:289.6,y:-109.2},1).to({x:269.4,y:-106.9},1).to({x:289.6,y:-109.2},1).to({x:283.2,y:-95.2},1).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-543.3,-270.2,1102,508.2);


(lib.angel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(10).call(this.frame_20).wait(1));

	// angel_in
	this.angel_in = new lib.angel_in();
	this.angel_in.setTransform(-7.7,16.1);

	this.timeline.addTween(cjs.Tween.get(this.angel_in).wait(2).to({regX:4,regY:-23.8,x:64.6,y:-7.7},0).wait(1).to({x:99.7},0).wait(1).to({x:123.1},0).wait(1).to({x:140.1},0).wait(1).to({x:152.5},0).wait(1).to({x:161.1},0).wait(1).to({x:166.8},0).wait(1).to({x:170.3},0).wait(1).to({regX:0,regY:0,x:168.3,y:16.1},0).wait(1).to({regX:4,regY:-23.8,x:108.6,y:-7.7},0).wait(1).to({x:74.7},0).wait(1).to({x:51.7},0).wait(1).to({x:34.7},0).wait(1).to({x:21.8},0).wait(1).to({x:12.3},0).wait(1).to({x:5.6},0).wait(1).to({x:1},0).wait(1).to({x:-1.9},0).wait(1).to({regX:0,regY:0,x:-7.7,y:16.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-551,-254.1,1102,508.2);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-521.8,-269.1,1043.7,538.2);


// stage content:



(lib.league_of_angels_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		stage.scaleX = stage.scaleY = 2;
		stage.enableMouseOver();
		
		stage.canvas.width = 640 * 2;
		stage.canvas.height = 305 * 2;
		stage.canvas.style.width = '640px';
		stage.canvas.style.height = '305px';
		
		_this.pricel.visible = false;
		
		_this.ice.addEventListener("mouseover", IceOver);
		_this.left.addEventListener("mouseover", LeftOver);
		_this.right.addEventListener("mouseover", RightOver);
		_this.left.addEventListener("mouseout", LeftOut);
		_this.right.addEventListener("mouseout", RightOut);
		stage.canvas.addEventListener("click", fl_ClickToGoToWebPage);
		
		function IceOver()
		{
			_this.weapon_selction.gotoAndPlay(1);
			_this.sword.gotoAndPlay(1);
			_this.fire.addEventListener("mouseover", FireOver);
			_this.ice.removeEventListener("mouseover", IceOver);
			
		}
		
		function FireOver()
		{
			_this.weapon_selction.gotoAndPlay(10);
			_this.sword.gotoAndPlay(24);
			_this.ice.addEventListener("mouseover", IceOver);
			_this.fire.removeEventListener("mouseover", FireOver);
		}
		
		function LeftOver(){_this.angel.gotoAndPlay(1);_this.pricel.visible = true;}
		function RightOver(){_this.angel.gotoAndPlay(11);_this.pricel.visible = true;}
		function LeftOut(){_this.angel.gotoAndStop(0);_this.pricel.visible = false;}
		function RightOut(){_this.angel.gotoAndStop(0);_this.pricel.visible = false;}
		function fl_ClickToGoToWebPage() {window.open(clickTAG, "_blank");}
		
		stage.canvas.style.cursor = "none";
		this.pricel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pricel.x = stage.mouseX/2;
			this.pricel.y = stage.mouseY/2;
		}
		stage.canvas.onmouseover = function(){_this.pricel.visible = false;_this.title.gotoAndPlay(1);}
		stage.canvas.onmouseout = function(){_this.pricel.visible = false;_this.title.gotoAndPlay(9);}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// frame
	this.frame = new lib.Символ7();
	this.frame.setTransform(320.8,164.3);
	this.frame.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(1));

	// hit
	this.left = new lib.Символ4();
	this.left.setTransform(321.5,152,1.02,1);
	new cjs.ButtonHelper(this.left, 0, 1, 2, false, new lib.Символ4(), 3);

	this.right = new lib.Символ4();
	this.right.setTransform(534.5,152);
	new cjs.ButtonHelper(this.right, 0, 1, 2, false, new lib.Символ4(), 3);

	this.hit = new lib.hit();
	this.hit.setTransform(359.5,174.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit},{t:this.right},{t:this.left}]}).wait(1));

	// sword
	this.sword = new lib.sword();
	this.sword.setTransform(507.5,240);

	this.timeline.addTween(cjs.Tween.get(this.sword).wait(1));

	// button_select
	this.fire = new lib.Символ5();
	this.fire.setTransform(106.8,266.9);
	new cjs.ButtonHelper(this.fire, 0, 1, 2, false, new lib.Символ5(), 3);

	this.ice = new lib.Символ5();
	this.ice.setTransform(106.8,190.9);
	new cjs.ButtonHelper(this.ice, 0, 1, 2, false, new lib.Символ5(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ice},{t:this.fire}]}).wait(1));

	// weapon_selction
	this.weapon_selction = new lib.weapon_selction();
	this.weapon_selction.setTransform(76.7,195.1,0.79,0.79,90);

	this.timeline.addTween(cjs.Tween.get(this.weapon_selction).wait(1));

	// pricel
	this.pricel = new lib.Символ9();
	this.pricel.setTransform(-300.8,101.6,0.485,0.485);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// title
	this.title = new lib.title();
	this.title.setTransform(177.8,138);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// angel
	this.angel = new lib.angel();
	this.angel.setTransform(326.3,244.3);

	this.timeline.addTween(cjs.Tween.get(this.angel).wait(1));

	// logo
	this.logo = new lib.logo_1();
	this.logo.setTransform(580.9,31,0.616,0.616);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// energy
	this.energyball = new lib.energyball_1();
	this.energyball.setTransform(330.8,120,3.978,3.978);
	this.energyball.alpha = 0.48;
	this.energyball.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.energyball).wait(1));

	// bg
	this.bg = new lib.bg_1();
	this.bg.setTransform(320,152.5,0.906,0.906);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.1,-13.9,1289.4,664.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;