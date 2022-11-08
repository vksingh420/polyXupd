import { Component, OnInit } from '@angular/core';
import { biomart } from 'src/app/models/biomartGenes.model';
import { biomartGenesService } from 'src/app/services/biomartGenes.service';
import * as d3 from 'd3';

@Component({
  //selector: 'app-person-list',
  templateUrl: './biomartGenes.component.html',
  //styleUrls: ['./person-list.component.css']
})

export class biomartGenesComponent implements OnInit {

  submitted = false;
  biomart: biomart = {
    prefix: '',

  };


  //https://stackoverflow.com/questions/25418333/how-to-draw-straight-line-in-d3-js-horizontally-and-vertically
  private svg: any;

  private createSvg(start: number, end: number): void {
    this.svg = d3.select("body")
    .append("svg")           // append an SVG element to the body
    .attr("width", 1000)      // make the SVG element 449 pixels wide
    .attr("height", 200)
    .append("line")          // attach a line
    .style("stroke", "black") // colour the line
    .attr("x1", 50)     // x position of the first end of the line
    .attr("y1", 100)      // y position of the first end of the line
    .attr("x2", 1000)     // x position of the second end of the line
    .attr("y2", 100);

    //https://www.tutorialsteacher.com/d3js/scales-in-d3
    var scale = d3.scaleLinear()
    .domain([start, end]) //
    .range([50, 1000]);

    this.svg.append("text")          // append text
    .style("fill", "black")    // fill the text with the colour black
    .attr("x", 200)            // set x position of left side of text
    .attr("y", 100)            // set y position of bottom of text
    .attr("textLength", "150") // set text length
    .text("Hello World");      // define the text to display

}

  constructor(private biomartGenesService: biomartGenesService) { }

  ngOnInit(): void {

  }

  searchPrefix(): void {
    console.log("Calling biomartgenes search prefix function")
    this.biomartGenesService.findByPrefix(this.biomart.prefix)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.biomart.prefix = res;
          this.submitted = true;

          const myObj = JSON.parse(this.biomart.prefix);
          //console.log(myObj.Intron[0].startPosition);

          // add all start positions into an array
          var startPositions = new Array<number>();
          var endPositions = new Array<number>();
          for (var i = 0; i < myObj.Intron.length; i++) {
            startPositions.push(myObj.Intron[i].startPosition);
            endPositions.push(myObj.Intron[i].endPosition);
          }

          for (var i = 0; i < myObj.CDS.length; i++) {
            startPositions.push(myObj.CDS[i].startPosition);
            endPositions.push(myObj.CDS[i].endPosition);
          }

          for (var i = 0; i < myObj.UTR5.length; i++) {
            startPositions.push(myObj.UTR5[i].startPosition);
            endPositions.push(myObj.UTR5[i].endPosition);
          }

          for (var i = 0; i < myObj.UTR3.length; i++) {
            startPositions.push(myObj.UTR3[i].startPosition);
            endPositions.push(myObj.UTR3[i].endPosition);
          }

          /*
          for (var i = 0; i < startPositions.length; i++) {
            console.log(startPositions[i]);
          }
          */

          // display the lowest start position and highest end position
          let start = Math.min.apply(Math,startPositions);
          let end = Math.max.apply(Math,endPositions);
          console.log("The lowest start position :" + Math.min.apply(Math,startPositions));
          console.log("The highest end position :" + Math.max.apply(Math,endPositions));

          this.createSvg(start, end);
        },
        error: (e) => console.error(e)
      });
  }

  newPrefix(): void {
    this.submitted = false;
    this.biomart = {
      prefix: ''
    };
  }



}
