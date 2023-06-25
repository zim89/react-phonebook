import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useForm, isEmail } from '@mantine/form';
// import { FcGoogle } from 'react-icons/fc';
// import { FaGithub } from 'react-icons/fa';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  // Divider,
  Anchor,
  Stack,
  // rem,
} from '@mantine/core';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }) => {
    dispatch(
      logIn({
        email,
        password,
      })
    );
  };

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: isEmail('Invalid email'),
    },
  });

  return (
    <Paper shadow="sm" p="xl" w={350} mx="auto">
      <Text size="lg" weight={500} ta="center" mb={20}>
        Welcome, login with email
      </Text>

      {/* <Group grow mb="md" mt="md">
        <Button
          variant="outline"
          size="md"
          leftIcon={<FcGoogle size={rem(22)} />}
          fz="sm"
        >
          Google
        </Button>
        <Button
          variant="outline"
          size="md"
          leftIcon={<FaGithub size={rem(22)} />}
          fz="sm"
        >
          GitHub
        </Button>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" /> */}

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            withAsterisk
            required
            label="Email"
            placeholder="hello@gmail.com"
            value={form.values.email}
            onChange={event =>
              form.setFieldValue('email', event.currentTarget.value)
            }
            error={form.errors.email && 'Invalid email'}
            radius="md"
            {...form.getInputProps('email')}
          />
          <PasswordInput
            withAsterisk
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={event =>
              form.setFieldValue('password', event.currentTarget.value)
            }
            radius="md"
            {...form.getInputProps('password')}
          />
        </Stack>

        <Group position="apart" mt="xl">
          <Text color="dimmed" size="xs">
            Don't have an account?{' '}
            <Anchor component={Link} to="/register">
              Register
            </Anchor>
          </Text>
          <Button type="submit">Login</Button>
        </Group>
      </form>
    </Paper>
  );
};

export default LoginForm;
