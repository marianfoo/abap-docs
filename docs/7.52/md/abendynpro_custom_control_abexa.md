  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Screen and Screen Elements](javascript:call_link\('abenabap_dynpros_screen.htm'\)) →  [Screen Elements - Examples](javascript:call_link\('abenscreen_elements_abexas.htm'\)) → 

Screens, CFW Events

The example shows how to handle CFW events.

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

Screen 100 contains an output field field and a custom control called textedit. The flow logic of screen 100 is as follows:

PROCESS BEFORE OUTPUT.
  MODULE status\_0100.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE user\_command\_0100.

In the GUI status SCREEN\_100, the function codes BACK, EXIT, and CANCEL have been created with type E and the function code INSERT has been created without any specific type.

The program contains a local class called event\_handler with event handlers for the events F1 and F4 of global class CL\_GUI\_TEXTEDIT. When the program is executed, screen 100 instantiates objects of the classes CL\_GUI\_CUSTOM\_CONTAINER, CL\_GUI\_TEXTEDIT, and event\_handler at the PBO event.

The container control is linked to the custom control on the screen, and the instance of the textedit control is linked to this container. Since the events F1 and F4 of the textedit control are to be passed to the application server, the SET\_REGISTERED\_EVENTS method is used to register them, defining F1 as a system event and F4 as an application event. The event handling methods of the instance handle of the class event\_handler are registered as handlers for the events.

Before the screen is sent, the textedit control is filled with the contents of table text\_tab. As long as the screen is displyed, the user is allowed to edit the text. When INSERT is chosen, the PAI event is triggered, and the current text from the textedit control is copied into table text\_tab.

If the user chooses the F1 key on the textedit control, the system immediately executes the handle\_f1 method, assigning the row contents to the field field. Calling the SET\_NEW\_OK\_CODE method triggers the PAI event. This is the only way to ensure that the PBO event is also processed and the contents of field are passed to the screen.

If the user chooses the F4 key on the textedit control, PAI is triggered. By calling the DISPATCH method, the system executes the handle\_f4 method, assigning the row contents to the field field. Since the system then automatically returns to PAI processing, PBO is also processed and the field contents are transported.

In either case, regardless of whether the user chooses F1 or F4, the contents of the textedit control are not passed to the internal table text\_tab. Consequently, the textedit control is overwritten with the previous contents of text\_tab at the PBO event.