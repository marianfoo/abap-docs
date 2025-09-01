  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-Based View, Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_expressions_v1.htm) →  [CDS DDL - DDIC-Based View, Built-In Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_builtin_functions_v1.htm) →  [CDS DDL - DDIC-Based View, Special Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_special_functions_v1.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20Date%20Functions%20and%20Time%20Functions%2C%20ABENCDS_DATE_TIME_FUNCTIONS_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion%20for%20improvement:)

CDS DDL - DDIC-Based View, Date Functions and Time Functions

[Date Functions and Time Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_date_time_functions.htm) in a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry"):

-   [Date Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_functions_v1.htm)
-   [Time Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_time_functions_v1.htm)
-   [Time Stamp Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timestamp_functions_v1.htm)
-   [Time Zone Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timezone_functions_v1.htm)
-   [Date/Time Conversions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v1.htm)

Hints

-   The session variable [$session.system\_date](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_variable_v1.htm) is used in a CDS view to provide direct access to the current system date.
-   There is not yet a session variable for the current system time and a CDS view can be given an appropriate [input parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_list_v1.htm) instead. The special annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_parameter_annotations.htm) makes it possible to pass the value of the [ABAP system field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-uzeit to a parameter of this type.

Continue
[CDS DDL - DDIC-Based View, Date Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_functions_v1.htm)
[CDS DDL - DDIC-Based View, Time Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_time_functions_v1.htm)
[CDS DDL - DDIC-Based View, Time Stamp Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timestamp_functions_v1.htm)
[CDS DDL - DDIC-Based View, Time Zone Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_timezone_functions_v1.htm)
[CDS DDL - DDIC-Based View, Date/Time Conversions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_conversions_v1.htm)