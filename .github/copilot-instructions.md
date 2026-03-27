# Copilot Astro Base Template Instructions

When suggesting or generating code for this repository:

These are reusable base instructions for Astro projects, not project-specific rules.
Project-specific instructions should be added separately later.

## Architecture and Components

- Follow the existing codebase patterns and keep changes small and targeted.
- Reuse existing components, utilities, and styles whenever possible.
- Prefer straightforward, maintainable solutions over abstraction.
- Each component should represent one section focused on a single subject, theme, or customer conversion step.
- Create a separate component whenever a new subject, theme, or conversion step is introduced.
- Do not exceed 150 lines of code per file.
- Refactor as soon as a generated feature would push a file beyond 150 lines of code.

## SEO and Accessibility

- Preserve accessibility and responsive behavior.
- Every HTML generation must follow the best possible SEO and accessibility practices.

## Tailwind CSS

- Use the latest Tailwind CSS version supported by the project.
- Match the current Tailwind approach already used in the repository.
- Do not introduce Tailwind utility variables, custom utility layers, or extra tokens by default.
- Create Tailwind utility variables only when the user explicitly requests them.
- Create custom animations only if Tailwind cannot cover the requested animation.

## Change Safety

- Avoid unnecessary dependencies or refactors.
- Do not replace existing user work unless specifically instructed.
