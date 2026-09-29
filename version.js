/* TeamChanges — single global version constant (CountMeIn/version.js pattern).
   Deploy: bump here, push, poll the served version.js, THEN update apa_core.apps
   SET version=$NEW WHERE app_name='TeamChanges'  (serve-then-bump, reference_deploy.md). */
window.APP_VERSION = '0.3';
