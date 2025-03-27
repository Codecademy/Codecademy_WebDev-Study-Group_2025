// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory(num, arr) {
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
      let i = Math.floor(Math.random() * 14);
      let origBase = this.dna[i];
      this.dna[i] = returnRandBase();
        if (origBase === this.dna[i]) {
          this.dna[i] = returnRandBase();
        };
      return this.dna;
    },
    compareDNA(pAequor) {
      const commonBases = this.dna.reduce((count, base, index) => {
        if (base === pAequor.dna[index]) {
          count++;
        }
        return count;
      }, 0);
      const percentage = ((commonBases / this.dna.length) * 100).toFixed(2);
      console.log(`Specimen #${this.specimenNum} and Specimen #${pAequor.specimenNum} have ${percentage}% DNA in common.`);
    },
    willLikelySurvive() {
      const survivalBases = this.dna.filter(base => base === 'C' || base === 'G').length;
      const survivalPerc = ((survivalBases / this.dna.length) * 100).toFixed(2);
      return survivalPerc >= 60;
    }
  };
};

const likelyToSurvive = () => {
  let thirtyToSurvive = [];
  let id = 1;
  while (thirtyToSurvive.length < 30) {
    const specimen = pAequorFactory(id, mockUpStrand());
    if (specimen.willLikelySurvive()) {
      thirtyToSurvive.push(specimen);
    }
    id++;
  }
  return thirtyToSurvive;
}


/*
const survivingSpecimens = likelyToSurvive();
console.log(survivingSpecimens);

survivingSpecimens.forEach(specimen => {
    const survivalBases = specimen.dna.filter(base => base === 'C' || base === 'G').length;
    const survivalPerc = (survivalBases / specimen.dna.length) * 100;
    console.log(`Specimen #${specimen.specimenNum} has ${survivalPerc.toFixed(2)}% 'C' and 'G' bases.`);
    });

const specimen1 = pAequorFactory(1, mockUpStrand());
const specimen2 = pAequorFactory(2, mockUpStrand());

console.log(specimen1.willLikelySurvive());

specimen1.compareDNA(specimen2);

console.log(specimen1);

console.log('Original DNA: ' + specimen1.dna);
console.log('Mutated DNA: ' + specimen1.mutate());
*/
