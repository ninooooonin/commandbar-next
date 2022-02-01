import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Templates
import AppContainer from '../../../templates/container';
import AppLayout from '../../../templates/layout';
import AppHead from '../../../templates/head';

// Styles
import app from  '../../../scss/app.module.scss';
import styles from '../styles.module.scss';

// Components
import { AuthButton, AuthBackButton, GoogleButton } from '../../../components/general/buttons';
import Input from '../../../components/entry/input';
import { Title, Paragraph, URL } from '../../../components/general/text';

// Icons
import { AngleLeftIcon, GoogleIcon, MailIcon } from '../../../components/general/icons';

const SignIn = (props: any) => {
    const router = useRouter();

	// States
	const [isMounted, setMount] = useState(false);
	const [title, setTitle] = useState<string>('Sign In Page');

    // Form Value
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Functions
    const onPressSubmit = () => {
        console.log('Submit');
    }

    const onPressBack = () => {
        router.back();
    }

	// Component will mount
    const componentWillUnmount = () => {
        setMount(false);
        console.log('Component Did UnMount Sign In');
    }

    const componentDidMount = () => {
        setMount(true);
        console.log('Component Did Mount Sign In');
    }

    // Life Cycle Handler | Did Mount and Did Unmount
    useEffect(() => {
        componentDidMount();
        return componentWillUnmount;
    }, [])

	return (
		<AppLayout>
            <AppHead title={title}/>
            <AppContainer styles={styles.container}>

                <AuthBackButton onClick={onPressBack} className={styles.back}>
                    <AngleLeftIcon styles={'icon'}/>
                </AuthBackButton>

                <div className={styles.form}>
                    <div className={styles.header}>
                        <Title className={styles.title}>Log in</Title>
                        <Paragraph className={styles.subtitle}>You previously logged in with your email</Paragraph>
                    </div>
                    <div className={styles.body}>
                        <GoogleButton>
                            <GoogleIcon styles={'google'}/>
                            Continue with Google
                        </GoogleButton>
                        <Paragraph className={styles.divider}>or use your email</Paragraph>
                        <Input styles={styles.input} disabled={false} onChange={setEmail} 
                            placeholder={'Enter your email address'} value={email} />
                        <Input styles={[styles.input, styles.password]} disabled={false} onChange={setPassword} 
                            placeholder={'Password'} type={'password'}  value={password} />
                        <AuthButton onClick={onPressSubmit}>
                            <MailIcon styles={'icon'}/>
                            Log in with email
                        </AuthButton>
                    </div>
                    <Paragraph className={styles.note}>
                        Don’t have an account yet?
                        <Link href={'/auth/signup'} passHref>
                            <URL className={styles.click}>Click here</URL>
                        </Link>
                    </Paragraph>
                </div>
            </AppContainer>
        </AppLayout>
	)
}

export default SignIn;