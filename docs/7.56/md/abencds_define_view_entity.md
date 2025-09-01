  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_views.htm) → 

CDS DDL - DEFINE VIEW ENTITY

Syntax

*\[*[@entity\_annot1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_entity_annotations.htm)*\]*
*\[*[@entity\_annot2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_entity_annotations.htm)*\]*
...
*\[*[@view\_entity\_annot1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity_anno.htm)*\]*
*\[*[@view\_entity\_annot2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity_anno.htm)*\]*
...
*\[*DEFINE*\]* *\[*[ROOT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_root_view_v2.htm)*\]* VIEW ENTITY view\_entity
        *\[*[parameter\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_parameter_list_v2.htm)*\]*
         AS [select\_statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm) *\[*;*\]*...

Additions:

1\. ... [ROOT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_root_view_v2.htm) ...

Effect

Defines a [CDS view entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry") in the [CDS DDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddl_glosry.htm "Glossary Entry"). A CDS view entity is implemented using a [select\_statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm).

The name of the CDS view entity is defined after the DEFINE VIEW ENTITY statement. The usual rules for ABAP Dictionary [views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_views.htm) apply to this name and it is not case-sensitive (it is transformed internally into uppercase letters). It can have a maximum of 30 characters and is in the namespace of all [global types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP. The name of the DDL source and of the CDS entity must be identical.

The CDS view entity can be enhanced with [entity annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_entity_annotations.htm) (these are annotations that can be used in all CDS entities) or with [view entity annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity_anno.htm) (these are annotations that are only available for CDS view entities). All annotations are optional and a view entity can also be created without any annotation.

[parameter\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_parameter_list_v2.htm) can be used to assign input parameters to the view. These input parameters can be specified in operand positions of the view and can be assigned actual parameters when the view is used.

The addition [ROOT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_root_view_v2.htm) is optional. It defines the CDS view entity as root entity of a [RAP business object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_glosry.htm "Glossary Entry") in the [ABAP RESTful Application Programming Model](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarap_glosry.htm "Glossary Entry"). For further details, see topic [CDS View Entity, Root](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_root_view_v2.htm).

Hints

-   [ABAP annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity_anno.htm) can be used to assign further technical and semantic attributes to a view for evaluation by the ABAP runtime framework. [Framework-specific annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfrmwrk_annotation_glosry.htm "Glossary Entry") can be used to assign further semantic attributes to a view that are evaluated by other SAP frameworks.
-   If a [CDS role](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_role_glosry.htm "Glossary Entry") is defined for a CDS entity using the CDS-DCL statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_role.htm), implicit [access control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_access_control_glosry.htm "Glossary Entry") applies by default when the CDS entity is accessed using ABAP SQL. CDS access control can be switched off using the value #NOT\_ALLOWED for the annotation [@AccessControl.authorizationCheck](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity_anno.htm) and using the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_data_source.htm) in the [FROM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfrom_clause.htm) clause of an ABAP SQL query.
-   If a [CDS entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry") is accessed using an ABAP SQL [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) statement and the name view\_entity, the syntax check is performed in [strict mode](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_740_sp05.htm), which handles the statement more strictly than the regular syntax check.
-   Every CDS view entity has its own [DDL source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddl_source_code_glosry.htm "Glossary Entry"). The DDL source code of a CDS view entity is edited in a different editor than the [DDLA source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddla_source_code_glosry.htm "Glossary Entry") of an [annotation definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"), the [DDLX source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddlx_source_code_glosry.htm "Glossary Entry") of a [CDS metadata extension](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"), and the [DCL source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendcl_source_code_glosry.htm "Glossary Entry") of a [CDS role](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_role_glosry.htm "Glossary Entry"). The [ADT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadt_glosry.htm "Glossary Entry") documentation describes how the different types of source code are created. CDS source code can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_workbench_glosry.htm "Glossary Entry").
-   After a CDS view entity has been transported, its name can no longer be changed.
-   The programming of CDS views using the DDL of the Core Data Services is one of the tasks included in the implementation of data models and is not usually the responsibility of regular ABAP application programmers. Once created, CDS views are used in ABAP programs using ABAP SQL read statements and must be stable enough to allow this.

Example

The CDS view entity DEMO\_SALES\_CDS\_BUPA\_VE contains information about a business partner. It selects data from the database table DEMO\_SALES\_BUPA.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'SDDL: Interface (BO) View for BuPa'
define root view entity DEMO\_SALES\_CDS\_BUPA\_VE
  as select from
    demo\_sales\_bupa as bupa
    {
      key id,
          given\_name,
          middle\_name,
          family\_name
    }

Continue
[CDS DDL - CDS View Entity, view\_entity\_annot](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity_anno.htm)
[CDS DDL - CDS View Entity, ROOT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_root_view_v2.htm)
[CDS DDL - CDS View Entity, parameter\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_parameter_list_v2.htm)
[CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm)