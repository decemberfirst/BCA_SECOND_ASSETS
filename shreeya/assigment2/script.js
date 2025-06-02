let nestedObject = {
    address: {
        from: {
            permanent: 'china',
            temporary: 'japan',
        },
    },
};

let { permanent, temporary } = nestedObject.address.from;
console.log(`${permanent} -> ${temporary}`);