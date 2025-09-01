  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - Common DDL Elements](javascript:call_link\('abencds_ddl_common_elements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - entity_annot, ABENCDS_F1_ENTITY_ANNOTATIONS, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - entity\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as an entity annotation in front of the statement in the definition of a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). Can be used for the following entities:

-   [DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\))
-   [DEFINE VIEW ENTITY AS PROJECTION ON](javascript:call_link\('abencds_define_view_as_projection.htm'\))
-   [DEFINE TABLE FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\))
-   [DEFINE HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))
-   [DEFINE CUSTOM ENTITY](javascript:call_link\('abencds_f1_define_custom_entity.htm'\))
-   [DEFINE ABSTRACT ENTITY](javascript:call_link\('abencds_f1_define_abstract_entity.htm'\))
-   [DEFINE VIEW](javascript:call_link\('abencds_define_view_v1.htm'\))

The character @ must be placed in front of the name annotation of the annotation. The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #ENTITY.

The following tables show the possible [ABAP annotations](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime framework for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime framework but by other SAP frameworks instead.

-   [AbapCatalog Annotations](#abencds-f1-entity-annotations-1-------endusertext-annotations---@ITOC@@ABENCDS_F1_ENTITY_ANNOTATIONS_2)
-   [Metadata Annotations](#abencds-f1-entity-annotations-3-------objectmodel-annotation---@ITOC@@ABENCDS_F1_ENTITY_ANNOTATIONS_4)

The first column of the table shows the (possibly structured) name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the default value which is used if the annotation is not used at all. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

AbapCatalog Annotations   

Technical settings of a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

AbapCatalog.extensibility.allowNewCompositions

Allows node extensibility. In other words, explicitly allows new child nodes to be added by means of CDS compositions.

true:
Node extensibility is allowed
false:
Node extensibility is not allowed.

false

true

AbapCatalog.extensibility.elementSuffix

Defines a 3-character element suffix which must be used for extension fields and extension associations when extending a released API.

'suffix'
suffix must consist of exactly three alphabetical characters.

\-

\-

AbapCatalog.extensibility.extensible

Controls the extensibility via [CDS entity extensions](javascript:call_link\('abencds_entity_extend_glosry.htm'\) "Glossary Entry").

true:
Enhancements via CDS entity extensions are allowed
false:
Enhancements via CDS entity extensions are not allowed.

true

true

AbapCatalog.extensibility.quota.maximumBytes

Defines the maximum number of bytes that can be added to a released API via extensions.

Integer between 0 and 10000

\-

\-

AbapCatalog.extensibility.quota.maximumFields

Defines the maximum number of fields that can be added to a released API via extensions.

Integer between 0 and 1000.

\-

\-

-   These annotations are supported in all CDS entities except for [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry").
-   AbapCatalog.extensibility.quota.maximumFields:
    -   The maximum field count specified after maximumFields plus the field count of the current CDS entity must not exceed the technical limitations of the ABAP server. Currently, the technical limitation is at 1500 fields.
    -   The value specified should be at least 100 (indicated by a syntax check warning).
-   AbapCatalog.extensibility.quota.maximumBytes:
    -   The maximum byte count specified after maximumBytes plus the byte count of the current CDS entity must not exceed the technical limitations of the ABAP server. Currently, the technical limitation is at 2^19-1 bytes.
    -   The value specified should be at least 1000 (indicated by a syntax check warning).
-   AbapCatalog.extensibility.elementSuffix:
    
    A valid suffix must obey the following rules:
    
    -   If the object is created in a customer or partner system, the suffix must have Y or Z as first character.
    -   If the object is created in an SAP system, the suffix must not have Y or Z as first character.
    -   If the field suffix is already used by another development object, a syntax check warning occurs.
-   AbapCatalog.extensibility.allowNewCompositions is useful only in entity types that allow CDS compositions. For example, this annotation can be specified in CDS transactional interfaces, no syntax error occurs. But it does not have any effect, since the feature set of a transactional interface does not include CDS compositions.

Hint

The annotation [AbapCatalog.viewEnhancementCategory](javascript:call_link\('abencds_view_entity_anno.htm'\)) specifies how a CDS view can be extended. AbapCatalog.viewEnhancementCategory and AbapCatalog.extensibility.extensible can optionally be specified together in the same CDS view. In this case, the annotation values must fit to each other. They must both either allow or forbid extensions.

EndUserText Annotations   

Translatable texts of the CDS entity.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the CDS entity

Character string with maximum 60 characters

\-

\-

Hint

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of such an annotation is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and it is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP is used.

Metadata Annotations   

Defines whether metadata extensions are allowed for a CDS entity.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Metadata.allowExtensions

Defines whether a CDS entity can be extended with [metadata extensions](javascript:call_link\('abencds_meta_data_extensions.htm'\))

true:
The current CDS entity can be extended.
false:
The current CDS entity cannot be extended.

false

true

Hint

Metadata extensions are currently only supported in [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and [CDS abstract entities](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry"). In all other CDS entities, there is no syntax error, but the annotation Metadata.allowExtensions has no effect.

ObjectModel Annotation   

The following subannotation of ObjectModel binds an ABAP class to a CDS entity.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

ObjectModel.query.implementedBy

Binds an ABAP class to a CDS entity that overrides the entity's own data retrieval method. The data retrieval is performed at runtime by a method of the class.

'ABAP:class\_name'
The name of the ABAP class class\_name must be specified in single quotation marks and it must be written in uppercase letters. It is introduced by the string ABAP:.

\-

\-

This annotation is currently supported in all CDS entities except for [CDS abstract entities](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry"). The annotation is evaluated by frameworks such as [SADL](javascript:call_link\('abensadl_glosry.htm'\) "Glossary Entry") and therefore, it is especially relevant for entities that can be used in [RAP business services](javascript:call_link\('abencds_business_services.htm'\)).

Hints

-   This annotation is [framework specific](javascript:call_link\('abenfrmwrk_annotation_glosry.htm'\) "Glossary Entry"). It is not evaluated by the ABAP runtime framework, but, e.g., by the [SADL](javascript:call_link\('abensadl_glosry.htm'\) "Glossary Entry") framework instead. The ABAP class must implement the predefined ABAP interface IF\_RAP\_QUERY\_PROVIDER to connect it to SADL.
-   This annotation was first made available for [CDS custom entities](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry") and this kind of data retrieval is typical for CDS custom entities. Only later it was also made available for other kinds of CDS entities.
-   In CDS custom entities, the annotation ObjectModel.query.implementedBy is mandatory when working in [SAP BTP ABAP Environment](javascript:call_link\('abensap_btp_abap_env_glosry.htm'\) "Glossary Entry") or [SAP S/4HANA Cloud ABAP Environment](javascript:call_link\('abens4_hana_cloud_abap_env_glosry.htm'\) "Glossary Entry"). In all other environments and for all other CDS entities, it is optional.
-   If a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") implements a [RAP unmanaged query](javascript:call_link\('abenrap_unmanged_query_glosry.htm'\) "Glossary Entry") using ObjectModel.query.implementedBy and it also contains a [CDS virtual element](javascript:call_link\('abencds_virtual_element_glosry.htm'\) "Glossary Entry"), then the ABAP query is evaluated first and the CDS virtual element is calculated afterwards. The CDS virtual element can use values returned by the ABAP query. This can be useful, for example, in extensibility scenarios.

Example

The CDS view entity DEMO\_CDS\_SCARR\_FROM\_ABAP\_CLASS is bound to ABAP class CL\_DEMO\_GET\_SCARR. This ABAP class implements the interface IF\_RAP\_QUERY\_PROVIDER and it implements the same SQL query as the view entity does via its SELECT statement.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@ObjectModel.query.implementedBy: 'ABAP:CL\_DEMO\_GET\_SCARR'
define view entity DEMO\_CDS\_SCARR\_FROM\_ABAP\_CLASS
  with parameters
    p\_carrid : s\_carr\_id
  as select from scarr
{
  key carrid,
      carrname,
      url
}
where
  carrid = $parameters.p\_carrid

The program DEMO\_CONSUME\_BS\_SCARR\_ABAP accesses the CDS view entity once via its [service binding](javascript:call_link\('abenservice_binding_glosry.htm'\) "Glossary Entry") DEMO\_SB\_SCARR\_FROM\_ABAP, which binds the service definition DEMO\_SD\_SCARR\_FROM\_ABAP\_CLASS to an OData node in [ICF](javascript:call_link\('abenicf_glosry.htm'\) "Glossary Entry"). This is done using the demonstration class CL\_DEMO\_BS\_CONSUMPTION, which accesses the OData service of the service binding by using an ICF client.

The program accesses the CDS view entity a second time using a SELECT statement. The result is the same, the only difference is that the query class returns the message Nothing found whereas the SELECT statement returns no entries in case the query does not return any values.