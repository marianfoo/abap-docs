  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations.htm) →  [ABAP CDS - Specifying Annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_anno_usage.htm) →  [ABAP CDS - Metadata Extensions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_meta_data_extensions.htm) →  [ABAP CDS - DDL for Metadata Extensions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddlx_syntax.htm) →  [CDS DDL - ANNOTATE ENTITY, VIEW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_annotate_view.htm) → 

CDS DDL - ANNOTATE, parameter\_list

Syntax

... PARAMETERS
      [@parameter\_annot1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_parameter_annotations.htm)
     *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_parameter_annotations.htm)
      ...*\]*
      pname1*\[*,
      [@parameter\_annot1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_parameter_annotations.htm)
     *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_parameter_annotations.htm)
      ...*\]*
      pname2,
      ...*\]*

Effect

Specifies annotations for the following parameters:

-   [Parameter list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_entity_parameter_list.htm) of an [CDS abstract entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry")
-   [Parameter list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_parameter_list_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry")
-   [Parameter list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_parameter_list_v1.htm) of a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry")

The parameters in a [CDS metadata extension](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") introduced using [ANNOTATE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_annotate_view.htm). A comma-separated list pname1, pname2, ... prefixed with annotations @parameter\_annot can be specified after PARAMETERS. There must not be comma after the last element of the list.

Each parameter pname specified after PARAMETERS should appear in the parameter list of the entity extended using ANNOTATE. If not, the syntax check produces a warning. All parameters defined there can be used exactly once. Valid [SAP annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_sap.htm) @parameter\_annot can be specified before these as [parameter annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_parameter_annotations.htm). It is not possible here to specify annotations after the name of a parameter pname with the syntax @<parameter\_annot.

At least one parameter pname of the extended entity must be specified after PARAMETERS. At least one parameter annotation [@parameter\_annot](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_parameter_annotations.htm) must be specified before each parameter of the list. If this is not the case, PARAMETERS cannot be used.

Hints

-   A parameter must be specified directly with its name. It cannot be specified using the syntax :pname or $parameters.pname, which is used within the entity for its addressing (parameter passing in CDS view entities is described [here](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_parameters_v2.htm), parameter passing in CDS DDIC-based views is described [here](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_parameters_v1.htm)).
-   Parameter annotations can be specified here only if this is allowed in their [annotation definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") using the annotation [@MetadataExtension.usageAllowed:true](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_anno_annos.htm).
-   A parameter that is not in the parameter list of the entity is handled like a regular parameter in the [evaluation of annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_analysis.htm) with the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.
-   The program ABAP\_DOCU\_MDE\_ANNOS shows all annotations that can be specified in metadata extensions.