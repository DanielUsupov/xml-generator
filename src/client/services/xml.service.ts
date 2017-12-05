import * as fs from 'fs'
import * as builder from 'xmlbuilder'

export class XmlService {
    private xmlDoc: any
    private dirPath = __dirname + 'xmlfiles/xmldoc.xml'
    private doc = builder.create()
    public generateXml(object) {
        this.doc.begin('root')
            .ele('first')
                .txt(object.first)
            .up()
            .ele('second')
                .txt(object.second)
            .up()
            .ele('third')
                .txt(object.third)

        this.xmlDoc = this.doc.toString({ pretty: true })
        fs.writeFile(this.dirPath, this.xmlDoc, err => {
            if (err) { return console.log(err) }
            console.log('The file was saved!')
        })
    }
}
