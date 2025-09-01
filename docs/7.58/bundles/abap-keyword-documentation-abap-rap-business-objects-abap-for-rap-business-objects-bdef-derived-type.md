# ABAP - Keyword Documentation / ABAP - RAP Business Objects / ABAP for RAP Business Objects / BDEF Derived Types / TYPE TABLE FOR

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.58](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abaptype_table_for.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_table_for.htm)
- [abenderived_type_hierarchy_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenderived_type_hierarchy_abexa.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.58
**Generated**: 2025-09-01T11:25:29.014Z

---

### abaptype_table_for.htm

> **📖 Official SAP Documentation**: [abaptype_table_for.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_table_for.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abaptype_table_for.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_table_for.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPE%20TABLE%20FOR%2C%20ABAPTYPE_TABLE_FOR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPE TABLE FOR

Syntax

... TABLE FOR *{* ACTION IMPORT bdef~action *}*
            *|* *{* ACTION RESULT bdef~action *}*
            *|* *{* *\[*INSTANCE*\]* AUTHORIZATION KEY bdef*\[*~group*\]* *}*
            *|* *{* *\[*INSTANCE*\]* AUTHORIZATION RESULT bdef*\[*~group*\]* *}*
            *|* *{* CHANGE bdef *}*
            *|* *{* CREATE bdef *\[*\\\_assoc*\]* *}*
            *|* *{* DELETE bdef *}*
            *|* *{* DETERMINATION bdef~det *}*
            *|* *{* EVENT bdef~evt *}*
            *|* *{* FAILED *\[*EARLY *|* LATE*\]* bdef *}*
            *|* *{* HIERARCHY bdef *}*
            *|* *{* *\[*INSTANCE*\]* FEATURES KEY bdef*\[*~group*\]* *}*
            *|* *{* *\[*INSTANCE*\]* FEATURES RESULT bdef*\[*~group*\]* *}*
            *|* *{* FUNCTION IMPORT bdef~function *}*
            *|* *{* FUNCTION RESULT bdef~function *}*
            *|* *{* KEY OF bdef *}*
            *|* *{* MAPPED *\[*EARLY *|* LATE*\]* bdef *}*
            *|* *{* PERMISSIONS KEY bdef *}*
            *|* *{* READ IMPORT bdef *\[*\\\_assoc*\]* *}*
            *|* *{* READ LINK bdef\\\_assoc *}*
            *|* *{* READ RESULT bdef *\[*\\\_assoc*\]* *}*
            *|* *{* REPORTED *\[*EARLY *|* LATE*\]* bdef *}*
            *|* *{* UPDATE bdef *}*
            *|* *{* VALIDATION bdef~valid *}* ...

Effect

Special ABAP type that is used for internal tables in the context of [RAP](javascript:call_link\('abenrap_glosry.htm'\) "Glossary Entry") to enable the communication between a [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") and a [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry"). These internal tables hold [input parameters](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry"), or [output parameters](javascript:call_link\('abenoutput_parameter_glosry.htm'\) "Glossary Entry") respectively, to enable mass processing of data by bundling ABAP EML READ or MODIFY requests in one method call.

For all operations defined in the [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"), ABAP types can be derived and used with this special syntax. The use is dependent on the definition in the BDEF. For example, if the operation create is not specified in the BDEF, TYPE TABLE FOR CREATE cannot be used.

The internal tables contain various [special components](javascript:call_link\('abapderived_types_comp.htm'\)), also depending on the BDEF. Generally, the tables are [standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") with an empty [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry"). However, most of the tables have predefined [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"). Find more information in the topic [Secondary Keys for BDEF Derived Types](javascript:call_link\('abapderived_types_secondary_keys.htm'\)).

Notes on the syntax:

-   bdef: bdef means the full entity name of either a root or child entity, or an alias. An alias, however, only works within handler methods of a RAP BO provider. Aliases do not work for explicit declarations outside of implementation classes. The reference to a child entity can also be specified together with its root entity by writing the root entity name followed by \\\\ and the child entity name: root\_entity\\\\child\_entity. If this syntax is used, the child's alias name must be specified if specified in the BDEF: root\_entity\\\\child\_entity\_alias.
-   bdef\\\_assoc: \_assoc is the name of an association specified in the underlying CDS view of the RAP BO. The reference to the association is made using a backslash \\.
-   bdef~action: action is the name of an action specified in the BDEF. The reference to the action is made using a tilde (~).
-   bdef~function: function is the name of a function specified in the BDEF. The reference to the function is made using a tilde (~).
-   bdef~group: group is the name of a group specified in the BDEF. The reference to the group is made using a tilde (~).
-   bdef~det: det is the name of a determination specified in the BDEF. The reference to the determination is made using a tilde (~).
-   bdef~valid: valid is the name of a validation specified in the BDEF. The reference to the validation is made using a tilde (~).
-   bdef~evt: evt is the name of a [RAP business event](javascript:call_link\('abenrap_entity_event_glosry.htm'\) "Glossary Entry") specified in the BDEF. The reference to the event is made using a tilde (~).

Hints

-   The components of BDEF derived types can be checked via the element information in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") by choosing F2 for the typed variable.
    ![Figure](abdoc_derived_types_adt_f2.png)
    
    For a convenient handling and specification of the % components, the ADT code completion shows possible entries and simplifies inserting them without the need to remember the respective field names from the underlying CDS view.
    
    ![Figure](abdoc_derived_types_adt_f2_2.png)
-   The components listed in the Components column of the following table might cover more than mentioned there. It depends on the context. For example, the draft indicator %is\_draft is available in case of drafts only. %pid is only available in [late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\)) scenarios.

Overview

The following table covers the variants including information on the BDEF prerequisites and the tables' components.

For details on the components, see [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)). For details on the BDEF specifications, see the subtopics in [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)).

TYPE TABLE FOR ...

Purpose

BDEF Prerequisites

Components

ACTION IMPORT

Used to store the import parameters for [actions](javascript:call_link\('abenbdl_action.htm'\)).

The action is specified in the BDEF. See the details in the RAP BDL documentation for [action](javascript:call_link\('abenbdl_action.htm'\)).

Note: The availability of the following components depends on the context and defined action in the BDEF, that is, only a subset of the below components can be expected to be available. For example, %param is only available if the action is defined with the notation PARAMETER.
%cid
%cid\_ref
%key
%param
%pky
%tky

ACTION RESULT

Used to store the result for [actions](javascript:call_link\('abenbdl_action.htm'\)).

Only available if the action has a result parameter specified in the BDEF. See the details in the RAP BDL documentation for [action](javascript:call_link\('abenbdl_action.htm'\)).

Note: The availability of the following components depends on the context and defined action in the BDEF, that is, only a subset of the below components might be expected to be available depending on how the action is defined in the BDEF.
%cid
%cid\_ref
%key
%param
%pky
%tky

AUTHORIZATION KEY
INSTANCE AUTHORIZATION KEY

Used for retrieving [instance authorization](javascript:call_link\('abenbdl_authorization.htm'\)) information in the context of handler method implementations of ABAP EML [GET PERMISSIONS](javascript:call_link\('abapget_permissions.htm'\)) statements. The keys of RAP BO instances, that have been specified, serve as import parameters for the corresponding handler methods. The keys specify for which RAP BO instance authorization information is to be requested.
A specification with AUTHORIZATION KEY is the same as with INSTANCE AUTHORIZATION KEY.

An authorization check must be specified in the BDEF: authorization master or authorization dependent. See the details in the RAP BDL documentation for [authorization](javascript:call_link\('abenbdl_authorization.htm'\)).

%key
%pky
%tky

AUTHORIZATION RESULT
INSTANCE AUTHORIZATION RESULT

Used for retrieving [instance authorization](javascript:call_link\('abenbdl_authorization.htm'\)) information in the context of handler method implementations of ABAP EML [GET PERMISSIONS](javascript:call_link\('abapget_permissions.htm'\)) statements. The result contains the outcome of the permission information retrieval for authorizations based on the keys and request parameters.
A specification with AUTHORIZATION RESULT is the same as with INSTANCE AUTHORIZATION RESULT.

An authorization check must be specified in the BDEF: authorization master or authorization dependent. See the details in the RAP BDL documentation for [authorization](javascript:call_link\('abenbdl_authorization.htm'\)).

%action
%assoc
%delete
%key
%op
%pky
%tky
%update

CHANGE

Only used in the save\_modified method that is part of a local saver class of an ABP that inherits from the base saver class CL\_ABAP\_BEHAVIOR\_SAVER. It is only used in the context of managed implementations with additional save and unmanaged save.
Internal tables that are typed with TYPE TABLE FOR CHANGE are available as nested tables of the create and update structures typed with [TYPE REQUEST FOR CHANGE](javascript:call_link\('abaptype_request_for.htm'\)) in the save\_modified method.

See the RAP BDL topic [RAP BDL - saving options](javascript:call_link\('abenbdl_saving.htm'\)) for the BDEF prerequisites on managed implementations with additional save and unmanaged save.

%control
%data
%key
Note: The access is not allowed outside of the implementation class.

CREATE

Used for [CREATE](javascript:call_link\('abapmodify_entity_entities_op.htm'\)) or create-by-association ([CREATE BY](javascript:call_link\('abapmodify_entity_entities_op.htm'\))) operations.

CREATE bdef: create must be defined in the root view's part of the BDEF. See the details in the RAP BDL documentation for [standard operations](javascript:call_link\('abenbdl_standard_operations.htm'\)).
CREATE bdef\\\_assoc: create-by-association operations are enabled by default for compositions even if not explicitly maintained. Yet, it is recommended that the create operation for the respective association is included in the root view's or child view's part of the BDEF. A create-by-association operation cannot be carried out for a child entity if it is not explicitly maintained using the { create; } notation. For modifying external cross-BO associations that are not part of the composition, the { create; } notation must be explicitly maintained in the BDEF for the association. As a prerequisite, the behavior for the association \_assoc is maintained in another BDEF accordingly. See more details in the RAP BDL documentation for [Operations for Associations](javascript:call_link\('abenbdl_association.htm'\)).

CREATE bdef:
%cid
%control
%data
%key
CREATE bdef\\assoc:
%cid\_ref
%key
%pky
%target
%tky

DELETE

Used for [DELETE](javascript:call_link\('abapmodify_entity_entities_op.htm'\)) operations.

delete must be defined in the root view's part of the BDEF. See the details in the RAP BDL documentation for [Standard Operations](javascript:call_link\('abenbdl_standard_operations.htm'\)).

%cid\_ref
%key
%pky
%tky

DETERMINATION

Used to specify the keys of RAP BO instances as input parameters in the context of determinations and their handler method implementations. The keys specify which RAP BO instances are to be respected for determinations.

The determination is specified in the BDEF. See the details in the RAP BDL documentation for [Determinations](javascript:call_link\('abenbdl_determinations.htm'\)).

%key
%pky
%tky
Note: The access to determinations is not allowed outside of the implementation class.

EVENT

Used with [RAISE ENTITY EVENT](javascript:call_link\('abapraise_entity_event.htm'\)) statements in the context of [RAP entity events](javascript:call_link\('abenrap_entity_event_glosry.htm'\) "Glossary Entry").

The event evt must be defined in a BDEF or [BDEF extension](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry") with or without parameters.

%key
If the event is defined with parameters, %param is available, too.

FAILED
FAILED EARLY
FAILED LATE

Used to specify [RAP response parameters](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry"). In this case, it is used for information for identifying the data set for which an error occurred in a RAP operation.
The addition EARLY or no addition is relevant in the context of the interaction phase. The addition LATE is relevant in the context of the save phase.

In general, behavior must be defined for the entity in the BDEF.

Note: The availability of the following components depends on the BDEF, that is, only a subset of the below components might be expected to be available.
%action
%assoc
%cid
%create
%delete
%fail
%key
%op
%pky
%tky
%update
In case of LATE, the component %cid is not available.

FEATURES KEY
INSTANCE FEATURES KEY

Used for retrieving [instance feature control](javascript:call_link\('abenbdl_actions_fc.htm'\)) information in the context of handler method implementations of ABAP EML [GET PERMISSIONS](javascript:call_link\('abapget_permissions.htm'\)) statements. The keys of RAP BO instances that have been specified serve as import parameters of the corresponding handler methods. The keys specify for which RAP BO instances feature control information is to be requested.
A specification with FEATURES KEY is the same as with INSTANCE FEATURES KEY.

The property features:instance must be specified in the BDEF. See the subtopics in the RAP BDL documentation on the [Entity Behavior Body](javascript:call_link\('abenbdl_body.htm'\)) for those elements that can be specified with the property.

%key
%pky
%tky

FEATURES RESULT
INSTANCE FEATURES RESULT

Used for retrieving [instance feature control](javascript:call_link\('abenbdl_actions_fc.htm'\)) information in the context of handler method implementations of ABAP EML [GET PERMISSIONS](javascript:call_link\('abapget_permissions.htm'\)) statements. The result contains the outcome of the permission information retrieval for instance features based on the keys and request parameters.
A specification with FEATURES RESULT is the same as with INSTANCE FEATURES RESULT.

The property features:instance must be specified in the BDEF. See the subtopics in the RAP BDL documentation on the [entity behavior body](javascript:call_link\('abenbdl_body.htm'\)) for those elements that can be specified with the property.

Note: The availability of the following components depends on the BDEF, that is, only a subset of the below components might be expected to be available.
%action
%assoc
%delete
%features
%field
%key
%pky
%tky
%update

FUNCTION IMPORT

Used to store the import parameters for [functions](javascript:call_link\('abenbdl_function.htm'\)).

The function is specified in the BDEF. See the details in the RAP BDL documentation for [Function](javascript:call_link\('abenbdl_function.htm'\)).

Note: The availability of the following components depends on the context and defined function in the BDEF, that is, only a subset of the below components might be expected to be available.
%cid
%key
%param
%pky
%tky

FUNCTION RESULT

Used to store the result for [functions](javascript:call_link\('abenbdl_function.htm'\)).

Only available if the function has a result parameter specified in the BDEF. See the details in the RAP BDL documentation for [function](javascript:call_link\('abenbdl_function.htm'\)).

Note: The availability of the following components depends on the context and defined function in the BDEF, that is, only a subset of the below components might be expected to be available.
%cid
%key
%param
%pky
%tky

HIERARCHY

Used for [deep input parameters](javascript:call_link\('abenbdl_action_input_param.htm'\)) and [deep output parameters](javascript:call_link\('abenbdl_action_output_para.htm'\)) in the context of deep [action](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") or [function](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry") parameters. The type is only available for [abstract BDEFs](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry").

Only available if behavior is defined for an abstract entity, i. e. the BDEF must be defined with [with hierarchy;](javascript:call_link\('abenbdl_bdef_abstract_header.htm'\)). Furthermore, deep actions or functions must be defined in the non-abstract BDEFs with the additions [deep parameter](abenbdl_action_input_param.htm#!ABAP_ALTERNATIVE_2@2@) (to interpret the input parameter as structure) or [deep table parameter](abenbdl_action_input_param.htm#!ABAP_ALTERNATIVE_2@2@) (to interpret the input parameter as table).

The type comprises all entity fields plus, if available, a component for every [composition](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry") that itself has subcomponents. All fields keep their original line type.
If the BDEF for the abstract entity includes behavior definitions for the compositions, the derived type contains further components: For a composition with cardinality <= 1, this component is a structure; otherwise, the component is a table. If the behavior for an abstract entity is defined with the addition [with control](abenbdl_define_beh_abstract.htm#!ABAP_ALTERNATIVE_1@1@), the derived type also contains [%control](javascript:call_link\('abapderived_types_comp.htm'\)) as component. The components of %control itself are comprised of all fields of the abstract entity and, as above and if available, structures or internal tables for compositions.
The subcomponents of the [%param](javascript:call_link\('abapderived_types_param.htm'\)) component in the context of deep action and function are typed with this BDEF derived type.

KEY OF

Used, for example, to specify RAP BO instances that are to be locked in the context of the ABAP EML statement [SET LOCKS](javascript:call_link\('abapset_locks.htm'\)). The nested tables of the structures that are typed with [TYPE REQUEST FOR DELETE](javascript:call_link\('abaptype_request_for.htm'\)) in the context of managed RAP BOs [with additional save](javascript:call_link\('abenbdl_saving.htm'\)) and [with unmanaged save](javascript:call_link\('abenbdl_saving.htm'\)) also use this type.

See the details in the RAP BDL documentation for [Locking](javascript:call_link\('abenbdl_locking.htm'\)) and [Saving options](javascript:call_link\('abenbdl_saving.htm'\)).

The keys (not %key).
Note: %is\_draft and %pid are not possible.

MAPPED
MAPPED EARLY
MAPPED LATE

Used to specify [RAP response parameters](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry"). In this case, it is used to provide mapping information on [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry"), for example, which key values were created for given content IDs ([%cid](javascript:call_link\('abapderived_types_cid.htm'\))).
The addition EARLY or no addition is relevant in the context of the interaction phase. The addition LATE is relevant in the context of the save phase. See more details in the documentation for [response\_param](javascript:call_link\('abapeml_response.htm'\)).

In general, behavior must be defined for the entity in the BDEF.

The availability of the following components depends on the context and defined function in the BDEF, that is, only a subset of the below components might be expected to be available.
Components of a table typed without an addition or with the addition EARLY:
%cid
%key
%pid
%pky
%tky
Components of a table typed with the addition LATE:
%key
%pid
%pre
%tmp

PERMISSIONS KEY

Used for specifying the keys of RAP BO instances in the context of ABAP EML [GET PERMISSIONS](javascript:call_link\('abapget_permissions.htm'\)) statements. The keys of RAP BO instances are specified to define for which RAP BO instances permission information is to be requested. The keys serve then as import parameters for the corresponding handler methods [GET PERMISSIONS](javascript:call_link\('abapget_permissions.htm'\)) statements.

 

%key
%pky
%tky

READ IMPORT

Used to import RAP BO instances in [READ](javascript:call_link\('abapread_entity_entities_op.htm'\)) and read-by-association ([READ BY](javascript:call_link\('abapread_entity_entities_op.htm'\))) operations.

READ bdef: Read operations are enabled by default for compositions and cannot be deactivated.
READ bdef\\\_assoc: Read-by-association operations are enabled by default for compositions even if not explicitly maintained. Yet, it is recommended association \_assoc; is used. Reading from cross-BO associations, which are not part of the composition tree, must be explicitly enabled in the BDEF using an association notation.

%control
%key
%pky
%tky

READ LINK

Used to return the primary keys of root and associated entities within a composition tree in [READ](javascript:call_link\('abapread_entity_entities_op.htm'\)) and read-by-association ([READ BY](javascript:call_link\('abapread_entity_entities_op.htm'\))) operations.

READ bdef\\\_assoc: Read-by-association operations are enabled by default for compositions even if not explicitly maintained. Yet, it is recommended that association \_assoc; s used. Reading from cross-BO associations, which are not part of the composition tree, must be explicitly enabled in the BDEF using an association notation.

Structure source containing %key/%pky/ %tky of the source entity, and structure target containing %key/%pky/%tky of the associated entity.

READ RESULT

Used to return successfully read RAP BO instances in [READ](javascript:call_link\('abapread_entity_entities_op.htm'\)) and read-by-association ([READ BY](javascript:call_link\('abapread_entity_entities_op.htm'\))) operations.

READ bdef: Read operations are enabled by default for compositions and cannot be deactivated.
READ bdef\\\_assoc: Read-by-association operations are enabled by default for compositions even if not explicitly maintained. Yet, it is recommended that association \_assoc; is used. Reading from cross-BO associations that are not part of the composition tree must be explicitly enabled in the BDEF using an association notation.

%data
%key
%pky
%tky

REPORTED
REPORTED EARLY
REPORTED LATE

Used to specify [RAP response parameters](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry"). In this case, it is used to exchange messages, for example, error messages, for each entity defined in the BDEF and not related to a specific entity.
The addition EARLY or no addition is relevant in the context of the interaction phase. The addition LATE is relevant in the context of the save phase. See more details in the documentation for [response\_param](javascript:call_link\('abapeml_response.htm'\)).

In general, behavior must be defined for the entity in the BDEF.

%action
%cid
%create
%element
%delete
%global
%key
%msg
%op
%path
%pky
%state\_area
%tky
%update
In case of LATE, the component %cid is not available.

UPDATE

Used for [UPDATE](javascript:call_link\('abapmodify_entity_entities_op.htm'\)) operations.

update must be defined in the root view's part of the BDEF. See the details in the RAP BDL documentation for [standard operations](javascript:call_link\('abenbdl_standard_operations.htm'\)).

%cid\_ref
%control
%data
%key
%pky
%tky

VALIDATION

Used to specify the keys of RAP BO instances as input parameters in the context of validations and their handler method implementations. The keys specify which RAP BO instances are to be considered for validations.

The validation is specified in the BDEF. See the details in the RAP BDL documentation for [Validations](javascript:call_link\('abenbdl_validations.htm'\)).

%key
%pky
%tky
Note: The access to validations is not allowed outside of the implementation class.

Executable Examples

-   The example [Display BDEF Derived Type Components](javascript:call_link\('abeneml_display_derived_type_abexa.htm'\)) allows you to explore multiple BDEF derived type components and their availability in variables typed with TYPE TABLE FOR ... and [TYPE STRUCTURE FOR ...](javascript:call_link\('abaptype_structure_for.htm'\)). The program makes use of three different RAP scenarios: [RAP external numbering](javascript:call_link\('abenrap_ext_numbering_glosry.htm'\) "Glossary Entry"), [late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\)) and [draft](javascript:call_link\('abenbdl_with_draft.htm'\)).
-   The type TYPE TABLE FOR CHANGE is demonstrated in the following examples:
    -   [ABAP EML - TYPE REQUEST FOR in a managed RAP BO with additional save](javascript:call_link\('abenrap_additional_save_abexa.htm'\)): Uses a managed RAP BO whose BDEF is specified with with additional save.
    -   [ABAP EML - TYPE REQUEST FOR in a managed RAP BO with unmanaged save](javascript:call_link\('abenrap_managed_unm_save_abexa.htm'\)): Uses a simple managed RAP BO whose BDEF is specified with with unmanaged save.
-   The type TYPE TABLE FOR HIERARCHY is demonstrated in the example [Using TYPE TABLE/TYPE STRUCTURE FOR HIERARCHY](javascript:call_link\('abenderived_type_hierarchy_abexa.htm'\)).

Continue
![Example](exa.gif "Example") [Using TYPE TABLE/TYPE STRUCTURE FOR HIERARCHY](javascript:call_link\('abenderived_type_hierarchy_abexa.htm'\))



**📖 Source**: [abaptype_table_for.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_table_for.htm)

### abenderived_type_hierarchy_abexa.htm

> **📖 Official SAP Documentation**: [abenderived_type_hierarchy_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenderived_type_hierarchy_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenderived_type_hierarchy_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenderived_type_hierarchy_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenderived_type_hierarchy_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenderived_type_hierarchy_abexa.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [TYPE TABLE FOR](javascript:call_link\('abaptype_table_for.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Using%20TYPE%20TABLE%2FTYPE%20STRUCTURE%20FOR%20HIERARCHY%2C%20ABENDERIVED_TYPE_HIERARCHY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

Using TYPE TABLE/TYPE STRUCTURE FOR HIERARCHY

This example demonstrates [actions](javascript:call_link\('abenaction_glosry.htm'\) "Glossary Entry") whose [deep input parameters](javascript:call_link\('abenbdl_action_input_param.htm'\)) and [deep output parameters](javascript:call_link\('abenbdl_action_output_para.htm'\)) use the [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") [TYPE TABLE FOR HIERARCHY](javascript:call_link\('abaptype_table_for.htm'\)) and [TYPE STRUCTURE FOR HIERARCHY](javascript:call_link\('abaptype_structure_for.htm'\)) with a [managed](javascript:call_link\('abenbdl_impl_type.htm'\)) [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").

Data model

The CDS data model consists of the [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") DEMO\_MANAGED\_HIERARCHY:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_MANAGED\_HIERARCHY
  as select from demo\_tab\_root\_6
  {
    key id,
        char1,
        char2,
        num1,
        num2
  }

Furthermore, the example uses the following abstract entities:

-   DEMO\_ABSTRACT\_ROOT (root abstract entity)
-   DEMO\_HIER\_ABS\_ITEM1
-   DEMO\_HIER\_ABS\_ITEM2
-   DEMO\_HIER\_ABS\_SCALAR ([scalar type](abenbdl_define_beh_abstract.htm#!ABAP_ALTERNATIVE_2@2@))
-   DEMO\_ABSTRACT\_ROOT\_2 (root abstract entity)

Behavior definition

The [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_MANAGED\_HIERARCHY is defined in [RAP BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as follows:

managed implementation in class bp\_demo\_managed\_hierarchy unique;
strict(2);
define behavior for DEMO\_MANAGED\_HIERARCHY
persistent table demo\_tab\_root\_6
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  field ( readonly, numbering : managed ) id;
  // flat
  static action action\_flat\_param parameter
    DEMO\_ABSTRACT\_ROOT result \[1..\*\] $self;
  // structure as input parameter
  static action action\_deep\_param deep parameter
    DEMO\_ABSTRACT\_ROOT result \[1..\*\] $self;
  // table as input parameter
  static action action\_deep\_table\_param deep table
    parameter DEMO\_ABSTRACT\_ROOT result \[1..\*\] $self;
  static action storeHData deep parameter
    DEMO\_ABSTRACT\_ROOT result \[1..\*\] $self;
  static action returnHData deep result \[1\] DEMO\_ABSTRACT\_ROOT;
}

Note: Using the notation numbering : managed for the key field, the value of the key field gets automatically created for each RAP BO instance.

Further BDEFs for root abstract entities that are relevant for the example:

-   DEMO\_ABSTRACT\_ROOT
-   DEMO\_ABSTRACT\_ROOT\_2

Behavior implementation

For the above RAP behavior definition, one [ABAP behavior pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_MANAGED\_HIERARCHY. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool.

The following methods are relevant for the example:

-   action\_flat\_param
    
    The method loops at the flat input parameter. In the loop, the components of a structure are filled with values from the input parameter. These values are also changed within the loop. This change includes adding characters to the character fields and a calculation for the numeric fields. The output parameter result returns the changed instances. Furthermore, the instances are added to an internal table that is typed with the BDEF derived type [TYPE TABLE FOR CREATE](javascript:call_link\('abaptype_table_for.htm'\)). This internal table with RAP BO instances is used as input for a [RAP create operation](javascript:call_link\('abenrap_create_operation_glosry.htm'\) "Glossary Entry").
    
-   action\_deep\_param
    
    The method loops at the deep input parameter which includes a structure of type TYPE STRUCTURE FOR HIERARCHY. In the loop, the components of a structure are filled with selected values from the abstract entities. Similar to the previous method, these values are changed. The structure is added to the output parameter result and to an internal table on whose bases a RAP create operation is carried out.
    
-   action\_deep\_table\_param
    
    The method loops at the deep input parameter which includes a table of type TYPE TABLE FOR HIERARCHY. In the loop, the components of a structure are filled with selected values from the abstract entities. Similar to the previous methods, these values are changed. The structure is added to the output parameter result and to an internal table on whose bases a RAP create operation is carried out.
    
-   returnhdata
    
    The method returns hierarchy data. The focus of this method is the use of variables that are typed with either TYPE TABLE FOR HIERARCHY or TYPE STRUCTURE FOR HIERARCHY. It visualizes how the BDEF derived type component [%param](javascript:call_link\('abapderived_types_param.htm'\)), which is contained in the output parameter result, might be set up, i. e. the component itself can contain subcomponents of type TYPE TABLE FOR HIERARCHY and TYPE STRUCTURE FOR HIERARCHY. The variables, i. e. the structures and internal tables, are filled with demo data. This data is added to the output parameter result.
    
-   storehdata
    
    The method loops at the deep input parameter which includes a structure of type TYPE STRUCTURE FOR HIERARCHY. In the loop, an internal table, which is typed with TYPE TABLE FOR CREATE, is filled with selected values from the abstract entities. A RAP create operation is carried out creating those instances that have been added to the internal table. Furthermore, the instances are added to the output parameter result.
    

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_der\_types\_hrrchy DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    METHODS:
      initialize\_dbtabs.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_der\_types\_hrrchy IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demo: TYPE TABLE/STRUCTURE FOR HIERARCHY\` ).
    "Prepare input parameter for BDEF derived types ...FOR HIERARCHY...
    DATA:
      "Derived types for abstract root entity
      ls\_hier\_abs\_root
        TYPE STRUCTURE FOR HIERARCHY demo\_abstract\_root,
      lt\_hier\_abs\_root
        TYPE TABLE FOR HIERARCHY demo\_abstract\_root,
      "Derived types for abstract entities
      ls\_hier\_abs\_item1
        TYPE STRUCTURE FOR HIERARCHY demo\_hier\_abs\_item1,
      lt\_hier\_abs\_item2
        TYPE TABLE FOR HIERARCHY demo\_hier\_abs\_item2,
      ls\_struc
         TYPE demo\_abstract\_root.
    "Add hierarchy data. Fill structures and tables.
    "Create entries for structure to be used as input parameter
    "for action action\_deep\_param.
    ls\_struc = VALUE #( char1 = 'f'
                        char2 = 'para'
                        num1 = 1
                        num2 = 2 ).
    ls\_hier\_abs\_item1 = VALUE #( char1 = 'd'
                                 char2 = 'para'
                                 num1 = 3
                                 num2 = 4
                                 \_root2 = VALUE #(
                                            char1 = 'demo'
                                            char2 = 'demo'
                                            num1 = 5
                                            num2 = 6 )
                                 %control = VALUE #(
                                  char1 = if\_abap\_behv=>mk-on
                                  char2 = if\_abap\_behv=>mk-on
                                  num1 = if\_abap\_behv=>mk-on
                                  num2 = if\_abap\_behv=>mk-on
                                  \_root2 = if\_abap\_behv=>mk-on )
                                ).
    lt\_hier\_abs\_item2 = VALUE #( %control = VALUE #(
                                  char1 = if\_abap\_behv=>mk-on
                                  char2 = if\_abap\_behv=>mk-on
                                  num1 = if\_abap\_behv=>mk-on
                                  num2 = if\_abap\_behv=>mk-on )
                                 ( char1 = 'd'
                                   char2 = 'para'
                                   num1 = 7
                                   num2 = 8 )
                                 ( char1 = 'd'
                                   char2 = 'para'
                                   num1 = 9
                                   num2 = 10 )
                                ).
    ls\_hier\_abs\_root = VALUE #( char1 = ls\_struc-char1
                                char2 = ls\_struc-char2
                                num1 = ls\_struc-num1
                                num2 = ls\_struc-num2
                                \_item1 = ls\_hier\_abs\_item1
                                \_item2 = lt\_hier\_abs\_item2
                                \_scalar = 'scalar'
                                %control = VALUE #(
                                  char1 = if\_abap\_behv=>mk-on
                                  char2 = if\_abap\_behv=>mk-on
                                  num1 = if\_abap\_behv=>mk-on
                                  num2 = if\_abap\_behv=>mk-on
                                  \_item1 = if\_abap\_behv=>mk-on
                                  \_item2 = if\_abap\_behv=>mk-on
                                  \_scalar = if\_abap\_behv=>mk-on ) ).
    "Create entries for internal table to be used as input parameter
    "for action action\_deep\_table\_param.
    DO 2 TIMES.
      APPEND ls\_hier\_abs\_root TO lt\_hier\_abs\_root.
    ENDDO.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Executing action\_flat\_param
    MODIFY ENTITY demo\_managed\_hierarchy
         EXECUTE action\_flat\_param
         FROM VALUE #( ( %cid = 'cid\_flat'
                         %param = ls\_struc ) )
        RESULT FINAL(lt\_result1)
        MAPPED FINAL(ls\_mapped1)
        REPORTED FINAL(ls\_reported1)
        FAILED FINAL(ls\_failed1).
    out->write\_html( \`<b>Executing action \`
                     && \`<i>action\_flat\_param</i></b>\`
      )->write\_doc( \`action\_flat\_param: Action result\`
      )->write( lt\_result1 ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT \* FROM demo\_tab\_root\_6 INTO TABLE @FINAL(db\_tab1).
    out->write\_doc( \`Database table entries:\`
      )->write( db\_tab1
      )->line( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Executing action\_deep\_param
    MODIFY ENTITY demo\_managed\_hierarchy
       EXECUTE action\_deep\_param
       FROM VALUE #( ( %cid = 'cid\_deep\_param'
       "Note: %param is here typed with TYPE STRUCTURE FOR HIERARCHY
                       %param = ls\_hier\_abs\_root ) )
        RESULT FINAL(lt\_result2)
        MAPPED FINAL(ls\_mapped2)
        REPORTED FINAL(ls\_reported2)
        FAILED FINAL(ls\_failed2).
    out->write\_html( \`<b>Executing action \`
                    && \`<i>action\_deep\_param</i></b>\`
     )->write\_doc( \`action\_deep\_param: Action result\`
     )->write( lt\_result2 ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT \* FROM demo\_tab\_root\_6 INTO TABLE @FINAL(db\_tab2).
    out->write\_doc( \`Database table entries:\`
      )->write( db\_tab2
      )->line( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Executing action\_deep\_table\_param
    MODIFY ENTITY demo\_managed\_hierarchy
      EXECUTE action\_deep\_table\_param
         FROM VALUE #( ( %cid = 'cid\_deep\_table\_param'
         "Note: %param is here typed with TYPE TABLE FOR HIERARCHY
                         %param = lt\_hier\_abs\_root ) )
        RESULT FINAL(lt\_result3)
        MAPPED FINAL(ls\_mapped3)
        REPORTED FINAL(ls\_reported3)
        FAILED FINAL(ls\_failed3).
    out->write\_html( \`<b>Executing action \`
                    && \`<i>action\_deep\_table\_param</i></b>\`
     )->write\_doc( \`action\_deep\_table\_param: Action result\`
     )->write( lt\_result3 ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT \* FROM demo\_tab\_root\_6 INTO TABLE @FINAL(db\_tab3).
    out->write\_doc( \`Database table entries:\`
      )->write( db\_tab3
      )->line( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Executing returnHData / storeHData
    MODIFY ENTITY demo\_managed\_hierarchy
      EXECUTE returnhdata FROM VALUE #( ( %cid = 'cid\_returnHData' ) )
        RESULT FINAL(lt\_result4)
        MAPPED FINAL(ls\_mapped4)
        REPORTED FINAL(ls\_reported4)
        FAILED FINAL(ls\_failed4).
    out->write\_html( \`<b>Executing actions \`
        && \`<i>returnHData</i> and <i>storeHData</i></b>\`
     )->write\_doc( \`returnHData: Action result\`
     )->write( lt\_result4 ).
    MODIFY ENTITY demo\_managed\_hierarchy
       EXECUTE storehdata FROM CORRESPONDING #( lt\_result4 )
      RESULT FINAL(lt\_result5)
      MAPPED FINAL(ls\_mapped5)
      REPORTED FINAL(ls\_reported5)
      FAILED FINAL(ls\_failed5).
    out->write\_doc( \`storeHData: Action result\`
     )->write( lt\_result5 ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT \* FROM demo\_tab\_root\_6 INTO TABLE @FINAL(db\_tab4).
    out->write\_doc( \`Database table entries:\`
      )->write( db\_tab4 ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_6.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The class includes multiple ABAP EML [MODIFY](javascript:call_link\('abapmodify_entity_entities.htm'\)) requests executing actions. Before the actions are carried out, the input parameters for those actions is prepared. In this case, multiple internal tables and structures that are typed with the BDEF derived types TYPE TABLE FOR HIERARCHY or TYPE STRUCTURE FOR HIERARCHY respectively are created. The structures and internal tables are filled with demo values to provide input parameters for the actions that have deep parameters. In case of the action action\_deep\_param, the input parameter is a structure. In case of the action action\_deep\_table\_param, the input parameter is an internal table. The value assignment just visualizes the hierarchy data and possible components of the BDEF derived types, i. e. multiple types with FOR HIERARCHY can occur in those BDEF derived types.

The following ABAP EML MODIFY requests executing actions are covered in the example:

1.  Executing action action\_flat\_param
    
    A content ID [%cid](javascript:call_link\('abapderived_types_cid.htm'\)) and a flat parameter %param are provided as input parameter. A [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)) statement saves the RAP BO instances to the database. The result of the action is output based on the method implementation mentioned above. The database table entries are retrieved using a [SELECT](javascript:call_link\('abapselect.htm'\)) statement and displayed as well.
    
2.  Executing action action\_deep\_param
    
    A content ID [%cid](javascript:call_link\('abapderived_types_cid.htm'\)) and a deep parameter %param are provided as input parameter. Here, %param is a structure. A [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)) statement saves the RAP BO instances to the database. The result of the action is output based on the method implementation mentioned above. The database table entries are retrieved using a [SELECT](javascript:call_link\('abapselect.htm'\)) statement and output as well.
    
3.  Executing action action\_deep\_table\_param
    
    A content ID [%cid](javascript:call_link\('abapderived_types_cid.htm'\)) and a deep parameter %param are provided as input parameter. Here, %param is an internal table. A [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)) statement saves the RAP BO instances to the database. The result of the action is output based on the method implementation mentioned above. The database table entries are displayed, too.
    
4.  Executing actions returnhdata and storehdata
    
    A content ID [%cid](javascript:call_link\('abapderived_types_cid.htm'\)) is provided as input parameter for the returnhdata method. The method returns data based on the method implementation mentioned above. This data is used as input parameter for the storehdata method which includes a RAP create operations that create RAP BO instances. A [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)) statement saves the RAP BO instances to the database. The result of both actions is displayed as well as the database table entries.
