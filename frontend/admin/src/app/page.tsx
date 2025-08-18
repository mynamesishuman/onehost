"use client";

import React, { useState, useEffect } from 'react';
import {
    Server,
    Cpu,
    HardDrive,
    Activity,
    Power,
    PowerOff,
    RotateCcw,
    AlertTriangle,
    CheckCircle,
    Clock,
    Monitor,
    Settings,
    Plus,
    Search,
    Filter
} from 'lucide-react';

interface ServerType {
    id: number;
    name: string;
    ip: string;
    status: string;
    cpu: number;
    memory: number;
    disk: number;
    uptime: string;
    location: string;
    os: string;
}

const ServerManagementPanel = () => {
    const [servers, setServers] = useState<ServerType[]>([
        {
            id: 1,
            name: 'Web Server 01',
            ip: '192.168.1.100',
            status: 'online',
            cpu: 45,
            memory: 68,
            disk: 32,
            uptime: '15д 8ч 32м',
            location: 'Москва',
            os: 'Ubuntu 22.04'
        },
        {
            id: 2,
            name: 'Database Server',
            ip: '192.168.1.101',
            status: 'online',
            cpu: 78,
            memory: 82,
            disk: 67,
            uptime: '23д 14ч 5м',
            location: 'Санкт-Петербург',
            os: 'CentOS 8'
        },
        {
            id: 3,
            name: 'API Server 01',
            ip: '192.168.1.102',
            status: 'offline',
            cpu: 0,
            memory: 0,
            disk: 45,
            uptime: '0м',
            location: 'Новосибирск',
            os: 'Ubuntu 20.04'
        },
        {
            id: 4,
            name: 'Cache Server',
            ip: '192.168.1.103',
            status: 'warning',
            cpu: 92,
            memory: 95,
            disk: 88,
            uptime: '7д 3ч 45м',
            location: 'Екатеринбург',
            os: 'RedHat 9'
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [selectedServer, setSelectedServer] = useState<ServerType | undefined>(undefined);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'online': return 'text-green-500 bg-green-100';
            case 'offline': return 'text-red-500 bg-red-100';
            case 'warning': return 'text-yellow-500 bg-yellow-100';
            default: return 'text-gray-500 bg-gray-100';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'online': return <CheckCircle className="w-4 h-4" />;
            case 'offline': return <PowerOff className="w-4 h-4" />;
            case 'warning': return <AlertTriangle className="w-4 h-4" />;
            default: return <Clock className="w-4 h-4" />;
        }
    };

    const getUtilizationColor = (value: number) => {
        if (value >= 90) return 'bg-red-500';
        if (value >= 70) return 'bg-yellow-500';
        return 'bg-green-500';
    };

    const handleServerAction = (serverId: number, action: string) => {
        setServers(prev => prev.map(server => {
            if (server.id === serverId) {
                switch (action) {
                    case 'start':
                        return { ...server, status: 'online' };
                    case 'stop':
                        return { ...server, status: 'offline', cpu: 0, memory: 0 };
                    case 'restart':
                        return { ...server, status: 'online' };
                    default:
                        return server;
                }
            }
            return server;
        }));
    };

    const filteredServers = servers.filter(server => {
        const matchesSearch = server.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            server.ip.includes(searchTerm);
        const matchesStatus = statusFilter === 'all' || server.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const stats = {
        total: servers.length,
        online: servers.filter(s => s.status === 'online').length,
        offline: servers.filter(s => s.status === 'offline').length,
        warning: servers.filter(s => s.status === 'warning').length
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center">
                            <Server className="w-8 h-8 text-blue-600 mr-3" />
                            <h1 className="text-2xl font-bold text-gray-900">Панель управления серверами</h1>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors">
                            <Plus className="w-4 h-4 mr-2" />
                            Добавить сервер
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <Server className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Всего серверов</p>
                                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <CheckCircle className="w-6 h-6 text-green-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Онлайн</p>
                                <p className="text-2xl font-bold text-green-600">{stats.online}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="p-2 bg-red-100 rounded-lg">
                                <PowerOff className="w-6 h-6 text-red-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Офлайн</p>
                                <p className="text-2xl font-bold text-red-600">{stats.offline}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="p-2 bg-yellow-100 rounded-lg">
                                <AlertTriangle className="w-6 h-6 text-yellow-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Предупреждения</p>
                                <p className="text-2xl font-bold text-yellow-600">{stats.warning}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters and Search */}
                <div className="bg-white rounded-lg shadow mb-6">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <input
                                        type="text"
                                        placeholder="Поиск по имени или IP..."
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Filter className="w-4 h-4 text-gray-400" />
                                <select
                                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                >
                                    <option value="all">Все статусы</option>
                                    <option value="online">Онлайн</option>
                                    <option value="offline">Офлайн</option>
                                    <option value="warning">Предупреждения</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Server List */}
                    <div className="divide-y divide-gray-200">
                        {filteredServers.map((server) => (
                            <div key={server.id} className="p-6 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                                <Monitor className="w-6 h-6 text-gray-600" />
                                            </div>
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center space-x-2">
                                                <h3 className="text-lg font-medium text-gray-900 truncate">
                                                    {server.name}
                                                </h3>
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center ${getStatusColor(server.status)}`}>
                          {getStatusIcon(server.status)}
                                                    <span className="ml-1 capitalize">{server.status}</span>
                        </span>
                                            </div>
                                            <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                                                <span>{server.ip}</span>
                                                <span>{server.location}</span>
                                                <span>{server.os}</span>
                                                <span>Uptime: {server.uptime}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-6">
                                        {/* Resource Usage */}
                                        <div className="flex space-x-4">
                                            <div className="text-center">
                                                <div className="flex items-center space-x-1 mb-1">
                                                    <Cpu className="w-3 h-3 text-gray-400" />
                                                    <span className="text-xs text-gray-500">CPU</span>
                                                </div>
                                                <div className="w-16 bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className={`h-2 rounded-full ${getUtilizationColor(server.cpu)}`}
                                                        style={{ width: `${server.cpu}%` }}
                                                    ></div>
                                                </div>
                                                <span className="text-xs text-gray-600 mt-1 block">{server.cpu}%</span>
                                            </div>

                                            <div className="text-center">
                                                <div className="flex items-center space-x-1 mb-1">
                                                    <Activity className="w-3 h-3 text-gray-400" />
                                                    <span className="text-xs text-gray-500">RAM</span>
                                                </div>
                                                <div className="w-16 bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className={`h-2 rounded-full ${getUtilizationColor(server.memory)}`}
                                                        style={{ width: `${server.memory}%` }}
                                                    ></div>
                                                </div>
                                                <span className="text-xs text-gray-600 mt-1 block">{server.memory}%</span>
                                            </div>

                                            <div className="text-center">
                                                <div className="flex items-center space-x-1 mb-1">
                                                    <HardDrive className="w-3 h-3 text-gray-400" />
                                                    <span className="text-xs text-gray-500">Диск</span>
                                                </div>
                                                <div className="w-16 bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className={`h-2 rounded-full ${getUtilizationColor(server.disk)}`}
                                                        style={{ width: `${server.disk}%` }}
                                                    ></div>
                                                </div>
                                                <span className="text-xs text-gray-600 mt-1 block">{server.disk}%</span>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => handleServerAction(server.id, 'start')}
                                                disabled={server.status === 'online'}
                                                className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                                title="Запустить"
                                            >
                                                <Power className="w-4 h-4" />
                                            </button>

                                            <button
                                                onClick={() => handleServerAction(server.id, 'stop')}
                                                disabled={server.status === 'offline'}
                                                className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                                title="Остановить"
                                            >
                                                <PowerOff className="w-4 h-4" />
                                            </button>

                                            <button
                                                onClick={() => handleServerAction(server.id, 'restart')}
                                                disabled={server.status === 'offline'}
                                                className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                                title="Перезагрузить"
                                            >
                                                <RotateCcw className="w-4 h-4" />
                                            </button>

                                            <button
                                                onClick={() => setSelectedServer(server)}
                                                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                                                title="Настройки"
                                            >
                                                <Settings className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Server Details Modal */}
                {selectedServer && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                            <div className="p-6 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-bold text-gray-900">
                                        Детали сервера: {selectedServer.name}
                                    </h2>
                                    <button
                                        onClick={() => setSelectedServer(undefined)}
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-4">Основная информация</h3>
                                        <div className="space-y-3">
                                            <div>
                                                <label className="text-sm font-medium text-gray-500">Имя сервера</label>
                                                <p className="text-gray-900">{selectedServer.name}</p>
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium text-gray-500">IP адрес</label>
                                                <p className="text-gray-900">{selectedServer.ip}</p>
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium text-gray-500">Операционная система</label>
                                                <p className="text-gray-900">{selectedServer.os}</p>
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium text-gray-500">Локация</label>
                                                <p className="text-gray-900">{selectedServer.location}</p>
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium text-gray-500">Время работы</label>
                                                <p className="text-gray-900">{selectedServer.uptime}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-4">Использование ресурсов</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-sm font-medium text-gray-700">Процессор</span>
                                                    <span className="text-sm text-gray-600">{selectedServer.cpu}%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-3">
                                                    <div
                                                        className={`h-3 rounded-full ${getUtilizationColor(selectedServer.cpu)}`}
                                                        style={{ width: `${selectedServer.cpu}%` }}
                                                    ></div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-sm font-medium text-gray-700">Оперативная память</span>
                                                    <span className="text-sm text-gray-600">{selectedServer.memory}%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-3">
                                                    <div
                                                        className={`h-3 rounded-full ${getUtilizationColor(selectedServer.memory)}`}
                                                        style={{ width: `${selectedServer.memory}%` }}
                                                    ></div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-sm font-medium text-gray-700">Диск</span>
                                                    <span className="text-sm text-gray-600">{selectedServer.disk}%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-3">
                                                    <div
                                                        className={`h-3 rounded-full ${getUtilizationColor(selectedServer.disk)}`}
                                                        style={{ width: `${selectedServer.disk}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <div className="flex space-x-3">
                                        <button
                                            onClick={() => {
                                                handleServerAction(selectedServer.id, 'start');
                                                setSelectedServer(undefined);
                                            }}
                                            disabled={selectedServer.status === 'online'}
                                            className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <Power className="w-4 h-4 mr-2" />
                                            Запустить
                                        </button>

                                        <button
                                            onClick={() => {
                                                handleServerAction(selectedServer.id, 'restart');
                                                setSelectedServer(undefined);
                                            }}
                                            disabled={selectedServer.status === 'offline'}
                                            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <RotateCcw className="w-4 h-4 mr-2" />
                                            Перезагрузить
                                        </button>

                                        <button
                                            onClick={() => {
                                                handleServerAction(selectedServer.id, 'stop');
                                                setSelectedServer(undefined);
                                            }}
                                            disabled={selectedServer.status === 'offline'}
                                            className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <PowerOff className="w-4 h-4 mr-2" />
                                            Остановить
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServerManagementPanel;