---
title: "Conversion Operator, Enumerated Types"
description: |
  This example demonstrates the use of the conversion operator CONV(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_conv.htm) for enumerated types. Source Code  Public class definition CLASS cl_demo_conv_enum DEFINITION INHERITING FROM cl_demo_classrun PU
version: "7.58"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconv_enum_abexa.htm"
abapFile: "abenconv_enum_abexa.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "types", "abenconv", "enum", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) →  [CONV, Conversion Operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_conv.htm) →  [CONV, Conversion of Enumerated Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconv_constructor_enum.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Conversion%20Operator%2C%20Enumerated%20Types%2C%20ABENCONV_ENUM_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Conversion Operator, Enumerated Types

This example demonstrates the use of the conversion operator [CONV](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_conv.htm) for enumerated types.

Source Code   

\* Public class definition
CLASS cl\_demo\_conv\_enum DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_conv\_enum IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF ENUM planet,
        mercury,
        venus,
        earth,
        mars,
        jupiter,
        saturn,
        uranus,
        neptune,
      END OF ENUM planet.
    DATA number TYPE i.
    cl\_demo\_input=>new( )->request( CHANGING field = number ).
    TRY.
        FINAL(planet) = CONV planet( CONV i( earth ) + number ).
        out->write( planet ).
      CATCH cx\_sy\_conversion\_no\_enum\_value.
        out->write( 'Enter a number between -2 and 5' ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

The inner conversion operator [CONV](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_conv.htm) return the value of the enumerated constant earth in the base type i of the [enumerated type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_type_glosry.htm "Glossary Entry") planet. An input value is added to this. Applying the conversion operator to the result determines a planet, which has the specified distance of earth.