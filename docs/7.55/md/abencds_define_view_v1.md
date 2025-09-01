---
title: "Syntax"
description: |
  @entity_annot1(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_entity_annotations.htm) @entity_annot2(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_entity_annotations.htm) ... @AbapCatalog.sqlViewName: 'CDS_DB_VIEW'(https://help
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_v1.htm"
abapFile: "abencds_define_view_v1.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abencds", "define", "view"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_views.htm) → 

CDS DDL - DEFINE VIEW ddic\_based

Syntax

*\[*[@entity\_annot1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_entity_annotations.htm)*\]*
*\[*[@entity\_annot2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_entity_annotations.htm)*\]*
...
[@AbapCatalog.sqlViewName: 'CDS\_DB\_VIEW'](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_anno_v1.htm)
*\[*[@view\_annot1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_anno_v1.htm)*\]*
*\[* [@view\_annot2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_anno_v1.htm)*\]*
...
*\[*DEFINE*\]* *\[* [ROOT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_root_view_v1.htm)*\]* VIEW ddic\_based\_view
        *\[*[name\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_name_list_v1.htm)*\]*
        *\[*[parameter\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_list_v1.htm)*\]*
         AS [select\_statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm) *\[*;*\]*

Effect

Defines a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_view_glosry.htm "Glossary Entry") in the [CDS DDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddl_glosry.htm "Glossary Entry"). A CDS view is implemented using a query [select\_statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm). The [annotation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotation_glosry.htm "Glossary Entry") [AbapCatalog.sqlViewName](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_anno_v1.htm) must be specified before the view itself is defined using DEFINE VIEW. Further optional annotations [entity\_annot1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_entity_annotations.htm), ..., [view\_annot1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_anno_v1.htm), ... can also be specified.

Two repository objects are created for a CDS view (of the [ABAP CDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_cds_glosry.htm "Glossary Entry")) that is defined using DEFINE VIEW. A name must be specified for each of the two objects:

-   The name CDS\_DB\_VIEW of the [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") must be specified in quotation marks after the [annotation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_anno_v1.htm) @AbapCatalog.sqlViewName. This view is the technical foundation of the CDS view in ABAP Dictionary. The usual rules for ABAP Dictionary [views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_views.htm) apply to this name and it is not case-sensitive (it is transformed internally into uppercase letters). The associated SQL view is created under this name on the database. The name given to the DDIC database view can no longer be changed after the CDS view is transported into a follow-on system.

-   The name ddic\_based\_view of the [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") is defined after the keywords DEFINE VIEW (DEFINE is optional). No quotation marks need to be specified. This name follows the rules of the CDS-managed DDIC view, but can have 30 characters. The CDS entity represents all properties of the CDS view.

Both names are in the namespace of all [global types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP. and must each be unique. The name ddic\_based\_view of the CDS entity can be used in other CDS DDL statements or in ABAP programs to access the CDS view.

The information specified in [name\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_name_list_v1.htm) can be used to define the names of the elements of the view in a name list. [parameter\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_list_v1.htm) can be used to assign input parameters to the view. These input parameters can be specified in operand positions of the view and can be assigned actual parameters when the view is used.

Hints

-   The [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of a CDS view defined using DEFINE VIEW can be displayed by entering the name CDS\_DB\_VIEW in the ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_tools.htm) in ABAP Workbench. However the view cannot be maintained here. Furthermore, this display does not provide all information.

-   The [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") CDS\_DB\_VIEW can also be accessed directly in the CDS DDL and in ABAP. It is strongly recommended, however, that only the [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") is used, since only this entity covers all properties of the CDS view. This makes the use of the CDS-managed DDIC view in ABAP SQL [obsolete](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_cds_obsolete.htm).

-   [ABAP annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_anno_v1.htm) can be used to assign further technical and semantic attributes to a view for evaluation by the ABAP runtime environment. [Framework-specific annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfrmwrk_annotation_glosry.htm "Glossary Entry") can be used to give the element specific semantic attributes for other SAP frameworks.

-   If a [CDS role](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_role_glosry.htm "Glossary Entry") is defined for a CDS entity using the CDS-DCL statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_role.htm), implicit [access control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control_glosry.htm "Glossary Entry") applies by default when the CDS entity is accessed using ABAP SQL. CDS access control can be switched off using the value #NOT\_ALLOWED for the annotation [@AccessControl.authorizationCheck](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_anno_v1.htm) and using the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) in the [FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm) clause of an ABAP SQL query.

-   If a [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") is accessed using an ABAP SQL [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) statement and the name ddic\_based\_view, the syntax check is performed in [strict mode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_740_sp05.htm), which handles the statement more strictly than the normal syntax check.

-   Every CDS view has its own [DDL source code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddl_source_code_glosry.htm "Glossary Entry"). The DDL source code of a CDS view is edited in a different editor than the [DDLA source code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddla_source_code_glosry.htm "Glossary Entry") of an [annotation definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"), the [DDLX source code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddlx_source_code_glosry.htm "Glossary Entry") of a [CDS metadata extension](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"), and the [DCL source code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendcl_source_code_glosry.htm "Glossary Entry") of a [CDS role](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_role_glosry.htm "Glossary Entry"). The [ADT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadt_glosry.htm "Glossary Entry") documentation describes how the different types of source code are created. CDS source code can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_workbench_glosry.htm "Glossary Entry").

-   The DDL source code of a CDS view does not need to have the same name as the CDS entity, but it is advisable to use this name.

-   After a piece of DDL source code is transported, the combination of its name and the name of the CDS view defined in it and its CDS-managed DDIC view is defined and can no longer be modified by being renamed.

-   The programming of CDS views using the DDL of the Core Data Services is one of the tasks included in the implementation of data models and is not usually the responsibility of regular ABAP application programmers. Once created, CDS views are used in ABAP programs using ABAP SQL read statements and must be stable enough to allow this.

Example

The following CDS view works in exactly the same way as the [DDIC projection view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_projection_views.htm) DEMO\_SPFLI in ABAP Dictionary. The program DEMO\_CDS\_PROJECTION uses SELECT to access the view. Unlike when the dictionary view DEMO\_SPFLI is accessed, no client column is returned when the CDS entity DEMO\_CDS\_SPFLI is accessed. The CDS-managed DDIC view DEMO\_CDS\_PRJCTN returns the client column too.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PRJCTN'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_spfli
  as select from
    spfli
    {
      key spfli.carrid,
      key spfli.connid,
          spfli.cityfrom,
          spfli.cityto
    }

Continue
[CDS DDL - DDIC-based View, view\_annot](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_anno_v1.htm)
[CDS DDL - DDIC-based View, ROOT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_root_view_v1.htm)
[CDS DDL - DDIC-based View, name\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_name_list_v1.htm)
[CDS DDL - DDIC-based View, parameter\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_list_v1.htm)
[CDS DDL - DDIC-based View, SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm)