"use client"
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import ProtectedRoute from '../../components/ProtectedRoute';
import { getUsersData } from '@/app/api/userData';
import '../../styles/cardGrid.css'
import UserCard from '@/app/components/UserCard';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const usersData = getUsersData();
    setLoading(true)
    usersData
      .then((response) => {
        console.log(response)
        setData(response)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, []);

  return (
    <ProtectedRoute>
      <Layout>
        <div style={{ height: '100svh',padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1 style={{ textAlign: 'center' }}>Welcome to Deshboard</h1>
            <UserCard />
          </div>
          {loading && <p>Loading...</p>}
          {data && (
            <div className="card-grid">
              {data.map((item, index) => (
                <div key={index} className="card">
                  <h3>{item.username}</h3>
                </div>
              ))}
            </div>
          )}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </Layout>
    </ProtectedRoute>
  );
};

export default Dashboard;
