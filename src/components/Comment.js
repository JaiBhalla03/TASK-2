import React from 'react';
import profileImage from '../image/profile.png'


//this will be reusable components
const Comment = () => {
    return (
        <div className={'main_container'}>
            <div className={'comment_container'}>
                <img src={profileImage}/>
                <div className={'comment_text'}>
                    <div className={'name'}>
                        <div>Rahul Gupta</div>
                        <p className={'time'}>2 months agp</p>
                    </div>
                    <div className={'comment'}>This is a great post</div>
                </div>
            </div>

            <hr className={'seperation'}/>
        </div>
    );
};

export default Comment;