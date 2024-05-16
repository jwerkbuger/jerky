def gugudan(start, end, count):
    for i in range(1, 10):
        for j in range(start, start + count):
            if j > end:
                break
            print("{} X {} = {}".format(j, i, j*i), end="\t")
        print()
    print()

def main():
    row = int(input("한 행에 출력할 구구단의 개수를 입력하세요: "))
    dan = int(input("최대 출력할 단 수를 입력하세요: "))

    if row > 0:
        if dan > 0:
            for startdan in range(1, dan + 1, row):
                gugudan(startdan, dan, row)
        else:
            print("한 행에 출력할 구구단의 개수가 1보다 작아서 실행이 불가능합니다.")
    else:
        print("출력할 행의 개수가 1보다 작아서 실행이 불가능합니다.")

main()
