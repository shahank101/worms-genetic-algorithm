class DNA {
	constructor(genes) {
		if (genes) {
			this.genes = genes;
		} else {
			this.genes = [];
		//  YOU JUST HAD TO PUT EVERYTHING IN THE ELSE BLOCK YOU WASTED A YEAR BEAUSE OF THAT SHOUNAK
		for (let i = 0; i < lifespan; i++) {
			this.genes[i] = p5.Vector.random2D();
			this.genes[i].mult(random(0, velMag));  // Multiplying the vectors helps in smoothenings
			//this.genes[i].mult(velMag)
			this.mutationRate = 0.01;
		}
	}
	}

	crossover(partner, f1, f2) {

		let newgenes = [];
		let mid = floor(random(this.genes.length));
		for (let i = 0; i < this.genes.length; i++) {
			if (i > mid) {
				newgenes[i] = this.genes[i];
			} else {
				newgenes[i] = partner.genes[i];
			}
		}

		return new DNA(newgenes);

	}


	mutation() {
		for (let i = 0; i < this.genes.length; i++) {
			if (random(1) < this.mutationRate) {
				this.genes[i] = p5.Vector.random2D();
				//this.genes[i].setMag(velMag);
				//console.log("MUTATED!");
			}
		}
	}


}