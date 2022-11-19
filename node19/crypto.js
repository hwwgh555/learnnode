// Web Crypto API
(async () => {
  const { subtle, randomBytes } = require('node:crypto');

  const iv = randomBytes(16);
  const key = await subtle.generateKey(
    {
      name: 'AES-CBC',
      hash: 'SHA-256',
      length: 256,
    },
    true,
    ['encrypt', 'decrypt']
  );

  const secretMessage = 'I love node!';
  const encrypted = await subtle.encrypt(
    {
      name: 'AES-CBC',
      iv: iv,
    },
    key,
    secretMessage
  );

  const toText = (arrayBuffer) => {
    const dec = new TextDecoder("utf-8");
    return dec.decode(arrayBuffer)
  }

  console.log('encrypted: ' + toText(encrypted));

  const decrypted = await subtle.decrypt(
    {
      name: 'AES-CBC',
      iv: iv,
    },
    key,
    encrypted
  )
  console.log('decrypted: ' + toText(decrypted));

  const dec = new TextDecoder("utf-8");
  console.log(dec.decode(decrypted));
})()