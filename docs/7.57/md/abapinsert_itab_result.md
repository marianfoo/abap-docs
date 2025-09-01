  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) →  [INSERT itab](javascript:call_link\('abapinsert_itab.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: INSERT, result, ABAPINSERT_ITAB_RESULT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0A
Suggestion for improvement:)

INSERT, result

[Short Reference](javascript:call_link\('abapinsert_itab_shortref.htm'\))

Syntax

... *{* ASSIGNING <fs> *\[*CASTING*\]* *\[*ELSE UNASSIGN*\]* *}*
  *|* *{* REFERENCE INTO dref *}*.

Effect

These additions can only be used when inserting single lines. If the insertion is successful, the addition ASSIGNING is used to assign the inserted line to a field symbol <fs> or the addition REFERENCE INTO is used to set a reference to the inserted line in a reference variable.

The syntax and meaning are the same as when specifying the output behavior in the statement [READ TABLE](javascript:call_link\('abapread_table_outdesc.htm'\)) and the same restrictions apply regarding the modification of key fields for [primary](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") and [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"). In particular, inline declarations using the declaration operators [DATA](javascript:call_link\('abendata_inline.htm'\)), [FINAL](javascript:call_link\('abenfinal_inline.htm'\)) and [FIELD-SYMBOL](javascript:call_link\('abenfield-symbol_inline.htm'\)) are possible. The addition ELSE UNASSIGN sets the state of the field symbol behind ASSIGNING to unassigned if the insertion was not successful and sy-subrc is set to 4. Otherwise, the field symbol keeps its previous state.

Example

See addition [INITIAL LINE](javascript:call_link\('abapinsert_itab_linespec.htm'\)).

Example

After the DO loop, the internal table ref\_tab contains references to each line of the internal table itab.

DATA:
  itab    TYPE SORTED TABLE OF string WITH UNIQUE KEY table\_line,
  ref\_tab TYPE STANDARD TABLE OF REF TO string.
DO strlen( sy-abcde ) TIMES.
  INSERT substring( val = sy-abcde off = sy-index - 1 len = 1 )
         INTO TABLE itab
         REFERENCE INTO FINAL(dref).
  APPEND dref TO ref\_tab.
ENDDO.