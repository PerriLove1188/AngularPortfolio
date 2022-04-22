import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faLinkedin, faInstagram, faGithub, faJava, faReact } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faGithub = faGithub;
  faJava = faJava;
  faReact = faReact;

  @Output() btnClick = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  openLink(url: string) {
    window.open('https://' + url, "_blank")
  }
}
