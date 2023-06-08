import { createContext, useEffect, useState } from 'react';
import { IFile } from '../@types/global';

export const CurrentFolderContext = createContext<any>(null);
export const MessageAPIContext = createContext<any>(null);
