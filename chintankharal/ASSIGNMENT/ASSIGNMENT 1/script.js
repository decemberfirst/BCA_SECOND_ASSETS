let nestedObject = {
    address: {
        from: {
            permanent: 'nepal',
            temporary: 'India',
        },
    },
};

let { permanent, temporary } = nestedObject.address.from;
console.log(`${permanent} -> ${temporary}`);