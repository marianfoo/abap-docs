  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [MODIFY itab](javascript:call_link\('abapmodify_itab.htm'\)) →  [MODIFY itab - itab\_line](javascript:call_link\('abapmodify_itab_single.htm'\)) → 

MODIFY itab - result

[Quick Reference](javascript:call_link\('abapmodify_itab_shortref.htm'\))

Syntax

... *{* ASSIGNING <fs> *\[*CASTING*\]* *}*
  *|* *{* REFERENCE INTO dref *}*.

Effect

These additions are possible only when modifying [single rows](javascript:call_link\('abapmodify_itab_single.htm'\)). If modified successfully, the addition ASSIGNING is used to assign the row to a field symbol and the addition REFERENCE INTO is used to set a reference to the modified row in a reference variable.

The syntax and meaning are the same as when specifying the output behavior in the statement [READ TABLE](javascript:call_link\('abapread_table_outdesc.htm'\)) and the same restrictions apply regarding the modification of key fields for [primary](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") and [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"). In particular, inline declarations using the declaration operators [DATA](javascript:call_link\('abendata_inline.htm'\)) and [FIELD-SYMBOL](javascript:call_link\('abenfield-symbol_inline.htm'\)) are possible.

Example

Changes smoking seats to non-smoking seats in an internal table of flight bookings. After the loop, each row in the reference table reftab references a row in itab in which a change took place.

DATA itab TYPE HASHED TABLE OF sbook
          WITH UNIQUE KEY carrid connid fldate bookid.
SELECT \*
       FROM sbook
       INTO TABLE @itab.
DATA reftab TYPE TABLE OF REF TO sbook WITH EMPTY KEY.
LOOP AT itab INTO DATA(line) WHERE smoker = 'X'.
  CLEAR line-smoker.
  MODIFY TABLE itab FROM line TRANSPORTING smoker
                    REFERENCE INTO DATA(dref).
  APPEND dref TO reftab.
ENDLOOP.