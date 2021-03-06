import "./List.css";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

export function ReorderIcon({ dragControls }) {
  return (
    <div className="dragIndicator" onPan={(event) => dragControls.start(event)} onPointerDown={(event) => dragControls.start(event)}>
      <DragIndicatorIcon  />
    </div>
  );
}
