# ABAP - Keyword Documentation / ABAP - Programming Language / SAP GUI User Dialogs / General Dynpros / dynpro - Screen Layout and Screen Elements

Included pages: 12


### abenabap_dynpros_screen.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros.htm) → 

dynpro - Screen Layout and Screen Elements

The [screen layout](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_glosry.htm "Glossary Entry") of a [dynpro](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_glosry.htm "Glossary Entry") is created in the [Layout Editor](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlayout_editor_glosry.htm "Glossary Entry") in the [Screen Painter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_painter_glosry.htm "Glossary Entry"). The screen layout of the program DEMO\_DYNPRO contains all possible screen elements. Above the screen layout, the menu bar, standard toolbar, title bar, and the application toolbar can be seen, with the status bar at the bottom.

![Figure](bdoc_screen_elements.gif)

Continue
[dynpro - Examples of Screen Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_elements_abexas.htm)


### abenscreen_elements_abexas.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros.htm) →  [dynpro - Screen Layout and Screen Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_screen.htm) → 

dynpro - Examples of Screen Elements

Continue
![Example](exa.gif "Example") [dynpro - Status Icons](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_status_icons_abexa.htm)
![Example](exa.gif "Example") [dynpro - Context Menus](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_context_menu_abexa.htm)
![Example](exa.gif "Example") [dynpro - CFW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_cfw_abexa.htm)
![Example](exa.gif "Example") [dynpro - CFW Events](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_custom_control_abexa.htm)
![Example](exa.gif "Example") [dynpro - HTML Browser](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhtml_browser_abexa.htm)
![Example](exa.gif "Example") [dynpro - Input in HTML File](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhtml_input_abexa.htm)
![Example](exa.gif "Example") [dynpro - Images in HTML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmime_pictures_abexa.htm)
![Example](exa.gif "Example") [dynpro - HTML from the MIME Repository](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmime_html_abexa.htm)
![Example](exa.gif "Example") [dynpro - Text Output](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentext_output_abexa.htm)


### abendynpro_status_icons_abexa.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros.htm) →  [dynpro - Screen Layout and Screen Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_screen.htm) →  [dynpro - Examples of Screen Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_elements_abexas.htm) → 

dynpro - Status Icons

This example illustrates how status icons are used on dynpros.

Source Code

REPORT demo\_dynpro\_status\_icons.
DATA value TYPE i VALUE 1.
DATA: status\_icon TYPE icons-text,
      icon\_name(20) TYPE c,
      icon\_text(10) TYPE c.
CALL SCREEN 100.
MODULE set\_icon OUTPUT.
  SET PF-STATUS 'SCREEN\_100'.
  CASE value.
    WHEN 1.
      icon\_name = 'ICON\_GREEN\_LIGHT'.
      icon\_text =  text-003.
    WHEN 2.
      icon\_name = 'ICON\_YELLOW\_LIGHT'.
      icon\_text =  text-002.
    WHEN 3.
      icon\_name = 'ICON\_RED\_LIGHT'.
      icon\_text =  text-001.
  ENDCASE.
  CALL FUNCTION 'ICON\_CREATE'
       EXPORTING
            name                  = icon\_name
            text                  = icon\_text
            info                  = 'Status'
            add\_stdinf            = 'X'
       IMPORTING
            result                = status\_icon
       EXCEPTIONS
            icon\_not\_found        = 1
            outputfield\_too\_short = 2
            OTHERS                = 3.
  CASE sy-subrc.
    WHEN 1.
      MESSAGE e888(sabapdemos) WITH text-004.
    WHEN 2.
      MESSAGE e888(sabapdemos) WITH text-005.
    WHEN 3.
      MESSAGE e888(sabapdemos) WITH text-006.
  ENDCASE.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE change.
  CASE value.
    WHEN 1.
      value = 2.
    WHEN 2.
      value = 3.
    WHEN 3.
      value = 1.
  ENDCASE.
ENDMODULE.

Description

The static next dynpro number of dynpro 100 is 100. A status field called status\_icon is created with a visible length of 16 and a defined length of 26. The status icon and the space for the text are represented by placeholders in the Screen Painter. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE set\_icon.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE change.

Depending on the local value field in the program, the dialog module set\_icon passes different values to the function module ICON\_CREATE. The status field status\_icon is filled with the content of the export parameter result of the function module. This displays the corresponding icon including the text and tooltip on the screen. When the user chooses Continue, the content of the field value are changed in the PAI, and consequently a new icon is defined in the PBO event.


### abendynpro_context_menu_abexa.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros.htm) →  [dynpro - Screen Layout and Screen Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_screen.htm) →  [dynpro - Examples of Screen Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_elements_abexas.htm) → 

dynpro - Context Menus

The example illustrates how context menus can be integrated into a program.

Source Code

REPORT demo\_dynpro\_context\_menu.
DATA: field1 TYPE i VALUE 10,
      field2 TYPE p DECIMALS 4.
DATA: prog TYPE sy-repid,
      flag(1) TYPE c VALUE 'X'.
DATA: ok\_code TYPE sy-ucomm,
      save\_ok TYPE sy-ucomm.
prog = sy-repid.
CALL SCREEN 100.
MODULE status\_0100 OUTPUT.
  SET TITLEBAR 'TIT100'.
  IF flag = 'X'.
    SET PF-STATUS 'SCREEN\_100' EXCLUDING 'REVEAL'.
  ELSEIF flag = ' '.
    SET PF-STATUS 'SCREEN\_100' EXCLUDING 'HIDE'.
  ENDIF.
  LOOP AT SCREEN INTO DATA(screen\_wa).
    IF screen\_wa-group1 = 'MOD'.
      IF flag = 'X'.
        screen\_wa-active = '1'.
      ELSEIF flag = ' '.
        screen\_wa-active = '0'.
      ENDIF.
      MODIFY SCREEN FROM screen\_wa.
    ELSEIF screen\_wa-name = 'TEXT\_IN\_FRAME'.
      IF flag = 'X'.
        screen\_wa-active = '0'.
      ELSEIF flag = ' '.
        screen\_wa-active = '1'.
      ENDIF.
      MODIFY SCREEN FROM screen\_wa.
    ENDIF.
  ENDLOOP.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE user\_command\_0100.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  CASE save\_ok.
    WHEN 'HIDE'.
      flag = ' '.
    WHEN 'REVEAL'.
      flag = 'X'.
    WHEN 'SQUARE'.
      field2 = field1 \*\* 2.
    WHEN 'CUBE'.
      field2 = field1 \*\* 3.
    WHEN 'SQUAREROOT'.
      field2 = field1 \*\* ( 1 / 2 ).
    WHEN 'CUBICROOT'.
      field2 = field1 \*\* ( 1 / 3 ).
  ENDCASE.
ENDMODULE.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Callback-Routines:
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
FORM on\_ctmenu\_text USING l\_menu TYPE REF TO cl\_ctmenu.
  l\_menu->load\_gui\_status(
                       EXPORTING program = prog
                                 status  = 'CONTEXT\_MENU\_1'
                                 menu    = l\_menu ).
ENDFORM.
FORM on\_ctmenu\_frame USING l\_menu TYPE REF TO cl\_ctmenu.
  l\_menu->load\_gui\_status(
                      EXPORTING program = prog
                                status  = 'CONTEXT\_MENU\_2'
                                menu    = l\_menu ).
  l\_menu->load\_gui\_status(
                      EXPORTING program = prog
                                status  = 'CONTEXT\_MENU\_1'
                                menu    = l\_menu ).
  l\_menu->set\_default\_function(
                      EXPORTING fcode = 'HIDE' ).
ENDFORM.
FORM on\_ctmenu\_reveal USING l\_menu TYPE REF TO cl\_ctmenu.
  l\_menu->load\_gui\_status(
                      EXPORTING program = prog
                                status  = 'CONTEXT\_MENU\_3'
                                menu    = l\_menu ).
  l\_menu->load\_gui\_status(
                      EXPORTING program = prog
                                status  = 'CONTEXT\_MENU\_1'
                                menu    = l\_menu ).
  l\_menu->set\_default\_function(
                      EXPORTING fcode = 'REVEAL' ).
ENDFORM.
FORM on\_ctmenu\_input USING l\_menu TYPE REF TO cl\_ctmenu.
  DATA calculate\_menu TYPE REF TO cl\_ctmenu.
  CREATE OBJECT calculate\_menu.
  calculate\_menu->add\_function(
                      EXPORTING fcode = 'SQUARE'
                                text  = text-001 ).
  calculate\_menu->add\_function(
                       EXPORTING fcode = 'CUBE'
                                 text  = text-002 ).
  calculate\_menu->add\_function(
                       EXPORTING fcode = 'SQUAREROOT'
                                 text  = text-003 ).
  calculate\_menu->add\_function(
                       EXPORTING fcode = 'CUBICROOT'
                                 text  = text-004 ).
  l\_menu->add\_submenu(
                       EXPORTING menu = calculate\_menu
                                 text = text-005 ).
ENDFORM.

Description

The static next dynpro number of dynpro 100 is 100. The elements TEXT2 and FIELD2 do not have their own context menus. They inherit the context menu FRAME of the frame. The modification group MOD is assigned to them. The dynpro flow logic is:

PROCESS BEFORE OUTPUT.
  MODULE status\_0100.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE user\_command\_0100.

The GUI status SCREEN\_100 is set to PBO statically, in which, depending on the field flag, the function codes HIDE or REVEAL are hidden. The context menus for the screen elements are constructed in the callback routines as follows:

-   TEXT: Loads the static context menu CONTEXT\_MENU\_1 without modification. This context menu has a single line, Cancel.
-   FRAME: Constructs the context menu from the static context menus CONTEXT\_MENU\_2 and CONTEXT\_MENU\_1. This context menu has two lines, Hide Result and Cancel. The line for the function code HIDE is highlighted.
-   REVEAL: Constructs the context menus from the static context menus CONTEXT\_MENU\_3 and CONTEXT\_MENU\_1. This context menu has two lines, Display Result and Cancel. The line of the function code REVEAL is highlighted.
-   INPUT: Constructs the context menu by including the multiline local context menu CALCULATE\_MENU as a submenu. For the latter, a local reference variable with reference to CL\_CTMENU is created, an object is created, and the new function codes SQUARE, CUBE, SQUAREROOT, and CUBICROOT are added. When included in the context menu for INPUT, a text must be specified for the entry, after which the submenu is attached.

When the program is executed and the right mouse button or SHIFT+F10 is pressed, the user sees the context menu TEXT in the first line, the context menu INPUT in the second line, and the context menu FRAME in the third line. The fourth line is hidden after program start. On all other dynpro components, the standard context menu appears with all static function codes and F1 and F4.

When a new dynamic function is selected, calculations are performed with the number in the input field FIELD1 and then passed to FIELD2. When the function Hide Result (HIDE) is selected, the screen is modified dynamically. This makes the fourth line visible and the context menu REVEAL can be used.


### abendynpro_cfw_abexa.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros.htm) →  [dynpro - Screen Layout and Screen Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_screen.htm) →  [dynpro - Examples of Screen Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_elements_abexas.htm) → 

dynpro - CFW

The example illustrates the use of different GUI controls in a dynpro.

Source Code

\*&---------------------------------------------------------------------\*
\*& Report  demo\_cfw                                                    \*
\*&---------------------------------------------------------------------\*
REPORT demo\_cfw.
\*&---------------------------------------------------------------------\*
\*& Global Declarations                                                 \*
\*&---------------------------------------------------------------------\*
\* Class Definitions
CLASS screen\_handler DEFINITION CREATE PRIVATE.
  PUBLIC SECTION.
    CLASS-DATA screen TYPE REF TO screen\_handler.
    CLASS-METHODS create\_screen.
    METHODS constructor.
  PRIVATE SECTION.
    DATA: container\_html  TYPE REF TO cl\_gui\_custom\_container,
          container\_box   TYPE REF TO cl\_gui\_dialogbox\_container,
          picture         TYPE REF TO cl\_gui\_picture,
          tree            TYPE REF TO cl\_gui\_simple\_tree,
          html\_viewer     TYPE REF TO cl\_gui\_html\_viewer,
          list\_viewer     TYPE REF TO cl\_gui\_alv\_grid.
    METHODS: fill\_tree,
             fill\_picture,
             handle\_node\_double\_click
               FOR EVENT node\_double\_click OF cl\_gui\_simple\_tree
               IMPORTING node\_key,
             close\_box
               FOR EVENT close OF cl\_gui\_dialogbox\_container,
             fill\_html IMPORTING i\_carrid TYPE spfli-carrid,
             fill\_list IMPORTING i\_carrid TYPE spfli-carrid
                                 i\_connid TYPE spfli-connid.
ENDCLASS.                    "screen\_handler DEFINITION
\* Class Implementations
CLASS screen\_handler IMPLEMENTATION.
  METHOD create\_screen.
    IF screen IS INITIAL.
      CREATE OBJECT screen.
    ENDIF.
  ENDMETHOD.                    "create\_screen
  METHOD constructor.
    DATA: l\_event\_tab        TYPE cntl\_simple\_events,
          l\_event            LIKE LINE OF l\_event\_tab,
          l\_docking          TYPE REF TO cl\_gui\_docking\_container,
          l\_splitter         TYPE REF TO cl\_gui\_splitter\_container,
          l\_container\_screen TYPE REF TO cl\_gui\_custom\_container,
          l\_container\_top    TYPE REF TO cl\_gui\_container,
          l\_container\_bottom TYPE REF TO cl\_gui\_container.
    CREATE OBJECT container\_html
           EXPORTING container\_name = 'CUSTOM\_CONTROL'.
    CREATE OBJECT l\_docking
           EXPORTING side = cl\_gui\_docking\_container=>dock\_at\_left
                     extension = 135.
    CREATE OBJECT l\_splitter
           EXPORTING parent = l\_docking
                     rows = 2
                     columns = 1.
    l\_splitter->set\_border(
         EXPORTING border = cl\_gui\_cfw=>false ).
    l\_splitter->set\_row\_mode(
         EXPORTING mode = l\_splitter->mode\_absolute ).
    l\_splitter->set\_row\_height(
         EXPORTING id = 1
                   height = 180 ).
    l\_container\_top    =
      l\_splitter->get\_container( row = 1 column = 1 ).
    l\_container\_bottom =
      l\_splitter->get\_container( row = 2 column = 1 ).
    CREATE OBJECT picture
           EXPORTING parent = l\_container\_top.
    CREATE OBJECT tree
           EXPORTING parent = l\_container\_bottom
                     node\_selection\_mode =
                       cl\_gui\_simple\_tree=>node\_sel\_mode\_single.
    l\_event-eventid = cl\_gui\_simple\_tree=>eventid\_node\_double\_click.
    l\_event-appl\_event = ' '.   "system event, does not trigger PAI
    APPEND l\_event TO l\_event\_tab.
    tree->set\_registered\_events(
         EXPORTING events = l\_event\_tab ).
    SET HANDLER me->handle\_node\_double\_click FOR tree.
    me->fill\_picture( ).
    me->fill\_tree( ).
  ENDMETHOD.                    "constructor
  METHOD fill\_picture.
    TYPES pict\_line TYPE x LENGTH 1022.
    DATA l\_mime\_api   TYPE REF TO if\_mr\_api.
    DATA l\_pict\_wa    TYPE xstring.
    DATA l\_pict\_tab   TYPE TABLE OF pict\_line.
    DATA l\_url        TYPE c LENGTH 255.
    l\_mime\_api = cl\_mime\_repository\_api=>get\_api( ).
    l\_mime\_api->get(
      EXPORTING i\_url = '/SAP/PUBLIC/BC/ABAP/mime\_demo/PLANE.GIF'
      IMPORTING e\_content = l\_pict\_wa
      EXCEPTIONS OTHERS = 4 ).
    IF sy-subrc <> 0.
      RETURN.
    ENDIF.
    l\_pict\_tab =
      VALUE #( LET l1 = xstrlen( l\_pict\_wa ) l2 = l1 - 1022 IN
               FOR j = 0 THEN j + 1022  UNTIL j >= l1
                 ( COND #( WHEN j <= l2 THEN
                                l\_pict\_wa+j(1022)
                           ELSE l\_pict\_wa+j ) ) ).
    CALL FUNCTION 'DP\_CREATE\_URL'
      EXPORTING
        type    = 'IMAGE'
        subtype = 'GIF'
      TABLES
        data    = l\_pict\_tab
      CHANGING
        url     = l\_url.
    picture->load\_picture\_from\_url(
         EXPORTING url = l\_url ).
    picture->set\_display\_mode(
         EXPORTING display\_mode = picture->display\_mode\_stretch ).
  ENDMETHOD.                    "fill\_picture
  METHOD fill\_tree.
    DATA: l\_node\_table TYPE TABLE OF abdemonode,
          l\_node TYPE abdemonode,
          BEGIN OF l\_spfli,
            carrid TYPE spfli-carrid,
            connid TYPE spfli-connid,
          END OF l\_spfli,
          l\_spfli\_tab LIKE SORTED TABLE OF l\_spfli
                      WITH UNIQUE KEY carrid connid.
    SELECT carrid, connid
      FROM spfli
      INTO CORRESPONDING FIELDS OF TABLE @l\_spfli\_tab.
    l\_node-hidden = ' '.               " All nodes are visible,
    l\_node-disabled = ' '.             " selectable,
    l\_node-isfolder = 'X'.             " a folder,
    l\_node-expander = ' '.             " have no '+' sign for expansion.
    LOOP AT l\_spfli\_tab INTO l\_spfli.
      AT NEW carrid.
        l\_node-node\_key = l\_spfli-carrid.
        CLEAR l\_node-relatkey.
        CLEAR l\_node-relatship.
        l\_node-text = l\_spfli-carrid.
        l\_node-n\_image =   ' '.
        l\_node-exp\_image = ' '.
        APPEND l\_node TO l\_node\_table.
      ENDAT.
      AT NEW connid.
        l\_node-node\_key = l\_spfli-carrid && l\_spfli-connid.
        l\_node-relatkey = l\_spfli-carrid.
        l\_node-relatship = cl\_gui\_simple\_tree=>relat\_last\_child.
        l\_node-text = l\_spfli-connid.
        l\_node-n\_image =   '@AV@'.     "AV is the internal code
        l\_node-exp\_image = '@AV@'.     "for an airplane icon
      ENDAT.
      APPEND l\_node TO l\_node\_table.
    ENDLOOP.
    tree->add\_nodes(
         EXPORTING table\_structure\_name = 'ABDEMONODE'
                   node\_table = l\_node\_table ).
  ENDMETHOD.                    "fill\_tree
  METHOD handle\_node\_double\_click.
    DATA: l\_carrid TYPE spfli-carrid,
          l\_connid TYPE spfli-connid.
    l\_carrid = node\_key(2).
    l\_connid = node\_key+2(4).
    IF l\_connid IS INITIAL.
      fill\_html( EXPORTING i\_carrid = l\_carrid ).
    ELSE.
      fill\_list( EXPORTING i\_carrid = l\_carrid
                           i\_connid = l\_connid ).
    ENDIF.
  ENDMETHOD.                    "handle\_node\_double\_click
  METHOD fill\_html.
    DATA l\_url TYPE scarr-url.
    IF html\_viewer IS INITIAL.
      CREATE OBJECT html\_viewer
             EXPORTING parent = container\_html.
    ENDIF.
    SELECT SINGLE url
           FROM   scarr
           WHERE  carrid = @i\_carrid
           INTO   @l\_url.
    html\_viewer->show\_url(
         EXPORTING url = l\_url ).
  ENDMETHOD.                    "fill\_html
  METHOD fill\_list.
    DATA: l\_flight\_tab TYPE TABLE OF demofli,
          BEGIN OF l\_flight\_title,
            carrname TYPE scarr-carrname,
            cityfrom TYPE spfli-cityfrom,
            cityto   TYPE spfli-cityto,
          END OF l\_flight\_title,
          l\_list\_layout TYPE lvc\_s\_layo.
    IF container\_box IS INITIAL.
      CREATE OBJECT container\_box
             EXPORTING width  = 250
                       height = 200
                       top    = 100
                       left   = 400
                       caption = 'Flight List'.
      SET HANDLER close\_box FOR container\_box.
      CREATE OBJECT list\_viewer
             EXPORTING i\_parent = container\_box.
    ENDIF.
    SELECT SINGLE c~carrname, p~cityfrom, p~cityto "#EC CI\_BUFFJOIN
           FROM   ( scarr AS c
                      INNER JOIN spfli AS p ON c~carrid = p~carrid )
           WHERE  p~carrid = @i\_carrid AND
                  p~connid = @i\_connid
           INTO   CORRESPONDING FIELDS OF @l\_flight\_title.
    SELECT   fldate, seatsmax, seatsocc
             FROM     sflight
             WHERE    carrid = @i\_carrid AND connid = @i\_connid
             ORDER BY fldate
             INTO     CORRESPONDING FIELDS OF TABLE @l\_flight\_tab.
    l\_list\_layout-grid\_title = l\_flight\_title-carrname && \` \` &&
                               i\_connid                && \` \` &&
                               l\_flight\_title-cityfrom && \` \` &&
                               l\_flight\_title-cityto.
    l\_list\_layout-smalltitle = 'X'.    "The list title has small fonts,
    l\_list\_layout-cwidth\_opt = 'X'.    "the column width is adjusted,
    l\_list\_layout-no\_toolbar = 'X'.    "the toolbar is suppressed.
    list\_viewer->set\_table\_for\_first\_display(
         EXPORTING i\_structure\_name = 'DEMOFLI'
                   is\_layout        = l\_list\_layout
         CHANGING  it\_outtab        = l\_flight\_tab ).
  ENDMETHOD.                    "fill\_list
  METHOD close\_box.
    list\_viewer->free( ).
    container\_box->free( ).
    CLEAR: list\_viewer,
           container\_box.
  ENDMETHOD.                    "close\_box
ENDCLASS.                    "screen\_handler IMPLEMENTATION
\*&---------------------------------------------------------------------\*
\*& Processing Blocks called by the Runtime Environment                 \*
\*&---------------------------------------------------------------------\*
\* Event Block START-OF-SELECTION
START-OF-SELECTION.
  CALL SCREEN 100.
\* Dialog Module PBO
MODULE status\_0100 OUTPUT.
  SET PF-STATUS 'SCREEN\_100'.
  SET TITLEBAR 'TIT\_100'.
  screen\_handler=>create\_screen( ).
ENDMODULE.                    "status\_0100 OUTPUT
\* Dialog Module PAI
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.                    "cancel INPUT

Description

The screen of dynpro 100 contains a custom control named CUSTOM\_CONTROL that covers the entire screen area. In the flow logic, both dialog modules status\_0100 and cancel are called. The addition AT EXIT-COMMAND is used at PAI.

In the GUI status SCREEN\_100, the usual symbols of the standard tool bar are filled with function codes of the type E. The PAI module is only used to exit the program. The most important action at PBO is calling the static method create\_screen of the local class screen\_handler, in which an object of this class is created.

The instance constructor of the class screen\_handler creates container controls for a picture control and a tree control and afterwards both application controls themselves.

-   First, a docking control is created with the local reference variable l\_docking. By passing the constant dock\_at\_left of the class CL\_GUI\_DOCKING\_CONTAINER to the parameter side, a new area is created on the left side of the screen layout with a width of 135 pixels.
-   This screen area is split into two horizontal areas. This is done using the local reference variable l\_splitter, which creates an object of the class CL\_GUI\_SPLITTER\_CONTAINER and passes the reference to the docking control to the parameter parent.
-   Using the functional method get\_container, the references to both areas of the splitter control are determined in the local reference variables l\_container\_top and l\_container\_bottom . Afterwards, the application controls picture and tree are created, at which the parameter parent of each constructor receives one of the references to the areas of the splitter control.

By calling the method set\_registered\_events, the double-click event for the nodes of the tree is activated as a system event. The method handle\_node\_double\_click is registered as the event handler.

When the instance constructor is exited, all reference variables are deleted. However, the control objects created in the constructor with local reference variables are not collected by the Garbage Collector, since they are persisted by references from the CFW.

The method fill\_picture imports an image file in GIF format from the MIME Repository into a byte string l\_pict\_wa, which is then filled into an internal table l\_pict\_tab. The function module DP\_CREATE\_URL creates an URL address for this table in the local variable l\_url, which is passed to the method load\_picture\_from\_url of the picture control.

The method fill\_tree creates the tree structure of the tree control in the internal table l\_node\_table of the line structure ABDEMONODE. Every line of the table describes a node of the tree structure and must have a unique node key node\_key. The components relatkey and relatship describe the relationships between the nodes.

The node table is generated from the content of the database table SPFLI. In the subnodes, the standard icons for non-expanded and expanded nodes are replaced with aircraft icons.

The event handler method handle\_node\_double\_click imports the parameter node\_key of the event node\_double\_click of the class CL\_GUI\_SIMPLE\_TREE, which contains the key of the selected node. Depending on the content, the methods fill\_html or fill\_list are called.

When the method fill\_html is called for the first time, it creates an object of the class CL\_GUI\_HTML\_VIEWER and links the associated HTML control with the area of the container control to which the reference in container\_html points, namely with the custom control on the dynpro. In accordance with the selected node, the web address of an airline is read and passed to the method show\_url of the HTML control, which displays the Homepage of the airline.

The method fill\_list creates a dialog box container and an ALV grid control that is displayed in the dialog box. The event handler close\_box is registered for the dialog box container. Activation using the method set\_registered\_events is not necessary here, as the event is activated by the class itself as system event when the object is created. A list is created for the selected node. By assigning values to some components of the structure l\_list\_layout of the type lvc\_s\_layo, it is determined that the list title is displayed in a small format, and that the column width of the list is optimized, and that the list should not have an application toolbar. By calling the method set\_table\_for\_first\_display of the ALV grid control, the list is displayed in the dialog box.

The event handler method close\_box closes the dialog box. To do this, the methods free of the controls involved are called one after another and the associated reference variables initialized. After that, if a node is selected to create a list, both controls are created again in the method fill\_list. All other controls of the program cannot be deleted by the user and are available until the program ends.

Hint

The class CL\_SALV\_TABLE and other classes with the prefix CL\_SALV\_ offer more convenient ways of displaying ALV controls.


### abendynpro_custom_control_abexa.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros.htm) →  [dynpro - Screen Layout and Screen Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_screen.htm) →  [dynpro - Examples of Screen Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_elements_abexas.htm) → 

dynpro - CFW Events

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

In the GUI status SCREEN\_100, the function codes BACK, EXIT, and CANCEL are created with type E and the function code INSERT is created without a specific type.

The program contains a local class called event\_handler with event handlers for the events F1 and F4 of the global class CL\_GUI\_TEXTEDIT. When the program is executed, dynpro 100 instantiates objects of the classes CL\_GUI\_CUSTOM\_CONTAINER, CL\_GUI\_TEXTEDIT, and event\_handler after PBO.

The container control is linked with the custom control on the dynpro and the instance of the textedit control is linked with this container. The events F1 and F4 of the textedit control are registered using the method SET\_REGISTERED\_EVENTS to ensure that they are passed to the current AS instance. F1 is defined as a system event and F4 as an application event. The event handling methods of the instance handle of the class event\_handler are registered as handlers for the events.

Before the dynpro is sent, the textedit control is filled with the content of table text\_tab. As long as the dynpro is displayed, the user is allowed to edit the text. When INSERT is selected, PAI is raised, and the current text from the textedit control is passed to the table text\_tab.

If F1 is selected on the textedit control, the method handle\_f1 is executed immediately. This assigns the content of the line to the field field. Calling the method set\_new\_ok\_code raises PAI. This is the only way to ensure that the PBO is processed and the content of field is sent to the dynpro.

If F4 is selected on the textedit control, PAI is raised. The method DISPATCH is called and raises the method handle\_f4. This assigns the content of the line to the field field: Since the system then automatically returns to PAI processing, PBO is also processed and the field content is transported.

In either case, regardless of whether the user chooses F1 or F4, the content of the textedit control is not passed to the internal table text\_tab. Consequently, the textedit control is overwritten with the previous content of text\_tab after PBO.


### abenhtml_browser_abexa.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros.htm) →  [dynpro - Screen Layout and Screen Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_screen.htm) →  [dynpro - Examples of Screen Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_elements_abexas.htm) → 

dynpro - HTML Browser

This example demonstrates the encapsulation of the browser controls in a class.

Source Code

REPORT demo\_html\_browser.
PARAMETERS: modal  AS CHECKBOX DEFAULT 'X',
            no\_box AS CHECKBOX.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    TYPES: pict\_line(1022) TYPE x,
           pict\_tab        TYPE STANDARD TABLE OF pict\_line
                                WITH EMPTY KEY.
    CLASS-METHODS get\_pict\_tab
      IMPORTING
        mime\_url        TYPE csequence
      RETURNING
        VALUE(pict\_tab) TYPE pict\_tab.
    CLASS-METHODS handle\_sapevent
      FOR EVENT sapevent
                  OF cl\_abap\_browser
      IMPORTING action.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA error\_list TYPE cl\_abap\_browser=>html\_table.
    DATA(title) = CONV cl\_abap\_browser=>title( 'HTML Browser Demo' ).
    SET HANDLER handle\_sapevent.
    DATA(pict\_tab) = get\_pict\_tab(
      mime\_url = '/SAP/PUBLIC/BC/ABAP/mime\_demo/ABAP\_Docu\_Logo.gif' ).
    DATA(ext\_data) =
      VALUE cl\_abap\_browser=>load\_tab( ( name = 'PICT.GIF'
                                         type = 'image'
                                         dref = REF #( pict\_tab ) ) ).
    DATA(html\_str) =
      '<htm1 lang="EN">' &&
      '<head>' &&
      '<meta name="Demo" content="Test">' &&
      '<style type="text/css">' &&
      'span.h1 {font-size: 150%; color:#000080; ' &&
      'font-weight:bold;}' &&
      '</style>' &&
      '</head>' &&
      '<body>' &&
      '<p><span class="h1">HTML</span></p>' &&
      '<A HREF="http://help.sap.com/">Weblink</A>' &&
      '<br><br><A href=sapevent:"ActionCode">SAPevent</A>' &&
      '<br><br>External Picture:' &&
      '<br><br><img src="PICT.GIF" alt="An example figure" >' &&
      '</body>' &&
      '</html>'.
    cl\_abap\_browser=>show\_html(
      EXPORTING
        html\_string = html\_str
        modal       = modal
        dialog      = COND #( WHEN no\_box = abap\_false
                                   THEN abap\_true )
        title       = title
        buttons     = cl\_abap\_browser=>navigate\_html
        format      = cl\_abap\_browser=>landscape
        size        = cl\_abap\_browser=>medium
        data\_table  = ext\_data
      IMPORTING
         html\_errors = error\_list ).
    IF modal IS INITIAL AND no\_box IS INITIAL.
      MESSAGE 'First call of browser' TYPE 'I'.
    ENDIF.
    IF error\_list IS NOT INITIAL.
      LOOP AT error\_list ASSIGNING FIELD-SYMBOL(<error>).
        <error> = escape( val    = <error>
                          format = cl\_abap\_format=>e\_html\_text ).
        <error> = <error> && '<br>'.
      ENDLOOP.
      INSERT '<html><body>' INTO error\_list INDEX 1.
      APPEND '</body></html>' TO error\_list.
      cl\_abap\_browser=>show\_html(
        EXPORTING
          html       = error\_list
          modal       = modal
          dialog      = COND #( WHEN no\_box = abap\_false
                                     THEN abap\_true )
          title      = 'HTML Validation Errors'
          check\_html = abap\_false
          printing   = abap\_true ).
      IF modal IS INITIAL AND no\_box IS INITIAL.
        MESSAGE 'Second call of browser' TYPE 'I'.
      ENDIF.
    ENDIF.
    REPLACE '<htm1'  IN html\_str WITH  '<html'.
    cl\_abap\_browser=>show\_html(
      EXPORTING
        html\_string = html\_str
        modal       = modal
        dialog      = COND #( WHEN no\_box = abap\_false
                                   THEN abap\_true )
        title      = title
        buttons    = cl\_abap\_browser=>navigate\_html
        format     = cl\_abap\_browser=>landscape
        size       = cl\_abap\_browser=>medium
        data\_table = ext\_data
        check\_html = abap\_true
      IMPORTING
         html\_errors = error\_list ).
    IF modal IS INITIAL AND no\_box IS INITIAL.
      MESSAGE 'Third call of browser' TYPE 'I'.
    ENDIF.
    IF error\_list IS INITIAL.
      MESSAGE 'No errors in HTML' TYPE 'S'.
    ENDIF.  ENDMETHOD.
  METHOD handle\_sapevent.
    MESSAGE \`Handling: \` && action TYPE 'I'.
  ENDMETHOD.
  METHOD get\_pict\_tab.
    cl\_mime\_repository\_api=>get\_api( )->get(
      EXPORTING i\_url = mime\_url
      IMPORTING e\_content = DATA(pict\_wa)
      EXCEPTIONS OTHERS = 4 ).
    IF sy-subrc = 4.
      RETURN.
    ENDIF.
    pict\_tab =
      VALUE #( LET l1 = xstrlen( pict\_wa ) l2 = l1 - 1022 IN
               FOR j = 0 THEN j + 1022  UNTIL j >= l1
                 ( COND #( WHEN j <= l2 THEN
                                pict\_wa+j(1022)
                           ELSE pict\_wa+j ) ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The class CL\_ABAP\_BROWSER encapsulates the use of the class CL\_GUI\_HTML\_VIEWER. The static method SHOW\_HTML can be used to display a HTML file in a modal or modeless dialog box or in the same window as the current dynpro. External data, in this case a picture loaded from the MIME Repository, can be passed and displayed. The SAPEVENT events are still passed on and can be handled by the user.

-   The HTML file passed first has errors, since the <html> tag is written incorrectly. In SAP systems, this case always produces a corresponding message.
-   The error list is also represented using SHOW\_HTML, where the error check for this simple purpose is disabled by passing a blank to the corresponding parameter, but the print option is switched on.
-   The found error is corrected in the HTML file and passed again, with the error check enabled this time.

When the program starts, the file can be display in a modal window, a modeless window, or without a dialog box. If a modeless dialog box is chosen, container dynpros and information messages must be used to keep the dialog box alive. If no messages were sent, the modeless dialog box would not be visible.


### abenhtml_input_abexa.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros.htm) →  [dynpro - Screen Layout and Screen Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_screen.htm) →  [dynpro - Examples of Screen Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_elements_abexas.htm) → 

dynpro - Input in HTML File

This example demonstrates how input in a HTML file can be processed.

Source Code

REPORT demo\_html\_input.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS handle\_sapevent
      FOR EVENT sapevent
                  OF cl\_abap\_browser
      IMPORTING action
                  query\_table.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA error\_list TYPE cl\_abap\_browser=>html\_table.
    SET HANDLER handle\_sapevent.
    DATA(html\_str) =
       \`<html>\`
    && \`  <head>\`
    && \`    <meta http-equiv="content-type" \`
    && \`          content="text/html; \`
    && \`          charset=utf-8">\`
    && \`    <script language="JavaScript">\`
    && \`      function sendInput(form) \`
    && \`          { fname=form.name;       \`
    && \`            document\[fname\].submit();} \`
    && \`      function InputKeyDown(form) {\`
    && \`        if(event.keyCode == 13) {\`
    && \`            fname=form.name;\`
    && \`            document\[fname\].submit();} }\`
    && \`    </script>\`
    && \`  </head>\`
    && \`  <body>\`
    && \`    <form name="INPUT" accept-charset="utf-8" \`
    && \`          method="post" action="SAPEVENT:INPUT"> \`
    && \`      <input type="text" id="in1" name="field1" \`
    && \`             size=30 maxlength=30 title="" value="aaa" \`
    && \`             onKeyDown="InputKeyDown(this.form);"><br>\`
    && \`      <input type="text" id="in2" name="field2" \`
    && \`             size=30 maxlength=30 title="" value="bbb" \`
    && \`             onKeyDown="InputKeyDown(this.form);"><br>\`
    && \`      <input type="text" id="in3" name="field3" \`
    && \`             size=30 maxlength=30 title="" value="ccc" \`
    && \`             onKeyDown="InputKeyDown(this.form);"><br><br>\`
    && \`     <button id="enterButton" type="button" \`
    && \`             title="Enter" onClick="sendInput(INPUT);" \`
    && \`             onKeypress="if(event.keycode=13) \`
    && \`             sendInput(INPUT);">\`
    && \`             Enter</button>\`
    && \`    </form>\`
    && \`  </body>\`
    && \`</html>\`.
    cl\_abap\_browser=>show\_html(
      EXPORTING
        html\_string = html\_str
        title       = 'Input Demo'
      IMPORTING
         html\_errors = error\_list ).
    IF error\_list IS NOT INITIAL.
      MESSAGE 'Error in HTML' TYPE 'I' DISPLAY LIKE 'E'.
    ENDIF.  ENDMETHOD.
  METHOD handle\_sapevent.
    DATA(out) = cl\_demo\_output\_stream=>open( ).
    SET HANDLER cl\_demo\_output\_html=>handle\_output FOR out.
    out->write\_data( iv\_name = 'ACTION'      ia\_value = action ).
    out->write\_data( iv\_name = 'QUERY\_TABLE' ia\_value = query\_table ).
    out->close( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example creates a HTML file containing multiple input fields, a pushbutton, and JavaScript functions for handling the input. The form INPUT uses method="post" to send the input data. The HTML control in CFW uses the parameter QUERY\_TABLE of the event SAPEVENT to pass this data to its handler. The class CL\_ABAP\_BROWSER (a wrapper for the class CL\_GUI\_HTML\_VIEWER also passes this parameter and the user input can be used in the ABAP program.

See also the corresponding executable example for [ICF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenicf_post_service_abexa.htm).


### abenmime_pictures_abexa.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros.htm) →  [dynpro - Screen Layout and Screen Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_screen.htm) →  [dynpro - Examples of Screen Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_elements_abexas.htm) → 

dynpro - Images in HTML

The example demonstrates how images are displayed in HTML controls.

Source Code

REPORT demo\_picture\_in\_html.
CLASS picture\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS: main1, main2.
  PRIVATE SECTION.
    TYPES: html     TYPE c LENGTH 255,
           html\_tab TYPE STANDARD TABLE OF html WITH EMPTY KEY.
    TYPES: pict\_line(1022) TYPE x,
           pict\_tab        TYPE STANDARD TABLE OF pict\_line
                                WITH EMPTY KEY.
    CLASS-METHODS get\_pict\_tab
      IMPORTING
        mime\_url        TYPE csequence
      RETURNING
        VALUE(pict\_tab) TYPE pict\_tab.
ENDCLASS.
CLASS picture\_demo IMPLEMENTATION.
  METHOD main1.
    DATA html\_url TYPE c LENGTH 255.
    DATA pict\_url TYPE c LENGTH 255.
    DATA(custom\_container) = NEW
      cl\_gui\_custom\_container( container\_name = 'CUSTOM\_CONTAINER1' ).
    DATA(html\_control) = NEW
     cl\_gui\_html\_viewer( parent = custom\_container ).
    DATA(pict\_tab) = get\_pict\_tab(
      mime\_url = '/SAP/PUBLIC/BC/ABAP/mime\_demo/ABAP\_Docu\_Logo.gif' ).
    html\_control->load\_data(
      EXPORTING
        url          = 'picture\_url'
        type         = 'image'
        subtype      = '.gif'
      IMPORTING
        assigned\_url = pict\_url
      CHANGING
        data\_table   = pict\_tab ).
    DATA(html\_tab) = VALUE html\_tab(
      ( '<html><body><basefont face="arial">' )
      ( 'Picture with CL\_GUI\_HTML\_VIEWER<br><br>' )
      ( '<img src="' && pict\_url && '">' )
      ( '</body></html>' ) ).
    html\_control->load\_data(
      IMPORTING
        assigned\_url = html\_url
      CHANGING
        data\_table   = html\_tab ).
    html\_control->show\_url(
       EXPORTING
         url = html\_url ).
  ENDMETHOD.
  METHOD main2.
    DATA(custom\_container) = NEW
      cl\_gui\_custom\_container( container\_name = 'CUSTOM\_CONTAINER2' ).
    DATA(pict\_tab) = get\_pict\_tab(
      mime\_url = '/SAP/PUBLIC/BC/ABAP/mime\_demo/ABAP\_Docu\_Logo.gif' ).
    DATA(ext\_data) =
      VALUE cl\_abap\_browser=>load\_tab( ( name = 'PICT.GIF'
                                         type = 'image'
                                         dref = REF #( pict\_tab ) ) ).
    DATA(html\_tab) = VALUE cl\_abap\_browser=>html\_table(
      ( '<html><body><basefont face="arial">' )
      ( 'Picture with CL\_ABAP\_BROWSER<br><br>' )
      ( '<img src="PICT.GIF">' )
      ( '</body></html>' ) ).
    cl\_abap\_browser=>show\_html( html = html\_tab
                                container = custom\_container
                                data\_table  = ext\_data ).
  ENDMETHOD.
  METHOD get\_pict\_tab.
    cl\_mime\_repository\_api=>get\_api( )->get(
      EXPORTING i\_url = mime\_url
      IMPORTING e\_content = DATA(pict\_wa)
      EXCEPTIONS OTHERS = 4 ).
    IF sy-subrc = 4.
      RETURN.
    ENDIF.
    pict\_tab =
      VALUE #( LET l1 = xstrlen( pict\_wa ) l2 = l1 - 1022 IN
               FOR j = 0 THEN j + 1022  UNTIL j >= l1
                 ( COND #( WHEN j <= l2 THEN
                                pict\_wa+j(1022)
                           ELSE pict\_wa+j ) ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  picture\_demo=>main1( ).
  picture\_demo=>main2( ).
  CALL SCREEN 100.

Description

Images loaded here from the MIME repository using an API are displayed in two browser controls.

-   The method main1 uses the class CL\_GUI\_HTML\_VIEWER directly. Its method LOAD\_DATA is used to get a URL for the image in the internal table, which is then used on the HTML page.
-   The method main2 uses the class CL\_ABAP\_BROWSER as a wrapper for the direct use of CL\_GUI\_HTML\_VIEWER and calls of the method LOAD\_DATA. A reference, linked with the name used in the HTML page, is passed to the internal table.

See also the [executable example](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenicf_mime_pictures_abexa.htm) for direct access to objects from the MIME repository using ICF.


### abenmime_html_abexa.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros.htm) →  [dynpro - Screen Layout and Screen Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_screen.htm) →  [dynpro - Examples of Screen Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_elements_abexas.htm) → 

dynpro - HTML from the MIME Repository

This example demonstrates how a HTML file is displayed from the MIME repository.

Source Code

REPORT demo\_html\_from\_mime.
CLASS mime\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    TYPES: mime\_line(1022) TYPE x,
           mime\_tab        TYPE STANDARD TABLE OF mime\_line
                                WITH EMPTY KEY.
    CLASS-METHODS get\_mime\_obj
      IMPORTING
        mime\_url        TYPE csequence
      RETURNING
        VALUE(mime\_tab) TYPE mime\_tab.
ENDCLASS.
CLASS mime\_demo IMPLEMENTATION.
  METHOD main.
    DATA html\_url TYPE c LENGTH 255.
    DATA(custom\_container) = NEW
      cl\_gui\_custom\_container( container\_name = 'CUSTOM\_CONTAINER' ).
    DATA(html\_control) = NEW
     cl\_gui\_html\_viewer( parent = custom\_container ).
    DATA(pict\_tab) = get\_mime\_obj(
      mime\_url = '/SAP/PUBLIC/BC/ABAP/mime\_demo/ABAP\_Docu\_Logo.gif' ).
    html\_control->load\_data(
      EXPORTING
        url          = 'picture\_url'
        type         = 'image'
        subtype      = '.gif'
      CHANGING
        data\_table   = pict\_tab ).
    DATA(html\_tab) = get\_mime\_obj(
      mime\_url = '/SAP/PUBLIC/BC/ABAP/mime\_demo/demo\_html.html' ).
    html\_control->load\_data(
      IMPORTING
        assigned\_url = html\_url
      CHANGING
        data\_table   = html\_tab ).
    html\_control->show\_url(
       EXPORTING
         url = html\_url ).
  ENDMETHOD.
  METHOD get\_mime\_obj.
    cl\_mime\_repository\_api=>get\_api( )->get(
      EXPORTING i\_url = mime\_url
      IMPORTING e\_content = DATA(mime\_wa)
      EXCEPTIONS OTHERS = 4 ).
    IF sy-subrc = 4.
      RETURN.
    ENDIF.
    mime\_tab =
      VALUE #( LET l1 = xstrlen( mime\_wa ) l2 = l1 - 1022 IN
               FOR j = 0 THEN j + 1022  UNTIL j >= l1
                 ( COND #( WHEN j <= l2 THEN
                                mime\_wa+j(1022)
                           ELSE mime\_wa+j ) ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  mime\_demo=>main( ).
  CALL SCREEN 100.

Description

An API is used to load a HTML file and an image from the MIME repository and store them in internal tables. The method LOAD\_DATA of the class CL\_GUI\_HTML\_VIEWER is used to associate the data with the HTML control of CFW and the HTML file is displayed. The name of the image in the HTML file is the same as the URL passed to the method LOAD\_DATA for the image. LOAD\_DATA is given a URL for the image in the internal table and is used on the HTML page.

See also the [executable example](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenicf_mime_pictures_abexa.htm) for direct access to objects from the MIME repository using ICF.


### abentext_output_abexa.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros.htm) →  [dynpro - Screen Layout and Screen Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_screen.htm) →  [dynpro - Examples of Screen Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_elements_abexas.htm) → 

dynpro - Text Output

This example demonstrates the output of unformatted text.

Source Code

REPORT  demo\_show\_text.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: text       TYPE REF TO cl\_demo\_text,
          text\_table TYPE cl\_demo\_text=>t\_text,
          text\_line  TYPE cl\_demo\_text=>t\_line.
    text = cl\_demo\_text=>new( ).
    text\_line = 'First line of text'.
    text->add\_line( text\_line ).
    text->add\_line( ' ' ).
    DO 10 TIMES.
      CLEAR text\_line.
      text\_line(3) = sy-index.
      text\_line  = |Table line { text\_line }|.
      APPEND text\_line TO text\_table.
    ENDDO.
    text->add\_table( text\_table ).
    text->add\_line( ' ' ).
    text\_line = 'Last line of text'.
    text->add\_line( text\_line ).
    text->display( ).
    text->delete( ).
    text->add\_line( 'New text' ).
    text->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The program uses the methods of the class CL\_DEMO\_TEXT, which was designed for this purpose. The class encapsulates the use of a text edit control in a dialog box.

Wrappers like this can replace the use of the statement [WRITE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwrite-.htm) for simple text output.


### abenscreen_elements_abexas.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros.htm) →  [dynpro - Screen Layout and Screen Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_screen.htm) → 

dynpro - Examples of Screen Elements

Continue
![Example](exa.gif "Example") [dynpro - Status Icons](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_status_icons_abexa.htm)
![Example](exa.gif "Example") [dynpro - Context Menus](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_context_menu_abexa.htm)
![Example](exa.gif "Example") [dynpro - CFW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_cfw_abexa.htm)
![Example](exa.gif "Example") [dynpro - CFW Events](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_custom_control_abexa.htm)
![Example](exa.gif "Example") [dynpro - HTML Browser](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhtml_browser_abexa.htm)
![Example](exa.gif "Example") [dynpro - Input in HTML File](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhtml_input_abexa.htm)
![Example](exa.gif "Example") [dynpro - Images in HTML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmime_pictures_abexa.htm)
![Example](exa.gif "Example") [dynpro - HTML from the MIME Repository](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmime_html_abexa.htm)
![Example](exa.gif "Example") [dynpro - Text Output](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentext_output_abexa.htm)
