# ABAP - Keyword Documentation / ABAP - RAP Business Objects / RAP - Behavior Definitions / RAP BDL - Syntax

Included pages: 4


### abenbdl_syntax.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20BDL%20-%20Syntax%2C%20ABENBDL_SYNTAX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP BDL - Syntax

The following topics describe the general syntax rules and the rules for pragmas of the [RAP BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry"). A list of all available language elements and the respective release dates is also provided.

-   [RAP BDL - General Syntax Rules](javascript:call_link\('abenbdl_general_syntax_rules.htm'\))
-   [RAP BDL - Pragmas](javascript:call_link\('abenbdl_pragma.htm'\))
-   [RAP BDL - Feature Tables](javascript:call_link\('abenrap_feature_table.htm'\))

Continue
[RAP BDL - General Syntax Rules](javascript:call_link\('abenbdl_general_syntax_rules.htm'\))
[RAP BDL - Pragmas](javascript:call_link\('abenbdl_pragma.htm'\))
[RAP BDL - Feature Tables](javascript:call_link\('abenrap_feature_table.htm'\))


### abenbdl_general_syntax_rules.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP BDL - Syntax](javascript:call_link\('abenbdl_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20BDL%20-%20General%20Syntax%20Rules%2C%20ABENBDL_GENERAL_SYNTAX_RULES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP BDL - General Syntax Rules

The general syntax rules for the [RAP BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") for defining [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") are as follows:

-   Keywords
    -   Keywords must be written in lowercase letters. Uppercase letters are not allowed.
-   Names
    -   Names are not case-sensitive.
    -   A name must contain at least 1 character but no more than 30 characters.
    -   A name can consist of letters, numbers, and underscores (\_).
    -   A name must start with a letter, or an underscore.
    -   A name of a BDEF component must be unique within the current RAP BO.
-   Comments
    -   Two forward slashes (//) introduce a comment, which continues until the end of the line.
-   Separators
    -   Statements can be closed using a semicolon (;). Sometimes this is mandatory.


### abenbdl_pragma.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP BDL - Syntax](javascript:call_link\('abenbdl_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20BDL%20-%20Pragmas%2C%20ABENBDL_PRAGMA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP BDL - Pragmas

Syntax

... ##code...

Effect

Pragmas can be used to hide [syntax check](javascript:call_link\('abensyntax_check_glosry.htm'\) "Glossary Entry") warnings from the [ABAP Compiler](javascript:call_link\('abenabap_compiler_glosry.htm'\) "Glossary Entry").

A pragma is not case-sensitive and does not contain blanks. A pragma starts with two hash characters (##), followed by the pragma code code. The pragma code determines the effect.

A pragma applies to the current statement, that is to the statement that ends at the next semicolon ( ; ) or curly bracket ( { ), or ( }).

Pragmas can be used at specific positions in the source code, namely:

-   At the start of a line, after any number of blanks
-   At the end of a line, only followed by a semicolon ( ; ), or a curly bracket ( { ), or ( } ).
-   Not before, after, or within brackets ( ... ).
    
    Multiple pragmas may be positioned one after another, separated by blanks, at allowed positions.
    

Pragmas used at a wrong position have no effect.

Hint

The long text error message provides the information on which pragma can be used to hide a specific syntax check warning.

Example

The following BDEF uses three different pragmas to suppress syntax check warnings:

-   ##UNMAPPED\_FIELD: Suppresses a syntax check warning that is issued because the field names of the RAP BO entity do not match the BDEF derived type component pattern.
-   ##DRAFT\_ASSOC: Suppresses a syntax check warning that is issued because the association \_child is not draft-enabled.
-   ##TYPE: Suppresses a syntax check warning that is issued because the action parameter DEMO\_CDS\_ABSTRACT\_ROOT is a deep structure, but it is only used as a flat parameter in the current BDEF.
    
    managed implementation in class bp\_demo\_rap\_pragma unique;
    strict ( 2 );
    with draft;
    define behavior for DEMO\_RAP\_PRAGMA alias Root
    persistent table demo\_dbtab\_root ##UNMAPPED\_FIELD
    draft table demo\_dbtab\_dr
    lock master
    total etag LchgDateTimeRoot
    authorization master ( instance )
    {
      create;
      update;
      delete;
      association \_child ##DRAFT\_ASSOC { create; }
      action MyAction parameter DEMO\_CDS\_ABSTRACT\_ROOT ##TYPE;
      field ( readonly : update ) KeyField;
      draft action Edit;
      draft action Activate optimized;
      draft action Discard;
      draft action Resume;
      draft determine action Prepare;
    }
    define behavior for DEMO\_RAP\_PRAGMA\_CHILD alias Child
    persistent table demo\_dbtab\_child ##UNMAPPED\_FIELD
    draft table demo\_draft\_child
    lock dependent by \_parent
    authorization dependent by \_parent
    //etag master <field\_name>
    {
      update;
      delete;
      field ( readonly ) KeyField, KeyFieldChild;
      association \_parent ##DRAFT\_ASSOC;
    }


### abenrap_feature_table.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP BDL - Syntax](javascript:call_link\('abenbdl_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20BDL%20-%20Feature%20Tables%2C%20ABENRAP_FEATURE_TABLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP BDL - Feature Tables

The following sections shows all available language elements of the [RAP BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") and their release dates. For further information on the release dates, see [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)).

-   [BDL](#abenrap-feature-table-1-----------rap-behavior-definitions---@ITOC@@ABENRAP_FEATURE_TABLE_2)
    -   [BDEF Extensions](#@@ITOC@@ABENRAP_FEATURE_TABLE_3)

BDL   

RAP Behavior Definitions   

RAP Behavior Definition Header

The following tables list the keywords that can be used in BDEFs of type managed, unmanaged, and projection. If the release dates differ per implementation type, the release dates are given per implementation type.

Language Element

Meaning

ABAP Release

[managed](javascript:call_link\('abenbdl_impl_type.htm'\))

Defines a [managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry").

7.77, 7.54

[unmanaged](javascript:call_link\('abenbdl_impl_type.htm'\))

Defines an [unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry").

7.73, 7.53

[projection](javascript:call_link\('abenbdl_impl_type.htm'\))

Defines a projection RAP BO.

7.77, 7.54

[implementation in class *\[*unique*\]*](javascript:call_link\('abenbdl_in_class_unique.htm'\))

Class for manual method implementation.

7.77, 7.54

[strict](javascript:call_link\('abenbdl_strict_1.htm'\))

Enables [BDEF strict mode](javascript:call_link\('abenrap_strict_mode_glosry.htm'\) "Glossary Entry").

7.84, 7.56

[strict(2)](javascript:call_link\('abenbdl_strict_2.htm'\))

Enables [BDEF strict mode, version 2](javascript:call_link\('abenrap_strict_mode_glosry.htm'\) "Glossary Entry").

7.89, 7.57

[extensible](javascript:call_link\('abenbdl_extensible.htm'\))

[RAP extensibility enablement](javascript:call_link\('abenrap_ext_enablement_glosry.htm'\) "Glossary Entry") for managed and unmanaged RAP BOs and for projection BDEFs.

7.89, 7.57

[with validations on save
with determinations on save
with determinations on modify
with additional save
(extensible)](javascript:call_link\('abenbdl_extensible.htm'\))

[RAP extensibility enablement](javascript:call_link\('abenrap_ext_enablement_glosry.htm'\) "Glossary Entry").
Caution: Currently only available for managed RAP BOs.

7.89, 7.57

[with managed instance filter](javascript:call_link\('abenbdl_mngd_instance_check_proj.htm'\))

Optional addition for [projection BDEFs](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry") and [interface BDEFs](javascript:call_link\('abencds_interface_bdef_glosry.htm'\) "Glossary Entry"). If specified, the [WHERE](javascript:call_link\('abencds_proj_view_cond_expr.htm'\)) condition of the underlying [CDS transactional query](javascript:call_link\('abencds_transactional_pv_glosry.htm'\) "Glossary Entry") or [CDS transactional interface](javascript:call_link\('abencds_trans_interface_glosry.htm'\) "Glossary Entry") is evaluated when the BDEF is accessed with [ABAP EML](javascript:call_link\('abenabap_eml_glosry.htm'\) "Glossary Entry") or [OData](javascript:call_link\('abenodata_glosry.htm'\) "Glossary Entry") requests from Web clients.

7.93, 7.58

[with draft](javascript:call_link\('abenbdl_with_draft.htm'\))

Enables [RAP draft handling](javascript:call_link\('abenrap_draft_handling_glosry.htm'\) "Glossary Entry").

7.81, 7.55

[use draft](javascript:call_link\('abenbdl_use_projection.htm'\))

Reuse of [RAP draft handling](javascript:call_link\('abenrap_draft_handling_glosry.htm'\) "Glossary Entry") in a [CDS projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry").

7.77, 7.54

[use side effects](javascript:call_link\('abenbdl_use_projection.htm'\))

Reuse of [RAP side effects](javascript:call_link\('abenrap_side_effects_glosry.htm'\) "Glossary Entry") in a [CDS projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry").

7.91, 7.58

[with privileged mode](javascript:call_link\('abenbdl_privileged_mode.htm'\))

Enables [BDEF privileged mode](javascript:call_link\('abenrap_privileged_mode_glosry.htm'\) "Glossary Entry").

7.83, 7.56. Obsolete as of 7.89, 7.57.

[with privileged mode disabling](javascript:call_link\('abenbdl_privileged_mode.htm'\))

Enables [BDEF privileged mode](javascript:call_link\('abenrap_privileged_mode_glosry.htm'\) "Glossary Entry") for managed and unmanaged RAP BOs.

7.89, 7.56

[with privileged mode disabling base context *\[*and*\]*](javascript:call_link\('abenbdl_privileged_mode.htm'\))

Enables [BDEF privileged mode](javascript:call_link\('abenrap_privileged_mode_glosry.htm'\) "Glossary Entry") in projection BDEFs.

7.86, 7.57

[foreign entity](javascript:call_link\('abenbdl_foreign.htm'\))

Defines an entity which is not part of the BO structure as component for the response structures, thus enabling message mapping for other BOs.

Unmanaged RAP BO: 7.73, 7.53
Managed RAP BO: 7.77, 7.54
Projection BDEF: 7.77, 7.54

Entity Behavior Definition

Language Element

Meaning

ABAP Release

[define behavior for...alias](javascript:call_link\('abenbdl_define_beh.htm'\))

Defines an [entity behavior definition](javascript:call_link\('abencds_entity_bdef_glosry.htm'\) "Glossary Entry").

Unmanaged RAP BO: 7.73, 7.53
Managed RAP BO: 7.77, 7.54
Projection BDEF: 7.77, 7.54

Authorization Context Definition

Language Element

Meaning

ABAP Release

[define authorization context ...
*\[*for disable *{*modify*|*read*|*modify,read*}**\]*](javascript:call_link\('abenbdl_def_auth_context.htm'\))

Defines an [authorization context](javascript:call_link\('abencds_auth_context_glosry.htm'\) "Glossary Entry") that lists [authorization objects](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") that can be skipped when the respective authorization context is activated.

7.85, 7.56

[define own authorization context](javascript:call_link\('abenbdl_def_own_auth_context.htm'\))

Defines an [own authorization context](javascript:call_link\('abencds_own_ac_glosry.htm'\) "Glossary Entry") that documents authorization objects used in the implementation of the RAP BO in question.

7.86, 7.57

[define own authorization context by privileged mode *\[*and*\]*{...}](javascript:call_link\('abenbdl_def_own_auth_context.htm'\))

Defines an [own authorization context](javascript:call_link\('abencds_own_ac_glosry.htm'\) "Glossary Entry")

7.89, 7.56

Entity Behavior Characteristics

Language Element

Meaning

ABAP Release

[persistent table](javascript:call_link\('abenbdl_persistent_table.htm'\))

Defines a persistent database table in a managed RAP BO.

7.77, 7.54

[draft table](javascript:call_link\('abenbdl_draft_table.htm'\))

Defines the [draft database table](javascript:call_link\('abendraft_table_glosry.htm'\) "Glossary Entry") used to store draft data.

7.81, 7.55

[query](javascript:call_link\('abenbdl_draft_query_view.htm'\))

Defines a [draft query view](javascript:call_link\('abendraft_query_view_glosry.htm'\) "Glossary Entry") for a draft database table.

7.89, 7.57

[with additional save](javascript:call_link\('abenbdl_saving.htm'\))

User-defined saving strategy for managed RAP BOs.

7.78, 7.55

[with unmanaged save](javascript:call_link\('abenbdl_saving.htm'\))

User-defined saving strategy for managed RAP BOs.

7.78, 7.55

[and cleanup](javascript:call_link\('abenbdl_saving.htm'\))

User-defined saving strategy for managed RAP BOs.

7.83, 7.56

[with full data](javascript:call_link\('abenbdl_saving.htm'\))

User-defined saving strategy for managed RAP BOs.

7.88, 7.57

[etag master](javascript:call_link\('abenbdl_etag.htm'\)), [etag dependent](javascript:call_link\('abenbdl_etag.htm'\)), [total etag](javascript:call_link\('abenbdl_etag.htm'\))

Defines an ETag field for optimistic concurrency control.

Unmanaged RAP BO: 7.73, 7.53
Managed RAP BO: 7.77, 7.54
Projection BDEF: 7.77, 7.54

[use etag](javascript:call_link\('abenbdl_use_projection.htm'\))

Reuse of ETag fields for optimistic concurrency control in a [CDS projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry").

7.77, 7.54

[lock master](javascript:call_link\('abenbdl_locking.htm'\))

Defines pessimistic concurrency control in managed or unmanaged RAP BOs.

Unmanaged RAP BO: 7.73, 7.53
Managed RAP BO: 7.77, 7.54

[unmanaged (lock master)](javascript:call_link\('abenbdl_locking.htm'\))

Implementation exit for pessimistic concurrency control in managed RAP BOs.

7.80, 7.55

[lock dependent](javascript:call_link\('abenbdl_locking.htm'\))

Defines pessimistic concurrency control in managed or unmanaged RAP BOs.

Unmanaged RAP BO: 7.73, 7.53
Managed RAP BO: 7.77, 7.54

[lock:none](javascript:call_link\('abenbdl_locking.htm'\))

RAP BO operation addition that prevents the locking mechanism for a certain RAP BO entity.

7.82, 7.56

[authorization master( global )](javascript:call_link\('abenbdl_authorization.htm'\))

Defines global [RAP authorization control](javascript:call_link\('abenrap_auth_control_glosry.htm'\) "Glossary Entry") for managed and unmanaged RAP BOs.

7.82, 7.56

[authorization master ( instance )](javascript:call_link\('abenbdl_authorization.htm'\))

Defines instance [RAP authorization control](javascript:call_link\('abenrap_auth_control_glosry.htm'\) "Glossary Entry") for managed and unmanaged RAP BOs.

7.77, 7.54

[authorization dependent](javascript:call_link\('abenbdl_authorization.htm'\))

[RAP authorization control](javascript:call_link\('abenrap_auth_control_glosry.htm'\) "Glossary Entry") for managed and unmanaged RAP BOs.

7.77, 7.54

[authorization ( global )
           *|* ( instance )
           *|* ( global, instance )](javascript:call_link\('abenbdl_authorization_projection.htm'\))

Defines [RAP authorization control](javascript:call_link\('abenrap_auth_control_glosry.htm'\) "Glossary Entry") for projection BDEFs.

7.84, 7.56

[authorization:update](javascript:call_link\('abenbdl_authorization.htm'\))

[RAP BO operation addition](javascript:call_link\('abenbdl_operations_additions.htm'\)) to delegate [RAP authorization control](javascript:call_link\('abenrap_auth_control_glosry.htm'\) "Glossary Entry").

7.85, 7.56

[authorization:none](javascript:call_link\('abenbdl_authorization.htm'\))

[RAP BO operation addition](javascript:call_link\('abenbdl_operations_additions.htm'\)) to exclude a RAP BO operation from [RAP authorization control](javascript:call_link\('abenrap_auth_control_glosry.htm'\) "Glossary Entry").

7.77, 7.54

[authorization:global](javascript:call_link\('abenbdl_actions_auth_global.htm'\))

[RAP BO operation addition](javascript:call_link\('abenbdl_operations_additions.htm'\)) that replaces the [RAP authorization control](javascript:call_link\('abenrap_auth_control_glosry.htm'\) "Glossary Entry") that is specified in the [authorization master entity](javascript:call_link\('abenrap_auth_ma_ent_glosry.htm'\) "Glossary Entry") and applies global authorization checks instead.

7.92, 7.58

[authorization:instance](javascript:call_link\('abenbdl_actions_auth_instance.htm'\))

[RAP BO operation addition](javascript:call_link\('abenbdl_operations_additions.htm'\)) that replaces the [RAP authorization control](javascript:call_link\('abenrap_auth_control_glosry.htm'\) "Glossary Entry") that is specified in the [authorization master entity](javascript:call_link\('abenrap_auth_ma_ent_glosry.htm'\) "Glossary Entry") and applies instance authorization checks instead.

7.92, 7.58

[early numbering](javascript:call_link\('abenbdl_early_numb.htm'\))

Defines unmanaged [early numbering](javascript:call_link\('abenrap_early_numbering_glosry.htm'\) "Glossary Entry") for all primary key fields of a business object entity.

7.83, 7.56

[late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\))

Enables gapless assignment for unique keys when creating new entity instances in managed and unmanaged RAP BOs.

Unmanaged RAP BO without draft: 7.73, 7.53
Unmanaged RAP BO with draft and Managed RAP BO: 7.86, 7.57

Entity Behavior Body

Language Element

Meaning

ABAP Release

[field(readonly)](javascript:call_link\('abenbdl_field_char.htm'\))

Defines a [RAP field characteristic](javascript:call_link\('abenrap_field_char_glosry.htm'\) "Glossary Entry").

Unmanaged RAP BO: 7.76, 7.54
Managed RAP BO: 7.77, 7.54

[field(mandatory)](javascript:call_link\('abenbdl_field_char.htm'\))

Defines a [RAP field characteristic](javascript:call_link\('abenrap_field_char_glosry.htm'\) "Glossary Entry").

Unmanaged RAP BO: 7.76, 7.54
Managed RAP BO: 7.77, 7.54

[field (features:instance)](javascript:call_link\('abenbdl_field_char.htm'\))

Defines a [RAP field characteristic](javascript:call_link\('abenrap_field_char_glosry.htm'\) "Glossary Entry").

7.77, 7.54

[field (mandatory:create)](javascript:call_link\('abenbdl_field_char.htm'\))

Defines a [RAP field characteristic](javascript:call_link\('abenrap_field_char_glosry.htm'\) "Glossary Entry").

7.81, 7.55

[field (readonly:update)](javascript:call_link\('abenbdl_field_char.htm'\))

Defines a [RAP field characteristic](javascript:call_link\('abenrap_field_char_glosry.htm'\) "Glossary Entry").

7.81, 7.55

[field (numbering:managed)](javascript:call_link\('abenbdl_field_char.htm'\))

Defines managed internal numbering for a field in a managed RAP BO.

7.79, 7.55

[field (suppress)](javascript:call_link\('abenbdl_field_char.htm'\))

Defines a [RAP field characteristic](javascript:call_link\('abenrap_field_char_glosry.htm'\) "Glossary Entry").

Managed RAP BO: 7.88, 7.57
Unmanaged RAP BO: 7.87, 7.57
Projection BDEF: 7.84, 7.56

[field (notrigger:warn)](javascript:call_link\('abenbdl_field_char.htm'\))

Defines a [RAP field characteristic](javascript:call_link\('abenrap_field_char_glosry.htm'\) "Glossary Entry").

7.90, 7.58

[field (modify)](javascript:call_link\('abenbdl_augment_projection.htm'\))

Augmentation of a [CDS virtual element](javascript:call_link\('abencds_virtual_element_glosry.htm'\) "Glossary Entry") in a [CDS projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry").

7.82, 7.56

[group](javascript:call_link\('abenbdl_grouping.htm'\))

Splits the implementation-relevant parts of a business object's logic into multiple groups to allow simultaneous work.

7.78, 7.55

[create](javascript:call_link\('abenbdl_standard_operations.htm'\)), [update](javascript:call_link\('abenbdl_standard_operations.htm'\)), [delete](javascript:call_link\('abenbdl_standard_operations.htm'\))

Enables [CRUD operations](javascript:call_link\('abencrud_glosry.htm'\) "Glossary Entry") for a managed or unmanaged RAP business object.

Unmanaged RAP BO: 7.73, 7.53
Managed RAP BO: 7.77, 7.54

[use](javascript:call_link\('abenbdl_use_projection.htm'\))

Reuse of [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") in a [CDS projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry").

7.81, 7.55

[association ... abbreviation ... *\[*without response*\]*](javascript:call_link\('abenbdl_association.htm'\))

Enables read-by-association and create-by-association operations for associations.

Unmanaged RAP BO: 7.73, 7.53
Managed RAP BO: 7.77, 7.54

[action ... *\[*external*\]*](javascript:call_link\('abenbdl_action.htm'\))

Defines a [RAP action](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry").

Unmanaged RAP BO: 7.73, 7.53
Managed RAP BO: 7.77, 7.54

[static (action)](javascript:call_link\('abenbdl_action.htm'\))

Defines a static [RAP action](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry").

Unmanaged RAP BO: 7.73, 7.53
Managed RAP BO: 7.77, 7.54

[repeatable (action or function)](javascript:call_link\('abenbdl_action_repeatable.htm'\))

Defines a [RAP repeatable operation](javascript:call_link\('abenrap_repeatable_action_glosry.htm'\) "Glossary Entry").

7.89, 7.57

[factory (action)](javascript:call_link\('abenbdl_action_factory.htm'\))

Defines a [RAP factory action](javascript:call_link\('abenrap_factory_action_glosry.htm'\) "Glossary Entry").

Unmanaged RAP BO: 7.76, 7.54
Managed RAP BO: 7.86, 7.57

[default](javascript:call_link\('abenbdl_action_default_factory.htm'\))

Defines a default static factory action.

7.90, 7.58

[save(finalize
   *|* adjustnumbers
  *|* finalize, adjustnumbers)
(action)](javascript:call_link\('abenbdl_action_onsave.htm'\))

Defines a [RAP save action](javascript:call_link\('abenrap_save_action_glosry.htm'\) "Glossary Entry").

7.89, 7.57

[function ... *\[*external*\]*](javascript:call_link\('abenbdl_function.htm'\))

Defines a [RAP function](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry").

Unmanaged RAP BO: 7.73, 7.53
Managed RAP BO: 7.77, 7.54

[determine action](javascript:call_link\('abenbdl_determine_action.htm'\))

Defines a [determine action](javascript:call_link\('abenrap_bo_det_action_glosry.htm'\) "Glossary Entry") that allows a [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") to execute [determinations](javascript:call_link\('abenrap_determination_glosry.htm'\) "Glossary Entry") and [validations](javascript:call_link\('abenrap_validation_glosry.htm'\) "Glossary Entry") on request.

7.81, 7.55

[always (determine action)](javascript:call_link\('abenbdl_determine_action.htm'\))

Ignores the trigger condition of a [determine action](javascript:call_link\('abenrap_bo_det_action_glosry.htm'\) "Glossary Entry").

7.82, 7.56

   [draft action Edit](javascript:call_link\('abenbdl_draft_action.htm'\))
*|*  [draft action Activate](javascript:call_link\('abenbdl_draft_action.htm'\))
*|*  [draft action Discard](javascript:call_link\('abenbdl_draft_action.htm'\))
*|*  [draft action Resume *\[*with additional implementation*\]*](javascript:call_link\('abenbdl_draft_action.htm'\))
*|*  [draft determine action Prepare](javascript:call_link\('abenbdl_draft_action.htm'\))

Defines a draft action in a draft-enabled scenario.

7.81, 7.55

[with additional implementation](javascript:call_link\('abenbdl_draft_action.htm'\))

Implementation exit for draft actions that allows a user-defined implementation of the draft action in question.

7.81, 7.55

[optimized](javascript:call_link\('abenbdl_draft_action.htm'\))

Recommended addition to the draft action Activate that speeds up the activation of draft instances.

7.93, 7.58

[parameter ... *\[*$self*\]*](javascript:call_link\('abenbdl_action_input_param.htm'\))

Defines an input parameter for an action or function.

Unmanaged RAP BO: 7.73, 7.53
Managed RAP BO: 7.77, 7.54

[deep *\[*table*\]* (parameter)](javascript:call_link\('abenbdl_action_input_param.htm'\))

Defines a deep input parameter or a deep table input parameter for an action or function.

7.83, 7.56

[result\[cardinality\] *{* $self *|* entity *}*](javascript:call_link\('abenbdl_action_output_para.htm'\))

Defines an output parameter for an action or function.

Unmanaged RAP BO: 7.73, 7.53
Managed RAP BO: 7.77, 7.54

[selective (result)](javascript:call_link\('abenbdl_action_output_para.htm'\))

Syntax addition for an output parameter for an action or function.

7.79, 7.55

[selective (deep result)](javascript:call_link\('abenbdl_action_output_para.htm'\))

Syntax addition for a deep output parameter for an action or function.

7.89, 7.57

[mapping for ... *\[*control ... *\]* *\[*corresponding*\]* *\[*except*\]*](javascript:call_link\('abenbdl_type_mapping.htm'\))

Maps field names from database tables to field names from the current data model.

7.78, 7.55

[validation ... on save { ... }](javascript:call_link\('abenbdl_validations.htm'\))

Defines a validation which is called during the save sequence.

Unmanaged RAP BO: 7.73, 7.53
Managed RAP BO: 7.77,7.54

[determination ... on save { ... } *|* on modify { ... }](javascript:call_link\('abenbdl_determinations.htm'\))

Defines a determination which is called during the save sequence or immediately after data has been changed.

Unmanaged RAP BO: 7.73, 7.53
Managed RAP BO: 7.77,7.54

[features: global](javascript:call_link\('abenbdl_actions_fc.htm'\))

RAP BO operation addition that defines global feature control for a RAP BO operation.

7.82, 7.56

[features: instance](javascript:call_link\('abenbdl_actions_fc.htm'\))

RAP BO operation addition that defines instance feature control for a RAP BO operation.

7.77, 7.54

[internal](javascript:call_link\('abenbdl_internal.htm'\))

Defines a RAP BO operation as internal.

Unmanaged RAP BO: 7.73, 7.53
Managed RAP BO: 7.77,7.54

[precheck](javascript:call_link\('abenbdl_precheck.htm'\))

Prevents illegal changes from reaching the application buffer by prechecking modify operations.

7.81, 7.55

[augment](javascript:call_link\('abenbdl_augment_projection.htm'\))

Augments modify requests on the projection layer in a [CDS projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry").

7.82, 7.56

[event ... *\[**\[*deep*\]* parameter*\]*](javascript:call_link\('abenbdl_event.htm'\))

Defines a [RAP business event](javascript:call_link\('abenrap_entity_event_glosry.htm'\) "Glossary Entry") in a [managed](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") or [unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry").

7.89, 7.57

[managed event ... on ... parameter](javascript:call_link\('abenbdl_managed_event.htm'\))

Defines a [RAP derived event](javascript:call_link\('abenrap_derived_event_glosry.htm'\) "Glossary Entry") in a [managed](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") or [unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry").

7.93, 7.58

[side effects { ... *\[*executed on ... *\]* affects ...; }](javascript:call_link\('abenbdl_side_effects.htm'\))

Defines a [RAP side effect](javascript:call_link\('abenrap_side_effects_glosry.htm'\) "Glossary Entry") in a [managed](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), [unmanaged](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), or [projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry").

7.91, 7.58

Interface Behavior Definitions

Language Element

Meaning

ABAP Release

[interface](javascript:call_link\('abenbdl_impl_type.htm'\))

Defines a [RAP BO interface](javascript:call_link\('abenrap_bo_interface_glosry.htm'\) "Glossary Entry").

7.88, 7.57

[extensible](javascript:call_link\('abenbdl_bo_interface_header.htm'\))

Declares a RAP BO interface as extensible.

7.89, 7.57

[with managed instance filter](javascript:call_link\('abenbdl_mngd_instance_check_proj.htm'\))

Optional addition for [projection BDEFs](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry") and [interface BDEFs](javascript:call_link\('abencds_interface_bdef_glosry.htm'\) "Glossary Entry"). If specified, the [WHERE](javascript:call_link\('abencds_proj_view_cond_expr.htm'\)) condition of the underlying [CDS transactional query](javascript:call_link\('abencds_transactional_pv_glosry.htm'\) "Glossary Entry") or [CDS transactional interface](javascript:call_link\('abencds_trans_interface_glosry.htm'\) "Glossary Entry") is evaluated when the BDEF is accessed with [ABAP EML](javascript:call_link\('abenabap_eml_glosry.htm'\) "Glossary Entry") or [OData](javascript:call_link\('abenodata_glosry.htm'\) "Glossary Entry") requests from Web clients.

7.93, 7.58

[define behavior for ... alias ... external](javascript:call_link\('abenbdl_define_beh_interface.htm'\)).

Entity behavior definition of an interface BDEF.

7.88, 7.57

[use draft](javascript:call_link\('abenbdl_bo_interface_header.htm'\))

Reuses the draft-handling from the base BO.

7.88, 7.57

[use side effects](javascript:call_link\('abenbdl_use_projection.htm'\))

Reuse of [RAP side effects](javascript:call_link\('abenrap_side_effects_glosry.htm'\) "Glossary Entry") from the base BO.

7.91, 7.58

[use event](javascript:call_link\('abenbdl_use_projection.htm'\))

Reuses a [RAP business event](javascript:call_link\('abenrap_entity_event_glosry.htm'\) "Glossary Entry") from the base BO.

7.93, 7.58

[use etag](javascript:call_link\('abenbdl_define_beh_interface.htm'\)).

Reuses the ETag from the base BO.

7.88, 7.57

[with privileged mode](javascript:call_link\('abenbdl_bo_interface_header.htm'\)).

[BDEF privileged mode](javascript:call_link\('abenrap_privileged_mode_glosry.htm'\) "Glossary Entry").

7.88, 7.57

[foreign entity](javascript:call_link\('abenbdl_bo_interface_header.htm'\)).

Defines a [RAP foreign entity](javascript:call_link\('abenrap_foreign_entity_glosry.htm'\) "Glossary Entry") for message mapping.

7.88, 7.57

[field(readonly)](javascript:call_link\('abenbdl_field_interface.htm'\))

[RAP field characteristic](javascript:call_link\('abenrap_field_char_glosry.htm'\) "Glossary Entry").

7.90, 7.58

[field(mandatory:create)](javascript:call_link\('abenbdl_field_interface.htm'\))

[RAP field characteristic](javascript:call_link\('abenrap_field_char_glosry.htm'\) "Glossary Entry").

7.90, 7.58

[field(readonly:update)](javascript:call_link\('abenbdl_field_interface.htm'\))

[RAP field characteristic](javascript:call_link\('abenrap_field_char_glosry.htm'\) "Glossary Entry").

7.90, 7.58

[field(suppress)](javascript:call_link\('abenbdl_field_interface.htm'\))

[RAP field characteristic](javascript:call_link\('abenrap_field_char_glosry.htm'\) "Glossary Entry").

7.90, 7.58

Abstract Behavior Definitions

Language Element

Meaning

ABAP Release

[abstract](javascript:call_link\('abenbdl_impl_type.htm'\))

Defines an abstract BDEF.

7.83, 7.56

[with hierarchy](javascript:call_link\('abenbdl_bdef_abstract_header.htm'\))

Causes the construction of a new kind of BDEF derived type. Only available in abstract BDEFs.

7.83, 7.56

[with control](javascript:call_link\('abenbdl_define_beh_abstract.htm'\))

Optional addition of the define behavior statement that is only available in abstract BDEFs. Adds the %control structure to the corresponding derived type structure.

7.85, 7.56

[scalar entity](javascript:call_link\('abenbdl_define_beh_abstract.htm'\))

Alternative to an entity behavior definition that is only available in abstract BDEFs. Integrates a node of the CDS composition tree into the hierarchical derived type of the abstract BDEF as a scalar type.

7.83, 7.56

[association ... *\[*with hierarchy*\]*](javascript:call_link\('abenbdl_association_abstract.htm'\))

In an abstract BDEF, an association can be defined with the optional addition with hierarchy. This addition is available for to-parent associations and cross-BO associations to include them multiple times in the type structure.

7.83,7.56

[deep mapping for ... *\[*corresponding*\]* *\[*sub*\]*](javascript:call_link\('abenbdl_type_mapping_abstract.htm'\))

Defines a deep mapping in an abstract BDEF.

7.83,7.56

[mandatory:execute](javascript:call_link\('abenbdl_field_abstract.htm'\))

Field attribute that declares a field of an abstract BDEF as mandatory.

7.88, 7.57

BDEF Extensions   

Keywords and Additions

This list displays special language elements for BDEF extensions. You can also use statements from [CDS behavior definitions](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry").

Language Element

Meaning

ABAP Release

[extension](javascript:call_link\('abenbdl_extensibility_managed_unm.htm'\))

Defines a [BDEF extension](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry").

7.89, 7.57

[extend behavior for](javascript:call_link\('abenbdl_extend_beh.htm'\))

Defines a [RAP entity behavior extension](javascript:call_link\('abenrap_behavior_extension_glosry.htm'\) "Glossary Entry").

7.89, 7.57

[extend own authorization context](javascript:call_link\('abenbdl_extend_own_auth_context.htm'\)).

Extends an [own authorization context](javascript:call_link\('abencds_own_ac_glosry.htm'\) "Glossary Entry").

7.89, 7.57

[extend determine action](javascript:call_link\('abenbdl_determine_action_ext.htm'\))

Extends an existing [RAP BO determine action](javascript:call_link\('abenrap_bo_det_action_glosry.htm'\) "Glossary Entry").

7.89, 7.57

[extend draft determine action Prepare](javascript:call_link\('abenbdl_draft_action_ext.htm'\))

Extends an existing [draft determine action Prepare](javascript:call_link\('abenrap_bo_draft_action_glosry.htm'\) "Glossary Entry").

7.89, 7.57

[extend mapping for](javascript:call_link\('abenbdl_type_mapping_ext.htm'\))

Extends an existing [RAP type mapping](javascript:call_link\('abenrap_type_mapping_glosry.htm'\) "Glossary Entry").

7.89, 7.57

[extension for projection](javascript:call_link\('abenbdl_extensibility_projection.htm'\))

Extends a [RAP projection behavior definition](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry").

7.89, 7.57

[ancestor association](javascript:call_link\('abenbdl_ancestor_ext.htm'\))

Defines a CDS association as ancestor association. The [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") must be an extension node.

7.89, 7.57

[extension for abstract](javascript:call_link\('abenbdl_extension_for_abstract.htm'\))

Extends an [abstract behavior definition](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry").

7.91, 7.58
