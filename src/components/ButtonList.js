import Button from "./Button";

const ButtonList = () => {

    const buttonNames = ["All", "Narendra Modi", "Entertainment",
        "News",
        "Movies",
        "Bhakti",
        "Music",
        "Debate",
        "Gaming",
        "Computer Programming", "Debates", "Crowd",];


    return (
        <div className="flex overflow-x-hidden whitespace-nowrap max-w-full">
            {buttonNames.map((name) => (
                <Button name={name} key={name} />))}
        </div>

    );
};

export default ButtonList;