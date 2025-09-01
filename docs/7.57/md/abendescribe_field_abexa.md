  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Attributes of Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendescribe_field.htm) →  [DESCRIBE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdescribe.htm) →  [DESCRIBE FIELD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdescribe_field.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Determining Elementary Data Types, ABENDESCRIBE_FIELD_ABEXA, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Determining Elementary Data Types

This example demonstrates how the properties of elementary data types can be determined at runtime.

Source Code   

REPORT  demo\_describe\_field.
CLASS conv\_exc DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: dref1 TYPE REF TO data,
          dref2 TYPE REF TO data.
    DATA: tdescr1 TYPE c LENGTH 1,
          tdescr2 TYPE c LENGTH 1.
    DATA:  type1 TYPE c LENGTH 30 VALUE 'I',
           type2 TYPE c LENGTH 30 VALUE 'C'.
    cl\_demo\_input=>add\_field( CHANGING field = type1 ).
    cl\_demo\_input=>request(   CHANGING field = type2 ).
    TRY.
        CREATE DATA: dref1 TYPE (type1),
                     dref2 TYPE (type2).
      CATCH cx\_sy\_create\_data\_error.
        cl\_demo\_output=>display( 'Create data error!' ).
        LEAVE PROGRAM.
    ENDTRY.
    DESCRIBE FIELD: dref1->\* TYPE tdescr1,
                    dref2->\* TYPE tdescr2.
    TRY.
        IF tdescr1 <> tdescr2.
          RAISE EXCEPTION TYPE conv\_exc.
        ELSE.
          dref2->\* = dref1->\*.
        ENDIF.
      CATCH conv\_exc.
        cl\_demo\_output=>display( \`Assignment from type \` &&
                                 tdescr2                 &&
                                 \` to \`                  &&
                                 tdescr1                 &&
                                 \` not allowed!\` ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

This example implements a type check that only allows assignments if the source and target fields have the same type.

Using the two input fields type1 and type2, the names of elementary data types are entered. Next, an attempt is made to create anonymous data objects of the types specified dynamically using the CREATE DATA statement. If this does not work, an error message is displayed.

The statement DESCRIBE FIELD determines the type of the data objects created dynamically. Only if both data objects have the same type dereferenced is dref2->\* assigned to dereferenced dref1->\*.

The example does not work if complex data types such as SCARR and SPFLI are entered in the input fields. In this case DESCRIBE FIELD, determines the same types ("u"), which can cause runtime errors if the structures are not convertible to each other.

The [RTTS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrtti.htm) methods can be used to check complex data types and object types at runtime.