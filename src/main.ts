import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { ValidationPipe } from './pipes/validation.pipe'

async function start() {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create<NestExpressApplication>(AppModule)

    const swaggerConfig = new DocumentBuilder()
        .setTitle('Nest basement')
        .setDescription('REST documentation')
        .setVersion('1.0.0')
        .addTag('Despair')
        .build()
    const document = SwaggerModule.createDocument(app, swaggerConfig)
    SwaggerModule.setup('/api/docs', app, document)

    app.useGlobalPipes(new ValidationPipe())

    await app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}

start()
