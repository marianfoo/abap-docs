  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entity Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_extension.htm) →  [CDS DDL - EXTEND VIEW ddic\_based](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_extend_view.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20EXTEND%20VIEW%2C%20extension_annot%2C%20ABENCDS_F1_EXTEND_VIEW_ANNOTATIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

CDS DDL - EXTEND VIEW, extension\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax.htm) as an extension annotation in the definition of a [CDS view extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_extend_glosry.htm "Glossary Entry") before the statement [EXTEND VIEW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_extend_view.htm). The character @ must be placed in front of the name annotation of the annotation. The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_anno_annos.htm) should be specified here using the value #EXTEND\_VIEW.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime framework for every CDS object. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime framework but by other SAP frameworks instead.

The first column of the table shows the (possibly structured) name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the default value which is used if the annotation is not used at all. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

AbapCatalog Annotations   

Technical settings of a CDS view extension.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

AbapCatalog.sqlViewAppendName

Name of the DDIC append view of the CDS view extension

Character string with a maximum of 16 characters consisting of letters, numbers and underscores and that starts with a [namespace prefix](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenname_space_prefix_glosry.htm "Glossary Entry").

\-

\-

Hints

-   Each definition of a CDS view extension must contain the ABAP annotation AbapCatalog.sqlViewAppendName that defines the name of the DDIC append view in ABAP Dictionary.
-   The name given to the DDIC append view can no longer be changed after the CDS view extension is transported into a follow-on system.