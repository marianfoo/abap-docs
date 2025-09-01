  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations.htm) →  [ABAP CDS - Specifying Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_usage.htm) →  [ABAP CDS Metadata Extensions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_meta_data_extensions.htm) →  [ABAP CDS - DDL for Metadata Extensions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddlx_syntax.htm) →  [ABAP CDS - ANNOTATE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view.htm) → 

ABAP CDS - ANNOTATE VIEW, parameter\_list

Syntax

... PARAMETERS
      [@parameter\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)
     *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)
      ...*\]*
      pname1*\[*,
      [@parameter\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)
     *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm)
      ...*\]*
      pname2,
      ...*\]*

Effect

Specifies annotations for the parameters of the [parameter list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") in a [CDS metadata extension](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") introduced with [ANNOTATE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view.htm). A comma-separated list pname1, pname2, ... prefixed with annotations @parameter\_annot can be specified after PARAMETERS. There must not be comma after the last element of the list.

Each parameter pname that is specified after PARAMETERS should appear in the parameter list of the view extended with ANNOTATE VIEW, otherwise the syntax check generates a warning. All parameters defined there can be used exactly once. Allowed [SAP annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_sap.htm) @parameter\_annot can be listed before these as [parameter annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm). It is not possible here to specify annotations after the name of a parameter pname with the syntax @<parameter\_annot.

At least one parameter pname of the extended view must be listed after PARAMETERS. At least one parameter annotation [@parameter\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter_annotations.htm) must be specified before each parameter of the list. If this is not the case, PARAMETERS cannot be used.

Notes

-   A parameter must be specified directly with its name. It cannot be specified with the syntax [:pname](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter.htm) or [$parameters.pname](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter.htm), which is used within the view for its addressing.

-   Parameter annotations can be specified here only if this is allowed in their [annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") using the annotation [@MetadataExtension.usageAllowed:true](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm).

-   A parameter that is not in the parameter list of the view is handled like a normal parameter in the [evaluation of annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_analysis.htm) with the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.

-   The program ABAP\_DOCU\_MDE\_ANNOS displays all annotations that can be specified in metadata extensions.