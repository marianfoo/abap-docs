  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, Built-In Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_builtin_functions.htm) →  [ABAP CDS - Special Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_special_functions.htm) → 

ABAP CDS - Date Functions and Time Functions

[Date Functions and Time Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_date_time_functions.htm) in a [CDS View](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"):

-   [Date Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_functions.htm)

-   [Time Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_time_functions.htm)

-   [Time Stamp Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_timestamp_functions.htm)

-   [Time Zone Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_timezone_functions.htm)

-   [Date/Time Conversions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_time_conversions.htm)

Notes

-   The session variable [$session.system\_date](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm) is used in a CDS view to provide direct access to the current system date.

-   There is not yet a session variable for the current system time and a CDS view can be given an appropriate [input parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_list.htm) instead. The special annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) makes it possible to pass the value of the [ABAP system field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-uzeit to a parameter of this type.

Continue
[ABAP CDS - Date Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_functions.htm)
[ABAP CDS - Time Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_time_functions.htm)
[ABAP CDS - Time Stamp Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_timestamp_functions.htm)
[ABAP CDS - Time Zone Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_timezone_functions.htm)
[ABAP CDS - Date/Time Conversions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_time_conversions.htm)