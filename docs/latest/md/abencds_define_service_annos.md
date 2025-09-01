  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Service Definitions](javascript:call_link\('abencds_service_definitions.htm'\)) →  [ABAP CDS - SDL for Service Definitions](javascript:call_link\('abencds_f1_sdl_syntax.htm'\)) →  [CDS SDL - DEFINE SERVICE](javascript:call_link\('abensrvd_define_service.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20SDL%20-%20service_annot%2C%20ABENCDS_DEFINE_SERVICE_ANNOS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS SDL - service\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a service definition annotation in the definition of a [service definition](javascript:call_link\('abencds_service_definition_glosry.htm'\) "Glossary Entry") in front of the statement [DEFINE SERVICE](javascript:call_link\('abensrvd_define_service.htm'\)).

The character @ must be placed directly in front of the name annotation of the annotation. The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #SERVICE.

The following tables show the possible [ABAP annotations](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime framework for every CDS object. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime framework but by other SAP frameworks instead.

-   [AbapCatalog Annotations](#abencds-define-service-annos-1-------endusertext-annotations---@ITOC@@ABENCDS_DEFINE_SERVICE_ANNOS_2)

The first column of the table shows the (possibly structured) name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the default value which is used if the annotation is not used at all. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

AbapCatalog Annotations   

Technical settings of a CDS service definition.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

AbapCatalog.extensibility.extensible

Enables or disables service definition extensibility.

true:
Service definition extensions are allowed.
false:
Service definition extensions are not allowed.

false

true

The annotation @AbapCatalog.extensibility.extensible with the value true is a prerequisite for [C0 release of a CDS service definition](javascript:call_link\('abenc0_contract_rules_sd.htm'\)).

EndUserText Annotations   

Translatable texts of the CDS service definition.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the CDS service definition

Character string with a maximum of 60 characters

\-

\-

Hint

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of such an annotation is saved in special tables that have a language key and are translatable. The value specified in the source code should consist of text in the original language of the CDS source code, and it is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP is used.