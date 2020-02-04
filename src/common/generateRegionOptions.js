import browser from "webextension-polyfill";
const alphabeticallySort = (a, b) => a.name.localeCompare(b.name);

export default () => {
  const regionListText = browser.i18n.getMessage("awsRegionList");
  const regionList = regionListText.split(", ");
  const regionOptions = regionList.map(region => ({
    value: region,
    name: region
  }));
  regionOptions.sort(alphabeticallySort);
  return regionOptions;
};
