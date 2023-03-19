let parser = new DOMParser();

const myXML = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>

        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
`;

const myXMLDom = parser.parseFromString(myXML,"text/xml");
const students = myXMLDom.querySelectorAll("student")


const result = [];

students.forEach((item) => {
    const name = item.querySelector("name");
    const fname = name.children[0]
    const sname = name.children[1]
    const ager = item.querySelector("age");
    const profer = item.querySelector("prof")
    const langAttr = name.getAttribute('lang');

    result.push({
        name: fname.textContent + " " + sname.textContent,
        age: ager.textContent,
        prof: profer.textContent,
        lang: langAttr,


    });
});

console.log(result)