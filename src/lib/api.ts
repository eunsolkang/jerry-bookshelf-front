import axios from 'axios';
import { bookType } from '../models/book';


const api = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});

export const getBookList= async() => {

    const res = await api.get(`/books`);

    return res.data;
    
}
/*
[
        {
            backgroundColor: '#bacaca',
            name: '부자아빠와 가난한 아빠',
            imgUrl: 'http://image.kyobobook.co.kr/images/book/xlarge/591/x9791158883591.jpg',
        },
        {
            backgroundColor: '#f4a9ae',
            name: '일의 기쁨과 슬픔',
            imgUrl: 'http://image.yes24.com/goods/80742923/XL',
        },
        {
            backgroundColor: '#6c4e2c',
            name: '소년과 개',
            imgUrl: 'http://image.yes24.com/goods/97155934/XL',
        },
        {
            backgroundColor: '#bdb591',
            name: '파친코',
            imgUrl: 'http://image.yes24.com/goods/59382261/XL',
        },
        {
            backgroundColor: '#68baea',
            name: '숨결이 바람 될 때',
            imgUrl: 'http://image.yes24.com/goods/30555650/XL',
        },
        {
            backgroundColor: '#b7933f',
            name: '당신 거기 있어줄래요?',
            imgUrl: 'https://t1.daumcdn.net/cfile/tistory/207B32444FCBEEFA27',
        },
        {
            backgroundColor: '#53090a',
            name: '홍학의 자리',
            imgUrl: 'https://img.ridicdn.net/cover/371002434/xxlarge',
        },
        {
            backgroundColor: '#3a75b7',
            name: '모순',
            imgUrl: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/N1a/image/5rhoc4X-0JLibJG3grC_-Ux_Fh0.jpg',
        },
        {
            backgroundColor: '#a50c13',
            name: '규칙 없음',
            imgUrl: 'http://image.yes24.com/goods/92275597/XL',
        },
        {
            backgroundColor: '#a6b1d8',
            name: '프리즘',
            imgUrl: 'http://image.yes24.com/goods/92300843/XL',
        },
        {
            backgroundColor: '#1a0608',
            name: '데미안',
            imgUrl: 'https://image.aladin.co.kr/product/26/0/cover500/s742633278_1.jpg',
        },
        {
            backgroundColor: '#5169b1',
            name: '연금술사',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/ko/1/13/%EC%97%B0%EA%B8%88%EC%88%A0%EC%82%AC.jpg',
        },
        {
            backgroundColor: '#febc02',
            name: '모모',
            imgUrl: 'http://image.yes24.com/goods/1263/XL',
        },
        {
            backgroundColor: '#3f5d55',
            name: '인간실격',
            imgUrl: 'https://mblogthumb-phinf.pstatic.net/MjAxODEyMjlfMTIy/MDAxNTQ2MDQ0NzM2MzIw.OYOuO1tOiPtBtqvZClqAz3hJYcfMzMcjkYU-cU_4udsg.f6l7ano_acoXUfZdnmsAdSRrY4adMmd-v0VMN71Tku4g.JPEG.isof/C0%CE%B0A3BD%C7%B0DD.jpg?type=w800',
        },
        {
            backgroundColor: '#bfd408',
            name: '가난한 사람들',
            imgUrl: 'http://image.yes24.com/goods/103709353/XL',
        },
        {
            backgroundColor: '#3f473b',
            name: '회색인간',
            imgUrl: 'http://image.yes24.com/goods/57799398/XL',
        },
        {
            backgroundColor: '#b2b2b2',
            name: '멋진 신세계',
            imgUrl: 'https://image.aladin.co.kr/product/15263/21/cover500/e897381472_3.jpg',
        },
        {
            backgroundColor: '#e43f47',
            name: '내 치즈는 어디에서 왔을까?',
            imgUrl: 'https://img1.yna.co.kr/etc/inner/KR/2018/12/04/AKR20181204156800005_01_i_P2.jpg',
        },
        {
            backgroundColor: [],
            name: '메타버스',
            imgUrl: 'http://image.yes24.com/goods/96025067/XL',
        },
        {
            backgroundColor: '#262966',
            name: '심판',
            imgUrl: 'http://image.yes24.com/Goods/91860730/XL',
        },
        {
            backgroundColor: '#ea5676',
            name: '결혼전야',
            imgUrl: 'https://image.aladin.co.kr/product/3298/1/cover500/8956607303_1.jpg',
        },
        {
            backgroundColor: '#2d91c6',
            name: 'IT좀 아는 사람',
            imgUrl: 'https://image.aladin.co.kr/product/26094/5/cover500/k792737250_2.jpg',
        },
        {
            backgroundColor: '#820068',
            name: '죄와 벌',
            imgUrl: 'http://minumsa.minumsa.com/wp-content/uploads/bookcover/284_%EC%A3%84%EC%99%80-%EB%B2%8C-1-500x852.jpg',
        },
    ]; */