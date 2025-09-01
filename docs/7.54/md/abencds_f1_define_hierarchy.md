---
title: "ABAP CDS - DEFINE HIERARCHY"
description: |
  Syntax @entity_annot1(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_annotations.htm) @entity_annot2(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_annotations.htm) ... @hierarchy_annot1(https://help.sap.com/doc
version: "7.54"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_hierarchy.htm"
abapFile: "abencds_f1_define_hierarchy.htm"
keywords: ["select", "insert", "do", "if", "case", "try", "data", "types", "abencds", "define", "hierarchy"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - DEFINE HIERARCHY

Syntax

*\[*[@entity\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_annotations.htm)*\]*
*\[*[@entity\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_annotations.htm)*\]*
...
*\[*[@hierarchy\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hierarchy_annotations.htm)*\]*
*\[*[@hierarchy\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hierarchy_annotations.htm)*\]*
...
*\[*DEFINE*\]* HIERARCHY cds\_entity
         *\[*[parameter\_list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_parameter_list.htm)*\]*
         AS PARENT CHILD HIERARCHY(
           SOURCE cds\_view
           CHILD TO PARENT ASSOCIATION \_hierarchy\_assoc
           *\[*PERIOD FROM field1 TO field2 VALID FROM from TO to*\]*
           *\[*DIRECTORY \_directory\_assoc FILTER BY cond\_expr*\]*
           *\[*START WHERE cond\_expr*\]*
           SIBLINGS ORDER BY field1 *\[*ASCENDING*|*DESCENDING*\]**\[*,
                             field2 *\[*ASCENDING*|*DESCENDING*\]*, ...*\]*
           *\[*DEPTH depth*\]*
           *\[*NODETYPE node\_type*\]*
           *\[*MULTIPLE PARENTS *{*NOT ALLOWED*}**|*LEAVES*|*ALLOWED*\]*
           *\[*ORPHANS IGNORE*|*ERROR*|*ROOT*\]*
           *\[*CYCLES ERROR*|*BREAKUP*\]*
           *\[*GENERATE SPANTREE*\]* )
     { [element\_list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_element_list.htm) }

Extras:

[1\. ... SOURCE cds\_view](#!ABAP_ADDITION_1@1@)
[2\. ... CHILD TO PARENT ASSOCIATION \_hierarchy\_assoc](#!ABAP_ADDITION_2@2@)
[3\. ... PERIOD FROM field1 TO field2 VALID FROM from TO to](#!ABAP_ADDITION_3@3@)
[4\. ... DIRECTORY \_directory\_assoc FILTER BY cond\_expr](#!ABAP_ADDITION_4@4@)
[5\. ... START WHERE cond\_expr](#!ABAP_ADDITION_5@5@)
[6\. ... SIBLINGS ORDER BY field1 *\[*ASCENDING*|*DESCENDING*\]*, ...](#!ABAP_ADDITION_6@6@)
[7\. ... DEPTH depth](#!ABAP_ADDITION_7@7@)
[8\. ... NODETYPE node\_type](#!ABAP_ADDITION_8@8@)
[9\. ... MULTIPLE PARENTS *{*NOT ALLOWED*}**|**{*LEAVES ONLY*}**|*ALLOWED](#!ABAP_ADDITION_9@9@)
[10\. ... ORPHANS IGNORE*|*ERROR*|*ROOT](#!ABAP_ADDITION_10@10@)
[11\. ... CYCLES ERROR*|*BREAKUP](#!ABAP_ADDITION_11@11@)
[12\. ... GENERATE SPANTREE](#!ABAP_ADDITION_12@12@)

Effect

Defines a [CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry") cds\_entity as a [CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") in the [CDS DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_ddl_glosry.htm "Glossary Entry"). A CDS hierarchy has a tabular results set whose rows construct [parent-child relationships](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpcr_glosry.htm "Glossary Entry"). When a CDS hierarchy is accessed as the data source of a [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry") query, it is handled like a [hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_glosry.htm "Glossary Entry") in which additional [hierarchy columns](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_column_glosry.htm "Glossary Entry") can be selected.

-   [@entity\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_annotations.htm) and [@hierarchy\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hierarchy_annotations.htm) can be used to specify optional [annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") for the CDS hierarchy.

-   [parameter\_list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_parameter_list.htm) is used to declare a list of optional input parameters for the CDS hierarchy.

-   [element\_list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_element_list.htm) is used to declare the elements of the CDS hierarchy.

The additions in parentheses after AS PARENT CHILD HIERARCHY define the way the hierarchy is created:

-   SOURCE must be followed by a CDS view cds\_view as the source of the hierarchy.

-   CHILD TO PARENT ASSOCIATION must be followed by a [hierarchy association](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") \_hierarchy\_assoc published by the source cds\_view. The source data source and target data source of this association must be the source cds\_view. The ON condition of the hierarchy association defines the [parent-child relationships](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpcr_glosry.htm "Glossary Entry") between the [hierarchy nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_node_glosry.htm "Glossary Entry").

-   START WHERE can be followed by a start condition that defines [root nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenroot_node_glosry.htm "Glossary Entry") for the [root node set](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenroot_node_set_glosry.htm "Glossary Entry") of the hierarchy. The hierarchy consists of the root nodes of the root node set and their [descendant nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendescendant_node_glosry.htm "Glossary Entry"). If START WHERE is not specified, the root node set consists of all [parent nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenparent_node_glosry.htm "Glossary Entry") that contain its initial value.

All other additions define further properties of the hierarchy. The rows of the tabular results set of the CDS hierarchy are the [hierarchy nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_node_glosry.htm "Glossary Entry") of the new hierarchy but without its [hierarchy columns](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_column_glosry.htm "Glossary Entry").

Notes

-   The syntax and functions of a CDS hierarchy overlap to a large extent with the [hierarchy generator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_generator.htm) in ABAP SQL

-   Unlike in ABAP SQL, however, ABAP CDS cannot access the additional [hierarchy columns](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_column_glosry.htm "Glossary Entry") of a CDS hierarchy. Instead, the associated [hierarchy attributes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_attribute_glosry.htm "Glossary Entry") must be entered in the [element list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_element_list.htm) of the CDS hierarchy if required.

-   On [SAP HANA databases](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_database_glosry.htm "Glossary Entry"), the results sets of CDS hierarchies plus the hierarchy generator HIERARCHY are created by using the SAP HANA hierarchy generator function HIERARCHY and similar. More information can be found in the [documentation](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.03/en-US).

Example

Defines a simple CDS hierarchy. The program DEMO\_HIERARCHY\_TREE accesses the CDS hierarchy and compares this with accesses to similar hierarchies in ABAP SQL.

define hierarchy DEMO\_CDS\_SIMPLE\_TREE
  with parameters
    p\_id : abap.int4
  as parent child hierarchy(
    source
      DEMO\_CDS\_SIMPLE\_TREE\_SOURCE
      child to parent association \_tree
      start where
        id = :p\_id
      siblings order by
        id ascending
    )
    {
      id,
      parent,
      name
    }

Addition 1

... SOURCE cds\_view

Effect

The mandatory addition SOURCE specifies a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry") as a source of the CDS hierarchy. This source must [publish](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_association.htm) the [hierarchy association](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") specified after CHILD TO PARENT ASSOCIATION in its SELECT list.

Note

CDS views are currently the only [CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry") that can be specified as the source of a CDS hierarchy. More specifically, a CDS hierarchy cannot be the source of another CDS hierarchy.

Example

The CDS hierarchy of the previous example uses the following CDS view as a source:

@AbapCatalog.sqlViewName: 'DEMOTREESOURCE'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view DEMO\_CDS\_SIMPLE\_TREE\_SOURCE
  as select from
    demo\_simple\_tree
    association \[1..1\] to DEMO\_CDS\_SIMPLE\_TREE\_SOURCE as \_tree on
      $projection.parent = \_tree.id
    {
      \_tree,
      id,
      parent\_id as parent,
      name
    }

Addition 2

... CHILD TO PARENT ASSOCIATION \_hierarchy\_assoc

Effect

The mandatory addition CHILD TO PARENT ASSOCIATION specifies the [hierarchy association](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") whose ON condition selects the [descendant nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendescendant_node_glosry.htm "Glossary Entry") of the [root node set](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenroot_node_set_glosry.htm "Glossary Entry"). The hierarchy association must be published by the CDS view specified after SOURCE.

The hierarchy association defines the parent-child relationship between the [hierarchy nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_node_glosry.htm "Glossary Entry"). The following conditions apply here:

-   The CDS association must be a [self-association](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenself_association_glosry.htm "Glossary Entry").

-   Only equality comparisons with the operator \= and joined using AND can occur in the ON condition of the CDS association.

-   In each comparison in the ON condition, one field of the source data source must be compared with a field (prefixed with \_hierarchy\_assoc) of the target data source.

-   The source data source of the CDS association cannot contain any fields that have the same name as a [hierarchy attribute](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_attributes.htm). An alternative element name must be defined for these fields.

Each row of the results set of the source hierarchy\_source that meets the ON condition for an existing hierarchy node is included recursively in the hierarchy as its [child node](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenchild_node_glosry.htm "Glossary Entry") (if this is possible).

Note

The optional additions define further conditions specifying whether a row can be included as a hierarchy node or not.

Example

The CDS view of the previous example publishes its association \_tree. This CDS association meets all requirements of a hierarchy association and can be used as one.

Addition 3

... PERIOD FROM field1 TO field2 VALID FROM from TO to

Effect

The optional addition PERIOD defines the hierarchy as a [temporal hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentemporal_hierarchy_glosry.htm "Glossary Entry") in which the hierarchy nodes are limited by an adjustment of time intervals.

-   field1 and field2 are used to specify the fields of the source cds\_view that define the lower and upper limits of a [period](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenperiod_glosry.htm "Glossary Entry") in the hierarchy data. field1 and field2 must be different fields of the same data type. This can be:

-   The built-in type [DATS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) of ABAP Dictionary.

-   A data type that is defined by one of the [data elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_element_glosry.htm "Glossary Entry") TIMESTAMP or TIMESTAMPL.

-   from and to define the lower and upper limit of a time interval that acts as a condition for the periods of the [root node set](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenroot_node_set_glosry.htm "Glossary Entry"). The data type of from and to must match the data type of field1 and field2. The following can be specified:

-   Parameters from the [parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_parameter_list.htm) of the hierarchy. Here, only the syntax [$parameters.pname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter.htm) is possible, and not [:pname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter.htm).

-   [Character literals](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_literal.htm) whose value matches the requested data type.

A temporal hierarchy is created as follows:

-   Only [root nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenroot_node_glosry.htm "Glossary Entry") of the [root node set](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenroot_node_set_glosry.htm "Glossary Entry") in which the period defined using field1 and field2 has a non empty intersection with the time interval defined by from and to are taken into account. This intersection forms the [validity interval](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalidity_interval_glosry.htm "Glossary Entry") of the root node.

-   Only [child nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenchild_node_glosry.htm "Glossary Entry") in which the period defined by field1 and field2 has a non empty intersection with the validity interval of the [parent node](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenparent_node_glosry.htm "Glossary Entry") are generated. This intersection forms the [validity interval](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalidity_interval_glosry.htm "Glossary Entry") of the child node.

For temporal hierarchies, there are additional [hierarchy attributes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_attributes.htm) VALID\_FROM and VALID\_UNTIL that contain the interval limits of the [validity interval](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalidity_interval_glosry.htm "Glossary Entry") of each hierarchy node.

The addition PERIOD must not be used with GENERATE SPANTREE.

Notes

-   The validity interval of a descendant node is always a subset of a validity interval of all ancestor nodes. Validity intervals can only remain the same or become narrower from hierarchy level to hierarchy level, they can never get wider.

-   For a descendant node to belong to a temporal hierarchy, it is not sufficient for its period to overlap with the time interval defined by from and to. Only the validity interval of the parent node is decisive. A path of a normal hierarchy is truncated in a temporal hierarchy at the position in which there is no intersection between the period and the preceding validity interval.

-   The source data source of the current [hierarchy association](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") must not have any fields called VALID\_FROM or VALID\_UNTIL. An alternative element name must be defined for these fields.

-   The value of to can also be less than the value of from. However, a validity interval is formed where necessary. In contrast, if the value of the lower interval limit of the period is greater than the value of the upper interval limit, the validity interval is empty.

-   Additions such as MULTIPLE PARENTS or CYCLES affect the temporal hierarchy. Nodes that would raise an exception in a normal hierarchy can be hidden in a temporal hierarchy.

-   To generate a temporal hierarchy, in an [SAP HANA database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_database_glosry.htm "Glossary Entry"), the hierarchy generator function [HIERARCHY\_TEMPORAL](https://help.sap.com/viewer/4f9859d273254e04af6ab3e9ea3af286/2.0.03/en-US/a93c356d32ef4e7fbd6143b554278eab.html) there is called.

Example

The following CDS hierarchies create two temporal [hierarchies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentemporal_hierarchy_glosry.htm "Glossary Entry"). Here, date fields and time stamp fields are both used once as [periodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenperiod_glosry.htm "Glossary Entry"). The program DEMO\_HIERARCHY\_TEMPORAL accesses the CDS hierarchies and compares the results with the [hierarchy generator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_generator.htm) in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry") used in a similar way. When executed, this program demonstrates how the addition PERIOD works.

define hierarchy DEMO\_CDS\_PARENT\_CHILD\_DATE\_PRD
  with parameters
    p\_date\_from : dats,
    p\_date\_to   : dats
  as parent child hierarchy(
    source DEMO\_CDS\_PARENT\_CHILD\_SRC\_PRD
    child to parent association \_relat
    period from date\_from to date\_to
      valid from $parameters.p\_date\_from  
              to $parameters.p\_date\_to
    start where
      id = 'A'
    siblings order by
      id
  )
{
  id,
  parent,
  $node.valid\_from  as h\_valid\_from,
  $node.valid\_until as h\_valid\_until }

define hierarchy DEMO\_CDS\_PARENT\_CHILD\_TS\_PRD
  with parameters
    p\_ts\_from : timestamp,
    p\_ts\_to   : timestamp
  as parent child hierarchy(
    source DEMO\_CDS\_PARENT\_CHILD\_SRC\_PRD
    child to parent association \_relat
    period from ts\_from to ts\_to
      valid from $parameters.p\_ts\_from  
              to $parameters.p\_ts\_to
    start where
      id = 'A'
    siblings order by
      id
  )
{
  id,
  parent,
  $node.valid\_from  as h\_valid\_from,
  $node.valid\_until as h\_valid\_until }

Addition 4

... DIRECTORY \_directory\_assoc FILTER BY cond\_expr

Effect

The optional addition DIRECTORY defines a filter condition cond\_expr for the rows of the source of the hierarchy specified after SOURCE. The hierarchy is generated only from those rows in the source that meet the filter condition. AND comparisons for equality can be specified for cond\_expr using \=:

-   The operator on the left side of a comparison must be an element of the current hierarchy whose name occurs as an operand in the CDS view specified after SOURCE as follows:

-   On the left side of an ON condition of a CDS association \_directory\_assoc.

-   On the left side of an ON condition of the hierarchy association \_hierarchy\_assoc.

-   The operator on the right side of the comparison can be a simple literal or a type-friendly parameter from the [parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_parameter_list.htm) of the hierarchy.

The same [rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_types.htm) apply to the comparable types as to CDS views.

Notes

-   A filter condition removes all hierarchy nodes and their descendant nodes from the results set that do not match the condition cond\_exp.

-   The content of the target data source of the CDS association \_directory\_assoc is ignored when the filter condition is evaluated.

-   The restriction of the operands on the left side of a comparison to the operands of a CDS association of the source is supported by certain programming models. Any frameworks that are based on these models read data from the target data source of this CDS association and pass it to input parameters of the hierarchy that evaluates them in the filter condition.

Example

The following CDS view defines a self association \_pcr, which itself defines a parent-child relationship, and a CDS association \_dir of a database table DEMO\_HIERA\_DIR:

@AbapCatalog.sqlViewName: 'DEMOPACHSRCDIR'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view DEMO\_CDS\_PARENT\_CHILD\_SRC\_DIR
  as select from
    demo\_parchld\_dir
    association \[1..\*\] to DEMO\_CDS\_PARENT\_CHILD\_SRC\_DIR as \_pcr on
      $projection.parent = \_pcr.id and
      $projection.dir\_entry =  \_pcr.id
    association \[1..\*\] to demo\_hiera\_dir                as \_dir   on
      $projection.dir\_entry = \_dir.dir\_entry  
    {
      \_pcr,
      \_dir,
      id,
      parent\_id as parent,
      dir\_entry
    }

The following CDS hierarchy uses the operand dir\_entry from the left side of the ON condition from the CDS view in the filter condition after DIRECTORY \_dir FILTER BY:

define hierarchy DEMO\_CDS\_PARENT\_CHILD\_DIR
  with parameters
    p\_id1 : abap.char(2),
    p\_id2 : abap.char(2),
    p\_dir : abap.char(2)
      as parent child hierarchy(
    source
      DEMO\_CDS\_PARENT\_CHILD\_SRC\_DIR  
      child to parent association \_pcr
      directory \_dir filter by dir\_entry = :p\_dir  
      start where
        id = :p\_id1 or id = :p\_id2  
      siblings order by
        parent
      multiple parents allowed
    )
    {
      id,
      parent,
      dir\_entry
    }

When the program DEMO\_HIERARCHY\_PARENTCHILD\_DIR is executed, various parameters can be passed and the filter condition is demonstrated.

Addition 5

... START WHERE cond\_expr

Effect

The optional addition START WHERE specifies the start condition for creating the hierarchy. START WHERE can be followed by a logical expression cond\_expr that selects rows from the source cds\_view. The same operators can be specified for cond\_expr as in a [WHERE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_where_clause.htm) clause of a CDS view and the same rules apply. The operands on the left side can be elements of the CDS view specified after SOURCE. The operands on the right side can be literals, parameters from the [parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_parameter_list.htm) of the hierarchy, and [session variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensession_variable_glosry.htm "Glossary Entry"). When specifying literals, parameters, and session variables, the same applies as when defining CDS views.

If the addition START WHERE is not specified explicitly, it is added implicitly with a condition that checks the [parent node](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenparent_node_glosry.htm "Glossary Entry") defined in the [hierarchy association](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") in question for its initial value.

The selected rows are inserted in the hierarchy as a [root node set](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenroot_node_set_glosry.htm "Glossary Entry"). For each [root node](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenroot_node_glosry.htm "Glossary Entry") in the root node set, the [descendant nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendescendant_node_glosry.htm "Glossary Entry") are selected that meet the ON condition of the hierarchy association and, if possible, inserted in the hierarchy.

Notes

-   It is advisable to always specify the start condition explicitly, since this makes the definition clearer. Furthermore, the root node set defined by the implicit start condition is not always suitable and also cannot be modified using parameters.

-   The start condition should select a feasible set of root nodes. If no rows in the results set of the source cds\_view meet the condition, the hierarchy is empty. If all rows meet the condition, the descendant nodes of every row are selected and inserted.

Example

The following CDS hierarchy uses an interval boundary with BETWEEN as a start condition. The program DEMO\_HIERARCHY\_START\_WHERE accesses the CDS hierarchy and compares the result with the [hierarchy generator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_generator.htm) in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry") used in a similar way. When executed, this program demonstrates how this addition works.

define hierarchy DEMO\_CDS\_PARENT\_CHILD\_STRTWHR  
  with parameters
    p\_from : abap.char(2),
    p\_to   : abap.char(2)
  as parent child hierarchy(
    source
      DEMO\_CDS\_PARENT\_CHILD\_SOURCE
      child to parent association \_relat
      start where
        id between :p\_from and :p\_to
      siblings order by
        id
      multiple parents allowed
      cycles breakup
    )
    {
      id,
      parent
    }

Addition 6

... SIBLINGS ORDER BY field1 *\[*ASCENDING*|*DESCENDING*\]*,  ...

Effect

The mandatory addition SIBLINGS ORDER BY sorts [sibling nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensibling_node_glosry.htm "Glossary Entry") in the hierarchy. Fields field1, field2, ... of the source cds\_view can be specified in a comma-separated list after the addition SIBLINGS ORDER BY to specify the order of the sibling nodes.

The addition ASCENDING or DESCENDING can be specified for each field to specify an ascending or descending order (ascending is the default).

The fields specified after SIBLINGS ORDER BY cannot be of the [type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) LCHR, LRAW, STRING, RAWSTRING, or GEOM\_EWKB.

Note

The addition SIBLINGS ORDER BY is mandatory in the case of CDS hierarchies, since this sort cannot be performed at a later time. For example, the result of a [hierarchy navigator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_navigator_glosry.htm "Glossary Entry") in ABAP SQL may depend on how the hierarchy specified as a source is sorted. A [hierarchy generator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") specified as a source can be sorted directly here, but this is no longer possible in the case of predefined CDS hierarchies.

Example

The following CDS hierarchy sorts siblings in descending order by the field id. The program DEMO\_HIERARCHY\_SIBLINGS\_ORDER accesses the CDS hierarchy and compares the result with the [hierarchy generator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_generator.htm) in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry") used in a similar way. When executed, this program demonstrates how this addition works.

define hierarchy DEMO\_CDS\_SIMPLE\_TREE\_SIBL\_ORD
  with parameters
    p\_id : abap.int4
  as parent child hierarchy(
    source
      DEMO\_CDS\_SIMPLE\_TREE\_SOURCE
      child to parent association \_tree
      start where
        id = :p\_id
      siblings order by
        id descending
    )
    {
      id,
      parent,
      name
    }

Addition 7

... DEPTH depth

Effect

The optional addition depth limits the number of [hierarchy levels](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_level_glosry.htm "Glossary Entry") used to create [descendant nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendescendant_node_glosry.htm "Glossary Entry"). depth can be a simple literal or a parameter from the [parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_parameter_list.htm) of the hierarchy that has an integer type.

The value in depth has the following meaning:

-   For depth values greater then 0, the number of hierarchy edges are traversed that is specified in depth, starting from a [root node](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenroot_node_glosry.htm "Glossary Entry").

-   If the value of depth is 0, only the [root nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenroot_node_glosry.htm "Glossary Entry") are inserted in the hierarchy.

-   For depth values less than 0, no [hierarchy nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_node_glosry.htm "Glossary Entry") are created.

The addition DEPTH can be used only if the addition ORPHANS is not specified or is specified as ORPHANS IGNORE.

Example

The following CDS hierarchy uses an input parameter p\_depth to restrict the hierarchy levels. The program DEMO\_HIERARCHY\_DEPTH accesses the CDS hierarchy and compares the result with the [hierarchy generator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_generator.htm) in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry") used in a similar way. When executed, this program demonstrates how this addition works.

define hierarchy DEMO\_CDS\_SIMPLE\_TREE\_DEPTH
  with parameters
    p\_depth : abap.int4
  as parent child hierarchy(
    source
      DEMO\_CDS\_SIMPLE\_TREE\_SOURCE
      child to parent association \_tree
      start where
        id = 1
      siblings order by
        id ascending
      depth :p\_depth
    )
    {
      name,
      $node.hierarchy\_level as hiera\_level
    }

Addition 8

... NODETYPE node\_type

Effect

The optional addition NODETYPE defines an element of the hierarchy as a node type. An [element](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_element.htm) of the [element list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_element_list.htm) can be specified for node\_type. This information is saved in the metadata of the CDS hierarchy and can be read by consumers using an API.

Notes

-   An element defined as a node type can be used to stress semantic differences in technically similar hierarchy nodes.

-   The API for reading the properties of a CDS hierarchy is not yet available.

Example

The following tree-like CDS hierarchy defines the element name as a node type. If a hierarchy node in the element name has the value Apple, it is a [leaf node](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenleaf_node_glosry.htm "Glossary Entry") without any [descendant nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendescendant_node_glosry.htm "Glossary Entry"). The program DEMO\_HIERARCHY\_TREE\_NODETYPE accesses the CDS hierarchy and when executed returns any hierarchy nodes that break the rule.

define hierarchy DEMO\_CDS\_SIMPLE\_TREE\_NODETYPE
  as parent child hierarchy(
    source
      DEMO\_CDS\_SIMPLE\_TREE\_SOURCE
      child to parent association \_tree
      start where
        id = 1
      siblings order by
        id ascending
      nodetype name
    )
    {
      id,
      parent,
      name
    }

Addition 9

... MULTIPLE PARENTS *{*NOT ALLOWED*}**|**{*LEAVES ONLY*}**|*ALLOWED

Effect

The optional addition MULTIPLE PARENTS specifies whether the hierarchy can have [child nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenchild_node_glosry.htm "Glossary Entry") with multiple [parent nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenparent_node_glosry.htm "Glossary Entry"):

-   NOT ALLOWED

This is the default setting (a child node can have precisely on parent node only).

-   LEAVES ONLY

Only [leaf nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenleaf_node_glosry.htm "Glossary Entry") can have multiple parent nodes.

-   ALLOWED

All hierarchy nodes can have multiple parent nodes.

Example

The following CDS hierarchy allows multiple parent nodes for leaf nodes. The program DEMO\_HIERARCHY\_MULTI\_PARENTS accesses the CDS hierarchy and compares the result with the [hierarchy generator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_generator.htm) in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry") used in a similar way. When executed, this program demonstrates how this addition works.

define hierarchy DEMO\_CDS\_PARENT\_CHILD\_MULTIPAR
  as parent child hierarchy(
    source
      DEMO\_CDS\_PARENT\_CHILD\_SOURCE
      child to parent association \_relat
      start where
           id = 'A'
      siblings order by
        id
      multiple parents leaves
    )
    {
      id,
      parent,
      $node.hierarchy\_level    as hiera\_level
    }

Addition 10

... ORPHANS IGNORE*|*ERROR*|*ROOT

Effect

The optional addition ORPHANS defines the way [orphan nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenorphan_node_glosry.htm "Glossary Entry") are handled. The following categories of orphan nodes exist:

-   Hierarchy nodes that could have parent nodes (as specified by the parent-child relationship) but the parent nodes are not in the hierarchy (known as true orphans).

-   Hierarchy nodes that cannot be reached from the root node set using hierarchy edges.

-   Hierarchy nodes that are part of a [node cycle](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennode_cycle_glosry.htm "Glossary Entry") and cannot be reached from the root node set using hierarchy nodes (known as island orphans).

The additions work as follows:

-   IGNORE

This is the default setting (any orphan nodes are not inserted in the hierarchy).

-   ERROR

Any orphan nodes detected raise an exception.

-   ROOT

Orphan nodes are inserted in the hierarchy as follows:

-   True orphans are included in the root node set as root nodes and flagged as orphan nodes in the [hierarchy attribute](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_attributes.htm) HIERARCHY\_IS\_ORPHAN.

-   [Descendant nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendescendant_node_glosry.htm "Glossary Entry") of true orphans are handled like descendant nodes of parent nodes from the root node set, but are also flagged as orphan nodes in the [hierarchy attribute](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_attributes.htm) HIERARCHY\_IS\_ORPHAN.

-   For the hierarchy nodes of island orphans, a parent node in the root node set is generated for the child node where the cycle occurs. In the generated root node, all columns of the source hierarchy\_source contain the null value. In the [hierarchy attributes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_attributes.htm), the additional root node is flagged as an orphan node and PARENT\_ID also contains the null value.

Example

The following CDS hierarchy transforms orphan nodes into root nodes. The program DEMO\_HIERARCHY\_ORPHANS accesses the CDS hierarchy and compares the result with the [hierarchy generator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_generator.htm) in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry") used in a similar way. When executed, this program demonstrates how this addition works.

define hierarchy DEMO\_CDS\_PARENT\_CHILD\_ORPHANS
  as parent child hierarchy(
    source
      DEMO\_CDS\_PARENT\_CHILD\_SOURCE
      child to parent association \_relat
      start where
        id = 'A'
      siblings order by
        id
      multiple parents allowed
      orphans root
      cycles breakup
    )
    {
      id,
      parent,
      $node.node\_id               as hiera\_node\_id,
      $node.parent\_id             as hiera\_parent\_id,
      $node.hierarchy\_is\_orphan   as hiera\_is\_orphan,
      $node.hierarchy\_is\_cycle    as hiera\_is\_cycle,
      $node.hierarchy\_rank        as hiera\_rank,
      $node.hierarchy\_parent\_rank as hiera\_parent\_rank,
      $node.hierarchy\_level       as hiera\_level
    }

Addition 11

... CYCLES ERROR*|*BREAKUP

Effect

The addition CYCLES defines how [node cycles](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennode_cycle_glosry.htm "Glossary Entry") are defined. The additions work as follows:

-   ERROR

This is the default setting (an exception is raised when a node cycle is detected).

-   BREAKUP

The traversal of [descendant nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendescendant_node_glosry.htm "Glossary Entry") is broken at the child node where the node cycle occurs and the [hierarchy attribute](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddddl_hierarchy.htm) HIERARCHY\_IS\_CYCLE is set to the value 1.

If the addition BREAKUP is specified, MULTIPLE PARENTS ALLOWED must also be specified.

Example

The following CDS hierarchy breaks node cycles using CYCLES BREAKUP. The program DEMO\_HIERARCHY\_CYCLES accesses the CDS hierarchy and compares the result with the [hierarchy generator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_generator.htm) in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry") used in a similar way. When executed, this program demonstrates how this addition works.

define hierarchy DEMO\_CDS\_PARENT\_CHILD\_CYCLES
  as parent child hierarchy(
    source
      DEMO\_CDS\_PARENT\_CHILD\_SOURCE
      child to parent association \_relat
      start where
           id = 'A'
        or id = 'X'
        or id = 'Y'
        or id = 'Z'
      siblings order by
        id
      multiple parents allowed
      cycles breakup
    )
    {
      id,
      parent,
      $node.hierarchy\_is\_cycle as hiera\_is\_cycle,
      $node.hierarchy\_level    as hiera\_level
    }

Addition 12

... GENERATE SPANTREE

Effect

If the addition GENERATE SPANTREE is specified, only those child nodes without multiple parent nodes are inserted in the hierarchy, starting from every root node. If, due to its parent-child relationships, a child node were to have multiple parent nodes after its root node, precisely one of the potential paths from the root node to this child node is selected and the child node is created for this path only.

-   If the paths have different lengths, the shortest is selected.

-   If the paths all have the same length, the first path found is selected.

If the addition GENERATE SPANTREE is specified, the additions MULTIPLE PARENTS, ORPHANS, and CYCLES cannot be specified and other defaults apply in parts:

-   MULTIPLE PARENTS is used implicitly with ALLOWED.

-   CYCLES is used implicitly with BREAKUP.

Notes

-   If the parent-child relationships for the current data do not produce tree-like hierarchies, the addition GENERATE SPANTREE is ignored.

-   Even if one path (from many paths) to a child node is selected, this does not mean that all others are rejected. In this case, only the edges leading to the child node are missing.

-   The addition GENERATE SPANTREE can be used to detect whether at least one path leads from a root node to a child node without the results set needing to contain all paths.

-   The addition GENERATE SPANTREE is used in an [SAP HANA database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_database_glosry.htm "Glossary Entry") to access the hierarchy generator function [HIERARCHY\_SPANTREE](https://help.sap.com/viewer/4f9859d273254e04af6ab3e9ea3af286/2.0.03/en-US/a93c356d32ef4e7fbd6143b554278eab.html) there.

Example

The following CDS hierarchy uses the addition GENERATE SPANTREE. The program DEMO\_HIERARCHY\_SPANTREE accesses the CDS hierarchy and compares the result with the [hierarchy generator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_generator.htm) in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry") used in a similar way. When executed, this program demonstrates how this addition works.

define hierarchy DEMO\_CDS\_PARENT\_CHILD\_SPANTREE
  as parent child hierarchy(
    source
      DEMO\_CDS\_PARENT\_CHILD\_SOURCE
      child to parent association \_relat
      start where
           id = 'A'
        or id = 'K'
        or id = 'X'
        or id = 'Y'
      siblings order by
        id
      generate spantree  
      )  
    {
      id,
      parent
    }

Continue
[ABAP CDS - DEFINE HIERARCHY, hierarchy\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hierarchy_annotations.htm)
[ABAP CDS - DEFINE HIERARCHY, parameter\_list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_parameter_list.htm)
[ABAP CDS - DEFINE HIERARCHY, element\_list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_element_list.htm)
[ABAP CDS - Hierarchy Attributes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_attributes.htm)