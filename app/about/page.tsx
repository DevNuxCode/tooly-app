type Repo = {
    id: number;
    title: string;
    author: number;
    _links: string
    
    
}

export default async function Page(){
    const res = await fetch('https://laravel.distribuidoravega.cl/wp-json/wp/v2/posts/51');
    const data: Repo = await res.json();
    console.log(data)
    return (
                <div className="pb-5 pt-6 text-center">
                    <p>{data.content.rendered}</p>
                    <p>id: {data.id}</p>
                    <p>title: {data.title.rendered}</p>
                    
                    
                

                </div>
    )
        
   
}
