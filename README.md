# System Design

## Requirement Gathering

| Functional Requirements                             | Non-Functional Requirements |
| --------------------------------------------------- | --------------------------- |
| Notification Type (success, info, warning, error)   | Performance                 |
|                                                     |                             |
| Customization (text, duration, animation, position) | Accessibility               |
|                                                     |                             |
| Animation (fade, pop, slide)                        | User Experience             |
|                                                     |                             |
| Position (top left/right, bottom left/right)        | Compatibility               |
|                                                     |                             |
| Close Button                                        | Scalability                 |
|                                                     |                             |
| Stacking Behaviour                                  |                             |
|                                                     |                             |
| Notification Queue                                  |                             |

## HLD

<img src="/public/hld.png"></img>

## LLD process (machine coding)

1. Create a React App (might be vue/angular for you)
2. We use the `Hooks Pattern` to create our custom toast notification component.
