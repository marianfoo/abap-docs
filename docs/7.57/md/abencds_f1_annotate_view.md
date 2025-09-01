---
title: "CDS DDL - ANNOTATE ENTITY, VIEW"
description: |
  Syntax Forms ANNOTATE ENTITY 1. @Metadata.layer: #CORE#LOCALIZATION#INDUSTRY#PARTNER#CUSTOMER(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_metadata_ext_annos.htm) @entity_annot1(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entit
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_annotate_view.htm"
abapFile: "abencds_f1_annotate_view.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "abencds", "annotate", "view"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations.htm) →  [ABAP CDS - Specifying Annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_anno_usage.htm) →  [ABAP CDS - Metadata Extensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_meta_data_extensions.htm) →  [ABAP CDS - DDL for Metadata Extensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddlx_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - ANNOTATE ENTITY, VIEW, ABENCDS_F1_ANNOTATE_VIEW, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - ANNOTATE ENTITY, VIEW

Syntax Forms

ANNOTATE ENTITY

1\. [@Metadata.layer: #CORE*|*#LOCALIZATION*|*#INDUSTRY*|*#PARTNER*|*#CUSTOMER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_metadata_ext_annos.htm)
   *\[*[@entity\_annot1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm)*\]*
   *\[*[@entity\_annot2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm)*\]*
   ...
   ANNOTATE ENTITY cds\_entity WITH
     *\[*VARIANT variant*\]*
     *\[*[parameter\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_annotate_view_para_list.htm)*\]*
     { *\[*[element\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_annotate_view_sele_list.htm)*\]* }*\[*;*\]*
ANNOTATE VIEW

2\. [@Metadata.layer: #CORE*|*#LOCALIZATION*|*#INDUSTRY*|*#PARTNER*|*#CUSTOMER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_metadata_ext_annos.htm)
   *\[*[@entity\_annot1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm)*\]*
   *\[*[@entity\_annot2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm)*\]*
   ...
   *\[* [@view\_entity\_annot1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity_anno.htm) | [@proj\_view\_annot1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_annotations.htm) | [@\_view\_annot1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_anno_v1.htm)*\]*
   *\[*[@view\_entity\_annot2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity_anno.htm) | [@proj\_view\_annot2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_annotations.htm) | [@\_view\_annot2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_anno_v1.htm)*\]*
   ...
   ANNOTATE VIEW cds\_view WITH
     *\[*VARIANT variant*\]*
     *\[*[parameter\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_annotate_view_para_list.htm)*\]*
     { *\[*[element\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_annotate_view_sele_list.htm)*\]* }*\[*;*\]*

Addition:

[... VARIANT variant](#!ABAP_ONE_ADD@1@)

Effect

Defines a [CDS metadata extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") (MDE for short) in dedicated [DDLX source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddlx_source_code_glosry.htm "Glossary Entry").

-   ANNOTATE ENTITY
    
    Defines an MDE for any [CDS entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry") except [CDS table functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_table_function_glosry.htm "Glossary Entry").
    
-   ANNOTATE VIEW
    
    Defines an MDE specifically for a [CDS view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_glosry.htm "Glossary Entry").
    

The CDS metadata extension adds metadata to a CDS entity as [CDS annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_glosry.htm "Glossary Entry"). The entity in question must exist, be specified using the name of its [CDS entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry") cds\_entity or cds\_view, and contain the annotationMetadata.allowExtensions with the default value true in its source code. A CDS entity can have more than one CDS metadata extension.

The annotation [@Metadata.layer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_metadata_ext_annos.htm) must be specified with one of the enumeration symbols shown in the example in front of the statement ANNOTATE to define the layer of the metadata extension. In the [analysis of metadata extensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_meta_data_extension_eval.htm), the layer determines the priority of the metadata if there are multiple metadata extensions for the same CDS entity that is linked with the same [CDS variant](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_variant_glosry.htm "Glossary Entry") or not linked with any variants. The enumeration symbols are listed with the lowest priority ones on the left and the highest priority on the right. #CORE therefore has the lowest, and #CUSTOMER the highest priority. If multiple CDS metadata extensions with none or the same CDS variant are assigned to the same layer, a syntax check warning is issued for annotations specified more than one, and the system uses the annotation of the first metadata extension found.

The annotations added to the extended entity are defined as follows. A metadata extension must contain at least one of these.

-   Annotations in front of the statement ANNOTATE
    -   Only entity annotations @entity\_annot can be specified in front of the statement ANNOTATE ENTITY. Valid [SAP annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_sap.htm) must be in the [scope](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_scopes.htm) of the [entity annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm). They are added to the entity annotations of the extended entity.
    -   Entity annotations and view annotations @view\_annot can be specified in front of the statement ANNOTATE VIEW. Valid [SAP annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_sap.htm) must be in the [scope](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_scopes.htm) of the [view annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity_anno.htm). They are added to the view annotations of the extended view.
-   [parameter\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_annotate_view_para_list.htm) is used to specify annotations for the parameters of the extended entity.
-   [element\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_annotate_view_sele_list.htm) is used specify annotations for the elements of SELECT list of the extended entity.

In metadata extensions, only those annotations can be specified for which this is allowed in their [annotation definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") using the annotation [@MetadataExtension.usageAllowed:true](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm). In the CDS metadata extension, an annotation can be used in the same scope defined using [@Scope](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm) as in a data definition. All other annotations produce syntax errors.

These annotations of a metadata extension are respected in the [evaluation of annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_analysis.htm) with the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE except for GET\_DIRECT\_ANNOS\_, in accordance with the layers defined by the annotation @Metadata.layer and in accordance with the used [CDS variants](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_variant_glosry.htm "Glossary Entry"). Here the annotations of a metadata extension always have a higher priority than the annotations specified in the source code of the CDS entity. These are only respected if they are not overridden by a corresponding annotation of a metadata extension. For the exact description of the evaluation, see section [evaluation of metadata extensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_meta_data_extension_eval.htm).

Hints

-   Unlike the specification of annotations in the source code of the extended CDS entity, it is not possible to have any arbitrary annotations in metadata extensions; it is only possible to have [SAP annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_sap.htm). The syntax check for a metadata extension checks the validity of its specification with respect to the [annotation definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"):
    -   the name of an annotation
    -   the validity of the [annotation values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_value_glosry.htm "Glossary Entry"), the type, and (for enumerations) the enumeration symbol
    -   the [scope](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_scopes.htm)
    -   whether any [annotation arrays](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_array_glosry.htm "Glossary Entry") are specified correctly (they must only be specified using square brackets). The format @annot: value is not possible. @annot: \[value\] must be used instead. The array can contain only similar elements (in accordance with its definition).
-   The annotations (of a CDS entity) specified in metadata extensions does not have any effect on the activation or the behavior at runtime. They are only respected by the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.
-   The program ABAP\_DOCU\_MDE\_ANNOS shows all annotations that can be specified in metadata extensions.

Example

The following metadata extension named DEMO\_CDS\_METADATA\_EXTENSION adds annotations with original language "German" to the CDS view entity DEMO\_CDS\_PARAMETERS from the executable example for [CDS view entities with parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_cds_para_abexa.htm). The program DEMO\_CDS\_META\_DATA\_EXTENSIONS reads the annotations of the view with the methods of the classes CL\_DD\_DDL\_ANNOTATION\_SERVICE and CL\_DD\_DDL\_ANALYZE. The method GET\_ANNOS of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE covers both the annotations specified in the metadata extension and the translations into the current text environment language. The method GET\_ANNOTATIONS of the class CL\_DD\_DDL\_ANALYZE only evaluates the specifications in the view DEMO\_CDS\_PARAMETERS.

@Metadata.layer:#INDUSTRY
              
@EndUserText.label: 'Demo for View with Parameters'
annotate view demo\_cds\_parameters with
  parameters
    @EndUserText.label: 'Lower limit for distance'
    p\_distance\_l,
    @EndUserText.label: 'Upper limit for distance'
    p\_distance\_u,
    @EndUserText.label: 'Unit of distance'
    p\_unit
{
  @EndUserText.label: 'Airline carrier'
  carrid;
  @EndUserText.label: 'Flight connection'
  connid;
  @EndUserText.label: 'Departure from city'
  cityfrom;
  @EndUserText.label: 'Arrival in city'
  cityto;
  @EndUserText.label: 'Flight distance'
  distance;
  @EndUserText.label: 'Unit of flight distance'
  distid;
};

Example

The following metadata extension DEMO\_CDS\_MDE\_FOR\_ABSTR\_ENT adds entity annotations and element annotations to the [CDS abstract entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") DEMO\_CDS\_ABSTRACT\_ENTITY\_ELEM from the example for its [element annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_absent_list_annotation.htm).

@Metadata.layer: #CORE
@EndUserText.label : 'Label from MDE'
annotate entity demo\_cds\_abstract\_entity\_elem with
  {
    @EndUserText.quickInfo: 'Quickinfo from MDE'
    col2;
  }

Addition   

... VARIANT variant

Effect

Links the metadata extension with a [CDS variant](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_variant_glosry.htm "Glossary Entry"). An existing CDS variant must be specified for variant. This entry is not case sensitive. If there are multiple metadata extensions for the same CDS entity contained in the layer defined with annotation @Metadata.layer, these extensions should be assigned to CDS variants, because otherwise a warning is raised by the syntax check for duplicate annotations.

In [evaluations of annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_analysis.htm) using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE, the CDS variant can be specified to select the metadata extension. The class collects the annotations that it returned, in accordance with the layers and variants in line with the hierarchy described under the [evaluation of metadata extensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_meta_data_extension_eval.htm).

Hints

-   [CDS variants](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_variant_glosry.htm "Glossary Entry") are created in the [ADT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_variant_glosry.htm "Glossary Entry") and this creation process is documented there too.
-   From a technical perspective, the annotations specified in metadata extensions for a CDS entity are similar to the annotations specified in the [DDL source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddl_source_code_glosry.htm "Glossary Entry"), separated by layers and variants in separate system tables and made accessible using an API. Annotations with [translatable texts](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_analysis.htm) are also stored here in tables, which are connected to translation. The class CL\_DD\_DDL\_ANNOTATION\_SERVICE evaluates the system tables.

Caution

CDS variants are not currently released for general use. It is not possible to define standalone CDS variants and the use of CDS variants in metadata extensions produces a syntax check warning.

Executable Example

[CDS Metadata Extensions with CDS Variants](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotate_view_abexa.htm)

Continue
[CDS DDL - ANNOTATE, metadata\_extension\_annot](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_metadata_ext_annos.htm)
[CDS DDL - ANNOTATE, parameter\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_annotate_view_para_list.htm)
[CDS DDL - ANNOTATE, element\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_annotate_view_sele_list.htm)