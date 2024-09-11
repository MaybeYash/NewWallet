// app.js

document.getElementById('createWalletBtn').addEventListener('click', createWallet);

async function createWallet() {
    // Import the Keypair from Solana's web3.js module
    const { Keypair } = await import('@solana/web3.js');
    const wallet = Keypair.generate();
    const publicKey = wallet.publicKey.toBase58();
    const secretKey = wallet.secretKey.toString('base64'); // Encoding the secret key

    // Example Seed Phrase (replace with real phrase generation if needed)
    const seedPhrase = "use grocery bind curbs wheat gum close galaxy couch endless idea world"; // Replace with actual logic

    document.getElementById('solanaAddress').value = publicKey;
    document.getElementById('seedPhrase').value = seedPhrase;

    console.log("Public Key:", publicKey);
    console.log("Secret Key:", secretKey);
}
