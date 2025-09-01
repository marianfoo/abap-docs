  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Attributes of Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendescribe_field.htm) →  [DESCRIBE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdescribe.htm) →  [DESCRIBE FIELD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdescribe_field.htm) → 

Determining Elementary Data Types

This example demonstrates how the attributes of elementary data types can be determined at runtime.

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
    FIELD-SYMBOLS: <data1> TYPE any,
                   <data2> TYPE any.
    DATA: tdescr1 TYPE c LENGTH 1,
          tdescr2 TYPE c LENGTH 1.
    DATA:  type1 TYPE c LENGTH 30 VALUE 'I',
           type2 TYPE c LENGTH 30 VALUE 'C'.
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
    DESCRIBE FIELD: <data1> TYPE tdescr1,
                    <data2> TYPE tdescr2.
    TRY.
        IF tdescr1 <> tdescr2.
          RAISE EXCEPTION TYPE conv\_exc.
        ELSE.
          <data2> = <data1>.
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

This example implements a type check that only allows assignments to be made if the source and target fields have the same type.

Using the two input fields type1 and type2, the names of elementary data types are entered. First an attempt is made, using the statement CREATE DATA, to create anonymous data objects of the types specified dynamically. If this does not work, an error message is displayed.

The new data objects are assigned to field symbols <data1> and <data2>. Then, the statement DESCRIBE FIELD determines the type of the data objects created dynamically. Only if both data objects have the same type is <data1> assigned to <data2>.

The example does not work if complex data types such as SCARR and SPFLI are entered in the input fields. In this case DESCRIBE FIELD, determines the same types ("u"), which can cause runtime errors if the structures are not convertible.

The [RTTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrtti.htm) methods can be used to check complex data types and object types at runtime.