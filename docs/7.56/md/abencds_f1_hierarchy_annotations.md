  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - Hierarchies](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_hierarchies.htm) →  [CDS DDL - DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_hierarchy.htm) → 

CDS DDL - DEFINE HIERARCHY, hierarchy\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax.htm) as a hierarchy annotation in front of the statement [DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_hierarchy.htm) in the definition of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_hierarchy_glosry.htm "Glossary Entry"). The character @ must be placed directly in front of the name annotation of the annotation. The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_anno_annos.htm) should be specified here using the value #HIERARCHY.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime framework for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime framework but by other SAP frameworks instead.

-   [AbapCatalog Annotations](#@@ITOC@@ABENCDS_F1_HIERARCHY_ANNOTATIONS_1)
-   [AccessControl Annotations](#@@ITOC@@ABENCDS_F1_HIERARCHY_ANNOTATIONS_2)

The first column of the table shows the (possibly structured) name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the default value which is used if the annotation is not used at all. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

Hint

Alongside the function annotations shown here, the globally valid [entity annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_entity_annotations.htm) can also be specified for a CDS hierarchy.

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

The annotation AbapCatalog.dataMaintenance defines whether the CDS hierarchy can be displayed or maintained by certain tools such as Data Preview in [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadt_glosry.htm "Glossary Entry"). The annotation is evaluated by these tools. Restrictions imposed by that annotation are user-independent and they are evaluated before accessing the data. Additional restrictions imposed by [CDS roles](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_role_glosry.htm "Glossary Entry") are evaluated during the actual data access, if this is done by ABAP SQL.

AccessControl Annotations

Defines [access control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_access_control_glosry.htm "Glossary Entry") for the CDS hierarchy.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

AccessControl.authorizationCheck

Defines implicit [access control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_access_control_glosry.htm "Glossary Entry") when ABAP SQL is used to access the CDS hierarchy

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