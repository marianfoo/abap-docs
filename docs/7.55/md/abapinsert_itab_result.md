  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_processing_statements.htm) →  [INSERT itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinsert_itab.htm) → 

INSERT, result

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinsert_itab_shortref.htm)

Syntax

... *{* ASSIGNING <fs> *\[*CASTING*\]* *}*
  *|* *{* REFERENCE INTO dref *}*.

Effect

These additions can only be used when inserting single lines. If the insertion is successful, the addition ASSIGNING is used to assign the inserted line to a field symbol <fs> or the addition REFERENCE INTO is used to set a reference to the inserted line in a reference variable.

The syntax and meaning are the same as when specifying the output behavior in the statement [READ TABLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_table_outdesc.htm) and the same restrictions apply regarding the modification of key fields for [primary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") and [secondary table keys](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"). In particular, inline declarations using the declaration operators [DATA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_inline.htm) and [FIELD-SYMBOL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfield-symbol_inline.htm) are possible.

Example

See addition [INITIAL LINE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinsert_itab_linespec.htm).

Example

After the DO loop, the internal table ref\_tab contains references to each line of the internal table itab.

DATA:
  itab    TYPE SORTED TABLE OF string WITH UNIQUE KEY table\_line,
  ref\_tab TYPE STANDARD TABLE OF REF TO string.
DO strlen( sy-abcde ) TIMES.
  INSERT substring( val = sy-abcde off = sy-index - 1 len = 1 )
         INTO TABLE itab
         REFERENCE INTO DATA(dref).
  APPEND dref TO ref\_tab.
ENDDO.