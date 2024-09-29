import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';

const validateResource = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (error) {
    // return res.status(400).json({ message: 'VALIDATE_RESOURCE: error' });
    if (error instanceof ZodError) {
      const formattedErrors = error.errors.map((err) => ({ path: err.path, message: err.message }));
      return res.status(400).json({ errors: formattedErrors });
    }

    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default validateResource;
