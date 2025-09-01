  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_screen.htm) →  [Selection Screens - Free Selections](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfree_selections.htm) → 

Selection Screens - Free Selections

This example demonstrates how a free selection is used in a program.

Source Code

REPORT demo\_free\_selections.
PARAMETERS dbtab TYPE tabname DEFAULT 'SPFLI'.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS check\_existence\_and\_authority
      RETURNING VALUE(checked\_dbtab) TYPE tabname.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA selid         TYPE  rsdynsel-selid.
    DATA field\_tab     TYPE TABLE OF rsdsfields.
    DATA table\_tab     TYPE TABLE OF rsdstabs.
    DATA cond\_tab      TYPE rsds\_twhere.
    DATA dref          TYPE REF TO data.
    FIELD-SYMBOLS <table> TYPE STANDARD TABLE.
    FIELD-SYMBOLS <cond>  LIKE LINE OF cond\_tab.
    DATA(checked\_dbtab) = demo=>check\_existence\_and\_authority( ).
    table\_tab = VALUE #( ( prim\_tab = checked\_dbtab ) ).
    CALL FUNCTION 'FREE\_SELECTIONS\_INIT'
      EXPORTING
        kind         = 'T'
      IMPORTING
        selection\_id = selid
      TABLES
        tables\_tab   = table\_tab
      EXCEPTIONS
        OTHERS       = 4.
    IF sy-subrc <> 0.
      MESSAGE 'Error in initialization' TYPE 'I' DISPLAY LIKE 'E'.
      LEAVE PROGRAM.
    ENDIF.
    CALL FUNCTION 'FREE\_SELECTIONS\_DIALOG'
      EXPORTING
        selection\_id  = selid
        title         = 'Free Selection'
        as\_window     = ' '
      IMPORTING
        where\_clauses = cond\_tab
      TABLES
        fields\_tab    = field\_tab
      EXCEPTIONS
        OTHERS        = 4.
    IF sy-subrc <> 0.
      MESSAGE 'No free selection created' TYPE 'I'.
      LEAVE PROGRAM.
    ENDIF.
    ASSIGN cond\_tab\[ tablename = checked\_dbtab \] TO <cond>.
    IF sy-subrc <> 0.
      MESSAGE 'Error in condition' TYPE 'I' DISPLAY LIKE 'E'.
      LEAVE PROGRAM.
    ENDIF.
    CREATE DATA dref TYPE TABLE OF (checked\_dbtab).
    ASSIGN dref->\* TO <table>.
    TRY.
        SELECT \*
               FROM (checked\_dbtab)
               WHERE (<cond>-where\_tab)
               INTO TABLE @<table>.
      CATCH cx\_sy\_dynamic\_osql\_error.
        MESSAGE 'Error in dynamic Open SQL' TYPE 'I' DISPLAY LIKE 'E'.
        LEAVE PROGRAM.
    ENDTRY.
    TRY.
        cl\_salv\_table=>factory(
          IMPORTING r\_salv\_table = DATA(alv)
          CHANGING  t\_table      = <table> ).
        alv->display( ).
      CATCH cx\_salv\_msg.
        MESSAGE 'Error in ALV display' TYPE 'I' DISPLAY LIKE 'E'.
    ENDTRY.  ENDMETHOD.
  METHOD check\_existence\_and\_authority.
    TRY.
        checked\_dbtab = cl\_abap\_dyn\_prg=>check\_table\_name\_str(
                        val = dbtab
                        packages = 'SAPBC\_DATAMODEL' ).
      CATCH cx\_abap\_not\_a\_table.
        MESSAGE 'Database table not found' TYPE 'I' DISPLAY LIKE 'E'.
        LEAVE PROGRAM.
      CATCH cx\_abap\_not\_in\_package.
        MESSAGE 'Only tables from the flight data model are allowed'
                 TYPE 'I' DISPLAY LIKE 'E'.
        LEAVE PROGRAM.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example shows the simplest way to use a [dynamic selection](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfree_selections.htm) in a program. When the value "T" of the parameter KIND is passed, the function module FREE\_SELECTIONS\_INIT is configured so that free selections are prepared for database tables in ABAP Dictionary. The names of the database tables (here only one freely selectable table) are passed to the table parameter TABLES\_TAB.

The result of FREE\_SELECTIONS\_INIT is passed to the function module FREE\_SELECTIONS\_DIALOG, which displays a selection screen for entering free selections for the database table. The user can select which database fields are used for free selections, and can then make these selections.

Once the user confirms the selected dynamic selections by choosing Save, the program inherits them as a dynamic WHERE clause and then uses this clause in a dynamic SELECT statement to read the data accordingly. The result is displayed in an ALV list.

The method CHECK\_TABLE\_NAME\_STR of the class CL\_ABAP\_DYN\_PRG checks whether the database table specified exists and can be used.