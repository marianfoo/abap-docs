---
title: "CDS DDL - DDIC-based View, Date Functions and Time Functions"
description: |
  Date Functions and Time Functions(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_date_time_functions.htm) in a CDS DDIC-based view(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm 'Glossary Entry'): -   Date Functions(https://help.sap.c
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_date_time_functions_v1.htm"
abapFile: "abencds_date_time_functions_v1.htm"
keywords: ["select", "do", "try", "data", "abencds", "date", "time", "functions"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-based View, SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-based View, Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_expressions_v1.htm) →  [CDS DDL - DDIC-Based View, Built-In Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_builtin_functions_v1.htm) →  [CDS DDL - DDIC-based View, Special Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_special_functions_v1.htm) → 

CDS DDL - DDIC-based View, Date Functions and Time Functions

[Date Functions and Time Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_date_time_functions.htm) in a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry"):

-   [Date Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_date_functions_v1.htm)
-   [Time Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_time_functions_v1.htm)
-   [Time Stamp Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_timestamp_functions_v1.htm)
-   [Time Zone Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_timezone_functions_v1.htm)
-   [Date/Time Conversions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_date_time_conversions_v1.htm)

Hints

-   The session variable [$session.system\_date](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_session_variable_v1.htm) is used in a CDS view to provide direct access to the current system date.
-   There is not yet a session variable for the current system time and a CDS view can be given an appropriate [input parameter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_parameter_list_v1.htm) instead. The special annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_parameter_annotations.htm) makes it possible to pass the value of the [ABAP system field](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-uzeit to a parameter of this type.

Continue
[CDS DDL - DDIC-based View, Date Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_date_functions_v1.htm)
[CDS DDL - DDIC-based View, Time Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_time_functions_v1.htm)
[CDS DDL - DDIC-based View, Time Stamp Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_timestamp_functions_v1.htm)
[CDS DDL - DDIC-based View, Time Zone Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_timezone_functions_v1.htm)
[CDS DDL - DDIC-based View, Date/Time Conversions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_date_time_conversions_v1.htm)