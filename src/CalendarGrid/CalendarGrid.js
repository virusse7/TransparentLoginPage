import { Grid, GridElement } from "./styled"

export const CalendarGrid = () => {
    const gridElements = [];

    for (let i = 1; i < 31; i++) {
        gridElements.push(<GridElement key={i}>{i}</GridElement>)
    }

    return (
        <Grid>
            {gridElements}
        </Grid>
    );
}