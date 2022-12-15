import React from 'react';
import profileImage from '../image/profile.png'


//this will be reusable components
const Comment = () => {
    return (
        <div className={'main_container'}>
            <div className={'comment_container'}>
                <img src='https://via.placeholder.com/600/d32776'/>
                <div className={profileImage}>
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