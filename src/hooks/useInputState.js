import React, { useState } from 'react';

export default initialVal => {
  const [value, setChange] = useState(initialVal);
  const handleChange = e => {
    setValue(e.target.value);
  }
}
