# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, clauses

Included pages: 5



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencds_select_clauses.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_select_clauses.htm)
- [abencds_f1_where_clause.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_where_clause.htm)
- [abencds_f1_group_by.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_group_by.htm)
- [abencds_f1_having_clause.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_having_clause.htm)
- [abencds_f1_union.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_union.htm)

**Bundle Contains**: 5 documentation pages
**Version**: ABAP 7.54
**Generated**: 2025-09-01T11:25:45.898Z

---

### abencds_select_clauses.htm

> **📖 Official SAP Documentation**: [abencds_select_clauses.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_select_clauses.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) → 

ABAP CDS - SELECT, clauses

Syntax

... *\[*[WHERE cond\_expr](javascript:call_link\('abencds_f1_where_clause.htm'\))*\]*
    *\[*[GROUP BY field1, field2, ...](javascript:call_link\('abencds_f1_group_by.htm'\))*\]*
    *\[*[HAVING cond\_expr](javascript:call_link\('abencds_f1_having_clause.htm'\))*\]*
    *\[*[UNION *\[*ALL*\]* SELECT ...](javascript:call_link\('abencds_f1_union.htm'\))*\]* ...

Effect

The optional clauses of the [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") have the following semantics:

-   The [WHERE clause](javascript:call_link\('abencds_f1_where_clause.htm'\)) restricts the rows in the results set when the CDS view is accessed.

-   The [GROUP BY clause](javascript:call_link\('abencds_f1_group_by.htm'\)) groups rows in the results set when the CDS view is accessed. It is applied after rows are selected using the WHERE clause.

-   The [HAVING clause](javascript:call_link\('abencds_f1_having_clause.htm'\)) restricts the results set further after a GROUP BY clause. Here, [aggregate expressions](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)) can be specified in the condition.

-   [UNION](javascript:call_link\('abencds_f1_union.htm'\)) can be used to create the union of the results sets from two SELECT statements.

Continue
[ABAP CDS - SELECT, WHERE](javascript:call_link\('abencds_f1_where_clause.htm'\))
[ABAP CDS - SELECT, GROUP BY](javascript:call_link\('abencds_f1_group_by.htm'\))
[ABAP CDS - SELECT, HAVING](javascript:call_link\('abencds_f1_having_clause.htm'\))
[ABAP CDS - SELECT, UNION](javascript:call_link\('abencds_f1_union.htm'\))



**📖 Source**: [abencds_select_clauses.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_select_clauses.htm)

### abencds_f1_where_clause.htm

> **📖 Official SAP Documentation**: [abencds_f1_where_clause.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_where_clause.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, clauses](javascript:call_link\('abencds_select_clauses.htm'\)) → 

ABAP CDS - SELECT, WHERE

Syntax

... WHERE [cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) ...

Effect

Defines a WHERE condition for the results set of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). When the CDS view is accessed, the results set contains only the data from the data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) that meets the condition [cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) specified after WHERE.

The fields evaluated in the condition do not need to be defined as elements of the CDS view in the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)). Special [rules](javascript:call_link\('abencds_cond_expr_where.htm'\)) apply when specifying the condition.

Note

Unlike in the [HAVING condition](javascript:call_link\('abencds_f1_having_clause.htm'\)), [aggregate expressions](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)) cannot be specified in the WHERE condition.

Example

When the CDS view sales\_order is accessed, the results set contains only orders where the company name of the business partner starts with "S" and that were created between January and March 2013.

@AbapCatalog.sqlViewName: 'SALES\_ORDER\_VW'
define view sales\_order as
  select from snwd\_so
         association to snwd\_bpa as \_partner
                     on snwd\_so.buyer\_guid = \_partner.node\_key
         { key   so\_id,
                 snwd\_so.buyer\_guid,
                 \_partner.company\_name,
                 snwd\_so.created\_at,
               @Semantics.currencyCode
                 currency\_code,
               @Semantics.amount.currencyCode: 'currency\_code'
                 gross\_amount
         }
         where \_partner.company\_name like 'S%' and
                       created\_at between 2013010100000.0
                                     and 20130401000000.0; //Jan-March



**📖 Source**: [abencds_f1_where_clause.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_where_clause.htm)

### abencds_f1_group_by.htm

> **📖 Official SAP Documentation**: [abencds_f1_group_by.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_group_by.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, clauses](javascript:call_link\('abencds_select_clauses.htm'\)) → 

ABAP CDS - SELECT, GROUP BY

Syntax

... GROUP BY field1, field2, ...
             [path\_expr1](javascript:call_link\('abencds_f1_case_expression.htm'\)), [path\_expr2](javascript:call_link\('abencds_f1_case_expression.htm'\)), ...

Effect

Groups those rows in the results set of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") in that have the same content in the elements specified by the fields field1, field2, ... or [path expressions](javascript:call_link\('abencds_f1_case_expression.htm'\)) path\_expr1, path\_expr2 ... as a single row. The fields must be specified using the same names as the fields in the data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)). The current CDS view cannot be specified using alternative element names, which are defined with [AS](javascript:call_link\('abencds_f1_select_list_entry.htm'\)).

Any elements of the CDS view that are not specified after GROUP BY must be defined in the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) using [aggregate expressions](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)). Conversely, GROUP BY must be used if aggregate expressions are contained in the SELECT list and all elements not defined using aggregate expressions must be specified after GROUP BY. Literals and other expressions cannot be specified after GROUP BY. If expressions or calls of built-in functions are specified as elements of the SELECT list using aggregate expressions, all the fields used must be specified in the GROUP BY clause.

When the CDS view is accessed, the results of the aggregate expressions are calculated from the values of the corresponding fields of the combined rows and the results are placed in the element of the resulting row in the results set.

The fields specified after GROUP BY cannot be of the [type](javascript:call_link\('abenddic_builtin_types.htm'\)) LCHR, LRAW, STRING, RAWSTRING, or GEOM\_EWKB.

Note

A [WHERE condition](javascript:call_link\('abencds_f1_where_clause.htm'\)) is evaluated before the rows are combined using GROUP BY.

Example

When a CDS view is accessed, the view returns sales\_order for every role of a business partner and returns the number of business partners and the total of all gross amounts for every currency.

@AbapCatalog.sqlViewName: 'SALES\_ORDER\_VW'
define view sales\_order as
  select from snwd\_so
    inner join
      snwd\_bpa on buyer\_guid = snwd\_bpa.node\_key
      { bp\_role as role, //e.g. customer or supplier
        count(distinct buyer\_guid) as partners\_count,
        @Semantics.currencyCode snwd\_so.currency\_code,
        @Semantics.amount.currencyCode: 'currency\_code'
          sum(snwd\_so.gross\_amount) as sum\_gross\_amount }
      group by bp\_role, snwd\_so.currency\_code;



**📖 Source**: [abencds_f1_group_by.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_group_by.htm)

### abencds_f1_having_clause.htm

> **📖 Official SAP Documentation**: [abencds_f1_having_clause.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_having_clause.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, clauses](javascript:call_link\('abencds_select_clauses.htm'\)) → 

ABAP CDS - SELECT, HAVING

Syntax

... HAVING [cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) ...

Effect

Defines a HAVING condition for the results set of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") after a [GROUP BY clause](javascript:call_link\('abencds_f1_group_by.htm'\)) is evaluated. A HAVING condition can only be specified together with GROUP BY. Special [rules](javascript:call_link\('abencds_cond_expr_having.htm'\)) apply when specifying the condition.

Removes all rows from the results set that do not meet the condition [cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) specified after HAVING.

Note

[Aggregate expressions](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)) can be specified in the HAVING condition, which is not possible in the [WHERE condition](javascript:call_link\('abencds_f1_where_clause.htm'\)).

Example

When accessed, the CDS view sales\_order returns the number of business partners for each business partner role in which the total gross amount in euros is greater than 100000.00.

@AbapCatalog.sqlViewName: 'SALES\_ORDER\_VW'
define view sales\_order as
  select from snwd\_so
    inner join
      snwd\_bpa on buyer\_guid = snwd\_bpa.node\_key
  {  key bp\_role as role, //e.g. customer or supplier
     count(distinct buyer\_guid) as partners\_count,
     sum(snwd\_so.gross\_amount) as sum\_gross\_amount }
  where snwd\_so.currency\_code = 'EUR'
  group by bp\_role
  having sum(snwd\_so.gross\_amount) > 100000.00;



**📖 Source**: [abencds_f1_having_clause.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_having_clause.htm)

### abencds_f1_union.htm

> **📖 Official SAP Documentation**: [abencds_f1_union.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_union.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencds_f1_union.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_union.htm)


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, clauses](javascript:call_link\('abencds_select_clauses.htm'\)) → 

ABAP CDS - SELECT, UNION

Syntax

... UNION *\[*ALL*\]* [select\_statement](javascript:call_link\('abencds_f1_select_statement.htm'\)) ...

Effect

Creates the union of rows in the results sets of two [SELECT statements](javascript:call_link\('abencds_f1_select_statement.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). This can only happen if the results sets have the same number of elements and have a compatible data type in each position (pair by pair). The data types DF16\_..., DF34\_..., LCHR,LRAW,STRING, RAWSTRING, and GEOM\_EWKB are not supported. A union results set can itself be the left side of a further union. If the addition ALL is not specified, all duplicate entries are removed from the results set. They are not removed if ALL is specified. The properties of the elements of the merged results set are determined as follows:

-   Element names

-   If an explicit [name list](javascript:call_link\('abencds_f1_name_list.htm'\)) is specified, this list determines the names of the elements

-   If no explicit [name list](javascript:call_link\('abencds_f1_name_list.htm'\)) is specified, the direct element names or the alternative element names defined using AS must match for each column in the [SELECT lists](javascript:call_link\('abencds_f1_select_list.htm'\)) of all SELECT statements and are used.

-   Key elements

The definition of the key elements is taken from the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) of the first SELECT statement.

-   Element annotations

[Element annotations](javascript:call_link\('abencds_f1_element_annotations.htm'\)) are applied only from the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) of the first SELECT statement.

-   Data type

-   The data type of each element of the CDS entity is the dictionary type of the element from the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) of the first SELECT statement.

-   The data type used to create the union set on the database is a data type whose value range covers the data types of the associated columns of all results sets involved.

The following table shows which data types can be merged with which data types of the following SELECT statements in the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) of the first SELECT statement using UNION.

First/following

INT1

INT2

INT4

INT8

DEC

CURR

QUAN

FLTP

CHAR

SSTRING

NUMC

DATS

TIMS

ACCP

CLNT

LANG

UNIT

CUKY

RAW

INT1

x

w

w

w

w

w

w

w

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

INT2

x

x

w

w

w

w

w

w

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

INT4

x

x

x

w

w

w

w

w

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

INT8

x

x

x

x

w

w

w

w

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

DEC

w

w

w

w

w

w

w

w

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

CURR

w

w

w

w

w

w

w

w

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

QUAN

w

w

w

w

w

w

w

w

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

FLTP

x

x

x

w

w

w

w

x

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

CHAR

\-

\-

\-

\-

\-

\-

\-

\-

w

w

l

w

w

l

l

l

l

l

\-

SSTRING

\-

\-

\-

\-

\-

\-

\-

\-

w

w

\-

\-

\-

\-

\-

\-

\-

\-

\-

NUMC

\-

\-

\-

\-

\-

\-

\-

\-

w

\-

l

l

l

l

l

l

\-

\-

\-

DATS

\-

\-

\-

\-

\-

\-

\-

\-

w

\-

l

x

\-

\-

\-

\-

\-

\-

\-

TIMS

\-

\-

\-

\-

\-

\-

\-

\-

w

\-

l

\-

x

\-

\-

\-

\-

\-

\-

ACCP

\-

\-

\-

\-

\-

\-

\-

\-

l

\-

l

\-

\-

x

\-

\-

\-

\-

\-

CLNT

\-

\-

\-

\-

\-

\-

\-

\-

l

\-

l

\-

\-

\-

x

\-

\-

\-

\-

LANG

\-

\-

\-

\-

\-

\-

\-

\-

l

\-

l

\-

\-

\-

\-

x

\-

\-

\-

UNIT

\-

\-

\-

\-

\-

\-

\-

\-

l

\-

\-

\-

\-

\-

\-

\-

x

\-

\-

CUKY

\-

\-

\-

\-

\-

\-

\-

\-

l

\-

\-

\-

\-

\-

\-

\-

\-

x

\-

RAW

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

x

There are no further restrictions to note in combinations using "x". The following rules apply to the other combinations:

-   In combinations with "w", the length or the value range of the data type in the first SELECT must be long enough for all following SELECT lists. If this is not the case, a syntax check warning is raised.

-   In combinations using "l", the lengths of the data types must match exactly.

If the length or value range of the first element does not cover the following elements in combinations with "w", the value returned by the database can be too great for the data type of the element of the CDS entity. It is still possible to activate the view here, but the content may be truncated or exceptions may be raised in ABAP SQL [queries](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") if a type reference is applied to the entity. This is due to the [assignment rules](javascript:call_link\('abenselect_into_conversion.htm'\)) of the [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause. Assignments to ABAP data objects with a sufficiently large value range, on the other hand, do not cause problems.

A CDS view in which union sets are formed with UNION can expose [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry"). A CDS association must be defined and exposed in the same way in all SELECT statements joined with UNION. That is, CDS associations that are published in the respective [SELECT lists](javascript:call_link\('abencds_f1_select_list.htm'\)) must appear in all SELECT statements joined with UNION and the following requirements must be met:

-   They have the same name.

-   They have the same cardinality.

-   They must be published at the same position in the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) using a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)).

-   They must have the same ON conditions, that is:

-   The conditions must relate to the same fields in the source and target data source and express the same logic for these fields.

-   The fields of the source data source that are listed in conditions must be at identical respective positions in the SELECT list.

These rules also apply if a CDS association is defined in a data source of a SELECT statement and is exposed by the current statement. From outside, the CDS associations with the same name that are published in the individual SELECT lists act like a CDS association published by the union set. There are no restrictions on CDS associations that are not published in the SELECT lists.

Notes

-   Union sets can be a good way of transforming non-standardized database tables into a standardized view of the data.

-   If the length of the value range of an element from the SELECT list of the first SELECT statement does not cover the associated elements of the following SELECT statements, it is advisable to define an appropriate type with a suitable [CAST](javascript:call_link\('abencds_f1_cast_expression.htm'\)) expression.

-   The maximum number of different SELECT statements that can be joined using UNION depends on the database system. If this number is exceeded, the CDS view cannot be activated.

Examples

Union set without name list. The element names of the SELECT lists must match.

@AbapCatalog.sqlViewName: '...'
define view ... as
  select
    from demo\_join1
      { a as c1, b as c2, c as c3, d as c4 }
    union
      select
        from demo\_join2
          { d as c1, e as c2, f as c3, g as c4 }

Union set with name list. The element names of the SELECT lists do not need to match.

@AbapCatalog.sqlViewName: '...'
define view ... ( c1, c2, c3, c4 ) as
  select
    from demo\_join1
      { a, b, c, d }
    union
      select
        from demo\_join2
          { d, e, f, g }

Example

The following CDS view creates the union of the results sets of two SELECT statements. The element col1 in the first SELECT list has the type INT4, whereas the associated element col1 in the second SELECT list has the type INT8. This is why a syntax check warning is raised. In the case of the second element, col2, the example demonstrates how the warning can be bypassed using a [CAST](javascript:call_link\('abencds_f1_cast_expression.htm'\)) to the type INT8.

@AbapCatalog.sqlViewName: 'DEMOCDSUNIONTYPE'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view Demo\_Cds\_Union\_Element\_Type(
    id,
    col1,
    col2
  )
  as select from
    demo\_expressions
    {
      id,
      num1                      as col1,
      cast( num1 as abap.int8 ) as col2
    }
union all select from
  demo\_expressions
    {
      id,
      numlong1 as col1,
      numlong1 as col2
    }

The program DEMO\_CDS\_UNION\_ELEMENT\_TYPE uses [SELECT](javascript:call_link\('abapselect.htm'\)) to access the view four times:

-   The first access writes directly to an internal table with the row type of the CDS entity. The access works because the value of the element col1 matches the value range of the data type i.

-   The second access is the same as the first but one value in the element col1 is outside the value range of the data type i of the first column of the internal table result2. This is why an exception is raised.

-   In the third access, the exception is prevented since the data type of the first column of the results set (and hence the data type of the internal table result3) is transformed to int8 using a [CAST](javascript:call_link\('abensql_cast.htm'\)) in ABAP SQL.

-   In the fourth access, the exception is prevented due to an appropriate declaration of the data type of the first column of the internal table result4.

The recommended method in all cases, however, is to handle the second element using a [CAST](javascript:call_link\('abencds_f1_cast_expression.htm'\)) in the CDS view.
