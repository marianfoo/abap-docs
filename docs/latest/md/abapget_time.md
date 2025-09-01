  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) →  [System Fields for Date and Time](javascript:call_link\('abentime_system_fields.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20GET%20TIME%2C%20ABAPGET_TIME%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

GET TIME

[Short Reference](javascript:call_link\('abapget_time_shortref.htm'\))

Syntax

GET TIME *\[*FIELD tim*\]*.

Addition:

[... FIELD tim](#!ABAP_ONE_ADD@1@)

Effect

Without the addition FIELD, the [system fields for date and time](javascript:call_link\('abentime_system_fields.htm'\)), sy-datlo, sy-datum, sy-timlo, and sy-uzeit, are set to the current value. The content of the system fields sy-dayst, sy-fdayw, sy-tzone, and sy-zonlo is not updated.

Hint

Besides with GET TIME, the system fields are updated after a program is started, a [screen layout](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") is sent, and the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") is changed.

Example

Approximate runtime measurement. The statement [GET RUN TIME](javascript:call_link\('abapget_run_time.htm'\)) should be used instead.

GET TIME.
FINAL(t1) = sy-timlo.
DO 5000000 TIMES.
ENDDO.
GET TIME.
FINAL(t2) = sy-timlo.
cl\_demo\_output=>display( t2 - t1 ).

Addition   

... FIELD tim

Effect

The addition FIELD is used to pass the current [system time](javascript:call_link\('abensystem_time_glosry.htm'\) "Glossary Entry") in the format hhmmss to the variable tim instead of sy-uzeit and none of the system fields are updated. The return value of the statement has the data type t. The following can be specified for tim:

-   An existing variable of the data type t or a variable to which the type t can be converted.
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)) or [FINAL(var)](javascript:call_link\('abenfinal_inline.htm'\)), where a variable of type t is declared.

Example

The example has the same function as the previous example.

GET TIME.
DO 5000000 TIMES.
ENDDO.
GET TIME FIELD FINAL(time).
cl\_demo\_output=>display( time - sy-uzeit ).