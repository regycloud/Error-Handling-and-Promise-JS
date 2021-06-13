// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  
  const pAequorFactory = (number, array) => {
    const output = {
      specimenNum: number,
      dna: array,
      mutate() {
        let randomBase = Math.floor(Math.random() * this.dna.length);
        let newGeneratedBase = returnRandBase()
        // This will make the base generate randomly but never the same as the previous one.
        while (this.dna[randomBase] == newGeneratedBase) {
          newGeneratedBase = returnRandBase();
          // console.log(base);
        }
        this.dna[randomBase] = newGeneratedBase;
        console.log(this.dna);
      },
    //   Create a method to compare with another pAequor.
      compareDNA(pAequor) {
        let identical = 0;
        for (let i = 0 ; i < this.dna.length; i++) {
          if (this.dna[i] == pAequor[i]) {
            identical += 1;
          }
        }
        const percentage = (identical / this.dna.length * 100);
        if (percentage % 2 > 0) {
          result = percentage.toFixed(2);
        } else {
          result = percentage;
        }
        console.log(`specimen #1 and specimen #2 have ${result}% DNA in common`);
      },
    //   Create a method to check if the DNA contains 60% > 'C' and 'G'.
      willLikelySurvive() {
        let contain = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] == 'G' || this.dna[i] == 'C') {
            contain++;
          }
        }
        let percentage = contain / this.dna.length * 100;
        if (percentage >= 60) {
          return true ;
        } else {
          return false;
        }
      },
    //   The complement of DNA. T with A, C with G, and vice versa.
      complementStrand() {
        const complement = [];
        for (i = 0; i < this.dna.length; i++) {
          if (this.dna[i] == 'T') {
            complement.push('A');
          } else if (this.dna[i] == 'A') {
            complement.push('T');
          } else if (this.dna[i] == 'C') {
            complement.push('G');
          } else if (this.dna[i] == 'G') {
            complement.push('C');
          }
        }
        return complement;
      }
    }
    return output;
  }
  
  const storedSpecimen = [];
  for (i = 0; i < 30; i++) {
    storedSpecimen.push(pAequorFactory(i, mockUpStrand()));
  };
  
  
  
  
  // Run the program
  let result = pAequorFactory(1, mockUpStrand());
  console.log(result.dna);
  result.mutate();
  
  result.willLikelySurvive();
  console.log(result.complementStrand());
  // Run task 5
  result.compareDNA([ 'A', 'G', 'C', 'C', 'C', 'G', 'C', 'C', 'C', 'T', 'G', 'A', 'T', 'A', 'G' ]);
  
  
  console.log(storedSpecimen[0].dna);
  
  
  
  
  
  
  
  
  