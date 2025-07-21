export function formData(date){
    return date.toLocaleDateString("en-us",{
        month: "short",
        day: "numeric",
        year: "numeric"
    })
}