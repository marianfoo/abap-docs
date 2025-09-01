  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [INSERT itab](javascript:call_link\('abapinsert_itab.htm'\)) → 

INSERT - result

[Quick Reference](javascript:call_link\('abapinsert_itab_shortref.htm'\))

Syntax

... *{* ASSIGNING <fs> *\[*CASTING*\]* *}*
  *|* *{* REFERENCE INTO dref *}*.

Effect

These additions can only be used when inserting single rows. If inserted successfully, the addition ASSIGNING is used to assign the inserted row to a field symbol <fs> or the addition REFERENCE INTO is used to set a reference to the inserted row in a reference variable.

The syntax and meaning are the same as when specifying the output behavior in the statement [READ TABLE](javascript:call_link\('abapread_table_outdesc.htm'\)) and the same restrictions apply regarding the modification of key fields for [primary](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") and [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"). In particular, inline declarations using the declaration operators [DATA](javascript:call_link\('abendata_inline.htm'\)) and [FIELD-SYMBOL](javascript:call_link\('abenfield-symbol_inline.htm'\)) are possible.

Example

See the addition [INITIAL LINE](javascript:call_link\('abapinsert_itab_linespec.htm'\)).

Example

After the DO loop, the internal table ref\_tab contains references to each row of the internal table itab.

DATA:
  itab    TYPE SORTED TABLE OF string WITH UNIQUE KEY table\_line,
  ref\_tab TYPE STANDARD TABLE OF REF TO string.
DO strlen( sy-abcde ) TIMES.
  INSERT substring( val = sy-abcde off = sy-index - 1 len = 1 )
         INTO TABLE itab
         REFERENCE INTO DATA(dref).
  APPEND dref TO ref\_tab.
ENDDO.