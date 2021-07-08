const set = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin'])
set.delete('Beethoven');
console.log(set); //  Beethoven is deleted from set and the output will be --- Set(2) { 'Mozart', 'Chopin' }