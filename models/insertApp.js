module.exports = (sequelize, DataType)=>{
    const Apps = sequelize.define("applicationInfo", {
        AppName: DataType.STRING, 
        RecrutorName: DataType.STRING,
        dateApplied: DataType.DATE,
        // jobDescription: DataType.BLOB, 
        recrutorEmail: DataType.STRING
    });
    return Apps;
}