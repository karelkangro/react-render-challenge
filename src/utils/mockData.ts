import { AIGeneratedSlide } from '@/types';

export const mockSlides: AIGeneratedSlide[] = [
  {
    id: 'slide-1',
    layout: {
      type: 'title',
      dimensions: {
        width: 1920,
        height: 1080
      },
      backgroundColor: '#ffffff'
    },
    columns: [
      {
        id: 'column-1',
        width: 1920,
        x: 0,
        components: [
          {
            id: 'title-1',
            type: 'text',
            content: 'Welcome to the Presentation',
            position: {
              x: 200,
              y: 400,
              width: 1520,
              height: 100
            },
            style: {
              fontSize: 48,
              color: '#000000'
            }
          },
          {
            id: 'subtitle-1',
            type: 'text',
            content: 'An introduction to our company',
            position: {
              x: 400,
              y: 520,
              width: 1120,
              height: 60
            },
            style: {
              fontSize: 32,
              color: '#888888'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'slide-2',
    layout: {
      type: 'two-column',
      dimensions: {
        width: 1920,
        height: 1080
      },
      backgroundColor: '#ffffff'
    },
    columns: [
      {
        id: 'column-1',
        width: 960,
        x: 0,
        components: [
          {
            id: 'heading-1',
            type: 'text',
            content: 'Our Mission',
            position: {
              x: 80,
              y: 80,
              width: 800,
              height: 60
            },
            style: {
              fontSize: 36,
              color: '#000000'
            }
          },
          {
            id: 'content-1',
            type: 'text',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a bibendum bibendum, augue magna tincidunt enim, eget ultricies magna augue eget est.',
            position: {
              x: 80,
              y: 160,
              width: 800,
              height: 400
            },
            style: {
              fontSize: 24,
              color: '#000000'
            }
          }
        ]
      },
      {
        id: 'column-2',
        width: 960,
        x: 960,
        components: [
          {
            id: 'image-1',
            type: 'image',
            content: 'https://picsum.photos/800/600',
            position: {
              x: 80,
              y: 80,
              width: 800,
              height: 600
            }
          }
        ]
      }
    ]
  },
  {
    id: 'slide-3',
    layout: {
      type: 'grid',
      dimensions: {
        width: 1920,
        height: 1080
      },
      backgroundColor: '#ffffff'
    },
    columns: [
      {
        id: 'column-1',
        width: 1920,
        x: 0,
        components: [
          {
            id: 'heading-1',
            type: 'text',
            content: 'Our Services',
            position: {
              x: 80,
              y: 80,
              width: 1760,
              height: 60
            },
            style: {
              fontSize: 36,
              color: '#000000'
            }
          },
          {
            id: 'grid-1',
            type: 'bullet-list',
            content: [
              'Service 1',
              'Service 2',
              'Service 3',
              'Service 4'
            ],
            position: {
              x: 80,
              y: 160,
              width: 1760,
              height: 400
            },
            style: {
              fontSize: 24,
              color: '#000000'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'slide-4',
    layout: {
      type: 'comparison',
      dimensions: {
        width: 1920,
        height: 1080
      },
      backgroundColor: '#ffffff'
    },
    columns: [
      {
        id: 'column-1',
        width: 960,
        x: 0,
        components: [
          {
            id: 'heading-1',
            type: 'text',
            content: 'Before',
            position: {
              x: 80,
              y: 80,
              width: 800,
              height: 60
            },
            style: {
              fontSize: 36,
              color: '#000000'
            }
          },
          {
            id: 'image-1',
            type: 'image',
            content: 'https://picsum.photos/800/600?before',
            position: {
              x: 80,
              y: 160,
              width: 800,
              height: 600
            }
          }
        ]
      },
      {
        id: 'column-2',
        width: 960,
        x: 960,
        components: [
          {
            id: 'heading-2',
            type: 'text',
            content: 'After',
            position: {
              x: 80,
              y: 80,
              width: 800,
              height: 60
            },
            style: {
              fontSize: 36,
              color: '#000000'
            }
          },
          {
            id: 'image-2',
            type: 'image',
            content: 'https://picsum.photos/800/600?after',
            position: {
              x: 80,
              y: 160,
              width: 800,
              height: 600
            }
          }
        ]
      }
    ]
  },
  {
    id: 'slide-5',
    layout: {
      type: 'title',
      dimensions: {
        width: 1920,
        height: 1080
      },
      backgroundColor: '#ffffff'
    },
    columns: [
      {
        id: 'column-1',
        width: 1920,
        x: 0,
        components: [
          {
            id: 'title-1',
            type: 'text',
            content: 'Thank You!',
            position: {
              x: 200,
              y: 400,
              width: 1520,
              height: 100
            },
            style: {
              fontSize: 48,
              color: '#000000'
            }
          },
          {
            id: 'subtitle-1',
            type: 'text',
            content: 'Any questions?',
            position: {
              x: 400,
              y: 520,
              width: 1120,
              height: 60
            },
            style: {
              fontSize: 32,
              color: '#888888'
            }
          }
        ]
      }
    ]
  }
];



