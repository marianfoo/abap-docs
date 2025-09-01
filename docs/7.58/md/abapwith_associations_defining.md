  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_reading.htm) →  [WITH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith.htm) →  [WITH, ASSOCIATIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith_associations.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20WITH%2C%20ASSOCIATIONS%2C%20JOIN%2C%20ABAPWITH_ASSOCIATIONS_DEFINING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

WITH, ASSOCIATIONS, JOIN

Syntax

... JOIN cardinality target AS \_assoc
      ON [sql\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_expr_logexp.htm) ...

Addition:

[... cardinality](#!ABAP_ONE_ADD@1@)

Effect

Specifying JOIN initiates the definition and exposure of a [CTE association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencte_association_glosry.htm "Glossary Entry") with the name \_assoc in the addition [WITH ASSOCIATIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith_associations.htm) when a common table expression is defined in a [WITH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith.htm) statement.

A CTE association joins the current common table expression +cte as an [association source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_source_glosry.htm "Glossary Entry") with the [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") target specified in the definition of the CTE association using an ON condition [sql\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_expr_logexp.htm). All [data sources](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm) visible and usable in this position can be specified for target.

AS must be used to specify a name \_assoc for the CTE association under which it can be addressed in the subsequent queries of the current WITH statement. The name can contain letters, digits, the minus sign (\-), and the underscore (\_) in any order.

By specifying its name, a CTE association of a common table expression can be used in the subsequent queries of the same WITH statement in all operand positions for associations. These are elements of [path expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_path.htm) or the specification of [hierarchy associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_association_glosry.htm "Glossary Entry").

When a CTE association is used in a path expression, it is transformed to a join expression. The [association source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_source_glosry.htm "Glossary Entry") represents the left side and the [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") represents the right side. The ON condition of the CTE association is added to the ON condition of the join. The category of the join is determined by where the path expression is used:

-   After [FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfrom_clause.htm), it is an inner join (INNER JOIN)
-   As a [column specification](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_columns.htm), it is a left outer join (LEFT OUTER JOIN)

The following applies when the ON condition [sql\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_expr_logexp.htm) is specified:

-   Any fields in the [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") can be prefixed with the name of the CTE association \_assoc.. Any fields in the [association source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_source_glosry.htm "Glossary Entry") can be prefixed with the name of the common table expression +cte. The prefix is separated using the [column selector](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_comp_selector_glosry.htm "Glossary Entry") ~. These specifications are mandatory only if the names of the fields occur in both data sources.
-   Any fields of the [association source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_source_glosry.htm "Glossary Entry") specified in the ON condition must be listed in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm) of the common table expression so that a join expression can be built from the CTE association when used in a path expression. The names defined in the common table expression must be used here. These are either the alias names defined using AS or the names defined in an optional name list.

Hints

-   A CTE association cannot be used in the same common table expression for which it is defined.
-   More specifically, [internal tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_itab.htm) or previously defined common table expressions of the same WITH statement and the current common table expression itself can also be specified as [association targets](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry"). The latter is a [self-association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenself_association_glosry.htm "Glossary Entry").
-   It is advisable to use an underscore \_ as the first character of the CTE association name.
-   The character + cannot be used as the first character of a CTE association name, which means there can be no naming conflicts in the ON condition.
-   A common table expression that defines and exposes a self-association can be used as the source of the [hierarchy generator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_hierarchy_generator.htm). More specifically, this makes it possible to also use internal tables as the source of hierarchies.
-   For the latter, see the [executable example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_from_itab_hiera_abexa.htm).
-   A common table expression for which a CTE association is defined can also be a result set merged using [UNION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm), [INTERSECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm), or [EXCEPT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm). The columns specified in the ON condition refer to the merged result set.
-   The definition of a CTE association enforces [strict mode from ABAP release 7.54](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_754.htm).

Addition   

... cardinality

Effect

It is mandatory to specify a [cardinality](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencardinality_glosry.htm "Glossary Entry") cardinality. A cardinality for both the source and the target, or only for the [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") of the CTE association is possible. The following options are available:

-   ONE TO ONE
-   ONE TO MANY
-   ONE TO EXACT ONE
-   EXACT ONE TO ONE
-   EXACT ONE TO MANY
-   EXACT ONE TO EXACT ONE
-   MANY TO ONE
-   MANY TO MANY
-   MANY TO EXACT ONE
-   TO ONE
-   TO MANY

This cardinality is used by some database systems for performance optimizations. This works in the same way as for cardinality specifications in [join expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_join.htm). This means that an optimization is attempted, and the result can be undefined if the result set does not match the cardinality.

Hint

To avoid undefined and platform-dependent behavior, the cardinality should always be defined to match the data to be read.

Example

The following WITH statement from the class CL\_DEMO\_WITH\_ASSOCIATIONS\_JOIN demonstrates the way [CTE associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencte_association_glosry.htm "Glossary Entry") are defined and used. The example works in exactly the same way as the [executable example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpath_expr_in_from_clause_abexa.htm) for path expressions in the FROM clause. The CDS views and CDS associations used here are replaced one by one by common table expressions and CTE associations. When executing CL\_DEMO\_WITH\_ASSOCIATIONS\_JOIN, the class displays the result and compares the behavior of CTE associations and CDS associations when accessed.

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
        WITH ASSOCIATIONS ( JOIN MANY TO ONE scarr AS \_scarr
          ON +spfli\_scarr~carrid = \_scarr~carrid ),
   +sairport\_tz AS
     ( SELECT FROM sairport
              FIELDS id
              WHERE time\_zone = @tz )
        WITH ASSOCIATIONS ( JOIN MANY TO ONE +spfli\_scarr AS \_spfli
          ON +sairport\_tz~id = \_spfli~airpfrom )
   SELECT DISTINCT carrname
          FROM +sairport\_tz
               \\\_spfli\[ fltime > @fltime \]
               \\\_scarr\[ currcode = @( CONV s\_currcode(
                                             to\_upper( currc ) ) ) \]
               AS scarr
          ORDER BY carrname
          INTO TABLE @FINAL(result\_cte\_assoc).

Example

The following WITH statement from the class CL\_DEMO\_WITH\_ASSCTNS\_HIERA demonstrates the way a common table expression +parent\_child\_source and its CTE association \_relat are used as the data source and [hierarchy association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") of the [hierarchy generator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_hierarchy_generator.htm). The CTE association \_relat is a [self-association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenself_association_glosry.htm "Glossary Entry"). When executing CL\_DEMO\_WITH\_ASSCTNS\_HIERA, the class displays the result and compares it with the result when a similar CDS view and CDS association are used in the hierarchy generator.

FINAL(start\_id) = CONV demo\_parent\_chld-id( 'A' ).
WITH
  +parent\_child\_source AS
     ( SELECT FROM demo\_parent\_chld
              FIELDS id,
                     parent\_id AS parent )
       WITH ASSOCIATIONS ( JOIN MANY TO MANY +parent\_child\_source
                             AS \_relat
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
         INTO TABLE @FINAL(cte\_result).