function f() {
    if (true) {
        const a = 9;
        let b = 9;
        var c = b;
    }

    console.log(a);
    console.log(b);
    console.log(c);
}

f();