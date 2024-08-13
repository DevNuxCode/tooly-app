type Repository = {
    id: number;
    title: string;
    rendered: string
    
}

export default async function Page(){
    const res = await fetch('https://laravel.distribuidoravega.cl/wp-json/wp/v2/posts/');
    const data: Repository = await res.json();
    
    return (
                <div>
                    
                    <h1>{data[0].title.rendered} </h1><br/>
                    <p>{data[0].id}</p>
                    <div>{data[0].author}</div>
                

                </div>
    )
        
   
}
