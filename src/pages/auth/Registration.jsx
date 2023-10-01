import {
    Paper,
    TextInput,
    PasswordInput,
    Button,
    Title,
    Text,
    Anchor,
} from '@mantine/core';
import classes from './Registration.module.css';
import {useState} from "react";
import {Link} from "react-router-dom";

export default function RegistrationPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Email:', email);
        console.log('Password:', password);
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
    };

    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <form onSubmit={handleSubmit}>
                    <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                        Welcome back to Freelance!
                    </Title>

                    <TextInput
                        label="Email"
                        placeholder="hello@gmail.com"
                        size="md"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <PasswordInput
                        label="Пароль"
                        placeholder="Твой пароль"
                        mt="md"
                        size="md"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <br/>

                    <TextInput
                        label="Фамилия"
                        placeholder="Иванович"
                        size="md"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />

                    <br/>

                    <TextInput
                        label="Имя"
                        placeholder="Иван"
                        size="md"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />

                    <Button type="submit" fullWidth mt="xl" size="md">
                        Login
                    </Button>

                </form>

                <Text ta="center" mt="md">
                    Don&apos;t have an account?{' '}
                    <Link to={'/login'}>
                        <Anchor fw={700}>
                            Register
                        </Anchor>
                    </Link>
                </Text>
            </Paper>
        </div>
    );
}

// export default function RegistrationPage() {
//     return (
//         <div className={classes.wrapper}>
//             <Paper className={classes.form} radius={0} p={30}>
//
//                 <TextInput label="Email" placeholder="hello@gmail.com" size="md"/>
//                 <PasswordInput label="Пароль" placeholder="Твой пароль" mt="md" size="md"/>
//                 <br/>
//                 <TextInput label="Имя" placeholder="Иван" size="md"/>
//                 <br/>
//                 <TextInput label="Фамилия" placeholder="Иванович" size="md"/>
//                 <Checkbox label="Keep me logged in" mt="xl" size="md"/>
//                 <Button fullWidth mt="xl" size="md">
//                     Login
//                 </Button>
//
//             </Paper>
//         </div>
//     );
// }