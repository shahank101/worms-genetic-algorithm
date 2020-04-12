class Population {
	constructor() {
		this.rockets = [];
		this.popsize = 100;
		this.matingpool = [];

		for (let i = 0; i < this.popsize; i++) {
			this.rockets[i] = new Rocket();
		}

	}

	run() {
		for (let i = 0; i < this.popsize; i++) {
			this.rockets[i].update();
			this.rockets[i].show();	
		}
	}

	evaluate() {

				this.matingpool = [];

		let maxFit = 0;

		for (let i = 0; i < this.popsize; i++) {
			this.rockets[i].calcFitness();
			if (this.rockets[i].fitness > maxFit) {
				maxFit = this.rockets[i].fitness;
			}
		}




		for (let i = 0; i < this.popsize; i++) {
			this.rockets[i].fitness /= maxFit;
		}

		for (let i = 0; i < this.popsize; i++) {
			let n = this.rockets[i].fitness * 100;

			for (let j = 0; j < n; j++) {
				this.matingpool.push(this.rockets[i]);
			}

		}


	}


	selection() {

		let newRockets = [];

		for (let i = 0; i < this.rockets.length; i++) {
			let parentA = random(this.matingpool).dna;
			let parentB = random(this.matingpool).dna;
			let child = parentA.crossover(parentB, parentA);
			child.mutation();
			newRockets[i] = new Rocket(child)
		}


		this.rockets = newRockets;




	}
	
/* 		separate(vehiclelist){
		// variables for calculating average vector
		console.log("Yo!");
		var sum = createVector(); 
		var count = 0;

		for(var i=0; i< vehiclelist.length; i++){
			console.log("Yo!2");

			var d = vehiclelist[i].pos.dist(this.pos);	// dist between this and other vehicles
			if((d>0) && (d < this.desiredseparation)){		// d>0 ensures this is not compared to itself
				console.log("Yo!2.1");
				var diff = p5.Vector.sub(this.pos,vehiclelist[i].pos);	// a vector pointing away from other's position
				diff.normalize();
				sum.add(diff);			// add all vectors and increment count
				count++;
			}
		}

		console.log("Yo!3");
		if(count != 0){
			sum.div(count);
			sum.setMag(velMag);	// scale avg to maxspeed
			var steer = p5.Vector.sub(sum, this.vel);
			steer.limit(this.maxforce);
			this.applyForce(steer);
		}
	} */





}