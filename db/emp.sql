CREATE TABLE pos.usermst (
	userid serial NOT NULL,
	username varchar NULL,
	active bool NULL DEFAULT true,
	email varchar NULL,
	pass varchar NULL,
	mobile varchar NULL,
	fname varchar NULL,
	mname varchar NULL,
	lname varchar NULL
);

CREATE TABLE pos.itemmst (
	itemid serial4 NOT  NULL,
	itemname varchar  NULL,
	categoryid int NULL,
	price decimal NULL,
	unit varchar NULL,
	description varchar NULL,
	actualprice decimal NULL,
	proposedprice decimal NULL
);
