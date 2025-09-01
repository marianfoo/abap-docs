---
title: "Conditions for the Strict Mode"
description: |
  The strict mode of the syntax check in ABAP release 7.55 applies to all ABAP SQL statements that use one of the following properties introduced in ABAP release 7.55(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-755-abap_sql.htm): -   Use of the function ALLOW_PRECISION
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strictmode_755.htm"
abapFile: "abenabap_sql_strictmode_755.htm"
keywords: ["select", "update", "do", "if", "try", "data", "abenabap", "sql", "strictmode", "755"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_oview.htm) →  [ABAP SQL - Release-Dependent Syntax Check Modes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strict_modes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20Strict%20Mode%20in%20ABAP%20Release%207.55%2C%20ABENABAP_SQL_STRICTMODE_755%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

ABAP SQL - Strict Mode in ABAP Release 7.55

-   [Conditions for the Strict Mode](#abenabap-sql-strictmode-755-1-------rules-for-the-strict-mode---@ITOC@@ABENABAP_SQL_STRICTMODE_755_2)

Conditions for the Strict Mode   

The strict mode of the syntax check in ABAP release 7.55 applies to all ABAP SQL statements that use one of the following properties introduced in [ABAP release 7.55](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-755-abap_sql.htm):

-   Use of the function [ALLOW\_PRECISION\_LOSS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_allow_precision_loss.htm)
-   Optional addition [window frame specification](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_over.htm)
-   Window functions [FIRST\_VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_win_func.htm) and [LAST\_VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_win_func.htm).
-   Use of one of the new date/time functions [TSTMPL\_TO\_UTCL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_date_time_conversions.htm), [TSTMPL\_FROM\_UTCL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_date_time_conversions.htm), [DATS\_TO\_DATN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_date_time_conversions.htm), [DATS\_FROM\_DATN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_date_time_conversions.htm), [TIMS\_TO\_TIMN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_date_time_conversions.htm), [TIMS\_FROM\_TIMN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_date_time_conversions.htm), [UTCL\_CURRENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_timestamp_func.htm), [UTCL\_ADD\_SECONDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_timestamp_func.htm), [UTCL\_SECONDS\_BETWEEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_timestamp_func.htm), [DATN\_ADD\_DAYS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_date_func.htm), [DATN\_ADD\_MONTHS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_date_func.htm), and [DATN\_DAYS\_BETWEEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_date_func.htm).
-   New additions after the ORDER BY clause: [NULLS FIRST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaporderby_clause.htm) and [NULLS LAST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaporderby_clause.htm).
-   Use of one of the new [aggregate functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_agg_func.htm) MEDIAN, STDDEV, VAR, CORR, and CORR\_SPEARMAN.
-   New geometry conversion function as\_geo\_json.
-   Subqueries in a relational expression using the operator [IN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_list_in.htm) with an operand list.
-   Use of the window function [NTILE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_win_func.htm)
-   Use of the SQL function [TO\_CLOB](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_type_conv_func.htm)
-   Use of the SQL function [TO\_BLOB](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_type_conv_func.htm)
-   Use of [typed literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_typed_literals.htm)
-   Use of the string functions [REPLACE\_REGEXPR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_string_func.htm), [LIKE\_REGEXPR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_string_func.htm), and [OCCURRENCES\_REGEXPR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_string_func.htm).
-   Use of [set indicators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate_set_indicator.htm) after [UPDATE FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate_source.htm).

Rules for the Strict Mode   

The strict mode in ABAP release 7.55 covers all rules of the [strict mode in ABAP release 7.54](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strictmode_754.htm).