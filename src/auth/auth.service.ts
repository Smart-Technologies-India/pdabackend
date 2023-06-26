import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuthInput } from './dto/create-auth.input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { PrismaService } from 'prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { user } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { jwtSecret } from 'src/utils/const';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async signup(name: string, contact: string, password: string) {
    const foundUser: user = await this.prisma.user.findFirst({
      where: { contact: contact },
    });
    if (foundUser)
      throw new BadRequestException('contact number already exist');
    const hashedPassword = await this.hashPassword(password);

    let user = await this.prisma.user.create({
      data: {
        password: hashedPassword,
        name: name,
        contact: contact,
        role: 'USER',
      },
    });

    const token = await this.singToken({
      id: user.id,
      contact: Number(user.contact),
      role: user.role,
    });

    let returnuser: any = user;
    returnuser.contact = Number(user.contact);
    return { ...returnuser, token };
  }

  async signin(number: string, password: string) {
    const user: user = await this.prisma.user.findFirst({
      where: { contact: number },
    });

    if (!user) throw new BadRequestException('Wrong Credentials');

    const isMatch = await this.comparePassword({
      password: password,
      hash: user.password,
    });

    if (!isMatch) throw new BadRequestException('Wrong Credentials');
    const token = await this.singToken({
      id: user.id,
      contact: Number(user.contact),
      role: user.role,
    });

    let returnuser: any = user;
    returnuser.contact = Number(user.contact);
    return { ...returnuser, token };
  }

  async hashPassword(password: string): Promise<string> {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }

  async comparePassword(args: {
    password: string;
    hash: string;
  }): Promise<boolean> {
    return await bcrypt.compare(args.password, args.hash);
  }

  async singToken(args: {
    id: number;
    contact: number;
    role: string;
  }): Promise<string> {
    const payload = args;
    return this.jwt.signAsync(payload, {
      secret: jwtSecret,
    });
  }
}
