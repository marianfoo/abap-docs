  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Attributes of Data Objects](javascript:call_link\('abendescribe_field.htm'\)) →  [RTTS - Runtime Type Services](javascript:call_link\('abenrtti.htm'\)) → 

Determining Data Types

This example demonstrates how the attributes of data types can be determined at runtime.

Source Code

REPORT demo\_rtti\_data\_types.
CLASS conv\_exc DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: type1 TYPE c LENGTH 30 VALUE 'SCARR',
          type2 TYPE c LENGTH 30 VALUE 'SPFLI'.
    DATA: dref1 TYPE REF TO data,
          dref2 TYPE REF TO data.
    FIELD-SYMBOLS: <data1> TYPE any,
                   <data2> TYPE any.
    DATA: descr\_ref1 TYPE REF TO cl\_abap\_typedescr,
          descr\_ref2 TYPE REF TO cl\_abap\_typedescr.
    cl\_demo\_input=>add\_field( CHANGING field = type1 ).
    cl\_demo\_input=>request(   CHANGING field = type2 ).
    TRY.
        CREATE DATA: dref1 TYPE (type1),
                     dref2 TYPE (type2).
        ASSIGN: dref1->\* TO <data1>,
                dref2->\* TO <data2>.
      CATCH cx\_sy\_create\_data\_error.
        cl\_demo\_output=>display( 'Create data error!' ).
        LEAVE PROGRAM.
    ENDTRY.
    descr\_ref1 = cl\_abap\_typedescr=>describe\_by\_data( <data1> ).
    descr\_ref2 = cl\_abap\_typedescr=>describe\_by\_data( <data2> ).
    TRY.
        IF descr\_ref1 <> descr\_ref2.
          RAISE EXCEPTION TYPE conv\_exc.
        ELSE.
          <data2> = <data1>.
        ENDIF.
      CATCH conv\_exc.
        cl\_demo\_output=>display(
          \`Assignment from type \`    &&
          descr\_ref2->absolute\_name  &&
          \` to \`                     &&
          descr\_ref1->absolute\_name  &&
          \` not allowed!\` ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example expands on the [executable example](javascript:call_link\('abendescribe_field_abexa.htm'\)) for DESCRIBE FIELD, where the correct way to check any data type is described.

When complex types, such as SCARR and SPFLI, are entered in the input fields, the RTTI determines the full [absolute type name](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry").