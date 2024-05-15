row = int(input("한 행에 출력할 구구단의 개수를 입력하세요: "))
dan = int(input("최대 출력할 단 수를 입력하세요: "))

if row > 0:
    if dan > 0:
        for i in range(1, dan + 1, row): # 2단부터 -> (2, dan + 1, row)
#           print("{}단".format(i))
            for j in range(1, 10):
                for t in range(i, min(i + row, dan + 1)):
                    print("{} x {} = {}".format(t, j, t * j), end="\t")
                print()
            print()
    else:
        print("한 행에 출력할 구구단의 개수가 1보다 작아서 실행이 불가능합니다.")
else:
    print("출력할 행의 개수가 1보다 작아서 실행이 불가능합니다.")

    