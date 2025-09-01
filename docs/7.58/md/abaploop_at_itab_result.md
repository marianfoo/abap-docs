  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) →  [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) →  [LOOP AT itab, Basic Form](javascript:call_link\('abaploop_at_itab.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LOOP%20AT%20itab%2C%20result%2C%20ABAPLOOP_AT_ITAB_RESULT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LOOP AT itab, result

[Short Reference](javascript:call_link\('abaploop_at_itab_shortref.htm'\))

Syntax

... *{* INTO wa *}*
  *|* *{* ASSIGNING <fs> *\[*CASTING*\]* *\[*ELSE UNASSIGN*\]* *}*
  *|* *{* REFERENCE INTO dref *}*
  *|* *{* TRANSPORTING NO FIELDS *}* ...

Effect

Defines the output behavior of a [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)) across an internal table. There are four alternatives for the output behavior:

-   The addition INTO is used to assign the content of the current line to a work area wa.
-   The addition ASSIGNING is used to assign the current line to a field symbol <fs>. No other memory area can be assigned to the field symbol within the loop and the assignment cannot be undone using [UNASSIGN](javascript:call_link\('abapunassign.htm'\)).
-   The addition REFERENCE INTO is used to create a reference to the current line in a reference variable. No other reference can be assigned to the reference variable within the loop and the reference variable cannot be initialized using [CLEAR](javascript:call_link\('abapclear.htm'\)).
-   The addition TRANSPORTING NO FIELDS specifies that only the relevant system fields are filled. This addition is only possible if the addition WHERE is used in the conditions [cond](javascript:call_link\('abaploop_at_itab_cond.htm'\)) at the same time and if the addition [GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) is not used.

If the internal table itab is specified as an existing data object, the syntax and meaning of the specified [output behavior](javascript:call_link\('abapread_table_outdesc.htm'\)) is the same as in the statement [READ TABLE](javascript:call_link\('abapread_table.htm'\)), with the exception that no further [transport\_options](javascript:call_link\('abapread_table_transport_options.htm'\)) can be specified after INTO wa, and the same restrictions apply to modifications of key fields of the [primary](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") and [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"). In particular, inline declarations for the work area, the field symbol, or the reference variable using the declaration operators [DATA](javascript:call_link\('abendata_inline.htm'\)), [FINAL](javascript:call_link\('abenfinal_inline.htm'\)), and [FIELD-SYMBOL](javascript:call_link\('abenfield-symbol_inline.htm'\)) are possible. The addition ELSE UNASSIGN sets the state of the field symbol behind ASSIGNING to unassigned if no loop pass was executed and sy-subrc is set to 4.

If a field symbol or a dereferenced reference variable is specified for the work area wa or the reference variable dref, the target data object of the field symbol or reference variable is determined in each loop pass. The current data object is used as the target area for each loop pass. This means that changes in the assignment of the field symbol or reference variable within the loop modify the target area.

If the internal table is specified as the return value of a [functional method](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry"), a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"), or a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), the additions ASSIGNING and REFERENCE INTO can also be specified for LOOP, unlike in READ TABLE. The internal table is only available while the loop is being processed, which means that all field symbols and reference variables that point to lines in the internal table become invalid when the loop is exited.

Programming Guideline

[Output Behavior](javascript:call_link\('abentable_output_guidl.htm'\) "Guideline")

Hints

-   If the current line is deleted within the loop when the additions ASSIGNING or REFERENCE are used, the field symbol or reference variable is not assigned or unbound in the current loop pass afterwards.
-   For LOOP, there is an [obsolete short form](javascript:call_link\('abenitab_short_forms.htm'\)) outside of classes, where INTO wa can be omitted if the internal table has an identically named [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry") itab. INTO itab is then added to the statement.

Example

Two LOOP loops are used to determine the line numbers for numbers greater than or equal to 40 and less than or equal to 60 in a sorted table of random numbers, and the addition TRANSPORTING NO FIELDS is used. Then, INTO is used to read these lines to a variable number. Filling the output table in this way demonstrates the use of number. It could also be done using [INSERT LINES OF](javascript:call_link\('abapinsert_itab_linespec.htm'\)).

FINAL(t) = cl\_demo\_date\_time=>get\_utc\_time( ).
FINAL(rnd) = cl\_abap\_random\_int=>create( seed = CONV i( t )
                                        min  = 1
                                        max  = 100 ).
DATA itab TYPE SORTED TABLE OF i WITH NON-UNIQUE KEY table\_line.
itab = VALUE #( FOR i = 1 UNTIL i > 100 ( rnd->get\_next( ) ) ).
LOOP AT itab TRANSPORTING NO FIELDS WHERE table\_line >= 40.
  FINAL(idx1) = sy-tabix.
  EXIT.
ENDLOOP.
LOOP AT itab FROM idx1 TRANSPORTING NO FIELDS WHERE table\_line > 60.
  FINAL(idx2) = sy-tabix - 1.
  EXIT.
ENDLOOP.
DATA output TYPE TABLE OF i WITH EMPTY KEY.
LOOP AT itab FROM idx1 TO idx2 INTO FINAL(number).
  output = VALUE #( BASE output ( number ) ).
ENDLOOP.
cl\_demo\_output=>display( output ).

Example

Loop across an internal table containing dates. The table lines are assigned to a structured field symbol with a corresponding casting.

TYPES:
  BEGIN OF date,
    year  TYPE c LENGTH 4,
    month TYPE c LENGTH 2,
    day   TYPE c LENGTH 2,
  END OF date.
DATA itab TYPE SORTED TABLE OF d WITH UNIQUE KEY table\_line.
FINAL(date) = cl\_demo\_date\_time=>get\_user\_date( ).
itab = VALUE #( FOR i = - 3 UNTIL i > 3 ( date + i ) ).
DATA output TYPE TABLE OF date WITH EMPTY KEY.
FIELD-SYMBOLS <date> TYPE date.
LOOP AT itab ASSIGNING <date> CASTING ELSE UNASSIGN.
  output = VALUE #( BASE output ( <date> ) ).
ENDLOOP.
IF <date> IS ASSIGNED.
  cl\_demo\_output=>display( output ).
ENDIF.