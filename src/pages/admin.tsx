// pages/admin.tsx
export default function Admin() {
  const mockCredits = 100;
  const mockEntries = 42;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <table className="table-auto border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">Metric</th>
            <th className="border px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Credits</td>
            <td className="border px-4 py-2">{mockCredits}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Raffle Entries</td>
            <td className="border px-4 py-2">{mockEntries}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
