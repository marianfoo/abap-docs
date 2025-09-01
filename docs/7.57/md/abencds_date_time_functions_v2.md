  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, Expressions](javascript:call_link\('abencds_expressions_v2.htm'\)) →  [CDS DDL - CDS View Entity, Built-In Functions](javascript:call_link\('abencds_builtin_functions_v2.htm'\)) →  [CDS DDL - CDS View Entity, Special Functions](javascript:call_link\('abencds_special_functions_v2.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS View Entity, Date Functions and Time Functions, ABENCDS_DATE_TIME_FUNCT
IONS_V2, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS View Entity, Date Functions and Time Functions

[Date Functions and Time Functions](javascript:call_link\('abenddic_date_time_functions.htm'\)) in a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"):

-   [Date Functions](javascript:call_link\('abencds_date_functions_v2.htm'\))
-   [Time Functions](javascript:call_link\('abencds_time_functions_v2.htm'\))
-   [Time Stamp Functions](javascript:call_link\('abencds_timestamp_functions_v2.htm'\))
-   [Time Zone Functions](javascript:call_link\('abencds_timezone_functions_v2.htm'\))
-   [Date/Time Conversions](javascript:call_link\('abencds_date_time_conversions_v2.htm'\))

Hints

-   The session variable [$session.system\_date](javascript:call_link\('abencds_session_variable_v2.htm'\)) is used in a CDS view entity to provide direct access to the current system date.
-   There is not yet a session variable for the current system time and a CDS view entity can be given an appropriate [input parameter](javascript:call_link\('abencds_parameter_list_v2.htm'\)) instead. The special annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) makes it possible to pass the value of the [ABAP system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") sy-uzeit to a parameter of this type.

Continue
[CDS DDL - CDS View Entity, Date Functions](javascript:call_link\('abencds_date_functions_v2.htm'\))
[CDS DDL - CDS View Entity, Time Functions](javascript:call_link\('abencds_time_functions_v2.htm'\))
[CDS DDL - CDS View Entity, Time Stamp Functions](javascript:call_link\('abencds_timestamp_functions_v2.htm'\))
[CDS DDL - CDS View Entity, Time Zone Functions](javascript:call_link\('abencds_timezone_functions_v2.htm'\))
[CDS DDL - CDS View Entity, Date/Time Conversions](javascript:call_link\('abencds_date_time_conversions_v2.htm'\))