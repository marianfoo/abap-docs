# ABAP - Keyword Documentation / ABAP - Core Data Services (ABAP CDS) / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - CDS Entity Extension / CDS DDL - EXTEND VIEW ddic_based

Included pages: 2


### abencds_extend_view.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entity Extension](javascript:call_link\('abencds_view_extension.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - EXTEND VIEW ddic_based, ABENCDS_EXTEND_VIEW, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - EXTEND VIEW ddic\_based

Syntax

[@AbapCatalog.sqlViewAppendName: 'CDS\_APPEND\_VIEW'](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))
*\[*[@extension\_annot1](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))*\]*
*\[*[@extension\_annot2](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))*\]*
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

Extends an existing [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") ddic\_based\_view using a [CDS view extension](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry") cds\_view\_extension in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"). An existing CDS DDIC-based view (obsolete) can have one or more CDS view extensions.

The extended CDS view ddic\_based\_view must be specified under the name of its [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). The name of the [CDS-managed DDIC view (obsolete)](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") cannot be specified.

Prerequisite

As a prerequisite for the enhancement of the CDS view with the statement EXTEND VIEW, the elements of the [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") [AbapCatalog.viewEnhancementCategory\[ \]](javascript:call_link\('abencds_view_anno_v1.htm'\)) must be specified accordingly in its definition with [DEFINE VIEW](javascript:call_link\('abencds_define_view_v1.htm'\)):

-   By default or if only the value #PROJECTION\_LIST is specified, views without [aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)) in the SELECT list and without a [UNION](javascript:call_link\('abencds_union_v1.htm'\)) clause can be extended.
-   In order to extend views that have [aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)) in the SELECT list, the annotation array must contain the value #GROUP\_BY alongside #PROJECTION\_LIST.
-   In order to extend views that contain [UNION](javascript:call_link\('abencds_union_v1.htm'\)) clauses, the annotation array must contain the value #UNION alongside #PROJECTION\_LIST.
-   If the annotation array contains the value #NONE, the view cannot be extended.

Components of a View Extension

View extensions can make additions to the original view, but it cannot modify, overwrite, or delete elements from the original view. The following components are possible in a CDS view extension:

-   The annotation [AbapCatalog.sqlViewAppendName](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\)) is mandatory. Further annotations [extension\_annot1](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\)), [extension\_annot2](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\)), ... can also be specified. This is optional.
-   New associations association1, association2 can be defined and exposed in the CDS view extension. The same rules apply that are described in topic [CDS DDL - DDIC-based view, ASSOCIATION](javascript:call_link\('abencds_simple_association_v1.htm'\)).
    
    Note: It is not allowed to define new [CDS compositions](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry") or [CDS to-parent associations](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry") in a view extension.
    
-   The elements of the extension list select\_list\_extension specified after EXTEND VIEW are added to the existing SELECT list. At least one element must be added. It is possible to access all fields of all data sources of the extended view in the extension list select\_list\_extension. The list can have all [elements](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) of a [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)), namely:
    -   [field](javascript:call_link\('abencds_field_v2.htm'\)) of a data source
    -   [Input parameters](javascript:call_link\('abencds_parameter_v1.htm'\)) of the extended CDS view. It is not possible to specify new input parameters in a view extension.
    -   It can expose a [CDS association](javascript:call_link\('abencds_select_list_association_v2.htm'\)) of the extended view or a newly defined association
    -   Using a [path expressions](javascript:call_link\('abencds_path_expression_v1.htm'\)), a field of an association target can be included. Path expressions are possible for associations of the extended view or for newly defined associations.
    -   [literals, session variables, expressions and functions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\))
        
        Note: To add aggregate expressions to a view extension, special rules apply. See below.
        
-   Aggregate expressions are possible in the SELECT list of a view extension only if the following conditions are met:
    -   The original view must contain [aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)). If the original view does not contain any aggregate expressions, this is not possible.
    -   The extended view must be annotated with AbapCatalog.viewEnhancementCategory \[#PROJECTION\_LIST, #GROUP\_BY\]
    -   If non-aggregated elements are added to a CDS view with aggregate expressions, then the [GROUP-BY](javascript:call_link\('abencds_group_by_v1.htm'\)) clause must be extended using the addition GROUP BY
-   If the original view contains [UNION](javascript:call_link\('abencds_union_v1.htm'\)), equivalent UNION additions must be used in the statement EXTEND VIEW. As a prerequisite, the extended view must be annotated with AbapCatalog.viewEnhancementCategory \[#PROJECTION\_LIST, #UNION\]
    
    If an appended element already occurs in the existing SELECT list or if a different extension occurs, it must be given an alternative element name using AS.
    

Restrictions

-   CDS views with an explicit [name list](javascript:call_link\('abencds_name_list_v1.htm'\)) cannot currently be extended.
-   CDS view extensions themselves cannot be extended.
-   It is not possible to specify new input parameters in a view extension.
-   No addition [ROOT](javascript:call_link\('abencds_define_root_view_v1.htm'\)) can be specified in the statement EXTEND VIEW to transform a regular view to a [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry").
-   An appended field cannot be defined as a key field using KEY.
-   It is not allowed to define new to-parent or composition associations in a view extension.
-   For views that have an element of data type LRAW or LCHR in the SELECT list, no view extension is possible and the annotation AbapCatalog.viewEnhancementCategory\[#NONE\] is enforced. The reason is that elements of data types LRAW or LCHR must always be in the last position of the SELECT list.

Naming

Two repository objects are created for a CDS view extension that is defined using EXTEND VIEW. A name must be specified for each of the two objects:

-   The actual name cds\_view\_extension of the CDS view extension is specified after the keywords EXTEND VIEW. This name follows the same rules as the name of an [DDIC append view](javascript:call_link\('abenddic_append_view_glosry.htm'\) "Glossary Entry"), but can have up to 30 characters.
-   The name CDS\_APPEND\_VIEW for an [append view](javascript:call_link\('abenddic_append_view_glosry.htm'\) "Glossary Entry") in ABAP Dictionary must be specified in quotation marks after the annotation [@AbapCatalog.sqlViewAppendName](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\)). This name is subject to the same rules as the name of a [DDIC database view](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry") in ABAP Dictionary, see topic [DDIC - Naming Rules for DDIC Views](javascript:call_link\('abenddic_view_names.htm'\)). The new DDIC append view extends the [CDS-managed DDIC view (obsolete)](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") of the extended CDS view. The name given to the DDIC append view can no longer be changed after the CDS view extension is transported into a follow-on system.

The name of the new DDIC append view and of the actual CDS view extension should be located in the customer namespace (or in the namespace of a partner or special development) to protect it against being overwritten by upgrades or new releases.

-   Once the DDL source code of a CDS view extension has been transported, the actual name cds\_view\_extension and the name of the DDIC append view CDS\_APPEND\_VIEW can no longer be changed. The extended view ddic\_based\_view can also no longer be changed.

Note: The DDL source code of a CDS view extension does not need to have the same name as the CDS view extension entity, but it is advisable to use the name of the entity.

Hints

-   Currently it is not possible to define extension categories for CDS views. As a consequence, the following restrictions apply:
    -   CDS views have the property can be extended in any way with respect to the [extension category of DDIC structures](javascript:call_link\('abenddic_structures_enh_cat.htm'\)). The consequences of this must be respected when extending a CDS view.
    -   The properties of a CDS view defined using [annotations](javascript:call_link\('abencds_view_anno_v1.htm'\)), such as switching on [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry"), cannot currently be modified using extensions.
-   CDS view extensions specified with EXTEND ENTITY are recommended for CDS DDIC-based views (obsolete) only. However, for compatibility and migration reasons, it is also possible to extend [CDS projection views](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") or [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") with the statement EXTEND VIEW. However, view extends defined using EXTEND VIEW do not support the syntax elements specific to projection views and CDS view entities. Therefore, it is recommended that the statement [EXTEND VIEW ENTITY](javascript:call_link\('abencds_extend_view_entity.htm'\)) is used for extensions of CDS projection views and CDS view entities instead.
-   If, for some reason, a CDS projection view or a CDS view entity is extended with EXTEND VIEW, the [CDS-managed DDIC view (obsolete)](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") is deleted (as CDS projection views and CDS view entities do not have any DDIC artefacts), and entity annotations referring to the CDS-managed DDIC view are ignored.
-   CDS DDIC-based views (obsolete) are [obsolete](javascript:call_link\('abencds_ddic_entity.htm'\)). If new CDS views are required, CDS view entities should be used.

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

The DDIC append view DEMO\_CDS\_EXTENS is created in ABAP Dictionary. The program DEMO\_CDS\_VIEW\_EXTENSION uses the statement [SELECT](javascript:call_link\('abapselect.htm'\)) to access the enhanced view and also displays the components of the dictionary structures in question.

Addition 1   

... GROUP BY field1, field2, ...

Effect

This addition must be specified if elements not defined using aggregate expressions are added to a view with [aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)). These elements must be specified after GROUP BY add extend the [GROUP-BY](javascript:call_link\('abencds_group_by_v1.htm'\)) clause of the original view. With respect to the extended view, the extended GROUP-BY clause must follow the general rules for a GROUP-BY clause.

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

This addition must be specified when a view with [UNION](javascript:call_link\('abencds_union_v1.htm'\)) clauses is extended. A corresponding UNION addition must be specified for each UNION clause of the original view. The addition ALL must be specified each time it is specified in the associated UNION clause of the original view. The curly brackets can contain elements that extend the SELECT list of the associated UNION clause of the original view. As specified by the SELECT list extended using select\_list\_extension, the UNION clauses must be extended so that the rules for UNION clauses are not broken in the extended view.

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
[CDS DDL - EXTEND VIEW, extension\_annot](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))


### abencds_f1_extend_view_annotations.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entity Extension](javascript:call_link\('abencds_view_extension.htm'\)) →  [CDS DDL - EXTEND VIEW ddic\_based](javascript:call_link\('abencds_extend_view.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - EXTEND VIEW, extension_annot, ABENCDS_F1_EXTEND_VIEW_ANNOTATIONS, 757%0D%0A
%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - EXTEND VIEW, extension\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as an extension annotation in the definition of a [CDS view extension](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry") before the statement [EXTEND VIEW](javascript:call_link\('abencds_extend_view.htm'\)). The character @ must be placed in front of the name annotation of the annotation. The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #EXTEND\_VIEW.

The following tables show the possible [ABAP annotations](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime framework for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime framework but by other SAP frameworks instead.

The first column of the table shows the (possibly structured) name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the default value which is used if the annotation is not used at all. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

AbapCatalog Annotations   

Technical settings of a CDS view extension.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

AbapCatalog.sqlViewAppendName

Name of the DDIC append view of the CDS view extension

Character string with a maximum of 16 characters consisting of letters, numbers and underscores and that starts with a [namespace prefix](javascript:call_link\('abenname_space_prefix_glosry.htm'\) "Glossary Entry").

\-

\-

Hints

-   Each definition of a CDS view extension must contain the ABAP annotation AbapCatalog.sqlViewAppendName that defines the name of the DDIC append view in ABAP Dictionary.
-   The name given to the DDIC append view can no longer be changed after the CDS view extension is transported into a follow-on system.
