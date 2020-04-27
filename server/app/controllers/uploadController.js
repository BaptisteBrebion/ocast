const path = require('path');
const fs = require('fs');
const { IncomingForm } = require('formidable');
const imagesFolder = path.join(process.cwd(), '/uploads');
const { User } = require ('../models/Relations')
const uploadController = {

  saveImage: async (request, response) => {

    console.log("COUCOU")
    const form = new IncomingForm(
      { 
      multiples: false, 
      uploadDir: imagesFolder, 
      encoding: "binary",
      }
    );

    let fileUploaded;

    form.parse(request, (err, fields, files) => {
      // console.log('fields:', fields);
      // console.log('files:', files);
    });

    form.on("fileBegin", (filename, file) => {
      // console.log("filename: ", filename);
      // console.log("file: ", file);
    })

    form.on("file", (name, file) => {
      console.log("name: ", name);
      console.log("file: ", file);
      fileUploaded = file;
    })

    form.on("process", (bytesReceived, bytesExpected) => {
      let percent = (bytesReceived / bytesExpected * 100) | 0;
      process.stdout.write(`uploading:  ${percent}% \n `);
    });

    form.on("error", (error) => {
      console.log("uploading error ", error);
      return response.status(500).send(error);
    });


    form.on("end", async () => {
      const fullPath = `${fileUploaded.path}.jpg`
      const completFileName = path.basename(fullPath);
      console.log("uploaded");
      console.log("COUCOU", path.basename(fullPath))
      fs.rename(fileUploaded.path, fullPath, async (error) => {
        if(error) {
          throw new Error(error);
        }

        try {
          const id = request.params.id;
          const user = await User.findOne({
            where: {
              id,
            },
            include: ["candidates", "recruiters"]
          });
          if(user.photo_url) {
            fs.unlink(path.join(imagesFolder, user.photo_url), (error) => {
              if(error) {
                return response.status(500).send(error);
              }
              console.info("file deleted");
            })
          }
          user.photo_url = completFileName;
          const userPhoto = await user.save();
          console.log('USER', userPhoto);
          response.status(200).send({user: userPhoto, message: "votre photo de profil a bien été modifiée"});
        } catch (error) {
          response.status(500).send(error);
        };
        
      })
    });
  },
};

module.exports = uploadController;