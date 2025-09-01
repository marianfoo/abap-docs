  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - Hierarchies](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchies.htm) → 

CDS DDL - DEFINE HIERARCHY

Syntax

*\[*[@entity\_annot1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_entity_annotations.htm)*\]*
*\[*[@entity\_annot2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_entity_annotations.htm)*\]*
...
*\[*[@hierarchy\_annot1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_hierarchy_annotations.htm)*\]*
*\[*[@hierarchy\_annot2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_hierarchy_annotations.htm)*\]*
...
*\[*DEFINE*\]* HIERARCHY hierarchy
         *\[*[parameter\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_hiera_parameter_list.htm)*\]*
         AS PARENT CHILD HIERARCHY(
           SOURCE cds\_view
           CHILD TO PARENT ASSOCIATION \_hierarchy\_assoc
           *\[*PERIOD FROM field1 TO field2 VALID FROM from TO to*\]*
           *\[*DIRECTORY \_directory\_assoc FILTER BY cds\_cond*\]*
           *\[*START WHERE cds\_cond*\]*
           SIBLINGS ORDER BY field1 *\[*ASCENDING*|*DESCENDING*\]**\[*,
                             field2 *\[*ASCENDING*|*DESCENDING*\]*, ...*\]*
           *\[*DEPTH depth*\]*
           *\[*NODETYPE node\_type*\]*
           *\[*LOAD BULK*|*INCREMENTAL*|*load\_option*\]*
           *\[*MULTIPLE PARENTS *{*NOT ALLOWED*}**|*LEAVES*|*ALLOWED*\]*
           *\[*ORPHANS IGNORE*|*ERROR*|*ROOT*\]*
           *\[*CYCLES ERROR*|*BREAKUP*\]*
           *\[*GENERATE SPANTREE*\]* )
     { [element\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_hiera_element_list.htm) }

Additions:

[1\. ... SOURCE cds\_view](#!ABAP_ADDITION_1@1@)
[2\. ... CHILD TO PARENT ASSOCIATION \_hierarchy\_assoc](#!ABAP_ADDITION_2@2@)
[3\. ... PERIOD FROM field1 TO field2 VALID FROM from TO to](#!ABAP_ADDITION_3@3@)
[4\. ... DIRECTORY \_directory\_assoc FILTER BY cds\_cond](#!ABAP_ADDITION_4@4@)
[5\. ... START WHERE cds\_cond](#!ABAP_ADDITION_5@5@)
[6\. ... SIBLINGS ORDER BY field1 *\[*ASCENDING*|*DESCENDING*\]*, ...](#!ABAP_ADDITION_6@6@)
[7\. ... DEPTH depth](#!ABAP_ADDITION_7@7@)
[8\. ... NODETYPE node\_type](#!ABAP_ADDITION_8@8@)
[9\. ... LOAD BULK*|*INCREMENTAL*|*load\_option](#!ABAP_ADDITION_9@9@)
[10\. ... MULTIPLE PARENTS *{*NOT ALLOWED*}**|**{*LEAVES ONLY*}**|*ALLOWED](#!ABAP_ADDITION_10@10@)
[11\. ... ORPHANS IGNORE*|*ERROR*|*ROOT](#!ABAP_ADDITION_11@11@)
[12\. ... CYCLES ERROR*|*BREAKUP](#!ABAP_ADDITION_12@12@)
[13\. ... GENERATE SPANTREE](#!ABAP_ADDITION_13@13@)

Effect

Defines a [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") hierarchy as a [CDS hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") in the [CDS DDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddl_glosry.htm "Glossary Entry"). A CDS hierarchy has a tabular result set whose rows construct [parent-child relationships](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpcr_glosry.htm "Glossary Entry"). When a CDS hierarchy is accessed as the data source of a [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry") query, it is handled like an [SQL hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_hierarchy_glosry.htm "Glossary Entry") in which additional [hierarchy columns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_column_glosry.htm "Glossary Entry") can be selected.

-   [@entity\_annot](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_entity_annotations.htm) and [@hierarchy\_annot](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_hierarchy_annotations.htm) can be used to specify optional [annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotation_glosry.htm "Glossary Entry") for the CDS hierarchy.

-   [parameter\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_hiera_parameter_list.htm) is used to declare a list of optional input parameters for the CDS hierarchy.

-   [element\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_hiera_element_list.htm) is used to declare the elements of the CDS hierarchy.

The additions in parentheses after AS PARENT CHILD HIERARCHY define the way the hierarchy is created:

-   SOURCE must be followed by a CDS view cds\_view as the source of the hierarchy.

-   CHILD TO PARENT ASSOCIATION must be followed by a [hierarchy association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") \_hierarchy\_assoc exposed by the source cds\_view. The hierarchy association must be a [self-association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenself_association_glosry.htm "Glossary Entry") where the [association source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_source_glosry.htm "Glossary Entry") and [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") must be the source cds\_view. The ON condition of the hierarchy association defines the [parent-child relationships](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpcr_glosry.htm "Glossary Entry") between the [hierarchy nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_node_glosry.htm "Glossary Entry").

-   START WHERE can be followed by a start condition that defines [root nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenroot_node_glosry.htm "Glossary Entry") for the [root node set](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenroot_node_set_glosry.htm "Glossary Entry") of the hierarchy. The hierarchy consists of the root nodes of the root node set and their [descendant nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendescendant_node_glosry.htm "Glossary Entry"). If START WHERE is not specified, the root node set consists of all [parent nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenparent_node_glosry.htm "Glossary Entry") that contain its initial value.

All other additions define further properties of the hierarchy. The rows of the tabular result set of the CDS hierarchy are the [hierarchy nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_node_glosry.htm "Glossary Entry") of the new hierarchy but without its [hierarchy columns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_column_glosry.htm "Glossary Entry").

The name of a CDS hierarchy is in the namespace of all [global types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP.

Hints

-   The syntax and functions of a CDS hierarchy overlap to a large extent with the [hierarchy generator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_generator.htm) in ABAP SQL

-   Unlike in ABAP SQL, however, ABAP CDS cannot access the additional [hierarchy columns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_column_glosry.htm "Glossary Entry") of a CDS hierarchy. Instead, the associated [hierarchy attributes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_attribute_glosry.htm "Glossary Entry") must be entered in the [element list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_hiera_element_list.htm) of the CDS hierarchy if required.

-   On [SAP HANA databases](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_database_glosry.htm "Glossary Entry"), the result sets of CDS hierarchies plus the hierarchy generator HIERARCHY are created by using the SAP HANA hierarchy generator function HIERARCHY and similar. More information can be found in the [HANA SQL documentation](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.04/en-US/b4b0eec1968f41a099c828a4a6c8ca0f.html).

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

The mandatory addition SOURCE specifies a [CDS view entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_glosry.htm "Glossary Entry") or a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_view_glosry.htm "Glossary Entry") as a source of the CDS hierarchy. This source must [expose](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_association_v2.htm) the [hierarchy association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") specified after CHILD TO PARENT ASSOCIATION in its SELECT list.

Hint

CDS view entities and CDS DDIC based views are currently the only [CDS entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") that can be specified as the source of a CDS hierarchy. More specifically, a CDS hierarchy cannot be the source of another CDS hierarchy.

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

The mandatory addition CHILD TO PARENT ASSOCIATION specifies the [hierarchy association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") whose ON condition selects the [descendant nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendescendant_node_glosry.htm "Glossary Entry") of the [root node set](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenroot_node_set_glosry.htm "Glossary Entry"). The hierarchy association must be exposed by the CDS view specified after SOURCE.

The hierarchy association defines the parent-child relationship between the [hierarchy nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_node_glosry.htm "Glossary Entry"). The following conditions apply here:

-   The CDS association must be a [self-association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenself_association_glosry.htm "Glossary Entry").

-   Only equality comparisons with the operator \= and joined using AND can occur in the ON condition of the CDS association.

-   In each comparison in the ON condition, one field of the [association source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_source_glosry.htm "Glossary Entry") must be compared with a field (prefixed with \_hierarchy\_assoc) of the [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry").

-   The [association source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_source_glosry.htm "Glossary Entry") of the CDS association cannot contain any fields that have the same name as a [hierarchy attribute](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_attributes.htm). An alternative element name must be defined for these fields.

Each row of the result set of the source hierarchy\_source that meets the ON condition for an existing hierarchy node is included recursively in the hierarchy as its [child node](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenchild_node_glosry.htm "Glossary Entry") (if this is possible).

Hint

The optional additions define further conditions specifying whether a row can be included as a hierarchy node or not.

Example

The CDS view of the previous example exposes its association \_tree. This CDS association meets all requirements of a hierarchy association and can be used as one.

Addition 3

... PERIOD FROM field1 TO field2 VALID FROM from TO to

Effect

The optional addition PERIOD defines the hierarchy as a [temporal SQL hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentemporal_hierarchy_glosry.htm "Glossary Entry") in which the hierarchy nodes are limited by an adjustment of time intervals.

-   field1 and field2 are used to specify the fields of the source cds\_view that define the lower and upper limits of a [period](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenperiod_glosry.htm "Glossary Entry") in the hierarchy data. field1 and field2 must be different fields of the same data type. This can be:

-   The built-in type [DATS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) of ABAP Dictionary.

-   A data type that is defined by one of the [data elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_element_glosry.htm "Glossary Entry") TIMESTAMP or TIMESTAMPL.

-   from and to define the lower and upper limit of a time interval that acts as a condition for the periods of the [root node set](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenroot_node_set_glosry.htm "Glossary Entry"). The data type of from and to must match the data type of field1 and field2. The following can be specified:

-   Parameters from the [parameter list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_hiera_parameter_list.htm) of the hierarchy. Here, only the syntax[$parameters.pname](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_v2.htm) is possible.

-   [Character literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_literal_v2.htm) whose value matches the requested data type.

A temporal SQL hierarchy is created as follows:

-   Only [root nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenroot_node_glosry.htm "Glossary Entry") of the [root node set](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenroot_node_set_glosry.htm "Glossary Entry") in which the period defined using field1 and field2 has a non empty intersection with the time interval defined by from and to are taken into account. This intersection forms the [validity interval](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalidity_interval_glosry.htm "Glossary Entry") of the root node.

-   Only [child nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenchild_node_glosry.htm "Glossary Entry") in which the period defined by field1 and field2 has a non empty intersection with the validity interval of the [parent node](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenparent_node_glosry.htm "Glossary Entry") are generated. This intersection forms the [validity interval](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalidity_interval_glosry.htm "Glossary Entry") of the child node.

For temporal SQL hierarchies, there are additional [hierarchy attributes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_attributes.htm) VALID\_FROM and VALID\_UNTIL that contain the interval limits of the [validity interval](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalidity_interval_glosry.htm "Glossary Entry") of each hierarchy node.

The addition PERIOD must not be used with GENERATE SPANTREE.

Hints

-   The validity interval of a descendant node is always a subset of a validity interval of all ancestor nodes. Validity intervals can only remain the same or become narrower from hierarchy level to hierarchy level, they can never get wider.

-   For a descendant node to belong to a temporal SQL hierarchy, it is not sufficient for its period to overlap with the time interval defined by from and to. Only the validity interval of the parent node is decisive. A path of a regular hierarchy is truncated in a temporal SQL hierarchy at the position in which there is no intersection between the period and the preceding validity interval.

-   The [association source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_source_glosry.htm "Glossary Entry") of the current [hierarchy association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") must not have any fields called VALID\_FROM or VALID\_UNTIL. An alternative element name must be defined for these fields.

-   The value of to can also be less than the value of from. However, a validity interval is formed where necessary. In contrast, if the value of the lower interval limit of the period is greater than the value of the upper interval limit, the validity interval is empty.

-   Additions such as MULTIPLE PARENTS or CYCLES affect the temporal SQL hierarchy. Nodes that would raise an exception in a regular hierarchy can be hidden in a temporal SQL hierarchy.

-   On an [SAP HANA database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_database_glosry.htm "Glossary Entry"), the associated hierarchy generator function [HIERARCHY\_TEMPORAL](https://help.sap.com/viewer/4f9859d273254e04af6ab3e9ea3af286/2.0.04/en-US/a93c356d32ef4e7fbd6143b554278eab.html) is used to create a temporal SQL hierarchy.

Example

The following CDS hierarchies create two [temporal SQL hierarchies](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentemporal_hierarchy_glosry.htm "Glossary Entry"). Here, date fields and time stamp fields are both used once as [periods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenperiod_glosry.htm "Glossary Entry"). The program DEMO\_HIERARCHY\_TEMPORAL accesses the CDS hierarchies and compares the results with the [hierarchy generator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_generator.htm) in [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry") used in a similar way. When executed, this program demonstrates how the addition PERIOD works.

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

... DIRECTORY \_directory\_assoc FILTER BY cds\_cond

Effect

The optional addition DIRECTORY defines a filter condition cds\_cond for the rows of the source of the hierarchy specified after SOURCE. The hierarchy is generated only from those rows in the source that meet the filter condition. AND comparisons for equality can be specified for cds\_cond using \=:

-   The operator on the left side of a comparison must be an element of the current hierarchy whose name occurs as an operand in the CDS view specified after SOURCE as follows:

-   On the left side of an ON condition of a CDS association \_directory\_assoc.

-   On the left side of an ON condition of the hierarchy association \_hierarchy\_assoc.

-   The operator on the right side of the comparison can be a simple literal or a type-compliant parameter from the [parameter list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_hiera_parameter_list.htm) of the hierarchy.

The same [rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_types_v2.htm) apply to the comparable types as to CDS views.

Hints

-   A filter condition removes all hierarchy nodes and their descendant nodes from the result set that do not match the condition cds\_cond.

-   The content of the [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") of the CDS association \_directory\_assoc is ignored when the filter condition is evaluated.

-   The restriction of the operands on the left side of a comparison to the operands of a CDS association of the source is supported by certain programming models. Any frameworks that are based on these models read data from the [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") of this CDS association and pass it to input parameters of the hierarchy that evaluates them in the filter condition.

Example

The following CDS view defines a self association \_pcr, which itself defines a parent-child relationship, and a CDS association \_dir of a DDIC database table DEMO\_HIERA\_DIR:

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

... START WHERE cds\_cond

Effect

The optional addition START WHERE specifies the start condition for creating the hierarchy. START WHERE can be followed by a logical expression cds\_cond that selects rows from the source cds\_view. The same operators can be specified for cds\_cond as in a [WHERE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_where_clause_v2.htm) clause of a CDS view and the same rules apply. The operands on the left side can be elements of the CDS view specified after SOURCE. The operands on the right side can be literals, parameters from the [parameter list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_hiera_parameter_list.htm) of the hierarchy, and [session variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensession_variable_glosry.htm "Glossary Entry"). When specifying literals, parameters, and session variables, the same applies as when defining CDS views.

If the addition START WHERE is not specified explicitly, it is added implicitly with a condition that checks the [parent node](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenparent_node_glosry.htm "Glossary Entry") defined in the [hierarchy association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_association_glosry.htm "Glossary Entry") in question for its initial value.

The selected rows are inserted in the hierarchy as a [root node set](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenroot_node_set_glosry.htm "Glossary Entry"). For each [root node](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenroot_node_glosry.htm "Glossary Entry") in the root node set, the [descendant nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendescendant_node_glosry.htm "Glossary Entry") are selected that meet the ON condition of the hierarchy association and, if possible, inserted in the hierarchy.

Hints

-   It is advisable to always specify the start condition explicitly, since this makes the definition clearer. Furthermore, the root node set defined by the implicit start condition is not always suitable and also cannot be modified using parameters.

-   The start condition should select a feasible set of root nodes. If no rows in the result set of the source cds\_view meet the condition, the hierarchy is empty. If all rows meet the condition, the descendant nodes of every row are selected and inserted.

Example

The following CDS hierarchy uses an interval boundary with BETWEEN as a start condition. The program DEMO\_HIERARCHY\_START\_WHERE accesses the CDS hierarchy and compares the result with the [hierarchy generator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_generator.htm) in [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry") used in a similar way. When executed, this program demonstrates how this addition works.

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

The mandatory addition SIBLINGS ORDER BY sorts [sibling nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensibling_node_glosry.htm "Glossary Entry") in the hierarchy. Fields field1, field2, ... of the source cds\_view can be specified in a comma-separated list after the addition SIBLINGS ORDER BY to specify the order of the sibling nodes.

The addition ASCENDING or DESCENDING can be specified for each field to specify an ascending or descending order (ascending is the default).

The fields specified after SIBLINGS ORDER BY cannot be of the [type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) LCHR, LRAW, STRING, RAWSTRING, or GEOM\_EWKB.

Hint

The addition SIBLINGS ORDER BY is mandatory in the case of CDS hierarchies, since this sort cannot be performed at a later time. For example, the result of a [hierarchy navigator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_navigator_glosry.htm "Glossary Entry") in ABAP SQL may depend on how the hierarchy specified as a source is sorted. A [hierarchy generator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") specified as a source can be sorted directly here, but this is no longer possible in the case of predefined CDS hierarchies.

Example

The following CDS hierarchy sorts siblings in descending order by the field id. The program DEMO\_HIERARCHY\_SIBLINGS\_ORDER accesses the CDS hierarchy and compares the result with the [hierarchy generator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_generator.htm) in [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry") used in a similar way. When executed, this program demonstrates how this addition works.

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

The optional addition depth limits the number of [hierarchy levels](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_level_glosry.htm "Glossary Entry") used to create [descendant nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendescendant_node_glosry.htm "Glossary Entry"). depth can be a simple literal or a parameter from the [parameter list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_hiera_parameter_list.htm) of the hierarchy that has an integer type.

The value in depth has the following meaning:

-   For depth values greater then 0, the number of hierarchy edges are traversed that is specified in depth, starting from a [root node](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenroot_node_glosry.htm "Glossary Entry").

-   If the value of depth is 0, only the [root nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenroot_node_glosry.htm "Glossary Entry") are inserted in the hierarchy.

-   For depth values less than 0, no [hierarchy nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_node_glosry.htm "Glossary Entry") are created.

The addition DEPTH can be used only if the addition ORPHANS is not specified or is specified as ORPHANS IGNORE.

Example

The following CDS hierarchy uses an input parameter p\_depth to restrict the hierarchy levels. The program DEMO\_HIERARCHY\_DEPTH accesses the CDS hierarchy and compares the result with the [hierarchy generator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_generator.htm) in [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry") used in a similar way. When executed, this program demonstrates how this addition works.

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

The optional addition NODETYPE defines an element of the hierarchy as a node type. An [element](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_hiera_element.htm) of the [element list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_hiera_element_list.htm) can be specified for node\_type. This information is saved in the metadata of the CDS hierarchy and can be read by consumers using an API.

Hints

-   An element defined as a node type can be used to stress semantic differences in technically similar hierarchy nodes.

-   The API for reading the properties of a CDS hierarchy is not yet available.

Example

The following tree-like CDS hierarchy defines the element name as a node type. If a hierarchy node in the element name has the value Apple, it is a [leaf node](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenleaf_node_glosry.htm "Glossary Entry") without any [descendant nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendescendant_node_glosry.htm "Glossary Entry"). The program DEMO\_HIERARCHY\_TREE\_NODETYPE accesses the CDS hierarchy and when executed returns any hierarchy nodes that break the rule.

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

... LOAD BULK*|*INCREMENTAL*|*load\_option

Effect

The addition LOAD specifies the load policy for the generated hierarchy. It can be used for performance optimization.

The addition works as follows:

-   BULK

This is the default setting. The complete source table of the hierarchy is loaded.

-   INCREMENTAL

Only the rows of the source table that can be reached from the start nodes ([root node set](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenroot_node_set_glosry.htm "Glossary Entry")) are loaded.

-   load\_option

For load\_option a parameter from the [parameter list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_hiera_parameter_list.htm) of the hierarchy can specified using the syntax [$parameters.pname](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_v2.htm). The parameter must have the data type CHAR or SSTRING and a length of at least 11. Valid values of the parameter are "BULK" or "INCREMENTAL" in upper case and have the same effect as the respective keywords. Invalid values lead to an exception from the database.

Hints

-   The performance optimization with LOAD INCREMENTAL depends on the data source. If the source table is very large and the hierarchy reads relatively few rows, there's a positive effect. If, by contrast, the source table has only few rows and they are all part of the hierarchy, LOAD INCREMENTAL might even take longer than LOAD BULK.

-   Do not use LOAD INCREMENTAL with [global temporary tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_gtt.htm) as data source, because it doesn't have any positive effect then (if anything, it slows down the performance).

-   The valid values for load\_option are the names of [enumerated constants](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_constant_glosry.htm "Glossary Entry") with the [enumerated type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_type_glosry.htm "Glossary Entry") LOAD\_OPTION from the class SQL\_HIERARCHY. When accessing a CDS hierarchy with a parameter for load\_option in ABAP SQL, the character representation of these enumerated constants can be passed.

Example

The following CDS hierarchy uses the addition LOAD with a parameter p\_load:

define hierarchy DEMO\_CDS\_GUID\_HIERA\_BULK\_INCR
  with parameters
    p\_id   : abap.raw(16),
    p\_load : abap.char(11)
  as parent child hierarchy(
    source DEMO\_CDS\_GUID\_HIERA\_SOURCE
    child to parent association \_relat
    start where
      id = :p\_id
    siblings order by
      id
    load $parameters.p\_load
  )
{
  id,
  parent,
  field
}

The following SELECT statement is taken from the program DEMO\_CDS\_HIERA\_BULK\_INCREMENT:

DATA start\_node TYPE demo\_guid\_hiera-id.
SELECT FROM demo\_cds\_guid\_hiera\_bulk\_incr(
              p\_id   = @start\_node,
              p\_load = @( CONV #(
                sql\_hierarchy=>c\_load\_option-incremental ) ) )
       FIELDS id,
              parent,
              field
       ORDER BY id
       INTO TABLE @DATA(inc\_result).

By converting the enumerated constant sql\_hierarchy=>c\_load\_option-incremental into a character string, the value "INCREMENTAL" is passed to the parameter p\_load. The program works in the same way as described for the [executable example](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_abexa.htm) for the hierarchy generator of ABAP SQL.

Addition 10

... MULTIPLE PARENTS *{*NOT ALLOWED*}**|**{*LEAVES ONLY*}**|*ALLOWED

Effect

The optional addition MULTIPLE PARENTS specifies whether the hierarchy can have [child nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenchild_node_glosry.htm "Glossary Entry") with multiple [parent nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenparent_node_glosry.htm "Glossary Entry"):

-   NOT ALLOWED

This is the default setting (a child node can have exactly one parent node only).

-   LEAVES ONLY

Only [leaf nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenleaf_node_glosry.htm "Glossary Entry") can have multiple parent nodes.

-   ALLOWED

All hierarchy nodes can have multiple parent nodes.

Example

The following CDS hierarchy allows multiple parent nodes for leaf nodes. The program DEMO\_HIERARCHY\_MULTI\_PARENTS accesses the CDS hierarchy and compares the result with the [hierarchy generator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_generator.htm) in [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry") used in a similar way. When executed, this program demonstrates how this addition works.

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

Addition 11

... ORPHANS IGNORE*|*ERROR*|*ROOT

Effect

The optional addition ORPHANS defines the way [orphan nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenorphan_node_glosry.htm "Glossary Entry") are handled. The following categories of orphan nodes exist:

-   Hierarchy nodes that could have parent nodes (as specified by the parent-child relationship) but the parent nodes are not in the hierarchy (known as true orphans).

-   Hierarchy nodes that cannot be reached from the root node set using hierarchy edges.

-   Hierarchy nodes that are part of a [node cycle](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennode_cycle_glosry.htm "Glossary Entry") and cannot be reached from the root node set using hierarchy nodes (known as island orphans).

The additions work as follows:

-   IGNORE

This is the default setting (any orphan nodes are not inserted in the hierarchy).

-   ERROR

Any orphan nodes detected raise an exception.

-   ROOT

Orphan nodes are inserted in the hierarchy as follows:

-   True orphans are included in the root node set as root nodes and flagged as orphan nodes in the [hierarchy attribute](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_attributes.htm) HIERARCHY\_IS\_ORPHAN.

-   [Descendant nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendescendant_node_glosry.htm "Glossary Entry") of true orphans are handled like descendant nodes of parent nodes from the root node set, but are also flagged as orphan nodes in the [hierarchy attribute](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_attributes.htm) HIERARCHY\_IS\_ORPHAN.

-   For the hierarchy nodes of island orphans, a parent node in the root node set is generated for the child node where the cycle occurs. In the generated root node, all columns of the source hierarchy\_source contain the null value. In the [hierarchy attributes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_attributes.htm), the additional root node is flagged as an orphan node and PARENT\_ID also contains the null value.

Example

The following CDS hierarchy transforms orphan nodes into root nodes. The program DEMO\_HIERARCHY\_ORPHANS accesses the CDS hierarchy and compares the result with the [hierarchy generator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_generator.htm) in [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry") used in a similar way. When executed, this program demonstrates how this addition works.

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

Addition 12

... CYCLES ERROR*|*BREAKUP

Effect

The addition CYCLES defines how [node cycles](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennode_cycle_glosry.htm "Glossary Entry") are defined. The additions work as follows:

-   ERROR

This is the default setting (an exception is raised when a node cycle is detected).

-   BREAKUP

The traversal of [descendant nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendescendant_node_glosry.htm "Glossary Entry") is broken at the child node where the node cycle occurs and the [hierarchy attribute](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddddl_hierarchy.htm) HIERARCHY\_IS\_CYCLE is set to the value 1.

If the addition BREAKUP is specified, MULTIPLE PARENTS ALLOWED must also be specified.

Example

The following CDS hierarchy breaks node cycles using CYCLES BREAKUP. The program DEMO\_HIERARCHY\_CYCLES accesses the CDS hierarchy and compares the result with the [hierarchy generator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_generator.htm) in [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry") used in a similar way. When executed, this program demonstrates how this addition works.

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

Addition 13

... GENERATE SPANTREE

Effect

If the addition GENERATE SPANTREE is specified, only those child nodes without multiple parent nodes are inserted in the hierarchy, starting from every root node. If, due to its parent-child relationships, a child node were to have multiple parent nodes after its root node, exactly one of the potential paths from the root node to this child node is selected and the child node is created for this path only.

-   If the paths have different lengths, the shortest is selected.

-   If the paths all have the same length, the first path found is selected.

If the addition GENERATE SPANTREE is specified, the additions MULTIPLE PARENTS, ORPHANS, and CYCLES cannot be specified and other defaults apply in parts:

-   MULTIPLE PARENTS is used implicitly with ALLOWED.

-   CYCLES is used implicitly with BREAKUP.

Hints

-   If the parent-child relationships for the current data do not produce tree-like hierarchies, the addition GENERATE SPANTREE is ignored.

-   Even if one path (from many paths) to a child node is selected, this does not mean that all others are rejected. In this case, only the edges leading to the child node are missing.

-   The addition GENERATE SPANTREE can be used to detect whether at least one path leads from a root node to a child node without the result set needing to contain all paths.

-   The addition GENERATE SPANTREE is used in an [SAP HANA database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_database_glosry.htm "Glossary Entry") to access the hierarchy generator function [HIERARCHY\_SPANTREE](https://help.sap.com/viewer/4f9859d273254e04af6ab3e9ea3af286/2.0.04/en-US/a93c356d32ef4e7fbd6143b554278eab.html) there.

Example

The following CDS hierarchy uses the addition GENERATE SPANTREE. The program DEMO\_HIERARCHY\_SPANTREE accesses the CDS hierarchy and compares the result with the [hierarchy generator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_generator.htm) in [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry") used in a similar way. When executed, this program demonstrates how this addition works.

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
[CDS DDL - DEFINE HIERARCHY, hierarchy\_annot](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_hierarchy_annotations.htm)
[CDS DDL - DEFINE HIERARCHY, parameter\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_hiera_parameter_list.htm)
[CDS DDL - DEFINE HIERARCHY, element\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_hiera_element_list.htm)
[CDS DDL - Hierarchy Attributes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_attributes.htm)