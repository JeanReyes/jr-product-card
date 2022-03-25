export const getCaseStatus = (status: string, levelNumber: string = ""): any => {
  switch (status.toLowerCase()) {
    case "new":
    case "nuevo":
      return { status: "Nuevo", actualStatus: 1 };
    case "en revisión":
      return { status: "En gestión", actualStatus: 2 };
    case "close":
    case "closed":
    case "cerrado":
      return { status: "Cerrado", actualStatus: 3 };
  }
  if (status !== "Cerrado" && ["Cancelación", "Devoluciones"].includes(levelNumber)) {
    return { status: "En gestión", actualStatus: 2 };
  }
};
