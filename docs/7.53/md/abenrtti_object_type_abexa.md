---
title: "Determining Object Types"
description: |
  This example demonstrates how the dynamic types of objects can be determined at runtime. Source Code REPORT demo_rtti_object_types. CLASS conv_exc DEFINITION INHERITING FROM cx_static_check. ENDCLASS. CLASS c1 DEFINITION. ENDCLASS. CLASS c2 DEFINITION. ENDCLASS. CLASS demo DEFINITION. PUBLIC S
version: "7.53"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrtti_object_type_abexa.htm"
abapFile: "abenrtti_object_type_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "types", "abenrtti", "object", "type", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Attributes of Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendescribe_field.htm) →  [RTTS - Runtime Type Services](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrtti.htm) → 

Determining Object Types

This example demonstrates how the dynamic types of objects can be determined at runtime.

Source Code

REPORT demo\_rtti\_object\_types.
CLASS conv\_exc DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
CLASS c1 DEFINITION.
ENDCLASS.
CLASS c2 DEFINITION.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: otype1 TYPE c LENGTH 30 VALUE 'C1',
          otype2 TYPE c LENGTH 30 VALUE 'C2'.
    DATA: oref1 TYPE REF TO object,
          oref2 TYPE REF TO object.
    DATA: descr\_ref1 TYPE REF TO cl\_abap\_typedescr,
          descr\_ref2 TYPE REF TO cl\_abap\_typedescr.
    cl\_demo\_input=>add\_field( CHANGING field = otype1 ).
    cl\_demo\_input=>request(   CHANGING field = otype2 ).
    TRY.
        otype1 = cl\_abap\_dyn\_prg=>check\_whitelist\_str(
          EXPORTING
            val                      = otype1
            whitelist                =  \`C1,C2\` ).
        otype2 = cl\_abap\_dyn\_prg=>check\_whitelist\_str(
          EXPORTING
            val                      = otype2
            whitelist                =  \`C1,C2\` ).
      CATCH cx\_abap\_not\_in\_whitelist.
        cl\_demo\_output=>display( 'Input not allowed' ).
        LEAVE PROGRAM.
    ENDTRY.
    TRY.
        CREATE OBJECT: oref1 TYPE (otype1),
                       oref2 TYPE (otype2).
      CATCH cx\_sy\_create\_object\_error.
        cl\_demo\_output=>display( 'Create object error!' ).
        LEAVE PROGRAM.
      CATCH cx\_root.
        cl\_demo\_output=>display( 'Other error!' ).
        LEAVE PROGRAM.
    ENDTRY.
    descr\_ref1 = cl\_abap\_typedescr=>describe\_by\_object\_ref( oref1 ).
    descr\_ref2 = cl\_abap\_typedescr=>describe\_by\_object\_ref( oref2 ).
    TRY.
        IF descr\_ref1 <> descr\_ref2.
          RAISE EXCEPTION TYPE conv\_exc.
        ELSE.
          oref1 = oref2.
        ENDIF.
      CATCH conv\_exc.
        cl\_demo\_output=>display(
          \`Assignment from type \`   && |\\n| &&
          descr\_ref2->absolute\_name && |\\n| &&
          \`to \`                     && |\\n| &&
          descr\_ref1->absolute\_name && |\\n| &&
          \`not allowed!\` ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example is the object type counterpart of the [executable example](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrtti_data_type_abexa.htm) for data types. Here, the dynamic type of reference variables is determined, namely the [absolute type name](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabsolute_typename_glosry.htm "Glossary Entry") of the class of the referenced object.