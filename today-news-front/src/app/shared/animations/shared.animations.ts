import { query, stagger, style, transition, trigger, animate } from '@angular/animations';
export const listAnimation = trigger('list-items-animation', [
    transition('* <=> *', query(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      stagger(400, [
        animate('.7s ease-in-out', style({
          opacity: 1,
          transform: 'translateX(0%)'
        }))
      ])

    ], {optional: true}))
  ] )