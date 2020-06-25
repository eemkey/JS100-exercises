extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'

function extractRegion(locale) {
  let regex = /[^A-Za-z0-9]/g;
  let newStr = locale.split(regex);
  return newStr[1];
}