# Simple A Translate

This repository will develop simple translate addon which use **[Amazon Translate](https://aws.amazon.com/translate/)**

## Backers

This repository was forked from sienori's repository "Simple Translate".

If you want to become backers, you can.
See the links below.

Thank you to the awesome **[backers](https://github.com/sienori/simple-translate/blob/master/BACKERS.md)** who supported Simple Translate!

[<img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Became a Patreon">](https://www.patreon.com/sienori)

## How To Use
1. Create your backend infrastracture using [translate-infra-cdk](https://github.com/reosora/translate-infra-cdk)
2. Enter your endpoint url on setting page

## Developing

1. Clone the repository `git clone https://github.com/reosora/simple-a-translate`
2. Run `npm install`
3. Run `npm run watch-dev`

### Load the extension in Chrome

1. Open Chrome browser and navigate to `chrome://extensions`
2. Select "Developer Mode" and then click "Load unpacked extension..."
3. From the file browser, choose to `simple-a-translate/dev/chrome`

### Load the extension in Firefox

1. Open Firefox browser and navigate to `about:debugging`
2. Click "Load Temporary Add-on" and from the file browser, choose `simple-a-translate/dev/firefox`
