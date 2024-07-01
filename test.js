async function getUsername() {
    return "rasta"
}

async function main() {
    temp = getUsername()
    console.log(temp)
    console.log(typeof temp)

    console.log("-------------")

    temp2 = await getUsername()
    console.log(temp2)
    console.log(typeof temp2)
}

main()