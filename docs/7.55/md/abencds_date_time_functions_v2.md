  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_expressions_v2.htm) →  [CDS DDL - CDS View Entity, Built-In Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_builtin_functions_v2.htm) →  [CDS DDL - CDS View Entity, Special Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_special_functions_v2.htm) → 

CDS DDL - CDS View Entity, Date Functions and Time Functions

[Date Functions and Time Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_date_time_functions.htm) in a [CDS view entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_glosry.htm "Glossary Entry"):

-   [Date Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_functions_v2.htm)

-   [Time Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_time_functions_v2.htm)

-   [Time Stamp Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timestamp_functions_v2.htm)

-   [Time Zone Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timezone_functions_v2.htm)

-   [Date/Time Conversions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v2.htm)

Hints

-   The session variable [$session.system\_date](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_session_variable_v2.htm) is used in a CDS view entity to provide direct access to the current system date.

-   There is not yet a session variable for the current system time and a CDS view entity can be given an appropriate [input parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_list_v2.htm) instead. The special annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_parameter_annotations.htm) makes it possible to pass the value of the [ABAP system field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-uzeit to a parameter of this type.

Continue
[CDS DDL - CDS View Entity, Date Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_functions_v2.htm)
[CDS DDL - CDS View Entity, Time Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_time_functions_v2.htm)
[CDS DDL - CDS View Entity, Time Stamp Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timestamp_functions_v2.htm)
[CDS DDL - CDS View Entity, Time Zone Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timezone_functions_v2.htm)
[CDS DDL - CDS View Entity, Date/Time Conversions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v2.htm)