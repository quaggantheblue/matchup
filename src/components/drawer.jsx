export default function Drawer() {
  return (
    <div className="drawer">
      <input type="checkbox" id="my-drawer" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content */}
      </div>
      <div className="drawer-side">
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <li>
            <a>
              X
            </a>
          </li>
          <li>
            <a>
              X
            </a>
          </li>
          <li>
            <a>
              X
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}