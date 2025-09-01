  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros.htm) →  [Screen and Screen Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros_screen.htm) →  [Screen Elements - Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenscreen_elements_abexas.htm) → 

Dynpros, CFW Events

This example shows how CFW events are handled.

Source Code

REPORT demo\_custom\_control .
\* Declarations \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
CLASS event\_handler DEFINITION.
  PUBLIC SECTION.
    METHODS: handle\_f1 FOR EVENT f1 OF cl\_gui\_textedit
             IMPORTING sender,
             handle\_f4 FOR EVENT f4 OF cl\_gui\_textedit
             IMPORTING sender.
ENDCLASS.
DATA: ok\_code LIKE sy-ucomm,
      save\_ok LIKE sy-ucomm.
DATA: init,
      container TYPE REF TO cl\_gui\_custom\_container,
      editor    TYPE REF TO cl\_gui\_textedit.
DATA: event\_tab TYPE cntl\_simple\_events,
      event     TYPE cntl\_simple\_event.
DATA: line(256) TYPE c,
      text\_tab LIKE STANDARD TABLE OF line,
      field LIKE line.
DATA handle TYPE REF TO event\_handler.
\* Reporting Events \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
START-OF-SELECTION.
  line = 'First line in TextEditControl'.
  APPEND line TO text\_tab.
  line = '--------------------------------------------------'.
  APPEND line TO text\_tab.
  line = '...'.
  APPEND line TO text\_tab.
  CALL SCREEN 100.
\* Dialog Modules \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
MODULE status\_0100 OUTPUT.
  SET PF-STATUS 'SCREEN\_100'.
  IF init is initial.
    init = 'X'.
    CREATE OBJECT: container EXPORTING container\_name = 'TEXTEDIT',
                   editor    EXPORTING parent = container,
                   handle.
    event-eventid = cl\_gui\_textedit=>event\_f1.
    event-appl\_event = ' '.                     "system event
    APPEND event TO event\_tab.
    event-eventid = cl\_gui\_textedit=>event\_f4.
    event-appl\_event = 'X'.                     "application event
    APPEND event TO event\_tab.
    editor->set\_registered\_events(
                 EXPORTING events = event\_tab ).
    SET HANDLER handle->handle\_f1
                handle->handle\_f4 FOR editor.
  ENDIF.
  editor->set\_text\_as\_stream( EXPORTING text = text\_tab ).
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE user\_command\_0100 INPUT.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  CASE save\_ok.
    WHEN 'INSERT'.
      editor->get\_text\_as\_stream( IMPORTING text = text\_tab ).
    WHEN 'F1'.
      MESSAGE i888(sabapdemos) WITH text-001.
    WHEN OTHERS.
      MESSAGE i888(sabapdemos) WITH text-002.
      cl\_gui\_cfw=>dispatch( ).                "for application events
      MESSAGE i888(sabapdemos) WITH text-003.
  ENDCASE.
  SET SCREEN 100.
ENDMODULE.
\* Class Implementations \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
CLASS event\_handler IMPLEMENTATION.
  METHOD handle\_f1.
    DATA row TYPE i.
    MESSAGE i888(sabapdemos) WITH text-004.
    sender->get\_selection\_pos(
         IMPORTING from\_line = row ).
    sender->get\_line\_text(
         EXPORTING line\_number = row
         IMPORTING text = field ).
    cl\_gui\_cfw=>set\_new\_ok\_code(                "raise PAI for
         EXPORTING new\_code = 'F1' ).           "system events
    cl\_gui\_cfw=>flush( ).
  ENDMETHOD.
  METHOD handle\_f4.
    DATA row TYPE i.
    MESSAGE i888(sabapdemos) WITH text-005.
    sender->get\_selection\_pos(
         IMPORTING from\_line = row ).
    sender->get\_line\_text(
         EXPORTING line\_number = row
         IMPORTING text = field ).
    cl\_gui\_cfw=>flush( ).
  ENDMETHOD.
ENDCLASS.

Description

Dynpro 100 contains an output field field and a custom control called textedit. The flow logic of dynpro 100 is:

PROCESS BEFORE OUTPUT.
  MODULE status\_0100.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE user\_command\_0100.

In the GUI status SCREEN\_100, the function codes BACK, EXIT, and CANCEL are created with type E and the function code INSERT is created without any specific type.

The program contains a local class called event\_handler with event handlers for the events F1 and F4 of global class CL\_GUI\_TEXTEDIT. When the program is executed, dynpro 100 instantiates objects of the classes CL\_GUI\_CUSTOM\_CONTAINER, CL\_GUI\_TEXTEDIT, and event\_handler after PBO.

The container control is associated with the custom control on the dynpro, and the instance of the textedit control is associated with this container. The events F1 and F4 of the textedit control are registered using the method SET\_REGISTERED\_EVENTS to ensure that they are passed to the current AS Instance. F1 is defined as a system event and F4 as an application event. The event handling methods of the instance handle of the class event\_handler are registered as handlers for the events.

Before the dynpro is sent, the textedit control is filled with the contents of table text\_tab. As long as the dynpro is displayed, the user is allowed to edit the text. When INSERT is selected, PAI is raised, and the current text from the textedit control is passed to the table text\_tab.

If F1 is selected on the textedit control, the method handle\_f1 is executed. This assigns the contents of the line to the field field: Calling the method SET\_NEW\_OK\_CODE raises PAI. This is the only way to ensure that the PBO is processed and the contents of field are sent to the dynpro.

If F4 is selected on the textedit control, PAI is raised. The method DISPATCH is called and raises the method handle\_f4. This assigns the contents of the line to the field field: Since the system then automatically returns to PAI processing, PBO is also processed and the field contents are transported.

In either case, regardless of whether the user chooses F1 or F4, the contents of the textedit control are not passed to the internal table text\_tab. Consequently, the textedit control is overwritten with the previous content of text\_tab after PBO.