  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Overview](javascript:call_link\('abenopen_sql_oview.htm'\)) →  [Open SQL - Release-Dependent Syntax Check Modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) → 

Strict Mode in Release 7.51

-   [Conditions for the Strict Mode](#abenopensql-strict-mode-751-1--------rules-for-the-strict-mode---@ITOC@@ABENOPENSQL_STRICT_MODE_751_2)

Conditions for the Strict Mode

The strict mode of the syntax check in Release 7.51 applies to all Open SQL statements that use one of the following attributes introduced in [Release 7.51](javascript:call_link\('abennews-751-open_sql.htm'\)):

-   Statement [WITH](javascript:call_link\('abapwith.htm'\))

-   [Cross join](javascript:call_link\('abapselect_join.htm'\)) in the [SELECT statement](javascript:call_link\('abapselect.htm'\))

-   Use of new SQL functions:

-   Numeric function [DIVISION](javascript:call_link\('abensql_arith_func.htm'\))

-   String functions [LEFT](javascript:call_link\('abensql_string_func.htm'\)), [CONCAT\_WITH\_SPACE](javascript:call_link\('abensql_string_func.htm'\)), [INSTR](javascript:call_link\('abensql_string_func.htm'\)), and [RPAD](javascript:call_link\('abensql_string_func.htm'\)), as well as [LOWER](javascript:call_link\('abensql_string_func.htm'\)) and [UPPER](javascript:call_link\('abensql_string_func.htm'\)).

-   Date functions [DATS\_IS\_VALID](javascript:call_link\('abensql_date_func.htm'\)), [DATS\_DAYS\_BETWEEN](javascript:call_link\('abensql_date_func.htm'\)), [DATS\_ADD\_DAYS](javascript:call_link\('abensql_date_func.htm'\)) and [DATS\_ADD\_MONTHS](javascript:call_link\('abensql_date_func.htm'\))

-   Use of the addition [AS dtype](javascript:call_link\('abapselect_avg_as.htm'\)) in the aggregate expression[AVG](javascript:call_link\('abapselect_aggregate.htm'\))

-   Use of the addition [EXTENDED RESULT](javascript:call_link\('abapselect_extended_result.htm'\)) in the [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause

-   Use of [OFFSET](javascript:call_link\('abapselect_additions.htm'\)) after the addition [UP TO](javascript:call_link\('abapselect_additions.htm'\)) of the statement [SELECT](javascript:call_link\('abapselect.htm'\))

-   Use of the additions [ORDER BY](javascript:call_link\('abapdelete_where.htm'\)), [OFFSET](javascript:call_link\('abapdelete_where.htm'\)), and [UP TO](javascript:call_link\('abapdelete_where.htm'\)) in the statement [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\))

-   [Inline declaration](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry") for dbcur in the statement [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\))

Rules for the Strict Mode

The strict mode in Release 7.51 covers all rules of the [strict mode in Release 7.50](javascript:call_link\('abenopensql_strict_mode_750.htm'\)), plus the following rules:

-   Only the data types b, s, i, and int8 are allowed for the operand n after the additions [UP TO](javascript:call_link\('abapselect_additions.htm'\)) and [PACKAGE SIZE](javascript:call_link\('abapinto_clause.htm'\)) of the statement [SELECT](javascript:call_link\('abapselect.htm'\)) A literal or a constant cannot have the value 0 here.

-   In the statement [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)) too, the additions grouped under [additional\_options](javascript:call_link\('abapselect_additions.htm'\)) must be specified at the end of the SELECT statement.

-   The syntax of one of the [database hints](javascript:call_link\('abendatabase_hint_glosry.htm'\) "Glossary Entry") specified after [%\_HINTS](javascript:call_link\('abenosql_db_hints.htm'\)) is checked (if possible).