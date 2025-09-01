  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_rap_other.htm) →  [ABAP for RAP, BDEF Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrpm_derived_types.htm) → 

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

Special ABAP type that is used for internal tables in the context of [RAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_glosry.htm "Glossary Entry") to enable the communication between a [RAP BO provider](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") and a [RAP BO consumer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry"). These internal tables hold input parameters, or output parameters respectively, to enable mass processing of data by bundling ABAP EML READ or MODIFY requests in one method call.

For all operations defined in the [BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"), ABAP types can be derived and used with this special syntax. The use is dependent on the definition in the BDEF. For example, if the operation create is not specified in the BDEF, TYPE TABLE FOR CREATE cannot be used.

The internal tables contain various [special components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_comp.htm), also depending on the BDEF.

Notes on the syntax:

-   bdef: bdef means the full entity name of either a root or child entity, or an alias. An alias, however, only works within handler methods of a RAP BO provider. Aliases do not work for explicit declarations outside of implementation classes. The reference to a child entity can also be specified together with its root entity by writing the root entity name followed by \\\\ and the child entity name: root\_entity\\\\child\_entity. If this syntax is used, the child's alias name must be specified if specified in the BDEF: root\_entity\\\\child\_entity\_alias.
-   bdef\\\_assoc: \_assoc is the name of an association specified in the underlying CDS view of the RAP BO. The reference to the association is made using a backslash \\.
-   bdef~action: action is the name of an action specified in the BDEF. The reference to the action is made using a tilde (~).
-   bdef~function: function is the name of a function specified in the BDEF. The reference to the function is made using a tilde (~).
-   bdef~group: group is the name of a group specified in the BDEF. The reference to the group is made using a tilde (~).
-   bdef~det: det is the name of a determination specified in the BDEF. The reference to the determination is made using a tilde (~).
-   bdef~valid: valid is the name of a validation specified in the BDEF. The reference to the validation is made using a tilde (~).

Hints

-   The components of BDEF derived types can be checked via the element information in [ADT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadt_glosry.htm "Glossary Entry") by choosing F2 for the typed variable.
    ![Figure](bdoc_derived_types_adt_f2.png)
    
    For a convenient handling and specification of the % components, the ADT code completion shows possible entries and simplifies inserting them without the need to remember the respective field names from the underlying CDS view.
    
    ![Figure](bdoc_derived_types_adt_f2_2.png)
-   The components listed in the Components column of the following table might cover more than mentioned there. It depends on the context . For example, the draft indicator %is\_draft is available in case of drafts only. %pid is only available in [late numbering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_late_numbering.htm) scenarios.

Overview

The following table covers the variants including information on the BDEF prerequisites and the tables' components.

For details on the components, see [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_comp.htm). For details on the BDEF specifications, see the subtopics in [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm).

TYPE TABLE FOR ...

Purpose

BDEF Prerequisites

Components

ACTION IMPORT

Used to store the import parameters for [actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action.htm).

The action is specified in the BDEF. See the details in the CDS BDL documentation for [action](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action.htm).

Note: The availability of the following components depends on the context and defined action in the BDEF, that is, only a subset of the below components can be expected to be available. For example, %param is only available if the action is defined with the notation PARAMETER.
%cid
%cid\_ref
%key
%param
%pky
%tky

ACTION RESULT

Used to store the result for [actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action.htm).

Only available if the action has a result parameter specified in the BDEF. See the details in the CDS BDL documentation for [action](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action.htm).

Note: The availability of the following components depends on the context and defined action in the BDEF, that is, only a subset of the below components might be expected to be available depending on how the action is defined in the BDEF.
%cid
%cid\_ref
%key
%param
%pky
%tky

AUTHORIZATION KEY
INSTANCE AUTHORIZATION KEY

Used for retrieving [instance authorization](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization.htm) information in the context of handler method implementations of ABAP EML [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions.htm) statements. The keys of RAP BO instances, that have been specified, serve as import parameters for the corresponding handler methods. The keys specify for which RAP BO instance authorization information is to be requested.
A specification with AUTHORIZATION KEY is the same as with INSTANCE AUTHORIZATION KEY.

An authorization check must be specified in the BDEF: authorization master or authorization dependent. See the details in the CDS BDL documentation for [authorization](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization.htm).

%key
%pky
%tky

AUTHORIZATION RESULT
INSTANCE AUTHORIZATION RESULT

Used for retrieving [instance authorization](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization.htm) information in the context of handler method implementations of ABAP EML [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions.htm) statements. The result contains the outcome of the permission information retrieval for authorizations based on the keys and request parameters.
A specification with AUTHORIZATION RESULT is the same as with INSTANCE AUTHORIZATION RESULT.

An authorization check must be specified in the BDEF: authorization master or authorization dependent. See the details in the CDS BDL documentation for [authorization](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization.htm).

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
Internal tables that are typed with TYPE TABLE FOR CHANGE are available as nested tables of the create and update structures typed with [TYPE REQUEST FOR CHANGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_request_for.htm) in the save\_modified method.

See the CDS BDL topic [CDS BDL - saving options](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_saving.htm) for the BDEF prerequisites on managed implementations with additional save and unmanaged save.

%control
%data
%key
Note: The access is not allowed outside of the implementation class.

CREATE

Used for [CREATE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entity_entities_op.htm) or create-by-association ([CREATE BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entity_entities_op.htm)) operations.

CREATE bdef: create must be defined in the root view's part of the BDEF. See the details in the CDS BDL documentation for [standard operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_standard_operations.htm).
CREATE bdef\\\_assoc: create-by-association operations are enabled by default for compositions even if not explicitly maintained. Yet, it is recommended to do so and include the create operation for the respective association in the root view's or child view's part of the BDEF. A create-by-association operation cannot be carried out for a child entity if it is not explicitly maintained using the { create; } notation. For modifying external cross-BO associations that are not part of the composition, the { create; } notation must be explicitly maintained in the BDEF for the association. As a prerequisite, the behavior for the association \_assoc is maintained in another BDEF accordingly. See more details in the CDS BDL documentation for [Operations for Associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_association.htm).

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

Used for [DELETE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entity_entities_op.htm) operations.

delete must be defined in the root view's part of the BDEF. See the details in the CDS BDL documentation for [Standard Operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_standard_operations.htm).

%cid\_ref
%key
%pky
%tky

DETERMINATION

Used to specify the keys of RAP BO instances as input parameters in the context of determinations and their handler method implementations. The keys specify which RAP BO instances are to be respected for determinations.

The determination is specified in the BDEF. See the details in the CDS BDL documentation for [Determinations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_determinations.htm).

%key
%pky
%tky
Note: The access to determinations is not allowed outside of the implementation class.

FAILED
FAILED EARLY
FAILED LATE

Used to specify [response parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm). In this case, it is used to log instances for which an operation has failed.
If no addition or the addition EARLY is used, the information is provided in the interaction phase. If the addition LATE is used, the information is provided in the save phase.

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

Used for retrieving [instance feature control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_fc.htm) information in the context of handler method implementations of ABAP EML [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions.htm) statements. The keys of RAP BO instances that have been specified serve as import parameters of the corresponding handler methods. The keys specify for which RAP BO instances feature control information is to be requested.
A specification with FEATURES KEY is the same as with INSTANCE FEATURES KEY.

The property features:instance must be specified in the BDEF. See the subtopics in the CDS BDL documentation on the [Entity Behavior Body](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_body.htm) for those elements that can be specified with the property.

%key
%pky
%tky

FEATURES RESULT
INSTANCE FEATURES RESULT

Used for retrieving [instance feature control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_fc.htm) information in the context of handler method implementations of ABAP EML [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions.htm) statements. The result contains the outcome of the permission information retrieval for instance features based on the keys and request parameters.
A specification with FEATURES RESULT is the same as with INSTANCE FEATURES RESULT.

The property features:instance must be specified in the BDEF. See the subtopics in the CDS BDL documentation on the [entity behavior body](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_body.htm) for those elements that can be specified with the property.

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

Used to store the import parameters for [functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_function.htm).

The function is specified in the BDEF. See the details in the CDS BDL documentation for [Function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_function.htm).

Note: The availability of the following components depends on the context and defined function in the BDEF, that is, only a subset of the below components might be expected to be available.
%cid
%key
%param
%pky
%tky

FUNCTION RESULT

Used to store the result for [functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_function.htm).

Only available if the function has a result parameter specified in the BDEF. See the details in the CDS BDL documentation for [function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_function.htm).

Note: The availability of the following components depends on the context and defined function in the BDEF, that is, only a subset of the below components might be expected to be available.
%cid
%key
%param
%pky
%tky

HIERARCHY

Used for [deep input parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action_input_param.htm) and [deep output parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action_output_para.htm) in the context of deep [action](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_action_glosry.htm "Glossary Entry") or [function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_function_glosry.htm "Glossary Entry") parameters. The type is only available for [abstract BDEFs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_abstract_bdef_glosry.htm "Glossary Entry").

Only available if behavior is defined for an abstract entity, i. e. the BDEF must be defined with [with hierarchy;](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_bdef_abstract_header.htm). Furthermore, deep actions or functions must be defined in the non-abstract BDEFs with the additions [deep parameter](abenbdl_action_input_param.htm#!ABAP_ALTERNATIVE_2@2@) (to interpret the input parameter as structure) or [deep table parameter](abenbdl_action_input_param.htm#!ABAP_ALTERNATIVE_2@2@) (to interpret the input parameter as table).

The type comprises all entity fields plus, if available, a component for every [composition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_composition_glosry.htm "Glossary Entry") that itself has subcomponents. All fields keep their original line type.
If the BDEF for the abstract entity includes behavior definitions for the compositions, the derived type contains further components: For a composition with cardinality <= 1, this component is a structure; otherwise, the component is a table. If the behavior for an abstract entity is defined with the addition [with control](abenbdl_define_beh_abstract.htm#!ABAP_ALTERNATIVE_1@1@), the derived type also contains [%control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_comp.htm) as component. The components of %control itself are comprised of all fields of the abstract entity and, as above and if available, structures or internal tables for compositions.
The subcomponents of the [%param](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_param.htm) component in the context of deep action and function are typed with this BDEF derived type.

KEY OF

Used, for example, to specify RAP BO instances that are to be locked in the context of the ABAP EML statement [SET LOCKS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_locks.htm). The nested tables of the structures that are typed with [TYPE REQUEST FOR DELETE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_request_for.htm) in the context of managed RAP BOs [with additional save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_saving.htm) and [with unmanaged save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_saving.htm) also use this type.

See the details in the CDS BDL documentation for [Locking](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_locking.htm) and [Saving options](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_saving.htm).

The keys (not %key).
Note: %is\_draft and %pid are not possible.

MAPPED
MAPPED EARLY
MAPPED LATE

Used to specify [response parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm). In this case, it is used to get key mapping information, i. e. which keys have which %cid.
If no addition or the addition EARLY is used, the information is provided in the interaction phase. If the addition LATE is used, the information is provided in the save phase. See more details in the documentation for [response\_param](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm).

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

Used for specifying the keys of RAP BO instances in the context of ABAP EML [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions.htm) statements. The keys of RAP BO instances are specified to define for which RAP BO instances permission information is to be requested. The keys serve then as import parameters for the corresponding handler methods [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions.htm) statements.

 

%key
%pky
%tky

READ IMPORT

Used to import RAP BO instances in [READ](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities_op.htm) and read-by-association ([READ BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities_op.htm)) operations.

READ bdef: Read operations are enabled by default for compositions and cannot be deactivated.
READ bdef\\\_assoc: Read-by-association operations are enabled by default for compositions even if not explicitly maintained. Yet, it is recommended to do so using association \_assoc;. Reading from cross-BO associations, which are not part of the composition tree, must be explicitly enabled in the BDEF using an association notation.

%control
%key
%pky
%tky

READ LINK

Used to return the primary keys of root and associated entities within a composition tree in [READ](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities_op.htm) and read-by-association ([READ BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities_op.htm)) operations.

READ bdef\\\_assoc: Read-by-association operations are enabled by default for compositions even if not explicitly maintained. Yet, it is recommended to do so using association \_assoc;. Reading from cross-BO associations, which are not part of the composition tree, must be explicitly enabled in the BDEF using an association notation.

Structure source containing %key/%pky/ %tky of the source entity, and structure target containing %key/%pky/%tky of the associated entity.

READ RESULT

Used to return successfully read RAP BO instances in [READ](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities_op.htm) and read-by-association ([READ BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities_op.htm)) operations.

READ bdef: Read operations are enabled by default for compositions and cannot be deactivated.
READ bdef\\\_assoc: Read-by-association operations are enabled by default for compositions even if not explicitly maintained. Yet, it is recommended to do so using association \_assoc;. Reading from cross-BO associations that are not part of the composition tree must be explicitly enabled in the BDEF using an association notation.

%data
%key
%pky
%tky

REPORTED
REPORTED EARLY
REPORTED LATE

Used to specify [response parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm). In this case, it is used to get error messages in case of failures.
If no addition or the addition EARLY is used, the information is provided in the interaction phase. If the addition LATE is used, the information is provided in the save phase.

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

Used for [UPDATE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entity_entities_op.htm) operations.

update must be defined in the root view's part of the BDEF. See the details in the CDS BDL documentation for [standard operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_standard_operations.htm).

%cid\_ref
%control
%data
%key
%pky
%tky

VALIDATION

Used to specify the keys of RAP BO instances as input parameters in the context of validations and their handler method implementations. The keys specify which RAP BO instances are to be considered for validations.

The validation is specified in the BDEF. See the details in the CDS BDL documentation for [Validations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_validations.htm).

%key
%pky
%tky
Note: The access to validations is not allowed outside of the implementation class.

Executable Examples

-   The example [Display BDEF derived type components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_display_derived_type_abexa.htm) allows to explore the diverse BDEF derived type components and their availability in variables type with TYPE TABLE FOR ... and [TYPE STRUCTURE FOR ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_structure_for.htm). The program makes use of three different RAP scenarios: [RAP external numbering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_ext_numbering_glosry.htm "Glossary Entry"), [late numbering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_late_numbering.htm) and [draft](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_with_draft.htm).
-   The type TYPE TABLE FOR CHANGE is demonstrated in the following examples:
    -   [ABAP EML - TYPE REQUEST FOR in a managed RAP BO with additional save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_additional_save_abexa.htm): Uses a managed RAP BO whose BDEF is specified with with additional save.
    -   [ABAP EML - TYPE REQUEST FOR in a managed RAP BO with unmanaged save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_managed_unm_save_abexa.htm): Uses a simple managed RAP BO whose BDEF is specified with with unmanaged save.