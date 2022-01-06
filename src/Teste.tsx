import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { apiGit } from './services/apiGit';

export function Teste() {
  const [issues, setIssues] = useState<number>(0);
  useEffect(() => {
    apiGit
      .get('/issues')
      .then((response) => {
        setIssues(1);
      })
      .catch((err) => {
        console.log('erro?');
      });
  });

  return <p data-testid="teste">{issues}</p>;
}
