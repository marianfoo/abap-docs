  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_processing_statements.htm) →  [MODIFY itab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab.htm) →  [MODIFY itab - itab\_line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab_single.htm) → 

MODIFY itab - result

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab_shortref.htm)

Syntax

... *{* ASSIGNING <fs> *\[*CASTING*\]* *}*
  *|* *{* REFERENCE INTO dref *}*.

Effect

These additions are possible only when modifying [single rows](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab_single.htm). If modified successfully, the addition ASSIGNING is used to assign the row to a field symbol and the addition REFERENCE INTO is used to set a reference to the modified row in a reference variable.

The syntax and meaning are the same as when specifying the output behavior in the statement [READ TABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table_outdesc.htm) and the same restrictions apply regarding the modification of key fields for [primary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") and [secondary table keys](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"). In particular, inline declarations using the declaration operators [DATA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_inline.htm) and [FIELD-SYMBOL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfield-symbol_inline.htm) are possible.

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