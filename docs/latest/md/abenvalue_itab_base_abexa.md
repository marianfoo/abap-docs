---
title: "VALUE, Addition BASE for Internal Tables"
description: |
  This example demonstrates the value operator VALUE(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_itab.htm) for internal tables with and without the addition BASE Source Code  Public class definition CLASS cl_demo_value_base DEFINITION INHERITING
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_itab_base_abexa.htm"
abapFile: "abenvalue_itab_base_abexa.htm"
keywords: ["insert", "loop", "do", "if", "method", "class", "data", "types", "internal-table", "abenvalue", "itab", "base", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencreate_objects.htm) →  [VALUE, Value Operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_value.htm) →  [VALUE, Internal Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_itab.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20VALUE%2C%20Addition%20BASE%20for%20Internal%20Tables%2C%20ABENVALUE_ITAB_BASE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

VALUE, Addition BASE for Internal Tables

This example demonstrates the value operator [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_itab.htm) for internal tables with and without the addition BASE

Source Code   

\* Public class definition
CLASS cl\_demo\_value\_base DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_value\_base IMPLEMENTATION.
  METHOD main.
    TYPES itab TYPE TABLE OF i.
    DATA itab\_no\_base TYPE itab.
    DO 10 TIMES.
      itab\_no\_base = VALUE #( ( sy-index ) ).
    ENDDO.
    DATA itab\_base TYPE itab.
    DO 10 TIMES.
      itab\_base = VALUE #( BASE itab\_base ( sy-index ) ).
    ENDDO.
    out->write( itab\_no\_base
      )->write( itab\_base ).
  ENDMETHOD.
ENDCLASS.

Description   

Without the addition BASE, the value operator constructs a new internal table from scratch during each call and this is assigned to itab\_no\_base. As a result, itab\_no\_base contains only one line after the DO loop.

With the addition BASE, the value inserts its line into an internal table that is prefilled with the content of itab\_no\_base during each call. As a result, itab\_base contains 10 lines after the DO loop.