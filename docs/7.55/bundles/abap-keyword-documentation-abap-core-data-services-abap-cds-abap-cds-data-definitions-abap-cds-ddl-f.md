# ABAP - Keyword Documentation / ABAP - Core Data Services (ABAP CDS) / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - View extension

Included pages: 7



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.55](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencds_view_extension.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_extension.htm)
- [abencds_f1_extend_view.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_extend_view.htm)
- [abencds_extend_view.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_extend_view.htm)
- [abencds_f1_extend_view_annotations.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_extend_view_annotations.htm)
- [abencds_extend_view_entity.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_extend_view_entity.htm)

**Bundle Contains**: 5 documentation pages
**Version**: ABAP 7.55
**Generated**: 2025-09-01T11:25:45.654Z

---

### abencds_view_extension.htm

> **📖 Official SAP Documentation**: [abencds_view_extension.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_extension.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) → 

ABAP CDS - View extension

Work in progress

Continue
[CDS DDL - EXTEND VIEW](javascript:call_link\('abencds_f1_extend_view.htm'\))



**📖 Source**: [abencds_view_extension.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_extension.htm)

### abencds_f1_extend_view.htm

> **📖 Official SAP Documentation**: [abencds_f1_extend_view.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_extend_view.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - View extension](javascript:call_link\('abencds_view_extension.htm'\)) → 

CDS DDL - EXTEND VIEW

The statement EXTEND VIEW in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") has two variants:

-   [EXTEND VIEW ddic\_based\_view](javascript:call_link\('abencds_extend_view.htm'\))

This variant is used to define a [CDS view extension](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry") that is also associated with a [DDIC append view](javascript:call_link\('abenddic_append_view_glosry.htm'\) "Glossary Entry") in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry").

-   [EXTEND VIEW ENTITY](javascript:call_link\('abencds_extend_view_entity.htm'\))

This variant is used to define a [CDS view extension](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry") that no longer needs a dictionary object.

Continue
[CDS DDL - EXTEND VIEW ddic\_based\_view](javascript:call_link\('abencds_extend_view.htm'\))
[CDS DDL - EXTEND VIEW ENTITY](javascript:call_link\('abencds_extend_view_entity.htm'\))



**📖 Source**: [abencds_f1_extend_view.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_extend_view.htm)

### abencds_extend_view.htm

> **📖 Official SAP Documentation**: [abencds_extend_view.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_extend_view.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - View extension](javascript:call_link\('abencds_view_extension.htm'\)) →  [CDS DDL - EXTEND VIEW](javascript:call_link\('abencds_f1_extend_view.htm'\)) → 

CDS DDL - EXTEND VIEW ddic\_based\_view

Syntax

[@AbapCatalog.sqlViewAppendName: 'CDS\_APPEND\_VIEW'](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))
*\[*[@extension\_annot1](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))*\]*
*\[*[@extension\_annot2](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))*\]*
...
EXTEND VIEW ddic\_based\_view *|* projection\_view
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

Extends an existing [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") ddic\_based\_view or an existing [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") projection\_view using a [CDS view extension](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry") cds\_view\_extension in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry").

A CDS view extended using this variant of the statement EXTEND VIEW must be based on a [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry"). The extended CDS view must be specified under the name of its [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). The name of the [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") cannot be specified.

As a prerequisite for the enhancement of the CDS view with the statement EXTEND VIEW, the elements of the [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") [AbapCatalog.viewEnhancementCategory\[ \]](javascript:call_link\('abencds_view_anno_v1.htm'\)) must be specified accordingly in its definition with [DEFINE VIEW](javascript:call_link\('abencds_define_view_v1.htm'\)):

-   By default or if only the value #PROJECTION\_LIST is specified, views without [aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)) in the SELECT list and without a [UNION](javascript:call_link\('abencds_union_v1.htm'\)) clause can be extended.

-   In order to extend views that have [aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)) in the SELECT list, the annotation array must contain the value #GROUP\_BY alongside #PROJECTION\_LIST.

-   In order to extend views that contain [UNION](javascript:call_link\('abencds_union_v1.htm'\)) clauses, the annotation array must contain the value #UNION alongside #PROJECTION\_LIST.

-   If the annotation array contains the value #NONE, the view cannot be extended.

CDS views with an explicit [name list](javascript:call_link\('abencds_name_list_v1.htm'\)) cannot currently be extended. CDS view extensions themselves cannot be extended.

EXTEND VIEW is used to make the following modification-free extensions:

-   The elements of the extension list select\_list\_extension specified after EXTEND VIEW are added to the existing SELECT list. At least one element must be added. It is possible to access all fields of the data sources used in the extended CDS view in the extension list select\_list\_extension. The list can have all [elements](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) of a [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)), except [aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)). The following can also be specified:

-   [Input parameters](javascript:call_link\('abencds_parameter_v1.htm'\)) of the extended CDS view

-   [Path expressions](javascript:call_link\('abencds_path_expression_v1.htm'\)) for dedicated CDS associations and for CDS associations of the extended CDS view

-   Other [literals, expressions and functions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\))

If an appended element already occurs in the existing SELECT list or if a different extension occurs, it must be given an alternative element name using AS. An appended field cannot be defined as a key field using KEY.

-   The optional CDS associations [association1](javascript:call_link\('abencds_association_v1.htm'\)), [association2](javascript:call_link\('abencds_association_v1.htm'\)), ... specified after EXTEND VIEW can be added to the existing SELECT statement.

If the original view contains [aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)), further aggregate expressions can be added to it in select\_list\_extension. If the original view does not contain any aggregate expressions, this is not possible. If other elements are added to a CDS view with aggregate expressions, its [GROUP-BY](javascript:call_link\('abencds_group_by_v1.htm'\)) clause must be extended accordingly using the addition GROUP BY of the association EXTEND VIEW

If the original view contains [UNION](javascript:call_link\('abencds_union_v1.htm'\)), equivalent UNION additions must be used in the statement EXTEND VIEW.

The annotation [AbapCatalog.sqlViewAppendName](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\)) must be specified before the view extension itself is defined using EXTEND VIEW. Further annotations [extension\_annot1](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\)), [extension\_annot2](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\)), ... can also be specified. This is optional.

Two repository objects are created for a CDS view extension that is defined using EXTEND VIEW. A name must be specified for each of the two objects:

-   The actual name cds\_view\_extension of the CDS view extension is specified after the keywords EXTEND VIEW. This name follows the same rules as the name of an [DDIC append view](javascript:call_link\('abenddic_append_view_glosry.htm'\) "Glossary Entry"), but can have up to 30 characters.

-   The name CDS\_APPEND\_VIEW for a [append view](javascript:call_link\('abenddic_append_view_glosry.htm'\) "Glossary Entry") in ABAP Dictionary must be specified in quotation marks after the [annotation](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\)) @AbapCatalog.sqlViewAppendName created when the CDS view extension was activated. This name is subject to the same rules as the name of a [DDIC database view](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry") in ABAP Dictionary. The new DDIC append view extends the [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") of the extended CDS view. The name given to the DDIC append view can no longer be changed after the CDS view extension is transported into a follow-on system.

[CDS view extensions](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry") are connected to [Switch Framework](javascript:call_link\('abenswitch_framework_glosry.htm'\) "Glossary Entry") whenever they are defined in a [package](javascript:call_link\('abenpackage_glosry.htm'\) "Glossary Entry") that is assigned a [switch](javascript:call_link\('abenswitch_glosry.htm'\) "Glossary Entry").

Hints

-   Every CDS view extension has its own [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry"). The DDL source code in a CDS view extension is edited in a different editor from the DDL source code of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). The ADT documentation describes how these types of source code are created. DDL source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

-   An existing CDS view can be extended using multiple CDS view extensions.

-   The name of the new DDIC append view and of the actual CDS view extension should be located in the customer namespace (or in the namespace of a partner or special development) to protect it against being overwritten by upgrades or new releases.

-   Currently it is not possible to define extension categories for CDS views. The following restrictions apply for this reason:

-   CDS views have the property can be extended in any way with respect to the [extension category of DDIC structures](javascript:call_link\('abenddic_structures_enh_cat.htm'\)). The consequences of this must be respected when extending a CDS view.

-   The attributes of a CDS view defined using [annotations](javascript:call_link\('abencds_view_anno_v1.htm'\)), such as switching on [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry"), cannot currently be modified using extensions.

-   It is advisable to make no extensions to CDS views from basis packages. These CDS views are intended for internal use only and can be modified in incompatible ways.

-   The DDL source code of a CDS view extension does not need to have the same name as the CDS view extension entity, but it is advisable to use the name of the entity.

-   Once the DDL source code of a CDS view extension has been transported, the following relationships are committed and can no longer be changed:

-   The combination of the name of the source code and the names of the view extension defined there and its DDIC append view. These can no can longer be modified by being renamed.

-   The assignment of the view extension to the extended view. The name ddic\_based\_view after EXTEND VIEW can no longer be modified.

-   No addition [ROOT](javascript:call_link\('abencds_define_root_view_v1.htm'\)) can be specified in the statement EXTEND VIEW to transform a regular view to a [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry").

-   [CDS projection views](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") can be extended with the statement EXTEND VIEW. This is supported for compatibility and migration reasons. However, the syntax elements specific to projection views are not supported with this variant of view extension. It is recommended to use the statement EXTEND VIEW ENTITY for extensions of CDS projection views instead.

-   If you, for some reason, extend a CDS projection view with EXTEND VIEW, the [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") is omitted (as CDS projection views don't have any DDIC artefact), and entity annotations referring to the CDS-managed DDIC view are ignored.

Example

The following CDS view extension

@AbapCatalog.sqlViewAppendName: 'DEMO\_CDS\_EXTENS'
extend view demo\_cds\_original\_view with demo\_cds\_view\_extension  
  {
    spfli.distance,
    spfli.distid as unit
  };

adds two view fields to the existing CDS view

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
    }; .

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

extends the existing CDS view

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
      carrid; .

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

extends the existing CDS view

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
    }; .

The original view has two UNION clauses represented using corresponding UNION additions in the definition of the CDS view extension. Two elements with matching types are added to the three SELECT lists of the original view.

Continue
[CDS DDL - EXTEND VIEW, extension\_annot](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))



**📖 Source**: [abencds_extend_view.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_extend_view.htm)

### abencds_f1_extend_view_annotations.htm

> **📖 Official SAP Documentation**: [abencds_f1_extend_view_annotations.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_extend_view_annotations.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - View extension](javascript:call_link\('abencds_view_extension.htm'\)) →  [CDS DDL - EXTEND VIEW](javascript:call_link\('abencds_f1_extend_view.htm'\)) →  [CDS DDL - EXTEND VIEW ddic\_based\_view](javascript:call_link\('abencds_extend_view.htm'\)) → 

CDS DDL - EXTEND VIEW, extension\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as an extension annotation in the definition of a [CDS view extension](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry") before the statement [EXTEND VIEW](javascript:call_link\('abencds_f1_extend_view.htm'\)). The character @ must be placed in front of the name annotation of the annotation. The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #EXTEND\_VIEW.

The following tables show the possible [ABAP annotations](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

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



**📖 Source**: [abencds_f1_extend_view_annotations.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_extend_view_annotations.htm)

### abencds_extend_view.htm

> **📖 Official SAP Documentation**: [abencds_extend_view.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_extend_view.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - View extension](javascript:call_link\('abencds_view_extension.htm'\)) →  [CDS DDL - EXTEND VIEW](javascript:call_link\('abencds_f1_extend_view.htm'\)) → 

CDS DDL - EXTEND VIEW ddic\_based\_view

Syntax

[@AbapCatalog.sqlViewAppendName: 'CDS\_APPEND\_VIEW'](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))
*\[*[@extension\_annot1](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))*\]*
*\[*[@extension\_annot2](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))*\]*
...
EXTEND VIEW ddic\_based\_view *|* projection\_view
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

Extends an existing [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") ddic\_based\_view or an existing [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") projection\_view using a [CDS view extension](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry") cds\_view\_extension in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry").

A CDS view extended using this variant of the statement EXTEND VIEW must be based on a [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry"). The extended CDS view must be specified under the name of its [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). The name of the [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") cannot be specified.

As a prerequisite for the enhancement of the CDS view with the statement EXTEND VIEW, the elements of the [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") [AbapCatalog.viewEnhancementCategory\[ \]](javascript:call_link\('abencds_view_anno_v1.htm'\)) must be specified accordingly in its definition with [DEFINE VIEW](javascript:call_link\('abencds_define_view_v1.htm'\)):

-   By default or if only the value #PROJECTION\_LIST is specified, views without [aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)) in the SELECT list and without a [UNION](javascript:call_link\('abencds_union_v1.htm'\)) clause can be extended.

-   In order to extend views that have [aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)) in the SELECT list, the annotation array must contain the value #GROUP\_BY alongside #PROJECTION\_LIST.

-   In order to extend views that contain [UNION](javascript:call_link\('abencds_union_v1.htm'\)) clauses, the annotation array must contain the value #UNION alongside #PROJECTION\_LIST.

-   If the annotation array contains the value #NONE, the view cannot be extended.

CDS views with an explicit [name list](javascript:call_link\('abencds_name_list_v1.htm'\)) cannot currently be extended. CDS view extensions themselves cannot be extended.

EXTEND VIEW is used to make the following modification-free extensions:

-   The elements of the extension list select\_list\_extension specified after EXTEND VIEW are added to the existing SELECT list. At least one element must be added. It is possible to access all fields of the data sources used in the extended CDS view in the extension list select\_list\_extension. The list can have all [elements](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) of a [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)), except [aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)). The following can also be specified:

-   [Input parameters](javascript:call_link\('abencds_parameter_v1.htm'\)) of the extended CDS view

-   [Path expressions](javascript:call_link\('abencds_path_expression_v1.htm'\)) for dedicated CDS associations and for CDS associations of the extended CDS view

-   Other [literals, expressions and functions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\))

If an appended element already occurs in the existing SELECT list or if a different extension occurs, it must be given an alternative element name using AS. An appended field cannot be defined as a key field using KEY.

-   The optional CDS associations [association1](javascript:call_link\('abencds_association_v1.htm'\)), [association2](javascript:call_link\('abencds_association_v1.htm'\)), ... specified after EXTEND VIEW can be added to the existing SELECT statement.

If the original view contains [aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)), further aggregate expressions can be added to it in select\_list\_extension. If the original view does not contain any aggregate expressions, this is not possible. If other elements are added to a CDS view with aggregate expressions, its [GROUP-BY](javascript:call_link\('abencds_group_by_v1.htm'\)) clause must be extended accordingly using the addition GROUP BY of the association EXTEND VIEW

If the original view contains [UNION](javascript:call_link\('abencds_union_v1.htm'\)), equivalent UNION additions must be used in the statement EXTEND VIEW.

The annotation [AbapCatalog.sqlViewAppendName](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\)) must be specified before the view extension itself is defined using EXTEND VIEW. Further annotations [extension\_annot1](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\)), [extension\_annot2](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\)), ... can also be specified. This is optional.

Two repository objects are created for a CDS view extension that is defined using EXTEND VIEW. A name must be specified for each of the two objects:

-   The actual name cds\_view\_extension of the CDS view extension is specified after the keywords EXTEND VIEW. This name follows the same rules as the name of an [DDIC append view](javascript:call_link\('abenddic_append_view_glosry.htm'\) "Glossary Entry"), but can have up to 30 characters.

-   The name CDS\_APPEND\_VIEW for a [append view](javascript:call_link\('abenddic_append_view_glosry.htm'\) "Glossary Entry") in ABAP Dictionary must be specified in quotation marks after the [annotation](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\)) @AbapCatalog.sqlViewAppendName created when the CDS view extension was activated. This name is subject to the same rules as the name of a [DDIC database view](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry") in ABAP Dictionary. The new DDIC append view extends the [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") of the extended CDS view. The name given to the DDIC append view can no longer be changed after the CDS view extension is transported into a follow-on system.

[CDS view extensions](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry") are connected to [Switch Framework](javascript:call_link\('abenswitch_framework_glosry.htm'\) "Glossary Entry") whenever they are defined in a [package](javascript:call_link\('abenpackage_glosry.htm'\) "Glossary Entry") that is assigned a [switch](javascript:call_link\('abenswitch_glosry.htm'\) "Glossary Entry").

Hints

-   Every CDS view extension has its own [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry"). The DDL source code in a CDS view extension is edited in a different editor from the DDL source code of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). The ADT documentation describes how these types of source code are created. DDL source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

-   An existing CDS view can be extended using multiple CDS view extensions.

-   The name of the new DDIC append view and of the actual CDS view extension should be located in the customer namespace (or in the namespace of a partner or special development) to protect it against being overwritten by upgrades or new releases.

-   Currently it is not possible to define extension categories for CDS views. The following restrictions apply for this reason:

-   CDS views have the property can be extended in any way with respect to the [extension category of DDIC structures](javascript:call_link\('abenddic_structures_enh_cat.htm'\)). The consequences of this must be respected when extending a CDS view.

-   The attributes of a CDS view defined using [annotations](javascript:call_link\('abencds_view_anno_v1.htm'\)), such as switching on [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry"), cannot currently be modified using extensions.

-   It is advisable to make no extensions to CDS views from basis packages. These CDS views are intended for internal use only and can be modified in incompatible ways.

-   The DDL source code of a CDS view extension does not need to have the same name as the CDS view extension entity, but it is advisable to use the name of the entity.

-   Once the DDL source code of a CDS view extension has been transported, the following relationships are committed and can no longer be changed:

-   The combination of the name of the source code and the names of the view extension defined there and its DDIC append view. These can no can longer be modified by being renamed.

-   The assignment of the view extension to the extended view. The name ddic\_based\_view after EXTEND VIEW can no longer be modified.

-   No addition [ROOT](javascript:call_link\('abencds_define_root_view_v1.htm'\)) can be specified in the statement EXTEND VIEW to transform a regular view to a [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry").

-   [CDS projection views](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") can be extended with the statement EXTEND VIEW. This is supported for compatibility and migration reasons. However, the syntax elements specific to projection views are not supported with this variant of view extension. It is recommended to use the statement EXTEND VIEW ENTITY for extensions of CDS projection views instead.

-   If you, for some reason, extend a CDS projection view with EXTEND VIEW, the [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") is omitted (as CDS projection views don't have any DDIC artefact), and entity annotations referring to the CDS-managed DDIC view are ignored.

Example

The following CDS view extension

@AbapCatalog.sqlViewAppendName: 'DEMO\_CDS\_EXTENS'
extend view demo\_cds\_original\_view with demo\_cds\_view\_extension  
  {
    spfli.distance,
    spfli.distid as unit
  };

adds two view fields to the existing CDS view

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
    }; .

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

extends the existing CDS view

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
      carrid; .

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

extends the existing CDS view

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
    }; .

The original view has two UNION clauses represented using corresponding UNION additions in the definition of the CDS view extension. Two elements with matching types are added to the three SELECT lists of the original view.

Continue
[CDS DDL - EXTEND VIEW, extension\_annot](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\))



**📖 Source**: [abencds_extend_view.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_extend_view.htm)

### abencds_extend_view_entity.htm

> **📖 Official SAP Documentation**: [abencds_extend_view_entity.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_extend_view_entity.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - View extension](javascript:call_link\('abencds_view_extension.htm'\)) →  [CDS DDL - EXTEND VIEW](javascript:call_link\('abencds_f1_extend_view.htm'\)) → 

CDS DDL - EXTEND VIEW ENTITY

Work in progress



**📖 Source**: [abencds_extend_view_entity.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_extend_view_entity.htm)

### abencds_f1_extend_view.htm

> **📖 Official SAP Documentation**: [abencds_f1_extend_view.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_extend_view.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencds_f1_extend_view.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_extend_view.htm)


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - View extension](javascript:call_link\('abencds_view_extension.htm'\)) → 

CDS DDL - EXTEND VIEW

The statement EXTEND VIEW in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") has two variants:

-   [EXTEND VIEW ddic\_based\_view](javascript:call_link\('abencds_extend_view.htm'\))

This variant is used to define a [CDS view extension](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry") that is also associated with a [DDIC append view](javascript:call_link\('abenddic_append_view_glosry.htm'\) "Glossary Entry") in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry").

-   [EXTEND VIEW ENTITY](javascript:call_link\('abencds_extend_view_entity.htm'\))

This variant is used to define a [CDS view extension](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry") that no longer needs a dictionary object.

Continue
[CDS DDL - EXTEND VIEW ddic\_based\_view](javascript:call_link\('abencds_extend_view.htm'\))
[CDS DDL - EXTEND VIEW ENTITY](javascript:call_link\('abencds_extend_view_entity.htm'\))
