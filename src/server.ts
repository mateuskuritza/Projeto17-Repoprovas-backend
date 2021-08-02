import "./setup";
import app, { init } from "./app";

const port = +process.env.PORT || 5444;

init().then(() => {
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}.`);
    });
});
