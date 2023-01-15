export function passwordCompare(password, passordConfirm){
    return password.value == passordConfirm.value ? true : false;
}