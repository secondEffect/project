import express from 'Express';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.sendStatus(500);
});

app.listen(port, () => {
  console.log(`started Server ${port}`);
});
