  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_oview.htm) →  [ABAP SQL - Release-Dependent Syntax Check Modes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strict_modes.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL - Strict Mode in Release 7.56, ABENABAP_SQL_STRICTMODE_756, 757%0D%0A%0D%0AE
rror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP SQL - Strict Mode in Release 7.56

-   [Conditions for the Strict Mode](#@@ITOC@@ABENABAP_SQL_STRICTMODE_756_1)
-   [Rules for the Strict Mode](#@@ITOC@@ABENABAP_SQL_STRICTMODE_756_2)

Conditions for the Strict Mode   

The strict mode of the syntax check in Release 7.56 applies to all ABAP SQL statements that use one of the following features introduced in [Release 7.56](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-756-abap_sql.htm):

-   Use of the string function [INITCAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm).
-   Use of one of the new date/time functions [IS\_VALID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_time_func.htm), [EXTRACT\_YEAR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm), [EXTRACT\_MONTH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm), [EXTRACT\_DAY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm), [EXTRACT\_HOUR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_time_func.htm), [EXTRACT\_MINUTE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_time_func.htm), [EXTRACT\_SECOND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_time_func.htm), [DAYNAME](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm), [MONTHNAME](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm), [WEEKDAY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm), [DAYS\_BETWEEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm), [ADD\_DAYS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm), and [ADD\_MONTHS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm).
-   Use of [new casts](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_cast.htm).
-   Use of [INTERSECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion.htm) and [EXCEPT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion.htm).
-   Use of the CDS system table functions [SERIES\_GENERATE\_DATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_series_generators.htm), [SERIES\_GENERATE\_INTEGER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_series_generators.htm), [SERIES\_GENERATE\_TIME](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_series_generators.htm), and [SERIES\_GENERATE\_TIMESTAMP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_series_generators.htm).
-   Use of the parameter start in the string function [REPLACE\_REGEXPR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm).
-   Use of the string function [SUBSTRING\_REGEXPR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm).

Rules for the Strict Mode   

The strict mode in Release 7.56 covers all rules of the [strict mode in Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_755.htm).