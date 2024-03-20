import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store, persistor } from './stores/store';
import React from 'react';
import './assets/css/index.css'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import AuthLayout from './components/AuthLayout'
import Login from './pages/Login';
import Register from './pages/Register';
import SS from './pages/SuperSentai/SS'
import KR from './pages/KamenRider/KR';
import UTM from './pages/Ultraman/UTM';
import ANM from './pages/Anime/ANM';
import Admin from './pages/Admin';
import Post from './pages/Post';
import PostCreate from './pages/PostCreate';
import PostEdit from './pages/PostEdit'

export default function App (){
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
							<Route index element={<Home />} />
							<Route path="contact" element={<Contact />} />
					        <Route path="about-us" element={<AboutUs />} />
                        </Route>
                        <Route path='/content/' element={<Layout />}> 
                            <Route path="supersentai" element={<SS />} />
                            <Route path="kamenrider" element={<KR />} />
                            <Route path="ultraman" element={<UTM />} />
                            <Route path="anime" element={<ANM />} />
                        </Route>
                        <Route path="admin" element={<Admin />}>
								<Route path="post" element={<Post />} />
								<Route
									path="posts/create"
									element={<PostCreate />}
								/>
								<Route
									path="posts/edit/:postId"
									element={<PostEdit />}
								/>
							</Route>
                        <Route element={<AuthLayout />}>
								<Route path="login" element={<Login />} />
								<Route path="register" element={<Register />} />
						</Route>
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}
