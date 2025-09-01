  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, Associations](javascript:call_link\('abencds_association_v1.htm'\)) → 

CDS DDL - DDIC-based View, ASSOCIATION

Syntax

... ASSOCIATION *\[* \[min..max\] *\]* TO target *\[*AS \_assoc*\]* ON [cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\))
                *\[* WITH DEFAULT FILTER [cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) *\]* ...

Additions:

[1\. ... \[min..max\]](#!ABAP_ADDITION_1@1@)
[2\. ... AS \_assoc](#!ABAP_ADDITION_2@2@)
[3\. ... WITH DEFAULT FILTER cds\_cond](#!ABAP_ADDITION_3@3@)

Effect

Defines a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") with the name \_assoc in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)) of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). A CDS association associates the current CDS view as [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry") with the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") target using an ON condition [cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\)). A data source target can be a DDIC database table defined in ABAP Dictionary , a [dictionary view](javascript:call_link\('abendictionary_view_glosry.htm'\) "Glossary Entry"), or a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). If target is an [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry"), the way the CDS association can be used is restricted.

A CDS association of a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)) in a CDS view can be accessed as follows:

-   By specifying its name in a [path expression](javascript:call_link\('abencds_path_expression_v1.htm'\)) in the same statement and in all places where this is documented. A CDS association whose [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") is an [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") can only be [exposed](javascript:call_link\('abencds_select_list_association_v1.htm'\)) in the [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)).

-   If a CDS association whose [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") is not abstract is exposed using a [path expression](javascript:call_link\('abencds_path_expression_v1.htm'\)) in the [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)) of the current SELECT statement, the following can use it in their path expressions:

-   Other [CDS views](javascript:call_link\('abencds_path_expression_v1.htm'\))

-   [ABAP SQL statements](javascript:call_link\('abenopen_sql_path.htm'\))

-   Exposed [self associations](javascript:call_link\('abenself_association_glosry.htm'\) "Glossary Entry") can be specified as [hierarchy associations](javascript:call_link\('abenhierarchy_association_glosry.htm'\) "Glossary Entry") in [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") or in the ABAP SQL [hierarchy generator](javascript:call_link\('abenhierarchy_generator_glosry.htm'\) "Glossary Entry") [HIERARCHY](javascript:call_link\('abenselect_hierarchy_generator.htm'\)).

When a CDS view is activated that uses a path expression to access a CDS association or an element, or when a path expression is used for access in ABAP SQL, every CDS association of the path expression is transformed to a [join expression](javascript:call_link\('abenjoin_expression_glosry.htm'\) "Glossary Entry"). Here, the [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry") represents the left side and the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") represents the right side. The ON condition of the association is added to the ON condition of the join. By default, the [join type](javascript:call_link\('abenjoin_type_glosry.htm'\) "Glossary Entry") is determined by where the [path expression](javascript:call_link\('abencds_path_expression_v1.htm'\)) is used:

-   After [FROM](javascript:call_link\('abencds_select_statement_v1.htm'\)), it is an [inner join](javascript:call_link\('abeninner_join_glosry.htm'\) "Glossary Entry") inner join (INNER JOIN)

-   In all other locations, it is a [left outer join](javascript:call_link\('abenleft_outer_join_glosry.htm'\) "Glossary Entry") (LEFT OUTER JOIN)

This setting can be overwritten by specifying the [join type](javascript:call_link\('abencds_path_expr_jointype_v1.htm'\)) when using the CDS association in a path expression. A path expression in a [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)) that [exposes](javascript:call_link\('abencds_select_list_association_v1.htm'\)) its closing CDS association is not defined as a join. A self association whose [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") is the same as the [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry") cannot be created as a join in the CDS view where it is defined.

When specifying the ON condition, for the operands, [general](javascript:call_link\('abencds_cond_expr_operands_v1.htm'\)) and the following [special rules](javascript:call_link\('abencds_cond_expr_on_assoc_v1.htm'\)) apply:

-   The fields of the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") must be prefixed in the ON condition by the name of the CDS association (prefix \_assoc. separated by a period).

-   If the CDS association in the [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)) of the current SELECT statement is exposed, the fields of the [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry") specified in the ON condition must also be listed in the [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)). This ensures that a join expression can be built from the CDS association (when used in a path expression).

-   To make a reference to an element of the [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)) in the ON condition, the field name can be prefixed with $projection instead of the [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry"). In this case, an alternative element name defined using [AS](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) can be specified instead of the field name. If a path expression of the SELECT list is used when the prefix $projection is used in the ON condition, the current CDS association cannot itself be used in the SELECT list, to avoid invalid join expressions.

Hints

-   CDS associations not listed in the SELECT list can only be used in path expressions of the current SELECT statement.

-   The syntax for defining and using CDS associations is a higher-value wrapping of the syntax for [joins](javascript:call_link\('abencds_joined_data_source_v1.htm'\)). Using CDS associations instead of directly programming joins makes it easier to read the definition of a CDS view. CDS associations can be used to model relationships between CDS entities that can be accessed simply using path expressions in [CDS views](javascript:call_link\('abencds_path_expression_v1.htm'\)) or in [ABAP SQL](javascript:call_link\('abenopen_sql_path.htm'\)).

-   When a CDS view is activated, a join defined by a CDS association is built for every use in a path expression and not for the definition of the CDS association. No joins are constructed for CDS associations that are not used in their CDS views.

-   If a CDS association is used in a path expression of the SELECT list of the current SELECT statement, a join is defined for the current view. Here, the ON conditions of the CDS association are applied to the join directly. No path expressions are allowed in the ON condition of a join, which means that no reference can be made to a path expression of the SELECT list when using the prefix $projection in the ON condition of a CDS association, if CDS the association is also used here.

-   CDS associations and [join expressions](javascript:call_link\('abencds_joined_data_source_v1.htm'\)) can be used in a SELECT statement of a CDS view. When the join expressions defined by the CDS associations are used in path expressions, all joins are joined.

-   Special rules apply to CDS associations in SELECT statements joined with [UNION](javascript:call_link\('abencds_union_v1.htm'\)).

-   [Cyclical dependencies](javascript:call_link\('abencds_cycle_problems.htm'\)) should be avoided when using CDS associations to prevent problems occurring in mass activations of CDS entities.

-   CDS associations whose [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") is an [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") cannot be used anywhere where they could produce instances of join expressions.
    

Addition 1

... \[min..max\]

Effect

Defines the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of a CDS view, which is defined with a CDS association ASSOCIATION. The square brackets \[ \] are part of the syntax. For min and max, positive integers (including 0) and asterisks (\*) can be specified:

-   max cannot be 0.

-   An asterisk \* for max means any number of rows.

-   min can be omitted (set to 0 if omitted).

-   min cannot be \*.

-   When a CDS association is used in a [WHERE condition](javascript:call_link\('abencds_where_clause_v1.htm'\)), 1 must be specified for max.

If the cardinality is not defined explicitly, the cardinality to-one is used implicitly (\[min..1\]).

A cardinality is specified to document the semantics of the data model and, in some database systems, for optimizations. In these database systems, left outer joins (LEFT OUTER JOIN) produced by a [path expressions](javascript:call_link\('abencds_path_expression_v1.htm'\)) are given the addition TO ONE if an explicit or implicit "to 1" cardinality is used and the addition TO MANY if any other cardinality is used. These additions work in the same way as when they are specified explicitly in [LEFT OUTER JOIN](javascript:call_link\('abencds_joined_data_source_v1.htm'\)). This means that an optimization is attempted and the result can be undefined if the result set does not match the cardinality.

Hints

-   To avoid undefined and platform-dependent behavior, the cardinality should always be defined to match the data in question.

-   The specified cardinality is evaluated by the syntax check for paths specified in the CDS DDL of CDS or in ABAP SQL. A non-matching cardinality usually produces a syntax check warning.

Example

Specifies the cardinality of a CDS association incorrectly. The following CDS view joins the DDIC database tables SCARR and SPFLI in a CDS association \_spfli without specifying the cardinality explicitly. The implicitly set cardinality is "to 1". If the CDS association is used in a path specified in the SELECT list, this is implemented in some database systems (for example the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry")) as a left outer join using the implicit addition TO ONE. The actual cardinality of the data is, however, TO MANY.

@AbapCatalog.sqlViewName: 'DEMOCDSWRGC'
define view demo\_cds\_wrong\_cardinality
  as select from
    scarr
    association to spfli as \_spfli on
      \_spfli.carrid = scarr.carrid
    {
      scarr.carrid   as carrid,
      scarr.carrname as carrname,
      \_spfli.connid  as connid
    }

The program DEMO\_CDS\_WRONG\_CARDINALITY uses different SELECT statements to access the view. On optimizing database systems, such as the SAP HANA database, the two reads return a different number of rows, potentially an unexpected result.

Example

Specifies the cardinality of a CDS association correctly. The following CDS view joins the DDIC database tables SCARR and SPFLI in a CDS association \_spfli while specifying the cardinality explicitly. If the CDS association is used in a path specified in the SELECT list, this is implemented in some database systems (for example the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry")) as a left outer join using the implicit addition TO MANY, which matches the actual cardinality of the data.

@AbapCatalog.sqlViewName: 'DEMOCDSEXPC'
define view demo\_cds\_explicit\_cardinality
  as select from
    scarr
    association \[1..\*\] to spfli as \_spfli on
      \_spfli.carrid = scarr.carrid
    {
      scarr.carrid   as carrid,
      scarr.carrname as carrname,
      \_spfli.connid  as connid
    }

The program DEMO\_CDS\_EXPLICIT\_CARDINALITY uses different SELECT statements to access the view. The two reads return the same number of rows on all database systems.

Addition 2

... AS \_assoc

Effect

Defines the name \_assoc of a CDS association of a CDS view defined using ASSOCIATION. If no name is defined explicitly using AS, \_assoc is set implicitly to the name of the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry"). The name \_assoc must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)).

Hint

It is advisable to use an underscore \_ as the first character of the CTE CDS association name.

Example

Example of a simple CDS association. The following CDS view provides the same result as the CDS view DEMO\_CDS\_SCARR\_SPFLI in the [joins](javascript:call_link\('abencds_joined_data_source_v1.htm'\)) example, as shown in the program DEMO\_CDS\_ASSOCIATION using an assertion. Furthermore, the CDS association spfli\_scarr is [exposed](javascript:call_link\('abencds_select_list_association_v1.htm'\)) to be used from outside in the [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)) by specifying a [path](javascript:call_link\('abencds_path_expression_v1.htm'\)) that contains only the name of a CDS association. The program DEMO\_CDS\_ASSOCIATION also shows how the CDS association can be accessed by [specifying a path](javascript:call_link\('abenopen_sql_path.htm'\)) in ABAP SQL.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASSOC'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_association(
    \_spfli\_scarr,
    id,
    carrier,
    flight,
    departure,
    destination
  )
  as select from
    spfli
    association \[1..1\] to scarr as \_spfli\_scarr on
      $projection.carrid = \_spfli\_scarr.carrid
    {
          \_spfli\_scarr,
      key spfli.carrid,
      key \_spfli\_scarr\[inner\].carrname,
      key spfli.connid,
          spfli.cityfrom,
          spfli.cityto
    }

Example

The following CDS view sales\_order\_invoice\_header returns information about sales invoices and works with the DDIC database tables snwd\_so\_inv\_head, snwd\_so, snwd\_bpa, and snwd\_so\_inv\_item.

Two CDS associations are defined:

-   \_buyer stands for a join between the current view and the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") snwd\_bpa.

-   \_invoice\_items stands for a join between the current view and the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") snwd\_so\_inv\_item.

The [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry") fields used in the ON conditions - node\_key and buyer\_guid - are part of the SELECT list. Here the prefix $projection is used instead of the prefixes snwd\_so\_inv\_head or snwd\_so\_inv\_head.

The CDS association \_buyer is not listed in the SELECT list and can only be used in path expressions of the current SELECT statement. This association can be specified in the WHERE condition due to the cardinality \[1..1\]. The CDS association \_invoice\_items is not accessed in path expressions of the current SELECT statement. However, this association is listed in the SELECT list, which means it can be used in path expressions of other CDS views. This association cannot be specified in a WHERE condition due to the cardinality \[1..\*\].

@AbapCatalog.sqlViewName: 'SALESO\_INVHDR\_VW'
define view sales\_order\_invoice\_header as
  select from snwd\_so\_inv\_head
           inner join snwd\_so
             on snwd\_so\_inv\_head.so\_guid = snwd\_so.node\_key
         association \[1..1\] to snwd\_bpa as \_buyer
           on $projection.buyer\_guid = \_buyer.node\_key
         association \[1..\*\] to snwd\_so\_inv\_item as \_invoice\_items
           on $projection.node\_key = \_invoice\_items.parent\_key
         { key snwd\_so\_inv\_head.node\_key,      //used in assoc \_invoice\_items
               snwd\_so\_inv\_head.buyer\_guid,    //used in assoc \_buyer
               snwd\_so.so\_id as sales\_order\_id,
               \_buyer.bp\_id as buyer\_id,       //from assoc \_buyer
               snwd\_so\_inv\_head.payment\_status,
              @Semantics.currencyCode
               snwd\_so\_inv\_head.currency\_code,
              @Semantics.amount.currencyCode: 'currency\_code'
               snwd\_so\_inv\_head.gross\_amount,
               \_invoice\_items                  //expose assoc \_invoice\_items
         }
          where \_buyer.bp\_role = '001';          //usage of assoc buyer

The CDS view can be accessed in an ABAP program with a simple ABAP SQL SELECT statement.

SELECT sales\_order\_id, buyer\_id, payment\_status
       FROM sales\_order\_invoice\_header
       INTO CORRESPONDING FIELDS OF TABLE @itab.

The complexity of the actual query is wrapped transparently in the CDS view for the application programmer. When the view is accessed, the join (defined by the CDS association \_invoice\_items) between snwd\_so\_inv\_head and snwd\_so\_inv\_item is not built, because there are no path expressions that need to access the join.

The CDS view sales\_order\_invoice\_header mentioned above is used as the data source in the definition of the CDS view sales\_order\_invoice\_items. This data source is used to access the [exposed](javascript:call_link\('abencds_select_list_association_v1.htm'\)) CDS association \_invoice\_items. The elements of the CDS association are accessed in this view. There is no visual indication that it is the result of a join. This join between snwd\_so\_inv\_head and snwd\_so\_inv\_item is created when the CDS view sales\_order\_invoice\_items is activated. The other CDS association \_buyer of the CDS view sales\_order\_invoice\_header cannot be accessed.

@AbapCatalog.sqlViewName: 'SALESO\_INVITM\_VW'
define view sales\_order\_invoice\_items as
  select from sales\_order\_invoice\_header as header
  { header.sales\_order\_id,
    header.\_invoice\_items.inv\_item\_pos as item\_position,
   @Semantics.currencyCode
    header.\_invoice\_items.currency\_code,
   @Semantics.amount.currencyCode: 'currency\_code'
    header.\_invoice\_items.gross\_amount }

Addition 3

... WITH DEFAULT FILTER cds\_cond

Effect

Defines a standard filter condition for a [path expression](javascript:call_link\('abencds_path_expression_v1.htm'\)).

-   If no [filter condition](javascript:call_link\('abencds_path_expression_filter_v1.htm'\)) is specified when the CDS association is used in an path expression, the condition [cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) specified using DEFAULT FILTER is used as the filter condition and applied in an extended condition for the join. The same [rules](javascript:call_link\('abencds_cond_expr_filter_v1.htm'\)) apply to the default filter condition as to a filter condition specified as an attribute.

-   If a [filter condition](javascript:call_link\('abencds_path_expression_filter_v1.htm'\)) is specified when the CDS association is used in a path expression, this condition is used instead of the default filter condition.

Hint

When the syntax check evaluates a cardinality specified using \[min..max\], the default filter condition is respected alongside the ON condition.