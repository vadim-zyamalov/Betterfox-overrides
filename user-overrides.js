/* ----------------------------- *
 * Some privacy related features *
 * ----------------------------- */

user_pref("browser.contentblocking.category", "standard");

// PREF: disable login manager
user_pref("signon.rememberSignons", false);
user_pref("signon.autofillForms", false);
user_pref("signon.generation.enabled", false);
user_pref("signon.firefoxRelay.feature", "disabled");
user_pref("services.sync.engine.passwords", false);

// PREF: disable address and credit card manager
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

// PREF: No damned AI and ML
user_pref("browser.ml.enable", false);
user_pref("extensions.ml.enabled", false);

user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.shortcuts", false);
user_pref("browser.ml.chat.sidebar", false);
user_pref("browser.ml.pageAssist.enabled", false);
user_pref("browser.ml.smartAssist.enabled", false);
user_pref("browser.ml.linkPreview.enabled", false);

user_pref("browser.search.visualSearch.featureGate", false);
user_pref("browser.tabs.groups.smart.enabled", false);
user_pref("browser.urlbar.quicksuggest.mlEnabled", false);

user_pref("browser.ai.control.default", "blocked");
user_pref("browser.ai.control.linkPreviewKeyPoints", "blocked");
user_pref("browser.ai.control.pdfjsAltText", "blocked");
user_pref("browser.ai.control.sidebarChatbot", "blocked");
user_pref("browser.ai.control.smartTabGroups", "blocked");
user_pref("browser.ai.control.smartWindow", "blocked");
user_pref("browser.ai.control.translations", "blocked");

user_pref("pdfjs.enableAltText", false);
user_pref("places.semanticHistory.featureGate", false);

// PREF: disable tranlations
user_pref("browser.translations.enable", false);
user_pref("browser.translations.select.enable", false);
user_pref("browser.translations.automaticallyPopup", false);

// PREF: display the installation prompt for all extensions
user_pref("extensions.postDownloadThirdPartyPrompt", false);

// PREF: restore search engine suggestions
user_pref("browser.search.suggest.enabled", true);

// PREF: download to Downloads automatically
user_pref("browser.download.useDownloadDir", true);

/* ----------- *
 * UI settings *
 * ----------- */

// PREF: dark theme
user_pref("browser.theme.content-theme", 0);
user_pref("browser.theme.toolbar-theme", 0);

// PREF: no bookmarks panel
user_pref("browser.toolbars.bookmarks.visibility", "newtab");

// PREF: browser UI density
user_pref("browser.uidensity", 1);

// PREF: Sidebar
user_pref("sidebar.revamp", false);
user_pref("sidebar.visibility", "hide-sidebar");
user_pref("sidebar.revamp.round-content-area", true);
user_pref("sidebar.main.tools", "syncedtabs,history,bookmarks");
user_pref("sidebar.expandOnHoverMessage.dismissed", true);

// PREF: Vertical tabs
user_pref("sidebar.verticalTabs", false);

// PREF: restore Top Sites on New Tab page
user_pref("browser.newtabpage.activity-stream.feeds.topsites", true); // Shortcuts
user_pref("browser.newtabpage.activity-stream.default.sites", ""); // clear default topsites

// PREF: remove sponsored content on New Tab page
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // Sponsored shortcuts
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // Recommended by Pocket
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // Sponsored Stories

// PREF: no search on New Tab page
user_pref("browser.newtabpage.activity-stream.showSearch", false);

/* ----------- *
 * UX settings *
 * ----------- */

// PREF: restore session
user_pref("browser.startup.page", 3);

// PREF: don't hide download button
user_pref("browser.download.autohideButton", false);

// PREF: don't close Firefox with the last tab
user_pref("browser.tabs.closeWindowWithLastTab", false);

// PREF: switch recent tabs by CTRL+TAB
user_pref("browser.ctrlTab.sortByRecentlyUsed", true);
