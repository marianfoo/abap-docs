# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Annotations / ABAP CDS - Specifying Annotations / ABAP CDS Metadata Extensions

Included pages: 10



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencds_meta_data_extensions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_meta_data_extensions.htm)
- [abencds_f1_ddlx_syntax.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddlx_syntax.htm)
- [abencds_f1_annotate_view.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view.htm)
- [abencds_f1_metadata_ext_annos.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_metadata_ext_annos.htm)
- [abencds_f1_annotate_view_para_list.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view_para_list.htm)
- [abencds_f1_annotate_view_sele_list.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view_sele_list.htm)
- [abencds_meta_data_extension_eval.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_meta_data_extension_eval.htm)
- [abencds_annotate_view_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotate_view_abexa.htm)

**Bundle Contains**: 8 documentation pages
**Version**: ABAP 7.52
**Generated**: 2025-09-01T11:25:46.358Z

---

### abencds_meta_data_extensions.htm

> **📖 Official SAP Documentation**: [abencds_meta_data_extensions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_meta_data_extensions.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) → 

ABAP CDS Metadata Extensions

A [CDS metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry") (MDE) extends a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") with [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") that are not specified in the [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") of the [data definition](javascript:call_link\('abencds_data_definition_glosry.htm'\) "Glossary Entry"). CDS metadata extensions can currently only be created for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry").

A CDS metadata extension is a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") that is defined and transported in a separate piece of [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry"). These pieces of DDLX source code can only be edited in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). DDLX source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry"). Once a CDS metadata extension has been activated for a CDS entity, the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE take the annotations of the associated metadata extensions into account by default when [evaluating the annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) of this entity.

Alongside the [CDS DDL statements for data definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)), there is a CDS DDL statement for defining metadata extensions in DDLX source code. A prerequisite for extending a CDS entity with metadata extensions is that the annotation Metadata.allowExtensions (with the default value true) is specified in the DDL source code of the CDS entity.

There can be multiple metadata extensions for one CDS entity. The following rules determine which metadata extension to use to [evaluate the annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)):

-   Each metadata extension is assigned to a layer, such as branch, partner, or customer. The layer determines the priority of the evaluation.

-   A metadata extension can be joined to a [CDS variant](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry"). The CDS variant can be specified during the evaluation of the annotations of a CDS entity to select the metadata extension.

In an evaluation with the class CL\_DD\_DDL\_ANNOTATION\_SERVICE, the metadata extensions of the specified variant are searched for annotations first, and then the metadata extensions without a join to a variant. In each case, the priority is determined by the layers of the metadata extensions. Next, the direct and indirect annotations of the CDS entity itself are added that do not have an entry in a metadata extension.

For more information, see the following:

-   [DDL for Metadata Extensions](javascript:call_link\('abencds_f1_ddlx_syntax.htm'\))

-   [Evaluation of Metadata Extensions](javascript:call_link\('abencds_meta_data_extension_eval.htm'\))

Notes

-   The [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") and the activation of a CDS entity are completely independent of any metadata extensions for this entity. For this reason, a metadata extension can only add annotations that are not already evaluated during the activation of the CDS entity.

-   Metadata extensions separate the way metadata is specified from the actual data definition, and thus support the [separation of concerns (SoC)](javascript:call_link\('abenseperation_concerns_guidl.htm'\) "Guideline") concept. Specifying the annotations that are not required to activate a CDS entity outside the DDL source code of the CDS entity has the following advantages:

-   It greatly improves the readability of the DDL source code of a data definition if it does not have to list all the metadata.

-   The metadata can be specified and transported independently of the data definition.

-   Separating the activation of metadata from the data definition avoids the need for mass activation of dependent repository objects that can occur when activating a data definition.

-   When using metadata extensions for [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)), please note the relevant rules. Otherwise error messages can occur during framework-specific checks.

-   Layers and CDS variants allow frameworks, partners, and customers to override the metadata of a CDS entity without making modifications.

-   Metadata extensions can be connected to the [Switch Framework](javascript:call_link\('abenswitch_framework_glosry.htm'\) "Glossary Entry"), making them switchable.

-   The program ABAP\_DOCU\_MDE\_ANNOS shows all annotations that can be specified in metadata extensions.

Caution

CDS variants are not currently released for general use. It is not possible to define standalone CDS variants and the use of CDS variants in metadata extensions produces a syntax check warning.

Continue
[ABAP CDS - DDL for Metadata Extensions](javascript:call_link\('abencds_f1_ddlx_syntax.htm'\))
[ABAP CDS - Evaluation of Metadata Extensions](javascript:call_link\('abencds_meta_data_extension_eval.htm'\))
![Example](exa.gif "Example") [CDS Metadata Extensions with CDS Variants](javascript:call_link\('abencds_annotate_view_abexa.htm'\))



**📖 Source**: [abencds_meta_data_extensions.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_meta_data_extensions.htm)

### abencds_f1_ddlx_syntax.htm

> **📖 Official SAP Documentation**: [abencds_f1_ddlx_syntax.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddlx_syntax.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) → 

ABAP CDS - DDL for Metadata Extensions

Alongside the [DDL statements for data definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)), the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") in ABAP CDS makes it possible to define [metadata extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) for CDS entities in [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry"). The following statement is used here:

-   [ANNOTATE VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\))

Notes

-   The [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry") of metadata extensions has its own editor in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), which is documented there. DDLX source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

-   Two slashes (//) can be used as [comment characters](javascript:call_link\('abencds_general_syntax_rules.htm'\)) in [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry") for metadata extensions, but not two dashes (\--).

Continue
[ABAP CDS - ANNOTATE VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\))



**📖 Source**: [abencds_f1_ddlx_syntax.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddlx_syntax.htm)

### abencds_f1_annotate_view.htm

> **📖 Official SAP Documentation**: [abencds_f1_annotate_view.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) →  [ABAP CDS - DDL for Metadata Extensions](javascript:call_link\('abencds_f1_ddlx_syntax.htm'\)) → 

ABAP CDS - ANNOTATE VIEW

Syntax

[@Metadata.layer: #CORE*|*#LOCALIZATION*|*#INDUSTRY*|*#PARTNER*|*#CUSTOMER](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))
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

Defines a [CDS metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry") in (MDE for short) for a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") in separate [DDLX short code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry"). The CDS metadata extension add metadata to the CDS view in the form of [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry"). The view in question must exist, be specified using the name of its [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") cds\_entity, and contain the annotation [Metadata.allowExtensions](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) with the default value true in its source code. There can be multiple CDS metadata extensions for one CDS entity.

The annotation [@Metadata.layer](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\)) must be specified with one of the displayed enumeration symbols in front of the statement ANNOTATE VIEW to define the layer of the metadata extension. In the [analysis of metadata extensions](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)), the layer determines the priority of the metadata if there are multiple metadata extensions for the same CDS entity that is associated with the same [CDS variant](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry") or not associated with any variants. The enumeration symbols are displayed with the lowest priority ones on the left and the highest priority on the right. #CORE therefore has the lowest, and #CUSTOMER the highest priority. If multiple CDS metadata extensions with none or the same CDS variant are assigned to the same layer, a syntax check warning is issued for annotations specified more than one, and the system uses the annotation of the first metadata extension found.

The annotations added to the extended view are defined as follows. A metadata extension must contain at least one of these.

-   Any annotations @view\_annot1, @view\_annot2, ... specified in front of the statement ANNOTATE VIEW must be in the [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) of the [view annotations](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) of the permitted [SAP annotations](javascript:call_link\('abencds_annotations_sap.htm'\)). They are added to the view annotations of the extended view.

-   [parameter\_list](javascript:call_link\('abencds_f1_annotate_view_para_list.htm'\)) is used to specify annotations for the parameters of the extended view.

-   [element\_list](javascript:call_link\('abencds_f1_annotate_view_sele_list.htm'\)) is used specify annotations for the elements of SELECT list of the extended view.

In metadata extensions, only those annotations can be specified for which this is permitted in their [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") using the annotation [@MetadataExtension.usageAllowed:true](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)). In the CDS metadata extension, an annotation can be used in the same scope defined using [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) as in a data definition. All other annotations produce syntax errors.

These annotation of a metadata extensions are taken into account during the [evaluation of annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) with the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE except for GET\_DIRECT\_ANNOS\_, in accordance with the layers defined by the annotation @Metadata.layer and in accordance with the used [CDS variants](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry"). Here the annotations of a metadata extension always have a higher priority than the annotations specified in the source code of the CDS entity. These are only taken into account if they are not overridden by a corresponding annotation of a metadata extension. For the exact description of the evaluation, see section [evaluation of metadata extensions](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)).

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

Addition

... VARIANT variant

Effect

Joints the metadata extension with a [CDS variant](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry"). An existing CDS variant must be specified for variant. This entry is not case sensitive. If there are multiple metadata extensions for the same CDS entity contained in the layer defined with annotation @Metadata.layer, these extensions should be assigned to CDS variants, because otherwise a warning is raised by the syntax check for duplicate annotations.

In [evaluations of annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE, the CDS variant can be specified to The class collects the annotations that it returned, in accordance with the layers and variants in line with the hierarchy described under the [evaluation of metadata extensions](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)).

Notes

-   [CDS variants](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry") are created in the ADT and this creation process is documented in the [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

-   From a technical perspective, the annotations specified in metadata extensions for a CDS entity are similar to the annotations specified in the DDL source code, separated by layers and variants in separate system tables and made accessible using an API. Annotations with [translatable texts](javascript:call_link\('abencds_annotations_analysis.htm'\)) are also stored here in tables, which are connected to translation. The class CL\_DD\_DDL\_ANNOTATION\_SERVICE evaluates the system tables.

Caution

CDS variants are not currently released for general use. It is not possible to define standalone CDS variants and the use of CDS variants in metadata extensions produces a syntax check warning.

Executable Example

[CDS Metadata Extensions with CDS Variants](javascript:call_link\('abencds_annotate_view_abexa.htm'\))

Continue
[ABAP CDS - ANNOTATE VIEW, metadata\_extension\_annot](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))
[ABAP CDS - ANNOTATE VIEW, parameter\_list](javascript:call_link\('abencds_f1_annotate_view_para_list.htm'\))
[ABAP CDS - ANNOTATE VIEW, element\_list](javascript:call_link\('abencds_f1_annotate_view_sele_list.htm'\))



**📖 Source**: [abencds_f1_annotate_view.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view.htm)

### abencds_f1_metadata_ext_annos.htm

> **📖 Official SAP Documentation**: [abencds_f1_metadata_ext_annos.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_metadata_ext_annos.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) →  [ABAP CDS - DDL for Metadata Extensions](javascript:call_link\('abencds_f1_ddlx_syntax.htm'\)) →  [ABAP CDS - ANNOTATE VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\)) → 

ABAP CDS - ANNOTATE VIEW, metadata\_extension\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies [Annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) in the definition of a CDS metadata extension of the [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") before statement [ANNOTATE VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\)). The character @ must be placed in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation, [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)), must be specified here using the value #ANNOTATE.

The table below shows the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings.

-   [Metadata annotations](#abencds-f1-metadata-ext-annos-1---the-first-column-displays-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-displays-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-value-set-implicitly-for-the-annotation-value-if-the-annotation-is-not-used-explicitly--the-fifth-column-displays-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---note--all-other-annotations-specified-in-this-place-are-extension-annotations--view\_annot1](javascript:call_link\('abencds_f1_annotate_view.htm'\)), [@view\_annot2](javascript:call_link\('abencds_f1_annotate_view.htm'\)), ..., used to expand the view.

Metadata annotations

Control of the [evaluation of the CDS metadata extension](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)).

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Metadata.layer

Defines the priority of the metadata extension when it is [evaluated](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)) by assignment to a layer. The #CUSTOMER layer has the highest priority. The #CORE layer has the lowest priority.

#CUSTOMER:
Customer
#PARTNER:
Partner
#INDUSTRY:
SAP Industry Solution
#LOCALIZATION:
SAP Application Component
#CORE:
SAP NetWeaver

\-

\-



**📖 Source**: [abencds_f1_metadata_ext_annos.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_metadata_ext_annos.htm)

### abencds_f1_annotate_view_para_list.htm

> **📖 Official SAP Documentation**: [abencds_f1_annotate_view_para_list.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view_para_list.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) →  [ABAP CDS - DDL for Metadata Extensions](javascript:call_link\('abencds_f1_ddlx_syntax.htm'\)) →  [ABAP CDS - ANNOTATE VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\)) → 

ABAP CDS - ANNOTATE VIEW, parameter\_list

Syntax

... PARAMETERS
      [@parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))
     *\[*[@parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))
      ...*\]*
      pname1*\[*,
      [@parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))
     *\[*[@parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))
      ...*\]*
      pname2,
      ...*\]*

Effect

Specifies annotations for the parameters of the [parameter list](javascript:call_link\('abencds_f1_parameter_list.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") in a [CDS metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry") introduced with [ANNOTATE VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\)). A comma-separated list pname1, pname2, ... prefixed with annotations @parameter\_annot can be specified after PARAMETERS. There must not be comma after the last element of the list.

Each parameter pname that is specified after PARAMETERS should appear in the parameter list of the view extended with ANNOTATE VIEW, otherwise the syntax check generates a warning. All parameters defined there can be used exactly once. Allowed [SAP annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) @parameter\_annot can be listed before these as [parameter annotations](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). It is not possible here to specify annotations after the name of a parameter pname with the syntax @<parameter\_annot.

At least one parameter pname of the extended view must be listed after PARAMETERS. At least one parameter annotation [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) must be specified before each parameter of the list. If this is not the case, PARAMETERS cannot be used.

Notes

-   A parameter must be specified directly with its name. It cannot be specified with the syntax [:pname](javascript:call_link\('abencds_f1_parameter.htm'\)) or [$parameters.pname](javascript:call_link\('abencds_f1_parameter.htm'\)), which is used within the view for its addressing.

-   Parameter annotations can be specified here only if this is allowed in their [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") using the annotation [@MetadataExtension.usageAllowed:true](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)).

-   A parameter that is not in the parameter list of the view is handled like a normal parameter in the [evaluation of annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) with the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.

-   The program ABAP\_DOCU\_MDE\_ANNOS displays all annotations that can be specified in metadata extensions.



**📖 Source**: [abencds_f1_annotate_view_para_list.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view_para_list.htm)

### abencds_f1_annotate_view_sele_list.htm

> **📖 Official SAP Documentation**: [abencds_f1_annotate_view_sele_list.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view_sele_list.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) →  [ABAP CDS - DDL for Metadata Extensions](javascript:call_link\('abencds_f1_ddlx_syntax.htm'\)) →  [ABAP CDS - ANNOTATE VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\)) → 

ABAP CDS - ANNOTATE VIEW, element\_list

Syntax

... [@element\_annot1](javascript:call_link\('abencds_f1_element_annotations.htm'\))
   *\[*[@element\_annot2](javascript:call_link\('abencds_f1_element_annotations.htm'\))
    ...*\]*
    element1*\[*;
    [@element\_annot1](javascript:call_link\('abencds_f1_element_annotations.htm'\))
   *\[*[@element\_annot2](javascript:call_link\('abencds_f1_element_annotations.htm'\))
    ...*\]*
    element2;
    ...;*\]*

Effect

Specifies annotations for the [elements](javascript:call_link\('abencds_f1_select_list_entry.htm'\)) of the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") in a [CDS metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry") introduced with [ANNOTATE VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\)). A semicolon-separated list element1; element2; ...; prefixed with annotations element\_annot can be specified in the curly brackets of the ANNOTATE VIEW statement. There must be a semicolon after the last element of the list.

Each specified element element should appear in the SELECT list of the view that is extended with ANNOTATE VIEW, otherwise the syntax check generates a warning. An externally visible element name must be used. This is either the direct name, an alternative element name defined with [AS](javascript:call_link\('abencds_f1_select_list_entry.htm'\)), or the name defined in a [name list](javascript:call_link\('abencds_f1_name_list.htm'\)).

All elements of the SELECT list can be used exactly once. Allowed [SAP annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) @element\_annot can be listed before these as [element annotations](javascript:call_link\('abencds_f1_element_annotations.htm'\)). It is not possible here to specify annotations after the name of an element element with the syntax @<element\_annot.

At least one element annotation [@element\_annot](javascript:call_link\('abencds_f1_element_annotations.htm'\)) must be specified before each element of the list. However, the curly brackets of the ANNOTATE VIEW statement can also be empty.

Notes

-   An element must be specified directly with its name. It cannot be specified using names with multiple parts separated by periods, which can be used within the view for its definition.

-   Element annotations can be specified here only if this is allowed in their [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") using the annotation [@MetadataExtension.usageAllowed:true](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)).

-   An element that is not in the SELECT list of the view is handled like a normal element in the [evaluation of annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) with the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.

-   The program ABAP\_DOCU\_MDE\_ANNOS displays all annotations that can be specified in metadata extensions.



**📖 Source**: [abencds_f1_annotate_view_sele_list.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view_sele_list.htm)

### abencds_f1_annotate_view.htm

> **📖 Official SAP Documentation**: [abencds_f1_annotate_view.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) →  [ABAP CDS - DDL for Metadata Extensions](javascript:call_link\('abencds_f1_ddlx_syntax.htm'\)) → 

ABAP CDS - ANNOTATE VIEW

Syntax

[@Metadata.layer: #CORE*|*#LOCALIZATION*|*#INDUSTRY*|*#PARTNER*|*#CUSTOMER](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))
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

Defines a [CDS metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry") in (MDE for short) for a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") in separate [DDLX short code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry"). The CDS metadata extension add metadata to the CDS view in the form of [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry"). The view in question must exist, be specified using the name of its [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") cds\_entity, and contain the annotation [Metadata.allowExtensions](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) with the default value true in its source code. There can be multiple CDS metadata extensions for one CDS entity.

The annotation [@Metadata.layer](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\)) must be specified with one of the displayed enumeration symbols in front of the statement ANNOTATE VIEW to define the layer of the metadata extension. In the [analysis of metadata extensions](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)), the layer determines the priority of the metadata if there are multiple metadata extensions for the same CDS entity that is associated with the same [CDS variant](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry") or not associated with any variants. The enumeration symbols are displayed with the lowest priority ones on the left and the highest priority on the right. #CORE therefore has the lowest, and #CUSTOMER the highest priority. If multiple CDS metadata extensions with none or the same CDS variant are assigned to the same layer, a syntax check warning is issued for annotations specified more than one, and the system uses the annotation of the first metadata extension found.

The annotations added to the extended view are defined as follows. A metadata extension must contain at least one of these.

-   Any annotations @view\_annot1, @view\_annot2, ... specified in front of the statement ANNOTATE VIEW must be in the [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) of the [view annotations](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) of the permitted [SAP annotations](javascript:call_link\('abencds_annotations_sap.htm'\)). They are added to the view annotations of the extended view.

-   [parameter\_list](javascript:call_link\('abencds_f1_annotate_view_para_list.htm'\)) is used to specify annotations for the parameters of the extended view.

-   [element\_list](javascript:call_link\('abencds_f1_annotate_view_sele_list.htm'\)) is used specify annotations for the elements of SELECT list of the extended view.

In metadata extensions, only those annotations can be specified for which this is permitted in their [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") using the annotation [@MetadataExtension.usageAllowed:true](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)). In the CDS metadata extension, an annotation can be used in the same scope defined using [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) as in a data definition. All other annotations produce syntax errors.

These annotation of a metadata extensions are taken into account during the [evaluation of annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) with the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE except for GET\_DIRECT\_ANNOS\_, in accordance with the layers defined by the annotation @Metadata.layer and in accordance with the used [CDS variants](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry"). Here the annotations of a metadata extension always have a higher priority than the annotations specified in the source code of the CDS entity. These are only taken into account if they are not overridden by a corresponding annotation of a metadata extension. For the exact description of the evaluation, see section [evaluation of metadata extensions](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)).

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

Addition

... VARIANT variant

Effect

Joints the metadata extension with a [CDS variant](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry"). An existing CDS variant must be specified for variant. This entry is not case sensitive. If there are multiple metadata extensions for the same CDS entity contained in the layer defined with annotation @Metadata.layer, these extensions should be assigned to CDS variants, because otherwise a warning is raised by the syntax check for duplicate annotations.

In [evaluations of annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE, the CDS variant can be specified to The class collects the annotations that it returned, in accordance with the layers and variants in line with the hierarchy described under the [evaluation of metadata extensions](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)).

Notes

-   [CDS variants](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry") are created in the ADT and this creation process is documented in the [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

-   From a technical perspective, the annotations specified in metadata extensions for a CDS entity are similar to the annotations specified in the DDL source code, separated by layers and variants in separate system tables and made accessible using an API. Annotations with [translatable texts](javascript:call_link\('abencds_annotations_analysis.htm'\)) are also stored here in tables, which are connected to translation. The class CL\_DD\_DDL\_ANNOTATION\_SERVICE evaluates the system tables.

Caution

CDS variants are not currently released for general use. It is not possible to define standalone CDS variants and the use of CDS variants in metadata extensions produces a syntax check warning.

Executable Example

[CDS Metadata Extensions with CDS Variants](javascript:call_link\('abencds_annotate_view_abexa.htm'\))

Continue
[ABAP CDS - ANNOTATE VIEW, metadata\_extension\_annot](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))
[ABAP CDS - ANNOTATE VIEW, parameter\_list](javascript:call_link\('abencds_f1_annotate_view_para_list.htm'\))
[ABAP CDS - ANNOTATE VIEW, element\_list](javascript:call_link\('abencds_f1_annotate_view_sele_list.htm'\))



**📖 Source**: [abencds_f1_annotate_view.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_annotate_view.htm)

### abencds_f1_ddlx_syntax.htm

> **📖 Official SAP Documentation**: [abencds_f1_ddlx_syntax.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddlx_syntax.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) → 

ABAP CDS - DDL for Metadata Extensions

Alongside the [DDL statements for data definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)), the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") in ABAP CDS makes it possible to define [metadata extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) for CDS entities in [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry"). The following statement is used here:

-   [ANNOTATE VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\))

Notes

-   The [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry") of metadata extensions has its own editor in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), which is documented there. DDLX source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

-   Two slashes (//) can be used as [comment characters](javascript:call_link\('abencds_general_syntax_rules.htm'\)) in [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry") for metadata extensions, but not two dashes (\--).

Continue
[ABAP CDS - ANNOTATE VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\))



**📖 Source**: [abencds_f1_ddlx_syntax.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddlx_syntax.htm)

### abencds_meta_data_extension_eval.htm

> **📖 Official SAP Documentation**: [abencds_meta_data_extension_eval.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_meta_data_extension_eval.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) → 

ABAP CDS - Evaluation of Metadata Extensions

Annotations from metadata extensions are evaluated first in the [evaluation of annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) with the class CL\_DD\_DDL\_ANNOTATION\_SERVICE. If there are different metadata extensions for the same CDS entity, priority is determined by the following criteria:

-   CDS variant

-   A metadata extension can be assigned a [CDS variant](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry") in its definition with [ANNOTATE VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\)) with the addition VARIANT.

-   The name of a CDS variant can be transferred to the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE to select the metadata extension.

-   Layer of metadata extension

The layer of a metadata extension is defined in its definition with [ANNOTATE VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\)) by the annotation [@Metadata.layer](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\)). These are the enumeration symbols for layers, in descending order of priority:

-   #CUSTOMER

-   #PARTNER

-   #INDUSTRY

-   #LOCALIZATION

-   #CORE

The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE collect the annotations they have returned, depending on the variant and the layers, according to the following hierarchy:

1.  If a CDS variant is specified, the metadata extensions that are assigned to the specified variant are evaluated first. All annotations are taken from these metadata extensions, according to the layers defined by the annotation @Metadata.layer. Annotations found in a higher layer are no longer searched for in a lower layer, so any annotation that exists there is overridden.
    
2.  Then, or if no CDS variant is specified, the same procedure is applied to the metadata extensions defined for the CDS entity that are not joined to any CDS variant. That is, all annotations not yet found are collected from the higher to the lower layers.
    
3.  Finally, the annotations of the CDS entity itself that are not found in a metadata extension are added as well. These can be annotations from the source code and inherited annotations. For annotations inherited from other CDS entities, any metadata extensions are evaluated first, according to the hierarchy described above.

If an existing CDS variant is specified for the evaluation, but there are no metadata extensions that are joined to the variant, processing continues with step 2, in the same way as when no variant is specified. If a non-existent CDS variant is specified, the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE return empty internal tables.

If there are several metadata extensions in a layer for the same variant or for no variant, the annotations of the first metadata extension to be found are used. The metadata extensions are respected here in an undefined (but stable) order.

Caution

CDS variants are not currently released for general use. It is not possible to define standalone CDS variants and the use of CDS variants in metadata extensions produces a syntax check warning.

Executable Example

[CDS Metadata Extensions with CDS Variants](javascript:call_link\('abencds_annotate_view_abexa.htm'\))



**📖 Source**: [abencds_meta_data_extension_eval.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_meta_data_extension_eval.htm)

### abencds_annotate_view_abexa.htm

> **📖 Official SAP Documentation**: [abencds_annotate_view_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotate_view_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencds_annotate_view_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotate_view_abexa.htm)


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) → 

CDS Metadata Extensions with CDS Variants

The example demonstrates the [evaluation](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)) of CDS annotations that are defined in CDS metadata extensions.

Source Code

REPORT demo\_cds\_mde\_variants.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(
      )->next\_section( 'No Meta Data Extension' ).
    cl\_dd\_ddl\_annotation\_service=>get\_annos(
      EXPORTING
        entityname         =     'DEMO\_CDS\_MDE'
        metadata\_extension =     abap\_false
      IMPORTING
        element\_annos      =     DATA(element\_annos) ).
    DELETE element\_annos WHERE elementname <> 'ELEMENT'.
    out->write( element\_annos
      )->next\_section( 'With Meta Data Extension'
      )->begin\_section( 'No Variant' ).
    cl\_dd\_ddl\_annotation\_service=>get\_annos(
      EXPORTING
        entityname         =     'DEMO\_CDS\_MDE'
        metadata\_extension =     abap\_true
      IMPORTING
        element\_annos      =     element\_annos ).
    DELETE element\_annos WHERE elementname <> 'ELEMENT'.
    out->write( element\_annos
      )->next\_section( 'DemoVariant1' ).
    cl\_dd\_ddl\_annotation\_service=>get\_annos(
      EXPORTING
        entityname         =     'DEMO\_CDS\_MDE'
        variant            =     'DEMOVARIANT1'
        metadata\_extension =     abap\_true
      IMPORTING
        element\_annos      =     element\_annos ).
    DELETE element\_annos WHERE elementname <> 'ELEMENT'.
    out->write( element\_annos
      )->next\_section( 'DemoVariant2' ).
    cl\_dd\_ddl\_annotation\_service=>get\_annos(
      EXPORTING
        entityname         =     'DEMO\_CDS\_MDE'
        variant            =     'DEMOVARIANT2'
        metadata\_extension =     abap\_true
      IMPORTING
        element\_annos      =     element\_annos ).
    DELETE element\_annos WHERE elementname <> 'ELEMENT'.
    out->write( element\_annos
      )->next\_section( 'Wrong Variant' ).
    cl\_dd\_ddl\_annotation\_service=>get\_annos(
      EXPORTING
        entityname         =     'DEMO\_CDS\_MDE'
        variant            =     '�wrxlbrxlkrk'
        metadata\_extension =     abap\_true
      IMPORTING
        element\_annos      =     element\_annos ).
    DELETE element\_annos WHERE elementname <> 'ELEMENT'.
    out->write( element\_annos
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The example program uses the method GET\_ANNOS of class CL\_DD\_DDL\_ANNOTATION\_SERVICE to access the following CDS view:

@AbapCatalog.sqlViewName: 'DEMOCDSVIEWMDE'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@Metadata.allowExtensions: true
define view Demo\_Cds\_MDE
  as select from
    demo\_expressions
    {
        @UI.dataPoint.title: 'View, title'
        @UI.dataPoint.description: 'View, description'
        @UI.dataPoint.longDescription: 'View, longdescription'
      'X' as element
    }
    where
      id = 'X'          

The annotations of the view are extended or overridden by the following [CDS metadata extensions](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"):

-   DEMO\_CDS\_MDE\_INDSTR\_NO\_VARIANT

@Metadata.layer: #INDUSTRY
annotate view Demo\_Cds\_MDE with
{
  @UI.dataPoint.title: 'MDE INDUSTRY, no variant, title'
  @UI.dataPoint.description: 'MDE INDUSTRY, no variant, description'
  element;
}

-   DEMO\_CDS\_MDE\_INDSTR\_VARIANT\_1

@Metadata.layer: #INDUSTRY
annotate view Demo\_Cds\_MDE with
  variant
    DemoVariant1
{
  @UI.dataPoint.longDescription: 'MDE INDUSTRY, DemoVariant1, longDescription'
  element;
}

-   DEMO\_CDS\_MDE\_INDSTR\_VARIANT\_2

@Metadata.layer: #INDUSTRY
annotate view Demo\_Cds\_MDE with
  variant
    DemoVariant2
{
  @UI.dataPoint.title: 'MDE INDUSTRY, DemoVariant2, title'
  @UI.dataPoint.description: 'MDE INDUSTRY, DemoVariant2, description'
  element;
}

-   DEMO\_CDS\_MDE\_PARTNR\_NO\_VARIANT

@Metadata.layer: #PARTNER
annotate view Demo\_Cds\_MDE with
{
  @UI.dataPoint.title: 'MDE PARTNER, no variant, title'
  element;
}

-   DEMO\_CDS\_MDE\_PARTNR\_VARIANT\_1

@Metadata.layer: #PARTNER
annotate view Demo\_Cds\_MDE with
  variant
    DemoVariant1
{
  @UI.dataPoint.title: 'MDE PARTNER, DemoVariant1, title'
  element;
}

-   DEMO\_CDS\_MDE\_PARTNR\_VARIANT\_2

@Metadata.layer: #PARTNER
annotate view Demo\_Cds\_MDE with
  variant
    DemoVariant2
{
  @UI.dataPoint.title: 'MDE PARTNER, DemoVariant2, title'
  @UI.dataPoint.description: 'MDE PARTNER, DemoVariant2, description'
  element;
}

The evaluation is done with different parameters for the method GET\_ANNOS:

-   If the value of abap\_false is transferred to the parameter METADATA\_EXTENSION, the default evaluation of the metadata extensions is switched off for the view and the annotations that are specified in the source code are returned.

-   If the value of abap\_true is transferred to the parameter METADATA\_EXTENSION (default behavior), all existing metadata extensions for the view are evaluated as follows.

-   If the name of a CDS variant is not transferred, only annotations from metadata extensions that are not assigned to a variant are used. DEMO\_CDS\_MDE\_PARTNR\_NO\_VARIANT is evaluated first and the annotation @UI.dataPoint.title is found there. This is ignored in the next metadata extension in the hierarchy, DEMO\_CDS\_MDE\_INDSTR\_NO\_VARIANT, from which only @UI.dataPoint.description is used. Finally, UI.dataPoint.longDescription is used from the view itself, which has no entry in a metadata extension.

-   If the name of the CDS variant DemoVariant1 is transferred, annotations from the metadata extensions that are assigned to this variant are used first, and then annotations from metadata extensions that are not assigned to a variant. DEMO\_CDS\_MDE\_PARTNR\_VARIANT\_1 is evaluated first and the annotation @UI.dataPoint.title is found there. In the next metadata extension in the hierarchy, DEMO\_CDS\_MDE\_INDSTR\_VARIANT1, the annotation @UI.dataPoint.longDescription is found. No annotation is found in DEMO\_CDS\_MDE\_PARTNR\_NO\_VARIANT. In DEMO\_CDS\_MDE\_INDSTR\_NO\_VARIANT, the annotation @UI.dataPoint.description (not used until now) is found and used. The annotations of the source code of the view are all overridden.

-   If the name of the CDS variant DemoVariant2 is passed, DEMO\_CDS\_MDE\_PARTNR\_VARIANT\_2 is evaluated first and the annotations UI.dataPoint.title and @UI.dataPoint.description are found there. In the next metadata extension in the hierarchy, DEMO\_CDS\_MDE\_INDSTR\_VARIANT2, there are no annotations that have not already been used. The same applies to DEMO\_CDS\_MDE\_PARTNR\_NO\_VARIANT and DEMO\_CDS\_MDE\_INDSTR\_NO\_VARIANT, which are evaluated next. Therefore, the annotation UI.dataPoint.longDescription from the view itself is used.

-   If the name of an invalid CDS variant is passed, an empty internal table is returned.

The column SOURCEDDLX in the internal tables produced contains the metadata extension in which an annotation is specified.

Caution

CDS variants are not currently released for general use. It is not possible to define standalone CDS variants and the use of CDS variants in metadata extensions produces a syntax check warning.
