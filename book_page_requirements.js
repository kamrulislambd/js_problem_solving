function bookPageRequirements(book1Quantity, book2Quantity, book3Quantity){
    const perBook1Pages = 100;
    const perBook2Pages = 200;
    const perBook3Pages = 300;

    let book1Pages = book1Quantity * perBook1Pages;
    let book2Pages = book2Quantity * perBook2Pages;
    let book3Pages = book3Quantity * perBook3Pages;

    console.log(book1Pages);
    console.log(book2Pages);
    console.log(book3Pages);
}

bookPageRequirements(2, 5, 3);