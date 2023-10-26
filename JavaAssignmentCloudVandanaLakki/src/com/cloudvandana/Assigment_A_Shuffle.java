package com.cloudvandana;

import java.util.Arrays;
import java.util.Random;

public class Assigment_A_Shuffle {
	public static void main(String[] args) {
		int [] arr= {1,2,3,4,5,6,7};
		Random r=new Random();

		for(int i=0;i<=arr.length-1;i++)
		{
			int rand=r.nextInt(arr.length);

			int temp=arr[i];
			arr[i]=arr[rand];
			arr[rand]=temp;
		}
		System.out.print(Arrays.toString(arr));

		
	}
	
	

}
