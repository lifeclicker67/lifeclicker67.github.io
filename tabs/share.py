def apply_spring(p1, p2, strength, target):
    dist = (((p1[0]-p2[0]) ** 2) + ((p1[1]-p2[1]) ** 2)) ** 0.5
    pull = strength * (target - dist)
    dir1 = [(p2[0] - p1[0]) / dist, (p2[1] - p1[1]) / dist]
    dir2 = [(p1[0] - p2[0]) / dist, (p1[1] - p2[1]) / dist]
    f1 = [dir1[0] * pull, dir1[1] * pull]
    f2 = [dir2[0] * pull, dir2[1] * pull]
    return (f1, f2)

class SPRING:
    def __init__(self, p1, p2, strength, target):
        self.p1, self.p2 = p1, p2
        self.strength = strength
        self.target = target



spring = SPRING([0, 0], [0, -1], 1, 2)
print(apply_spring(spring.p1, spring.p2, spring.strength, spring.target))
