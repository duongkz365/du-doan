let resut = new Array;
let pattents = [
    "ca","tom","cop","ga","bau","cua"
];
let textElement = document.querySelector('#text-name');
let sum = 0;


let pattents2 = [
    {
        id: 1,
        value: [
            {
                name: "Cá",
                value: 1,
            },
            {
                name: "Tôm",
                value: 2,
            },
            {
                name: "Cọp",
                value: 0,
            },
            {
                name: "Gà",
                value: 0,
            },
            {
                name: "Bầu",
                value: 2,
            },
            {
                name: "Cua",
                value: 1,
            }
        ]
    },
    {
        id: 2,
        value: [
            {
                name: "Cá",
                value: 1,
            },
            {
                name: "Tôm",
                value: 1,
            },
            {
                name: "Cọp",
                value: 1,
            },
            {
                name: "Gà",
                value: 1,
            },
            {
                name: "Bầu",
                value: 0,
            },
            {
                name: "Cua",
                value: 2,
            }
        ]
    },
    {
        id: 3,
        value: [
            {
                name: "Cá",
                value: 5,
            },
            {
                name: "Tôm",
                value: 0,
            },
            {
                name: "Cọp",
                value: 2,
            },
            {
                name: "Gà",
                value: 3,
            },
            {
                name: "Bầu",
                value: 1,
            },
            {
                name: "Cua",
                value: 4,
            }
        ]
    },
    {
        id: 4,
        value: [
            {
                name: "Cá",
                value: 4,
            },
            {
                name: "Tôm",
                value: 1,
            },
            {
                name: "Cọp",
                value: 3,
            },
            {
                name: "Gà",
                value: 3,
            },
            {
                name: "Bầu",
                value: 5,
            },
            {
                name: "Cua",
                value: 5,
            }
        ]
    },
    {
        id: 5,
        value: [
            {
                name: "Cá",
                value: 4,
            },
            {
                name: "Tôm",
                value: 3,
            },
            {
                name: "Cọp",
                value: 6,
            },
            {
                name: "Gà",
                value: 9,
            },
            {
                name: "Bầu",
                value: 8,
            },
            {
                name: "Cua",
                value: 3,
            }
        ]
    },
    {
        id: 6,
        value: [
            {
                name: "Cá",
                value: 9,
            },
            {
                name: "Tôm",
                value: 8,
            },
            {
                name: "Cọp",
                value: 11,
            },
            {
                name: "Gà",
                value: 7,
            },
            {
                name: "Bầu",
                value: 6,
            },
            {
                name: "Cua",
                value: 4,
            }
        ]
    },
    {
        id: 7,
        value: [
            {
                name: "Cá",
                value: 9,
            },
            {
                name: "Tôm",
                value: 14,
            },
            {
                name: "Cọp",
                value: 8,
            },
            {
                name: "Gà",
                value: 16,
            },
            {
                name: "Bầu",
                value: 5,
            },
            {
                name: "Cua",
                value: 5,
            }
        ]
    },
    {
        id: 8,
        value: [
            {
                name: "Cá",
                value: 6,
            },
            {
                name: "Tôm",
                value: 7,
            },
            {
                name: "Cọp",
                value: 12,
            },
            {
                name: "Gà",
                value: 0,
            },
            {
                name: "Bầu",
                value: 15,
            },
            {
                name: "Cua",
                value: 14,
            }
        ]
    },
    {
        id: 9,
        value: [
            {
                name: "Cá",
                value: 9,
            },
            {
                name: "Tôm",
                value: 6,
            },
            {
                name: "Cọp",
                value: 10,
            },
            {
                name: "Gà",
                value: 12,
            },
            {
                name: "Bầu",
                value: 9,
            },
            {
                name: "Cua",
                value: 5,
            }
        ]
    },
    {
        id: 10,
        value: [
            {
                name: "Cá",
                value: 4,
            },
            {
                name: "Tôm",
                value: 6,
            },
            {
                name: "Cọp",
                value: 5,
            },
            {
                name: "Gà",
                value: 8,
            },
            {
                name: "Bầu",
                value: 5,
            },
            {
                name: "Cua",
                value: 8,
            }
        ]
    },
    {
        id: 11,
        value: [
            {
                name: "Cá",
                value: 5,
            },
            {
                name: "Tôm",
                value: 2,
            },
            {
                name: "Cọp",
                value: 4,
            },
            {
                name: "Gà",
                value: 9,
            },
            {
                name: "Bầu",
                value: 8,
            },
            {
                name: "Cua",
                value: 5,
            }
        ]
    },
    {
        id: 12,
        value: [
            {
                name: "Cá",
                value: 2,
            },
            {
                name: "Tôm",
                value: 1,
            },
            {
                name: "Cọp",
                value: 3,
            },
            {
                name: "Gà",
                value: 0,
            },
            {
                name: "Bầu",
                value: 4,
            },
            {
                name: "Cua",
                value: 2,
            }
        ]
    },
    {
        id: 13,
        value: [
            {
                name: "Cá",
                value: 1,
            },
            {
                name: "Tôm",
                value: 2,
            },
            {
                name: "Cọp",
                value: 2,
            },
            {
                name: "Gà",
                value: 1,
            },
            {
                name: "Bầu",
                value: 2,
            },
            {
                name: "Cua",
                value: 4,
            }
        ]
    },
    {
        id: 14,
        value: [
            {
                name: "Cá",
                value: 1,
            },
            {
                name: "Tôm",
                value: 1,
            },
            {
                name: "Cọp",
                value: 0,
            },
            {
                name: "Gà",
                value: 1,
            },
            {
                name: "Bầu",
                value: 1,
            },
            {
                name: "Cua",
                value: 1,
            }
        ]
    },
    {
        id: 15,
        value: [
            {
                name: "Cá",
                value: 1,
            },
            {
                name: "Tôm",
                value: 2,
            },
            {
                name: "Cọp",
                value: 0,
            },
            {
                name: "Gà",
                value: 0,
            },
            {
                name: "Bầu",
                value: 0,
            },
            {
                name: "Cua",
                value: 0,
            }
        ]
    },
];
//handle click
let btnSubmitElement = document.querySelector('#btn-submit');
btnSubmitElement.onclick = function(){
    sum = 0;
    let valueInput =textElement.value;
    let result = valueInput.split(" ");
    result.forEach((res)=>{
        pattents.forEach((pat,index)=>{
            if(res == pat){
                sum +=index;
            }
        })
    })
    let html = '';
    pattents2.forEach(e=>{
        if(e.id == sum){
            e.value.forEach(ee=>{
                html += `<li class="result-item">${ee.name} ${ee.value}%</li>`;
            })
            document.querySelector('.result-list').innerHTML = html;
        }
    })
}