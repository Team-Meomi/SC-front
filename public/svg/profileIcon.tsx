import React from "react";

function profileIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
        <svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50.4683 81.8574C68.4442 81.8574 83.2814 67.1671 83.2814 49.4006C83.2814 31.6341 68.4125 16.9438 50.4366 16.9438C32.4925 16.9438 17.687 31.6341 17.687 49.4006C17.687 67.1671 32.5242 81.8574 50.4683 81.8574ZM50.4366 54.5171C44.2228 54.4857 39.4038 49.3378 39.4038 42.5263C39.3404 36.1228 44.2545 30.7866 50.4366 30.7866C56.6188 30.7866 61.4694 36.1228 61.4694 42.5263C61.4694 49.3378 56.6505 54.5799 50.4366 54.5171ZM50.4366 76.4897C43.3351 76.4897 35.7897 73.5705 31.0024 68.4854C34.6483 63.0864 41.8767 59.9475 50.4366 59.9475C58.9014 59.9475 66.1932 63.0236 69.8708 68.4854C65.0836 73.5705 57.5382 76.4897 50.4366 76.4897Z" fill="#77D6B3"/>
        </svg>
    )
}

const MemoProfileIcon = React.memo(profileIcon);
export default MemoProfileIcon;