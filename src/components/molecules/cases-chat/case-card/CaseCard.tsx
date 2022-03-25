import React from 'react'
import { getCaseStatus } from "../../../../constants/case";
import { ICaseDataResponse } from "../../../../services/my-case/ICaseDataResponse";
import "./caseCard.scss";

export const CaseCard = (caseOrder: ICaseDataResponse) => {
  const { status, actualStatus } = getCaseStatus(caseOrder.status, caseOrder.levelNumber);
  return (
    <div>
      <div className="case-card__detail pannel">
        <label className="case-card-number">Caso Nº: {caseOrder.caseNumber}</label>
        <label className="case-card-status">Fecha: {caseOrder?.createdDate?.toString().split(" ")[0]}</label>
        <label className="case-card-status">Estado: {status}</label>
        <label className="case-card-status">Tipo: {caseOrder.typificationName}</label>
      </div>
    </div>
  );
};
