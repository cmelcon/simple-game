function Triangulo (sideA, sideB, sideC){
	this.side_A = side_A;
	this.side_B = side_B;
	this.side_C = side_C;


};

var triang1 = new Triangulo (5, 6, 7);

Triangulo.prototype.perimeter = function(){
	if (this.side__A + this.side_B > this.side_C &&
	this.side__B + this.side_C > this.side_A &&
	this.side__C + this.side_A > this.side_B){
	return (this.side_A + this.side_B + this.side_C);
	}else{
	alert("Error values not supported!")

	};

};
