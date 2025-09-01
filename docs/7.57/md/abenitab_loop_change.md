  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) →  [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: itab - Changing Internal Tables in a Loop, ABENITAB_LOOP_CHANGE, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

itab - Changing Internal Tables in a Loop

-   [Inserting and Deleting Lines](#abenitab-loop-change-1-------replacing-or-clearing-the-entire-table-body---@ITOC@@ABENITAB_LOOP_CHANGE_2)

Inserting and Deleting Lines   

In the statement block of a [LOOP](javascript:call_link\('abaploop_at_itab_variants.htm'\)) control statement, the content of the currently processed internal table can be changed by inserting or deleting lines. The position of inserted or deleted lines with regard to the current line is determined by the line numbers in the corresponding [table index](javascript:call_link\('abentable_index_glosry.htm'\) "Glossary Entry") in the case of loops across index tables or when using a sorted key. In the case of loops on hashed tables and when using a hash key, the position depends on the order of insertion or the order of lines that might have been established by a previous [SORT](javascript:call_link\('abapsort_itab.htm'\)) statement for the table.

-   Inserting lines after the current line causes these new lines to be processed in the subsequent loop passes, which can produce an endless loop.
-   Deleting lines after the current line causes the deleted lines to no longer be processed in the subsequent loop passes.
-   Inserting lines in front of the current line causes the internal loop counter to be increased by one with each inserted line. This affects sy-tabix in the subsequent loop pass in the case of loops across index tables or when using a sorted key, and sy-tabix is increased accordingly.
-   Deleting the current line or lines in front of the current line causes the internal loop counter to be decreased by one with each deleted line. In the case of loops across index tables or when using a sorted key, this affects sy-tabix in the subsequent loop pass, and sy-tabix is decreased accordingly.

Replacing or Clearing the Entire Table Body   

As a rule the replacement or clearing of the entire table body of the currently processed internal table is not allowed in the statement block of a [LOOP](javascript:call_link\('abaploop_at_itab_variants.htm'\)) statement. Such a write access to the table body can be achieved with statements such as [CLEAR](javascript:call_link\('abapclear.htm'\)), [FREE](javascript:call_link\('abapfree_dataobject.htm'\)), [LOCAL](javascript:call_link\('abaplocal.htm'\)), [REFRESH](javascript:call_link\('abaprefresh_itab.htm'\)), [SORT](javascript:call_link\('abapsort_itab.htm'\)), [DELETE ... WHERE](javascript:call_link\('abapdelete_itab_lines.htm'\)), and with all types of assignments.

-   If known statically, clearing or replacing the table body inside a loop results in a syntax error in classes and for LOOP statements with a statically known secondary key. Outside classes and for tables without secondary key, the syntax check gives only a warning for compatibility reasons.
-   If it is not known statically, clearing or replacing the table body inside a loop raises the runtime error TABLE\_FREE\_IN\_LOOP with the following exception: If the [output behavior](javascript:call_link\('abaploop_at_itab_result.htm'\)) is defined with INTO or TRANSPORTING NO FIELDS, or with the [obsolete short form](javascript:call_link\('abenitab_short_forms.htm'\)), for compatibility reasons there is no runtime error and the loop is exited in an undefined way.

Caution: Since the result of replacing or clearing the entire table body within a loop can result in unpredictable program behavior, the exceptions to the rule should not be exploited.

Programming Guideline

[Loop Processing](javascript:call_link\('abenloop_guidl.htm'\) "Guideline")

Example

Replacing the table body of an internal table within a loop over that table. The syntax check reports errors in classes and warnings outside classes. While the loop with ASSIGNING results in the runtime error TABLE\_FREE\_IN\_LOOP, the loop with INTO is executed without runtime error. The latter is shown for demonstration purposes, but not recommended.

DATA itab TYPE TABLE OF i.
itab = VALUE #( ( 1 ) ( 2 ) ( 3 ) ).
DATA jtab TYPE TABLE OF i.
jtab = VALUE #( ( 4 ) ( 5 ) ).
"Syntax error in a method, syntax warning otherwise
"No runtime error, but undefined behavior
LOOP AT itab INTO DATA(wa).
  IF sy-tabix = 2.
    itab = jtab.
  ENDIF.
ENDLOOP.
itab = VALUE #( ( 1 ) ( 2 ) ).
"Syntax error in a method, syntax warning otherwise
"Runtime error
LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs>).
  IF sy-tabix = 2.
    itab = jtab.
  ENDIF.
ENDLOOP.

Example

Deleting all lines of an internal table within a loop over that table. while the loop with ASSIGNING results in runtime error TABLE\_FREE\_IN\_LOOP the loop with INTO is executed without runtime error. The latter is shown for demonstration purposes, but not recommended. Since the deletion happens in a method, it is not detected by the syntax check.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS clear\_itab CHANGING itab TYPE ANY TABLE.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD clear\_itab.
    CLEAR itab.
  ENDMETHOD.
ENDCLASS.
DATA itab TYPE TABLE OF i.
START-OF-SELECTION.
  itab = VALUE #( ( 1 ) ( 2 ) ).
  "No runtime error, but undefined behavior
  LOOP AT itab INTO FINAL(wa).
    demo=>clear\_itab( CHANGING itab = itab ).
  ENDLOOP.
  itab = VALUE #( ( 1 ) ( 2 ) ).
  "Runtime error
  LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs>).
    demo=>clear\_itab( CHANGING itab = itab ).
  ENDLOOP.