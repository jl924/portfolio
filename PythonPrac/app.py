weight = input("weight: ")
metric = input("(K)g or (L)bs: ")

if metric == "k":
    print(float(weight) + 10)
if metric == "l":
    print(float(weight) + 20)
