export const questions = [
    {
        section: 1,
        items: [
            {
                label: 'Contact Information',
                type: 'information'
            },
            {
                label: 'Name',
                type: 'text',
                value: 'name'

            },
            {
                label: 'Email',
                type: 'text',
                value: 'email'

            },
            {
                label: 'Phone',
                type: 'text',
                value: 'phone'

            },
        ]
    },
    {
        section: 2,
        items: [
            {
                label: 'Location(s)',
                type: 'information'
            },
            {
                label: 'Start Address',
                type: 'text',
                value: 'street'

            },
            {
                label: 'Stairs',
                type: 'select',
                options: ['0', '1'],
                value: 'state'
            },
            {
                label: 'Destination',
                type: 'text',
                value: 'destination'
            },
            {
                label: 'Stairs',
                type: 'select',
                options: ['0', '1'],
                value: 'state'
            },
            {
                label: 'Move Size',
                type: 'information'
            },
            {
                label: 'select',
                type: 'select',
                options: ['Room or Less', '1 Bedroom Apartment'],
                value: 'state'
            }
        ]
    },
    {
        section: 3,
        items: [
            {
                label: 'Your Moving Plan',
                type: 'information'
            },
            {
                label: 'Any Notes For The Movers',
                type: 'text',
                value: 'Notes'
            },
        ]
    }
]