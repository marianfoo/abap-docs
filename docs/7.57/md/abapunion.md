  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_reading.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: UNION, INTERSECT, EXCEPT, ABAPUNION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

UNION, INTERSECT, EXCEPT

Syntax Forms

UNION, INTERSECT, and EXCEPT in Main Queries
1\. *\[*[WITH ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith.htm)*\]*
  [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) [query\_clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion_clause.htm)
    *{*UNION *\[*ALL*|*DISTINCT*\]**}*
  *|* *{*INTERSECT *\[*DISTINCT*\]**}*
  *|* *{*EXCEPT *\[*DISTINCT*\]**}*
     *\[*(*\]* SELECT [query\_clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion_clause.htm) *\[*)*\]*
    *\[**{*UNION *\[*ALL*|*DISTINCT*\]**}*
   *|* *{*INTERSECT *\[*DISTINCT*\]**}*
   *|* *{*EXCEPT *\[*DISTINCT*\]**}*
    ...*\]*
        *\[*[ORDER BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaporderby_clause.htm) sort\_key*\]*
         [INTO*|*APPENDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm) target
        *\[*[abap\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_additions.htm)*\]*.
  ...
  *\[* [ENDSELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapendselect.htm)*|*[ENDWITH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapendwith.htm).*\]*
2\. [OPEN CURSOR ... FOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_cursor.htm)
    *\[*[WITH ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith.htm)*\]*
    SELECT [query\_clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion_clause.htm)
     *{*UNION *\[*ALL*|*DISTINCT*\]**}*
   *|* *{*INTERSECT *\[*DISTINCT*\]**}*
   *|* *{*EXCEPT *\[*DISTINCT*\]**}*
       *\[*(*\]* SELECT [query\_clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion_clause.htm) *\[*)*\]*
      *\[**{*UNION *\[*ALL*|*DISTINCT*\]**}*
     *|* *{*INTERSECT *\[*DISTINCT*\]**}*
     *|* *{*EXCEPT *\[*DISTINCT*\]**}*
      ...*\]*
          *\[*[ORDER BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaporderby_clause.htm) sort\_key*\]*
          *\[*[abap\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_additions.htm)*\]*.
UNION, INTERSECT, and EXCEPT in Subqueries
3\. ... ( SELECT [query\_clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion_clause.htm)
          *{*UNION*\[*ALL*|*DISTINCT*\]**}*
        *|* *{*INTERSECT *\[*DISTINCT*\]**}*
        *|* *{*EXCEPT *\[*DISTINCT*\]**}*
           *\[*(*\]* SELECT [query\_clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion_clause.htm) *\[*)*\]*
          *\[**{*UNION *\[*ALL*|*DISTINCT*\]**}*
         *|* *{*INTERSECT *\[*DISTINCT*\]**}*
         *|* *{*EXCEPT *\[*DISTINCT*\]**}*
          ...*\]* ) ...

Variants:

[1\. ... UNION ...](#!ABAP_VARIANT_1@1@)
[2\. ... INTERSECT ...](#!ABAP_VARIANT_2@2@)
[3\. ... EXCEPT ...](#!ABAP_VARIANT_3@3@)

Additions:

[1\. ... ALL*|*DISTINCT](#!ABAP_ADDITION_1@1@)

Effect

The [set operators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_set_operators_glosry.htm "Glossary Entry") UNION, INTERSECT, and EXCEPT merge the result sets of multiple queries into a single result set. The syntax forms show where UNION, INTERSECT, and EXCEPT can be used:

1.  For creating the result set of the [main query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmainquery_glosry.htm "Glossary Entry") of a standalone statement, which is introduced using [WITH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith.htm) or [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm).
2.  For creating the result set of the [main query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmainquery_glosry.htm "Glossary Entry") after [OPEN CURSOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_cursor.htm).
3.  For creating the result set of a parenthesized [subquery](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensubquery_glosry.htm "Glossary Entry") in a [relational expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_stmt_logexp.htm), the definition of a [common table expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") after [WITH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith.htm), or an [INSERT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_dbtab.htm) statement.

In all syntax forms, it is possible to specify the same [clauses and additions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_clauses.htm), specifically [query\_clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion_clause.htm), for SELECT statements of queries in front of and after UNION, INTERSECT, or EXCEPT for defining result sets. A query on the right side of UNION, INTERSECT, or EXCEPT can be enclosed in parentheses ( ). A pair of parentheses can include multiple unions, intersections, or differences. The queries joined with UNION, INTERSECT, or EXCEPT are evaluated from left to right. Specific statements can be prioritized using parentheses.

In the case of a standalone [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) or [WITH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith.htm) statement and after OPEN CURSOR, the [ORDER BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaporderby_clause.htm) and the [abap\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_additions.htm) after the last query or after the position of the last closing bracket are listed and affect the merged result set. In the case of standalone statements, the [INTO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm) clause is to be listed as the last clause and in front of the additions [abap\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_additions.htm). The following special features apply here:

-   ORDER BY clause
    -   The addition [ORDER BY PRIMARY KEY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaporderby_clause.htm) is not allowed.
    -   Columns of the merged result set specified after [ORDER BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaporderby_clause.htm) must occur with the same name in all relevant SELECT statements. The names must be specified directly and cannot be specified with the [column selector](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_comp_selector_glosry.htm "Glossary Entry") ~ after a column name.
-   INTO clause
    -   If the addition CORRESPONDING or an inline declaration @DATA*|*@FINAL(...) is used in the [INTO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm) clause, the column names of all result sets defined in the [query\_clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion_clause.htm) from left to right must match.
    -   The merged result set is always multirow. When assigning to a non-table target area, that is, a SELECT statement without the addition [INTO*|*APPENDING ... TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm), a loop to be terminated [ENDSELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapendselect.htm) or [ENDWITH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapendwith.htm) is always opened.
-   Restricting the result set
    -   The additions [UP TO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_up_to_offset.htm) and [OFFSET](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_up_to_offset.htm) are not currently allowed with UNION, INTERSECT, and EXCEPT.

Hints

-   Prioritizations using parentheses are particularly applicable when handling duplicate rows using DISTINCT.
-   When UNION, INTERSECT, or EXCEPT is used, ABAP SQL bypasses [table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry").
-   The maximum number of different SELECT statements that can be joined using UNION, INTERSECT, or EXCEPT depends on the database system. If this number is exceeded, an exception is raised when the program is executed.

Variant 1   

... UNION ...

Effect

The ABAP SQL language element UNION merges the result sets of two [queries](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenquery_glosry.htm "Glossary Entry"). The rows of the result set of the query after UNION are inserted into the result set of the query in front of UNION.

Hints

When UNION is used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_750.htm), which handles the statement more strictly than the regular syntax check. More specifically, the [INTO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm) clause and the additions [abap\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_additions.htm) can be specified at the end of the entire SELECT statement.

Example

Creates the union of one row from the DDIC database table SCARR with multiple rows from the DDIC database table SPFLI. Those columns that do not exist in the other table are replaced by literals. Here, a [CAST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_cast.htm) is required for the column CONNID.

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
   INTO TABLE @FINAL(result).
cl\_demo\_output=>display( result ).

Executable Examples

[UNION - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunion_abexas.htm)

Variant 2   

... INTERSECT ...

Effect

The ABAP SQL language element INTERSECT returns all distinct rows of the result set of the query in front of INTERSECT that are also present in the result set of the query after INTERSECT.

Hints

When INTERSECT is used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_756.htm), which handles the statement more strictly than the regular syntax check.

Example

Creates the intersect of multiple rows from a joined table with multiple rows from the DDIC database table SCARR.

SELECT spfli~carrid, scarr~carrname
  FROM spfli
    INNER JOIN scarr ON scarr~carrid = spfli~carrid
  INTERSECT
    SELECT carrid, carrname
      FROM scarr
  ORDER BY carrid ASCENDING, carrname
  INTO TABLE @FINAL(result).

Executable Examples

[INTERSECT - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenintersect_abexas.htm)

Variant 3   

... EXCEPT ...

Effect

The ABAP SQL language element EXCEPT returns all distinct rows of the result set of the query in front of EXCEPT that are not present in the result set of the query after EXCEPT.

Hints

-   ABAP SQL does not support the alternative syntax MINUS that is available for the SAP HANA database.
-   When EXCEPT is used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_756.htm), which handles the statement more strictly than the regular syntax check.

Example

Creates the difference for multiple rows from the DDIC database table SCARR with multiple rows from a joined table.

SELECT carrid, carrname
  FROM scarr
    EXCEPT
      SELECT spfli~carrid, scarr~carrname
        FROM spfli
          INNER JOIN scarr ON scarr~carrid = spfli~carrid
  ORDER BY carrid ASCENDING, carrname
  INTO TABLE @FINAL(result).

Executable Examples

[EXCEPT - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexcept_abexas.htm)

Addition 1   

... ALL*|*DISTINCT

Effect

The additions ALL and DISTINCT control how duplicate rows are handled. DISTINCT is the default here:

-   If the addition ALL is specified, all rows from the result set of the right SELECT statement are inserted into the existing result set.
-   If the addition DISTINCT is specified or if neither of the two additions is specified, the behavior is as follows:
    -   First, all rows of the result set of the right SELECT statement are inserted into the existing result set.
    -   Then all rows that occur more than once are deleted except for one. For determining the duplicate rows, all columns of the result set are respected.

Hints

-   The default behavior or the addition DISTINCT is always applied to the entire existing result set. The addition DISTINCT also removes any duplicate rows produced by the addition ALL of preceding UNION additions.
-   The ABAP SQL language elements INTERSECT and EXCEPT can only be applied together with the addition DISTINCT.

Example

The DDIC database table DEMO\_EXPRESSIONS is filled with one row and the union of the table with itself is created. Using the addition DISTINCT, the result set contains one row and using the addition ALL it contains two rows.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #( id = 'X' num1 = 111 ) ).
SELECT id, num1
       FROM demo\_expressions
  UNION DISTINCT
      SELECT id, num1
      FROM demo\_expressions
  INTO TABLE @FINAL(result1).
SELECT id, num1
       FROM demo\_expressions
  UNION ALL
      SELECT id, num1
      FROM demo\_expressions
  INTO TABLE @FINAL(result2).
ASSERT lines( result1 ) = 1.
ASSERT lines( result2 ) = 2.

Continue
[UNION, INTERSECT, EXCEPT, query\_clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion_clause.htm)
[UNION, Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunion_abexas.htm)
[INTERSECT, Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenintersect_abexas.htm)
[EXCEPT, Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexcept_abexas.htm)