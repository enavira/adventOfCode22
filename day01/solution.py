import functools


def part1():
    lines = []
    max_calories = 0
    max_calories_per_elf = 0
    with open("input.txt") as f:
        lines = f.readlines()
    for line in lines:
        if line == "\n":
            max_calories = max(max_calories, max_calories_per_elf)
            max_calories_per_elf = 0
            continue
        max_calories_per_elf += int(line.split()[0])

    print(max_calories)


def part2():
    lines = []
    max_calories = [0, 0, 0]
    max_calories_per_elf = 0
    with open("input.txt") as f:
        lines = f.readlines()
    for line in lines:
        if line == "\n":
            min_index = max_calories.index(min(max_calories))
            max_calories[min_index] = max(max_calories[min_index], max_calories_per_elf)
            max_calories_per_elf = 0
            continue
        max_calories_per_elf += int(line.split()[0])

    print(functools.reduce(lambda x, y: x + y, max_calories))


if __name__ == "__main__":
    part1()
    part2()
