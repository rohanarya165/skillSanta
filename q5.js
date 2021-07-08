var arr = [2, 56, 78, 34, 65];
var new_arr = arr.map(function (num) {
    return num / 2;
});
print(new_arr); // it will show the error because of print we have toh put consol.log by replacing print
//consol.log(new_arr); this will give output [ 1, 28, 39, 17, 32.5 ]