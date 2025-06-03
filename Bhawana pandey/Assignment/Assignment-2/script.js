let nestedObject = {
    address: {
        from: {
            permanent: 'nepal',
            temporary: 'saynja',
        },
    },
};

let { permanent, temporary } = nestedObject.address.from;
console.log(`${permanent} ->${temporary}`);
