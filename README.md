# Dragandrop

    data-child-box -> It contains the actual data shown in the box (Restaurant name or Manager name). It is also useful for alphabetic order or both (not as unique keys)

    data-child-header -> It contains the ID of the manager (Unique field)
    data-child-code -> It contains the ID of the restaurant (Unique field)


```
<div class="sub-hierarchy">
  <div class="patches-header">
    <select class="chooseGrandParent"> 
      <option value="Op1">Option 1</option>
      <option value="Op2" selected="selected">Option 2</option>
      <option value="Op3">Option 3</option>  
    </select>
            
    <button class="addNewPatchContainer">+</button>
    <button class="removeEmptyPatches">-</button>
  </div>

  <div class="patches-container" data-grandparent="">
    <div class="dataparentbox" ondrop="drop(event)" ondragover="overDrop(event)" ondragleave="leaveDrop(event)">
      <div data-child-box="MANAGER1" data-child-header="R1" class="itemHeading" draggable="true" ondragstart="dragStart(event)" ondragend="dragEnd(event)" ondrop="drop(event)" ondragover="overDrop(event)" ondragleave="leaveDrop(event)"></div>
      
      <div data-child-box="AR1" data-child-code="R1" draggable="true" ondragstart="dragStart(event)" ondragend="dragEnd(event)" ondrop="drop(event)" ondragover="overDrop(event)" ondragleave="leaveDrop(event)"></div>
      <div data-child-box="BR2" data-child-code="R2" draggable="true" ondragstart="dragStart(event)" ondragend="dragEnd(event)" ondrop="drop(event)" ondragover="overDrop(event)" ondragleave="leaveDrop(event)"></div>
      <div data-child-box="CR3" data-child-code="R3" draggable="true" ondragstart="dragStart(event)" ondragend="dragEnd(event)" ondrop="drop(event)" ondragover="overDrop(event)" ondragleave="leaveDrop(event)"></div>
    </div>

    <div class="dataparentbox" ondrop="drop(event)" ondragover="overDrop(event)" ondragleave="leaveDrop(event)">
      <div data-child-box="MANAGER2" data-child-header="M2" class="itemHeading" draggable="true" ondragstart="dragStart(event)" ondragend="dragEnd(event)" ondrop="drop(event)" ondragover="overDrop(event)" ondragleave="leaveDrop(event)"></div>

      <div data-child-box="DR4" data-child-code="R4" draggable="true" ondragstart="dragStart(event)" ondragend="dragEnd(event)" ondrop="drop(event)" ondragover="overDrop(event)" ondragleave="leaveDrop(event)"></div>
      <div data-child-box="ER5" data-child-code="R5" draggable="true" ondragstart="dragStart(event)" ondragend="dragEnd(event)" ondrop="drop(event)" ondragover="overDrop(event)" ondragleave="leaveDrop(event)"></div>
    </div>

    <div class="dataparentbox" ondrop="drop(event)" ondragover="overDrop(event)" ondragleave="leaveDrop(event)">
      <div data-child-box="MANAGER3" data-child-header="M3" class="itemHeading" draggable="true" ondragstart="dragStart(event)" ondragend="dragEnd(event)" ondrop="drop(event)" ondragover="overDrop(event)" ondragleave="leaveDrop(event)"></div>
      
      <div data-child-box="FR6" data-child-code="R6" draggable="true" ondragstart="dragStart(event)" ondragend="dragEnd(event)" ondrop="drop(event)" ondragover="overDrop(event)" ondragleave="leaveDrop(event)"></div>
    </div>
  </div>
</div>


 




