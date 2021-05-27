const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];
  
  //Est-ce que tous les livres ont été au moins empruntés une fois ?
  const result = books.filter(books => books.rented >= 1);
  console.log(result);

  //Quel est livre le + emprunté ?
  Rented = books.map(books => books.rented);
  result12 = Math.max(...Rented);
  console.log(result12);

  //quel est le livre le - emprunté ?
  Rented = books.map(books => books.rented);
  result13 = Math.min(...Rented);
  console.log(result13);
 

  //Trouve le livre avec l'ID: 873495
  result5 = books.filter(book => book.id === 873495)
  console.log(result5)

  //Supprime le livre avec l'ID: 133712
  result6 = books.filter(book => book.id != 133712)
    console.log(result6)

  //Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
  const result7 = books.sort((a, b) => a.title.localeCompare(b.title))
  console.log(result7)