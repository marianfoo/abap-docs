  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Attributes of Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendescribe_field.htm) →  [DESCRIBE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdescribe.htm) →  [DESCRIBE FIELD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdescribe_field.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Determining%20Elementary%20Data%20Types%2C%20ABENDESCRIBE_FIELD_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Determining Elementary Data Types

This example demonstrates how the properties of elementary data types can be determined at runtime.

Source Code   

\* CCDEF
CLASS conv\_exc DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
\* Public class definition
CLASS cl\_demo\_describe\_field DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_describe\_field IMPLEMENTATION.
  METHOD main.
    DATA: dref1 TYPE REF TO data,
          dref2 TYPE REF TO data.
    DATA: tdescr1 TYPE c LENGTH 1,
          tdescr2 TYPE c LENGTH 1.
    DATA: type1 TYPE c LENGTH 30 VALUE 'I',
          type2 TYPE c LENGTH 30 VALUE 'C'.
    cl\_demo\_input=>new( )->add\_field( CHANGING field = type1
     )->request( CHANGING field = type2 ).
    TRY.
        CREATE DATA: dref1 TYPE (type1),
                     dref2 TYPE (type2).
      CATCH cx\_sy\_create\_data\_error.
        out->write( 'Create data error!' ).
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
        out->write( \`Assignment from type \` &&
                                 tdescr2                 &&
                                 \` to \`                  &&
                                 tdescr1                 &&
                                 \` not allowed!\` ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

This example implements a type check that only allows assignments if the source and target fields have the same type.

Using the two input fields type1 and type2, the names of elementary data types are entered. Next, an attempt is made to create anonymous data objects of the types specified dynamically using the CREATE DATA statement. If this does not work, an error message is displayed.

The statement DESCRIBE FIELD determines the type of the data objects created dynamically. Only if both data objects have the same type dereferenced is dref2->\* assigned to dereferenced dref1->\*.

The example does not work if complex data types such as SCARR and SPFLI are entered in the input fields. In this case DESCRIBE FIELD, determines the same types (u), which can cause runtime errors if the structures are not convertible to each other.

The [RTTS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrtti.htm) methods can be used to check complex data types and object types at runtime.