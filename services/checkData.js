
export const checkData = (req) => {
    const { username, title, description } = req.body;

    let isHave;

    const a = username.length > 0 ? true : false
    const b = title.length > 0 ? true : false
    const c = description.length > 0 ? true : false

    if (a && b && c) {
        isHave = true;
    } else {
        isHave = false
    }
    return isHave;

}

export const checkUpdateData = (req) => {
    let isHave;
    const objectValues = Object.values(req.body);

    if (objectValues.length === 1 && objectValues[0].length > 1) {
        isHave = true;
    } else if (objectValues.length === 2 && objectValues[0].length > 1 && objectValues[1].length > 1) {
        isHave = true;
    } else if (objectValues.length === 3 && objectValues[0].length > 1 && objectValues[1].length > 1 && objectValues[2].length > 1) {
        isHave = true;
    } else {
        isHave = false;
    }
    return isHave;
}

