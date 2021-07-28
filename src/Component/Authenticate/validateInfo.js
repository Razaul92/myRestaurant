export default function validate(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  } else if (values.password.trim().search(/[A-Z]/) === -1) {
    errors.password = "**Must Contain one UpperCase";
  } else if (values.password.trim().search(/[a-z]/) === -1) {
    errors.password = "**Must Contain one lowercase";
  } else if (values.password.trim().search(/[0-9]/) === -1) {
    errors.password = "**Must Contain one Numerical";
  } else if (!/[^A-Za-z0-9]/.test(values.password.trim())) {
    errors.password = "**Must Contain one Special Character";
  }

  // else if (!/^[0-9]+/.test(values.password.trim())) {
  //   errors.password = 'Enter 1 Numerical';
  // }
  // }else if(values.password.trim().search(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\<\>\?\:\;\,\.\'\"]/)==-1){
  // 	 errors.password =  '**Must Contain one Special Character';
  // }

  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }
  return errors;
}
