---
title: "UNION"
description: |
  Syntax Forms UNION in Main Queries 1. WITH ...(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm) SELECT(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) query_clauses(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion.htm"
abapFile: "abapunion.htm"
keywords: ["select", "insert", "delete", "loop", "do", "if", "case", "try", "data", "abapunion"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_reading.htm) → 

UNION

Syntax Forms

UNION in Main Queries
1\. *\[*[WITH ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm)*\]*
  [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) [query\_clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion_clause.htm)
    UNION *\[*ALL*|*DISTINCT*\]*
     *\[*(*\]* SELECT [query\_clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion_clause.htm) *\[*)*\]*
    *\[*UNION *\[*ALL*|*DISTINCT*\]*
    ...*\]*
        *\[*[ORDER BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaporderby_clause.htm) sort\_key*\]*
         [INTO*|*APPENDING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) target
        *\[*[abap\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_additions.htm)*\]*.
  ...
  *\[* [ENDSELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendselect.htm)*|*[ENDWITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendwith.htm).*\]*
2\. [OPEN CURSOR ... FOR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapopen_cursor.htm)
    *\[*[WITH ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm)*\]*
    SELECT [query\_clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion_clause.htm)
      UNION *\[*ALL*|*DISTINCT*\]*
       *\[*(*\]* SELECT [query\_clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion_clause.htm) *\[*)*\]*
      *\[*UNION *\[*ALL*|*DISTINCT*\]*
      ...*\]*
          *\[*[ORDER BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaporderby_clause.htm) sort\_key*\]*
          *\[*[abap\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_additions.htm)*\]*.
UNION in subqueries
3\. ... ( SELECT [query\_clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion_clause.htm)
          UNION *\[*ALL*|*DISTINCT*\]*
           *\[*(*\]* SELECT [query\_clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion_clause.htm) *\[*)*\]*
          *\[*UNION *\[*ALL*|*DISTINCT*\]*
          ...*\]* ) ...

Addition:

[... ALL*|*DISTINCT](#!ABAP_ONE_ADD@1@)

Effect

The ABAP SQL language element UNION joins the result sets of two [queries](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenquery_glosry.htm "Glossary Entry"). The rows of the result set of the query after UNION are inserted into the result set of the query before UNION. The syntax forms show where UNION can be used:

1.  For creating the result set of the [main query](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmainquery_glosry.htm "Glossary Entry") of a standalone statement, which is introduced using [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm) or [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm).
    
2.  For creating the result set of the [main query](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmainquery_glosry.htm "Glossary Entry") after [OPEN CURSOR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapopen_cursor.htm).
    
3.  For creating the results set of a parenthesized [subquery](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensubquery_glosry.htm "Glossary Entry") in a [relational expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp.htm), of the definition of a [common table expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") after [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm), or of an [INSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_dbtab.htm) statement.
    

In all syntax forms, it is possible to specify the same [clauses and additions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_clauses.htm) [query\_clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion_clause.htm) for SELECT statements of queries before and after UNION for defining result sets. A query on the right side of UNION can be enclosed in parentheses ( ). A pair of parentheses can include multiple unions. The queries joined with UNION are evaluated from left to right. Specific statements can be prioritized using parentheses.

In the case of a standalone [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) or [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm) statement and after OPEN CURSOR, the [ORDER BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaporderby_clause.htm) and the [abap\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_additions.htm) after the last query or after the position of the last closing bracket are listed and affect the union result set. In the case of standalone statements, the [INTO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) clause is to be listed as the last clause and before the additions [abap\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_additions.htm). The following special features apply here:

-   ORDER BY clause
    

-   The addition [ORDER BY PRIMARY KEY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaporderby_clause.htm) is not allowed.

-   Columns of the union results set specified after [ORDER BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaporderby_clause.htm) must occur with the same name in all relevant SELECT statements. The names must be specified directly and cannot be specified with the [column selector](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_comp_selector_glosry.htm "Glossary Entry") ~ after a column name.

-   INTO clause
    

-   If the addition CORRESPONDING or an inline declaration @DATA(...) is used in the [INTO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) clause, the column names of all results sets defined in the [query\_clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion_clause.htm) from left to right must match.

-   The union result set is always multirow. If an assignment is made to a non-table-like target are (meaning a SELECT statement without the addition [INTO*|*APPENDING ... TABLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm)), a loop closed using [ENDSELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendselect.htm) or [ENDWITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendwith.htm) is always opened.

-   Restricting the Results Set
    

-   The additions [UP TO and OFFSET](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_up_to_offset.htm) are not currently allowed with UNION.

Notes

-   Priorities using parentheses are particularly applicable when handling duplicate rows using DISTINCT.
    
-   When UNION is used, ABAP SQL bypasses [table buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_buffering_glosry.htm "Glossary Entry").
    
-   The maximum number of different SELECT statements that can be joined using UNION depends on the database system. If this number is exceeded, an exception is raised when the program is executed.
    
-   When UNION is used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_mode_750.htm), which handles the statement more strictly than the regular syntax check. More specifically, the [INTO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) clause and the additions [abap\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_additions.htm) can be specified at the end of the full SELECT statement.
    

Example

Creates the union of one row from the database table SCARR with multiple rows from the database table SPFLI. Those columns that do not exist in the other table are replaced by literals. Here, a [CAST](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_cast.htm) is required for the column CONNID.

SELECT FROM scarr
       FIELDS carrname,
              CAST( '-' AS CHAR( 4 ) ) AS connid,
              '-' AS cityfrom,
              '-' AS cityto
       WHERE carrid = 'LH'
  UNION
    SELECT FROM spfli
           FIELDS '-' AS carrname,
                  CAST( connid AS CHAR( 4 ) ) AS connid,
                  cityfrom,
                  cityto
           WHERE carrid = 'LH'
   ORDER BY carrname DESCENDING, connid, cityfrom, cityto
   INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

Executable Examples

[UNION - Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenunion_abexas.htm)

Addition

... ALL*|*DISTINCT

Effect

The additions ALL and DISTINCT specify how duplicate rows are handled. DISTINCT is the default here:

-   If the addition ALL is specified, all rows from the results set of the right SELECT statement are inserted into the existing results set.
    
-   If the addition DISTINCT is specified or if neither of the two additions is specified, the rows of the results set of the right SELECT statement are inserted into the existing results set. All duplicate rows are then deleted except for one (including all columns of the results set).
    

Note

The default behavior or the addition DISTINCT are always applied to the full existing results set. The addition DISTINCT also removes any duplicate rows produced by the addition ALL of preceding UNION additions.

Example

Fills the database table DEMO\_EXPRESSIONS with one row and creates the union of the table with itself. Using the addition DISTINCT, the results set contains one row and using the addition ALL it contains two rows.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #( id = 'X' num1 = 111 ) ).
SELECT id, num1
       FROM demo\_expressions
  UNION DISTINCT
      SELECT id, num1
      FROM demo\_expressions
  INTO TABLE @DATA(result1).
SELECT id, num1
       FROM demo\_expressions
  UNION ALL
      SELECT id, num1
      FROM demo\_expressions
  INTO TABLE @DATA(result2).
ASSERT lines( result1 ) = 1.
ASSERT lines( result2 ) = 2.

Continue
[UNION - query\_clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion_clause.htm)
[UNION Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenunion_abexas.htm)