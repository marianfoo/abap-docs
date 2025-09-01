---
title: "CHANGING-Parameter"
description: |
  Syntax CHANGING  failed    TYPE DATA mapped    TYPE DATA reported  TYPE DATA. Effect When implementing a business object provider, the implicit output parameters failed, mapped and reported are used for errors, mapping and messages in the method signature of a handler class(https://help.sap.com/do
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenchanging_type_data.htm"
abapFile: "abenchanging_type_data.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abenchanging", "type"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) → 

CHANGING-Parameter

Syntax

CHANGING  failed    TYPE DATA
          mapped    TYPE DATA
          reported  TYPE DATA.

Effect

When implementing a business object provider, the implicit output parameters failed, mapped and reported are used for errors, mapping and messages in the method signature of a [handler class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_handler_class.htm). Those parameters don’t have fixed data types and are assigned with [derived types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_derived_types.htm) from the behavior definition instead.

The parameters failed, mapped and reported can be explicitly declared as CHANGING parameters, using the generic DATA type. The DATA type is replaced by the derived types that result from the specific behavior definition.

The following describes the parameters failed, mapped and reported:

-   failed
    Defined as a nested table that contains a table for every entity defined in the [behavior definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbehavior_definition_glosry.htm "Glossary Entry"). The failed tables contain information to identify the data record where an error has occurred: [%CID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomponents_derived_types.htm), *\[*[%PID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomponents_derived_types.htm)*\]*, ID of the relevant business object instance and [%FAIL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomponents_derived_types.htm).

-   mapped
    Only relevant for the CREATE operation. Defined as a nested table that contains a table for every entity defined in the behavior definition. You receive information about which key values were assigned for certain %CID by the application. The relevant data record is identified using the components %CID, *\[*%PID*\]* and [%KEY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomponents_derived_types.htm). Possible combinations:

-   %CID and ID: The user has not specified an ID, which is why an ID or a temporary ID is created.

-   %CID and %PID: The user has not specified an ID and no temporary numbers are available.

-   reported
    Defined as a nested table that contains a table for every entity defined in the behavior definition. The output parameter reported is used to return messages. The relevant data record for a message is identified using the following components: %CID, *\[*%PID*\]*, ID of the relevant instance, [%MSG](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomponents_derived_types.htm) with an instance of the message interface, [%ELEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomponents_derived_types.htm) referring to all elements of an entity. Messages that don’t refer to a certain entity instance can be returned using the component %OTHERS.

Example

TYPES tt\_f\_root TYPE TABLE FOR FAILED sales\_order.

The element information for the failed parameter type tt\_f\_root:

tt\_f\_root TYPE STANDARD TABLE OF
%CID      TYPE abp\_behv\_cid
travelid  TYPE travel\_id
%FAIL     TYPE if\_abap\_behv=>t\_failinfo

Example

TYPES tt\_r\_root TYPE TABLE FOR REPORTED sales\_order.

The element information for the parameter type tt\_r\_root:

tt\_r\_root     TYPE STANDARD TABLE OF
%CID          TYPE abp\_behv\_cid
travelid      TYPE travel\_id
%msg          TYPE REF TO if\_abap\_behv\_message
%ELEMENT
  travelid   TYPE abap\_behv\_flag
  customerid TYPE abap\_behv\_flag
  agencyid   TYPE abap\_behv\_flag