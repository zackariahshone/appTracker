module.exports = (sequelize, DataType)=>{
    const Apps = sequelize.define("applicationInfos", {
        AppName: DataType.STRING, 
        RecrutorName: DataType.STRING,
        dateApplied: DataType.DATE,
        jobDescription: DataType.TEXT, 
        recrutorEmail: DataType.STRING
    });
    return Apps;
}