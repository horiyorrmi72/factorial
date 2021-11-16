#include <iostream>
#include <cmath>
using namespace std;

int main(){
int factorial=1;
int number2check;
cout << "enter a number to check for the factorial: " << endl;
cin >> number2check;
for(int i= 1; i <= number2check; i++){
	factorial = factorial * i;
}
cout << factorial<< endl;

return 0;

}
