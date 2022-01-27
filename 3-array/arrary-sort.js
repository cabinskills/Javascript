let order = [{
        "GROUPBY": "CATEGORY",
        "ORDERBY": "1"
    },
    {
        "GROUPBY": "SUBCATEGORY",
        "ORDERBY": "2"
    },
    {
        "GROUPBY": "TYPE",
        "ORDERBY": "3"
    },
    {
        "GROUPBY": "DESIGN",
        "ORDERBY": "4"
    },
    {
        "GROUPBY": "COST",
        "ORDERBY": "5"
    }
];

let arrange = [{
        "GROUP_NAME": "CATEGORY",
        "GROUP_VALUE": "GEN",
        "GROSSWT": "23.000"
    },
    {
        "GROUP_NAME": "COST",
        "GROUP_VALUE": "21",
        "GROSSWT": "-1.000"
    },
    {
        "GROUP_NAME": "DESIGN",
        "GROUP_VALUE": "20",
        "GROSSWT": "13.000"
    },
    {
        "GROUP_NAME": "CATEGORY",
        "GROUP_VALUE": "19",
        "GROSSWT": "17.000"
    },
    {
        "GROUP_NAME": "DESIGN",
        "GROUP_VALUE": "18",
        "GROSSWT": "24.000"
    },
    {
        "GROUP_NAME": "CATEGORY",
        "GROUP_VALUE": "17",
        "GROSSWT": "110.000"
    },
    {
        "GROUP_NAME": "TYPE",
        "GROUP_VALUE": "16",
        "GROSSWT": "32.000"
    },
    {
        "GROUP_NAME": "SUBCATEGORY",
        "GROUP_VALUE": "15",
        "GROSSWT": "32.000"
    },
];

order.forEach((element) => {
    arrange.forEach((el) => {
        if (element.GROUPBY == el.GROUP_NAME) {
            el["ORDER"] = element.ORDERBY;
        }
    });
});

console.log(arrange);
arrange.sort((a, b) => (a.ORDER > b.ORDER ? 1 : -1))
console.log(arrange);

/* OUTPUT

[
  {
    GROUP_NAME: 'CATEGORY',
    GROUP_VALUE: 'GEN',
    GROSSWT: '23.000',
    ORDER: '1'
  },
  {
    GROUP_NAME: 'COST',
    GROUP_VALUE: '21',
    GROSSWT: '-1.000',
    ORDER: '5'
  },
  {
    GROUP_NAME: 'DESIGN',
    GROUP_VALUE: '20',
    GROSSWT: '13.000',
    ORDER: '4'
  },
  {
    GROUP_NAME: 'CATEGORY',
    GROUP_VALUE: '19',
    GROSSWT: '17.000',
    ORDER: '1'
  },
  {
    GROUP_NAME: 'DESIGN',
    GROUP_VALUE: '18',
    GROSSWT: '24.000',
    ORDER: '4'
  },
  {
    GROUP_NAME: 'CATEGORY',
    GROUP_VALUE: '17',
    GROSSWT: '110.000',
    ORDER: '1'
  },
  {
    GROUP_NAME: 'TYPE',
    GROUP_VALUE: '16',
    GROSSWT: '32.000',
    ORDER: '3'
  },
  {
    GROUP_NAME: 'SUBCATEGORY',
    GROUP_VALUE: '15',
    GROSSWT: '32.000',
    ORDER: '2'
  }
]
[
  {
    GROUP_NAME: 'CATEGORY',
    GROUP_VALUE: '17',
    GROSSWT: '110.000',
    ORDER: '1'
  },
  {
    GROUP_NAME: 'CATEGORY',
    GROUP_VALUE: '19',
    GROSSWT: '17.000',
    ORDER: '1'
  },
  {
    GROUP_NAME: 'CATEGORY',
    GROUP_VALUE: 'GEN',
    GROSSWT: '23.000',
    ORDER: '1'
  },
  {
    GROUP_NAME: 'SUBCATEGORY',
    GROUP_VALUE: '15',
    GROSSWT: '32.000',
    ORDER: '2'
  },
  {
    GROUP_NAME: 'TYPE',
    GROUP_VALUE: '16',
    GROSSWT: '32.000',
    ORDER: '3'
  },
  {
    GROUP_NAME: 'DESIGN',
    GROUP_VALUE: '18',
    GROSSWT: '24.000',
    ORDER: '4'
  },
  {
    GROUP_NAME: 'DESIGN',
    GROUP_VALUE: '20',
    GROSSWT: '13.000',
    ORDER: '4'
  },
  {
    GROUP_NAME: 'COST',
    GROUP_VALUE: '21',
    GROSSWT: '-1.000',
    ORDER: '5'
  }
]
*/