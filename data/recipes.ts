export type Difficulty = 'آسان' | 'متوسط' | 'سخت';

export type Recipe = {
  id: string;
  name: string;
  categoryId: string;
  image: string;
  description: string;
  prepTime: string;
  cookTime: string;
  difficulty: Difficulty;
  servings: number;
  ingredients: string[];
  steps: string[];
};

export type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
};

export const categories: Category[] = [
  {
    id: 'iranian',
    name: 'غذای ایرانی',
    description: 'طعم‌های اصیل و سنتی ایرانی',
    image: 'https://images.pexels.com/photos/10861181/pexels-photo-10861181.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    color: '#E85D04',
  },
  {
    id: 'fastfood',
    name: 'فست فود',
    description: 'غذاهای سریع و خوشمزه',
    image: 'https://images.pexels.com/photos/15476368/pexels-photo-15476368.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    color: '#D62828',
  },
  {
    id: 'italian',
    name: 'غذای ایتالیایی',
    description: 'پاستا و پیتزای واقعی ایتالیایی',
    image: 'https://images.pexels.com/photos/4237243/pexels-photo-4237243.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    color: '#006400',
  },
  {
    id: 'breakfast',
    name: 'صبحانه بین‌المللی',
    description: 'شروعی دلچسب برای روز',
    image: 'https://images.pexels.com/photos/36968076/pexels-photo-36968076.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    color: '#F4A261',
  },
];

export const recipes: Recipe[] = [
  // Iranian Food
  {
    id: 'ghormeh-sabzi',
    name: 'قرمه سبزی',
    categoryId: 'iranian',
    image: 'https://images.pexels.com/photos/37941013/pexels-photo-37941013.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'خورش سنتی ایرانی با سبزیجات معطر، گوشت و لوبیا قرمز که طعمی اصیل و به یاد ماندنی دارد.',
    prepTime: '۳۰ دقیقه',
    cookTime: '۲ ساعت',
    difficulty: 'متوسط',
    servings: 4,
    ingredients: [
      '۵۰۰ گرم گوشت گوسفندی',
      '۲ بسته سبزی قرمه سبزی (تره، گشنیز، شنبلیله، کراش)',
      '۱ لیوان لوبیا قرمز',
      '۲ عدد پیاز',
      '۴ عدد لیمو عمانی',
      'زعفران، نمک، فلفل، زردچوبه',
    ],
    steps: [
      'پیازها را خرد کرده و در روغن تفت دهید تا طلایی شود.',
      'گوشت را اضافه کرده و تفت دهید تا رنگ آن عوض شود.',
      'سبزیجات خرد شده را جداگانه تفت دهید تا سبز و معطر شوند.',
      'لوبیا پخته، سبزی، لیمو عمانی و ادویه را به گوشت اضافه کنید.',
      'آب جوش اضافه کنید و بگذارید ۲ ساعت روی شعله ملایم بپزد.',
      'در نیم ساعت آخر زعفران دم کرده را اضافه کنید.',
    ],
  },
  {
    id: 'gheimeh',
    name: 'قیمه',
    categoryId: 'iranian',
    image: 'https://images.pexels.com/photos/31897756/pexels-photo-31897756.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'خورش خوشمزه ایرانی با گوشت، لپه و سیب‌زمینی که در مجالس و مناسبت‌ها سرو می‌شود.',
    prepTime: '۲۰ دقیقه',
    cookTime: '۱.۵ ساعت',
    difficulty: 'متوسط',
    servings: 4,
    ingredients: [
      '۵۰۰ گرم گوشت گوسفندی',
      '۱ لیوان لپه',
      '۳ عدد سیب‌زمینی',
      '۲ عدد پیاز',
      '۴ قاشق رب گوجه‌فرنگی',
      'لیمو عمانی، زعفران، نمک و فلفل',
    ],
    steps: [
      'لپه را از چند ساعت قبل خیس کنید.',
      'پیاز را تفت داده و گوشت را اضافه کنید.',
      'رب گوجه را اضافه کرده و تفت دهید.',
      'لپه، لیمو عمانی و ادویه را اضافه کنید.',
      'آب جوش اضافه کرده و بگذارید بپزد.',
      'سیب‌زمینی‌های خلال شده را سرخ کرده و در انتهای پخت اضافه کنید.',
    ],
  },
  {
    id: 'kebab-koobideh',
    name: 'کباب کوبیده',
    categoryId: 'iranian',
    image: 'https://images.pexels.com/photos/37058644/pexels-photo-37058644.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'کباب محبوب ایرانی با گوشت چرخ‌کرده، پیاز و ادویه که روی منقل زغالی پخته می‌شود.',
    prepTime: '۱۵ دقیقه',
    cookTime: '۲۰ دقیقه',
    difficulty: 'آسان',
    servings: 4,
    ingredients: [
      '۵۰۰ گرم گوشت چرخ‌کرده',
      '۱ عدد پیاز بزرگ',
      'سیر، فلفل، نمک، زعفران',
      'کمی زرده تخم‌مرغ برای چسبندگی',
    ],
    steps: [
      'پیاز را رنده کرده و آب آن را بگیرید.',
      'گوشت، پیاز، سیر و ادویه را خوب ورز دهید.',
      'مخلوط را ۳۰ دقیقه در یخچال استراحت دهید.',
      'مخلوط را دور سیخ پیچانده و روی منقل زغالی کباب کنید.',
      'هر دو طرف کباب را ۱۰ دقیقه پخته و با گوجه و نان سرو کنید.',
    ],
  },
  {
    id: 'fesenjan',
    name: 'فسنجان',
    categoryId: 'iranian',
    image: 'https://images.pexels.com/photos/15131224/pexels-photo-15131224.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'خورش مجلل و سنتی ایرانی با گردو، گوشت یا مرغ و رب انار، طعمی منحصر به فرد و غنی.',
    prepTime: '۳۰ دقیقه',
    cookTime: '۲.۵ ساعت',
    difficulty: 'سخت',
    servings: 4,
    ingredients: [
      '۴۰۰ گرم گردو',
      '۵۰۰ گرم مرغ یا گوشت',
      '۱ لیوان رب انار',
      '۱ پیاز',
      'نمک، فلفل، زردچوبه',
      '۲ قاشق روغن',
    ],
    steps: [
      'گردو را آسیاب کرده و در روغن تفت دهید تا روغن بیندازد.',
      'پیاز را تفت داده و مرغ یا گوشت را اضافه کنید.',
      'رب انار و ادویه را اضافه کنید.',
      'گردو را به خورش اضافه کرده و آب جوش بریزید.',
      'بگذارید ۲ ساعت روی شعله ملایم بپزد تا غلیظ شود.',
    ],
  },
  {
    id: 'zereshk-polo',
    name: 'زرشک پلو با مرغ',
    categoryId: 'iranian',
    image: 'https://images.pexels.com/photos/33683221/pexels-photo-33683221.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'پلو زعفرانی با زرشک قرمز و مرغ زعفرانی، غذای مجلسی و رنگارنگ ایرانی.',
    prepTime: '۲۰ دقیقه',
    cookTime: '۱.۵ ساعت',
    difficulty: 'متوسط',
    servings: 4,
    ingredients: [
      '۲ پیمانه برنج',
      '۵۰۰ گرم مرغ',
      '۱ لیوان زرشک',
      'زعفران، نمک، فلفل، پیاز',
      'روغن و آب',
    ],
    steps: [
      'برنج را خیس کرده و آبکش کنید.',
      'مرغ را با پیاز و ادویه پخته و زعفرانی کنید.',
      'زرشک را با کمی روغن و زعفران تفت دهید.',
      'برنج را دم کرده و روی آن زرشک و مرغ سرو کنید.',
    ],
  },
  // Fast Food
  {
    id: 'hamburger',
    name: 'همبرگر',
    categoryId: 'fastfood',
    image: 'https://images.pexels.com/photos/27988502/pexels-photo-27988502.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'برگر آب‌پز با گوشت، پنیر، کاهو و گوجه در نان برگر تازه.',
    prepTime: '۱۵ دقیقه',
    cookTime: '۱۵ دقیقه',
    difficulty: 'آسان',
    servings: 2,
    ingredients: [
      '۲ نان همبرگر',
      '۳۰۰ گرم گوشت چرخ‌کرده',
      '۲ ورق پنیر چدار',
      'کاهو، گوجه، پیاز',
      'سس مایونز و کچاپ',
      'نمک و فلفل',
    ],
    steps: [
      'گوشت را با نمک و فلفل ورز داده و شکل دهید.',
      'گوشت را روی گریل یا تابه سرخ کنید.',
      'پنیر را روی گوشت داغ بگذارید تا آب شود.',
      'نان را تست کرده و مواد را بین نان بچینید.',
      'با سس و سبزیجات سرو کنید.',
    ],
  },
  {
    id: 'pizza',
    name: 'پیتزا',
    categoryId: 'fastfood',
    image: 'https://images.pexels.com/photos/6223186/pexels-photo-6223186.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'پیتزای خانگی با خمیر تازه، سس گوجه، پنیر موزارلا و تاپینگ‌های دلخواه.',
    prepTime: '۳۰ دقیقه',
    cookTime: '۲۰ دقیقه',
    difficulty: 'متوسط',
    servings: 4,
    ingredients: [
      'خمیر پیتزا',
      'سس گوجه‌فرنگی',
      'پنیر موزارلا',
      'پپرونی، قارچ، فلفل دلمه',
      'آویشن و روغن زیتون',
    ],
    steps: [
      'خمیر را باز کرده و سس گوجه بمالید.',
      'پنیر و تاپینگ‌ها را اضافه کنید.',
      'روغن زیتون و آویشن بپاشید.',
      'در فر از پیش گرم شده ۲۰۰ درجه ۲۰ دقیقه بپزید.',
    ],
  },
  {
    id: 'french-fries',
    name: 'سیب‌زمینی سرخ کرده',
    categoryId: 'fastfood',
    image: 'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'سیب‌زمینی طلایی و ترد با نمک که به عنوان پیش‌غذا یا همراه سرو می‌شود.',
    prepTime: '۱۰ دقیقه',
    cookTime: '۱۵ دقیقه',
    difficulty: 'آسان',
    servings: 4,
    ingredients: [
      '۴ عدد سیب‌زمینی',
      'روغن سرخ کردنی',
      'نمک و فلفل',
      'پاپریکا (اختیاری)',
    ],
    steps: [
      'سیب‌زمینی‌ها را خلالی خرد کنید.',
      'آن‌ها را در آب سرد خیس کنید تا نشاسته خارج شود.',
      'خوب خشک کنید و در روغن داغ سرخ کنید.',
      'روی دستمال کاغذی بگذارید تا روغنش کشیده شود.',
      'با نمک و ادویه سرو کنید.',
    ],
  },
  {
    id: 'hot-dog',
    name: 'هات داگ',
    categoryId: 'fastfood',
    image: 'https://images.pexels.com/photos/27668694/pexels-photo-27668694.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'سوسیس گرم در نان نرم با سس‌ها و ترشی، فست فود محبوب و سریع.',
    prepTime: '۵ دقیقه',
    cookTime: '۱۰ دقیقه',
    difficulty: 'آسان',
    servings: 2,
    ingredients: [
      '۲ نان هات داگ',
      '۲ سوسیس',
      'سس خردل، کچاپ، مایونز',
      'ترشی و پیاز',
    ],
    steps: [
      'سوسیس‌ها را در آب جوش یا روی گریل بپزید.',
      'نان‌ها را کمی تست کنید.',
      'سوسیس را در نان بگذارید.',
      'با سس‌ها و ترشی سرو کنید.',
    ],
  },
  {
    id: 'fried-chicken',
    name: 'مرغ سوخاری',
    categoryId: 'fastfood',
    image: 'https://images.pexels.com/photos/33254639/pexels-photo-33254639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'مرغ ترد و طلایی با پوشش ترد که با سیب‌زمینی سرخ کرده سرو می‌شود.',
    prepTime: '۲۰ دقیقه',
    cookTime: '۲۰ دقیقه',
    difficulty: 'متوسط',
    servings: 4,
    ingredients: [
      '۸ تکه مرغ',
      '۲ لیوان آرد',
      '۲ عدد تخم‌مرغ',
      'پودر سیر، پاپریکا، نمک، فلفل',
      'روغن سرخ کردنی',
    ],
    steps: [
      'مرغ را با ادویه مزه دار کنید.',
      'تخم‌مرغ و آرد با ادویه آماده کنید.',
      'مرغ را در آرد، تخم‌مرغ و دوباره آرد بغلطانید.',
      'در روغن داغ سرخ کنید تا طلایی و ترد شود.',
      'روی دستمال کاغذی بگذارید تا روغنش کشیده شود.',
    ],
  },
  // Italian Food
  {
    id: 'pizza-margherita',
    name: 'پیتزا مارگاریتا',
    categoryId: 'italian',
    image: 'https://images.pexels.com/photos/208537/pexels-photo-208537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'پیتزای کلاسیک ایتالیایی با سس گوجه، موزارلا تازه و ریحان که سادگی و طعم آن بی‌نظیر است.',
    prepTime: '۳۰ دقیقه',
    cookTime: '۱۵ دقیقه',
    difficulty: 'متوسط',
    servings: 2,
    ingredients: [
      'خمیر پیتزا',
      'سس گوجه ساده',
      'پنیر موزارلا تازه',
      'برگ ریحان',
      'روغن زیتون فرابکر',
    ],
    steps: [
      'خمیر را باز کرده و سس گوجه بمالید.',
      'موزارلا خرد شده را اضافه کنید.',
      'در فر داغ ۲۵۰ درجه ۱۰-۱۵ دقیقه بپزید.',
      'برگ ریحان و روغن زیتون اضافه کرده و سرو کنید.',
    ],
  },
  {
    id: 'pasta-carbonara',
    name: 'پاستا کاربونارا',
    categoryId: 'italian',
    image: 'https://images.pexels.com/photos/31779533/pexels-photo-31779533.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'پاستای کلاسیک رومی با سس خامه‌ای، پنیر پارمزان، تخم‌مرغ و بکن.',
    prepTime: '۱۰ دقیقه',
    cookTime: '۱۵ دقیقه',
    difficulty: 'متوسط',
    servings: 4,
    ingredients: [
      '۴۰۰ گرم اسپاگتی',
      '۲۰۰ گرم بکن',
      '۳ زرده تخم‌مرغ',
      'پنیر پارمزان',
      'فلفل سیاه',
    ],
    steps: [
      'اسپاگتی را در آب نمک بپزید.',
      'بکن را تفت دهید تا ترد شود.',
      'زرده و پارمزان را مخلوط کنید.',
      'پاستای داغ را با بکن و سس تخم‌مرغ مخلوط کنید.',
      'با فلفل سیاه و پارمزان سرو کنید.',
    ],
  },
  {
    id: 'lasagna',
    name: 'لازانیا',
    categoryId: 'italian',
    image: 'https://images.pexels.com/photos/34474031/pexels-photo-34474031.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'پاستای لایه‌ای ایتالیایی با گوشت، سس گوجه، سس بشامل و پنیر که در فر پخته می‌شود.',
    prepTime: '۳۰ دقیقه',
    cookTime: '۴۵ دقیقه',
    difficulty: 'سخت',
    servings: 6,
    ingredients: [
      'ورقه‌های لازانیا',
      '۵۰۰ گرم گوشت چرخ‌کرده',
      'سس گوجه',
      'سس بشامل',
      'پنیر موزارلا و پارمزان',
    ],
    steps: [
      'گوشت را با سس گوجه پخته و سس بشامل را آماده کنید.',
      'در ظرف فر لایه‌های ورقه، گوشت و سس بشامل را بچینید.',
      'پنیر را روی آخرین لایه بپاشید.',
      'در فر ۱۸۰ درجه ۴۵ دقیقه بپزید تا طلایی شود.',
    ],
  },
  {
    id: 'risotto',
    name: 'ریزوتو',
    categoryId: 'italian',
    image: 'https://images.pexels.com/photos/6544216/pexels-photo-6544216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'ریزوتوی خامه‌ای ایتالیایی با برنج آربریو، قارچ و پارمزان که طعمی لطیف دارد.',
    prepTime: '۱۰ دقیقه',
    cookTime: '۳۰ دقیقه',
    difficulty: 'متوسط',
    servings: 4,
    ingredients: [
      '۲ لیوان برنج آربریو',
      '۱ پیاز',
      '۲۰۰ گرم قارچ',
      'آب مرغ',
      'پنیر پارمزان و کره',
      'روغن زیتون',
    ],
    steps: [
      'پیاز را در روغن زیتون تفت دهید.',
      'برنج را اضافه کرده و تفت دهید.',
      'آب مرغ را کم کم اضافه کرده و هم بزنید.',
      'قارچ تفت داده را اضافه کنید.',
      'با پارمزان و کره مخلوط کرده و سرو کنید.',
    ],
  },
  {
    id: 'tiramisu',
    name: 'تیرامیسو',
    categoryId: 'italian',
    image: 'https://images.pexels.com/photos/19119979/pexels-photo-19119979.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'دسر معروف ایتالیایی با لایه‌های بیسکویت قهوه، ماسکارپونه و کاکائو.',
    prepTime: '۳۰ دقیقه',
    cookTime: 'بدون پخت',
    difficulty: 'متوسط',
    servings: 6,
    ingredients: [
      'بیسکویت ساویلاردی',
      '۵۰۰ گرم پنیر ماسکارپونه',
      '۴ عدد تخم‌مرغ',
      '۱ لیوان قهوه اسپرسو',
      'شکر و کاکائو',
    ],
    steps: [
      'قهوه را دم کرده و خنک کنید.',
      'زرده و شکر را زده و ماسکارپونه را اضافه کنید.',
      'سفیده را زده و با مخلوط ترکیب کنید.',
      'بیسکویت‌ها را در قهوه غوطه داده و لایه‌بندی کنید.',
      'حداقل ۴ ساعت در یخچال بگذارید و با کاکائو سرو کنید.',
    ],
  },
  // International Breakfast
  {
    id: 'pancakes',
    name: 'پنکیک',
    categoryId: 'breakfast',
    image: 'https://images.pexels.com/photos/730922/pancakes-food-eat-breakfast-730922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'پنکیک‌های نازک و پف‌دار با شربت ماپل و کره که صبحانه‌ای شیرین و دلچسب است.',
    prepTime: '۱۰ دقیقه',
    cookTime: '۱۵ دقیقه',
    difficulty: 'آسان',
    servings: 4,
    ingredients: [
      '۲ لیوان آرد',
      '۲ عدد تخم‌مرغ',
      '۱.۵ لیوان شیر',
      '۲ قاشق شکر',
      'بیکینگ پودر و نمک',
      'کره و شربت ماپل',
    ],
    steps: [
      'مواد خشک را مخلوط کنید.',
      'تخم‌مرغ و شیر را اضافه کرده و هم بزنید.',
      'در تابه نچسب با کره پنکیک‌ها را سرخ کنید.',
      'وقتی حباب‌ها ظاهر شدند، برگردانید.',
      'با کره و شربت ماپل سرو کنید.',
    ],
  },
  {
    id: 'french-toast',
    name: 'فرنچ تست',
    categoryId: 'breakfast',
    image: 'https://images.pexels.com/photos/10232459/pexels-photo-10232459.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'نان خیس خورده در مخلوط تخم‌مرغ و شیر، سرخ شده و با میوه و شربت سرو می‌شود.',
    prepTime: '۱۰ دقیقه',
    cookTime: '۱۰ دقیقه',
    difficulty: 'آسان',
    servings: 2,
    ingredients: [
      '۴ ورقه نان تست',
      '۲ عدد تخم‌مرغ',
      'نصف لیوان شیر',
      'وانیل و دارچین',
      'کره و شربت ماپل',
    ],
    steps: [
      'تخم‌مرغ، شیر، وانیل و دارچین را بزنید.',
      'نان را در مخلوط خیس کنید.',
      'در تابه با کره هر دو طرف را سرخ کنید.',
      'با میوه و شربت ماپل سرو کنید.',
    ],
  },
  {
    id: 'omelette',
    name: 'املت',
    categoryId: 'breakfast',
    image: 'https://images.pexels.com/photos/1437268/pexels-photo-1437268.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'املت سبزیجات با تخم‌مرغ، گوجه و فلفل دلمه، صبحانه‌ای مقوی و سریع.',
    prepTime: '۵ دقیقه',
    cookTime: '۱۰ دقیقه',
    difficulty: 'آسان',
    servings: 2,
    ingredients: [
      '۴ عدد تخم‌مرغ',
      '۱ عدد گوجه',
      '۱ عدد فلفل دلمه',
      'پیاز و سیر',
      'نمک، فلفل، روغن',
    ],
    steps: [
      'سبزیجات را خرد کرده و تفت دهید.',
      'تخم‌مرغ‌ها را بزنید و اضافه کنید.',
      'هم بزنید تا پخته شود.',
      'با نان تازه سرو کنید.',
    ],
  },
  {
    id: 'eggs-benedict',
    name: 'اگز بندیکت',
    categoryId: 'breakfast',
    image: 'https://images.pexels.com/photos/11288960/pexels-photo-11288960.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'نان انگلیسی با بکن، تخم‌مرغ پوچ و سس هلندی، صبحانه‌ای مجلل و کلاسیک.',
    prepTime: '۱۵ دقیقه',
    cookTime: '۱۵ دقیقه',
    difficulty: 'سخت',
    servings: 2,
    ingredients: [
      '۲ نان انگلیسی',
      '۴ ورقه بکن',
      '۴ عدد تخم‌مرغ',
      'زرده برای سس هلندی',
      'آب لیمو و کره آب شده',
    ],
    steps: [
      'سس هلندی را با زرده، کره و آب لیمو درست کنید.',
      'بکن را تفت دهید.',
      'تخم‌مرغ‌های پوچ را در آب سرکه درست کنید.',
      'نان را تست کرده و بکن و تخم‌مرغ را بچینید.',
      'سس هلندی را روی آن بریزید.',
    ],
  },
  {
    id: 'croissant-breakfast',
    name: 'کروسان صبحانه',
    categoryId: 'breakfast',
    image: 'https://images.pexels.com/photos/31079905/pexels-photo-31079905.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'کروسان تازه با کره و مربا به همراه قهوه داغ، صبحانه‌ای فرانسوی و لذیذ.',
    prepTime: '۵ دقیقه',
    cookTime: '۵ دقیقه',
    difficulty: 'آسان',
    servings: 2,
    ingredients: [
      '۲ کروسان',
      'کره',
      'مربا',
      'پنیر',
      'قهوه یا چای',
    ],
    steps: [
      'کروسان‌ها را کمی گرم کنید.',
      'کره و مربا یا پنیر را سرو کنید.',
      'با قهوه داغ نوش جان کنید.',
    ],
  },
];

export const getRecipesByCategory = (categoryId: string): Recipe[] =>
  recipes.filter((r) => r.categoryId === categoryId);

export const getCategoryById = (id: string): Category | undefined =>
  categories.find((c) => c.id === id);

export const getRecipeById = (id: string): Recipe | undefined =>
  recipes.find((r) => r.id === id);

export const searchRecipes = (query: string): Recipe[] => {
  if (!query.trim()) return [];
  const q = query.trim();
  return recipes.filter(
    (r) => r.name.includes(q) || r.description.includes(q)
  );
};
