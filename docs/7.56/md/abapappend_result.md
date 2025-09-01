  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) →  [APPEND](javascript:call_link\('abapappend.htm'\)) → 

APPEND, result

[Short Reference](javascript:call_link\('abapappend_shortref.htm'\))

Syntax

... *{* ASSIGNING <fs> *\[*CASTING*\]**}*
  *|* *{* REFERENCE INTO dref *}*.

Effect

These additions can only be used when appending single lines. If the append was successful, the addition ASSIGNING is used to assign the appended line to a field symbol <fs>; the addition REFERENCE INTO is used to set a reference to the appended line in a reference variable.

The syntax and meaning are the same as when specifying the output behavior in the statement [READ TABLE](javascript:call_link\('abapread_table_outdesc.htm'\)) and the same restrictions apply regarding the modification of key fields for [primary](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") and [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"). In particular, inline declarations using the declaration operators [DATA](javascript:call_link\('abendata_inline.htm'\)) and [FIELD-SYMBOL](javascript:call_link\('abenfield-symbol_inline.htm'\)) are possible.

Example

See addition [INITIAL LINE](javascript:call_link\('abapappend_linespec.htm'\)).

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