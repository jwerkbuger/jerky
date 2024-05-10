#한 행에 출력할 구구단의 개수와 최대 출력할 단 수를 입력받아 한 행에 입력받은 만큼 구구단이 출력되고 나머지는 밑 행에 출력되는 구구단을 출력하는 프로그램 구현
def print_gugudan(start, end, count):
    for i in range(1, 10):
        for j in range(start, min(end + 1, start + count)):
            print(f"{j} x {i} = {i*j}\t", end="")
        print()

def main():
    count_per_row = int(input("한 행에 출력할 구구단의 개수를 입력하세요: "))
    max_dan = int(input("최대 출력할 단 수를 입력하세요: "))

    for start_dan in range(1, max_dan + 1, count_per_row):
        print_gugudan(start_dan, max_dan, count_per_row)

if __name__ == "__main__":
    main()



count_per_row = int(input("한 행에 출력할 구구단의 개수를 입력하세요: "))
max_dan = int(input("최대 출력할 단 수를 입력하세요: "))

for start_dan in range(1, max_dan + 1, count_per_row):
    for i in range(1, 10):
        for j in range(start_dan, min(start_dan + count_per_row, max_dan + 1)):
            print(f"{j} x {i} = {i*j}\t", end="")
        print()
    print()

