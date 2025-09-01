  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenabap_sql_oview.htm'\)) →  [ABAP SQL - Release-Dependent Syntax Check Modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20Strict%20Mode%20in%20ABAP%20Release%207.51%2C%20ABENABAP_SQL_STRICTMODE_751%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

ABAP SQL - Strict Mode in ABAP Release 7.51

-   [Conditions for the Strict Mode](#abenabap-sql-strictmode-751-1-------rules-for-the-strict-mode---@ITOC@@ABENABAP_SQL_STRICTMODE_751_2)

Conditions for the Strict Mode   

The strict mode of the syntax check in ABAP release 7.51 applies to all ABAP SQL statements that use one of the following properties introduced in [ABAP release 7.51](javascript:call_link\('abennews-751-abap_sql.htm'\)):

-   Use of the string functions [LEFT](javascript:call_link\('abensql_string_func.htm'\)), [CONCAT\_WITH\_SPACE](javascript:call_link\('abensql_string_func.htm'\)), [INSTR](javascript:call_link\('abensql_string_func.htm'\)), and [RPAD](javascript:call_link\('abensql_string_func.htm'\))
-   Use of [OFFSET](javascript:call_link\('abapselect_up_to_offset.htm'\)) after the addition [UP TO](javascript:call_link\('abapselect_up_to_offset.htm'\)) of the statement [SELECT](javascript:call_link\('abapselect.htm'\))
-   Use of the additions [ORDER BY](javascript:call_link\('abapdelete_where.htm'\)), [OFFSET](javascript:call_link\('abapdelete_where.htm'\)), and [UP TO](javascript:call_link\('abapdelete_where.htm'\)) in the statement [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\))
-   Statement [WITH](javascript:call_link\('abapwith.htm'\))
-   [Cross join](javascript:call_link\('abapselect_join.htm'\)) in the [SELECT statement](javascript:call_link\('abapselect.htm'\))
-   [Inline declaration](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry") for dbcur in the statement [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)).
-   Use of new SQL functions:
    -   Numeric function [DIVISION](javascript:call_link\('abensql_arith_func.htm'\))
    -   String functions [LOWER](javascript:call_link\('abensql_string_func.htm'\)) and [UPPER](javascript:call_link\('abensql_string_func.htm'\))
    -   Date functions [DATS\_IS\_VALID](javascript:call_link\('abensql_date_func.htm'\)), [DATS\_DAYS\_BETWEEN](javascript:call_link\('abensql_date_func.htm'\)), [DATS\_ADD\_DAYS](javascript:call_link\('abensql_date_func.htm'\)) and [DATS\_ADD\_MONTHS](javascript:call_link\('abensql_date_func.htm'\))
-   Use of the addition [AS dtype](javascript:call_link\('abapselect_avg_as.htm'\)) in the aggregate function [AVG](javascript:call_link\('abensql_agg_func.htm'\))
-   Use of the addition [EXTENDED RESULT](javascript:call_link\('abapselect_extended_result.htm'\)) in the [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause

Rules for the Strict Mode   

The strict mode in ABAP release 7.51 covers all rules of the [strict mode in ABAP release 7.50](javascript:call_link\('abenabap_sql_strictmode_750.htm'\)), plus the following rules:

-   Only the data types b, s, i, and int8 are allowed for the operand n after the additions [UP TO](javascript:call_link\('abapselect_up_to_offset.htm'\)) and [PACKAGE SIZE](javascript:call_link\('abapinto_clause.htm'\)) of the statement [SELECT](javascript:call_link\('abapselect.htm'\)). A literal or a constant cannot have the value 0 here.
-   In the statement [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)), the additions grouped under [UP TO](javascript:call_link\('abapselect_up_to_offset.htm'\)), [OFFSET](javascript:call_link\('abapselect_up_to_offset.htm'\)), and [abap\_options](javascript:call_link\('abapselect_additions.htm'\)) must also be specified at the end of the SELECT statement.
-   If it is not possible to make a [lossless](javascript:call_link\('abapmove_exact.htm'\)) read on a [host constant](javascript:call_link\('abenhost_constant_glosry.htm'\) "Glossary Entry"), a syntax error occurs.
-   The syntax of one of the [database hints](javascript:call_link\('abendatabase_hint_glosry.htm'\) "Glossary Entry") specified after [%\_HINTS](javascript:call_link\('abenabap_sql_db_hints.htm'\)) is checked, if possible.