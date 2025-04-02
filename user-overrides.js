/** COOKIE BANNER HANDLING ***/
user_pref("cookiebanners.service.mode", 2);
user_pref("cookiebanners.service.mode.privateBrowsing", 2);

// PREF: enforce certificate pinning
// [ERROR] MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE
// 1 = allow user MiTM (such as your antivirus) (default)
// 2 = strict
user_pref("security.cert_pinning.enforcement_level", 1);

// PREF: disable login manager
user_pref("signon.rememberSignons", false);

// PREF: disable address and credit card manager
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

// PREF: display the installation prompt for all extensions
user_pref("extensions.postDownloadThirdPartyPrompt", false);

// PREF: download to Downloads automatically
user_pref("browser.download.useDownloadDir", true);

// PREF: dark theme
user_pref("browser.theme.content-theme", 0);
user_pref("browser.theme.toolbar-theme", 0);

// PREF: no bookmarks panel
user_pref("browser.toolbars.bookmarks.visibility", "never");

// PREF: browser UI density
user_pref("browser.uidensity", 1);

// PREF: UI
user_pref("sidebar.revamp", false);
user_pref("browser.download.autohideButton", false); // don't hide download button
user_pref("browser.uiCustomization.state", "{\"placements\":{\"widget-overflow-fixed-list\":[],\"unified-extensions-area\":[\"_f209234a-76f0-4735-9920-eb62507a54cd_-browser-action\",\"ublock0_raymondhill_net-browser-action\",\"_36bdf805-c6f2-4f41-94d2-9b646342c1dc_-browser-action\",\"copyplaintext_eros_man-browser-action\",\"_74145f27-f039-47ce-a470-a662b129930a_-browser-action\",\"_c2c003ee-bd69-42a2-b0e9-6f34222cb046_-browser-action\",\"browsec_browsec_com-browser-action\",\"_1935b298-ac62-11ec-b909-0242ac120002_-browser-action\",\"light_plugin_7571494ce0b94e11bb762b659a4ad71f_kaspersky_com-browser-action\",\"jid1-bofifl9vbdl2zq_jetpack-browser-action\"],\"nav-bar\":[\"back-button\",\"forward-button\",\"stop-reload-button\",\"vertical-spacer\",\"customizableui-special-spring1\",\"urlbar-container\",\"customizableui-special-spring2\",\"keepassxc-browser_keepassxc_org-browser-action\",\"button_scholar_google_com-browser-action\",\"zotero_chnm_gmu_edu-browser-action\",\"unified-extensions-button\",\"reset-pbm-toolbar-button\"],\"toolbar-menubar\":[\"menubar-items\"],\"TabsToolbar\":[\"firefox-view-button\",\"tabbrowser-tabs\",\"new-tab-button\",\"alltabs-button\",\"downloads-button\",\"bookmarks-menu-button\",\"history-panelmenu\"],\"vertical-tabs\":[],\"PersonalToolbar\":[\"personal-bookmarks\"]},\"seen\":[\"save-to-pocket-button\",\"developer-button\",\"ublock0_raymondhill_net-browser-action\",\"keepassxc-browser_keepassxc_org-browser-action\",\"_36bdf805-c6f2-4f41-94d2-9b646342c1dc_-browser-action\",\"_f209234a-76f0-4735-9920-eb62507a54cd_-browser-action\",\"copyplaintext_eros_man-browser-action\",\"_74145f27-f039-47ce-a470-a662b129930a_-browser-action\",\"_c2c003ee-bd69-42a2-b0e9-6f34222cb046_-browser-action\",\"browsec_browsec_com-browser-action\",\"_1935b298-ac62-11ec-b909-0242ac120002_-browser-action\",\"zotero_chnm_gmu_edu-browser-action\",\"light_plugin_7571494ce0b94e11bb762b659a4ad71f_kaspersky_com-browser-action\",\"button_scholar_google_com-browser-action\",\"reset-pbm-toolbar-button\",\"jid1-bofifl9vbdl2zq_jetpack-browser-action\"],\"dirtyAreaCache\":[\"nav-bar\",\"PersonalToolbar\",\"unified-extensions-area\",\"toolbar-menubar\",\"TabsToolbar\",\"vertical-tabs\"],\"currentVersion\":21,\"newElementCount\":16}");

// PREF: don't close Firefox with the last tab
user_pref("browser.tabs.closeWindowWithLastTab", false);

// PREF: switch recent tabs by CTRL+TAB
user_pref("browser.ctrlTab.sortByRecentlyUsed", true);

// PREF: restore Top Sites on New Tab page
user_pref("browser.newtabpage.activity-stream.feeds.topsites", true); // Shortcuts
user_pref("browser.newtabpage.activity-stream.default.sites", ""); // clear default topsites

// PREF: remove sponsored content on New Tab page
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // Sponsored shortcuts
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // Recommended by Pocket
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // Sponsored Stories

// PREF: no search on New Tab page
user_pref("browser.newtabpage.activity-stream.showSearch", false);

// PREF: restore search engine suggestions
user_pref("browser.search.suggest.enabled", true);

// PREF: chat-bot
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.shortcuts", false);
user_pref("browser.ml.chat.sidebar", false);
