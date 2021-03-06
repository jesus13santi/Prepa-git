const btnAddTodo = document.getElementById("addTodo");
const mainSectionContainer = document.getElementById("mainSection");

const promise = fetch("https://jsonplaceholder.typicode.com/todos/");

promise
  .then((response) => {
    return response.json();
  })
  .then((datos) => {
    mainSectionContainer.innerHTML += datos.map((todo) => {
      return `<div class="container-3">
        <div class="title">
          <h3>${todo.title}</h3>
          <div class="image-box">
            <button class="button2">
              <svg
                width="28"
                height="31"
                viewBox="0 0 28 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7059 3.3209C13.0731 2.2564 14.4625 2.2564 14.8308 3.3209L17.2059 10.553C17.3723 11.0323 17.7956 11.3514 18.2683 11.3514H24.105C25.1835 11.3514 25.6539 12.827 24.806 13.5497L20.6526 17.6577C20.4665 17.8149 20.3306 18.0329 20.2642 18.2803C20.1978 18.5277 20.2044 18.7919 20.2831 19.035L21.7999 26.1018C22.1694 27.2369 20.9738 28.2119 20.0697 27.5132L14.4281 23.578C14.2349 23.4288 14.0045 23.3487 13.7684 23.3487C13.5322 23.3487 13.3018 23.4288 13.1086 23.578L7.46705 27.5132C6.56408 28.2119 5.36737 27.2357 5.73683 26.1018L7.25364 19.035C7.33233 18.7919 7.33896 18.5277 7.27258 18.2803C7.20621 18.0329 7.07024 17.8149 6.88419 17.6577L2.73073 13.5497C1.88168 12.827 2.35439 11.3514 3.43062 11.3514H9.26727C9.49708 11.3522 9.7217 11.2763 9.91142 11.1337C10.1011 10.9912 10.247 10.7887 10.3297 10.553L12.7048 3.3209H12.7059Z"
                  stroke="#EDE408"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <button class="button2">
              <svg
                width="29"
                height="32"
                viewBox="0 0 29 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 3.38739C7.99267 3.38739 2.69853 9.04541 2.69853 16C2.69853 22.9546 7.99267 28.6126 14.5 28.6126C21.0073 28.6126 26.3015 22.9546 26.3015 16C26.3015 9.04541 21.0073 3.38739 14.5 3.38739ZM14.5 26.0901C9.29437 26.0901 5.05883 21.5634 5.05883 16C5.05883 10.4366 9.29437 5.90991 14.5 5.90991C19.7056 5.90991 23.9412 10.4366 23.9412 16C23.9412 21.5634 19.7056 26.0901 14.5 26.0901Z"
                  fill="#24BE34"
                />
                <path
                  d="M12.1385 18.0016L9.42536 15.107L7.759 16.893L12.1409 21.566L20.0549 13.1079L18.3862 11.3245L12.1385 18.0016Z"
                  fill="#24BE34"
                />
              </svg>
            </button>
            <button class="button2">
              <svg
                width="22"
                height="31"
                viewBox="0 0 22 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.12932 11.4953L3.64522 28.0048C3.7292 28.7025 6.79404 30.997 11.2316 31C15.6719 30.997 18.7367 28.7025 18.8193 28.0048L20.3366 11.4953C18.018 12.9211 14.5525 13.5946 11.2316 13.5946C7.91341 13.5946 4.44654 12.9211 2.12932 11.4953ZM15.5934 3.01513L14.4107 1.57578C13.9536 0.859891 13.4579 0.729729 12.4928 0.729729H9.97179C9.008 0.729729 8.51096 0.859891 8.05523 1.57578L6.87252 3.01513C3.33405 3.6947 0.767624 5.4973 0.767624 6.82767V7.08497C0.767624 9.42638 5.453 11.3243 11.2316 11.3243C17.0116 11.3243 21.6969 9.42638 21.6969 7.08497V6.82767C21.6969 5.4973 19.1319 3.6947 15.5934 3.01513ZM14.0816 7.29838L12.6084 5.27027H9.85476L8.38429 7.29838H6.04367C6.04367 7.29838 8.60734 3.93686 8.95017 3.4813C9.21177 3.13319 9.47888 3 9.82584 3H12.6387C12.9871 3 13.2542 3.13319 13.5158 3.4813C13.8572 3.93686 16.4223 7.29838 16.4223 7.29838H14.0816Z"
                  fill="#BC0909"
                />
              </svg>
            </button>
          </div>
        </div>
        <p>Descripcion</p>
      </div>`;
    });
  })
  .catch((error) => {
    console.log("Error", error);
  });
