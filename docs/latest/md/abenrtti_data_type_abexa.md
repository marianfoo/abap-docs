---
title: "Determining Data Types"
description: |
  This example demonstrates how the properties of data types can be determined at runtime. Source Code  CCDEF CLASS conv_exc DEFINITION INHERITING FROM cx_static_check. ENDCLASS.  Public class definition CLASS cl_demo_rtti_data_types DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREA
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrtti_data_type_abexa.htm"
abapFile: "abenrtti_data_type_abexa.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "types", "abenrtti", "type", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Attributes of Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendescribe_field.htm) →  [Runtime Type Services (RTTS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrtti.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Determining%20Data%20Types%2C%20ABENRTTI_DATA_TYPE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Determining Data Types

This example demonstrates how the properties of data types can be determined at runtime.

Source Code   

\* CCDEF
CLASS conv\_exc DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
\* Public class definition
CLASS cl\_demo\_rtti\_data\_types DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rtti\_data\_types IMPLEMENTATION.
  METHOD main.
    DATA: type1 TYPE c LENGTH 30 VALUE 'SCARR',
          type2 TYPE c LENGTH 30 VALUE 'SPFLI'.
    DATA: dref1 TYPE REF TO data,
          dref2 TYPE REF TO data.
    DATA: descr\_ref1 TYPE REF TO cl\_abap\_typedescr,
          descr\_ref2 TYPE REF TO cl\_abap\_typedescr.
    cl\_demo\_input=>new(
     )->add\_field( CHANGING field = type1
     )->request(   CHANGING field = type2 ).
    TRY.
        CREATE DATA: dref1 TYPE (type1),
                     dref2 TYPE (type2).
      CATCH cx\_sy\_create\_data\_error.
        out->write( 'Create data error!' ).
        RETURN.
    ENDTRY.
    descr\_ref1 = cl\_abap\_typedescr=>describe\_by\_data( dref1->\* ).
    descr\_ref2 = cl\_abap\_typedescr=>describe\_by\_data( dref2->\* ).
    TRY.
        IF descr\_ref1 <> descr\_ref2.
          RAISE EXCEPTION TYPE conv\_exc.
        ELSE.
          dref2->\* = dref1->\*.
        ENDIF.
      CATCH conv\_exc.
        out->write(
          \`Assignment from type \`    &&
          descr\_ref2->absolute\_name  &&
          \` to \`                     &&
          descr\_ref1->absolute\_name  &&
          \` not allowed!\` ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

This example expands on the [executable example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendescribe_field_abexa.htm) for DESCRIBE FIELD to the correct check of any data type.

When complex types, such as SCARR and SPFLI, are entered in the input fields, the RTTI determines the full [absolute type name](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabsolute_typename_glosry.htm "Glossary Entry").