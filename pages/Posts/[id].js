export default function Users({ data }) {

    return <>
        <div className="post">
            <div className="title">{data.title}</div>
            <div className="post-body">{data.body}</div>
        </div>
    </>
}

export async function getServerSideProps(context) {

    let res = await fetch('https://jsonplaceholder.typicode.com/posts/' + context.params.id)
    let data = await res.json();



    return {
        props: { data },
    }
}