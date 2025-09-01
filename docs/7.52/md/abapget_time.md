  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendate_time_processing.htm) →  [System Fields for Date and Time](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_system_fields.htm) → 

GET TIME

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_time_shortref.htm)

Syntax

GET TIME *\[*FIELD tim*\]*.

Addition:

[... FIELD tim](#!ABAP_ONE_ADD@1@)

Effect

Without the addition FIELD, the [system fields for date and time](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_system_fields.htm), sy-datlo, sy-datum, sy-timlo, and sy-uzeit, are set to the current value. The content of the system fields sy-dayst, sy-fdayw, sy-tzone, and sy-zonlo is not updated.

Note

Except for GET TIME, the system fields are updated after starting a program, after sending a [screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen_glosry.htm "Glossary Entry"), and after changing the [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry").

Example

Approximate runtime measurement. You should use the statement [GET RUN TIME](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_run_time.htm) instead.

GET TIME.
DATA(t1) = sy-timlo.
DO 5000000 TIMES.
ENDDO.
GET TIME.
DATA(t2) = sy-timlo.
cl\_demo\_output=>display( t2 - t1 ).

Addition

... FIELD tim

Effect

The addition FIELD is used to pass the current [system time](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_time_glosry.htm "Glossary Entry") in the format "hhmmss" to the variable tim instead of sy-uzeit, and none of the system fields are updated. The return value of the statement has data type t. The following can be specified for tim:

-   An existing variable of the data type t or a variable to which the type t can be converted.
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm), where a variable of type t is declared.
    

Example

The example has the same function as the previous one.

GET TIME.
DO 5000000 TIMES.
ENDDO.
GET TIME FIELD DATA(time).
cl\_demo\_output=>display( time - sy-uzeit ).