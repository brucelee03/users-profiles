import React, { useEffect, useState } from 'react';
import { Row, Col, message, Spin, Input, Select, Space } from 'antd';
import 'antd/dist/reset.css';
import UserCardAntd from './components/UserCardAntd';
import EditUserModal from './components/EditUserModal';
import './App.css';

const { Search } = Input;
const { Option } = Select;

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // modal / edit state
  const [editingUser, setEditingUser] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // likes state (global)
  const [likes, setLikes] = useState({});

  // search & sort
  const [searchText, setSearchText] = useState('');
  const [sortBy, setSortBy] = useState('name-asc');

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);

        // initialize likes state
        const initialLikes = {};
        data.forEach(user => (initialLikes[user.id] = false));
        setLikes(initialLikes);
      } catch (err) {
        console.error(err);
        message.error('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const toggleLike = (id) => {
    setLikes(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const openEdit = (user) => {
    setEditingUser(user);
    setModalVisible(true);
  };

  const handleSave = (updatedUser) => {
    setUsers(prev => prev.map(u => (u.id === updatedUser.id ? updatedUser : u)));
    message.success('User updated');
    setModalVisible(false);
    setEditingUser(null);
  };

  const handleDelete = (id) => {
    setUsers(prev => prev.filter(u => u.id !== id));
    message.info('User deleted (local)');
  };

  // search & sort derived data
  const normalizedSearch = searchText.trim().toLowerCase();
  const displayedUsers = users
    .filter(u => {
      if (!normalizedSearch) return true;
      return (
        u.name.toLowerCase().includes(normalizedSearch) ||
        u.username.toLowerCase().includes(normalizedSearch) ||
        u.email.toLowerCase().includes(normalizedSearch) ||
        (u.company?.name || '').toLowerCase().includes(normalizedSearch)
      );
    })
    .sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      if (sortBy === 'company-asc') return (a.company?.name || '').localeCompare(b.company?.name || '');
      if (sortBy === 'company-desc') return (b.company?.name || '').localeCompare(a.company?.name || '');
      return 0;
    });

  return (
    <div id='app' className="container-fluid p-5 h-100">
      <h1 id='main-heading' className="mb-4 text-center">User Management Portal</h1>

      <Space
        direction="horizontal"
        size="middle"
        style={{ marginBottom: 16, width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Search
          placeholder="Search by name, username, email or company"
          onSearch={(val) => setSearchText(val)}
          onChange={(e) => setSearchText(e.target.value)}
          allowClear
          style={{ minWidth: 270, maxWidth: 360 }}
        />

        <Select
          value={sortBy}
          onChange={(val) => setSortBy(val)}
          style={{minWidth: 140, maxWidth: 180, color: '#a39d9d', fontFamily: 'monospace', fontWeight: 600 }}>
          <Option value="name-asc">Name — A → Z</Option>
          <Option value="name-desc">Name — Z → A</Option>
          <Option value="company-asc">Company — A → Z</Option>
          <Option value="company-desc">Company — Z → A</Option>
        </Select>
      </Space>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 40 }}>
          <Spin size="large" />
        </div>
      ) : (
        <Row gutter={[16, 16]}>
          {displayedUsers.map(user => (
            <Col key={user.id} xs={24} sm={12} md={8} lg={6}>
              <UserCardAntd
                user={user}
                isLiked={likes[user.id]}
                onLike={toggleLike}
                onEdit={openEdit}
                onDelete={handleDelete}
              />
            </Col>
          ))}
        </Row>
      )}

      <EditUserModal
        visible={modalVisible}
        user={editingUser}
        onCancel={() => setModalVisible(false)}
        onSave={handleSave}
      />
    </div>
  );
}

export default App;
