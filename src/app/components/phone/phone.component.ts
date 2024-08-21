import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { App } from '../../interfaces/app';
import { AppComponent } from '../../components/app/app.component';
import { LegendaryMotorsportComponent } from '../legendary-motorsport/legendary-motorsport.component';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [TooltipModule, AppComponent, LegendaryMotorsportComponent],
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.css',
})
export class PhoneComponent implements OnInit {
  applications!: App[];
  isPhoneVisibile: boolean = false;
  isLegendaryMotorsportClicked: boolean = false;

  ngOnInit(): void {
    this.applications = [
      {
        name: 'Telegram',
        image: 'https://image.similarpng.com/very-thumbnail/2021/10/Telegram-icon-on-transparent-background-PNG.png',
        link: 'https://telegram.org/'
      },
      {
        name: 'X',
        image: 'https://static.vecteezy.com/system/resources/previews/042/148/611/non_2x/new-twitter-x-logo-twitter-icon-x-social-media-icon-free-png.png',
        link: 'https://x.com/'
      },
      {
        name: 'Tik Tok',
        image: 'https://th.bing.com/th/id/OIP.bOuv9CXDZsXaZUv7r8QRXQAAAA?rs=1&pid=ImgDetMain',
        link: 'https://www.tiktok.com/'
      },
      {
        name: 'Instagram',
        image: 'https://th.bing.com/th/id/R.735dda68880a385ce8cc5be4f3c5fcd6?rik=qSxRw2lCZYy9Mw&riu=http%3a%2f%2fpngimg.com%2fuploads%2finstagram%2finstagram_PNG11.png&ehk=QVCbfkCKi8pJLF08bRkS%2fLeMqLTnJQf402WRaIdN6jE%3d&risl=&pid=ImgRaw&r=0',
        link: 'https://www.instagram.com/'
      },
      {
        name: 'DEX Screener',
        image: 'https://th.bing.com/th/id/OIP.-mzmyPOmskcUc-apKM7XDgAAAA?rs=1&pid=ImgDetMain',
        link: 'https://dexscreener.com/'
      },

    ]
  }

  togglePhone() {
    const phone = document.getElementById('phone');
    phone?.classList.toggle('active');
    this.isPhoneVisibile = !this.isPhoneVisibile;
  }
}
