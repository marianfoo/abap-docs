  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entity Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_extension.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20EXTEND%20VIEW%20ENTITY%2C%20ABENCDS_EXTEND_VIEW_ENTITY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS DDL - EXTEND VIEW ENTITY

Syntax

EXTEND VIEW ENTITY cds\_view\_entity *|* projection\_view
       WITH
            *\[*association1
             association2 ...*\]*
            { select\_list\_extension }
            *\[*GROUP BY field1, field2, ...  *\]*
            *\[*EXCEPT *|* INTERSECT *|* UNION *\[*ALL*\]*  { ... }*\]* *\[*;*\]*

Additions:

[1\. ... GROUP BY field1, field2, ...](#!ABAP_ADDITION_1@1@)
[2\. ... EXCEPT*|*INTERSECT*|*UNION *\[*ALL*\]* { ... }](#!ABAP_ADDITION_2@2@)

Effect

Extends an existing [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry") cds\_view\_entity or an existing [CDS projection view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_projection_view_glosry.htm "Glossary Entry") projection\_view using a [CDS view entity extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity_extend_glosry.htm "Glossary Entry") in the [CDS DDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddl_glosry.htm "Glossary Entry"). An existing CDS view can have one or more CDS view entity extensions.

Prerequisite

As a prerequisite for the extension of the CDS entity with the statement EXTEND VIEW ENTITY, the elements of the [annotation array](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenannotation_array_glosry.htm "Glossary Entry") [AbapCatalog.viewEnhancementCategory\[ \]](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity_anno.htm) must be specified accordingly in its definition with [DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_entity.htm):

-   By default or if only the value #PROJECTION\_LIST is specified, views without [aggregate expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_aggregate_functions_v2.htm) in the SELECT list and without a [set-operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_set_operators.htm) clause can be extended.
-   In order to extend views that have [aggregate expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_aggregate_functions_v2.htm) in the SELECT list, the annotation array must contain the value #GROUP\_BY alongside #PROJECTION\_LIST.
-   In order to extend views that contain set-operator clauses, the annotation array must contain the value #UNION alongside #PROJECTION\_LIST.
    
    Note: The annotation array value #UNION allows extensions not only for union views, but for views including any set operator (also [EXCEPT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_except_v2.htm) and [INTERSECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_intersect_v2.htm)). The annotation array value #UNION is a known misnomer.
    
-   If the annotation array contains the value #NONE, the view cannot be extended.

Additionally, the annotation [AbapCatalog.extensibility.extensible](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_entity_annotations.htm) must not be set to false.

Components of a View Entity Extension

View entity extensions can make additions to the original view, but they cannot modify, overwrite, or delete elements from the original view. The following components are possible in a CDS view entity extension:

-   New associations association1, association2 can be defined and exposed in the CDS view entity extension. The same rules apply that are described in topic [CDS DDL - CDS view entity, ASSOCIATION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_association_v2.htm).
    
    Note: It is not allowed to define new [CDS to-parent associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abento_parent_association_glosry.htm "Glossary Entry") in a view entity extension. New [to-child associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abento_child_association_glosry.htm "Glossary Entry") are allowed under the condition that the association target is also defined as composition child and has the required to-parent association.
    
-   When extending a CDS projection view, the view entity extension can specify all features that are possible in a projection view, such as [CDS virtual elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_virtual_element_glosry.htm "Glossary Entry"), [localized elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_view_element.htm), and [redefined](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_view_redefined_assoc.htm) and [redirected associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_pv_assoc_redirected.htm). See topic [CDS DDL - projection\_list, Transactional Query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_view_element_list.htm) for a complete list.
-   When extending a CDS view entity, the view entity extension can specify all features that are possible in a view entity, such as [path expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v2.htm), [elementary operands](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_operands_v2.htm), [expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_expressions_v2.htm) and [functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_builtin_functions_v2.htm). See topic [CDS DDL - CDS View Entity, SELECT, element](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_entry_v2.htm) for a complete list.
-   Each appended element must have a unique name. If an appended element already occurs in the existing SELECT list or in a different extension, the element must be given an alternative element name using AS.

Restrictions

-   CDS view entity extensions themselves cannot be extended.
-   It is not possible to specify new [input parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_parameter_v2.htm) in a view entity extension.
-   No addition [ROOT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_root_view_v1.htm) can be specified in the statement EXTEND VIEW ENTITY to transform a regular view to a [root entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenroot_entity_glosry.htm "Glossary Entry").
-   An appended field cannot be defined as a [KEY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_builtin_functions_v2.htm) field.
-   In a view entity extension, header annotations are not supported. That means that no annotations are allowed in front of the statement EXTEND VIEW ENTITY.
-   For views that have an element of data type LRAW or LCHR in the SELECT list, no view extension is possible and the annotation AbapCatalog.viewEnhancementCategory\[#NONE\] is enforced. The reason is that elements of data types LRAW or LCHR must always be in the last position of the SELECT list.
-   It is not possible enable both [buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_buffering.htm) and extensions for a view entity. If the annotation [@AbapCatalog.entityBuffer.definitionAllowed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity_anno.htm) is set to true, extensions are not allowed.
-   CDS view entity extensions cannot append fields of CDS projection views, CDS custom entities, or CDS abstract entities to a CDS view entity. Fields of CDS projection views, CDS abstract entities, or CDS custom entities can - generally - not be used in path expressions and this also holds true for path expressions in CDS view entity extensions.
    
    This is not valid:
    
    extend view entity MyExtension
      with {
        \_assocToAbstract.field1   as Alias1
        \_assocToCustom.field2     as Alias2
        \_assocToProjection.field3 as Alias3
            }
    

Example

The following CDS view entity extension

extend view entity DEMO\_CDS\_ORIGINAL\_VIEW\_VE with
{
  spfli.distance,
  spfli.distid as unit
}

adds two view fields to the existing CDS view entity

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@AbapCatalog.viewEnhancementCategory: \[#PROJECTION\_LIST\]
@EndUserText.label: 'Further information about the CDS entity'
define view entity DEMO\_CDS\_ORIGINAL\_VIEW\_VE  
  as select from
           spfli
      join scarr on
        scarr.carrid = spfli.carrid
    {
      key scarr.carrname     as carrier,
      key spfli.carrid       as carrierId,
      key spfli.connid       as flight,
          spfli.cityfrom     as departure,
          spfli.cityto       as destination
    };

The class CL\_DEMO\_CDS\_VIEW\_EXTENSION\_VE uses the statement [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm) to access the extended view entity.

Addition 1   

... GROUP BY field1, field2, ...

Effect

This addition must be specified if elements not defined using aggregate expressions are added to a view with [aggregate expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_aggregate_functions_v2.htm). These elements must be specified after GROUP BY and they extend the [GROUP-BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_group_by_v2.htm) clause of the original view. With respect to the extended view, the extended GROUP-BY clause must follow the general rules for a GROUP-BY clause.

As a prerequisite, the definition of the original view must contain at least one aggregate expression in its SELECT list.

Hint

Extensions of a view with aggregate expressions require it to contain the annotation array viewEnhancementCategory\[ \] with the values #PROJECTION and #GROUP\_BY.

Example

The following CDS view entity extension

extend view entity DEMO\_CDS\_VIEW\_ENTITY\_GROUP\_BY with
{
  sflight.connid,
  sflight.currency as currency,
  @Semantics.amount.currencyCode: 'currency'
  sum(sflight.paymentsum) as sum\_distance
}
group by
  sflight.connid,
  sflight.currency;

extends the existing CDS view entity

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@AbapCatalog.viewEnhancementCategory: \[#PROJECTION\_LIST, #GROUP\_BY\]
define view entity DEMO\_CDS\_VIEW\_ENTITY\_GROUP\_BY
  as select from sflight
{
  concat\_with\_space(carrid, connid, 1) as ID,
  count(\*)                             as col\_count,
  avg( seatsocc as abap.dec( 20, 2 ))  as col\_avg
}
group by
  carrid,
  connid

A database field connid and an aggregate expression sum(sflight.paymentsum) are added to the SELECT list. Accordingly, the addition GROUP BY must be used to add the database field to the GROUP-BY clause of the original view.

Addition 2   

... EXCEPT *|* INTERSECT *|* UNION *\[*ALL*\]*

Effect

This addition must be specified when a view entity with a [set operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_set_operators_glosry.htm "Glossary Entry") ([EXCEPT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_except_v2.htm), [INTERSECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_intersect_v2.htm), or [UNION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_union_v2.htm)) is extended. A corresponding addition ([EXCEPT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_except_v2.htm), [INTERSECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_intersect_v2.htm), or [UNION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_union_v2.htm)) must be specified for each clause of the original view. The curly brackets can contain elements that extend the SELECT list of the associated set-operator clause of the original view. As specified by the SELECT list extended using select\_list\_extension, the set-operator clauses must be extended so that the rules for set-operator clauses are not broken in the extended view.

The addition ALL is available only for UNION views and it must be specified each time it is specified in the associated UNION clause of the original view.

As a prerequisite, the original view must have a set-operator clause.

Hint

Extensions of a view with set-operator clauses require it to contain the annotation array viewEnhancementCategory\[ \] with the values#PROJECTION\_LIST and #UNION.

Example

The following CDS view entity extension

extend view entity DEMO\_CDS\_UNION\_VE with  
{  
    demo\_join1.c as c3,  
    demo\_join1.d as c4  
  }  
union  
  {  
    demo\_join2.f as c3,  
    demo\_join2.g as c4  
  }  
union all  
  {  
    demo\_join3.k as c3,  
    demo\_join3.l as c4  
  };

extends the existing CDS view

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.viewEnhancementCategory: \[#PROJECTION\_LIST,#UNION\]
define view entity DEMO\_CDS\_UNION\_VE
  as select from
    demo\_join1
    {
      a as c1,
      b as c2
    }
union select from
  demo\_join2
    {
      d as c1,
      e as c2
    }
union all select from
  demo\_join3
    {
      i as c1,
      j as c2
    };

The original view entity has two UNION clauses represented using corresponding UNION additions in the definition of the CDS view entity extension. Two elements with matching types are added to the three SELECT lists of the original view.