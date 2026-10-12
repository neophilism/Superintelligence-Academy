# Academy shared project access (SIA-002)

- This application consumes the single engine-owned ProjectPortal component from the exact git submodule SHA recorded under vendor/engine. Do not maintain a second Academy-specific project database, copy of authentication helpers or shadow artifact IDs.
- The engine must be configured with a real OIDC issuer, authorized project memberships, exact product CORS origins, and a database. Academy browser origin NEXT_PUBLIC_ENGINE_ORIGIN and NEXT_PUBLIC_COMMAND_ORIGIN are public HTTPS origins, never secrets.
- The sign-in and organization selectors use the Engine product-specific OIDC session. Project creation, artifact listing and revision history call the real Engine project APIs, not mock routes. Unconfigured services are clearly labeled and perform no writes.
- A project link to the Command Center carries canonical tenant and project IDs only. Access is rechecked after switching applications; the other product must establish its own authorized session.
- Production acceptance requires real test accounts and a three-host same-site browser test that creates a project in Academy, sees exactly the same IDs and revisions in Command Center, and verifies unauthorized tenants are denied. This cannot be certified without configured deployment domains and secrets.
