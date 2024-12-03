//we are providing it props to make this card component dynamic, hence it can be used at multiple instances.
//hence this has become a generic component in which on hard coded values are passed only the inputs are provided.
export default function VideoCard(props: any){
    return <div>
        <img src="/one.jpg"></img>
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
            <img className="rounded-full h-20 w-20 pl-2" src={props.image}></img>
            </div>
            <div className="col-span-11">
                <div>
                {props.title}
                </div>
                <div className="text-gray-600">
                 {props.author}
                </div>
                <div className="text-gray-600">
                   {props.views} | {props.timestamp}
                </div>
            </div>
        </div>
        <div>
            Some text
        </div>
    </div>
}