  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_oview.htm) →  [ABAP SQL - Release-Dependent Syntax Check Modes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strict_modes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20Strict%20Mode%20in%20ABAP%20Release%207.56%2C%20ABENABAP_SQL_STRICTMODE_756%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

ABAP SQL - Strict Mode in ABAP Release 7.56

-   [Conditions for the Strict Mode](#@@ITOC@@ABENABAP_SQL_STRICTMODE_756_1)
-   [Rules for the Strict Mode](#@@ITOC@@ABENABAP_SQL_STRICTMODE_756_2)

Conditions for the Strict Mode   

The strict mode of the syntax check in ABAP release 7.56 applies to all ABAP SQL statements that use one of the following features introduced in [ABAP release 7.56](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-756-abap_sql.htm):

-   Use of the string function [INITCAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm).
-   Use of one of the new date/time functions [IS\_VALID](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_time_func.htm), [EXTRACT\_YEAR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_date_func.htm), [EXTRACT\_MONTH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_date_func.htm), [EXTRACT\_DAY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_date_func.htm), [EXTRACT\_HOUR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_time_func.htm), [EXTRACT\_MINUTE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_time_func.htm), [EXTRACT\_SECOND](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_time_func.htm), [DAYNAME](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_date_func.htm), [MONTHNAME](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_date_func.htm), [WEEKDAY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_date_func.htm), [DAYS\_BETWEEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_date_func.htm), [ADD\_DAYS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_date_func.htm), and [ADD\_MONTHS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_date_func.htm).
-   Use of [new casts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_cast.htm).
-   Use of the set operators [INTERSECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm) and [EXCEPT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm).
-   Use of the function [UNIT\_CONVERSION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_curr_unit_conv_func.htm).
-   New special expression [sql\_null](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_null.htm).
-   Use of the CDS system table functions [SERIES\_GENERATE\_DATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_series_generators.htm), [SERIES\_GENERATE\_INTEGER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_series_generators.htm), [SERIES\_GENERATE\_TIME](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_series_generators.htm), and [SERIES\_GENERATE\_TIMESTAMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_series_generators.htm).
-   Use of the parameter start in the string function [REPLACE\_REGEXPR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm).
-   Use of the string function [SUBSTRING\_REGEXPR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm).

Rules for the Strict Mode   

The strict mode in ABAP release 7.56 covers all rules of the [strict mode in ABAP release 7.55](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_755.htm).