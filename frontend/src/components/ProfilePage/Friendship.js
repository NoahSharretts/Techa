import React from "react";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"


function Friendship() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector(state => state.session.user)
 
  useEffect(() => {

  }, [])

  return (
    <div>
      <button>Follow</button>
    </div>
  )
}

export default Friendship
