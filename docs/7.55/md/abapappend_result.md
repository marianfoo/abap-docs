  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_processing_statements.htm) →  [APPEND](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapappend.htm) → 

APPEND, result

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapappend_shortref.htm)

Syntax

... *{* ASSIGNING <fs> *\[*CASTING*\]**}*
  *|* *{* REFERENCE INTO dref *}*.

Effect

These additions can only be used when appending single lines. If the append was successful, the addition ASSIGNING is used to assign the appended line to a field symbol <fs>; the addition REFERENCE INTO is used to set a reference to the appended line in a reference variable.

The syntax and meaning are the same as when specifying the output behavior in the statement [READ TABLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_table_outdesc.htm) and the same restrictions apply regarding the modification of key fields for [primary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") and [secondary table keys](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"). In particular, inline declarations using the declaration operators [DATA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_inline.htm) and [FIELD-SYMBOL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfield-symbol_inline.htm) are possible.

Example

See addition [INITIAL LINE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapappend_linespec.htm).

Example

After the DO loop, the data references in stab point to the random numbers up to 50 and those in ltab point to the random numbers larger than 50 that were appended to itab.

DATA:
  itab TYPE TABLE OF i WITH EMPTY KEY,
  stab TYPE TABLE OF REF TO i WITH EMPTY KEY,
  ltab TYPE TABLE OF REF TO i WITH EMPTY KEY.
DATA(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                        min  = 1
                                        max  = 100 ).
DO 100 TIMES.
  APPEND rnd->get\_next( ) TO itab REFERENCE INTO DATA(dref).
  IF dref->\* <= 50.
    APPEND dref TO stab.
  ELSE.
    APPEND dref TO ltab.
  ENDIF.
ENDDO.