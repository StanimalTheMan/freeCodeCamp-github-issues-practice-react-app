import React from 'react';

const IssueList = () => {
    const [issues, setIssues] = React.useState([]);

    React.useEffect(() => {
        fetch('https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues').then(
            (res) => {
                res.json().then(data => {
                    setIssues(data)
                })
            }
        )
    }, [])

    // if (!issues) {
    //     return <h1>Is loading</h1>
    // }
    return (
        <>
            <h1>IssueList of freeCodeCamp</h1>
            {issues.map(issue => {
                return <p>{issue.title}</p>
            })}
        </>
    );
};

export default IssueList;