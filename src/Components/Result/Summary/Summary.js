import React, { useState, useEffect } from 'react';

import { useTranslation } from "react-i18next";
import { FormatUnits } from "../../../Main/FormatUnits";
import './Summary.css';

export default function Summary({ totalResult }) {
    const { t } = useTranslation();
    const [SummaryView, setSummaryView] = useState([]);

    useEffect(() => {
        if (totalResult.gain) {
            setSummaryView((
                <div className="result-summary">
                    <div className="title">
                        <div className="text">
                            {t("Summary")}
                        </div>
                    </div>

                    <div className="result-resources">
                        <div className="data">
                            <div className="row">
                                <div>{t("TotalGain")}</div>
                                <div>{FormatUnits(Math.round(totalResult.gain.metal))}</div>
                                <div>{FormatUnits(Math.round(totalResult.gain.crystal))}</div>
                                <div>{FormatUnits(Math.round(totalResult.gain.deuterium))}</div>
                            </div>

                            <div className="row">
                                <div>{t("TotalLoss")}</div>
                                <div>{FormatUnits(Math.round(totalResult.loss.metal))}</div>
                                <div>{FormatUnits(Math.round(totalResult.loss.crystal))}</div>
                                <div>{FormatUnits(Math.round(totalResult.loss.deuterium))}</div>
                            </div>

                            <div className="row">
                                <div>{t("FlightConsumption")}</div>
                                <div>{0}</div>
                                <div>{0}</div>
                                <div>{FormatUnits(Math.round(totalResult.deuteriumConsumption))}</div>
                            </div>

                            <div className="row">
                                <div>{t("NetGain")}</div>
                                <div>{FormatUnits(Math.round(totalResult.net.metal))}</div>
                                <div>{FormatUnits(Math.round(totalResult.net.crystal))}</div>
                                <div>{FormatUnits(Math.round(totalResult.net.deuterium))}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
    }, [totalResult])

    return (SummaryView)
}