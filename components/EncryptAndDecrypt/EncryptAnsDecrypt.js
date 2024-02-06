const encryptionKey = "0d9f625a47ad877fad7326c6cff6c6d8355884bcd3e627455d6df88ea874639fa15691053e47d257360abbc20db920310f26d41ca6aaaf6a89433f6466eb72e8b816a78609fa0a5e8a9eb49f71fb3c63ee07fea0243f3a5768d6012cb5a79aeec95b047a735d914daff7b23151235accb81aee8cf331a62daa96613bc59722982b2bb7a7d8cb815a849d71fa"; // Replace with your actual encryption key

function encryptTransform(data) {
  let encryptedData = "";
  for (let i = 0; i < data?.length; i++) {
    const charCode = data?.charCodeAt(i) ^ encryptionKey?.charCodeAt(i % encryptionKey.length);
    encryptedData += String.fromCharCode(charCode);
  }
  return encryptedData;
}

function decryptTransform(encryptedData) {
  let decryptedData = "";
  for (let i = 0; i < encryptedData?.length; i++) {
    const charCode = encryptedData?.charCodeAt(i) ^ encryptionKey.charCodeAt(i % encryptionKey?.length);
    decryptedData += String.fromCharCode(charCode);
  }
  return decryptedData;
}

export { encryptTransform, decryptTransform };
