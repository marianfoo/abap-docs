  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_views.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Table%20Buffering%20of%20CDS%20View%20Entities%2C%20ABENCDS_V2_VIEW_BUFFERING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%2
0for%20improvement:)

ABAP CDS - Table Buffering of CDS View Entities

The following [CDS annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_glosry.htm "Glossary Entry") defines whether [table buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_puffering.htm) is allowed for a [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) or not:

[@AbapCatalog.entityBuffer.definitionAllowed: true*|*false](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity_anno.htm)

If buffering is allowed, the actual [buffering type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_type.htm) can be defined by a separate [ABAP tuning object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_tuning_object_glosry.htm "Glossary Entry") called [CDS entity buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_buffer_glosry.htm "Glossary Entry") with the DDL statement:

[DEFINE VIEW ENTITY BUFFER ON cds\_view\_entity ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_entity_buffer.htm)

The CDS entity buffer relates the buffering type to one of the layers core, localization, industry, partner and customer. For each layer, one buffering type can be defined for a CDS view entity.

A view entity buffer needs a unique key, specified using the keyword [KEY](abencds_select_list_entry_v2.htm#!ABAP_ADDITION_2@2@). If multiple records have identical key values, unexpected buffer behavior might occur.

Restrictions

If the @AbapCatalog.entityBuffer.definitionAllowed is set to true, the following restrictions apply to the CDS view entity:

-   Only the following [data sources](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v2.htm) are possible:
    -   [DDIC database tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_table_glosry.htm "Glossary Entry")
    -   [CDS view entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry") annotated with the annotation @AbapCatalog.entityBuffer.definitionAllowed: true. A CDS view entity used as data source must allow buffering itself and must therefore meet all requirements listed here. In a CDS data model with multiple layers, each CDS view entity must allow buffering as a prerequisite for the upper layer to allow buffering.
-   There must be at least one key element and the combined length of the key elements must not be greater than 900 bytes. Key elements cannot be [LOBs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_glosry.htm "Glossary Entry").
-   No [input parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_parameter_list_v2.htm) are allowed.
-   No calculations are allowed that have results that do not depend on database content only, for example [time stamp functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_timestamp_functions_v2.htm) that return or depend on the current time stamp.
-   No [session variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_session_variable_v2.htm) other than $session.client are allowed.
-   No database tables can be accessed where [data aging](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_aging_glosry.htm "Glossary Entry") is enabled,
-   No customer extensions are allowed. Annotations [AbapCatalog.extensibility.extensible](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_entity_annotations.htm) or [AbapCatalog.viewEnhancementCategory](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity_anno.htm) cannot be used to enable extensions.
-   If a CDS view entity uses [UNION *\[*ALL*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_union_v2.htm), a syntax check warning occurs. Reason:
    -   UNION removes duplicate records considering all columns, not just key fields. Therefore, [UNION *\[*ALL*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_union_v2.htm) might return duplicate records with regard to the key built by the fields declared as key fields. In other words, UNION *\[*ALL*\]* might return multiple rows with identical key values.
    -   The buffer considers the key built by the key fields. In some scenarios, the buffer content is managed with uniqueness constraints.
    -   When a union view returns records with duplicate key values, unexpected buffer behavior might occur.
    -   The application developer must ensure that the key attributes are specified correctly.

Hints

-   The annotations [@AbapCatalog.buffering.status](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_anno_v1.htm), [@AbapCatalog.buffering.type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_anno_v1.htm), and [@AbapCatalog.buffering.numberOfKeyFields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_anno_v1.htm) are not supported in CDS view entities. They are only valid for [CDS DDIC-based views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry").
-   Other than for [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), where the buffering is defined for the respective [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry"), the table buffering of CDS view entities is defined for the CDS entity itself.
-   In contrast to [table buffering of CDS DDIC-based views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_buffering.htm) where ABAP SQL bypasses the table buffer if the prerequisites are not met, the restrictions are checked directly for the view in case of CDS view entities. For a view that does not meet the prerequisites, table buffering cannot be enabled.
-   A CDS data model with multiple layers that has buffering defined on multiple layers (for example, [table buffers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffer_glosry.htm "Glossary Entry") and [CDS entity buffers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_buffer_glosry.htm "Glossary Entry")) stores data redundantly as soon as the buffers are accessed. Non-redundant storage is currently not supported.

Example

Allowing buffering for a CDS view entity. The actual buffering is defined with the DDL for an entity buffer as shown under [DEFINE VIEW ENTITY BUFFER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_entity_buffer.htm).

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@AbapCatalog.entityBuffer.definitionAllowed: true
define view entity DEMO\_CDS\_GEN\_BUFFERED\_VIEW
  as select from sairport
{
  key id        as Id,
  key name      as Name,
      time\_zone as Time\_Zone
}