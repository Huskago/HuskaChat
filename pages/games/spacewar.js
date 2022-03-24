import React, { useEffect, useContext } from "react";

import { Context } from '../context';

import { useRouter } from 'next/router';

export default function SpaceWar() {

  const router = useRouter()

  useEffect(() => {
    document.title = "HuskaChat | SpaceWar"
  });

  return (
    <div className="background">
      <iframe src="https://scratch.mit.edu/projects/663965051/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
    </div>
  )
}