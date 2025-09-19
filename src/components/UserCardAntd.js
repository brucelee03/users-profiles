import React from 'react';
import { Card, Avatar, Button, Typography, Space } from 'antd';
import { 
  EditOutlined, 
  DeleteOutlined, 
  HeartFilled, 
  HeartOutlined,
  UserOutlined,
  PhoneFilled,
  MailFilled,
  HomeFilled
} from '@ant-design/icons';

const { Text } = Typography;

const UserCardAntd = props => {
  const { user, isLiked, onLike, onEdit, onDelete } = props;
  const { id, username, name, email, phone, company, address } = user;
  const avatarUrl = `https://api.dicebear.com/9.x/big-smile/svg?seed=${encodeURIComponent(username)}&size=80`;

  const userAddress = address
    ? `${address.street}${address.suite ? ', ' + address.suite : ''}, ${address.city} - ${address.zipcode}`
    : 'N/A';

  return (
    <Card
      style={{
        marginBottom: 16,
        borderRadius: 16,
        boxShadow: '0 6px 14px rgba(0, 0, 0, 0.08)',
        overflow: 'hidden',
        background: 'linear-gradient(to bottom, #00C6FF, #0072FF)',
        color: '#fff',
      }}
      actions={[
        <Button
          type="text"
          key="like"
          className='like-button'
          aria-label="like"
          onClick={() => onLike(id)}
          icon={isLiked ? <HeartFilled style={{ color: 'red', fontSize: 'larger' }} /> : <HeartOutlined style={{ fontSize: 'larger' }} />}
        />,
        <Button type="text" key="edit" onClick={() => onEdit(user)} icon={<EditOutlined style={{ fontSize: 'larger' }} />} />,
        <Button type="text" key="delete" danger onClick={() => onDelete(id)} icon={<DeleteOutlined style={{ fontSize: 'larger' }} />} />
      ]}
    >
      {/* Top section with avatar & name */}
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <Avatar size={80} src={avatarUrl} />
        <h3 style={{ margin: '0.5rem 0', fontWeight: 600 }}>{name}</h3>
        <Text style={{ color: '#FFF', fontSize: '0.9rem' }}>
          {company?.name || 'No Company'}
        </Text>
      </div>

      {/* Info section with icons */}
      <Space direction="vertical" size="small" style={{ width: '100%', height: '110px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <UserOutlined style={{ color: '#FFF' }} />
          <Text style={{ fontWeight: 600 }}>{username}</Text>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <PhoneFilled style={{ color: '#FFF' }} />
          <Text style={{ fontWeight: 600 }}>{phone}</Text>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <MailFilled style={{ color: '#FFF' }} />
          <Text copyable style={{ fontWeight: 600 }}>{email}</Text>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <HomeFilled style={{ color: '#FFF' }} />
          <Text style={{ fontWeight: 600 }}>{userAddress}</Text>
        </div>
      </Space>
    </Card>
  );
};

export default UserCardAntd;
