import { Injectable } from '@angular/core';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsOperationsService {


  constructor() { 
    let news1:News=new News('Adani Transmission shares hit 52-week low','BusinessNews','after S&P places ESG Rating under review','adani.jpg')
    let news2:News=new News('SBI, ICICI Bank, HDFC Bank, Infosys, RIL: MFs upped stakes in 9 of top 10 holdings in January','BusinessNews','Should you buy?','stockMarket.jpg')
    let news3:News=new News('ap CM fases Some issues','Politics','Opposition leader throws many questions to the cm','news.jpg')
    let news4:News=new News('The Murder in Delhi','Crime','an 30 years person was murdered by some people for money','news.jpg')
    let news5:News=new News('Time Not On His Side','World','US Warns Putin Over Russia-Ukraine War','war.jpg')
    let news6:News=new News('Apple introduces emoji','Technology','users have been wanting for years','apple.jpg')
    let news7:News=new News('Dhoni takes Retairment','Sports','Ex-Captain Dhoni takes the break for his career in cricket','news.jpg')
    
    this.newsArr.push(news1)
    this.newsArr.push(news2)
    this.newsArr.push(news3)
    this.newsArr.push(news4)
    this.newsArr.push(news5)
    this.newsArr.push(news6)
    this.newsArr.push(news7)
  }

  newsArr:News[] = [];

  getNewsArr():News[]
  {
    return this.newsArr;
  }
  getNewsByCategory(filterCategory:string):News[]
  {
    
   let outputArr:News[] = [];

    this.newsArr.forEach(n=>{
      if(n.category == filterCategory)
      {
        outputArr.push(n);
      }
    });

    return outputArr;
  }
  getNewsByCategories(searchCategory:string):News
  {
    let outputNews:News = new News('','','','');
    for(let i=0;i<this.newsArr.length;i++)
    {
      let thisNews:News = this.newsArr[i];
        if(thisNews.category == searchCategory)
        {
          outputNews = thisNews;
          break;
        }
    }
    
    return outputNews;
  }


}