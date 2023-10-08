#From NETCDF to list
import netCDF4 as nc
import numpy as np
import numpy.ma as ma
import pandas as pd
import matplotlib.pyplot as plt
import itertools
from matplotlib.colors import LinearSegmentedColormap
import sys
from scipy.stats import pearsonr
from scipy.stats import spearmanr
from scipy.stats import kendalltau

def Netcdf2list():
    
# Lee la entrada desde stdin

# Hacer algo con la entrada
    fnp = sys.stdin.read()
    fn = fnp.rstrip(' \n')
    print("Input recibido:", fn)
    # fn=input("Ingrese ruta")
    corr_array=[]
    titles=[]

    #fn = 'C:/Users/cadd/OneDrive - INSTITUTO TECNOLOGICO METROPOLITANO - ITM/Documents/GitHub/HACKATHON-2023/server/database/data/netc_probe.nc'
    ds = nc.Dataset(fn)
    
    variables=ds.variables

    dimensiones=ds.dimensions
    varlist=list(variables)
    print(varlist)
    titles.append(varlist)
    print(titles)
    titles=np.array(titles)
    print(titles.shape)

    for i in range(len(varlist)):
        corr=ds[varlist[i]][:]
        print(corr)
        print(type(corr))
        corr_array.append(corr)
       
    print("----")
    data=ma.getdata(corr_array)
    print(ma.getdata(corr_array))
    transpuesta=np.array(data).T
    print("--------Traspuesta----------")
    print(transpuesta)
    print(transpuesta.shape)
    final_data=np.vstack((titles,transpuesta))
    dataframe=pd.DataFrame(transpuesta,columns=varlist)
    
    print(dataframe)

    nombre_archivo = "lista.txt"

    # Guarda la lista en el archivo de texto
    np.savetxt(nombre_archivo, final_data, fmt="%s", delimiter=" ")

    #print(f"La lista se ha guardado en '{nombre_archivo}'.")
    return dataframe

print('-------------------------------')
Netcdf2list()



# Function to generate scatter plots for all column combinations
def plot(df):
  ''' Receive a dataframe, with no column index and the first row are the parameter names.'''
  # Generate all possible combinations of columns
  all_possible_combinations = list(itertools.combinations(np.arange(df.shape[1]), 2))

  # Iterate through combinations and generate graphs
  for pair in all_possible_combinations:
    corr_pearson, _ = pearsonr(df[df.columns[pair[0]]], df[df.columns[pair[1]]])
    corr_spearman, _ = spearmanr(df[df.columns[pair[0]]], df[df.columns[pair[1]]])
    corr_kendall, _ = kendalltau(df[df.columns[pair[0]]], df[df.columns[pair[1]]])
    plt.figure()
    plt.title(f"{df.columns[pair[0]]} vs {df.columns[pair[1]]}" +
              "\n\n Correlacion de Pearson: " + str(corr_pearson) +
              "\n Correlacion de Spearman: " + str(corr_spearman) +
              "\n Correlacion de Kendall: " + str(corr_kendall))
    plt.scatter(df[df.columns[pair[0]]], df[df.columns[pair[1]]])
    plt.xlabel(f'{df.columns[pair[0]]}')
    plt.ylabel(f'{df.columns[pair[1]]}')
    plt.savefig(f"{df.columns[pair[0]]} vs {df.columns[pair[1]]}")
    plt.close()
    # plt.show()

angie = pd.read_csv("lista.txt", sep=" ", index_col=0)

# plot(angie)


# def plot(df):
#   allPosible = list(itertools.combinations(np.arange(df.shape[1]),2))
#   for pair in allPosible[0:10]:
#     plt.figure()
#     plt.title(f"{df.columns[pair[0]]} vs {df.columns[pair[1]]}")
#     plt.scatter(df[df.columns[pair[0]]],df[df.columns[pair[1]]])
#     plt.xlabel(f'{df.columns[pair[0]]}')
#     plt.ylabel(f'{df.columns[pair[1]]}')
#     plt.show

# # plot(Netcdf2list())


# route='list.txt'
# graphics=0

# #Titles reading
# def autograph():
#     titles=[]
#     with open(route, 'r') as archivo:
#         titles = archivo.readline().strip().split()
#         print(titles)

#     #Obtain all possible combinations
#     data = np.loadtxt(route, skiprows=1)
#     cols=data.shape[1]
#     rand_i=np.arange(cols)
#     print(rand_i)
#     combinations=list(itertools.combinations(rand_i,2))
#     print(combinations)
#     col_secindex=len(combinations)

#     for combination in combinations:
#         row=combination[0]
#         col=combination[1]
#         global down_menu
#         down_menu=[]
#         x,y=np.loadtxt(route,skiprows=1,usecols=[row,col],unpack=True)
#         plt.title(f"{titles[row]} vs {titles[col]} ($0 \leq E \leq 1x10^{19}$ eV)",fontname='Times New Roman')
#         down_menu=[titles[row],titles[col]]
#         print(down_menu)
#         plt.xlabel(f'{titles[row]}',fontname='Times New Roman')
#         plt.ylabel(f'{titles[col]}',fontname='Times New Roman')
#         #Seleccion de tipo de grafico 
#         if(graphics==0):
#             plt.scatter(x,y)     
#         elif(graphics==1):
#             cmap = LinearSegmentedColormap.from_list('custom_cmap', [(0, 'purple'), (1, 'red')])
#             plt.hist2d(x,y, bins=100, cmap=cmap)

#         plt.savefig(f"{titles[col]} vs {titles[row]}.jpg", bbox_inches='tight') 
#         plt.close()