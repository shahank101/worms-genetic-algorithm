let count = 0;

class Rocket {
	constructor(dna) {
		this.pos = createVector(width/2, height-20);
		this.vel = createVector(0, 0);
		this.acc = createVector(0, 0);
		if (dna) {
			this.dna = dna;
		} else {
			this.dna = new DNA();

		}
		this.count = 0;
		this.fitness;
		this.completed = false;
		this.crashed = false;
		this.time = 0;
		this.w = 20;
		this.h = 5;
		this.mass = 2;
		//this.recordDist = 0;

	}

	applyForce(force) {
		this.acc.add(force);
		//this.acc.mult(1this.mass);
	}


	calcFitness() {
		//let time = 0;
		let recordDist = 0
		let d = dist(this.pos.x, this.pos.y, target.x, target.y);

		if (d < recordDist) {
			recordDist = d;
			//console.log(this.recordDist)
		}

		if (d == 0) {
			d = 0.0000000001;
		}

		if (recordDist == 0) {
			recordDist = 0.00001;
		}

		//let time = d/this.vel.mag();
		let fit = 1/(this.time*recordDist);
		this.fitness = 2**fit;

		if (this.completed) {
			this.fitness *= 10;
		}
		if(this.crashed) {
			this.fitness *= 0.5;
			//this.vel.mult(-1);
		}


	}


	update() {

		let d = dist(this.pos.x, this.pos.y, target.x, target.y);
		if (d < 10) {
			this.completed = true;
			this.pos = target.copy();
		}  else if (!this.completed) {
			this.time++;
		}

		  


		if (obstacles) {
			for (let i = obstacles.length-1; i >= 0; i--) {   // You actually had to loop through the array backwards aas some elements got missed when new obstacles were dynamically being added
				this.checkCrash(obstacles[i]);
				//console.log("Checking" + i);
			}
		}

		//this.checkCrash(ob1);
		//this.checkCrash(ob2);


		let forc = this.dna.genes[count];
		//this.applyForce(forc);
		if (!this.completed  && !this.crashed ) {
		this.vel.add(forc);
		this.pos.add(this.vel);
		this.acc.mult(0);
		this.vel.limit(5);

		this.checkSides();
		//this.separate();

		}
	}


	show() {
		push();
		stroke(0);
		fill(255);
		translate(this.pos.x, this.pos.y);
		rotate(this.vel.heading());
		rectMode(CENTER);
		rect(0, 0, this.w, this.h);
		pop();
	}

    checkCrash(obj) {
    	if (this.pos.y> obj.y && this.pos.y < obj.y + obj.h) {
			if (this.pos.x > obj.x && this.pos.x < obj.x + obj.w) {
				this.crashed = true;
				//this.vel.mult(0);
			}
		}
    }

    checkSides() {
    	if (this.pos.y > height) {
			this.vel.y *= -1;
			this.pos.y = height;
			//this.fitness *= 0.1;
		}
		if (this.pos.y < 0) {
			this.vel.y *= -1;
			this.pos.y = 0;
			//this.fitness *= 0.1;

		}
		if (this.pos.x > width) {
			this.vel.x *= -1;
			this.pos.x = width;
			//this.fitness *= 0.1;

		}
		if (this.pos.x < 0) {
			this.vel.x *= -1;
			this.pos.x = 0;
			//this.fitness *= 0.1;

		}
    }
	


}




