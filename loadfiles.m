function [ data ] = loadfiles( filepath, suffix )
%% [ data ] = LOADFILES( filepath, suffix ) �����ļ����µ��ļ���cell��
% filepath���ļ���·��
% suffix���ļ���׺
% data�����ص�cell
%
dirs = dir(fullfile(filepath,strcat('*.',suffix)));
cells = struct2cell(dirs);
ll = length(cells(1,:));
for i = 1:ll
    path = strcat(filepath,cells(1,i))
    data{i} =load(char(path));
end
end

