let some: unknown;
some = "Text";

let str: string;

// варіант 1 — перевірка типу
if (typeof some === "string") {
  str = some;
}

// варіант 2 — через приведення типу
str = some as string;

export {};
