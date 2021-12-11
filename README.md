![This is an image](./image/download.png)
# Safe MetaMask (with real-time phishing detector) Browser Extension
Fork Improvments:
---
This would be fork of metamask that can detect pretend hack (by d-app owner or host) and phishing

In this method in adition  to website/d-app address user has to approves the website main token, too. The wallet check the token info on explorer to match website address. Also warn user if the token price is zero or not listed on sites like coinmarketcap.com

When user wants to interact with a smart contract the wallet would check deployer of the smart contract be same as creator of approved token.



Some other risks:
---

For Split-view-attack risk consider using these package manager & downloader:

https://github.com/kpcyrd/pacman-bintrans

https://github.com/transparencylog/tl

