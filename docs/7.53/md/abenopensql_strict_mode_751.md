  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_oview.htm) →  [ABAP SQL - Release-Dependent Syntax Check Modes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_modes.htm) → 

Strict Mode in Release 7.51

-   [Conditions for the Strict Mode](#@@ITOC@@ABENOPENSQL_STRICT_MODE_751_1)

-   [Rules for the Strict Mode](#@@ITOC@@ABENOPENSQL_STRICT_MODE_751_2)

Conditions for the Strict Mode

The strict mode of the syntax check in Release 7.51 applies to all ABAP SQL statements that use one of the following attributes introduced in [Release 7.51](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-751-open_sql.htm):

-   Statement [WITH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith.htm)

-   [Cross join](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_join.htm) in the [SELECT statement](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm)

-   Use of new SQL functions:

-   Numeric function [DIVISION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_arith_func.htm)

-   String functions [LEFT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_string_func.htm), [CONCAT\_WITH\_SPACE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_string_func.htm), [INSTR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_string_func.htm), and [RPAD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_string_func.htm), as well as [LOWER](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_string_func.htm) and [UPPER](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_string_func.htm).

-   Date functions [DATS\_IS\_VALID](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_date_func.htm), [DATS\_DAYS\_BETWEEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_date_func.htm), [DATS\_ADD\_DAYS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_date_func.htm) and [DATS\_ADD\_MONTHS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_date_func.htm)

-   Use of the addition [AS dtype](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_avg_as.htm) in the aggregate expression[AVG](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_aggregate.htm)

-   Use of the addition [EXTENDED RESULT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_extended_result.htm) in the [INTO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinto_clause.htm) clause

-   Use of [OFFSET](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_additions.htm) after the addition [UP TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_additions.htm) of the statement [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm)

-   Use of the additions [ORDER BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_where.htm), [OFFSET](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_where.htm), and [UP TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_where.htm) in the statement [DELETE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_dbtab.htm)

-   [Inline declaration](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninline_declaration_glosry.htm "Glossary Entry") for dbcur in the statement [OPEN CURSOR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapopen_cursor.htm)

Rules for the Strict Mode

The strict mode in Release 7.51 covers all rules of the [strict mode in Release 7.50](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_750.htm), plus the following rules:

-   Only the data types b, s, i, and int8 are allowed for the operand n after the additions [UP TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_additions.htm) and [PACKAGE SIZE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinto_clause.htm) of the statement [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) A literal or a constant cannot have the value 0 here.

-   In the statement [OPEN CURSOR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapopen_cursor.htm) too, the additions grouped under [additional\_options](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_additions.htm) must be specified at the end of the SELECT statement.

-   The syntax of one of the [database hints](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_hint_glosry.htm "Glossary Entry") specified after [%\_HINTS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenosql_db_hints.htm) is checked (if possible).