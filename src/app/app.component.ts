import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import mx from './mxgraph-engine/mxgraph';
import '@typed-mxgraph/typed-mxgraph';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('mxgraphEl') mxgraphEl: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    if(mx.mxClient.isBrowserSupported()) {
      console.log('Yes! Yes!');
    }
    const graph = new mx.mxGraph(this.mxgraphEl.nativeElement);
    const model = graph.getModel();
    model.beginUpdate();
    try {
      graph.insertVertex(graph.getDefaultParent(), '', 'TEST', 0, 0, 100, 100);
    } finally {
      model.endUpdate();
    }
  }
}
