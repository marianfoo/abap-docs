  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - Table Buffering of CDS View Entities, ABENCDS_V2_VIEW_BUFFERING, 757%0D%0A
%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - Table Buffering of CDS View Entities

The following [CDS annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") defines whether [table buffering](javascript:call_link\('abensap_puffering.htm'\)) is allowed for a [CDS view entity](javascript:call_link\('abencds_view_entity.htm'\)) or not:

[@AbapCatalog.entityBuffer.definitionAllowed: true*|*false](javascript:call_link\('abencds_view_entity_anno.htm'\))

If buffering is allowed, the actual [buffering type](javascript:call_link\('abenbuffer_type.htm'\)) can be defined by a separate [CDS tuning object](javascript:call_link\('abencds_tuning_object_glosry.htm'\) "Glossary Entry") called [CDS entity buffer](javascript:call_link\('abencds_entity_buffer_glosry.htm'\) "Glossary Entry") with the DDL statement:

[DEFINE VIEW ENTITY BUFFER ON cds\_view\_entity ...](javascript:call_link\('abencds_define_view_entity_buffer.htm'\))

The CDS entity buffer relates the buffering type to one of the layers core, localization, industry, partner and customer. For each layer, one buffering type can be defined for a CDS view entity.

A view entity buffer needs a unique key, specified using the keyword [KEY](abencds_select_list_entry_v2.htm#!ABAP_ADDITION_2@2@). If multiple records have identical key values, unexpected buffer behavior might occur.

Restrictions

If the @AbapCatalog.entityBuffer.definitionAllowed is set to true, the following restrictions apply to the CDS view entity:

-   Only the following [data sources](javascript:call_link\('abencds_data_source_v2.htm'\)) are possible:
    -   [DDIC database tables](javascript:call_link\('abendatabase_table_glosry.htm'\) "Glossary Entry")
    -   [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") annotated with the annotation @AbapCatalog.entityBuffer.definitionAllowed: true. A CDS view entity used as data source must allow buffering itself and must therefore meet all requirements listed here. In a CDS data model with multiple layers, each CDS view entity must allow buffering as a prerequisite for the upper layer to allow buffering.
-   There must be at least one key element and the combined length of the key elements must not be greater than 900 bytes. Key elements cannot be [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry").
-   No [input parameters](javascript:call_link\('abencds_parameter_list_v2.htm'\)) are allowed.
-   No calculations are allowed that have results that do not depend on database content only, for example [time stamp functions](javascript:call_link\('abencds_timestamp_functions_v2.htm'\)) that return or depend on the current time stamp.
-   No [session variables](javascript:call_link\('abencds_session_variable_v2.htm'\)) other than $session.client are allowed.
-   No database tables can be accessed where [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") is enabled,
-   No customer extensions are allowed. Annotations [AbapCatalog.extensibility.extensible](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) or [AbapCatalog.viewEnhancementCategory](javascript:call_link\('abencds_view_entity_anno.htm'\)) cannot be used to enable extensions or enhancements.
-   If a CDS view entity uses [UNION *\[*ALL*\]*](javascript:call_link\('abencds_union_v2.htm'\)), a syntax check warning occurs. Reason:
    -   UNION removes duplicate records considering all columns, not just key fields. Therefore, [UNION *\[*ALL*\]*](javascript:call_link\('abencds_union_v2.htm'\)) might return duplicate records with regard to the key built by the fields declared as key fields. In other words, UNION *\[*ALL*\]* might return multiple rows with identical key values.
    -   The buffer considers the key built by the key fields. In some scenarios, the buffer content is managed with uniqueness constraints.
    -   When a union view returns records with duplicate key values, unexpected buffer behavior might occur.
    -   The application developer must ensure that the key attributes are specified correctly.

Hints

-   The annotations [@AbapCatalog.buffering.status](javascript:call_link\('abencds_view_anno_v1.htm'\)), [@AbapCatalog.buffering.type](javascript:call_link\('abencds_view_anno_v1.htm'\)), and [@AbapCatalog.buffering.numberOfKeyFields](javascript:call_link\('abencds_view_anno_v1.htm'\)) are not supported in CDS view entities. They are only valid for [CDS DDIC-based views](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry").
-   Other than for [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), where the buffering is defined for the respective [CDS-managed DDIC view (obsolete)](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry"), the table buffering of CDS view entities is defined for the CDS entity itself.
-   In contrast to [table buffering of CDS DDIC-based views](javascript:call_link\('abencds_v1_buffering.htm'\)) where ABAP SQL bypasses the table buffer if the prerequisites are not met, the restrictions are checked directly for the view in case of CDS view entities. For a view that does not meet the prerequisites, table buffering cannot be enabled.
-   A CDS data model with multiple layers that has buffering defined on multiple layers (for example, [table buffers](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") and [CDS entity buffers](javascript:call_link\('abencds_entity_buffer_glosry.htm'\) "Glossary Entry")) stores data redundantly as soon as the buffers are accessed. Non-redundant storage is currently not supported.

Example

Allowing buffering for a CDS view entity. The actual buffering is defined with the DDL for an entity buffer as shown under [DEFINE VIEW ENTITY BUFFER](javascript:call_link\('abencds_define_view_entity_buffer.htm'\)).

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@AbapCatalog.entityBuffer.definitionAllowed: true
define view entity DEMO\_CDS\_GEN\_BUFFERED\_VIEW
  as select from sairport
{
  key id        as Id,
  key name      as Name,
      time\_zone as Time\_Zone
}