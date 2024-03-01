import React from 'react'
import './Profile.css'
import tests from './tests.jpg'
import preview from './preview.png';
import uni from './univ.jpg';
import old from './oldprofile.jpg';
import chess from './chess.jpg';
import newpro from './newprofile.jpg';

function Profile() {
  return (
    <div className='profile'>
      
      <div className="projects">
        <h2>موقع للاختبارات</h2>
        <img src={tests}  className='img-project' />
        <p>من اوائل المشاريع التي قمت صنعها هو عبارة عن موقع لستطيع كلم ن له حساب مشرف أن يضيف اختبارات و الطالاب الباقي يستطيعون حل هذه الامتحانات</p>
        <a href="https://tests-for-everyone-challenge.onrender.com" target='_black' className="btn-project">عرض الموقع</a>
      </div>
     

      <div className="projects">
        <h2>مشروع المخبوزات</h2>
        <img src={preview}  className='img-project' />
        <p>هذا التصميم لست من صممه و لكن كان علي اليوتيوب لذلك درسته جيدا و استخلصت كل المعلومات التي فيه</p>
                <a href="https://github.com/Ahmed-175/responsive-bakery-" target='_black' className="btn-project">عرض اكواد الموقع</a>

      </div>
      <div className="projects">
        <h2>الموقع الشخصي القديم</h2>
        <img src={old}  className='img-project' />
        <p>هذا اول موقع شخصي قمت بصناعته في اعرض المشاريع الخاص بي</p>
        <a href="https://github.com/Ahmed-175/old-profile" target='_black' className="btn-project">عرض أكواد الموقع</a>

      </div>

      <div className="projects">
        <h2>لعبة الشطرنج</h2>
        <img src={chess}  className='img-project' />
        <p>من التي التي قمت بصنعها لعبة الشطرنج لم اكتمل منها بعد و لكن سوف اكملها لانها شوف تتطور عندي طريق تفكيري بشكل جيد</p>
                <a href="https://github.com/Ahmed-175/chess-game" target='_black' className="btn-project">عرض أكواد الموقع</a>

      </div>
      <div className="projects">
        <h2>موقعي الجديد</h2>
        <img src={newpro}  className='img-project' />
        <p>من الاشياء الجميله التي قمت بصناعتها لأنه دربنيعلي كيفية التغذية البصرية و  كيفية تنفيذ التصميمات</p>
                <a href="/" target='_black' className="btn-project">عرض الموقع</a>

      </div>
      <div className="projects">
        <h2> جامعة العلوم بالاسكندرية</h2>
        <img src={uni}  className='img-project' />
        <p>لقد طلبه مني احد في هذه الجامعة الموقع فكرته عرض مسارات و الاقسام الخاصة بي الجامعة و لكنه مازال في مرحلة البرمجة ولم ينهي بعد</p>
              <a href="https://github.com/Ahmed-175/University-of-Science" target='_black' className="btn-project">عرض أكواد الموقع</a>

      </div>



    </div>
  )
}

export default Profile