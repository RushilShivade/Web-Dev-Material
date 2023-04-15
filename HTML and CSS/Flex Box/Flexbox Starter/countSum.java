import java.util.*;
import java.util.Arrays;

public class countSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int count = 0;

        System.out.print("Enter the value of k: ");
        int k = scanner.nextInt();

        System.out.print("Enter the size of array: ");
        int n = scanner.nextInt();

        System.out.print("Enter the elements of the array: ");
        int arr[] = new int[n];

        for (int i = 0; i < n; i++) {
            arr[i] = scanner.nextInt();
        }

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > k) {
                break;
            } else {
                for (int j = i + 1; j < n; j++) {
                    if (arr[i] + arr[j] == k) {
                        count++;
                    }
                }
            }
        }
        System.out.println(count);
    }
}
