function calculate() {
    hashrate = document.getElementById("hashrate").value;
    ethdiff = 11536630000000000
    ethprice = 4471.21
    blockreward = 2
    result = document.getElementById("ethmined");
    result.innerHTML = `${((hashrate * blockreward) / ethdiff) * ethprice * 24}eth mined per day`
}