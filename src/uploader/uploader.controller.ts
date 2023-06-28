import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  Res,
  Req,
} from '@nestjs/common';
import { UploaderService } from './uploader.service';
import { CreateUploaderDto } from './dto/create-uploader.dto';
import { UpdateUploaderDto } from './dto/update-uploader.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';
import { Request, Response } from 'express';
import { CreateAuthDto } from './dto/auth-uploader.dto';
import axios from 'axios';
interface response {
  status: boolean;
  data: unknown;
  message: string;
  function: string;
}

@Controller('uploader')
export class UploaderController {
  constructor(private readonly uploaderService: UploaderService) {}

  @Post('login')
  async login(@Body() dto: CreateAuthDto) {
    const response = await axios.post(
      'http://77.75.120.70:8073/Home/AuthenticateFromLandRecord?UserId=10121&AccessKey=DIDMSIX234M4L23939',
      {
        UserId: 10121,
        AccessKey: 'DIDMSIX234M4L23939',
      },
    );

    console.log(response.data);
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/images/',
        filename: (req, file, cb) => {
          const mypath = join('./', 'public/images');
          cb(null, `${new Date().valueOf()}_${file.originalname}`);
        },
      }),
    }),
  )
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Res() response: Response,
    @Req() req: Request,
  ) {
    if (!file) {
      const res: response = {
        data: [],
        function: 'uploadFile',
        status: false,
        message: 'Unable to store image',
      };

      response.send(res);
      response.end();
    }
    const filePath = `/public/images/${file.filename}`;

    const filename = `${req.protocol}://${req.get('Host')}${filePath.replace(
      /\\/g,
      '/',
    )}`;

    const res: response = {
      data: filename,
      function: 'uploadFile',
      status: true,
      message: 'image store sussfully',
    };

    response.send(res);
    response.end();
  }
}
