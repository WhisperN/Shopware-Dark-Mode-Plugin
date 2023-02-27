// Import all custom plugins
import DarkModeBannerPlugin from "./plugin/header/dark-mode-banner.plugin";

// Register the plugin via the existing PluginManager
const PluginManager = window.PluginManager;

// Register plugin
PluginManager.register('DarkModeBanner', DarkModeBannerPlugin, '[dark-mode-banner]');


// Registering
// PluginManager.register('Imported', Imported, 'irgendwas');

if (module.hot) {
    module.hot.accept();
}