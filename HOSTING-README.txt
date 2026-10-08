TOPLINE FOOD EQUIPMENT — SOURCE EXPORT

This public_html folder contains the complete src and public folders and the
existing requested project configuration files. This is source code, NOT a
ready-to-upload static website. Dependencies, secrets, Git metadata, and
compiled build output are excluded.

vitest.config.ts was not present in the project and has not been invented.

HOSTING REQUIREMENTS
A PHP/static-only public_html folder cannot run this TanStack Start application.
Use Node.js 22 hosting or another supported server runtime. Keep source files
outside the public web root on a production server.

DOCUMENTED NODE HOSTING STEPS
1. Install Bun and Node.js 22.
2. Run in this folder: bun install --frozen-lockfile
3. Build: NITRO_PRESET=node-server bun run build
4. Start: node .output/server/index.mjs
5. Configure your hosting service/reverse proxy to forward HTTPS traffic to
   the running app (default port 3000).
These are deployment instructions, not a tested external-host deployment.
Confirm compatibility with your host before switching traffic.

PHOTOS
Copies of all hosted images are included under public/__l5e/assets-v1/ so the
existing URL references can work on your own hosting. Preserve these paths and
ensure your host serves them. Other images remain in src/assets for bundling.
Google Fonts still load from the internet.

ENQUIRIES
The enquiry and contact forms show a local acknowledgement only. They do not
send emails or store enquiries. Connect a delivery service before relying on
them for customer requests.

OFFICIAL SELF-HOSTING DOCUMENTATION
https://docs.lovable.dev/tips-tricks/external-deployment-hosting
