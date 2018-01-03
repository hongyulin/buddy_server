import uuid from "uuid";
export default [
    {
        id: String,
        description: String,
        address: String,
        longitude: String,
        latitude: String,
        header_img: String,
        name: String,
        apply_people: [
            {
                name: String,
                id: String,
                header_img: String,
            }
        ],
    }
]