import { IComponentOptions } from 'angular'

class ToXmlComponent {
  /*@ngInject*/
  private object: object
  constructor(
    private xmlService,
  ) { }

  private generateXml() {

  }
}

export const toXmlComponent: IComponentOptions = {
  controller: ToXmlComponent,
  template: require('./to-xml.component.html'),
}
