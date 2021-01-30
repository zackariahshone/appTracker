create database appTracker;

use appTracker;

select * from applicationInfo;

create table applicationInfo(
appId int auto_increment not null,
AppName varchar (10) not null,
RecrutorName varchar(10),
dateApplied DATE not null,
jobDescription blob not null,
recrutorEmail varchar (320),
primary key(appId)
);