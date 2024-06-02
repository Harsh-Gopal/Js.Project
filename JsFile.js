/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1.
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_title, _author, _genre, _year) {
    const NFT = {
        "title": _title,
        "author": _author,
        "genre": _genre,
        "year": _year
    };
    NFTs.push(NFT);
    console.log("Minted: " + _title);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    console.log("\nList of Books in the Library:");
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nID: \t\t" + (i + 1));
        console.log("Title:\t" + NFTs[i].title);
        console.log("Author:\t" + NFTs[i].author);
        console.log("Genre:\t" + NFTs[i].genre);
        console.log("Year:\t\t" + NFTs[i].year);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal number of books in the library: " + NFTs.length);
}

// call your functions below this line
mintNFT("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "Fantasy", 1997);
mintNFT("The Lord of the Rings: The Fellowship of the Ring", "J.R.R. Tolkien", "Fantasy", 1954);
mintNFT("A Game of Thrones", "George R.R. Martin", "Fantasy", 1996);
mintNFT("Percy Jackson & the Olympians: The Lightning Thief", "Rick Riordan", "Fantasy", 2005);
mintNFT("The Eye of the World", "Robert Jordan", "Fantasy", 1990);
listNFTs();
getTotalSupply();
