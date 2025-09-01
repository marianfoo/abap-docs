  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Built-In Functions](javascript:call_link\('abencds_f1_builtin_functions.htm'\)) →  [ABAP CDS - Special Functions](javascript:call_link\('abencds_special_functions.htm'\)) → 

ABAP CDS - Date Functions and Time Functions

[Date Functions and Time Functions](javascript:call_link\('abenddic_date_time_functions.htm'\)) in a [CDS View](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):

-   [Date Functions](javascript:call_link\('abencds_f1_date_functions.htm'\))

-   [Time Functions](javascript:call_link\('abencds_f1_time_functions.htm'\))

-   [Time Stamp Functions](javascript:call_link\('abencds_f1_timestamp_functions.htm'\))

-   [Time Zone Functions](javascript:call_link\('abencds_f1_timezone_functions.htm'\))

-   [Date/Time Conversions](javascript:call_link\('abencds_f1_date_time_conversions.htm'\))

Notes

-   The session variable [$session.system\_date](javascript:call_link\('abencds_f1_session_variable.htm'\)) is used in a CDS view to provide direct access to the current system date.

-   There is not yet a session variable for the current system time and a CDS view can be given an appropriate [input parameter](javascript:call_link\('abencds_f1_parameter_list.htm'\)) instead. The special annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) makes it possible to pass the value of the [ABAP system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") sy-uzeit to a parameter of this type.

Continue
[ABAP CDS - Date Functions](javascript:call_link\('abencds_f1_date_functions.htm'\))
[ABAP CDS - Time Functions](javascript:call_link\('abencds_f1_time_functions.htm'\))
[ABAP CDS - Time Stamp Functions](javascript:call_link\('abencds_f1_timestamp_functions.htm'\))
[ABAP CDS - Time Zone Functions](javascript:call_link\('abencds_f1_timezone_functions.htm'\))
[ABAP CDS - Date/Time Conversions](javascript:call_link\('abencds_f1_date_time_conversions.htm'\))