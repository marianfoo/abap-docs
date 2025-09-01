---
title: "WITH - ASSOCIATIONS, JOIN"
description: |
  Syntax ... JOIN TO ONEMANY target AS _assoc ON sql_cond(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenosql_expr_logexp.htm) ... Addition: ... TO ONEMANY(#!ABAP_ONE_ADD@1@) Effect If specified, JOIN initiates the definition and publication of a CTE association(https://h
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith_associations_defining.htm"
abapFile: "abapwith_associations_defining.htm"
keywords: ["select", "do", "if", "case", "try", "data", "internal-table", "abapwith", "associations", "defining"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_reading.htm) →  [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm) →  [WITH - ASSOCIATIONS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith_associations.htm) → 

WITH - ASSOCIATIONS, JOIN

Syntax

... JOIN TO ONE*|*MANY target AS \_assoc
      ON [sql\_cond](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenosql_expr_logexp.htm) ...

Addition:

[... TO ONE*|*MANY](#!ABAP_ONE_ADD@1@)

Effect

If specified, JOIN initiates the definition and publication of a [CTE association](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencte_association_glosry.htm "Glossary Entry") with the name \_assoc in the addition [WITH ASSOCIATIONS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith_associations.htm) when a common table expression is defined in a [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm) statement.

A CTE association associates the current common table expression +cte as a source data source with the target data source target specified in the definition of the CTE association using an ON condition [sql\_cond](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenosql_expr_logexp.htm). Any [data sources](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) visible and usable in this position can be specified for target.

AS must be used to specify a name \_assoc for the CTE association under which it can be addressed in the subsequent queries of the current WITH statement. The name can contain letters, digits, the minus sign (\-), and the underscore (\_) in any order.

By specifying its name, a CTE association of a common table expression can be used in the subsequent queries of the same WITH statement, in all operand positions for associations. These are elements of [path expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_path.htm) or any [hierarchy associations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") specified.

When a CTE association is used in a path expression, it is transformed to a join expression. The source data source represents the left side and the target data source represents the right side. The ON condition of the CTE association is added to the ON condition of the join. The category of the join is determined by where the path expression is used:

-   After [FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm), it is an inner join (INNER JOIN)

-   As a [specified column](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_columns.htm), it is a left outer join (LEFT OUTER JOIN)

The following applies when the ON condition [sql\_cond](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenosql_expr_logexp.htm) is specified:

-   Any fields in the target data source can be prefixed with the name of the CTE association \_assoc.. Any fields in the source data source can be prefixed with the name of the common table expression +cte. The prefix is separated using the [column selector](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_comp_selector_glosry.htm "Glossary Entry") ~. These items are mandatory only if the names of the fields occur in both data sources.

-   Any fields of the source data source specified in the ON condition must be specified in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) of the common table expression. This ensures that a join expression can be built from the CTE association (when used in a path expression). The names defined in the common table expression must be used here. These are either the alias names defined using AS or the names defined in an optional name list.

Notes

-   A CTE association cannot be used in the same common table expression for which it is defined.
    
-   A common table expression for which a CTE association is defined can also be a results set merged using [UNION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion.htm). The columns specified in the ON condition refer to the union results set.
    
-   More specifically, [internal tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_itab.htm) or previously defined common table expressions of the same WITH statement (plus the current common table expression itself) can be specified as target data sources target. If specified in this case, the current common table expression is a [self association](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenself_association_glosry.htm "Glossary Entry").
    
-   A common table expression that defines and publishes a self association can be used as the source of the [hierarchy generator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_generator.htm). More specifically, this makes it possible to also use internal tables as the source of hierarchies (see the [executable example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_from_itab_hiera_abexa.htm)).
    
-   It is advisable to use an underscore \_ as the first character of the CTE association name.
    
-   The character + cannot be used as the first character of a CTE association name, which means there can be no naming conflicts in the ON condition.
    
-   The definition of a CTE association requires [strict mode from Release 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_mode_754.htm).
    

Addition

... TO ONE*|*MANY

Effect

The mandatory items TO ONE or TO MANY define the cardinality of the target data source of the CTE association. This cardinality is used by some database systems for optimizations. In these database systems, any LEFT OUTER JOINs produced by a path expression are given the addition TO ONE if TO ONE is specified and the addition TO MANY if any other cardinality is used. These additions work in the same way as when they are specified explicitly in [LEFT OUTER JOIN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_join.htm). This means that an optimization is attempted and the result can be undefined if the results set does not match the cardinality.

Note

To avoid undefined and platform-dependent behavior, the cardinality should always be defined to match the data in question.

Example

The following WITH statement from the program DEMO\_WITH\_ASSOCIATIONS\_JOIN demonstrates the way [CTE associations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencte_association_glosry.htm "Glossary Entry") are defined and used. The example works in exactly the same way as the [executable example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpath_expr_in_from_clause_abexa.htm) for path expressions in the FROM clause. The CDS views and CDS associations used here are replaced one on one by common table expressions and CTE associations. When executed, the program displays the result and compares the behavior of CTE associations and CDS associations when accessed.

DATA:
  tz     TYPE s\_tzone    VALUE 'UTC+1',
  currc  TYPE s\_currcode VALUE 'EUR',
  fltime TYPE s\_fltime   VALUE 0.
WITH
  +spfli\_scarr AS
     ( SELECT FROM spfli
              FIELDS carrid,
                     airpfrom,
                     fltime )
        WITH ASSOCIATIONS ( JOIN TO ONE scarr AS \_scarr
          ON +spfli\_scarr~carrid = \_scarr~carrid ),
   +sairport\_tz AS
     ( SELECT FROM sairport
              FIELDS id
              WHERE time\_zone = @tz )
        WITH ASSOCIATIONS ( JOIN TO ONE +spfli\_scarr AS \_spfli
          ON +sairport\_tz~id = \_spfli~airpfrom )
   SELECT DISTINCT carrname
          FROM +sairport\_tz
               \\\_spfli\[ fltime > @fltime \]
               \\\_scarr\[ currcode = @( CONV s\_currcode(
                                             to\_upper( currc ) ) ) \]
               AS scarr
          ORDER BY carrname
          INTO TABLE @DATA(result\_cte\_assoc).

Example

The following WITH statement from the program DEMO\_WITH\_ASSOCIATIONS\_HIERA demonstrates the way a common table expression +parent\_child\_source and its CTE association \_relat are used as the data source and [hierarchy association](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") of the [hierarchy generator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_generator.htm). The CTE association \_relat is a [self association](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenself_association_glosry.htm "Glossary Entry"). When executed, the program displays the result and compares it with the result when a similar CDS view and CDS association are used in the hierarchy generator.

DATA(start\_id) = CONV demo\_parent\_chld-id( 'A' ).
WITH
  +parent\_child\_source AS
     ( SELECT FROM demo\_parent\_chld
              FIELDS id,
                     parent\_id AS parent )
       WITH ASSOCIATIONS ( JOIN TO MANY +parent\_child\_source AS \_relat
         ON +parent\_child\_source~parent = \_relat~id )
   SELECT FROM HIERARCHY( SOURCE +parent\_child\_source
                          CHILD TO PARENT ASSOCIATION \_relat
                          START WHERE id = @start\_id
                          SIBLINGS ORDER BY id
                          MULTIPLE PARENTS ALLOWED )
         FIELDS id,
                parent,
                hierarchy\_rank,
                hierarchy\_tree\_size,
                hierarchy\_parent\_rank,
                hierarchy\_level,
                hierarchy\_is\_cycle,
                hierarchy\_is\_orphan,
                node\_id,
                parent\_id
         INTO TABLE @DATA(cte\_result).