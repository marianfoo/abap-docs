  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) →  [ABAP CDS - DDL for Metadata Extensions](javascript:call_link\('abencds_f1_ddlx_syntax.htm'\)) → 

ABAP CDS - ANNOTATE ENTITY, VIEW

Syntax Forms

ANNOTATE ENTITY

1\. [@Metadata.layer: #CORE*|*#LOCALIZATION*|*#INDUSTRY*|*#PARTNER*|*#CUSTOMER](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))
   *\[*[@entity\_annot1](javascript:call_link\('abencds_f1_entity_annotations.htm'\))*\]*
   *\[*[@entity\_annot2](javascript:call_link\('abencds_f1_entity_annotations.htm'\))*\]*
   ...
   ANNOTATE ENTITY cds\_entity WITH
     *\[*VARIANT variant*\]*
     *\[*[parameter\_list](javascript:call_link\('abencds_f1_annotate_view_para_list.htm'\))*\]*
     { *\[*[element\_list](javascript:call_link\('abencds_f1_annotate_view_sele_list.htm'\))*\]* }*\[*;*\]*
ANNOTATE VIEW

2\. [@Metadata.layer: #CORE*|*#LOCALIZATION*|*#INDUSTRY*|*#PARTNER*|*#CUSTOMER](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))
   *\[*[@entity\_annot1](javascript:call_link\('abencds_f1_entity_annotations.htm'\))*\]*
   *\[*[@entity\_annot2](javascript:call_link\('abencds_f1_entity_annotations.htm'\))*\]*
   ...
   *\[*[@view\_annot1](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))*\]*
   *\[*[@view\_annot2](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))*\]*
   ...
   ANNOTATE VIEW cds\_entity WITH
     *\[*VARIANT variant*\]*
     *\[*[parameter\_list](javascript:call_link\('abencds_f1_annotate_view_para_list.htm'\))*\]*
     { *\[*[element\_list](javascript:call_link\('abencds_f1_annotate_view_sele_list.htm'\))*\]* }*\[*;*\]*

Addition:

[... VARIANT variant](#!ABAP_ONE_ADD@1@)

Effect

Defines a [CDS metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry") (MDE for short) in dedicated [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry").

-   ANNOTATE ENTITY

Defines an MDE for any [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") except [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry").

-   ANNOTATE VIEW

Defines an MDE specifically for a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry").

The CDS metadata extension adds metadata to a CDS entity as [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry"). The entity in question must exist, be specified using the name of its [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") cds\_entity, and contains the annotation [Metadata.allowExtensions](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) with the default value true in its source code. A CDS entity can have more than one CDS metadata extension.

The annotation [@Metadata.layer](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\)) must be specified with one of the displayed enumeration symbols in front of the statement ANNOTATE to define the layer of the metadata extension. In the [analysis of metadata extensions](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)), the layer determines the priority of the metadata if there are multiple metadata extensions for the same CDS entity that is associated with the same [CDS variant](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry") or not associated with any variants. The enumeration symbols are displayed with the lowest priority ones on the left and the highest priority on the right. #CORE therefore has the lowest, and #CUSTOMER the highest priority. If multiple CDS metadata extensions with none or the same CDS variant are assigned to the same layer, a syntax check warning is issued for annotations specified more than one, and the system uses the annotation of the first metadata extension found.

The annotations added to the extended entity are defined as follows. A metadata extension must contain at least one of these.

-   Annotations in front of the statement ANNOTATE

-   Only entity annotations @entity\_annot can be specified in front of the statement ANNOTATE ENTITY. Valid [SAP annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) must be in the [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) of the [entity annotations](javascript:call_link\('abencds_f1_entity_annotations.htm'\)). They are added to the entity annotations of the extended entity.

-   Entity annotations and view annotations @view\_annot can be specified in front of the statement ANNOTATE VIEW. Valid [SAP annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) must be in the [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) of the [view annotations](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)). They are added to the view annotations of the extended view.

-   [parameter\_list](javascript:call_link\('abencds_f1_annotate_view_para_list.htm'\)) is used to specify annotations for the parameters of the extended entity.

-   [element\_list](javascript:call_link\('abencds_f1_annotate_view_sele_list.htm'\)) is used specify annotations for the elements of SELECT list of the extended entity.

In metadata extensions, only those annotations can be specified for which this is permitted in their [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") using the annotation [@MetadataExtension.usageAllowed:true](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)). In the CDS metadata extension, an annotation can be used in the same scope defined using [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) as in a data definition. All other annotations produce syntax errors.

These annotations of a metadata extensions are respected in the [evaluation of annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) with the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE except for GET\_DIRECT\_ANNOS\_, in accordance with the layers defined by the annotation @Metadata.layer and in accordance with the used [CDS variants](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry"). Here the annotations of a metadata extension always have a higher priority than the annotations specified in the source code of the CDS entity. These are only respected if they are not overridden by a corresponding annotation of a metadata extension. For the exact description of the evaluation, see section [evaluation of metadata extensions](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)).

Notes

-   Unlike the specification of annotations in the source code of the extended CDS entity, it is not possible to have any arbitrary annotations in metadata extensions; it is only possible to have [SAP annotations](javascript:call_link\('abencds_annotations_sap.htm'\)). The syntax check for a metadata extension checks the validity of its specification with respect to the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"):

-   the name of an annotation

-   the validity of the [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"), the type, and (for enumerations) the enumeration symbol

-   the [scope](javascript:call_link\('abencds_annotations_scopes.htm'\))

-   whether any [annotation arrays](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") are specified correctly (they must only be specified using square brackets). The format @annot: value is not possible. @annot: \[value\] must be used instead. The array can contain only similar elements (in accordance with its definition).

-   The annotations (of a CDS entity) specified in metadata extensions does not have any effect on the activation or the behavior at runtime. They are only respected by the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.

-   The program ABAP\_DOCU\_MDE\_ANNOS shows all annotations that can be specified in metadata extensions.

Example

The following metadata extension named DEMO\_CDS\_METADATA\_EXTENSION adds annotations with original language "German" to the CDS view DEMO\_CDS\_PARAMETERS from the executable example for [CDS views with parameters](javascript:call_link\('abenselect_cds_para_abexa.htm'\)). The program DEMO\_CDS\_META\_DATA\_EXTENSIONS reads the annotations of the view with the methods of the classes CL\_DD\_DDL\_ANNOTATION\_SERVICE and CL\_DD\_DDL\_ANALYZE. The method GET\_ANNOS of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE covers both the annotations specified in the metadata extension and the translations into the current text environment language. The method GET\_ANNOTATIONS of the class CL\_DD\_DDL\_ANALYZE only evaluates the specifications in the view DEMO\_CDS\_PARAMETERS.

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

Example

The following metadata extension DEMO\_CDS\_MDE\_FOR\_ABSTR\_ENT adds entity annotations and element annotations to the [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry") DEMO\_CDS\_ABSTRACT\_ENTITY\_ELEM from the example for its [element annotations](javascript:call_link\('abencds_f1_absent_list_annotation.htm'\)).

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

Joins the metadata extension with a [CDS variant](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry"). An existing CDS variant must be specified for variant. This entry is not case sensitive. If there are multiple metadata extensions for the same CDS entity contained in the layer defined with annotation @Metadata.layer, these extensions should be assigned to CDS variants, because otherwise a warning is raised by the syntax check for duplicate annotations.

In [evaluations of annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE, the CDS variant can be specified to select the metadata extension. The class collects the annotations that it returned, in accordance with the layers and variants in line with the hierarchy described under the [evaluation of metadata extensions](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)).

Notes

-   [CDS variants](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry") are created in the [ADT](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry") and this creation process is documented there too.

-   From a technical perspective, the annotations specified in metadata extensions for a CDS entity are similar to the annotations specified in the [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry"), separated by layers and variants in separate system tables and made accessible using an API. Annotations with [translatable texts](javascript:call_link\('abencds_annotations_analysis.htm'\)) are also stored here in tables, which are connected to translation. The class CL\_DD\_DDL\_ANNOTATION\_SERVICE evaluates the system tables.

Caution

CDS variants are not currently released for general use. It is not possible to define standalone CDS variants and the use of CDS variants in metadata extensions produces a syntax check warning.

Executable Example

[CDS Metadata Extensions with CDS Variants](javascript:call_link\('abencds_annotate_view_abexa.htm'\))

Continue
[ABAP CDS - ANNOTATE, metadata\_extension\_annot](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))
[ABAP CDS - ANNOTATE, parameter\_list](javascript:call_link\('abencds_f1_annotate_view_para_list.htm'\))
[ABAP CDS - ANNOTATE, element\_list](javascript:call_link\('abencds_f1_annotate_view_sele_list.htm'\))