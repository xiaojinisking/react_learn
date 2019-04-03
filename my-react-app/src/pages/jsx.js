import React, { Component } from 'react';

const formatName = (user)=>{
	return user.firstName+' '+user.lastName;
}

const user = {
	firstName:'Harper',
	lastName:'Perez'
}

export default Element = (
	<h1>
		Hello,{formatName(user)}
	</h1>
);

