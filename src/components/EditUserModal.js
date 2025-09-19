import React, { useEffect } from 'react';
import { Modal, Form, Input } from 'antd';

const EditUserModal = ({ visible, user, onSave, onCancel }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        name: user.name ?? '',
        email: user.email ?? '',
        phone: user.phone ?? '',
        street: user.address?.street ?? '',
        suite: user.address?.suite ?? '',
        city: user.address?.city ?? '',
        zipcode: user.address?.zipcode ?? '',
        company: user.company?.name ?? '',
      });
    } else {
      form.resetFields();
    }
  }, [user, form]);

  const handleOk = () => {
    form
      .validateFields()
      .then(values => {
        const updatedUser = {
          ...user,
          name: values.name,
          email: values.email,
          phone: values.phone,
          address: {
            ...user?.address,
            street: values.street,
            suite: values.suite,
            city: values.city,
            zipcode: values.zipcode,
          },
          company: { ...user?.company, name: values.company },
        };
        onSave(updatedUser);
      })
      .catch(info => console.log('Validate Failed:', info));
  };

  return (
    <Modal
      title="Edit User"
      open={visible}
      onOk={handleOk}
      onCancel={onCancel}
      okText="Save"
      destroyOnClose
    >
      <Form form={form} layout="vertical" preserve={false}>
        {/* Basic Details */}
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please input email!' },
            { type: 'email', message: 'Invalid email format' }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: 'Please input phone number!' }]}
        >
          <Input />
        </Form.Item>

        {/* Address Section */}
        <Form.Item label="Street" name="street">
          <Input />
        </Form.Item>

        <Form.Item label="Suite" name="suite">
          <Input />
        </Form.Item>

        <Form.Item label="City" name="city">
          <Input />
        </Form.Item>

        <Form.Item label="Zipcode" name="zipcode">
          <Input />
        </Form.Item>

        {/* Company */}
        <Form.Item label="Company" name="company">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditUserModal;
