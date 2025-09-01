---
title: "Selection Screens - Dynamic Selections"
description: |
  This example demonstrates how a dynamic selection is used in a program. Source Code REPORT demo_free_selections. PARAMETERS dbtab TYPE tabname DEFAULT 'SPFLI'. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. PRIVATE SECTION. CLASS-METHODS check_existence_and_authority RETURNING VALUE
version: "latest"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfree_selection_abexa.htm"
abapFile: "abenfree_selection_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "abenfree", "selection", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen.htm) →  [Selection Screens - Dynamic Selections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfree_selections.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Selection%20Screens%20-%20Dynamic%20Selections%2C%20ABENFREE_SELECTION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

Selection Screens - Dynamic Selections

This example demonstrates how a dynamic selection is used in a program.

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
    FIELD-SYMBOLS <cond>  LIKE LINE OF cond\_tab.
    FINAL(checked\_dbtab) = demo=>check\_existence\_and\_authority( ).
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
    TRY.
        SELECT \*
               FROM (checked\_dbtab)
               WHERE (<cond>-where\_tab)
               INTO TABLE @dref->\*.
      CATCH cx\_sy\_dynamic\_osql\_error.
        MESSAGE 'Error in dynamic ABAP SQL' TYPE 'I' DISPLAY LIKE 'E'.
        LEAVE PROGRAM.
    ENDTRY.
    TRY.
        cl\_salv\_table=>factory(
          IMPORTING r\_salv\_table = FINAL(alv)
          CHANGING  t\_table      = dref->\* ).
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

This example shows the simplest way to use a [dynamic selection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfree_selections.htm) in a program. When the value T of the parameter KIND is passed, the function module FREE\_SELECTIONS\_INIT is set to prepare dynamic selections for database tables in the ABAP Dictionary. The names of the database tables (here only one freely selectable table) are passed to the table parameter TABLES\_TAB.

The result of FREE\_SELECTIONS\_INIT is passed to the function module FREE\_SELECTIONS\_DIALOG, which displays a selection screen for entering dynamic selections for the database table. The user can select which database fields are used for dynamic selections and can then make these selections.

Once the user confirms the selected dynamic selections by choosing Save, the program inherits them as a dynamic WHERE clause and then uses this clause in a dynamic SELECT statement to read the data accordingly. The result is displayed in an ALV list.

The method CHECK\_TABLE\_NAME\_STR of the class CL\_ABAP\_DYN\_PRG is used to check whether the database table specified exists and can be used.