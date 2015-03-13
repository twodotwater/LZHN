function [ data ] = loadfiles( filepath, suffix )
%% [ data ] = LOADFILES( filepath, suffix ) 导入文件夹下的文件到cell中
% filepath：文件夹路径
% suffix：文件后缀
% data：返回的cell
%
dirs = dir(fullfile(filepath,strcat('*.',suffix)));
cells = struct2cell(dirs);
ll = length(cells(1,:));
for i = 1:ll
    path = strcat(filepath,cells(1,i))
    data{i} =load(char(path));
end
end

