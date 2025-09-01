# ABAP - Keyword Documentation / ABAP - Core Data Services (ABAP CDS) / ABAP CDS - Annotations / ABAP CDS - Specifying Annotations / ABAP CDS - Metadata Extensions

Included pages: 10


### abencds_meta_data_extensions.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Metadata%20Extensions%2C%20ABENCDS_META_DATA_EXTENSIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - Metadata Extensions

A [CDS metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry") (MDE) adds [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") to a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") that are not specified in the [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") of the [data definition](javascript:call_link\('abencds_data_definition_glosry.htm'\) "Glossary Entry"). Currently CDS metadata extensions can be created for [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), [CDS projection views](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry"), [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), and [CDS abstract entities](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry").

A CDS metadata extension is a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") that is defined and transported in a separate piece of [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry"). These pieces of DDLX source code can only be edited in the [ABAP development tools for Eclipse (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). DDLX source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry"). Once a CDS metadata extension has been activated for a CDS entity, the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE take the annotations of the associated metadata extensions into account by default when [evaluating the annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) of this entity.

Alongside the [CDS DDL statements for data definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)), there is a CDS DDL statement for defining metadata extensions in DDLX source code. A prerequisite for extending a CDS entity with metadata extensions is that the annotation @Metadata.allowExtensions (with the default value true) is specified in the DDL source code of the CDS entity.

A CDS entity can have more than one CDS metadata extension. The following rules determine which metadata extension to use to [evaluate the annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)):

-   Each metadata extension is assigned to a layer, such as branch, partner, or customer. The layer determines the priority of the evaluation.

In an evaluation with the class CL\_DD\_DDL\_ANNOTATION\_SERVICE, the priority is determined by the layers of the metadata extensions. Next, the direct and indirect annotations of the CDS entity itself are added that do not have an entry in a metadata extension.

For more information, see the following:

-   [DDL for Metadata Extensions](javascript:call_link\('abencds_f1_ddlx_syntax.htm'\))
-   [Evaluation of Metadata Extensions](javascript:call_link\('abencds_meta_data_extension_eval.htm'\))

Hints

-   The [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") and the activation of a CDS entity are completely independent of any metadata extensions for this entity. For this reason, a metadata extension can only add annotations that are not already evaluated during the activation of the CDS entity.
-   Metadata extensions separate the way metadata is specified from the actual data definition. Specifying the annotations that are not required to activate a CDS entity outside the DDL source code of the CDS entity has the following advantages:
    -   It greatly improves the readability of the DDL source code of a data definition if it does not have to list all the metadata.
    -   The metadata can be specified and transported independently of the data definition.
    -   Separating the activation of metadata from the data definition avoids the need for mass activation of dependent repository objects that can occur when activating a data definition.
-   When using metadata extensions for [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)), note the relevant rules. Otherwise error messages can occur during framework-specific checks.
-   Layers allow frameworks, partners, and customers to override the metadata of a CDS entity without making modifications.
-   Metadata extensions can be connected to the [Switch Framework](javascript:call_link\('abenswitch_framework_glosry.htm'\) "Glossary Entry"), making them switchable.
-   The program ABAP\_DOCU\_MDE\_ANNOS shows all annotations that can be specified in metadata extensions.
-   Metadata extensions support the [separation of concerns (SoC)](javascript:call_link\('abenseparation_concerns_guidl.htm'\) "Guideline") concept.

Continue
[ABAP CDS - DDL for Metadata Extensions](javascript:call_link\('abencds_f1_ddlx_syntax.htm'\))
[ABAP CDS - Evaluation of Metadata Extensions](javascript:call_link\('abencds_meta_data_extension_eval.htm'\))
![Example](exa.gif "Example") [CDS Metadata Extensions with CDS Variants](javascript:call_link\('abencds_annotate_view_abexa.htm'\))


### abencds_f1_ddlx_syntax.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS - Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20DDL%20for%20Metadata%20Extensions%2C%20ABENCDS_F1_DDLX_SYNTAX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

ABAP CDS - DDL for Metadata Extensions

Alongside the [DDL statements for data definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)), the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") in ABAP CDS makes it possible to define [metadata extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) for CDS entities in [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry"). The following statement is used here:

-   [ANNOTATE ENTITY, VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\))

Hints

-   Two slashes (//) can be used as [comment characters](javascript:call_link\('abencds_general_syntax_rules.htm'\)) in [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry") for metadata extensions, but not two dashes (\--).
-   The [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry") of metadata extensions has its own editor in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), which is documented there.
-   DDLX source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

Continue
[CDS DDL - ANNOTATE ENTITY, VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\))


### abencds_f1_annotate_view.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS - Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) →  [ABAP CDS - DDL for Metadata Extensions](javascript:call_link\('abencds_f1_ddlx_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20ANNOTATE%20ENTITY%2C%20VIEW%2C%20ABENCDS_F1_ANNOTATE_VIEW%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS DDL - ANNOTATE ENTITY, VIEW

Syntax Forms

ANNOTATE ENTITY

1\. [@Metadata.layer: #CORE*|*#LOCALIZATION*|*#INDUSTRY*|*#PARTNER*|*#CUSTOMER](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))
   *\[*[@entity\_annot1](javascript:call_link\('abencds_f1_entity_annotations.htm'\))*\]*
   *\[*[@entity\_annot2](javascript:call_link\('abencds_f1_entity_annotations.htm'\))*\]*
   ...
   ANNOTATE ENTITY cds\_entity WITH
     *\[* [parameter\_list](javascript:call_link\('abencds_f1_annotate_view_para_list.htm'\))*\]*
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
     *\[* [parameter\_list](javascript:call_link\('abencds_f1_annotate_view_para_list.htm'\))*\]*
     { *\[*[element\_list](javascript:call_link\('abencds_f1_annotate_view_sele_list.htm'\))*\]* }*\[*;*\]*

Effect

Defines a [CDS metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry") (MDE for short) in dedicated [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry").

-   ANNOTATE ENTITY
    
    Defines an MDE for any [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") except [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry").
    
-   ANNOTATE VIEW
    
    Defines an MDE specifically for a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry").
    

The CDS metadata extension adds metadata to a CDS entity as [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry"). The entity in question must exist, be specified using the name of its [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") cds\_entity or cds\_view, and contain the annotationMetadata.allowExtensions with the default value true in its source code. A CDS entity can have more than one CDS metadata extension.

The annotation [@Metadata.layer](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\)) must be specified with one of the enumeration symbols shown in the example in front of the statement ANNOTATE to define the layer of the metadata extension. In the [analysis of metadata extensions](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)), the layer determines the priority of the metadata if there are multiple metadata extensions for the same CDS entity. The enumeration symbols are listed with the lowest priority ones on the left and the highest priority on the right. #CORE therefore has the lowest, and #CUSTOMER the highest priority. A syntax check warning is issued for annotations specified more than once, and the system uses the annotation of the first metadata extension found.

The annotations added to the extended entity are defined as follows. A metadata extension must contain at least one of these.

-   Annotations in front of the statement ANNOTATE
    -   Only entity annotations @entity\_annot can be specified in front of the statement ANNOTATE ENTITY. Valid [SAP annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) must be in the [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) of the [entity annotations](javascript:call_link\('abencds_f1_entity_annotations.htm'\)). They are added to the entity annotations of the extended entity.
    -   Entity annotations and view annotations @view\_annot can be specified in front of the statement ANNOTATE VIEW. Valid [SAP annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) must be in the [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) of the [view annotations](javascript:call_link\('abencds_view_entity_anno.htm'\)). They are added to the view annotations of the extended view.
-   [parameter\_list](javascript:call_link\('abencds_f1_annotate_view_para_list.htm'\)) is used to specify annotations for the parameters of the extended entity.
-   [element\_list](javascript:call_link\('abencds_f1_annotate_view_sele_list.htm'\)) is used specify annotations for the elements of SELECT list of the extended entity.

In metadata extensions, only those annotations can be specified for which this is allowed in their [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") using the annotation [@MetadataExtension.usageAllowed:true](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)). In the CDS metadata extension, an annotation can be used in the same scope defined using [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) as in a data definition. All other annotations produce syntax errors.

These annotations of a metadata extension are respected in the [evaluation of annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) with the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE except for GET\_DIRECT\_ANNOS\_, in accordance with the layers defined by the annotation @Metadata.layer. Here the annotations of a metadata extension always have a higher priority than the annotations specified in the source code of the CDS entity. These are only respected if they are not overridden by a corresponding annotation of a metadata extension. For the exact description of the evaluation, see section [evaluation of metadata extensions](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)).

Hints

-   Unlike the specification of annotations in the source code of the extended CDS entity, it is not possible to have any arbitrary annotations in metadata extensions; it is only possible to have [SAP annotations](javascript:call_link\('abencds_annotations_sap.htm'\)). The syntax check for a metadata extension checks the validity of its specification with respect to the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"):
    -   the name of an annotation
    -   the validity of the [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"), the type, and (for enumerations) the enumeration symbol
    -   the [scope](javascript:call_link\('abencds_annotations_scopes.htm'\))
    -   whether any [annotation arrays](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") are specified correctly (they must only be specified using square brackets). The format @annot: value is not possible. @annot: \[value\] must be used instead. The array can contain only similar elements (in accordance with its definition).
-   The annotations (of a CDS entity) specified in metadata extensions does not have any effect on the activation or the behavior at runtime. They are only respected by the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.
-   The program ABAP\_DOCU\_MDE\_ANNOS shows all annotations that can be specified in metadata extensions.

Example

The following metadata extension named DEMO\_CDS\_METADATA\_EXTENSION adds annotations with original language German to the CDS view entity DEMO\_CDS\_PARAMETERS from the executable example for [CDS view entities with parameters](javascript:call_link\('abenselect_cds_para_abexa.htm'\)). The class CL\_DEMO\_CDS\_META\_DATA\_EXT reads the annotations of the view with the methods of the classes CL\_DD\_DDL\_ANNOTATION\_SERVICE and CL\_DD\_DDL\_ANALYZE. The method GET\_ANNOS of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE covers both the annotations specified in the metadata extension and the translations into the current text environment language. The method GET\_ANNOTATIONS of the class CL\_DD\_DDL\_ANALYZE only evaluates the specifications in the view DEMO\_CDS\_PARAMETERS.

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

Continue
[CDS DDL - ANNOTATE, metadata\_extension\_annot](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))
[CDS DDL - ANNOTATE, parameter\_list](javascript:call_link\('abencds_f1_annotate_view_para_list.htm'\))
[CDS DDL - ANNOTATE, element\_list](javascript:call_link\('abencds_f1_annotate_view_sele_list.htm'\))


### abencds_f1_metadata_ext_annos.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS - Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) →  [ABAP CDS - DDL for Metadata Extensions](javascript:call_link\('abencds_f1_ddlx_syntax.htm'\)) →  [CDS DDL - ANNOTATE ENTITY, VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20ANNOTATE%2C%20metadata_extension_annot%2C%20ABENCDS_F1_METADATA_EXT_ANNOS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%
20improvement:)

CDS DDL - ANNOTATE, metadata\_extension\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a metadata extension annotation in front of the statement [ANNOTATE](javascript:call_link\('abencds_f1_annotate_view.htm'\)) in the definition of a CDS metadata extension in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") The character @ must be placed in front of the name annotation of the annotation. The annotation must be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) must be specified here using the value #ANNOTATE.

The table below shows the possible [ABAP annotations](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") that can be specified, and their meanings.

-   [Metadata Annotations](#@@ITOC@@ABENCDS_F1_METADATA_EXT_ANNOS_1)

The first column of the table shows the (possibly structured) name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the default value which is used if the annotation is not used at all. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

Hint

All other annotations specified in this place are extension annotations [@entity\_annot1](javascript:call_link\('abencds_f1_annotate_view.htm'\)), [@entity\_annot2](javascript:call_link\('abencds_f1_annotate_view.htm'\)), ..., [@view\_annot1](javascript:call_link\('abencds_f1_annotate_view.htm'\)), [@view\_annot2](javascript:call_link\('abencds_f1_annotate_view.htm'\)), ..., used to expand the entity.

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
ABAP Platform

\-

\-


### abencds_f1_annotate_view_para_list.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS - Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) →  [ABAP CDS - DDL for Metadata Extensions](javascript:call_link\('abencds_f1_ddlx_syntax.htm'\)) →  [CDS DDL - ANNOTATE ENTITY, VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20ANNOTATE%2C%20parameter_list%2C%20ABENCDS_F1_ANNOTATE_VIEW_PARA_LIST%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

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
-   [Parameter list](javascript:call_link\('abencds_parameter_list_v1.htm'\)) of a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry")

The parameters in a [CDS metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry") introduced using [ANNOTATE](javascript:call_link\('abencds_f1_annotate_view.htm'\)). A comma-separated list pname1, pname2, ... prefixed with annotations @parameter\_annot can be specified after PARAMETERS. There must not be comma after the last element of the list.

Each parameter pname specified after PARAMETERS should appear in the parameter list of the entity extended using ANNOTATE. If not, the syntax check produces a warning. All parameters defined there can be used exactly once. Valid [SAP annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) @parameter\_annot can be specified before these as [parameter annotations](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). It is not possible here to specify annotations after the name of a parameter pname with the syntax @<parameter\_annot.

At least one parameter pname of the extended entity must be specified after PARAMETERS. At least one parameter annotation [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) must be specified before each parameter of the list. If this is not the case, PARAMETERS cannot be used.

Hints

-   A parameter must be specified directly with its name. It cannot be specified using the syntax :pname or $parameters.pname, which is used within the entity for its addressing (parameter passing in CDS view entities is described [here](javascript:call_link\('abencds_select_parameters_v2.htm'\)), parameter passing in CDS DDIC-based views (obsolete) is described [here](javascript:call_link\('abencds_select_parameters_v1.htm'\))).
-   The program ABAP\_DOCU\_MDE\_ANNOS shows all annotations that can be specified in metadata extensions.
-   Parameter annotations can be specified here only if this is allowed in their [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") using the annotation [@MetadataExtension.usageAllowed:true](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)).
-   A parameter that is not in the parameter list of the entity is handled like a regular parameter in the [evaluation of annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) with the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.


### abencds_f1_annotate_view_sele_list.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS - Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) →  [ABAP CDS - DDL for Metadata Extensions](javascript:call_link\('abencds_f1_ddlx_syntax.htm'\)) →  [CDS DDL - ANNOTATE ENTITY, VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20ANNOTATE%2C%20element_list%2C%20ABENCDS_F1_ANNOTATE_VIEW_SELE_LIST%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

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
-   [Elements](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) in the [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)) of a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry")

A semicolon-separated list element1; element2; ...; prefixed with annotations element\_annot can be specified in the curly brackets of the statement ANNOTATE. There must be a semicolon after the last element of the list.

Each specified element element should appear in the SELECT list of the entity that is annotated using ANNOTATE. If not, the syntax check produces a warning. An externally visible element name must be used. For [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), this is either the direct name, an alternative element name defined with [AS](javascript:call_link\('abencds_select_list_entry_v1.htm'\)), or the name defined in a [name list](javascript:call_link\('abencds_name_list_v1.htm'\)). For [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), this is either the direct name, or an alternative element name defined with [AS](javascript:call_link\('abencds_select_list_entry_v2.htm'\)).

All elements of the SELECT list can be used exactly once. Valid [SAP annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) @element\_annot can be specified before these as [element annotations](javascript:call_link\('abencds_f1_element_annotation.htm'\)). It is not possible here to specify annotations after the name of an element element with the syntax @<element\_annot.

At least one element annotation@element\_annot must be specified before each element of the list. However, the curly brackets of the ANNOTATE statement can also be empty.

Hints

-   An element must be specified directly with its name. It cannot be specified using names with multiple parts separated by periods, which can be used within the entity for its definition.
-   The program ABAP\_DOCU\_MDE\_ANNOS shows all annotations that can be specified in metadata extensions.
-   Element annotations can be specified here only if this is allowed in their [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") using the annotation [@MetadataExtension.usageAllowed:true](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)).
-   An element that is not in the element list of the entity is handled like a regular element in the [evaluation of annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) with the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.


### abencds_f1_annotate_view.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS - Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) →  [ABAP CDS - DDL for Metadata Extensions](javascript:call_link\('abencds_f1_ddlx_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20ANNOTATE%20ENTITY%2C%20VIEW%2C%20ABENCDS_F1_ANNOTATE_VIEW%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS DDL - ANNOTATE ENTITY, VIEW

Syntax Forms

ANNOTATE ENTITY

1\. [@Metadata.layer: #CORE*|*#LOCALIZATION*|*#INDUSTRY*|*#PARTNER*|*#CUSTOMER](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))
   *\[*[@entity\_annot1](javascript:call_link\('abencds_f1_entity_annotations.htm'\))*\]*
   *\[*[@entity\_annot2](javascript:call_link\('abencds_f1_entity_annotations.htm'\))*\]*
   ...
   ANNOTATE ENTITY cds\_entity WITH
     *\[* [parameter\_list](javascript:call_link\('abencds_f1_annotate_view_para_list.htm'\))*\]*
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
     *\[* [parameter\_list](javascript:call_link\('abencds_f1_annotate_view_para_list.htm'\))*\]*
     { *\[*[element\_list](javascript:call_link\('abencds_f1_annotate_view_sele_list.htm'\))*\]* }*\[*;*\]*

Effect

Defines a [CDS metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry") (MDE for short) in dedicated [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry").

-   ANNOTATE ENTITY
    
    Defines an MDE for any [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") except [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry").
    
-   ANNOTATE VIEW
    
    Defines an MDE specifically for a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry").
    

The CDS metadata extension adds metadata to a CDS entity as [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry"). The entity in question must exist, be specified using the name of its [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") cds\_entity or cds\_view, and contain the annotationMetadata.allowExtensions with the default value true in its source code. A CDS entity can have more than one CDS metadata extension.

The annotation [@Metadata.layer](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\)) must be specified with one of the enumeration symbols shown in the example in front of the statement ANNOTATE to define the layer of the metadata extension. In the [analysis of metadata extensions](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)), the layer determines the priority of the metadata if there are multiple metadata extensions for the same CDS entity. The enumeration symbols are listed with the lowest priority ones on the left and the highest priority on the right. #CORE therefore has the lowest, and #CUSTOMER the highest priority. A syntax check warning is issued for annotations specified more than once, and the system uses the annotation of the first metadata extension found.

The annotations added to the extended entity are defined as follows. A metadata extension must contain at least one of these.

-   Annotations in front of the statement ANNOTATE
    -   Only entity annotations @entity\_annot can be specified in front of the statement ANNOTATE ENTITY. Valid [SAP annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) must be in the [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) of the [entity annotations](javascript:call_link\('abencds_f1_entity_annotations.htm'\)). They are added to the entity annotations of the extended entity.
    -   Entity annotations and view annotations @view\_annot can be specified in front of the statement ANNOTATE VIEW. Valid [SAP annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) must be in the [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) of the [view annotations](javascript:call_link\('abencds_view_entity_anno.htm'\)). They are added to the view annotations of the extended view.
-   [parameter\_list](javascript:call_link\('abencds_f1_annotate_view_para_list.htm'\)) is used to specify annotations for the parameters of the extended entity.
-   [element\_list](javascript:call_link\('abencds_f1_annotate_view_sele_list.htm'\)) is used specify annotations for the elements of SELECT list of the extended entity.

In metadata extensions, only those annotations can be specified for which this is allowed in their [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") using the annotation [@MetadataExtension.usageAllowed:true](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)). In the CDS metadata extension, an annotation can be used in the same scope defined using [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) as in a data definition. All other annotations produce syntax errors.

These annotations of a metadata extension are respected in the [evaluation of annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) with the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE except for GET\_DIRECT\_ANNOS\_, in accordance with the layers defined by the annotation @Metadata.layer. Here the annotations of a metadata extension always have a higher priority than the annotations specified in the source code of the CDS entity. These are only respected if they are not overridden by a corresponding annotation of a metadata extension. For the exact description of the evaluation, see section [evaluation of metadata extensions](javascript:call_link\('abencds_meta_data_extension_eval.htm'\)).

Hints

-   Unlike the specification of annotations in the source code of the extended CDS entity, it is not possible to have any arbitrary annotations in metadata extensions; it is only possible to have [SAP annotations](javascript:call_link\('abencds_annotations_sap.htm'\)). The syntax check for a metadata extension checks the validity of its specification with respect to the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"):
    -   the name of an annotation
    -   the validity of the [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"), the type, and (for enumerations) the enumeration symbol
    -   the [scope](javascript:call_link\('abencds_annotations_scopes.htm'\))
    -   whether any [annotation arrays](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") are specified correctly (they must only be specified using square brackets). The format @annot: value is not possible. @annot: \[value\] must be used instead. The array can contain only similar elements (in accordance with its definition).
-   The annotations (of a CDS entity) specified in metadata extensions does not have any effect on the activation or the behavior at runtime. They are only respected by the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.
-   The program ABAP\_DOCU\_MDE\_ANNOS shows all annotations that can be specified in metadata extensions.

Example

The following metadata extension named DEMO\_CDS\_METADATA\_EXTENSION adds annotations with original language German to the CDS view entity DEMO\_CDS\_PARAMETERS from the executable example for [CDS view entities with parameters](javascript:call_link\('abenselect_cds_para_abexa.htm'\)). The class CL\_DEMO\_CDS\_META\_DATA\_EXT reads the annotations of the view with the methods of the classes CL\_DD\_DDL\_ANNOTATION\_SERVICE and CL\_DD\_DDL\_ANALYZE. The method GET\_ANNOS of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE covers both the annotations specified in the metadata extension and the translations into the current text environment language. The method GET\_ANNOTATIONS of the class CL\_DD\_DDL\_ANALYZE only evaluates the specifications in the view DEMO\_CDS\_PARAMETERS.

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

Continue
[CDS DDL - ANNOTATE, metadata\_extension\_annot](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\))
[CDS DDL - ANNOTATE, parameter\_list](javascript:call_link\('abencds_f1_annotate_view_para_list.htm'\))
[CDS DDL - ANNOTATE, element\_list](javascript:call_link\('abencds_f1_annotate_view_sele_list.htm'\))


### abencds_f1_ddlx_syntax.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS - Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20DDL%20for%20Metadata%20Extensions%2C%20ABENCDS_F1_DDLX_SYNTAX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

ABAP CDS - DDL for Metadata Extensions

Alongside the [DDL statements for data definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)), the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") in ABAP CDS makes it possible to define [metadata extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) for CDS entities in [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry"). The following statement is used here:

-   [ANNOTATE ENTITY, VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\))

Hints

-   Two slashes (//) can be used as [comment characters](javascript:call_link\('abencds_general_syntax_rules.htm'\)) in [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry") for metadata extensions, but not two dashes (\--).
-   The [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry") of metadata extensions has its own editor in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), which is documented there.
-   DDLX source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

Continue
[CDS DDL - ANNOTATE ENTITY, VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\))


### abencds_meta_data_extension_eval.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS - Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Evaluation%20of%20Metadata%20Extensions%2C%20ABENCDS_META_DATA_EXTENSION_EVAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%2
0for%20improvement:)

ABAP CDS - Evaluation of Metadata Extensions

When [evaluating annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) with the class CL\_DD\_DDL\_ANNOTATION\_SERVICE, the annotations from metadata extensions are considered first. If there are different metadata extensions for the same CDS entity, priority is determined by the following criteria:

-   Layer of metadata extension
    
    The layer of a metadata extension is defined in its definition with [ANNOTATE](javascript:call_link\('abencds_f1_annotate_view.htm'\)) by the annotation [@Metadata.layer](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\)). These are the enumeration symbols for layers, in descending order of priority:
    
    -   #CUSTOMER
    -   #PARTNER
    -   #INDUSTRY
    -   #LOCALIZATION
    -   #CORE

The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE collect the annotations they have returned, depending on the variant and the layers, according to the following hierarchy:

1.  The annotations are evaluated according to the layer defined by the annotation @Metadata.layer. Annotations found in a higher layer are no longer searched for in a lower layer, so any annotation that exists there is overridden.
2.  Then, the annotations of the CDS entity itself that are not found in a metadata extension are added as well. These can be annotations from the source code and inherited annotations. For annotations inherited from other CDS entities, any metadata extensions are evaluated first, according to the hierarchy described above.

If there are several metadata extensions in a layer, the annotations of the first metadata extension to be found are used. The metadata extensions are evaluated according to an undefined but stable order.

Executable Example

[CDS Metadata Extensions with CDS Variants](javascript:call_link\('abencds_annotate_view_abexa.htm'\))


### abencds_annotate_view_abexa.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) →  [ABAP CDS - Metadata Extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20Metadata%20Extensions%20with%20CDS%20Variants%2C%20ABENCDS_ANNOTATE_VIEW_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

CDS Metadata Extensions with CDS Variants

This documentation is only available internally at SAP.
