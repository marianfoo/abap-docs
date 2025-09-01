  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Screen and Screen Elements](javascript:call_link\('abenabap_dynpros_screen.htm'\)) →  [Screen Elements - Examples](javascript:call_link\('abenscreen_elements_abexas.htm'\)) → 

Dynpros, CFW

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
      EXPORTING i\_url = '/SAP/PUBLIC/BC/ABAP/Sources/PLANE.GIF'
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
    SELECT SINGLE c~carrname, p~cityfrom, p~cityto
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

The screen of dynpro 100 contains a custom control named CUSTOM\_CONTROL that covers the entire screen area. In the flow logic, both dialog modules STATUS\_0100 and CANCEL are called. The addition AT EXIT-COMMAND is used after PAI.

In the GUI status SCREEN\_100, the usual symbols of the status bar are filled with function codes of the type E. The PAI module is only used to exit the program. The most important action at PBO is calling the static method create\_screen of the local class screen\_handler, in which an object of this class is created.

The instance constructor of the class screen\_handler creates container controls for a picture control and a tree control and afterwards both application controls.

-   First, a docking control is created with the local reference variable l\_docking. By passing the constant dock\_at\_left of the class CL\_GUI\_DOCKING\_CONTAINER to the parameter side, a new area is created on the left side of the screen with a width of 135 pixels.

-   This screen area is split into two horizontal areas. This is done using the local reference variable l\_splitter, which creates an object of the class CL\_GUI\_SPLITTER\_CONTAINER and passes the reference to the docking control to the parameter parent.

-   Using the functional method get\_container, the references to both areas of the splitter control are determined in the local reference variables l\_container\_top and l\_container\_bottom . Afterwards, the application controls picture and tree are created, at which the parameter parent of each constructor receives one of the references to the areas of the splitter control.

By calling the method set\_registered\_events, the double-click event for the nodes of the tree is activated as a system event. The method handle\_node\_double\_click is registered as the event handler.

When the instance constructor is exited, all reference variables are deleted. However, the control objects created in the constructor with local reference variables are not collected by the garbage collector, since they are persisted by references from the CFW.

The method fill\_picture imports an image file in GIF format from the MIME Repository into a byte string l\_pict\_wa, which is then filled into an internal table l\_pict\_tab. The function module DP\_CREATE\_URL creates an URL address for this table in the local variable l\_url, which is passed to the method load\_picture\_from\_url of the picture control.

The method fill\_tree creates the tree structure of the tree control in the internal table l\_node\_table of the row structure ABDEMONODE. Every row of the table describes a node of the tree structure and must have a unique node key node\_key for it. The components relatkey and relatship describe the relationships among the nodes.

The node table is generated from the content of the database table SPFLI. In the subnodes, the standard icons for non-expanded and expanded nodes are replaced with aircraft icons.

The event handler method handle\_node\_double\_click imports the parameter node\_key of the event node\_double\_click of the class CL\_GUI\_SIMPLE\_TREE, which contains the key of the selected node. Depending on the content, the methods fill\_html or fill\_list are called.

When the method fill\_html is called for the first time, it creates an object of the class CL\_GUI\_HTML\_VIEWER and links the associated HTML control with the area of the container control to which the reference in container\_html points (with the custom control on the dynpro). In accordance with the selected node, the web address of an airline is read and passed to the method show\_url of the HTML control, which displays the Homepage of the airline.

The method fill\_list creates a dialog box container and an ALV grid control that is displayed in the dialog box. The event handler close\_box is registered for the dialog box container. Activation using the method set\_registered\_events is not necessary here, as the event is activated by the class itself as system event when the object is created. A list is created for the selected node. By assigning values to some components of the structure l\_list\_layout of the type lvc\_s\_layo, it is determined that the list title in displayed in small format, and that the column width of the list is optimized, and that the list should not have an application toolbar. By calling the method set\_table\_for\_first\_display of the ALV grid control, the list is displayed in the dialog box.

The event handler method close\_box closes the dialog box. To do this, the methods free of the controls in question are called one after another and the associated reference variables initialized. After that, if a node is selected to create a list, both controls are created again in the method fill\_list. All other controls of the program cannot be deleted by the user and are available until the program ends.

Note

The class CL\_SALV\_TABLE and other classes with the prefix CL\_SALV\_ offer easier to use ways of displaying ALV controls.