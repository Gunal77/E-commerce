import Navbar from "./Navbar";
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home(){
  return(
    <>
    <Navbar />
    <div id="img-items-1" className="w-[31%] h-[20%] flex gap-[2rem] pt-5" >
      <img className="w-[100%] h-[100%]" src="/src/images/web-img.jpg" alt="" />
      <img className="w-[100%] h-[100%]" src="/src/images/web-img.jpg" alt="" />
      <img className="w-[100%] h-[100%]" src="/src/images/web-img.jpg" alt="" />
    </div>
    <div className="p-5">
      <div className="font-bold text-2xl">Flash Deals</div>
      <div>Up to 65% off</div>
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-6xl"
    >
      <CarouselContent>
        {Array.from({ length: 20 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1 flex gap-5">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div><img src="/src/images/web-img.jpg" alt="" />
                  <span> Now $136.67</span>
                  <div>iFanze portable power station</div>
                  <div className="border-[1px] py-2 border-black flex justify-center rounded-full mt-3 hover:border-2"><button type="button">Options</button></div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div><img src="/src/images/web-img.jpg" alt="" />
                  <span> Now $136.67</span>
                  <div>iFanze portable power station</div>
                  <div className="border-[1px] py-2 border-black flex justify-center rounded-full mt-3 hover:border-2"><button type="button">Options</button></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>

    <div className="p-5">
      <div className="font-bold text-2xl">Elevated everyday eats</div>
      <div className="text-sm pb-4">New finds launching weekly.</div>
    </div>
    <div className="flex gap-14">
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-xl"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                <div><img src="/src/images/web-img.jpg" alt="" />
                  <span> Now $136.67</span>
                  <div>iFanze portable power station</div>
                  <div className="border-[1px] py-2 border-black flex justify-center rounded-full mt-3 hover:border-2"><button type="button">+Add</button></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    <div className="w-[19%] h-[10%] "><img className="w-[100%] h-[100%]" src="/src/images/web-img.jpg" alt="" />
    {/* In the div we need to use horizontal img */}
    </div>
    </div>

    <div id="img-items-1" className="w-[31%] h-[20%] flex gap-[2rem] pt-5" >
      <img className="w-[100%] h-[100%]" src="/src/images/web-img.jpg" alt="" />
      <img className="w-[100%] h-[100%]" src="/src/images/web-img.jpg" alt="" />
      <img className="w-[100%] h-[100%]" src="/src/images/web-img.jpg" alt="" />
    </div>

    <div className="p-5">
      <div className="font-bold text-2xl">No fuss, just fabulous</div>
      <div className="text-sm">Style your home in a flash.</div>
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-6xl"
    >
      <CarouselContent>
        {Array.from({ length: 20 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1 flex gap-5">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div><img src="/src/images/web-img.jpg" alt="" />
                  <span> Now $136.67</span>
                  <p>iFanze portable power station</p>
                  <div className="border-[1px] py-2 border-black flex justify-center rounded-full mt-3 hover:border-2"><button type="button">Options</button></div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div><img src="/src/images/web-img.jpg" alt="" />
                  <span> Now $136.67</span>
                  <div>iFanze portable power station</div>
                  <div className="border-[1px] py-2 border-black flex justify-center rounded-full mt-3 hover:border-2"><button type="button">Options</button></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
    <div className="flex p-7 pb-12">
    <p className="text-5xl max-w-[60%] font-bold">Explore millions of offerings tailored to your business needs</p>
    <div className="flex-none pr-14">
      <p className="text-4xl  text-orange-500">200M+</p>
      <p className="text-xl pl-2">products</p>
    </div>
    <div>
    <p className="text-4xl  text-orange-500">200K+</p>
    <p className="text-xl pl-2">suppliers</p>
    </div>
    </div>

    <div className="flex justify-between p-6 ">
      <div className="relative">
        <img className="border-[2px] rounded-full w-[10rem] h-[10rem] p-12" src="https://s.alicdn.com/@img/imgextra/i3/O1CN01fm34sD1PrUwNSEFdk_!!6000000001894-2-tps-200-200.png" alt="" />
        <p className="absolute top-0 left-0 pt-[6.5rem] p-7 text-sm">Business Sevices</p>
      </div>
      <div className="relative">
        <img className="border-[2px] rounded-full w-[10rem] h-[10rem] p-12" src="https://s.alicdn.com/@img/imgextra/i2/O1CN01Si2Chv1URSNSZI3w2_!!6000000002514-2-tps-200-200.png" alt="" />
        <p className="absolute top-0 left-0 pt-[6.5rem] p-11 text-sm">Apparel & Accessories</p>
      </div>
      <div className="relative">
        <img className="border-[2px]  rounded-full w-[10rem] h-[10rem] p-12" src="https://s.alicdn.com/@img/imgextra/i2/O1CN01FNDTXs1Js3bqyZjbx_!!6000000001083-2-tps-200-200.png" alt="" />
        <p className="absolute top-0 left-0 pt-[6.5rem] p-7 text-sm">Home & Garden</p>
      </div>
      <div className="relative">
        <img className="border-[2px]  rounded-full w-[10rem] h-[10rem] p-12" src="https://s.alicdn.com/@img/imgextra/i3/O1CN01gRUkNN1sW5HWJb8Me_!!6000000005773-2-tps-200-200.png" alt="" />
        <p className="absolute top-0 left-0 pt-[6.5rem] p-16 text-sm">Beauty</p>
      </div>
      <div className="relative">
        <img className="border-[2px]  rounded-full w-[10rem] h-[10rem] p-12" src="https://s.alicdn.com/@img/imgextra/i1/O1CN01GqpTkM1kCNBbXXtfT_!!6000000004647-2-tps-200-200.png" alt="" />
        <p className="absolute top-0 left-0 pt-[6.5rem] p-12 text-sm">Shoes & Accessories</p>
      </div>
      <div className="relative">
        <img className="border-[2px]  rounded-full w-[10rem] h-[10rem] p-12" src="https://s.alicdn.com/@img/imgextra/i4/O1CN01c8xN8n1Xl6DAeTUDe_!!6000000002963-2-tps-200-200.png" alt="" />
        <p className="absolute top-0 left-0 pt-[6.5rem] p-12 text-sm">Packing & Printing</p>
      </div>
    </div>
    <div className="flex justify-between pl-10 pt-7 pb-12">
      <div className="relative">
        <img className="border-[2px] rounded-full w-[10rem] h-[10rem] p-12" src="https://s.alicdn.com/@img/imgextra/i3/O1CN01fm34sD1PrUwNSEFdk_!!6000000001894-2-tps-200-200.png" alt="" />
        <p className="absolute top-0 left-0 pt-[6.5rem] p-7 text-sm">Business Sevices</p>
      </div>
      <div className="relative">
        <img className="border-[2px] rounded-full w-[10rem] h-[10rem] p-12" src="https://s.alicdn.com/@img/imgextra/i2/O1CN01Si2Chv1URSNSZI3w2_!!6000000002514-2-tps-200-200.png" alt="" />
        <p className="absolute top-0 left-0 pt-[6.5rem] p-11 text-sm">Apparel & Accessories</p>
      </div>
      <div className="relative">
        <img className="border-[2px]  rounded-full w-[10rem] h-[10rem] p-12" src="https://s.alicdn.com/@img/imgextra/i2/O1CN01FNDTXs1Js3bqyZjbx_!!6000000001083-2-tps-200-200.png" alt="" />
        <p className="absolute top-0 left-0 pt-[6.5rem] p-7 text-sm">Home & Garden</p>
      </div>
      <div className="relative">
        <img className="border-[2px]  rounded-full w-[10rem] h-[10rem] p-12" src="https://s.alicdn.com/@img/imgextra/i3/O1CN01gRUkNN1sW5HWJb8Me_!!6000000005773-2-tps-200-200.png" alt="" />
        <p className="absolute top-0 left-0 pt-[6.5rem] p-16 text-sm">Beauty</p>
      </div>
      <div className="relative">
        <img className="border-[2px]  rounded-full w-[10rem] h-[10rem] p-12" src="https://s.alicdn.com/@img/imgextra/i1/O1CN01GqpTkM1kCNBbXXtfT_!!6000000004647-2-tps-200-200.png" alt="" />
        <p className="absolute top-0 left-0 pt-[6.5rem] p-12 text-sm">Shoes & Accessories</p>
      </div>
      <div className="relative">
        <img className="border-[2px]  rounded-full w-[10rem] h-[10rem] p-12" src="https://s.alicdn.com/@img/imgextra/i4/O1CN01c8xN8n1Xl6DAeTUDe_!!6000000002963-2-tps-200-200.png" alt="" />
        <p className="absolute top-0 left-0 pt-[6.5rem] p-12 text-sm">Packing & Printing</p>
      </div>
    </div>

    <div className="p-14  bg-[url('https://s.alicdn.com/@img/imgextra/i3/O1CN01FaQ37w1Zb91Cymass_!!6000000003212-0-tps-1920-456.jpg')]">
      <p className="text-6xl font-bold items-center justify-center pb-4">Ready to get started?</p>
      <p className="text-2xl pb-6">Explore millions of products from trusted suppliers by signing up today!</p>
      <button className="border-[1px] border-black bg-orange-500 rounded-full px-12 text-white py-4 text-2xl ">Sign up</button>
    </div>


    {/* //new for router savings */}
    <p id="savings" className="border-b border-gray-400 p-3">Savings</p>
    <div className="w-[100%] h-[100%] pt-20 pb-10">
      <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-7483/k2-_c296feea-536e-4cc3-b055-ab7ee0d821e6.v1.jpg" alt="" />
    </div>
    <div className="flex justify-start gap-5 p-4">
      <button className="border-2 rounded-full p-1 bg-slate-200">All filters </button>
      <button className="border-2 rounded-full p-1 bg-slate-200">In-store</button>
      <button className="border-2 rounded-full p-1 bg-slate-200">Price</button>
      <button className="border-2 rounded-full p-1 bg-slate-200">Brand</button>
      <button className="border-2 rounded-full p-1 bg-slate-200">Fullfillment Speed</button>
      <button className="pl-[32rem]"><span className="font-bold">Sort by</span><span>|</span>Best match</button>
    </div>
    <div className="border-t border-gray-400 p-3 font-bold">Savings</div>
    <div className="p-4">
    {/* <input type="search" className="border-black px-44 py-2 border-[1px]">Search in savings</input>  */}
    <input className="border-black px-44 py-2 border-[2px]" type="search" value="search in savings" />
    </div>
    <div className="flex justify-between p-10">
      <div>
        <img className="border-[2px] rounded-full w-[5.5rem] h-[5.5rem]" src="https://i5.walmartimages.com/dfw/4ff9c6c9-e4c1/k2-_bde476a9-59ee-4722-a2f2-00ecfbed1202.v1.png" alt="" />
        <p>Flash Deals</p>
      </div>
      <div>
        <img className="border-[2px] rounded-full w-[5.5rem] h-[5.5rem]" src="https://i5.walmartimages.com/dfw/4ff9c6c9-454b/k2-_0968bebd-32e7-474a-b764-79cc021b9af0.v1.jpg" alt="" />
        <p>$20 & under</p>
      </div>
      <div>
        <img className="border-[2px] rounded-full w-[5.5rem] h-[5.5rem]" src="https://i5.walmartimages.com/dfw/4ff9c6c9-56b9/k2-_c65fc424-53f3-429a-b997-cae7c3225db0.v1.png" alt="" />
        <p>Patio&Garden</p>
      </div>
      <div>
        <img className="border-[2px] rounded-full w-[5.5rem] h-[5.5rem]" src="https://i5.walmartimages.com/dfw/4ff9c6c9-672e/k2-_17a43324-6aae-4167-a828-b1acd77eda54.v1.jpg" alt="" />
        <p>Get it today</p>
      </div>
      <div>
        <img className="border-[2px] rounded-full w-[5.5rem] h-[5.5rem]" src="https://i5.walmartimages.com/dfw/4ff9c6c9-16a1/k2-_e70834dd-cd32-41b5-acac-e38b7e04b308.v1.jpg" alt="" />
        <p>School Savings</p>
      </div>
      <div>
        <img className="border-[2px] rounded-full w-[5.5rem] h-[5.5rem]" src="https://i5.walmartimages.com/dfw/4ff9c6c9-8bdc/k2-_f02d2032-78f9-4aa0-8502-a3836546a04e.v1.jpg" alt="" />
        <p>College Savings</p>
      </div>
      <div>
        <img className="border-[2px] rounded-full w-[5.5rem] h-[5.5rem]" src="https://i5.walmartimages.com/dfw/4ff9c6c9-777d/k2-_e3234197-2fe4-48db-8868-64f2c3583ddb.v1.png" alt="" />
        <p>Fashion&Design</p>
      </div>
      <div>
        <img className="border-[2px] rounded-full w-[5.5rem] h-[5.5rem]" src="https://i5.walmartimages.com/dfw/4ff9c6c9-2776/k2-_690acfbc-d4b0-431e-8c01-567586f2e4fa.v1.jpg" alt="" />
        <p>Technology</p>
      </div>
      <div>
        <img className="border-[2px] rounded-full w-[5.5rem] h-[5.5rem]" src="https://i5.walmartimages.com/dfw/4ff9c6c9-b46b/k2-_222e78fb-faee-4479-949f-b63151f5326d.v1.jpg" alt="" />
        <p>Foods&Kitchen</p>
      </div>
    </div>
    <div className="border-t border-gray-400 p-3 font-bold">Laptops<span className="text-gray-400">(1000+)</span></div>
    <div className="p-3">Uses external data. Price when purchased online</div>
    <div className="flex">
      <div>
        <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/16-9640/spi/nt/silver/notebook-xps-16-9640-nt-silver-compare-800x550-front.png?fmt=png-alpha&wid=800&hei=550" alt="" />
        <p className="pl-4 font-semibold text-xl">Versatile Performance</p>
        <p className="pl-4 text-lg">Starting at ₹35,589.99</p>
        <div className="pl-7 ">
          <ul>Perform personal & home office tasks</ul>
          <ul>Stream, browse and multitask</ul>
          <ul>Video chat with AI enhanced audio & visuals ​(Selected Models)</ul>
          <ul>Create social content</ul>
          <button className=" bg-blue-500 text-white px-9 py-3 mt-[4.5rem]" type="button">Shop Inspiron</button>
          <button className="border-[1px] border-blue-500 bg-white text-blue-500 px-9 py-3 mt-5" type="button">Shop Inspiron</button>
        </div>
        
      </div>
      <div>
        <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/14-3440/spi/ng/notebook-vostro-14-3440-gray-compare-800x550-front.png?fmt=png-alpha&wid=800&hei=550" alt=""  />
        <p className="pl-4 font-semibold text-xl">Small Business Productivity</p>
        <p className="pl-4 text-lg">Starting at ₹35,989.97</p>
        <div className="pl-7 ">
          <ul>Protect data with essential security</ul>
          <ul>Power business applications</ul>
          <ul>Collaborate with video conferencing</ul>
          <button className=" bg-blue-500 text-white px-9 py-3 mt-[7.4rem]" type="button">Shop Inspiron</button>
          <button className="border-[1px] border-blue-500 bg-white text-blue-500 px-9 py-3 mt-5" type="button">Shop Inspiron</button>
        </div>
      </div>
      <div>
        <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/modules/notebook-inspiron-13-5330-gray-800x550.png?wid=800&hei=550" alt="" />
        <p className="pl-9 font-semibold text-xl">Creators and Creativity</p>
        <p className="pl-9 text-lg">Starting at ₹1,55,290.01</p>
        <div className="pl-11 ">
          <ul>Multitask between intensive programs</ul>
          <ul>Produce video, photography and music</ul>
          <ul>Create and edit digital content with AI-enabled apps</ul>
          <ul>Be productive anywhere</ul>
          <button className=" bg-blue-500 text-white px-9 py-3 mt-11" type="button">Shop Inspiron</button>
          <button className="border-[1px] border-blue-500 bg-white text-blue-500 px-9 py-3 mt-5" type="button">Shop Inspiron</button>
        </div>
      </div>
      <div>
        <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/alienware-m16-r2-intel/spi/ir-perkey/ng/notebook-alienware-m16-r2-ir-perkey-black-compare-800x550-front.psd" alt=""  />
        <p className="pl-4 font-semibold text-xl">Immersive Gaming Experiences</p>
        <p className="pl-4 text-lg">Starting at ₹1,55,489.98</p>
        <div className="pl-7 ">
          <ul>Power any game with exceptional cooling</ul>
          <ul>Experience smooth gaming with fast refresh rates</ul>
          <ul>Express yourself with AlienFX lighting</ul>
          <ul>Enjoy premium materials & sleek designs</ul>
          <button className=" bg-blue-500 text-white px-9 py-3 mt-5" type="button">Shop Inspiron</button>
          <button className="border-[1px] border-blue-500 bg-white text-blue-500 px-9 py-3 mt-5" type="button">Shop Inspiron</button>
        </div>
      </div>
    </div>
    <div className="flex">
      <div>
        <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/6ec67665f4f4412a900cca993a11d1ba_9366/racer-tr23-shoes.jpg" alt="" />
      </div>
      <div>
        <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/6cbcff7740764433800eadba0101f428_9366/running-adiglide-shoes.jpg" alt="" />
      </div>
      <div>
        <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/dd92e59f0a014d2aa1b7af1a006d8743_9366/sleetwalk-shoes.jpg" alt="" />
      </div>
      <div>
        <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f4910d8f73214662b792da428a314267_9366/hiit-graphics-tee.jpg" alt="" />
      </div>
    </div>
    </>
  );
}
