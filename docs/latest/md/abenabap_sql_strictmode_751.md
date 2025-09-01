  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_oview.htm) →  [ABAP SQL - Release-Dependent Syntax Check Modes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strict_modes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20Strict%20Mode%20in%20ABAP%20Release%207.51%2C%20ABENABAP_SQL_STRICTMODE_751%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

ABAP SQL - Strict Mode in ABAP Release 7.51

-   [Conditions for the Strict Mode](#@@ITOC@@ABENABAP_SQL_STRICTMODE_751_1)
-   [Rules for the Strict Mode](#@@ITOC@@ABENABAP_SQL_STRICTMODE_751_2)

Conditions for the Strict Mode   

The strict mode of the syntax check in ABAP release 7.51 applies to all ABAP SQL statements that use one of the following properties introduced in [ABAP release 7.51](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-751-abap_sql.htm):

-   Use of the string functions [LEFT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_string_func.htm), [CONCAT\_WITH\_SPACE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_string_func.htm), [INSTR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_string_func.htm), and [RPAD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_string_func.htm)
-   Use of [OFFSET](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_up_to_offset.htm) after the addition [UP TO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_up_to_offset.htm) of the statement [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm)
-   Use of the additions [ORDER BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_where.htm), [OFFSET](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_where.htm), and [UP TO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_where.htm) in the statement [DELETE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_dbtab.htm)
-   Statement [WITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwith.htm)
-   [Cross join](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_join.htm) in the [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm)
-   [Inline declaration](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninline_declaration_glosry.htm "Glossary Entry") for dbcur in the statement [OPEN CURSOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_cursor.htm).
-   Use of new SQL functions:
    -   Numeric function [DIVISION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_arith_func.htm)
    -   String functions [LOWER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_string_func.htm) and [UPPER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_string_func.htm)
    -   Date functions [DATS\_IS\_VALID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_date_func.htm), [DATS\_DAYS\_BETWEEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_date_func.htm), [DATS\_ADD\_DAYS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_date_func.htm) and [DATS\_ADD\_MONTHS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_date_func.htm)
-   Use of the addition [AS dtype](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_avg_as.htm) in the aggregate function [AVG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_agg_func.htm)
-   Use of the addition [EXTENDED RESULT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_extended_result.htm) in the [INTO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm) clause

Rules for the Strict Mode   

The strict mode in ABAP release 7.51 covers all rules of the [strict mode in ABAP release 7.50](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strictmode_750.htm), plus the following rules:

-   Only the data types b, s, i, and int8 are allowed for the operand n after the additions [UP TO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_up_to_offset.htm) and [PACKAGE SIZE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm) of the statement [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm). A literal or a constant cannot have the value 0 here.
-   In the statement [OPEN CURSOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_cursor.htm), the additions grouped under [UP TO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_up_to_offset.htm), [OFFSET](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_up_to_offset.htm), and [abap\_options](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_additions.htm) must also be specified at the end of the SELECT statement.
-   If it is not possible to make a [lossless](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmove_exact.htm) read on a [host constant](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhost_constant_glosry.htm "Glossary Entry"), a syntax error occurs.
-   The syntax of one of the [database hints](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_hint_glosry.htm "Glossary Entry") specified after [%\_HINTS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_db_hints.htm) is checked, if possible.