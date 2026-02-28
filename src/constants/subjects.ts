import { Subject } from "../types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    name: "Introduction to Computer Science",
    code: "CS101",
    department: "Computer Science",
    description: "Fundamentals of computer science and programming concepts.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Macroeconomics",
    code: "ECON201",
    department: "Economics",
    description: "Study of economy-wide phenomena, including inflation, price levels, and economic growth.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Cell Biology",
    code: "BIO105",
    department: "Biology",
    description: "Detailed study of the structure and function of the cell, including organelles and metabolic pathways.",
    createdAt: new Date().toISOString(),
  },
];
