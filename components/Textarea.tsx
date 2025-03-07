import { useState } from 'react';

export function Textarea() {
  const [v, setV] = useState(`Long value \n\n long value \n\n long value \n\n long value \n\n long value \n\n`);

  return (
    <textarea
      value={v}
      onChange={(evt) => setV(evt.target.value)}
      className="mt-[300px] h-[100px] w-[200px]"
    ></textarea>
  );
}
