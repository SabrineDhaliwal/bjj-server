const multer = require('multer');
const path = require('path');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname
    );
  },
});

const upload = multer({ storage: storage });

app.post('/api/persons', upload.single('photo'), (req, res) => {
    const body = req.body;
  
    const person = new Person({
      name: body.name,
      number: body.number,
      photo:
        req.protocol + '://' + req.get('host') + '/uploads/' + req.file.filename,
    });
    person
      .save()
      .then((savedPerson) => {
        res.json(savedPerson);
      })
      .catch((err) => console.log(err.message));
  });
  