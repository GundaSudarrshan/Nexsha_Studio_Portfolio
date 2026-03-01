# NexshaStudioPortfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Technicalities of Project

This section explains the concrete implementation steps taken, where key code and data live, and how the developer can understand and continue work quickly.

1. Initialize project
	- Angular 19 project scaffolded in the repository root using the Angular CLI.
2. Repository layout
	- Key folders: `src/app/core/`, `src/app/features/`, `src/app/models/`, `public/assets/data/`.
3. Data schema
	- Interfaces defined in `src/app/models/portfolio.model.ts` (Studio, SocialLink, Founder, Project, Service).
4. Data source
	- Primary JSON content is at `public/assets/data/portfolio-data.json`. Update this file to change content without editing UI code.
5. Data service
	- `src/app/core/services/portfolio.service.ts` loads `portfolio-data.json` and exposes signal-backed getters (`studio`, `projects`, `services`, `socialLinks`).
6. Feature components
	- Main home page component: `src/app/features/home/home.component.ts` (standalone component rendering hero, services, projects, and contact/footer sections).
7. Routing & bootstrap
	- Routes defined in `src/app/app.routes.ts`. Application config in `src/app/app.config.ts`.
8. Styling
	- Global SCSS at `src/styles.scss`. Component-level SCSS is used inside standalone components for modular styles.
9. Build & test
	- Use `npm install` then `ng serve` for development. Production build: `ng build --configuration production`. The compiled output is in `dist/nexsha-studio-portfolio`.
10. Deployment
	- `vercel.json` added for Vercel-friendly routing. Connect this repo to Vercel (or push to GitHub and let Vercel import) for automatic deployments.

Notes for developers
- Update content only in `public/assets/data/portfolio-data.json` for content changes.
- Add images to `public/assets/images/` and reference them from the JSON file.
- To add new features, create standalone components inside `src/app/features/` and register routes in `src/app/app.routes.ts`.

