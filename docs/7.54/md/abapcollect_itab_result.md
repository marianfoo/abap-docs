  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [COLLECT](javascript:call_link\('abapcollect.htm'\)) → 

COLLECT - result

[Quick Reference](javascript:call_link\('abapcollect_shortref.htm'\))

Syntax

... *{* ASSIGNING <fs> *\[*CASTING*\]* *}*
  *|* *{* REFERENCE INTO dref *}*.

Effect

The addition ASSIGNING is used to assign the inserted or existing row to a field symbol <fs> and the addition REFERENCE INTO is used to set a reference to the row in a reference variable.

The syntax and meaning are the same as when specifying the output behavior in the statement [READ TABLE](javascript:call_link\('abapread_table_outdesc.htm'\)) and the same restrictions apply regarding the modification of key fields for [primary](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") and [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"). In particular, inline declarations using the declaration operators [DATA](javascript:call_link\('abendata_inline.htm'\)) and [FIELD-SYMBOL](javascript:call_link\('abenfield-symbol_inline.htm'\)) are possible.

Example

The statement COLLECT is executed until the column num reaches the value 100 for one of the three possible key values.

TYPES:
  BEGIN OF line,
    key TYPE c LENGTH 1,
    num TYPE i,
  END OF line.
DATA
  itab TYPE SORTED TABLE OF line
            WITH UNIQUE KEY key.
DATA(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                        min  = 1
                                        max  = 3 ).
DO.
  COLLECT VALUE line( key = COND #( LET r = rnd->get\_next( ) IN
                                    WHEN r = 1 THEN 'X'
                                    WHEN r = 2 THEN 'Y'
                                    WHEN r = 3 THEN 'Z' )
                      num = 1 ) INTO itab
          ASSIGNING FIELD-SYMBOL(<fs>).
  IF <fs>-num = 100.
    EXIT.
  ENDIF.
ENDDO.
cl\_demo\_output=>display( itab ).