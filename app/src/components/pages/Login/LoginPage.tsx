import React from 'react';
import { useFormik } from 'formik';
import TextInput from '../../common/form/TextInput';

const LoginPage = () => {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<div className="w-full">
			<form
				onSubmit={formik.handleSubmit}
				className="flex w-1/3 max-w-2xl mx-auto flex-col"
			>
				<TextInput
					currentTextValue={formik.values.firstName}
					onTextChange={(e) => formik.handleChange(e)}
					type="First Name"
					showHeader={true}
				/>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default LoginPage;
