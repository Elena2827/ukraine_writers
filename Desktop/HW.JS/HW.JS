const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
      {
        name: 'Клієнт 1',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
        partners: [
          {
            name: 'Клієнт 1.1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
          },
          {
            name: 'Клієнт 1.2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків',
              }
            ]
          }
        ]
      },
      {
        name: 'Клієнт 2',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків'
      }
    ]
  };
  

function findValueByKey(companyName) {
    function findCompany(company, name) {
        if (company.name === name) {
            return company;
        } else if (company.clients) {
            for (let client of company.clients) {
                if (client.name === name) {
                    return client;
                } else if (client.partners) {
                    let result = findCompany(client, name);
                    if (result) return result;
                }
            }
        }
        return null;
    }

    return findCompany(company, companyName);
}

let companyName = 'Клієнт 1';
let foundCompany = findValueByKey(companyName);
if (foundCompany) {
    console.log("Інформація про компанію з назвою", companyName + ":", foundCompany);
} else {
    console.log("Компанія з назвою", companyName, "не знайдена.");
}