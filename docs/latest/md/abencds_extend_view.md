  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entity Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_extension.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20EXTEND%20VIEW%20ddic_based%2C%20ABENCDS_EXTEND_VIEW%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS DDL - EXTEND VIEW ddic\_based

Syntax

[@AbapCatalog.sqlViewAppendName: 'CDS\_APPEND\_VIEW'](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_extend_view_annotations.htm)
*\[*[@extension\_annot1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_extend_view_annotations.htm)*\]*
*\[*[@extension\_annot2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_extend_view_annotations.htm)*\]*
...
EXTEND VIEW ddic\_based\_view
       WITH cds\_view\_extension
            *\[*association1
             association2 ...*\]*
            { select\_list\_extension }
            *\[*GROUP BY field1, field2, ...  *\]*
            *\[*UNION *\[*ALL*\]* { ... }*\]* *\[*;*\]*

Additions:

[1\. ... GROUP BY field1, field2, ...](#!ABAP_ADDITION_1@1@)
[2\. ... UNION *\[*ALL*\]* { ... }](#!ABAP_ADDITION_2@2@)

Effect

Extends an existing [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry") ddic\_based\_view using a [CDS DDIC-based view extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_extend_glosry.htm "Glossary Entry") cds\_view\_extension in the [CDS DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddl_glosry.htm "Glossary Entry"). An existing CDS DDIC-based view (obsolete) can have one or more CDS DDIC-based view extensions.

The extended CDS view ddic\_based\_view must be specified under the name of its [CDS entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry"). The name of the [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") cannot be specified.

Prerequisite

As a prerequisite for the extension of the CDS view with the statement EXTEND VIEW, the elements of the [annotation array](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenannotation_array_glosry.htm "Glossary Entry") [AbapCatalog.viewEnhancementCategory\[ \]](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_anno_v1.htm) must be specified accordingly in its definition with [DEFINE VIEW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_v1.htm):

-   By default or if only the value #PROJECTION\_LIST is specified, views without [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aggregate_functions_v1.htm) in the SELECT list and without a [UNION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_union_v1.htm) clause can be extended.
-   In order to extend views that have [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aggregate_functions_v1.htm) in the SELECT list, the annotation array must contain the value #GROUP\_BY alongside #PROJECTION\_LIST.
-   In order to extend views that contain [UNION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_union_v1.htm) clauses, the annotation array must contain the value #UNION alongside #PROJECTION\_LIST.
-   If the annotation array contains the value #NONE, the view cannot be extended.

Components of a View Extension

View extensions can make additions to the original view, but it cannot modify, overwrite, or delete elements from the original view. The following components are possible in a CDS view extension:

-   The annotation [AbapCatalog.sqlViewAppendName](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_extend_view_annotations.htm) is mandatory. Further annotations [extension\_annot1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_extend_view_annotations.htm), [extension\_annot2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_extend_view_annotations.htm), ... can also be specified. This is optional.
-   New associations association1, association2 can be defined and exposed in the CDS view extension. The same rules apply that are described in topic [CDS DDL - DDIC-based view, ASSOCIATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_association_v1.htm).
    
    Note: The definition of new [to-child associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abento_child_association_glosry.htm "Glossary Entry") or [CDS to-parent associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abento_parent_association_glosry.htm "Glossary Entry") in a view extension is not allowed.
    
-   The elements of the extension list select\_list\_extension specified after EXTEND VIEW are added to the existing SELECT list. At least one element must be added. It is possible to access all fields of all data sources of the extended view in the extension list select\_list\_extension. The list can have all [elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_entry_v1.htm) of a [SELECT list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_v1.htm), namely:
    -   [field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_field_v2.htm) of a data source
    -   [Input parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_v1.htm) of the extended CDS view. It is not possible to specify new input parameters in a view extension.
    -   It can expose a [CDS association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_association_v2.htm) of the extended view or a newly defined association
    -   Using a [path expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v1.htm), a field of an association target can be included. Path expressions are possible for associations of the extended view or for newly defined associations.
    -   [literals, session variables, expressions and functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_operands_and_expr_v1.htm)
        
        Note: To add aggregate expressions to a view extension, special rules apply. See below.
        
-   Aggregate expressions are possible in the SELECT list of a view extension only if the following conditions are met:
    -   The original view must contain [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aggregate_functions_v1.htm). If the original view does not contain any aggregate expressions, this is not possible.
    -   The extended view must be annotated with AbapCatalog.viewEnhancementCategory \[#PROJECTION\_LIST, #GROUP\_BY\]
    -   If non-aggregated elements are added to a CDS view with aggregate expressions, then the [GROUP-BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_group_by_v1.htm) clause must be extended using the addition GROUP BY
-   If the original view contains [UNION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_union_v1.htm), equivalent UNION additions must be used in the statement EXTEND VIEW. As a prerequisite, the extended view must be annotated with AbapCatalog.viewEnhancementCategory \[#PROJECTION\_LIST, #UNION\]
    
    If an appended element already occurs in the existing SELECT list or if a different extension occurs, it must be given an alternative element name using AS.
    

Restrictions

-   CDS views with an explicit [name list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_name_list_v1.htm) cannot currently be extended.
-   CDS view extensions themselves cannot be extended.
-   It is not possible to specify new input parameters in a view extension.
-   No addition [ROOT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_root_view_v1.htm) can be specified in the statement EXTEND VIEW to transform a regular view to a [root entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenroot_entity_glosry.htm "Glossary Entry").
-   An appended field cannot be defined as a key field using KEY.
-   The definition of new to-parent or to-child associations in a view extension is not allowed.
-   For views that have an element of data type LRAW or LCHR in the SELECT list, no view extension is possible and the annotation AbapCatalog.viewEnhancementCategory\[#NONE\] is enforced. The reason is that elements of data types LRAW or LCHR must always be in the last position of the SELECT list.

Naming

Two repository objects are created for a CDS view extension that is defined using EXTEND VIEW. A name must be specified for each of the two objects:

-   The actual name cds\_view\_extension of the CDS view extension is specified after the keywords EXTEND VIEW. This name follows the same rules as the name of an [DDIC append view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_append_view_glosry.htm "Glossary Entry"), but can have up to 30 characters.
-   The name CDS\_APPEND\_VIEW for an [append view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_append_view_glosry.htm "Glossary Entry") in ABAP Dictionary must be specified in quotation marks after the annotation [@AbapCatalog.sqlViewAppendName](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_extend_view_annotations.htm). This name is subject to the same rules as the name of a [DDIC database view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_view_glosry.htm "Glossary Entry") in ABAP Dictionary, see topic [DDIC - Naming Rules for DDIC Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_view_names.htm). The new DDIC append view extends the [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of the extended CDS view. The name given to the DDIC append view can no longer be changed after the CDS view extension is transported into a follow-on system.

The name of the new DDIC append view and of the actual CDS view extension should be located in the customer namespace (or in the namespace of a partner or special development) to protect it against being overwritten by upgrades or new releases.

-   Once the DDL source code of a CDS view extension has been transported, the actual name cds\_view\_extension and the name of the DDIC append view CDS\_APPEND\_VIEW can no longer be changed. The extended view ddic\_based\_view can also no longer be changed.

Note: The DDL source code of a CDS view extension does not need to have the same name as the CDS view extension entity, but it is advisable to use the name of the entity.

Hints

-   Currently it is not possible to define extension categories for CDS views. As a consequence, the following restrictions apply:
    -   CDS views have the property can be extended in any way with respect to the [extension category of DDIC structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_enh_cat.htm). The consequences of this must be respected when extending a CDS view.
    -   The properties of a CDS view defined using [annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_anno_v1.htm), such as switching on [table buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_buffering_glosry.htm "Glossary Entry"), cannot currently be modified using extensions.
-   CDS view extensions specified with EXTEND ENTITY are recommended for CDS DDIC-based views (obsolete) only. However, for compatibility and migration reasons, it is also possible to extend [CDS projection views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_projection_view_glosry.htm "Glossary Entry") or [CDS view entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry") with the statement EXTEND VIEW. However, view extends defined using EXTEND VIEW do not support the syntax elements specific to projection views and CDS view entities. Therefore, it is recommended that the statement [EXTEND VIEW ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_extend_view_entity.htm) is used for extensions of CDS projection views and CDS view entities instead.
-   If, for some reason, a CDS projection view or a CDS view entity is extended with EXTEND VIEW, the [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") is deleted (as CDS projection views and CDS view entities do not have any DDIC artefacts), and entity annotations referring to the CDS-managed DDIC view are ignored.
-   CDS DDIC-based views (obsolete) are [obsolete](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddic_entity.htm). If new CDS views are required, CDS view entities should be used.

Example

The following CDS view extension

@AbapCatalog.sqlViewAppendName: 'DEMO\_CDS\_EXTENS'
extend view demo\_cds\_original\_view with demo\_cds\_view\_extension  
  {
    spfli.distance,
    spfli.distid as unit
  };

adds two view fields to the existing CDS view.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ORIG'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@AbapCatalog.viewEnhancementCategory: \[#PROJECTION\_LIST\]
@EndUserText.label: 'Further information about the CDS entity'
define view demo\_cds\_original\_view  
  as select from
           spfli
      join scarr on
        scarr.carrid = spfli.carrid
    {
      key scarr.carrname     as carrier,
      key spfli.connid       as flight,
          spfli.cityfrom     as departure,
          spfli.cityto       as destination
    };

The DDIC append view DEMO\_CDS\_EXTENS is created in ABAP Dictionary. The class CL\_DEMO\_CDS\_VIEW\_EXTENSION uses the statement [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) to access the extended view and also displays the components of the dictionary structures in question.

Addition 1   

... GROUP BY field1, field2, ...

Effect

This addition must be specified if elements not defined using aggregate expressions are added to a view with [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aggregate_functions_v1.htm). These elements must be specified after GROUP BY add extend the [GROUP-BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_group_by_v1.htm) clause of the original view. With respect to the extended view, the extended GROUP-BY clause must follow the general rules for a GROUP-BY clause.

The addition cannot be specified if the definition of the original view does not contain any aggregate expressions in its SELECT list.

Hint

Extensions of a view with aggregate expressions require it to contain the annotation array viewEnhancementCategory\[ \] with the value #GROUP\_BY.

Example

The following CDS view extension

@AbapCatalog.sqlViewAppendName: 'DEMO\_CDS\_EXTAGG'
extend view demo\_cds\_aggregate with demo\_cds\_extend\_aggregate
  {
    connid,  
    sum(distance) as sum\_distance
  }
  group by
    connid;

extends the existing CDS view.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_AGG'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@AbapCatalog.viewEnhancementCategory: \[#PROJECTION\_LIST,#GROUP\_BY\]
define view demo\_cds\_aggregate
  as select from
    spfli  
    {
      carrid,
      sum(fltime) as sum\_fltime
    }
    group by
      carrid;

A database field connid and an aggregate expression sum(distance) are added to the SELECT list. Accordingly, the addition GROUP BY must be used to add the database field to the GROUP-BY clause of the original view.

Addition 2   

... UNION *\[*ALL*\]* { ... }

Effect

This addition must be specified when a view with [UNION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_union_v1.htm) clauses is extended. A corresponding UNION addition must be specified for each UNION clause of the original view. The addition ALL must be specified each time it is specified in the associated UNION clause of the original view. The curly brackets can contain elements that extend the SELECT list of the associated UNION clause of the original view. As specified by the SELECT list extended using select\_list\_extension, the UNION clauses must be extended so that the rules for UNION clauses are not broken in the extended view.

The addition cannot be specified if the definition of the original view does not have a UNION clause.

Hint

Extensions of a view with UNION clauses require it to contain the annotation array viewEnhancementCategory\[ \] with the value #UNION.

Example

The following CDS view extension

@AbapCatalog.sqlViewAppendName: 'DEMO\_CDS\_EXTUNI'
extend view demo\_cds\_union with demo\_cds\_extend\_union
  {
    c as c3,
    d as c4
  }
union
  {
    f as c3,
    g as c4
  }
union all
  {
    k as c3,
    l as c4
  };

extends the existing CDS view.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_UIO'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@AbapCatalog.viewEnhancementCategory: \[#PROJECTION\_LIST,#UNION\]
define view demo\_cds\_union
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

The original view has two UNION clauses represented using corresponding UNION additions in the definition of the CDS view extension. Two elements with matching types are added to the three SELECT lists of the original view.

Continue
[CDS DDL - EXTEND VIEW, extension\_annot](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_extend_view_annotations.htm)