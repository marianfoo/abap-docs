  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations.htm) →  [ABAP CDS - Specifying Annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_usage.htm) →  [ABAP CDS Metadata Extensions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_meta_data_extensions.htm) →  [ABAP CDS - DDL for Metadata Extensions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddlx_syntax.htm) → 

ABAP CDS - ANNOTATE VIEW

Syntax

[@Metadata.layer: #CORE*|*#LOCALIZATION*|*#INDUSTRY*|*#PARTNER*|*#CUSTOMER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_metadata_ext_annos.htm)
*\[*[@view\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm)*\]*
*\[*[@view\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm)*\]*
...
ANNOTATE VIEW cds\_entity WITH
  *\[*VARIANT variant*\]*
  *\[*[parameter\_list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view_para_list.htm)*\]*
  { *\[*[element\_list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view_sele_list.htm)*\]* }*\[*;*\]*

Addition:

[... VARIANT variant](#!ABAP_ONE_ADD@1@)

Effect

Defines a [CDS metadata extension](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") in (MDE for short) for a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") in separate [DDLX short code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddlx_source_code_glosry.htm "Glossary Entry"). The CDS metadata extension add metadata to the CDS view in the form of [CDS annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_glosry.htm "Glossary Entry"). The view in question must exist, be specified using the name of its [CDS entity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry") cds\_entity, and contain the annotation [Metadata.allowExtensions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm) with the default value true in its source code. There can be multiple CDS metadata extensions for one CDS entity.

The annotation [@Metadata.layer](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_metadata_ext_annos.htm) must be specified with one of the displayed enumeration symbols in front of the statement ANNOTATE VIEW to define the layer of the metadata extension. In the [analysis of metadata extensions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_meta_data_extension_eval.htm), the layer determines the priority of the metadata if there are multiple metadata extensions for the same CDS entity that is associated with the same [CDS variant](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_variant_glosry.htm "Glossary Entry") or not associated with any variants. The enumeration symbols are displayed with the lowest priority ones on the left and the highest priority on the right. #CORE therefore has the lowest, and #CUSTOMER the highest priority. If multiple CDS metadata extensions with none or the same CDS variant are assigned to the same layer, a syntax check warning is issued for annotations specified more than one, and the system uses the annotation of the first metadata extension found.

The annotations added to the extended view are defined as follows. A metadata extension must contain at least one of these.

-   Any annotations @view\_annot1, @view\_annot2, ... specified in front of the statement ANNOTATE VIEW must be in the [scope](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_scopes.htm) of the [view annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm) of the permitted [SAP annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_sap.htm). They are added to the view annotations of the extended view.

-   [parameter\_list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view_para_list.htm) is used to specify annotations for the parameters of the extended view.

-   [element\_list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view_sele_list.htm) is used specify annotations for the elements of SELECT list of the extended view.

In metadata extensions, only those annotations can be specified for which this is permitted in their [annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") using the annotation [@MetadataExtension.usageAllowed:true](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm). In the CDS metadata extension, an annotation can be used in the same scope defined using [@Scope](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm) as in a data definition. All other annotations produce syntax errors.

These annotation of a metadata extensions are taken into account during the [evaluation of annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_analysis.htm) with the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE except for GET\_DIRECT\_ANNOS\_, in accordance with the layers defined by the annotation @Metadata.layer and in accordance with the used [CDS variants](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_variant_glosry.htm "Glossary Entry"). Here the annotations of a metadata extension always have a higher priority than the annotations specified in the source code of the CDS entity. These are only taken into account if they are not overridden by a corresponding annotation of a metadata extension. For the exact description of the evaluation, see section [evaluation of metadata extensions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_meta_data_extension_eval.htm).

Notes

-   Unlike the specification of annotations in the source code of the extended CDS entity, it is not possible to have any arbitrary annotations in metadata extensions; it is only possible to have [SAP annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_sap.htm). The syntax check for a metadata extension checks the validity of its specification with respect to the [annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"):

-   the name of an annotation

-   the validity of the [annotation values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_value_glosry.htm "Glossary Entry"), the type, and (for enumerations) the enumeration symbol

-   the [scope](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_scopes.htm)

-   whether any [annotation arrays](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_array_glosry.htm "Glossary Entry") are specified correctly (they must only be specified using square brackets). The format @annot: value is not possible. @annot: \[value\] must be used instead. The array can contain only similar elements (in accordance with its definition).

-   The annotations (of a CDS entity) specified in metadata extensions does not have any effect on the activation or the behavior at runtime. They are only respected by the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.

-   The program ABAP\_DOCU\_MDE\_ANNOS shows all annotations that can be specified in metadata extensions.

Example

The following metadata extension named DEMO\_CDS\_METADATA\_EXTENSION adds annotations with original language "German" to the CDS view DEMO\_CDS\_PARAMETERS from the executable example for [CDS views with parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselect_cds_para_abexa.htm). The program DEMO\_CDS\_META\_DATA\_EXTENSIONS reads the annotations of the view with the methods of the classes CL\_DD\_DDL\_ANNOTATION\_SERVICE and CL\_DD\_DDL\_ANALYZE. The method GET\_ANNOS of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE covers both the annotations specified in the metadata extension and the translations into the current text environment language. The method GET\_ANNOTATIONS of the class CL\_DD\_DDL\_ANALYZE only evaluates the specifications in the view DEMO\_CDS\_PARAMETERS.

@Metadata.layer:#INDUSTRY
              
@EndUserText.label: 'Demo für View mit Parametern'
annotate view demo\_cds\_parameters with
  parameters
    @EndUserText.label: 'Untere Entfernungsgrenze'
    p\_distance\_l,
    @EndUserText.label: 'Obere Entfernungsgrenze'
    p\_distance\_u,
    @EndUserText.label: 'Einheit der Entfernung'
    p\_unit
{
  @EndUserText.label: 'Fluggesellschaft'
  carrid;
  @EndUserText.label: 'Flugverbindung'
  connid;
  @EndUserText.label: 'Abflug in Stadt'
  cityfrom;
  @EndUserText.label: 'Ankunft in Stadt'
  cityto;
  @EndUserText.label: 'Flugstrecke'
  distance;
  @EndUserText.label: 'Einheit der Flugstrecke'
  distid;
};

Addition

... VARIANT variant

Effect

Joints the metadata extension with a [CDS variant](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_variant_glosry.htm "Glossary Entry"). An existing CDS variant must be specified for variant. This entry is not case sensitive. If there are multiple metadata extensions for the same CDS entity contained in the layer defined with annotation @Metadata.layer, these extensions should be assigned to CDS variants, because otherwise a warning is raised by the syntax check for duplicate annotations.

In [evaluations of annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_analysis.htm) using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE, the CDS variant can be specified to The class collects the annotations that it returned, in accordance with the layers and variants in line with the hierarchy described under the [evaluation of metadata extensions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_meta_data_extension_eval.htm).

Notes

-   [CDS variants](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_variant_glosry.htm "Glossary Entry") are created in the ADT and this creation process is documented in the [ADT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadt_glosry.htm "Glossary Entry").

-   From a technical perspective, the annotations specified in metadata extensions for a CDS entity are similar to the annotations specified in the DDL source code, separated by layers and variants in separate system tables and made accessible using an API. Annotations with [translatable texts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_analysis.htm) are also stored here in tables, which are connected to translation. The class CL\_DD\_DDL\_ANNOTATION\_SERVICE evaluates the system tables.

Caution

CDS variants are not currently released for general use. It is not possible to define standalone CDS variants and the use of CDS variants in metadata extensions produces a syntax check warning.

Executable Example

[CDS Metadata Extensions with CDS Variants](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotate_view_abexa.htm)

Continue
[ABAP CDS - ANNOTATE VIEW, metadata\_extension\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_metadata_ext_annos.htm)
[ABAP CDS - ANNOTATE VIEW, parameter\_list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view_para_list.htm)
[ABAP CDS - ANNOTATE VIEW, element\_list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view_sele_list.htm)