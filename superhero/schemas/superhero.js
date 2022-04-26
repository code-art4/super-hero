export default {
    name: 'superheroes',
    title: 'Superheroes',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: "The super hero's name",
            validation: (Rule) =>
                Rule.required().max(20).error(`A super hero name shouldn't be more than 20 characters.`),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 20,
            },
        },           
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },       
        {
            name: 'appearance',
            title: 'Appearance',
            type: 'object',
            fields: [
                {
                    name: 'gender',
                    title: 'Gender',
                    type: 'string',
                    options: {
                        list: ['male', 'female'],
                    },
                },
                {
                    name: 'race',
                    title: 'Race',
                    type: 'string',
                    options: {
                        list: [
                            'Caucasian',
                            'Asian',
                            'Black',
                            'Australoid',
                            'Alien',
                            'others',
                        ],
                    },
                },                              
                {
                    name: 'eyeColor',
                    title: 'Eye color',
                    type: 'string',
                    options: {
                        list: [
                            'red',
                            'blue',
                            'yellow',
                            'orange',
                            'black',
                            'green',
                            'white',
                            'indigo',
                            'others',
                        ],
                    },
                },
                {
                    name: 'hairColor',
                    title: 'Hair color',
                    type: 'string',
                    options: {
                        list: [
                            'red',
                            'blue',
                            'blonde',
                            'orange',
                            'black',
                            'green',
                            'white',
                            'indigo',
                            'others',
                        ],
                    },
                },              
            ],            
        },
        {
            name: 'moreInfo',
            title: 'More Info',
            type: 'object',
            fields: [
                {
                    name: 'actualName',
                    title: 'Actual Name',
                    type: 'string',
                },
                {
                    name: 'alterEgos',
                    title: 'Alter Egos',
                    type: 'object',
                    fields: [
                        {
                            name: 'confirmation',
                            title: 'Does this hero have any alter egos',
                            type: 'boolean',
                        },
                        {
                            name: 'alterEgoNumber',
                            title: 'Number of alter egos',
                            type: 'array', hidden: ({ parent, value }) =>
                                !value && !parent?.confirmation,
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        {
                                            name: 'name',
                                            title: 'Alter Ego name',
                                            type: 'string',
                                        },
                                        {
                                            name: 'image',
                                            title: 'Image',
                                            type: 'image',
                                        },
                                    ],
                                    preview: {
                                        select: {
                                            title: 'name',
                                            name: 'name',
                                            media: 'image',
                                        },
                                        prepare({ title, media }) {
                                            return {
                                                title,
                                                media,
                                            };
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'homeCity',
                    title: 'Home City',
                    type: 'string',
                },
                {
                    name: 'firstAppearance',
                    title: 'First Appearance in Comics',
                    type: 'string',
                },
                {
                    name: 'publisher',
                    title: 'First Appearance Publisher',
                    type: 'string',
                },
                {
                    name: 'work',
                    title: 'Work',
                    type: 'object',
                    fields: [
                        {
                            name: 'occupation',
                            title: 'Occupation',
                            type: 'string',
                        },
                        {
                            name: 'base',
                            title: 'Location',
                            type: 'string',
                        },
                    ],
                },
                {
                    name: 'categories',
                    title: 'Categories',
                    type: 'object',
                    fields: [
                        {
                            name: 'groupAffiliation',
                            title: 'Groups Affiliation',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        {
                                            name: 'name',
                                            title: 'Group name',
                                            type: 'string',
                                        },
                                        {
                                            name: 'image',
                                            title: 'Image',
                                            type: 'image',
                                        },
                                    ],
                                    preview: {
                                        select: {
                                            title: 'name',
                                            name: 'name',
                                            media: 'image',
                                        },
                                        prepare({ title, media }) {
                                            return {
                                                title,
                                                media,
                                            };
                                        },
                                    },
                                },
                            ],
                        },
                        {
                            name: 'relatives',
                            title: 'Relatives',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        {
                                            name: 'name',
                                            title: 'Relatives name',
                                            type: 'string',
                                        },
                                        {
                                            name: 'image',
                                            title: 'Image',
                                            type: 'image',
                                        },
                                    ],
                                    preview: {
                                        select: {
                                            title: 'name',
                                            name: 'name',
                                            media: 'image',
                                        },
                                        prepare({ title, media }) {
                                            return {
                                                title,
                                                media,
                                            };
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};