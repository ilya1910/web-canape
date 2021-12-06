import React from "react";
import "bootstrap";

const Table = () => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">№</th>
                    <th scope="col">Наименование технической характеристики</th>
                    <th scope="col">Ед.изм</th>
                    <th scope="col">У15-УРАГ</th>
                    <th scope="col">У15-УРАГ-У</th>
                    <th scope="col">У15-УРАГ-У-17,3/6,4</th>
                    <th scope="col">У15-УРАГ-У/9</th>
                    <th scope="col">У15-УРАГ-У-17,3/9</th>
                    <th scope="col">У15-УРАГ без бок.</th>
                    <th scope="col">У15-УРАГ-У без бок.</th>
                    <th scope="col">У15-УРАГ-У-17,3 без бок.</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Производительность техническая max.</td>
                    <td>т/ч</td>
                    <td>256</td>
                    <td>330</td>
                    <td>330</td>
                    <td>330</td>
                    <td>350</td>
                    <td>250</td>
                    <td>300</td>
                    <td>300</td>
                </tr>
                <tr>
                    <th rowSpan="3" scope="row">
                        2
                    </th>
                    <td>Грузоподъемность, не более (в том числе):</td>
                    <td rowSpan="3">т</td>
                    <td>55</td>
                    <td>70</td>
                    <td>76</td>
                    <td>82</td>
                    <td>86</td>
                    <td>35</td>
                    <td>50</td>
                    <td>56</td>
                </tr>
                <tr>
                    <td>большой платформы</td>
                    <td>35</td>
                    <td>50</td>
                    <td>56</td>
                    <td>50</td>
                    <td>56</td>
                    <td>35</td>
                    <td>50</td>
                    <td>56</td>
                </tr>
                <tr>
                    <td>боковой платформы</td>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                    <td>32</td>
                    <td>30</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <th rowSpan="3" scope="row">
                        3
                    </th>
                    <td>Длина платформ установочная</td>
                    <td rowSpan="3">мм</td>
                    <td className="no-border-right" colRow="8"></td>
                    <td className="no-border-right"></td>
                    <td className="no-border-right"></td>
                    <td className="no-border-right"></td>
                    <td className="no-border-right"></td>
                    <td className="no-border-right"></td>
                    <td className="no-border-right"></td>
                    <td className="no-border-right"></td>
                </tr>
                <tr>
                    <td>платформы большой</td>
                    <td>55</td>
                    <td>70</td>
                    <td>76</td>
                    <td>82</td>
                    <td>86</td>
                    <td>35</td>
                    <td>50</td>
                    <td>56</td>
                </tr>
                <tr>
                    <td>платформы большой</td>
                    <td>55</td>
                    <td>70</td>
                    <td>76</td>
                    <td>82</td>
                    <td>86</td>
                    <td>35</td>
                    <td>50</td>
                    <td>56</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
