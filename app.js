//Función principal

const checkHealth = async (req, res, next) => {
  try {
    const greetings = process.env.GREETINGS;
    if (greetings) {
      res.send({
        response: res.statusCode,
        status: "OK",
        message: greetings,
      });
    } else {
      res.send({
        response: res.statusCode,
        status: "OK",
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//Middleware en caso se digite una URL inválida

const handleNotFoundPage = (req, res) => {
  const errorMessage =
    "Estás haciendo algo mal...Por favor, verifique la dirección URL.";
  res.status(404).send({
    response: res.statusCode,
    status: "error",
    message: errorMessage,
  });
};

module.exports = { checkHealth, handleNotFoundPage };
