const {faker} = require('@faker-js/faker');

let generateData = () => {
    let products = []
    for (let id = 0; id < 30; id++) {
        products.push({
            "id": id,
            "name": faker.word.noun(), 
            "description": faker.lorem.lines(5),
            "price": faker.random.numeric(),
            "stock": faker.random.numeric(),
            "category": faker.word.noun(),
            "image": faker.image.abstract( 640, 480, true),
        });
    }
    return { "products": products }
}
module.exports = generateData