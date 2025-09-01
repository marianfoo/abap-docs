---
title: "Use"
description: |
  %global is a component of BDEF derived types(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm 'Glossary Entry'). It is used as a component of the reported(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm) response para
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_global.htm"
abapFile: "abapderived_types_global.htm"
keywords: ["update", "delete", "do", "if", "case", "try", "method", "class", "data", "types", "abapderived", "global"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_rap_other.htm) →  [ABAP for RAP, BDEF Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_comp.htm) →  [Components related to information processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_info.htm) → 

%global

Use

%global is a component of [BDEF derived types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). It is used as a component of the [reported](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm) response parameter and indicates whether a message is to be retrieved for [global feature control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_fc.htm) and [global authorization](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization.htm). These message do not belong to a specific instance.

Type

The component has the following type: ABP\_BEHV\_FLAG

Where used

This component can occur in the following type declarations of [TYPE TABLE FOR ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_table_for.htm) and [TYPE STRUCTURE FOR ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_structure_for.htm):

-   REPORTED \[EARLY/LATE\]

Further Information

See more details on message handling in the Development Guide for the ABAP RESTful Application Programming Model, section Messages.

Example

The following source code section taken from the CCIMP include of the global class of the [behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") BP\_DEMO\_MANAGED\_ROOT\_REPORTED demonstrates the component %global in the context of an implementation for the get\_global\_authorizations method. See the executable program for this example further down.

METHOD get\_global\_authorizations.
  "The variable auth\_flag represents the authorization that is
  "granted or not.
  "The demo avoids an authorization object. In this case, the
  "permission is always granted.
  DATA(auth\_flag) = abap\_true.
  IF auth\_flag =  abap\_true.
    IF requested\_authorizations-%create EQ if\_abap\_behv=>mk-on.
      result-%create = if\_abap\_behv=>perm-o-enabled.
      APPEND VALUE #(
        %msg = new\_message\_with\_text(
                text = 'Authorization granted.'
                severity = if\_abap\_behv\_message=>severity-success )
        %create = if\_abap\_behv=>mk-on
        %global = if\_abap\_behv=>mk-on )
        TO reported-demo\_managed\_root\_reported.
    ENDIF.
    IF requested\_authorizations-%delete EQ if\_abap\_behv=>mk-on.
      result-%delete = if\_abap\_behv=>perm-o-enabled.
      APPEND VALUE #(
        %msg = new\_message\_with\_text(
          text = 'Authorization granted.'
          severity = if\_abap\_behv\_message=>severity-success )
        %delete = if\_abap\_behv=>mk-on
        %global = if\_abap\_behv=>mk-on )
        TO reported-demo\_managed\_root\_reported.
    ENDIF.
    IF requested\_authorizations-%update EQ if\_abap\_behv=>mk-on.
      result-%update = if\_abap\_behv=>perm-o-enabled.
      APPEND VALUE #(
        %msg = new\_message\_with\_text(
          text = 'Authorization granted.'
          severity = if\_abap\_behv\_message=>severity-success )
        %update = if\_abap\_behv=>mk-on
        %global = if\_abap\_behv=>mk-on )
        TO reported-demo\_managed\_root\_reported.
    ENDIF.
  ELSE.
    result-%create = if\_abap\_behv=>perm-o-unauthorized.
    result-%delete = if\_abap\_behv=>perm-o-unauthorized.
    result-%update = if\_abap\_behv=>perm-o-unauthorized.
    APPEND VALUE #(
      %msg = new\_message\_with\_text(
        text = 'Authorization denied.'
        severity = if\_abap\_behv\_message=>severity-error )
      %create = if\_abap\_behv=>mk-off
      %update = if\_abap\_behv=>mk-off
      %delete = if\_abap\_behv=>mk-off
      %global = if\_abap\_behv=>mk-on )
      TO reported-demo\_managed\_root\_reported.
  ENDIF.
  "Get time stamp
  DATA: ts2 TYPE timestampl.
  GET TIME STAMP FIELD ts2.
  "Fill %OTHER
  reported-%other = VALUE #( (
    new\_message\_with\_text(
      severity = if\_abap\_behv\_message=>severity-information
      text   = |a) Unbound message set at { ts2 TIMESTAMP = ISO }.|
     ) ) ).
ENDMETHOD.

Executable Example

The example [Example for message-related BDEF derived type components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenderived_types_reported_abexa.htm) demonstrates the use of various BDEF derived type components including %global with a managed RAP BO.