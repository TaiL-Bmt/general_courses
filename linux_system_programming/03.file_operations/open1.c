#include <stdio.h>
#include <fcntl.h>
#include <errno.h>

int main()
{
    int fd = open("startup", O_RDONLY);
    if (fd == -1) {
        printf("open() was failed");
        perror("ERROR:");
    } else {
        printf("open() system call executed successfully, file descriptor is %d\n", fd);
    }

    return 0;
}
