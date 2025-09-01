# ABAP Keyword Documentation / ABAP − Reference / SAP GUI User Dialogs / Selection Screens / Dynamic Selections

Included pages: 2


### abenfree_selections.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) → 

Dynamic Selections

A dynamic selection is a [ranges condition](javascript:call_link\('abenranges_condition_glosry.htm'\) "Glossary Entry") that can be entered on a dynamically created selection screen. The associated selection screens are created, displayed, and processed by the system function modules FREE\_SELECTIONS\_.... of the function group SSEL. The selection screens can be displayed as standalone screens, or integrated into the screens of other dynpros or selection screens as a subscreen. Dynamic selections can be incorporated into logical database or used in any programs.

-   [Dynamic Selections in Logical Databases](#abenfree-selections-1--------dynamic-selections-in-all-programs---@ITOC@@ABENFREE_SELECTIONS_2)

Security Note

If used wrongly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before being used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](javascript:call_link\('abenescape_functions.htm'\)). See [Security Risks Caused by Input from Outside](javascript:call_link\('abendynamic_programming_scrty.htm'\)).

Dynamic Selections in Logical Databases

[Logical databases](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") can provide dynamic selections on their selections screens to specify further dynamic ranges conditions for individual nodes of the logical database, in addition to the parameters and selection criteria already defined statically in the database. These dynamic conditions can then be evaluated in the database program of the logical database. Dynamic selections of a logical database can be declared simply using the addition [DYNAMIC SELECTIONS](javascript:call_link\('abapselection-screen_ldb_dynamic.htm'\)) of the statement [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) in the database.

The ABAP runtime environment is responsible for calling function modules to create, display, and handle dynamic selections. The selections entered by the user are passed directly to data objects of the database program and can be evaluated there. For more information, see [Logical Databases - Dynamic Selections](javascript:call_link\('abenldb_free_selections.htm'\)).

Note

The special addition [WITH FREE SELECTIONS](javascript:call_link\('abapsubmit_selscreen_parameters.htm'\)) of the statement [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) is used to pass parameters to selection screens of logical databases that provide dynamic selections. If this addition is used, the function modules mentioned above are generally also implemented.

Dynamic Selections in All Programs

In ABAP programs that work with classic dynpros, dynamic selections can be provided by the direct use of the following two function modules:

The function module FREE\_SELECTIONS\_INIT determines the entities for which dynamic selections are to be made. This could be, for example, database tables from ABAP Dictionary or any selection of valid fields. The result of the function module is a selection ID, which must be passed to the function module FREE\_SELECTIONS\_DIALOG.

The function module FREE\_SELECTIONS\_DIALOG can display differently configured selection screens in different formats. Users can enter dynamic selections on these selection screens for the fields provided there and, if required, can also choose fields for which they want to perform dynamic selections. If Save is chosen, the function module returns the specified selections to the caller in three different formats, which the caller can take from the following EXPORTING parameters:

-   WHERE\_CLAUSES
    This parameter passes an internal table with the conditions [sql\_cond](javascript:call_link\('abenwhere_logexp.htm'\)) generated according to the dynamic selections for [dynamic specification](javascript:call_link\('abenwhere_logexp_dynamic.htm'\)) in the [WHERE](javascript:call_link\('abapwhere.htm'\)) clause of [SELECT](javascript:call_link\('abapselect.htm'\)) statements.

-   FIELD\_RANGES
    This parameter passes an internal table with the [ranges tables](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") generated according to the dynamic selections and that can be evaluated using the predicate [relational operator](javascript:call_link\('abenrelational_operator_glosry.htm'\) "Glossary Entry") IN in corresponding [WHERE conditions](javascript:call_link\('abenwhere_logexp_list.htm'\)) or [comparison expressions](javascript:call_link\('abenlogexp_select_option.htm'\)).

-   EXPRESSIONS
    This parameter passes an internal table with conditions generated according to the dynamic selections in an internal format (Reverse Polish Notation). This format can then be passed to the function module FREE\_SELECTIONS\_INIT to prepare a selection screen that is predefined with these selections. This format is also required for passes made to called programs using the addition [WITH FREE SELECTIONS](javascript:call_link\('abapsubmit_selscreen_parameters.htm'\)) of the statement [SUBMIT](javascript:call_link\('abapsubmit.htm'\)).

For more information, see the documentation about function modules and their parameter interface.

Executable Example

[Dynamic selections](javascript:call_link\('abenfree_selection_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Dynamic Selections](javascript:call_link\('abenfree_selection_abexa.htm'\))


### abenfree_selection_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Dynamic Selections](javascript:call_link\('abenfree_selections.htm'\)) → 

Dynamic Selections

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

This example shows the simplest way to use a [dynamic selection](javascript:call_link\('abenfree_selections.htm'\)) in a program. When the value "T" of the parameter KIND is passed, the function module FREE\_SELECTIONS\_INIT is configured so that free selections are prepared for database tables in ABAP Dictionary. The names of the database tables (here only one freely selectable table) are passed to the table parameter tables\_tab.

The result of FREE\_SELECTIONS\_INIT is passed to the function module FREE\_SELECTIONS\_DIALOG, which displays a selection screen for entering free selections for the database table. The user can select which database fields are used for free selections, and can then make these selections.

Once the user confirms the selected dynamic selections by choosing Save, the program inherits them as a dynamic WHERE clause and then uses this clause in a dynamic SELECT statement to read the data accordingly. The result is displayed in an ALV list.

The method CHECK\_TABLE\_NAME\_STR of the class CL\_ABAP\_DYN\_PRG checks whether the database table specified exists and can be used.
