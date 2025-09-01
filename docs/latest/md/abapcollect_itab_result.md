  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) →  [COLLECT](javascript:call_link\('abapcollect.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20COLLECT%2C%20result%2C%20ABAPCOLLECT_ITAB_RESULT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

COLLECT, result

[Short Reference](javascript:call_link\('abapcollect_shortref.htm'\))

Syntax

... *{* ASSIGNING <fs> *\[*CASTING*\]* *}*
  *|* *{* REFERENCE INTO dref *}*.

Effect

The addition ASSIGNING is used to assign the inserted or existing line to a field symbol <fs> and the addition REFERENCE INTO is used to set a reference to the line in a reference variable.

The syntax and meaning are the same as when specifying the output behavior in the statement [READ TABLE](javascript:call_link\('abapread_table_outdesc.htm'\)) with the exception that the addition ELSE UNASSIGN cannot be used. The same restrictions apply regarding the modification of key fields for [primary](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") and [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"). In particular, inline declarations using the declaration operators [DATA](javascript:call_link\('abendata_inline.htm'\)), [FINAL](javascript:call_link\('abenfinal_inline.htm'\)) and [FIELD-SYMBOL](javascript:call_link\('abenfield-symbol_inline.htm'\)) are possible.

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
DATA(t) = CONV i( cl\_demo\_date\_time=>get\_utc\_time( ) ).
FINAL(rnd) = cl\_abap\_random\_int=>create( seed = t
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