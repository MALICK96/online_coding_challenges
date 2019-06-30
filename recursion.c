/*
 * Author: Malick Diakite
 * Description:
 * This program add all the numbers 
 * between two numbers using recursion
 * suppose you x = 4, y = 1;
 *  your logic will be x - findSum(x - 1, y);
 * output will be 10
 *	
 * */

#include<stdio.h>
int findSum(int, int);
int main() {
	int lower = 0,
	    upper = 0,
	    result = 0;
	printf("Enter value for lower: ");
	scanf("%d", &lower);
	fflush(stdin);
	printf("Enter value for upper limit: ");
	scanf("%d", upper);

	result = findSum(upper, lower);

	printf("Sum of numbers beween %d and %d is: %d", lower, upper, result);
	return 0;
}

int findSum(int x, int y) {
	if (x == y) 
		return x;
	else 
		return x + findSum(x - 1, y);
}
