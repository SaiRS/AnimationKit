// flow
//

let XXEventType = {
  // focus event
  FocusType: 'focusType',
  BlurType: 'blur',

  // Keyboard Events
  KeyDownType: 'keydown',
  KeyPressType: 'keypress',
  KeyUpType: 'keyup',

  // Mouse Events
  MouseEnterType: 'mouseenter',
  MouseOverType: 'mouseover',
  MouseMoveType: 'mousemove',
  MouseDownType: 'mousedown',
  MouseUpType: 'mouseup',
  MouseClickType: 'click',
  MouseDoubleClickType: 'dblclick',
  WheelType: 'wheel',
  MouseLeaveType: 'mouseleave',
  MouseOutType: 'mouseout',
  SelectType: 'select',

  // Drag & Drop Events
  DragStartType: 'dragstart',
  DragType: 'drag',
  DragEndType: 'dragend',
  DragEnterType: 'dragenter',
  DragOverType: 'dragover',
  DragLeaveType: 'dragleave',
  DropType: 'drop',
};

export default XXEventType;
export {
  XXEventType,
};
