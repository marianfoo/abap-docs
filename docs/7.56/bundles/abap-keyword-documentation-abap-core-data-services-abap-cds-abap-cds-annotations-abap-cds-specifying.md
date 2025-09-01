# ABAP - Keyword Documentation / ABAP - Core Data Services (ABAP CDS) / ABAP CDS - Annotations / ABAP CDS - Specifying Annotations / ABAP CDS - Metadata Extensions / ABAP CDS - DDL for Metadata Extensions

Included pages: 6



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencds_f1_ddlx_syntax.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddlx_syntax.htm)
- [abencds_f1_annotate_view.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_annotate_view.htm)
- [abencds_f1_metadata_ext_annos.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_metadata_ext_annos.htm)
- [abencds_f1_annotate_view_para_list.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_annotate_view_para_list.htm)
- [abencds_f1_annotate_view_sele_list.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_annotate_view_sele_list.htm)

**Bundle Contains**: 5 documentation pages
**Version**: ABAP 7.56
**Generated**: 2025-09-01T11:25:45.441Z

---

### abencds_f1_ddlx_syntax.htm

> **📖 Official SAP Documentation**: [abencds_f1_ddlx_syntax.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddlx_syntax.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS - Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) → 

ABAP CDS - DDL for Metadata Extensions

Alongside the [DDL statements for data definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)), the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") in ABAP CDS makes it possible to define [metadata extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) for CDS entities in [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry"). The following statement is used here:

-   [ANNOTATE ENTITY, VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\))

Hints

-   The [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry") of metadata extensions has its own editor in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), which is documented there. DDLX source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").
-   Two slashes (//) can be used as [comment characters](javascript:call_link\('abencds_general_syntax_rules.htm'\)) in [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry") for metadata extensions, but not two dashes (\--).

Continue
[CDS DDL - ANNOTATE ENTITY, VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\))



**📖 Source**: [abencds_f1_ddlx_syntax.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddlx_syntax.htm)

### abencds_f1_annotate_view.htm

> **📖 Official SAP Documentation**: [abencds_f1_annotate_view.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_annotate_view.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS - Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) →  [ABAP CDS - DDL for Metadata Extensions](javascript:call_link\('abencds_f1_ddlx_syntax.htm'\)) → 

CDS DDL - ANNOTATE ENTITY, VIEW

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
   *\[* [@view\_entity\_annot1](javascript:call_link\('abencds_view_entity_anno.htm'\)) | [@proj\_view\_annot1](javascript:call_link\('abencds_proj_view_annotations.htm'\)) | [@\_view\_annot1](javascript:call_link\('abencds_view_anno_v1.htm'\))*\]*
   *\[*[@view\_entity\_annot2](javascript:call_link\('abencds_view_entity_anno.htm'\)) | [@proj\_view\_annot2](javascript:call_link\('abencds_proj_view_annotations.htm'\)) | [@\_view\_annot2](javascript:call_link\('abencds_view_anno_v1.htm'\))*\]*
   ...
   ANNOTATE VIEW cds\_view WITH
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
    

The CDS metadata extension adds metadata to a CDS entity as [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry"). The entity in question must exist, be specified using the name of its [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") cds\_entity or cds\_view, and contain the annotationMetadata.allowExtensions with the default value true in its source code. A CDS entity can have more than one CDS metadata extension.

The annotation [@Metadata.layer](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\)) must be specified with one of the enumeration symbols shown in the example in front of the statement ANNOTATE to define the layer of the metadata extension. In the [analysis of metadata extensions](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)), the layer determines the priority of the metadata if there are multiple metadata extensions for the same CDS entity that is linked with the same [CDS variant](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry") or not linked with any variants. The enumeration symbols are listed with the lowest priority ones on the left and the highest priority on the right. #CORE therefore has the lowest, and #CUSTOMER the highest priority. If multiple CDS metadata extensions with none or the same CDS variant are assigned to the same layer, a syntax check warning is issued for annotations specified more than one, and the system uses the annotation of the first metadata extension found.

The annotations added to the extended entity are defined as follows. A metadata extension must contain at least one of these.

-   Annotations in front of the statement ANNOTATE
    -   Only entity annotations @entity\_annot can be specified in front of the statement ANNOTATE ENTITY. Valid [SAP annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) must be in the [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) of the [entity annotations](javascript:call_link\('abencds_f1_entity_annotations.htm'\)). They are added to the entity annotations of the extended entity.
    -   Entity annotations and view annotations @view\_annot can be specified in front of the statement ANNOTATE VIEW. Valid [SAP annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) must be in the [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) of the [view annotations](javascript:call_link\('abencds_view_entity_anno.htm'\)). They are added to the view annotations of the extended view.
-   [parameter\_list](javascript:call_link\('abencds_f1_annotate_view_para_list.htm'\)) is used to specify annotations for the parameters of the extended entity.
-   [element\_list](javascript:call_link\('abencds_f1_annotate_view_sele_list.htm'\)) is used specify annotations for the elements of SELECT list of the extended entity.

In metadata extensions, only those annotations can be specified for which this is allowed in their [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") using the annotation [@MetadataExtension.usageAllowed:true](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)). In the CDS metadata extension, an annotation can be used in the same scope defined using [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) as in a data definition. All other annotations produce syntax errors.

These annotations of a metadata extension are respected in the [evaluation of annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) with the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE except for GET\_DIRECT\_ANNOS\_, in accordance with the layers defined by the annotation @Metadata.layer and in accordance with the used [CDS variants](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry"). Here the annotations of a metadata extension always have a higher priority than the annotations specified in the source code of the CDS entity. These are only respected if they are not overridden by a corresponding annotation of a metadata extension. For the exact description of the evaluation, see section [evaluation of metadata extensions](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)).

Hints

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

The following metadata extension DEMO\_CDS\_MDE\_FOR\_ABSTR\_ENT adds entity annotations and element annotations to the [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") DEMO\_CDS\_ABSTRACT\_ENTITY\_ELEM from the example for its [element annotations](javascript:call_link\('abencds_f1_absent_list_annotation.htm'\)).

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

Links the metadata extension with a [CDS variant](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry"). An existing CDS variant must be specified for variant. This entry is not case sensitive. If there are multiple metadata extensions for the same CDS entity contained in the layer defined with annotation @Metadata.layer, these extensions should be assigned to CDS variants, because otherwise a warning is raised by the syntax check for duplicate annotations.

In [evaluations of annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE, the CDS variant can be specified to select the metadata extension. The class collects the annotations that it returned, in accordance with the layers and variants in line with the hierarchy described under the [evaluation of metadata extensions](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)).

Hints

-   [CDS variants](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry") are created in the [ADT](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry") and this creation process is documented there too.
-   From a technical perspective, the annotations specified in metadata extensions for a CDS entity are similar to the annotations specified in the [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry"), separated by layers and variants in separate system tables and made accessible using an API. Annotations with [translatable texts](javascript:call_link\('abencds_annotations_analysis.htm'\)) are also stored here in tables, which are connected to translation. The class CL\_DD\_DDL\_ANNOTATION\_SERVICE evaluates the system tables.

Caution

CDS variants are not currently released for general use. It is not possible to define standalone CDS variants and the use of CDS variants in metadata extensions produces a syntax check warning.

Executable Example

[CDS Metadata Extensions with CDS Variants](javascript:call_link\('abencds_annotate_view_abexa.htm'\))

Continue
[CDS DDL - ANNOTATE, metadata\_extension\_annot](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))
[CDS DDL - ANNOTATE, parameter\_list](javascript:call_link\('abencds_f1_annotate_view_para_list.htm'\))
[CDS DDL - ANNOTATE, element\_list](javascript:call_link\('abencds_f1_annotate_view_sele_list.htm'\))



**📖 Source**: [abencds_f1_annotate_view.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_annotate_view.htm)

### abencds_f1_metadata_ext_annos.htm

> **📖 Official SAP Documentation**: [abencds_f1_metadata_ext_annos.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_metadata_ext_annos.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS - Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) →  [ABAP CDS - DDL for Metadata Extensions](javascript:call_link\('abencds_f1_ddlx_syntax.htm'\)) →  [CDS DDL - ANNOTATE ENTITY, VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\)) → 

CDS DDL - ANNOTATE, metadata\_extension\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a metadata extension annotation in front of the statement [ANNOTATE](javascript:call_link\('abencds_f1_annotate_view.htm'\)) in the definition of a CDS metadata extension in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") The character @ must be placed in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) must be specified here using the value #ANNOTATE.

The table below shows the possible [ABAP annotations](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings.

-   [Metadata Annotations](#abencds-f1-metadata-ext-annos-1---the-first-column-of-the-table-shows-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-shows-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-default-value-which-is-used-if-the-annotation-is-not-used-at-all--the-fifth-column-shows-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---hint--all-other-annotations-specified-in-this-place-are-extension-annotations--entity\_annot1](javascript:call_link\('abencds_f1_annotate_view.htm'\)), [@entity\_annot2](javascript:call_link\('abencds_f1_annotate_view.htm'\)), ..., [@view\_annot1](javascript:call_link\('abencds_f1_annotate_view.htm'\)), [@view\_annot2](javascript:call_link\('abencds_f1_annotate_view.htm'\)), ..., used to expand the entity.

Metadata Annotations

Defines how the [CDS metadata extension](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)) is evaluated.

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
ABAP platform

\-

\-



**📖 Source**: [abencds_f1_metadata_ext_annos.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_metadata_ext_annos.htm)

### abencds_f1_annotate_view_para_list.htm

> **📖 Official SAP Documentation**: [abencds_f1_annotate_view_para_list.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_annotate_view_para_list.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS - Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) →  [ABAP CDS - DDL for Metadata Extensions](javascript:call_link\('abencds_f1_ddlx_syntax.htm'\)) →  [CDS DDL - ANNOTATE ENTITY, VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\)) → 

CDS DDL - ANNOTATE, parameter\_list

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

Specifies annotations for the following parameters:

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry")
-   [Parameter list](javascript:call_link\('abencds_parameter_list_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry")
-   [Parameter list](javascript:call_link\('abencds_parameter_list_v1.htm'\)) of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry")

The parameters in a [CDS metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry") introduced using [ANNOTATE](javascript:call_link\('abencds_f1_annotate_view.htm'\)). A comma-separated list pname1, pname2, ... prefixed with annotations @parameter\_annot can be specified after PARAMETERS. There must not be comma after the last element of the list.

Each parameter pname specified after PARAMETERS should appear in the parameter list of the entity extended using ANNOTATE. If not, the syntax check produces a warning. All parameters defined there can be used exactly once. Valid [SAP annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) @parameter\_annot can be specified before these as [parameter annotations](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). It is not possible here to specify annotations after the name of a parameter pname with the syntax @<parameter\_annot.

At least one parameter pname of the extended entity must be specified after PARAMETERS. At least one parameter annotation [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) must be specified before each parameter of the list. If this is not the case, PARAMETERS cannot be used.

Hints

-   A parameter must be specified directly with its name. It cannot be specified using the syntax :pname or $parameters.pname, which is used within the entity for its addressing (parameter passing in CDS view entities is described [here](javascript:call_link\('abencds_select_parameters_v2.htm'\)), parameter passing in CDS DDIC-based views is described [here](javascript:call_link\('abencds_select_parameters_v1.htm'\))).
-   Parameter annotations can be specified here only if this is allowed in their [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") using the annotation [@MetadataExtension.usageAllowed:true](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)).
-   A parameter that is not in the parameter list of the entity is handled like a regular parameter in the [evaluation of annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) with the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.
-   The program ABAP\_DOCU\_MDE\_ANNOS shows all annotations that can be specified in metadata extensions.



**📖 Source**: [abencds_f1_annotate_view_para_list.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_annotate_view_para_list.htm)

### abencds_f1_annotate_view_sele_list.htm

> **📖 Official SAP Documentation**: [abencds_f1_annotate_view_sele_list.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_annotate_view_sele_list.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS - Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) →  [ABAP CDS - DDL for Metadata Extensions](javascript:call_link\('abencds_f1_ddlx_syntax.htm'\)) →  [CDS DDL - ANNOTATE ENTITY, VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\)) → 

CDS DDL - ANNOTATE, element\_list

Syntax

... [@element\_annot1](javascript:call_link\('abencds_f1_element_annotation.htm'\))
   *\[*[@element\_annot2](javascript:call_link\('abencds_f1_element_annotation.htm'\))
    ...*\]*
    element1*\[*;
    [@element\_annot1](javascript:call_link\('abencds_f1_element_annotation.htm'\))
   *\[*[@element\_annot2](javascript:call_link\('abencds_f1_element_annotation.htm'\))
    ...*\]*
    element2;
    ...;*\]*

Effect

Specifies annotations in a [CDS metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry") introduced with [ANNOTATE](javascript:call_link\('abencds_f1_annotate_view.htm'\)) for the following:

-   [Elements](javascript:call_link\('abencds_f1_absent_list_element.htm'\)) in the [element list](javascript:call_link\('abencds_f1_absent_element_list.htm'\)) of an [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry")
-   [Elements](javascript:call_link\('abencds_select_list_entry_v2.htm'\)) in the [SELECT list](javascript:call_link\('abencds_select_list_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry")
-   [Elements](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) in the [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)) of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry")

A semicolon-separated list element1; element2; ...; prefixed with annotations element\_annot can be specified in the curly brackets of the statement ANNOTATE. There must be a semicolon after the last element of the list.

Each specified element element should appear in the SELECT list of the entity that is annotated using ANNOTATE. If not, the syntax check produces a warning. An externally visible element name must be used. For [CDS DDIC-based views](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), this is either the direct name, an alternative element name defined with [AS](javascript:call_link\('abencds_select_list_entry_v1.htm'\)), or the name defined in a [name list](javascript:call_link\('abencds_name_list_v1.htm'\)). For [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), this is either the direct name, or an alternative element name defined with [AS](javascript:call_link\('abencds_select_list_entry_v2.htm'\)).

All elements of the SELECT list can be used exactly once. Valid [SAP annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) @element\_annot can be specified before these as [element annotations](javascript:call_link\('abencds_f1_element_annotation.htm'\)). It is not possible here to specify annotations after the name of an element element with the syntax @<element\_annot.

At least one element annotation@element\_annot must be specified before each element of the list. However, the curly brackets of the ANNOTATE statement can also be empty.

Hints

-   An element must be specified directly with its name. It cannot be specified using names with multiple parts separated by periods, which can be used within the entity for its definition.
-   Element annotations can be specified here only if this is allowed in their [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") using the annotation [@MetadataExtension.usageAllowed:true](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)).
-   An element that is not in the element list of the entity is handled like a regular element in the [evaluation of annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) with the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.
-   The program ABAP\_DOCU\_MDE\_ANNOS shows all annotations that can be specified in metadata extensions.



**📖 Source**: [abencds_f1_annotate_view_sele_list.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_annotate_view_sele_list.htm)

### abencds_f1_annotate_view.htm

> **📖 Official SAP Documentation**: [abencds_f1_annotate_view.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_annotate_view.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencds_f1_annotate_view.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_annotate_view.htm)


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS - Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) →  [ABAP CDS - DDL for Metadata Extensions](javascript:call_link\('abencds_f1_ddlx_syntax.htm'\)) → 

CDS DDL - ANNOTATE ENTITY, VIEW

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
   *\[* [@view\_entity\_annot1](javascript:call_link\('abencds_view_entity_anno.htm'\)) | [@proj\_view\_annot1](javascript:call_link\('abencds_proj_view_annotations.htm'\)) | [@\_view\_annot1](javascript:call_link\('abencds_view_anno_v1.htm'\))*\]*
   *\[*[@view\_entity\_annot2](javascript:call_link\('abencds_view_entity_anno.htm'\)) | [@proj\_view\_annot2](javascript:call_link\('abencds_proj_view_annotations.htm'\)) | [@\_view\_annot2](javascript:call_link\('abencds_view_anno_v1.htm'\))*\]*
   ...
   ANNOTATE VIEW cds\_view WITH
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
    

The CDS metadata extension adds metadata to a CDS entity as [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry"). The entity in question must exist, be specified using the name of its [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") cds\_entity or cds\_view, and contain the annotationMetadata.allowExtensions with the default value true in its source code. A CDS entity can have more than one CDS metadata extension.

The annotation [@Metadata.layer](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\)) must be specified with one of the enumeration symbols shown in the example in front of the statement ANNOTATE to define the layer of the metadata extension. In the [analysis of metadata extensions](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)), the layer determines the priority of the metadata if there are multiple metadata extensions for the same CDS entity that is linked with the same [CDS variant](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry") or not linked with any variants. The enumeration symbols are listed with the lowest priority ones on the left and the highest priority on the right. #CORE therefore has the lowest, and #CUSTOMER the highest priority. If multiple CDS metadata extensions with none or the same CDS variant are assigned to the same layer, a syntax check warning is issued for annotations specified more than one, and the system uses the annotation of the first metadata extension found.

The annotations added to the extended entity are defined as follows. A metadata extension must contain at least one of these.

-   Annotations in front of the statement ANNOTATE
    -   Only entity annotations @entity\_annot can be specified in front of the statement ANNOTATE ENTITY. Valid [SAP annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) must be in the [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) of the [entity annotations](javascript:call_link\('abencds_f1_entity_annotations.htm'\)). They are added to the entity annotations of the extended entity.
    -   Entity annotations and view annotations @view\_annot can be specified in front of the statement ANNOTATE VIEW. Valid [SAP annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) must be in the [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) of the [view annotations](javascript:call_link\('abencds_view_entity_anno.htm'\)). They are added to the view annotations of the extended view.
-   [parameter\_list](javascript:call_link\('abencds_f1_annotate_view_para_list.htm'\)) is used to specify annotations for the parameters of the extended entity.
-   [element\_list](javascript:call_link\('abencds_f1_annotate_view_sele_list.htm'\)) is used specify annotations for the elements of SELECT list of the extended entity.

In metadata extensions, only those annotations can be specified for which this is allowed in their [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") using the annotation [@MetadataExtension.usageAllowed:true](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)). In the CDS metadata extension, an annotation can be used in the same scope defined using [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) as in a data definition. All other annotations produce syntax errors.

These annotations of a metadata extension are respected in the [evaluation of annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) with the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE except for GET\_DIRECT\_ANNOS\_, in accordance with the layers defined by the annotation @Metadata.layer and in accordance with the used [CDS variants](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry"). Here the annotations of a metadata extension always have a higher priority than the annotations specified in the source code of the CDS entity. These are only respected if they are not overridden by a corresponding annotation of a metadata extension. For the exact description of the evaluation, see section [evaluation of metadata extensions](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)).

Hints

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

The following metadata extension DEMO\_CDS\_MDE\_FOR\_ABSTR\_ENT adds entity annotations and element annotations to the [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") DEMO\_CDS\_ABSTRACT\_ENTITY\_ELEM from the example for its [element annotations](javascript:call_link\('abencds_f1_absent_list_annotation.htm'\)).

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

Links the metadata extension with a [CDS variant](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry"). An existing CDS variant must be specified for variant. This entry is not case sensitive. If there are multiple metadata extensions for the same CDS entity contained in the layer defined with annotation @Metadata.layer, these extensions should be assigned to CDS variants, because otherwise a warning is raised by the syntax check for duplicate annotations.

In [evaluations of annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE, the CDS variant can be specified to select the metadata extension. The class collects the annotations that it returned, in accordance with the layers and variants in line with the hierarchy described under the [evaluation of metadata extensions](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)).

Hints

-   [CDS variants](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry") are created in the [ADT](javascript:call_link\('abencds_variant_glosry.htm'\) "Glossary Entry") and this creation process is documented there too.
-   From a technical perspective, the annotations specified in metadata extensions for a CDS entity are similar to the annotations specified in the [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry"), separated by layers and variants in separate system tables and made accessible using an API. Annotations with [translatable texts](javascript:call_link\('abencds_annotations_analysis.htm'\)) are also stored here in tables, which are connected to translation. The class CL\_DD\_DDL\_ANNOTATION\_SERVICE evaluates the system tables.

Caution

CDS variants are not currently released for general use. It is not possible to define standalone CDS variants and the use of CDS variants in metadata extensions produces a syntax check warning.

Executable Example

[CDS Metadata Extensions with CDS Variants](javascript:call_link\('abencds_annotate_view_abexa.htm'\))

Continue
[CDS DDL - ANNOTATE, metadata\_extension\_annot](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))
[CDS DDL - ANNOTATE, parameter\_list](javascript:call_link\('abencds_f1_annotate_view_para_list.htm'\))
[CDS DDL - ANNOTATE, element\_list](javascript:call_link\('abencds_f1_annotate_view_sele_list.htm'\))
