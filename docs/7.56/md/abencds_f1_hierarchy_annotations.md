  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Hierarchies](javascript:call_link\('abencds_hierarchies.htm'\)) →  [CDS DDL - DEFINE HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\)) → 

CDS DDL - DEFINE HIERARCHY, hierarchy\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a hierarchy annotation in front of the statement [DEFINE HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\)) in the definition of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry"). The character @ must be placed directly in front of the name annotation of the annotation. The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #HIERARCHY.

The following tables show the possible [ABAP annotations](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime framework for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime framework but by other SAP frameworks instead.

-   [AbapCatalog Annotations](#abencds-f1-hierarchy-annotations-1-------accesscontrol-annotations---@ITOC@@ABENCDS_F1_HIERARCHY_ANNOTATIONS_2)

The first column of the table shows the (possibly structured) name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the default value which is used if the annotation is not used at all. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

Hint

Alongside the function annotations shown here, the globally valid [entity annotations](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) can also be specified for a CDS hierarchy.

AbapCatalog Annotations

Technical settings of a CDS hierarchy.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

AbapCatalog.dataMaintenance

Can be used to restrict data preview for a CDS hierarchy

#RESTRICTED:
Display allowed with restrictions
#DISPLAY\_ONLY:
Display only. Data preview is allowed
#NOT\_ALLOWED:
Display not allowed

#RESTRICTED

\-

Hint

The annotation AbapCatalog.dataMaintenance defines whether the CDS hierarchy can be displayed or maintained by certain tools such as Data Preview in [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). The annotation is evaluated by these tools. Restrictions imposed by that annotation are user-independent and they are evaluated before accessing the data. Additional restrictions imposed by [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") are evaluated during the actual data access, if this is done by ABAP SQL.

AccessControl Annotations

Defines [access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") for the CDS hierarchy.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

AccessControl.authorizationCheck

Defines implicit [access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") when ABAP SQL is used to access the CDS hierarchy

#CHECK:
not yet implemented
#NOT\_REQUIRED:
not yet implemented
#NOT\_ALLOWED:
not yet implemented
#PRIVILEGED\_ONLY:
not yet implemented

#CHECK

#CHECK