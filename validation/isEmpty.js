const isEmpty = value => value === null || value === undefined || typeof (value) === "object" && Object.keys(value).length === 0 || typeof (value) == "string" && value.trim().length === 0

// ya3ni ken l value eli bch nda5lou null wela mch mawjoud wela 0 ya3ni raw feragh donc te9blouch 

module.exports = isEmpty