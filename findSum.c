#include<stdio.h>
int findSum(int, int);
int main() {
	int x = 10, y = 20;
	//printf("Enter x: ");
	//scanf("%d", &x);
	//fflush(stdin);
	//printf("Enter y: ");
	//scanf("%d", &y);

	printf("Result of adding %d and %d is: %d\n", x, y,(x + y));

	return 0;
}

int findSum(int x, int y) {
	return (x + y);
} 
