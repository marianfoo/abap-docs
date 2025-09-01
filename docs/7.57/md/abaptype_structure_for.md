---
title: "TYPE STRUCTURE FOR"
description: |
  Syntax ... STRUCTURE FOR  ACTION IMPORT bdef~action    ACTION REQUEST bdef~action    ACTION RESULT bdef~action    INSTANCE AUTHORIZATION KEY bdef~group    INSTANCE AUTHORIZATION REQUEST bdef~group    INSTANCE AUT
version: "7.57"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_structure_for.htm"
abapFile: "abaptype_structure_for.htm"
keywords: ["select", "update", "delete", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abaptype", "structure", "for"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_rap_other.htm) →  [ABAP for RAP, BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrpm_derived_types.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: TYPE STRUCTURE FOR, ABAPTYPE_STRUCTURE_FOR, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

TYPE STRUCTURE FOR

Syntax

... STRUCTURE FOR *{* ACTION IMPORT bdef~action *}*
                *|* *{* ACTION REQUEST bdef~action *}*
                *|* *{* ACTION RESULT bdef~action *}*
                *|* *{* *\[*INSTANCE*\]* AUTHORIZATION KEY bdef*\[*~group*\]* *}*
                *|* *{* *\[*INSTANCE*\]* AUTHORIZATION REQUEST bdef*\[*~group*\]* *}*
                *|* *{* *\[*INSTANCE*\]* AUTHORIZATION RESULT bdef*\[*~group*\]* *}*
                *|* *{* CHANGE bdef *}*
                *|* *{* CREATE bdef *\[*\\\_assoc*\]* *}*
                *|* *{* DELETE bdef *}*
                *|* *{* DETERMINATION bdef~det *}*
                *|* *{* EVENT bdef~evt *}*
                *|* *{* FAILED *\[*EARLY *|* LATE*\]* bdef *}*
                *|* *{* *\[*INSTANCE*\]* FEATURES KEY bdef*\[*~group*\]* *}*
                *|* *{* *\[*INSTANCE*\]* FEATURES REQUEST bdef*\[*~group*\]* *}*
                *|* *{* *\[*INSTANCE*\]* FEATURES RESULT bdef*\[*~group*\]* *}*
                *|* *{* FUNCTION IMPORT bdef~function *}*
                *|* *{* FUNCTION REQUEST bdef~function *}*
                *|* *{* FUNCTION RESULT bdef~function *}*
                *|* *{* GLOBAL AUTHORIZATION REQUEST bdef*\[*~group*\]* *}*
                *|* *{* GLOBAL AUTHORIZATION RESULT bdef*\[*~group*\]* *}*
                *|* *{* GLOBAL FEATURES REQUEST bdef*\[*~group*\]* *}*
                *|* *{* GLOBAL FEATURES RESULT bdef*\[*~group*\]* *}*
                *|* *{* HIERARCHY bdef *}*
                *|* *{* KEY OF bdef *}*
                *|* *{* MAPPED *\[*EARLY *|* LATE*\]* bdef *}*
                *|* *{* PERMISSIONS KEY bdef *}*
                *|* *{* PERMISSIONS REQUEST bdef *}*
                *|* *{* PERMISSIONS RESULT bdef *}*
                *|* *{* READ IMPORT bdef *\[*\\\_assoc*\]* *}*
                *|* *{* READ LINK bdef\\\_assoc *}*
                *|* *{* READ RESULT bdef *\[*\\\_assoc*\]* *}*
                *|* *{* REPORTED *\[*EARLY *|* LATE*\]* bdef *}*
                *|* *{* UPDATE bdef *}*
                *|* *{* VALIDATION bdef~valid *}* ...

Effect

Special ABAP type for structures in the context of [RAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_glosry.htm "Glossary Entry"). The structures have [special components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_comp.htm) tailored for RAP purposes. Those structures are used to enable the communication between a [RAP BO provider](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") and a [RAP BO consumer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry").

In principal, structures typed with TYPE STRUCTURE FOR constitute a helper construct if structures are needed for internal tables in the RAP context. Apart from that, several structures serve distinct purposes. For example, in the context of [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_permissions.htm) statements, a structure of type TYPE STRUCTURE FOR PERMISSIONS REQUEST must be specified as REQUEST parameter to define which operations, fields or actions are respected for the retrieval of permission information.

With the use of TYPE STRUCTURE FOR, it is possible to get the line type of an internal table that is typed with the respective [BDEF derived type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). In doing so, a type declaration with LINE OF can be avoided.

Notes on the syntax:

-   bdef: bdef means the full entity name of either a root or child entity, or an alias. An alias, however, only works within handler methods of a RAP BO provider. Aliases do not work for explicit declarations outside of implementation classes. The reference to a child entity can also be specified together with its root entity by writing the root entity name followed by \\\\ and the child entity name: root\_entity\\\\child\_entity. If this syntax is used, the child's alias name must be specified if specified in the BDEF: root\_entity\\\\child\_entity\_alias.
-   bdef\\\_assoc: \_assoc is the name of an association specified in the underlying CDS view of the RAP BO. The reference to the association is made using a backslash \\.
-   bdef~action: action is the name of an action specified in the BDEF. The reference to the action is made using a tilde (~).
-   bdef~function: function is the name of a function specified in the BDEF. The reference to the function is made using a tilde (~).
-   bdef~group: group is the name of a group specified in the BDEF. The reference to the group is made using a tilde (~).
-   bdef~det: det is the name of a determination specified in the BDEF. The reference to the determination is made using a tilde (~).
-   bdef~valid: valid is the name of a validation specified in the BDEF. The reference to the validation is made using a tilde (~).
-   bdef~evt: evt is the name of a [RAP entity event](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_entity_event_glosry.htm "Glossary Entry") specified in the BDEF. The reference to the event is made using a tilde (~).

Hints

-   Internal tables typed with [TYPE TABLE FOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_table_for.htm) and structures typed with TYPE STRUCTURE FOR largely share the same set of variants, whereas there are more possible variants for the type TYPE STRUCTURE FOR in total.
-   For details on the components (%cid, %cid\_ref, etc.), see the topic [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_comp.htm).
-   The components listed in the Components column of the following tables might cover more components or fewer than mentioned there. It depends on the specification of the BDEF. For example, the draft indicator %is\_draft is available in case of drafts only in multiple BDEF derived types. %pid is only available in BDEF derived types in [late numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_late_numbering.htm) scenarios.

Overview 1

The following table covers the variants including information on the BDEF prerequisites and the structures' components. The table includes only those variants that are exclusive for TYPE STRUCTURE FOR and not available for [TYPE TABLE FOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_table_for.htm).

TYPE STRUCTURE FOR ...

Purpose

Prerequisites

[Possible Components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_comp.htm)

ACTION REQUEST

Used to specify whether [actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action.htm) should be executed based on request parameters, i. e. if the result of the action should be returned completely or only parts of it.

The notation result selective must be specified for an action.

Key and data fields are typed with ABP\_BEHV\_FLAG.

AUTHORIZATION REQUEST
INSTANCE AUTHORIZATION REQUEST

Used to retrieve information on [instance-based authorization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization.htm) in the context of handler method implementations of ABAP EML [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_permissions.htm) statements. Request parameters, that have been specified for [RAP BO instances](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") to define the conditions of the permission information retrieval, serve as import parameters for the corresponding handler methods. For example, the information retrieval for certain operations can be enabled or disabled.
A specification with AUTHORIZATION REQUEST is the same as with INSTANCE AUTHORIZATION REQUEST.

An authorization check must be specified in the BDEF using the property instance. See the details in the CDS BDL documentation for [authorization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization.htm).

Note: The availability of the following components depends on the context and definition in the BDEF, that is, only a subset of the components below can be expected to be available.
Subcomponents of %action and %assoc typed with ABP\_BEHV\_FLAG
%create, %delete and %update typed with ABP\_BEHV\_FLAG

FEATURES REQUEST
INSTANCE FEATURES REQUEST

Used for retrieving [instance feature control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_actions_fc.htm) information in the context of handler method implementations of ABAP EML [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_permissions.htm) statements. Request parameters, that have been specified for RAP BO instances to define the conditions of the permission information retrieval, serve as import parameters for the corresponding handler methods. For example, the information retrieval for certain operations can be enabled or disabled.
A specification with FEATURES REQUEST is the same as with INSTANCE FEATURES REQUEST.

The property features: instance must be specified in the BDEF.

Note: The availability of the following components depends on the context and definitions in the BDEF, that is, only a subset of the below components can be expected to be available.
Subcomponents of %action and %assoc typed with ABP\_BEHV\_FLAG
%create, %delete and %update typed with ABP\_BEHV\_FLAG
Subcomponents of %field typed with ABP\_BEHV\_FEATURE

FUNCTION REQUEST

Used to specify whether [functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_function.htm) should be executed based on request parameters, i. e. if the result of the function should be returned completely or only parts of it.

The notation result selective must be specified for a function.

Key and data fields typed with ABP\_BEHV\_FLAG.

GLOBAL FEATURES RESULT

Used for retrieving information on [global feature control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_actions_fc.htm) in the context of handler method implementations of ABAP EML [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_permissions.htm) statements. The result contains the outcome of the permission information retrieval for global features based on the request parameters.

The property features: global must be specified in the BDEF.

Note: The availability of the following components depends on the context and definition in the BDEF, that is, only a subset of the below components can be expected to be available.
Subcomponents of %action and %assoc typed with ABP\_BEHV\_FLAG
%create, %delete and %update typed with ABP\_BEHV\_FLAG

GLOBAL AUTHORIZATION REQUEST

Used to retrieve information on [global authorization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization.htm) in the context of handler method implementations of ABAP EML [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_permissions.htm) statements. Request parameters, that have been specified for RAP BO instances to define the conditions of the permission information retrieval, serve as import parameters for the corresponding handler methods. For example, the information retrieval for certain operations can be enabled or disabled.

An authorization check must be specified in the BDEF using the property global. See the details in the CDS BDL documentation for [authorization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization.htm).

Note: The availability of the following components depends on the context and definition in the BDEF, that is, only a subset of the below components can be expected to be available.
Subcomponents of %action typed with ABP\_BEHV\_FLAG
%create, %delete and %update typed with ABP\_BEHV\_FLAG

GLOBAL AUTHORIZATION RESULT

Used to retrieve information on [global authorization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization.htm) in the context of handler method implementations of ABAP EML [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_permissions.htm) statements. The result contains the outcome of the permission information retrieval for global authorization based on the request parameters.

An authorization check must be specified in the BDEF using the property global. See the details in the CDS BDL documentation for [authorization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization.htm).

Note: The availability of the following components depends on the context and definition in the BDEF, that is, only a subset of the below components can be expected to be available.
Subcomponents of %action and %assoc typed with ABP\_BEHV\_FLAG
%create, %delete and %update typed with ABP\_BEHV\_FLAG

GLOBAL FEATURES REQUEST

Used to retrieve information on [global feature control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_actions_fc.htm) in the context of handler method implementations of ABAP EML [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_permissions.htm) statements. Request parameters, that have been specified for RAP BO instances to define the conditions of the permission information retrieval, serve as import parameters for the corresponding handler methods. For example, the information retrieval for certain operations can be enabled or disabled.

The property features: global must be specified in the BDEF.

Note: The availability of the following components depends on the context and definition in the BDEF, that is, only a subset of the below components can be expected to be available.
Subcomponents of %action and %assoc typed with ABP\_BEHV\_FLAG
%create, %delete and %update typed with ABP\_BEHV\_FLAG

PERMISSIONS REQUEST

Used to retrieve permission information in the context of ABAP EML [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_permissions.htm) statements. Request parameters are specified for RAP BO instances to define the conditions of the permission information retrieval, for example, if information retrieval for certain operations is enabled or disabled.

Operations, actions, associations and fields must be specified in the BDEF so that the respective components are available in the structure. For details on the BDEF specifications, see the subtopics in [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm).

Note: The availability of the following components depends on the context and definitions in the BDEF, that is, only a subset of the below components can be expected to be available.
Subcomponents of %action and %assoc typed with ABP\_BEHV\_FLAG
%create, %delete and %update typed with ABP\_BEHV\_FLAG
Subcomponents of %field typed with ABP\_BEHV\_FEATURE

PERMISSIONS RESULT

Used to retrieve permission information in the context of ABAP EML [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_permissions.htm) statements. The result contains the outcome of the permission information retrieval for [global and instance authorization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization.htm), [global and instance feature control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_actions_fc.htm) and [static feature control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_field_char.htm).

Operations, actions, associations and fields must be specified in the BDEF so that the respective components are available in the structure. For details on the BDEF specifications, see the subtopics in [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm).

Note: The availability of the following components depends on the context and definition in the BDEF, that is, only a subset of the below components can be expected to be available.
Internal table instances holding the following components:
Key names directly (not %keys etc.) retaining the full line type;
subcomponents of %action and %assoc typed with ABP\_BEHV\_FLAG;
%delete and %update typed with ABP\_BEHV\_FLAG;
subcomponents of %field typed with ABP\_BEHV\_FEATURE; the permissions can also be addressed via the component group %perm
Structure global holding the following components:
Subcomponents of %action and %assoc typed with ABP\_BEHV\_FLAG ;
%create, %delete and %update typed with ABP\_BEHV\_FLAG;
subcomponents of %field typed with ABP\_BEHV\_FEATURE

Overview 2

The following table covers the variants that are available for both TYPE STRUCTURE FOR and [TYPE TABLE FOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_table_for.htm).

TYPE STRUCTURE FOR ...

Purpose

Prerequisites

Components

ACTION IMPORT

Used to store the import parameters for [actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action.htm).

The action is specified in the BDEF. See the details in the CDS BDL documentation for [action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action.htm).

Note: The availability of the following components depends on the context and defined action in the BDEF, that is, only a subset of the below components can be expected to be available. For example, %param is only available if the action is defined with the notation PARAMETER.
%cid
%cid\_ref
%key
%param
%pky
%tky

ACTION RESULT

Used to store the result for [actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action.htm).

Only available if the action has a result parameter specified in the BDEF. See the details in the CDS BDL documentation for [action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action.htm).

Note: The availability of the following components depends on the context and defined action in the BDEF, that is, only a subset of the below components might be expected to be available depending on how the action is defined in the BDEF.
%cid
%cid\_ref
%key
%param
%pky
%tky

AUTHORIZATION KEY
INSTANCE AUTHORIZATION KEY

Used for retrieving [instance authorization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization.htm) information in the context of handler method implementations of ABAP EML [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_permissions.htm) statements. The keys of RAP BO instances, that have been specified, serve as import parameters for the corresponding handler methods. The keys specify for which RAP BO instance authorization information is to be requested.
A specification with AUTHORIZATION KEY is the same as with INSTANCE AUTHORIZATION KEY.

An authorization check must be specified in the BDEF: authorization master or authorization dependent. See the details in the CDS BDL documentation for [authorization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization.htm).

%key
%pky
%tky

AUTHORIZATION RESULT
INSTANCE AUTHORIZATION RESULT

Used for retrieving [instance authorization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization.htm) information in the context of handler method implementations of ABAP EML [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_permissions.htm) statements. The result contains the outcome of the permission information retrieval for authorizations based on the keys and request parameters.
A specification with AUTHORIZATION RESULT is the same as with INSTANCE AUTHORIZATION RESULT.

An authorization check must be specified in the BDEF: authorization master or authorization dependent. See the details in the CDS BDL documentation for [authorization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization.htm).

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
Internal tables that are typed with TYPE TABLE FOR CHANGE are available as nested tables of the create and update structures typed with [TYPE REQUEST FOR CHANGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_request_for.htm) in the save\_modified method.

See the CDS BDL topic [CDS BDL - saving options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_saving.htm) for the BDEF prerequisites on managed implementations with additional save and unmanaged save.

%control
%data
%key
Note: The access is not allowed outside of the implementation class.

CREATE

Used for [CREATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm) or create-by-association ([CREATE BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm)) operations.

CREATE bdef: create must be defined in the root view's part of the BDEF. See the details in the CDS BDL documentation for [standard operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_standard_operations.htm).
CREATE bdef\\\_assoc: create-by-association operations are enabled by default for compositions even if not explicitly maintained. Yet, it is recommended that the create operation for the respective association is included in the root view's or child view's part of the BDEF. A create-by-association operation cannot be carried out for a child entity if it is not explicitly maintained using the { create; } notation. For modifying external cross-BO associations that are not part of the composition, the { create; } notation must be explicitly maintained in the BDEF for the association. As a prerequisite, the behavior for the association \_assoc is maintained in another BDEF accordingly. See more details in the CDS BDL documentation for [Operations for Associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_association.htm).

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

Used for [DELETE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm) operations.

delete must be defined in the root view's part of the BDEF. See the details in the CDS BDL documentation for [Standard Operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_standard_operations.htm).

%cid\_ref
%key
%pky
%tky

DETERMINATION

Used to specify the keys of RAP BO instances as input parameters in the context of determinations and their handler method implementations. The keys specify which RAP BO instances are to be respected for determinations.

The determination is specified in the BDEF. See the details in the CDS BDL documentation for [Determinations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_determinations.htm).

%key
%pky
%tky
Note: The access to determinations is not allowed outside of the implementation class.

EVENT

Used with [RAISE ENTITY EVENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_entity_event.htm) statements in the context of [RAP entity events](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_entity_event_glosry.htm "Glossary Entry").

The event evt must be defined in a BDEF or [BDEF extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_extension_glosry.htm "Glossary Entry") with or without parameters.

%key
If the event is defined with parameters, %param is available, too.

FAILED
FAILED EARLY
FAILED LATE

Used to specify [response parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm). In this case, it is used to log instances for which an operation has failed.
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

Used for retrieving [instance feature control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_actions_fc.htm) information in the context of handler method implementations of ABAP EML [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_permissions.htm) statements. The keys of RAP BO instances that have been specified serve as import parameters of the corresponding handler methods. The keys specify for which RAP BO instances feature control information is to be requested.
A specification with FEATURES KEY is the same as with INSTANCE FEATURES KEY.

The property features:instance must be specified in the BDEF. See the subtopics in the CDS BDL documentation on the [Entity Behavior Body](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_body.htm) for those elements that can be specified with the property.

%key
%pky
%tky

FEATURES RESULT
INSTANCE FEATURES RESULT

Used for retrieving [instance feature control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_actions_fc.htm) information in the context of handler method implementations of ABAP EML [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_permissions.htm) statements. The result contains the outcome of the permission information retrieval for instance features based on the keys and request parameters.
A specification with FEATURES RESULT is the same as with INSTANCE FEATURES RESULT.

The property features:instance must be specified in the BDEF. See the subtopics in the CDS BDL documentation on the [entity behavior body](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_body.htm) for those elements that can be specified with the property.

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

Used to store the import parameters for [functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_function.htm).

The function is specified in the BDEF. See the details in the CDS BDL documentation for [Function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_function.htm).

Note: The availability of the following components depends on the context and defined function in the BDEF, that is, only a subset of the below components might be expected to be available.
%cid
%key
%param
%pky
%tky

FUNCTION RESULT

Used to store the result for [functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_function.htm).

Only available if the function has a result parameter specified in the BDEF. See the details in the CDS BDL documentation for [function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_function.htm).

Note: The availability of the following components depends on the context and defined function in the BDEF, that is, only a subset of the below components might be expected to be available.
%cid
%key
%param
%pky
%tky

HIERARCHY

Used for [deep input parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action_input_param.htm) and [deep output parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action_output_para.htm) in the context of deep [action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_action_glosry.htm "Glossary Entry") or [function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_function_glosry.htm "Glossary Entry") parameters. The type is only available for [abstract BDEFs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_abstract_bdef_glosry.htm "Glossary Entry").

Only available if behavior is defined for an abstract entity, i. e. the BDEF must be defined with [with hierarchy;](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_bdef_abstract_header.htm). Furthermore, deep actions or functions must be defined in the non-abstract BDEFs with the additions [deep parameter](abenbdl_action_input_param.htm#!ABAP_ALTERNATIVE_2@2@) (to interpret the input parameter as structure) or [deep table parameter](abenbdl_action_input_param.htm#!ABAP_ALTERNATIVE_2@2@) (to interpret the input parameter as table).

The type comprises all entity fields plus, if available, a component for every [composition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_composition_glosry.htm "Glossary Entry") that itself has subcomponents. All fields keep their original line type.
If the BDEF for the abstract entity includes behavior definitions for the compositions, the derived type contains further components: For a composition with cardinality <= 1, this component is a structure; otherwise, the component is a table. If the behavior for an abstract entity is defined with the addition [with control](abenbdl_define_beh_abstract.htm#!ABAP_ALTERNATIVE_1@1@), the derived type also contains [%control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_comp.htm) as component. The components of %control itself are comprised of all fields of the abstract entity and, as above and if available, structures or internal tables for compositions.
The subcomponents of the [%param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_param.htm) component in the context of deep action and function are typed with this BDEF derived type.

KEY OF

Used, for example, to specify RAP BO instances that are to be locked in the context of the ABAP EML statement [SET LOCKS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locks.htm). The nested tables of the structures that are typed with [TYPE REQUEST FOR DELETE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_request_for.htm) in the context of managed RAP BOs [with additional save](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_saving.htm) and [with unmanaged save](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_saving.htm) also use this type.

See the details in the CDS BDL documentation for [Locking](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_locking.htm) and [Saving options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_saving.htm).

The keys (not %key).
Note: %is\_draft and %pid are not possible.

MAPPED
MAPPED EARLY
MAPPED LATE

Used to specify [response parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm). In this case, it is used to get key mapping information, i. e. which keys have which %cid.
If no addition or the addition EARLY is used, the information is provided in the interaction phase. If the addition LATE is used, the information is provided in the save phase. See more details in the documentation for [response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm).

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

Used for specifying the keys of RAP BO instances in the context of ABAP EML [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_permissions.htm) statements. The keys of RAP BO instances are specified to define for which RAP BO instances permission information is to be requested. The keys serve then as import parameters for the corresponding handler methods [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_permissions.htm) statements.

 

%key
%pky
%tky

READ IMPORT

Used to import RAP BO instances in [READ](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_entity_entities_op.htm) and read-by-association ([READ BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_entity_entities_op.htm)) operations.

READ bdef: Read operations are enabled by default for compositions and cannot be deactivated.
READ bdef\\\_assoc: Read-by-association operations are enabled by default for compositions even if not explicitly maintained. Yet, it is recommended association \_assoc; is used. Reading from cross-BO associations, which are not part of the composition tree, must be explicitly enabled in the BDEF using an association notation.

%control
%key
%pky
%tky

READ LINK

Used to return the primary keys of root and associated entities within a composition tree in [READ](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_entity_entities_op.htm) and read-by-association ([READ BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_entity_entities_op.htm)) operations.

READ bdef\\\_assoc: Read-by-association operations are enabled by default for compositions even if not explicitly maintained. Yet, it is recommended that association \_assoc; s used. Reading from cross-BO associations, which are not part of the composition tree, must be explicitly enabled in the BDEF using an association notation.

Structure source containing %key/%pky/ %tky of the source entity, and structure target containing %key/%pky/%tky of the associated entity.

READ RESULT

Used to return successfully read RAP BO instances in [READ](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_entity_entities_op.htm) and read-by-association ([READ BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_entity_entities_op.htm)) operations.

READ bdef: Read operations are enabled by default for compositions and cannot be deactivated.
READ bdef\\\_assoc: Read-by-association operations are enabled by default for compositions even if not explicitly maintained. Yet, it is recommended that association \_assoc; is used. Reading from cross-BO associations that are not part of the composition tree must be explicitly enabled in the BDEF using an association notation.

%data
%key
%pky
%tky

REPORTED
REPORTED EARLY
REPORTED LATE

Used to specify [response parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm). In this case, it is used to get error messages in case of failures.
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

Used for [UPDATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm) operations.

update must be defined in the root view's part of the BDEF. See the details in the CDS BDL documentation for [standard operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_standard_operations.htm).

%cid\_ref
%control
%data
%key
%pky
%tky

VALIDATION

Used to specify the keys of RAP BO instances as input parameters in the context of validations and their handler method implementations. The keys specify which RAP BO instances are to be considered for validations.

The validation is specified in the BDEF. See the details in the CDS BDL documentation for [Validations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_validations.htm).

%key
%pky
%tky
Note: The access to validations is not allowed outside of the implementation class.

Executable Examples

-   The example [Display BDEF Derived Type Components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_display_derived_type_abexa.htm) allows you to explore the various BDEF derived type components and their availability in variables type with [TYPE TABLE FOR ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_table_for.htm) and TYPE STRUCTURE FOR .... The program makes use of three different RAP scenarios: [RAP external numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_ext_numbering_glosry.htm "Glossary Entry"), [late numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_late_numbering.htm) and [draft](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_with_draft.htm).
-   The type TYPE STRUCTURE FOR CHANGE is demonstrated in the following examples:
    -   [ABAP EML - TYPE REQUEST FOR in a managed RAP BO with additional save](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_additional_save_abexa.htm): Uses a managed RAP BO whose BDEF is specified with with additional save.
    -   [ABAP EML - TYPE REQUEST FOR in a managed RAP BO with unmanaged save](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_managed_unm_save_abexa.htm): Uses a simple managed RAP BO whose BDEF is specified with with unmanaged save.
-   The type TYPE STRUCTURE FOR HIERARCHY is demonstrated in the example [Using TYPE TABLE/TYPE STRUCTURE FOR HIERARCHY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenderived_type_hierarchy_abexa.htm).