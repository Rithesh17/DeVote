var Vote = artifacts.require("Vote");
var candidates = ["C. Eisgruber","Eis Eis Gruber", "Chris"];
var addresses = ['0xe80590db5C6194D081473f2Ea5887B71024fb320','0x72E0B458Bc29d424A014c253F241c6B65090f8dA','0x45e751AB8d310d0ef6b3146D3cF7A395a31b6701', '0xda6416cFE6ECd288d6ffE300600A69Eb6ffC527B', '0x21097bB22E1F3f9A0741B7A9e016f88fbE64248a', '0xc18569Ee91283D386675dF6ad5F810dE7E944222', '0x7003164E5AA5A08DbD6e953e4FB95f170df29AAB'];

//Address to Person directory (TESTING PURPOSES ONLY, real client implementation would not have this)
//0x627 is Test 1 and the Host
//0xf17 is Test 2
//0xC5 is Test 3
//0x7ad is Michael Man
//0x41 is Sten
//0xA8C is Michael Psenka
//0xF91 is Bevin

module.exports = function(deployer) {
  deployer.deploy(Vote, candidates.map(x => web3.utils.asciiToHex(x)), addresses);
};
