import React, { useState, useEffect } from "react";
import styles from "./Profile.module.css";
import {
    ExitToAppOutlined,
    EditOutlined
} from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserName, logout } from "../../store/auth/auth.actions";
import { ModalUI } from "../../Components/ModalUI/ModalUI";
import { ShowMessage } from "../../Utils/Utility";
import { R } from "../../res";
import { BASE_URL, GetFetch, PutFetch } from "../../ApiManager/ApiConst";
import { useForm } from 'react-hook-form';
import { Loading } from "../../Components/Loading/Loading";

export const Profile = () => {

    useEffect(() => {
        getProfile()
    }, [])

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({});

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleClose = () => {
        setOpen(false)
        control.unregister()
    }

    const handleLogout = () => {
        ShowMessage("Logout Successfully", R.colors.lightGreen)
        dispatch(logout());
        navigate("/");
    };

    const getProfile = async () => {
        try {
            setLoading(true)
            const response = await GetFetch(`${BASE_URL}auth/getuser`, "withAuth")
            if (response.status === 200) {
                setUser(response.user)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    };

    const renderItem = () => {
        return (
            <>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.modalIndInput}>
                        <label htmlFor="name">Name</label>
                        <input
                            control={control}
                            type="name"
                            id='name'
                            className={styles.input}
                            placeholder='Enter your name'
                            name="name"
                            {...register('name')}
                        />
                        <p>{errors?.name?.message}</p>
                    </div>
                    <div className={styles.modalIndInput}>
                        <label htmlFor="email">Email</label>
                        <input
                            control={control}
                            type="text"
                            id='email'
                            className={styles.input}
                            placeholder='Enter your email'
                            name="email"
                            {...register('email',
                                {
                                    pattern: { value: /\S+@\S+\.\S+/, message: 'Email is invalid' }
                                })}
                        />
                        <p>{errors?.email?.message}</p>
                    </div>
                    <div className={styles.modalIndInput}>
                        <label htmlFor="mobile">Mobile Number</label>
                        <input
                            control={control}
                            type="text"
                            id='mobile'
                            className={styles.input}
                            placeholder='Enter your mobile number'
                            name="mobile_number"
                            {...register('mobile_number',
                                {
                                    pattern: { value: /^(\d{10})$/, message: 'Mobile number is invalid' }
                                })}
                        />
                        <p>{errors?.mobile_number?.message}</p>
                    </div>
                    <div className={styles.modalBtns}>
                        <div className={styles.modalCancelBtn} onClick={handleClose}>
                            <p className={styles.modalCancel}>Cancel</p>
                        </div>
                        <button className={styles.modalSaveBtn}>
                            <p className={styles.modalSave}>SAVE</p>
                        </button>
                    </div>
                </form>
            </>
        )
    }

    const onSubmit = async (item) => {
        // dispatch(startLoad())
        setLoading(true)
        const data = {
            name: item.name ? item.name : user.name,
            email: item.email ? item.email : user.email,
            mobile_number: item.mobile_number ? item.mobile_number : user.mobile_number,
        }
        console.log(data)
        try {
            const response = await PutFetch(`${BASE_URL}auth/edituser`, data, "withAuth")
            if (response.status === 200) {
                dispatch(getUserName(response.user.name));
                setOpen(false);
                getProfile();
            }
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    };

    if (loading) return <Loading />
    return (
        <div className={styles.myProfileContainer}>
            <div className={styles.mainContainer}>
                <div className={styles.profileContainer}>
                    <div className={styles.profilePicView}>
                        <p>{user.name ? user.name.split("")[0] : ""}</p>
                    </div>
                    <div className={styles.userTitleSection}>
                        <p className={styles.userTitle}>{user.name}</p>
                        <p className={styles.userTag}>PERSONAL PROFILE</p>
                    </div>
                    <div className={styles.profileTabs}>
                        <div className={styles.indProfileTab} onClick={handleLogout}>
                            <ExitToAppOutlined style={{ fontSize: 25, color: "#4a4a4a" }} />
                            <p>Logout</p>
                        </div>
                    </div>
                </div>
                <div className={styles.profile2Container} id="profile2">
                    <div className={styles.profileContentView}>
                        <div className={styles.profileContent}>
                            <p className={styles.profileContentTitle}>Profile</p>
                            <p className={styles.profileContentTag}>
                                Basic info, for a faster booking experience
                            </p>
                        </div>
                        <div className={styles.profileEdit} onClick={() => setOpen(true)}>
                            <EditOutlined
                                style={{ fontSize: 20, color: "#53b2fe" }}
                            />
                            <p>Edit</p>
                        </div>
                    </div>
                    <div className={styles.profileDetails}>
                        <div className={styles.indProfileContent}>
                            <p className={styles.indProfileContentTitle}>NAME</p>
                            <p className={styles.indProfileContentValue}>{user.name}</p>
                        </div>
                        <div className={styles.profileContentDivider} />
                        <div className={styles.indProfileContent}>
                            <p className={styles.indProfileContentTitle}>MOBILE NUMBER</p>
                            <p className={styles.indProfileContentValue}>+91-{user.mobile_number}</p>
                        </div>
                        <div className={styles.profileContentDivider} />
                        <div className={styles.indProfileContent}>
                            <p className={styles.indProfileContentTitle}>EMAIL ID</p>
                            <p className={styles.indProfileContentValue}>{user.email}</p>
                        </div>
                    </div>
                </div>
            </div>
            <ModalUI
                open={open}
                handleClose={handleClose}
                renderItem={renderItem()}
                modalWidth={400}
            />
        </div >
    );
};
