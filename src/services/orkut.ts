import axios from 'axios';
import { api } from './apiUrl';

export interface SignUpData {
    username: string;
    avatar: string;
    email: string;
    password: string;
}

export type LoginData = Omit<SignUpData, 'username' | 'avatar'>;

function createConfig(token: string) {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
}

function postSignUp(body: SignUpData) {
    const promise = axios.post(`${api}/users/registration`, body);
    return promise;
}

function postLogin(body: LoginData) {
    const promise = axios.post(`${api}/users/authentication`, body);
    return promise;
}

function getUserProfile(token: string) {
    const config = createConfig(token);
    const promise = axios.get(`${api}/users`, config);
    return promise;
}

// function getTermsByDisciplineName({ token, discipline }) {
//     const config = createConfig({ token })
//     const promise = axios.get(`${api}/terms?discipline=${discipline}`, config);
//     return promise;
// }

// function getTests({ token, term }) {
//     const config = createConfig({ token })
//     const promise = axios.get(`${api}/tests/terms/${term}`, config);
//     return promise;
// }

// function getDisciplinesByTermNumber({ token, term, search }) {
//     const config = createConfig({ token });

//     if (search.length > 2) {
//         const promise = axios.get(`${api}/disciplines/terms/${term}?name=${search}`, config);
//         return promise;
//     }

//     const promise = axios.get(`${api}/disciplines/terms/${term}`, config);
//     return promise;
// }

// function getDisciplines({ token }) {
//     const config = createConfig({ token })
//     const promise = axios.get(`${api}/disciplines`, config);
//     return promise;
// }

// function getTestsByDisciplineTermNumber({ token, term, discipline }) {
//     const config = createConfig({ token })
//     const promise = axios.get(`${api}/tests/terms/${term}/disciplines/${discipline}`, config);
//     return promise;
// }

// function getTeachers({ token }) {
//     const config = createConfig({ token })
//     const promise = axios.get(`${api}/teachers`, config);
//     return promise;
// }

// function getTeachersByName({ token, name }) {
//     const config = createConfig({ token })
//     const promise = axios.get(`${api}/teachers?name=${name}`, config);
//     return promise;
// }

// function getTeachersByDisciplineId({ token, discipline }) {
//     const config = createConfig({ token })
//     const promise = axios.get(`${api}/teachers/disciplines/${discipline}`, config);
//     return promise;
// }

// function getCategoriesByTeacherId({ token, teacher }) {
//     const config = createConfig({ token });
//     const promise = axios.get(`${api}/categories/teachers/${teacher}`, config);
//     return promise;
// }

// function getCategories({ token }) {
//     const config = createConfig({ token });
//     const promise = axios.get(`${api}/categories`, config);
//     return promise;
// }

// function getTestsByTeacherAndCategoryIds({ token, teacher, category }) {
//     const config = createConfig({ token })
//     const promise = axios.get(`${api}/tests/teachers/${teacher}/categories/${category}`, config);
//     return promise;
// }

// function postNewTestData({ token, test }) {
//     const config = createConfig({ token });
//     const promise = axios.post(`${api}/tests`, test, config);
//     return promise;
// }

// function incrementNumberOfViews({ token, test }) {
//     const config = createConfig({ token });
//     const promise = axios.patch(`${api}/tests/${test}/view`, {}, config);
//     return promise;
// }

export {
    postLogin,
    postSignUp,
    getUserProfile,
};
