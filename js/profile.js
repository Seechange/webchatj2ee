const user = [
    {id:1,name:"Thiên Đạt",totalFriend:2000, matualFr:200,backgroud: [
        {id:1,image:"./assets/img/a1.jpg"}
    ],avatar:[
        {id:1,image:"./assets/img/a1.jpg"},
        {id:2,image:"./assets/img/a2.jpg"},
        {id:3,image:"./assets/img/a3.jpg"},
        {id:4,image:"./assets/img/a4.jpg"},
        {id:5,image:"./assets/img/a5.jpg"}

    ],post:[
        {id:1,time:"7h",public:"Tất cả mọi người",content:"Cuộc đời thật bất công", love: 12, comment: 10 , share: 11},
        {id:2,time:"12h",public:"Tất cả mọi người",content:"Anh Yêu Em",love: 12, comment: 10 , share: 11},
        {id:3,time:"6h",public:"Tất cả mọi người",content:"Code thật là dễ",love: 12, comment: 10 , share: 11},
        {id:4,time:"8h",public:"Tất cả mọi người",content:"Chúng ta sẽ là gì của nhau",love: 12, comment: 10 , share: 11},
        {id:5,time:"9h",public:"Tất cả mọi người",content:"Say hi",love: 12, comment: 10 , share: 11}

    ],location:"Tp Ho Chi Minh", Birthday: "12/05/1998",Join:"11/01/2008",story:"Tình là gì !!",username:"",matualFriend:[
        {id:2,name:"Dinh Dung",image:"../assets/img/a2.jpg",isfolow:false,isFriend:false},
        {id:3,name:"Tú Tài",image:"../assets/img/a3.jpg",isfolow:true,isFriend:false},
        {id:4,name:"Thành Lực",image:"../assets/img/a4.jpg",isfolow:true,isFriend:false},
        {id:5,name:"Phương Nhi",image:"../assets/img/a5.jpg",isfolow:true,isFriend:true},
        {id:6,name:"Chí Dũng",image:"../assets/img/a6.jpg",isfolow:false,isFriend:true},
        {id:7,name:"Danh Võ",image:"../assets/img/pexels-irina-iriser-1366957.jpg",isfolow:false,isFriend:true},

    ]},
    {id:2,name:"Dinh Dung",totalFriend:2000, matualFriend: 200,backgroud: [
        {id:1,image:"../assets/img/a2.jpg"}
    ],avatar:[
        {id:1,image:"./assets/img/a2.jpg"},
        {id:2,image:"./assets/img/a1.jpg"},
        {id:3,image:"./assets/img/a3.jpg"},
        {id:4,image:"./assets/img/a5.jpg"},
        {id:5,image:"./assets/img/a3.jpg"}
    ],post:[
        {id:1,time:"7h",public:"Tất cả mọi người",content:"Biết là mình thích nhau", love: 12, comment: 10 , share: 11},
        {id:2,time:"12h",public:"Tất cả mọi người",content:"Ai game không",love: 12, comment: 10 , share: 11},
        {id:3,time:"6h",public:"Tất cả mọi người",content:"Em là ngoại lệ của anh",love: 12, comment: 10 , share: 11}
    ],location:"Tp Gia Lai", Birthday: "11/08/2002",Join:"11/01/2008",story:"Say hello Viet Nam",username:"",matualFriend:[
        {id:2,name:"Dinh Dung",image:"../assets/img/a2.jpg",isfolow:true},
        {id:3,name:"Tú Tài",image:"../assets/img/a3.jpg",isfolow:true},
        {id:4,name:"Thành Lực",image:"../assets/img/a4.jpg",isfolow:true},
        {id:5,name:"Phương Nhi",image:"../assets/img/a5.jpg",isfolow:true},
        {id:6,name:"Chí Dũng",image:"../assets/img/a6.jpg",isfolow:false},
        {id:7,name:"Danh Võ",image:"../assets/img/pexels-irina-iriser-1366957.jpg",isfolow:false},

    ]},
    {id:3,name:"Tu Tai",totalFriend:2000, matualFriend: 200,backgroud: [
        {id:1,image:"../assets/img/a3.jpg"}
    ],avatar:[
        {id:1,image:"../assets/img/a3.jpg"}
    ],post:[
        {id:1,time:"",public:"",content:""}
    ]},
    {id:4,name:"Thanh Luc",totalFriend:2000, matualFriend: 200,backgroud: [
        {id:1,image:"../assets/img/a4.jpg"}
    ],avatar:[
        {id:1,image:"../assets/img/a4.jpg"}
    ],post:[
        {id:1,time:"",public:"",content:""}
    ]},
    {id:5,name:"Phuong Nhi",totalFriend:2000, matualFriend: 200,backgroud: [
        {id:1,image:"../assets/img/a5.jpg"}
    ],avatar:[
        {id:1,image:"../assets/img/a5.jpg"}
    ],post:[
        {id:1,time:"",public:"",content:""}
    ]},
    {id:6,name:"Chi Dung",totalFriend:2000, matualFriend: 200,backgroud: [
        {id:1,image:"../assets/img/a6.jpg"}
    ],avatar:[
        {id:1,image:"../assets/img/a6.jpg"}
    ],post:[
        {id:1,time:"",public:"",content:""}
    ]},
    {id:7,name:"Danh Võ",totalFriend:2000, matualFriend: 200,backgroud: [
        {id:1,image:"../assets/img/a6.jpg"}
    ],avatar:[
        {id:1,image:"../assets/img/pexels-irina-iriser-1366957.jpg"}
    ],post:[
        {id:1,time:"",public:"",content:""}
    ]}
]
renderCreatPost = (getIndex) => {
    let element = ""
    user.map((value,index) => {
        if(index === getIndex){
            element += `<div class="create_post-content-wrapper-title">
            <div class="sidebar_left-user-profile">
                <div class="sidebar_left-profile-image">
                    <img id=""
                        src="${value.avatar[0].image}"
                        alt="" />
                </div>
                <div class="create_post-profile-name">
                    <p id="create_post">${value.name}</p>
                </div>
                <div class="create_post-profile-select">
                    <select>
                        <option>Tất cả mọi người</option>
                        <option>Chỉ mình tôi</option>
                        <option>Bạn bè</option>
                        <option>Custom</option>
                    </select>
                </div>
            </div>
            <div class="create_post-content-wrapper-text">
                <div contenteditable="true" id="create_post-content"></div>
            </div>
    
            <div class="create_post-post-editor">
                <div class="create_post-editor-icons">
                    <div class="create_post-icon-group">
                        <p>Thêm vào bài viết của bạn:</p>
                        <div>
                            <svg style="fill: green" xmlns="http://www.w3.org/2000/svg" height="1em"
                                viewBox="0 0 576 512">
                                <path
                                    d="M160 32c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320H328 280 200c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120z" />
                            </svg>
                        </div>
                        <div>
                            <svg style="fill: orange" xmlns="http://www.w3.org/2000/svg" height="1em"
                                viewBox="0 0 512 512">
                                <path
                                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                            </svg>
                        </div>
                        <div>
                            <svg style="fill: blue" xmlns="http://www.w3.org/2000/svg" height="1em"
                                viewBox="0 0 640 512">
                                <path
                                    d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c10 0 18.8-4.9 24.2-12.5l-99.2-99.2c-14.9-14.9-23.3-35.1-23.3-56.1v-33c-15.9-4.7-32.8-7.2-50.3-7.2H178.3zM384 224c-17.7 0-32 14.3-32 32v82.7c0 17 6.7 33.3 18.7 45.3L478.1 491.3c18.7 18.7 49.1 18.7 67.9 0l73.4-73.4c18.7-18.7 18.7-49.1 0-67.9L512 242.7c-12-12-28.3-18.7-45.3-18.7H384zm24 80a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="create_post-submit-button">
                    <button class="create_post-submit-btn">Đăng</button>
                </div>
            </div>
        </div>`
        }
    })
    document.getElementById("creat_post").innerHTML = element
}

renderCreatPost(0)

renderPost = () => {
    let element = '';
    user.map((value, index) => {
        if(index === 0 ){
        const datapostuser = user[0].post
        datapostuser.map((value1, index1) => {
            element += `<div class="post">
        <div class="header_post row">
            <div class="col-1 logo_profile">
                <img src="${value.avatar[index].image}" alt="">
            </div>
            <div class="header_content col-9">
                <div>
                    <p class="title_profile">${value.name}</p>
                </div>
                <div>
                    <p class="time_post">${value1.time} - <span class="status">${value1.public}</span></p>
                </div>
            </div>
            <div class="header_icon col-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                    fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 10C12 10.5304 11.7893 11.0391 11.4142 11.4142C11.0391 11.7893 10.5304 12 10 12C9.46957 12 8.96086 11.7893 8.58578 11.4142C8.21071 11.0391 8 10.5304 8 10C8 9.46957 8.21071 8.96086 8.58578 8.58578C8.96086 8.21071 9.46957 8 10 8C10.5304 8 11.0391 8.21071 11.4142 8.58578C11.7893 8.96086 12 9.46957 12 10ZM18 10C18 10.5304 17.7893 11.0391 17.4142 11.4142C17.0391 11.7893 16.5304 12 16 12C15.4696 12 14.9609 11.7893 14.5858 11.4142C14.2107 11.0391 14 10.5304 14 10C14 9.46957 14.2107 8.96086 14.5858 8.58578C14.9609 8.21071 15.4696 8 16 8C16.5304 8 17.0391 8.21071 17.4142 8.58578C17.7893 8.96086 18 9.46957 18 10ZM6 10C6 10.5304 5.78929 11.0391 5.41422 11.4142C5.03914 11.7893 4.53043 12 4 12C3.46957 12 2.96086 11.7893 2.58578 11.4142C2.21071 11.0391 2 10.5304 2 10C2 9.46957 2.21071 8.96086 2.58578 8.58578C2.96086 8.21071 3.46957 8 4 8C4.53043 8 5.03914 8.21071 5.41422 8.58578C5.78929 8.96086 6 9.46957 6 10Z"
                        fill="black" />
                </svg>
                <svg style="margin-left: 16px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    viewBox="0 0 20 20" fill="none">
                    <path
                        d="M19.4081 3.41559C20.189 2.6347 20.189 1.36655 19.4081 0.585663C18.6272 -0.195221 17.359 -0.195221 16.5782 0.585663L10 7.17008L3.41559 0.59191C2.6347 -0.188974 1.36655 -0.188974 0.585663 0.59191C-0.195221 1.37279 -0.195221 2.64095 0.585663 3.42183L7.17008 10L0.59191 16.5844C-0.188974 17.3653 -0.188974 18.6335 0.59191 19.4143C1.37279 20.1952 2.64095 20.1952 3.42183 19.4143L10 12.8299L16.5844 19.4081C17.3653 20.189 18.6335 20.189 19.4143 19.4081C20.1952 18.6272 20.1952 17.359 19.4143 16.5782L12.8299 10L19.4081 3.41559Z"
                        fill="black" />
                </svg>
            </div>
        </div>
        <div class="content_post">
            <p>${value1.content}</p>
        </div>
        <div class="post_footer">
            <div class="footer_info row">
                <div class="info_icon col-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                        fill="none">
                        <g clip-path="url(#clip0_33_4025)">
                            <g filter="url(#filter0_i_33_4025)">
                                <path
                                    d="M9 0C6.61305 0 4.32387 0.948212 2.63604 2.63604C0.948212 4.32387 0 6.61305 0 9C0 11.3869 0.948212 13.6761 2.63604 15.364C4.32387 17.0518 6.61305 18 9 18C11.3869 18 13.6761 17.0518 15.364 15.364C17.0518 13.6761 18 11.3869 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948212 11.3869 0 9 0V0Z"
                                    fill="#FF9292" />
                            </g>
                            <path
                                d="M8.41016 13.7279L8.36133 13.6753L4.93945 9.95452C4.33984 9.30276 4 8.38801 4 7.42981V7.35435C4 5.74439 4.97656 4.36312 6.32812 4.06125C7.09766 3.88745 7.88477 4.09555 8.51172 4.61239C8.6875 4.75875 8.85156 4.92797 9 5.12236C9.08203 5.01259 9.16992 4.91197 9.26367 4.8182C9.33594 4.74503 9.41016 4.67642 9.48828 4.61239C10.1152 4.09555 10.9023 3.88745 11.6719 4.05896C13.0234 4.36083 14 5.74439 14 7.35435V7.42981C14 8.38801 13.6602 9.30276 13.0605 9.95452L9.63867 13.6753L9.58984 13.7279C9.42969 13.9017 9.21875 14 9 14C8.78125 14 8.57031 13.904 8.41016 13.7279ZM8.66992 6.33669C8.66211 6.32983 8.65625 6.32068 8.65039 6.31153L8.30273 5.85416L8.30078 5.85187C7.84961 5.25957 7.16797 4.98972 6.50391 5.13837C5.59375 5.3419 4.9375 6.27037 4.9375 7.35435V7.42981C4.9375 8.08157 5.16992 8.70589 5.57813 9.14954L9 12.8703L12.4219 9.14954C12.8301 8.70589 13.0625 8.08157 13.0625 7.42981V7.35435C13.0625 6.27266 12.4062 5.3419 11.498 5.13837C10.834 4.98972 10.1504 5.26186 9.70117 5.85187C9.70117 5.85187 9.70117 5.85187 9.69922 5.85416C9.69727 5.85645 9.69922 5.85416 9.69727 5.85645L9.34961 6.31382C9.34375 6.32297 9.33594 6.32983 9.33008 6.33898C9.24219 6.44189 9.12305 6.49906 9 6.49906C8.87695 6.49906 8.75781 6.44189 8.66992 6.33898V6.33669Z"
                                fill="white" />
                        </g>
                        <defs>
                            <filter id="filter0_i_33_4025" x="0" y="-1" width="18" height="19"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                    result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="-1" />
                                <feGaussianBlur stdDeviation="1" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0.299356 0 0 0 0 0.681188 0 0 0 0.349568 0" />
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_33_4025" />
                            </filter>
                            <clipPath id="clip0_33_4025">
                                <rect width="18" height="18" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p class="total_love">${value1.love}</p>
                </div>
                <div class="info_interact col-8">
                    <p class="total_comment">${value1.comment} <span>Bình luận</span></p>
                    <p class="total_share">${value1.share} <span>Lượt chia sẻ</span></p>
                </div>
            </div>
            <div class="interact row">
                <div class="interact_child col-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                        fill="none">
                        <path
                            d="M7.93828 16.4602L7.85039 16.3793L1.69102 10.6594C0.611719 9.65742 0 8.25117 0 6.77812V6.66211C0 4.18711 1.75781 2.06367 4.19062 1.59961C5.57578 1.33242 6.99258 1.65234 8.12109 2.44687C8.4375 2.67187 8.73281 2.93203 9 3.23086C9.14766 3.06211 9.30586 2.90742 9.47461 2.76328C9.60469 2.65078 9.73828 2.54531 9.87891 2.44687C11.0074 1.65234 12.4242 1.33242 13.8094 1.59609C16.2422 2.06015 18 4.18711 18 6.66211V6.77812C18 8.25117 17.3883 9.65742 16.309 10.6594L10.1496 16.3793L10.0617 16.4602C9.77344 16.7273 9.39375 16.8785 9 16.8785C8.60625 16.8785 8.22656 16.7309 7.93828 16.4602ZM8.40586 5.09765C8.3918 5.08711 8.38125 5.07305 8.3707 5.05898L7.74492 4.35586L7.74141 4.35234C6.9293 3.4418 5.70234 3.02695 4.50703 3.25547C2.86875 3.56836 1.6875 4.9957 1.6875 6.66211V6.77812C1.6875 7.78008 2.10586 8.73984 2.84063 9.42187L9 15.1418L15.1594 9.42187C15.8941 8.73984 16.3125 7.78008 16.3125 6.77812V6.66211C16.3125 4.99922 15.1312 3.56836 13.4965 3.25547C12.3012 3.02695 11.0707 3.44531 10.2621 4.35234C10.2621 4.35234 10.2621 4.35234 10.2586 4.35586C10.2551 4.35937 10.2586 4.35586 10.2551 4.35937L9.6293 5.0625C9.61875 5.07656 9.60469 5.08711 9.59414 5.10117C9.43594 5.25937 9.22148 5.34726 9 5.34726C8.77852 5.34726 8.56406 5.25937 8.40586 5.10117V5.09765Z"
                            fill="black" />
                    </svg>
                    <p>Yêu thích</p>
                </div>
                <div class="interact_child col-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                        fill="none">
                        <g clip-path="url(#clip0_33_4072)">
                            <path
                                d="M4.34523 13.7566C4.79875 13.4262 5.38586 13.3418 5.9132 13.5316C6.84484 13.8691 7.88898 14.0625 8.99992 14.0625C13.3839 14.0625 16.3124 11.2324 16.3124 8.4375C16.3124 5.64258 13.3839 2.8125 8.99992 2.8125C4.61594 2.8125 1.68742 5.64258 1.68742 8.4375C1.68742 9.5625 2.12336 10.6453 2.9425 11.5734C3.24484 11.9145 3.3925 12.3645 3.35734 12.8215C3.30812 13.4578 3.15695 14.0414 2.96008 14.5582C3.55773 14.2805 4.05343 13.9711 4.34523 13.7602V13.7566ZM0.745232 15.184C0.808513 15.0891 0.868279 14.9941 0.924529 14.8992C1.27609 14.3156 1.61008 13.5492 1.67687 12.6879C0.622185 11.4891 -8.04849e-05 10.023 -8.04849e-05 8.4375C-8.04849e-05 4.39805 4.02883 1.125 8.99992 1.125C13.971 1.125 17.9999 4.39805 17.9999 8.4375C17.9999 12.477 13.971 15.75 8.99992 15.75C7.69562 15.75 6.45812 15.525 5.34015 15.1207C4.92179 15.4266 4.23976 15.8449 3.43117 16.1965C2.90031 16.4285 2.29562 16.6395 1.66984 16.7625C1.64172 16.7695 1.61359 16.773 1.58547 16.7801C1.43078 16.8082 1.27961 16.8328 1.1214 16.8469C1.11437 16.8469 1.10383 16.8504 1.09679 16.8504C0.917498 16.868 0.738201 16.8785 0.558904 16.8785C0.330388 16.8785 0.126482 16.7414 0.0385914 16.5305C-0.0492992 16.3195 -8.04923e-05 16.0805 0.158123 15.9187C0.302263 15.7711 0.432341 15.6129 0.555388 15.4441C0.615154 15.3633 0.671404 15.2824 0.724138 15.2016C0.727654 15.1945 0.73117 15.191 0.734685 15.184H0.745232Z"
                                fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_33_4072">
                                <rect width="18" height="18" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p>Bình luận</p>
                </div>
                <div class="interact_child col-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                        fill="none">
                        <g clip-path="url(#clip0_33_4074)">
                            <path
                                d="M12.5 8.97891V8.4375V7.3125C12.5 7.00313 12.275 6.75 12 6.75H11H10.5H9.04688C7.45625 6.75 6.1125 7.92773 5.6625 9.54844C5.55937 9.21797 5.5 8.85234 5.5 8.4375C5.5 6.26133 7.06563 4.5 9 4.5H10.5H11H12C12.275 4.5 12.5 4.24687 12.5 3.9375V2.8125V2.27109L15.8125 5.625L12.5 8.97891ZM10.5 8.4375H11V10.125C11 10.7473 11.4469 11.25 12 11.25H12.1156C12.3625 11.25 12.6 11.148 12.7844 10.9617L17.1281 6.56367C17.3656 6.32461 17.5 5.98359 17.5 5.625C17.5 5.26641 17.3656 4.92539 17.1281 4.68633L12.8094 0.312891C12.6094 0.1125 12.3531 0 12.0844 0C11.4844 0 11 0.544922 11 1.21992V2.8125H10.5H9.5H9C6.2375 2.8125 4 5.32969 4 8.4375C4 10.5609 5.08125 11.9215 5.99687 12.6879C6.18125 12.8426 6.35625 12.9727 6.51875 13.0816C6.65625 13.1766 6.78438 13.2539 6.89062 13.3137C6.99687 13.3734 7.08437 13.4191 7.14687 13.4508C7.21562 13.4859 7.29063 13.5 7.36875 13.5H7.44688C7.75313 13.5 8.00313 13.2188 8.00313 12.8742C8.00313 12.6 7.8375 12.3574 7.64062 12.1887C7.62813 12.1781 7.61875 12.1711 7.60625 12.1605C7.55312 12.1219 7.5 12.0727 7.45 12.0164C7.425 11.9883 7.39687 11.9602 7.37187 11.925C7.34687 11.8898 7.32188 11.8582 7.29688 11.823C7.24062 11.7352 7.1875 11.6367 7.14062 11.5242C7.05937 11.3133 7.00625 11.0566 7.00625 10.7367C7.00625 9.46758 7.92188 8.43398 9.05313 8.43398H9.5H10.5V8.4375ZM2.25 1.125C1.00625 1.125 0 2.25703 0 3.65625V15.4688C0 16.868 1.00625 18 2.25 18H12.75C13.9937 18 15 16.868 15 15.4688V13.2188C15 12.7512 14.6656 12.375 14.25 12.375C13.8344 12.375 13.5 12.7512 13.5 13.2188V15.4688C13.5 15.9363 13.1656 16.3125 12.75 16.3125H2.25C1.83438 16.3125 1.5 15.9363 1.5 15.4688V3.65625C1.5 3.18867 1.83438 2.8125 2.25 2.8125H4.25C4.66563 2.8125 5 2.43633 5 1.96875C5 1.50117 4.66563 1.125 4.25 1.125H2.25Z"
                                fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_33_4074">
                                <rect width="18" height="18" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p>Chia sẻ</p>
                </div>
            </div>
        </div>
    </div>`
        })
    }})
    document.getElementById("right_body").innerHTML = element;
}
renderPost()
renderprofileIntroduce =() => {
    let element = "";
    user.map((value,index) => {
        if(index === 0){
            element += `<div class="profile_introduce">
            <h2>Giới thiệu</h2>
            <div class="name_introduce">
                <p>${value.story}</p>
            </div>
            <div>
                <div class="profile_info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 13 19"
                        fill="none">
                        <path
                            d="M7.30234 18.5731C9.03906 16.1845 13 10.3953 13 7.14349C13 3.19969 10.0885 0 6.5 0C2.91146 0 0 3.19969 0 7.14349C0 10.3953 3.96094 16.1845 5.69766 18.5731C6.11406 19.1423 6.88594 19.1423 7.30234 18.5731ZM6.5 4.76232C7.07464 4.76232 7.62574 5.0132 8.03207 5.45975C8.43839 5.9063 8.66667 6.51196 8.66667 7.14349C8.66667 7.77501 8.43839 8.38067 8.03207 8.82722C7.62574 9.27378 7.07464 9.52465 6.5 9.52465C5.92536 9.52465 5.37426 9.27378 4.96794 8.82722C4.56161 8.38067 4.33333 7.77501 4.33333 7.14349C4.33333 6.51196 4.56161 5.9063 4.96794 5.45975C5.37426 5.0132 5.92536 4.76232 6.5 4.76232Z"
                            fill="black" />
                    </svg>
                    <p>Vị trí: ${value.location} </p>
                </div>
                <div class="profile_info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"
                        fill="none">
                        <path
                            d="M4.07143 1.1875V2.375H2.03571C0.91183 2.375 0 3.17285 0 4.15625V5.9375H19V4.15625C19 3.17285 18.0882 2.375 16.9643 2.375H14.9286V1.1875C14.9286 0.530664 14.3221 0 13.5714 0C12.8208 0 12.2143 0.530664 12.2143 1.1875V2.375H6.78571V1.1875C6.78571 0.530664 6.17924 0 5.42857 0C4.6779 0 4.07143 0.530664 4.07143 1.1875ZM19 7.125H0V17.2188C0 18.2021 0.91183 19 2.03571 19H16.9643C18.0882 19 19 18.2021 19 17.2188V7.125Z"
                            fill="black" />
                    </svg>
                    <p>Ngày sinh: ${value.Birthday}</p>
                </div>
                <div class="profile_info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"
                        fill="none">
                        <path
                            d="M9.5 0C12.0196 0 14.4359 1.00089 16.2175 2.78249C17.9991 4.56408 19 6.98044 19 9.5C19 12.0196 17.9991 14.4359 16.2175 16.2175C14.4359 17.9991 12.0196 19 9.5 19C6.98044 19 4.56408 17.9991 2.78249 16.2175C1.00089 14.4359 0 12.0196 0 9.5C0 6.98044 1.00089 4.56408 2.78249 2.78249C4.56408 1.00089 6.98044 0 9.5 0ZM8.60938 4.45312V9.5C8.60938 9.79688 8.75781 10.0752 9.00644 10.2422L12.5689 12.6172C12.9771 12.8918 13.5301 12.7805 13.8047 12.3686C14.0793 11.9566 13.968 11.4074 13.5561 11.1328L10.3906 9.025V4.45312C10.3906 3.95957 9.99356 3.5625 9.5 3.5625C9.00644 3.5625 8.60938 3.95957 8.60938 4.45312Z"
                            fill="black" />
                    </svg>
                    <p>Tham gia ngày: ${value.Join}</p>
                </div>
            </div>
        </div>`
        }
    })
    document.getElementById("section").innerHTML = element;
}
renderprofileIntroduce()
// handle picture
let ischecked =false
let temp = {}
updateImage = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
    fileInput.addEventListener("change", function() {
        const file = fileInput.files[0];
        let data = {}
        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                displayImage.src = e.target.result;
                user[0].backgroud = [{ id: 1, image: e.target.result }];
                user[0].post.unshift({
                    id:0,
                    time: new Date().getHours() + "h",
                    public: "Tất cả mọi người",
                    content: "Bạn đã cập nhật ảnh bìa",
                    love:"",
                    favorit:"",
                    comment:""
                })
                renderPost()
                
            };
            reader.readAsDataURL(file);
        }
    })
}
openBoxUpdate = () => {

    const modalBoxes = document.getElementsByClassName("modal_box")
    if(modalBoxes.length > 0){
        modalBoxes[0].style.display = "flex"
    }
    renderPostUpdate()
    
}
renderPostUpdate = () => {
    let element = "";
    user.map((value, index) => {
        if(index === 0){
            element += `<div class="box_update">
        <div class="header_box">
            <svg style="cursor: pointer;" onclick="closeBoxUpdate()" class="btn_closebox"
                xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                <path
                    d="M22.3193 3.92792C23.2173 3.02991 23.2173 1.57153 22.3193 0.673512C21.4213 -0.224504 19.9629 -0.224504 19.0649 0.673512L11.5 8.24559L3.92792 0.680696C3.02991 -0.21732 1.57153 -0.21732 0.673512 0.680696C-0.224504 1.57871 -0.224504 3.03709 0.673512 3.93511L8.24559 11.5L0.680697 19.0721C-0.21732 19.9701 -0.21732 21.4285 0.680697 22.3265C1.57871 23.2245 3.03709 23.2245 3.93511 22.3265L11.5 14.7544L19.0721 22.3193C19.9701 23.2173 21.4285 23.2173 22.3265 22.3193C23.2245 21.4213 23.2245 19.9629 22.3265 19.0649L14.7544 11.5L22.3193 3.92792Z"
                    fill="black" />
            </svg>
            <button onclick = "handleSaveProfile()" class="btn-save">Lưu</button>
        </div>
        <div class="content_box">
            <form>
                <div class="form-floating mb-3 mt-3">
                    <input style="height: 64px;" type="text" class="form-control" id="name" placeholder="Enter name"
                        name="name" value="${value.name}">
                    <label for="name">Tên</label>
                </div>
                <div class="form-floating mt-3 mb-3">
                    <textarea style="height: 128px;" class="form-control" id="story" placeholder="Enter story"
                        name="story">${value.story}</textarea>
                    <label for="story">Tiểu sử</label>
                </div>

                <div class="form-floating mt-3 mb-3">
                    <input style="height: 64px;" type="text" class="form-control" id="local"
                        placeholder="Enter story" name="local" value="${value.location}">
                    <label for="local">Vị trí </label>
                </div>
                <div class="form-floating mt-3 mb-3">
                    <input style="height: 64px;" type="text" class="form-control" id="birth"
                        placeholder="Enter story" name="birth" value="${value.Birthday}">
                    <label for="birth">Ngày sinh <span class="edit_birth"> *** Chỉnh sữa </span></label>
                </div>
            </form>
        </div>
    </div>`
        }
    })
    document.getElementById("modal_box").innerHTML = element
}

handleSaveProfile = () => {
    user[0] = {
        ...user[0],
        name: document.getElementById("name").value,
        story:document.getElementById("story").value,
        location:document.getElementById("local").value,
        Birthday:document.getElementById("birth").value
    }
    alert("Cap nhat thanh cong user")
    renderprofileIntroduce()
    renderHeaderProfile()
    renderPost()
    document.getElementById("modal_box").style.display = "none"
}
// render headerprofile
 
renderHeaderProfile = () => {
    getIndex = 0;
    let element = ""
    user.map((value,index) => {
        if(index === getIndex){
            element += `<div class="header_profile">
            <img id="displayImage" src="${value.backgroud[index].image}" alt="">
            <div onclick="updateImage()" id="update_img" class="update_picture">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
                    <path
                        d="M6.11543 2.8751L5.68887 4.15479H2.625C1.17715 4.15479 0 5.33193 0 6.77979V17.2798C0 18.7276 1.17715 19.9048 2.625 19.9048H18.375C19.8229 19.9048 21 18.7276 21 17.2798V6.77979C21 5.33193 19.8229 4.15479 18.375 4.15479H15.3111L14.8846 2.8751C14.618 2.07119 13.8674 1.52979 13.0184 1.52979H7.98164C7.13262 1.52979 6.38203 2.07119 6.11543 2.8751ZM10.5 8.09229C11.5443 8.09229 12.5458 8.50713 13.2842 9.24555C14.0227 9.98398 14.4375 10.9855 14.4375 12.0298C14.4375 13.0741 14.0227 14.0756 13.2842 14.814C12.5458 15.5524 11.5443 15.9673 10.5 15.9673C9.45571 15.9673 8.45419 15.5524 7.71577 14.814C6.97734 14.0756 6.5625 13.0741 6.5625 12.0298C6.5625 10.9855 6.97734 9.98398 7.71577 9.24555C8.45419 8.50713 9.45571 8.09229 10.5 8.09229Z"
                        fill="black" />
                </svg>
                <input type="file" id="fileInput" accept="image/*" style="display: none;">
                <p>Cập nhật ảnh bìa</p>
    
            </div>
        </div>
        <div class="body_profile">
            <div class="picture_main">
                <img id="displayMainImage" src=${value.avatar[index].image} alt="">
                <div onclick="updateMainImage()" class="screen_picture">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"
                        fill="none">
                        <path
                            d="M5.53301 2.40469L5.14707 3.5625H2.375C1.06504 3.5625 0 4.62754 0 5.9375V15.4375C0 16.7475 1.06504 17.8125 2.375 17.8125H16.625C17.935 17.8125 19 16.7475 19 15.4375V5.9375C19 4.62754 17.935 3.5625 16.625 3.5625H13.8529L13.467 2.40469C13.2258 1.67734 12.5467 1.1875 11.7785 1.1875H7.22148C6.45332 1.1875 5.77422 1.67734 5.53301 2.40469ZM9.5 7.125C10.4448 7.125 11.351 7.50033 12.0191 8.16843C12.6872 8.83653 13.0625 9.74267 13.0625 10.6875C13.0625 11.6323 12.6872 12.5385 12.0191 13.2066C11.351 13.8747 10.4448 14.25 9.5 14.25C8.55517 14.25 7.64903 13.8747 6.98093 13.2066C6.31283 12.5385 5.9375 11.6323 5.9375 10.6875C5.9375 9.74267 6.31283 8.83653 6.98093 8.16843C7.64903 7.50033 8.55517 7.125 9.5 7.125Z"
                            fill="black" />
                    </svg>
                    <input type="file" id="fileMainInput" accept="image/*" style="display: none;">
                </div>
            </div>
            <div class="name_profile">
                <h1>${value.name}</h1>
                <p>${value.totalFriend} bạn bè - ${value.matualFr} bạn chung</p>
            </div>
            <div onclick="openBoxUpdate()" class="update_profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <g clip-path="url(#clip0_75_2657)">
                        <path
                            d="M11.5 11.5C13.2429 11.5 14.9143 10.8942 16.1467 9.81586C17.3791 8.73753 18.0714 7.27499 18.0714 5.75C18.0714 4.22501 17.3791 2.76247 16.1467 1.68414C14.9143 0.605802 13.2429 0 11.5 0C9.75715 0 8.08568 0.605802 6.8533 1.68414C5.62092 2.76247 4.92857 4.22501 4.92857 5.75C4.92857 7.27499 5.62092 8.73753 6.8533 9.81586C8.08568 10.8942 9.75715 11.5 11.5 11.5ZM9.1538 13.6562C4.09688 13.6562 0 17.241 0 21.6658C0 22.4025 0.682813 23 1.52478 23H21.4752C22.3172 23 23 22.4025 23 21.6658C23 17.241 18.9031 13.6562 13.8462 13.6562H9.1538Z"
                            fill="black" />
                    </g>
                    <defs>
                        <clipPath id="clip0_75_2657">
                            <rect width="23" height="23" fill="white" />
                        </clipPath>
                    </defs>
                    <p>Cập nhật hồ sơ</p>
                </svg>
            </div>
        </div>`
        }
    })
    document.getElementById("header_profile").innerHTML = element
}
renderHeaderProfile()

renderImage =() => {
    getIndex =0
    let element = ""
    const image = user[getIndex].backgroud.concat(user[getIndex].avatar)
    image.map((value,index) => {
        element += `<div class="Profile_friend-image">
            <img src="${value.image}" alt="">
        </div>`
    })
    document.getElementById("Profile_friend-images").innerHTML = element
}
renderImage()
renderFriends = () => {
    idmain = 0
    getIndex = 0
    const data = user[getIndex].matualFriend
    let element = ""
    data.map((value, index) => {
        element += `<div onclick = "getId(${idmain},${value.id})" class="Profile_friend-wrapper-friend">
            <img class="Profile_friend-image" src="${value.image}" alt="" />
            <div class="Profile_friend-name">${value.name}</div>
        </div>`
    })
    document.getElementById("friend").innerHTML = element

}
renderFriends()

// handle navigation
handleNavigation = () => {
    const data = document.querySelectorAll(".tabs-item")
    let baidang = document.getElementById("body")
    let banbe = document.getElementById("list_friend")
    let folow = document.getElementById("list_folow")
    let picture = document.getElementById("list_picture")
    for(let index = 0;index <data.length;index ++){
        data[index].addEventListener("click",function(){
            for(let index1 = 0;index1 < data.length;index1 ++){
                data[index1].classList.remove("active1")
            }
            data[index].classList.add("active1")
            if(data[index].getAttribute("data-value") === "baidang"){
                baidang.style.display = "flex"
                banbe.style.display = "none"
                folow.style.display = "none"
                picture.style.display = "none"
            } else if(data[index].getAttribute("data-value") === "banbe"){
                baidang.style.display = "none"
                banbe.style.display = "block"
                folow.style.display = "none"
                picture.style.display = "none"
            } else if(data[index].getAttribute("data-value") === "folow"){
                baidang.style.display = "none"
                banbe.style.display = "none"
                folow.style.display = "block"
                picture.style.display = "none"
            }else {
                baidang.style.display = "none"
                banbe.style.display = "none"
                folow.style.display = "none"
                picture.style.display = "flex"
            }
        })
    }
}
handleNavigation()

renderPageFriend = () => {
    getIndex = 0
    let element = "";
    const array = user[getIndex].matualFriend
    array.map((value,index) => {
            element +=`<div class="info_member col-6">
            <div class="img_member col-2">
                <img src="${value.image}" alt="">
            </div>
            <div class="name_member col-8">
                <p class="name_child">${value.name}</p>
                <p class="friend_child">300 bạn chung</p>
            </div>
            <div class="action_icon col-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path
                        d="M0.410767 11.5C0.410767 10.8328 0.713667 10.193 1.25283 9.72118C1.792 9.24941 2.52327 8.98438 3.28577 8.98438C4.04826 8.98438 4.77953 9.24941 5.3187 9.72118C5.85787 10.193 6.16077 10.8328 6.16077 11.5C6.16077 12.1672 5.85787 12.807 5.3187 13.2788C4.77953 13.7506 4.04826 14.0156 3.28577 14.0156C2.52327 14.0156 1.792 13.7506 1.25283 13.2788C0.713667 12.807 0.410767 12.1672 0.410767 11.5ZM8.62505 11.5C8.62505 10.8328 8.92795 10.193 9.46712 9.72118C10.0063 9.24941 10.7376 8.98438 11.5001 8.98438C12.2626 8.98438 12.9938 9.24941 13.533 9.72118C14.0722 10.193 14.3751 10.8328 14.3751 11.5C14.3751 12.1672 14.0722 12.807 13.533 13.2788C12.9938 13.7506 12.2626 14.0156 11.5001 14.0156C10.7376 14.0156 10.0063 13.7506 9.46712 13.2788C8.92795 12.807 8.62505 12.1672 8.62505 11.5ZM19.7143 8.98438C20.4768 8.98438 21.2081 9.24941 21.7473 9.72118C22.2864 10.193 22.5893 10.8328 22.5893 11.5C22.5893 12.1672 22.2864 12.807 21.7473 13.2788C21.2081 13.7506 20.4768 14.0156 19.7143 14.0156C18.9518 14.0156 18.2206 13.7506 17.6814 13.2788C17.1422 12.807 16.8393 12.1672 16.8393 11.5C16.8393 10.8328 17.1422 10.193 17.6814 9.72118C18.2206 9.24941 18.9518 8.98438 19.7143 8.98438Z"
                        fill="black" />
                </svg>
            </div>
            <div class="box_show_action">
                <div class="child">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"
                        fill="none">
                        <path
                            d="M3 1.3125C1.34531 1.3125 0 2.48965 0 3.9375V17.0625C0 18.5104 1.34531 19.6875 3 19.6875H18C19.6547 19.6875 21 18.5104 21 17.0625V3.9375C21 2.48965 19.6547 1.3125 18 1.3125H3ZM9.375 14.1094V11.4844H6.375C5.75156 11.4844 5.25 11.0455 5.25 10.5C5.25 9.95449 5.75156 9.51562 6.375 9.51562H9.375V6.89062C9.375 6.34512 9.87656 5.90625 10.5 5.90625C11.1234 5.90625 11.625 6.34512 11.625 6.89062V9.51562H14.625C15.2484 9.51562 15.75 9.95449 15.75 10.5C15.75 11.0455 15.2484 11.4844 14.625 11.4844H11.625V14.1094C11.625 14.6549 11.1234 15.0938 10.5 15.0938C9.87656 15.0938 9.375 14.6549 9.375 14.1094Z"
                            fill="black" />
                    </svg>
                    <p>Theo dõi</p>
                </div>
                <div class="child">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"
                        fill="none">
                        <g clip-path="url(#clip0_156_1721)">
                            <path
                                d="M3.15 5.25C3.15 3.85761 3.5925 2.52226 4.38015 1.53769C5.1678 0.553123 6.23609 0 7.35 0C8.46391 0 9.5322 0.553123 10.3198 1.53769C11.1075 2.52226 11.55 3.85761 11.55 5.25C11.55 6.64239 11.1075 7.97775 10.3198 8.96231C9.5322 9.94688 8.46391 10.5 7.35 10.5C6.23609 10.5 5.1678 9.94688 4.38015 8.96231C3.5925 7.97775 3.15 6.64239 3.15 5.25ZM0 19.7818C0 15.7418 2.61844 12.4688 5.85047 12.4688H8.84953C12.0816 12.4688 14.7 15.7418 14.7 19.7818C14.7 20.4545 14.2636 21 13.7255 21H0.974531C0.436406 21 0 20.4545 0 19.7818ZM15.4547 5.86523C15.7631 5.47969 16.2619 5.47969 16.567 5.86523L18.1092 7.79297L19.6514 5.86523C19.9598 5.47969 20.4586 5.47969 20.7637 5.86523C21.0689 6.25078 21.0722 6.87422 20.7637 7.25566L19.2216 9.1834L20.7637 11.1111C21.0722 11.4967 21.0722 12.1201 20.7637 12.5016C20.4553 12.883 19.9566 12.8871 19.6514 12.5016L18.1092 10.5738L16.567 12.5016C16.2586 12.8871 15.7598 12.8871 15.4547 12.5016C15.1495 12.116 15.1462 11.4926 15.4547 11.1111L16.9969 9.1834L15.4547 7.25566C15.1462 6.87012 15.1462 6.24668 15.4547 5.86523Z"
                                fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_156_1721">
                                <rect width="21" height="21" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p>Hủy kết bạn</p>
                </div>
            </div>
        </div>`
        }
    )
    document.getElementById("list_member").innerHTML = element
    let x = document.querySelector(".list_title span")
    x.innerHTML ="(" + user[0].totalFriend + ")"
}
renderPageFriend()

renderListFlolow =() => {
    getIndex = 0
    let element = ""
    let data = user[getIndex].matualFriend
    data.map((value, index) => {
        if(value.isfolow === true){
            element+= `<div class="info_member col-6">
            <div class="img_member col-2">
                <img src="${value.image}" alt="">
            </div>
            <div class="name_member col-8">
                <p class="name_child">${value.name}</p>
                <p class="friend_child">300 bạn chung</p>
            </div>
            <div class="action_icon col-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path
                        d="M0.410767 11.5C0.410767 10.8328 0.713667 10.193 1.25283 9.72118C1.792 9.24941 2.52327 8.98438 3.28577 8.98438C4.04826 8.98438 4.77953 9.24941 5.3187 9.72118C5.85787 10.193 6.16077 10.8328 6.16077 11.5C6.16077 12.1672 5.85787 12.807 5.3187 13.2788C4.77953 13.7506 4.04826 14.0156 3.28577 14.0156C2.52327 14.0156 1.792 13.7506 1.25283 13.2788C0.713667 12.807 0.410767 12.1672 0.410767 11.5ZM8.62505 11.5C8.62505 10.8328 8.92795 10.193 9.46712 9.72118C10.0063 9.24941 10.7376 8.98438 11.5001 8.98438C12.2626 8.98438 12.9938 9.24941 13.533 9.72118C14.0722 10.193 14.3751 10.8328 14.3751 11.5C14.3751 12.1672 14.0722 12.807 13.533 13.2788C12.9938 13.7506 12.2626 14.0156 11.5001 14.0156C10.7376 14.0156 10.0063 13.7506 9.46712 13.2788C8.92795 12.807 8.62505 12.1672 8.62505 11.5ZM19.7143 8.98438C20.4768 8.98438 21.2081 9.24941 21.7473 9.72118C22.2864 10.193 22.5893 10.8328 22.5893 11.5C22.5893 12.1672 22.2864 12.807 21.7473 13.2788C21.2081 13.7506 20.4768 14.0156 19.7143 14.0156C18.9518 14.0156 18.2206 13.7506 17.6814 13.2788C17.1422 12.807 16.8393 12.1672 16.8393 11.5C16.8393 10.8328 17.1422 10.193 17.6814 9.72118C18.2206 9.24941 18.9518 8.98438 19.7143 8.98438Z"
                        fill="black" />
                </svg>
            </div>
            <div class="box_show_action">
                <div class="child">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"
                        fill="none">
                        <path
                            d="M3 1.3125C1.34531 1.3125 0 2.48965 0 3.9375V17.0625C0 18.5104 1.34531 19.6875 3 19.6875H18C19.6547 19.6875 21 18.5104 21 17.0625V3.9375C21 2.48965 19.6547 1.3125 18 1.3125H3ZM9.375 14.1094V11.4844H6.375C5.75156 11.4844 5.25 11.0455 5.25 10.5C5.25 9.95449 5.75156 9.51562 6.375 9.51562H9.375V6.89062C9.375 6.34512 9.87656 5.90625 10.5 5.90625C11.1234 5.90625 11.625 6.34512 11.625 6.89062V9.51562H14.625C15.2484 9.51562 15.75 9.95449 15.75 10.5C15.75 11.0455 15.2484 11.4844 14.625 11.4844H11.625V14.1094C11.625 14.6549 11.1234 15.0938 10.5 15.0938C9.87656 15.0938 9.375 14.6549 9.375 14.1094Z"
                            fill="black" />
                    </svg>
                    <p>Theo dõi</p>
                </div>
                <div class="child">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"
                        fill="none">
                        <g clip-path="url(#clip0_156_1721)">
                            <path
                                d="M3.15 5.25C3.15 3.85761 3.5925 2.52226 4.38015 1.53769C5.1678 0.553123 6.23609 0 7.35 0C8.46391 0 9.5322 0.553123 10.3198 1.53769C11.1075 2.52226 11.55 3.85761 11.55 5.25C11.55 6.64239 11.1075 7.97775 10.3198 8.96231C9.5322 9.94688 8.46391 10.5 7.35 10.5C6.23609 10.5 5.1678 9.94688 4.38015 8.96231C3.5925 7.97775 3.15 6.64239 3.15 5.25ZM0 19.7818C0 15.7418 2.61844 12.4688 5.85047 12.4688H8.84953C12.0816 12.4688 14.7 15.7418 14.7 19.7818C14.7 20.4545 14.2636 21 13.7255 21H0.974531C0.436406 21 0 20.4545 0 19.7818ZM15.4547 5.86523C15.7631 5.47969 16.2619 5.47969 16.567 5.86523L18.1092 7.79297L19.6514 5.86523C19.9598 5.47969 20.4586 5.47969 20.7637 5.86523C21.0689 6.25078 21.0722 6.87422 20.7637 7.25566L19.2216 9.1834L20.7637 11.1111C21.0722 11.4967 21.0722 12.1201 20.7637 12.5016C20.4553 12.883 19.9566 12.8871 19.6514 12.5016L18.1092 10.5738L16.567 12.5016C16.2586 12.8871 15.7598 12.8871 15.4547 12.5016C15.1495 12.116 15.1462 11.4926 15.4547 11.1111L16.9969 9.1834L15.4547 7.25566C15.1462 6.87012 15.1462 6.24668 15.4547 5.86523Z"
                                fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_156_1721">
                                <rect width="21" height="21" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p>Hủy kết bạn</p>
                </div>
            </div>
        </div>`
        }
    })
    document.getElementById("list_member_folow").innerHTML = element
}
renderListFlolow()

// profile Friend
renderPost = (getIndex) => {
    let element = '';
    user.map((value, index) => {
        if(index === getIndex ){
        const datapostuser = user[getIndex].post
        datapostuser.map((value1, index1) => {
            element += `<div class="post">
        <div class="header_post row">
            <div class="col-1 logo_profile">
                <img src="${value.avatar[0].image}" alt="">
            </div>
            <div class="header_content col-9">
                <div>
                    <p class="title_profile">${value.name}</p>
                </div>
                <div>
                    <p class="time_post">${value1.time} - <span class="status">${value1.public}</span></p>
                </div>
            </div>
            <div class="header_icon col-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                    fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 10C12 10.5304 11.7893 11.0391 11.4142 11.4142C11.0391 11.7893 10.5304 12 10 12C9.46957 12 8.96086 11.7893 8.58578 11.4142C8.21071 11.0391 8 10.5304 8 10C8 9.46957 8.21071 8.96086 8.58578 8.58578C8.96086 8.21071 9.46957 8 10 8C10.5304 8 11.0391 8.21071 11.4142 8.58578C11.7893 8.96086 12 9.46957 12 10ZM18 10C18 10.5304 17.7893 11.0391 17.4142 11.4142C17.0391 11.7893 16.5304 12 16 12C15.4696 12 14.9609 11.7893 14.5858 11.4142C14.2107 11.0391 14 10.5304 14 10C14 9.46957 14.2107 8.96086 14.5858 8.58578C14.9609 8.21071 15.4696 8 16 8C16.5304 8 17.0391 8.21071 17.4142 8.58578C17.7893 8.96086 18 9.46957 18 10ZM6 10C6 10.5304 5.78929 11.0391 5.41422 11.4142C5.03914 11.7893 4.53043 12 4 12C3.46957 12 2.96086 11.7893 2.58578 11.4142C2.21071 11.0391 2 10.5304 2 10C2 9.46957 2.21071 8.96086 2.58578 8.58578C2.96086 8.21071 3.46957 8 4 8C4.53043 8 5.03914 8.21071 5.41422 8.58578C5.78929 8.96086 6 9.46957 6 10Z"
                        fill="black" />
                </svg>
                <svg style="margin-left: 16px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    viewBox="0 0 20 20" fill="none">
                    <path
                        d="M19.4081 3.41559C20.189 2.6347 20.189 1.36655 19.4081 0.585663C18.6272 -0.195221 17.359 -0.195221 16.5782 0.585663L10 7.17008L3.41559 0.59191C2.6347 -0.188974 1.36655 -0.188974 0.585663 0.59191C-0.195221 1.37279 -0.195221 2.64095 0.585663 3.42183L7.17008 10L0.59191 16.5844C-0.188974 17.3653 -0.188974 18.6335 0.59191 19.4143C1.37279 20.1952 2.64095 20.1952 3.42183 19.4143L10 12.8299L16.5844 19.4081C17.3653 20.189 18.6335 20.189 19.4143 19.4081C20.1952 18.6272 20.1952 17.359 19.4143 16.5782L12.8299 10L19.4081 3.41559Z"
                        fill="black" />
                </svg>
            </div>
        </div>
        <div class="content_post">
            <p>${value1.content}</p>
        </div>
        <div class="post_footer">
            <div class="footer_info row">
                <div class="info_icon col-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                        fill="none">
                        <g clip-path="url(#clip0_33_4025)">
                            <g filter="url(#filter0_i_33_4025)">
                                <path
                                    d="M9 0C6.61305 0 4.32387 0.948212 2.63604 2.63604C0.948212 4.32387 0 6.61305 0 9C0 11.3869 0.948212 13.6761 2.63604 15.364C4.32387 17.0518 6.61305 18 9 18C11.3869 18 13.6761 17.0518 15.364 15.364C17.0518 13.6761 18 11.3869 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948212 11.3869 0 9 0V0Z"
                                    fill="#FF9292" />
                            </g>
                            <path
                                d="M8.41016 13.7279L8.36133 13.6753L4.93945 9.95452C4.33984 9.30276 4 8.38801 4 7.42981V7.35435C4 5.74439 4.97656 4.36312 6.32812 4.06125C7.09766 3.88745 7.88477 4.09555 8.51172 4.61239C8.6875 4.75875 8.85156 4.92797 9 5.12236C9.08203 5.01259 9.16992 4.91197 9.26367 4.8182C9.33594 4.74503 9.41016 4.67642 9.48828 4.61239C10.1152 4.09555 10.9023 3.88745 11.6719 4.05896C13.0234 4.36083 14 5.74439 14 7.35435V7.42981C14 8.38801 13.6602 9.30276 13.0605 9.95452L9.63867 13.6753L9.58984 13.7279C9.42969 13.9017 9.21875 14 9 14C8.78125 14 8.57031 13.904 8.41016 13.7279ZM8.66992 6.33669C8.66211 6.32983 8.65625 6.32068 8.65039 6.31153L8.30273 5.85416L8.30078 5.85187C7.84961 5.25957 7.16797 4.98972 6.50391 5.13837C5.59375 5.3419 4.9375 6.27037 4.9375 7.35435V7.42981C4.9375 8.08157 5.16992 8.70589 5.57813 9.14954L9 12.8703L12.4219 9.14954C12.8301 8.70589 13.0625 8.08157 13.0625 7.42981V7.35435C13.0625 6.27266 12.4062 5.3419 11.498 5.13837C10.834 4.98972 10.1504 5.26186 9.70117 5.85187C9.70117 5.85187 9.70117 5.85187 9.69922 5.85416C9.69727 5.85645 9.69922 5.85416 9.69727 5.85645L9.34961 6.31382C9.34375 6.32297 9.33594 6.32983 9.33008 6.33898C9.24219 6.44189 9.12305 6.49906 9 6.49906C8.87695 6.49906 8.75781 6.44189 8.66992 6.33898V6.33669Z"
                                fill="white" />
                        </g>
                        <defs>
                            <filter id="filter0_i_33_4025" x="0" y="-1" width="18" height="19"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                    result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="-1" />
                                <feGaussianBlur stdDeviation="1" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0.299356 0 0 0 0 0.681188 0 0 0 0.349568 0" />
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_33_4025" />
                            </filter>
                            <clipPath id="clip0_33_4025">
                                <rect width="18" height="18" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p class="total_love">${value1.love}</p>
                </div>
                <div class="info_interact col-8">
                    <p class="total_comment">${value1.comment} <span>Bình luận</span></p>
                    <p class="total_share">${value1.share} <span>Lượt chia sẻ</span></p>
                </div>
            </div>
            <div class="interact row">
                <div class="interact_child col-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                        fill="none">
                        <path
                            d="M7.93828 16.4602L7.85039 16.3793L1.69102 10.6594C0.611719 9.65742 0 8.25117 0 6.77812V6.66211C0 4.18711 1.75781 2.06367 4.19062 1.59961C5.57578 1.33242 6.99258 1.65234 8.12109 2.44687C8.4375 2.67187 8.73281 2.93203 9 3.23086C9.14766 3.06211 9.30586 2.90742 9.47461 2.76328C9.60469 2.65078 9.73828 2.54531 9.87891 2.44687C11.0074 1.65234 12.4242 1.33242 13.8094 1.59609C16.2422 2.06015 18 4.18711 18 6.66211V6.77812C18 8.25117 17.3883 9.65742 16.309 10.6594L10.1496 16.3793L10.0617 16.4602C9.77344 16.7273 9.39375 16.8785 9 16.8785C8.60625 16.8785 8.22656 16.7309 7.93828 16.4602ZM8.40586 5.09765C8.3918 5.08711 8.38125 5.07305 8.3707 5.05898L7.74492 4.35586L7.74141 4.35234C6.9293 3.4418 5.70234 3.02695 4.50703 3.25547C2.86875 3.56836 1.6875 4.9957 1.6875 6.66211V6.77812C1.6875 7.78008 2.10586 8.73984 2.84063 9.42187L9 15.1418L15.1594 9.42187C15.8941 8.73984 16.3125 7.78008 16.3125 6.77812V6.66211C16.3125 4.99922 15.1312 3.56836 13.4965 3.25547C12.3012 3.02695 11.0707 3.44531 10.2621 4.35234C10.2621 4.35234 10.2621 4.35234 10.2586 4.35586C10.2551 4.35937 10.2586 4.35586 10.2551 4.35937L9.6293 5.0625C9.61875 5.07656 9.60469 5.08711 9.59414 5.10117C9.43594 5.25937 9.22148 5.34726 9 5.34726C8.77852 5.34726 8.56406 5.25937 8.40586 5.10117V5.09765Z"
                            fill="black" />
                    </svg>
                    <p>Yêu thích</p>
                </div>
                <div class="interact_child col-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                        fill="none">
                        <g clip-path="url(#clip0_33_4072)">
                            <path
                                d="M4.34523 13.7566C4.79875 13.4262 5.38586 13.3418 5.9132 13.5316C6.84484 13.8691 7.88898 14.0625 8.99992 14.0625C13.3839 14.0625 16.3124 11.2324 16.3124 8.4375C16.3124 5.64258 13.3839 2.8125 8.99992 2.8125C4.61594 2.8125 1.68742 5.64258 1.68742 8.4375C1.68742 9.5625 2.12336 10.6453 2.9425 11.5734C3.24484 11.9145 3.3925 12.3645 3.35734 12.8215C3.30812 13.4578 3.15695 14.0414 2.96008 14.5582C3.55773 14.2805 4.05343 13.9711 4.34523 13.7602V13.7566ZM0.745232 15.184C0.808513 15.0891 0.868279 14.9941 0.924529 14.8992C1.27609 14.3156 1.61008 13.5492 1.67687 12.6879C0.622185 11.4891 -8.04849e-05 10.023 -8.04849e-05 8.4375C-8.04849e-05 4.39805 4.02883 1.125 8.99992 1.125C13.971 1.125 17.9999 4.39805 17.9999 8.4375C17.9999 12.477 13.971 15.75 8.99992 15.75C7.69562 15.75 6.45812 15.525 5.34015 15.1207C4.92179 15.4266 4.23976 15.8449 3.43117 16.1965C2.90031 16.4285 2.29562 16.6395 1.66984 16.7625C1.64172 16.7695 1.61359 16.773 1.58547 16.7801C1.43078 16.8082 1.27961 16.8328 1.1214 16.8469C1.11437 16.8469 1.10383 16.8504 1.09679 16.8504C0.917498 16.868 0.738201 16.8785 0.558904 16.8785C0.330388 16.8785 0.126482 16.7414 0.0385914 16.5305C-0.0492992 16.3195 -8.04923e-05 16.0805 0.158123 15.9187C0.302263 15.7711 0.432341 15.6129 0.555388 15.4441C0.615154 15.3633 0.671404 15.2824 0.724138 15.2016C0.727654 15.1945 0.73117 15.191 0.734685 15.184H0.745232Z"
                                fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_33_4072">
                                <rect width="18" height="18" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p>Bình luận</p>
                </div>
                <div class="interact_child col-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                        fill="none">
                        <g clip-path="url(#clip0_33_4074)">
                            <path
                                d="M12.5 8.97891V8.4375V7.3125C12.5 7.00313 12.275 6.75 12 6.75H11H10.5H9.04688C7.45625 6.75 6.1125 7.92773 5.6625 9.54844C5.55937 9.21797 5.5 8.85234 5.5 8.4375C5.5 6.26133 7.06563 4.5 9 4.5H10.5H11H12C12.275 4.5 12.5 4.24687 12.5 3.9375V2.8125V2.27109L15.8125 5.625L12.5 8.97891ZM10.5 8.4375H11V10.125C11 10.7473 11.4469 11.25 12 11.25H12.1156C12.3625 11.25 12.6 11.148 12.7844 10.9617L17.1281 6.56367C17.3656 6.32461 17.5 5.98359 17.5 5.625C17.5 5.26641 17.3656 4.92539 17.1281 4.68633L12.8094 0.312891C12.6094 0.1125 12.3531 0 12.0844 0C11.4844 0 11 0.544922 11 1.21992V2.8125H10.5H9.5H9C6.2375 2.8125 4 5.32969 4 8.4375C4 10.5609 5.08125 11.9215 5.99687 12.6879C6.18125 12.8426 6.35625 12.9727 6.51875 13.0816C6.65625 13.1766 6.78438 13.2539 6.89062 13.3137C6.99687 13.3734 7.08437 13.4191 7.14687 13.4508C7.21562 13.4859 7.29063 13.5 7.36875 13.5H7.44688C7.75313 13.5 8.00313 13.2188 8.00313 12.8742C8.00313 12.6 7.8375 12.3574 7.64062 12.1887C7.62813 12.1781 7.61875 12.1711 7.60625 12.1605C7.55312 12.1219 7.5 12.0727 7.45 12.0164C7.425 11.9883 7.39687 11.9602 7.37187 11.925C7.34687 11.8898 7.32188 11.8582 7.29688 11.823C7.24062 11.7352 7.1875 11.6367 7.14062 11.5242C7.05937 11.3133 7.00625 11.0566 7.00625 10.7367C7.00625 9.46758 7.92188 8.43398 9.05313 8.43398H9.5H10.5V8.4375ZM2.25 1.125C1.00625 1.125 0 2.25703 0 3.65625V15.4688C0 16.868 1.00625 18 2.25 18H12.75C13.9937 18 15 16.868 15 15.4688V13.2188C15 12.7512 14.6656 12.375 14.25 12.375C13.8344 12.375 13.5 12.7512 13.5 13.2188V15.4688C13.5 15.9363 13.1656 16.3125 12.75 16.3125H2.25C1.83438 16.3125 1.5 15.9363 1.5 15.4688V3.65625C1.5 3.18867 1.83438 2.8125 2.25 2.8125H4.25C4.66563 2.8125 5 2.43633 5 1.96875C5 1.50117 4.66563 1.125 4.25 1.125H2.25Z"
                                fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_33_4074">
                                <rect width="18" height="18" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p>Chia sẻ</p>
                </div>
            </div>
        </div>
    </div>`
        })
    }})
    document.getElementById("right_body").innerHTML = element;
}
renderprofileIntroduceFriend =(getIndex) => {
    let element = "";
    user.map((value,index) => {
        if(index === getIndex){
            element += `<div class="profile_introduce">
            <h2>Giới thiệu</h2>
            <div class="name_introduce">
                <p>${value.story}</p>
            </div>
            <div>
                <div class="profile_info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 13 19"
                        fill="none">
                        <path
                            d="M7.30234 18.5731C9.03906 16.1845 13 10.3953 13 7.14349C13 3.19969 10.0885 0 6.5 0C2.91146 0 0 3.19969 0 7.14349C0 10.3953 3.96094 16.1845 5.69766 18.5731C6.11406 19.1423 6.88594 19.1423 7.30234 18.5731ZM6.5 4.76232C7.07464 4.76232 7.62574 5.0132 8.03207 5.45975C8.43839 5.9063 8.66667 6.51196 8.66667 7.14349C8.66667 7.77501 8.43839 8.38067 8.03207 8.82722C7.62574 9.27378 7.07464 9.52465 6.5 9.52465C5.92536 9.52465 5.37426 9.27378 4.96794 8.82722C4.56161 8.38067 4.33333 7.77501 4.33333 7.14349C4.33333 6.51196 4.56161 5.9063 4.96794 5.45975C5.37426 5.0132 5.92536 4.76232 6.5 4.76232Z"
                            fill="black" />
                    </svg>
                    <p>Vị trí: ${value.location} </p>
                </div>
                <div class="profile_info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"
                        fill="none">
                        <path
                            d="M4.07143 1.1875V2.375H2.03571C0.91183 2.375 0 3.17285 0 4.15625V5.9375H19V4.15625C19 3.17285 18.0882 2.375 16.9643 2.375H14.9286V1.1875C14.9286 0.530664 14.3221 0 13.5714 0C12.8208 0 12.2143 0.530664 12.2143 1.1875V2.375H6.78571V1.1875C6.78571 0.530664 6.17924 0 5.42857 0C4.6779 0 4.07143 0.530664 4.07143 1.1875ZM19 7.125H0V17.2188C0 18.2021 0.91183 19 2.03571 19H16.9643C18.0882 19 19 18.2021 19 17.2188V7.125Z"
                            fill="black" />
                    </svg>
                    <p>Ngày sinh: ${value.Birthday}</p>
                </div>
                <div class="profile_info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"
                        fill="none">
                        <path
                            d="M9.5 0C12.0196 0 14.4359 1.00089 16.2175 2.78249C17.9991 4.56408 19 6.98044 19 9.5C19 12.0196 17.9991 14.4359 16.2175 16.2175C14.4359 17.9991 12.0196 19 9.5 19C6.98044 19 4.56408 17.9991 2.78249 16.2175C1.00089 14.4359 0 12.0196 0 9.5C0 6.98044 1.00089 4.56408 2.78249 2.78249C4.56408 1.00089 6.98044 0 9.5 0ZM8.60938 4.45312V9.5C8.60938 9.79688 8.75781 10.0752 9.00644 10.2422L12.5689 12.6172C12.9771 12.8918 13.5301 12.7805 13.8047 12.3686C14.0793 11.9566 13.968 11.4074 13.5561 11.1328L10.3906 9.025V4.45312C10.3906 3.95957 9.99356 3.5625 9.5 3.5625C9.00644 3.5625 8.60938 3.95957 8.60938 4.45312Z"
                            fill="black" />
                    </svg>
                    <p>Tham gia ngày: ${value.Join}</p>
                </div>
            </div>
        </div>`
        }
    })
    document.getElementById("section").innerHTML = element;
}
totalMatualFriend = (arr) => {
    let count = 0
    arr.map((value,index) => {
        if(value.isfolow === true){
            count ++
        }
    })
    return count
}
renderHeaderFriend = (getIndex) => {
    let idmain = 0
    let element = ""
    user.map((value, index) => {
        if(index === getIndex){
            element += `<div class="header_profile">
            <img src="${value.backgroud[0].image}" alt="">
        </div>
        <div class="body_profile">
            <div class="picture_main">
                <img src="${value.avatar[0].image}" alt="">
                
            </div>
            <div class="name_profile">
                <h1>${value.name}</h1>
                <p>${value.matualFriend.length} bạn bè - 300 bạn chung</p>
            </div>
            <div class="profile_public">
                <button id="isFriend" type="button" class="status_profile dropdown-toggle" data-bs-toggle="dropdown">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="21" viewBox="0 0 33 21" fill="none">
                        <path
                            d="M3.8197 5.25C3.8197 3.85761 4.35627 2.52226 5.31138 1.53769C6.26649 0.553123 7.5619 0 8.91263 0C10.2634 0 11.5588 0.553123 12.5139 1.53769C13.469 2.52226 14.0056 3.85761 14.0056 5.25C14.0056 6.64239 13.469 7.97775 12.5139 8.96231C11.5588 9.94688 10.2634 10.5 8.91263 10.5C7.5619 10.5 6.26649 9.94688 5.31138 8.96231C4.35627 7.97775 3.8197 6.64239 3.8197 5.25ZM0 19.7818C0 15.7418 3.17512 12.4688 7.09429 12.4688H10.731C14.6501 12.4688 17.8253 15.7418 17.8253 19.7818C17.8253 20.4545 17.2961 21 16.6435 21H1.18172C0.529187 21 0 20.4545 0 19.7818ZM24.8678 7.25977L19.7749 12.5098C19.4009 12.8953 18.7961 12.8953 18.4261 12.5098L15.8796 9.88477C15.5056 9.49922 15.5056 8.87578 15.8796 8.49434C16.2536 8.11289 16.8584 8.10879 17.2284 8.49434L19.0985 10.4221L23.515 5.86523C23.889 5.47969 24.4938 5.47969 24.8638 5.86523C25.2339 6.25078 25.2379 6.87422 24.8638 7.25566L24.8678 7.25977Z"
                            fill="black" />
                    </svg>
                    <p>Bạn bè</p>
                </button>
                <button onclick = "handleAddFriend(${idmain},${value.id})" id="notFriend" type="button" class="status_profile dropdown-toggle" data-bs-toggle="dropdown">
                    <img src ="https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/r2FA830xjtI.png" height ="18px" width="18px">
                    <p>Thêm bạn bè</p>
                </button>
                <ul id="show_custom" style="padding: 0; margin: 0; width: 140px;" class="dropdown-menu">
                    <li onclick ="handleFolowFriend(${idmain},${value.id})" id="child_folowing">
                        <div class="dropdown-item box-menu">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                <path
                                    d="M3 1.3125C1.34531 1.3125 0 2.48965 0 3.9375V17.0625C0 18.5104 1.34531 19.6875 3 19.6875H18C19.6547 19.6875 21 18.5104 21 17.0625V3.9375C21 2.48965 19.6547 1.3125 18 1.3125H3ZM9.375 14.1094V11.4844H6.375C5.75156 11.4844 5.25 11.0455 5.25 10.5C5.25 9.95449 5.75156 9.51562 6.375 9.51562H9.375V6.89062C9.375 6.34512 9.87656 5.90625 10.5 5.90625C11.1234 5.90625 11.625 6.34512 11.625 6.89062V9.51562H14.625C15.2484 9.51562 15.75 9.95449 15.75 10.5C15.75 11.0455 15.2484 11.4844 14.625 11.4844H11.625V14.1094C11.625 14.6549 11.1234 15.0938 10.5 15.0938C9.87656 15.0938 9.375 14.6549 9.375 14.1094Z"
                                    fill="black" />
                            </svg>
                            <p>Theo dõi</p>
                        </div>
                    </li>
                    <hr>
                    <li onclick="handleUnFolow(${idmain},${value.id})" id="child_unfolowing">
                        <div class="dropdown-item box-menu">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                <path
                                    d="M3 1.3125C1.34531 1.3125 0 2.48965 0 3.9375V17.0625C0 18.5104 1.34531 19.6875 3 19.6875H18C19.6547 19.6875 21 18.5104 21 17.0625V3.9375C21 2.48965 19.6547 1.3125 18 1.3125H3ZM9.375 14.1094V11.4844H6.375C5.75156 11.4844 5.25 11.0455 5.25 10.5C5.25 9.95449 5.75156 9.51562 6.375 9.51562H9.375V6.89062C9.375 6.34512 9.87656 5.90625 10.5 5.90625C11.1234 5.90625 11.625 6.34512 11.625 6.89062V9.51562H14.625C15.2484 9.51562 15.75 9.95449 15.75 10.5C15.75 11.0455 15.2484 11.4844 14.625 11.4844H11.625V14.1094C11.625 14.6549 11.1234 15.0938 10.5 15.0938C9.87656 15.0938 9.375 14.6549 9.375 14.1094Z"
                                    fill="black" />
                            </svg>
                            <p>Hủy theo dõi</p>
                        </div>
                    </li>
                    <hr>
                    <li>
                        <div class="dropdown-item box-menu">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                <g clip-path="url(#clip0_133_1173)">
                                    <path
                                        d="M3.15 5.25C3.15 3.85761 3.5925 2.52226 4.38015 1.53769C5.1678 0.553123 6.23609 0 7.35 0C8.46391 0 9.5322 0.553123 10.3198 1.53769C11.1075 2.52226 11.55 3.85761 11.55 5.25C11.55 6.64239 11.1075 7.97775 10.3198 8.96231C9.5322 9.94688 8.46391 10.5 7.35 10.5C6.23609 10.5 5.1678 9.94688 4.38015 8.96231C3.5925 7.97775 3.15 6.64239 3.15 5.25ZM0 19.7818C0 15.7418 2.61844 12.4688 5.85047 12.4688H8.84953C12.0816 12.4688 14.7 15.7418 14.7 19.7818C14.7 20.4545 14.2636 21 13.7255 21H0.974531C0.436406 21 0 20.4545 0 19.7818ZM15.4547 5.86523C15.7631 5.47969 16.2619 5.47969 16.567 5.86523L18.1092 7.79297L19.6514 5.86523C19.9598 5.47969 20.4586 5.47969 20.7637 5.86523C21.0689 6.25078 21.0722 6.87422 20.7637 7.25566L19.2216 9.1834L20.7637 11.1111C21.0722 11.4967 21.0722 12.1201 20.7637 12.5016C20.4553 12.883 19.9566 12.8871 19.6514 12.5016L18.1092 10.5738L16.567 12.5016C16.2586 12.8871 15.7598 12.8871 15.4547 12.5016C15.1495 12.116 15.1462 11.4926 15.4547 11.1111L16.9969 9.1834L15.4547 7.25566C15.1462 6.87012 15.1462 6.24668 15.4547 5.86523Z"
                                        fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_133_1173">
                                        <rect width="21" height="21" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>Hủy kết bạn</p>
                        </div>
                    </li>
    
    
    
                </ul>
                <button type="button" class="status_profile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                        <g clip-path="url(#clip0_73_1783)">
                            <path
                                d="M11.5 20.125C17.852 20.125 23 15.9428 23 10.7812C23 5.61973 17.852 1.4375 11.5 1.4375C5.14806 1.4375 1.45249e-05 5.61973 1.45249e-05 10.7812C1.45249e-05 12.8072 0.795132 14.6805 2.14279 16.2123C2.05744 17.3129 1.63068 18.2922 1.18146 19.0379C0.93439 19.4512 0.682827 19.7836 0.498647 20.0082C0.404311 20.1205 0.332436 20.2059 0.27853 20.2643C0.251577 20.2912 0.233608 20.3137 0.220132 20.3271L0.206655 20.3406C1.45258e-05 20.5473 -0.0583839 20.8527 0.0539208 21.1223C0.166225 21.3918 0.426772 21.567 0.718765 21.567C2.00802 21.567 3.30626 21.1672 4.38439 20.7C5.4131 20.2508 6.28908 19.7162 6.82365 19.3254C8.25216 19.842 9.83341 20.1295 11.5 20.1295V20.125ZM5.75001 9.34375C6.13126 9.34375 6.4969 9.4952 6.76648 9.76478C7.03606 10.0344 7.18751 10.4 7.18751 10.7812C7.18751 11.1625 7.03606 11.5281 6.76648 11.7977C6.4969 12.0673 6.13126 12.2188 5.75001 12.2188C5.36877 12.2188 5.00313 12.0673 4.73355 11.7977C4.46396 11.5281 4.31251 11.1625 4.31251 10.7812C4.31251 10.4 4.46396 10.0344 4.73355 9.76478C5.00313 9.4952 5.36877 9.34375 5.75001 9.34375ZM11.5 9.34375C11.8813 9.34375 12.2469 9.4952 12.5165 9.76478C12.7861 10.0344 12.9375 10.4 12.9375 10.7812C12.9375 11.1625 12.7861 11.5281 12.5165 11.7977C12.2469 12.0673 11.8813 12.2188 11.5 12.2188C11.1188 12.2188 10.7531 12.0673 10.4835 11.7977C10.214 11.5281 10.0625 11.1625 10.0625 10.7812C10.0625 10.4 10.214 10.0344 10.4835 9.76478C10.7531 9.4952 11.1188 9.34375 11.5 9.34375ZM15.8125 10.7812C15.8125 10.4 15.964 10.0344 16.2335 9.76478C16.5031 9.4952 16.8688 9.34375 17.25 9.34375C17.6313 9.34375 17.9969 9.4952 18.2665 9.76478C18.5361 10.0344 18.6875 10.4 18.6875 10.7812C18.6875 11.1625 18.5361 11.5281 18.2665 11.7977C17.9969 12.0673 17.6313 12.2188 17.25 12.2188C16.8688 12.2188 16.5031 12.0673 16.2335 11.7977C15.964 11.5281 15.8125 11.1625 15.8125 10.7812Z"
                                fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_73_1783">
                                <rect width="23" height="23" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p>Nhắn tin</p>
                </button>
                <button onclick ="handleFolowFriend(${idmain},${value.id})" id= "unfolowing" type="button" class="status_profile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <path
                            d="M3 1.3125C1.34531 1.3125 0 2.48965 0 3.9375V17.0625C0 18.5104 1.34531 19.6875 3 19.6875H18C19.6547 19.6875 21 18.5104 21 17.0625V3.9375C21 2.48965 19.6547 1.3125 18 1.3125H3ZM9.375 14.1094V11.4844H6.375C5.75156 11.4844 5.25 11.0455 5.25 10.5C5.25 9.95449 5.75156 9.51562 6.375 9.51562H9.375V6.89062C9.375 6.34512 9.87656 5.90625 10.5 5.90625C11.1234 5.90625 11.625 6.34512 11.625 6.89062V9.51562H14.625C15.2484 9.51562 15.75 9.95449 15.75 10.5C15.75 11.0455 15.2484 11.4844 14.625 11.4844H11.625V14.1094C11.625 14.6549 11.1234 15.0938 10.5 15.0938C9.87656 15.0938 9.375 14.6549 9.375 14.1094Z"
                            fill="black" />
                    </svg>
                    <p>Theo dõi</p>
                </button>
                <button id="folowing" type="button" class="status_profile">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/3rG7SyNnpzs.png" height = "18px" width ="18px">
                    <p>Đang theo dõi</p>
                </button>
                
            </div>
        </div>
        `
        }
    })
    document.getElementById("header_profile").innerHTML = element

}
renderFriends = (getIndex) => {
    const data = user[getIndex].matualFriend
    let element = ""
    data.map((value, index) => {
        element += `<div onclick = "getId(${value.id})" class="Profile_friend-wrapper-friend">
            <img class="Profile_friend-image" src="${value.image}" alt="" />
            <div class="Profile_friend-name">${value.name}</div>
        </div>`
    })
    document.getElementById("friend").innerHTML = element

}
renderImage =(getIndex) => {
    let element = ""
    const image = user[getIndex].backgroud.concat(user[getIndex].avatar)
    image.map((value,index) => {
        element += `<div class="Profile_friend-image">
            <img src="${value.image}" alt="">
        </div>`
    })
    document.getElementById("Profile_friend-images").innerHTML = element
}
renderPageFriend = (getIndex) => {
    let element = "";
    const array = user[getIndex].matualFriend
    array.map((value,index) => {
            element +=`<div class="info_member col-6">
            <div class="img_member col-2">
                <img src="${value.image}" alt="">
            </div>
            <div class="name_member col-8">
                <p class="name_child">${value.name}</p>
                <p class="friend_child">300 bạn chung</p>
            </div>
            <div class="action_icon col-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path
                        d="M0.410767 11.5C0.410767 10.8328 0.713667 10.193 1.25283 9.72118C1.792 9.24941 2.52327 8.98438 3.28577 8.98438C4.04826 8.98438 4.77953 9.24941 5.3187 9.72118C5.85787 10.193 6.16077 10.8328 6.16077 11.5C6.16077 12.1672 5.85787 12.807 5.3187 13.2788C4.77953 13.7506 4.04826 14.0156 3.28577 14.0156C2.52327 14.0156 1.792 13.7506 1.25283 13.2788C0.713667 12.807 0.410767 12.1672 0.410767 11.5ZM8.62505 11.5C8.62505 10.8328 8.92795 10.193 9.46712 9.72118C10.0063 9.24941 10.7376 8.98438 11.5001 8.98438C12.2626 8.98438 12.9938 9.24941 13.533 9.72118C14.0722 10.193 14.3751 10.8328 14.3751 11.5C14.3751 12.1672 14.0722 12.807 13.533 13.2788C12.9938 13.7506 12.2626 14.0156 11.5001 14.0156C10.7376 14.0156 10.0063 13.7506 9.46712 13.2788C8.92795 12.807 8.62505 12.1672 8.62505 11.5ZM19.7143 8.98438C20.4768 8.98438 21.2081 9.24941 21.7473 9.72118C22.2864 10.193 22.5893 10.8328 22.5893 11.5C22.5893 12.1672 22.2864 12.807 21.7473 13.2788C21.2081 13.7506 20.4768 14.0156 19.7143 14.0156C18.9518 14.0156 18.2206 13.7506 17.6814 13.2788C17.1422 12.807 16.8393 12.1672 16.8393 11.5C16.8393 10.8328 17.1422 10.193 17.6814 9.72118C18.2206 9.24941 18.9518 8.98438 19.7143 8.98438Z"
                        fill="black" />
                </svg>
            </div>
            <div class="box_show_action">
                <div class="child">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"
                        fill="none">
                        <path
                            d="M3 1.3125C1.34531 1.3125 0 2.48965 0 3.9375V17.0625C0 18.5104 1.34531 19.6875 3 19.6875H18C19.6547 19.6875 21 18.5104 21 17.0625V3.9375C21 2.48965 19.6547 1.3125 18 1.3125H3ZM9.375 14.1094V11.4844H6.375C5.75156 11.4844 5.25 11.0455 5.25 10.5C5.25 9.95449 5.75156 9.51562 6.375 9.51562H9.375V6.89062C9.375 6.34512 9.87656 5.90625 10.5 5.90625C11.1234 5.90625 11.625 6.34512 11.625 6.89062V9.51562H14.625C15.2484 9.51562 15.75 9.95449 15.75 10.5C15.75 11.0455 15.2484 11.4844 14.625 11.4844H11.625V14.1094C11.625 14.6549 11.1234 15.0938 10.5 15.0938C9.87656 15.0938 9.375 14.6549 9.375 14.1094Z"
                            fill="black" />
                    </svg>
                    <p>Theo dõi</p>
                </div>
                <div class="child">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"
                        fill="none">
                        <g clip-path="url(#clip0_156_1721)">
                            <path
                                d="M3.15 5.25C3.15 3.85761 3.5925 2.52226 4.38015 1.53769C5.1678 0.553123 6.23609 0 7.35 0C8.46391 0 9.5322 0.553123 10.3198 1.53769C11.1075 2.52226 11.55 3.85761 11.55 5.25C11.55 6.64239 11.1075 7.97775 10.3198 8.96231C9.5322 9.94688 8.46391 10.5 7.35 10.5C6.23609 10.5 5.1678 9.94688 4.38015 8.96231C3.5925 7.97775 3.15 6.64239 3.15 5.25ZM0 19.7818C0 15.7418 2.61844 12.4688 5.85047 12.4688H8.84953C12.0816 12.4688 14.7 15.7418 14.7 19.7818C14.7 20.4545 14.2636 21 13.7255 21H0.974531C0.436406 21 0 20.4545 0 19.7818ZM15.4547 5.86523C15.7631 5.47969 16.2619 5.47969 16.567 5.86523L18.1092 7.79297L19.6514 5.86523C19.9598 5.47969 20.4586 5.47969 20.7637 5.86523C21.0689 6.25078 21.0722 6.87422 20.7637 7.25566L19.2216 9.1834L20.7637 11.1111C21.0722 11.4967 21.0722 12.1201 20.7637 12.5016C20.4553 12.883 19.9566 12.8871 19.6514 12.5016L18.1092 10.5738L16.567 12.5016C16.2586 12.8871 15.7598 12.8871 15.4547 12.5016C15.1495 12.116 15.1462 11.4926 15.4547 11.1111L16.9969 9.1834L15.4547 7.25566C15.1462 6.87012 15.1462 6.24668 15.4547 5.86523Z"
                                fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_156_1721">
                                <rect width="21" height="21" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p>Hủy kết bạn</p>
                </div>
            </div>
        </div>`
        }
    )
    document.getElementById("list_member").innerHTML = element
    let x = document.querySelector(".list_title span")
    x.innerHTML ="(" + user[0].totalFriend + ")"
}
renderListFlolow =(getIndex) => {
    let element = ""
    let data = user[getIndex].matualFriend
    data.map((value, index) => {
        if(value.isfolow === true){
            element+= `<div class="info_member col-6">
            <div class="img_member col-2">
                <img src="${value.image}" alt="">
            </div>
            <div class="name_member col-8">
                <p class="name_child">${value.name}</p>
                <p class="friend_child">300 bạn chung</p>
            </div>
            <div class="action_icon col-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path
                        d="M0.410767 11.5C0.410767 10.8328 0.713667 10.193 1.25283 9.72118C1.792 9.24941 2.52327 8.98438 3.28577 8.98438C4.04826 8.98438 4.77953 9.24941 5.3187 9.72118C5.85787 10.193 6.16077 10.8328 6.16077 11.5C6.16077 12.1672 5.85787 12.807 5.3187 13.2788C4.77953 13.7506 4.04826 14.0156 3.28577 14.0156C2.52327 14.0156 1.792 13.7506 1.25283 13.2788C0.713667 12.807 0.410767 12.1672 0.410767 11.5ZM8.62505 11.5C8.62505 10.8328 8.92795 10.193 9.46712 9.72118C10.0063 9.24941 10.7376 8.98438 11.5001 8.98438C12.2626 8.98438 12.9938 9.24941 13.533 9.72118C14.0722 10.193 14.3751 10.8328 14.3751 11.5C14.3751 12.1672 14.0722 12.807 13.533 13.2788C12.9938 13.7506 12.2626 14.0156 11.5001 14.0156C10.7376 14.0156 10.0063 13.7506 9.46712 13.2788C8.92795 12.807 8.62505 12.1672 8.62505 11.5ZM19.7143 8.98438C20.4768 8.98438 21.2081 9.24941 21.7473 9.72118C22.2864 10.193 22.5893 10.8328 22.5893 11.5C22.5893 12.1672 22.2864 12.807 21.7473 13.2788C21.2081 13.7506 20.4768 14.0156 19.7143 14.0156C18.9518 14.0156 18.2206 13.7506 17.6814 13.2788C17.1422 12.807 16.8393 12.1672 16.8393 11.5C16.8393 10.8328 17.1422 10.193 17.6814 9.72118C18.2206 9.24941 18.9518 8.98438 19.7143 8.98438Z"
                        fill="black" />
                </svg>
            </div>
            <div class="box_show_action">
                <div class="child">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"
                        fill="none">
                        <path
                            d="M3 1.3125C1.34531 1.3125 0 2.48965 0 3.9375V17.0625C0 18.5104 1.34531 19.6875 3 19.6875H18C19.6547 19.6875 21 18.5104 21 17.0625V3.9375C21 2.48965 19.6547 1.3125 18 1.3125H3ZM9.375 14.1094V11.4844H6.375C5.75156 11.4844 5.25 11.0455 5.25 10.5C5.25 9.95449 5.75156 9.51562 6.375 9.51562H9.375V6.89062C9.375 6.34512 9.87656 5.90625 10.5 5.90625C11.1234 5.90625 11.625 6.34512 11.625 6.89062V9.51562H14.625C15.2484 9.51562 15.75 9.95449 15.75 10.5C15.75 11.0455 15.2484 11.4844 14.625 11.4844H11.625V14.1094C11.625 14.6549 11.1234 15.0938 10.5 15.0938C9.87656 15.0938 9.375 14.6549 9.375 14.1094Z"
                            fill="black" />
                    </svg>
                    <p>Theo dõi</p>
                </div>
                <div class="child">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"
                        fill="none">
                        <g clip-path="url(#clip0_156_1721)">
                            <path
                                d="M3.15 5.25C3.15 3.85761 3.5925 2.52226 4.38015 1.53769C5.1678 0.553123 6.23609 0 7.35 0C8.46391 0 9.5322 0.553123 10.3198 1.53769C11.1075 2.52226 11.55 3.85761 11.55 5.25C11.55 6.64239 11.1075 7.97775 10.3198 8.96231C9.5322 9.94688 8.46391 10.5 7.35 10.5C6.23609 10.5 5.1678 9.94688 4.38015 8.96231C3.5925 7.97775 3.15 6.64239 3.15 5.25ZM0 19.7818C0 15.7418 2.61844 12.4688 5.85047 12.4688H8.84953C12.0816 12.4688 14.7 15.7418 14.7 19.7818C14.7 20.4545 14.2636 21 13.7255 21H0.974531C0.436406 21 0 20.4545 0 19.7818ZM15.4547 5.86523C15.7631 5.47969 16.2619 5.47969 16.567 5.86523L18.1092 7.79297L19.6514 5.86523C19.9598 5.47969 20.4586 5.47969 20.7637 5.86523C21.0689 6.25078 21.0722 6.87422 20.7637 7.25566L19.2216 9.1834L20.7637 11.1111C21.0722 11.4967 21.0722 12.1201 20.7637 12.5016C20.4553 12.883 19.9566 12.8871 19.6514 12.5016L18.1092 10.5738L16.567 12.5016C16.2586 12.8871 15.7598 12.8871 15.4547 12.5016C15.1495 12.116 15.1462 11.4926 15.4547 11.1111L16.9969 9.1834L15.4547 7.25566C15.1462 6.87012 15.1462 6.24668 15.4547 5.86523Z"
                                fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_156_1721">
                                <rect width="21" height="21" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p>Hủy kết bạn</p>
                </div>
            </div>
        </div>`
        }
    })
    document.getElementById("list_member_folow").innerHTML = element
}
getId = (idmain,id) => {
    let indexUser = user.findIndex(value => value.id === id)
    const result = user[idmain].matualFriend.find(value => value.id === id);
    console.log(result)
    renderHeaderFriend(indexUser)
    renderprofileIntroduceFriend(indexUser)
    renderPost(indexUser)
    renderImage(indexUser)
    renderFriends(indexUser)
    renderPageFriend(indexUser)
    renderListFlolow(indexUser)
    document.getElementById("add_post").style.display = "none"
    console.log(result.isFriend)
    if(result.isfolow === true){
        document.getElementById("unfolowing").style.display = "none"
        document.getElementById("child_unfolowing").style.display = "none"
    }else{
        document.getElementById("folowing").style.display = "none"
        document.getElementById("child_folowing").style.display = "none"
    }

    if(result.isFriend === false){
        document.getElementById("isFriend").style.display = "none"
        document.getElementById("notFriend").classList.remove("dropdown-toggle")
        document.getElementById("show_custom").style.display = "none"
    }else{
        document.getElementById("notFriend").style.display = "none"
        
    }
    
}
handleAddFriend = (idmain,id) => {
    let indexUser = user.findIndex(value => value.id === id)
    let data = user[idmain].matualFriend.findIndex(value => value.id === id)
    if(data !== -1){
        user[idmain].matualFriend[data] = {
            ...user[idmain].matualFriend[data],
            isFriend: true
        }
        getId(idmain,id)
        document.getElementById("notFriend").style.display = "none"
        document.getElementById("isFriend").style.display = "flex"
    }else{
        user[idmain].matualFriend.unshift({
            id:Math.floor(Math.random()*100000),
            name:data.name,
            image:data.image,
            isfolow:false,
            isFriend:true
        })
    }
    console.log(user[idmain].matualFriend)
}

handleFolowFriend =(idmain,id) => {
    let indexUser = user.findIndex(value => value.id === id)
    let data = user[idmain].matualFriend.findIndex(value => value.id === id)
    if(data !== -1){
        user[idmain].matualFriend[data] = {
            ...user[idmain].matualFriend[data],
            isfolow:true
        }
        handleAddFriend(idmain, id)
        document.getElementById("unfolowing").style.display = "none"
        document.getElementById("child_unfolowing").style.display = "flex"
        document.getElementById("child_folowing").style.display = "none"
        document.getElementById("folowing").style.display = "flex"
    }else{
        user[idmain].matualFriend.unshift({
            id:Math.floor(Math.random()*100000),
            name:data.name,
            image:data.image,
            isfolow:true,
            isFriend:true
        })
    }
    console.log(user[idmain].matualFriend)
}

handleUnFolow = (idmain, id) => {
    let indexUser = user.findIndex(value => value.id === id)
    let data = user[idmain].matualFriend.findIndex(value => value.id === id)
    user[idmain].matualFriend[data] = {
        ...user[idmain].matualFriend[data],
        isfolow:false
    }
    handleAddFriend(idmain,id)
    document.getElementById("child_unfolowing").style.display = "none"
    document.getElementById("child_folowing").style.display = "flex"
    // document.getElementById("unfolowing").style.display = "none"
    // document.getElementById("folowing").style.display = "flex"
}

handleUnFriend = () => {
    
}







