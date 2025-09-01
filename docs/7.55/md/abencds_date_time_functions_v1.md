  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-based View, Expressions](javascript:call_link\('abencds_expressions_v1.htm'\)) →  [CDS DDL - DDIC-based View, Built-In Functions](javascript:call_link\('abencds_builtin_functions_v1.htm'\)) →  [CDS DDL - DDIC-based View, Special Functions](javascript:call_link\('abencds_special_functions_v1.htm'\)) → 

CDS DDL - DDIC-based View, Date Functions and Time Functions

[Date Functions and Time Functions](javascript:call_link\('abenddic_date_time_functions.htm'\)) in a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"):

-   [Date Functions](javascript:call_link\('abencds_date_functions_v1.htm'\))

-   [Time Functions](javascript:call_link\('abencds_time_functions_v1.htm'\))

-   [Time Stamp Functions](javascript:call_link\('abencds_timestamp_functions_v1.htm'\))

-   [Time Zone Functions](javascript:call_link\('abencds_timezone_functions_v1.htm'\))

-   [Date/Time Conversions](javascript:call_link\('abencds_date_time_conversions_v1.htm'\))

Hints

-   The session variable [$session.system\_date](javascript:call_link\('abencds_session_variable_v1.htm'\)) is used in a CDS view to provide direct access to the current system date.

-   There is not yet a session variable for the current system time and a CDS view can be given an appropriate [input parameter](javascript:call_link\('abencds_parameter_list_v1.htm'\)) instead. The special annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) makes it possible to pass the value of the [ABAP system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") sy-uzeit to a parameter of this type.

Continue
[CDS DDL - DDIC-based View, Date Functions](javascript:call_link\('abencds_date_functions_v1.htm'\))
[CDS DDL - DDIC-based View, Time Functions](javascript:call_link\('abencds_time_functions_v1.htm'\))
[CDS DDL - DDIC-based View, Time Stamp Functions](javascript:call_link\('abencds_timestamp_functions_v1.htm'\))
[CDS DDL - DDIC-based View, Time Zone Functions](javascript:call_link\('abencds_timezone_functions_v1.htm'\))
[CDS DDL - DDIC-based View, Date/Time Conversions](javascript:call_link\('abencds_date_time_conversions_v1.htm'\))