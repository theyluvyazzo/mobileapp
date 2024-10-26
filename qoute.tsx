import React from 'react';

const Quote: React.FC = () => {
    return (
        <div style={{ backgroundColor: 'green', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <h2 style={{ fontStyle: 'italic' }}>QUOTE</h2>
            <form>
                <label>NAME</label>
                <input type="text" placeholder="Enter your name" /><br />
                <label>EMAIL</label>
                <input type="email" placeholder="Enter your email" /><br />
                <label>CELL PHONE</label>
                <input type="tel" placeholder="Enter your phone number" /><br />
                <label>SELECT COURSES</label>
                <select>
                    <option>Select</option>
                    <option>6-week course</option>
                    <option>6-month course</option>
                </select>
            </form>
            <div>
                <div>+ 1 COURSE: +0%</div>
                <div>+ 2 COURSES: +5%</div>
                <div>+ 3 COURSES: +10%</div>
                <div>+ 4 COURSES: +15%</div>
            </div>
            <button style={{ padding: '10px 20px', backgroundColor: 'black', color: 'white', borderRadius: '5px' }}>SUBMIT</button>
        </div>
    );
};

export default Quote;
