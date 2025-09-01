  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [APPEND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapappend.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20APPEND%2C%20result%2C%20ABAPAPPEND_RESULT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

APPEND, result

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapappend_shortref.htm)

Syntax

... *{* ASSIGNING <fs> *\[*CASTING*\]**}*
  *|* *{* REFERENCE INTO dref *}*.

Effect

These additions can only be used when appending single lines. If the append was successful, the addition ASSIGNING is used to assign the appended line to a field symbol <fs>; the addition REFERENCE INTO is used to set a reference to the appended line in a reference variable.

The syntax and meaning are the same as when specifying the output behavior in the statement [READ TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_outdesc.htm) with the exception that the addition ELSE UNASSIGN cannot be used. The same restrictions apply regarding the modification of key fields for [primary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") and [secondary table keys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"). In particular, inline declarations using the declaration operators [DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_inline.htm), [FINAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfinal_inline.htm) and [FIELD-SYMBOL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield-symbol_inline.htm) are possible.

Example

Append two lines to an internal table and assign a field symbol to the first line and set a reference in the second line.

DATA itab TYPE TABLE OF string WITH EMPTY KEY.
APPEND \`First line\`  TO itab ASSIGNING FIELD-SYMBOL(<fs>).
APPEND \`Second line\` TO itab REFERENCE INTO FINAL(dref).
cl\_demo\_output=>new(
  )->write( <fs>
  )->write( dref->\*
  )->display( ).

Example

After the DO loop, the data references in stab point to the random numbers up to 50 and those in ltab point to the random numbers greater than 50 that were appended to itab.

DATA:
  itab TYPE TABLE OF i WITH EMPTY KEY,
  stab TYPE TABLE OF REF TO i WITH EMPTY KEY,
  ltab TYPE TABLE OF REF TO i WITH EMPTY KEY.
FINAL(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                         min  = 1
                                         max  = 100 ).
DO 100 TIMES.
  APPEND rnd->get\_next( ) TO itab REFERENCE INTO FINAL(dref).
  IF dref->\* <= 50.
    APPEND dref TO stab.
  ELSE.
    APPEND dref TO ltab.
  ENDIF.
ENDDO.