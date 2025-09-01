---
title: "Component of the Derived Types"
description: |
  Work in progress  Derived data types(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrpm_derived_types.htm) in the context of ABAP RAP(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_rap_glosry.htm 'Glossary Entry') also contain components that are not bas
version: "7.55"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomponents_derived_types.htm"
abapFile: "abencomponents_derived_types.htm"
keywords: ["insert", "update", "delete", "do", "if", "try", "method", "data", "types", "abencomponents", "derived"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_business_objects.htm) →  [RAP in ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrestful_abap_programming.htm) →  [Derived Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrpm_derived_types.htm) → 

Component of the Derived Types

\* Work in progress \*

[Derived data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrpm_derived_types.htm) in the context of [ABAP RAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_rap_glosry.htm "Glossary Entry") also contain components that are not based on the line type of the entity and that start with the character % to avoid naming conflicts with original components. For example, the line type of the failed table failed contains a component %FAIL used to save the symptom of a failed instance, plus an include structure %KEY that contains all primary key fields of the entity.

The following list contains the most frequent components of the derived types:

-   Content ID %CID
    A temporary primary key for an instance (if the business object runtime did not create a primary key).
    The content ID is granted to bind the result of an operation to a name and address it again in a later operation. More specifically this applies to the operation CREATE, where the input does not contain the granted instance key (except where keys are granted externally). The component %CID is generated in the operations CREATE, UPDATE, DELETE, create-by-association, and ACTION and applied to the parameters failed, mapped, and reported.

-   %CID\_REF
    A reference to the content ID %CID.

-   %KEY
    Contains all key elements of an entity.
    The component %KEY is generated in the operations CREATE, UPDATE, DELETE, create-by-association, ACTION, READ, and read-by-association and applied to the parameters LINK, failed, mapped and reported.

-   %PID
    The temporary ID component of type ABP\_BEHV\_PID.
    %PID is available only if [late numbering](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_late_numbering.htm) is defined in the [behavior definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") without the addition in place. %PID is used only if the application does not provide a temporary primary key %TMP. In the operation CREATE, %PID must be entered in the mapped table and hence set with respect to %CID.
    The component %PID is generated in the operations UPDATE, DELETE create-by-association, ACTION, READ, and read-by-association and applied to the parameters failed, mapped, and reported.

-   %PIDPARENT and %PID\_Assoc
    In the period before the final keys are granted, the %PID fields must represent the instance hierarchy and their associations using non-composition associations. The instance hierarchy is represented using the field %PIDPARENT, which (generically) applies the function of the superordinate foreign key. The associations are provided using %PID\_Assoc fields, which are inserted in a target entity with late numbering and to-one [cardinality](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencardinality_glosry.htm "Glossary Entry") for each association with the name (or alias Assoc) released in a transactional way. Cardinality 0..1 or 1 matches a foreign key in the source entity. %PID\_Assoc applies this function if it is not filled.

-   %CONTROL
    Specifies which elements of an entity are requested by the consumer.
    For each entity element, the control structure %CONTROL contains a flag specifying whether the field in question is provided or requested by the consumer. The fields of the entity have the uniform type ABP\_BEHV\_FLAG.
    The component %CONTROL is generated in CREATE, UPDATE, create-by-association (in %TARGET), and READ IMPORT.

-   %DATA
    Contains all data elements of an entity.
    The component %DATA is generated in CREATE, UPDATE, create-by-association (in %TARGET), and READ RESULT.

-   %FAIL
    Saves the symptom of a failed data record of a business object instance. The possible values of the component %FAIL are defined by the ENUM type IF\_ABAP\_BEHV=>T\_FAIL\_CAUSE.

-   %MSG
    Provides an instance of IF\_ABAP\_BEHV\_MESSAGE. The default methods for the messages new\_message( ) and new\_message\_with\_text( ) can be used.

-   %ELEMENT
    References all elements of an entity

-   %PARAM
    Contains the input type and output type of an action.

Example

Uses components of the derived types in a parameter with errors:

APPEND #VALUE( %KEY = item-%KEY %FAIL = ... ) TO failed-Item.

item points to a line of the input parameters, for example update\_import\_parameter.